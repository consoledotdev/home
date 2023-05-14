import css from "styled-jsx/css";
export default css.global`
    .artwork-wrapper-dynamic {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    .artwork-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        pointer-events: none;
    }

    @keyframes decorator-small-appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    /* Plane Dust */
    .plane-dust-wrapper {
        position: absolute;
        display: inline-block;
        z-index: 100;
    }

    body:not(.is-same-origin) .plane-dust-wrapper {
        opacity: 0;
        animation-duration: 2.5s;
        animation-delay: 0.8s;
        animation-name: decorator-small-appear;
        animation-fill-mode: forwards;
    }

    @media (prefers-reduced-motion: reduce) {
        .plane-dust-wrapper,
        body:not(.is-same-origin) .plane-dust-wrapper {
            animation: none;
            opacity: 1;
        }
    }

    .plane-dust-wrapper > * {
        position: absolute;
    }

    .plane-dust {
        display: inline-block;
        background: var(--theme-dust-color);
        border-radius: 2px;
        transform: scaleY(0.8945) skewX(-24.1deg);
    }

    @media (max-width: 768px) {
        .plane-dust {
            background: var(--theme-dust-color-light);
        }
    }

    .plane-dust-big {
        width: calc(var(--space2) + var(--space0) + 1px);
        height: calc(var(--space2) + var(--space0) + 1px);
    }

    .plane-dust-small {
        width: calc(var(--space1) + var(--space0) + 1px);
        height: calc(var(--space1) + var(--space0) + 1px);
    }

    .plane-dust-wrapper.one .plane-dust-big {
        display: none;
    }

    .plane-dust-wrapper.two .plane-dust-big {
        margin-left: 20px;
    }

    .plane-dust-wrapper.two .plane-dust-small {
        margin-top: 13px;
    }

    .plane-dust-wrapper.three .plane-dust-big {
        margin-left: 49px;
    }

    .plane-dust-wrapper.three .plane-dust-small {
        margin-top: 21px;
    }

    .plane-dust-wrapper.four .plane-dust-big {
        margin-top: 11px;
    }

    .plane-dust-wrapper.four .plane-dust-small {
        margin-left: 22px;
    }

    .plane-dust-wrapper.five .plane-dust-big {
        margin-top: 22px;
    }

    .plane-dust-wrapper.five .plane-dust-small {
        margin-left: 33px;
    }

    @keyframes decorator-big-appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 0.5;
        }
    }

    /* Slim plane */
    .slim-plane {
        --w: 32px;
        display: inline-block;
        position: absolute;
        background: var(--theme-slim-plane-color);
        width: var(--w);
        height: calc(var(--w) * 2.2);
        transform: scaleY(0.8945) skewX(-24.1deg);
        box-shadow: var(--theme-slim-plane-glow);
        opacity: 0.5;
    }

    body:not(.is-same-origin) .slim-plane {
        opacity: 0;
        animation-duration: 0.5s;
        animation-delay: 2s;
        animation-name: decorator-big-appear;
        animation-fill-mode: forwards;
    }

    @media (prefers-reduced-motion: reduce) {
        .slim-plane,
        body:not(.is-same-origin) .slim-plane {
            animation: none;
            opacity: 0.5;
        }
    }

    /* Wave word */
    .wave-word {
        --w: 32px;
        display: inline-block;
        position: absolute;
        width: var(--w);
        transform: scaleY(0.8945) skewX(-24.1deg);
        opacity: 0.5;
    }

    body:not(.is-same-origin) .wave-word {
        opacity: 0;
        animation-duration: 0.5s;
        animation-delay: 2s;
        animation-name: decorator-big-appear;
        animation-fill-mode: forwards;
    }

    @media (prefers-reduced-motion: reduce) {
        .wave-word,
        body:not(.is-same-origin) .wave-word {
            animation: none;
            opacity: 0.5;
        }
    }

    .wave-word .el {
        --w: 15%;
        background: var(--theme-wave-word-color);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 10%;
        box-shadow: var(--theme-wave-word-glow);
    }

    .wave-word.mid {
        height: calc(var(--w) * 1.7);
    }

    .wave-word.small {
        height: calc(var(--w) * 1.15);
    }

    .wave-word.mid .el1,
    .wave-word.small .el1 {
        left: 0;
        height: 50%;
    }

    .wave-word.mid .el2,
    .wave-word.small .el2 {
        left: calc(50% - var(--w) / 2);
        height: 100%;
    }

    .wave-word.small .el3 {
        right: 0;
        height: 50%;
    }

    .wave-word.mid .el3 {
        right: 0;
        height: 75%;
    }

    /* Console Rays
    ================================================================================================================ */
    .console-rays {
        --global-rays-translate: translateY(-50%);
        --global-rays-scaleY: scaleY(0.8945);
        --global-rays-skew: skew(-24.4deg);
        position: absolute;
        display: flex;
        flex-flow: row nowrap;
        transform: var(--global-rays-translate) var(--global-rays-scaleY) var(--global-rays-skew);
        top: 50%;
        width: 275px;
    }

    .console-rays .ray {
        position: relative;
        display: inline-block;
        flex: 1 0 auto;
        width: 100%;
        height: 0;
        mix-blend-mode: var(--theme-rays-blend);
        opacity: 0.6;
        padding-bottom: 216%;
        will-change: transform; /* https://stackoverflow.com/a/53295092 */
        transition: transform 0.1s var(--a-elements-easing), opacity 1s var(--a-elements-easing);
    }

    .console-rays .ray.is-hidden {
        opacity: 0;
    }

    .console-rays .ray.fast-show {
        transition: all 0s;
    }

    .console-rays.triad-01 .ray,
    .console-rays.triad-01-variant .ray,
    .console-rays.triad-01-variant2 .ray {
        background: var(--theme-rays-triad-01-color);
        box-shadow: var(--theme-rays-triad-01-glow);
    }

    .console-rays.triad-03 .ray {
        background: var(--theme-rays-triad-03-color);
        box-shadow: var(--theme-rays-triad-03-glow);
    }

    .console-rays.jobs-triad-02 .ray {
        background: var(--theme-rays-jobs-triad-02-color);
        box-shadow: var(--theme-rays-jobs-triad-02-glow);
    }

    .page-section.full-width .console-rays {
        margin-left: var(--contentMarginH);
        margin-right: var(--contentMarginH);
    }

    @media (min-width: 481px) and (max-width: 768px) {
        .page-section.full-width .console-rays {
            margin-left: var(--contentMarginH);
            margin-right: var(--contentMarginH);
        }
    }

    @media (min-width: 1371px) {
        .page-section.full-width .console-rays {
            margin-left: var(--contentMarginH);
            margin-right: var(--contentMarginH);
        }
    }

    /* Controls ------------------------------------------------------ */
    .console-rays-controls {
        display: none;
        position: fixed;
        left: 0;
        top: 0;
        width: 20%;
        z-index: 200;
        padding: var(--space3_5) var(--space3_5);
        box-sizing: border-box;
        line-height: 0.8em;
        flex-flow: column nowrap;
    }

    .console-rays-controls.dev {
        display: flex;
    }

    .console-rays-controls p {
        display: inline-block;
        margin-top: var(--space3_5);
        margin-bottom: var(--space1);
        font-size: var(--t-size-3);
    }

    .console-rays-controls .control-out {
        display: inline-block;
        font-size: var(--t-size-3);
        width: 5em;
        margin-left: var(--space3);
        color: var(--theme-text-3);
    }

    .console-rays-controls .number-control,
    .console-rays-controls .number-control:active,
    .console-rays-controls .number-control:hover {
        width: 5em;
        font-size: var(--t-size-3);
        margin-left: var(--space3);
        background: var(--theme-content-bg-3);
        border: 0px transparent;
        border-radius: 4px;
        padding: var(--space1);
        outline: none;
        color: var(--theme-text-3);
    }

    .console-rays-controls .number-control:focus {
        background: var(--theme-content-bg-4);
        color: var(--theme-text-2);
    }

    .console-rays-controls .range-control {
        -webkit-appearance: none;
        margin-right: 15px;
        width: 100%;
        height: 1px;
        background: var(--theme-input-checkable-off-dark);
        border-radius: 5px;
    }

    .console-rays-controls .hue_in .range-control,
    .console-rays-controls .hue_out .range-control {
        --rainbowL: 30%;
        --rainbowS: 100%;
        background: linear-gradient(90deg, hsl(0, var(--rainbowS), var(--rainbowL)), hsl(30, var(--rainbowS), var(--rainbowL)), hsl(60, var(--rainbowS), var(--rainbowL)), hsl(90, var(--rainbowS), var(--rainbowL)), hsl(120, var(--rainbowS), var(--rainbowL)), hsl(150, var(--rainbowS), var(--rainbowL)), hsl(180, var(--rainbowS), var(--rainbowL)), hsl(210, var(--rainbowS), var(--rainbowL)), hsl(240, var(--rainbowS), var(--rainbowL)), hsl(270, var(--rainbowS), var(--rainbowL)), hsl(300, var(--rainbowS), var(--rainbowL)), hsl(330, var(--rainbowS), var(--rainbowL)), hsl(360, var(--rainbowS), var(--rainbowL)));
    }

    .console-rays-controls .range-control::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: var(--space2_5);
        width: var(--space2_5);
        border-radius: 50%;
        background: var(--theme-text-2);
        cursor: ew-resize;
        box-shadow: 0 0 0 0 transparent;
        transition: background 0.3s ease-in-out;
    }

    .console-rays-controls .range-control::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        box-shadow: none;
        border: none;
        background: transparent;
    }
`;
