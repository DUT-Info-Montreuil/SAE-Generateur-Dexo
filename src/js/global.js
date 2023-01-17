const themes = {
    "white": "./css/themes/white.css",
    "dark": "./css/themes/dark.css"
};

const timePopInDisplayed = 8000;


class CSS {
    /**
     * @param type absolute, relative, fixed, ...
     * @return {{position, left, top}} return the json which concern the position of html tag in CSS
     */
    static setPosition(type, left, top) {
        return {"position": type, "left": left, "top": top};
    }

    static setProperties(tag, style) {
        for (const key of Object.keys(style)) tag.style.setProperty(key, style[key]);
    }
}

class Elements {
    static IMG_TAG = "IMG";
    static DIV_TAG = "DIV";
    static INPUT_TAG = "input";
    static PARAGRAPH_TAG = "p";
    static LINK_TAG = "link";

    static IMG_ID_ATTRIBUTE = "img-id";
    static EXERCISE_ID_ATTRIBUTE = "id-ex";

    
    static isExercises(elementDropped) { return elementDropped ? elementDropped.tagName === Elements.DIV_TAG && elementDropped.getAttribute("class").includes("categories") : false; }
    static isImages(elementDropped) { return elementDropped ? elementDropped.tagName === Elements.IMG_TAG : false; }

    static setIdAndClassesAttribute(tag, id=null, classes=null) {
        if (id !== null) tag.setAttribute("id", id);
        if (classes !== null) tag.setAttribute("class", classes);
    }

    /**
     * It allows to create an image
     *
     * @param doc contained in the window
     * @param src path or url of image
     * @param id id attribute of html tag
     * @param classes one class or several classes of html tag
     * @param height height of image
     * @param width width of image
     * @param style json type which contain {"css-attribute": "value"}
     * @returns {HTMLImageElement} return img HTML Element
     */
    static createImg(doc, src, id = null, classes = null, height, width, style = {}) {
        const img = doc.createElement(Elements.IMG_TAG);
        img.setAttribute("src", src);
        img.setAttribute("width", 50);
        Elements.setIdAndClassesAttribute(img, id, classes);
        CSS.setProperties(img, style);
        return img;
    }

    /**
     * It allows to create an input field
     *
     * @param doc contained in the window
     * @param id id attribute of html tag
     * @param classes one class or several classes of html tag
     * @param placeholder the text displayed into the input field
     * @param style json type which contain {"css-attribute": "value"}
     * @return {HTMLInputElement} return img HTML Element
     */
    static createInput(doc, id = null, classes = null, placeholder = null, style = {}) {
        const input = doc.createElement(Elements.INPUT_TAG);
        if (placeholder !== null) input.setAttribute("placeholder", placeholder);
        Elements.setIdAndClassesAttribute(input, id, classes);
        CSS.setProperties(input, style);
        return input;
    }

    /**
     * It allows to create a paragraph
     *
     * @param doc contained in the window
     * @param id id attribute of html tag
     * @param classes one class or several classes of html tag
     * @param text the text of paragraph will contain
     * @param style json type which contain {"css-attribute": "value"}
     * @return {HTMLParagraphElement} return a paragraph HTML Element
     */
    static createParagraph(doc, id=null, classes=null, text, style={}) {
        const p = doc.createElement(Elements.PARAGRAPH_TAG);
        p.textContent = text;
        Elements.setIdAndClassesAttribute(p, id, classes);
        CSS.setProperties(p, style);
        return p;
    }

    /**
     * It allows to create a link
     *
     * @param doc contained in the window
     * @param src path or url of css stylesheet
     * @param id id attribute of html tag
     * @param classes one class or several classes of html tag
     * @param rel by default: stylesheet
     * @return {HTMLLinkElement} return a link HTML Element
     */
    static createLink(doc, src, id=null, classes=null, rel="stylesheet") {
        const link = doc.createElement(Elements.LINK_TAG);
        Elements.setIdAndClassesAttribute(link, id, classes);
        link.setAttribute("href", src);
        link.setAttribute("rel", rel);
        return link;
    }
}


function popin(text, isPermanent = true) {
    const paragraph = Elements.createParagraph(document, null, null, text, {"text-align": "center"});
    const div = document.getElementById("pop-in-info-div");
    const elem = document.createElement("div");
    elem.appendChild(paragraph);
    div.insertBefore(elem, div.firstChild);

    elem.classList.add("pop-in-element");
    if (!isPermanent) {
        elem.classList.add("pop-in-dissapear");
        setTimeout(() => div.removeChild(elem), timePopInDisplayed);
    }
}