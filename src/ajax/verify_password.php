<?php
require "../connexion.php";

session_start();
Connexion::set_up_connection("../../res/");

if (isset($_SESSION["id"])) {
    $query = "SELECT * FROM compte WHERE idcompte=:id";
    $prep = Connexion::getBdd()->prepare($query);
    $prep->bindValue(':id', $_SESSION["id"]);
    $prep->execute();

    $login_info = $prep->fetch();
    if (isset($login_info["password"]) && password_verify($_POST["oldPassword"], $login_info["password"]))
        echo "1";
    else echo "0";
} else echo "-1";
