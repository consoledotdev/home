import css from "styled-jsx/css";
export default css.global`
    .categories {
        font-size: var(--t-size-3);
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        line-height: var(--t-lH4);
        white-space: nowrap;
    }

    .categories.large {
        font-size: var(--t-size-1);
    }

    .categories.inline {
        display: inline-flex;
    }

    .categories {
        color: var(--theme-categories-color-idle);
    }

    .categories .icon {
        width: var(--t-size-2);
        height: var(--t-size-2);
        flex: 0 0 auto;
        margin-right: calc(var(--space2_5) / 2);
        margin-top: 0.15em;
    }

    .categories.large .icon {
        margin-top: 0.15em;
        width: var(--t-size0);
        height: var(--t-size0);
        margin-right: calc(var(--space2) + 2px);
    }

    .categories .icon-fill {
        fill: var(--theme-categories-color-idle);
    }

    .categories .icon-stroke {
        stroke: var(--theme-categories-color-idle);
    }

    .categories .icon-fill-stroke {
        fill: var(--theme-categories-color-idle);
        stroke: var(--theme-categories-color-idle);
    }

    .categories .category {
        white-space: normal;
    }

    .categories.clickable a:link,
    .categories.clickable a:visited {
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        line-height: var(--t-lH4);
        white-space: nowrap;
        color: var(--theme-categories-color-idle);
        text-decoration: none;
    }

    .categories.clickable a:hover,
    .categories.clickable a:focus {
        color: var(--theme-categories-color-hover);
        outline: none;
    }

    .categories.clickable a:active {
        color: var(--theme-categories-color-active);
    }

    .categories.clickable a:link .icon-fill,
    .categories.clickable a:visited .icon-fill {
        fill: var(--theme-categories-color-idle);
    }

    .categories.clickable a:hover .icon-fill,
    .categories.clickable a:focus .icon-fill {
        fill: var(--theme-categories-color-hover);
    }

    .categories.clickable a:active .icon-fill {
        fill: var(--theme-categories-color-active);
    }

    .categories.clickable a:link .icon-stroke,
    .categories.clickable a:visited .icon-stroke {
        stroke: var(--theme-categories-color-idle);
    }

    .categories.clickable a:hover .icon-stroke,
    .categories.clickable a:focus .icon-stroke {
        stroke: var(--theme-categories-color-hover);
    }

    .categories.clickable a:active .icon-stroke {
        stroke: var(--theme-categories-color-active);
    }

    .categories.clickable a:link .icon-fill-stroke,
    .categories.clickable a:visited .icon-fill-stroke {
        fill: var(--theme-categories-color-idle);
        stroke: var(--theme-categories-color-idle);
    }

    .categories.clickable a:hover .icon-fill-stroke,
    .categories.clickable a:focus .icon-fill-stroke {
        fill: var(--theme-categories-color-hover);
        stroke: var(--theme-categories-color-hover);
    }

    .categories.clickable a:active .icon-fill-stroke {
        fill: var(--theme-categories-color-active);
        stroke: var(--theme-categories-color-active);
    }
`;
