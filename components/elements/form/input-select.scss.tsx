import css from "styled-jsx/css";
export default css.global`
    select.console-input-select {
        margin: 0 1px;
        padding: 0;
        border: var(--theme-input-border);
        outline: none;
        flex: 1 0 auto;
        background: var(--theme-input-bg);
        color: var(--theme-input-text);
        padding: calc(var(--space2) + var(--space1)) calc(var(--space3) + var(--space1));
        border-radius: var(--corners-x-small);
        font-size: var(--t-size0);
        line-height: var(--t-lH4);
        transition: var(--a-controls);
        box-shadow: 0 0 0 1px var(--theme-input-border);
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
    }

    body:not(.mobile) select.console-input-select:not(:focus):hover {
        box-shadow: var(--theme-input-border-hover);
    }

    select.console-input-select:active,
    select.console-input-select:focus {
        box-shadow: var(--theme-input-border-focus);
        transition: var(--a-controls-active);
    }

    select.console-input-select.medium {
        font-size: var(--t-size-1);
        padding: calc(var(--space2) + calc(var(--space1) / 2)) calc(var(--space3) + calc(var(--space1) / 2));
    }

    select.console-input-select.small {
        font-size: var(--t-size-2);
        padding: var(--space2) var(--space3);
    }

    select.console-input-select,
    select.console-input-select.medium,
    select.console-input-select.small {
        background-image: var(--theme-input-select-accessory);
        background-repeat: no-repeat, repeat;
        background-position: right var(--space2) top 50%, 0 0;
        background-size: 16px 16px, 100%;
        padding-right: calc(var(--space4));
    }

    select.console-input-select::-ms-expand {
        display: none;
    }
`;
