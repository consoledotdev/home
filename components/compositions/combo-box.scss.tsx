import css from "styled-jsx/css";
export default css.global`
    .combo-box {
        position: relative;
        display: flex;
        flex-flow: row nowrap;
        border-radius: var(--corners-mid);
        overflow: hidden;
    }

    .combo-box .ratio {
        display: inline-block;
        vertical-align: top;
        width: 100%;
    }

    .combo-box-visuals {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row nowrap;
    }

    .combo-box-visuals .plane-picture {
        height: 100%;
    }

    .combo-box-visuals .plane-picture.left,
    .combo-box-visuals .plane-picture.right {
        position: relative;
        flex: 0 0 auto;
        height: 100%;
    }

    /* Logo + Profile */
    .combo-box-visuals.logo-profile .plane-picture.left {
        background: var(--theme-content-bg-0);
        width: 47.08%;
        margin-right: -23.71%;
        clip-path: polygon(0% 0%, 0% 100%, 50.36% 100%, 100% 0%);
    }

    .combo-box-visuals.logo-profile .plane-picture.right {
        width: 76.82%;
        clip-path: polygon(30.9% 0%, 0% 100%, 69.1% 100%, 100% 0%);
    }

    .combo-box-visuals.logo-profile .plane-picture.right .image {
        height: 100%;
    }

    /* Logo + Logo */
    .combo-box-visuals.logo-logo .plane-picture.left {
        background: var(--theme-content-bg-0);
        width: 51.2%;
        margin-right: -23.71%;
        clip-path: polygon(0% 0%, 0% 100%, 53.69% 100%, 100% 0%);
    }

    .combo-box-visuals.logo-logo .plane-picture.mid {
        background: var(--theme-content-bg-2);
        width: 24.4%;
        margin-right: -23.71%;
        clip-path: polygon(97.18% 0%, 0% 100%, 2.82% 100%, 100% 0%);
    }

    .combo-box-visuals.logo-logo .plane-picture.right {
        background: var(--theme-content-bg-0);
        width: 71.9%;
        clip-path: polygon(32.97% 0%, 0% 100%, 67% 100%, 100% 0%);
    }

    /* Combo card logo --------------------------- */
    .combo-box-visuals .logo {
        position: absolute;
        border-radius: var(--corners-x-small);
        overflow: hidden;
    }

    .combo-box-visuals .logo .image {
        object-fit: contain;
        width: 100%;
        height: auto;
    }

    /* Logo + Profile */
    .combo-box-visuals.logo-profile .plane-picture.left .logo {
        margin: 17.64% 0 0 17.64%;
        width: 35.29%;
    }

    /* Logo + Logo */
    .combo-box-visuals.logo-logo .plane-picture.left .logo,
    .combo-box-visuals.logo-logo .plane-picture.right .logo {
        top: 50%;
        transform: translateY(-50%);
    }

    .combo-box-visuals.logo-logo .plane-picture.left .logo {
        margin-left: 17.64%;
        width: 32.21%;
    }

    .combo-box-visuals.logo-logo .plane-picture.right .logo {
        width: 22.94%;
        margin-left: 37.1%;
    }

    @media (min-width: 769px) {
        .combo-box {
            max-width: calc(var(--space7_5) - var(--space5));
        }
    }

    /* Vertical layout --------------------------------------------------------------------------- */
    /* Logo + Profile */
    .combo-box.is-vertical .combo-box-visuals.logo-profile .plane-picture.right {
        width: 76.82%;
        clip-path: polygon(30.9% 0%, 0% 100%, 100% 100%, 100% 0%);
    }

    /* Logo + Logo */
    .combo-box.is-vertical .combo-box-visuals.logo-logo .plane-picture.left {
        width: 61.5%;
        clip-path: polygon(0% 0%, 0% 100%, 61.46% 100%, 100% 0%);
    }

    .combo-box.is-vertical .combo-box-visuals.logo-logo .plane-picture.mid {
        clip-path: polygon(97.18% 0%, 0% 100%, 2.82% 100%, 100% 0%);
    }

    .combo-box.is-vertical .combo-box-visuals.logo-logo .plane-picture.right {
        width: 61.5%;
        clip-path: polygon(38.54% 0%, 0% 100%, 100% 100%, 100% 0%);
    }

    /* Combo card logo --------------------------- */
    /* Logo + Logo */
    .combo-box.is-vertical .combo-box-visuals.logo-logo .plane-picture.left .logo {
        margin-left: 23.46%;
        width: 27%;
    }

    .combo-box.is-vertical .combo-box-visuals.logo-logo .plane-picture.right .logo {
        margin-left: 49.72%;
        width: 27%;
    }
`;
