const A4 = document.getElementById('A4-exo-iframe');


function popin(text, isPermanent = true) {
    const div = document.getElementById("pop-in-info-div");
    const elem = document.createElement("div");
    const paragraph = document.createElement("p");


    paragraph.textContent = text;
    paragraph.style.textAlign = 'center';

    elem.appendChild(paragraph);
    div.insertBefore(elem, div.firstChild);
    elem.classList.add("pop-in-element");

    if (!isPermanent) {
        elem.classList.add("pop-in-dissapear")
        setTimeout(() => {
            div.removeChild(elem);
        }, 8000)
    }
}

function createImgElement(doc, src, id=null, classes=null, height, width, cssStyle= {}) {
    const img = doc.createElement("IMG");
    img.setAttribute("src", src);
    img.setAttribute("height", height);
    img.setAttribute("width", width);
    if (id !== null)
        img.setAttribute("id", id)
    if (classes !== null)
        img.setAttribute("class", classes)
    if (cssStyle !== null)
        for (const key of Object.keys(cssStyle))
            img.style.setProperty(key, cssStyle[key])

    return img;
}