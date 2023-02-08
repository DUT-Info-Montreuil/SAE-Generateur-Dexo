<?php

class Categorie
{
    public $id;
    public $nom;
    public $exercises = array();


    public function __construct($id, $nom, $exercises)
    {
        $this->id = $id;
        $this->nom = $nom;
        $this->exercises = $exercises;
    }

    public function add_exercise($exercise)
    {
        $this->exercises[] = $exercise;
    }
}