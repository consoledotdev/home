import css from "styled-jsx/css";
export default css.global`
    html {
        scroll-behavior: smooth;
    }

    .page-wrapper.latest .title.title-1 {
        margin-top: var(--space2);
        margin-bottom: var(--space2);
        word-break: break-word;
    }

    .page-wrapper.latest .title.title-1 span {
        color: var(--theme-text-4);
    }

    .page-wrapper.latest .title.title-2:not(:first-child) {
        margin-top: calc(var(--space4_5) + var(--space4));
    }

    .page-wrapper.latest .page-section:not(:first-child) {
        margin-top: calc(var(--space4_5) + var(--space4));
    }

    .page-wrapper.latest .page-split .page-section {
        max-width: 700px;
    }

    /* Opening -------------------------------------------------------------------- */
    .page-wrapper.latest .page-section.opening {
        max-width: none;
        padding-bottom: 0;
        margin-bottom: var(--space5_5);
    }

    .page-wrapper.latest .page-section.opening .top {
        display: grid;
        gap: var(--space5_5);
        margin-top: var(--space4);
    }

    @media (max-width: 768px) {
        .page-wrapper.latest .page-section.opening {
            margin-bottom: var(--space5);
        }

        .page-wrapper.latest .page-section.opening .top {
            gap: var(--space4_5);
        }
    }

    @media (max-width: 480px) {
        .page-wrapper.latest .page-section.opening .top {
            gap: var(--space4);
        }
    }

    @media (min-width: 769px) {
        .page-wrapper.latest .page-section.opening .top {
            grid-auto-flow: column;
            grid-auto-columns: 45% 1fr;
            align-items: center;
        }
    }

    .page-wrapper.latest .page-section.opening .intro {
        margin: var(--space3) 0 0;
        color: var(--theme-text-1);
    }

    .page-wrapper.latest .page-section.opening .title-extras {
        margin-top: 0;
        display: flex;
        flex-flow: row wrap;
    }

    .page-wrapper.latest .page-section.opening .title-extras > * {
        margin-top: var(--space2);
        margin-right: var(--space3);
        margin-bottom: 0;
    }

    .page-wrapper.latest .page-section.opening .title-extras .title {
        color: var(--theme-text-4);
    }

    @media (max-width: 768px) {
        @media (max-width: 414px) {
            .page-wrapper.latest .page-section.opening .title-1,
            .page-wrapper.latest .page-section.opening .description {
                width: 100%;
                max-width: none;
            }
        }
    }

    /** Opening Signup Form */
    @media (max-width: 768px) {
        .page-wrapper.latest .page-section.opening .right .form-wrapper {
            max-width: 500px;
        }
    }

    @media (min-width: 769px) {
        .page-wrapper.latest .page-section.opening .right .form-wrapper {
            max-width: 90%;
            margin: 0 auto;
        }
    }

    .page-wrapper.latest .page-section.opening .right .console-form-subscribe {
        margin: var(--space3) 0;
    }

    .page-wrapper.latest .page-section.opening .right .subscribers-count {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        font-style: italic;
        text-transform: uppercase;
        font-size: var(--t-size-2);
        color: var(--theme-text-2);
    }

    .page-wrapper.latest .page-section.opening .right .subscribers-count .icon {
        fill: var(--theme-text-2);
        margin-right: var(--space1);
    }

    /* Latest -------------------------------------------------------------------- */
    .page-section.latest-newsletter {
        margin-top: 0;
        padding: var(--space6) 0;
    }

    .page-section.latest-newsletter.page-section-plane:after {
        width: 200%;
    }

    .page-section.latest-newsletter .latest-newsletter-list p {
        text-indent: calc(var(--space3_5) * -1);
        margin-left: var(--space3_5);
    }

    .page-section.latest-newsletter .latest-newsletter-list p .link {
        display: inline;
    }

    .page-section.latest-newsletter .latest-newsletter-list .icon {
        vertical-align: -0.2em;
        margin-right: var(--space2_5);
        width: var(--space3);
        height: var(--space3);
    }

    .page-section.latest-newsletter .latest-newsletter-item {
        margin-top: var(--space4_5);
    }

    .page-section.latest-newsletter .latest-newsletter-item .title-3 {
        margin-top: 0;
    }

    .page-section.latest-newsletter .latest-newsletter-item .title-3 {
        margin-bottom: var(--space2);
    }

    .page-section.latest-newsletter .latest-newsletter-item .title-5 {
        margin-top: var(--space2);
    }

    .page-section.latest-newsletter .latest-newsletter-item .sponsor-disclosure {
        margin-bottom: var(--space3);
    }

    /* Signup ------------------------------------------------------------------------------------------------ */
    .page-wrapper.latest .page-section.signup {
        margin: 0;
        padding: 0;
    }
`;
