class Rays {
    constructor(options) {
        this.options = options || {
            dev: true,
            type: "triad-01",
            params: {},
        };
        this.scrollEnd;
        this.scrollPos = 0;
        this.setMediaQuery();
        this.setup();
        this.update();
        this.show();
        this.setupControls();
    }

    setMediaQuery() {
        this.mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (this.mediaQuery) {
            this.mediaQuery.addEventListener("change", () => {
                this.mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
                this.update();
            });
        }
    }

    setup() {
        this.container = document.querySelector(`[data-rays="${this.options.type}"]`);
        this.initializeParameters();
        this.updateRays();
        this.params.parallax && this.handleParallax();
    }

    initializeParameters() {
        this.params = {
            seed: { ...Rays.defaults().seed, ...this.options.params.seed },
            amt: { ...Rays.defaults().amt, ...this.options.params.amt },
            w: { ...Rays.defaults().w, ...this.options.params.w },
            spread: { ...Rays.defaults().spread, ...this.options.params.spread },
            x: { ...Rays.defaults().x, ...this.options.params.x },
            y: { ...Rays.defaults().y, ...this.options.params.y },
            h: { ...Rays.defaults().h, ...this.options.params.h },
            hue_in: { ...Rays.defaults().hue_in, ...this.options.params.hue_in },
            x_offset: { ...Rays.defaults().x_offset, ...this.options.params.x_offset },
            y_offset: { ...Rays.defaults().y_offset, ...this.options.params.y_offset },
            h_offset: { ...Rays.defaults().h_offset, ...this.options.params.h_offset },
            hue_out: { ...Rays.defaults().hue_out, ...this.options.params.hue_out },
            parallax: { ...Rays.defaults().parallax, ...this.options.params.parallax },
            parallax_offset: { ...Rays.defaults().parallax_offset, ...this.options.params.parallax_offset },
        };
        this.changeSeed();
        this.createNoiseBase();
    }

    changeSeed() {
        noise.seed(this.params.seed.value);

        this.options.dev && console.log("Seed changed %c%s", "color: #aaaa00", this.params.seed.value);
    }

    createNoiseBase() {
        this.params.x.base = this.generateNoiseArray(this.params.amt.value, this.params.x.smoothness, this.params.x_offset.value);
        this.params.y.base = this.generateNoiseArray(this.params.amt.value, this.params.y.smoothness, this.params.y_offset.value);
        this.params.h.base = this.generateNoiseArray(this.params.amt.value, this.params.h.smoothness, this.params.h_offset.value);

        this.options.dev && console.log("Noise x\n %c%s", "color: #ff99ff", this.params.x.base);
        this.options.dev && console.log("Noise y\n %c%s", "color: #ff99ff", this.params.y.base);
        this.options.dev && console.log("Noise h\n %c%s", "color: #ff99ff", this.params.h.base);
    }

    /* length: amount of values in noise array
       smoothness: the sampling resolution
       offset: sampling starting point in noise space, change to get different results
    */
    generateNoiseArray(length, smoothness, offset) {
        let vals = [];
        for (let i = 0; i < length; i++) {
            vals.push(noise.simplex2(offset + i / smoothness, 0));
        }
        return vals;
    }

    updateRays() {
        this.rays = [];
        this.container.textContent = "";
        for (let i = 0; i < this.params.amt.value; i++) {
            let ray = Rays.createEl("div", { classList: "ray is-hidden" });
            this.container.append(ray);
            this.rays.push(ray);
        }

        this.options.dev && console.log("Rays count %c%s", "color: #9999ff", this.params.amt.value);
    }

    handleParallax() {
        this.handleScroll();
    }

    handleScroll() {
        let onScrollEnd = (e) => {};
        let onScroll = (e) => {
            this.scrollPos = window.scrollY;
            this.update();

            window.clearTimeout(this.scrollEnd);
            this.scrollEnd = setTimeout(() => {
                onScrollEnd();
            }, 50);
        };
        window.addEventListener("scroll", onScroll, false);
        onScroll();
    }

