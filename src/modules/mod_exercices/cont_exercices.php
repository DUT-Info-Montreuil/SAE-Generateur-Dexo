<?php
require_once "./modules/mod_exercices/vue_exercices.php";
require_once "./modules/mod_exercices/model_exercices.php";

class ContExercices
{
    private $vue;
    private $model;

    public function __construct()
    {
        $this->vue = new VueExercices();
        $this->model = new ModelExercices();
    }

    public function displayMod() { return $this->vue->getDisplay(); }
}


?>