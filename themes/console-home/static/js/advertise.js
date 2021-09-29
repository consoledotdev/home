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

let resizeNeonPlanes = (() => {
    let setSize = () => {
        let section = document.querySelector("[data-section-advertise-site]");
        let planesWrapper = section.querySelector("[data-neon-planes-wrapper]");
        let resizeRatio = (section.offsetHeight + 512) / planesWrapper.offsetHeight;
        planesWrapper.style.transform = "scale(" + resizeRatio + ")";
    };
    setSize();
    window.addEventListener("resize", setSize);
})();
