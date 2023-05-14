import css from "styled-jsx/css";
export default css.global`
    .console-input-radio {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .console-input-radio input {
        width: 0px;
        height: 0px;
        opacity: 0;
        position: absolute;
        overflow: hidden;
    }

    .console-input-radio input + label {
        position: relative;
        display: inline-flex;
        flex-flow: row nowrap;
        align-items: center;
        color: var(--theme-input-checkable-off);
        font-size: var(--t-size-2);
        line-height: var(--t-lH4);
        font-weight: 400;
        transition: var(--a-controls-long);
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .console-input-radio input + label:hover,
    .console-input-radio input:focus + label {
        transition: var(--a-controls-long-active);
    }

    .console-input-radio input:not(:disabled):not(:checked) + label {
        cursor: pointer;
    }

    .console-input-radio input + label .check {
        position: relative;
        display: inline-block;
        flex: 0 0 auto;
        width: calc(var(--space2_5) + var(--space3));
        height: calc(var(--space2_5) + var(--space3));
        background: transparent;
        border-radius: calc(var(--space2_5) + calc(var(--space1) / 2));
        margin-right: calc(var(--space1) / 2);
        transition: var(--a-layout);
    }

    .console-input-radio input:not(:disabled):not(:checked) + label:hover .check,
    .console-input-radio input:not(:disabled):not(:checked) + label:active .check,
    .console-input-radio:focus input:not(:disabled):not(:checked) + label .check {
        background: var(--theme-input-checkable-off-bg-hover);
        transition: var(--a-layout-active);
    }

    .console-input-radio input + label .check:before {
        position: absolute;
        display: inline-block;
        content: "";
        width: var(--space3);
        height: var(--space3);
        border: 1px solid var(--theme-input-checkable-off);
        border-radius: var(--space2);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: var(--a-controls-long);
    }

    .console-input-radio input:checked + label .check:before {
        transition: var(--a-controls-long-active);
    }

    .console-input-radio input + label .check:after {
        position: absolute;
        display: inline-block;
        content: "";
        width: var(--space2);
        height: var(--space2);
        background: transparent;
        border-radius: var(--space1);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: var(--a-controls-long);
    }

    .console-input-radio input:checked + label .check:after {
        background: var(--theme-input-checkable-off);
        transform: translate(-50%, -50%) scale(1);
        transition: var(--a-controls-long-active);
    }

    /* Layout: block */
    .console-input-radios.block .console-input-radio:not(:last-child) {
        margin-bottom: var(--space1);
    }

    /* Layout: inline */
    .console-input-radios.inline {
        display: flex;
        flex-flow: row wrap;
    }

    .console-input-radios.inline .console-input-radio {
        margin-top: var(--space2);
        margin-bottom: var(--space2);
        margin-right: var(--space3);
    }

    /* style: default */
    .console-input-radio input:checked + label {
        color: var(--theme-input-checkable-on);
    }

    .console-input-radio input:checked + label .check:before {
        border: 1px solid var(--theme-input-checkable-on);
    }

    .console-input-radio input:checked + label .check:after {
        background: var(--theme-input-checkable-on);
    }

    /* Triad 01 */
    .console-input-radio.triad-01 input:checked + label {
        color: var(--theme-input-checkable-triad-01-on);
    }

    .console-input-radio.triad-01 input:checked + label .check:before {
        border: 1px solid var(--theme-input-checkable-triad-01-on);
    }

    .console-input-radio.triad-01 input:checked + label .check:after {
        background: var(--theme-input-checkable-triad-01-on);
    }

    /* Triad 02 */
    .console-input-radio.triad-02 input:checked + label {
        color: var(--theme-input-checkable-triad-02-on);
    }

    .console-input-radio.triad-02 input:checked + label .check:before {
        border: 1px solid var(--theme-input-checkable-triad-02-on);
    }

    .console-input-radio.triad-02 input:checked + label .check:after {
        background: var(--theme-input-checkable-triad-02-on);
    }

    /* Triad 03 */
    .console-input-radio.triad-03 input:checked + label {
        color: var(--theme-input-checkable-triad-03-on);
    }

    .console-input-radio.triad-03 input:checked + label .check:before {
        border: 1px solid var(--theme-input-checkable-triad-03-on);
    }

    .console-input-radio.triad-03 input:checked + label .check:after {
        background: var(--theme-input-checkable-triad-03-on);
    }

    /* Attention */
    .console-input-radio.attention + input:checked label {
        color: var(--theme-input-checkable-attention-on);
    }

    .console-input-radio.attention + input:checked label .check:before {
        border: 1px solid var(--theme-input-checkable-attention-on);
    }

    .console-input-radio.attention + input:checked label .check:after {
        background: var(--theme-input-checkable-attention-on);
    }

    /* style: disabled */
    .console-input-radio input:disabled + label,
    .console-input-radio input:checked:disabled + label,
    .console-input-radio.triad-01 input:checked:disabled + label,
    .console-input-radio.triad-02 input:checked:disabled + label,
    .console-input-radio.triad-03 input:checked:disabled + label {
        color: var(--theme-input-checkable-disabled);
    }

    .console-input-radio input:disabled + label .check:before,
    .console-input-radio input:checked:disabled + label .check:before,
    .console-input-radio.triad-01 input:checked:disabled + label .check:before,
    .console-input-radio.triad-02 input:checked:disabled + label .check:before,
    .console-input-radio.triad-03 input:checked:disabled + label .check:before {
        border: 1px solid var(--theme-input-checkable-disabled);
    }

    .console-input-radio input:disabled + label .check:after,
    .console-input-radio input:checked:disabled + label .check:after,
    .console-input-radio.triad-01 input:checked:disabled + label .check:after,
    .console-input-radio.triad-02 input:checked:disabled + label .check:after,
    .console-input-radio.triad-03 input:checked:disabled + label .check:after {
        background: transparent;
        border: 1px solid var(--theme-input-checkable-disabled);
    }
`;
