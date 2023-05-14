import css from "styled-jsx/css";
export default css.global`
    html {
        scroll-behavior: smooth;
    }

    .page-wrapper.about .title.title-2:not(:first-child) {
        margin-top: calc(var(--space4_5) + var(--space2));
    }

    .page-wrapper.about .page-section:not(:first-child) {
        margin-top: calc(var(--space4_5) + var(--space4));
    }

    .page-wrapper.about .page-section:not(.opening) > .title.title-3 {
        margin-top: calc(var(--space4_5) + var(--space2));
    }

    .page-wrapper.about .page-split .page-section {
        max-width: 700px;
    }

    .page-section > * {
        z-index: 10;
    }

    /* Opening -------------------------------------------------------------------- */
    .page-wrapper.about .page-section.opening {
        max-width: none;
        padding-bottom: 0;
        margin-bottom: calc(var(--space5));
        padding: var(--space5_5) 0 var(--space6);
    }

    .page-wrapper.about .page-section.opening .top {
        position: relative;
    }

    @media (max-width: 768px) {
        .page-wrapper.about .page-section.opening {
            padding: var(--space5) 0 var(--space5_5);
        }
    }

    @media (max-width: 480px) {
        .page-wrapper.about .page-section.opening {
            padding: var(--space4_5) 0 var(--space5);
        }
    }

    .page-wrapper.about .page-section.opening .title.title-3 {
        font-size: var(--t-size3);
    }

    .page-wrapper.about .page-section.opening .description {
        margin: var(--space3) 0 0;
        color: var(--theme-text-2);
    }

    @media (max-width: 768px) {
        @media (max-width: 414px) {
            .page-wrapper.about .page-section.opening .title-1,
            .page-wrapper.about .page-section.opening .description {
                width: 100%;
                max-width: none;
            }
        }
    }

    /* Opening artwork */
    .page-section.opening .artwork-wrapper-dynamic {
        left: 25%;
    }
    .page-section.opening .artwork-wrapper {
        left: 11%;
    }

    .page-section.opening .artwork-wrapper-static img {
        position: absolute;
        height: 120%;
        width: auto;
        top: 50%;
        left: -8%;
        transform: translateY(-50%);
    }

    .page-section.opening .artwork-wrapper .plane-dust-wrapper.one {
        top: calc(50% - 51%);
        left: calc(50% - 28%);
    }

    .page-section.opening .artwork-wrapper .plane-dust-wrapper.one.dupe {
        top: calc(50% + 50%);
        left: calc(50% - 50%);
    }

    .page-section.opening .artwork-wrapper .plane-dust-wrapper.two {
        top: calc(50% - 51%);
        left: calc(50% + 43%);
    }

    .page-section.opening .artwork-wrapper .plane-dust-wrapper.two.dupe {
        top: calc(50% + 44%);
        left: calc(50% + 5%);
    }

    .page-section.opening .artwork-wrapper .plane-dust-wrapper.four {
        top: calc(50% + 44%);
        left: calc(50% - 46%);
    }

    .slim-plane.one {
        --w: 24px;
        top: calc(50% - 50%);
        left: calc(50% - 32%);
        animation-delay: 2s;
    }

    .slim-plane.two {
        --w: 56px;
        top: calc(50% - 48%);
        left: calc(50% - 15%);
        animation-delay: 2.05s;
    }

    .slim-plane.three {
        --w: 20px;
        top: calc(50% - 46%);
        left: calc(50% + 44%);
        animation-delay: 2.1s;
    }

    .slim-plane.four {
        --w: 44px;
        top: calc(50% + 31%);
        left: calc(50% - 12%);
        animation-delay: 2.15s;
    }

    .slim-plane.five {
        --w: 36px;
        top: calc(50% + 26%);
        left: calc(50% + 29.4%);
        animation-delay: 2.2s;
    }

    .slim-plane.six {
        --w: 44px;
        top: calc(50% - 12%);
        left: calc(50% + 69%);
        animation-delay: 2.25s;
    }

    @media (max-width: 540px) {
        .page-section.opening .artwork-wrapper .plane-dust-wrapper.one.dupe {
            top: calc(50% + 55%);
        }

        .page-section.opening .artwork-wrapper .plane-dust-wrapper.two.dupe {
            top: calc(50% + 49%);
        }

        .page-section.opening .artwork-wrapper .plane-dust-wrapper.four {
            top: calc(50% + 49%);
        }
    }

    @media (max-width: 400px) {
        .page-section.opening .artwork-wrapper .plane-dust-wrapper.one {
            top: calc(50% - 53%);
        }

        .page-section.opening .artwork-wrapper .plane-dust-wrapper.two {
            top: calc(50% - 53%);
        }
    }

    /* Co-founders ------------------------------------------------------------------------ */
    .page-wrapper.about .page-section.co-founders {
        z-index: 10;
        margin-top: 0;
        padding: 0;
        margin-bottom: var(--space4_5);
    }

    .page-wrapper.about .page-section.co-founders .title-2 span {
        display: inline-block;
    }

    .page-wrapper.about .page-section.co-founders .profile-pictures {
        display: flex;
        flex-flow: row nowrap;
        margin-top: var(--space4_5);
    }

    .page-wrapper.about .page-section.co-founders .plane-picture {
        width: 57%;
    }

    .page-wrapper.about .page-section.co-founders .plane-picture:last-child {
        margin-left: -14%;
    }

    .page-wrapper.about .page-section.co-founders .profile-pictures + p {
        margin-top: var(--space4_5);
    }

    /* Markdown body ------------------------------------------------------------------------ */
    .page-wrapper.about .page-section.markdown-body {
        margin-top: 0;
        padding: 0;
    }

    /* Signup ------------------------------------------------------------------------------------------------ */
    .page-wrapper.about .page-section.signup {
        margin: 0;
        padding: 0;
    }
`;
