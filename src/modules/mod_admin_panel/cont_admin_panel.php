<?php
require_once "./modules/mod_admin_panel/vue_admin_panel.php";
require_once "./modules/mod_admin_panel/model_admin_panel.php";

class ContAdminPanel
{
    public $vue;
    public $model;

    public function __construct()
    {
        $this->model = new ModelAdminPanel();
        $this->vue = new VueAdminPanel();
    }

    public function displayMod()
    {
        return $this->vue->getDisplay();
    }
}
