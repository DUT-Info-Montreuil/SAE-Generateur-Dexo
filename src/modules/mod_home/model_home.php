<?php
require_once "./connexion.php";
require_once "./categorie.php";
require_once "./exercise.php";
require_once "./image.php";

class ModelHome extends Connexion
{
    public function fetchImages($idcompte = null, $shared = null)
    {
        if ($idcompte == null || $shared == null)
            $query = "SELECT * FROM photo WHERE (idrole = '1') OR (partager = 't')";
        else $query = "SELECT * FROM photo WHERE (partager = 'f') AND (idcompte = '".$idcompte."')";
        $list_images = array();

        $prepare = $this::$bdd->prepare($query);
        try {
            $prepare->execute();
            $result = $prepare->fetchAll();

            foreach ($result as $item)
                $list_images[] = new Image($item["idphoto"], $item["idcompte"], $item["nom"], $item["partager"], pg_unescape_bytea(stream_get_contents($item["bin"])));
        } catch (Exception $e) {}

        return $list_images;
    }

    public function fetchCategories()
    {
        $query = "SELECT * FROM categorie";
        $categories = array();
        $prepare = $this::$bdd->prepare($query);

        try {
            $prepare->execute();
            $result = $prepare->fetchAll();

            foreach ($result as $item)
                $categories[] = new Categorie($item["idcategorie"], $item["nom"], $this->fetchExercises($item["idcategorie"]));
        } catch (Exception $e) {}

        return $categories;
    }

    public function fetchExercises($idcategorie)
    {
        $query = "SELECT idexercice, nom FROM exercices WHERE idcategorie=" . $idcategorie;
        $list_exercises = array();
        $prepare = $this::$bdd->prepare($query);

        try {
            $prepare->execute();
            $result = $prepare->fetchAll();

            foreach ($result as $item)
                $list_exercises[] = new Exercise($item["idexercice"], $item["nom"]);
        } catch (Exception $e) {}

        return $list_exercises;
    }
}