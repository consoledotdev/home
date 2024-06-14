import { Client, isFullPage } from "@notionhq/client";
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

export const preloadItem = (slug: string) => {
    void getItem(slug);
};

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

// https://www.notion.so/consoledotdev/0c1974fd98c34abe91fdebb72260bb63
const databaseId = "0c1974fd98c34abe91fdebb72260bb63";

export type Tool = {
    id: string;
    name: string;
    slug: string;
    url: string;
    twitter: string;
    favicon: string;
    newsletter: Date | string;
    date: Date | string;
    description: string;
    sponsored: boolean;
    investment: boolean;
    like: string;
    dislike: string;
    interview: string;
    type: {
        label: string;
        slug: string;
    };
    category: {
        main: {
            label: string;
            slug: string;
        };
        sub: {
            label: string;
            slug: string;
        };
    };
    filterTaxonomy: string;
    screenshot: string;
    podcast: string;
    profile: string;
};

async function createItem(id: string, properties: any) {
    let item: Tool = {
        id: "",
        name: "",
        slug: "",
        newsletter: new Date(),
        date: new Date(),
        url: "",
        twitter: "",
        favicon: "",
        description: "",
        sponsored: false,
        investment: false,
        interview: "",
        type: {
            label: "Open Source",
            slug: "open-source",
        },
        category: {
            main: {
                label: "",
                slug: "",
            },
            sub: {
                label: "",
                slug: "",
            },
        },
        filterTaxonomy: "",
        like: "",
        dislike: "",
        screenshot: "",
        podcast: "",
        profile: "",
    };

    // ID
    item.id = id;

    // Name
    const name = properties.Name;

    if (name.type == "title" && name.title.length > 0) {
        item.name = name.title[0].plain_text;
    } else {
        console.warn("Tool without name: %s", id);
        return;
    }

    // Slug
    const slug = properties.Slug;

    if (slug.type == "rich_text" && slug.rich_text.length > 0) {
        item.slug = slug.rich_text[0].plain_text;
    } else {
        console.warn("Tool without slug: %s", item.name);
        return;
    }

    // Newsletter
    const newsletter = properties.Newsletter;

    if (newsletter.type == "date" && newsletter.date) {
        item.newsletter = new Date(newsletter.date.start);
        // serialize: https://beta.nextjs.org/docs/rendering/server-and-client-components#passing-props-from-server-to-client-components-serialization
        item.newsletter = item.newsletter.toString();
    }

    if (!item.date) {
        console.warn("Tool without date: %s", item.name);
        return;
    }

    // Date - For display sorting/filtering.
    item.date = item.newsletter;

    // Twitter
    const twitter = properties.Twitter;

    if (twitter.type == "url" && twitter.url) {
        item.twitter = twitter.url;
    }

    // Category
    const category = properties.Category;

    if (category.type == "select" && category.select) {
        const categoryString = category.select.name;

        // Split the category string into top and sub category by the first dash
        const categorySplit = categoryString.split(" - ");

        item.category.main.label = categorySplit[0];
        item.category.main.slug = categorySplit[0].replace(/\s+/g, "-").toLowerCase();

        item.category.sub.label = categorySplit[1];
        item.category.sub.slug = categorySplit[1].replace(/\s+/g, "-").toLowerCase();

        // Create the filter taxonomy from the category and type, with spaces
        // replaced by dashes and the string in lowercase
        let filterTaxonomy = item.category.main.slug;
        filterTaxonomy += " " + item.type.slug;
        item.filterTaxonomy = filterTaxonomy;
    } else {
        console.warn("Skipping tool without category: %s", item.name);
        return;
    }

    // URL
    const url = properties.URL;

    if (url.type == "url" && url.url) {
        item.url = url.url;
    }

    // Favicon
    try {
        const urlParts = new URL(item.url);
        const faviconPath = "favicons/" + urlParts.hostname;
        const localFaviconPath = path.join(process.cwd(), "public/img", faviconPath);
        //console.log("Tool favicon %s path: %s", item.slug, localFaviconPath);

        const fileExtensions = [".png", ".svg", ".jpg", ".jpeg"];

        // Loop through the different favicon types and check if they exist
        for (const extension of fileExtensions) {
            if (fs.existsSync(localFaviconPath + extension)) {
                item.favicon = faviconPath + extension;
                //console.log("Tool favicon found: %s %s", item.slug, item.favicon);
                break;
            }
        }

        if (!item.favicon || item.favicon.length == 0) {
            console.warn("Tool favicon not found: %s %s", item.slug, item.favicon);
        }
    } catch (error) {
        console.error("Tool favicon error %s %s", item.slug, item.url);
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

    // Like
    const like = properties.Like;

    if (like.type == "rich_text" && like.rich_text.length > 0) {
        item.like = like.rich_text[0].plain_text;
    }

    // Dislike
    const dislike = properties.Dislike;

    if (dislike.type == "rich_text" && dislike.rich_text.length > 0) {
        item.dislike = dislike.rich_text[0].plain_text;
    }

    // Interview URL
    const interview = properties.Interview;

    if (interview.type == "url" && interview.url) {
        item.interview = interview.url;
    }

    if (interview.type == "rich_text" && interview.rich_text.length > 0) {
        item.interview = interview.rich_text[0].plain_text;
    }

    // Podcast slug
    const podcast = properties.Podcast;

    if (podcast.type == "rich_text" && podcast.rich_text.length > 0) {
        item.podcast = podcast.rich_text[0].plain_text;
    }

    // Profile slug
    const profile = properties.Profile;

    if (profile.type == "rich_text" && profile.rich_text.length > 0) {
        item.profile = profile.rich_text[0].plain_text;
    }

    return item;
}

export const getItem = cache(async (slug: string) => {
    console.debug("Tools getItem: %s", slug);

    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: "Slug",
                rich_text: {
                    equals: slug,
                },
            },
        });

        if (response.results.length == 0) {
            console.error("Item not found");
            return null;
        }

        for (const page of response.results) {
            if (!isFullPage(page)) {
                continue;
            }

            const { properties } = page;

            const item = await createItem(page.id, properties);

            if (item) {
                return item;
            } else {
                return null;
            }
        }
    } catch (error) {
        console.error("Tools getItem error: ", error);
        return null;
    }
});

