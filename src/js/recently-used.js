const LIMIT_ELEMENT = 10;

const imagesRecentlyUsed = [];
const exercisesRecentlyUsed = [];

const imagesRecentlyUsedContainer = document.getElementById("images-recently-used-content");
const exercisesRecentlyUsedContainer = document.getElementById("exercises-recently-used-content");


function isExercises(elementDropped) { return elementDropped.tagName === Elements.DIV_TAG && elementDropped.getAttribute("class").includes("categories"); }
function isImages(elementDropped) { return elementDropped.tagName === Elements.IMG_TAG; }

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
    if (isImages(elementDropped)) {
        for (const el of listOfElements)
            if (elementDropped.getAttribute(Elements.IMG_ID_ATTRIBUTE).toString() === el.getAttribute(Elements.IMG_ID_ATTRIBUTE).toString())
                return true;
    } else if (isExercises(elementDropped)) {
        for (const el of listOfElements)
            if (elementDropped.getAttribute(Elements.EXERCISE_ID_ATTRIBUTE).toString() === el.getAttribute(Elements.EXERCISE_ID_ATTRIBUTE).toString())
                return true;
    }
    return false;
}


A4.addEventListener("load", () => {
    A4.contentDocument.addEventListener("drop", () => {
        if (isImages(draggedElement)) {
            if (!checkDuplicate(draggedElement, imagesRecentlyUsed))
                writeRecentlyUsed(draggedElement, imagesRecentlyUsed, imagesRecentlyUsedContainer);
        } else if (isExercises(draggedElement)) {
            if (!checkDuplicate(draggedElement, exercisesRecentlyUsed))
                writeRecentlyUsed(draggedElement, exercisesRecentlyUsed, exercisesRecentlyUsedContainer);
        }
    });
});
