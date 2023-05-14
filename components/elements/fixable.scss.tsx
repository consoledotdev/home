import css from "styled-jsx/css";
export default css.global`
    .fixable {
        overflow-y: auto;
        padding-right: var(--space2_5);
        padding-left: 1px;
    }

    .fixable.fixed {
        padding-top: var(--space4);
        padding-bottom: var(--space5);
    }
`;
