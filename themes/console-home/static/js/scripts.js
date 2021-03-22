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

let toggleTheme = () => {
    let prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    let prefersLight = window.matchMedia("(prefers-color-scheme: light)");
    let localPref = localStorage.getItem("theme");

    if (localPref) {
        if (localPref == "dark") setTheme("light");
        else if (localPref == "light") setTheme("dark");
    } else {
        if (prefersDark.matches) setTheme("light");
        if (prefersLight.matches) setTheme("dark");
    }
};

let setTheme = (theme) => {
    let themedEls = document.getElementsByClassName("theme-user");
    for (el of themedEls) {
        el.classList.remove("theme-dark");
        el.classList.remove("theme-light");
        el.classList.add("theme-" + theme);
    }
    localStorage.setItem("theme", theme);
};

let initLocalThemePref = ((theme) => {
    let localPref = localStorage.getItem("theme");
    if (localPref) setTheme(localPref);
})();

let animateLogo = (() => {
    let logoEl = document.getElementById("logo-wrapper");
    if (document.referrer.indexOf(location.host) < 0) {
        logoEl.classList.add("is-animated");
    } else {
        logoEl.classList.add("is-static");
    }
})();

let watchScroll = (() => {
    let setScrolled = function () {
        if (window.scrollY > 60) {
            document.body.classList.add("is-scrolled");
        } else {
            document.body.classList.remove("is-scrolled");
        }
    };
    setScrolled();
    document.addEventListener("scroll", setScrolled);
})();
