import { getItems } from "@/app/lib/betas";

import ClientPage from "./client-page";

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 3600; // 1 hour

export const metadata = {
    title: "Beta Console - developer tools beta releases",
    description: "A live list of every developer tool beta & early access release.",
};

export default async function Page() {
    const items = await getItems();

    if (!items) {
        return null;
    }

    const sortedItems = items
        .sort(function (itemA: any, itemB: any) {
            return new Date(itemA.date).getTime() - new Date(itemB.date).getTime();
        })
        .reverse();

    return <ClientPage items={sortedItems} />;
}
