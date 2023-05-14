import css from "styled-jsx/css";
export default css.global`
    .lines {
        position: absolute;
        top: 0;
        transform: translateX(-10.1%);
        width: 153.7vw;
        height: 112vh;
        opacity: 0.08;
        z-index: 1;
    }

    body:not(.is-same-origin) [id^="line-"] {
        animation-duration: 1.2s;
        animation-delay: 0.5s;
        animation-timing-function: cubic-bezier(0.41, 0.14, 0.35, 0.99);
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }

    body:not(.is-same-origin) #line-01 {
        stroke-dasharray: 1348;
        stroke-dashoffset: 1348;
        animation-name: line-01-in;
    }

    @keyframes line-01-in {
        0% {
            stroke-dashoffset: 1348;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }

    body:not(.is-same-origin) #line-02 {
        stroke-dasharray: 1348;
        stroke-dashoffset: -1348;
        animation-name: line-02-in;
    }

    @keyframes line-02-in {
        0% {
            stroke-dashoffset: -1348;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }

    body:not(.is-same-origin) #line-03 {
        stroke-dasharray: 1348;
        stroke-dashoffset: 1348;
        animation-name: line-03-in;
    }

    @keyframes line-03-in {
        0% {
            stroke-dashoffset: 1348;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }

    body:not(.is-same-origin) #line-04 {
        stroke-dasharray: 1348;
        stroke-dashoffset: -1348;
        animation-name: line-04-in;
    }

    @keyframes line-04-in {
        0% {
            stroke-dashoffset: -1348;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }

    body:not(.is-same-origin) #line-05 {
        stroke-dasharray: 562.672;
        stroke-dashoffset: 562.672;
        animation-name: line-05-in;
    }

    @keyframes line-05-in {
        0% {
            stroke-dashoffset: 562.672;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }

    body:not(.is-same-origin) #line-06 {
        stroke-dasharray: 802.328;
        stroke-dashoffset: 802.328;
        animation-name: line-06-in;
    }

    @keyframes line-06-in {
        0% {
            stroke-dashoffset: 802.328;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }

    body:not(.is-same-origin) #line-07 {
        stroke-dasharray: 975.992;
        stroke-dashoffset: 975.992;
        animation-name: line-07-in;
    }

    @keyframes line-07-in {
        0% {
            stroke-dashoffset: 975.992;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }

    body:not(.is-same-origin) #line-08 {
        stroke-dasharray: 389.008;
        stroke-dashoffset: 389.008;
        animation-name: line-08-in;
    }

    @keyframes line-08-in {
        0% {
            stroke-dashoffset: 389.008;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }

    body:not(.is-same-origin) #line-09 {
        stroke-dasharray: 736.336;
        stroke-dashoffset: 736.336;
        animation-name: line-09-in;
    }

    @keyframes line-09-in {
        0% {
            stroke-dashoffset: 736.336;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }

    body:not(.is-same-origin) #line-10 {
        stroke-dasharray: 1348;
        stroke-dashoffset: 1348;
        animation-name: line-10-in;
    }

    @keyframes line-10-in {
        0% {
            stroke-dashoffset: 1348;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }

    .hero .lines animate {
        display: none;
    }

    .hero .lines line {
        stroke: var(--theme-lines-color);
    }

    @media (prefers-reduced-motion: reduce) {
        body:not(.is-same-origin) [id^="line-"] {
            animation: none;
        }
        body:not(.is-same-origin) #line-01,
        body:not(.is-same-origin) #line-02,
        body:not(.is-same-origin) #line-03,
        body:not(.is-same-origin) #line-04,
        body:not(.is-same-origin) #line-05,
        body:not(.is-same-origin) #line-06,
        body:not(.is-same-origin) #line-07,
        body:not(.is-same-origin) #line-08,
        body:not(.is-same-origin) #line-09,
        body:not(.is-same-origin) #line-10 {
            stroke-dasharray: 0;
            stroke-dashoffset: 0;
        }
    }
`;
