document.addEventListener("DOMContentLoaded", (event) => {
    let rays1 = new Rays({
        dev: false,
        type: "triad-01",
        params: {
            amt: {
                value: 20,
            },
            w: {
                base: 275,
                value: 275,
                ratio: 2.16,
            },
            spread: {
                value: -70,
            },
            x: {
                value: 44,
            },
            y: {
                value: 5,
            },
            h: {
                value: 0.08,
            },
            x_offset: {
                value: 8,
            },
            hue_in: { value: null },
            hue_out: { value: null },
        },
    });

    let rays2 = new Rays({
        dev: false,
        type: "triad-03",
        params: {
            amt: {
                value: 12,
            },
            w: {
                base: 180,
                value: 180,
                ratio: 3.1,
            },
            spread: {
                value: -27,
            },
            x: {
                value: 68,
            },
            y: {
                value: 40,
            },
            h: {
                value: -0.2,
                smoothness: 0.94,
            },
            h_offset: {
                value: 2014.2,
            },
            hue_in: { value: null },
            hue_out: { value: null },
        },
    });

    let rays3 = new Rays({
        dev: false,
        type: "jobs-triad-02",
        params: {
            amt: {
                value: 3,
            },
            w: {
                base: 195,
                value: 195,
                ratio: 2.16,
            },
            spread: {
                value: 86,
            },
            x: {
                value: 62,
            },
            x_offset: {
                value: 1,
            },
            y: {
                value: 51,
            },
            h: {
                value: 0,
            },
            h_offset: {
                value: 2006.8,
            },
            hue_in: { value: null },
            hue_out: { value: null },
        },
    });

    rays1.update();
    rays2.update();
    rays3.update();
});
