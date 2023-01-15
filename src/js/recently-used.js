const LIMIT_ELEMENT = 10;

const imagesRecentlyUsed = [];
const exercisesRecentlyUsed = [];

const imagesRecentlyUsedContainer = document.getElementById("images-recently-used-content");
const exercisesRecentlyUsedContainer = document.getElementById("exercises-recently-used-content");



function writeRecentlyUsed(elementDropped, listOfElements, container)
{
    const cloneElementDropped = elementDropped.cloneNode(true);
    cloneElementDropped.addEventListener("dragstart", (ev) => draggedElement = ev.target);
    cloneElementDropped.addEventListener("dragend", () => draggedElement = null);

    listOfElements.splice(0, 0, cloneElementDropped);
    if (listOfElements.length > LIMIT_ELEMENT) listOfElements.pop(listOfElements[listOfElements.length-1]);

    for (const child of container.children) container.removeChild(child);
    for (const img of listOfElements) container.appendChild(img);
}

function checkDuplicate(elementDropped, listOfElements)
{
    if (Elements.isImages(elementDropped)) {
        for (const el of listOfElements)
            if (elementDropped.getAttribute(Elements.IMG_ID_ATTRIBUTE).toString() === el.getAttribute(Elements.IMG_ID_ATTRIBUTE).toString())
                return true;
    } else if (Elements.isExercises(elementDropped)) {
        for (const el of listOfElements)
            if (elementDropped.getAttribute(Elements.EXERCISE_ID_ATTRIBUTE).toString() === el.getAttribute(Elements.EXERCISE_ID_ATTRIBUTE).toString())
                return true;
    }
    return false;
}


A4.addEventListener("load", () => {
    A4.contentDocument.addEventListener("drop", () => {
        if (Elements.isImages(draggedElement)) {
            if (!checkDuplicate(draggedElement, imagesRecentlyUsed))
                writeRecentlyUsed(draggedElement, imagesRecentlyUsed, imagesRecentlyUsedContainer);
        } else if (Elements.isExercises(draggedElement)) {
            if (!checkDuplicate(draggedElement, exercisesRecentlyUsed))
                writeRecentlyUsed(draggedElement, exercisesRecentlyUsed, exercisesRecentlyUsedContainer);
        }
    });
});
