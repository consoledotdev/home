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
    let logoEl = document.getElementById("logo-wrapper");
    if (document.referrer.indexOf(location.host) < 0) {
        logoEl.classList.add("is-animated");
    } else {
        logoEl.classList.add("is-static");
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
