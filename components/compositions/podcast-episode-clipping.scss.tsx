import css from "styled-jsx/css";
export default css.global`
    .podcast-episode-clipping {
        display: flex;
        align-items: center;
        margin-top: var(--space4);
    }

    .podcast-episode-clipping .framed-section {
        flex: 1 1 auto;
    }

    .podcast-episode-clipping .console-button {
        flex: 0 0 auto;
    }

    @media (max-width: 479px) {
        .podcast-episode-clipping {
            align-items: flex-start;
        }

        .podcast-episode-clipping .console-button {
            margin-left: var(--space3);
        }
    }

    @media (min-width: 480px) {
        .podcast-episode-clipping .console-button {
            margin-left: var(--space4);
        }
    }

    .podcast-episode-clipping p:nth-child(1n) .text-medium:first-child,
    .podcast-episode-clipping p:nth-child(1n) .text-regular:first-child {
        color: var(--theme-interviewer-name);
    }

    .podcast-episode-clipping p:nth-child(2n) .text-medium:first-child,
    .podcast-episode-clipping p:nth-child(2n) .text-regular:first-child {
        color: var(--theme-interviewee-name);
    }
`;
