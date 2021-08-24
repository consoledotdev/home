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
    } else {
        pEl.classList.add(pState);
    }
};

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
