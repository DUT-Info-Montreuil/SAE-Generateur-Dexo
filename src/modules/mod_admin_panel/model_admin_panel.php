<?php
require_once "./connexion.php";


class ModelAdminPanel extends Connexion
{
    public function insertImages($idcompte, $nom, $partager, $bin)
    {
        $query = "INSERT INTO photo VALUES (default, ?, ?, ?, ?)";
        $prepare = parent::$bdd->prepare($query);

        try {
            $prepare->execute([$idcompte, $nom, $partager, pg_escape_bytea(base64_encode(file_get_contents($bin)))]);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}
