const A4 = document.getElementById('A4-exo-iframe');
const exercice = document.getElementById('exercice-edit');
A4.onload = function () {
    A4.contentDocument.addEventListener("dragover", (event) => {
        event.preventDefault();
        elementTargetExo = event.target;
        posXExo = event.layerX;
        posYExo = event.layerY;
    });
    A4.contentDocument.addEventListener('drop', (ev) => {
        exercice.style.display = "block";
    })
}
exercice.onload = function () {
    const cancel = exercice.contentDocument.getElementById('cancel-exercice');
    const send = exercice.contentDocument.getElementById('send-exercice');
    const data = exercice.contentDocument.getElementById('jsonOutput');
    cancel.addEventListener('click', (ev) => {
        exercice.style.display = "none";
    })
    send.addEventListener('click', (event) => {
        let exo = data.getAttribute('value');
            $.ajax({
                type: "POST",
                url: './ajax/send_exercice.php',
                data: ({"json" : exo})
            }).then(function (re) {
                console.log(re);
            })
        });
}
