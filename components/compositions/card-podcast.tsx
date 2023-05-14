import React, { forwardRef } from "react";

import { PodcastMeta } from "@/app/lib/podcasts";

import { consoleISODate, formatPodcastSeasonEpisode, getDurationParts } from "@/components/effects/utils";

import Card from "@/components/elements/card";
import CardLink from "@/components/elements/card-link";
import ComboBox from "@/components/compositions/combo-box";
import Button from "@/components/elements/button";

import styles from "@/components/compositions/card-podcast.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    item: {
        meta: PodcastMeta;
    };
    layout?: "horizontal" | "default";
}

/**
 * The podcast item card
 *
 * @param classes - Additional classes.
 * @param item - The podcast item data.
 * @param layout - The display layout, horizontal will inline the combo box with the content, set to horizontal when undefined.
 *
 * @returns The card component.
 */
const CardPodcast = forwardRef<HTMLDivElement, Props>(({ classes, item, layout = "horizontal", ...props }, ref) => {
    let cls = "card-podcast";
    if (classes) cls += " " + classes.join(" ");
    if (layout) cls += " " + layout;

    const season1 = item.meta.season == 1;

    const duration = getDurationParts(item.meta.duration);

    return (
        <>
            <Card classes={[cls]}>
                <CardLink href={"/podcast/" + item.meta.slug} frameOnly />
                <ComboBox
                    srcs={{
                        left: {
                            src: item.meta.topImg2Src,
                            alt: item.meta.topImg2Alt,
                        },
                        right: {
                            src: item.meta.topImg1Src,
                            alt: item.meta.topImg1Alt,
                        },
                    }}
                    visualsType={season1 ? "logo-logo" : "logo-profile"}
                    isVertical={layout != "horizontal"}
                />
                <div className="card-content-wrapper">
                    <div className="card-content">
                        <div className="card-heading">
                            <div className="card-title clamp-2">{item.meta.title}</div>
                            <div className="card-subtitle">
                                <p className="card-subtitle-main clamp-2"> with {item.meta.who}</p>
                                <p className="card-subtitle-extra clamp-1">{(item.meta.role ? item.meta.role + ", " : "") + item.meta.org}</p>
                            </div>
                        </div>
                        <p className="small card-description clamp-6">{item.meta.what}</p>

                        <div className="card-meta">
                            <span className="episode-no">{formatPodcastSeasonEpisode(item.meta.season, item.meta.episode)}</span>
                            <span> — </span>
                            <span className="date bottom">{consoleISODate(item.meta.date)}</span>
                        </div>
                    </div>

                    <Button
                        el="link"
                        round
                        iconOnly
                        quiet
                        classes={["play"]}
                        tabIndex={-1}
                        aria-label="Play"
                        href={"/podcast/" + item.meta.slug}
                        icon={{
                            group: "generic",
                            name: "play",
                        }}
                        iconPos="left"
                        hoverContent={
                            <>
                                Play · {duration.minutes}m {duration.seconds}s
                            </>
                        }
                    />
                </div>
            </Card>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

CardPodcast.displayName = "CardPodcast";

export default CardPodcast;
