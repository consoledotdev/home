"use client";

import { useEffect, useState } from "react";

import { useMediaQuery } from "@/components/effects/use-media-query";

import type { PodcastMeta } from "@/app/lib/podcasts";
import { InterviewMeta } from "@/app/lib/interviews";

import PageSection from "@/components/elements/page-section";
import Button from "@/components/elements/button";
import PodcastWidget, { Props as PodcastWidgetProps } from "@/components/compositions/podcast-widget";
import CardInterview, { Props as CardInterviewProps } from "@/components/compositions/card-interview";
import LaunchSubscribe from "@/components/compositions/launch-subscribe";
import Link from "next/link";
import { Illustration as RadarIllustration } from "@/components/illustrations/radar";
import CardEmpty from "@/components/elements/card-empty";
import { Props as ComboBoxProps } from "@/components/compositions/combo-box";

import styles from "@/app/interviews/client-page.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
    items: {
        meta: InterviewMeta;
    }[];
    podcastItems?: {
        meta: PodcastMeta;
    }[];
}

export default function Page({ items, podcastItems, ...props }: Props) {
    const above1024 = useMediaQuery({
        w: 1025,
        op: "min",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    const below769 = useMediaQuery({
        w: 768,
        op: "max",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    const below541 = useMediaQuery({
        w: 540,
        op: "max",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    const max768 = useMediaQuery({
        w: 768,
        op: "max",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    const max560 = useMediaQuery({
        w: 560,
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

    let cardLayout = "horizontal";
    if (above1024 || below769) cardLayout = "default";

    return (
        <>
            <PageSection classes={["opening"]}>
                <h2 className="title title-1">Developer interviews</h2>
                <p className="description">Interviews with the people behind the tools we feature in the Console newsletter.</p>
                <div className="page-meta">
                    <p className="small">
                        <Button
                            appearance="text"
                            cnslSize="small"
                            el="anchor"
                            href="/interviews/rss.xml"
                            title="RSS Feed"
                            target="_blank"
                            rel="noreferrer noopener"
                            icon={{
                                group: "generic",
                                name: "rss",
                            }}
                            iconPos="left"
                        >
                            Feed
                        </Button>
                    </p>
                    <p className="small">
                        <span className="page-meta-separator">&mdash;</span>
                        <Button
                            appearance="text"
                            cnslSize="small"
                            el="anchor"
                            href="/latest"
                            title="Latest Newsletter"
                            target="_blank"
                            rel="noreferrer noopener"
                            icon={{
                                group: "generic",
                                name: "email",
                            }}
                            iconPos="left"
                        >
                            See latest newsletter
                        </Button>
                    </p>
                </div>
            </PageSection>

            <PageSection classes={["podcast"]}>
                <p>
                    Listen to more interviews on the&nbsp;&nbsp;
                    <Button
                        appearance="text"
                        cnslColor="triad-03"
                        icon={{
                            group: "generic",
                            name: "podcast",
                        }}
                        iconPos="left"
                        el="anchor"
                        href="/podcast"
                        title="Podcast"
                    >
                        Console Devtools Podcast
                    </Button>
                </p>
                {drawnPodcast && (
                    <PodcastWidget
                        {...getPodcastProps(drawnPodcast, {
                            isAbove1024: above1024,
                            isBelow541: below541,
                            isBelow769: below769,
                        })}
                    />
                )}
                <p>Keep reading our interviews:</p>
            </PageSection>

            <PageSection classes={["interviews"]}>
                {items.map((item) => (
                    <CardInterview key={item.meta.slug} item={item} layout={cardLayout as CardInterviewProps["layout"]} />
                ))}
                <CardEmpty>
                    <div className="card-empty-content">
                        <div className="illustrated-text">
                            <RadarIllustration />
                            <p>
                                We are always on the lookout for interesting tools to feature. Is there a something we should look at?{" "}
                                <a href="mailto:hello@console.dev" className="link">
                                    Let us know
                                </a>
                            </p>
                        </div>
                    </div>
                </CardEmpty>
            </PageSection>

            <PageSection classes={["signup"]}>
                <LaunchSubscribe
                    layout={max768 ? "block" : "inline"}
                    formSubscribeProps={{
                        layout: max768 ? (max560 ? "block" : "inline") : "block",
                    }}
                >
                    <h3 className="title title-3">Subscribe to the weekly Console newsletter</h3>
                    <p>
                        An email digest of the best tools and beta releases for developers. Every Thursday.{" "}
                        <Link className="link" href="/latest">
                            See the latest email
                        </Link>
                    </p>
                </LaunchSubscribe>
            </PageSection>

            <style jsx global>
                {styles}
            </style>
        </>
    );
}

const getPodcastProps = (
    podcast: {
        meta: PodcastMeta;
    },
    mq: {
        isBelow541: boolean | undefined;
        isBelow769: boolean | undefined;
        isAbove1024: boolean | undefined;
    }
) => {
    let podcastProps = {
        podcastMeta: podcast.meta,
        posArt: "body" as PodcastWidgetProps["posArt"],
        posLinks: "body" as PodcastWidgetProps["posLinks"],
        hideHeader: true,
        hideListLink: false,
        playerAttrs: {
            title: podcast.meta.title + ", with " + podcast.meta.who + (podcast.meta.org ? " (" + podcast.meta.org + ")" : ""),
            showTime: true,
            id: "interviews-podcast",
        },
        comboBoxAttrs: {
            visualsType: (podcast.meta.season == 1 ? "logo-logo" : "logo-profile") as ComboBoxProps["visualsType"],
            isVertical: false,
        },
    };

    if (mq.isBelow769) {
        podcastProps.posLinks = "footer" as PodcastWidgetProps["posLinks"];
    }

    if (!mq.isAbove1024 && !mq.isBelow769) {
        podcastProps.hideListLink = true;
    }

    if (mq.isBelow541) {
        podcastProps.posArt = "header" as PodcastWidgetProps["posArt"];
        podcastProps.hideHeader = false;
        if (podcastProps.comboBoxAttrs) podcastProps.comboBoxAttrs.isVertical = true;
    }

    return podcastProps;
};
