import { getItems } from "@/app/lib/podcasts";

import ClientPage from "./client-page";

export const metadata = {
    title: "Console Devtools Podcast",
    description: "Interviews with interesting people in the devtools space.",
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

    return <ClientPage items={sortedItems} />;
}
