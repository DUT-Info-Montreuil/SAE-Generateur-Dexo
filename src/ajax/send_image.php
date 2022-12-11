<?php
require "../connexion.php";

// session_start();
// Connexion::set_up_connection("../../res/");

if (isset($_POST['image_Json']))
    uploadImage();
else
    echo 'error image not found';

function uploadImage()
{
    $jsonImage = json_decode($_POST['image_Json']);
    foreach ($jsonImage as $jsonElement) {
        $idCompte = $_SESSION['id'];
        $jsonValue = json_decode($jsonElement);
        $nom = empty($jsonValue->{"name"}) ? 'Pas de nom' : $jsonValue->{"name"};
        $url = $jsonValue->{"url"};
        $partager = $jsonValue->{"share"};

        if (isset($idCompte, $nom, $url,$partager)) {
            $query = "INSERT INTO public.photo VALUES (DEFAULT,:idCompte,:nom,:url,:partager)";
            $prepare = Connexion::getBdd()->prepare($query);
            $prepare->bindValue(':idCompte', $idCompte);
            $prepare->bindValue(':nom', $nom);
            $prepare->bindValue(':url', $url);
            $prepare->bindValue(':partager', $partager);
            $prepare->execute();
        }
    }
}
?>