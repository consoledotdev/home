import css from "styled-jsx/css";
export default css.global`
    .card-empty {
        position: relative;
        background-color: var(--theme-empty-bg-1);
        border-radius: var(--corners-mid);
        padding: var(--space3) var(--space4);
        background-image: var(--theme-empty-dashed-border);
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
    }
`;
