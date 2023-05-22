import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";

import { directory, getItem as getProfileItem } from "@/app/lib/profiles";
import { getItem as getInterviewItem } from "@/app/lib/interviews";
import { getItem as getPodcastItem } from "@/app/lib/podcasts";

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
            canonical: "https://console.dev/profiles/" + slug,
        },
    };
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { meta, content } = await getProfileItem(params.slug);

    if (!meta) {
        notFound();
    }

    const profile = {
        meta: meta,
        content: await serialize(content),
    };

    // Get podcast data
    var podcast;
    if (profile.meta.podcast) {
        const { meta, highlights } = await getPodcastItem(profile.meta.podcast);

        podcast = {
            meta: meta,
            highlights: await serialize(highlights),
        };
    }

    // Get interview data
    var interview;
    if (profile.meta.interview) {
        const { meta, highlights } = await getInterviewItem(profile.meta.interview);

        interview = {
            meta: meta,
            highlights: await serialize(highlights),
        };
    }

    return <ClientPage profile={profile} podcast={podcast} interview={interview} />;
}
