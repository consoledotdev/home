"use client";

import { useEffect, useState } from "react";

import type { PodcastMeta } from "@/app/lib/podcasts";

import { GetTheme } from "@/components/providers/theme-provider";
import { useMediaQuery } from "@/components/effects/use-media-query";

import PageSection from "@/components/elements/page-section";
import FormSubscribe from "@/components/compositions/form-subscribe";
import IconProvider from "@/components/elements/icon-provider";
import Link from "next/link";
import Rays from "@/components/visuals/rays/rays-maker";
//import Button from "@/components/elements/button";
import PodcastWidget from "@/components/compositions/podcast-widget";
import PodcastLinks from "@/components/compositions/podcast-links";
//import { Illustration as JobsAbstractLandscapeDark } from "@/components/illustrations/jobs-abstract-landscape-dark";
//import { Illustration as JobsAbstractLandscapeLight } from "@/components/illustrations/jobs-abstract-landscape-light";
import RichTitle from "@/components/elements/rich-title";

import styles from "@/app/client-page.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
    podcastItems?: {
        meta: PodcastMeta;
    }[];
}

export default function Page({ podcastItems, ...props }: Props) {
    // get theme provider info
    const theme = GetTheme();

    const max1024 = useMediaQuery({
        w: 1024,
        op: "max",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    const max768 = useMediaQuery({
        w: 768,
        op: "max",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    const max480 = useMediaQuery({
        w: 480,
        op: "max",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    const [drawnPodcast, setDrawnPodcast] = useState<
        | {
              meta: PodcastMeta;
          }
        | undefined
    >();

    useEffect(() => {
        if (podcastItems) {
            const idx = Math.floor(Math.random() * podcastItems.length);
            setDrawnPodcast(podcastItems[idx]);
        }
    }, []);

    return (
        <>
            <PageSection classes={["opening"]}>
                <Rays cnslType="triad-01" />
                <div className="top">
                    <h2 className="title title-1">Discover the best tools for developers</h2>
                    <p className="description">A free weekly email digest of the best tools for developers.</p>
                </div>
                <div className="bottom">
                    <div className="form-wrapper">
                        <p className="small subscribers-count">
                            <IconProvider group="generic" name="console-mini-filled" />
                            26k+ subscribers
                        </p>
                        <FormSubscribe layout={max1024 ? (max768 ? (max480 ? "block" : "inline") : "block") : "inline"} />
                        <p className="small">
                            Every Thursday.{" "}
                            <Link className="link" href="/latest">
                                See latest email
                            </Link>
                        </p>
                    </div>
                </div>
            </PageSection>

            <PageSection classes={["podcast", "full-width"]}>
                <Rays cnslType="triad-03" />
                <div className="top">
                    <RichTitle tag="h3" icon={{ group: "generic", name: "podcast" }}>
                        Devtools Podcast
                    </RichTitle>
                </div>
                <div className="mid">
                    <div className="left">
                        <h4 className="title title-3">Getting technical about devtools.</h4>
                        <p className="description">Security, infrastructure, encryption, privacy... all the technical details around devtools.</p>
                    </div>
                    <div className="right">
                        {drawnPodcast && (
                            <PodcastWidget
                                podcastMeta={drawnPodcast.meta}
                                cnslStyle="alt"
                                hideLinks
                                playerAttrs={{
                                    title: drawnPodcast.meta.title + " (" + drawnPodcast.meta.who + ")",
                                    id: "home-podcast",
                                }}
                                comboBoxAttrs={{
                                    visualsType: drawnPodcast.meta.season == 1 ? "logo-logo" : "logo-profile",
                                    isVertical: true,
                                }}
                            />
                        )}
                    </div>
                </div>
                <div className="bottom">
                    <Link className="link" href="/podcast">
                        See all episodes
                    </Link>
                    <PodcastLinks title="Listen & subscribe" />
                </div>
            </PageSection>

            {/*<PageSection classes={["jobs", "full-width"]}>
        <Rays cnslType="jobs-triad-02" />
        <div className="top">
          <RichTitle tag="h3" icon={{ group: "generic", name: "jobs" }}>
            <span className="text-italic">
              <span className="text-medium">jobs</span>.console
            </span>
          </RichTitle>
          <h4 className="title title-3">The best developer jobs in devtools</h4>
        </div>
        <div className="bottom">
          <div className="left">
            {theme == "dark" && <JobsAbstractLandscapeDark />}
            {theme == "light" && <JobsAbstractLandscapeLight />}
          </div>
          <div className="right">
            <p className="description">
              Want to work in devtools, cloud or infra? Jobs Console features{" "}
              <span className="text-accent">the best developer jobs</span> at
              devtools companies, with engineering profiles &amp; salaries.
            </p>
            <div className="ctas">
              <Button
                el="anchor"
                href="https://jobs.console.dev/signup"
                title="Find devtools jobs"
                target="_blank"
                rel="noreferrer noopener"
                icon={{
                  group: "generic",
                  name: "arrow-right",
                }}
                iconPos="right"
              >
                Find devtools jobs
              </Button>
            </div>
          </div>
        </div>
      </PageSection>*/}

            <style jsx global>
                {styles}
            </style>
        </>
    );
}
