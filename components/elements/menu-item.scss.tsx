import css from "styled-jsx/css";
export default css.global`
    .menu-item,
    .menu-item:link,
    .menu-item:visited {
        text-decoration: none;
        outline: none;
        transition: var(--a-controls);
        padding: var(--space1) var(--space2_5);
        letter-spacing: 0.08em;
    }

    .menu-item .icon {
        transition: var(--a-controls);
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
    }

    .menu-item.icon-left > span {
        margin-left: 0.25em;
    }

    .menu-item.icon-right > span {
        margin-right: 0.25em;
    }

    .menu-item:hover,
    .menu-item:focus {
        text-decoration: none;
    }

    .menu-item:active {
        text-decoration: none;
        transition: var(--a-controls-active);
    }

    .is-selected .menu-item,
    .menu-item.is-selected {
        cursor: default;
    }

    /* Menu Sub Item */
    .menu-item.menu-subitem {
        margin-left: var(--space2_5);
    }

    /* Menu Item Primary */
    .menu-item.menu-item-primary,
    .menu-item.menu-item-primary:link,
    .menu-item.menu-item-primary:visited {
        color: var(--theme-nav-primary-link-text-idle);
        font-weight: 500;
    }

    /* Menu Sub Item */
    .menu-item.menu-item-primary.menu-subitem,
    .menu-item.menu-item-primary.menu-subitem:link,
    .menu-item.menu-item-primary.menu-subitem:visited {
        font-size: var(--t-size-1);
    }

    .menu-item.menu-item-primary .icon.icon-stroke,
    .menu-item.menu-item-primary:link .icon.icon-stroke,
    .menu-item.menu-item-primary:visited .icon.icon-stroke {
        stroke: var(--theme-nav-primary-link-text-idle);
    }

    .menu-item.menu-item-primary .icon.icon-fill,
    .menu-item.menu-item-primary:link .icon.icon-fill,
    .menu-item.menu-item-primary:visited .icon.icon-fill {
        fill: var(--theme-nav-primary-link-text-idle);
    }

    .menu-item.menu-item-primary .icon.icon-fill-stroke,
    .menu-item.menu-item-primary:link .icon.icon-fill-stroke,
    .menu-item.menu-item-primary:visited .icon.icon-fill-stroke {
        stroke: var(--theme-nav-primary-link-text-idle);
        fill: var(--theme-nav-primary-link-text-idle);
    }

    .menu-item.menu-item-primary:hover,
    .menu-item.menu-item-primary:focus {
        color: var(--theme-nav-primary-link-text-focus);
    }

    .menu-item.menu-item-primary:hover .icon.icon-stroke,
    .menu-item.menu-item-primary:focus .icon.icon-stroke {
        stroke: var(--theme-nav-primary-link-text-focus);
    }

    .menu-item.menu-item-primary:hover .icon.icon-fill,
    .menu-item.menu-item-primary:focus .icon.icon-fill {
        fill: var(--theme-nav-primary-link-text-focus);
    }

    .menu-item.menu-item-primary:hover .icon.icon-fill-stroke,
    .menu-item.menu-item-primary:focus .icon.icon-fill-stroke {
        stroke: var(--theme-nav-primary-link-text-focus);
        fill: var(--theme-nav-primary-link-text-focus);
    }

    .menu-item.menu-item-primary:active {
        color: var(--theme-nav-primary-link-text-active);
    }

    .menu-item.menu-item-primary:active .icon.icon-stroke {
        stroke: var(--theme-nav-primary-link-text-active);
    }

    .menu-item.menu-item-primary:active .icon.icon-fill {
        fill: var(--theme-nav-primary-link-text-active);
    }

    .menu-item.menu-item-primary:active .icon.icon-fill-stroke {
        stroke: var(--theme-nav-primary-link-text-active);
        fill: var(--theme-nav-primary-link-text-active);
    }

    .is-selected .menu-item.menu-item-primary,
    .menu-item.menu-item-primary.is-selected {
        color: var(--theme-nav-primary-link-text-selected);
    }

    .is-selected .menu-item.menu-item-primary .icon.icon-stroke,
    .menu-item.menu-item-primary.is-selected .icon.icon-stroke {
        stroke: var(--theme-nav-primary-link-text-selected);
    }

    .is-selected .menu-item.menu-item-primary .icon.icon-fill,
    .menu-item.menu-item-primary.is-selected .icon.icon-fill {
        fill: var(--theme-nav-primary-link-text-selected);
    }

    .is-selected .menu-item.menu-item-primary .icon.icon-fill-stroke,
    .menu-item.menu-item-primary.is-selected .icon.icon-fill-stroke {
        stroke: var(--theme-nav-primary-link-text-selected);
        fill: var(--theme-nav-primary-link-text-selected);
    }

    /* Menu Item Secondary */
    .menu-item.menu-item-secondary,
    .menu-item.menu-item-secondary:link,
    .menu-item.menu-item-secondary:visited {
        color: var(--theme-nav-secondary-link-text-idle);
        font-weight: 500;
        font-size: var(--t-size-1);
    }

    /* Menu Sub Item */
    .menu-item.menu-item-secondary.menu-subitem,
    .menu-item.menu-item-secondary.menu-subitem:link,
    .menu-item.menu-item-secondary.menu-subitem:visited {
        font-size: var(--t-size-2);
    }

    .menu-item.menu-item-secondary .icon.icon-stroke,
    .menu-item.menu-item-secondary:link .icon.icon-stroke,
    .menu-item.menu-item-secondary:visited .icon.icon-stroke {
        stroke: var(--theme-nav-secondary-link-text-idle);
    }

    .menu-item.menu-item-secondary .icon.icon-fill,
    .menu-item.menu-item-secondary:link .icon.icon-fill,
    .menu-item.menu-item-secondary:visited .icon.icon-fill {
        fill: var(--theme-nav-secondary-link-text-idle);
    }

    .menu-item.menu-item-secondary .icon.icon-fill-stroke,
    .menu-item.menu-item-secondary:link .icon.icon-fill-stroke,
    .menu-item.menu-item-secondary:visited .icon.icon-fill-stroke {
        stroke: var(--theme-nav-secondary-link-text-idle);
        fill: var(--theme-nav-secondary-link-text-idle);
    }

    .menu-item.menu-item-secondary:hover,
    .menu-item.menu-item-secondary:focus {
        color: var(--theme-nav-secondary-link-text-focus);
    }

    .menu-item.menu-item-secondary:hover .icon.icon-stroke,
    .menu-item.menu-item-secondary:focus .icon.icon-stroke {
        stroke: var(--theme-nav-secondary-link-text-focus);
    }

    .menu-item.menu-item-secondary:hover .icon.icon-fill,
    .menu-item.menu-item-secondary:focus .icon.icon-fill {
        fill: var(--theme-nav-secondary-link-text-focus);
    }

    .menu-item.menu-item-secondary:hover .icon.icon-fill-stroke,
    .menu-item.menu-item-secondary:focus .icon.icon-fill-stroke {
        stroke: var(--theme-nav-secondary-link-text-focus);
        fill: var(--theme-nav-secondary-link-text-focus);
    }

    .menu-item.menu-item-secondary:active {
        color: var(--theme-nav-secondary-link-text-active);
    }

    .menu-item.menu-item-secondary:active .icon.icon-stroke {
        stroke: var(--theme-nav-secondary-link-text-active);
    }

    .menu-item.menu-item-secondary:active .icon.icon-fill {
        fill: var(--theme-nav-secondary-link-text-active);
    }

    .menu-item.menu-item-secondary:active .icon.icon-fill-stroke {
        stroke: var(--theme-nav-secondary-link-text-active);
        fill: var(--theme-nav-secondary-link-text-active);
    }

    .is-selected .menu-item.menu-item-secondary,
    .menu-item.menu-item-secondary.is-selected {
        color: var(--theme-nav-secondary-link-text-selected);
    }

    .is-selected .menu-item.menu-item-secondary .icon.icon-stroke,
    .menu-item.menu-item-secondary.is-selected .icon.icon-stroke {
        stroke: var(--theme-nav-secondary-link-text-selected);
    }

    .is-selected .menu-item.menu-item-secondary .icon.icon-fill,
    .menu-item.menu-item-secondary.is-selected .icon.icon-fill {
        fill: var(--theme-nav-secondary-link-text-selected);
    }

    .is-selected .menu-item.menu-item-secondary .icon.icon-fill-stroke,
    .menu-item.menu-item-secondary.is-selected .icon.icon-fill-stroke {
        stroke: var(--theme-nav-secondary-link-text-selected);
        fill: var(--theme-nav-secondary-link-text-selected);
    }

    /* Menu Item Tertiary */
    .menu-item.menu-item-tertiary,
    .menu-item.menu-item-tertiary:link,
    .menu-item.menu-item-tertiary:visited {
        color: var(--theme-nav-tertiary-link-text-idle);
        font-weight: 400;
        font-size: var(--t-size-1);
    }

    /* Menu Sub Item */
    .menu-item.menu-item-tertiary.menu-subitem,
    .menu-item.menu-item-tertiary.menu-subitem:link,
    .menu-item.menu-item-tertiary.menu-subitem:visited {
        font-size: var(--t-size-2);
    }

    .menu-item.menu-item-tertiary .icon.icon-stroke,
    .menu-item.menu-item-tertiary:link .icon.icon-stroke,
    .menu-item.menu-item-tertiary:visited .icon.icon-stroke {
        stroke: var(--theme-nav-tertiary-link-text-idle);
    }

    .menu-item.menu-item-tertiary .icon.icon-fill,
    .menu-item.menu-item-tertiary:link .icon.icon-fill,
    .menu-item.menu-item-tertiary:visited .icon.icon-fill {
        fill: var(--theme-nav-tertiary-link-text-idle);
    }

    .menu-item.menu-item-tertiary .icon.icon-fill-stroke,
    .menu-item.menu-item-tertiary:link .icon.icon-fill-stroke,
    .menu-item.menu-item-tertiary:visited .icon.icon-fill-stroke {
        stroke: var(--theme-nav-tertiary-link-text-idle);
        fill: var(--theme-nav-tertiary-link-text-idle);
    }

    .menu-item.menu-item-tertiary:hover,
    .menu-item.menu-item-tertiary:focus {
        color: var(--theme-nav-tertiary-link-text-focus);
    }

    .menu-item.menu-item-tertiary:hover .icon.icon-stroke,
    .menu-item.menu-item-tertiary:focus .icon.icon-stroke {
        stroke: var(--theme-nav-tertiary-link-text-focus);
    }

    .menu-item.menu-item-tertiary:hover .icon.icon-fill,
    .menu-item.menu-item-tertiary:focus .icon.icon-fill {
        fill: var(--theme-nav-tertiary-link-text-focus);
    }

    .menu-item.menu-item-tertiary:hover .icon.icon-fill-stroke,
    .menu-item.menu-item-tertiary:focus .icon.icon-fill-stroke {
        stroke: var(--theme-nav-tertiary-link-text-focus);
        fill: var(--theme-nav-tertiary-link-text-focus);
    }

    .menu-item.menu-item-tertiary:active {
        color: var(--theme-nav-tertiary-link-text-active);
    }

    .menu-item.menu-item-tertiary:active .icon.icon-stroke {
        stroke: var(--theme-nav-tertiary-link-text-active);
    }

    .menu-item.menu-item-tertiary:active .icon.icon-fill {
        fill: var(--theme-nav-tertiary-link-text-active);
    }

    .menu-item.menu-item-tertiary:active .icon.icon-fill-stroke {
        stroke: var(--theme-nav-tertiary-link-text-active);
        fill: var(--theme-nav-tertiary-link-text-active);
    }

    .is-selected .menu-item.menu-item-tertiary,
    .menu-item.menu-item-tertiary.is-selected {
        color: var(--theme-nav-tertiary-link-text-selected);
    }

    .is-selected .menu-item.menu-item-tertiary .icon.icon-stroke,
    .menu-item.menu-item-tertiary.is-selected .icon.icon-stroke {
        stroke: var(--theme-nav-tertiary-link-text-selected);
    }

    .is-selected .menu-item.menu-item-tertiary .icon.icon-fill,
    .menu-item.menu-item-tertiary.is-selected .icon.icon-fill {
        fill: var(--theme-nav-tertiary-link-text-selected);
    }

    .is-selected .menu-item.menu-item-tertiary .icon.icon-fill-stroke,
    .menu-item.menu-item-tertiary.is-selected .icon.icon-fill-stroke {
        stroke: var(--theme-nav-tertiary-link-text-selected);
        fill: var(--theme-nav-tertiary-link-text-selected);
    }
`;
