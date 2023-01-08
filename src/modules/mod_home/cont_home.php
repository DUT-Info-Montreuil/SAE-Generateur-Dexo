<?php
require_once "./modules/mod_home/vue_home.php";
require_once "./modules/mod_home/model_home.php";

class ContHome
{
    private $vue;
    private $model;

    public function __construct()
    {
        $this->model = new ModelHome();
        $categories = $this->model->fetchCategories();
        $images = $this->model->fetchImages();
        $this->vue = new VueHome($categories, $images);
    }

    public function displayMod()
    {
        return $this->vue->getDisplay();
    }
}