import css from "styled-jsx/css";
export default css.global`
    /* Combo Card
   ================================================================================================================ */
    .card-podcast .card-inner {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .card-podcast.horizontal .combo-box {
        width: calc(var(--space6_5) + 12vw);
        flex: 0 0 auto;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .card-podcast.default .card-inner .combo-box {
        width: 100%;
        border-top-right-radius: var(--corners-mid);
        border-radius: 0;
        border-bottom: var(--theme-border-2);
    }

    .card-podcast.default .card-inner {
        flex-flow: column nowrap;
    }

    .card-podcast.default .card-inner .card-content-wrapper {
        width: 100%;
    }

    /* Combo card content --------------------------- */
    .card-podcast .card-content-wrapper {
        flex: 1 1 auto;
        max-height: 100%;
        display: flex;
        align-items: center;
    }

    .card-podcast .card-content {
        flex: 1 1 auto;
        padding: var(--space3) var(--space4);
    }

    .card-podcast .card-content > :not(:first-child):not(:last-child) {
        margin-top: calc(var(--space1) + var(--space2));
    }

    .card-podcast .card-content > :last-child {
        margin-top: var(--space2);
    }

    .card-podcast .card-content .card-heading > :not(:last-child) {
        margin-bottom: var(--space1);
    }

    .card-podcast .card-content .card-subtitle p {
        margin-bottom: 0;
    }

    .card-podcast .card-content .card-subtitle {
        display: flex;
        flex-flow: row wrap;
        align-items: baseline;
    }

    .card-podcast .card-content .card-subtitle-main {
        flex: 0 0 auto;
        margin-right: calc(var(--space2));
        font-weight: 500;
        font-size: var(--t-size-1);
        color: var(--theme-text-4);
        flex: 0 1 auto;
    }

    .card-podcast .card-content .card-subtitle-extra {
        flex: 0 0 auto;
        color: var(--theme-text-4);
        font-size: var(--t-size-3);
        font-style: italic;
        flex: 0 1 auto;
    }

    .card-podcast .card-content .card-title {
        font-weight: 500;
        font-size: var(--t-size1);
        color: var(--theme-text-1);
        flex: 0 1 auto;
    }

    .card-podcast .card-content p.card-description {
        font-size: var(--t-size-1);
        color: var(--theme-text-2);
        margin: 0;
    }

    .card-podcast .card-content .card-meta span {
        color: var(--theme-text-3);
        font-size: var(--t-size-2);
        line-height: var(--t-lH3);
    }

    .card-podcast .card-content .card-meta .episode-no {
        font-style: italic;
    }
`;
