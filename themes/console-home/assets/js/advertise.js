let handlePodcastEmbedTheme = (() => {
    let setTheme = (e) => {
        let theme;
        if (e) theme = e.detail.theme;
        else theme = getTheme();
        let embedFrame = document.querySelector("[data-podcast-embed-frame]");
        let embed = document.querySelector("[data-podcast-embed]");
        embed.remove();
        if (theme.name == "dark") {
            embed.src = embed.src.replace("dark=false", "dark=true");
            embed.src = embed.src.replace("color=F1F2F6", "color=0A0A0B");
        } else {
            embed.src = embed.src.replace("dark=true", "dark=false");
            embed.src = embed.src.replace("color=0A0A0B", "color=F1F2F6");
        }
        embedFrame.append(embed);
    };
    document.body.addEventListener("themeChange", setTheme, false);
    setTheme();
})();

// document.addEventListener("DOMContentLoaded", (event) => {
//     let levelPackageIntros = (() => {
//         let setSize = () => {
//             let paragraphs = document.querySelectorAll("[data-package-intro]");
//             let heights = [];
//             paragraphs.forEach((p) => {
//                 p.style.height = null;
//                 heights.push(p.getBoundingClientRect().height);
//             });
//             paragraphs.forEach((p) => {
//                 if (heights[0] >= heights[1]) p.style.height = heights[0] + "px";
//                 else p.style.height = heights[1] + "px";
//             });
//         };
//         setSize();
//         window.addEventListener("resize", setSize);
//         const resizeObserver = new ResizeObserver((entries) => {
//             setTimeout(() => {
//                 setSize();
//             }, 100);
//         });
//         resizeObserver.observe(document.body);
//     })();

//     let resizeNeonPlanes = (() => {
//         let setSize = () => {
//             let planesWrappers = document.querySelectorAll("[data-neon-planes-wrapper]");
//             planesWrappers.forEach((pW) => {
//                 let parent = pW.parentElement;
//                 let resizeRatio;

//                 if (pW.dataset.packages != undefined) {
//                     if (window.innerWidth < 840) {
//                         resizeRatio = (parent.offsetHeight * 0.9) / pW.offsetHeight;
//                         pW.style.transform = "translate(-50%, -50%) scale(" + resizeRatio + ")";
//                     } else {
//                         pW.style.transform = null;
//                     }
//                 }
//             });
//         };
//         setSize();
//         window.addEventListener("resize", setSize);
//         const resizeObserver = new ResizeObserver((entries) => {
//             setTimeout(() => {
//                 setSize();
//             }, 100);
//         });
//         resizeObserver.observe(document.body);
//     })();
// });

let handleScrollAppearance = (() => {
    let handleIntersect = (intersections) => {
        intersections.forEach(function (i) {
            if ("checkpointSite" in i.target.dataset) {
                if (i.isIntersecting || (!i.isIntersecting && i.boundingClientRect.top < 0)) {
                    document.body.classList.add("checkpoint-site");
                }
                if (!i.isIntersecting) {
                    if (i.boundingClientRect.top > 0) document.body.classList.remove("checkpoint-site");
                }
            }

            if ("checkpointPodcast" in i.target.dataset) {
                if (i.isIntersecting || (!i.isIntersecting && i.boundingClientRect.top < 0)) {
                    document.body.classList.add("checkpoint-podcast");
                }
                if (!i.isIntersecting) {
                    if (i.boundingClientRect.top > 0) document.body.classList.remove("checkpoint-podcast");
                }
            }

            if ("checkpointWorkWithUs" in i.target.dataset) {
                if (i.isIntersecting || (!i.isIntersecting && i.boundingClientRect.top < 0)) {
                    document.body.classList.add("checkpoint-work-with-us");
                }
                if (!i.isIntersecting) {
                    if (i.boundingClientRect.top > 0) document.body.classList.remove("checkpoint-work-with-us");
                }
            }

            if ("checkpointSponsoredPackage" in i.target.dataset) {
                if (i.isIntersecting || (!i.isIntersecting && i.boundingClientRect.top < 0)) {
                    document.body.classList.add("checkpoint-sponsored-package");
                }
                if (!i.isIntersecting) {
                    if (i.boundingClientRect.top > 0) document.body.classList.remove("checkpoint-sponsored-package");
                }
            }

            if ("checkpointCampaigns" in i.target.dataset) {
                if (i.isIntersecting || (!i.isIntersecting && i.boundingClientRect.top < 0)) {
                    document.body.classList.add("checkpoint-campaigns");
                }
                if (!i.isIntersecting) {
                    if (i.boundingClientRect.top > 0) document.body.classList.remove("checkpoint-campaigns");
                }
            }

            if ("checkpointContact" in i.target.dataset) {
                if (i.isIntersecting || (!i.isIntersecting && i.boundingClientRect.top < 0)) {
                    document.body.classList.add("checkpoint-contact");
                }
                if (!i.isIntersecting) {
                    if (i.boundingClientRect.top > 0) document.body.classList.remove("checkpoint-contact");
                }
            }

            if ("checkpointNeonPlanes" in i.target.dataset) {
                if (i.isIntersecting || (!i.isIntersecting && i.boundingClientRect.top < 0)) {
                    document.body.classList.add("checkpoint-neon-planes");
                }
                if (!i.isIntersecting) {
                    if (i.boundingClientRect.top > 0) document.body.classList.remove("checkpoint-neon-planes");
                }
            }
        });
    };

    let observed1 = ["data-checkpoint-site", "data-checkpoint-campaigns", "data-checkpoint-contact"].map((str) => {
        return document.querySelector("[" + str + "]");
    });

    let observer1 = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: "0px",
        threshold: 0,
    });

    observed1.forEach((el) => {
        observer1.observe(el);
    });

    let observed2 = ["data-checkpoint-podcast", "data-checkpoint-neon-planes", "data-checkpoint-work-with-us"].map((str) => {
        return document.querySelector("[" + str + "]");
    });

    let observer2 = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: "0% 0% -40%",
        threshold: 0,
    });

    observed2.forEach((el) => {
        observer2.observe(el);
    });

    let onScrollEnd = () => {
        observed1.forEach((el) => {
            observer1.unobserve(el);
            observer1.observe(el);
        });
        observed2.forEach((el) => {
            observer2.unobserve(el);
            observer2.observe(el);
        });
    };

    var isScrolling;
    window.addEventListener(
        "scroll",
        () => {
            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(() => {
                onScrollEnd();
            }, 50);
        },
        false
    );
})();

class FadeOutGrid {
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

document.addEventListener("DOMContentLoaded", (e) => {
    let logoGridDark = new FadeOutGrid("[data-logo-cloud].dark");
    let logoGridLight = new FadeOutGrid("[data-logo-cloud].light");
});
