<?php
require_once "./modules/mod_user/cont_user.php";

class ModUser
{
    private $controller;
    private $status;


    public function __construct()
    {
        $this->controller = new ContUser();

        $this->status = isset($_GET['status']) ? $_GET['status'] : 'login';
        switch ($this->status) {
            case "register":
                $this->controller->tryRegister();
                $this->controller->getRegisterForm();
                break;
            case "login":
                $this->controller->tryLogin();
                $this->controller->getLoginForm();
                break;
            case "lost":
                $this->controller->getLostForm();
                break;
        }
    }


    public function getDisplay() { return $this->controller->displayMod(); }
}