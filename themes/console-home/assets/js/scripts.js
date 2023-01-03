class Popup {
    constructor(wrapper) {
        this.bindThisMethods();
        this.wrapper = wrapper;
        this.el = wrapper.querySelector("[data-popup]");
        this.controls = document.querySelectorAll("[data-popup-toggle='" + this.el.dataset.popup + "']");
        this.controlsNoActive = document.querySelectorAll("[data-popup-toggle-noactive='" + this.el.dataset.popup + "']");
        this.visible = false;

        this.bind();
    }

    bind() {
        this.controls.forEach((c) => {
            c.addEventListener("mouseup", this.toggle);
        });
        this.controlsNoActive.forEach((c) => {
            c.addEventListener("mouseup", this.noActiveToggle);
        });

        document.addEventListener("click", this.checkClickOutside);
        document.addEventListener("keyup", this.handleKeypress);
    }

    handleKeypress(e) {
        if (e.key == "Escape" && this.visible) this.toggle();
    }

    toggle(e) {
        if (this.visible) {
            this.el.classList.remove("is-visible");
            setTimeout(() => {
                this.wrapper.classList.remove("is-visible");
            }, 300);
            this.controls.forEach((c) => {
                c.classList.remove("is-active");
            });
            this.wrapper.style.pointerEvents = "none";
            this.el.style.pointerEvents = "none";
        } else {
            this.el.classList.add("is-visible");
            this.wrapper.classList.add("is-visible");
            this.controls.forEach((c) => {
                c.classList.add("is-active");
            });
            this.wrapper.style.pointerEvents = "all";
            this.el.style.pointerEvents = "all";
        }
        this.visible = !this.visible;

        this.justChanged = true;
        setTimeout(() => {
            this.justChanged = false;
        }, 100);
    }

    noActiveToggle(e) {
        if (e.currentTarget.closest("[data-popup-wrapper]")) this.toggle();
    }

    checkClickOutside(e) {
        if (!this.justChanged) {
            const inside = this.el.contains(e.target);
            if (!inside && this.visible) this.toggle();
        }
    }

    bindThisMethods() {
        this.noActiveToggle = this.noActiveToggle.bind(this);
        this.toggle = this.toggle.bind(this);
        this.checkClickOutside = this.checkClickOutside.bind(this);
        this.handleKeypress = this.handleKeypress.bind(this);
    }
}

class ShowMoreNav {
    constructor(name) {
        this.bindThisMethods();

        this.areaWidth = document.querySelector("[data-show-more-nav-space-width='" + name + "']");
        this.el = document.querySelector("[data-show-more-nav='" + name + "']");
        this.siblings = document.querySelectorAll("[data-show-more-nav-sibling='" + name + "']");
        this.children = Array.prototype.slice.call(this.el.children);
        this.control = this.el.querySelector("[data-show-more-nav-control]");
        this.popupContainer = this.el.querySelector("[data-show-more-nav-popup-container]");

        this.bind();
        this.checkTruncation();
    }

    bind() {
        window.addEventListener("resize", this.checkTruncation);
    }

    isMobileNav() {
        return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 640;
    }

    checkTruncation(e) {
        if (this.isMobileNav()) this.W = undefined;
        else {
            this.el.style.opacity = 1;

            this.W = this.computeWidths();

            if (this.W) {
                // get control index to use as calculation limit
                let controlIdx = this.children.indexOf(this.control);

                // compute how many items can fit
                let maxFitIdx = -1;
                let initial = 64; // starts sum with a safety margin so that items don't fit tight
                this.W.items.reduce((previous, current, idx) => {
                    if (idx < controlIdx) {
                        let sum = previous + current;
                        if (previous < this.W.available) {
                            maxFitIdx = idx - 1;
                        }
                        if (sum < this.W.available) {
                            maxFitIdx = idx;
                        }
                        return sum;
                    }
                }, initial);

                // truncation control visibility
                if (maxFitIdx < this.children.length - 3) this.toggleControl();
                else this.toggleControl(false);

                // rearrange items
                this.children.forEach((c, i) => {
                    if (i < controlIdx) {
                        if (i <= maxFitIdx) {
                            this.el.insertBefore(c, this.control);
                        } else {
                            this.popupContainer.append(c);
                        }
                    }
                });
            }
        }
    }

    toggleControl(show = true) {
        if (show) {
            if (!this.control.classList.contains("is-visible")) this.control.classList.add("is-visible");
        } else {
            if (this.control.classList.contains("is-visible")) this.control.classList.remove("is-visible");
        }
    }

