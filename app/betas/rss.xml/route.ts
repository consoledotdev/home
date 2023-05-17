import rss from "rss";
import { getItems } from "@/app/lib/betas";

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 3600; // 1 hour

export async function GET() {
    const feed = new rss({
        title: "Console - Developer tool beta releases",
        description: "A live list of every developer tool beta & early access release.",
        feed_url: "https://console.dev/betas/rss.xml",
        site_url: "https://console.dev",
        image_url: "https://console.dev/favicon.png",
        webMaster: "hello@console.dev (Console)",
        ttl: 60,
        language: "en",
        pubDate: new Date(),
    });

    const items = await getItems();

    if (!items) {
        return null;
    }

    const sortedItems = items
        .sort(function (itemA: any, itemB: any) {
            return new Date(itemA.date).getTime() - new Date(itemB.date).getTime();
        })
        .reverse();

    // Limit to 20 items
    sortedItems.slice(0, 20).forEach((item: any) => {
        feed.item({
            title: item.name,
            description: item.description,
            url: item.url,
            guid: item.url,
            date: item.date,
        });
    });

    const response = new Response(feed.xml());
    response.headers.set("Content-Type", "application/rss+xml ");
    return response;
}
