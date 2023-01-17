<?php
require "../connexion.php";

session_start();
Connexion::set_up_connection("../../res/");

$query = "SELECT * from public.categorie";
$prepare = Connexion::getBdd()->prepare($query);
$prepare->execute();
echo json_encode($prepare->fetchAll(PDO::FETCH_ASSOC));
