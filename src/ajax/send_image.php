<?php
require "../connexion.php";

session_start();
Connexion::set_up_connection("../../res/");

if (isset($_POST['image_Json'])) {
    try {
        uploadImage();
    } catch (PDOException $e) {
        echo $e->getMessage();
    } catch (Exception $e) {
        echo $e->getMessage();
    }
} else echo 'error image not found';

function uploadImage()
{
    $query = "INSERT INTO public.photo VALUES (DEFAULT, ?, ?, ?, ?)";

    $jsonImage = json_decode($_POST['image_Json']);
    foreach ($jsonImage as $jsonElement) {
        $idCompte = $_SESSION['id'];
        $jsonValue = json_decode($jsonElement);
        $nom = empty($jsonValue->{"name"}) ? 'Pas de nom' : $jsonValue->{"name"};
        $bin = $jsonValue->{"url"};
        $share = $jsonValue->{"share"};

        if (isset($idCompte, $nom, $bin, $share)) {
            $prepare = Connexion::getBdd()->prepare($query);
            $prepare->execute([$idCompte, $nom, 'f', pg_escape_bytea(base64_encode(file_get_contents($bin)))]);
        }
    }
}

?>