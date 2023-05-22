import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const directory = join(process.cwd(), "app/latest/content");

import { getLatestItems as getLatestToolItems } from "@/app/lib/tools";
import { getLatestItems as getLatestBetasItems } from "@/app/lib/betas";

import ClientPage from "./client-page";

export const metadata = {
    title: "Latest Console newsletter",
    description: "The latest edition of the Console Newsletter. A free weekly email digest of the best tools and beta releases for developers.",
    alternates: {
        canonical: "https://console.dev/latest",
    },
};

export default async function Page() {
    const fullPath = join(directory, `page.mdx`);
    if (!fs.existsSync(fullPath)) {
        console.error(`Item not found: ${fullPath}`);
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    const toolItems = await getLatestToolItems();
    if (!toolItems) {
        return null;
    }
    const sortedToolItems = toolItems
        .sort(function (itemA: any, itemB: any) {
            return new Date(itemA.date).getTime() - new Date(itemB.date).getTime();
        })
        .reverse();

    const betasItems = await getLatestBetasItems();
    if (!betasItems) {
        return null;
    }
    const sortedBetasItems = betasItems
        .sort(function (itemA: any, itemB: any) {
            return new Date(itemA.date).getTime() - new Date(itemB.date).getTime();
        })
        .reverse();

    return <ClientPage page={{ meta: data }} toolItems={sortedToolItems} betaItems={sortedBetasItems} />;
}
