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

    public function getAccounts()
    {
        $query = "SELECT idcompte as id, nom, prenom, login, email FROM public.compte WHERE idrole = 2";
        $prepare = parent::$bdd->prepare($query);
        $prepare->execute();
        return $prepare->fetchAll(PDO::FETCH_ASSOC);
    }

    /*public function getExercises()
    {
        $query = "SELECT idexercice as id,exercices.nom , login, compte.nom, prenom, (SELECT 2) as mode FROM public.exercices inner join public.compte on (exercices.idcompte = compte.idcompte)";
        $prepare = parent::$bdd->prepare($query);
        $prepare->execute();
        return $prepare->fetchAll();
    }*/

    public function getImages()
    {
        $query = "SELECT idphoto as id, photo.nom as nomPhoto, login, compte.nom, prenom , bin from public.photo inner join public.compte on (photo.idcompte = compte.idcompte)";
        $prepare = parent::$bdd->prepare($query);
        $prepare->execute();
        return $prepare->fetchAll(PDO::FETCH_ASSOC);
    }
}
