import css from "styled-jsx/css";
export default css.global`
    .neon-planes {
        width: 100%;
        height: 0;
        backdrop-filter: opacity(1);
    }

    .neon-plane {
        position: absolute;
        top: 0;
        left: 0;
        height: 0;
        mix-blend-mode: var(--theme-neon-planes-blend-mode);
    }

    .neon-plane div {
        position: absolute;
        top: 0;
        left: 0;
        transform: skew(-26.7deg);
        width: 100%;
        height: 100%;
    }

    .neon-plane.triad-01 div {
        background: var(--theme-neon-planes-triad-01-body);
        box-shadow: 0 0 32vw var(--theme-neon-planes-triad-01-glow);
        /* filter: drop-shadow(0 0 125px var(--theme-neon-planes-triad-01-glow)); */
    }

    .neon-plane.triad-02 div {
        background: var(--theme-neon-planes-triad-02-body);
        box-shadow: 0 0 32vw var(--theme-neon-planes-triad-02-glow);
        /* filter: drop-shadow(0 0 125px var(--theme-neon-planes-triad-02-glow)); */
    }

    .neon-plane.triad-03 div {
        background: var(--theme-neon-planes-triad-03-body);
        box-shadow: 0 0 32vw var(--theme-neon-planes-triad-03-glow);
        /* filter: drop-shadow(0 0 125px var(--theme-neon-planes-triad-03-glow)); */
    }

    .neon-planes.all {
        padding-bottom: 78%;
    }

    .neon-planes.all .neon-plane {
        --skew-offset: 11.2%;
        --size: 50.12%;
        width: var(--size);
        padding-bottom: calc(var(--size) * 0.8945);
    }

    .neon-planes.all .neon-plane.triad-01 {
        margin-left: calc(20.73% + var(--skew-offset));
    }

    .neon-planes.all .neon-plane.triad-02 {
        margin-top: 27.09%;
        margin-left: var(--skew-offset);
    }

    .neon-planes.all .neon-plane.triad-03 {
        margin-top: 33.24%;
        margin-left: calc(27.47% + var(--skew-offset));
    }

    .neon-planes.one-three {
        padding-bottom: 65.43%;
    }

    .neon-planes.one-three .neon-plane {
        --skew-offset: 12.8%;
        --size: 55.9%;
        width: var(--size);
        padding-bottom: calc(var(--size) * 0.8945);
    }

    .neon-planes.one-three .neon-plane.triad-01 {
        margin-left: var(--skew-offset);
    }

    .neon-planes.one-three .neon-plane.triad-03 {
        margin-top: 9.23%;
        margin-left: calc(18.67% + var(--skew-offset));
    }

    .neon-planes.one .neon-plane,
    .neon-planes.two .neon-plane,
    .neon-planes.three .neon-plane {
        --size: var(--space7);
        width: var(--size);
        padding-bottom: calc(var(--size) * 0.8945);
    }
`;
