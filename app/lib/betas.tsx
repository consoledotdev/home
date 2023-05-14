import { Client, isFullPage, iteratePaginatedAPI } from "@notionhq/client";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { cache } from "react";
import "server-only";

dotenv.config();

if (!process.env.NOTION_KEY) {
    console.error("NOTION_KEY empty");
    process.exit(1);
}

export const preloadItems = () => {
    void getItems();
};

export const preloadLatestItems = () => {
    void getLatestItems();
};

// Initializing a client
const notion = new Client({
    auth: process.env.NOTION_KEY,
    // Override notion node-fetch with global fetch so it can be cached
    fetch: fetch,
});

// https://www.notion.so/consoledotdev/15f9c7f3263b453caab4e276a50d93dd
const databaseId = "15f9c7f3263b453caab4e276a50d93dd";

export type Beta = {
    id: string;
    name: string;
    url: string;
    favicon: string;
    announced: Date | string;
    newsletter: Date | string | null;
    date: Date | string;
    ga: Date | string;
    gaUrl: string;
    description: string;
    sponsored: boolean;
    investment: boolean;
    type: {
        label: string;
        slug: string;
    };
    category: {
        main: {
            label: string;
            slug: string;
        };
    };
    access: string;
    filterTaxonomy: string;
};

async function createItem(id: string, properties: any) {
    // Create a dummy beta to fill out
    let item: Beta = {
        id: "",
        name: "",
        announced: new Date(),
        newsletter: null,
        date: new Date(),
        ga: "",
        gaUrl: "",
        url: "",
        favicon: "",
        description: "",
        sponsored: false,
        investment: false,
        type: {
            label: "Open Source",
            slug: "open-source",
        },
        category: {
            main: {
                label: "Developer Tools",
                slug: "developer-tools",
            },
        },
        access: "",
        filterTaxonomy: "",
    };

    // ID
    item.id = id;

    // Name
    const name = properties.Name;

    if (name.type == "title" && name.title.length > 0) {
        item.name = name.title[0].plain_text;
    } else {
        console.warn("Beta without name: %s", id);
        return;
    }

    // Announced
    const announced = properties.Announced;

    if (announced.type == "date" && announced.date) {
        item.announced = new Date(announced.date.start);
        // serialize: https://beta.nextjs.org/docs/rendering/server-and-client-components#passing-props-from-server-to-client-components-serialization
        item.announced = item.announced.toString();
    }

    // Newsletter
    const newsletter = properties.Newsletter;

    if (newsletter.type == "date" && newsletter.date) {
        item.newsletter = new Date(newsletter.date.start);
        // serialize: https://beta.nextjs.org/docs/rendering/server-and-client-components#passing-props-from-server-to-client-components-serialization
        item.newsletter = item.newsletter.toString();
    }

    // GA
    const ga = properties.GA;

    if (ga.type == "date" && ga.date) {
        item.ga = new Date(ga.date.start);
        // serialize: https://beta.nextjs.org/docs/rendering/server-and-client-components#passing-props-from-server-to-client-components-serialization
        item.ga = item.ga.toString();

        const gaurl = properties.GAURL;

        if (gaurl.type == "url" && gaurl.url) {
            item.gaUrl = gaurl.url;
        }
    }

    // Date - For display sorting/filtering.
    item.date = item.announced;
    if (item.ga) item.date = item.ga;

    // URL
    const url = properties.URL;

    if (url.type == "url" && url.url) {
        item.url = url.url;
    }

    // Type
    const type = properties.Type;

    if (type.type == "select" && type.select) {
        const typeString = type.select.name;

        item.type.label = typeString;
        item.type.slug = typeString.replace(/\s+/g, "-").toLowerCase();
    }

    // Category
    const category = properties.Category;

    if (category.type == "select" && category.select) {
        const categoryString = category.select.name;

        item.category.main.label = categoryString;
        item.category.main.slug = categoryString.replace(/\s+/g, "-").toLowerCase();

        // Create the filter taxonomy from the category and type, with spaces
        // replaced by dashes and the string in lowercase
        let filterTaxonomy = item.category.main.slug;
        filterTaxonomy += " " + item.type.slug;
        item.filterTaxonomy = filterTaxonomy;
    } else {
        console.warn("Skipping beta without category: %s", item.name);
        return;
    }

    // Access
    const access = properties.Access;

    if (access.type == "select" && access.select) {
        const accessString = access.select.name;

        item.access = accessString;
    }

    // Favicon
    try {
        const urlParts = new URL(item.url);
        const faviconPath = "favicons/" + urlParts.hostname;
        const localFaviconPath = path.join(process.cwd(), "public/img", faviconPath);
        //console.log("Beta favicon path: %s", localFaviconPath);

        const fileExtensions = [".png", ".svg", ".jpg", ".jpeg"];

        // Loop through the different favicon types and check if they exist
        for (const extension of fileExtensions) {
            if (fs.existsSync(localFaviconPath + extension)) {
                item.favicon = faviconPath + extension;
                //console.log("Beta favicon found: %s", item.favicon);
                break;
            }
        }

        if (!item.favicon || item.favicon.length == 0) {
            console.warn("Beta favicon not found: %s", item.favicon);
        }
    } catch (error) {
        console.error("Beta favicon error %s", item.url);
    }

    // Description
    const description = properties.Description;

    if (description.type == "rich_text" && description.rich_text.length > 0) {
        item.description = description.rich_text[0].plain_text;
    }

    // Sponsored
    const sponsored = properties.Sponsored;

    if (sponsored.type == "checkbox" && sponsored.checkbox) {
        item.sponsored = sponsored.checkbox;
    }

    // Investment
    const investment = properties.Investment;

    if (investment.type == "checkbox" && investment.checkbox) {
        item.investment = investment.checkbox;
    }

    return item;
}

