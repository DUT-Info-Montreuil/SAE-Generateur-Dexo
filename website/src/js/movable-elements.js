const A4 = document.getElementById('A4-exo-iframe');
let movableElement = null;
let clicked = false;

let contentA4;
let bound;
A4.addEventListener("load", () => {
    contentA4 = A4.contentDocument.getElementById("exercises");
});

function movableElementClickedEvent(event) {
    movableElement = event.target;
    clicked = !clicked;
    movableElement.setAttribute("id", clicked ? "selected-item" : "");
}

function followClickPointer(event) {
    if (clicked) {
        bound = contentA4.getBoundingClientRect();
        movableElement.style.left = ((event.clientX - movableElement.width / 2) - bound.left).toString() + "px";
        movableElement.style.top = ((event.clientY - movableElement.height / 2) - bound.top).toString() + "px";
    }
}