import css from "styled-jsx/css";
export default css.global`
    .card.card-beta {
        overflow: visible;
    }

    .card-beta .card-inner {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        background-color: var(--theme-content-bg-0);
        border-radius: var(--corners-mid);
        border-left: 2px solid transparent;
        padding: var(--space3) var(--space4);
        width: 100%;
    }

    .card-beta:not(:hover).pick .card-inner {
        border-left: var(--theme-content-pick-border-1);
    }

    .card-beta .icon-console-mini-filled {
        position: absolute;
        left: 1px;
        transform: translateX(-50%);
        fill: var(--c-green-06);
        width: var(--t-size3);
        height: var(--t-size3);
        z-index: 20;
    }

    .card-beta .icon-console-mini-filled .alt-prompt {
        fill: var(--c-white-00-absolute);
    }

    .card-beta .top {
        margin-right: var(--space4);
    }

    .card-beta .bottom {
        position: relative;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .card-beta .bottom > .left {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .card-beta .bottom > .left .title {
        display: none;
    }

    .card-beta .bottom > .right {
        flex-grow: 1;
    }

    .card-beta .vendor-thumbnail {
        margin-right: var(--space3_5);
    }

    .card-beta .title.title-3 {
        margin-bottom: var(--space1);
    }

    .card-beta p.card-description {
        margin: 0;
    }

    .card-beta .bottom > .right > .taxonomy {
        display: flex;
        margin-top: var(--space2);
        flex-flow: row wrap;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: calc(var(--space2) * -1);
    }

    .card-beta .bottom > .right > .taxonomy > * {
        margin-bottom: var(--space2);
    }

    .card-beta .bottom > .right > .taxonomy > *:not(:last-child) {
        margin-right: var(--space3);
    }

    @media (max-width: 768px) {
        .card-beta .card-inner {
            flex-flow: column nowrap;
            align-items: flex-start;
        }

        .card-beta .icon-console-mini-filled {
            top: calc(var(--space5) + var(--space2));
            transform: translate(-50%, -50%);
        }

        .card-beta .date {
            margin-left: calc(var(--space4_5) + var(--space3_5));
            margin-bottom: var(--space2_5);
        }

        .card-beta .bottom {
            align-items: flex-start;
            width: 100%;
        }

        .card-beta .bottom > *:not(:last-child) {
            margin-bottom: var(--space2_5);
        }

        .card-beta p.card-description {
            margin-bottom: var(--space2_5);
        }

        .card-beta .vendor-thumbnail {
            margin-top: calc(var(--space1) / 2);
        }

        @media (max-width: 600px) {
            .card-beta .card-inner {
                padding-left: var(--space3_5);
                padding-right: var(--space3_5);
            }
        }

        @media (max-width: 480px) {
            .card-beta .date {
                margin-left: 0;
                margin-bottom: var(--space2_5);
            }

            .card-beta .bottom {
                flex-flow: column nowrap;
            }

            .card-beta .bottom > .right > *:not(:last-child) {
                margin-bottom: var(--space2_5);
            }

            .card-beta .vendor-thumbnail {
                margin-right: var(--space3);
            }

            .card-beta .bottom > .left .title {
                display: block;
                margin: 0;
                word-break: break-word;
            }

            .card-beta .bottom > .right .title {
                display: none;
            }
        }
    }

    @media (min-width: 769px) {
        .card-beta {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
        }

        .card-beta .bottom {
            flex: 1 1 auto;
        }

        .card-beta p.card-description {
            margin-bottom: var(--space1);
        }

        @media (min-width: 1280px), (min-width: 900px) and (max-width: 1024px) {
            .card-beta .bottom > .right {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
            }

            .card-beta .bottom > .right > .left {
                flex: 1 1 auto;
                margin-right: var(--space4);
                max-width: 60%;
            }

            .card-beta .bottom > .right > .taxonomy {
                flex: 0 0 auto;
                max-width: 40%;
                flex-flow: column nowrap;
                align-items: flex-end;
                justify-content: center;
                margin-bottom: 0;
            }

            .card-beta .bottom > .right > .taxonomy > * {
                margin-bottom: 0;
            }

            .card-beta .bottom > .right > .taxonomy > *:not(:last-child) {
                margin-right: 0;
            }

            .card-beta .bottom > .right > .taxonomy > *:not(:first-child) {
                margin-top: var(--space2);
            }

            .card-beta p.card-description {
                margin-bottom: 0;
            }
        }
    }
`;
