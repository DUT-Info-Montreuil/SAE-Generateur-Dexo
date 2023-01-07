const settings = document.getElementById("settings-iframe");


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

    for (let butt of cancelButton)
        butt.addEventListener("click", () => {
            settings.style.display = "none";
            showSettingMenu = false;
        });

    displayButton.addEventListener("click", () => {
        contentDisplay.style.display = "block";
        contentAccount.style.display = "none";
        contentLicense.style.display = "none";
        contentCredit.style.display = "none";
    });

    accountButton.addEventListener("click", () => {
        contentDisplay.style.display = "none";
        contentAccount.style.display = "block";
        contentLicense.style.display = "none";
        contentCredit.style.display = "none";
    });

    licenseButton.addEventListener("click", () => {
        contentDisplay.style.display = "none";
        contentAccount.style.display = "none";
        contentLicense.style.display = "block";
        contentCredit.style.display = "none";
    });

    creditButton.addEventListener("click", () => {
        contentDisplay.style.display = "none";
        contentAccount.style.display = "none";
        contentLicense.style.display = "none";
        contentCredit.style.display = "block";
    });
});
