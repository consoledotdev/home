import { directory, getItem, getItems } from "@/app/lib/podcasts";
import fs from "fs";
import type { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";
import ClientPage from "./client-page";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { meta, content } = await getItem(params.slug);

    const title = "Console devtools podcast with " + meta.who;
    const ogTitle = meta.title + " with " + meta.who + " on the Console devtools podcast";
    const description = meta.summary;

    const publishedTime = new Date(meta.date).toISOString();

    return {
        title,
        description,
        openGraph: {
            title: ogTitle,
            description,
            type: "article",
            authors: ["Console"],
            publishedTime,
            url: "https://console.dev/podcast/" + params.slug,
        },
        twitter: {
            card: "player",
            title: ogTitle,
            description,
            images: [
                {
                    url: "https://console.dev/img/card-default.png",
                    width: 1200,
                    height: 600,
                    alt: ogTitle,
                },
            ],
            players: [
                {
                    playerUrl: meta.twitterCard,
                    streamUrl: meta.episodeURL,
                    width: 200,
                    height: 200,
                },
            ],
        },
    };
}

// Defines the list of route segments that will be generated at build time.
// https://beta.nextjs.org/docs/data-fetching/generating-static-params
export async function generateStaticParams() {
    let dirents = fs.readdirSync(directory, { withFileTypes: true });
    let items = dirents.filter((dirent) => dirent.isFile()).map((dirent) => dirent.name);

    // Return a list of slugs
    return items.map((filename) => ({
        slug: filename.replace(/\.mdx$/, ""),
    }));
}

export default async function Page({ params }: { params: { slug: string } }) {
    // The main page podcast
    const { meta, content } = await getItem(params.slug);

    if (!meta) {
        notFound();
    }

    const podcast = {
        meta: meta,
        content: await serialize(content),
    };

    // All other podcasts
    let items = await getItems();

    if (!items) items = [];

    const filteredItems = items.filter((item) => item.meta.season == podcast.meta.season);

    const sortedItems = filteredItems
        .sort(function (itemA: any, itemB: any) {
            return new Date(itemA.meta.date).getTime() - new Date(itemB.meta.date).getTime();
        })
        .reverse();

    const serializedItems = [];
    for (const item of sortedItems) {
        const serializedContent = await serialize(item.content);
        serializedItems.push({
            meta: item.meta,
            content: serializedContent,
        });
    }

    return <ClientPage podcast={podcast} allPodcasts={serializedItems} />;
}
