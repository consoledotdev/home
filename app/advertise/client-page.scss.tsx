import css from "styled-jsx/css";
export default css.global`
    html {
        scroll-behavior: smooth;
    }

    body {
        transition: var(--a-layout-active);
    }

    body:before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        background: radial-gradient(ellipse at 0% 65%, rgba(82, 105, 255, 0.095) 0%, rgba(82, 105, 255, 0) 100%), radial-gradient(ellipse at 100% 65%, rgba(255, 51, 85, 0.15) 0%, rgba(255, 51, 85, 0) 100%);
        z-index: 0;
        opacity: 0;
        transition: var(--a-layout-active);
    }

    [data-theme] body.checkpoint-site,
    [data-theme] body.checkpoint-site .page-wrapper.advertise {
        background: var(--theme-content-bg-1);
        transition: var(--a-layout);
    }

    [data-theme="light"] body.checkpoint-site,
    [data-theme="light"] body.checkpoint-site .page-wrapper.advertise {
        background: var(--theme-content-bg-0);
    }

    [data-theme] body.checkpoint-site .hero .lines {
        opacity: 0;
    }

    .page-wrapper.advertise .page-section.site .neon-planes-wrapper {
        opacity: 0;
        transition: var(--a-layout);
        pointer-events: none;
    }

    .page-wrapper.advertise .page-section.site .neon-planes-wrapper .neon-plane {
        opacity: 0;
        transition: var(--a-layout);
    }

    [data-theme] body.checkpoint-neon-planes .page-section.site .neon-planes-wrapper {
        opacity: 1;
        transition: var(--a-layout-active);
        pointer-events: initial;
    }

    [data-theme] body.checkpoint-neon-planes .page-section.site .neon-planes-wrapper .neon-plane {
        opacity: 1;
    }

    [data-theme] body.checkpoint-neon-planes .page-section.site .neon-planes-wrapper .neon-plane.triad-01 {
        transition-delay: 0s;
    }

    [data-theme] body.checkpoint-neon-planes .page-section.site .neon-planes-wrapper .neon-plane.triad-02 {
        transition-delay: 0.2s;
    }

    [data-theme] body.checkpoint-neon-planes .page-section.site .neon-planes-wrapper .neon-plane.triad-03 {
        transition-delay: 0.4s;
    }

    [data-theme] body.checkpoint-podcast .page-section.site .neon-planes-wrapper .neon-plane {
        transition: var(--a-layout);
        opacity: 0;
    }

    [data-theme] body.checkpoint-podcast:before {
        transition: var(--a-layout);
        opacity: 1;
    }

    [data-theme] body.checkpoint-podcast.checkpoint-work-with-us:before {
        opacity: 0;
    }

    .page-wrapper.advertise .page-section.work-with-us .neon-planes-wrapper {
        opacity: 0;
        transition: var(--a-layout);
        pointer-events: none;
    }

    .page-wrapper.advertise .page-section.work-with-us .neon-planes-wrapper .neon-plane {
        opacity: 0;
        transition: var(--a-layout);
    }

    [data-theme] body.checkpoint-work-with-us .page-section.work-with-us .neon-planes-wrapper {
        opacity: 1;
        transition: var(--a-layout-active);
        pointer-events: initial;
    }

    [data-theme] body.checkpoint-work-with-us .page-section.work-with-us .neon-planes-wrapper .neon-plane {
        opacity: 1;
    }

    [data-theme] body.checkpoint-work-with-us .page-section.work-with-us .neon-planes-wrapper .neon-plane.triad-01 {
        transition-delay: 0s;
    }

    [data-theme] body.checkpoint-work-with-us .page-section.work-with-us .neon-planes-wrapper .neon-plane.triad-03 {
        transition-delay: 0.2s;
    }

    [data-theme] body.checkpoint-campaigns .page-section.work-with-us .neon-planes-wrapper .neon-plane {
        transition: var(--a-layout);
        opacity: 0;
    }

    [data-theme] body.checkpoint-campaigns,
    [data-theme] body.checkpoint-campaigns .page-wrapper.advertise,
    [data-theme="light"] body.checkpoint-campaigns,
    [data-theme="light"] body.checkpoint-campaigns .page-wrapper.advertise {
        background: var(--theme-content-bg-2);
        transition: var(--a-layout);
    }

    /* [data-theme] body.checkpoint-contact,
  [data-theme] body.checkpoint-campaigns .page-wrapper.advertise {
    background: var(--theme-content-bg-1);
    transition: var(--a-layout);
} */

    .main p.intro {
        font-size: var(--t-size1);
        line-height: var(--t-lH4);
    }

    .framed-section-item p:not(.small) {
        font-size: var(--t-size0);
    }

    @media (max-width: 768px) {
        .main {
            margin-top: var(--space6);
            margin-bottom: calc(var(--space6) - var(--space4));
        }
    }

    @media (min-width: 769px) {
        .main {
            margin: max(calc(var(--space6) - var(--space3)), 10vh) 0 calc(var(--space6) - var(--space2));
        }
    }

    @media (min-width: 1280px) {
        .main .framed-section-item p {
            font-size: var(--t-size0);
        }

        .main .framed-section-item p:not(.small) {
            font-size: var(--t-size1);
        }

        .main p,
        .main .work-with-us .framed-section > p,
        .main .work-with-us .framed-section-item p,
        .main .quote,
        .main .page-section.campaigns .framed-section .quote,
        .main .page-section.campaigns .framed-section-item p {
            font-size: var(--t-size1);
        }

        .main .page-section.social .quote {
            font-size: var(--t-size2);
            margin-top: 0.4em;
        }

        .main .page-section.social .quote .icon {
            margin-top: 0.3em;
        }

        .main .work-with-us .framed-section-item p.small {
            font-size: var(--t-size0);
        }

        .main p.intro {
            font-size: var(--t-size2);
        }

        .main p.description {
            font-size: var(--t-size3);
        }

        .main p.small {
            font-size: var(--t-size0);
        }

        .main p.x-small {
            font-size: var(--t-size-1);
        }

        .main-content ul li {
            font-size: var(--t-size0);
        }

        .main .title-1 {
            font-size: var(--t-size9);
        }

        .main .title-2 {
            font-size: var(--t-size6);
        }

        .main .title-3 {
            font-size: var(--t-size3);
        }

        .main .title-4 {
            font-size: var(--t-size1);
        }

        .main .title-5 {
            font-size: var(--t-size0);
        }

        .main .title-6 {
            font-size: var(--t-size1);
        }

        .main .console-button,
        .main [class^="console-button"],
        .main [class*=" console-button"] {
            font-size: var(--t-size1);
        }

        .main .console-button.console-button-medium,
        .main [class^="console-button"].console-button-medium,
        .main [class*=" console-button"].console-button-medium {
            font-size: var(--t-size0);
        }

        .main .console-button.console-button-small,
        .main [class^="console-button"].console-button-small,
        .main [class*=" console-button"].console-button-small {
            font-size: var(--t-size-1);
        }

        .main input.console-input-text,
        .main select.console-select {
            font-size: var(--t-size1);
        }

        .main input.console-input-text.console-input-medium,
        .main select.console-select.console-input-medium {
            font-size: var(--t-size0);
        }

        .main input.console-input-text.console-input-small,
        .main select.console-select.console-input-small {
            font-size: var(--t-size-1);
        }
    }

    .page-section {
        z-index: 1;
    }

    /* Opening */
    .page-section.opening .top {
        margin: 0;
        padding: 0;
    }

    .page-section.opening .top {
        z-index: 1;
    }

    .page-section.opening .title-1 {
        margin-top: var(--space3);
    }

    .page-section.opening .title-4 {
        color: var(--theme-text-accent-yellow-light);
    }

    .page-section.opening .title-4 span {
        color: var(--theme-text-accent-yellow-strong);
    }

    .page-section.opening p.description {
        margin-top: var(--space3);
        margin-bottom: var(--space3);
    }

    .page-section.opening p:not(.description) {
        margin-top: var(--space4);
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        .page-section.opening p.description {
            --shrink: calc(calc(1024px - 100vw) * 0.3);
            width: calc(100% - var(--shrink));
        }

        .page-section.opening p:not(.description) {
            --shrink: calc(calc(1024px - 100vw) * 0.4);
            width: calc(100% - var(--shrink));
        }
    }

    .page-section.opening p b {
        font-weight: 500;
    }

    .page-section.opening a {
        margin-top: var(--space3);
    }

    @media (min-width: 769px) {
        .page-section.opening {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
        }

        .page-section.opening .top {
            width: 46%;
            min-width: calc(var(--space7) + var(--space6) + var(--space4));
        }
    }

    .page-section.opening .bottom {
        z-index: 0;
        height: 0;
        margin-top: var(--space4);
        margin-right: -5vw;
    }

    @media (max-width: 768px) {
        .page-section.opening .bottom {
            margin-top: var(--space5);
            height: 220px;
        }
    }

    @media (max-width: 768px) {
        @media (min-width: 481px) {
            .page-section.opening .bottom {
                --margin: calc(calc(768px - 100vw) * 0.38);
                height: calc(220px - var(--margin));
            }
        }
        @media (max-width: 480px) {
            .page-section.opening .bottom {
                margin-top: var(--space4_5);
                height: calc(220px - 109px);
            }
        }
        @media (min-width: 320px) and (max-width: 480px) {
            .page-section.opening .bottom {
                --margin: calc(calc(480px - 100vw) * 0.06);
                height: calc(220px - 109px - var(--margin));
                --move: calc(calc(480px - 100vw) * 0.3);
                margin-right: calc(-4vw + var(--move));
            }
        }
        @media (max-width: 319px) {
            .page-section.opening .bottom {
                height: calc(220px - 109px - 10px);
                margin-right: calc(-4vw + 48px);
            }
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        .page-section.opening .bottom {
            --move: calc(calc(1024px - 100vw) * 0.25);
            margin-right: calc(-5vw - var(--move));
        }
    }

    @media (min-width: 1025px) and (max-width: 1372px) {
        .page-section.opening .bottom {
            --move: calc(calc(100vw - 1024px) * 0.15);
            margin-right: calc(-5vw + var(--move));
        }
    }

    @media (min-width: 1372px) {
        .page-section.opening .bottom {
            --move: calc(calc(100vw - 1024px) * 0.15);
            margin-right: calc(-5vw + 52px);
        }
    }

    .page-section.opening .artwork-wrapper {
        transform-origin: 0 0;
        transform: scale(1.28);
    }

    @media (max-width: 768px) {
        .page-section.opening .artwork-wrapper {
            transform: scale(1.4) translateX(-50%);
            margin-left: 55%;
        }
    }

    .advertise-artwork {
        --plane-size: var(--space6);
        display: flex;
        flex-flow: row nowrap;
        transform-origin: 0 0;
        transform: scaleY(0.8945) skew(-24.4deg);
    }

    @media (max-width: 768px) {
        @media (min-width: 481px) {
            .advertise-artwork {
                --shrink: calc(calc(768px - 100vw) * 0.14);
                --plane-size: calc(var(--space6) - var(--shrink));
            }
        }
        @media (max-width: 480px) {
            .advertise-artwork {
                --plane-size: calc(var(--space6) - 40px);
            }
        }
        @media (min-width: 320px) and (max-width: 480px) {
            .advertise-artwork {
                --shrink: calc(calc(480px - 100vw) * 0.04);
                --plane-size: calc(var(--space6) - 40px - var(--shrink));
            }
        }
        @media (max-width: 319px) {
            .advertise-artwork {
                --plane-size: calc(var(--space6) - 40px - 6px);
            }
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        .advertise-artwork {
            --shrink: calc(calc(1024px - 100vw) * 0.15);
            --plane-size: calc(var(--space6) - var(--shrink));
        }
    }

    @media (min-width: 1025px) and (max-width: 1372px) {
        .advertise-artwork {
            --expand: calc(calc(100vw - 1024px) * 0.06);
            --plane-size: calc(var(--space6) + var(--expand));
        }
    }

    @media (min-width: 1372px) {
        .advertise-artwork {
            --plane-size: calc(var(--space6) + 20px);
        }
    }

    .advertise-artwork > * {
        flex: 0 0 auto;
    }

    .advertise-artwork .col:not(:first-child) {
        margin-left: calc(var(--space4) + var(--space1));
    }

    @media (max-width: 768px) {
        @media (min-width: 481px) {
            .advertise-artwork .col:not(:first-child) {
                --margin: calc(calc(768px - 100vw) * 0.04);
                margin-left: calc(var(--space4) + var(--space1) - var(--margin));
            }
        }
        @media (max-width: 480px) {
            .advertise-artwork .col:not(:first-child) {
                margin-left: calc(var(--space4) + var(--space1) - 12px);
            }
        }
        @media (min-width: 320px) and (max-width: 480px) {
            .advertise-artwork .col:not(:first-child) {
                --margin: calc(calc(480px - 100vw) * 0.01);
                margin-left: calc(var(--space4) + var(--space1) - 12px - var(--margin));
            }
        }
        @media (max-width: 319px) {
            .advertise-artwork .col:not(:first-child) {
                margin-left: calc(var(--space4) + var(--space1) - 12px - 2px);
            }
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        .advertise-artwork .col:not(:first-child) {
            --margin: calc(calc(1024px - 100vw) * 0.04);
            margin-left: calc(var(--space4) + var(--space1) - var(--margin));
        }
    }

    @media (min-width: 1025px) and (max-width: 1372px) {
        .advertise-artwork .col:not(:first-child) {
            --margin: calc(calc(100vw - 1024px) * 0.04);
            margin-left: calc(var(--space4) + var(--space1) + var(--margin));
        }
    }

    @media (min-width: 1372px) {
        .advertise-artwork .col:not(:first-child) {
            margin-left: calc(var(--space4) + var(--space1) + 14px);
        }
    }

    .advertise-artwork .plane {
        position: relative;
        width: var(--plane-size);
        height: var(--plane-size);
        border: 1px solid;
        z-index: 1;
    }

    .advertise-artwork .plane:before {
        position: absolute;
        content: "";
        left: 30%;
        width: 40%;
        height: 40%;
        z-index: 1;
    }

    .advertise-artwork .plane:after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--theme-artwork-plane-bg);
        z-index: 1;
    }

    .advertise-artwork .triad-01 .plane {
        border-color: var(--theme-artwork-triad-01-plane-border);
    }

    .advertise-artwork .triad-01 .plane:before {
        --glow: 38px;
        top: calc(30% + 14px);
        background: var(--theme-artwork-triad-01-glow);
        box-shadow: 0 0 var(--glow) var(--glow) var(--theme-artwork-triad-01-glow);
    }

    .advertise-artwork .triad-02 .plane {
        border-color: var(--theme-artwork-triad-02-plane-border);
        margin-top: calc(var(--plane-size) * 0.5);
        width: calc(var(--plane-size) * 0.67);
        height: calc(var(--plane-size) * 0.67);
    }

    .advertise-artwork .triad-02 .plane:before {
        --glow: 26px;
        top: calc(30% + 9px);
        background: var(--theme-artwork-triad-02-glow);
        box-shadow: 0 0 var(--glow) var(--glow) var(--theme-artwork-triad-02-glow);
    }

    .advertise-artwork .triad-03 .plane {
        border-color: var(--theme-artwork-triad-03-plane-border);
        margin-top: calc(var(--plane-size) * 1.4);
        width: calc(var(--plane-size) * 0.5);
        height: calc(var(--plane-size) * 0.5);
    }

    .advertise-artwork .triad-03 .plane:before {
        --glow: 20px;
        top: calc(30% + 7px);
        background: var(--theme-artwork-triad-03-glow);
        box-shadow: 0 0 var(--glow) var(--glow) var(--theme-artwork-triad-03-glow);
    }

    @media (max-width: 768px) {
        @media (min-width: 481px) {
            .advertise-artwork .triad-01 .plane:before {
                --shrink: calc(calc(768px - 100vw) * 0.04);
                --glow: calc(38px - var(--shrink));
            }

            .advertise-artwork .triad-02 .plane:before {
                --shrink: calc(calc(768px - 100vw) * 0.04);
                --glow: calc(26px - var(--shrink));
            }

            .advertise-artwork .triad-03 .plane:before {
                --shrink: calc(calc(768px - 100vw) * 0.04);
                --glow: calc(20px - var(--shrink));
            }
        }
        @media (max-width: 480px) {
            .advertise-artwork .triad-01 .plane:before {
                --glow: calc(38px - 12px);
            }

            .advertise-artwork .triad-02 .plane:before {
                --glow: calc(26px - 12px);
            }

            .advertise-artwork .triad-03 .plane:before {
                --glow: calc(20px - 12px);
            }
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        .advertise-artwork .triad-01 .plane:before {
            --shrink: calc(calc(1024px - 100vw) * 0.05);
            --glow: calc(38px - var(--shrink));
        }

        .advertise-artwork .triad-02 .plane:before {
            --shrink: calc(calc(1024px - 100vw) * 0.05);
            --glow: calc(26px - var(--shrink));
        }

        .advertise-artwork .triad-03 .plane:before {
            --shrink: calc(calc(1024px - 100vw) * 0.05);
            --glow: calc(20px - var(--shrink));
        }
    }

    @media (min-width: 1025px) and (max-width: 1372px) {
        .advertise-artwork .triad-01 .plane:before {
            --expand: calc(calc(100vw - 1024px) * 0.04);
            --glow: calc(38px + var(--expand));
        }

        .advertise-artwork .triad-02 .plane:before {
            --expand: calc(calc(100vw - 1024px) * 0.04);
            --glow: calc(26px + var(--expand));
        }

        .advertise-artwork .triad-03 .plane:before {
            --expand: calc(calc(100vw - 1024px) * 0.04);
            --glow: calc(20px + var(--expand));
        }
    }

    @media (min-width: 1372px) {
        .advertise-artwork .triad-01 .plane:before {
            --glow: calc(38px + 14px);
        }

        .advertise-artwork .triad-02 .plane:before {
            --glow: calc(26px + 14px);
        }

        .advertise-artwork .triad-03 .plane:before {
            --glow: calc(20px + 14px);
        }
    }

    .advertise-artwork .triad-01 .plane .icon {
        position: relative;
        z-index: 2;
        margin-top: calc(var(--plane-size) * 0.2);
        margin-left: calc(var(--plane-size) * 0.15);
        width: calc(var(--plane-size) * 0.5);
        height: calc(var(--plane-size) * 0.5);
    }

    .advertise-artwork .trail {
        position: relative;
        width: 100%;
        height: 500px;
        z-index: 0;
    }

    .advertise-artwork .triad-01 .trail {
        background: var(--theme-artwork-triad-01-trail-bg);
    }

    .advertise-artwork .triad-02 .trail {
        background: var(--theme-artwork-triad-02-trail-bg);
    }

    .advertise-artwork .triad-03 .trail {
        background: var(--theme-artwork-triad-03-trail-bg);
    }

    /* Newsletter */
    .page-section.newsletter {
        margin: 0;
        margin-top: var(--space6);
    }

    .page-section.newsletter .intro b {
        color: var(--theme-text-1);
        font-weight: 500;
    }

    .page-section.newsletter .title span span {
        font-weight: 500;
        font-style: italic;
        text-transform: lowercase;
    }

    .page-section.newsletter .title.rich-title {
        align-items: flex-start;
    }

    .page-section.newsletter .title.rich-title .icon {
        margin-top: 0.26em;
        margin-right: var(--space2);
    }

    .page-section.newsletter img {
        display: block;
    }

    .page-section.newsletter a {
        margin-top: var(--space3);
    }

    .page-section.newsletter .bottom img {
        height: auto;
    }

    @media (max-width: 768px) {
        .page-section.newsletter .bottom {
            margin-top: calc(var(--space4) + var(--space3_5));
        }

        .page-section.newsletter .bottom img {
            width: 100%;
        }
    }

    @media (min-width: 769px) {
        .page-section.newsletter {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
        }

        .page-section.newsletter .top {
            min-width: calc(var(--space7) + var(--space4));
            width: 36%;
            flex: 0 0 auto;
            margin-right: calc(var(--space5) + var(--space3));
        }

        .page-section.newsletter .bottom img {
            width: 762px;
        }
    }

    /* Site */
    .page-section.site {
        z-index: 0;
        margin: 0;
        padding: 0;
        margin-top: var(--space6);
    }

    .page-section.site .intro {
        color: var(--theme-text-1);
    }

    .page-section.site .neon-planes-wrapper {
        position: fixed;
        z-index: 0;
        width: 87.5%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
    }

    @media (max-width: 768px) {
        @media (min-width: 481px) {
            .page-section.site .neon-planes-wrapper {
                width: 84%;
            }
        }
    }

    @media (min-width: 1371px) {
        .page-section.site .neon-planes-wrapper {
            max-width: 1200px;
        }
    }

    .page-section.site .neon-planes {
        position: relative;
        width: calc(100% * 1.78);
        min-width: 1480px;
        min-height: 1154px;
        padding-bottom: calc(78% * 1.78);
        left: 50%;
        transform: translateX(-50%);
    }

    .page-section.site > *:not(.neon-planes-wrapper) {
        position: relative;
        z-index: 1;
    }

    .advertise-site-item .rich-title .icon {
        width: var(--space4_5);
        height: var(--space4_5);
    }

    .advertise-site-item a {
        margin-top: var(--space3);
    }

    .advertise-site-item img {
        display: block;
        height: auto;
    }

    @media (max-width: 768px) {
        .advertise-site-item:not(:first-child) {
            margin-top: calc(var(--space5) + var(--space3_5));
        }

        .advertise-site-item .bottom {
            margin-top: var(--space4_5);
        }

        .advertise-site-item img {
            width: 100%;
        }
    }

    @media (min-width: 769px) {
        .advertise-site-item {
            display: flex;
            flex-flow: row nowrap;
        }

        .advertise-site-item:not(:first-child) {
            margin-top: var(--space6);
        }

        .advertise-site-item .top {
            width: 36%;
            flex: 0 0 auto;
            margin-right: calc(var(--space5) + var(--space3));
        }

        @media (max-width: 880px) {
            .advertise-site-item .top {
                width: 40%;
                margin-right: calc(var(--space4_5) + var(--space3));
            }
        }

        .advertise-site-item img {
            width: 145%;
            max-width: 720px;
        }

        .advertise-site-item .bottom {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
        }
    }

    /* Podcast */
    .page-section.podcast {
        margin: 0;
        padding: 0;
        margin-top: calc(var(--space6) + var(--space5) + var(--space4_5));
        margin-bottom: calc(var(--space6) + var(--space5));
    }

    @media (max-width: 768px) {
        .page-section.podcast {
            margin-top: calc(var(--space6) + var(--space4));
            margin-bottom: calc(var(--space6) + var(--space3_5));
        }
    }

    .page-section.podcast .top {
        margin-top: calc(calc(var(--space3) + var(--space1)) * -1);
    }

    .page-section.podcast .icon-podcast {
        width: var(--space6);
        height: var(--space6);
    }

    .page-section.podcast .bottom {
        position: relative;
        border-radius: var(--corners-mid);
        height: 460px;
        overflow: hidden;
    }

    .page-section.podcast .bottom iframe {
        width: calc(100% + 4px);
        margin-left: -2px;
        margin-top: -2px;
    }

    @media (max-width: 768px) {
        .page-section.podcast .bottom {
            margin-top: calc(var(--space4) + var(--space3_5));
        }
    }

    @media (min-width: 769px) {
        .page-section.podcast {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
        }

        .page-section.podcast .top {
            min-width: calc(var(--space7) + var(--space4));
            width: 36%;
            flex: 0 0 auto;
            margin-right: calc(var(--space5) + var(--space3));
        }

        @media (max-width: 880px) {
            .page-section.podcast .top {
                width: 40%;
                margin-right: calc(var(--space4_5) + var(--space3));
            }
        }

        .page-section.podcast .bottom {
            flex: 1 1 auto;
        }
    }

    .page-section.podcast .podcast-links-wrapper {
        display: flex;
        flex-flow: row wrap;
        margin-top: var(--space4);
        align-items: center;
    }

    .page-section.podcast .podcast-links-wrapper .title {
        margin: 0;
        margin-right: var(--space3_5);
        font-size: 1.1em;
        color: var(--theme-text-1);
        font-weight: 500;
        letter-spacing: 0.2em;
    }

    /* Audience */
    .page-section.audience {
        margin: 0;
        padding: 0;
        padding: var(--space6) 0 calc(var(--space6) + var(--space3_5));
    }

    .advertise-audience-facts {
        margin: calc(var(--space5) + var(--space3)) 0;
    }

    .audience-fact-number {
        font-size: var(--t-size10);
        line-height: var(--t-lH1);
        flex: 0 0 auto;
        margin-right: var(--space3);
    }

    .advertise-audience-fact-head p {
        flex: 1 1 auto;
        color: var(--theme-text-1);
    }

    .advertise-audience-fact.converting .advertise-audience-fact-head {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .advertise-audience-fact.converting .advertise-audience-fact-body span {
        color: var(--theme-text-1);
    }

    .advertise-audience-fact.converting .future-heads {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        padding-top: var(--space1);
    }

    .advertise-audience-fact.converting .future-heads .future-head {
        position: relative;
        width: var(--space4);
        height: var(--space4);
        margin-right: var(--space1);
    }

    .advertise-audience-fact.converting .future-heads .future-head .icon {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        stroke: var(--c-grey-06-blacks-neutral);
    }

    .advertise-audience-fact.converting .future-heads .future-head .future-head-fill {
        position: absolute;
        top: 0;
        left: 0;
        width: 128px;
        height: 128px;
        clip-path: path(
            "M59.7462 112.842L59.7307 112.868L59.7162 112.893C56.7932 118.096 55.7718 120.689 55.1365 122.307C54.8168 123.121 54.65 123.534 54.422 123.91C54.2292 124.228 53.964 124.562 53.4349 125.07C51.1061 126.222 47.9049 126.553 44.2112 126.097C40.4486 125.633 36.3264 124.37 32.4091 122.528C28.4923 120.687 24.8354 118.293 21.9839 115.61C19.194 112.985 17.2621 110.167 16.5144 107.398C16.6588 105.853 17.3662 104.172 18.3835 102.094C18.5639 101.726 18.7533 101.347 18.9481 100.956C19.8615 99.1264 20.8923 97.0614 21.6608 94.804C23.536 89.2963 24.5329 85.6696 24.6898 82.0261C24.8467 78.3841 24.1591 74.828 22.8943 69.4898C21.6079 64.0606 20.4313 60.5496 19.4844 57.7239C19.097 56.5678 18.748 55.5264 18.4457 54.5153C17.4116 51.0567 16.7895 47.5969 16.795 40.1764V40.1753C16.795 32.8117 21.1292 22.1889 29.3351 14.069C37.479 6.01034 49.3215 0.530343 64.2997 3.17137C86.3877 7.06608 98.5326 17.7501 103.837 30.7398C103.946 31.0063 104.052 31.2658 104.157 31.52C104.961 33.475 105.636 35.1164 106.131 37.1899C106.687 39.5163 107.024 42.4326 106.951 46.8859C106.906 49.6017 106.675 51.2247 106.21 53.3468C106.035 54.1489 105.769 54.679 105.405 55.4044C105.365 55.4834 105.324 55.5648 105.282 55.649C104.843 56.5304 104.368 57.5742 104.078 59.2171C103.793 60.8335 104.288 62.4705 104.873 63.8909C105.174 64.6223 105.528 65.3597 105.876 66.0701C105.936 66.1937 105.996 66.3163 106.056 66.4381C106.346 67.0296 106.626 67.6025 106.887 68.1784C107.011 68.4521 107.136 68.729 107.263 69.0085C107.909 70.4375 108.587 71.9365 109.286 73.4373C109.692 74.3942 110.078 75.2159 110.418 75.9348L110.459 76.0228C110.789 76.7191 111.061 77.2952 111.283 77.8366C111.729 78.9234 111.93 79.7682 111.858 80.8039C111.859 80.8015 111.858 80.802 111.857 80.8053C111.851 80.8286 111.808 80.992 111.566 81.2798C111.309 81.5864 110.91 81.9325 110.386 82.2587C109.329 82.9175 107.961 83.3757 106.675 83.3633C105.612 83.353 104.783 83.8036 104.222 84.3466C103.693 84.8586 103.348 85.5003 103.22 86.0631C102.995 87.0474 103.138 87.9158 103.242 88.5487C103.251 88.6002 103.259 88.6501 103.267 88.6983C103.373 89.3595 103.449 89.949 103.307 90.751C103.258 91.0341 103.086 91.2612 102.48 91.6703C102.425 91.7069 102.359 91.7501 102.286 91.7981C102.043 91.9573 101.718 92.1702 101.466 92.3749C101.112 92.662 100.621 93.1411 100.428 93.8813C100.185 94.8148 100.332 95.5169 100.423 95.9548L100.431 95.9922C100.507 96.3576 100.511 96.4331 100.456 96.6071C100.223 97.3413 99.8407 97.528 98.7284 98.0709C98.6771 98.0959 98.6244 98.1216 98.57 98.1482C97.9929 98.4305 97.2511 98.8188 96.5871 99.4835C95.9013 100.17 95.3716 101.073 95.0539 102.294C94.961 102.651 94.8637 103.082 94.7562 103.559C94.7274 103.687 94.6978 103.818 94.6674 103.952C94.5199 104.601 94.3419 105.363 94.1056 106.257C93.2165 109.623 90.0027 111.27 87.5043 111.023C84.2437 110.7 81.2231 110.28 78.3839 109.885C77.4932 109.761 76.6203 109.639 75.7635 109.524C72.2074 109.046 68.9133 108.674 65.9224 108.736C64.8135 108.759 63.6978 109.029 62.6169 109.721C61.5556 110.4 60.614 111.431 59.7462 112.842Z"
        );
        background: var(--c-blue-06-main);
        transform-origin: top left;
        transform: scale(0.25);
    }

    .advertise-audience-fact.converting .future-heads .future-head:last-child .future-head-fill {
        background: transparent;
        background: linear-gradient(118deg, var(--c-blue-06-main) 28%, rgba(82, 105, 255, 0) 28%);
    }

    .advertise-audience-fact.qualified .advertise-audience-fact-head div {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .advertise-audience-fact.qualified .advertise-audience-fact-body span {
        color: var(--theme-text-1);
    }

    .advertise-audience-fact.engaged .advertise-audience-fact-head {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .advertise-audience-fact.engaged .advertise-audience-fact-head .icon {
        width: calc(var(--space4) + var(--space2));
        height: calc(var(--space4) + var(--space2));
        margin-right: var(--space3);
    }

    .advertise-audience-fact.engaged .advertise-audience-fact-body {
        display: flex;
        flex-flow: row nowrap;
    }

    .advertise-audience-fact.engaged .advertise-audience-fact-body span {
        margin-right: var(--space3);
        display: flex;
        flex-flow: row nowrap;
        padding-top: 0.1em;
    }

    .advertise-audience-fact.engaged .advertise-audience-fact-body span .icon {
        width: calc(var(--space3) + var(--space1));
        height: calc(var(--space3) + var(--space1));
        fill: var(--theme-signaling-positive);
    }

    @media (max-width: 1024px) {
        .advertise-audience-fact:not(:first-child) {
            margin-top: var(--space4_5);
        }
    }

    @media (max-width: 768px) {
        .advertise-audience-fact-body {
            margin-top: var(--space3);
        }

        .advertise-audience-fact.qualified .console-bar-chart {
            margin-top: var(--space3);
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        .advertise-audience-fact {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0 var(--space5);
            align-items: center;
        }

        .advertise-audience-fact.qualified .console-bar-chart {
            margin-top: var(--space3);
        }
    }

    @media (min-width: 1025px) {
        .advertise-audience-facts {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0 var(--space4_5);
        }

        .advertise-audience-fact-body {
            margin-top: var(--space3);
        }

        .advertise-audience-fact.qualified .console-bar-chart {
            margin-top: var(--space3_5);
        }
    }

    /* Work with us */
    .page-section.work-with-us {
        margin: 0;
        padding: 0;
        margin: var(--space6) 0;
        z-index: 0;
    }

    .page-section.work-with-us .title-1 {
        color: var(--theme-text-accent-yellow-strong);
    }

    .page-section.work-with-us .title-1 br {
        display: none;
    }

    @media (max-width: 450px) {
        .page-section.work-with-us .title-1 br {
            display: initial;
        }
    }

    .page-section.work-with-us > * {
        position: relative;
        z-index: 1;
    }

    /* neon planes*/
    .work-with-us {
        --item-max-width: calc(var(--space6_5) + 700px);
        --shift: calc((87.5vw - var(--item-max-width)) / 2);
    }
    @media (min-width: 1371px) {
        .work-with-us {
            --shift: calc((1200px - var(--item-max-width)) / 2);
        }
    }
    @media (max-width: 1020px) {
        .work-with-us {
            --shift: 0px;
        }
    }

    .page-section.work-with-us > .neon-planes-wrapper {
        position: fixed;
        z-index: 0;
        width: 100%;
        max-width: 860px;
        min-width: 55vh;
        left: 50%;
        top: 50%;
        transform: translate(calc(-50% - var(--shift)), -50%);
        opacity: 0;
    }

    @media (max-width: 1279px) {
        .work-with-us .neon-planes-wrapper {
            max-width: 760px;
        }
    }

    .work-with-us .neon-planes {
        position: relative;
        width: calc(100% * 1.88);
        padding-bottom: calc(64% * 1.88);
        left: 50%;
        transform: translateX(-50%);
    }

    .work-with-us .neon-planes .neon-plane.triad-03 {
        margin-top: 14%;
    }

    .work-with-us-packages > * {
        position: relative;
        z-index: 1;
        max-width: var(--item-max-width);
    }

    .work-with-us-packages > *:not(:first-child) {
        margin-top: var(--space4_5);
    }

    .work-with-us-packages {
        position: relative;
        margin-top: var(--space5);
    }

    .work-with-us-packages .top {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
    }

    .work-with-us-packages .top + .top {
        margin-top: var(--space4);
    }

    .work-with-us-packages .top .title .illustration {
        width: var(--space5);
        height: var(--space5);
        flex: 0 0 auto;
    }

    .work-with-us-packages .top .title {
        margin-bottom: var(--space3);
    }

    @media (min-width: 640px) {
        .work-with-us-packages .top .left {
            margin-right: var(--space4_5);
        }

        .work-with-us-packages .top .title .illustration {
            display: none;
        }
    }

    @media (max-width: 639px) {
        .work-with-us-packages .top > .illustration {
            display: none;
        }

        .work-with-us-packages .top .title .illustration {
            margin-left: var(--space3_5);
        }

        .work-with-us-packages .top .title {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
        }
    }

    .work-with-us-packages .top > .illustration {
        width: var(--space5_5);
        height: var(--space5_5);
        flex: 0 0 auto;
    }

    .work-with-us-packages .top .illustration .background-stroke {
        stroke: var(--c-blue-06-main);
        stroke-opacity: 0.5;
    }

    .work-with-us-packages .top .illustration .background-fill {
        fill: var(--c-blue-06-main);
        fill-opacity: 0.5;
    }

    .work-with-us-packages .top + .console-button {
        margin-top: var(--space4);
    }

    .work-with-us-packages .framed-section-item .title {
        margin-bottom: var(--space1);
    }

    .work-with-us-packages .framed-section-item .title .icon {
        width: var(--space3_5);
        height: var(--space3_5);
        margin-right: var(--space2);
    }

    @media (min-width: 769px) {
        .work-with-us-packages .benefits {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0 var(--space4_5);
            align-items: flex-start;
        }

        @media (min-width: 901px) {
            .work-with-us-packages .benefits {
                gap: 0 var(--space5);
            }
        }
    }

    @media (max-width: 768px) {
        .work-with-us-packages .benefits div:not(:first-child) {
            margin-top: var(--space3_5);
        }
    }

    .work-with-us-packages .framed-section-item > p {
        margin-top: var(--space4);
        margin-bottom: var(--space4);
    }

    .work-with-us-packages .framed-section-item > p:first-child {
        margin-top: 0;
    }

    .work-with-us-packages .framed-section-item .title-5,
    .work-with-us-packages .framed-section-item p.small {
        margin-left: var(--space4);
    }

    .work-with-us-packages .framed-section-item p.small:not(:last-child) {
        margin-bottom: var(--space3_5);
    }

    /* Campaigns */
    .page-section.campaigns {
        margin: 0;
        padding: 0;
    }

    .page-section.campaigns .framed-section {
        margin-top: var(--space4_5);
        padding: 0;
    }

    .page-section.campaigns .top,
    .page-section.campaigns .framed-section-item {
        padding-top: var(--space4);
        padding-bottom: var(--space4);
    }

    .page-section.campaigns .framed-section > .framed-section-item {
        margin-top: 0;
    }

    @media (min-width: 769px) {
        .page-section.campaigns .framed-section {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0 0;
            align-items: stretch;
        }

        .page-section.campaigns .framed-section-item {
            padding-top: var(--space4_5);
            border: none;
            border-left: var(--theme-framed-section-default-item-border);
        }
    }

    .page-section.campaigns .framed-section .top .heading {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        margin-bottom: var(--space4);
    }

    .page-section.campaigns .framed-section .top .heading .console-button {
        flex: 0 0 auto;
    }

    .page-section.campaigns .framed-section .top .title {
        flex: 1 1 auto;
        margin-bottom: 0;
        margin-right: var(--space3);
    }

    .page-section.campaigns .framed-section .case-study-thumbnail {
        width: var(--space4_5);
        margin-right: var(--space3_5);
    }

    .page-section.campaigns .framed-section .case-study-thumbnail .image-wrapper img {
        width: 100%;
        height: auto;
    }

    .page-section.campaigns .framed-section p.intro {
        color: var(--theme-text-1);
    }

    .page-section.campaigns .framed-section .quote {
        font-size: var(--t-size0);
    }

    .page-section.campaigns .framed-section-item .title {
        margin-top: 0;
        margin-bottom: var(--space1);
    }

    .page-section.campaigns .framed-section-item > .title {
        margin-bottom: var(--space4);
        color: var(--theme-text-accent-yellow-strong);
    }

    .page-section.campaigns .framed-section-item .title .icon {
        width: var(--space3_5);
        height: var(--space3_5);
        margin-right: var(--space2);
    }

    .page-section.campaigns .framed-section-item .title .icon-plus {
        width: var(--space3);
        height: var(--space3);
        margin-left: var(--space3);
        margin-right: 0;
    }

    .page-section.campaigns .framed-section-item p {
        margin-left: var(--space4);
        font-size: var(--t-size0);
    }

    .page-section.campaigns .framed-section-item p:not(:last-child) {
        margin-bottom: var(--space3_5);
    }

    /* Sponsors */
    .page-section.sponsors {
        padding-top: 0;
        padding-bottom: 0;
        margin-top: var(--space6);
        margin-bottom: var(--space6);
    }

    .page-section.sponsors .page-section-heading {
        display: block;
        margin-bottom: calc(var(--space5) + var(--space2_5));
    }

    .page-section.sponsors .page-section-heading .title {
        margin-bottom: var(--space4);
    }

    .page-section.sponsors .logo-cloud-artwork {
        position: relative;
    }

    .page-section.sponsors .logo-cloud {
        z-index: 20;
        position: relative;
        border-left: var(--theme-border-3);
        border-right: var(--theme-border-3);

        --grid-layout-gap: 1px;
        --grid-column-count: 4;
        --grid-item--min-width: 240px;

        --gap-count: calc(var(--grid-column-count) - 1);
        --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
        --grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));
        grid-gap: var(--grid-layout-gap);
    }

    .page-section.sponsors .logo-cloud .grid-item {
        height: var(--space5);
        box-sizing: content-box;
        padding: var(--space3) var(--space3_5);
        /* outline: var(--theme-border-1); */
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .page-section.sponsors .logo-cloud img {
        display: inline-block;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    @media (max-width: 768px) {
        .page-section.sponsors .logo-cloud {
            --grid-item--min-width: 200px;
        }

        @media (max-width: 500px) {
            .page-section.sponsors .logo-cloud {
                grid-template-columns: 1fr 1fr;
                border-left: 0px;
                border-right: 0px;
                margin: 0 calc(var(--space3_5) * -1);
            }

            .page-section.sponsors .logo-cloud .grid-item {
                justify-content: flex-start;
                padding: var(--space2) var(--space3_5);
            }
        }
    }

    /* Contact */
    .page-section.contact {
        padding: 0;
        margin: var(--space7) 0;
    }

    @media (max-width: 480px) {
        .page-section.contact {
            margin-bottom: var(--space6);
        }
    }

    .page-section.contact .bottom {
        margin-top: var(--space4_5);
    }

    @media (max-width: 700px) {
        .page-section.contact .bottom p {
            margin-top: var(--space4);
        }
    }

    @media (min-width: 701px) {
        .page-section.contact .bottom {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
        }

        .page-section.contact .bottom p {
            margin-left: var(--space4);
        }
    }

    .page-section.contact .neon-planes-wrapper {
        position: absolute;
        z-index: 0;
        width: 100%;
        margin-top: calc(var(--space6) * -1);
        transform-origin: top center;
    }

    .page-section.contact .neon-planes {
        position: relative;
    }

    .page-section.contact .neon-planes.one .neon-plane {
        --skew-offset-self: 22.36%;
        --size: calc(var(--space8) - var(--space5) - var(--space3_5));
        width: var(--size);
        margin-left: 100%;
        transform: translateX(calc(calc(100% - var(--skew-offset-self)) * -1));
    }

    @media (min-width: 1025px) and (max-width: 1370px) {
        .page-section.contact .neon-planes.one .neon-plane {
            /* Ratio between resize length and move length: 189px move / (1370px - 1025px) resize = 0.5478 */
            --leftMove: calc(calc(1025px - 100vw) * 0.5478);
            left: var(--leftMove);
        }
    }

    @media (min-width: 1370px) {
        .page-section.contact .neon-planes.one .neon-plane {
            --skew-offset-self: 22.36%;
            transform: translateX(calc(calc(100% + var(--skew-offset-self)) * -1));
        }
    }

    .page-section.contact > *:not(.neon-planes-wrapper) {
        position: relative;
        z-index: 1;
    }

    /* Social */
    .page-section.social {
        padding: 0;
        margin: var(--space7) 0 calc(var(--space5) + var(--space3));
    }

    @media (max-width: 480px) {
        .page-section.social {
            margin: calc(var(--space6) + var(--space6)) 0 var(--space5);
        }
    }

    @media (max-width: 400px) {
        .page-section.social {
            margin: calc(var(--space6) + var(--space5)) 0 var(--space4);
        }
    }

    .page-section.social .neon-planes-wrapper {
        position: absolute;
        z-index: 0;
        width: 100%;
        margin-top: calc(var(--space6) + var(--space5));
        transform-origin: top center;
    }

    .page-section.social .neon-planes {
        position: relative;
    }

    .page-section.social .neon-planes.two .neon-plane {
        --size: calc(var(--space8) - var(--space4_5));
        width: var(--size);
        transform: translateX(calc(var(--skew-offset-self) * -1));
    }

    .page-section.social > *:not(.neon-planes-wrapper) {
        position: relative;
        z-index: 1;
    }

    .page-section.social .title {
        z-index: 2;
    }

    @media (max-width: 600px) {
        .page-section.social .title br {
            display: none;
        }

        .page-section.social .title {
            width: 75%;
            margin-bottom: calc(var(--space5) + var(--space2));
        }

        @media (max-width: 400px) {
            .page-section.social .title {
                width: 90%;
                margin-bottom: calc(var(--space5) + var(--space2));
            }
        }
    }

    .page-section.social .quotes {
        margin-top: var(--space4_5);
        width: 85%;
        max-width: 600px;
    }

    @media (min-width: 1280px) {
        .page-section.social .quotes {
            max-width: 700px;
        }
    }

    @media (max-width: 600px) {
        .page-section.social .quotes {
            width: auto;
        }
    }

    .page-section.social .quote {
        position: relative;
        font-size: var(--t-size1);
        z-index: 1;
    }

    .page-section.social .quote .icon {
        margin-top: 0.2em;
    }

    .page-section.social .future-heads {
        --headSize: calc(var(--space7) + var(--space6));
        position: absolute;
        top: calc(calc(var(--space6) + var(--space4)) * -1);
        left: calc(100% - calc(var(--headSize) * 0.45));
        display: flex;
        flex-flow: row nowrap;
        z-index: 0;
    }

    .page-section.social .future-heads .icon {
        flex: 0 0 auto;
        width: var(--headSize);
        height: var(--headSize);
        margin-right: calc(calc(var(--headSize) * 0.83) * -1);
        stroke: var(--theme-text-5);
    }

    .page-section.social .future-heads .icon:nth-child(2) {
        opacity: 0.4;
    }

    .page-section.social .future-heads .icon:nth-child(3) {
        opacity: 0.3;
    }

    .page-section.social .future-heads .icon:nth-child(4) {
        opacity: 0.2;
    }

    @media (max-width: 768px) {
        .page-section.social .future-heads {
            margin-left: -38px;
        }

        .page-section.social .future-heads .icon {
            width: calc(var(--headSize) - 25px);
            height: calc(var(--headSize) - 25px);
        }

        @media (max-width: 600px) {
            .page-section.social .future-heads {
                top: calc(calc(var(--space6) + var(--space6) + var(--space2)) * -1);
                margin-left: calc(-38px - 110px + 50px);
            }

            .page-section.social .future-heads .icon {
                margin-right: calc(calc(calc(var(--headSize) * 0.83) * -1) + 67px);
            }

            .page-section.social .future-heads .icon {
                width: calc(var(--headSize) - 92px);
                height: calc(var(--headSize) - 92px);
            }

            @media (min-width: 320px) {
                .page-section.social .future-heads {
                    top: calc(calc(var(--space6) + var(--space6)) * -1);
                    --leftMove: calc(calc(600px - 100vw) * 0.3);
                    margin-left: calc(-38px - 110px + 50px + var(--leftMove));
                }

                .page-section.social .future-heads .icon {
                    --move: calc(calc(600px - 100vw) * 0.25);
                    margin-right: calc(calc(calc(var(--headSize) * 0.83) * -1) + 67px + var(--move));
                }

                .page-section.social .future-heads .icon {
                    --shrink: calc(calc(600px - 100vw) * 0.3);
                    width: calc(var(--headSize) - 92px - var(--shrink));
                    height: calc(var(--headSize) - 92px - var(--shrink));
                }
            }

            @media (max-width: 320px) {
                .page-section.social .future-heads {
                    top: calc(calc(var(--space6) + var(--space6)) * -1);
                    margin-left: calc(-38px - 110px + 50px + 84px);
                }

                .page-section.social .future-heads .icon {
                    margin-right: calc(calc(calc(var(--headSize) * 0.83) * -1) + 67px + 70px);
                }

                .page-section.social .future-heads .icon {
                    width: calc(var(--headSize) - 92px - 84px);
                    height: calc(var(--headSize) - 92px - 84px);
                }
            }
        }

        @media (min-width: 601px) {
            .page-section.social .future-heads {
                --leftMove: calc(calc(768px - 100vw) * 0.3);
                margin-left: calc(-38px + var(--leftMove));
            }

            .page-section.social .future-heads .icon {
                --move: calc(calc(768px - 100vw) * 0.4);
                margin-right: calc(calc(calc(var(--headSize) * 0.83) * -1) + var(--move));
            }

            .page-section.social .future-heads .icon {
                --shrink: calc(calc(768px - 100vw) * 0.55);
                width: calc(var(--headSize) - var(--shrink));
                height: calc(var(--headSize) - var(--shrink));
            }
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        .page-section.social .future-heads {
            --leftMove: calc(calc(1024px - 100vw) * 0.15);
            margin-left: calc(var(--leftMove) * -1);
        }

        .page-section.social .future-heads .icon {
            --shrink: calc(calc(1024px - 100vw) * 0.1);
            width: calc(var(--headSize) - var(--shrink));
            height: calc(var(--headSize) - var(--shrink));
        }
    }

    @media (min-width: 1025px) and (max-width: 1370px) {
        .page-section.social .future-heads .icon {
            --leftMove: calc(calc(1025px - 100vw) * 0.1);
            margin-right: calc(calc(calc(var(--headSize) * 0.83) * -1) - var(--leftMove));
        }
    }

    @media (min-width: 1370px) {
        .page-section.social .future-heads .icon {
            margin-right: calc(calc(calc(var(--headSize) * 0.83) * -1) + 35px);
        }
    }
`;
