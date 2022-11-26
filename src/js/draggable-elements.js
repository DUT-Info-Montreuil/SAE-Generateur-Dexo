const A4 = document.getElementById('A4-exo-iframe');
const exercice = document.getElementById('exercice-edit');
const categories = document.getElementsByClassName('object-categories');
console.log(categories);
waitOnload(categories,0);
A4.addEventListener("load", () => {
    A4.contentDocument.addEventListener("dragover", (event) => {
        event.preventDefault();
        elementTargetExo = event.target;
        posXExo = event.layerX;
        posYExo = event.layerY;
    });

    A4.contentDocument.addEventListener('drop', (ev) => {
        exercice.style.display = "block";
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

function waitOnload(elements,index) {
    console.log(elements[index].id);
    console.log(index);
    if (typeof elements[index] !== "undefined"){
        elements[index].addEventListener('load', (ev) =>{
            waitOnload(elements,index+1);
        })
    } else {
        console.log('all load');
    }
}