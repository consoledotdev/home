import css from "styled-jsx/css";
export default css.global`
    .page-wrapper.interviews .page-section {
        margin: 0;
        padding: 0;
        margin-right: min(26vw, 400px);
    }

    @media (max-width: 1280px) {
        .page-wrapper.interviews .page-section {
            margin-right: 0;
        }
    }

    /* Podcast -------------------------------------------------------------------- */
    .page-wrapper.interviews .page-section.podcast {
        margin-right: 0;
        margin-top: calc(var(--space4) + var(--space3));
    }

    .podcast .podcast-widget {
        margin-bottom: var(--space4_5);
    }

    /* podcast large */
    @media (min-width: 769px) {
        @media (max-width: 1024px) {
            .podcast .podcast-widget .podcast-widget-links > .link {
                display: none;
            }
        }
    }

    /* podcast mid */
    @media (min-width: 541px) {
    }

    /* podcast small */
    @media (max-width: 540px) {
        .podcast .podcast-widget .podcast-widget-heading .title {
            display: none;
        }

        @media (max-width: 420px) {
            .podcast .podcast-widget .podcast-widget-links > .link:before {
                content: "See all";
            }

            @media (max-width: 380px) {
                .podcast .podcast-widget .date {
                    display: none;
                }
            }
        }
    }

    /* Interviews -------------------------------------------------------------------- */
    .page-wrapper.interviews .page-section.interviews {
        margin-right: 0;
        margin-top: calc(var(--space4) + var(--space3));
    }

    .page-section.interviews > *:not(:last-child) {
        margin-bottom: var(--space4);
    }

    @media (min-width: 1025px) {
        .page-section.interviews {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0 calc(var(--space4) + var(--space2));
        }

        .page-section.interviews > :nth-last-child(2):nth-child(odd),
        .page-section.interviews > :nth-last-child(1):nth-child(even),
        .page-section.interviews > :nth-last-child(1):nth-child(odd) {
            margin-bottom: 0;
        }
    }

    /* Interviews -------------------------------------------------------------------- */
    .page-wrapper.interviews .page-section.signup {
        margin-top: var(--space5);
    }
`;
