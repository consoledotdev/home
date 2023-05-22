import { getItems } from "@/app/lib/profiles";

import ClientPage from "./client-page";

export const metadata = {
    title: "Devtools company profiles",
    description: "Behind the scenes of how the best devtools companies run engineering.",
    alternates: {
        canonical: "https://console.dev/profiles",
    },
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
