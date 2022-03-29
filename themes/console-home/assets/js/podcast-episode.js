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
            let el1 = split.querySelector("[data-aside-sub-content='host']");
            let el2 = split.querySelector("[data-aside-sub-content='episodes']");
            let asideContent = split.querySelector("[data-aside-content]");
            let inlineWrapper1 = split.querySelector(".notes [data-inline-aside-content-wrapper]");
            let inlineWrapper2 = split.querySelector(".more-episodes [data-inline-aside-content-wrapper]");
            if (window.innerWidth >= 769) {
                if (inlineWrapper1.classList.contains("appended")) {
                    asideContent.appendChild(el1);
                    asideContent.appendChild(el2);
                    inlineWrapper1.classList.add("is-hidden");
                    inlineWrapper1.classList.remove("appended");
                }
            } else {
                if (!inlineWrapper1.classList.contains("appended")) {
                    inlineWrapper1.appendChild(el1);
                    inlineWrapper1.classList.remove("is-hidden");
                    inlineWrapper1.classList.add("appended");
                    inlineWrapper2.appendChild(el2);
                    inlineWrapper2.classList.remove("is-hidden");
                    inlineWrapper2.classList.add("appended");
                }
            }
        });
    };
    setPos();
    window.addEventListener("resize", setPos);

    /* manage audio player fixing */
    let playerAnchor = document.querySelector("[data-podcast-widget-anchor]");
    let player = document.querySelector("[data-podcast-widget]");
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
    window.addEventListener("resize", setPlayer);

    /* manage clippings playback */
    let clippingPlayers = document.querySelectorAll("[data-play-at-time]");
    clippingPlayers.forEach((p) => {
        let playAtTime = (e) => {
            let time = e.currentTarget.dataset.playAtTime;
            e.currentTarget.blur();
            window.CNSL.players[0].public.playAtTime(time);
        };
        p.addEventListener("click", playAtTime);
    });
});
