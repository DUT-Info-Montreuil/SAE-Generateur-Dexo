

const leftPanelButtonClose = document.getElementById("arrow-left-panel");
const rightPanelButtonClose = document.getElementById("arrow-right-panel");
const leftPanelButtonOpen = document.getElementById("arrow-left-panel-down");
const rightPanelButtonOpen = document.getElementById("arrow-right-panel-down");

const leftPanelClose = document.getElementById("left-panel-close");
const rightPanelClose = document.getElementById("right-panel-close");
const leftPanelOpen = document.getElementById("left-panel-open");
const rightPanelOpen = document.getElementById("right-panel-open");

let leftOpen = false;
let rightOpen = false;


function leftShowAndHidePanel() {
    leftPanelClose.style.display = (!leftOpen) ? "none" : "block";
    leftPanelOpen.style.display =  (!leftOpen) ? "block" : "none";

    leftOpen = !leftOpen;
}


function rightShowAndHidePanel() {
    rightPanelClose.style.display = (!rightOpen) ? "none" : "block";
    rightPanelOpen.style.display =  (!rightOpen) ? "block" : "none";

    rightOpen = !rightOpen;
}

leftPanelButtonClose.onclick = leftShowAndHidePanel;
leftPanelButtonOpen.onclick = leftShowAndHidePanel;
rightPanelButtonClose.onclick = rightShowAndHidePanel;
rightPanelButtonOpen.onclick = rightShowAndHidePanel;
