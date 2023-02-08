const measure = "px";

let showMenu = false;
let showSettingMenu = false;


window.addEventListener("load", () => {
    const accountMenu = document.getElementsByClassName("account-menu");
    const settingsMenu = document.getElementById("settings-iframe");
    const accountButton = document.getElementById("account-button");
    const settingsButton = document.getElementsByClassName("settings-button");
    const registerButton = document.getElementById("register-button");
    const loginButton = document.getElementById("login-button");
    const logoutButton = document.getElementById("logout-button");


    for (let setting of settingsButton) {
        setting.addEventListener("click", () => {
            showSettingMenu = !showSettingMenu;
            settingsMenu.style.display = showSettingMenu ? "block" : "none";
        });
    }

    if (registerButton !== null)
        registerButton.addEventListener("click", () => {
            document.location.href = "index.php?module=user&status=register";
        });

    if (loginButton !== null)
        loginButton.addEventListener("click", () => {
            document.location.href = "index.php?module=user&status=login";
        });

    if (logoutButton !== null)
        logoutButton.addEventListener("click", () => {
            document.location.href = "index.php?module=user&status=logout";
        });

    accountButton.addEventListener("click", () => {
        const menu = accountMenu[0];
        const button = accountButton;

        showMenu = !showMenu;
        menu.style.display = showMenu ? "flex" : "none";

        const posButton = button.getBoundingClientRect();
        const posLeftMenu = posButton.left;
        const posTopMenu = posButton.top + button.clientHeight;
        menu.style.setProperty("left", posLeftMenu.toString() + measure);
        menu.style.setProperty("top", posTopMenu.toString() + measure);
    });
});