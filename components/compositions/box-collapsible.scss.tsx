import css from "styled-jsx/css";
export default css.global`
    .box-collapsible {
        background: var(--theme-collapsible-bg-1);
    }

    .box-collapsible.blue {
        background: var(--theme-collapsible-bg-blue-1);
    }

    .box-collapsible.alt {
        background: var(--theme-collapsible-bg-2);
    }

    .box-collapsible .title[class^="title-"],
    .box-collapsible .title[class*=" title-"] {
        margin-bottom: 0;
    }

    .box-collapsible .box-collapsible-top {
        margin: 0;
        padding: 0;
        border: 0;
        background: none;
        outline: none;
        width: 100%;
        padding: var(--space2) var(--space3);
        text-align: left;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        background: rgba(255, 255, 255, 0);
        transition: var(--a-controls);
    }

    .box-collapsible.is-expanded .box-collapsible-top {
        padding: var(--space3) var(--space3);
        transition: var(--a-controls-active);
    }

    .box-collapsible .box-collapsible-top:hover,
    .box-collapsible .box-collapsible-top:focus {
        background: rgba(255, 255, 255, 0.02);
        transition: var(--a-active);
    }

    [data-theme="light"] .box-collapsible .box-collapsible-top:hover,
    [data-theme="light"] .box-collapsible .box-collapsible-top:focus {
        background: rgba(0, 0, 0, 0.01);
    }

    .box-collapsible .box-collapsible-top:active {
        background: rgba(255, 255, 255, 0.03);
    }

    .box-collapsible .box-collapsible-top .title {
        flex: 0 1 auto;
    }

    .box-collapsible .box-collapsible-info {
        flex: 1 1 auto;
        margin-bottom: 0;
        padding: 0 var(--space3);
        font-style: italic;
    }

    .box-collapsible:not(.is-expanded) .box-collapsible-info.is-visible {
        padding: var(--space2) var(--space3);
    }

    .box-collapsible.is-expanded .box-collapsible-info {
        display: none;
    }

    .box-collapsible .box-collapsible-top .icon {
        flex: 0 0 auto;
        margin-left: var(--space3);
    }

    .box-collapsible .box-collapsible-content {
        padding: 0 var(--space3);
        max-height: 0;
        transition: var(--a-elements);
        overflow: hidden;
    }

    .box-collapsible.is-expanded .box-collapsible-content {
        padding: var(--space3);
        max-height: 200px;
    }

    .box-collapsible .subscribe-cta {
        padding: 0;
        background: transparent;
    }

    .box-collapsible .subscribe-cta .title {
        display: none;
    }
`;
