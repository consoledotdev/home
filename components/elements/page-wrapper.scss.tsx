import css from "styled-jsx/css";
export default css.global`
    .overflow-wrapper {
        position: relative;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        z-index: 30;
    }

    .overflow-wrapper.full-height .content {
        height: 100vh;
    }

    .hero {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
        z-index: 10;
    }
`;
