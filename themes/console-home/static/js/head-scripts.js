let getTheme = () => {
    let theme = localStorage.getItem("theme");
    if (!theme) {
        theme = "dark";
        // Ignore user OS theme prefs for initial release
        // if (window.matchMedia("(prefers-color-scheme: dark)").matches) theme = "dark";
        // if (window.matchMedia("(prefers-color-scheme: light)").matches) theme = "light";
    }
    let preloaded = document.querySelector("[data-theme-style-" + theme + "]");
    return {
        name: theme,
        url: preloaded.href,
    };
};

let toggleTheme = () => {
    let theme = getTheme();
    let newTheme = theme.name == "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    let stylesheet = document.querySelector("[data-theme-style]");
    stylesheet.href = theme.url.replace(theme.name, newTheme);
    const themeChangeEvent = new CustomEvent("themeChange", { detail: { theme: newTheme } });
    document.body.dispatchEvent(themeChangeEvent);
};

document.write('<link rel="stylesheet" href="' + getTheme().url + '" data-theme-style />');
