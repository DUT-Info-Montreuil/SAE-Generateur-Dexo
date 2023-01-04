const settingsIframe = document.getElementById("settings-iframe");
settingsIframe.addEventListener("load", () => {
    const radioWhiteTheme = settingsIframe.contentDocument.getElementById("white-theme");
    const radioBlackTheme = settingsIframe.contentDocument.getElementById("dark-theme");
    const ExerciseIFrame = document.getElementById('exercice-edit');
    const initialLocalStorage = localStorage.getItem('theme');
    if (initialLocalStorage === null || (initialLocalStorage !== 'dark' && initialLocalStorage !== 'white')) {
        localStorage.setItem('theme','white');
    }
    setTheme(localStorage.getItem('theme'));
    initRadio(localStorage.getItem('theme'),radioBlackTheme,radioWhiteTheme);

    radioWhiteTheme.addEventListener("click", () => {
        setTheme("white");
    });

    radioBlackTheme.addEventListener("click", () => {
        setTheme("dark");
    });
});

function setTheme(theme) {
    localStorage.setItem('theme',theme);
    removeLink(document);
    appendLink(document, themes[theme]);
    removeLink(A4.contentDocument);
    appendLink(A4.contentDocument, '.' + themes[theme]);
    removeLink(settingsIframe.contentDocument);
    appendLink(settingsIframe.contentDocument, '.' + themes[theme]);
    removeLink(exercice.contentDocument);
    appendLink(exercice.contentDocument, '.' + themes[theme])
}

function appendLink(doc, path) {
    doc.head.append(Elements.createLink(doc, path, "theme"));
}

function removeLink(doc) {
    doc.head.removeChild(doc.getElementById("theme"));
}

function initRadio(theme,dark,white) {
    if (theme === 'white')
        white.checked = true;
    else
        dark.checked = true;
}