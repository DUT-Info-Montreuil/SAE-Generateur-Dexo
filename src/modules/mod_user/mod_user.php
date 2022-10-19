<?php
    require_once "./modules/mod_user/cont_user.php";
    class ModUser{
        
        private $controler;
        private $status;


        public function __construct(){
            $this->controler = new ContUser();

            $this->status = isset($_GET['status']) ? $_GET['status'] : 'login';
            
            switch($this->status){
                case "register" :
                    $this->controler->tryRegister();
                    $this->controler->getRegisterForm();
                    break;
                case "login" :
                    $this->controler->tryLogin();
                    $this->controler->getLoginForm();
                    break;
            }        
        }


        public function getDisplay()
        {
            return $this->controler->displayMod();
        }
    }

?>