export const getItems = cache(async () => {
    console.debug("Tools getItems");

    let items = [];

    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                and: [
                    { property: "Slug", rich_text: { is_not_empty: true } },
                    {
                        property: "Status",
                        status: {
                            equals: "Selected",
                        },
                    },
                    {
                        property: "Newsletter",
                        date: {
                            before: new Date().toISOString(),
                        },
                    },
                ],
            },
            sorts: [
                { property: "Newsletter", direction: "descending" },
                { property: "Position", direction: "descending" },
            ],
        });

        // Loop through each response and create object
        for (const page of response.results) {
            if (!isFullPage(page)) {
                continue;
            }

            const { properties } = page;

            const item = await createItem(page.id, properties);

            if (item && item.slug != "") {
                items.push(item);
            }
        }

        return items;
    } catch (error) {
        console.error("Tools getItems error: ", error);
    }
});

export const getLatestItems = cache(async () => {
    console.debug("Tools getLatestItems");

    let items = [];

    const xDaysAgo = new Date();
    xDaysAgo.setDate(xDaysAgo.getDate() - 7);

    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                and: [
                    {
                        property: "Status",
                        status: {
                            equals: "Selected",
                        },
                    },
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
            sorts: [
                { property: "Newsletter", direction: "descending" },
                { property: "Position", direction: "descending" },
            ],
        });

        // Loop through each response and create object
        for (const page of response.results) {
            if (!isFullPage(page)) {
                continue;
            }

            const { properties } = page;

            const item = await createItem(page.id, properties);

            if (item && item.slug != "") {
                items.push(item);
            }
        }

        return items;
    } catch (error) {
        console.error("Tools error: " + error);
    }
});

export const getNextItems = cache(async () => {
    console.debug("Tools getNextItems");

    let items = [];

    const xDaysAgo = new Date();
    xDaysAgo.setDate(xDaysAgo.getDate() + 7);

    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                and: [
                    {
                        property: "Status",
                        status: {
                            equals: "Selected",
                        },
                    },
                    {
                        property: "Newsletter",
                        date: {
                            after: new Date().toISOString(),
                        },
                    },
                    {
                        property: "Newsletter",
                        date: {
                            before: xDaysAgo.toISOString(),
                        },
                    },
                ],
            },
            sorts: [
                { property: "Newsletter", direction: "descending" },
                { property: "Position", direction: "descending" },
            ],
        });

        // Loop through each response and create object
        for (const page of response.results) {
            if (!isFullPage(page)) {
                continue;
            }

            const { properties } = page;

            const item = await createItem(page.id, properties);

            if (item && item.slug != "") {
                items.push(item);
            }
        }

        return items;
    } catch (error) {
        console.error("Tools error: " + error);
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
