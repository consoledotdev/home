import { useLayoutEffect, useState } from "react";

import { Rays } from "./rays";

import styles from "@/components/visuals/rays/rays-maker.scss";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    cnslType: "triad-01" | "triad-01-variant" | "triad-01-variant2" | "triad-03" | "jobs-triad-02";
}

export default function RaysMaker({ cnslType = "triad-01", ...props }: Props) {
    const [rays, setRays] = useState<Rays>();

    useLayoutEffect(() => {
        const cfg = raysConfig[cnslType];
        setRays(new Rays(cfg));
    }, [cnslType]);

    // Rays parallax responsiveness
    useLayoutEffect(() => {
        let setParallaxValues = () => {
            if (rays && rays.params) {
                const cfg = raysConfig[cnslType];
                if (window.innerWidth >= 551) {
                    rays.params.parallax.value = cfg.params.parallax_refs.regular_screen;
                } else {
                    rays.params.parallax.value = cfg.params.parallax_refs.small_screen;
                }
                rays.update();
            }
        };

        window.addEventListener("resize", setParallaxValues);
        return () => window.removeEventListener("resize", setParallaxValues);
    }, [rays, cnslType]);

    return (
        <>
            <div className="artwork-wrapper-dynamic">
                <div data-rays={cnslType} className={"console-rays " + cnslType}></div>
                <div data-rays-controls={cnslType} className={"console-rays-controls " + cnslType}></div>
            </div>

            {raysAddon[cnslType]}

            <style jsx global>
                {styles}
            </style>
        </>
    );
}

const raysAddon = {
    ["triad-01"]: (
        <div className="artwork-wrapper">
            <div className="plane-dust-wrapper one">
                <div className="plane-dust plane-dust-big"></div>
                <div className="plane-dust plane-dust-small"></div>
            </div>
            <div className="plane-dust-wrapper one dupe">
                <div className="plane-dust plane-dust-big"></div>
                <div className="plane-dust plane-dust-small"></div>
            </div>
            <div className="plane-dust-wrapper two">
                <div className="plane-dust plane-dust-big"></div>
                <div className="plane-dust plane-dust-small"></div>
            </div>
            <div className="plane-dust-wrapper two dupe">
                <div className="plane-dust plane-dust-big"></div>
                <div className="plane-dust plane-dust-small"></div>
            </div>
            <div className="plane-dust-wrapper four">
                <div className="plane-dust plane-dust-big"></div>
                <div className="plane-dust plane-dust-small"></div>
            </div>
            <div className="slim-plane one"></div>
            <div className="slim-plane two"></div>
            <div className="slim-plane three"></div>
            <div className="slim-plane four"></div>
            <div className="slim-plane five"></div>
            <div className="slim-plane six"></div>
        </div>
    ),
    ["triad-01-variant"]: (
        <div className="artwork-wrapper">
            <div className="plane-dust-wrapper one">
                <div className="plane-dust plane-dust-big"></div>
                <div className="plane-dust plane-dust-small"></div>
            </div>
            <div className="plane-dust-wrapper one dupe">
                <div className="plane-dust plane-dust-big"></div>
                <div className="plane-dust plane-dust-small"></div>
            </div>
            <div className="plane-dust-wrapper two">
                <div className="plane-dust plane-dust-big"></div>
                <div className="plane-dust plane-dust-small"></div>
            </div>
            <div className="plane-dust-wrapper two dupe">
                <div className="plane-dust plane-dust-big"></div>
                <div className="plane-dust plane-dust-small"></div>
            </div>
            <div className="plane-dust-wrapper four">
                <div className="plane-dust plane-dust-big"></div>
                <div className="plane-dust plane-dust-small"></div>
            </div>
            <div className="slim-plane one"></div>
            <div className="slim-plane two"></div>
            <div className="slim-plane three"></div>
            <div className="slim-plane four"></div>
            <div className="slim-plane five"></div>
            <div className="slim-plane six"></div>
        </div>
    ),
    ["triad-01-variant2"]: (
        <div className="artwork-wrapper">
            <div className="plane-dust-wrapper one">
                <div className="plane-dust plane-dust-big"></div>
                <div className="plane-dust plane-dust-small"></div>
            </div>
            <div className="plane-dust-wrapper one dupe">
                <div className="plane-dust plane-dust-big"></div>
                <div className="plane-dust plane-dust-small"></div>
            </div>
            <div className="plane-dust-wrapper two">
                <div className="plane-dust plane-dust-big"></div>
                <div className="plane-dust plane-dust-small"></div>
            </div>
            <div className="plane-dust-wrapper two dupe">
                <div className="plane-dust plane-dust-big"></div>
                <div className="plane-dust plane-dust-small"></div>
            </div>
            <div className="plane-dust-wrapper four">
                <div className="plane-dust plane-dust-big"></div>
                <div className="plane-dust plane-dust-small"></div>
            </div>
            <div className="slim-plane one"></div>
            <div className="slim-plane two"></div>
            <div className="slim-plane three"></div>
            <div className="slim-plane four"></div>
            <div className="slim-plane five"></div>
            <div className="slim-plane six"></div>
        </div>
    ),
    ["triad-03"]: (
        <div className="artwork-wrapper">
            <div className="plane-dust-wrapper one">
                <div className="plane-dust plane-dust-big"></div>
                <div className="plane-dust plane-dust-small"></div>
            </div>
            <div className="plane-dust-wrapper two">
                <div className="plane-dust plane-dust-big"></div>
                <div className="plane-dust plane-dust-small"></div>
            </div>
            <div className="wave-word mid">
                <div className="el el1"></div>
                <div className="el el2"></div>
                <div className="el el3"></div>
            </div>
            <div className="wave-word small">
                <div className="el el1"></div>
                <div className="el el2"></div>
                <div className="el el3"></div>
            </div>
        </div>
    ),
    ["jobs-triad-02"]: (
        <div className="artwork-wrapper">
            <div className="plane-dust-wrapper three">
                <div className="plane-dust plane-dust-big"></div>
                <div className="plane-dust plane-dust-small"></div>
            </div>
            <div className="plane-dust-wrapper five">
                <div className="plane-dust plane-dust-big"></div>
                <div className="plane-dust plane-dust-small"></div>
            </div>
        </div>
    ),
};

