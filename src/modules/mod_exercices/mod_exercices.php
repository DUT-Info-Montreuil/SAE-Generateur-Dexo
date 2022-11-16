<?php
require_once "./modules/mod_exercices/cont_exercices.php";

class ModexErcices
{
    private $controler;
    private $status;


    public function __construct()
    {/*
        if (!isset($_SESSION['id'])){
            header("Location: ./index.php?module=user&status=login");
            exit;
        }*/
        $this->controler = new ContExercices();

        $this->status = isset($_GET['status']) ? $_GET['status'] : 'create';

        switch($this->status)
        {
            case "create":
                $this->controler->getCreatePage();
                break;
            case "send":
                $this->controler->trySendJSON();
                break;
        }
    }


    public function getDisplay() { return $this->controler->displayMod(); }
}
?>