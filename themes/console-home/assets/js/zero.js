let easeInCubic = (x) => {
    return x * x * x;
};

class HorizonLines {
    constructor(el) {
        this.bindFuncs();
        this.el = el;
        this.linesAmt = this.el.dataset.horizonLines;
        this.lines = this.generateLines();
    }

    bindFuncs() {}

    generateLines() {
        let lines = [];
        for (let i = 0; i < this.linesAmt; i++) {
            let line = this.generateLine(i);
            this.el.append(line.div);
            lines.push(line);
        }
        return lines;
    }

    generateLine(i) {
        const div = document.createElement("div");
        div.classList.add("horizon-line");

        let line = {};
        line.div = div;
        let maxHeight = 100 / this.linesAmt;
        line.height = maxHeight * 0.75;
        line.scale = 1 - (1 / this.linesAmt) * i; // adjust this for different scaling proportions
        line.margin = maxHeight * (1 - (1 / this.linesAmt) * i) * 0.2; // adjust this for different margin proportions

        this.setLine(line);

        return line;
    }

    setLine(line) {
        line.div.style.height = line.height + "%";
        line.div.style.transform = "scaleY(" + line.scale + ")";
        line.div.style.marginBottom = line.margin + "%";
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    let horizonLinesBlocks = [];
    document.querySelectorAll("[data-horizon-lines]").forEach((el) => {
        horizonLinesBlocks.push(new HorizonLines(el));
    });
    console.log(horizonLinesBlocks);
});
