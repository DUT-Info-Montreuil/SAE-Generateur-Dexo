const exercice = document.getElementById('exercice-edit');
const categories = document.getElementsByClassName('object-categories');
let heightUsedByExercises = 3.5;
let idExercise = 1;
let draggedElement = null;
let selectedExercise = undefined;
let replacingExercise = undefined;

waitAllCategories(categories);

A4.addEventListener("load", () => {
    const contentA4 = A4.contentDocument.getElementById("exercises");

    A4.contentDocument.addEventListener("mousemove", followClickPointer);
    A4.contentDocument.addEventListener("dragover", (event) => event.preventDefault());
    A4.contentDocument.addEventListener("drop", (event) => {
        // Changer la condition quand on aura des vrais éléments :')
        event.preventDefault();
        if (draggedElement !== null) {
            if (draggedElement.tagName !== Elements.IMG_TAG) {
                $.ajax({
                    type: "POST",
                    url: './ajax/get_exercise_content.php',
                    data: ({"id_exo": draggedElement.getAttribute('id-ex')})
                }).then(function (res) {
                    if (res === '-1' || res === '') {
                        popin("un problème est survenu, veuillez réessayer", false);
                    } else {
                        setupExerciseToEdit(res);
                        exercice.style.display = "block";
                    }
                });
            } else if (draggedElement.tagName === Elements.IMG_TAG) {
                const bound = contentA4.getBoundingClientRect();

                const src = "../" + draggedElement.getAttribute("src");
                const height = draggedElement.getAttribute("height");
                const width = draggedElement.getAttribute("width")
                let img = Elements.createImg(document, src, null, null, height, width, CSS.setPosition("absolute", (event.clientX - bound.left) + "px", (event.clientY - bound.top) + "px"));
                img.addEventListener("click", movableElementClickedEvent);
                let inputSizeElement = Elements.createInput(document, "imput-size", null, "Enter new size", CSS.setPosition("absolute", img.style.left, img.style.top));

                inputSizeElement.addEventListener("input", (event) => {
                    img.height = event.target.value;
                    img.width = event.target.value;
                });

                inputSizeElement.addEventListener('keypress', (event) => {
                    if (event.key === 'Enter')
                        contentA4.removeChild(inputSizeElement);
                });

                contentA4.append(img);
                contentA4.append(inputSizeElement);
            }
        }
    });
    A4.contentDocument.addEventListener("click", (ev) => {
        selectedExercise = ev.composedPath().find(el => {
            if (el.classList){
                return el.classList.contains("global-container")
            } return false;
        });
    });
    A4.contentDocument.addEventListener("dblclick", (ev) => {
        replacingExercise = ev.composedPath().find(el => {
            if (el.classList){
                return el.classList.contains("global-container")
            } return false;
        });
        if (replacingExercise !== undefined) {
            setupExerciseToEdit(replacingExercise.getAttribute("value"));
            exercice.style.display = "block";
        }
    })
    A4.contentDocument.addEventListener("keydown", removeExercise)
    document.addEventListener("keydown", removeExercise)
});

exercice.addEventListener("load", () => {
    const cancel = exercice.contentDocument.getElementById('cancel-exercice');
    const send = exercice.contentDocument.getElementById('send-exercises');
    const data = exercice.contentDocument.getElementById('jsonOutput');


    cancel.addEventListener('click', () => exercice.style.display = "none");

    send.addEventListener('click', () => {
        let exo = data.getAttribute('value');
        $.ajax({
            type: "POST",
            url: './ajax/send_exercice.php',
            data: ({"json": exo})
        }).then(function (re) {
            if (re === "") {
                if (replacingExercise !== undefined) {
                    contentA4.insertBefore(getPreviewExercise(exo),replacingExercise);
                    contentA4.removeChild(replacingExercise);
                    replacingExercise = undefined;
                    exercice.style.display = "none";
                }else {
                    contentA4.append(getPreviewExercise(exo));
                    exercice.style.display = "none";
                }
            }
        });
    });
});

async function waitAllCategories(categories) {
    // if categories of images will be set to objects, add it here
    await waitAllLoad(categories);

    let draggableOutsideObject = document.getElementsByClassName('draggable');

    for (let category of categories) {
        for (let draggableElement of category.contentDocument.getElementsByClassName('draggable')) {
            draggableElement.addEventListener('dragstart', (ev) => draggedElement = ev.target);
            draggableElement.addEventListener('dragend', (ev) => draggedElement = null);
        }
    }

    for (let draggableOutsideObjectKey of draggableOutsideObject) {
        draggableOutsideObjectKey.addEventListener('dragstart', (ev) => draggedElement = ev.target);
        draggableOutsideObjectKey.addEventListener('dragend', (ev) => draggedElement = null);
    }
}

async function waitAllLoad(elements) {
    let size = elements.length;
    let test = Array(size).fill(false);

    for (let i = 0; i < size; i++) {
        elements[i].addEventListener('load', () => test[i] = true);
    }

    return await until(() => test.every(el => el === true))
}

function until(conditionFunction) {

    const res = resolve => {
        if (conditionFunction()) resolve();
        else setTimeout(() => res(resolve), 50);
    }

    return new Promise(res);
}

function setupExerciseToEdit(res) {
    let tempScript = document.createElement("script");
    tempScript.id = 'temp-script';
    tempScript.textContent = "setExo(" + res + ");";
    exercice.contentDocument.body.appendChild(tempScript);
}

function getPreviewExercise(json) {
    let container = document.createElement("div");
    let Rcontainer = document.createElement("div");
    let idExoContainer = document.createElement("div");
    let number = document.createElement("p");

    let datas = JSON.parse(json);

    if (replacingExercise === undefined) {
        number.textContent = idExercise;
        idExercise++;
    } else {
        number.textContent = replacingExercise.firstChild.firstChild.textContent;
    }
    number.classList.add("id-exercise")

    idExoContainer.append(number);
    idExoContainer.classList.add("id-exercise-container");

    Rcontainer.style.height = datas.height;
    Rcontainer.classList.add("global-container")

    container.classList.add("exercise-container");

    Rcontainer.append(idExoContainer, container);
    heightUsedByExercises += parseInt(datas.height.split('cm'));

    addElements(container, datas.elements);
    Rcontainer.setAttribute("value",JSON.stringify(datas.elements));
    return Rcontainer;
}

function addElements(container, elements) {

    elements.forEach(el => {
        let tag = document.createElement(el.type);
        let properiesName = Object.keys(el.properties);
        for (let i = 0; i < properiesName.length; i++) {
            let property = properiesName[i];
            tag.style[property] = el.properties[property];
        }
        tag.classList.add("p-abs");
        tag.textContent = el.content;
        container.appendChild(tag);
    })
}

function removeExercise(event) {
    if (selectedExercise !== undefined && event.key === "Delete") {
        contentA4.removeChild(selectedExercise);
        idExercise --;
        resetIdExercises();
    }
}

function resetIdExercises() {
    let id = 1;
    contentA4.querySelectorAll(".id-exercise-container").forEach(el => {
        el.firstChild.textContent = id.toString();
        id++;
    });
}