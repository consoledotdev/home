import css from "styled-jsx/css";
export default css.global`
    /* Inline list display */
    .tech-stack-wrapper {
        position: relative;
        display: inline-block;
    }

    .tech-stack {
        display: block;
        font-weight: 400;
        font-size: var(--t-size-1);
        color: var(--theme-text-2);
        letter-spacing: 0.12em;
    }

    .tech-stack .icon {
        width: 1.15em;
        height: 1.15em;
        vertical-align: -0.2em;
        margin-right: calc(var(--space2));
    }

    .tech-stack .icon-stroke {
        stroke: var(--theme-text-2);
    }

    .tech-stack span {
        color: var(--theme-text-3);
    }

    .tech-stack-wrapper .tooltip {
        width: auto;
    }

    .tech-stack-wrapper .tooltip-content p {
        white-space: nowrap;
    }

    /* Individual items display */
    .tech-stack-item {
        font-weight: 400;
        font-size: var(--t-size-1);
        color: var(--theme-text-2);
        letter-spacing: 0.12em;
    }
`;
