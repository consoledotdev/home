import css from "styled-jsx/css";
export default css.global`
    html {
        scroll-behavior: smooth;
    }

    body {
        transition: var(--a-layout-active);
    }

    [data-theme] body.checkpoint-other-content,
    [data-theme] body.checkpoint-other-content .page-wrapper.landing {
        transition: var(--a-layout);
    }

    [data-theme="dark"] body.checkpoint-other-content,
    [data-theme="dark"] body.checkpoint-other-content .page-wrapper.landing {
        background: var(--theme-content-bg-1);
    }

    [data-theme="light"] body.checkpoint-other-content,
    [data-theme="light"] body.checkpoint-other-content .page-wrapper.landing {
        background: var(--theme-content-bg-0);
    }

    [data-theme] body.page-landing.checkpoint-other-content .hero .lines {
        opacity: 0;
    }

    @media (max-width: 768px) {
        .page-wrapper.landing .main {
            margin-top: var(--space6);
            margin-bottom: calc(var(--space6) - var(--space4));
        }
    }

    @media (min-width: 769px) {
        .page-wrapper.landing .main {
            margin: max(calc(var(--space6) - var(--space3)), 10vh) 0 calc(var(--space6) - var(--space2));
        }
    }

    .page-wrapper.landing .page-section:not(:first-child) {
        margin-top: calc(var(--space6) - var(--space3));
    }

    .page-wrapper.landing .separator {
        margin-top: calc(var(--space6) - var(--space3));
    }

    @media (max-width: 1023px) {
        .page-wrapper.landing .page-section:not(:first-child) {
            margin-top: calc(var(--space6) - var(--space4));
        }

        .page-wrapper.landing .separator {
            margin-top: calc(var(--space6) - var(--space4));
        }
    }

    @media (max-width: 480px) {
        .page-wrapper.landing .page-section:not(:first-child) {
            margin-top: calc(var(--space6) - var(--space4_5));
        }

        .page-wrapper.landing .separator {
            margin-top: calc(var(--space6) - var(--space5));
        }
    }

    @media (max-width: 360px) {
        .page-wrapper.landing .page-section:not(:first-child) {
            margin-top: calc(var(--space6) - var(--space5));
        }
    }

    .page-wrapper.landing .header-nav {
        min-width: 0;
    }

    @media (min-width: 769px) {
        .page-wrapper.landing .header-nav > *:not(:last-child) {
            display: none;
        }
    }

    @media (max-width: 768px) {
        .page-wrapper.landing .main-nav .menu-popup-wrapper {
            display: none;
        }

        .page-wrapper.landing .main-nav > .menu-toggle {
            display: none;
        }

        .page-wrapper.landing .main-nav > .theme-switcher {
            display: flex;
        }
    }

    .page-wrapper.landing .quote {
        font-size: var(--t-size0);
        background: none;
    }

    .page-wrapper.landing ul li {
        font-size: var(--t-size0);
    }

    /* Opening ------------------------------------------------------------------------------------------- */
    .page-section.opening {
        max-width: none;
        display: grid;
        gap: var(--space4_5);
        margin-bottom: var(--space6);
        padding: 0;
    }

    @media (max-width: 1023px) {
        .page-section.opening {
            margin-bottom: calc(var(--space6) - var(--space3));
        }
    }

    @media (max-width: 480px) {
        .page-section.opening {
            margin-bottom: calc(var(--space6) - var(--space4));
        }
    }

    @media (max-width: 360px) {
        .page-section.opening {
            margin-bottom: calc(var(--space6) - var(--space4_5));
        }
    }

    @media (min-width: 723px) {
        .page-section.opening {
            grid-auto-flow: column;
            grid-auto-columns: 1fr;
            align-items: center;
        }
    }

    @media (min-width: 723px) and (max-width: 800px) {
        .page-section.opening {
            --gapAdjust: calc(calc(800px - 100vw) * 1);
            gap: calc(var(--space4_5) + var(--gapAdjust));
        }
    }

    .page-section.opening .top {
        z-index: 20;
    }

    @media (min-width: 723px) {
        .page-section.opening .top {
            min-width: 438px;
        }
    }

    .page-section.opening .console-form-subscribe {
        margin: var(--space4_5) 0;
    }

    .page-section.opening .bottom {
        position: relative;
        z-index: 10;
        display: none;
        justify-self: center;
        max-width: 480px;
        width: 100%;
        height: 100%;
    }

    @media (min-width: 723px) {
        .page-section.opening .bottom {
            display: block;
        }
    }

    .page-section.opening .bottom img {
        position: absolute;
        width: 138%;
        min-width: 568px;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    /* Trust Signals ------------------------------------------------------------------------------------------- */
    .page-section.trust-signals {
        max-width: none;
        display: grid;
        gap: var(--space4);
        margin: 0;
    }

    @media (max-width: 1023px) {
        .page-section.trust-signals {
            padding: calc(var(--space6) - var(--space3)) 0;
        }
    }

    @media (max-width: 480px) {
        .page-section.trust-signals {
            padding: calc(var(--space6) - var(--space4)) 0;
        }
    }

    @media (max-width: 360px) {
        .page-section.trust-signals {
            padding: calc(var(--space6) - var(--space4_5)) 0;
        }
    }

    @media (min-width: 769px) {
        .page-section.trust-signals {
            grid-auto-flow: column;
            grid-auto-columns: 1fr;
            align-items: center;
        }
    }

    @media (min-width: 1280px) {
        .page-section.trust-signals {
            gap: var(--space5);
        }
    }

    @media (min-width: 769px) {
        .page-section.trust-signals .bottom {
            min-width: 438px;
        }
    }

    @media (min-width: 769px) and (max-width: 920px) {
        .page-section.trust-signals .bottom {
            --shrink: calc(calc(920px - 100vw) * 0.4);
            min-width: calc(438px - var(--shrink));
        }
    }

    .page-section.trust-signals .bottom p {
        margin-bottom: var(--space4);
    }

    @media (min-width: 769px) {
        .page-section.trust-signals .bottom p {
            text-align: center;
        }
    }

    .page-section.trust-signals .logo-cloud-artwork {
        position: relative;
    }

    .page-section.trust-signals .logo-cloud {
        z-index: 20;
        position: relative;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    }

    @media (min-width: 769px) {
        .page-section.trust-signals .logo-cloud {
            justify-content: center;
        }
    }

    .page-section.trust-signals .logo-cloud .image-wrapper {
        height: auto;
        width: auto;
        margin-bottom: var(--space3);
        margin-right: var(--space4_5);
    }

    .page-section.trust-signals .logo-cloud img {
        height: var(--space4_5);
        width: auto;
    }

    @media (max-width: 768px) {
        .page-section.trust-signals .logo-cloud .image-wrapper {
            height: var(--space4_5);
            margin-bottom: var(--space3);
            margin-right: var(--space4);
        }

        .page-section.trust-signals .logo-cloud img {
            height: var(--space4_5);
        }

        @media (max-width: 320px) {
            .page-section.trust-signals .logo-cloud .image-wrapper {
                height: calc(var(--space4_5) - 10px);
                margin-bottom: calc(var(--space3) - 6px);
                margin-right: calc(var(--space4) - 21px);
            }

            .page-section.trust-signals .logo-cloud img {
                height: calc(var(--space4_5) - 10px);
            }

            .page-section.trust-signals .logo-cloud .image-wrapper:nth-child(even) {
                margin-right: 0;
            }
        }

        @media (min-width: 321px) and (max-width: 460px) {
            .page-section.trust-signals .logo-cloud .image-wrapper {
                --shrink: calc(calc(460px - 100vw) * 0.07);
                height: calc(var(--space4_5) - var(--shrink));
                --shrinkV: calc(calc(460px - 100vw) * 0.04);
                margin-bottom: calc(var(--space3) - var(--shrinkV));
                --shrinkH: calc(calc(460px - 100vw) * 0.15);
                margin-right: calc(var(--space4) - var(--shrinkH));
            }

            .page-section.trust-signals .logo-cloud img {
                height: calc(var(--space4_5) - var(--shrink));
            }

            .page-section.trust-signals .logo-cloud .image-wrapper:nth-child(even) {
                margin-right: 0;
            }
        }
    }

    @media (min-width: 769px) and (max-width: 920px) {
        .page-section.trust-signals .logo-cloud .image-wrapper {
            --shrink: calc(calc(920px - 100vw) * 0.05);
            height: calc(var(--space4_5) - var(--shrink));
            --shrinkV: calc(calc(920px - 100vw) * 0.03);
            margin-bottom: calc(var(--space3) - var(--shrinkV));
            --shrinkH: calc(calc(920px - 100vw) * 0.03);
            margin-right: calc(var(--space4_5) - var(--shrinkH));
        }

        .page-section.trust-signals .logo-cloud img {
            height: calc(var(--space4_5) - var(--shrink));
        }
    }

    .vapor-globe {
        width: calc(var(--space6) + var(--space3));
        height: calc(var(--space6) + var(--space3));
        border-radius: calc(var(--space5) + var(--space2));
        background: var(--theme-vapor-globe-blue-1);
    }

    .page-section.trust-signals .vapor-globe {
        z-index: 10;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
    }

    /* What we do 1 ------------------------------------------------------------------------------------------- */
    .page-section.what-we-do-1 {
        display: grid;
        gap: var(--space4_5);
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
        align-items: center;
        max-width: none;
        padding: 0;
    }

    @media (max-width: 768px) {
        .page-section.what-we-do-1 {
            grid-auto-columns: 1.3fr 0.7fr;
        }
    }

    @media (max-width: 660px) {
        .page-section.what-we-do-1 {
            grid-auto-columns: 0.8fr 0;
        }
    }

    @media (max-width: 480px) {
        .page-section:not(:first-child).page-section.what-we-do-1 {
            margin-top: calc(var(--space6) - var(--space5));
        }
    }

    @media (max-width: 414px) {
        .page-section.what-we-do-1 {
            grid-auto-columns: 0.85fr 0;
        }
    }

    .page-section.what-we-do-1 .bottom {
        order: -1;
    }

    @media (min-width: 769px) and (max-width: 1056px) {
        .page-section.what-we-do-1 .bottom {
            margin-left: calc(calc(100vw - 1056px) * 0.279);
        }
    }

    @media (max-width: 930px) {
        .page-section.what-we-do-1 .bottom {
            transform: scale(0.9);
        }
    }

    @media (max-width: 830px) {
        .page-section.what-we-do-1 .bottom {
            transform: scale(0.85);
        }
    }

    @media (max-width: 768px) {
        .page-section.what-we-do-1 .bottom {
            order: initial;
            margin-left: calc(var(--space4_5) * -1);
        }
    }

    @media (max-width: 660px) {
        .page-section.what-we-do-1 .bottom {
            margin-left: calc(var(--space2) * -0.6);
            transform: scale(0.8);
        }
    }

    @media (max-width: 544px) {
        .page-section.what-we-do-1 .bottom {
            margin-left: 0;
            transform: scale(0.75);
        }
    }

    @media (max-width: 500px) {
        .page-section.what-we-do-1 .bottom {
            margin-left: 0;
            transform: scale(0.7);
        }
    }

    @media (max-width: 414px) {
        .page-section.what-we-do-1 .bottom {
            margin-left: calc(var(--space4) * -1);
            transform: scale(0.65);
        }
    }

    .page-section.what-we-do-1 .console-button-text {
        margin-top: var(--space3_5);
    }

    .page-section.what-we-do-1 .bottom {
        position: relative;
        padding-bottom: calc(var(--space4_5) - var(--space2));
    }

    .page-section.what-we-do-1 .neon-planes-wrapper {
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .page-section.what-we-do-1 .neon-planes-wrapper .neon-plane {
        bottom: 0;
        top: auto;
        --size: calc(var(--space7) + var(--space3));
    }

    .page-section.what-we-do-1 .neon-planes-wrapper .neon-planes div {
        transform-origin: 0 100%;
    }

    .page-section.what-we-do-1 .categories-wrapper {
        position: relative;
        transform: skew(-26.7deg);
        transform-origin: 0 100%;
        margin-left: calc(var(--space4_5) + var(--space2));
    }

    @media (max-width: 660px) {
        .page-section.what-we-do-1 .categories-wrapper {
            min-width: 176px;
            transform: skew(0deg);
        }
    }

    .page-section.what-we-do-1 .categories-wrapper .categories:not(:last-child) {
        margin-bottom: var(--space3_5);
    }

    .page-section.what-we-do-1 .categories-wrapper .categories {
        font-size: var(--t-size0);
        align-items: center;
    }

    .page-section.what-we-do-1 .categories-wrapper .categories .icon {
        width: calc(var(--space3_5));
        height: calc(var(--space3_5));
        margin-top: 0;
        margin-right: var(--space3);
    }

    .page-section.what-we-do-1 .console-button-text span.short {
        display: none;
    }

    @media (max-width: 660px) {
        .page-section.what-we-do-1 .console-button-text span.long {
            display: none;
        }

        .page-section.what-we-do-1 .console-button-text span.short {
            display: block;
        }
    }

    /* CTA ------------------------------------------------------------------------------------------- */
    .page-section.cta {
        max-width: none;
        padding: 0;
    }

    .page-wrapper.landing .page-section:not(:first-child).cta {
        margin-top: calc(var(--space6) + var(--space6) - var(--space4) + 3vw);
        margin-bottom: var(--space6);
    }

    @media (max-width: 1023px) {
        .page-wrapper.landing .page-section:not(:first-child).cta {
            margin-top: calc(var(--space6) + var(--space6) - var(--space4_5) + 3vw);
            margin-bottom: calc(var(--space6) - var(--space4));
        }
    }

    @media (max-width: 540px) {
        .page-wrapper.landing .page-section:not(:first-child).cta {
            margin-top: calc(var(--space5) + var(--space6) - var(--space4) + 3vw);
            margin-bottom: var(--space5);
        }
    }

    @media (max-width: 480px) {
        .page-wrapper.landing .page-section:not(:first-child).cta {
            margin-top: calc(var(--space5) + var(--space6) - var(--space5) + 3vw);
            margin-bottom: var(--space4);
        }
    }

    @media (max-width: 360px) {
        .page-wrapper.landing .page-section:not(:first-child).cta {
            margin-top: calc(var(--space4_5) + var(--space6) - var(--space5) + 3vw);
            margin-bottom: var(--space3);
        }
    }

    .page-section.cta .neon-planes-wrapper {
        position: absolute;
        width: 41.55%;
        top: 50%;
        left: 0;
        transform: translateY(-56%);
        z-index: 10;
    }

    @media (min-width: 769px) and (max-width: 1056px) {
        .page-section.cta .neon-planes-wrapper {
            width: calc(41.55% + (calc(1056px - 100vw) * 0.5));
        }
    }

    @media (max-width: 768px) {
        .page-section.cta .neon-planes-wrapper {
            width: calc(80% + (calc(768px - 100vw) * 0.3));
            margin-left: 50%;
            transform: translate(-40%, -50%);
        }
    }

    .page-section.cta .neon-planes-wrapper .neon-planes.all {
        position: relative;
        padding-bottom: 65%;
    }

    .page-section.cta .neon-planes-wrapper .neon-planes.all .neon-plane.triad-01 {
        margin-left: 20.73%;
    }

    .page-section.cta .neon-planes-wrapper .neon-planes.all .neon-plane.triad-02 {
        margin-top: 12.5%;
        margin-left: 0;
    }

    .page-section.cta .neon-planes-wrapper .neon-planes.all .neon-plane.triad-03 {
        margin-top: 20.5%;
        margin-left: 32.8%;
    }

    .page-section.cta .subscribe-cta {
        position: relative;
        background: none;
        padding-top: 0;
        padding-bottom: 0;
        z-index: 20;
    }

    @media (max-width: 768px) {
        .page-section.cta .subscribe-cta {
            padding: 0;
        }
    }

    .page-section.cta .title {
        margin: 0;
        margin-right: var(--space4);
        flex: 1 1 auto;
    }

    .page-section.cta p {
        display: none;
    }

    .subscribe-cta .console-form-subscribe {
        flex: 0 0 auto;
    }

    @media (max-width: 768px) {
        .subscribe-cta .console-form-subscribe {
            margin-top: var(--space4);
        }
    }

    @media (min-width: 769px) {
        .subscribe-cta {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            width: auto;
            padding: 0 var(--space4);
        }
    }

    @media (min-width: 1056px) {
        .subscribe-cta .console-form-subscribe {
            min-width: 45%;
        }
    }
`;
