import { getItems } from "@/app/lib/interviews";

import { getItems as getPodcastItems } from "@/app/lib/podcasts";

import ClientPage from "./client-page";

export const metadata = {
    title: "Developer interviews",
    description: "Interviews with the people behind the tools we feature in the Console newsletter.",
};

export default async function Page() {
    const items = await getItems();

    if (!items) {
        return null;
    }

    const sortedItems = items
        .sort(function (itemA: any, itemB: any) {
            return new Date(itemA.meta.date).getTime() - new Date(itemB.meta.date).getTime();
        })
        .reverse();

    const podcastItems = await getPodcastItems();

    let formattedPodcastItems;
    if (podcastItems) {
        const filteredItems = podcastItems.filter((i) => i.meta.season == 4);

        const metaOnlyItems = filteredItems.map((i) => {
            return { meta: i.meta };
        });

        formattedPodcastItems = metaOnlyItems
            .sort(function (itemA: any, itemB: any) {
                return new Date(itemA.meta.date).getTime() - new Date(itemB.meta.date).getTime();
            })
            .reverse();
    }

    return <ClientPage items={sortedItems} podcastItems={formattedPodcastItems} />;
}
