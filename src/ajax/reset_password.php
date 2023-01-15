<?php
require "../connexion.php";

session_start();
Connexion::set_up_connection("../../res/");

if (isset($_SESSION["id"])) {
    $query = "UPDATE compte SET password=:password WHERE idcompte=:id";
    $prepare = Connexion::getBdd()->prepare($query);
    $prepare->bindValue(":password", password_hash($_POST["newPassword"], PASSWORD_DEFAULT));
    $prepare->bindValue(":id", $_SESSION["id"]);
    $prepare->execute();
    echo "1";
} else echo "-1";


