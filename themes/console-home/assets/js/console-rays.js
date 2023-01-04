class Rays {
    constructor(options) {
        this.options = options;
        this.setup();
    }

    setup() {
        this.container = document.querySelector(`[data-rays="${this.options.type}"]`);
        this.rays = this.container.querySelectorAll("[data-ray]");
        this.controlsContainer = document.querySelector(`[data-rays-controls="${this.options.type}"]`);

        this.initializeParameters();

        if (this.options.dev) {
            this.controlsContainer.classList.add("dev");
            this.setupControls();
        }
    }

    initializeParameters() {
        noise.seed(123);

        this.params = this.options.params || this.defaults;

        this.params.spread.base = 1;
        this.createNoiseBase();
    }

    /* length: amount of values in noise array
       smoothness: the sampling resolution
       offset: sampling starting point in noise space, change to get different results
    */
    generateNoiseArray(length, smoothness, offset) {
        let vals = [];
        for (let i = 0; i < length; i++) {
            vals.push(noise.simplex2(offset + i/smoothness, 0));
        }
        return vals;
    }

    createNoiseBase() {
        let amt = this.rays.length;

        this.params.x.base = this.generateNoiseArray(amt, this.params.x.smoothness, this.params.x.offset);
        this.params.y.base = this.generateNoiseArray(amt, this.params.y.smoothness, this.params.y.offset);
        this.params.h.base = this.generateNoiseArray(amt, this.params.h.smoothness, this.params.h.offset);
    }

    update() {
        this.rays.forEach((r, idx) => {
            let transform = "";
            // spread
            let spread = (this.params.spread.base * this.params.spread.amt) * idx;
            // shift x
            let shiftX = this.params.x.base[idx] * this.params.x.amt;
            transform += `translateX(${shiftX + spread}%)`;

            // shift y
            let shiftY = this.params.y.base[idx] * this.params.y.amt;
            transform += `translateY(${shiftY}%)`;

            // shift height
            let shiftH = this.params.h.base[idx] * this.params.h.amt;
            transform += `scaleY(${1 + shiftH})`;

            r.style.transform = transform;
        })
    }

    setupControls() {
        let createEl = (el, attrs) => {
            let s =  document.createElement(el);
            for (const [attr, value] of Object.entries(attrs)) {
                s[attr] = value;
            }
            return s;
        }

        this.controls = [];
        for (const [p, props] of Object.entries(this.params)) {
            this.controls.push(
                createEl("p", {
                    textContent: p,
                    classList: "x-small"
                })
            )
            this.controls.push(
                createEl("input", {
                    type: "number",
                    id: `rays-control-offset-${p}`,
                    classList: "control range-control-offset range-control-offset-" + p,
                    value: props.offset,
                    onkeydown: this.offsetControlChanged.bind(this),
                    onchange: this.offsetControlChanged.bind(this),
                    step: 0.1
                })
            )
            this.controls.push(
                createEl("input", {
                    type: "range",
                    id: `rays-control-${p}`,
                    classList: "control range-control range-control-" + p,
                    min: props.range[0],
                    max: props.range[1],
                    value: props.amt,
                    oninput: this.controlChanged.bind(this),
                    onchange: this.controlChanged.bind(this),
                    step: props.rangeStep || 1,
                })
            )
            this.controls.push(
                createEl("output", {
                    id: `rays-control-out-${p}`,
                    classList: "control-out range-control-out range-control-out-" + p,
                    value: props.amt,
                })
            )
        }

        this.controlsContainer.append(...this.controls);
    }

    controlChanged(e) {
        let param = e.target.id.replace("rays-control-", "");
        this.params[param].amt = e.target.value;
        e.target.nextSibling.value = e.target.value;
        this.update();
    }

    offsetControlChanged(e) {
        let param = e.target.id.replace("rays-control-offset-", "");
        this.params[param].offset = parseFloat(e.target.value);
        this.createNoiseBase();
        this.update();
    }

    defaults() {
        return {
            // distance between rays
            spread: {
                base: undefined,
                amt: -70,
                range: [-100, 100],
                rangeStep: 1,
            },
            // horizontal shift
            x: {
                base: undefined,
                amt: 44,
                range: [0, 1000],
                rangeStep: 1,
                offset: 0,
                smoothness: 1,
            },
            // vertical shift
            y: {
                base: undefined,
                amt: 5,
                range: [0, 100],
                rangeStep: 1,
                offset: 1000,
                smoothness: 1,
            },
            // height shift
            h: {
                base: undefined,
                amt: 0.08,
                range: [-1, 1],
                rangeStep: 0.01,
                offset: 2000,
                smoothness: 1,
            },
        }
    }
}