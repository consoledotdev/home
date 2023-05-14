import { getItems } from "@/app/lib/podcasts";

import ClientPage from "./client-page";

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 86400; // Revalidate every 24 hours

export default async function Page() {
    const items = await getItems();

    let formattedItems;
    if (items) {
        const filteredItems = items.filter((i) => i.meta.season == 4);

        const metaOnlyItems = filteredItems.map((i) => {
            return { meta: i.meta };
        });

        formattedItems = metaOnlyItems
            .sort(function (itemA: any, itemB: any) {
                return new Date(itemA.meta.date).getTime() - new Date(itemB.meta.date).getTime();
            })
            .reverse();
    }

    return <ClientPage podcastItems={formattedItems} />;
}
