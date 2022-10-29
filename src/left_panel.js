
const leftPanelClose = document.getElementById("left-panel-close");
const leftPanelOpen = document.getElementById("left-panel-open");

const leftPanelButtonClose = document.getElementById("left-arrow-close");
const leftPanelButtonOpen = document.getElementById("left-arrow-open");



leftPanelButtonClose.onclick = function() {
    leftPanelClose.style.display = 'none';
    leftPanelOpen.style.display = 'block';
}

leftPanelButtonOpen.onclick = function() {
    leftPanelClose.style.display = 'block';
    leftPanelOpen.style.display = 'none';
}
