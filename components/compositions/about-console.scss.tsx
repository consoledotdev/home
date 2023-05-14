import css from "styled-jsx/css";
export default css.global`
    .about-console {
        --theme-p1-stroke: var(--c-blue-06-main);
        --theme-p2-stroke: var(--c-fuchsia-05-main);
        --theme-p3-stroke: var(--c-green-05-main);
    }

    .about-console {
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
    }

    .about-console .logo {
        margin-right: var(--space3_5);
        width: 23.6%;
        flex: 1 0 auto;
    }

    .about-console .console-name {
        font-weight: 500;
    }

    .about-console .logo .plane-one,
    .about-console .logo .plane-two,
    .about-console .logo .plane-three {
        stroke-width: 2;
    }

    .about-console .logo .prompt-inverted {
        display: none;
    }

    .about-console .logo .prompt-normal {
        display: block;
    }
`;
