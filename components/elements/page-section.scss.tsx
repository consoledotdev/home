import css from "styled-jsx/css";
export default css.global`
    .page-section {
        position: relative;
    }

    .page-section {
        margin-top: var(--space5_5);
        margin-bottom: var(--space5_5);
        padding-top: calc(var(--space5) + var(--space3));
        padding-bottom: calc(var(--space5) + var(--space3));
    }

    .page-section:first-of-type {
        margin-top: 0;
        padding-top: 0;
    }

    .page-section:last-child {
        margin-bottom: 0;
    }

    .section-anchor {
        position: absolute;
        margin-top: calc(var(--space6) * -1);
    }

    /* Full Width */
    .page-section.full-width {
        width: 100vw;
        margin-left: calc(var(--contentMarginH) * -1);
        margin-right: calc(var(--contentMarginH) * -1);
        padding-left: var(--contentMarginH);
        padding-right: var(--contentMarginH);
    }

    @media (min-width: 481px) and (max-width: 768px) {
        .page-section.full-width {
            margin-left: calc(var(--contentMarginH) * -1);
            margin-right: calc(var(--contentMarginH) * -1);
            padding-left: var(--contentMarginH);
            padding-right: var(--contentMarginH);
        }
    }

    @media (min-width: 1371px) {
        .page-section.full-width {
            margin-left: calc(var(--contentMarginH) * -1);
            margin-right: calc(var(--contentMarginH) * -1);
            padding-left: var(--contentMarginH);
            padding-right: var(--contentMarginH);
        }
    }

    /* Heading */
    .page-section-heading {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--space4);
    }

    .page-section-sub .page-section-heading {
        margin-bottom: 0;
    }

    .page-section-heading .left {
        flex: 1 1 auto;
        margin-right: var(--space3);
    }

    .page-section-heading .title.title-1,
    .page-section-heading .title.title-2 {
        margin-bottom: 0;
    }

    .page-section-heading .right {
        flex: 0 0 auto;
    }

    /* Contained lists */
    .page-section ul {
        padding: 0 0 0 var(--space2);
        margin-top: var(--space3);
        margin-bottom: 0;
    }

    .page-section ul li {
        padding-bottom: var(--space3);
        list-style: none;
        padding-left: calc(10px + var(--space2));
        text-indent: calc(calc(10px + var(--space2)) * -1);
        color: var(--theme-text-1);
        font-size: var(--t-size-1);
        letter-spacing: 0.1em;
    }

    .page-section ul li * {
        text-indent: initial;
    }

    .page-section ul li:before {
        content: "";
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Cpath d='M44.9007 33.0044L114 33L83.0993 94.8051L14 94.8095L44.9007 33.0044Z' fill='%235269ff'/%3E%3C/svg%3E");
        background-size: cover;
        width: 10px;
        height: 10px;
        margin-right: var(--space2);
        position: relative;
        display: inline-block;
    }

    .page-section ol {
        padding: 0 0 0 var(--space2);
        margin-top: var(--space3);
        margin-bottom: 0;
        counter-reset: ol-counter;
    }

    .page-section ol li {
        list-style: none;
        position: relative;
        counter-increment: ol-counter;
        padding-bottom: var(--space3);
        padding-left: calc(10px + var(--space2));
        text-indent: calc(calc(10px + var(--space2)) * -1);
        color: var(--theme-text-1);
        font-size: var(--t-size-1);
        letter-spacing: 0.1em;
    }

    .page-section ol li:before {
        content: counter(ol-counter);
        text-indent: initial;
        margin-right: calc(var(--space2) + var(--space1));
        font-size: var(--t-size-2);
        font-style: italic;
        color: var(--c-blue-06-main);
        position: relative;
        display: inline-block;
    }

    .page-section ol li:after {
        content: "/";
        text-indent: initial;
        left: 10px;
        top: 0;
        font-size: var(--t-size-4);
        position: absolute;
        display: inline-block;
        color: var(--c-blue-06-main);
    }

    /* Styles ------------------------------------------------------------------------------------------- */
    /* Plane */
    .page-section-plane {
        background: var(--theme-page-section-plane);
        padding: var(--space6) 0;
    }

    .page-section-plane * {
        z-index: 1;
    }

    .page-section-plane:before,
    .page-section-plane:after {
        content: "";
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-size: auto 100%;
        z-index: 0;
    }

    .page-section-plane:before {
        left: -100%;
        background-position: calc(100% + 0.5px);
        background-image: var(--theme-page-section-plane-left);
    }

    .page-section-plane:after {
        left: 100%;
        background-position: left;
        background-image: var(--theme-page-section-plane-right);
    }
`;
