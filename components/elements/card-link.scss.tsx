import css from "styled-jsx/css";
export default css.global`
    .card-link {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid transparent;
        background: transparent;
        border-radius: var(--corners-mid);
        z-index: 10;
        overflow: hidden;
        transition: var(--a-controls);
    }

    .card-link:hover,
    .card-link:focus {
        transition: var(--a-controls-active);
        border: var(--theme-actionable-box-border-focus);
        background: var(--theme-actionable-box-bg-focus);
        outline: none;
    }

    .card-link:active {
        border: var(--theme-actionable-box-border-active);
        background: var(--theme-actionable-box-bg-active);
    }

    .card-link > span {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        position: absolute;
        right: -1px;
        bottom: -1px;
        color: var(--theme-cta-text);
        font-size: var(--t-size-3);
        line-height: var(--t-lH4);
        font-weight: 500;
        padding: calc(var(--space1) / 2) calc(var(--space2) + var(--space1));
        border-top-left-radius: var(--corners-mid);
        letter-spacing: normal;
        opacity: 0;
        transition: var(--a-controls);
    }

    .card-link > span .icon {
        width: 1em;
        height: 1em;
        margin-left: var(--space1);
        opacity: 0;
        transition: var(--a-controls);
    }

    .card-link > span .icon.icon-fill {
        fill: var(--theme-cta-text);
    }

    .card-link > span .icon-stroke {
        stroke: var(--theme-cta-text);
    }

    .card-link:hover > span,
    .card-link:focus > span {
        background: var(--theme-actionable-box-label-bg-focus);
        opacity: 1;
        transition: var(--a-controls-active);
    }

    .card-link:active > span {
        background: var(--theme-actionable-box-label-bg-active);
    }

    .card-link:hover > span .icon,
    .card-link:focus > span .icon {
        opacity: 1;
        transition: var(--a-controls-active);
    }
`;
