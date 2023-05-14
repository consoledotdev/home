import css from "styled-jsx/css";
export default css.global`
    .sponsor-disclosure {
        font-size: var(--t-size-2);
    }

    .sponsor-disclosure.x-small {
        font-size: var(--t-size-3);
    }

    .sponsor-disclosure.large {
        font-size: var(--t-size-1);
    }

    .sponsor-disclosure p span {
        font-weight: 400;
        color: var(--theme-brand-accent-text-idle);
    }

    .sponsor-disclosure p {
        color: var(--theme-text-4);
    }

    /* Popup
    ================================================================================================================ */
    .sponsor-disclosure.with-tooltip {
        position: relative;
    }

    .sponsor-disclosure.with-tooltip .indicator {
        font-weight: 400;
        color: var(--theme-brand-accent-text-idle);
        cursor: default;
    }

    .sponsor-disclosure.with-tooltip .indicator:hover,
    .sponsor-disclosure.with-tooltip .indicator:focus {
        color: var(--theme-brand-accent-text-hover);
    }

    .sponsor-disclosure.large.with-tooltip .tooltip-content p {
        font-size: var(--t-size-1);
    }

    .sponsor-disclosure.small.with-tooltip .tooltip-content p,
    .sponsor-disclosure.x-small.with-tooltip .tooltip-content p {
        font-size: var(--t-size-2);
    }
`;
