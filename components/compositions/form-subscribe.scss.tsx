import css from "styled-jsx/css";
export default css.global`
    .console-form-subscribe {
        display: flex;
    }

    /* Layout: inline */
    .console-form-subscribe.inline {
        flex-flow: row nowrap;
        align-content: flex-start;
        align-items: center;
    }

    .console-form-subscribe.inline .console-input-wrapper {
        flex: 1 0 auto;
    }

    .console-form-subscribe.inline .console-button {
        flex: 0 0 auto;
        margin-left: var(--space3);
    }

    .console-form-subscribe.inline.medium .console-button {
        margin-left: var(--space3);
    }

    .console-form-subscribe.inline.small .console-button {
        margin-left: var(--space2_5);
    }

    /* Layout: block */
    .console-form-subscribe.block {
        flex-flow: column nowrap;
        align-items: stretch;
    }

    .console-form-subscribe.block .console-button {
        margin-top: var(--space3);
    }

    .console-form-subscribe.block.medium .console-button {
        margin-top: var(--space3);
    }

    .console-form-subscribe.block.small .console-button {
        margin-top: var(--space2_5);
    }
`;
