/* Script created at 09/11/2022 */

const accountButton = document.getElementById("account-button");
const accountMenu = document.getElementsByClassName("account-menu");
const measure = "px";

let showMenu = false;


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

