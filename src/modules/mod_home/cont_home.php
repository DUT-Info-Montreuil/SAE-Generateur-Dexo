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
        $bank_pictures = $this->model->fetchImages();
        $my_picture = array();
        if (isset($_SESSION["id"]))
            $my_picture = $this->model->fetchImages($_SESSION["id"], false);
        $this->vue = new VueHome($categories, $bank_pictures, $my_picture);
    }

    public function displayMod()
    {
        return $this->vue->getDisplay();
    }
}