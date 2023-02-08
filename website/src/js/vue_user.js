const loginUrl = "./index.php?module=user&status=login";
const registerUrl = "./index.php?module=user&status=register";
const homeUrl = "./index.php?status=home";

const connexionButton = document.getElementById("connexion-button");
const registerButton = document.getElementById("register-button");
const backButton = document.getElementById("back-button");


if (registerButton != null) registerButton.addEventListener("click", () => document.location = registerUrl);
if (connexionButton != null) connexionButton.addEventListener("click", () => document.location = loginUrl);
if (backButton != null) backButton.addEventListener("click", () => document.location = homeUrl);
