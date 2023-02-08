<?php
require_once "./modules/mod_user/vue_user.php";
require_once "./modules/mod_user/model_user.php";


class ContUser
{
    private static $LENGTH_MIN_PASSWORD = 6;
    private static $LENGTH_MIN_USERNAME = 0;


    private $model;
    private $vue;


    public function __construct()
    {
        $this->vue = new VueUser();
        $this->model = new ModelUser();
    }

    public function tryLogin()
    {
        $is_vars_set = isset($_POST['uname'], $_POST['psw']);
        if ($is_vars_set) {
            $valid_pwd_length = strlen($_POST['psw']) > $this::$LENGTH_MIN_PASSWORD;
            $valid_username_length = strlen($_POST['uname']) > $this::$LENGTH_MIN_USERNAME;
            if ($valid_username_length && $valid_pwd_length) {
                if ($this->model->login()) {
                    header("Location: index.php");
                } else {
                    $this->vue->wrongInfos();
                }
            }
        }
    }

    public function tryRegister()
    {
        $is_vars_set = isset($_POST['uname'], $_POST['psw'], $_POST['name'], $_POST['surname'], $_POST['email']);
        if ($is_vars_set) {
            $valid_pwd_length = strlen($_POST['psw']) > $this::$LENGTH_MIN_PASSWORD;
            if ($valid_pwd_length)
                (!$this->model->loginIsTaken()) ? $this->model->register() : $this->vue->loginAlreadyTaken();
        }
    }

    public function tryLogout()
    {
        session_destroy();
        header("Location: index.php");
    }

    public function displayMod()
    {
        return $this->vue->getDisplay();
    }

    public function getLoginForm()
    {
        $this->vue->loginForm();
    }

    public function getRegisterForm()
    {
        $this->vue->registerForm();
    }
}