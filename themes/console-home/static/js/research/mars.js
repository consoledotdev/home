document.addEventListener("DOMContentLoaded", (event) => {
    let DTNTable = document.querySelector("[data-dtn-table]");
    DTNTable.addEventListener("scroll", updateDTNTable);
});

let updateDTNTable = (e) => {
    if (e.currentTarget.scrollLeft > 0) {
        e.currentTarget.classList.add("is-scrolled");
    } else {
        e.currentTarget.classList.remove("is-scrolled");
    }

    let scrolled = e.currentTarget.offsetWidth + e.currentTarget.scrollLeft;

    if (scrolled >= e.currentTarget.scrollWidth) {
        e.currentTarget.classList.add("is-fully-scrolled");
    } else {
        e.currentTarget.classList.remove("is-fully-scrolled");
    }
};

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
            if (reachedBottom) {
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
        if (id) {
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
                // console.log("enter item");
                toggleTOCLink(true, i.target.id);
            }
            if (!i.isIntersecting) {
                let rootTop = i.rootBounds.top;
                let elTop = i.boundingClientRect.top;
                if (rootTop > elTop) {
                    // console.log("past item");
                    toggleTOCLink(false, i.target.id);
                }
                if (rootTop < elTop) {
                    // console.log("before item");
                    toggleTOCLink(false, i.target.id);
                }
            }
        });
    };

    let observerOptions = {
        root: null,
        rootMargin: "-20% 0% -40%",
        threshold: 0,
    };

    let observer = new IntersectionObserver(handleIntersect, observerOptions);

    let headers = document.querySelectorAll("[id].nav-wrapper");
    headers.forEach(function (el) {
        observer.observe(el);
    });
})();
