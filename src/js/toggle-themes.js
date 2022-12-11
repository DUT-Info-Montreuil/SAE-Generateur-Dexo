function appendLink(doc, path) {
    doc.head.append(Elements.createLink(doc, path, "theme"));
}

function removeLink(doc) {
    doc.head.removeChild(doc.getElementById("theme"));
}


settings.addEventListener("load", () => {
    const radioWhiteTheme = settings.contentDocument.getElementById("white-theme");
    const radioBlackTheme = settings.contentDocument.getElementById("dark-theme");
    const ExerciseIFrame = document.getElementById('exercice-edit');

    radioWhiteTheme.addEventListener("click", () => {
        removeLink(document);
        appendLink(document, themes["white"]);
        removeLink(A4.contentDocument);
        appendLink(A4.contentDocument, '.' + themes["white"]);
        removeLink(settings.contentDocument);
        appendLink(settings.contentDocument, '.' + themes["white"]);
        removeLink(exercice.contentDocument);
        appendLink(exercice.contentDocument, '.' + themes["white"])
    });

    radioBlackTheme.addEventListener("click", () => {
        removeLink(document);
        appendLink(document, themes["dark"]);
        removeLink(A4.contentDocument);
        appendLink(A4.contentDocument, '.' + themes["dark"]);
        removeLink(settings.contentDocument);
        appendLink(settings.contentDocument, '.' + themes["dark"]);
        removeLink(exercice.contentDocument);
        appendLink(exercice.contentDocument, '.' + themes["dark"])
    });
});
