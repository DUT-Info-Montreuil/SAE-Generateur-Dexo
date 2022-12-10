const A4 = document.getElementById('A4-exo-iframe');


class Elements {
    static IMG_TAG = "IMG";

    /**
     *
     * @param doc
     * @param src
     * @param id
     * @param classes
     * @param height
     * @param width
     * @param style
     * @returns {*}
     */
    static createImg(doc, src, id=null, classes=null, height, width, style= {}) {
        const img = doc.createElement(Elements.IMG_TAG);
        img.setAttribute("src", src);
        img.setAttribute("height", height);
        img.setAttribute("width", width);
        if (id !== null) img.setAttribute("id", id);
        if (classes !== null) img.setAttribute("class", classes);
        for (const key of Object.keys(style)) img.style.setProperty(key, style[key]);
        return img;
    }

    /**
     *
     * @param doc
     * @param id
     * @param classes
     * @param placeholder
     * @param style
     */
    static createInput(doc, id=null, classes=null, placeholder=null, style={}) {
        const input = document.createElement("input");
        if (id !== null) input.setAttribute("id", id);
        if (classes !== null) input.setAttribute("class", classes);
        if (placeholder !== null) input.setAttribute("placehorder", placeholder);
        for (const key of Object.keys(style)) input.style.setProperty(key, style[key]);
        return input;
    }
}

class CSS {
    static setPosition(type, left, top) {
        return {"position": type, "left": left, "top": top};
    }
}


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