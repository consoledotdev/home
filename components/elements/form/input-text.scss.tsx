import css from "styled-jsx/css";
export default css.global`
    .console-input-text-wrapper {
        position: relative;
        --paddingV: calc(var(--space3) + var(--space1));
        --paddingVMedium: calc(var(--space3) + calc(var(--space1) / 2));
        --paddingVSmall: var(--space3);
        --cancelButtonW: var(--space2_5);
    }

    input.console-input-text {
        width: 100%;
        margin: 0 1px;
        padding: 0;
        border: var(--theme-input-border);
        outline: none;
        flex: 1 0 auto;
        background: var(--theme-input-bg);
        color: var(--theme-input-text);
        padding: calc(var(--space2) + var(--space1)) var(--paddingV);
        padding-right: calc(var(--paddingV) + var(--cancelButtonW));
        border-radius: var(--corners-x-small);
        font-size: var(--t-size0);
        line-height: var(--t-lH4);
        transition: var(--a-controls);
        box-shadow: 0 0 0 1px var(--theme-input-border);
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
    }

    body:not(.mobile) input.console-input-text:not(:focus):hover {
        box-shadow: var(--theme-input-border-hover);
    }

    input.console-input-text:active,
    input.console-input-text:focus {
        box-shadow: var(--theme-input-border-focus);
        transition: var(--a-controls-active);
    }

    input.console-input-text:not(:focus):not(:placeholder-shown):invalid,
    .form-generic .fieldset.is-invalid input.console-input-text:invalid {
        box-shadow: 0 0 0 2px var(--theme-signaling-error);
    }

    input.console-input-text::placeholder {
        color: var(--theme-input-placeholder-text);
    }
    input.console-input-text::-webkit-input-placeholder /* Chrome/Opera/Safari */ {
        color: var(--theme-input-placeholder-text);
    }
    input.console-input-text::-moz-placeholder /* Firefox 19+ */ {
        color: var(--theme-input-placeholder-text);
    }
    input.console-input-text:-ms-input-placeholder /* IE 10+ */ {
        color: var(--theme-input-placeholder-text);
    }
    input.console-input-text:-moz-placeholder /* Firefox 18- */ {
        color: var(--theme-input-placeholder-text);
    }

    input.console-input-text.medium {
        font-size: var(--t-size-1);
        padding: calc(var(--space2) + calc(var(--space1) / 2)) var(--paddingVMedium);
        padding-right: calc(var(--paddingVMedium) + var(--cancelButtonW));
    }

    input.console-input-text.small {
        font-size: var(--t-size-2);
        padding: var(--space2) var(--paddingVSmall);
        padding-right: calc(var(--paddingVSmall) + var(--cancelButtonW));
    }

    /* Content cancel button */
    input.console-input-text + .console-input-text-cancel {
        position: absolute;
        display: inline-block;
        background: var(--theme-input-text-accessory-color);
        padding: var(--space0);
        width: var(--cancelButtonW);
        height: var(--cancelButtonW);
        border-radius: 50%;
        transform: translate(50%, -50%);
        top: 50%;
        cursor: pointer;
        transition: var(--a--micro);
        opacity: 0;
    }

    input.console-input-text + .console-input-text-cancel {
        right: var(--paddingV);
    }

    input.console-input-text.small + .console-input-text-cancel {
        right: var(--paddingVMedium);
    }

    input.console-input-text.medium + .console-input-text-cancel {
        right: var(--paddingVSmall);
    }

    input.console-input-text + .console-input-text-cancel .icon {
        display: inline-block;
        vertical-align: top;
        width: var(--space2);
        height: var(--space2);
        stroke: var(--c-white-00-absolute);
    }

    input.console-input-text:not(:placeholder-shown) + .console-input-text-cancel {
        opacity: 0.6;
    }

    input.console-input-text:not(:placeholder-shown) + .console-input-text-cancel:hover {
        opacity: 1;
    }

    input.console-input-text:not(:placeholder-shown) + .console-input-text-cancel:active {
        opacity: 1;
        background: var(--theme-input-text-accessory-color-hover);
    }
`;
