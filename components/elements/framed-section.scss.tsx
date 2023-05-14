import css from "styled-jsx/css";
export default css.global`
    .framed-section {
        border-radius: var(--corners-mid);
        padding: var(--space4) 0;
    }

    .framed-section > *:not(.framed-section-item) {
        margin-left: var(--space3_5);
        margin-right: var(--space3_5);
    }

    .framed-section > iframe {
        width: calc(100% - var(--space5));
    }

    .framed-section .framed-section-item > * {
        margin-left: var(--space3_5);
        margin-right: var(--space3_5);
    }

    .framed-section > .title {
        margin-bottom: var(--space4);
    }

    .framed-section-item {
        padding: var(--space4) 0;
    }

    .framed-section > .framed-section-item {
        margin-top: var(--space4);
    }

    .framed-section > .framed-section-item ~ .framed-section-item {
        margin-top: 0;
    }

    .framed-section-item:last-child {
        padding-bottom: 0;
    }

    .framed-section-item .title.title-3 {
        margin-bottom: var(--space3);
    }

    .framed-section-item p {
        font-size: var(--t-size-1);
    }

    .framed-section-item.flat-lists ul {
        padding: 0;
    }

    .framed-section-item.flat-lists ul li {
        text-indent: 0;
        padding-left: 0;
        color: var(--theme-text-2);
    }

    .framed-section-item.flat-lists ul li:before {
        content: none;
    }

    .framed-section .quote {
        background: transparent;
        border: none;
        padding: 0 0 0 var(--space1);
    }

    /* Compact */
    .framed-section.compact {
        border-radius: var(--corners-small);
        padding: var(--space3) 0;
    }

    .framed-section.compact > *:not(.framed-section-item) {
        margin-left: var(--space3);
        margin-right: var(--space3);
    }

    .framed-section.compact > iframe {
        width: calc(100% - var(--space4));
    }

    .framed-section.compact .framed-section-item > * {
        margin-left: var(--space3);
        margin-right: var(--space3);
    }

    /* Wide */
    .framed-section.wide {
        padding: var(--space4_5) 0;
    }

    .framed-section.wide > *:not(.framed-section-item) {
        margin-left: var(--space4_5);
        margin-right: var(--space4_5);
    }

    .framed-section.wide > iframe {
        width: calc(100% - var(--space5));
    }

    .framed-section.wide .framed-section-item > * {
        margin-left: var(--space4_5);
        margin-right: var(--space4_5);
    }

    /* Default */
    .framed-section.default {
        border: var(--theme-framed-section-default-border);
        background: var(--theme-framed-section-default-bg);
    }

    .framed-section.default .framed-section-item {
        border-top: var(--theme-framed-section-default-item-border);
    }

    .framed-section.default > p {
        color: var(--theme-text-1);
    }

    /* Attention */
    .framed-section.attention {
        border: var(--theme-framed-section-attention-border);
        background: var(--theme-framed-section-attention-bg);
    }

    .framed-section.attention > .title {
        color: var(--theme-framed-section-attention-title);
    }

    .framed-section.attention > .title .icon-fill {
        fill: var(--theme-framed-section-attention-title);
    }

    .framed-section.attention > .title .icon-stroke {
        stroke: var(--theme-framed-section-attention-title);
    }

    .framed-section.attention > p {
        color: var(--theme-framed-section-attention-text);
    }

    .framed-section.attention .framed-section-item {
        border-top: var(--theme-framed-section-attention-item-border);
    }

    /* Overlay */
    .framed-section.overlay {
        background: var(--theme-framed-section-overlay-bg);
    }

    /* Triad 01 */
    .framed-section.triad-01 {
        border: var(--theme-framed-section-blue-border);
        background: var(--theme-framed-section-blue-bg);
    }

    .framed-section.triad-01 .framed-section-item {
        border-top: var(--theme-framed-section-blue-item-border);
    }

    .framed-section.triad-01 p:not(.small) {
        color: var(--theme-text-1);
    }

    /* Triad 03 */
    .framed-section.triad-03 {
        border: var(--theme-framed-section-green-border);
        background: var(--theme-framed-section-green-bg);
    }

    .framed-section.triad-03 .framed-section-item {
        border-top: var(--theme-framed-section-green-item-border);
    }

    .framed-section.triad-03 p:not(.small) {
        color: var(--theme-text-1);
    }

    /* Day/Night */
    .framed-section.daynight {
        background: var(--theme-framed-section-daynight-bg);
    }
`;