export const getItems = cache(async () => {
    console.debug("Betas getItems");
    let items = [];

    // Filter out betas that went GA more than three months ago
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

    try {
        for await (const page of iteratePaginatedAPI(notion.databases.query, {
            database_id: databaseId,
            filter: {
                or: [
                    {
                        property: "GA",
                        date: {
                            is_empty: true,
                        },
                    },
                    {
                        property: "GA",
                        date: {
                            after: threeMonthsAgo.toISOString(),
                        },
                    },
                ],
            },
        })) {
            if (!isFullPage(page)) {
                continue;
            }

            const { properties } = page;

            const item = await createItem(page.id, properties);

            if (item) {
                items.push(item);
            }
        }

        return items;
    } catch (error) {
        console.error("Betas getItems error: ", error);
    }
});

export const getLatestItems = cache(async () => {
    console.debug("Betas getLatestItems");
    let items = [];

    const xDaysAgo = new Date();
    xDaysAgo.setDate(xDaysAgo.getDate() - 7);

    try {
        for await (const page of iteratePaginatedAPI(notion.databases.query, {
            database_id: databaseId,
            filter: {
                and: [
                    {
                        property: "Newsletter",
                        date: {
                            before: new Date().toISOString(),
                        },
                    },
                    {
                        property: "Newsletter",
                        date: {
                            after: xDaysAgo.toISOString(),
                        },
                    },
                ],
            },
        })) {
            if (!isFullPage(page)) {
                continue;
            }

            const { properties } = page;

            const item = await createItem(page.id, properties);

            if (item) {
                items.push(item);
            }
        }

        return items;
    } catch (error) {
        console.error("Betas getLatestItems error: ", error);
    }
});

async function textFetcher(url: string): Promise<string> {
    return await fetch(resolveUrl(url)).then((res) => res.text());
}

async function bufferFetcher(url: string): Promise<ArrayBuffer> {
    return await fetch(resolveUrl(url)).then((res) => res.arrayBuffer());
}

function resolveUrl(url: string): URL {
    return new URL(url);
}
