let navItem = null;
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


title.addEventListener('input', () => {
    page.title = title.value;
    jsonOutput.setAttribute('value', JSON.stringify(page));
})
document.body.addEventListener('keydown', (ev) => {
    if (ev.key === "Delete" && selectedItem != null) {
        let id = selectedItem.getAttribute('value');
        page.elements = page.elements.filter((el) => id !== el.id);
        preview.removeChild(selectedItem);
        selectedItem = null;
        clearOptionAside();
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
        let elementHeight = parseFloat(window.getComputedStyle(draggedElement, null).getPropertyValue('height').replace('px', ''));
        let elementWidth = parseFloat(window.getComputedStyle(draggedElement, null).getPropertyValue('width').replace('px', ''));
        const bound = preview.getBoundingClientRect();
        const relativeMousePositions = getRelativePositionsMouse(bound, ev);
        let mousePosRelativelyToPreviewX = relativeMousePositions.posX - mooveX;
        let mousePosRelativelyToPreviewY = relativeMousePositions.posY - mooveY;

        if ((mousePosRelativelyToPreviewY > 0 && mousePosRelativelyToPreviewX > 0)
            && (mousePosRelativelyToPreviewY + elementHeight < bound.height && mousePosRelativelyToPreviewX + elementWidth < bound.width)) {
            draggedElement.style.top = 0.0264583333 * mousePosRelativelyToPreviewY + 'cm';
            draggedElement.style.left = 0.0264583333 * mousePosRelativelyToPreviewX + 'cm';
            updateObject(ev.target);
        }
    }
})
preview.addEventListener('click', (ev) => {
    clearOptionAside();
    clearIdSelectedItem(selectedItem)
    let navElement = navItem !== null ? navItem.getAttribute('value') : null;
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

            element.style.left = 0.0264583333 * ev.offsetX.toString() + 'cm';
            element.style.top = 0.0264583333 * ev.offsetY.toString() + 'cm';

            preview.append(element);
            displayOptions(element);
            updateObject(element);
            selectedItem = element;
            id++;
        }
    }
    selectedItem.id = 'selected-item';
})
preview.addEventListener("mouseup", () => {
    if (draggedElement != null) {
        draggedElement.classList.remove('preview-elements-moving');
        draggedElement = null;
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


function displayOptions(element) {
    let parameters = getOptions(element.tagName);
    if (parameters !== undefined) {
        let keys = Object.keys(parameters);
        createTypeSpecificOptions(element,parameters.type);
        for (let i = 1; i < keys.length; i++) {
            let options = createOptions(parameters[keys[i]], element, keys[i]);
            optionAside.appendChild(options);
        }
    }
}
function createTypeSpecificOptions(element,type) {
    const container = document.createElement('div');
    const label = document.createElement('label');

    container.classList.add('option-container');
    label.classList.add('option-label');

    if (type === "text") {
        label.textContent = "Contenu du texte"
        let inputField = document.createElement("input");
        inputField.value = element.textContent;
        inputField.addEventListener("input", () => {
            element.textContent = inputField.value ;
            updateObject(element);
        });
        container.append(label,inputField);
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
        let objectToUpdate = page.elements.find((el) => el.id === elementId);
        if (objectToUpdate === undefined) {

            const type = element.tagName;
            page.elements.push({
                "id": elementId,
                "type": type,
                "content" : "",
                "properties": {}
            })
            objectToUpdate = page.elements[page.elements.length - 1];
        }

        objectToUpdate.content = element.textContent;

        // so it doesn't stock the redundant "position : absolute "
        let index = 1;
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
    if (element !== null){
    element.id = '';
    }
}

function setExo(json){
    clearTempScript();
    setPage(json);
}

function setPage(json){
    clearPage();
    if (typeof json === "object"){
        updateA4(json);
        page.elements = json;
        id = Math.max(...page.elements.map(el => parseInt(el.id))) + 1;
        jsonOutput.setAttribute('value', JSON.stringify(page));
    }
}

function updateA4(json) {
    json.forEach(el => {
        let tag = document.createElement(el.type);
        let properiesName = Object.keys(el.properties);
        tag.style.position = 'absolute';
        for (let i = 0; i < properiesName.length; i++) {
            let property = properiesName[i];
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
function clearPage(){
    page.title="Title Here";
    page.elements = Array();
    page.height = "5cm";
    page.idCategorie = "1";
    id = 0;
    title.value = page.title;
    // add clear categorie
    
    clearPreview();
    clearOptionAside();
}