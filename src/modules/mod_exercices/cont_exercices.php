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

    public function getCreatePage()
    {
        $this->vue->displayMain();
    }
    public function trySendJSON()
    {
        if (isset($_POST['json'])){
            $this->model->tryAddJSON();
        }
    }

    public function displayMod() { return $this->vue->getDisplay(); }
}


?>