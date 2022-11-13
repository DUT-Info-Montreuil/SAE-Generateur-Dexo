<?php
require_once "./connexion.php";

class ModelUser extends Connexion
{
    public function __construct()
    {
    }

    public function login()
    {
        $username = $_POST["uname"];
        $pass = $_POST["psw"];

        $query = "SELECT login ,password, nom , prenom FROM Compte WHERE login like ?";
        $prep = parent::$bdd->prepare($query);
        $prep->execute([$username]);

        $login_info = $prep->fetch();

        if (isset($login_info["password"]) && password_verify($pass, $login_info["password"])) {
            $_SESSION["id"] = $login_info["id"];
            $_SESSION["nom"] = $login_info["nom"];
            $_SESSION["prenom"] = $login_info["prenom"];
            return true;
        }

        return false;
    }

    public function register()
    {
        $uname = $_POST["uname"];
        $password = isset($_POST["psw"]);
        $name = $_POST["name"];
        $surname = $_POST["surname"];
        $email = $_POST["email"];

        $password = password_hash($password, PASSWORD_DEFAULT);

        $query = "INSERT INTO Compte (idCompte , idRole , nom , prenom , login , password , email) VALUES (DEFAULT , DEFAULT , ? , ? , ? , ? , ?)";
        $prepare = parent::$bdd->prepare($query);
        $prepare->execute([$surname, $name, $uname, $password, $email]);

    }

    public function loginIsTaken()
    {
        $testLogin = $_POST["uname"];

        $query = "SELECT login FROM Compte WHERE login LIKE ?";
        $prepare = parent::$bdd->prepare($query);
        $prepare->execute([$testLogin]);

        return $prepare->fetch();
    }
}

?>