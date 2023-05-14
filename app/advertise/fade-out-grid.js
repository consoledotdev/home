export default class FadeOutGrid {
    constructor(selector) {
        this.wrapper = document.querySelector(selector);
        this.cells = this.wrapper.querySelectorAll(".grid-item");

        this.setup();
        this.bind();
    }

    getColsAmt() {
        let style = getComputedStyle(this.wrapper);
        let cols = style["grid-template-columns"].split(" ");
        let colsAmt = cols.length;
        return colsAmt;
    }

    setup() {
        let amt = this.getColsAmt();

        this.wrapper.dataset.gridCols = amt;
        this.gridCols = amt;

        this.styleCells();
    }

    styleCells() {
        this.cells.forEach((c, idx) => {
            let row = parseInt(idx / this.gridCols) + 1;
            c.dataset.inCol = row;
            c.style.height = `${66 - row * (0.6 * (this.gridCols * 1.3))}px`;
            c.style.opacity = `${1 - row * (0.015 * (this.gridCols * 1.3))}`;
        });
    }

    bind() {
        window.addEventListener("resize", this.setup.bind(this));
    }
}
