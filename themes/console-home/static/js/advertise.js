let handlePodcastEmbedTheme = (() => {
    let setTheme = (e) => {
        let theme;
        if (e) theme = e.detail.theme;
        else theme = getTheme();
        let embedFrame = document.querySelector("[data-podcast-embed-frame]");
        let embed = document.querySelector("[data-podcast-embed]");
        embed.remove();
        if (theme == "dark") {
            embed.src = embed.src.replace("dark=false", "dark=true");
            embed.src = embed.src.replace("color=F1F2F6", "color=0A0A0B");
        } else {
            embed.src = embed.src.replace("dark=true", "dark=false");
            embed.src = embed.src.replace("color=0A0A0B", "color=F1F2F6");
        }
        embedFrame.append(embed);
    };
    document.body.addEventListener("themeChange", setTheme, false);
    setTheme();
})();

document.addEventListener("DOMContentLoaded", (event) => {
    let resizeNeonPlanes = (() => {
        let setSize = () => {
            let planesWrappers = document.querySelectorAll("[data-neon-planes-wrapper]");
            planesWrappers.forEach((pW) => {
                let parent = pW.parentElement;
                let resizeRatio;
                if (pW.dataset.site != undefined) {
                    resizeRatio = (parent.offsetHeight + 512) / pW.offsetHeight;
                    pW.style.transform = "scale(" + resizeRatio + ")";
                }

                if (pW.dataset.packages != undefined) {
                    resizeRatio = (parent.offsetHeight * 0.94) / pW.offsetHeight;
                    pW.style.transform = "scale(" + resizeRatio + ")";
                }
            });
        };
        setSize();
        window.addEventListener("resize", setSize);
        const resizeObserver = new ResizeObserver((entries) => {
            setTimeout(() => {
                setSize();
            }, 100);
        });
        resizeObserver.observe(document.body);
    })();
});

})();
