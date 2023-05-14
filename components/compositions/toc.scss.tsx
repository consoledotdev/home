import css from "styled-jsx/css";
export default css.global`
    .toc {
        position: relative;
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-end;
        width: inherit;
        max-width: inherit;
    }

    .toc .title.title-4 {
        margin-bottom: var(--space3);
        color: var(--theme-text-4);
    }

    .toc ul {
        margin: 0;
        padding: 0;
        font-size: var(--t-size-2);
    }

    .toc-indicator {
        content: "";
        position: absolute;
        display: block;
        background: var(--theme-text-1);
        width: calc(var(--space2) - 1px);
        height: calc(var(--space2) - 1px);
        margin-top: calc(var(--t-lH2) + var(--space3));
        top: 0;
        clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%, 50% 0);
    }

    .toc ul li {
        list-style: none;
    }

    .toc-item {
        line-height: var(--t-lH4);
        font-size: var(--t-size-2);
    }

    .toc-item:not(:first-child, .toc-item-sub) {
        margin-top: var(--space3_5);
    }

    .toc-item.toc-item-sub {
        font-size: var(--t-size-3);
        margin-top: var(--space2);
        margin-bottom: var(--space1);
    }

    .toc-link {
        display: inline-block;
        width: 100%;
        text-decoration: none;
        line-height: var(--t-lH4);
        transition: var(--a-micro);
        transform: translateX(0);
    }

    .toc-item-sub .toc-link {
        color: var(--c-grey-05);
    }

    .toc-link:link,
    .toc-link:visited,
    .toc-item-sub .toc-link:link,
    .toc-item-sub .toc-link:visited {
        color: var(--theme-text-4);
    }

    .toc-link:focus,
    .toc-link:hover,
    .toc-item-sub .toc-link:focus,
    .toc-item-sub .toc-link:hover {
        color: var(--theme-text-1);
        transition: var(--a-micro-active);
        outline: none;
    }

    .toc-link:active,
    .toc-item-sub .toc-link:active {
        color: var(--theme-text-2);
    }

    .toc-link.is-active {
        color: var(--theme-text-1);
        font-weight: 400;
        margin: var(--space2) 0;
    }

    .toc-item-sub .toc-link.is-active {
        color: var(--theme-text-1);
    }

    @media (min-width: 1280px) {
        .toc-item {
            font-size: var(--t-size-1);
        }

        .toc-item.toc-item-sub {
            font-size: var(--t-size-2);
        }
    }

    @media (min-width: 1600px) {
        .toc-item {
            font-size: var(--t-size0);
        }

        .toc-item.toc-item-sub {
            font-size: var(--t-size-1);
        }
    }

    /* TOC left aligned */
    .toc-left {
        align-items: flex-start;
    }

    .toc-left .toc-indicator {
        left: calc((var(--space0) + 1px) * -1);
    }

    .toc-left ul {
        padding-left: var(--space3);
        border-left: 1px solid var(--theme-text-4);
    }

    .toc-left .toc-link {
        text-align: left;
    }

    .toc-left .toc-link:focus,
    .toc-left .toc-link:hover,
    .toc-left .toc-item-sub .toc-link:focus,
    .toc-left .toc-item-sub .toc-link:hover {
        transform: translateX(var(--space1));
    }

    /* TOC right aligned */
    .toc-right {
        align-items: flex-end;
    }

    .toc-right .toc-indicator {
        right: calc((var(--space0) + 1px) * -1);
    }

    .toc-right ul {
        padding-right: var(--space3);
        border-right: 1px solid var(--theme-text-4);
    }

    .toc-right .toc-link {
        text-align: right;
    }

    .toc-right .toc-link:focus,
    .toc-right .toc-link:hover,
    .toc-right .toc-item-sub .toc-link:focus,
    .toc-right .toc-item-sub .toc-link:hover {
        transform: translateX(calc(var(--space1) * -1));
    }

    /* TOC Fixed */
    .toc.is-fixed {
        position: fixed;
    }
`;
