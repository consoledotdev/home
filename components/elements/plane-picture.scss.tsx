import css from "styled-jsx/css";
export default css.global`
    .plane-picture {
        position: relative;
        display: inline-block;
        height: 100px;
        clip-path: polygon(30.9% 0%, 0% 100%, 69.1% 100%, 100% 0%);
    }

    .plane-picture .ratio {
        height: 100%;
        display: block;
        visibility: hidden;
    }

    .plane-picture .image {
        top: 0;
        left: 0;
        position: absolute;
        display: inline-block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        vertical-align: top;
    }

    .plane-picture.by-width {
        width: 100px;
        height: auto;
    }

    .plane-picture.by-width .ratio {
        width: 100%;
        display: block;
        visibility: hidden;
    }
`;
