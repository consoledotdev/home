import css from "styled-jsx/css";
export default css.global`
    html {
        scroll-behavior: smooth;
    }

    .page-section.opening .company-heading .title.title-1,
    .page-section.profile .company-heading .title.title-2 {
        margin-bottom: var(--space1);
        word-break: break-word;
    }

    .page-section.opening .company-heading,
    .page-section.profile .company-heading {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        margin: 0 0 var(--space4);
    }

    @media (max-width: 480px) {
        .page-section.opening .company-heading,
        .page-section.profile .company-heading {
            flex-flow: column nowrap;
        }

        .page-section.opening .company-heading-text,
        .page-section.profile .company-heading-text {
            margin-top: var(--space3);
        }
    }

    @media (max-width: 768px) {
        @media (max-width: 414px) {
            .page-section.opening .title-1,
            .page-section.profile .title-2 {
                width: 100%;
                max-width: none;
            }
        }
    }

    .page-section.opening .company-heading .vendor-thumbnail,
    .page-section.profile .company-heading .vendor-thumbnail {
        margin-right: var(--space4);
        flex: 0 0 auto;
    }

    .page-section.opening .intro,
    .page-section.profile .intro {
        margin: var(--space3_5) 0;
        color: var(--theme-text-1);
    }

    .page-section.interview .framed-section .title.title-5,
    .page-section.profile .framed-section .title.title-5 {
        color: var(--theme-text-1);
        margin-bottom: var(--space3);
    }

    /* Pre-Opening -------------------------------------------------------------------- */
    .page-section.pre-opening {
        background: var(--theme-content-bg-1);
        padding-top: var(--space4);
        padding-bottom: var(--space4);
        margin-bottom: 0;
        z-index: 10;
    }

    .path {
        margin: 0;
        margin-top: calc(var(--space2) * -1);
        max-width: max(220px, calc(100% - var(--space6)));
        overflow: hidden;
    }

    .path > * {
        margin-top: var(--space2);
    }

    .path .console-button-text {
        padding-right: var(--space3);
    }

    .path p {
        display: inline-block;
        vertical-align: -0.7em;
        text-indent: calc(var(--space3) * -1);
    }

    .path p .link {
        display: inline;
        color: var(--theme-text-2);
    }

    /* Badge */
    .page-section.pre-opening .badge-wrapper {
        position: absolute;
        right: var(--contentMarginH);
        top: calc(var(--space2) * -1);
    }

    .page-section.pre-opening .badge-wrapper .badge-tooltip {
        transform: translateY(calc(var(--space3) * -1));
    }

    .page-section.pre-opening .badge-wrapper .badge-tooltip .link {
        margin-top: var(--space2);
    }

    .page-section.pre-opening .badge-wrapper svg rect:first-child {
        fill: transparent;
    }

    .page-section.pre-opening .badge-wrapper svg path:nth-child(4),
    .page-section.pre-opening .badge-wrapper svg path:nth-child(5),
    .page-section.pre-opening .badge-wrapper svg path:nth-child(6),
    .page-section.pre-opening .badge-wrapper svg path:nth-child(7),
    .page-section.pre-opening .badge-wrapper svg path:nth-child(8),
    .page-section.pre-opening .badge-wrapper svg path:nth-child(9),
    .page-section.pre-opening .badge-wrapper svg path:nth-child(10) {
        fill: transparent;
    }

    .page-section.pre-opening .badge-wrapper svg *:nth-last-child(1),
    .page-section.pre-opening .badge-wrapper svg *:nth-last-child(2),
    .page-section.pre-opening .badge-wrapper svg *:nth-last-child(3),
    .page-section.pre-opening .badge-wrapper svg *:nth-last-child(4) {
        transform: translateY(-12px);
    }

    /* Opening -------------------------------------------------------------------- */
    .page-section.opening {
        max-width: none;
        margin-top: 0;
        margin-bottom: 0;
        background: var(--theme-content-bg-0);
        padding-top: var(--space4_5);
        padding-bottom: var(--space4_5);
    }

    .page-section.opening.split {
        align-items: center;
    }

    @media (min-width: 865px) {
        .page-section.opening.split {
            gap: calc(var(--space5) + var(--space3));
        }
    }

    @media (min-width: 1280px) {
        .page-section.opening.split {
            gap: var(--space5_5);
        }
    }

    .page-section.opening .company-heading .vendor-thumbnail {
        width: var(--space5_5);
        height: var(--space5_5);
    }

    .page-section.opening .company-heading .inline-items {
        display: flex;
        flex-flow: row wrap;
        margin-top: calc(var(--space2) * -1);
    }

    .page-section.opening .company-heading .inline-items > * {
        margin-top: var(--space2);
    }

    .page-section.opening .right .image {
        min-height: calc(var(--space6_5) + var(--space4));
    }

    /* Review -------------------------------------------------------------------- */
    .page-section.review {
        max-width: none;
        margin-top: 0;
        margin-bottom: calc(var(--space5) + var(--space3));
        background: var(--theme-content-bg-1);
        padding-top: var(--space4_5);
        padding-bottom: var(--space4_5);
    }

    .page-section.review .title-5 {
        color: var(--theme-text-2);
    }

    .page-section.review .rich-title .icon {
        width: var(--space4);
        height: var(--space4);
    }

    .page-section.review .left .rich-title .icon-stroke {
        stroke: var(--theme-signaling-positive);
    }

    .page-section.review .right .rich-title .icon-stroke {
        stroke: var(--theme-signaling-warning);
    }

    .page-section.review .split {
        margin-top: var(--space4_5);
    }

    @media (min-width: 865px) {
        .page-section.review .split {
            gap: calc(var(--space5) + var(--space3));
        }
    }

    @media (min-width: 1280px) {
        .page-section.review .split {
            gap: var(--space5_5);
        }
    }

    .page-section.review .meta {
        margin-top: var(--space4_5);
        display: flex;
        flex-flow: row wrap;
    }

    .page-section.review .meta > *:first-child {
        flex: 1 1 auto;
        max-width: none;
        margin-bottom: 0;
        margin-right: var(--space4);
    }

    /* Page Split -------------------------------------------------------------------- */
    .page-split .page-section {
        padding: 0;
    }

    .page-split .page-section .console-separator {
        margin: var(--space2_5) 0 var(--space4);
    }

    .page-split .page-section .highlights {
        margin-top: var(--space4_5);
    }

    .page-split .page-section .highlights .title {
        color: var(--theme-text-2);
        margin-bottom: var(--space3_5);
    }

    .page-split .page-section .related-content-link-launch {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        margin-top: calc(var(--space4) + var(--space2));
    }

    .toc-content-end-ref {
        position: absolute;
        display: inline-block;
        margin: 0;
        padding: 0;
        margin-top: calc(var(--space6) * -1.2);
    }

    /* Podcast -------------------------------------------------------------------- */
    .page-section.podcast .title-4 {
        color: var(--theme-text-2);
    }

    .page-section.podcast .related-content-link-launch > .icon {
        margin-right: var(--space2_5);
    }

    .page-section.podcast .framed-section p > span:first-child {
        color: var(--theme-interviewee-name);
    }

    /* Profile -------------------------------------------------------------------- */
    .page-section.profile .company-heading .vendor-thumbnail {
        width: var(--space5);
        height: var(--space5);
    }

    /* About -------------------------------------------------------------------- */
    .page-section.about {
        padding-top: var(--space4);
    }
`;
