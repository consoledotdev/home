document.addEventListener("DOMContentLoaded", (event) => {
    /* manage audio player style on resize */
    let playerEl = document.querySelector("[data-podcast-widget] .podcast-widget");
    let setPlayerStyle = function () {
        if (window.innerWidth >= 769) {
            playerEl.classList.remove("links-footer");
            playerEl.classList.remove("art-header");
            playerEl.classList.add("links-body");
            playerEl.classList.add("art-body");
        } else if (window.innerWidth >= 541) {
            playerEl.classList.remove("links-body");
            playerEl.classList.remove("art-header");
            playerEl.classList.add("links-footer");
            playerEl.classList.add("hide-header");
            playerEl.classList.add("art-body");
        } else {
            playerEl.classList.add("links-footer");
            playerEl.classList.add("art-header");
            playerEl.classList.remove("links-body");
            playerEl.classList.remove("hide-header");
            playerEl.classList.remove("art-body");
        }
    };
    setPlayerStyle();
    window.addEventListener("resize", setPlayerStyle);
});
