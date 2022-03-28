let computeTOCPos = (() => {
    let style = {};
    let reachedBottom = false;
    let compute = function () {
        let lastBlock = document.querySelector("#wrapper-10");
        let handleIntersect = (intersections) => {
            intersections.forEach(function (i) {
                if (i.isIntersecting) {
                    reachedBottom = true;
                }
                if (!i.isIntersecting) {
                    let rootTop = i.rootBounds.top;
                    let elTop = i.boundingClientRect.top;
                    if (rootTop < elTop) {
                        reachedBottom = false;
                    }
                }
            });
        };
        let observer = new IntersectionObserver(handleIntersect, {
            root: null,
            rootMargin: "0% 0% -95%",
            threshold: 0,
        });
        observer.observe(lastBlock);

        let aside = document.querySelector("[data-aside]");
        let TOC = document.querySelector("[data-toc]");
        let midPoint = parseInt(window.innerHeight / 2);
        let asidePos = aside.getBoundingClientRect().top;
        let TOCHeightHalf = parseInt(TOC.offsetHeight / 2);
        let diff = asidePos - midPoint + TOCHeightHalf;

        if (diff < 0) {
            style.position = "fixed";
            style.top = midPoint - TOCHeightHalf + "px";
            if (reachedBottom || lastBlock.getBoundingClientRect().top < 0) {
                let pos = midPoint - TOCHeightHalf + lastBlock.getBoundingClientRect().top;
                style.top = pos + "px";
            }
        } else {
            style.position = null;
            style.top = null;
        }

        TOC.style.position = style.position;
        TOC.style.top = style.top;
    };
    compute();
    window.addEventListener("scroll", compute);
    window.addEventListener("resize", compute);
})();

let createObserver = (() => {
    let toggleTOCLink = (enable, id) => {
        let link = document.querySelector('[data-toc-link][data-toc-wrapper="' + id + '"]');
        if (link) {
            if (enable) {
                let activeLink = document.querySelector("[data-toc-link].is-active");
                if (activeLink) activeLink.classList.remove("is-active");
                link.classList.add("is-active");
            } else {
                link.classList.remove("is-active");
            }
        }
    };

    let handleIntersect = (intersections) => {
        intersections.forEach(function (i) {
            if (i.isIntersecting) {
                // console.log("enter item " + i.target.id);
                toggleTOCLink(true, i.target.id);
            }
            if (!i.isIntersecting) {
                let rootTop = i.rootBounds.top;
                let elTop = i.boundingClientRect.top;
                if (rootTop > elTop) {
                    // console.log("past item " + i.target.id);
                    toggleTOCLink(false, i.target.id);
                }
                if (rootTop < elTop) {
                    // console.log("before item " + i.target.id);
                    toggleTOCLink(false, i.target.id);
                }
            }
        });
    };

    let observerOptions = {
        root: null,
        rootMargin: "-60% 0% -40%",
        threshold: 0,
    };

    let observer = new IntersectionObserver(handleIntersect, observerOptions);

    let headers = document.querySelectorAll("[id].nav-wrapper");
    headers.forEach(function (el) {
        observer.observe(el);
    });
})();

class TOC {
    constructor(selector) {
        this.bindThisFunctions();
        this.bind();

        this.el = document.querySelector(selector);
        this.indicator = this.el.querySelector("[data-toc-indicator]");
        this.scrollTrack = this.el.querySelector("[data-scroll-track]");
        this.scrollWrapper = document.querySelector("[data-scroll-wrapper]");
    }

    bind() {
        document.addEventListener("scroll", this.adjustIndicator);
        document.addEventListener("resize", this.adjustIndicator);
    }

    bindThisFunctions() {
        this.adjustIndicator = this.adjustIndicator.bind(this);
    }

    adjustIndicator(e) {
        const trackHeight = this.scrollTrack.offsetHeight - this.indicator.offsetHeight;

        const contentHeight = this.scrollWrapper.offsetHeight;
        const visibleHeight = document.body.offsetHeight;
        const scrollableHeight = contentHeight - visibleHeight;
        const scrolledAbsolute = window.pageYOffset;
        const scrolledNormalized = scrolledAbsolute / scrollableHeight;

        const offset = scrolledNormalized * trackHeight;

        this.indicator.style.transform = "translateY(" + offset + "px)";
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    const toc = new TOC("[data-toc]");
});
