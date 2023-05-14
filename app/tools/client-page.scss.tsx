import css from "styled-jsx/css";
export default css.global`
    .page-wrapper.tools .page-section.opening {
        margin: 0;
        padding: 0;
    }

    @media (max-width: 1024px) {
        .page-wrapper.tools .page-section.opening {
            margin-right: 0;
        }
    }

    .page-section.opening .sponsor-disclosure {
        margin-top: var(--space3);
    }

    /* List -------------------------------------------------------------------- */
    .page-wrapper.tools .page-section.tools {
        margin: 0;
        padding: 0;
        margin-top: calc(var(--space4) + var(--space3));
        min-height: 80vh;
    }

    .page-wrapper.tools .page-section.tools .heading {
        margin-bottom: var(--space4);
    }

    .page-wrapper.tools .page-section.tools .heading:not(:first-child) {
        margin-top: var(--space4_5);
    }

    .page-wrapper.tools .page-section.tools .heading .title {
        margin-bottom: 0;
    }

    .page-wrapper.tools .page-section.tools .heading .count {
        color: var(--theme-text-3);
        font-style: italic;
        font-size: var(--t-size0);
        margin-left: calc(var(--space2) + var(--space1));
    }

    .page-wrapper.tools .page-section.tools > *:not(:last-child) {
        margin-bottom: var(--space3);
    }

    .page-wrapper.tools .page-section.tools .card-empty {
        min-height: calc(var(--space7) - var(--space4));
    }

    .page-wrapper.tools .page-section.tools .card-empty-content {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }

    .page-wrapper.tools .page-section.tools .card-empty-content .icon {
        stroke: var(--theme-text-3);
        width: var(--t-size14);
        height: var(--t-size14);
    }

    .page-wrapper.tools .page-section.tools .card-empty-content p {
        color: var(--theme-text-3);
        margin-top: var(--space3);
    }

    /* Aside -------------------------------------------------------------------- */
    .page-wrapper.tools .filters {
        display: inline-flex;
        flex-flow: column nowrap;
        align-items: flex-start;
    }

    .page-wrapper.tools .filters > *:not(:first-child) {
        margin-top: var(--space3);
    }

    .page-wrapper.tools .filters .search {
        width: 7.5em;
    }

    .page-wrapper.tools .filters .search.focus,
    .page-wrapper.tools .filters .search.has-value {
        width: 100%;
    }

    /* in aside column */
    .page-wrapper.tools aside {
        margin-top: calc(var(--space3) + var(--space3_5) - var(--space0));
    }

    .page-wrapper.tools aside .fixable {
        padding-top: var(--space4);
    }

    .page-wrapper.tools aside .filters {
        margin-top: var(--space4);
        width: 100%;
    }

    .page-wrapper.tools aside .filters > * {
        width: 100%;
    }

    /* in main column */
    .page-wrapper.tools .page-section.aside {
        margin: 0;
        padding: 0;
        margin-top: var(--space4_5);
    }

    .page-wrapper.tools .page-section.aside .box-collapsible:not(:first-child) {
        margin-top: var(--space4);
    }

    .page-wrapper.tools .page-section.aside .box-collapsible.is-expanded.list-filters .box-collapsible-content {
        max-height: 600px;
    }

    .page-wrapper.tools .page-section.aside .console-label {
        min-width: 80px;
    }

    @media (max-width: 480px) {
        .page-wrapper.tools .page-section.aside .box-collapsible.is-expanded.list-filters .box-collapsible-content {
            max-height: 800px;
        }

        .page-wrapper.tools .page-section.aside .console-input-wrapper {
            flex-flow: column nowrap;
            align-items: flex-start;
        }

        .page-wrapper.tools .page-section.aside .console-label {
            margin-bottom: var(--space1);
        }

        .page-wrapper.tools .page-section.aside .console-input-checkbuttons {
            margin-top: calc(var(--space2) * -1);
            margin-bottom: calc(var(--space2) * -1);
        }
    }

    /* Signup -------------------------------------------------------------------- */
    .page-wrapper.tools .page-section.signup {
        margin: 0;
        padding: 0;
        margin-top: var(--space5);
    }
`;