    update() {
        let shiftx = [];
        let shifty = [];
        let shifth = [];
        this.rays.forEach((r, idx) => {
            // Size ------------
            if (this.params.w.value) {
                this.container.style.width = this.params.w.value + "px";
                let resizeAmt = this.params.w.base / this.params.w.value;
                r.style.paddingBottom = this.params.w.ratio * resizeAmt * 100 + "%";
            }

            // Move ------------
            let transform = "";
            // spread
            let spread = this.params.spread.base * this.params.spread.value * idx;
            // shift x
            let shiftX = this.params.x.base[idx] * this.params.x.value;
            transform += `translateX(${shiftX + spread}%)`;

            shiftx.push(shiftX + spread + "%");

            // shift y
            let shiftY = this.params.y.base[idx] * this.params.y.value;

            let parallaxShift = 0;
            if (this.mediaQuery && !this.mediaQuery.matches) {
                // parallax shift
                let currentPos = this.scrollPos - this.params.parallax_offset.value;
                let parallaxAmt = this.params.parallax.value;
                parallaxShift = currentPos * parallaxAmt * 0.7; /* global parallax */
                parallaxShift += currentPos * this.params.y.base[idx] * parallaxAmt * 1.6; /* Emphasis per ray */
            }
            transform += `translateY(${shiftY + parallaxShift}%)`;

            shifty.push(shiftY + "%");

            // shift height
            let shiftH = this.params.h.base[idx] * this.params.h.value;
            transform += `scaleY(${1 + shiftH})`;

            shifth.push(1 + shiftH);

            r.style.transform = transform;

            // Color ------------
            if (this.params.hue_in.value && this.params.hue_out.value) {
                let range = 360 - this.params.hue_in.value;
                range = range - (360 - this.params.hue_out.value);
                let step = range / this.rays.length;
                let hue = step * idx;
                r.style.background = `hsla(${this.params.hue_in.value + hue}, 100%, 14%, 1)`;
                r.style.boxShadow = `0 0 8px 2px hsla(${this.params.hue_in.value + hue}, 100%, 10%, 0.3), 0 0 36px 0 hsla(${this.params.hue_in.value + hue}, 100%, 10%, 0.1)`;
            }
        });

        this.options.dev && console.log("Shift x\n %c%s", "color: #9999ff", shiftx);
        this.options.dev && console.log("Shift y\n %c%s", "color: #9999ff", shifty);
        this.options.dev && console.log("Shift h\n %c%s", "color: #9999ff", shifth);
    }

    show() {
        let sameOrigin = document.body.classList.contains("is-same-origin");
        if (this.mediaQuery && !this.mediaQuery.matches && !sameOrigin) {
            this.appear(true);
        } else {
            this.appear();
        }
    }

    appear(animated) {
        if (animated) {
            let timing = 30;
            setTimeout(() => {
                this.rays
                    .slice()
                    .reverse()
                    .forEach((r, idx) => {
                        setTimeout(() => {
                            r.classList.remove("is-hidden");
                        }, timing * idx);
                    });
            }, 1200);
        } else {
            this.rays.forEach((r) => {
                r.classList.remove("is-hidden");
                r.classList.add("fast-show");
            });
        }
    }

    setupControls() {
        this.controlsContainer = document.querySelector(`[data-rays-controls="${this.options.type}"]`);
        if (this.options.dev) {
            this.controlsContainer.classList.add("dev");
            this.controls = [];
            for (const [p, props] of Object.entries(this.params)) {
                if (props.range != undefined || props.hasNumInput) {
                    this.item = Rays.createEl("div", { classList: p });
                    this.controls.push(this.item);
                    this.item.append(
                        Rays.createEl("span", {
                            textContent: p,
                            classList: "xx-small",
                        })
                    );
                    if (props.hasNumInput) {
                        this.item.append(
                            Rays.createEl("input", {
                                type: "number",
                                id: `rays-control-${p}`,
                                classList: "control number-control number-control-" + p,
                                value: props.value,
                                onkeydown: this.numberControlChanged.bind(this),
                                onchange: this.numberControlChanged.bind(this),
                                step: props.rangeStep,
                            })
                        );
                    } else if (props.range != undefined) {
                        this.item.append(
                            Rays.createEl("output", {
                                id: `rays-control-${p}`,
                                classList: "control control-out control-out-" + p,
                                value: props.value,
                            })
                        );
                    }
                    this.item.append(Rays.createEl("br"));
                    if (props.range != undefined) {
                        this.item.append(
                            Rays.createEl("input", {
                                type: "range",
                                id: `rays-control-${p}`,
                                classList: "control range-control range-control-" + p,
                                min: props.range[0],
                                max: props.range[1],
                                value: props.value,
                                oninput: this.rangeControlChanged.bind(this),
                                onchange: this.rangeControlChanged.bind(this),
                                step: props.rangeStep || 1,
                            })
                        );
                    }
                }
            }
            this.controlsContainer.append(...this.controls);
        }
    }

