/* Script created at 22/10/2022 */

const loginUrl = "./index.php?module=user&status=login";
const homeUrl = "./index.php?status=home";

const connexionButton = document.getElementById("connexion-button");
const backButton = document.getElementById("back-button");


connexionButton.onclick = function() { document.location = loginUrl; }
backButton.onclick = function() { document.location = homeUrl; }