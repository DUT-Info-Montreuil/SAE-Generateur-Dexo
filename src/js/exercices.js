let selectedItem = null;
let draggedElement = null;
let rawAllOptions;
let mooveX, mooveY;
fetch('../res/exerciceOptions.json')
    .then((res) => res.json())
    .then((json) => rawAllOptions = json);

const draggables = document.getElementsByClassName("elements");
const preview = document.getElementById('preview');
const optionAside = document.getElementById('options');
const page = {
    title: "",
    elements: [],
    height: 300
};
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
        let elementHeight = window.getComputedStyle(draggedElement, null).getPropertyValue('height');
        let elementWidth = window.getComputedStyle(draggedElement, null).getPropertyValue('width');
        let bounce = preview.getBoundingClientRect();
        let mousePosRelativelyToPreviewX = ev.clientX - bounce.left - mooveX;
        let mousePosRelativelyToPreviewY = ev.clientY - bounce.top - mooveY;
        if ((mousePosRelativelyToPreviewY > 0 && mousePosRelativelyToPreviewX > 0)
            && (mousePosRelativelyToPreviewY < bounce.height && mousePosRelativelyToPreviewX < bounce.width)) {
            draggedElement.style.top = mousePosRelativelyToPreviewY + 'px';
            draggedElement.style.left = mousePosRelativelyToPreviewX + 'px';
        }
    }
})
preview.addEventListener("mouseup", (ev) => {
    if (draggedElement != null) {
        draggedElement.classList.remove('preview-elements-moving');
        draggedElement = null;
    }
})

function createImage() {
    const img = document.createElement("div");
    img.classList.add('img-input');
    return img;
}

preview.addEventListener('click', (el) => {
    clearOptionAside();
    if (el.composedPath()[0] !== preview) {
        displayOptions(el.composedPath()[0]);
    } else {
        if (selectedItem != null) {
            let element;
            if (selectedItem === 'p' || selectedItem === 'h1') {
                element = document.createElement(selectedItem);
                element.innerHTML = ('TITRE');
            } else if (selectedItem === 'img') {
                element = createImage();
            }
            element.style.position = 'absolute';
            element.style.left = el.offsetX.toString() + 'px';
            element.style.top = el.offsetY.toString() + 'px';
            // addDraggable(element);
            preview.append(element);
            displayOptions(element);
        }
    }
})
for (let draggable of draggables) {
    draggable.addEventListener('click', (el) => {
        selectedItem = el.target.getAttribute('value');
    })
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
        const actual = window.getComputedStyle(element, null).getPropertyValue(styleName);
        element.style.setProperty(styleName, actual + 'px');

        inputSlider.type = "range";
        inputSlider.min = min;
        inputSlider.max = max;
        inputSlider.value = actual;
        inputSlider.classList.add("slider");

        inputSlider.addEventListener('input', (ev) => {
            element.style.setProperty(styleName, inputSlider.value + 'px');
        })
        container.append(inputSlider);
    }
    return container;
}
