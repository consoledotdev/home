import css from "styled-jsx/css";
export default css.global`
    .mars-illustration-mars {
        position: relative;
        border-radius: 100%;
        background: #ffebe1;
        box-shadow: var(--theme-mars-mars-halo);
        font-size: 50px;
        height: 1em;
        width: 1em;
    }

    .mars-illustration-mars-inner-shading {
        position: absolute;
        border-radius: 100%;
        background: transparent;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        box-shadow: var(--theme-mars-mars-shading);
        z-index: 20;
    }

    .mars-illustration-mars-texture {
        position: absolute;
        border-radius: 100%;
        background: transparent;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
        z-index: 10;
    }

    .mars-illustration-mars-texture div {
        position: absolute;
        top: 0;
        left: 0;
        width: 400%;
        height: 100%;
        transform: translateX(-50%);
        animation-name: rotate-mars;
        animation-duration: calc(20s * 1.026);
        animation-delay: 0s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
    }

    @keyframes rotate-mars {
        0% {
            transform: translateX(-50%);
        }
        100% {
            transform: translateX(-0%);
        }
    }

    .mars-illustration-mars-texture span:first-child,
    .mars-illustration-mars-texture span:last-child {
        position: absolute;
        top: 0;
        height: 100%;
        width: 50%;
        background-image: var(--theme-mars-mars-texture);
        background-size: auto 100%;
    }

    .mars-illustration-mars-texture span:first-child {
        left: 0;
    }

    .mars-illustration-mars-texture span:last-child {
        left: 50%;
    }

    .is-large .mars-illustration-mars-texture div {
        animation-duration: calc(30s * 1.026);
    }

    .is-large .mars-illustration-mars-texture span:first-child,
    .is-large .mars-illustration-mars-texture span:last-child {
        background-image: url("/img/research/mars/mars-texture-large.png");
    }
`;
