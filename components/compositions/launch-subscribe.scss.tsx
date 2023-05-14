import css from "styled-jsx/css";
export default css.global`
    .launch-subscribe {
        position: relative;
    }

    /* Layout: inline */
    .launch-subscribe.inline {
        display: grid;
        grid-template-columns: 0.55fr 0.45fr;
        align-items: center;
    }

    .launch-subscribe.inline.has-after {
        grid-template-columns: 0.4fr 0.3fr 0.3fr;
    }

    .launch-subscribe.inline > * > *:last-child {
        margin-bottom: 0;
    }

    .launch-subscribe.inline {
        gap: var(--space4_5);
    }

    .launch-subscribe.inline.medium {
        gap: var(--space3_5);
    }

    .launch-subscribe.inline.small {
        gap: var(--space3_5);
    }

    /* Layout: block */
    .launch-subscribe.block {
        display: block;
        flex-flow: none;
    }

    .launch-subscribe.block .console-form-subscribe {
        margin-top: var(--space4);
    }

    .launch-subscribe.block.medium .console-form-subscribe,
    .launch-subscribe.block.medium .launch-after {
        margin-top: var(--space3_5);
    }

    .launch-subscribe.block.small .console-form-subscribe,
    .launch-subscribe.block.small .launch-after {
        margin-top: var(--space3);
    }
`;
