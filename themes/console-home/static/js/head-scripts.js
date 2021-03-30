let getTheme = () => {
    let theme = localStorage.getItem("theme");
    if (!theme) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) theme = "dark";
        if (window.matchMedia("(prefers-color-scheme: light)").matches) theme = "light";
    }
    return theme;
};

let toggleTheme = () => {
    let theme = getTheme();
    let newTheme = theme == "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    let stylesheet = document.getElementById("theme-style");
    stylesheet.href = stylesheet.href.replace(theme, newTheme);
};

document.write('<link id="theme-style" rel="stylesheet" type="text/css" href="/css/style-' + getTheme() + '.css" />');
