import css from "styled-jsx/css";
export default css.global`
    .audio-player {
        flex: 0 1 auto;
        min-width: 0; /* Prevents flex children from overflowing */
        /* no hidden overflow: progress scrubbing */
    }

    .audio-player .icon-loader {
        display: none;
        line-height: var(--t-lH1);
        width: 1.2em;
        height: 1.2em;
        stroke: var(--theme-text-2);
    }

    .audio-player.is-loading .icon-loader {
        display: block;
    }

    .audio-player.is-playing .pause,
    .audio-player:not(.is-playing) .play {
        display: initial;
    }

    .audio-player.is-loading .play,
    .audio-player.is-loading .pause,
    .audio-player.is-playing .play,
    .audio-player:not(.is-playing) .pause {
        display: none;
    }

    .audio-player-top {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        overflow: hidden;
        margin-bottom: var(--space2);
    }

    .audio-player-top .console-button-text {
        flex: 0 0 auto;
        line-height: var(--t-lH1);
        height: var(--t-lH1);
    }

    /* title */
    .audio-player-top .title {
        position: relative;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: 0;
        padding-left: var(--space1);
        margin-left: var(--space2);
        margin-right: var(--space2_5);
        color: var(--theme-text-2);
        flex: 1 1 auto;
        -webkit-mask-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 1) var(--space1), rgba(0, 0, 0, 1));
        -webkit-mask-size: 100% 100%;
        -webkit-mask-position: left top;
        -webkit-mask-repeat: no-repeat;
        mask-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 1) var(--space1), rgba(0, 0, 0, 1));
        mask-size: 100% 100%;
        mask-position: left top;
        mask-repeat: no-repeat;
    }

    .audio-player-top .title .title-main,
    .audio-player-top .title .title-alt {
        transition-property: margin;
        transition-duration: 2s;
        transition-timing-function: cubic-bezier(0.12, 0, 0.88, 1);
    }

    .audio-player-top .title-loading,
    .audio-player-top .title-alt {
        display: none;
    }

    .audio-player.is-loading .audio-player-top .title-loading {
        display: initial;
    }

    .audio-player.is-loading .audio-player-top .title-alt,
    .audio-player.is-loading .audio-player-top .title-main {
        display: none;
    }

    .audio-player.is-playing .audio-player-top .title-alt {
        display: inline;
    }

    .audio-player.is-playing .audio-player-top .title-alt + .title-main {
        display: none;
    }

    .audio-player-top .title:not(:first-child) {
        margin-top: 0;
    }

    /* audio time */
    .audio-player-top .audio-time {
        display: none;
        vertical-align: top;
        white-space: nowrap;
        font-size: var(--t-size-3);
        line-height: var(--t-lH3);
    }

    .audio-player-top .audio-time span {
        vertical-align: top;
    }

    .audio-player.show-time .audio-player-top .audio-time {
        display: inline-block;
    }

    .audio-player-top .audio-time .total {
        color: var(--theme-text-2);
    }

    .audio-player-top .audio-time .elapsed {
        display: none;
        color: var(--theme-text-2);
    }

    .audio-player-top .audio-time .elapsed span {
        color: var(--theme-text-1);
    }

    .audio-player.is-playing:not(.is-at-start) .audio-player-top .audio-time .elapsed,
    .audio-player.is-paused:not(.is-at-start) .audio-player-top .audio-time .elapsed {
        display: inline-block;
    }

    /* progress */
    .audio-player .progress {
        position: relative;
        width: 100%;
        height: var(--space0);
        padding: var(--space2) 0;
        margin: calc(var(--space1) * -1) 0;
        cursor: pointer;
    }

    .audio-player .progress .bg,
    .audio-player .progress .elapsed {
        position: absolute;
        height: var(--space0);
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        pointer-events: none;
    }

    .audio-player .progress .bg {
        width: 100%;
        background: var(--theme-datavis-axis);
    }

    .audio-player .progress .elapsed {
        width: 0%;
        background: var(--theme-text-4);
    }
`;
