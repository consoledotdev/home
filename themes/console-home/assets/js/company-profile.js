document.addEventListener("DOMContentLoaded", (event) => {
    /* manage aside content responsiveness */
    let asideWrappers = document.querySelectorAll("[data-aside-wrapper]");
    let setAsideVisibility = () => {
        asideWrappers.forEach((w) => {
            if (window.innerWidth >= 769) {
                w.classList.remove("is-hidden");
            } else {
                w.classList.add("is-hidden");
            }
        });
    };
    setAsideVisibility();
    window.addEventListener("resize", setAsideVisibility);

    /* manage aside info position */
    let contentSplits = document.querySelectorAll("[data-content-split]");
    let setPos = () => {
        contentSplits.forEach((split) => {
            let el = split.querySelector("[data-aside-content]");
            let asideWrapper = split.querySelector("[data-aside-content-wrapper]");
            let inlineWrapper = split.querySelector("[data-inline-aside-content-wrapper]");
            if (window.innerWidth >= 769) {
                if (inlineWrapper.classList.contains("appended")) {
                    asideWrapper.appendChild(el);
                    inlineWrapper.classList.add("is-hidden");
                    inlineWrapper.classList.remove("appended");
                }
            } else {
                if (!inlineWrapper.classList.contains("appended")) {
                    inlineWrapper.appendChild(el);
                    inlineWrapper.classList.remove("is-hidden");
                    inlineWrapper.classList.add("appended");
                }
            }
        });
    };
    setPos();
    window.addEventListener("resize", setPos);
});

let computeTOCPos = (() => {
    let style = {};
    let reachedBottom = false;
    let compute = function () {
        let lastBlock = document.querySelector("#wrapper-3");
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

        let aside = document.querySelector("[data-toc-anchor]");
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
