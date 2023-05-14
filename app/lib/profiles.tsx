import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { cache } from "react";
import "server-only";

export const directory = join(process.cwd(), "app/profiles/content");

export const preloadItem = (slug: string) => {
    void getItem(slug);
};

export const preloadItems = () => {
    void getItems();
};

// ProfileMeta is a type that represents the company profile markdown frontmatter
export type ProfileMeta = {
    slug: string;
    title: string;
    date: string;
    summary: string;
    metaTitle: string;
    metaDescription: string;
    interview: string;
    podcast: string;
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
    type: {
        label: string;
        slug: string;
    };
    techStack: {
        label: string;
        slug: string;
    }[];
    companyInfo: {
        favicon: string;
        url: string;
        jobsUrl: string;
        description: string;
        product: {
            name: string;
            description: string;
        };
        techStack: string[];
        meta: {
            label: string;
            value: any;
        }[];
        type: string;
        category: string;
        topCategory: string;
        subCategory: string;
        filterTaxonomy: string;
        images?: { url: string }[];
        customerCaseStudies: { client: string; text: string }[];
    };
};

// Creates a specific item based on the slug, which should match the filename
// (minus the .mdx extension)
async function createItem(slug: string) {
    const realSlug = slug.replace(/\.mdx$/, "");

    // Get content and meta
    const fullPath = join(directory, `${realSlug}.mdx`);
    if (!fs.existsSync(fullPath)) {
        console.error(`Item not found: ${fullPath}`);
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents); // Extracts the frontmatter and content

    let meta: ProfileMeta = {
        slug: realSlug,
        date: data.date || new Date(),
        title: data.title || "",
        summary: data.summary || "",
        metaTitle: data.metaTitle || "",
        metaDescription: data.metaDescription || "",
        interview: data.interview || "",
        podcast: data.podcast || "",
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
        type: {
            label: "",
            slug: "",
        },
        techStack: [],
        companyInfo: {
            favicon: data.companyInfo.favicon || "",
            url: data.companyInfo.URL || "",
            jobsUrl: data.companyInfo.jobsURL || "",
            description: data.companyInfo.description || "",
            product: {
                name: data.companyInfo.product.name || "",
                description: data.companyInfo.product.description || "",
            },
            techStack: data.companyInfo.techStack || [],
            meta: data.companyInfo.meta || [],
            type: data.companyInfo.type || "",
            category: data.companyInfo.category || "",
            topCategory: data.companyInfo.topCategory || "",
            subCategory: data.companyInfo.subCategory || "",
            filterTaxonomy: data.companyInfo.filterTaxonomy || "",
            images: data.companyInfo.images || [],
            customerCaseStudies: data.companyInfo.customerCaseStudies || [],
        },
    };

    // https://beta.nextjs.org/docs/rendering/server-and-client-components#passing-props-from-server-to-client-components-serialization
    meta.date = JSON.parse(JSON.stringify(meta.date));

    // Category
    const category = data.companyInfo.category;

    if (category) {
        // Split the category string into top and sub category by the first dash
        const categorySplit = category.split(" - ");

        meta.category.main.label = categorySplit[0];
        meta.category.main.slug = categorySplit[0].replace(/\s+/g, "-").toLowerCase();

        meta.category.sub.label = categorySplit[1];
        meta.category.sub.slug = categorySplit[1].replace(/\s+/g, "-").toLowerCase();
    }

    // Type
    const type = data.companyInfo.type;

    if (type) {
        meta.type.label = type;
        meta.type.slug = type.replace(/\s+/g, "-").toLowerCase();

        meta.type.label = type;
        meta.type.slug = type.replace(/\s+/g, "-").toLowerCase();
    }

    // Tech Stack
    const techStack = data.companyInfo.techStack;

    if (techStack) {
        let items = [];
        for (const t of techStack) {
            let slug = t.replace(/\s+/g, "-").toLowerCase();
            items.push({ label: t, slug: slug });
        }
        meta.techStack = items;
    }

    // Get highlights content
    let highlights = "";
    const highlightsFullPath = join(directory, "/highlights", `${realSlug}.mdx`);
    if (!fs.existsSync(highlightsFullPath)) {
        console.error(`Item highlights not found: ${highlightsFullPath}`);
    } else {
        const highlightsFileContents = fs.readFileSync(highlightsFullPath, "utf8");
        const { content } = matter(highlightsFileContents); // Extracts the frontmatter and content
        highlights = content;
    }

    return { meta: meta, content, highlights };
}

export const getItem = cache(async (slug: string) => {
    console.debug("Profiles  getItem: %s", slug);

    return createItem(slug);
});

export const getItems = cache(async () => {
    console.debug("Profiles getItems");

    let items = [];

    let dirents = fs.readdirSync(directory, { withFileTypes: true });
    let itemNames = dirents.filter((dirent) => dirent.isFile()).map((dirent) => dirent.name);

    for (const filename of itemNames) {
        const item = await createItem(filename);

        if (item.meta.title != "") {
            items.push(item);
        } else {
            console.warn("Skipping item without title: %s", item.meta.slug);
        }
    }

    return items;
});
