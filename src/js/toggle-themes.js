const settingsIframe = document.getElementById("settings-iframe");


function appendLink(doc, path) {
    doc.head.append(Elements.createLink(doc, path, "theme"));
}

function removeLink(doc) {
    doc.head.removeChild(doc.getElementById("theme"));
}


settingsIframe.addEventListener("load", () => {
    const radioWhiteTheme = settingsIframe.contentDocument.getElementById("white-theme");
    const radioBlackTheme = settingsIframe.contentDocument.getElementById("dark-theme");
    const ExerciseIFrame = document.getElementById('exercice-edit');

    radioWhiteTheme.addEventListener("click", () => {
        const path = "./css/themes/white.css";

        removeLink(document);
        appendLink(document, path);
        removeLink(A4.contentDocument);
        appendLink(A4.contentDocument, '.' + path);
        removeLink(settingsIframe.contentDocument);
        appendLink(settingsIframe.contentDocument, '.' + path);
        removeLink(exercice.contentDocument);
        appendLink(exercice.contentDocument, '.' + path)
    });

    radioBlackTheme.addEventListener("click", () => {
        const path = "./css/themes/dark.css";

        removeLink(document);
        appendLink(document, path);
        removeLink(A4.contentDocument);
        appendLink(A4.contentDocument, '.' + path);
        removeLink(settingsIframe.contentDocument);
        appendLink(settingsIframe.contentDocument, '.' + path);
        removeLink(exercice.contentDocument);
        appendLink(exercice.contentDocument, '.' + path)

    });
});
