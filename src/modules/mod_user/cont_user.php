<?php
    require_once "./modules/mod_user/vue_user.php";
    require_once "./modules/mod_user/model_user.php";
    class ContUser{
        private $vue;
        private $model;
        
        public function __construct(){
            $this->vue = new VueUser();
            $this->model = new ModelUser();
        }

        public function getLoginForm() { $this->vue->loginForm(); }
        public function getRegisterForm() { $this->vue->registerForm(); }
        public function tryLogin() {
            if ( isset($_POST['uname']) && isset($_POST['psw']) && strlen($_POST['uname']) > 0 && strlen($_POST['psw']) > 6){
                $this->model->login();
            }
        }
        public function tryRegister()
        {
            $variables_set = isset($_POST['uname']) && isset($_POST['psw']) && isset($_POST['name']) && isset($_POST['surname']) && isset($_POST['email']);
            $valid_password_length = strlen($_POST['psw']) > 6;
            if( $variables_set && $valid_password_length) {
                $this->model->register();
            }
        }

        public function displayMod(){
            return $this->vue->getDisplay();
        }
    }


?>