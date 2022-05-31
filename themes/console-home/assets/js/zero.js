function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

class HorizonLines {
    constructor(el) {
        this.bindFuncs();
        this.el = el;
        this.linesAmt = this.el.dataset.horizonLines;
        this.lines = this.generateLines();
        this.animateLines();
    }

    bindFuncs() {}

    generateLines() {
        let lines = [];
        for (let i = 0; i < this.linesAmt; i++) {
            let line = this.generateLine(i);
            this.el.append(line.div);
            lines.push(line);
            let ghostLine = this.generateLine(i, true);
            this.el.append(ghostLine.div);
            lines.push(ghostLine);
        }
        return lines;
    }

    generateLine(i, isGhost) {
        const div = document.createElement("div");
        div.classList.add("horizon-line");
        if (isGhost) div.classList.add("horizon-line-ghost");

        let line = {};
        line.ghost = isGhost || false;
        line.div = div;
        let size = (100 / this.linesAmt) * 0.7;

        if (!isGhost) {
            line.height = size;
            line.scale = 1 - (1 / this.linesAmt) * i;
        } else {
            line.height = size * (1 - (1 / this.linesAmt) * i) * 0.75;
            line.scale = 1;
        }

        this.setLine(line);

        return line;
    }

    setLine(line) {
        line.div.style.height = line.height + "%";
        line.div.style.transform = "scaleY(" + line.scale + ")";
    }

    animateLines() {
        let toAnimate = this.lines.filter((l) => l.ghost == false);
        toAnimate.forEach((line, idx) => {
            let move = { scale: line.scale, translate: 0 };
            let scaleEnd = 0;
            if (idx < toAnimate.length - 1) scaleEnd = toAnimate[idx + 1].scale;
            const tween = new TWEEN.Tween(move)
                .to({ scale: scaleEnd, translate: 100 }, 1000)
                .repeat(Infinity)
                .onUpdate(() => {
                    line.div.style.transform = "scaleY(" + move.scale + ") translateY(" + (move.translate * 2) / move.scale + "%)";
                })
                .start();
        });
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    let horizonLinesBlocks = [];
    document.querySelectorAll("[data-horizon-lines]").forEach((el) => {
        horizonLinesBlocks.push(new HorizonLines(el));
    });
});
