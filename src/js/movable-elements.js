let movableElement = null;
let clicked = false;

let contentA4; let bound;
A4.addEventListener("load", () => {
    contentA4 = A4.contentDocument.getElementById("exercises");
    bound = contentA4.getBoundingClientRect();
});

function movableElementClickedEvent(event) {
    movableElement = event.target;
    clicked = !clicked;
}

function followClickPointer(event) {
    if (clicked) {
        movableElement.style.left = ((event.clientX - movableElement.width/2) - bound.left).toString() + "px";
        movableElement.style.top = ((event.clientY - movableElement.height/2) - bound.top).toString() + "px";
    }
}