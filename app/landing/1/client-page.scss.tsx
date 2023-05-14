import css from "styled-jsx/css";
export default css.global`
    .page-section.what-we-do-2 {
        display: grid;
        gap: var(--space5);
        max-width: none;
        padding: 0;
    }

    @media (max-width: 768px) {
        .page-section.what-we-do-2 {
            gap: var(--space4_5);
        }
    }

    @media (min-width: 769px) {
        .page-section.what-we-do-2 {
            grid-auto-flow: column;
            grid-auto-columns: 1fr;
            align-items: start;
        }
    }

    .page-section.what-we-do-2 .col .icon {
        width: var(--space5);
        height: var(--space5);
    }

    .page-section.what-we-do-2 .col .title {
        margin-top: var(--space4);
    }

    .page-section.what-we-do-2 .col p {
        font-size: var(--t-size1);
        margin-top: var(--space4);
    }

    @media (max-width: 768px) {
        .page-section.what-we-do-2 .col .title {
            margin-top: var(--space3_5);
        }

        .page-section.what-we-do-2 .col p {
            margin-top: var(--space3);
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        .page-section.what-we-do-2 .col .title {
            margin-top: var(--space3_5);
        }

        .page-section.what-we-do-2 .col p {
            margin-top: var(--space3_5);
        }
    }
`;
