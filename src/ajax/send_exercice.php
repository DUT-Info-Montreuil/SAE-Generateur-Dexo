<?php
require "../connexion.php";
session_start();
Connexion::set_up_connection("../../res/");
if(isset($_POST['json'])) {
    tryAddJSON();
}

function tryAddJSON() {
    $json = json_decode($_POST["json"]);
    $data = $json->{'elements'};

    if (canBeSend($json)) {
        $idCompte = $_SESSION['id'];
        $idCategorie = $json->{"idCategorie"};
        $title = $json->{"title"};
        if (isset($idCompte, $idCategorie, $title)) {
            $query = "INSERT INTO public.exercices VALUES (DEFAULT,:idCompte,:idCategorie,:title,:json)";
            $prepare = Connexion::getBdd()->prepare($query);
            $prepare->bindValue(':idCompte', $idCompte);
            $prepare->bindValue(':idCategorie', $idCategorie);
            $prepare->bindValue(':title', $title);
            $prepare->bindValue(':json', json_encode($data));

            $prepare->execute();
        }
    }
}

function canBeSend($json) {
    $canBeSend = true;
    $data = $json->{'elements'};

    $strJsonFileContents = json_decode(file_get_contents("../../res/exerciceOptions.json"));

    foreach ($data as $key => $value) {
        if (isset($strJsonFileContents->{strtolower($value->{'type'})})) {
            $properties = $value->{'properties'};
            if (!(isset($properties->{'left'}) && isset($properties->{'top'}))) {
                $left = getDoubleSize($properties->{'left'});
                $top = getDoubleSize($properties->{'top'});
                $maxTop = getDoubleSize($json->{'height'});
                if (!($left > 0 && $left < 21 && $top > 0 && $top < $maxTop && $maxTop > 0 && $maxTop < 29.7)) {
                    return false;
                }
            }
        }
    }
    return true;
}

function getDoubleSize(string $property) {
    return doubleval(substr($property, 0, strpos($property, 'cm')));
}

?>


