document.addEventListener("DOMContentLoaded", (event) => {
    let adjustSelectWidth = (() => {
        let adjust = (e, el) => {
            let s = e?.target || el;
            let selectedText = s.options[s.selectedIndex].text;
            var canvas = document.createElement("canvas");
            var context = canvas.getContext("2d");
            context.font = "16px Rubik";
            if (s.classList.contains("console-input-medium")) {
                context.font = "14px Rubik";
            }
            if (s.classList.contains("console-input-small")) {
                context.font = "13px Rubik";
            }
            var metrics = context.measureText(selectedText);
            var pad = parseInt(getComputedStyle(s).paddingLeft) + parseInt(getComputedStyle(s).paddingRight);
            s.style.width = pad + metrics.width + 8 + "px";
        };

        let selects = document.getElementsByClassName("console-select");
        for (let s of selects) {
            s.addEventListener("change", adjust);
            adjust(null, s);
        }
    })();
});

let manageFiltersPosition = (() => {
    let filtersEl = document.getElementById("betas-filters");
    let asideWrapper = document.getElementById("aside-filters-wrapper");
    let inlineWrapper = document.getElementById("inline-filters-wrapper");
    let setPos = () => {
        if (window.innerWidth >= 1025) {
            asideWrapper.classList.remove("is-hidden");
            asideWrapper.appendChild(filtersEl);
            filtersEl.classList.add("in-aside");
        } else {
            asideWrapper.classList.add("is-hidden");
            inlineWrapper.appendChild(filtersEl);
            filtersEl.classList.remove("in-aside");
        }
    };
    setPos();
    window.addEventListener("resize", setPos);
})();

let computeFixedFiltersPos = (() => {
    let style = {};
    let compute = function () {
        if (window.scrollY > 0) {
            style.position = "fixed";
            style.top = document.getElementById("betas-split").offsetTop - window.scrollY + "px";
            if (parseInt(style.top) < 128) style.top = "128px";
        } else {
            style.position = null;
            style.top = null;
        }

        let filtersEl = document.getElementById("betas-filters");
        if (filtersEl.classList.contains("in-aside")) {
            filtersEl.style.top = style.top;
            filtersEl.style.position = style.position;
        } else {
            filtersEl.style.top = null;
            filtersEl.style.position = null;
        }
    };
    compute();
    window.addEventListener("scroll", compute);
    window.addEventListener("resize", compute);
})();
