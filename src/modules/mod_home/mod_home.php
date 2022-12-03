<?php
require_once "./modules/mod_home/cont_home.php";

class ModHome
{
    private $controler;


    public function __construct()
    {
        $this->controler = new ContHome();
    }


    public function getDisplay() { return $this->controler->displayMod(); }
}