import css from "styled-jsx/css";
export default css.global`
    :root[data-theme="light"] {
        .framed-section.overlay {
            background: var(--theme-content-bg-2);
        }
    }

    .page-wrapper.podcast .podcasts-split {
        min-height: var(--space7_5);
    }

    /* Opening ------------------------------------------------------------------------------------------------ */
    .page-wrapper.podcast .page-section.opening {
        padding: 0;
        margin-bottom: var(--space5);
    }

    @media (min-width: 1057px) {
        .page-wrapper.podcast .page-section.opening .split {
            align-items: center;
        }

        .page-wrapper.podcast .page-section.opening .split .right {
            text-align: center;
        }
    }

    .page-wrapper.podcast .title-1 {
        display: block;
    }

    .page-wrapper.podcast .title-1 .icon {
        display: inline-block;
        margin-right: var(--space3);
        width: calc(var(--space4) * 1.2);
        height: calc(var(--space4) * 1.2);
        vertical-align: -0.12em;
    }

    .page-wrapper.podcast .page-section.opening .split .left p.description {
        margin-top: 0;
    }

    .page-wrapper.podcast .podcast-links-container {
        display: inline-block;
    }

    @media (max-width: 1056px) {
        .page-wrapper.podcast .page-section.opening .split {
            display: block;
        }

        .page-wrapper.podcast .podcast-links-container {
            background: none;
            padding: 0;
            margin-top: var(--space4);
        }

        .page-wrapper.podcast .framed-section.podcast-links-container > *:not(.framed-section-item) {
            margin: 0;
        }
    }

    @media (min-width: 1057px) {
        .page-wrapper.podcast .podcast-links-container {
            text-align: initial;
        }
    }

    .page-wrapper.podcast .podcast-links-wrapper {
        display: inline-flex;
        flex-flow: row wrap;
        align-items: center;
    }

    .page-wrapper.podcast .podcast-links-wrapper .title {
        margin: 0;
    }

    .page-wrapper.podcast .podcast-links {
        margin-left: var(--space3);
    }

    @media (max-width: 440px) {
        .page-wrapper.podcast .podcast-links-wrapper {
            flex-flow: column nowrap;
            align-items: flex-start;
        }

        .page-wrapper.podcast .podcast-links-wrapper .title {
            margin-bottom: var(--space3);
        }

        .page-wrapper.podcast .podcast-links {
            margin-left: 0;
        }
    }

    @media (min-width: 1057px) and (max-width: 1239px) {
        .page-wrapper.podcast .podcast-links-wrapper {
            width: min-content;
        }

        .page-wrapper.podcast .podcast-links-wrapper .title {
            margin-bottom: var(--space3);
        }
        .page-wrapper.podcast .podcast-links {
            margin-left: 0;
        }
    }

    @media (min-width: 1240px) {
        .page-wrapper.podcast .podcast-links-wrapper {
            width: max-content;
        }
        .page-wrapper.podcast .podcast-links-wrapper .title {
            max-width: 95px;
        }
    }

    /* Featured ------------------------------------------------------------------------------------------------ */
    .page-wrapper.podcast .page-section.featured {
        /* margin-bottom: calc(var(--space5) + var(--space4_5)); */
        margin-top: var(--space5);
        padding: 0;
    }

    @media (max-width: 640px) {
        .page-wrapper.podcast .page-section.featured {
            /* margin-bottom: calc(var(--space5_5) - var(--space3)); */
        }
    }

    .page-wrapper.podcast .title-4 {
        color: var(--theme-text-2);
    }

    .page-wrapper.podcast .page-section.featured .title {
        position: relative;
        overflow: hidden;
    }

    .page-wrapper.podcast .page-section.featured .title span:nth-child(1) {
        display: inline-block;
        margin-right: 17px;
    }

    .page-wrapper.podcast .page-section.featured .title span:nth-child(2) {
        display: inline-block;
        font-weight: 300;
        color: var(--theme-text-3);
        text-indent: -17px;
    }

    .page-wrapper.podcast .page-section.podcasts > *:not(:last-child) {
        margin-bottom: var(--space3);
    }

    /* Combo card ------------------------------------------------------- */
    .page-wrapper.podcast .card-podcast .console-button {
        margin-right: var(--space3_5);
    }

    .page-wrapper.podcast .card-podcast:hover .console-button.quiet,
    .page-wrapper.podcast .card-podcast:focus .console-button.quiet {
        background: var(--c-blue-07);
    }

    .page-wrapper.podcast .card-podcast:hover .console-button.quiet .icon-fill,
    .page-wrapper.podcast .card-podcast:focus .console-button.quiet .icon-fill {
        fill: var(--c-white-00-absolute);
    }

    .page-wrapper.podcast .card-podcast:hover .console-button.quiet .icon-stroke,
    .page-wrapper.podcast .card-podcast:focus .console-button.quiet .icon-stroke {
        stroke: var(--c-white-00-absolute);
    }

    .page-wrapper.podcast .card-podcast:active .console-button.quiet {
        background: var(--c-blue-08);
    }

    .page-wrapper.podcast .card-podcast:hover .console-button.play .hover-content,
    .page-wrapper.podcast .card-podcast:focus .console-button.play .hover-content {
        background: var(--c-blue-07);
        color: var(--c-white-00-absolute);
        opacity: 1;
    }

    .page-wrapper.podcast .card-podcast:active .console-button.play .hover-content {
        background: var(--c-blue-08);
        color: var(--c-white-00-absolute);
        opacity: 1;
    }

    /* Combo card - Featured ------------------------------------------------------- */
    @media (min-width: 769px) {
        .page-wrapper.podcast .page-section.featured .card-podcast .combo-box {
            width: calc(var(--space7) + 21vw); /* calc(var(--space8) - var(--space4_5)) */
            max-width: var(--space8);
        }
    }

    .page-wrapper.podcast .page-section.featured .card-title {
        font-size: var(--t-size2);
    }

    .page-wrapper.podcast .page-section.featured .card-subtitle-main {
        font-size: var(--t-size0);
    }

    .page-wrapper.podcast .page-section.featured .card-description {
        margin-bottom: 0;
    }

    @media (min-width: 769px) {
        @media (max-width: 1024px) {
            .page-wrapper.podcast .page-section.featured .card-description.clamp-6 {
                -webkit-line-clamp: 5;
            }
        }

        @media (max-width: 960px) {
            .page-wrapper.podcast .page-section.featured .card-description.clamp-6 {
                -webkit-line-clamp: 4;
            }
        }

        @media (max-width: 860px) {
            .page-wrapper.podcast .page-section.featured .card-description.clamp-6 {
                -webkit-line-clamp: 2;
            }
        }
    }

    .page-wrapper.podcast .page-section.featured .card-meta {
        display: none;
    }

    /* Combo card - List ------------------------------------------------------- */
    .page-wrapper.podcast .podcasts-split .card-description {
        display: none;
    }

    /* Aside ------------------------------------------------------------------------------------------------ */
    .page-wrapper.podcast .page-section.podcasts aside:not(:last-child) {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--space4);
        margin-top: calc(var(--space3) * -1);
    }

    .page-wrapper.podcast .page-section.podcasts .aside-block:first-child {
        display: inline-flex;
        flex-flow: row wrap;
        align-items: center;
        margin-top: var(--space3);
    }

    .page-wrapper.podcast .page-section.podcasts .aside-block:first-child .title {
        margin-bottom: 0;
        margin-right: var(--space3_5);
        margin-top: var(--space3);
    }

    .page-wrapper.podcast .page-section.podcasts .aside-block:first-child .aside-items {
        margin-top: 0;
    }

    .page-wrapper.podcast .page-section.podcasts .aside-block:first-child .person-profile {
        margin-top: var(--space3);
    }

    .page-wrapper.podcast .page-section.podcasts .aside-block:last-child {
        margin-top: var(--space4);
    }

    @media (max-width: 768px) {
        .page-wrapper.podcast .page-section.podcasts aside:not(:last-child) {
            flex-flow: column nowrap;
            align-items: stretch;
        }
    }

    /* About ------------------------------------------------------------------------------------------------ */
    .page-wrapper.podcast .page-section.about {
        margin-top: var(--space4);
        margin-bottom: var(--space5);
        padding: 0;
    }

    .page-wrapper.podcast .about-the-author {
        margin: 0 0 var(--space5);
    }

    /* Signup ------------------------------------------------------------------------------------------------ */
    .page-wrapper.podcast .page-section.signup {
        margin: 0;
        padding: 0;
    }
`;
