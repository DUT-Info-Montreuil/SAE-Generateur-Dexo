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

    public function getAdminPannel($mode)
    {
        $datas = null;
        switch ($mode) {
            case 0:
                $datas = $this->model->getAccounts();
                break;
            /*case 1:
                $datas = $this->model->get();
                break;*/
            default:
                $datas = $this->model->getImages();
                break;
        }
        $this->vue->displayAdminPannel($datas,$mode);
        $this->vue->getScripts();
    }
}
