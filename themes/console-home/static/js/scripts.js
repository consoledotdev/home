let toggleMenuPopup = (e) => {
    let el = document.getElementById("menu-toggle");
    if (el.classList.contains("is-active")) {
        el.classList.remove("is-active");
    } else {
        el.classList.add("is-active");
    }

    var p = "menu-popup";
    var pState = "is-visible";
    var pEl = document.getElementById(p);
    if (pEl.classList.contains(pState)) {
        pEl.classList.remove(pState);
        pEl.style.pointerEvents = "none";
    } else {
        pEl.classList.add(pState);
        pEl.style.pointerEvents = "all";
    }
};

let bindTooltips = (() => {
    let handles = document.querySelectorAll("[data-tooltip-handle]");

    let keepInView = (tooltip, handle, reset) => {
        if (reset) {
            tooltip.style.width = null;
            tooltip.style.left = 0;
        } else {
            let offset = handle.getBoundingClientRect();
            let rect = tooltip.getBoundingClientRect();
            let w = rect.width;
            let vW = window.innerWidth || document.documentElement.clientWidth;
            if (vW * 0.9 < 320) {
                w = vW * 0.9;
                tooltip.style.width = w + "px";
                rect = tooltip.getBoundingClientRect();
            } else {
                w = 320;
                tooltip.style.width = w + "px";
            }
            let r = offset.x + w;
            let rMove = r - vW > 0 ? r - vW : 0;
            if (rMove) tooltip.style.left = (rMove + vW * 0.05) * -1 + "px";
        }
    };

    handles.forEach((handle) => {
        let parent = handle.parentNode;
        let tooltip = parent.querySelector("[data-tooltip]");
        let handleHover = false;
        let tooltipHover = false;

        let checkVisible = (handleHover, tooltipHover) => {
            if (handleHover || tooltipHover) {
                if (!tooltip.classList.contains("is-visible")) {
                    keepInView(tooltip, handle);
                    tooltip.classList.add("is-visible");
                }
            } else if (!handleHover && !tooltipHover) {
                if (tooltip.classList.contains("is-visible")) {
                    tooltip.classList.remove("is-visible");
                    keepInView(tooltip, handle, true);
                }
            }
        };

        handle.addEventListener("mouseenter", (e) => {
            handleHover = true;
            checkVisible(handleHover, tooltipHover);
        });
        handle.addEventListener("mouseleave", (e) => {
            handleHover = false;
            checkVisible(handleHover, tooltipHover);
        });

        tooltip.addEventListener("mouseenter", (e) => {
            tooltipHover = true;
            checkVisible(handleHover, tooltipHover);
        });
        tooltip.addEventListener("mouseleave", (e) => {
            tooltipHover = false;
            checkVisible(handleHover, tooltipHover);
        });
    });
})();

let animateLogo = (() => {
    let body = document.querySelector("body");
    if (document.referrer.indexOf(location.host) < 0) {
        body.classList.remove("is-same-origin");
    } else {
        body.classList.add("is-same-origin");
    }
})();

let manageHeaderFixing = (() => {
    let setHeader = function () {
        if (window.scrollY > 60) {
            document.body.classList.add("is-scrolled");
        } else {
            document.body.classList.remove("is-scrolled");
        }
    };
    setHeader();
    document.addEventListener("scroll", setHeader);
})();

let manageContentHeight = (() => {
    let scrollWrapper = document.querySelector("[data-scroll-wrapper]");
    let contentWrapper = document.querySelector("[data-content-wrapper]");
    let setContent = function () {
        scrollWrapper.classList.remove("full-height");
        if (contentWrapper.offsetHeight < scrollWrapper.offsetHeight) {
            scrollWrapper.classList.add("full-height");
        }
    };
    setContent();
    window.addEventListener("resize", setContent);
})();

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add("mobile");
}

let toggleCollapsible = (e) => {
    let parent = e.currentTarget.parentNode;
    if (parent.classList.contains("is-expanded")) {
        parent.classList.remove("is-expanded");
    } else {
        parent.classList.add("is-expanded");
    }
};

if (document.body.classList.contains("page-home")) {
    let animateDynamicPlanes = (() => {
        let i1, i2, i3, i4, i5, i6;
        let animate = () => {
            let columns = document.querySelectorAll("[data-dynamic-planes-column]");
            let animateColumn = (n) => {
                let classes = ["triad-01", "triad-02", "triad-03"];
                let col = columns[n];
                let items = col.querySelectorAll("[data-dynamic-planes-item]");
                let visibleItems = [];
                items.forEach((item) => {
                    let idle = true;
                    if (item.classList.contains("selected")) {
                        idle = false;
                        item.classList.remove("selected");
                    }
                    if (idle) {
                        let rect = item.getBoundingClientRect();
                        // let visible = rect.x > 0 && rect.y > 0 && rect.x + rect.width < window.innerWidth && rect.y + rect.height < window.innerHeight;
                        let visible = rect.x > 0 && rect.x < window.innerWidth && rect.y > 0 && rect.y + rect.height < window.innerHeight;
                        if (visible) visibleItems.push(item);
                    }
                });
                if (visibleItems.length > 0) {
                    let rand = Math.floor(Math.random() * visibleItems.length);
                    let selectedItem = visibleItems[rand];
                    selectedItem.classList.add("selected");
                }
            };
            i1 = setInterval(() => {
                animateColumn(0);
            }, 5000);
            i2 = setInterval(() => {
                animateColumn(1);
            }, 8000);
            i3 = setInterval(() => {
                animateColumn(2);
            }, 6000);
            i4 = setInterval(() => {
                animateColumn(3);
            }, 7000);
            i5 = setInterval(() => {
                animateColumn(4);
            }, 4000);
            i6 = setInterval(() => {
                animateColumn(5);
            }, 6500);
        };
        let stopAnimation = () => {
            clearInterval(i1);
            clearInterval(i2);
            clearInterval(i3);
            clearInterval(i4);
            clearInterval(i5);
            clearInterval(i6);
        };

        let mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (mediaQuery) {
            if (!mediaQuery.matches) animate();

            mediaQuery.addEventListener("change", () => {
                mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
                if (!mediaQuery.matches) animate();
                else stopAnimation();
            });
        }
    })();
}

document.addEventListener("DOMContentLoaded", (event) => {
    let markedScrollableH = document.querySelector("[data-marked-scrollable-h]");
    let markedScrollableV = document.querySelector("[data-marked-scrollable-v]");
    markedScrollableH?.addEventListener("scroll", () => {
        updateMarkedScrollable(markedScrollableH, "h");
    });
    markedScrollableV?.addEventListener("scroll", () => {
        updateMarkedScrollable(markedScrollableV, "v");
    });
    document.addEventListener("scroll", () => {
        if (markedScrollableH) updateMarkedScrollable(markedScrollableH, "h");
        if (markedScrollableV) updateMarkedScrollable(markedScrollableV, "v");
    });
});

let updateMarkedScrollable = (el, direction) => {
    let trajectory, measure;
    if (direction == "v") {
        trajectory = "Top";
        measure = "Height";
    }
    if (direction == "h") {
        trajectory = "Left";
        measure = "Width";
    }

    if (el["scroll" + trajectory] > 0) {
        el.classList.add("is-scrolled");
    } else {
        el.classList.remove("is-scrolled");
    }

    let scrolled = el["offset" + measure] + el["scroll" + trajectory];

    if (scrolled >= el["scroll" + measure]) {
        el.classList.add("is-fully-scrolled");
    } else {
        el.classList.remove("is-fully-scrolled");
    }
};
