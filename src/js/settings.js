const settings = document.getElementById("settings-iframe");


settings.addEventListener("load" ,() => {
    const cancelButton = settings.contentDocument.getElementById("cancel-button");
    cancelButton.addEventListener("click", () => {
        settings.style.display = "none";
        showSettingMenu = false;
    });
});
