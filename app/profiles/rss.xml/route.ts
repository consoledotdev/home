import rss from "rss";
import { getItems } from "@/app/lib/profiles";

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 86400; // 24 hours

export async function GET() {
    const feed = new rss({
        title: "Console - Devtools company profiles",
        description: "Behind the scenes of how the best devtools companies run engineering.",
        feed_url: "https://console.dev/profiles/rss.xml",
        site_url: "https://console.dev",
        image_url: "https://console.dev/favicon.png",
        webMaster: "hello@console.dev (Console)",
        ttl: 1440,
        language: "en",
        pubDate: new Date(),
    });

    const items = await getItems();

    if (!items) {
        return null;
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
            description: item.meta.summary,
            url: `https://console.dev/profiles/${item.meta.slug}`,
            guid: item.meta.slug,
            date: item.meta.date,
        });
    });

    const response = new Response(feed.xml());
    response.headers.set("Content-Type", "application/rss+xml ");
    return response;
}