    numberControlChanged(e) {
        let param = e.target.id.replace("rays-control-", "");
        this.params[param].value = parseFloat(e.target.value);
        e.target.nextSibling.nextSibling.value = e.target.value;
        this.controlChanged(param);
    }

    rangeControlChanged(e) {
        let param = e.target.id.replace("rays-control-", "");
        this.params[param].value = parseFloat(e.target.value);
        e.target.previousSibling.previousSibling.value = e.target.value;
        this.controlChanged(param);
    }

    controlChanged(param) {
        if (param == "amt") this.updateRays();
        if (param == "seed") this.changeSeed();
        this.createNoiseBase();
        this.update();
    }

    static createEl(el, attrs) {
        let s = document.createElement(el);
        if (attrs)
            for (const [attr, value] of Object.entries(attrs)) {
                s[attr] = value;
            }
        return s;
    }

    static defaults() {
        return {
            // seed
            seed: {
                value: 123,
                range: [0, 1000],
                rangeStep: 1,
                hasNumInput: true,
            },
            // rays amount
            amt: {
                value: 20,
                range: [0, 100],
                rangeStep: 1,
                hasNumInput: true,
            },
            // width
            w: {
                base: 275,
                value: 275, // set to null to disable
                range: [0, 512],
                rangeStep: 1,
                ratio: 2.16,
                hasNumInput: true,
            },
            // distance between rays
            spread: {
                base: 1,
                value: -70,
                range: [-100, 100],
                rangeStep: 0.1,
                hasNumInput: true,
            },
            // horizontal shift
            x: {
                base: undefined,
                value: 44,
                range: [0, 1000],
                rangeStep: 0.1,
                smoothness: 1,
                hasNumInput: true,
            },
            // vertical shift
            y: {
                base: undefined,
                value: 5,
                range: [0, 100],
                rangeStep: 0.1,
                smoothness: 1,
                hasNumInput: true,
            },
            // height shift
            h: {
                base: undefined,
                value: 0.08,
                range: [-1, 1],
                rangeStep: 0.01,
                smoothness: 1,
                hasNumInput: true,
            },
            // hue range in
            hue_in: {
                value: 42, // set to null to disable
                range: [0, 360],
                rangeStep: 0.1,
                hasNumInput: true,
            },
            // horizontal offset
            x_offset: {
                value: 0,
                range: [0, 100],
                rangeStep: 0.01,
                hasNumInput: true,
            },
            // vertical offset
            y_offset: {
                value: 1000,
                range: [1000, 1100],
                rangeStep: 0.01,
                hasNumInput: true,
            },
            // height offset
            h_offset: {
                value: 2000,
                range: [2000, 2100],
                rangeStep: 0.01,
                hasNumInput: true,
            },
            // hue range out
            hue_out: {
                value: 84, // set to null to disable
                range: [0, 360],
                rangeStep: 0.1,
                hasNumInput: true,
            },
            // parallax reactivity
            parallax: {
                value: 0,
                range: [-1, 1],
                rangeStep: 0.01,
                hasNumInput: true,
            },
            // parallax offset
            parallax_offset: {
                value: 0,
                range: [0, this.scrollHeight()],
                rangeStep: 1,
                hasNumInput: true,
            },
        };
    }

    static scrollHeight() {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
    }
}
