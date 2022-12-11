<?php
require "../connexion.php";

session_start();
Connexion::set_up_connection("../../res/");

if (isset($_POST['id_exo'])) {
    $id_exo = $_POST['id_exo'];
    $query = "SELECT data FROM exercices INNER JOIN compte on (exercices.idcompte = compte.idcompte) where idexercice = :id_ex  "; // AND idrole = 2;
    $prepare = Connexion::getBdd()->prepare($query);
    $prepare->bindValue(':id_ex', $id_exo, PDO::PARAM_INT);
    try {
        $prepare->execute();
        $result = $prepare->fetch();
        echo $result[0];
    } catch (Exception $e) {
        echo "-1";
    }
}
?>