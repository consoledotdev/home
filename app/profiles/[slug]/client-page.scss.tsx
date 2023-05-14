import css from "styled-jsx/css";
export default css.global`
    html {
        scroll-behavior: smooth;
    }

    .page-wrapper.profiles .title.title-1 {
        margin-top: var(--space2);
        margin-bottom: var(--space2);
        word-break: break-word;
    }

    .page-wrapper.profiles .title.title-2:not(:first-child) {
        margin-top: calc(var(--space4_5) + var(--space4));
    }

    .page-wrapper.profiles aside .title.title-4 {
        color: var(--theme-text-2);
    }

    .page-wrapper.profiles .page-section > .title.title-4 {
        margin-bottom: var(--space3_5);
    }

    .page-wrapper.profiles .title.title-4:not(:first-child) {
        margin-top: var(--space4_5);
    }

    .page-wrapper.profiles .page-section:not(:first-child) {
        margin-top: calc(var(--space4_5) + var(--space4));
    }

    .page-wrapper.profiles .page-split .page-section {
        max-width: 700px;
    }

    /* Opening -------------------------------------------------------------------- */
    .page-wrapper.profiles .page-section.opening {
        max-width: none;
        padding-bottom: 0;
    }

    .page-wrapper.profiles .page-section.opening .top {
        display: grid;
        margin-top: var(--space4);
    }

    @media (max-width: 768px) {
        .page-wrapper.profiles .page-section.opening .top {
            gap: var(--space2);
        }
    }

    @media (min-width: 769px) {
        .page-wrapper.profiles .page-section.opening .top {
            gap: var(--space5);
            grid-auto-flow: column;
            grid-auto-columns: 1fr max(32%, 320px);
            align-items: center;
        }
    }

    .page-wrapper.profiles .page-section.opening .company-heading {
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        margin-bottom: var(--space4);
    }

    @media (max-width: 480px) {
        .page-wrapper.profiles .page-section.opening .company-heading {
            flex-flow: column nowrap;
        }

        .page-wrapper.profiles .page-section.opening .company-heading-text {
            margin-top: var(--space3);
        }
    }

    @media (max-width: 768px) {
        @media (max-width: 414px) {
            .page-wrapper.profiles .page-section.opening .title-1 {
                width: 100%;
                max-width: none;
            }
        }
    }

    .page-wrapper.profiles .page-section.opening .company-heading .vendor-thumbnail {
        width: var(--space5_5);
        height: var(--space5_5);
        margin-right: var(--space4);
        flex: 0 0 auto;
    }

    .page-wrapper.profiles .page-section.opening .intro {
        margin: var(--space3_5) 0;
        color: var(--theme-text-1);
    }

    .page-wrapper.profiles .page-section.opening .title-extras {
        margin-top: 0;
        display: flex;
        flex-flow: row wrap;
    }

    .page-wrapper.profiles .page-section.opening .title-extras > * {
        margin-top: var(--space2);
        margin-right: var(--space3);
        margin-bottom: 0;
    }

    .page-wrapper.profiles .page-section.opening .title-extras .title,
    .page-wrapper.profiles .page-section.opening .title-extras .small,
    .page-wrapper.profiles .page-section.opening .title-extras a.link:not(:hover):not(:focus):not(:active) {
        color: var(--theme-text-4);
    }

    .page-wrapper.profiles .page-section.opening .title-extras p > * {
        vertical-align: -0.28em;
        font-style: italic;
    }

    .page-wrapper.profiles .page-section.opening .left .console-button {
        display: none;
    }

    .page-wrapper.profiles .page-section.opening .right .console-button {
        display: inline-flex;
        margin-top: var(--space4_5);
    }

    @media (min-width: 769px) {
        .page-wrapper.profiles .page-section.opening .left .console-button {
            display: inline-flex;
        }

        .page-wrapper.profiles .page-section.opening .right .console-button {
            display: none;
        }
    }

    @media (max-width: 639px) {
        .page-wrapper.profiles .page-section.opening .right .console-button {
            margin-top: var(--space4);
        }
    }

    .page-wrapper.profiles .page-section.opening .framed-section {
        padding: var(--space3) 0;
    }

    .page-wrapper.profiles .page-section.opening .framed-section .simple-table {
        margin: 0 var(--space3);
    }

    .page-wrapper.profiles .page-section.opening .framed-section .simple-table .simple-table-grid {
        min-width: 0;
    }

    .page-wrapper.profiles .page-section.opening .framed-section .simple-table .simple-table-grid .row {
        grid-auto-columns: var(--space5_5) 1fr;
    }

    .page-wrapper.profiles .page-section.opening .framed-section .simple-table .simple-table-grid .row .cell {
        padding: var(--space2);
    }

    .page-wrapper.profiles .page-section.opening .bottom {
        margin-top: var(--space5);
    }

    @media (max-width: 639px) {
        .page-wrapper.profiles .page-section.opening .bottom {
            margin-top: var(--space4_5);
        }
    }

    .page-wrapper.profiles .page-section.opening .bottom {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
        gap: var(--space3_5);
    }

    .page-wrapper.profiles .page-section.opening .bottom .company-shot {
        position: relative;
    }

    .page-wrapper.profiles .page-section.opening .bottom .modal-link {
        padding-bottom: 48%;
    }

    @media (min-width: 321px) and (max-width: 850px) {
        .page-wrapper.profiles .page-section.opening .bottom {
            --growth: calc((850px - 100vw) * 0.03);
            gap: calc(var(--space3_5) - var(--growth));
        }

        .page-wrapper.profiles .page-section.opening .bottom .modal-link {
            --growth: calc((850px - 100vw) * 0.12);
            padding-bottom: calc(48% + var(--growth));
        }
    }

    @media (max-width: 320px) {
        .page-wrapper.profiles .page-section.opening .bottom {
            gap: 8px;
        }

        .page-wrapper.profiles .page-section.opening .bottom .modal-link {
            padding-bottom: 106px;
        }
    }

    .page-wrapper.profiles .page-section.opening .bottom .modal-link .image {
        width: calc(100% - 2px);
        height: calc(100% - 2px);
    }

    /* Content split ------------------------------------------------------------- */
    @media (min-width: 769px) {
        .content-split {
            display: flex;
            flex-flow: row nowrap;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: row-reverse;
        }

        .content-split > .page-section {
            flex: 1 1 auto;
        }
    }

    /* Product */
    .page-wrapper.profiles .page-section.product {
        padding: 0;
    }

    /* .page-wrapper.profiles .page-section.product .framed-section {
    margin-left: calc(var(--space3_5) * -1);
    margin-right: calc(var(--space3_5) * -1);
  } */

    @media (max-width: 768px) {
        @media (max-width: 480px) {
            .page-wrapper.profiles .page-section.product .framed-section {
                margin-left: calc(var(--space3) * -1);
                margin-right: calc(var(--space3) * -1);
            }

            .page-wrapper.profiles .page-section.product .framed-section > *:not(.framed-section-item) {
                margin-left: var(--space3);
                margin-right: var(--space3);
            }

            .page-wrapper.profiles .page-section.product .framed-section-item > * {
                margin-left: var(--space3);
                margin-right: var(--space3);
            }
        }

        @media (max-width: 400px) {
            .page-wrapper.profiles .page-section.product .framed-section {
                margin-left: calc(var(--space2_5) * -1);
                margin-right: calc(var(--space2_5) * -1);
            }
        }
    }

    .page-wrapper.profiles .page-section.product .company-tech-stack {
        margin-top: var(--space3_5);
        display: flex;
        flex-flow: row wrap;
        margin-bottom: calc(var(--space3) * -1);
    }

    .page-wrapper.profiles .page-section.product .company-tech-stack .tech-stack-item {
        flex: 0 0 auto;
        margin-right: var(--space4);
        margin-bottom: var(--space3);
        font-size: var(--t-size0);
    }

    .page-wrapper.profiles .page-section.product .company-case-study {
        color: var(--theme-text-2);
    }

    .page-wrapper.profiles .page-section.product .company-case-study span:first-child {
        color: var(--theme-text-1);
        font-weight: 400;
    }

    /* Markdown Body */
    .page-wrapper.profiles .page-section.markdown-body {
        padding: 0;
    }

    .page-wrapper.profiles .page-section.markdown-body .title.title-3 {
        margin-bottom: var(--space3_5);
    }

    .page-wrapper.profiles .page-section.markdown-body .title.title-3:not(:first-child) {
        margin-top: var(--space4_5);
    }

    .page-wrapper.profiles .page-section.markdown-body .card-empty-placeholder {
        margin-top: var(--space4_5);
        padding-top: var(--space4_5);
        padding-bottom: var(--space4_5);
        text-align: center;
    }

    .page-wrapper.profiles .page-section.markdown-body .card-empty-placeholder p {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
    }

    .page-wrapper.profiles .page-section.markdown-body .card-empty-placeholder .console-button-text {
        margin: var(--space2) var(--space2);
    }

    /* Jobs Link */
    .page-wrapper.profiles .page-section.jobs-link {
        padding: 0;
    }

    .page-wrapper.profiles .page-section.jobs-link .title + p {
        margin-top: var(--space4);
    }

    /* More on Console */
    .page-wrapper.profiles .page-section.more-on-console {
        padding: 0;
    }

    /* About */
    .page-wrapper.profiles .page-section.about {
        margin-top: calc(var(--space5) + var(--space4_5));
        padding: 0;
    }

    .page-wrapper.profiles .page-section.about > * {
        margin-top: var(--space4_5);
    }

    .page-wrapper.profiles .about-console-box {
        margin: var(--space4_5) 0 var(--space5_5);
    }

    /* Signup */
    .page-wrapper.profiles .page-section.signup {
        padding: 0;
    }

    /* Aside */
    @media (max-width: 768px) {
        .page-wrapper.profiles .aside-block.the-toc {
            display: none;
        }
    }

    .page-wrapper.profiles .aside-content-wrapper {
        margin-left: max(var(--space4_5), 3vw);
        width: auto;
        max-width: none;
    }

    .page-wrapper.profiles .aside.appended {
        margin-top: calc(var(--space3) * -1);
        margin-bottom: var(--space4);
    }

    .aside-item.podcast .title a:link,
    .aside-item.podcast .title a:visited,
    .aside-item.interview .title a:link,
    .aside-item.interview .title a:visited {
        color: var(--theme-cta-secondary-triad-03-text-idle);
    }

    .aside-item.podcast .title a:link .icon-stroke,
    .aside-item.podcast .title a:visited .icon-stroke,
    .aside-item.interview .title a:link .icon-stroke,
    .aside-item.interview .title a:visited .icon-stroke {
        stroke: var(--theme-cta-secondary-triad-03-text-idle);
    }

    .aside-item.podcast .title a:link .icon-fill,
    .aside-item.podcast .title a:visited .icon-fill,
    .aside-item.interview .title a:link .icon-fill,
    .aside-item.interview .title a:visited .icon-fill {
        fill: var(--theme-cta-secondary-triad-03-text-idle);
    }

    .aside-item.podcast .title a:link .icon-fill-stroke,
    .aside-item.podcast .title a:visited .icon-fill-stroke,
    .aside-item.interview .title a:link .icon-fill-stroke,
    .aside-item.interview .title a:visited .icon-fill-stroke {
        fill: var(--theme-cta-secondary-triad-03-text-idle);
        stroke: var(--theme-cta-secondary-triad-03-text-idle);
    }

    .aside-item.podcast .title a:focus,
    .aside-item.podcast .title a:hover,
    .aside-item.interview .title a:focus,
    .aside-item.interview .title a:hover {
        color: var(--theme-cta-secondary-triad-03-text-hover);
    }

    .aside-item.podcast .title a:focus .icon-stroke,
    .aside-item.podcast .title a:hover .icon-stroke,
    .aside-item.interview .title a:focus .icon-stroke,
    .aside-item.interview .title a:hover .icon-stroke {
        stroke: var(--theme-cta-secondary-triad-03-text-hover);
    }

    .aside-item.podcast .title a:focus .icon-fill,
    .aside-item.podcast .title a:hover .icon-fill,
    .aside-item.interview .title a:focus .icon-fill,
    .aside-item.interview .title a:hover .icon-fill {
        fill: var(--theme-cta-secondary-triad-03-text-hover);
    }

    .aside-item.podcast .title a:focus .icon-fill-stroke,
    .aside-item.podcast .title a:hover .icon-fill-stroke,
    .aside-item.interview .title a:focus .icon-fill-stroke,
    .aside-item.interview .title a:hover .icon-fill-stroke {
        fill: var(--theme-cta-secondary-triad-03-text-hover);
        stroke: var(--theme-cta-secondary-triad-03-text-hover);
    }

    .aside-item.podcast .title a:active,
    .aside-item.interview .title a:active {
        color: var(--theme-cta-secondary-triad-03-text-active);
    }

    .aside-item.podcast .title a:active .icon-stroke,
    .aside-item.interview .title a:active .icon-stroke {
        stroke: var(--theme-cta-secondary-triad-03-text-active);
    }

    .aside-item.podcast .title a:active .icon-fill,
    .aside-item.interview .title a:active .icon-fill {
        fill: var(--theme-cta-secondary-triad-03-text-active);
    }

    .aside-item.podcast .title a:active .icon-fill-stroke,
    .aside-item.interview .title a:active .icon-fill-stroke {
        fill: var(--theme-cta-secondary-triad-03-text-active);
        stroke: var(--theme-cta-secondary-triad-03-text-active);
    }

    .aside-item.review .title a:link,
    .aside-item.review .title a:visited {
        color: var(--theme-cta-secondary-triad-02-text-idle);
    }

    .aside-item.review .title a:link .icon-stroke,
    .aside-item.review .title a:visited .icon-stroke {
        stroke: var(--theme-cta-secondary-triad-02-text-idle);
    }

    .aside-item.review .title a:link .icon-fill,
    .aside-item.review .title a:visited .icon-fill {
        fill: var(--theme-cta-secondary-triad-02-text-idle);
    }

    .aside-item.review .title a:link .icon-fill-stroke,
    .aside-item.review .title a:visited .icon-fill-stroke {
        fill: var(--theme-cta-secondary-triad-02-text-idle);
        stroke: var(--theme-cta-secondary-triad-02-text-idle);
    }

    .aside-item.review .title a:focus,
    .aside-item.review .title a:hover {
        color: var(--theme-cta-secondary-triad-02-text-hover);
    }

    .aside-item.review .title a:focus .icon-stroke,
    .aside-item.review .title a:hover .icon-stroke {
        stroke: var(--theme-cta-secondary-triad-02-text-hover);
    }

    .aside-item.review .title a:focus .icon-fill,
    .aside-item.review .title a:hover .icon-fill {
        fill: var(--theme-cta-secondary-triad-02-text-hover);
    }

    .aside-item.review .title a:focus .icon-fill-stroke,
    .aside-item.review .title a:hover .icon-fill-stroke {
        fill: var(--theme-cta-secondary-triad-02-text-hover);
        stroke: var(--theme-cta-secondary-triad-02-text-hover);
    }

    .aside-item.review .title a:active {
        color: var(--theme-cta-secondary-triad-02-text-active);
    }

    .aside-item.review .title a:active .icon-stroke {
        stroke: var(--theme-cta-secondary-triad-02-text-active);
    }

    .aside-item.review .title a:active .icon-fill {
        fill: var(--theme-cta-secondary-triad-02-text-active);
    }

    .aside-item.review .title a:active .icon-fill-stroke {
        fill: var(--theme-cta-secondary-triad-02-text-active);
        stroke: var(--theme-cta-secondary-triad-02-text-active);
    }

    /* Subscribe CTA ------------------------------------------------------------- */
    .page-wrapper.profiles .subscribe-cta {
        margin-top: var(--space5_5);
        background: var(--theme-content-bg-3);
    }

    @media (max-width: 768px) {
        .page-wrapper.profiles .subscribe-cta {
            border: none;
            padding: 0;
            background: transparent;
            border-top: var(--theme-border-3);
            padding-top: var(--space4);
        }
    }

    @media (min-width: 1280px) {
        .xl-viewport-large-text .aside-item .title.title-6 {
            font-size: var(--t-size2);
        }

        .xl-viewport-large-text .aside-item-title-extras p:last-child:not(:first-child) {
            font-size: var(--t-size-2);
        }

        .xl-viewport-large-text .aside-item-meta p {
            font-size: var(--t-size-1);
        }

        .xl-viewport-large-text .page-wrapper.profiles .page-section.product .company-tech-stack .tech-stack-item {
            font-size: var(--t-size1);
        }

        .xl-viewport-large-text .simple-table-grid .cell {
            font-size: var(--t-size-1);
        }
    }
`;
