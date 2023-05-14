import css from "styled-jsx/css";
export default css.global`
    .page-wrapper.betas .page-section.opening {
        margin: 0;
        padding: 0;
    }

    @media (max-width: 1024px) {
        .page-wrapper.betas .page-section.opening {
            margin-right: 0;
        }
    }

    .page-section.opening .sponsor-disclosure {
        margin-top: var(--space3);
    }

    /* List -------------------------------------------------------------------- */
    .page-wrapper.betas .page-section.betas {
        margin: 0;
        padding: 0;
        margin-top: calc(var(--space4) + var(--space3));
        min-height: 80vh;
    }

    .page-wrapper.betas .page-section.betas .heading {
        margin-bottom: var(--space4);
    }

    .page-wrapper.betas .page-section.betas .heading:not(:first-child) {
        margin-top: var(--space4_5);
    }

    .page-wrapper.betas .page-section.betas .heading .title {
        margin-bottom: 0;
    }

    .page-wrapper.betas .page-section.betas .heading .count {
        color: var(--theme-text-3);
        font-style: italic;
        font-size: var(--t-size0);
        margin-left: calc(var(--space2) + var(--space1));
    }

    .page-wrapper.betas .page-section.betas > *:not(:last-child) {
        margin-bottom: var(--space3);
    }

    .page-wrapper.betas .page-section.betas .card-empty {
        min-height: calc(var(--space7) - var(--space4));
    }

    .page-wrapper.betas .page-section.betas .card-empty-content {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }

    .page-wrapper.betas .page-section.betas .card-empty-content .icon {
        stroke: var(--theme-text-3);
        width: var(--t-size14);
        height: var(--t-size14);
    }

    .page-wrapper.betas .page-section.betas .card-empty-content p {
        color: var(--theme-text-3);
        margin-top: var(--space3);
    }

    /* Aside -------------------------------------------------------------------- */
    .page-wrapper.betas .filters {
        display: inline-flex;
        flex-flow: column nowrap;
        align-items: flex-start;
    }

    .page-wrapper.betas .filters > *:not(:first-child) {
        margin-top: var(--space3);
    }

    .page-wrapper.betas .filters .search {
        width: 7.5em;
    }

    .page-wrapper.betas .filters .search.focus,
    .page-wrapper.betas .filters .search.has-value {
        width: 100%;
    }

    /* in aside column */
    .page-wrapper.betas aside {
        margin-top: calc(var(--space3) + var(--space3_5) - var(--space0));
    }

    .page-wrapper.betas aside .fixable {
        padding-top: var(--space4);
    }

    .page-wrapper.betas aside .filters {
        margin-top: var(--space4);
        width: 100%;
    }

    .page-wrapper.betas aside .filters > * {
        width: 100%;
    }

    /* in main column */
    .page-wrapper.betas .page-section.aside {
        margin: 0;
        padding: 0;
        margin-top: var(--space4_5);
    }

    .page-wrapper.betas .page-section.aside .box-collapsible:not(:first-child) {
        margin-top: var(--space4);
    }

    .page-wrapper.betas .page-section.aside .box-collapsible.is-expanded.list-filters .box-collapsible-content {
        max-height: 600px;
    }

    .page-wrapper.betas .page-section.aside .console-label {
        min-width: 80px;
    }

    @media (max-width: 480px) {
        .page-wrapper.betas .page-section.aside .box-collapsible.is-expanded.list-filters .box-collapsible-content {
            max-height: 800px;
        }

        .page-wrapper.betas .page-section.aside .console-input-wrapper {
            flex-flow: column nowrap;
            align-items: flex-start;
        }

        .page-wrapper.betas .page-section.aside .console-label {
            margin-bottom: var(--space1);
        }

        .page-wrapper.betas .page-section.aside .console-input-checkbuttons {
            margin-top: calc(var(--space2) * -1);
            margin-bottom: calc(var(--space2) * -1);
        }
    }

    /* Signup -------------------------------------------------------------------- */
    .page-wrapper.betas .page-section.signup {
        margin: 0;
        padding: 0;
        margin-top: var(--space5);
    }
`;
