let navItem = null;
let selectedItem = null;
let draggedElement = null;
let posMouseDraggedElement;
let rawAllOptions;
let moveX, moveY;
let id = 0;
const TOLERANCE_CONSTRUCTION = 10;
const draggables = document.getElementsByClassName("elements");
const preview = document.getElementById('preview');
const optionAside = document.getElementById('options');
const jsonOutput = document.getElementById('jsonOutput');
const title = document.getElementById('title-exo');
const allPossibleConstructionPos = [];
const page = {
    title: "Title Here",
    elements: Array(),
    height: "5cm",
    idCategorie: "1"
};
fetch('../../res/exerciseOptions.json')
    .then((res) => res.json())
    .then((json) => rawAllOptions = json);


title.addEventListener('input', () => {
    page.title = title.value;
    jsonOutput.setAttribute('value', JSON.stringify(page));
})
document.body.addEventListener('keydown', (ev) => {
    if (ev.key === "Delete" && selectedItem !== null) {
        let id = selectedItem.getAttribute('value');
        page.elements = page.elements.filter((el) => id !== el.id);
        allPossibleConstructionPos.splice(allPossibleConstructionPos.indexOf(allPossibleConstructionPos.find(el => el.id === id)), 1);
        preview.removeChild(selectedItem);
        selectedItem = null;
        clearOptionAside();
    }

})
preview.addEventListener("mousedown", (ev) => {
    if (ev.target !== preview) {
        moveX = ev.offsetX;
        moveY = ev.offsetY;
        draggedElement = ev.target;
        draggedElement.classList.add('preview-elements-moving');
        posMouseDraggedElement = getRelativePositionsMouse(draggedElement.getBoundingClientRect(), ev);
    }
})
preview.addEventListener("mousemove", (ev) => {
    if (draggedElement != null) {
        clearConstructionsLines();
        let elementHeight = parseFloat(window.getComputedStyle(draggedElement, null).getPropertyValue('height').replace('px', ''));
        let elementWidth = parseFloat(window.getComputedStyle(draggedElement, null).getPropertyValue('width').replace('px', ''));
        const bound = preview.getBoundingClientRect();
        const relativeMousePositions = getRelativePositionsMouse(bound, ev);
        const alignedElements = elementIsAlignedWithAnotherElement(draggedElement);
        let mousePosRelativelyToPreviewX = relativeMousePositions.posX - moveX;
        let mousePosRelativelyToPreviewY = relativeMousePositions.posY - moveY;

        if (alignedElements.length !== 0) {
            const mousePose = getRelativePositionsMouse(draggedElement.getBoundingClientRect(), ev);
            const collidePoints = filterAlignedElements(alignedElements);
            const alreadyExistingConstructionLines = Array.from(document.querySelectorAll(".construction-line"));
            collidePoints.top.forEach(point => createConstructionLine(point, "top", alreadyExistingConstructionLines));
            collidePoints.left.forEach(point => createConstructionLine(point, "left", alreadyExistingConstructionLines));
            // can still move to the direction where the element don't collide
            if (collidePoints.left.length === 0 && displacementPossible(mousePosRelativelyToPreviewX, elementWidth, bound.width)) {
                draggedElement.style.left = convertPxToCm(mousePosRelativelyToPreviewX) + 'cm';
            } else if (collidePoints.top.length === 0 && displacementPossible(mousePosRelativelyToPreviewY, elementHeight, bound.height)) {
                draggedElement.style.top = convertPxToCm(mousePosRelativelyToPreviewY) + 'cm';
            }
            if (Math.abs(mousePose.posX - posMouseDraggedElement.posX) >= TOLERANCE_CONSTRUCTION && displacementPossible(mousePosRelativelyToPreviewX, elementWidth, bound.width)) {
                draggedElement.style.left = convertPxToCm(mousePosRelativelyToPreviewX) + 'cm';
            } else if (Math.abs(mousePose.posY - posMouseDraggedElement.posY) >= TOLERANCE_CONSTRUCTION && displacementPossible(mousePosRelativelyToPreviewY, elementHeight, bound.height)) {
                draggedElement.style.top = convertPxToCm(mousePosRelativelyToPreviewY) + 'cm';
            }

            updateObject(draggedElement);
        } else if (displacementPossible(mousePosRelativelyToPreviewX, elementWidth, bound.width) && displacementPossible(mousePosRelativelyToPreviewY, elementHeight, bound.height)) {
            draggedElement.style.top = convertPxToCm(mousePosRelativelyToPreviewY) + 'cm';
            draggedElement.style.left = convertPxToCm(mousePosRelativelyToPreviewX) + 'cm';
            updateObject(draggedElement);
        }
    }
})
preview.addEventListener("mouseup", () => {
    if (draggedElement != null) {
        setTimeout(() => {
            draggedElement.classList.remove('preview-elements-moving');
            draggedElement = null;
        }, 50);
        posMouseDraggedElement = null;
        clearConstructionsLines();
    }
})

