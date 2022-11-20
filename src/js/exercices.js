let navElement = null;
let selectedItem = null;
let draggedElement = null;
let rawAllOptions;
let mooveX, mooveY;
let id = 0;
fetch('../../res/exerciceOptions.json')
    .then((res) => res.json())
    .then((json) => rawAllOptions = json);

const draggables = document.getElementsByClassName("elements");
const preview = document.getElementById('preview');
const optionAside = document.getElementById('options');
const jsonOutput = document.getElementById('jsonOutput');
const title = document.getElementById('title-exo');
const page = {
    title: "Title Here",
    elements: Array(),
    height: "5cm",
    idCategorie: "1"
};


title.addEventListener('input', (ev) => {
    page.title = title.value;
    jsonOutput.setAttribute('value', JSON.stringify(page));
})
document.getElementsByTagName('body')[0].addEventListener('keydown' , (ev) => {
    if (ev.key === "Backspace" && selectedItem != null) {
        let id = selectedItem.getAttribute('value');
        page.elements = page.elements.filter((el) => {
            return id != el.id;
        })
        preview.removeChild(selectedItem);
        selectedItem = null;
    }

})
preview.addEventListener("mousedown", (ev) => {
    if (ev.target !== preview) {
        mooveX = ev.offsetX;
        mooveY = ev.offsetY;
        draggedElement = ev.target;
        draggedElement.classList.add('preview-elements-moving');
    }
})
preview.addEventListener("mousemove", (ev) => {
    if (draggedElement != null) {
        let elementHeight = parseFloat(window.getComputedStyle(draggedElement, null).getPropertyValue('height').split('px')[0]);
        let elementWidth = parseFloat(window.getComputedStyle(draggedElement, null).getPropertyValue('width').split('px')[0]);
        const bound = preview.getBoundingClientRect();
        const relativeMousePositions = getRelativePositionsMouse(bound, ev);
        let mousePosRelativelyToPreviewX = relativeMousePositions.posX - mooveX;
        let mousePosRelativelyToPreviewY = relativeMousePositions.posY - mooveY;

        if ((mousePosRelativelyToPreviewY > 0 && mousePosRelativelyToPreviewX > 0)
            && (mousePosRelativelyToPreviewY + elementHeight < bound.height && mousePosRelativelyToPreviewX + elementWidth < bound.width)) {
            draggedElement.style.top = 0.0264583333 * mousePosRelativelyToPreviewY + 'cm';
            draggedElement.style.left = 0.0264583333 *mousePosRelativelyToPreviewX + 'cm';
            updateObject(ev.target);
        }
    }
})
preview.addEventListener('click', (ev) => {
    clearOptionAside();
    if (ev.composedPath()[0] !== preview) {
        selectedItem = ev.composedPath()[0];
        displayOptions(selectedItem);
    } else {
        if (navElement != null) {
            let element;
            if (navElement === 'p' || navElement === 'h1') {
                element = document.createElement(navElement);
                element.innerHTML = ('TITRE');
            } else if (navElement === 'img') {
                element = createImage();
            }
            element.setAttribute('value', id);
            element.style.position = 'absolute';

            element.style.left =  0.0264583333 * ev.offsetX.toString() + 'cm';
            element.style.top = 0.0264583333 * ev.offsetY.toString() + 'cm';

            preview.append(element);
            displayOptions(element);
            updateObject(element);
            id++;
        }
    }
})
preview.addEventListener("mouseup", () => {
    if (draggedElement != null) {
        draggedElement.classList.remove('preview-elements-moving');
        draggedElement = null;
    }
})

for (let draggable of draggables) {
    draggable.addEventListener('click', (ev) => {
        navElement = ev.target.getAttribute('value');
    })
}

function createImage() {
    const img = document.createElement("div");
    img.classList.add('img-input');
    return img;
}


function clearOptionAside() {
    for (let i = 0; i < optionAside.children.length; i++) {
        optionAside.removeChild(optionAside.children[i]);
    }
}

function displayOptions(element) {
    let parameters = getOptions(element.tagName);
    if (parameters !== undefined) {
        let keys = Object.keys(parameters);
        for (let i = 1; i < keys.length; i++) {
            let options = createOptions(parameters[keys[i]], element, keys[i]);
            optionAside.appendChild(options);
        }
    }
}

function getOptions(tagName) {
    let key = Object.keys(rawAllOptions).find(el => {
        return el.toLowerCase() === tagName.toLowerCase();
    })
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
        const filteredActual = (3 / 4) * parseFloat(rawActual.slice(0, rawActual.indexOf('p')));
        element.style.setProperty(styleName, filteredActual + 'pt');

        inputSlider.type = "range";
        inputSlider.min = min;
        inputSlider.max = max;
        inputSlider.value = filteredActual;
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
        let objectToUpdate = page.elements.find((el) => {
            return el.id === elementId;
        })
        if (objectToUpdate === undefined) {

            const type = element.tagName;
            page.elements.push({
                "id": elementId,
                "type": type,
                "properties": {}
            })
            objectToUpdate = page.elements[page.elements.length - 1];
        }
        let index = 1;
        let currentStyle = element.style[index]
        while (currentStyle !== undefined) {
            objectToUpdate.properties[element.style[index]] = element.style[element.style[index]]
            index++;
            currentStyle = element.style[index];
        }
        jsonOutput.setAttribute('value', JSON.stringify(page))
    }
}