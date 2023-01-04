<?php
require "../connexion.php";

session_start();
Connexion::set_up_connection("../../res/");

$query = "SELECT idexercice, idcategorie, nom FROM exercices;";
$prepare = Connexion::getBdd()->prepare($query);

try {
    $prepare->execute();
    $result = $prepare->fetchAll();

    $i = 0;
    $response = array();
    foreach ($result as $item) {
        $response[$i] = array(
            "idexercice" => $item[0],
            "idcategorie" => $item[1],
            "nom" => $item[2]
        );
        $i = $i + 1;
    }

    echo json_encode($response);
} catch (Exception $e) { echo "-1"; }
