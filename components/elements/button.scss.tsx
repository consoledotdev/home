import css from "styled-jsx/css";
export default css.global`
    .console-button,
    [class^="console-button"],
    [class*=" console-button"] {
        position: relative;
        margin: 0;
        padding: 0;
        border: 0;
        background: none;
        outline: none;
        flex: 0 0 auto;
        display: inline-flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        font-size: var(--t-size0);
        line-height: var(--t-lH4);
        vertical-align: top;
        cursor: pointer;
        font-weight: 500;
        transition: var(--a-controls);
        text-decoration: none;
    }

    .console-button.medium,
    [class^="console-button"].medium,
    [class*=" console-button"].medium {
        font-size: var(--t-size-1);
    }

    .console-button.small,
    [class^="console-button"].small,
    [class*=" console-button"].small {
        font-size: var(--t-size-2);
    }

    .console-button:active,
    [class^="console-button"]:active,
    [class*=" console-button"]:active,
    .console-button:focus,
    [class^="console-button"]:focus,
    [class*=" console-button"]:focus {
        transition: var(--a-controls-active);
    }

    .console-button > span,
    [class^="console-button"] > span,
    [class*=" console-button"] > span {
        flex: 0 0 auto;
    }

    .console-button.icon-left > span,
    [class^="console-button"].icon-left > span,
    [class*=" console-button"].icon-left > span {
        margin-left: 0.75em;
    }

    .console-button.icon-right > span,
    [class^="console-button"].icon-right > span,
    [class*=" console-button"].icon-right > span {
        margin-right: 0.75em;
    }

    .console-button .icon,
    [class^="console-button"] .icon,
    [class*=" console-button"] .icon {
        flex: 0 0 auto;
        width: 1.2em;
        height: 1.2em;
        transition: var(--a-controls);
    }

    .console-button:active .icon,
    [class^="console-button"]:active .icon,
    [class*=" console-button"]:active .icon,
    .console-button:focus .icon,
    [class^="console-button"]:focus .icon,
    [class*=" console-button"]:focus .icon {
        transition: var(--a-controls-active);
    }

    /* Disabled */
    .console-button:disabled,
    [class^="console-button"]:disabled,
    [class*=" console-button"]:disabled {
        opacity: 0.7;
        pointer-events: none;
    }

    /* loading */
    .console-button .icon-loader,
    [class^="console-button"] .icon-loader,
    [class*=" console-button"] .icon-loader {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .console-button.is-loading .icon:not(.icon-loader),
    [class^="console-button"].is-loading .icon:not(.icon-loader),
    [class*=" console-button"].is-loading .icon:not(.icon-loader),
    .console-button.is-loading > span,
    [class^="console-button"].is-loading > span,
    [class*=" console-button"].is-loading > span {
        opacity: 0;
    }

    .console-button.is-loading .icon-loader,
    [class^="console-button"].is-loading .icon-loader,
    [class*=" console-button"].is-loading .icon-loader {
        display: inline-block;
    }

    /* Primary
    --------------------------------------------------------------- */
    .console-button {
        background: var(--c-blue-06-main);
        padding: calc(var(--space2) + var(--space1)) calc(var(--space3) + var(--space1));
        border-radius: var(--corners-x-small);
        color: var(--theme-cta-text);
    }

    .console-button:hover,
    .console-button:focus {
        background: var(--c-blue-07);
    }

    .console-button:active {
        background: var(--c-blue-08);
    }

    .console-button .icon-fill {
        fill: var(--theme-cta-text);
    }

    .console-button .icon-stroke {
        stroke: var(--theme-cta-text);
    }

    .console-button .icon-background {
        background: var(--theme-cta-text);
    }

    .console-button.medium {
        padding: calc(var(--space2) + calc(var(--space1) / 2)) calc(var(--space3) + calc(var(--space1) / 2));
    }

    .console-button.small {
        padding: var(--space2) var(--space3);
    }

    /* Round Button */
    .console-button.round {
        border-radius: var(--space3_5);
    }

    .console-button.medium.round {
        border-radius: 21px;
    }

    .console-button.small.round {
        border-radius: calc(var(--space4) + var(--space1));
    }

    /* Quiet */
    .console-button.quiet:not(:hover):not(:focus):not(:active) {
        background: rgba(var(--theme-shading-RGB), 0.1);
        color: var(--theme-text-1);
    }
    .console-button.quiet:not(:hover):not(:focus):not(:active) .icon-fill {
        fill: var(--theme-text-1);
    }
    .console-button.quiet:not(:hover):not(:focus):not(:active) .icon-stroke {
        stroke: var(--theme-text-1);
    }
    .console-button.quiet:not(:hover):not(:focus):not(:active) .icon-background {
        background: var(--theme-text-1);
    }

    /* Text Button
        --------------------------------------------------------------- */
    /* Default */
    .console-button-text {
        font-size: var(--t-size0);
        line-height: var(--t-lH4);
        color: var(--theme-cta-secondary-text-idle);
        text-decoration: none;
    }
    .console-button-text:hover {
        color: var(--theme-cta-secondary-text-hover);
    }
    .console-button-text:active,
    .console-button-text:focus {
        color: var(--theme-cta-secondary-text-active);
    }

    .console-button-text .icon-fill {
        fill: var(--theme-cta-secondary-text-idle);
    }
    .console-button-text:hover .icon-fill {
        fill: var(--theme-cta-secondary-text-hover);
    }
    .console-button-text:active .icon-fill,
    .console-button-text:focus .icon-fill {
        fill: var(--theme-cta-secondary-text-active);
    }

    .console-button-text .icon-stroke {
        stroke: var(--theme-cta-secondary-text-idle);
    }
    .console-button-text:hover .icon-stroke {
        stroke: var(--theme-cta-secondary-text-hover);
    }
    .console-button-text:active .icon-stroke,
    .console-button-text:focus .icon-stroke {
        stroke: var(--theme-cta-secondary-text-active);
    }

    .console-button-text .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-text-idle);
        fill: var(--theme-cta-secondary-text-idle);
    }
    .console-button-text:hover .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-text-hover);
        fill: var(--theme-cta-secondary-text-hover);
    }
    .console-button-text:active .icon-fill-stroke,
    .console-button-text:focus .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-text-active);
        fill: var(--theme-cta-secondary-text-active);
    }

    .console-button-text .icon-background {
        background: var(--theme-cta-secondary-text-idle);
    }
    .console-button-text:hover .icon-background {
        background: var(--theme-cta-secondary-text-hover);
    }
    .console-button-text:active .icon-background,
    .console-button-text:focus .icon-background {
        background: var(--theme-cta-secondary-text-active);
    }

    /* Triad 01 (Blue) */
    .console-button-text.triad-01 {
        color: var(--theme-cta-secondary-triad-01-text-idle);
    }
    .console-button-text.triad-01:hover {
        color: var(--theme-cta-secondary-triad-01-text-hover);
    }
    .console-button-text.triad-01:active,
    .console-button-text.triad-01:focus {
        color: var(--theme-cta-secondary-triad-01-text-active);
    }

    .console-button-text.triad-01 .icon-fill {
        fill: var(--theme-cta-secondary-triad-01-text-idle);
    }
    .console-button-text.triad-01:hover .icon-fill {
        fill: var(--theme-cta-secondary-triad-01-text-hover);
    }
    .console-button-text.triad-01:active .icon-fill,
    .console-button-text.triad-01:focus .icon-fill {
        fill: var(--theme-cta-secondary-triad-01-text-active);
    }

    .console-button-text.triad-01 .icon-stroke {
        stroke: var(--theme-cta-secondary-triad-01-text-idle);
    }
    .console-button-text.triad-01:hover .icon-stroke {
        stroke: var(--theme-cta-secondary-triad-01-text-hover);
    }
    .console-button-text.triad-01:active .icon-stroke,
    .console-button-text.triad-01:focus .icon-stroke {
        stroke: var(--theme-cta-secondary-triad-01-text-active);
    }

    .console-button-text.triad-01 .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-triad-01-text-idle);
        fill: var(--theme-cta-secondary-triad-01-text-idle);
    }
    .console-button-text.triad-01:hover .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-triad-01-text-hover);
        fill: var(--theme-cta-secondary-triad-01-text-hover);
    }
    .console-button-text.triad-01:active .icon-fill-stroke,
    .console-button-text.triad-01:focus .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-triad-01-text-active);
        fill: var(--theme-cta-secondary-triad-01-text-active);
    }

    /* Triad 02 (Fuchsia) */
    .console-button-text.triad-02 {
        color: var(--theme-cta-secondary-triad-02-text-idle);
    }
    .console-button-text.triad-02:hover {
        color: var(--theme-cta-secondary-triad-02-text-hover);
    }
    .console-button-text.triad-02:active,
    .console-button-text.triad-02:focus {
        color: var(--theme-cta-secondary-triad-02-text-active);
    }

    .console-button-text.triad-02 .icon-fill {
        fill: var(--theme-cta-secondary-triad-02-text-idle);
    }
    .console-button-text.triad-02:hover .icon-fill {
        fill: var(--theme-cta-secondary-triad-02-text-hover);
    }
    .console-button-text.triad-02:active .icon-fill,
    .console-button-text.triad-02:focus .icon-fill {
        fill: var(--theme-cta-secondary-triad-02-text-active);
    }

    .console-button-text.triad-02 .icon-stroke {
        stroke: var(--theme-cta-secondary-triad-02-text-idle);
    }
    .console-button-text.triad-02:hover .icon-stroke {
        stroke: var(--theme-cta-secondary-triad-02-text-hover);
    }
    .console-button-text.triad-02:active .icon-stroke,
    .console-button-text.triad-02:focus .icon-stroke {
        stroke: var(--theme-cta-secondary-triad-02-text-active);
    }

    .console-button-text.triad-02 .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-triad-02-text-idle);
        fill: var(--theme-cta-secondary-triad-02-text-idle);
    }
    .console-button-text.triad-02:hover .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-triad-02-text-hover);
        fill: var(--theme-cta-secondary-triad-02-text-hover);
    }
    .console-button-text.triad-02:active .icon-fill-stroke,
    .console-button-text.triad-02:focus .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-triad-02-text-active);
        fill: var(--theme-cta-secondary-triad-02-text-active);
    }

    /* Triad-03 (Green) */
    .console-button-text.triad-03 {
        color: var(--theme-cta-secondary-triad-03-text-idle);
    }
    .console-button-text.triad-03:hover {
        color: var(--theme-cta-secondary-triad-03-text-hover);
    }
    .console-button-text.triad-03:active,
    .console-button-text.triad-03:focus {
        color: var(--theme-cta-secondary-triad-03-text-active);
    }

    .console-button-text.triad-03 .icon-fill {
        fill: var(--theme-cta-secondary-triad-03-text-idle);
    }
    .console-button-text.triad-03:hover .icon-fill {
        fill: var(--theme-cta-secondary-triad-03-text-hover);
    }
    .console-button-text.triad-03:active .icon-fill,
    .console-button-text.triad-03:focus .icon-fill {
        fill: var(--theme-cta-secondary-triad-03-text-active);
    }

    .console-button-text.triad-03 .icon-stroke {
        stroke: var(--theme-cta-secondary-triad-03-text-idle);
    }
    .console-button-text.triad-03:hover .icon-stroke {
        stroke: var(--theme-cta-secondary-triad-03-text-hover);
    }
    .console-button-text.triad-03:active .icon-stroke,
    .console-button-text.triad-03:focus .icon-stroke {
        stroke: var(--theme-cta-secondary-triad-03-text-active);
    }

    .console-button-text.triad-03 .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-triad-03-text-idle);
        fill: var(--theme-cta-secondary-triad-03-text-idle);
    }
    .console-button-text.triad-03:hover .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-triad-03-text-hover);
        fill: var(--theme-cta-secondary-triad-03-text-hover);
    }
    .console-button-text.triad-03:active .icon-fill-stroke,
    .console-button-text.triad-03:focus .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-triad-03-text-active);
        fill: var(--theme-cta-secondary-triad-03-text-active);
    }

    /* Yellow */
    .console-button-text.yellow {
        color: var(--theme-cta-secondary-yellow-text-idle);
    }
    .console-button-text.yellow:hover {
        color: var(--theme-cta-secondary-yellow-text-hover);
    }
    .console-button-text.yellow:active,
    .console-button-text.yellow:focus {
        color: var(--theme-cta-secondary-yellow-text-active);
    }

    .console-button-text.yellow .icon-fill {
        fill: var(--theme-cta-secondary-yellow-text-idle);
    }
    .console-button-text.yellow:hover .icon-fill {
        fill: var(--theme-cta-secondary-yellow-text-hover);
    }
    .console-button-text.yellow:active .icon-fill,
    .console-button-text.yellow:focus .icon-fill {
        fill: var(--theme-cta-secondary-yellow-text-active);
    }

    .console-button-text.yellow .icon-stroke {
        stroke: var(--theme-cta-secondary-yellow-text-idle);
    }
    .console-button-text.yellow:hover .icon-stroke {
        stroke: var(--theme-cta-secondary-yellow-text-hover);
    }
    .console-button-text.yellow:active .icon-stroke,
    .console-button-text.yellow:focus .icon-stroke {
        stroke: var(--theme-cta-secondary-yellow-text-active);
    }

    .console-button-text.yellow .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-yellow-text-idle);
        fill: var(--theme-cta-secondary-yellow-text-idle);
    }
    .console-button-text.yellow:hover .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-yellow-text-hover);
        fill: var(--theme-cta-secondary-yellow-text-hover);
    }
    .console-button-text.yellow:active .icon-fill-stroke,
    .console-button-text.yellow:focus .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-yellow-text-active);
        fill: var(--theme-cta-secondary-yellow-text-active);
    }

    .console-button-text.yellow .icon-background {
        background: var(--theme-cta-secondary-yellow-text-idle);
    }
    .console-button-text.yellow:hover .icon-background {
        background: var(--theme-cta-secondary-yellow-text-hover);
    }
    .console-button-text.yellow:active .icon-background,
    .console-button-text.yellow:focus .icon-background {
        background: var(--theme-cta-secondary-yellow-text-active);
    }

    /* Sunset */
    .console-button-text.sunset {
        color: var(--theme-cta-secondary-sunset-text-idle);
    }
    .console-button-text.sunset:hover {
        color: var(--theme-cta-secondary-sunset-text-hover);
    }
    .console-button-text.sunset:active,
    .console-button-text.sunset:focus {
        color: var(--theme-cta-secondary-sunset-text-active);
    }

    .console-button-text.sunset .icon-fill {
        fill: var(--theme-cta-secondary-sunset-text-idle);
    }
    .console-button-text.sunset:hover .icon-fill {
        fill: var(--theme-cta-secondary-sunset-text-hover);
    }
    .console-button-text.sunset:active .icon-fill,
    .console-button-text.sunset:focus .icon-fill {
        fill: var(--theme-cta-secondary-sunset-text-active);
    }

    .console-button-text.sunset .icon-stroke {
        stroke: var(--theme-cta-secondary-sunset-text-idle);
    }
    .console-button-text.sunset:hover .icon-stroke {
        stroke: var(--theme-cta-secondary-sunset-text-hover);
    }
    .console-button-text.sunset:active .icon-stroke,
    .console-button-text.sunset:focus .icon-stroke {
        stroke: var(--theme-cta-secondary-sunset-text-active);
    }

    .console-button-text.sunset .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-sunset-text-idle);
        fill: var(--theme-cta-secondary-sunset-text-idle);
    }
    .console-button-text.sunset:hover .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-sunset-text-hover);
        fill: var(--theme-cta-secondary-sunset-text-hover);
    }
    .console-button-text.sunset:active .icon-fill-stroke,
    .console-button-text.sunset:focus .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-sunset-text-active);
        fill: var(--theme-cta-secondary-sunset-text-active);
    }

    .console-button-text.sunset .icon-background {
        background: var(--theme-cta-secondary-sunset-text-idle);
    }
    .console-button-text.sunset:hover .icon-background {
        background: var(--theme-cta-secondary-sunset-text-hover);
    }
    .console-button-text.sunset:active .icon-background,
    .console-button-text.sunset:focus .icon-background {
        background: var(--theme-cta-secondary-sunset-text-active);
    }

    /* Danger */
    .console-button-text.danger {
        color: var(--theme-cta-secondary-danger-text-idle);
    }
    .console-button-text.danger:hover {
        color: var(--theme-cta-secondary-danger-text-hover);
    }
    .console-button-text.danger:active,
    .console-button-text.danger:focus {
        color: var(--theme-cta-secondary-danger-text-active);
    }

    .console-button-text.danger .icon-fill {
        fill: var(--theme-cta-secondary-danger-text-idle);
    }
    .console-button-text.danger:hover .icon-fill {
        fill: var(--theme-cta-secondary-danger-text-hover);
    }
    .console-button-text.danger:active .icon-fill,
    .console-button-text.danger:focus .icon-fill {
        fill: var(--theme-cta-secondary-danger-text-active);
    }

    .console-button-text.danger .icon-stroke {
        stroke: var(--theme-cta-secondary-danger-text-idle);
    }
    .console-button-text.danger:hover .icon-stroke {
        stroke: var(--theme-cta-secondary-danger-text-hover);
    }
    .console-button-text.danger:active .icon-stroke,
    .console-button-text.danger:focus .icon-stroke {
        stroke: var(--theme-cta-secondary-danger-text-active);
    }

    .console-button-text.danger .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-danger-text-idle);
        fill: var(--theme-cta-secondary-danger-text-idle);
    }
    .console-button-text.danger:hover .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-danger-text-hover);
        fill: var(--theme-cta-secondary-danger-text-hover);
    }
    .console-button-text.danger:active .icon-fill-stroke,
    .console-button-text.danger:focus .icon-fill-stroke {
        stroke: var(--theme-cta-secondary-danger-text-active);
        fill: var(--theme-cta-secondary-danger-text-active);
    }

    .console-button-text.danger .icon-background {
        background: var(--theme-cta-secondary-danger-text-idle);
    }
    .console-button-text.danger:hover .icon-background {
        background: var(--theme-cta-secondary-danger-text-hover);
    }
    .console-button-text.danger:active .icon-background,
    .console-button-text.danger:focus .icon-background {
        background: var(--theme-cta-secondary-danger-text-active);
    }

    /* Icon only
      --------------------------------------------------------------- */
    .console-button.icon-only {
        padding: calc(var(--space2) + var(--space1)) calc(var(--space2) + var(--space1));
    }

    .console-button.medium.icon-only {
        padding: calc(var(--space2) + calc(var(--space1) / 2)) calc(var(--space2) + calc(var(--space1) / 2));
    }

    .console-button.small.icon-only {
        padding: var(--space2) var(--space2);
    }

    .console-button.icon-only > span,
    [class^="console-button"].icon-only > span,
    [class*=" console-button"].icon-only > span {
        display: none;
    }

    /* Play media button
      --------------------------------------------------------------- */
    .console-button.play {
        position: relative;
    }

    /* visually adjust play icon position on icon only buttons */
    .console-button.icon-only.play .icon {
        margin-left: 2px;
        margin-right: -2px;
    }

    .console-button.icon-only.play .hover-content {
        display: block;
    }

    .console-button.play .hover-content {
        display: block;
        position: absolute;
        right: 100%;
        margin-right: var(--space2_5);
        white-space: nowrap;
        font-size: var(--t-size-3);
        font-weight: 400;
        line-height: var(--t-lH4);
        letter-spacing: 0.06em;
        padding: var(--space0) var(--space1);
        opacity: 0;
        pointer-events: none;
        background: var(--c-blue-06-main);
        transition: var(--a-controls);
        border-radius: var(--corners-x-small);
    }

    .console-button.play:hover .hover-content,
    .console-button.play:focus .hover-content,
    .console-button.play:active .hover-content {
        opacity: 1;
        transition: var(--a-controls-active);
    }

    .console-button.play:hover .hover-content,
    .console-button.play:focus .hover-content {
        background: var(--c-blue-07);
    }

    .console-button.play:active .hover-content {
        background: var(--c-blue-08);
    }
`;
