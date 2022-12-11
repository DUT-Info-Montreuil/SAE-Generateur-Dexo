<?php
require "../connexion.php";

session_start();
Connexion::set_up_connection("../../res/");

if (isset($_POST['image_Json']))
    uploadImage();
else
    echo 'not here';

function uploadImage()
{
    $images = json_decode($_POST['image_Json']);
    echo $images[0];
    // $data = $images->{'elements'};
    
    // foreach ($data as $key) {
    //     echo $key;
    // }
    // if (canBeSend($json)) {
    //     $idCompte = $_SESSION['id'];
    //     $idCategorie = $json->{"idCategorie"};
    //     $title = $json->{"title"};
    //     if (isset($idCompte, $idCategorie, $title)) {
    //         $query = "INSERT INTO public.exercices VALUES (DEFAULT,:idCompte,:idCategorie,:title,:json)";
    //         $prepare = Connexion::getBdd()->prepare($query);
    //         $prepare->bindValue(':idCompte', $idCompte);
    //         $prepare->bindValue(':idCategorie', $idCategorie);
    //         $prepare->bindValue(':title', $title);
    //         $prepare->bindValue(':json', json_encode($data));

    //         $prepare->execute();
    //     }
    // }
}
?>