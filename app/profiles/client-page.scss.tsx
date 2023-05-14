import css from "styled-jsx/css";
export default css.global`
    .page-wrapper.profiles .page-section.opening {
        margin: 0;
        padding: 0;
    }

    @media (max-width: 1024px) {
        .page-wrapper.profiles .page-section.opening {
            margin-right: 0;
        }
    }

    /* List -------------------------------------------------------------------- */
    .page-wrapper.profiles .page-section.profiles {
        margin: 0;
        padding: 0;
        margin-top: calc(var(--space4) + var(--space3));
        min-height: 80vh;
    }

    .page-wrapper.profiles .page-section.profiles .heading {
        margin-bottom: var(--space4);
    }

    .page-wrapper.profiles .page-section.profiles .heading:not(:first-child) {
        margin-top: var(--space4_5);
    }

    .page-wrapper.profiles .page-section.profiles .heading .title {
        margin-bottom: 0;
    }

    .page-wrapper.profiles .page-section.profiles .heading .count {
        color: var(--theme-text-3);
        font-style: italic;
        font-size: var(--t-size0);
        margin-left: calc(var(--space2) + var(--space1));
    }

    .page-wrapper.profiles .page-section.profiles > *:not(:last-child) {
        margin-bottom: var(--space3);
    }

    .page-wrapper.profiles .page-section.profiles .card-empty {
        min-height: calc(var(--space7) - var(--space4));
    }

    .page-wrapper.profiles .page-section.profiles .card-empty-content {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }

    .page-wrapper.profiles .page-section.profiles .card-empty-content .icon {
        stroke: var(--theme-text-3);
        width: var(--t-size14);
        height: var(--t-size14);
    }

    .page-wrapper.profiles .page-section.profiles .card-empty-content p {
        color: var(--theme-text-3);
        margin-top: var(--space3);
    }

    /* Aside -------------------------------------------------------------------- */
    .page-wrapper.profiles .filters {
        display: inline-flex;
        flex-flow: column nowrap;
        align-items: flex-start;
    }

    .page-wrapper.profiles .filters > *:not(:first-child) {
        margin-top: var(--space3);
    }

    .page-wrapper.profiles .filters .search {
        width: 7.5em;
    }

    .page-wrapper.profiles .filters .search.focus,
    .page-wrapper.profiles .filters .search.has-value {
        width: 100%;
    }

    /* in aside column */
    .page-wrapper.profiles aside {
        margin-top: calc(var(--space3) + var(--space3_5) - var(--space0));
    }

    .page-wrapper.profiles aside .fixable {
        padding-top: var(--space4);
    }

    .page-wrapper.profiles aside .filters {
        margin-top: var(--space4);
        width: 100%;
    }

    .page-wrapper.profiles aside .filters > * {
        width: 100%;
    }

    /* in main column */
    .page-wrapper.profiles .page-section.aside {
        margin: 0;
        padding: 0;
        margin-top: var(--space4_5);
    }

    .page-wrapper.profiles .page-section.aside .box-collapsible:not(:first-child) {
        margin-top: var(--space4);
    }

    .page-wrapper.profiles .page-section.aside .box-collapsible.is-expanded.list-filters .box-collapsible-content {
        max-height: 600px;
    }

    .page-wrapper.profiles .page-section.aside .console-label {
        min-width: 80px;
    }

    @media (max-width: 480px) {
        .page-wrapper.profiles .page-section.aside .box-collapsible.is-expanded.list-filters .box-collapsible-content {
            max-height: 800px;
        }

        .page-wrapper.profiles .page-section.aside .console-input-wrapper {
            flex-flow: column nowrap;
            align-items: flex-start;
        }

        .page-wrapper.profiles .page-section.aside .console-label {
            margin-bottom: var(--space1);
        }

        .page-wrapper.profiles .page-section.aside .console-input-checkbuttons {
            margin-top: calc(var(--space2) * -1);
            margin-bottom: calc(var(--space2) * -1);
        }
    }

    /* Signup -------------------------------------------------------------------- */
    .page-wrapper.profiles .page-section.signup {
        margin: 0;
        padding: 0;
        margin-top: var(--space5);
    }
`;
