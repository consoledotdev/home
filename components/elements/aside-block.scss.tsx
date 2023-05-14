import css from "styled-jsx/css";
export default css.global`
    aside .page-section-heading {
        margin-bottom: 0;
    }

    aside .page-section-heading .title {
        margin-bottom: 0;
    }

    /* Aside block */
    aside .aside-block:not(:first-child) {
        margin-top: var(--space4_5);
    }

    aside .aside-block .title.title-3 {
        margin-bottom: var(--space1);
        font-size: calc(var(--t-size1) * var(--sizeMult));
    }

    .page-section .aside-block .page-section-heading,
    .page-section .aside-block .title.title-3 {
        margin-bottom: var(--space1);
    }

    /* Aside items */
    aside .aside-items:not(:first-child),
    aside .aside-item:not(:first-child) {
        margin-top: var(--space3_5);
    }

    .page-section .aside-items:not(:first-child),
    .page-section .aside-item:not(:first-child) {
        margin-top: var(--space4);
    }

    .aside-item-title-extras .title,
    .aside-item-title-extras .small,
    .aside-item-title-extras a.link:not(:hover):not(:focus):not(:active) {
        color: var(--theme-text-4);
    }

    .aside-item-title-extras p:first-child {
        font-weight: 500;
    }

    .aside-item-title-extras p:first-child:not(:last-child) {
        margin-bottom: var(--space1);
    }

    .aside-item-title-extras p:last-child:not(:first-child) {
        font-style: italic;
    }

    .aside-item-meta {
        margin-top: var(--space2);
    }

    .aside-item-meta p {
        color: var(--theme-text-3);
    }
`;
