
const rightPanelClose = document.getElementById("right-panel-close");
const rightPanelOpen = document.getElementById("right-panel-open");
const rightPanelButtonClose = document.getElementById("right-arrow-close");
const rightPanelButtonOpen = document.getElementById("right-arrow-open");


rightPanelButtonClose.onclick = function() {
    rightPanelClose.style.display = 'none';
    rightPanelOpen.style.display = 'block';
}

rightPanelButtonOpen.onclick = function() {
    rightPanelClose.style.display = 'block';
    rightPanelOpen.style.display = 'none';
}