const settings = document.getElementById("settings-iframe");


function showOption(targetShow, ...hiddenElements) {
    targetShow.style.display = "block";
    for (const el of hiddenElements)
        el.style.display = "none";
}

settings.addEventListener("load", () => {
    const cancelButton = settings.contentDocument.getElementsByClassName("cancel-button");
    const displayButton = settings.contentDocument.getElementById("display-button");
    const accountButton = settings.contentDocument.getElementById("account-button");
    const licenseButton = settings.contentDocument.getElementById("license-button");
    const creditButton = settings.contentDocument.getElementById("credit-button");

    const contentDisplay = settings.contentDocument.getElementById("display-part");
    const contentAccount = settings.contentDocument.getElementById("account-part");
    const contentLicense = settings.contentDocument.getElementById("license-part");
    const contentCredit = settings.contentDocument.getElementById("credit-part");

    for (const butt of cancelButton)
        butt.addEventListener("click", () => {
            settings.style.display = "none";
            showSettingMenu = false;
        });

    displayButton.addEventListener("click", () => showOption(contentDisplay, contentAccount, contentLicense, contentCredit));
    accountButton.addEventListener("click", () => showOption(contentAccount, contentDisplay, contentLicense, contentCredit));
    licenseButton.addEventListener("click", () => showOption(contentLicense, contentDisplay, contentAccount, contentCredit));
    creditButton.addEventListener("click", () => showOption(contentCredit, contentDisplay, contentAccount, contentLicense));
});
