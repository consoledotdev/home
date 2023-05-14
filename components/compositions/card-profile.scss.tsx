import css from "styled-jsx/css";
export default css.global`
    .card.card-profile {
        overflow: visible;
    }

    .card-profile .card-inner {
        width: 100%;
    }

    .card-profile .top {
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

    .card-profile .top > .left {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .card-profile .top > .left .title {
        display: none;
    }

    .card-profile .top > .right {
        flex-grow: 1;
    }

    .card-profile .vendor-thumbnail {
        margin-right: var(--space3_5);
    }

    @media (max-width: 640px) {
        .card-profile .vendor-thumbnail {
            margin-right: var(--space3);
        }
    }

    .card-profile .title.title-3 {
        margin-bottom: var(--space1);
    }

    .card-profile p.card-description {
        margin: 0;
    }

    .card-profile .top > .right > .taxonomy {
        display: flex;
        margin-top: var(--space2);
        flex-flow: row wrap;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: calc(var(--space2) * -1);
    }

    .card-profile .top > .right > .taxonomy > * {
        margin-bottom: var(--space2);
    }

    .card-profile .top > .right > .taxonomy > *:not(:last-child) {
        margin-right: var(--space3);
    }

    .card-profile .bottom {
        background: var(--theme-content-bg-1);
        padding: var(--space3) var(--space4);
        border-bottom-left-radius: var(--corners-mid);
        border-bottom-right-radius: var(--corners-mid);
    }

    .card-profile .bottom .details {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        margin-top: calc(var(--space3_5) * -1);
    }

    .card-profile .bottom .details > * {
        margin-top: var(--space3_5);
    }

    .card-profile .bottom .details .left {
        display: flex;
        flex-flow: row wrap;
        margin-right: var(--space4);
    }

    .card-profile .bottom .details .left .date {
        margin-right: var(--space2_5);
        display: none;
    }

    .card-profile .bottom .details .right {
        display: flex;
        flex-flow: row wrap;
        margin-top: calc(var(--space3_5) - var(--space2_5));
    }

    .card-profile .bottom .details .right > *:not(:last-child) {
        margin-right: var(--space3);
    }

    .card-profile .bottom .details .right > * {
        margin-top: var(--space2_5);
    }

    @media (max-width: 640px) {
        .card-profile p.card-description {
            margin-bottom: var(--space2_5);
        }

        .card-profile .top {
            flex-flow: column nowrap;
            align-items: flex-start;
        }

        .card-profile .top > .right > *:not(:last-child) {
            margin-bottom: var(--space2_5);
        }

        .card-profile .top > .left .title {
            display: block;
            margin: 0;
        }

        .card-profile .top > .right .title {
            display: none;
        }

        @media (max-width: 600px) {
            .card-profile .top {
                padding-left: var(--space3_5);
                padding-right: var(--space3_5);
            }

            .card-profile .bottom {
                padding-left: var(--space3_5);
                padding-right: var(--space3_5);
            }

            .card-profile .bottom .details {
                flex-flow: column nowrap;
                align-items: flex-start;
            }

            .card-profile .bottom .details > *:not(:first-child) {
                margin-top: var(--space3);
            }
        }
    }

    @media (min-width: 641px) {
        .card-profile {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
        }

        .card-profile .top {
            flex: 1 1 auto;
        }

        .card-profile p.card-description {
            margin-bottom: var(--space1);
        }

        @media (min-width: 1120px), (min-width: 740px) and (max-width: 1024px) {
            .card-profile .top > .right {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
            }

            .card-profile .top > .right > .left {
                flex: 1 1 auto;
                margin-right: var(--space4);
                max-width: 60%;
            }

            .card-profile .top > .right > .taxonomy {
                flex: 0 0 auto;
                max-width: 40%;
                flex-flow: column nowrap;
                align-items: flex-end;
                justify-content: center;
                margin-bottom: 0;
            }

            .card-profile .top > .right > .taxonomy > * {
                margin-bottom: 0;
            }

            .card-profile .top > .right > .taxonomy > *:not(:last-child) {
                margin-right: 0;
            }

            .card-profile .top > .right > .taxonomy > *:not(:first-child) {
                margin-top: var(--space2);
            }

            .card-profile p.card-description {
                margin-bottom: 0;
            }
        }
    }
`;
