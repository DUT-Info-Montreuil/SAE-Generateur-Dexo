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
    menu.style.setProperty("left", posButton.left.toString() + measure);
    menu.style.setProperty("top", posButton.top.toString() + measure);
});

