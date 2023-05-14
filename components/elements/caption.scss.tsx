import css from "styled-jsx/css";
export default css.global`
    .caption {
        margin-top: var(--space4);
        margin-bottom: var(--space4);
        background-color: var(--theme-content-bg-4);
        border: var(--theme-border-0);
        padding: var(--space2) var(--space3);
    }

    .caption p {
        margin-top: 0;
        color: var(--theme-text-2);
        font-size: var(--t-size-2);
        letter-spacing: 0.1em;
    }
`;
