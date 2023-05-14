import css from "styled-jsx/css";
export default css.global`
    .console-input-checkbutton {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .console-input-checkbutton input {
        width: 0px;
        height: 0px;
        opacity: 0;
        position: absolute;
        overflow: hidden;
    }

    .console-input-checkbutton input + label {
        position: relative;
        display: inline-flex;
        flex-flow: row nowrap;
        align-items: center;
        cursor: pointer;
        border-radius: var(--corners-xx-small);
        border: var(--theme-control-button-inactive-border);
        color: var(--theme-control-button-inactive-text);
        margin: 0;
        padding: calc(var(--space1) - 2px) var(--space2);
        font-size: var(--t-size-2);
        line-height: var(--t-lH4);
        font-weight: 400;
        transition: var(--a-elements);
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .console-input-checkbutton input + label:hover,
    .console-input-checkbutton input:focus + label {
        border: var(--theme-control-button-inactive-border-hover);
        background: var(--theme-control-button-inactive-background-hover);
        color: var(--theme-control-button-inactive-text-hover);
    }

    .console-input-checkbutton input + label .icon {
        flex: 0 0 auto;
        width: 1.2em;
        height: 1.2em;
        margin-right: var(--space1);
        fill: var(--theme-control-button-inactive-text);
        transition: var(--a-elements);
    }

    .console-input-checkbutton input + label:hover .icon,
    .console-input-checkbutton input:focus + label .icon {
        fill: var(--theme-control-button-inactive-text-hover);
    }

    .console-input-checkbutton input + label .icon-plus,
    .console-input-checkbutton input + label .icon-checkmark,
    .console-input-checkbutton input + label .icon-minus,
    .console-input-checkbutton input + label .icon-x {
        margin-right: var(--space1);
        width: 1em;
        height: 1em;
    }

    .console-input-checkbutton input:not(:checked) + label .icon-checkmark,
    .console-input-checkbutton input:checked + label .icon-plus {
        display: none;
    }

    /* Layout: block */
    .console-input-checkbuttons.block .console-input-checkbutton:not(:last-child) {
        margin-bottom: var(--space3);
    }

    /* Layout: inline */
    .console-input-checkbuttons.inline {
        display: flex;
        flex-flow: row wrap;
    }

    .console-input-checkbuttons.inline .console-input-checkbutton {
        margin-top: var(--space2);
        margin-bottom: var(--space2);
        margin-right: var(--space3);
    }

    /* Triad 01 */
    .console-input-checkbutton.triad-01 input:checked + label {
        color: var(--theme-control-button-active-blue-text);
        background: var(--theme-control-button-active-blue-background);
        border: 1px solid transparent;
    }
    .console-input-checkbutton.triad-01 input:checked + label .icon {
        fill: var(--theme-control-button-active-blue-text);
    }
    .console-input-checkbutton.triad-01 input:checked + label:hover,
    .console-input-checkbutton.triad-01 input:checked:focus + label {
        color: var(--theme-control-button-active-blue-text-hover);
        background: var(--theme-control-button-active-blue-background-hover);
    }
    .console-input-checkbutton.triad-01 input:checked + label:hover .icon,
    .console-input-checkbutton.triad-01 input:checked:focus + label .icon {
        fill: var(--theme-control-button-active-blue-text-hover);
    }

    /* Triad 02 */
    .console-input-checkbutton.triad-02 input:checked + label {
        color: var(--theme-control-button-active-fuchsia-text);
        background: var(--theme-control-button-active-fuchsia-background);
        border: 1px solid transparent;
    }
    .console-input-checkbutton.triad-02 input:checked + label .icon {
        fill: var(--theme-control-button-active-fuchsia-text);
    }
    .console-input-checkbutton.triad-02 input:checked + label:hover,
    .console-input-checkbutton.triad-02 input:checked:focus + label {
        color: var(--theme-control-button-active-fuchsia-text-hover);
        background: var(--theme-control-button-active-fuchsia-background-hover);
    }
    .console-input-checkbutton.triad-02 input:checked + label:hover .icon,
    .console-input-checkbutton.triad-02 input:checked:focus + label .icon {
        fill: var(--theme-control-button-active-fuchsia-text-hover);
    }

    /* Triad 03 */
    .console-input-checkbutton.triad-03 input:checked + label {
        color: var(--theme-control-button-active-green-text);
        background: var(--theme-control-button-active-green-background);
        border: 1px solid transparent;
    }
    .console-input-checkbutton.triad-03 input:checked + label .icon {
        fill: var(--theme-control-button-active-green-text);
    }
    .console-input-checkbutton.triad-03 input:checked + label:hover,
    .console-input-checkbutton.triad-03 input:checked:focus + label {
        color: var(--theme-control-button-active-green-text-hover);
        background: var(--theme-control-button-active-green-background-hover);
    }
    .console-input-checkbutton.triad-03 input:checked + label:hover .icon,
    .console-input-checkbutton.triad-03 input:checked:focus + label .icon {
        fill: var(--theme-control-button-active-green-text-hover);
    }

    /* master */
    .console-input-checkbutton-master input + label,
    .console-input-checkbutton-master.triad-01 input:checked + label,
    .console-input-checkbutton-master.triad-02 input:checked + label,
    .console-input-checkbutton-master.triad-03 input:checked + label {
        background: none;
    }

    .console-input-checkbutton-master input + label,
    .console-input-checkbutton-master input + label:hover,
    .console-input-checkbutton-master input:focus + label {
        border: 1px solid transparent;
    }

    .console-input-checkbutton-master input:not(:checked):not(:indeterminate) + label .icon-minus,
    .console-input-checkbutton-master input:not(:checked):not(:indeterminate) + label .icon-x,
    .console-input-checkbutton-master input:checked:not(:indeterminate) + label .icon-minus,
    .console-input-checkbutton-master input:checked:not(:indeterminate) + label .icon-plus,
    .console-input-checkbutton-master input:not(:checked):indeterminate + label .icon-plus,
    .console-input-checkbutton-master input:not(:checked):indeterminate + label .icon-x {
        display: none;
    }

    .console-input-checkbutton-master input:not(:checked):not(:indeterminate) + label .console-input-checkbutton-label-all,
    .console-input-checkbutton-master input:checked:not(:indeterminate) + label .console-input-checkbutton-label-none,
    .console-input-checkbutton-master input:not(:checked):indeterminate + label .console-input-checkbutton-label-all {
        display: block;
    }

    .console-input-checkbutton-master input:not(:checked):not(:indeterminate) + label .console-input-checkbutton-label-none,
    .console-input-checkbutton-master input:checked:not(:indeterminate) + label .console-input-checkbutton-label-all,
    .console-input-checkbutton-master input:not(:checked):indeterminate + label .console-input-checkbutton-label-none {
        display: none;
    }
`;
