import css from "styled-jsx/css";
export default css.global`
    .card {
        position: relative;
        box-shadow: var(--theme-shadow-1);
        transition: var(--a-micro);
        border-radius: var(--corners-mid);
        background: var(--theme-content-bg-1);
        overflow: hidden;
        flex: 1 1 auto;
    }
`;
