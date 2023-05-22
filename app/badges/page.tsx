import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const directory = join(process.cwd(), "app/badges/content");

import ClientPage from "./client-page";

export const metadata = {
    title: "Console Badges",
    description: "Download a Console Badge to showcase your feature on the Console Weekly newsletter.",
    alternates: {
        canonical: "https://console.dev/badges",
    },
};

export default async function Page() {
    const fullPath = join(directory, `page.mdx`);
    if (!fs.existsSync(fullPath)) {
        console.error(`Item not found: ${fullPath}`);
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return <ClientPage page={{ meta: data }} />;
}
