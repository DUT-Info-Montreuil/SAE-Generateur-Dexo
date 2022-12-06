const A4 = document.getElementById('A4-exo-iframe');
const exercice = document.getElementById('exercice-edit');
const categories = document.getElementsByClassName('object-categories');
let draggedElement = null;

waitAllCategories(categories);

A4.addEventListener("load", () => {
    const contentA4 = A4.contentDocument.getElementById("exercises");

    A4.contentDocument.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    A4.contentDocument.addEventListener('drop', (event) => {
        //changer la condition quand on aura des vrais éléments :')
        if (draggedElement !== null) {
            if (draggedElement.tagName !== 'IMG') {
                $.ajax({
                    type: "POST",
                    url: './ajax/get_exercise_content.php',
                    data: ({"id_exo": draggedElement.getAttribute('id-ex')})
                }).then(function (res) {
                    if (res === '-1' || res === ''){
                        popin("un problème est survenu, veuillez réessayer",false);
                    }else {
                        setupExerciseToEdit(res);
                        exercice.style.display = "block";
                    }
                });
            } else if (draggedElement.tagName === 'IMG') {
                event.preventDefault();
                let bound = contentA4.getBoundingClientRect();
                let img = document.createElement('IMG');

                img.setAttribute("src", "../" + draggedElement.getAttribute("src"));
                img.setAttribute("height", draggedElement.getAttribute("height"));
                img.setAttribute("width", draggedElement.getAttribute("width"));
                img.style.setProperty("position", "absolute");
                img.style.setProperty("left", (event.clientX - bound.left) + "px")
                img.style.setProperty("top", (event.clientY - bound.top) + "px")
                contentA4.append(img);
            }
        }
    });
});

exercice.addEventListener("load", () => {
    const cancel = exercice.contentDocument.getElementById('cancel-exercice');
    const send = exercice.contentDocument.getElementById('send-exercises');
    const data = exercice.contentDocument.getElementById('jsonOutput');


    cancel.addEventListener('click', () => {
        //TODO : clear preview
        exercice.style.display = "none";
    })

    send.addEventListener('click', () => {
        let exo = data.getAttribute('value');
        $.ajax({
            type: "POST",
            url: './ajax/send_exercice.php',
            data: ({"json": exo})
        }).then(function (re) {
            if (re !== ""){
                console.log(re);
            }else {
                //TODO : clear preview
                exercice.style.display = "none";
            }
        })
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

function setupExerciseToEdit(res){
    let tempScript = document.createElement("script");
    tempScript.id = 'temp-script';
    tempScript.textContent = "setExo("+ res +");";
    exercice.contentDocument.body.appendChild(tempScript);
}