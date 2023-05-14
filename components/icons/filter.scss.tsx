import css from "styled-jsx/css";
export default css.global`
    [class^="icon-filter-shape-"],
    [class*=" icon-filter-shape-"] {
        position: absolute;
        height: 1px;
        background: var(--theme-text-1);
        width: 82%;
        top: calc(50% - 1px);
        left: 50%;
        transform: translateX(-50%);
        transition: var(--a-micro-active);
    }

    .icon-filter-shape-one {
        margin-top: -25%;
    }

    .icon-filter-shape-two {
        width: 50%;
    }

    .icon-filter-shape-three {
        margin-top: 25%;
        width: 20%;
    }

    .icon-filter.is-active .icon-filter-shape-one {
        margin-top: 0%;
        transform: translateX(-50%) rotate(45deg);
    }

    .icon-filter.is-active .icon-filter-shape-two {
        width: 0;
    }

    .icon-filter.is-active .icon-filter-shape-three {
        margin-top: 0%;
        width: 82%;
        transform: translateX(-50%) rotate(-45deg);
    }
`;
