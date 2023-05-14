import React, { forwardRef } from "react";

import Button from "@/components/elements/button";

import styles from "@/components/compositions/podcast-episode-clipping.scss";
import FramedSection from "../elements/framed-section";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    atTime: string;
    clicked: (e: React.MouseEvent, opts: { atTime: string }) => void;
}

/**
 * A podcast episode clipping.
 *
 * @param classes - Additional classes.
 * @param atTime - The clipping start time in mm:ss format.
 * @param onClick - The click event callback, sends the clipping atTime.
 *
 * @returns The clipping component.
 */
const PodcastEpisodeClipping = forwardRef<HTMLDivElement, Props>(({ classes, atTime, clicked, ...props }, ref) => {
    let cls = "podcast-episode-clipping";
    if (classes) cls += " " + classes.join(" ");

    const timeParts = atTime.split(":");

    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        (e.target as HTMLElement).blur();
        (e.currentTarget as HTMLElement).blur();
        if (clicked) clicked(e, { atTime: atTime });
    };

    return (
        <>
            <div className={cls}>
                <FramedSection size="compact" appearance="overlay">
                    {props.children}
                </FramedSection>
                <Button
                    onClick={onClick}
                    round
                    iconOnly
                    quiet
                    classes={["play"]}
                    tabIndex={-1}
                    aria-label="Play"
                    icon={{
                        group: "generic",
                        name: "play",
                    }}
                    iconPos="left"
                    hoverContent={
                        <>
                            Play @ {timeParts[0]}m {timeParts[1]}s
                        </>
                    }
                />
            </div>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

PodcastEpisodeClipping.displayName = "PodcastEpisodeClipping";

export default PodcastEpisodeClipping;
