import { getItems } from "@/app/lib/tools";

import ClientPage from "./client-page";

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 3600; // 1 hour

export const metadata = {
    title: "Devtool reviews by Console",
    description: "Each week Console reviews the best tools for developers.",
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
