import css from "styled-jsx/css";
export default css.global`
    html {
        scroll-behavior: smooth;
    }

    body {
        transition: var(--a-layout-active);
    }

    .page-wrapper.badges .title.title-2:not(:first-child) {
        margin-top: calc(var(--space4_5) + var(--space2));
    }

    .page-wrapper.badges .page-section:not(:first-child) {
        margin-top: calc(var(--space4_5) + var(--space4));
    }

    [data-theme] body.checkpoint-selection-criteria,
    [data-theme] body.checkpoint-selection-criteria .page-wrapper.badges {
        background: var(--theme-content-bg-1);
        transition: var(--a-layout);
    }

    [data-theme] body.checkpoint-selection-criteria .hero .lines {
        opacity: 0;
    }

    /* Opening -------------------------------------------------------------------- */
    .page-wrapper.badges .page-section.opening {
        max-width: none;
        margin-bottom: calc(var(--space5));
        padding: 0;
    }

    .page-wrapper.badges .page-section.opening .top {
        position: relative;
    }

    @media (max-width: 768px) {
        @media (max-width: 414px) {
            .page-wrapper.badges .page-section.opening .title-1,
            .page-wrapper.badges .page-section.opening .description {
                width: 100%;
                max-width: none;
            }
        }
    }

    .page-wrapper.badges .page-section.opening p.description {
        margin-bottom: var(--space3_5);
    }

    .page-wrapper.badges .page-section.opening p span {
        color: var(--theme-text-1);
    }

    .page-wrapper.badges .page-section.opening p span .icon {
        width: calc(var(--space2) + var(--space1));
        height: calc(var(--space2) + var(--space1));
    }

    /* Selector ------------------------------------------------------------------------------------------ */
    .page-wrapper.badges .page-section.selector {
        padding: calc(var(--space5) + var(--space3)) 0;
    }

    .page-wrapper.badges .page-section.selector .selector-ctas {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .page-wrapper.badges .page-section.selector .selector-ctas > * {
        flex: 0 0 auto;
    }

    .page-wrapper.badges .page-section.selector .selector-ctas > *:not(:last-child) {
        margin-right: var(--space3);
    }

    /** Selector UI */
    .selector-ui {
        display: flex;
        flex-flow: column nowrap;
        flex-direction: column-reverse;
        margin: var(--space5) 0 var(--space4_5);
    }

    @media (max-width: 679px) {
        .selector-ui {
            margin-bottom: var(--space4);
        }
    }

    @media (min-width: 550px) and (max-width: 979px) {
        .selector-ui {
            margin-top: var(--space4_5);
        }
    }

    @media (min-width: 980px) {
        .selector-ui {
            flex-flow: row nowrap;
            align-items: center;
        }
    }

    .selector-ui .top {
        display: grid;
        grid-template-columns: repeat(1, 0.9fr 1.1fr);
        gap: 0 calc(var(--space2) + var(--space2));
        align-items: stretch;
        margin-bottom: calc(var(--space4) * -1);
        z-index: 20;
    }

    .selector-ui .top > div:nth-child(2) .selector-ui-options .spacer {
        display: none;
    }

    .selector-ui .top > div:nth-child(3) {
        grid-column: 1 / 3;
        display: grid;
        grid-template-columns: repeat(1, 0.9fr 1.1fr);
        gap: 0 calc(var(--space2) + var(--space2));
    }

    @media (min-width: 680px) and (max-width: 979px) {
        .selector-ui .top {
            grid-template-columns: repeat(1, 0.44fr 0.33fr 0.23fr);
            gap: 0;
            margin-right: 14%;
        }

        .selector-ui .top > div:nth-child(1) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        .selector-ui .top > div:nth-child(2) {
            display: grid;
            grid-template-columns: 1fr;
        }

        .selector-ui .top > div:nth-child(2) .selector-ui-options .spacer {
            display: block;
            height: var(--space4);
        }

        .selector-ui .top > div:nth-child(3) {
            grid-column: 3 / 3;
            display: block;
        }
    }

    @media (max-width: 979px) {
        .selector-ui .top {
            margin-top: var(--space4_5);
        }
    }

    @media (min-width: 980px) {
        .selector-ui .top {
            grid-template-columns: repeat(1, 0.85fr 1.15fr);
            margin-right: var(--space4);
            flex: 0 0 auto;
            width: 30%;
            min-width: 250px;
        }

        .selector-ui .top > div:nth-child(3) {
            grid-template-columns: repeat(1, 0.85fr 1.15fr);
        }
    }

    .selector-ui .bottom {
        position: relative;
        z-index: 10;
    }

    @media (min-width: 769px) {
        .selector-ui .bottom {
            flex: 1 1 auto;
        }
    }

    .selector-ui-group {
        margin-bottom: var(--space4);
    }

    .selector-ui-group.badge-color {
        margin-bottom: calc(var(--space3_5) + var(--space1));
    }

    .selector-ui-group .title {
        margin-bottom: var(--space3);
    }

    .selector-ui-options > div {
        margin-bottom: var(--space1);
    }

    .split-planes {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 50%;
    }

    .split-planes .section-plane {
        width: auto;
        left: 25%;
        right: 25%;
        transition: width var(--a-controls-long-time) var(--a-controls-long-easing), opacity var(--a-controls-long-time) var(--a-controls-long-easing), margin var(--a-controls-long-time) var(--a-controls-long-easing);
    }

    .selector-ui .split-planes {
        padding-bottom: 36%;
    }

    @media (max-width: 549px) {
        .selector-ui .split-planes {
            width: 155%;
            margin: 0 -28%;
            padding-bottom: 55%;
        }
    }

    .selector-ui .split-planes .section-plane {
        left: 18%;
        right: 18%;
    }

    .split-planes .section-plane.left {
        background: var(--c-grey-08);
    }

    .split-planes .section-plane.left:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 126 256'%3E%3Cpath d='M126 0V256H0L126 0Z' fill='%23232327'/%3E%3C/svg%3E");
    }

    .split-planes .section-plane.left:after {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 126 256'%3E%3Cpath d='M0 256L2.23802e-05 0L126 1.10153e-05L0 256Z' fill='%23232327'/%3E%3C/svg%3E%0A");
    }

    .split-planes .section-plane.right {
        background: var(--c-grey-01-white-03);
    }

    .split-planes .section-plane.right:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 126 256'%3E%3Cpath d='M126 0V256H0L126 0Z' fill='%23e9eaef'/%3E%3C/svg%3E");
    }

    .split-planes .section-plane.right:after {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 126 256'%3E%3Cpath d='M0 256L2.23802e-05 0L126 1.10153e-05L0 256Z' fill='%23e9eaef'/%3E%3C/svg%3E%0A");
    }

    .split-planes.is-split .section-plane.left,
    .split-planes.is-split .section-plane.right {
        width: 23.4%;
        opacity: 1;
    }

    .split-planes.is-split .section-plane.left {
        z-index: 5;
    }

    .split-planes.is-split .section-plane.right {
        margin-left: 40.8%;
        z-index: 10;
    }

    .split-planes.is-black .section-plane.left {
        width: 64%;
        z-index: 10;
    }

    .split-planes.is-black .section-plane.right {
        margin-left: 0%;
        width: 64%;
        opacity: 0;
        z-index: 5;
    }

    .split-planes.is-white .section-plane.left {
        opacity: 0;
        z-index: 5;
    }

    .split-planes.is-white .section-plane.right {
        margin-left: 0%;
        width: 64%;
        z-index: 10;
    }

    .selector-ui-preview {
        position: absolute;
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-end;
        padding-bottom: var(--space2_5);
        transform: translateY(-100%);
    }

    @media (max-width: 549px) {
        .selector-ui-preview {
            justify-content: flex-start;
        }
    }

    @media (min-width: 550px) and (max-width: 979px) {
        .selector-ui-preview {
            margin-top: calc(var(--space4) * -1.08);
        }
    }

    .selector-ui-preview p.small {
        margin: 0;
        font-size: var(--t-size-2);
    }

    .selector-ui-preview .console-segmented-control {
        margin-left: var(--space2);
    }

    .split-planes .console-badge {
        position: absolute;
        z-index: 30;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: auto;
        height: auto;
    }

    .split-planes .console-badge img {
        width: auto;
        height: auto;
        border-radius: 0px;
    }

    .selector-actions {
        display: flex;
        flex-flow: column-reverse;
        border-top: var(--theme-border-3);
        padding-top: var(--space4);
    }

    .selector-actions > * {
        position: relative;
    }

    @media (max-width: 979px) {
        .selector-actions .right {
            margin-bottom: var(--space4);
        }
    }

    @media (min-width: 550px) and (max-width: 679px) {
        .selector-actions {
            margin-right: 18%;
        }
    }

    @media (min-width: 680px) {
        .selector-actions {
            display: flex;
            flex-flow: row nowrap;
            align-items: flex-start;
            margin-right: 18%;
        }

        .selector-actions .left {
            flex: 0 0 auto;
            margin-right: var(--space4);
            width: 24%;
            min-width: 216px;
        }

        .selector-actions .right {
            flex: 1 1 auto;
            overflow: hidden;
        }
    }

    @media (min-width: 980px) {
        .selector-actions {
            margin-right: 12%;
        }

        .selector-actions .left {
            width: 34%;
            min-width: 250px;
        }
    }

    .selector-actions-embed-type {
        position: absolute;
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-end;
        padding-bottom: var(--space2_5);
        transform: translateY(-103%);
    }

    @media (max-width: 549px) {
        .selector-actions-embed-type {
            position: relative;
            justify-content: flex-start;
            transform: translateY(0);
        }
    }

    .selector-actions-embed-type p.small {
        margin: 0;
        font-size: var(--t-size-2);
    }

    .selector-actions-embed-type .console-segmented-control {
        margin-left: var(--space2);
    }

    .selector-actions-embed-type .console-button-text {
        margin-left: var(--space3_5);
    }

    .embed-code-wrapper {
        margin-top: calc(var(--space3) + var(--space1));
        display: flex;
        flex-flow: row nowrap;
        background: var(--theme-content-bg-3);
    }

    @media (max-width: 549px) {
        .embed-code-wrapper {
            margin-top: 0;
        }
    }

    .embed-code-wrapper .pre {
        background: var(--theme-content-bg-3);
        font-size: var(--t-size-3);
        padding: var(--space1) var(--space2_5);
        margin: 0;
        border-right: var(--theme-border-2);
        transition: background var(--a-controls-time-easing);
    }

    .embed-code-wrapper .pre.is-changed {
        background: var(--theme-content-bg-4);
        transition: background 0s;
    }

    .embed-code-wrapper .console-button-text {
        width: calc(var(--space5) + var(--space2));
        margin: 0 var(--space2_5) 0 var(--space3);
    }

    .embed-code-wrapper .console-button-text:disabled {
        color: var(--theme-signaling-positive);
    }

    .embed-code-wrapper .console-button-text:disabled .icon {
        fill: var(--theme-signaling-positive);
    }

    /* Selection criteria ------------------------------------------------------------------------------------------------ */
    .page-wrapper.badges .page-section.selection-criteria {
        margin: var(--space5_5) 0;
        padding: 0;
    }

    /* About ------------------------------------------------------------------------------------------------ */
    .page-wrapper.badges .page-section.about {
        margin: 0;
        padding: 0;
    }

    .page-wrapper.badges .page-section.about .about-console {
        margin-bottom: calc(var(--space5) + var(--space3));
    }

    /* Signup ------------------------------------------------------------------------------------------------ */
    .page-wrapper.badges .page-section.signup {
        margin: 0;
        padding: 0;
    }
`;
