import css from "styled-jsx/css";
export default css.global`
    .tooltip-hook {
        position: absolute;
        left: 0;
        height: 0;
        width: 100%;
        z-index: 30;
    }

    .tooltip-hook.top-down {
        bottom: 0;
    }

    .tooltip-hook.bottom-up {
        top: 0;
    }

    .tooltip {
        position: absolute;
        opacity: 0;
        pointer-events: none;
        transition: var(--a-elements);
        width: 320px;
    }

    .tooltip.align-left {
        left: 0;
    }

    .tooltip.align-right {
        right: 0;
    }

    .tooltip.is-visible {
        pointer-events: all;
        opacity: 1;
        transition: transform var(--a-elements-time) var(--a-elements-easing);
    }

    .tooltip-hook.top-down .tooltip {
        padding-top: var(--space1);
    }

    .tooltip-hook.bottom-up .tooltip {
        padding-bottom: var(--space1);
        bottom: 0;
    }

    .tooltip-hook.top-down .tooltip {
        transform: translateY(calc(var(--space4) * -1));
    }

    .tooltip-hook.bottom-up .tooltip {
        transform: translateY(var(--space4));
    }

    .tooltip-hook.top-down .tooltip.is-visible,
    .tooltip-hook.bottom-up .tooltip.is-visible {
        transform: translateY(0);
    }

    .tooltip-content {
        display: block;
        background-color: var(--theme-content-bg-4);
        border-radius: var(--corners-mid);
        padding: var(--space4);
        box-shadow: var(--theme-shadow-3);
        width: 100%;
    }

    .tooltip-hook.small .tooltip-content {
        padding: var(--space3);
    }
`;
