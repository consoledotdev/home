import css from "styled-jsx/css";
export default css.global`
    .podcast-links-wrapper .title {
        color: var(--theme-text-2);
    }

    .podcast-links {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-start;
    }

    .podcast-links .link {
        display: inline-block;
        filter: grayscale(0.6);
    }

    .podcast-links .link:hover,
    .podcast-links .link:focus {
        filter: grayscale(0);
    }

    .podcast-links .link:active {
        opacity: 0.8;
    }

    .podcast-links .link:not(:first-child) {
        margin-left: var(--space3);
    }

    .podcast-links .link img {
        display: inline-block;
        vertical-align: top;
    }

    @media (min-width: 512px) {
        .podcast-links .link {
            flex: 0 0 auto;
        }

        .podcast-links .link:not(:first-child) {
            margin-left: var(--space3);
        }
    }

    .podcast-links .title {
        margin: 0;
    }
`;
