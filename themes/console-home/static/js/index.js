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
            embed.src = embed.src.replace("color=e9eaef", "color=232327");
        } else {
            embed.src = embed.src.replace("dark=true", "dark=false");
            embed.src = embed.src.replace("color=232327", "color=e9eaef");
        }
        embedFrame.append(embed);
    };
    document.body.addEventListener("themeChange", setTheme, false);
    setTheme();
})();
