<?php
require "../connexion.php";

session_start();
Connexion::set_up_connection("../../res/");

if (isset($_POST['image_Json']))
    uploadImage();
else
    echo 'error image not found';

function uploadImage()
{
    $images = json_decode($_POST['image_Json']);
    foreach ($images as $image) {
        $idCompte = $_SESSION['id'];
        $nom = 'Pas de nom';//$json->{"idCategorie"};
        $url = $image;
        $partager = false;
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