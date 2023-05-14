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

export const directory = join(process.cwd(), "app/podcast/content");

// PodcastMeta is a type that represents the podcast markdown frontmatter
export type PodcastMeta = {
    slug: string;
    title: string;
    who: string;
    whoLink: string;
    role: string;
    org: string;
    orgLink: string;
    what: string;
    season: number;
    episode: number;
    date: string;
    duration: string;
    episodeURL: string;
    summary: string;
    metaDescription: string;
    topImg1Src: string;
    topImg1Alt: string;
    topImg2Src: string;
    topImg2Alt: string;
    ogImg: string;
    twitterCard: string;
    authorName: string;
    authorURL: string;
    authorImg: string;
    authorBio: string;
};

// Loads a specific episode based on the slug, which should match the filename
// (minus the .mdx extension)
export const getItem = cache(async (slug: string) => {
    console.debug("Podcasts getItem: %s", slug);

    const realSlug = slug.replace(/\.mdx$/, "");

    // Get content and meta
    const fullPath = join(directory, `${realSlug}.mdx`);
    if (!fs.existsSync(fullPath)) {
        console.error(`Item not found: ${fullPath}`);
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents); // Extracts the frontmatter and content

    // Map podcast meta
    let meta: PodcastMeta = {
        slug: realSlug,
        title: data.title || "",
        who: data.who || "",
        whoLink: data.whoLink || "",
        role: data.role || "",
        org: data.org || "",
        orgLink: data.orgLink || "",
        what: data.what || "",
        season: data.season || 0,
        episode: data.episode || 0,
        date: data.date || new Date(),
        duration: data.duration || "",
        episodeURL: data.episodeURL || "",
        summary: data.summary || "",
        metaDescription: data.metaDescription || "",
        topImg1Src: data.topImg1Src || "",
        topImg1Alt: data.topImg1Alt || "",
        topImg2Src: data.topImg2Src || "",
        topImg2Alt: data.topImg2Alt || "",
        ogImg: data.ogImg || "",
        twitterCard: data.twitterCard || "",
        authorName: data.authorname || "",
        authorURL: data.authorURL || "",
        authorImg: data.authorImg || "",
        authorBio: data.authorBio || "",
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
    console.debug("Podcasts getItems");

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

        // Map podcast meta
        let meta: PodcastMeta = {
            slug: realSlug,
            title: data.title || "",
            who: data.who || "",
            whoLink: data.whoLink || "",
            role: data.role || "",
            org: data.org || "",
            orgLink: data.orgLink || "",
            what: data.what || "",
            season: data.season || 0,
            episode: data.episode || 0,
            date: data.date || new Date(),
            duration: data.duration || "",
            episodeURL: data.episodeURL || "",
            summary: data.summary || "",
            metaDescription: data.metaDescription || "",
            topImg1Src: data.topImg1Src || "",
            topImg1Alt: data.topImg1Alt || "",
            topImg2Src: data.topImg2Src || "",
            topImg2Alt: data.topImg2Alt || "",
            ogImg: data.ogImg || "",
            twitterCard: data.twitterCard || "",
            authorName: data.authorname || "",
            authorURL: data.authorURL || "",
            authorImg: data.authorImg || "",
            authorBio: data.authorBio || "",
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
