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
