import { getItem as getInterviewItem } from "@/app/lib/interviews";
import { getItem as getPodcastItem } from "@/app/lib/podcasts";
import { getItem as getProfileItem } from "@/app/lib/profiles";
import { getItem as getToolItem, getItems as getToolItems } from "@/app/lib/tools";
import type { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Organization, Product, Rating, Review, WithContext } from "schema-dts";

import ClientPage from "./client-page";

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 3600; // 1 hour

// Defines the list of route segments that will be generated at build time.
// https://beta.nextjs.org/docs/data-fetching/generating-static-params
export async function generateStaticParams() {
    const tools = await getToolItems();

    return tools!.map((tool) => ({
        slug: tool.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    let tool = await getToolItem(params.slug);

    if (!tool) {
        notFound();
    }

    const title = tool.name + " review by Console";
    const description = "Console review of " + tool.name + " - " + tool.description;

    const publishedTime = new Date(tool.date).toISOString();

    return {
        title,
        description,
        alternates: {
            canonical: "https://console.dev/tools/" + tool.slug,
        },
        openGraph: {
            title,
            description,
            type: "article",
            authors: ["Console"],
            publishedTime,
            /*images: [
        {
          url:
            "/api/og/tool?tool=" +
            encodeURIComponent(tool.name) +
            "&icon=" +
            encodeURIComponent(tool.favicon) +
            "&text=" +
            encodeURIComponent(tool.like),
          width: 512,
          height: 512,
        },
      ],*/
        },
        twitter: {
            title,
            description,
        },
    };
}

export default async function Page({ params }: { params: { slug: string } }) {
    let tool = await getToolItem(params.slug);

    if (!tool) {
        notFound();
    }

    // https://beta.nextjs.org/docs/guides/seo#json-ld
    const jsonLdAuthor: WithContext<Organization> = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Console",
        url: "https://console.dev",
    };

    const jsonLdRating: WithContext<Rating> = {
        "@context": "https://schema.org",
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
        worstRating: 0,
    };

    const publishedTime = new Date(tool.date).toISOString();

    const jsonLdReview: WithContext<Review> = {
        "@context": "https://schema.org",
        "@type": "Review",
        reviewRating: jsonLdRating,
        reviewBody: "What we like: " + tool.like + " What we don't like: " + tool.dislike,
        // Free text for the notes are not yet supported by Google
        //positiveNotes: tool.like,
        //negativeNotes: tool.dislike,
        author: jsonLdAuthor,
        url: "https://console.dev/tools/" + tool.slug,
        datePublished: publishedTime,
    };

    const jsonLd: WithContext<Product> = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: tool.name,
        image: tool.favicon,
        description: tool.description,
        url: tool.url,
        review: jsonLdReview,
    };

    // Get podcast data
    var podcast;
    if (tool.podcast) {
        const { meta, highlights } = await getPodcastItem(tool.podcast);

        podcast = {
            meta: meta,
            highlights: await serialize(highlights),
        };
    }

    // Get interview data
    var interview;
    if (tool.interview) {
        const { meta, highlights } = await getInterviewItem(tool.interview);

        interview = {
            meta: meta,
            highlights: await serialize(highlights),
        };
    }

    // Get profile data
    var profile;
    if (tool.profile) {
        const { meta, highlights } = await getProfileItem(tool.profile);

        profile = {
            meta: meta,
            highlights: await serialize(highlights),
        };
    }

    return (
        <>
            <section>
                {/* Add JSON-LD to your page */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                {/* ... */}
            </section>
            <Suspense>
                <ClientPage tool={tool} podcast={podcast} interview={interview} profile={profile} />
            </Suspense>
        </>
    );
}
