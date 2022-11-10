const rightPanel = document.getElementById("right-panel");
const rightPanelClose = document.getElementById("right-panel-close");
const rightPanelButtonClose = rightPanel.getElementsByClassName("hideAside")[0];

let isRightPanelOpnned = true;

rightPanelButtonClose.onclick = function() {
    rightPanel.style.animationName = "HidePanelRight";
}
rightPanel.onanimationend = function(ev) {
    if (ev.animationName == 'HidePanelRight' || ev.animationName == 'OpenPanelRight' ) {
        if (isRightPanelOpnned) {
            rightPanel.style.display = "none";
            rightPanelClose.style.display = 'block';
        } else {
            rightPanel.style.display = "block";
            rightPanelClose.style.display = 'none';
        }
        isRightPanelOpnned = !isRightPanelOpnned;
    }
    
};
rightPanelClose.onclick = function() {
    rightPanelClose.style.display = "none";
    rightPanel.style.display = 'block';
    rightPanel.style.animationName = "OpenPanelRight";
} 