    computeWidths() {
        let w = undefined;
        if (this.areaWidth) {
            w = 0;
            w += this.areaWidth.clientWidth;
            let style = getComputedStyle(this.areaWidth);
            w -= parseInt(style.borderLeftWidth) || 0;
            w -= parseInt(style.borderRightWidth) || 0;
            w -= parseInt(style.paddingLeft) || 0;
            w -= parseInt(style.paddingRight) || 0;
            this.siblings.forEach((s) => {
                s.style.display = "initial";
                w -= s.clientWidth;
                s.style.display = null;
                let style = getComputedStyle(s);
                w -= parseInt(style.marginLeft) || 0;
                w -= parseInt(style.marginRight) || 0;
            });
        }

        let i = this.W?.items;
        if (!i) {
            i = [];
            this.children.forEach((c) => {
                c.style.position = "absolute";
                c.style.visibility = "hidden";
                c.style.display = "initial";
                document.body.prepend(c);

                i.push(c.clientWidth);

                c.style.position = null;
                c.style.visibility = null;
                c.style.display = null;
                this.el.append(c);
            });
        }

        return {
            available: w,
            items: i,
        };
    }

    bindThisMethods() {
        this.checkTruncation = this.checkTruncation.bind(this);
    }
}

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

let animateDynamicPlanes = (() => {
    if (document.body.classList.contains("page-home") && document.body.classList.contains("show-planes")) {
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

            if (mediaQuery.addEventListener) {
                mediaQuery.addEventListener("change", () => {
                    mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
                    if (!mediaQuery.matches) animate();
                    else stopAnimation();
                });
            } else {
                mediaQuery.addListener(() => {
                    mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
                    if (!mediaQuery.matches) animate();
                    else stopAnimation();
                });
            }
        }
    }
})();

document.addEventListener("DOMContentLoaded", (event) => {
    let markedScrollablesH = document.querySelectorAll("[data-marked-scrollable-h]");
    let markedScrollablesV = document.querySelectorAll("[data-marked-scrollable-v]");

    let updateScroller = (item, dir) => {
        item.addEventListener("scroll", () => {
            updateMarkedScrollable(item, dir);
        });
    };

    markedScrollablesH.forEach((item) => {
        updateMarkedScrollable(item, "h");
        updateScroller(item, "h");
    });
    markedScrollablesV.forEach((item) => {
        updateMarkedScrollable(item, "v");
        updateScroller(item, "v");
    });

    document.addEventListener("scroll", () => {
        markedScrollablesH.forEach((item) => {
            updateMarkedScrollable(item, "h");
        });
        markedScrollablesV.forEach((item) => {
            updateMarkedScrollable(item, "v");
        });
    });

    window.addEventListener("resize", () => {
        markedScrollablesH.forEach((item) => {
            updateMarkedScrollable(item, "h");
        });
        markedScrollablesV.forEach((item) => {
            updateMarkedScrollable(item, "v");
        });
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

    if (scrolled >= el["scroll" + measure] - 1) {
        el.classList.add("is-fully-scrolled");
    } else {
        el.classList.remove("is-fully-scrolled");
    }
};

class TableWithFixed {
    constructor(table) {
        this.table = table;
        this.pos = table.dataset.tableFixed;
        this.count = table.dataset.tableFixedCount;
        this.rows = table.querySelectorAll("[data-table-row]");
        this.bindEvents();
    }

    bindEvents() {
        this.table.addEventListener("scroll", this.updateFixedCells.bind(this));
        document.addEventListener("scroll", this.updateFixedCells.bind(this));
        window.addEventListener("resize", this.updateFixedCells.bind(this));
    }

    updateFixedCells() {
        this.rows.forEach((r) => {
            let cellOffset = 0;
            if (this.pos == "left") {
                for (let i = 0; i < this.count; i++) {
                    let cell = r.children.item(i);
                    cell.classList.add("fixed");
                    cell.classList.add("left");
                    if (i == this.count - 1) cell.classList.add("last");
                    if (i > 0) {
                        let prevCell = r.children.item(i - 1);
                        cellOffset += prevCell.offsetWidth;
                    }
                    cell.style.left = cellOffset - 1 + "px";
                }
            }
            if (this.pos == "right") {
                for (let i = r.children.length - 1; i >= r.children.length - this.count; i--) {
                    let cell = r.children.item(i);
                    cell.classList.add("fixed");
                    cell.classList.add("right");
                    if (i == r.children.length - this.count) cell.classList.add("last");
                    if (i < r.children.length - 1) {
                        let prevCell = r.children.item(i + 1);
                        cellOffset += prevCell.offsetWidth;
                    }
                    cell.style.right = cellOffset - 1 + "px";
                }
            }
        });
    }
}

class Modal {
    constructor(links) {
        this.modalTiming = 240; //ms, see CSS
        this.links = links;
        this.html = "<div class='modal-backdrop' data-modal-backdrop><div class='modal' data-modal></div></div>";
        let temp = document.createElement("div");
        temp.innerHTML = this.html;
        this.html = temp.firstChild;
        this.contentHook = this.html.querySelector("[data-modal]");

        this.bindLinks();
        this.bindClose();
    }

    bindLinks() {
        this.links.forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();

                this.setContent(link.dataset);
                this.prepForShow();

                setTimeout(() => {
                    this.show(link);
                }, 1);
            });
        });
    }

    setContent(dataset) {
        let content;
        if ((dataset.type = "screen")) {
            let img = document.createElement("img");
            img.src = dataset.modalTypeScreen;
            content = img;
        }

        this.contentHook.innerHTML = "";
        this.contentHook.appendChild(content);
        document.body.appendChild(this.html);
    }

    prepForShow() {
        if (this.contentHook.dataset.transition == undefined || this.contentHook.dataset.padding == undefined) {
            let style = window.getComputedStyle(this.contentHook);
            this.contentHook.dataset.transition = style.getPropertyValue("transition");
            this.contentHook.dataset.padding = style.getPropertyValue("padding");
        }

        this.contentHook.style.transition = "all 0s linear";
        this.contentHook.style.padding = "0px";
        this.contentHook.style.left = null;
        this.contentHook.style.top = null;
        this.contentHook.style.width = null;
    }

    show(link) {
        this.activeLink = link;
        let origin = link.getBoundingClientRect();

        let start = {
            x: origin.x + origin.width / 2,
            y: origin.y + origin.height / 2,
            w: origin.width,
        };
        let end = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            w: window.innerWidth * 0.9,
        };

        setTimeout(() => {
            this.contentHook.style.left = start.x + "px";
            this.contentHook.style.top = start.y + "px";
            this.contentHook.style.width = start.w + "px";

            setTimeout(() => {
                this.contentHook.style.transition = this.contentHook.dataset.transition;
                this.html.classList.add("is-visible");

                setTimeout(() => {
                    this.contentHook.style.left = end.x + "px";
                    this.contentHook.style.top = end.y + "px";
                    this.contentHook.style.width = end.w + "px";
                    this.contentHook.style.padding = this.contentHook.dataset.padding;
                }, this.modalTiming);
            }, 20);
        }, 80);
    }

    bindClose() {
        this.html.addEventListener("click", this.close.bind(this));
    }

    close() {
        let origin = this.activeLink.getBoundingClientRect();

        let end = {
            x: origin.x + origin.width / 2,
            y: origin.y + origin.height / 2,
            w: origin.width,
        };

        this.contentHook.style.left = end.x + "px";
        this.contentHook.style.top = end.y + "px";
        this.contentHook.style.width = end.w + "px";
        this.contentHook.style.padding = "0px";

        this.html.classList.remove("is-visible");

        setTimeout(() => {
            this.prepForShow();
            this.html.remove();
            this.contentHook.innerHTML = "";
            this.activeLink = undefined;
        }, this.modalTiming);
    }
}

