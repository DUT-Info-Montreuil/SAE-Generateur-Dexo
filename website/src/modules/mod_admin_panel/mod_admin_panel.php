<?php
require_once "./modules/mod_admin_panel/cont_admin_panel.php";

class ModAdminPanel
{
    private $controler;


    public function __construct()
    {
        if ($_SESSION['role'] == 1) {
            $this->controler = new ContAdminPanel();
            $mode = isset($_GET["mode"]) && $_GET["mode"] <= 1 && $_GET["mode"] >= 0 ? $_GET["mode"] : 0;
            $this->controler->getAdminPannel($mode);
        } else {
            header('Location: ./index.php?module=home');
            die("forbidden");
        }
    }

    public function getDisplay()
    {
        return $this->controler->displayMod();
    }
}
