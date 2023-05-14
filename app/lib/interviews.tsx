import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { cache } from "react";
import "server-only";

export const preloadItem = (slug: string) => {
    void getItem(slug);
};

export const preloadItems = () => {
    void getItems();
};

export const directory = join(process.cwd(), "app/interviews/content");

// InterviewMeta is a type that represents the interviews markdown frontmatter
export type InterviewMeta = {
    slug: string;
    title: string;
    who: string;
    role: string;
    org: string;
    what: string;
    tags: string[];
    date: string;
    summary: string;
    topImg1Src: string;
    topImg1Alt: string;
    topImg2Src: string;
    topImg2Alt: string;
    ogImg: string;
};

// Loads a specific item based on the slug, which should match the filename
// (minus the .mdx extension)
export const getItem = cache(async (slug: string) => {
    console.debug("Interviews getItem: %s", slug);

    const realSlug = slug.replace(/\.mdx$/, "");

    // Get content and meta
    const fullPath = join(directory, `${realSlug}.mdx`);
    if (!fs.existsSync(fullPath)) {
        console.error(`Item not found: ${fullPath}`);
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents); // Extracts the frontmatter and content

    // Map interview meta
    let meta: InterviewMeta = {
        slug: realSlug,
        title: data.title || "",
        who: data.who || "",
        role: data.role || "",
        org: data.org || "",
        what: data.what || "",
        tags: data.tags || "",
        date: data.date || new Date(),
        summary: data.summary || "",
        topImg1Src: data.topImg1Src || "",
        topImg1Alt: data.topImg1Alt || "",
        topImg2Src: data.topImg2Src || "",
        topImg2Alt: data.topImg2Alt || "",
        ogImg: data.ogImg || "",
    };

    // https://beta.nextjs.org/docs/rendering/server-and-client-components#passing-props-from-server-to-client-components-serialization
    meta.date = JSON.parse(JSON.stringify(meta.date));

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
});

export const getItems = cache(async () => {
    console.debug("Interviews getItems");

    let items = [];

    let dirents = fs.readdirSync(directory, { withFileTypes: true });
    let itemNames = dirents.filter((dirent) => dirent.isFile()).map((dirent) => dirent.name);

    for (const filename of itemNames) {
        const realSlug = filename.replace(/\.mdx$/, "");

        // Get content and meta
        const fullPath = join(directory, `${realSlug}.mdx`);
        if (!fs.existsSync(fullPath)) {
            console.error(`Item not found: ${fullPath}`);
        }

        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents); // Extracts the frontmatter and content

        // Map interview meta
        let meta: InterviewMeta = {
            slug: realSlug,
            title: data.title || "",
            who: data.who || "",
            role: data.role || "",
            org: data.org || "",
            what: data.what || "",
            tags: data.tags || "",
            date: data.date || new Date(),
            summary: data.summary || "",
            topImg1Src: data.topImg1Src || "",
            topImg1Alt: data.topImg1Alt || "",
            topImg2Src: data.topImg2Src || "",
            topImg2Alt: data.topImg2Alt || "",
            ogImg: data.ogImg || "",
        };

        // https://beta.nextjs.org/docs/rendering/server-and-client-components#passing-props-from-server-to-client-components-serialization
        meta.date = JSON.parse(JSON.stringify(meta.date));

        if (meta.title != "") {
            items.push({ meta: meta, content });
        } else {
            console.warn("Skipping item without title: %s", meta.slug);
        }
    }

    return items;
});
