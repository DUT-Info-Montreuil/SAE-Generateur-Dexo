<?php
require_once "./modules/mod_home/cont_home.php";

class ModHome
{
    private $controller;


    public function __construct()
    {
        $this->controller = new ContHome();
    }


    public function getDisplay()
    {
        return $this->controller->displayMod();
    }
}