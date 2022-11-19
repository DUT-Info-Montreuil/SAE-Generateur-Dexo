const settings = document.getElementById("settings-iframe");


settings.addEventListener("load" ,() => {
    const cancelButton = settings.contentDocument.getElementById("cancel-button");
    const displayButton = settings.contentDocument.getElementById("display-button");
    const accountButton = settings.contentDocument.getElementById("account-button");
    const contentDisplay = settings.contentDocument.getElementById("display-part");
    const contentAccount = settings.contentDocument.getElementById("account-part");

    cancelButton.addEventListener("click", () => {
        settings.style.display = "none";
        showSettingMenu = false;
    });

    displayButton.addEventListener("click", () => {
       contentDisplay.style.display = "block";
       contentAccount.style.display = "none";
    });

    accountButton.addEventListener("click", () => {
       contentAccount.style.display = "block";
       contentDisplay.style.display = "none";
    });
});
