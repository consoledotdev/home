import css from "styled-jsx/css";
export default css.global`
    .about-the-author {
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
    }

    .about-the-author .plane-picture {
        margin-right: var(--space3_5);
        width: 23.6%;
        flex: 1 0 auto;
    }
`;
