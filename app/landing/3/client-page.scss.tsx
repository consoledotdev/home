import css from "styled-jsx/css";
export default css.global`
    @media (min-width: 769px) {
        .page-wrapper.landing .main-nav ul {
            display: flex;
        }
    }

    @media (max-width: 768px) {
        .page-wrapper.landing .main-nav .menu-popup-wrapper {
            display: block;
        }

        .page-wrapper.landing .main-nav > .menu-toggle {
            display: block;
        }

        .page-wrapper.landing .main-nav > .theme-switcher {
            display: none;
        }
    }

    /* Opening --------------------------------------------------------------------------------- */
    .page-section.opening {
        gap: var(--space5_5);
        z-index: 10;
    }

    .page-section.opening .top {
        max-width: 600;
    }

    @media (max-width: 768px) {
        .page-section.opening {
            gap: var(--space5);
        }
    }

    @media (max-width: 722px) {
        .page-section.opening {
            gap: var(--space4_5);
        }
    }

    @media (min-width: 1200px) {
        .page-section.opening {
            gap: var(--space5);
        }
    }

    @media (max-width: 880px) {
        .page-section.opening .top {
            min-width: 320px;
        }
    }

    @media (max-width: 722px) {
        .page-section.opening .top {
            min-width: auto;
        }
    }

    @media (min-width: 1280px) {
        .page-section.opening .top {
            max-width: 760;
        }
    }

    @media (min-width: 723px) and (max-width: 860px) {
        .page-section.opening .top .title br {
            display: none;
        }
    }

    @media (max-width: 450px) {
        .page-section.opening .top .title br {
            display: none;
        }
    }

    .page-section.opening .bottom {
        position: relative;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
    }

    @media (min-width: 723px) {
        .page-section.opening .bottom {
            text-align: center;
        }
    }

    @media (max-width: 722px) {
        .page-section.opening .bottom {
            display: block;
            max-width: none;
        }
    }

    .page-section.opening .bottom .title {
        display: none;
    }

    @media (min-width: 723px) {
        .page-section.opening .bottom .title {
            display: inline-flex;
            margin-bottom: 0;
        }

        .page-section.opening .bottom .title .icon {
            width: var(--space3_5);
            height: var(--space3_5);
        }
    }

    .page-section.opening .bottom .console-form-subscribe {
        margin: var(--space4) 0;
    }

    @media (min-width: 723px) {
        .page-section.opening .bottom .console-form-subscribe {
            flex-flow: column nowrap;
            align-items: stretch;
        }

        .page-section.opening .bottom .console-form-subscribe .console-button {
            margin-left: 0;
            margin-top: var(--space3);
        }
    }

    @media (max-width: 722px) {
        .page-section.opening .bottom .console-form-subscribe {
            margin-top: 0;
        }
    }

    .page-section.opening .content-wrapper {
        position: relative;
        z-index: 20;
        max-width: var(--space7_5);
        width: 100%;
    }

    @media (max-width: 722px) {
        .page-section.opening .content-wrapper {
            max-width: none;
        }
    }

    .page-section.opening .neon-planes-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 157%;
        max-width: 700px;
        min-width: 560px;
        z-index: 10;
    }

    @media (max-width: 722px) {
        .page-section.opening .neon-planes-wrapper {
            transform: translate(-50%, -80%);
        }
    }

    @media (max-width: 540px) {
        .page-section.opening .neon-planes-wrapper {
            width: 180%;
            max-width: none;
        }
    }

    @media (max-width: 430px) {
        .page-section.opening .neon-planes-wrapper {
            width: 200%;
            max-width: none;
            transform: translate(-50%, -90%);
        }
    }

    .page-section.opening .neon-planes-wrapper .neon-planes.all {
        position: relative;
        padding-bottom: 65%;
    }

    .page-section.opening .neon-planes-wrapper .neon-planes.all .neon-plane.triad-01 {
        margin-left: calc(20.73% + var(--skew-offset));
    }

    .page-section.opening .neon-planes-wrapper .neon-planes.all .neon-plane.triad-02 {
        margin-top: 12.5%;
    }

    .page-section.opening .neon-planes-wrapper .neon-planes.all .neon-plane.triad-03 {
        margin-top: 20.5%;
        margin-left: calc(32.8% + var(--skew-offset));
    }

    /* Trust Signals */
    .page-section.trust-signals {
        z-index: 20;
    }
`;
