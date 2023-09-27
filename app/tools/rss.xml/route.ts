import { getItems } from "@/app/lib/tools";
import { NextResponse } from "next/server";
import rss from "rss";

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 3600; // 1 hour

export async function GET() {
    const feed = new rss({
        title: "Console - Interesting developer tools",
        description: "Each week Console reviews the best tools for developers.",
        feed_url: "https://console.dev/tools/rss.xml",
        site_url: "https://console.dev",
        image_url: "https://console.dev/favicon.png",
        webMaster: "hello@console.dev (Console)",
        ttl: 60,
        language: "en",
        pubDate: new Date(),
    });

    const items = await getItems();

    if (!items) {
        return NextResponse.json({ message: "Unable to generate RSS." }, { status: 500 });
    }

    const sortedItems = items
        .sort(function (itemA: any, itemB: any) {
            return new Date(itemA.date).getTime() - new Date(itemB.date).getTime();
        })
        .reverse();

    // Limit to 20 items
    sortedItems.slice(0, 20).forEach((item: any) => {
        var content = `<p><strong>Description:</strong> ${item.description}</p>`;
        content += `<p><strong>What we like:</strong> ${item.like}</p>`;
        content += `<p><strong>What we dislike:</strong> ${item.dislike}</p>`;

        feed.item({
            title: item.name,
            description: content,
            url: `https://console.dev/tools/${item.slug}`,
            guid: item.slug,
            date: item.date,
        });
    });

    const response = new Response(feed.xml());
    response.headers.set("Content-Type", "application/rss+xml ");
    return response;
}
