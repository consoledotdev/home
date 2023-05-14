import css from "styled-jsx/css";
export default css.global`
    .page-wrapper.home .main {
        z-index: 30;
        margin: var(--mTop) 0 0;
    }

    @media (max-width: 768px) {
        .page-wrapper.home .main {
            --mTop: var(--space6);
            --mBottom: var(--space6);
        }
    }

    @media (min-width: 769px) {
        .page-wrapper.home .main {
            --mTop: max(calc(var(--space6) - var(--space3)), 10vh);
            --mBottom: calc(var(--space6) - var(--space2));
        }
    }

    .page-section > * {
        z-index: 10;
    }

    .page-section {
        --sectH: 800px;
        --sectHMax: 120vh;
        --sectHMin: 650px;
        height: var(--sectH);
        min-height: var(--sectHMin) !important;
        max-height: var(--sectHMax);
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        margin-top: 0;
        margin-bottom: 0;
    }

    .description {
        color: var(--theme-text-2);
        font-size: var(--t-size1);
        line-height: var(--t-lH4);
    }

    /* Opening -------------------------------------------------------------------- */
    .page-section.opening {
        justify-content: center;
        height: calc(var(--sectH) - var(--mTop) - var(--headerTopPadding));
        max-height: calc(var(--sectHMax) - var(--mTop) - var(--headerTopPadding));
        z-index: 10;
    }

    .page-section.opening .description {
        font-size: var(--t-esize4);
    }

    @media (max-width: 768px) {
        .page-section.opening .bottom {
            margin-top: var(--space5);
            width: 100%;
        }
    }

    @media (min-width: 769px) {
        .page-section.opening {
            display: grid;
            align-items: center;
            gap: var(--space5_5);
        }
    }

    @media (min-width: 769px) {
        .page-section.opening {
            grid-template-columns: auto 42%;
        }
    }

    @media (min-width: 1024px) {
        .page-section.opening {
            grid-template-columns: auto 46%;
        }
    }

    @media (min-width: 1140px) {
        .page-section.opening {
            grid-template-columns: auto 50%;
        }
    }

    /** Opening Signup Form */
    @media (max-width: 768px) {
        .page-wrapper .page-section.opening .bottom .form-wrapper {
            max-width: 500px;
        }
    }

    @media (min-width: 769px) {
        .page-wrapper .page-section.opening .bottom .form-wrapper {
            max-width: 90%;
            margin: 0 auto;
        }
    }

    .page-wrapper .page-section.opening .bottom .console-form-subscribe {
        margin: var(--space3) 0;
    }

    .page-wrapper .page-section.opening .bottom .subscribers-count {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        font-style: italic;
        text-transform: uppercase;
        font-size: var(--t-size-2);
        color: var(--theme-text-2);
    }

    .page-wrapper .page-section.opening .bottom .subscribers-count .icon {
        fill: var(--theme-text-2);
        margin-right: var(--space1);
    }

    /* Opening artwork */
    .page-section.opening .artwork-wrapper-static img {
        position: absolute;
        height: 120%;
        width: auto;
        top: 50%;
        left: -8%;
        transform: translateY(-50%);
    }

    .page-section.opening .artwork-wrapper .plane-dust-wrapper.one {
        top: calc(50% - 51%);
        left: calc(50% - 28%);
    }

    .page-section.opening .artwork-wrapper .plane-dust-wrapper.one.dupe {
        top: calc(50% + 50%);
        left: calc(50% - 50%);
    }

    .page-section.opening .artwork-wrapper .plane-dust-wrapper.two {
        top: calc(50% - 51%);
        left: calc(50% + 43%);
    }

    .page-section.opening .artwork-wrapper .plane-dust-wrapper.two.dupe {
        top: calc(50% + 44%);
        left: calc(50% + 5%);
    }

    .page-section.opening .artwork-wrapper .plane-dust-wrapper.four {
        top: calc(50% + 44%);
        left: calc(50% - 46%);
    }

    .slim-plane.one {
        --w: 24px;
        top: calc(50% - 50%);
        left: calc(50% - 32%);
        animation-delay: 2s;
    }

    .slim-plane.two {
        --w: 56px;
        top: calc(50% - 48%);
        left: calc(50% - 15%);
        animation-delay: 2.05s;
    }

    .slim-plane.three {
        --w: 20px;
        top: calc(50% - 46%);
        left: calc(50% + 44%);
        animation-delay: 2.1s;
    }

    .slim-plane.four {
        --w: 44px;
        top: calc(50% + 31%);
        left: calc(50% - 12%);
        animation-delay: 2.15s;
    }

    .slim-plane.five {
        --w: 36px;
        top: calc(50% + 26%);
        left: calc(50% + 29.4%);
        animation-delay: 2.2s;
    }

    .slim-plane.six {
        --w: 44px;
        top: calc(50% - 12%);
        left: calc(50% + 69%);
        animation-delay: 2.25s;
    }

    @media (max-width: 540px) {
        .page-section.opening .artwork-wrapper .plane-dust-wrapper.one.dupe {
            top: calc(50% + 55%);
        }

        .page-section.opening .artwork-wrapper .plane-dust-wrapper.two.dupe {
            top: calc(50% + 49%);
        }

        .page-section.opening .artwork-wrapper .plane-dust-wrapper.four {
            top: calc(50% + 49%);
        }
    }

    @media (max-width: 400px) {
        .page-section.opening .artwork-wrapper .plane-dust-wrapper.one {
            top: calc(50% - 53%);
        }

        .page-section.opening .artwork-wrapper .plane-dust-wrapper.two {
            top: calc(50% - 53%);
        }
    }

    /* Podcast -------------------------------------------------------------------- */
    .page-section.podcast {
        --sectH: 1050px;
        --sectHMin: 1000px;
        justify-content: space-between;
        padding-top: calc(var(--space6) + var(--space6));
        padding-bottom: var(--mBottom);
        background: linear-gradient(transparent 0%, var(--theme-content-bg-1) 70%), transparent;
        z-index: 30;
    }

    @media (max-width: 1100px) {
        .page-section.podcast {
            --sectH: 1000px;
            padding-bottom: var(--space6);
        }
    }

    .page-section.podcast .top .title {
        margin-bottom: 0;
        color: var(--theme-text-accent-triad-03-light);
    }

    .page-section.podcast .top .title .icon {
        width: calc(var(--space4) + var(--space2));
        height: calc(var(--space4) + var(--space2));
    }

    .page-section.podcast .top .title .icon-fill-stroke {
        fill: var(--theme-text-accent-triad-03-light);
        stroke: var(--theme-text-accent-triad-03-light);
    }

    @media (max-width: 768px) {
        .page-section.podcast > .mid {
            margin-top: var(--space5);
            width: 100%;
        }

        .page-section.podcast > .mid > .right {
            margin-top: var(--space4);
        }
    }

    @media (min-width: 769px) {
        .page-section.podcast > .mid {
            display: grid;
            width: 100%;
            align-items: center;
            gap: calc(var(--space5) + var(--space3));
        }
    }

    @media (min-width: 769px) {
        .page-section.podcast > .mid {
            grid-template-columns: auto 42%;
        }
    }

    @media (min-width: 1024px) {
        .page-section.podcast > .mid {
            grid-template-columns: auto 46%;
        }
    }

    @media (min-width: 1140px) {
        .page-section.podcast > .mid {
            grid-template-columns: auto 50%;
        }
    }

    @media (max-width: 768px) {
        .page-section.podcast .bottom {
            margin-top: var(--space5);
        }
    }

    .podcast-widget {
        box-shadow: var(--theme-shadow-1);
    }

    @media (max-width: 768px) {
        .podcast-widget {
            margin-top: var(--space4_5);
            max-width: var(--space8);
        }
    }

    .podcast-widget .podcast-widget-header .title {
        display: none;
    }

    .page-section.podcast .bottom {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
        margin-top: calc(var(--space4) * -1);
    }

    @media (max-width: 768px) {
        .page-section.podcast .bottom {
            margin-top: calc(var(--space5) + (var(--space4) * -1));
        }
    }

    .page-section.podcast .bottom > * {
        margin-top: var(--space4);
    }

    .page-section.podcast .bottom > .link {
        margin-right: var(--space4);
    }

    .page-section.podcast .podcast-links-wrapper {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        margin-top: calc(var(--space4) + (var(--space3) * -1));
    }

    .page-section.podcast .podcast-links-wrapper > * {
        margin-top: var(--space3);
    }

    .page-section.podcast .podcast-links-wrapper .title {
        margin-bottom: 0;
        margin-right: var(--space3_5);
    }

    .page-section.podcast .podcast-links-wrapper img {
        width: calc(var(--space3) + var(--space2_5));
        height: calc(var(--space3) + var(--space2_5));
    }

    /* Podcast artwork */
    .page-section.podcast .artwork-wrapper-static img {
        position: absolute;
        height: 86%;
        width: auto;
        top: 50%;
        left: 50%;
        transform: translate(-55%, -53%);
    }

    .page-section.podcast .artwork-wrapper .plane-dust-wrapper.one {
        top: calc(50% - 38%);
        left: calc(50% - 10%);
    }

    .page-section.podcast .artwork-wrapper .plane-dust-wrapper.two {
        top: calc(50% + 27%);
        left: calc(50% + 6%);
    }

    .wave-word.mid {
        --w: 36px;
        top: calc(50% - 32%);
        left: calc(50% + 15%);
        animation-delay: 2s;
    }

    .wave-word.small {
        --w: 36px;
        top: calc(50% + 33%);
        left: calc(50% - 9.2%);
        animation-delay: 2.05s;
    }

    @media (max-width: 860px) {
        .wave-word.mid {
            top: calc(50% - 36%);
            left: calc(50% + 25%);
        }

        .wave-word.small {
            top: calc(50% + 38%);
            left: calc(50% - 16.2%);
        }
    }

    /* Jobs -------------------------------------------------------------------- */
    .page-section.jobs {
        --sectHMin: 850px;
        justify-content: space-between;
        padding-top: var(--space6);
        padding-bottom: var(--mBottom);
        background: linear-gradient(var(--theme-content-bg-1) 0%, var(--theme-content-bg-2) 60%), transparent;
        z-index: 20;
    }

    @media (max-width: 840px) {
        .page-section.jobs {
            --sectHMin: 800px;
            height: auto;
            max-height: auto;
        }
    }

    .page-section.jobs {
        align-items: center;
    }

    .page-section.jobs:before {
        content: "";
        position: absolute;
        top: 0;
        height: 1px;
        width: 100%;
        background: var(--theme-content-bg-3);
    }

    .page-section.jobs .top {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }

    .page-section.jobs .top .title:first-child {
        font-size: var(--t-size6);
        margin-top: 0;
        margin-bottom: 0;
        text-align: center;
    }

    .page-section.jobs .top .title:last-child {
        margin-top: var(--space3_5);
        margin-bottom: 0;
        text-align: center;
    }

    .page-section.jobs .top .title .icon {
        margin-top: 2px;
        width: var(--space4);
        height: var(--space4);
    }

    .page-section.jobs .top .title .icon circle {
        fill: var(--theme-jobs-triad-01);
    }

    .page-section.jobs .bottom .right > *:first-child {
        margin-top: 0;
    }

    @media (max-width: 840px) {
        .page-section.jobs .bottom {
            margin-top: var(--space5);
        }
    }

    @media (min-width: 841px) {
        .page-section.jobs .bottom {
            display: grid;
            width: 100%;
            grid-template-columns: auto 40%;
            align-items: center;
            gap: calc(var(--space5) + var(--space3));
            margin-bottom: var(--space6);
        }
    }

    @media (min-width: 920px) {
        .page-section.jobs .bottom {
            grid-template-columns: auto 42%;
            gap: var(--space5_5);
        }
    }

    @media (min-width: 980px) {
        .page-section.jobs .bottom {
            grid-template-columns: auto 42%;
        }
    }

    @media (min-width: 1080px) {
        .page-section.jobs .bottom {
            grid-template-columns: auto 45%;
        }
    }

    @media (min-width: 1280px) {
        .page-section.jobs .bottom {
            grid-template-columns: auto 50%;
        }
    }

    @media (max-width: 840px) {
        .page-section.jobs .bottom .left {
            text-align: center;
        }

        .page-section.jobs .bottom .right {
            margin-top: var(--space5);
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            text-align: center;
        }

        .page-section.jobs .bottom .right .description {
            width: 90%;
        }
    }

    .page-section.jobs .illustration {
        width: 92%;
        height: auto;
        vertical-align: top;
    }

    @media (max-width: 840px) {
        .page-section.jobs .illustration {
            width: 60%;
        }
    }

    @media (max-width: 700px) {
        .page-section.jobs .illustration {
            width: 65%;
        }
    }

    @media (max-width: 640px) {
        .page-section.jobs .illustration {
            width: 72%;
        }
    }

    @media (max-width: 540px) {
        .page-section.jobs .illustration {
            width: 80%;
        }
    }

    @media (max-width: 380px) {
        .page-section.jobs .illustration {
            width: 90%;
        }
    }

    @media (min-width: 841px) {
        .page-section.jobs .illustration {
            width: 100%;
        }
    }

    .page-section.jobs .ctas {
        margin-top: var(--space3);
        display: inline-flex;
        flex-flow: column nowrap;
        align-items: flex-start;
    }

    @media (max-width: 840px) {
        .page-section.jobs .ctas {
            margin-top: var(--space4);
        }
    }

    .page-section.jobs .ctas p {
        margin-top: var(--space4);
    }

    .page-section.jobs .ctas p .console-button-text {
        margin-left: var(--space2);
    }

    .page-section.jobs .console-button-text {
        color: var(--theme-cta-secondary-yellow-text-idle);
    }

    .page-section.jobs .console-button-text:hover {
        color: var(--theme-cta-secondary-yellow-text-hover);
    }

    .page-section.jobs .console-button-text:active {
        color: var(--theme-cta-secondary-yellow-text-active);
    }

    .page-section.jobs .console-button-text .icon-fill {
        fill: var(--theme-cta-secondary-yellow-text-idle);
    }

    .page-section.jobs .console-button-text:hover .icon-fill {
        fill: var(--theme-cta-secondary-yellow-text-hover);
    }

    .page-section.jobs .console-button-text:active .icon-fill {
        fill: var(--theme-cta-secondary-yellow-text-active);
    }

    /* Jobs artwork -------------------------------------------------------------------------------------------------------------- */
    .page-section.jobs .artwork-wrapper-static img {
        position: absolute;
        height: 66%;
        width: auto;
        top: 50%;
        left: 50%;
        transform: translate(-45%, -38%);
    }

    .page-section.jobs .artwork-wrapper .plane-dust-wrapper.three {
        top: calc(50% - 31%);
        left: calc(50% - 30%);
    }

    @media (max-width: 1280px) {
        .page-section.jobs .artwork-wrapper .plane-dust-wrapper.three {
            left: calc(50% - 35%);
        }
    }

    @media (max-width: 1024px) {
        .page-section.jobs .artwork-wrapper .plane-dust-wrapper.three {
            left: calc(50% - 40%);
        }
    }

    @media (max-width: 768px) {
        .page-section.jobs .artwork-wrapper .plane-dust-wrapper.three {
            top: calc(50% - 41%);
        }
    }

    .page-section.jobs .artwork-wrapper .plane-dust-wrapper.five {
        top: calc(50% + 33%);
        left: calc(50% + 24%);
    }

    @media (max-width: 768px) {
        .page-section.jobs .artwork-wrapper .plane-dust-wrapper.five {
            top: calc(50% + 36.5%);
        }
    }

    /* Rays -------------------------------------------- */
    .console-rays.triad-01 {
        left: 146px;
    }

    .console-rays.triad-03 {
        left: -250px;
    }

    .console-rays.triad-03 .ray:not(.is-hidden) {
        opacity: 0.7;
    }

    .console-rays.jobs-triad-02 {
        --global-rays-translate: translateY(-22%);
        left: 256px;
    }

    .console-rays.jobs-triad-02 .ray:not(.is-hidden) {
        opacity: 0.9;
    }
`;
