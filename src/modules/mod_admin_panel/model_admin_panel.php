<?php
require_once "./connexion.php";


class ModelAdminPanel extends Connexion
{

    public function getAccounts()
    {
        $query = "SELECT idcompte as id, nom, prenom, login, email FROM public.compte WHERE idrole = 2";
        $prepare = parent::$bdd->prepare($query);
        $prepare->execute();
        return $prepare->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getImages()
    {
        $query = "SELECT idphoto as id, photo.nom as nomPhoto, login, compte.nom, prenom , bin from public.photo inner join public.compte on (photo.idcompte = compte.idcompte)";
        $prepare = parent::$bdd->prepare($query);
        $prepare->execute();
        return $prepare->fetchAll(PDO::FETCH_ASSOC);
    }
}
