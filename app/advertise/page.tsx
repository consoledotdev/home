import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const directory = join(process.cwd(), "app/advertise/content");

import ClientPage from "./client-page";

export const metadata = {
    title: "Developer advertising with Console",
    description: "Advertise to experienced developers with Console.",
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
