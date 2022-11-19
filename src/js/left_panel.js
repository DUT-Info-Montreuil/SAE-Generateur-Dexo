/* Script created at 26/10/2022 */
const leftPanel = document.getElementById("left-panel");
const leftPanelClose = document.getElementById("left-panel-close");
const leftPanelButtonClose = leftPanel.getElementsByClassName("hideAside")[0];

let isLeftPanelOpened = true;


leftPanelButtonClose.addEventListener("click", () => leftPanel.style.animationName = "HidePanelLeft");

leftPanel.onanimationend = function (ev) {
    if (ev.animationName === 'HidePanelLeft' || ev.animationName === 'OpenPanelLeft') {
        if (isLeftPanelOpened) {
            leftPanel.style.display = "none";
            leftPanelClose.style.display = 'block';
        } else {
            leftPanel.style.display = "block";
            leftPanelClose.style.display = 'none';
        }
        isLeftPanelOpened = !isLeftPanelOpened;
    }
};

leftPanelClose.onclick = function () {
    leftPanelClose.style.display = "none";
    leftPanel.style.display = 'block';
    leftPanel.style.animationName = "OpenPanelLeft";
}