const raysConfig = {
    "triad-01": {
        dev: false,
        type: "triad-01",
        animateIn: true,
        params: {
            amt: {
                value: 20,
            },
            w: {
                base: 275,
                value: 275,
                ratio: 2.16,
            },
            spread: {
                value: -70,
            },
            x: {
                value: 44,
            },
            x_motion: {
                value: 3,
            },
            y: {
                value: 5,
            },
            h: {
                value: 0.08,
            },
            x_offset: {
                value: 8,
            },
            hue_in: { value: null },
            hue_out: { value: null },
            parallax: {
                value: 0.03,
            },
            parallax_refs: {
                regular_screen: 0.03,
                small_screen: -0.2,
            },
        },
    },
    "triad-01-variant": {
        dev: false,
        type: "triad-01-variant",
        animateIn: true,
        params: {
            amt: {
                value: 16,
            },
            w: {
                base: 225,
                value: 225,
                ratio: 2.16,
            },
            spread: {
                value: -55,
            },
            x: {
                value: 44,
            },
            x_motion: {
                value: 3,
            },
            y: {
                value: 5,
            },
            h: {
                value: 0.08,
            },
            x_offset: {
                value: 8,
            },
            hue_in: { value: null },
            hue_out: { value: null },
            parallax: {
                value: 0.03,
            },
            parallax_refs: {
                regular_screen: 0.03,
                small_screen: -0.2,
            },
        },
    },
    "triad-01-variant2": {
        dev: false,
        type: "triad-01-variant2",
        animateIn: true,
        params: {
            amt: {
                value: 16,
            },
            w: {
                base: 205,
                value: 225,
                ratio: 1.96,
            },
            spread: {
                value: -55,
            },
            x: {
                value: 44,
            },
            x_motion: {
                value: 3,
            },
            y: {
                value: 5,
            },
            h: {
                value: 0.08,
            },
            x_offset: {
                value: 8,
            },
            hue_in: { value: null },
            hue_out: { value: null },
            parallax: {
                value: 0.03,
            },
            parallax_refs: {
                regular_screen: 0.03,
                small_screen: -0.2,
            },
        },
    },
    "triad-03": {
        dev: false,
        type: "triad-03",
        params: {
            amt: {
                value: 12,
            },
            w: {
                base: 180,
                value: 180,
                ratio: 3.1,
            },
            spread: {
                value: -27,
            },
            x: {
                value: 68,
            },
            x_motion: {
                value: 4,
            },
            y: {
                value: 40,
            },
            h: {
                value: -0.2,
                smoothness: 0.94,
            },
            h_offset: {
                value: 2014.2,
            },
            hue_in: { value: null },
            hue_out: { value: null },
            parallax: {
                value: 0.02,
            },
            parallax_offset: {
                value: 680,
            },
            parallax_refs: {
                regular_screen: 0.02,
                small_screen: -0.09,
            },
        },
    },
    "jobs-triad-02": {
        dev: false,
        type: "jobs-triad-02",
        params: {
            amt: {
                value: 3,
            },
            w: {
                base: 195,
                value: 195,
                ratio: 2.16,
            },
            spread: {
                value: 86,
            },
            x: {
                value: 62,
            },
            x_motion: {
                value: 5,
            },
            x_offset: {
                value: 1,
            },
            y: {
                value: 51,
            },
            h: {
                value: 0,
            },
            h_offset: {
                value: 2006.8,
            },
            hue_in: { value: null },
            hue_out: { value: null },
            parallax: {
                value: 0.05,
            },
            parallax_offset: {
                value: 1800,
            },
            parallax_refs: {
                regular_screen: 0.05,
                small_screen: 0.2,
            },
        },
    },
};
