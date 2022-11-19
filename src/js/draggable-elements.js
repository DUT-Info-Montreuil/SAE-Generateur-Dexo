
const A4 = document.getElementById('A4-exo-iframe');
A4.onload = function() {
    A4.contentDocument.addEventListener("dragover", (event) => {
        elementTargetExo = event.target;
        posXExo = event.layerX;
        posYExo = event.layerY;
        /* TODO: lien avec travaille Tiago */
    });
}
