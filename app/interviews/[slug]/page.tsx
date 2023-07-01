import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";

import { directory, getItem } from "@/app/lib/interviews";

import ClientPage from "./client-page";

// Defines the list of route segments that will be generated at build time.
// https://beta.nextjs.org/docs/data-fetching/generating-static-params
export async function generateStaticParams() {
    let dirents = fs.readdirSync(directory, { withFileTypes: true });
    let items = dirents.filter((dirent) => dirent.isFile()).map((dirent) => dirent.name);

    // Return a list of slugs
    return items.map((filename) => ({
        slug: filename.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = params;

    return {
        alternates: {
            canonical: "https://console.dev/interviews/" + slug,
        },
    };
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { meta, content } = await getItem(params.slug);

    if (!meta) {
        notFound();
    }

    const interview = {
        meta: meta,
        content: await serialize(content),
    };

    return <ClientPage interview={interview} />;
}
