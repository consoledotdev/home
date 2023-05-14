import css from "styled-jsx/css";
export default css.global`
    .card-interview .combo-box {
        position: relative;
        height: auto;
        max-width: none;
        width: 100%;
        border-bottom: var(--theme-border-2);
        border-radius: 0;
    }

    .card-content {
        padding: var(--space3) var(--space4);
        margin-left: 0;
    }

    .card-content > :not(:last-child) {
        margin-bottom: calc(var(--space1) + var(--space2));
    }

    .card-heading > :not(:last-child) {
        margin-bottom: calc(var(--space1) / 2);
    }

    .card-person p,
    .card-company p {
        margin-bottom: 0;
    }

    .card-person {
        display: flex;
        flex-flow: row wrap;
        align-items: baseline;
    }

    .card-person-name {
        flex: 0 0 auto;
        margin-right: calc(var(--space2));
        font-weight: 500;
        font-size: var(--t-size0);
        color: var(--theme-text-4);
        flex: 0 1 auto;
    }

    .card-person-role {
        flex: 0 0 auto;
        color: var(--theme-text-4);
        font-size: var(--t-size-3);
        font-style: italic;
        flex: 0 1 auto;
    }

    .card-company {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    }

    .card-company-name {
        flex: 0 0 auto;
        margin-right: calc(var(--space1) + var(--space2));
        font-weight: 500;
        font-size: var(--t-size1);
        color: var(--theme-text-1);
        flex: 0 1 auto;
    }

    .card-company .tags {
        flex: 0 0 auto;
    }

    p.card-description {
        color: var(--theme-text-2);
        margin: 0;
    }

    @media (max-width: 600px) {
        .card-content {
            padding-left: var(--space3_5);
            padding-right: var(--space3_5);
        }
    }

    /* Horizontal card -------------------------------------------------------------------- */
    .card-interview.horizontal .combo-box {
        position: absolute;
        top: 0;
        left: 0;
        --comboBoxHeight: 152px;
        height: auto;
        width: calc(var(--comboBoxHeight) * 2.109);
    }

    .card-interview.horizontal .card-content {
        margin-left: 320px;
    }
`;
