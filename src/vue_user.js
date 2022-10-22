
const connexionButton = document.getElementById("connexion-button");
const backButton = document.getElementById("back-button");


connexionButton.onclick = function()
{
    window.open("./index.php?module=user&status=login");
}

backButton.onclick = function()
{
    window.open("./index.php?status=home");
}




