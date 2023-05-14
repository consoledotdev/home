import css from "styled-jsx/css";
export default css.global`
    .image-wrapper {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
    }

    .image-wrapper.center {
        text-align: center;
    }

    .image-wrapper img {
        position: relative;
        display: inline-block;
        object-fit: cover;
        vertical-align: top;
        border-radius: var(--corners-mid);
    }

    .image-wrapper.fixed-ratio img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .image-wrapper.placeholder {
        position: relative;
        background-color: var(--theme-empty-bg-1);
        border-radius: var(--corners-mid);
        background-image: var(--theme-empty-dashed-border);
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
    }

    .image-wrapper.placeholder .icon {
        width: 35%;
        max-width: var(--space5_5);
        height: auto;
    }

    .image-wrapper.placeholder .icon-fill {
        fill: var(--theme-separator-1);
    }

    .image-wrapper.placeholder .icon-stroke {
        stroke: var(--theme-separator-1);
    }

    .image-placeholder .icon-fill-stroke {
        fill: var(--theme-separator-1);
        stroke: var(--theme-separator-1);
    }

    .image.placeholder .icon + p {
        margin-top: var(--space3);
    }

    .image.placeholder .icon + p {
        color: var(--theme-text-4);
    }
`;
