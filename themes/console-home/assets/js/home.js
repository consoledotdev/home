document.addEventListener("DOMContentLoaded", (event) => {
    let rays1 = new Rays({
        dev: false,
        type: "triad-01",
        params: {
            spread: {
                base: undefined,
                amt: -70,
                range: [-100, 100],
                rangeStep: 1,
            },
            x: {
                base: undefined,
                amt: 44,
                range: [0, 1000],
                rangeStep: 1,
                offset: 8,
                smoothness: 1,
            },
            y: {
                base: undefined,
                amt: 5,
                range: [0, 100],
                rangeStep: 1,
                offset: 1000,
                smoothness: 1,
            },
            h: {
                base: undefined,
                amt: 0.08,
                range: [-1, 1],
                rangeStep: 0.01,
                offset: 2000,
                smoothness: 1,
            },
        },
    });

    let rays2 = new Rays({
        dev: false,
        type: "triad-03",
        params: {
            spread: {
                base: undefined,
                amt: -27,
                range: [-100, 100],
                rangeStep: 1,
            },
            x: {
                base: undefined,
                amt: 68,
                range: [0, 1000],
                rangeStep: 1,
                offset: 0,
                smoothness: 1,
            },
            y: {
                base: undefined,
                amt: 40,
                range: [0, 100],
                rangeStep: 1,
                offset: 1000,
                smoothness: 1,
            },
            h: {
                base: undefined,
                amt: -0.2,
                range: [-1, 1],
                rangeStep: 0.01,
                offset: 2014.2,
                smoothness: 0.94,
            },
        },
    });

    let rays3 = new Rays({
        dev: false,
        type: "jobs-triad-02",
        params: {
            spread: {
                base: undefined,
                amt: 86,
                range: [-100, 100],
                rangeStep: 1,
            },
            x: {
                base: undefined,
                amt: 62,
                range: [0, 1000],
                rangeStep: 1,
                offset: 1,
                smoothness: 1,
            },
            y: {
                base: undefined,
                amt: 51,
                range: [0, 100],
                rangeStep: 1,
                offset: 1000,
                smoothness: 1,
            },
            h: {
                base: undefined,
                amt: 0,
                range: [-1, 1],
                rangeStep: 0.01,
                offset: 2006.8,
                smoothness: 1,
            },
        },
    });

    rays1.update();
    rays2.update();
    rays3.update();
});
