<?php
require_once "./modules/mod_home/vue_home.php";
require_once "./modules/mod_home/model_home.php";

class ContHome
{
    private $vue;
    private $model;

    public function __construct()
    {
        $this->vue = new VueHome();
        $this->model = new ModelHome();
    }

    public function displayMod()
    {
        return $this->vue->getDisplay();
    }
}