import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

import AudioPlayerHandler from "./audio-player-handler.js";
import IconProvider from "@/components/elements/icon-provider";

import styles from "@/components/compositions/audio-player.scss";

export type PlayState = {
    playing: boolean;
    atTime: string | null;
};

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    playerId: string | number;
    src: string;
    title: string;
    titleAlt?: string;
    duration?: string;
    showTime?: boolean;
    playState?: PlayState;
}

/**
 * Audio Player.
 *
 * @param classes - Additional classes.
 * @param id - A unique identifier for the player element.
 * @param src - The audio file URL.
 * @param title - Player title text.
 * @param titleAlt - Player title text variant displayed when playing.
 * @param duration - The audio duration.
 * @param showTime - Shows the total and elapsed time.
 * @param playState - The play state, triggers play/pause.
 *
 * @returns The audio player component.
 */
const AudioPlayer = forwardRef<HTMLDivElement, Props>(({ classes, playerId = "", src, title, titleAlt, duration, showTime, playState, ...props }, ref) => {
    let cls = "audio-player";
    if (classes) cls += " " + classes.join(" ");
    if (showTime) cls += " show-time";

    const playerRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => playerRef.current as HTMLDivElement);

    const [handler, setHandler] = useState<AudioPlayerHandler | null>(null);
    useEffect(() => {
        if (playerRef.current && !handler) {
            setHandler(new AudioPlayerHandler(playerRef.current));
        }
        return () => {
            handler?.remove();
        };
    }, [playerRef, handler]);

    if (playState?.playing) handler?.public.playAtTime(playState.atTime || "00:00");
    else handler?.public.stopPlaying();

    return (
        <>
            <div ref={playerRef} className={cls} id={playerId.toString()}>
                <audio data-console-player-audio style={{ display: "none" }} preload="none" src={src}></audio>
                <div className="audio-player-top">
                    <IconProvider group="generic" name="loader" />
                    <button data-play className="console-button-text play" aria-label="Play">
                        <IconProvider group="generic" name="play" />
                    </button>
                    <button data-pause className="console-button-text pause" aria-label="Pause">
                        <IconProvider group="generic" name="pause" />
                    </button>
                    <h6 data-title-wrapper className="title title-5" title="{{ .title }}">
                        <span className="title-loading">Loading&hellip;</span>
                        {titleAlt && (
                            <span data-title-alt className="title-alt">
                                {titleAlt}
                            </span>
                        )}
                        <span data-title-main className="title-main">
                            {title}
                        </span>
                    </h6>
                    <span className="audio-time">
                        <span className="elapsed">
                            <span data-time-elapsed>00:00</span> /
                        </span>
                        <span data-time-total className="total">
                            {duration}
                        </span>
                    </span>
                </div>
                <div data-progress className="progress">
                    <span className="bg"></span>
                    <span data-elapsed className="elapsed" style={{ width: "0%" }}></span>
                </div>
            </div>

            <style jsx global>
                {styles}
            </style>
        </>
    );
});

AudioPlayer.displayName = "AudioPlayer";

export default AudioPlayer;
