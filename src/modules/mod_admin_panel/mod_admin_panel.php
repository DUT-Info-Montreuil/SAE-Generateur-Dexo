<?php
require_once "./modules/mod_admin_panel/cont_admin_panel.php";

class ModAdminPanel
{
    private $controler;


    public function __construct()
    {
        $this->controler = new ContAdminPanel();

        if (isset($_POST["insert"]))
            $this->controler->model->insertImages(1, $_FILES["image"]["name"], true, $_FILES["image"]["tmp_name"]);
    }

    public function getDisplay()
    {
        return $this->controler->displayMod();
    }
}
