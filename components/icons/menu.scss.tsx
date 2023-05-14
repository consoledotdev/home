import css from "styled-jsx/css";
export default css.global`
    [class^="icon-menu-shape-"],
    [class*=" icon-menu-shape-"] {
        position: absolute;
        height: 1px;
        background: var(--theme-text-1);
        width: 82%;
        top: calc(50% - 1px);
        left: 50%;
        transform: translateX(-50%);
        transition: var(--a-micro-active);
    }

    .icon-menu-shape-one {
        margin-top: -14%;
    }

    .icon-menu-shape-two {
        margin-top: 14%;
        width: 55%;
        margin-left: 13.5%;
    }

    .icon-menu.is-active .icon-menu-shape-one {
        margin-top: 0;
        transform: translateX(-50%) rotate(45deg);
        transition: var(--a-micro);
    }

    .icon-menu.is-active .icon-menu-shape-two {
        margin-top: 0;
        margin-left: 0;
        width: 82%;
        transform: translateX(-50%) rotate(-45deg);
        transition: var(--a-micro);
    }
`;
