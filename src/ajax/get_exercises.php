<?php
require "../connexion.php";

session_start();
Connexion::set_up_connection("../../res/");

$query = "SELECT idexercice, nom FROM exercices WHERE idcategorie=".$_POST["id"].";";
$prepare = Connexion::getBdd()->prepare($query);

try {
    $prepare->execute();
    $result = $prepare->fetchAll();

    $i = 0;
    $response = array();
    foreach ($result as $item) {
        $response[$i] = array(
            "id" => $item[0],
            "nom" => $item[1]
        );
        $i = $i + 1;
    }

    echo json_encode($response);
} catch (Exception $e) { echo "-1"; }
