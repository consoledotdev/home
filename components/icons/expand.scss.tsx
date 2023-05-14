import css from "styled-jsx/css";
export default css.global`
    [class^="icon-expand-shape-"],
    [class*=" icon-expand-shape-"] {
        position: absolute;
        height: 1px;
        background: var(--theme-text-1);
        width: 41%;
        top: 31.5%;
        transition: var(--a-micro-active);
    }

    .icon-expand-shape-one {
        left: 24%;
        transform-origin: top left;
        transform: rotate(45deg);
    }

    .icon-expand-shape-two {
        right: 24%;
        transform-origin: top right;
        transform: rotate(-45deg);
    }

    .icon-expand.is-active .icon-expand-shape-one {
        top: 21%;
        width: 82%;
    }

    .icon-expand.is-active .icon-expand-shape-two {
        top: 21%;
        width: 82%;
    }
`;
