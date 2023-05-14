import React, { forwardRef } from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "@/components/compositions/podcast-links.scss";
import { link } from "fs";

type Providers = "apple" | "spotify" | "google" | "overcast";

type ProvidersList = Providers[];

type ProviderLinks = {
    apple?: React.ReactNode;
    spotify?: React.ReactNode;
    google?: React.ReactNode;
    overcast?: React.ReactNode;
};

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    title?: string;
    only?: ProvidersList;
}

/**
 * The Podcast links set
 *
 * @param classes - Additional classes.
 * @param title - Optional title to introduce links.
 * @param only - The links to include, returns all links if undefined.
 *
 * @returns The links set.
 */
const PodcastLinks = forwardRef<HTMLDivElement, Props>(({ classes, title, only, ...props }, ref) => {
    let cls = "podcast-links-wrapper";
    if (classes) cls += " " + classes.join(" ");

    const links = linkEls(only);

    const linksBlock = (
        <div className="podcast-links">
            {links.apple && links.apple}
            {links.spotify && links.spotify}
            {links.google && links.google}
            {links.overcast && links.overcast}
        </div>
    );

    return (
        <>
            {title ? (
                <div ref={ref} className={cls}>
                    <h6 className="title title-5">{title || ""}</h6>
                    {linksBlock}
                </div>
            ) : (
                linksBlock
            )}

            <style jsx global>
                {styles}
            </style>
        </>
    );
});

PodcastLinks.displayName = "PodcastLinks";

export default PodcastLinks;

const linkEls = (only?: ProvidersList): ProviderLinks => {
    const links = {
        apple: (
            <a key="podcast-link-apple" className="link" target="_blank" rel="noreferrer noopener" href="https://podcasts.apple.com/us/podcast/console-devtools/id1572448316" title="Listen on Apple Podcasts">
                <Image loading="lazy" src="/img/podcast-providers/icon-podcast-apple.svg" alt="Apple Podcasts" width="32" height="32" />
            </a>
        ),
        spotify: (
            <a key="podcast-link-spotify" className="link" target="_blank" rel="noreferrer noopener" href="https://open.spotify.com/show/1yec5zbVfGPQUlH80tDIOW" title="Listen on Spotify">
                <Image loading="lazy" src="/img/podcast-providers/icon-podcast-spotify.svg" alt="Spotify" width="32" height="32" />
            </a>
        ),
        google: (
            <a key="podcast-link-google" className="link" target="_blank" rel="noreferrer noopener" href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9UODBDSndsbg==" title="Listen on Google Podcasts">
                <Image loading="lazy" src="/img/podcast-providers/icon-podcast-google.svg" alt="Google Podcasts" width="32" height="32" />
            </a>
        ),
        overcast: (
            <a key="podcast-link-overcast" className="link" target="_blank" rel="noreferrer noopener" href="https://overcast.fm/itunes1572448316" title="Listen on Overcast">
                <Image loading="lazy" src="/img/podcast-providers/icon-podcast-overcast.svg" alt="Overcast" width="32" height="32" />
            </a>
        ),
    };

    if (only) {
        return Object.keys(links)
            .filter((key) => only.includes(key as Providers))
            .reduce((obj, key) => {
                (obj as Indexable)[key] = (links as Indexable)[key];
                return obj;
            }, {});
    }

    return links;
};
