
const accountButton = document.getElementById("account-button");
const accountMenu = document.getElementsByClassName("account-menu");

let showMenu = false;


accountButton.addEventListener("click", () => {
    showMenu = !showMenu;
    accountMenu[0].style.display = showMenu ? "flex" : "none";

    let posAccountButton = accountButton.getBoundingClientRect();
    accountMenu[0].style.setProperty("left", posAccountButton.left.toString() + "px");
    accountMenu[0].style.setProperty("top", posAccountButton.top.toString() + "px");
});

