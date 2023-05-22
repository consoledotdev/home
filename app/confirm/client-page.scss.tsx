import css from "styled-jsx/css";
export default css.global`
    html {
        scroll-behavior: smooth;
    }

    .page-wrapper.privacy .title.title-2:not(:first-child) {
        margin-top: calc(var(--space4_5) + var(--space2));
    }

    .page-wrapper.privacy .page-section:not(:first-child) {
        margin-top: calc(var(--space4_5) + var(--space4));
    }

    .page-wrapper.privacy .page-section:not(.opening) > .title.title-3 {
        margin-top: calc(var(--space4_5) + var(--space2));
    }

    .page-wrapper.privacy .page-split .page-section {
        max-width: 700px;
    }

    .page-wrapper.privacy .description {
        margin-bottom: var(--space5);
    }

    /* Markdown body ------------------------------------------------------------------------ */
    .page-wrapper.privacy .page-section.markdown-body {
        margin-top: 0;
        padding: 0;
    }

    /* Signup ------------------------------------------------------------------------------------------------ */
    .page-wrapper.privacy .page-section.signup {
        margin: 0;
        padding: 0;
    }
`;