class ComboBox {
    constructor(el) {
        this.el = el;
        this.threshold = el.dataset.verticalThreshold;

        this.checkThreshold = this.checkThreshold.bind(this);

        this.bind();
    }

    bind() {
        if (this.threshold) {
            window.addEventListener("resize", this.checkThreshold);
            this.checkThreshold();
        }
    }

    checkThreshold() {
        if (window.innerWidth <= this.threshold) {
            this.el.classList.add("is-vertical");
        } else {
            this.el.classList.remove("is-vertical");
        }
    }
}

class HelperClickables {
    constructor() {
        this.bindFuncs();

        this.onclickBlurs = document.querySelectorAll("[data-onclickblur]");
        this.onchangeBlurs = document.querySelectorAll("[data-onchangeblur]");
        this.bindBlur();
    }

    bindFuncs() {
        this.blur = this.blur.bind(this);
    }

    bindBlur() {
        this.onclickBlurs.forEach((el) => {
            el.addEventListener("click", this.blur);
        });
        this.onchangeBlurs.forEach((el) => {
            el.addEventListener("change", this.blur);
        });
    }

    blur(e) {
        e.currentTarget.blur();
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    let modalLinks = document.querySelectorAll("[data-modal-link]");
    if (modalLinks) new Modal(modalLinks);

    let tablesWithFixed = document.querySelectorAll("[data-table-fixed]");
    if (tablesWithFixed) {
        tablesWithFixed.forEach((t) => {
            new TableWithFixed(t);
        });
    }

    let comboBoxes = document.querySelectorAll("[data-combo-box]");
    if (comboBoxes) {
        comboBoxes.forEach((b) => {
            new ComboBox(b);
        });
    }

    let popups = document.querySelectorAll("[data-popup-wrapper]");
    popups.forEach((p) => {
        new Popup(p);
    });

    new ShowMoreNav("main-nav");

    new HelperClickables();
});
