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

    /* manage audio player fixing */
    let playerAnchor = document.querySelector("[data-podcast-embed-anchor]");
    let player = document.querySelector("[data-podcast-embed]");
    let setPlayer = function () {
        let playerHeight = player.getBoundingClientRect().height;
        playerAnchor.style.height = playerHeight + "px";
        let yPos = playerAnchor.getBoundingClientRect().top + window.scrollY - 104;
        if (window.scrollY > yPos) {
            document.body.classList.add("is-fixed-player");
        } else {
            document.body.classList.remove("is-fixed-player");
        }
    };
    setPlayer();
    document.addEventListener("scroll", setPlayer);
    document.addEventListener("resize", setPlayer);
});
