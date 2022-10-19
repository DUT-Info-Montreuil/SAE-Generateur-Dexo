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

        public function displayMod(){
            return $this->vue->getDisplay();
        }
    }


?>