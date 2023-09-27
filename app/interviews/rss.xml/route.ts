import { getItems } from "@/app/lib/interviews";
import { NextResponse } from "next/server";
import rss from "rss";

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 86400; // 24 hours

export async function GET() {
    const feed = new rss({
        title: "Console - Developer interviews",
        description: "A series of interviews with the developers behind the tools we feature in the Console newsletter.",
        feed_url: "https://console.dev/interviews/rss.xml",
        site_url: "https://console.dev",
        image_url: "https://console.dev/favicon.png",
        webMaster: "hello@console.dev (Console)",
        ttl: 1440,
        language: "en",
        pubDate: new Date(),
    });

    const items = await getItems();

    if (!items) {
        return NextResponse.json({ message: "Unable to generate RSS." }, { status: 500 });
    }

    const sortedItems = items
        .sort(function (itemA: any, itemB: any) {
            return new Date(itemA.meta.date).getTime() - new Date(itemB.meta.date).getTime();
        })
        .reverse();

    // Limit to 20 items
    sortedItems.slice(0, 20).forEach((item: any) => {
        feed.item({
            title: item.meta.title,
            description: `${item.meta.summary} - ${item.meta.what}`,
            url: `https://console.dev/interviews/${item.meta.slug}`,
            guid: item.meta.slug,
            date: item.meta.date,
        });
    });

    const response = new Response(feed.xml());
    response.headers.set("Content-Type", "application/rss+xml ");
    return response;
}
