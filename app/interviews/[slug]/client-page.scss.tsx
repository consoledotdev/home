import css from "styled-jsx/css";
export default css.global`
    html {
        scroll-behavior: smooth;
    }

    .page-wrapper.interviews.single .title.title-1 {
        margin-top: var(--space2);
        margin-bottom: var(--space2);
        word-break: break-word;
    }

    .page-wrapper.interviews.single .title.title-1 span {
        color: var(--theme-text-4);
    }

    .page-wrapper.interviews.single .title.title-2:not(:first-child) {
        margin-top: calc(var(--space4_5) + var(--space2));
    }

    .page-wrapper.interviews.single .page-section:not(:first-child) {
        margin-top: calc(var(--space4_5) + var(--space4));
    }

    .page-wrapper.interviews.single .page-split .page-section {
        max-width: 700px;
    }

    /* Opening -------------------------------------------------------------------- */
    .page-wrapper.interviews.single .page-section.opening {
        max-width: none;
        padding-bottom: 0;
        margin-bottom: calc(var(--space5) + var(--space3));
    }

    .page-wrapper.interviews.single .page-section.opening .top {
        display: grid;
        gap: var(--space5);
        margin-top: var(--space4);
    }

    @media (max-width: 768px) {
        .page-wrapper.interviews.single .page-section.opening {
            margin-bottom: var(--space5);
        }

        .page-wrapper.interviews.single .page-section.opening .top {
            gap: var(--space4_5);
        }
    }

    @media (max-width: 480px) {
        .page-wrapper.interviews.single .page-section.opening .top {
            gap: var(--space4);
        }
    }

    @media (min-width: 769px) and (max-width: 1160px) {
        .page-wrapper.interviews.single .page-section.opening .top {
            grid-auto-flow: column;
            grid-auto-columns: 45% 1fr;
            align-items: center;
        }
    }

    @media (min-width: 1161px) {
        .page-wrapper.interviews.single .page-section.opening .top {
            grid-auto-flow: column;
            grid-auto-columns: 50% 1fr;
            align-items: center;
        }
    }

    .page-wrapper.interviews.single .page-section.opening .top .right .combo-box {
        position: relative;
        max-width: none;
        width: 100%;
        height: auto;
        border: var(--theme-border-2);
    }

    .page-wrapper.interviews.single .page-section.opening .intro {
        margin: var(--space3) 0 0;
        color: var(--theme-text-1);
    }

    .page-wrapper.interviews.single .page-section.opening .title-extras {
        margin-top: 0;
        display: flex;
        flex-flow: row wrap;
    }

    .page-wrapper.interviews.single .page-section.opening .title-extras > * {
        margin-top: var(--space2);
        margin-right: var(--space3);
        margin-bottom: 0;
    }

    .page-wrapper.interviews.single .page-section.opening .title-extras .title {
        color: var(--theme-text-4);
    }

    .page-wrapper.interviews.single .page-section.opening .title-extras p > * {
        vertical-align: -0.28em;
        font-style: italic;
    }

    .page-wrapper.interviews.single .page-section.opening .page-meta {
        margin-top: calc((var(--space2) * -1) + var(--space3));
    }

    .page-wrapper.interviews.single .page-section.opening .page-meta p {
        color: var(--theme-text-3);
    }

    @media (max-width: 768px) {
        @media (max-width: 414px) {
            .page-wrapper.interviews.single .page-section.opening .title-1,
            .page-wrapper.interviews.single .page-section.opening .description {
                width: 100%;
                max-width: none;
            }
        }
    }

    .main > .console-separator {
        margin-bottom: calc(var(--space5));
    }

    /* Markdown body ------------------------------------------------------------------------ */
    .page-wrapper.interviews.single .page-section.markdown-body {
        margin-top: 0;
        padding: 0;
    }

    .page-wrapper.interviews.single .page-section.markdown-body p > .text-regular:first-child {
        color: var(--theme-text-1);
    }

    .page-wrapper.interviews.single .page-section.markdown-body .image-wrapper {
        margin-top: var(--space4_5);
    }

    .page-wrapper.interviews.single .page-section.markdown-body .image-wrapper img {
        width: 100%;
        height: auto;
    }

    /* Signup ------------------------------------------------------------------------------------------------ */
    .page-wrapper.interviews .page-section.signup {
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
`;
