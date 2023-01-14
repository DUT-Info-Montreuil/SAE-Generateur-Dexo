<?php
require "../connexion.php";

session_start();
Connexion::set_up_connection("../../res/");

if (isset($_POST["id"], $_POST["mode"]) && $_SESSION["role"] == 1) {
    $id = $_POST["id"];
    $mode = $_POST["mode"];
    $query = "";

    if ($mode == 0)
        $query = deleteAccount();
    else if ($mode == 1)
        $query = deleteImage();

    $prepare = Connexion::getBdd()->prepare($query);
    echo $query.$id;
    $prepare->execute([$id]);
}


function deleteImage()
{
    return "DELETE FROM public.photo where idphoto = ?";
}

function deleteAccount()
{
    return "DELETE FROM public.compte where idcompte = ?";
}