preview.addEventListener('click', (ev) => {
    clearOptionAside();
    clearIdSelectedItem(selectedItem)
    let navElement = navItem !== null ? navItem.getAttribute('value') : null;
    if (ev.composedPath()[0] !== preview) {
        selectedItem = ev.composedPath()[0];
        displayOptions(selectedItem);
    } else if (draggedElement === null) {
        if (navElement != null) {
            let element;
            if (navElement === 'p' || navElement === 'h1') {
                element = document.createElement(navElement);
                element.innerHTML = ('TITRE');
            } else if (navElement === 'img') {
                element = createImage();
            }
            element.setAttribute('value', id);
            element.classList.add("p-abs");

            element.style.left = convertPxToCm(ev.offsetX) + 'cm';
            element.style.top = convertPxToCm(ev.offsetY) + 'cm';

            preview.append(element);
            displayOptions(element);
            updateObject(element);
            selectedItem = element;
            id++;
        }
    }
    if (selectedItem) {
        selectedItem.id = 'selected-item';
    }
})


for (let draggable of draggables) {
    draggable.addEventListener('click', (ev) => {
        if (navItem !== null) {
            navItem.id = '';
        }
        navItem = ev.target;
        navItem.id = 'selected-nav-item';
    })
}

function createImage() {
    const img = document.createElement("div");
    img.classList.add('img-input');
    return img;
}


function clearOptionAside() {
    let child = optionAside.lastElementChild;
    while (child) {
        optionAside.removeChild(child);
        child = optionAside.lastElementChild;
    }
}

function clearPreview() {
    let child = preview.lastElementChild;
    while (child) {
        preview.removeChild(child);
        child = preview.lastElementChild;
    }
}

function clearConstructionsLines() {
    const lines = document.querySelectorAll('.construction-line');
    lines.forEach(el => preview.removeChild(el));
}

function displayOptions(element) {
    let parameters = getOptions(element.tagName);
    if (parameters !== undefined) {
        let keys = Object.keys(parameters);
        createTypeSpecificOptions(element, parameters.type);
        for (let i = 1; i < keys.length; i++) {
            let options = createOptions(parameters[keys[i]], element, keys[i]);
            optionAside.appendChild(options);
        }
    }
}

function createTypeSpecificOptions(element, type) {
    const container = document.createElement('div');
    const label = document.createElement('label');

    container.classList.add('option-container');
    label.classList.add('option-label');

    if (type === "text") {
        label.textContent = "Contenu du texte"
        let inputField = document.createElement("input");
        inputField.value = element.textContent;
        inputField.addEventListener("input", () => {
            element.textContent = inputField.value;
            updateObject(element);
        });
        container.append(label, inputField);
    }
    optionAside.append(container);
}

function getOptions(tagName) {
    let key = Object.keys(rawAllOptions).find(el => el.toLowerCase() === tagName.toLowerCase());
    return rawAllOptions[key];
}

function createOptions(parameters, element, styleName) {
    const container = document.createElement('div');
    const label = document.createElement('label');

    container.classList.add('option-container');
    label.classList.add('option-label');

    container.append(label);

    if (parameters.type === "slider") {

        label.textContent = styleName;
        const min = parameters.min;
        const max = parameters.max;
        const inputSlider = document.createElement('input');
        const rawActual = window.getComputedStyle(element, null).getPropertyValue(styleName);
        // converting px to pt
        const filteredActual = convertPxToPt(parseFloat(rawActual.slice(0, rawActual.indexOf('p'))));
        element.style.setProperty(styleName, filteredActual + 'pt');

        inputSlider.type = "range";
        inputSlider.min = min;
        inputSlider.max = max;
        inputSlider.value = filteredActual.toString();
        inputSlider.classList.add("slider");

        inputSlider.addEventListener('input', () => {
            element.style.setProperty(styleName, inputSlider.value + 'pt');
            updateObject(element)
        })
        container.append(inputSlider);
    }
    return container;
}


function getRelativePositionsMouse(bound, event) {
    return {
        "posX": (event.clientX - bound.left),
        "posY": (event.clientY - bound.top)
    };
}

