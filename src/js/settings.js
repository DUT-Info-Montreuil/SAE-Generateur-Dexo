const settings = document.getElementById("settings-iframe");


function showOption(targetShow, ...hiddenElements) {
    targetShow.style.display = "block";
    for (const el of hiddenElements)
        el.style.display = "none";
}

async function resetPassword() {
    const oldPasswordInput = settings.contentDocument.getElementById("old-password-input");
    const newPasswordInput = settings.contentDocument.getElementById("new-password-input");
    const confirmPasswordInput = settings.contentDocument.getElementById("confirme-password-input");

    if (oldPasswordInput.value.length > 0 && newPasswordInput.value.length > 0 && confirmPasswordInput.value.length > 0) {
        console.log(oldPasswordInput.value)

        let verify_password;
        await $.ajax({
            type: "POST",
            url: './ajax/verify_password.php',
            data: ({"oldPassword": oldPasswordInput.value})
        }).then((response) => {verify_password = response;});

        console.log(verify_password);
        if (verify_password === "-1") {
            popin("Vous devez vous connecter pour pouvoir réinitialiser votre mot de passe", false);
        } else if (verify_password === "0") {
            popin("Ancien mot de passe incorrect", false);
        } else if (verify_password === "1") {
            if (newPasswordInput.value !== confirmPasswordInput.value) {
                popin("Les nouveaux mot de passe ne sont pas identique");
            } else {
                let reset_password;
                await $.ajax({
                    type: "POST",
                    url: './ajax/reset_password.php',
                    data: ({"newPassword": newPasswordInput.value})
                }).then((response) => {reset_password = response});

                if (reset_password === "1")
                    popin("Le mot de passe à bien étais changé", false);
                else popin("Une erreur est survenue lors de le réinitialiser de votre mot de passe");
            }
        }
    }
}


settings.addEventListener("load", () => {
    const cancelButton = settings.contentDocument.getElementsByClassName("cancel-button");
    const displayButton = settings.contentDocument.getElementById("display-button");
    const accountButton = settings.contentDocument.getElementById("account-button");
    const licenseButton = settings.contentDocument.getElementById("license-button");
    const creditButton = settings.contentDocument.getElementById("credit-button");
    const validatePasswordButton = settings.contentDocument.getElementById("edit-password-button");

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

    validatePasswordButton.addEventListener("click", resetPassword);
});
