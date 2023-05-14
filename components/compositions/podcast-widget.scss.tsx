import css from "styled-jsx/css";
export default css.global`
    .podcast-widget {
        border-radius: var(--corners-mid);
    }

    .podcast-widget .combo-box {
        display: none;
    }

    .podcast-widget.hide-art .podcast-widget-header .combo-box,
    .podcast-widget.hide-art .podcast-widget-body .combo-box {
        display: none;
    }

    .podcast-widget.hide-header .podcast-widget-header {
        display: none;
    }

    .podcast-widget.hide-links .podcast-widget-footer,
    .podcast-widget.hide-links .podcast-widget-links {
        display: none;
    }

    /* Header -------------------------------------------------------------------------------- */
    .podcast-widget-header {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        padding: 0 var(--space3);
        min-height: calc(var(--space4) + var(--space2));
        border-top-left-radius: var(--corners-mid);
        border-top-right-radius: var(--corners-mid);
        overflow: hidden;
    }

    .podcast-widget.art-header .podcast-widget-header {
        padding-right: 0;
    }

    .podcast-widget-heading .title {
        margin-bottom: 0;
        color: var(--theme-podcast-widget-title);
    }

    .podcast-widget-heading .title span:before {
        content: "Devtools Podcast";
    }

    .podcast-widget-heading .title .icon {
        width: 1.2em;
        height: 1.2em;
    }

    .podcast-widget-heading .title .icon.icon-stroke {
        stroke: var(--theme-podcast-widget-title);
    }
    .podcast-widget-heading .title .icon.icon-fill {
        fill: var(--theme-podcast-widget-title);
    }
    .podcast-widget-heading .title .icon.icon-fill-stroke {
        stroke: var(--theme-podcast-widget-title);
        fill: var(--theme-podcast-widget-title);
    }

    .podcast-widget.art-body .podcast-widget-heading {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        flex: 1 0 auto;
    }

    .podcast-widget.art-body .podcast-widget-heading .title {
        flex: 0 0 auto;
    }

    .podcast-widget.art-header:not(.hide-art) .podcast-widget-header .combo-box {
        display: flex;
    }

    /* Body -------------------------------------------------------------------------------- */
    .podcast-widget .podcast-widget-body {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .podcast-widget.art-body:not(.hide-art) .podcast-widget-body .combo-box {
        display: flex;
    }

    .podcast-widget .audio-player {
        margin: 0 var(--space3);
        height: var(--space5);
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        flex: 1 1 auto;
    }

    .podcast-widget.hide-header .podcast-widget-body {
        border-top-left-radius: var(--corners-mid);
        border-top-right-radius: var(--corners-mid);
        overflow: hidden;
    }

    .podcast-widget.hide-links .podcast-widget-body,
    .podcast-widget.links-body .podcast-widget-body {
        border-bottom-left-radius: var(--corners-mid);
        border-bottom-right-radius: var(--corners-mid);
        overflow: hidden;
    }

    /* Footer -------------------------------------------------------------------------------- */
    .podcast-widget.art-body .podcast-widget-footer {
        padding: var(--space3);
    }

    .podcast-widget.art-header .podcast-widget-footer {
        padding: var(--space2) var(--space3) var(--space3);
    }

    .podcast-widget.links-body .podcast-widget-footer {
        display: none;
    }

    .podcast-widget .podcast-widget-footer {
        border-bottom-left-radius: var(--corners-mid);
        border-bottom-right-radius: var(--corners-mid);
        overflow: hidden;
    }

    /* Combo box -------------------------------------------------------------------------------- */
    .podcast-widget .combo-box {
        --comboBoxHeight: var(--space5);
        height: var(--comboBoxHeight);
        width: calc(var(--comboBoxHeight) * 2.109);
    }

    .podcast-widget-header .combo-box,
    .podcast-widget-body .combo-box {
        border-radius: 0;
    }

    .podcast-widget.art-body .combo-box {
        flex: 0 0 auto;
    }

    /* Links -------------------------------------------------------------------------------- */
    .podcast-widget-links {
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        display: none;
    }

    .podcast-widget-links > .link {
        flex: 1 0 auto;
    }

    .podcast-widget-links > .link:before {
        content: "All episodes";
    }

    .podcast-widget-links .podcast-links {
        flex: 0 0 auto;
    }

    .podcast-widget.links-body .podcast-widget-body .podcast-widget-links {
        display: flex;
        flex: 0 0 auto;
        flex-direction: row-reverse;
    }

    .podcast-widget.links-body .podcast-widget-body .podcast-widget-links > .link {
        margin-left: var(--space3_5);
    }

    .podcast-widget.links-body .podcast-widget-body .podcast-widget-links {
        margin-left: var(--space3);
        margin-right: var(--space3_5);
    }

    .podcast-widget.links-footer .podcast-widget-footer .podcast-widget-links {
        display: flex;
    }

    .podcast-widget.links-footer .podcast-widget-footer .podcast-widget-links > .link {
        margin-right: var(--space3_5);
    }

    /* Meta -------------------------------------------------------------------------------- */
    .podcast-widget.art-header .podcast-widget-meta {
        margin-top: var(--space1);
    }

    .podcast-widget-meta {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        overflow: hidden;
    }

    .podcast-widget-meta p,
    .podcast-widget-meta p:not(:last-child) {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        margin-bottom: 0;
        font-size: var(--t-size-2);
        line-height: var(--t-lH4);
    }

    .podcast-widget-meta .episode-no {
        color: var(--theme-text-3);
        font-style: italic;
    }

    .podcast-widget-meta p > * {
        flex: 0 0 auto;
    }

    .podcast-widget-meta p > .page-meta-separator {
        display: inline-block;
        margin-left: var(--space2);
        margin-right: var(--space2);
    }

    /* Themes -------------------------------------------------------------------------------- */
    /* default */
    .podcast-widget.style-default.art-header .podcast-widget-header,
    .podcast-widget.style-default.art-body .podcast-widget-body {
        background: var(--theme-podcast-widget-default-bg-1);
    }

    .podcast-widget.style-default.art-body .podcast-widget-header,
    .podcast-widget.style-default.art-header .podcast-widget-body,
    .podcast-widget.style-default .podcast-widget-footer {
        background: var(--theme-podcast-widget-default-bg-2);
    }

    .podcast-widget.style-default.art-body .podcast-widget-header {
        border-bottom: var(--theme-podcast-widget-default-border);
    }

    .podcast-widget.style-default.art-header .podcast-widget-body:not(:first-child) {
        border-top: var(--theme-podcast-widget-default-border);
    }

    .podcast-widget.style-default.art-body .podcast-widget-footer {
        border-top: var(--theme-podcast-widget-default-border);
    }

    /* alt */
    .podcast-widget.style-alt.art-header .podcast-widget-header,
    .podcast-widget.style-alt.art-body .podcast-widget-body,
    .podcast-widget.style-alt .podcast-widget-header .combo-box-visuals.logo-profile .plane-picture.left,
    .podcast-widget.style-alt .podcast-widget-body .combo-box-visuals.logo-profile .plane-picture.left,
    .podcast-widget.style-alt .podcast-widget-header .combo-box-visuals.logo-logo .plane-picture.left,
    .podcast-widget.style-alt .podcast-widget-body .combo-box-visuals.logo-logo .plane-picture.left,
    .podcast-widget.style-alt .podcast-widget-header .combo-box-visuals.logo-logo .plane-picture.right,
    .podcast-widget.style-alt .podcast-widget-body .combo-box-visuals.logo-logo .plane-picture.right {
        background: var(--theme-podcast-widget-alt-bg-1);
    }

    .podcast-widget.style-alt .podcast-widget-header .combo-box-visuals.logo-logo .plane-picture.mid,
    .podcast-widget.style-alt .podcast-widget-body .combo-box-visuals.logo-logo .plane-picture.mid {
        background: var(--theme-podcast-widget-alt-bg-2);
    }

    .podcast-widget.style-alt.art-body .podcast-widget-header,
    .podcast-widget.style-alt.art-header .podcast-widget-body,
    .podcast-widget.style-alt .podcast-widget-footer {
        background: var(--theme-podcast-widget-alt-bg-2);
    }

    .podcast-widget.style-alt.art-body .podcast-widget-header {
        border-bottom: var(--theme-podcast-widget-alt-border);
    }

    .podcast-widget.style-alt.art-header .podcast-widget-body:not(:first-child) {
        border-top: var(--theme-podcast-widget-alt-border);
    }

    .podcast-widget.style-alt.art-body .podcast-widget-footer {
        border-top: var(--theme-podcast-widget-alt-border);
    }
`;
