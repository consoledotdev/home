import css from "styled-jsx/css";
export default css.global`
    .card.card-tool {
        overflow: visible;
    }

    .card-tool {
    }

    .card-tool .top {
        position: relative;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        padding: var(--space3) var(--space4);
        border-bottom: var(--theme-border-2);
        background-color: var(--theme-content-bg-0);
        border-top-left-radius: var(--corners-mid);
        border-top-right-radius: var(--corners-mid);
    }

    .card-tool .top > .left {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .card-tool .top > .left .title {
        display: none;
    }

    .card-tool .top > .right {
        flex-grow: 1;
    }

    .card-tool .vendor-thumbnail {
        margin-right: var(--space3_5);
    }

    @media (max-width: 640px) {
        .card-tool .vendor-thumbnail {
            margin-right: var(--space3);
        }
    }

    .card-tool .title.title-3 {
        margin-bottom: var(--space1);
    }

    .card-tool p.card-description {
        margin: 0;
    }

    .card-tool .like-dont-like p span {
        color: var(--theme-text-1);
        font-weight: 500;
    }

    .card-tool .bottom {
        background: var(--theme-content-bg-1);
        padding: var(--space3) var(--space4);
        border-bottom-left-radius: var(--corners-mid);
        border-bottom-right-radius: var(--corners-mid);
    }

    .card-tool .bottom .col-2 {
        margin-top: 0;
    }

    .card-tool .like-dont-like .icon {
        display: inline-block;
        width: var(--t-size-2);
        height: var(--t-size-1);
        vertical-align: -0.1em;
    }

    .card-tool .like-dont-like .icon-like {
        stroke: var(--theme-signaling-positive);
    }

    .card-tool .like-dont-like .icon-dislike {
        stroke: var(--theme-signaling-warning);
    }

    .card-tool .top > .right > .taxonomy {
        display: flex;
        margin-top: var(--space2);
        flex-flow: row wrap;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: calc(var(--space2) * -1);
    }

    .card-tool .top > .right > .taxonomy > * {
        margin-bottom: var(--space2);
    }

    .card-tool .top > .right > .taxonomy > *:not(:last-child) {
        margin-right: var(--space3);
    }

    .card-tool .bottom .details {
        margin-top: var(--space3);
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }

    .card-tool .bottom .details .left {
        display: flex;
        flex-flow: row wrap;
    }

    .card-tool .bottom .details .left .date {
        margin-right: var(--space2_5);
    }

    @media (max-width: 640px) {
        .card-tool > *:not(:last-child):not(:first-child) {
            margin-bottom: var(--space2_5);
        }

        .card-tool .top > *:not(:last-child):not(.card-link) {
            margin-bottom: var(--space2_5);
        }

        .card-tool p.card-description {
            margin-bottom: var(--space2_5);
        }

        .card-tool .bottom .col-2 {
            flex-flow: column nowrap;
        }

        .card-tool .bottom .col-2 > *:not(:first-child) {
            margin-top: var(--space3);
        }

        .card-tool .bottom .col-2 .left,
        .card-tool .bottom .col-2 .right {
            width: auto;
        }

        .card-tool .top {
            flex-flow: column nowrap;
            align-items: flex-start;
        }

        .card-tool .top > .right > *:not(:last-child) {
            margin-bottom: var(--space2_5);
        }

        .card-tool .top > .left .title {
            display: block;
            margin: 0;
        }

        .card-tool .top > .right .title {
            display: none;
        }

        @media (max-width: 600px) {
            .card-tool .top {
                padding-left: var(--space3_5);
                padding-right: var(--space3_5);
            }

            .card-tool .bottom {
                padding-left: var(--space3_5);
                padding-right: var(--space3_5);
            }

            .card-tool .bottom .details {
                flex-flow: column nowrap;
                align-items: flex-start;
            }

            .card-tool .bottom .details > *:not(:first-child) {
                margin-top: var(--space3);
            }
        }

        @media (min-width: 601px) {
            .card-tool > *:not(:last-child) {
                margin-bottom: 0;
            }
        }
    }

    @media (min-width: 641px) {
        .card-tool {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
        }

        .card-tool > *:not(:last-child):not(:first-child) {
            margin-right: var(--space4);
        }

        .card-tool .top {
            flex: 1 1 auto;
        }

        .card-tool p.card-description {
            margin-bottom: var(--space1);
        }

        @media (min-width: 1360px) {
            .card-tool .top > .right {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
            }

            .card-tool .top > .right > .left {
                flex: 1 1 auto;
                margin-right: var(--space4);
                max-width: 60%;
            }

            .card-tool .top > .right > .taxonomy {
                flex: 0 0 auto;
                max-width: 40%;
                flex-flow: column nowrap;
                align-items: flex-end;
                justify-content: center;
                margin-bottom: 0;
            }

            .card-tool .top > .right > .taxonomy > * {
                margin-bottom: 0;
            }

            .card-tool .top > .right > .taxonomy > *:not(:last-child) {
                margin-right: 0;
            }

            .card-tool .top > .right > .taxonomy > *:not(:first-child) {
                margin-top: var(--space2);
            }

            .card-tool p.card-description {
                margin-bottom: 0;
            }
        }
    }
`;
