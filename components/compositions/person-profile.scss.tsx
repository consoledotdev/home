import css from "styled-jsx/css";
export default css.global`
    .person-profile {
        display: grid;
        grid-template-columns: var(--space5) 1fr;
        align-items: center;
        gap: var(--space2);
    }

    .person-profile .plane-picture {
        width: 100%;
    }

    .page-section .person-profiles {
        display: flex;
        flex-flow: row wrap;
    }

    aside .person-profile:first-child {
        margin-top: var(--space3);
    }

    aside .person-profile {
        margin-top: var(--space3_5);
        margin-right: var(--space3_5);
    }
`;
