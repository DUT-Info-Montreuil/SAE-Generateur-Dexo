const settingsIframe = document.getElementById("settings-iframe");

function appendLink(path) {
    let cssTheme = document.createElement("link");
    cssTheme.rel = "stylesheet";
    cssTheme.id = "theme";
    cssTheme.href = path;

    document.head.append(cssTheme);
}


settingsIframe.addEventListener("load" ,() => {
    const radioWhiteTheme = settingsIframe.contentDocument.getElementById("white-theme");
    const radioBlackTheme = settingsIframe.contentDocument.getElementById("dark-theme");

    radioWhiteTheme.addEventListener("click", () => {
        const themeLink = document.getElementById("theme");
        document.head.removeChild(themeLink);

        appendLink("./css/themes/white.css");
    });

    radioBlackTheme.addEventListener("click", () => {
        const themeLink = document.getElementById("theme");
        document.head.removeChild(themeLink);

        appendLink("./css/themes/dark.css");
    });
});
