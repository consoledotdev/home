import css from "styled-jsx/css";
export default css.global`
    .title.rich-title {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .title.rich-title .icon {
        flex: 0 0 auto;
    }

    /* title 1 */
    .title-1.rich-title .icon {
        width: var(--space4);
        height: var(--space4);
        margin-right: var(--space3);
    }

    /* title 2 */
    .title-2.rich-title .icon {
        width: var(--space3_5);
        height: var(--space3_5);
        margin-right: var(--space3);
    }

    .title-2.rich-title .logo {
        width: calc(var(--space4) + var(--space2_5));
        margin-right: var(--space3);
    }

    /* title 3 */
    .title-3.rich-title .icon {
        width: var(--space3);
        height: var(--space3);
        margin-right: var(--space3);
    }

    /* title 4 */
    .title-4.rich-title .icon {
        width: var(--space3);
        height: var(--space3);
        margin-right: var(--space3);
    }

    /* title 5 */
    .title-5.rich-title .icon {
        width: var(--space3);
        height: var(--space3);
        margin-right: var(--space2_5);
    }

    /* title 6 */
    .title-6.rich-title .icon {
        width: var(--space3);
        height: var(--space3);
        margin-right: var(--space2_5);
    }
`;
