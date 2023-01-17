const exercice = document.getElementById('exercice-edit');
const categories = document.getElementsByClassName('object-categories');
const newExoButton = document.getElementById('add-new-exo');

let heightUsedByExercises = 3.5;
let idExercise = 1;
let draggedElement = null;
let selectedExercise = undefined;
let replacingExercise = undefined;

const draggableElements = document.getElementsByClassName('draggable');
for (const draggableElement of draggableElements) {
    draggableElement.addEventListener('dragstart', (ev) => draggedElement = ev.target);
    draggableElement.addEventListener('dragend', () => draggedElement = null);
}
A4.addEventListener("load", () => {
    const contentA4 = A4.contentDocument.getElementById("exercises");

    A4.contentDocument.addEventListener("mousemove", followClickPointer);
    A4.contentDocument.addEventListener("dragover", (event) => event.preventDefault());
    A4.contentDocument.addEventListener("drop", (event) => {
        event.preventDefault();
        if (draggedElement !== null) {
            if (draggedElement.tagName !== Elements.IMG_TAG) {
                $.ajax({
                    type: "POST",
                    url: './ajax/get_exercise_content.php',
                    data: ({"id_exo": draggedElement.getAttribute("id-ex")})
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

                const src = draggedElement.getAttribute("src");
                const height = draggedElement.getAttribute("height");
                const width = draggedElement.getAttribute("width")
                let img = Elements.createImg(document, src, null, null, height, width, CSS.setPosition("absolute", (event.clientX - bound.left) + "px", (event.clientY - bound.top) + "px"));
                img.addEventListener("click", movableElementClickedEvent);

                const containerPopInInput = document.createElement("div");
                const containerInputX = document.createElement("div");
                const XText = document.createElement("p");
                XText.textContent = "width: ";
                containerInputX.appendChild(XText);
                let inputSizeElementWidth = Elements.createInput(document, "imput-size-width", null, "Enter new size");
                inputSizeElementWidth.style.setProperty("width", "65px");
                let inputSizeElementHeight = Elements.createInput(document, "imput-size-height", null, "Enter new size");
                inputSizeElementHeight.style.setProperty("width", "65px");

                containerInputX.appendChild(inputSizeElementWidth);
                containerPopInInput.appendChild(containerInputX);
                const containerInputY = document.createElement("div");
                const YText = document.createElement("p");
                YText.textContent = "height: ";
                containerInputY.appendChild(YText);
                containerInputY.appendChild(inputSizeElementHeight);
                containerPopInInput.appendChild(containerInputY);

                containerPopInInput.style.setProperty("position", "absolute");
                containerPopInInput.style.setProperty("left", img.style.left);
                containerPopInInput.style.setProperty("top", img.style.top);

                inputSizeElementWidth.addEventListener("input", (event) => img.width = event.target.value);
                inputSizeElementHeight.addEventListener("input", (event) => img.height = event.target.value);

                inputSizeElementWidth.addEventListener('keypress', (event) => {if (event.key === 'Enter') contentA4.removeChild(containerPopInInput);});
                inputSizeElementHeight.addEventListener('keypress', (event) => {if (event.key === 'Enter') contentA4.removeChild(containerPopInInput);});

                contentA4.append(img);
                contentA4.append(containerPopInInput);
            }
        }
    });
    A4.contentDocument.addEventListener("click", (ev) => {
        selectedExercise = ev.composedPath().find(el => {
            if (el.classList) {
                return el.classList.contains("global-container")
            }
            return false;
        });
    });
    A4.contentDocument.addEventListener("dblclick", (ev) => {
        replacingExercise = ev.composedPath().find(el => {
            if (el.classList) {
                return el.classList.contains("global-container")
            }
            return false;
        });
        if (replacingExercise !== undefined) {
            setupExerciseToEdit(replacingExercise.getAttribute("value"));
            exercice.style.display = "block";
        }
    })
    newExoButton.addEventListener('click', () => {
        setupExerciseToEdit('');
        exercice.style.display = "block";
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
        if (confirm("voulez-vous ajouter cet exercice au menu de selection d'exercices ?"))
            $.ajax({
                type: "POST",
                url: './ajax/send_exercice.php',
                data: ({"json": exo})
            }).then(function (re) {
                if (re === "") {
                    addExerciceToA4(exo)
                } else {
                    popin("une erreur est survenue, veuillez ressayer");
                }
            });
        else {
            addExerciceToA4(exo);
        }
    });
});

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
        number.textContent = idExercise.toString();
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
    Rcontainer.setAttribute("value", JSON.stringify(datas.elements));
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
        idExercise--;
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

function addExerciceToA4(exo) {
    if (replacingExercise !== undefined) {
        contentA4.insertBefore(getPreviewExercise(exo), replacingExercise);
        contentA4.removeChild(replacingExercise);
        replacingExercise = undefined;
        exercice.style.display = "none";
    } else {
        contentA4.append(getPreviewExercise(exo));
        exercice.style.display = "none";
    }
}