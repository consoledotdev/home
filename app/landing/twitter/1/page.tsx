import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const directory = join(process.cwd(), "app/landing/1/content");

import ClientPage from "./client-page";

export const metadata = {
    title: "Console Newsletter - The best tools for developers",
    description: "A free weekly email digest of the best tools and beta releases for developers.",
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
