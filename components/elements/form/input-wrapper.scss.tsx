import css from "styled-jsx/css";
export default css.global`
    .console-input-wrapper {
        position: relative;
    }

    .console-input-wrapper.inline {
        display: inline-flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .console-input-wrapper .console-label {
        display: block;
        font-size: var(--t-size0);
        color: var(--theme-text-2);
        transition: var(--a--micro);
    }

    .console-input-wrapper.medium .console-label {
        font-size: var(--t-size-1);
    }

    .console-input-wrapper.small .console-label {
        font-size: var(--t-size-2);
    }

    /* Layout: inline */
    .console-input-wrapper.inline input {
        flex: 1 1 auto;
    }

    .console-input-wrapper.inline .console-label {
        flex: 0 0 auto;
        margin-right: var(--space3);
    }

    .console-input-wrapper.inline.medium .console-label {
        margin-right: var(--space3);
    }

    .console-input-wrapper.inline.small .console-label {
        margin-right: var(--space2_5);
    }

    /* Layout: block */
    .console-input-wrapper.block .console-label {
        margin-bottom: var(--space2);
    }

    .console-input-wrapper.block.medium .console-label {
        margin-bottom: var(--space1_5);
    }

    .console-input-wrapper.block.small .console-label {
        margin-bottom: var(--space1);
    }
`;
