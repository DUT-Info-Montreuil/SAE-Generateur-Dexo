let previousImage = document.createElement("img");

let firstDbClick = false;
let lastDbClick = false;


personalPicturesContainer.addEventListener("dblclick", (ev) => {
    const elTarget = ev.target;

    if (elTarget.tagName === Elements.IMG_TAG) {
        if (!firstDbClick)
            popin("Apres un double click sur la même image, l'image sera supprimé de votre compte !", false);

        if (previousImage.getAttribute(Elements.IMG_ID_ATTRIBUTE) !== elTarget.getAttribute(Elements.IMG_ID_ATTRIBUTE)) {
            firstDbClick = false;
            lastDbClick = false;
        } else {
            if (firstDbClick)
                lastDbClick = !lastDbClick;
            firstDbClick = !firstDbClick;

            if (firstDbClick && lastDbClick)
                popin(elTarget.getAttribute("alt") + " à étais supprimé.", false);
        }

        previousImage = elTarget;
    }
});
