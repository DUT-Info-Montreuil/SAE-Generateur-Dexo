<?php
require_once "./modules/mod_exercices/cont_exercices.php";

class ModexErcices
{
    private $controler;
    private $status;


    public function __construct()
    {
        $this->controler = new ContExercices();
    }


    public function getDisplay() { return $this->controler->displayMod(); }
}
?>