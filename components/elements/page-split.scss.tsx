import css from "styled-jsx/css";
export default css.global`
    .page-split {
        display: grid;
    }

    @media (min-width: 769px) {
        .page-split {
            grid-auto-flow: column;
            align-items: start;
            gap: var(--space5);
        }

        .page-split.peer {
            grid-auto-columns: 1fr 1fr;
        }

        .page-split.aside-list {
            grid-auto-columns: 1fr min(28%, 260px);
        }

        .page-split.aside {
            grid-template-columns: repeat(auto-fit, minmax(0, 1fr) minmax(0, 0.5fr));
            gap: var(--space4_5);
        }

        .page-split.aside > *:first-child:not(:last-child) {
            margin-right: var(--space3);
        }

        .page-split.aside > aside {
            margin-left: var(--space3);
        }
    }
`;
