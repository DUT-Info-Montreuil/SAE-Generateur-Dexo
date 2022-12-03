const settingsIframe = document.getElementById("settings-iframe");


function appendLink(doc, path) {
    let cssTheme = doc.createElement("link");
    cssTheme.rel = "stylesheet";
    cssTheme.id = "theme";
    cssTheme.href = path;

    doc.head.append(cssTheme);
}


function removeLink(doc) {
    const themeLink = doc.getElementById("theme");
    doc.head.removeChild(themeLink);
}


settingsIframe.addEventListener("load", () => {
    const radioWhiteTheme = settingsIframe.contentDocument.getElementById("white-theme");
    const radioBlackTheme = settingsIframe.contentDocument.getElementById("dark-theme");
    const A4Iframe = document.getElementById("A4-exo-iframe");
    const ExerciseIFrame = document.getElementById('exercice-edit');

    radioWhiteTheme.addEventListener("click", () => {
        const path = "./css/themes/white.css";

        removeLink(document);
        appendLink(document, path);
        removeLink(A4Iframe.contentDocument);
        appendLink(A4Iframe.contentDocument, '.' + path);
        removeLink(settingsIframe.contentDocument);
        appendLink(settingsIframe.contentDocument, '.' + path);
        removeLink(exercice.contentDocument);
        appendLink(exercice.contentDocument, '.' + path)
    });

    radioBlackTheme.addEventListener("click", () => {
        const path = "./css/themes/dark.css";

        removeLink(document);
        appendLink(document, path);
        removeLink(A4Iframe.contentDocument);
        appendLink(A4Iframe.contentDocument, '.' + path);
        removeLink(settingsIframe.contentDocument);
        appendLink(settingsIframe.contentDocument, '.' + path);
        removeLink(exercice.contentDocument);
        appendLink(exercice.contentDocument, '.' + path)

    });
});
