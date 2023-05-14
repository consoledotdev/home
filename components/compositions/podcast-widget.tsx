import React, { forwardRef } from "react";

import { PodcastMeta } from "@/app/lib/podcasts";
import { consoleISODate, formatPodcastSeasonEpisode } from "@/components/effects/utils";

import Link from "next/link";
import PodcastLinks from "@/components/compositions/podcast-links";
import ComboBox, { Props as ComboBoxProps } from "@/components/compositions/combo-box";
import AudioPlayer, { PlayState as AudioPlayerPlayState } from "@/components/compositions/audio-player";
import RichTitle from "@/components/elements/rich-title";

import styles from "@/components/compositions/podcast-widget.scss";

export type PlayState = AudioPlayerPlayState;

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    posArt?: "header" | "body";
    posLinks?: "body" | "footer";
    hideHeader?: boolean;
    hideArt?: boolean;
    hideLinks?: boolean;
    hideListLink?: boolean;
    cnslStyle?: "alt" | "default";
    podcastMeta: PodcastMeta;
    comboBoxAttrs?: {
        visualsType?: ComboBoxProps["visualsType"];
        isVertical?: ComboBoxProps["isVertical"];
    };
    playerAttrs?: any;
}

/**
 * Console Podcast widget.
 *
 * @param classes - Additional classes.
 * @param posArt - Positions the artwork in header or in body.
 * @param posLinks - Positions the links in body or footer.
 * @param hideHeader - Hides the header.
 * @param hideArt - Hides the artwork.
 * @param hideLinks - Hides the links.
 * @param hideListLink - Hides just the list link inside the links block.
 * @param cnslStyle - Displays an alternative style.
 * @param podcastMeta - The podcast meta.
 * @param comboBoxAttrs - Overrides the combo box component options.
 * @param playerAttrs - Overrides the audio player component options.
 *
 * @returns The podcast widget.
 */
const PodcastWidget = forwardRef<HTMLDivElement, Props>(({ classes, posArt = "header", posLinks = "footer", hideHeader, hideArt, hideLinks, hideListLink, cnslStyle = "default", podcastMeta, comboBoxAttrs, playerAttrs, ...props }, ref) => {
    let cls = "podcast-widget";
    if (classes) cls += " " + classes.join(" ");
    cls += " art-" + posArt;
    cls += " links-" + posLinks;
    if (cnslStyle) cls += " style-" + cnslStyle;
    if (hideHeader) cls += " hide-header";
    if (hideArt) cls += " hide-art";
    if (hideLinks) cls += " hide-links";

    const comboBox = (
        <ComboBox
            srcs={{
                left: {
                    src: podcastMeta.topImg2Src,
                    alt: podcastMeta.topImg2Alt,
                },
                right: {
                    src: podcastMeta.topImg1Src,
                    alt: podcastMeta.topImg1Alt,
                },
            }}
            {...comboBoxAttrs}
        />
    );

    const links = (
        <div className="podcast-widget-links">
            {!hideListLink && <Link className="link" href="/podcast"></Link>}
            <PodcastLinks />
        </div>
    );

    let playerOpts = {
        classes: playerAttrs?.classes || undefined,
        src: playerAttrs?.src || podcastMeta.episodeURL,
        title: playerAttrs?.title || podcastMeta.title,
        titleAlt: playerAttrs?.titleAlt || "",
        showTime: playerAttrs?.showTime,
        playerId: playerAttrs?.playerId,
        playState: playerAttrs?.playState,
        duration: podcastMeta.duration,
    };

    return (
        <>
            <div className={cls}>
                <div className="podcast-widget-header">
                    <div className="podcast-widget-heading">
                        <RichTitle tag="h6" icon={{ group: "generic", name: "podcast" }} classes={["title-6"]}></RichTitle>
                        <div className="podcast-widget-meta">
                            <p className="small episode-no">{formatPodcastSeasonEpisode(podcastMeta.season, podcastMeta.episode)}</p>
                            <p className="small date">
                                <span className="page-meta-separator">&mdash;</span>
                                <span>{consoleISODate(podcastMeta.date)}</span>
                            </p>
                        </div>
                    </div>

                    {posArt == "header" && comboBox}
                </div>

                <div className="podcast-widget-body">
                    {posArt == "body" && comboBox}

                    <AudioPlayer {...playerOpts} />

                    {posLinks == "body" && links}
                </div>

                <div className="podcast-widget-footer">{posLinks == "footer" && links}</div>
            </div>

            <style jsx global>
                {styles}
            </style>
        </>
    );
});

PodcastWidget.displayName = "PodcastWidget";

export default PodcastWidget;