function updateObject(element) {
    let elementId = element.getAttribute('value');
    if (typeof elementId === "string") {
        createOrReplaceConstructionLine(element, elementId);
        let objectToUpdate = page.elements.find((el) => el.id === elementId);
        if (objectToUpdate === undefined) {

            const type = element.tagName;
            page.elements.push({
                "id": elementId,
                "type": type,
                "content": "",
                "properties": {}
            })
            objectToUpdate = page.elements[page.elements.length - 1];
        }

        objectToUpdate.content = element.textContent;

        let index = 0;
        let currentStyle = element.style[index]
        while (currentStyle !== undefined) {
            objectToUpdate.properties[element.style[index]] = element.style[element.style[index]];
            index++;
            currentStyle = element.style[index];
        }
        jsonOutput.setAttribute('value', JSON.stringify(page));
    }
}

function clearIdSelectedItem(element) {
    if (element !== null) {
        element.id = '';
    }
}

function setExo(json) {
    clearTempScript();
    setPage(json);
}

function setPage(json) {
    clearPage();
    if (typeof json === "object") {
        updateA4(json);
        page.elements = json;
        id = Math.max(...page.elements.map(el => parseInt(el.id))) + 1;
        jsonOutput.setAttribute('value', JSON.stringify(page));
    }
}

function updateA4(json) {
    json.forEach(el => {
        let tag = document.createElement(el.type);
        let propertiesName = Object.keys(el.properties);
        tag.classList.add("p-abs");
        for (let i = 0; i < propertiesName.length; i++) {
            let property = propertiesName[i];
            tag.style[property] = el.properties[property];
        }

        tag.setAttribute("value", el.id);
        tag.textContent = el.content;
        preview.appendChild(tag);
    })
}

function clearTempScript() {
    let script = document.getElementById('temp-script');
    document.body.removeChild(script);
}

function clearPage() {
    page.title = "Title Here";
    page.elements = Array();
    page.height = "5cm";
    page.idCategorie = "1";
    id = 0;
    title.value = page.title;

    clearPreview();
    clearOptionAside();
}

function elementIsAlignedWithAnotherElement(element) {
    const elementRect = element.getBoundingClientRect();
    const topLeftObject1 = getTopLeftObject(element);
    const topLeftObject2 = getTopLeftObject(element, elementRect);
    const id = element.getAttribute("value");
    return allPossibleConstructionPos.filter(el => el.id !== id && ((isAligned(el.p1, topLeftObject1) || isAligned(el.p2, topLeftObject1))
        || (isAligned(el.p1, topLeftObject2) || isAligned(el.p2, topLeftObject2))));
}

function createOrReplaceConstructionLine(element, elementId) {
    const elementRect = element.getBoundingClientRect();
    let constructionLine = allPossibleConstructionPos.find(el => el.id === elementId);

    if (!constructionLine) {
        constructionLine = {
            "id": elementId,
        };
        allPossibleConstructionPos.push(constructionLine);
    }
    constructionLine.p1 = getTopLeftObject(element);
    constructionLine.p2 = getTopLeftObject(element, elementRect);

}

function isAligned(p1, p2) {
    return p1.top - p2.top === 0 || p1.left - p2.left === 0;
}

function getTopLeftObject(element, rect = {height: 0, width: 0}) {
    return {
        top: Math.round(element.offsetTop + rect.height),
        left: Math.round(element.offsetLeft + rect.width)
    };
}

function filterAlignedElements(alignedElements) {
    const points = {top: [], left: []};
    const pos1 = getTopLeftObject(draggedElement);
    const pos2 = getTopLeftObject(draggedElement, draggedElement.getBoundingClientRect());
    // getting all points aligned with the dragged element
    alignedElements.forEach(element => {
        addAlignedPoints(pos1, element.p1, points);
        addAlignedPoints(pos2, element.p1, points);
        addAlignedPoints(pos1, element.p2, points);
        addAlignedPoints(pos2, element.p2, points)
    })
    return points;
}

function addAlignedPoints(point1, point2, total) {
    if (isAligned(point1, point2)) {
        if (point1.top === point2.top && !total.top.includes(point1.top)) {
            total.top.push(point1.top);
        }
        if (point1.left === point2.left && !total.left.includes(point1.left)) {
            total.left.push(point1.left);
        }
    }
}

function createConstructionLine(position, side, lines) {
    if (!lines.some(line => line.style[side] === position + 'px')) {
        const constructionLine = document.createElement("div");
        constructionLine.classList.add("construction-line", side);
        constructionLine.style[side] = position + "px";
        preview.appendChild(constructionLine);
    }
}

function displacementPossible(futurePos, elementSize, parentSize) {
    return futurePos > 0 && futurePos + elementSize < parentSize
}

function convertPxToCm(number) {
    return (number * 2.54) / 96;
}

function convertPxToPt(number) {
    return (3 * number) / 4;
}