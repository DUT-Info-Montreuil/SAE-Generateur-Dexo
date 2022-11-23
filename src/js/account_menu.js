/* Script created at 09/11/2022 */
const measure = "px";

const accountButton = document.getElementById("account-button");
const accountMenu = document.getElementsByClassName("account-menu");

const settingsButton = document.getElementsByClassName("settings-button");
const registerButton = document.getElementById("register-button");
const loginButton = document.getElementById("login-button");
const logoutButton = document.getElementById("logout-button");

let showMenu = false;
let showSettingMenu = false;


const settingsMenu = document.getElementById("settings-iframe");
settingsMenu.addEventListener("load", () => {
    settingsButton[0].addEventListener("click", () => {
        showSettingMenu = !showSettingMenu;
        settingsMenu.style.display = showSettingMenu ? "block" : "none";
    });

    registerButton.addEventListener("click", () => {
        document.location.href = "index.php?module=user&status=register";
    });

    loginButton.addEventListener("click", () => {
        document.location.href = "index.php?module=user&status=login";
    });

     logoutButton.addEventListener("click", () => {
     document.location.href = "index.php?module=user&status=logout";
     });
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