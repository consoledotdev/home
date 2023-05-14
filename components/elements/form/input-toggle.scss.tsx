import css from "styled-jsx/css";
export default css.global`
    input.console-input-toggle {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    input.console-input-toggle + label {
        position: relative;
        display: inline-flex;
        vertical-align: top;
        flex-flow: row nowrap;
        align-items: center;
        font-size: var(--t-size-2);
        line-height: var(--t-lH4);
        font-weight: 400;
        color: var(--theme-input-checkable-off);
        height: calc(var(--space2_5) + var(--space3));
        transition: var(--a-controls-long);
    }

    input:not(:disabled).console-input-toggle + label {
        cursor: pointer;
    }

    input.console-input-toggle + label .check {
        position: relative;
        display: inline-block;
        width: calc(var(--space4) + var(--space2));
        height: calc(var(--space2_5) + var(--space3));
        background: transparent;
        border-radius: calc(var(--space2_5) + calc(var(--space1) / 2));
        margin-right: calc(var(--space1) / 2);
        transition: var(--a-layout);
    }

    input:not(:disabled).console-input-toggle + label:hover .check,
    input:not(:disabled).console-input-toggle + label:active .check,
    input:not(:disabled).console-input-toggle:focus + label .check {
        background: var(--theme-input-checkable-off-bg-hover);
        transition: var(--a-layout-active);
    }

    input.console-input-toggle + label .check:before {
        position: absolute;
        display: inline-block;
        content: "";
        width: calc(var(--space2_5) + var(--space3));
        height: var(--space3);
        border: 1px solid var(--theme-input-checkable-off);
        border-radius: var(--space2);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: var(--a-controls-long);
    }

    input.console-input-toggle + label .check:after {
        position: absolute;
        display: inline-block;
        content: "";
        width: var(--space2);
        height: var(--space2);
        background: var(--theme-input-checkable-off);
        border-radius: var(--space1);
        top: 50%;
        left: 50%;
        transform: translate(calc(-50% - 6px), -50%) scale(1);
        transition: var(--a-controls-long);
    }

    input:checked.console-input-toggle + label .check:after {
        transform: translate(calc(-50% + 6px), -50%) scale(1.25);
        transition: var(--a-controls-long-active);
    }

    /* style: default */
    input:checked.console-input-toggle + label {
        color: var(--theme-input-checkable-on);
    }

    input:checked.console-input-toggle + label:hover,
    input:checked.console-input-toggle + label:active,
    input:checked.console-input-toggle:focus + label {
        color: var(--theme-input-checkable-on-hover);
    }

    input:checked.console-input-toggle + label:hover .check,
    input:checked.console-input-toggle + label:active .check,
    input:checked.console-input-toggle:focus + label .check {
        background: var(--theme-input-checkable-on-bg-hover);
    }

    input:checked.console-input-toggle + label .check:before {
        border: 1px solid var(--theme-input-checkable-on);
    }

    input:checked.console-input-toggle + label:hover .check:before,
    input:checked.console-input-toggle + label:active .check:before,
    input:checked.console-input-toggle:focus + label .check:before {
        border: 1px solid var(--theme-input-checkable-on-hover);
    }

    input:checked.console-input-toggle + label .check:after {
        background: var(--theme-input-checkable-on);
    }

    input:checked.console-input-toggle + label:hover .check:after,
    input:checked.console-input-toggle + label:active .check:after,
    input:checked.console-input-toggle:focus + label .check:after {
        background: var(--theme-input-checkable-on-hover);
    }

    /* style: triad-01 */
    input:checked.console-input-toggle.triad-01 + label {
        color: var(--theme-input-checkable-triad-01-on);
    }

    input:checked.console-input-toggle.triad-01 + label:hover,
    input:checked.console-input-toggle.triad-01 + label:active,
    input:checked.console-input-toggle.triad-01:focus + label {
        color: var(--theme-input-checkable-triad-01-on-hover);
    }

    input:checked.console-input-toggle.triad-01 + label:hover .check,
    input:checked.console-input-toggle.triad-01 + label:active .check,
    input:checked.console-input-toggle.triad-01:focus + label .check {
        background: var(--theme-input-checkable-triad-01-on-bg-hover);
    }

    input:checked.console-input-toggle.triad-01 + label .check:before {
        border: 1px solid var(--theme-input-checkable-triad-01-on);
    }

    input:checked.console-input-toggle.triad-01 + label:hover .check:before,
    input:checked.console-input-toggle.triad-01 + label:active .check:before,
    input:checked.console-input-toggle.triad-01:focus + label .check:before {
        border: 1px solid var(--theme-input-checkable-triad-01-on-hover);
    }

    input:checked.console-input-toggle.triad-01 + label .check:after {
        background: var(--theme-input-checkable-triad-01-on);
    }

    input:checked.console-input-toggle.triad-01 + label:hover .check:after,
    input:checked.console-input-toggle.triad-01 + label:active .check:after,
    input:checked.console-input-toggle.triad-01:focus + label .check:after {
        background: var(--theme-input-checkable-triad-01-on-hover);
    }

    /* style: triad-02 */
    input:checked.console-input-toggle.triad-02 + label {
        color: var(--theme-input-checkable-triad-02-on);
    }

    input:checked.console-input-toggle.triad-02 + label:hover,
    input:checked.console-input-toggle.triad-02 + label:active,
    input:checked.console-input-toggle.triad-02:focus + label {
        color: var(--theme-input-checkable-triad-02-on-hover);
    }

    input:checked.console-input-toggle.triad-02 + label:hover .check,
    input:checked.console-input-toggle.triad-02 + label:active .check,
    input:checked.console-input-toggle.triad-02:focus + label .check {
        background: var(--theme-input-checkable-triad-02-on-bg-hover);
    }

    input:checked.console-input-toggle.triad-02 + label .check:before {
        border: 1px solid var(--theme-input-checkable-triad-02-on);
    }

    input:checked.console-input-toggle.triad-02 + label:hover .check:before,
    input:checked.console-input-toggle.triad-02 + label:active .check:before,
    input:checked.console-input-toggle.triad-02:focus + label .check:before {
        border: 1px solid var(--theme-input-checkable-triad-02-on-hover);
    }

    input:checked.console-input-toggle.triad-02 + label .check:after {
        background: var(--theme-input-checkable-triad-02-on);
    }

    input:checked.console-input-toggle.triad-02 + label:hover .check:after,
    input:checked.console-input-toggle.triad-02 + label:active .check:after,
    input:checked.console-input-toggle.triad-02:focus + label .check:after {
        background: var(--theme-input-checkable-triad-02-on-hover);
    }

    /* style: triad-03 */
    input:checked.console-input-toggle.triad-03 + label {
        color: var(--theme-input-checkable-triad-03-on);
    }

    input:checked.console-input-toggle.triad-03 + label:hover,
    input:checked.console-input-toggle.triad-03 + label:active,
    input:checked.console-input-toggle.triad-03:focus + label {
        color: var(--theme-input-checkable-triad-03-on-hover);
    }

    input:checked.console-input-toggle.triad-03 + label:hover .check,
    input:checked.console-input-toggle.triad-03 + label:active .check,
    input:checked.console-input-toggle.triad-03:focus + label .check {
        background: var(--theme-input-checkable-triad-03-on-bg-hover);
    }

    input:checked.console-input-toggle.triad-03 + label .check:before {
        border: 1px solid var(--theme-input-checkable-triad-03-on);
    }

    input:checked.console-input-toggle.triad-03 + label:hover .check:before,
    input:checked.console-input-toggle.triad-03 + label:active .check:before,
    input:checked.console-input-toggle.triad-03:focus + label .check:before {
        border: 1px solid var(--theme-input-checkable-triad-03-on-hover);
    }

    input:checked.console-input-toggle.triad-03 + label .check:after {
        background: var(--theme-input-checkable-triad-03-on);
    }

    input:checked.console-input-toggle.triad-03 + label:hover .check:after,
    input:checked.console-input-toggle.triad-03 + label:active .check:after,
    input:checked.console-input-toggle.triad-03:focus + label .check:after {
        background: var(--theme-input-checkable-triad-03-on-hover);
    }

    /* style: disabled */
    input:disabled.console-input-toggle + label,
    input:checked:disabled.console-input-toggle + label,
    input:checked:disabled.console-input-toggle.triad-01 + label,
    input:checked:disabled.console-input-toggle.triad-02 + label,
    input:checked:disabled.console-input-toggle.triad-03 + label {
        color: var(--theme-input-checkable-disabled);
    }

    input:checked.console-input-toggle.triad-03 + label:hover .check,
    input:disabled:checked.console-input-toggle + label:hover .check,
    input:disabled:checked.console-input-toggle.triad-01 + label:hover .check,
    input:disabled:checked.console-input-toggle.triad-02 + label:hover .check,
    input:disabled:checked.console-input-toggle.triad-03 + label:hover .check,
    input:checked.console-input-toggle.triad-03 + label:active .check,
    input:disabled:checked.console-input-toggle + label:active .check,
    input:disabled:checked.console-input-toggle.triad-01 + label:active .check,
    input:disabled:checked.console-input-toggle.triad-02 + label:active .check,
    input:disabled:checked.console-input-toggle.triad-03 + label:active .check,
    input:checked.console-input-toggle.triad-03:focus + label .check,
    input:disabled:checked.console-input-toggle:focus + label .check,
    input:disabled:checked.console-input-toggle.triad-01:focus + label .check,
    input:disabled:checked.console-input-toggle.triad-02:focus + label .check,
    input:disabled:checked.console-input-toggle.triad-03:focus + label .check {
        background: transparent;
    }

    input:disabled.console-input-toggle + label .check:before,
    input:checked:disabled.console-input-toggle + label .check:before,
    input:checked:disabled.console-input-toggle.triad-01 + label .check:before,
    input:checked:disabled.console-input-toggle.triad-02 + label .check:before,
    input:checked:disabled.console-input-toggle.triad-03 + label .check:before {
        border: 1px solid var(--theme-input-checkable-disabled);
    }

    input:disabled.console-input-toggle + label .check:after,
    input:checked:disabled.console-input-toggle + label .check:after,
    input:checked:disabled.console-input-toggle.triad-01 + label .check:after,
    input:checked:disabled.console-input-toggle.triad-02 + label .check:after,
    input:checked:disabled.console-input-toggle.triad-03 + label .check:after {
        background: transparent;
        border: 1px solid var(--theme-input-checkable-disabled);
    }
`;
