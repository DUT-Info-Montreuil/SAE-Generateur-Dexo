const A4 = document.getElementById('A4-exo-iframe');
const exercice = document.getElementById('exercice-edit');
const categories = document.getElementsByClassName('object-categories');
let draggedElement = null;

waitAllCategories(categories)

A4.addEventListener("load", () => {
    A4.contentDocument.addEventListener("dragover", (event) => {
        event.preventDefault();
        elementTargetExo = event.target;
        posXExo = event.layerX;
        posYExo = event.layerY;
    });
    A4.contentDocument.addEventListener('drop', () => {
        //changer la condition quand on aura des vrais éléments :')
        if (draggedElement !== null && draggedElement.tagName !== 'IMG'){
            exercice.style.display = "block";
        }
    });
});

exercice.addEventListener("load", () => {
    const cancel = exercice.contentDocument.getElementById('cancel-exercice');
    const send = exercice.contentDocument.getElementById('send-exercises');
    const data = exercice.contentDocument.getElementById('jsonOutput');


    cancel.addEventListener('click', () => {
        exercice.style.display = "none";
    })

    send.addEventListener('click', () => {
        let exo = data.getAttribute('value');
        $.ajax({
            type: "POST",
            url: './ajax/send_exercice.php',
            data: ({"json": exo})
        }).then(function (re) {
            console.log(re);
            exercice.style.display = "none";
        })
    });
});


async function waitAllCategories(categories) {
    // if categories of images will be set to objects, add it here
    await waitAllLoad(categories);
    console.log(categories[0].contentDocument);

    let draggableOutsideObject = document.getElementsByClassName('draggable');
    let draggableInsideCategories = [];

    for (let category of categories) {
        for (let draggableElement of category.contentDocument.getElementsByClassName('draggable')) {
            draggableElement.addEventListener('dragstart', (ev) => draggedElement = ev.target);
            draggableElement.addEventListener('dragend', (ev) => draggedElement = null);
        }
    }

    for (let draggableOutsideObjectKey of draggableOutsideObject){
        draggableOutsideObjectKey.addEventListener('dragstart', (ev) => draggedElement = ev.target);
        draggableOutsideObjectKey.addEventListener('dragend', (ev) => draggedElement = null);
    }
}

async function waitAllLoad(elements) {
    let size = elements.length;
    let test = Array(size).fill(false);

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('load' , () => test[i] = true);
    }

    return await until(() => test.every(el => el === true))
}

function until(conditionFunction) {

    const res = resolve => {
        if(conditionFunction()) resolve();
        else setTimeout(() => res(resolve), 50);
    }

    return new Promise(res);
}

/*
waitOnload(categories,0);
function waitOnload(elements,index) {
    try {
        console.log('i')
        elements[index].addEventListener('load', (ev) =>{
            waitOnload(elements,index+1);
        })
    } catch (e) {
        console.log('hi')
    }
}*/