/* Script created at 22/10/2022 */

const loginUrl = "./index.php?module=user&status=login";
const registerUrl = "./index.php?module=user&status=register";
const homeUrl = "./index.php?status=home";

const connexionButton = document.getElementById("connexion-button");
const registerButton = document.getElementById("register-button");
const backButton = document.getElementById("back-button");


if (registerButton != null)
    registerButton.onclick = function() { document.location = registerUrl; }
if (connexionButton != null)
    connexionButton.onclick = function() { document.location = loginUrl; }
if (backButton != null)
    backButton.onclick = function() { document.location = homeUrl; }
