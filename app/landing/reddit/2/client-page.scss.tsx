import css from "styled-jsx/css";
export default css.global`
    .page-section.latest-newsletter {
        margin-top: 0;
        padding: calc(var(--space6) - var(--space4_5)) 0 0;
    }

    .page-section.latest-newsletter.page-section-plane:after {
        width: 200%;
    }

    .page-section.latest-newsletter .latest-newsletter-list p {
        text-indent: calc(var(--space3_5) * -1);
        margin-left: var(--space3_5);
    }

    .page-section.latest-newsletter .latest-newsletter-list p .link {
        display: inline;
    }

    .page-section.latest-newsletter .latest-newsletter-list .icon {
        vertical-align: -0.2em;
        margin-right: var(--space2_5);
        width: var(--space3);
        height: var(--space3);
    }

    .page-section.latest-newsletter .latest-newsletter-item {
        margin-top: var(--space4_5);
    }

    .page-section.latest-newsletter .latest-newsletter-item .title-3 {
        margin-top: 0;
    }

    .page-section.latest-newsletter .latest-newsletter-item .title-3 {
        margin-bottom: var(--space2);
    }

    .page-section.latest-newsletter .latest-newsletter-item .title-5 {
        margin-top: var(--space2);
    }

    .page-section.latest-newsletter .latest-newsletter-item .sponsor-disclosure {
        margin-bottom: var(--space3);
    }
`;
