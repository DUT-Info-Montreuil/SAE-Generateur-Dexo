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
        removeLink(document);
        appendLink(document, themes["white"]);
        removeLink(A4.contentDocument);
        appendLink(A4.contentDocument, '.' + themes["white"]);
        removeLink(settingsIframe.contentDocument);
        appendLink(settingsIframe.contentDocument, '.' + themes["white"]);
        removeLink(exercice.contentDocument);
        appendLink(exercice.contentDocument, '.' + themes["white"])
    });

    radioBlackTheme.addEventListener("click", () => {
        removeLink(document);
        appendLink(document, themes["dark"]);
        removeLink(A4.contentDocument);
        appendLink(A4.contentDocument, '.' + themes["dark"]);
        removeLink(settingsIframe.contentDocument);
        appendLink(settingsIframe.contentDocument, '.' + themes["dark"]);
        removeLink(exercice.contentDocument);
        appendLink(exercice.contentDocument, '.' + themes["dark"])
    });
});
