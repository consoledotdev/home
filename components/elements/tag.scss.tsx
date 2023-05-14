import css from "styled-jsx/css";
export default css.global`
    .tags {
        font-size: var(--t-size-3);
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        line-height: var(--t-lH4);
        white-space: nowrap;
    }

    .tags.large {
        font-size: var(--t-size-1);
    }

    .tags.inline {
        display: inline-flex;
    }

    .tags {
        color: var(--theme-tags-color-idle);
    }

    .tags > *:not(:first-of-type) {
        margin-left: var(--space1);
        display: inline-block;
    }

    .tags .icon {
        width: var(--t-size-2);
        height: var(--t-size-2);
        flex: 0 0 auto;
        margin-right: calc(var(--space2_5) / 2);
        margin-top: 0.15em;
    }

    .tags.large .icon {
        margin-top: 0.15em;
        width: var(--t-size0);
        height: var(--t-size0);
        margin-right: calc(var(--space2) + 2px);
    }

    .tags .icon-fill {
        fill: var(--theme-tags-color-idle);
    }

    .tags .icon-stroke {
        stroke: var(--theme-tags-color-idle);
    }

    .tags .icon-fill-stroke {
        fill: var(--theme-tags-color-idle);
        stroke: var(--theme-tags-color-idle);
    }

    .tags .tag {
        white-space: normal;
    }

    .tags.clickable a:link,
    .tags.clickable a:visited {
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        line-height: var(--t-lH4);
        white-space: nowrap;
        color: var(--theme-tags-color-idle);
        text-decoration: none;
    }

    .tags.clickable a:hover,
    .tags.clickable a:focus {
        color: var(--theme-tags-color-hover);
        outline: none;
    }

    .tags.clickable a:active {
        color: var(--theme-tags-color-active);
    }

    .tags.clickable a:link .icon-fill,
    .tags.clickable a:visited .icon-fill {
        fill: var(--theme-tags-color-idle);
    }

    .tags.clickable a:hover .icon-fill,
    .tags.clickable a:focus .icon-fill {
        fill: var(--theme-tags-color-hover);
    }

    .tags.clickable a:active .icon-fill {
        fill: var(--theme-tags-color-active);
    }

    .tags.clickable a:link .icon-stroke,
    .tags.clickable a:visited .icon-stroke {
        stroke: var(--theme-tags-color-idle);
    }

    .tags.clickable a:hover .icon-stroke,
    .tags.clickable a:focus .icon-stroke {
        stroke: var(--theme-tags-color-hover);
    }

    .tags.clickable a:active .icon-stroke {
        stroke: var(--theme-tags-color-active);
    }

    .tags.clickable a:link .icon-fill-stroke,
    .tags.clickable a:visited .icon-fill-stroke {
        fill: var(--theme-tags-color-idle);
        stroke: var(--theme-tags-color-idle);
    }

    .tags.clickable a:hover .icon-fill-stroke,
    .tags.clickable a:focus .icon-fill-stroke {
        fill: var(--theme-tags-color-hover);
        stroke: var(--theme-tags-color-hover);
    }

    .tags.clickable a:active .icon-fill-stroke {
        fill: var(--theme-tags-color-active);
        stroke: var(--theme-tags-color-active);
    }
`;
