import css from "styled-jsx/css";
export default css.global`
    .console-segmented-control {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .console-segmented-control input {
        width: 0px;
        height: 0px;
        opacity: 0;
        position: absolute;
        overflow: hidden;
    }

    .console-segmented-control input + label {
        position: relative;
        display: inline-flex;
        flex-flow: row nowrap;
        align-items: center;
        color: var(--theme-input-checkable-off);
        font-size: var(--t-size-2);
        line-height: var(--t-lH4);
        font-weight: 400;
        transition: var(--a-controls-long);
        min-height: calc(var(--space2_5) + var(--space3));
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .console-segmented-control input + label:hover,
    .console-segmented-control input:focus + label {
        transition: var(--a-controls-long-active);
    }

    .console-segmented-control input:not(:disabled):not(:checked) + label {
        cursor: pointer;
    }

    .console-segmented-control > div:not(:first-child) input + label {
        margin-left: var(--space3);
    }

    .console-segmented-control > div:not(:first-child) input + label:before {
        content: "";
        position: absolute;
        width: 1px;
        height: 100%;
        top: 0;
        left: 0;
        background: var(--theme-text-5);
        margin-left: calc(var(--space2) * -1);
    }

    /* style: default */
    .console-segmented-control input:checked + label {
        color: var(--theme-input-checkable-on);
    }

    /* Triad 01 */
    .console-segmented-control.triad-01 input:checked + label {
        color: var(--theme-input-checkable-triad-01-on);
    }

    /* Triad 02 */
    .console-segmented-control.triad-02 input:checked + label {
        color: var(--theme-input-checkable-triad-02-on);
    }

    /* Triad 03 */
    .console-segmented-control.triad-03 input:checked + label {
        color: var(--theme-input-checkable-triad-03-on);
    }

    /* Attention */
    .console-segmented-control.attention + input:checked label {
        color: var(--theme-input-checkable-attention-on);
    }

    /* style: disabled */
    .console-segmented-control input:disabled + label,
    .console-segmented-control input:checked:disabled + label,
    .console-segmented-control.triad-01 input:checked:disabled + label,
    .console-segmented-control.triad-02 input:checked:disabled + label,
    .console-segmented-control.triad-03 input:checked:disabled + label {
        color: var(--theme-input-checkable-disabled);
    }
`;
