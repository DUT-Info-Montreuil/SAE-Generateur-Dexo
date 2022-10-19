<?php
    require_once "./connexion.php";
    
    class ModelUser extends Connexion{
        public function __construct(){
        
        }

        public function login()
        {
            $username = $_POST['uname'];
            $pass = $_POST['psw'];

            $query ="SELECT username ,password FROM Compte WHERE login like ?";
            $prep = parent::$bdd->prepare($query);
            $prep->execute([$username]);

            $login_info = $prep->fetch();

            if (!is_null($login_info['password'])){
                if (password_verify($pass,$login_info['password'])) {
                    $_SESSION['id'] = $login_info['id'];
                    $_SESSION['username'] = $username;
                }
            }
        }
    }
?>