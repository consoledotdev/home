import css from "styled-jsx/css";
export default css.global`
    html {
        scroll-behavior: smooth;
    }

    .page-wrapper.podcast.single .title.title-1 {
        margin-top: var(--space2);
        margin-bottom: var(--space2);
        word-break: break-word;
    }

    .page-wrapper.podcast.single .title.title-2:not(:first-child) {
        margin-top: calc(var(--space4_5) + var(--space4));
    }

    .page-wrapper.podcast.single .title.title-4 {
        color: var(--theme-text-2);
    }

    .page-wrapper.podcast.single .page-section > .title.title-4 {
        margin-bottom: var(--space3_5);
    }

    .page-wrapper.podcast.single .title.title-4:not(:first-child) {
        margin-top: var(--space4_5);
    }

    .page-wrapper.podcast.single .page-section:not(:first-child) {
        margin-top: calc(var(--space4_5) + var(--space4));
    }

    .page-wrapper.podcast.single .page-split .page-section {
        max-width: 700px;
    }

    /* Opening -------------------------------------------------------------------- */
    .page-wrapper.podcast.single .page-section.opening {
        max-width: none;
        padding-bottom: 0;
        margin-bottom: calc(var(--space5) + var(--space4_5));
    }

    .page-wrapper.podcast.single .page-section.opening .top {
        display: grid;
        gap: var(--space5);
        margin-top: var(--space4);
    }

    .page-wrapper.podcast.single .page-section.opening .bottom {
        margin-top: calc(var(--space5) + var(--space3));
    }

    @media (max-width: 840px) {
        .page-wrapper.podcast.single .page-section.opening .bottom {
            margin-top: var(--space4_5);
        }
    }

    @media (max-width: 768px) {
        .page-wrapper.podcast.single .page-section.opening .top {
            gap: var(--space4_5);
        }
    }

    @media (max-width: 639px) {
        .page-wrapper.podcast.single .page-section.opening .bottom {
            margin-top: var(--space4_5);
        }
    }

    @media (max-width: 480px) {
        .page-wrapper.podcast.single .page-section.opening .top {
            gap: var(--space4);
        }

        .page-wrapper.podcast.single .page-section.opening .bottom {
            margin-top: var(--space4);
        }
    }

    @media (min-width: 769px) and (max-width: 1160px) {
        .page-wrapper.podcast.single .page-section.opening .top {
            grid-auto-flow: column;
            grid-auto-columns: 45% 1fr;
            align-items: center;
        }
    }

    @media (min-width: 1161px) {
        .page-wrapper.podcast.single .page-section.opening .top {
            grid-auto-flow: column;
            grid-auto-columns: 50% 1fr;
            align-items: center;
        }
    }

    .page-wrapper.podcast.single .page-section.opening .top .right .combo-box {
        position: relative;
        max-width: none;
        width: 100%;
        height: auto;
        border: var(--theme-border-2);
    }

    .page-wrapper.podcast.single .page-section.opening .intro {
        margin: var(--space3) 0 0;
        color: var(--theme-text-1);
    }

    .page-wrapper.podcast.single .page-section.opening .title-extras {
        margin-top: 0;
        display: flex;
        flex-flow: row wrap;
    }

    .page-wrapper.podcast.single .page-section.opening .title-extras > * {
        margin-top: var(--space2);
        margin-right: var(--space3);
        margin-bottom: 0;
    }

    .page-wrapper.podcast.single .page-section.opening .title-extras .title,
    .page-wrapper.podcast.single .page-section.opening .title-extras .small,
    .page-wrapper.podcast.single .page-section.opening .title-extras a.link:not(:hover):not(:focus):not(:active) {
        color: var(--theme-text-4);
    }

    .page-wrapper.podcast.single .page-section.opening .title-extras p > * {
        vertical-align: -0.28em;
        font-style: italic;
    }

    .page-wrapper.podcast.single .page-section.opening .page-meta {
        margin-top: calc((var(--space2) * -1) + var(--space3));
    }

    .page-wrapper.podcast.single .page-section.opening .page-meta p {
        color: var(--theme-text-3);
    }

    .page-wrapper.podcast.single .page-section.opening .page-meta .episode-no {
        font-style: italic;
    }

    .page-wrapper.podcast.single .page-section.opening .audio-player {
        flex: 1 1 auto;
    }

    .podcast-widget-wrapper.is-fixed {
        left: 6.25vw;
        right: 6.25vw;
        top: calc(var(--space5_5) + var(--space2));
        margin: 0 auto;
        z-index: 30;
    }

    .podcast-widget-wrapper.is-fixed .podcast-widget {
        box-shadow: var(--theme-shadow-3);
    }

    @media (min-width: 481px) and (max-width: 768px) {
        .podcast-widget-wrapper.is-fixed {
            left: 8vw;
            right: 8vw;
        }
    }

    /* 1200px + left & right margin (6.25vw) */
    @media (min-width: 1371px) {
        .podcast-widget-wrapper.is-fixed {
            left: calc(calc(100vw - 1200px) / 2);
            right: calc(calc(100vw - 1200px) / 2);
        }
    }

    @media (max-width: 768px) {
        @media (max-width: 414px) {
            .page-wrapper.podcast.single .page-section.opening .title-1,
            .page-wrapper.podcast.single .page-section.opening .description {
                width: 100%;
                max-width: none;
            }
        }
    }

    /* Markdown body ------------------------------------------------------------------------ */
    .page-wrapper.podcast.single .page-section.markdown-body {
        margin: 0;
        padding: 0;
    }

    .page-wrapper.podcast.single .page-section.markdown-body .title-4.rich-title {
        display: block;
        text-indent: calc(var(--space4) * -1);
        margin-left: var(--space4);
    }

    .page-wrapper.podcast.single .page-section.markdown-body .rich-title .icon {
        width: calc(var(--space3) + var(--space1));
        height: calc(var(--space3) + var(--space1));
        vertical-align: -0.26em;
        stroke: var(--theme-text-2);
        margin-right: var(--space3);
    }

    /* Transcript */
    .podcast-transcript {
        margin-top: var(--space5);
        margin-bottom: var(--space5);
    }

    .page-wrapper.podcast.single .box-collapsible {
        background: var(--theme-collapsible-bg-2);
    }

    .page-wrapper.podcast.single .box-collapsible .title.title-4 {
        margin-bottom: 0;
    }

    .page-wrapper.podcast.single .box-collapsible.is-expanded .box-collapsible-content {
        max-height: none;
    }

    .podcast-transcript .box-collapsible-content p:nth-child(1n) .text-medium:first-child,
    .podcast-transcript .box-collapsible-content p:nth-child(1n) .text-regular:first-child {
        color: var(--theme-interviewer-name);
    }

    .podcast-transcript .box-collapsible-content p:nth-child(2n) .text-medium:first-child,
    .podcast-transcript .box-collapsible-content p:nth-child(2n) .text-regular:first-child {
        color: var(--theme-interviewee-name);
    }

    /* More episodes ----------------------------------------------------------------------------------------- */
    .page-wrapper.podcast .page-section.more-episodes:not(:first-child) {
        margin-top: calc(var(--space4_5) + var(--space4));
        margin-bottom: 0;
        padding: 0;
    }

    /* About ------------------------------------------------------------------------------------------------ */
    .page-wrapper.podcast .page-section.about:not(:first-child) {
        margin-top: calc(var(--space5) + var(--space4_5));
        margin-bottom: var(--space5);
        padding: 0;
    }

    .page-wrapper.podcast .page-section.about > * {
        margin-top: var(--space4_5);
    }

    .page-wrapper.podcast .about-the-author {
        margin: 0 0 var(--space5);
    }

    /* Signup ------------------------------------------------------------------------------------------------ */
    .page-wrapper.podcast .page-section.signup {
        margin: 0;
        padding: 0;
    }

    @media (min-width: 1280px) {
        .xl-viewport-large-text .other-episode .title.title-6 {
            font-size: var(--t-size2);
        }

        .xl-viewport-large-text .other-episode-title-extras p:last-child {
            font-size: var(--t-size-2);
        }

        .xl-viewport-large-text .other-episode-meta p {
            font-size: var(--t-size-1);
        }

        .xl-viewport-large-text .audio-player .icon-loader {
            font-size: var(--t-size1);
        }
    }

    [data-theme="light"] {
        .theme .main .podcast-widget.style-alt.art-header .podcast-widget-body,
        .theme .main .podcast-widget.style-alt .podcast-widget-footer {
            border-top: 0px;
        }
    }
`;
