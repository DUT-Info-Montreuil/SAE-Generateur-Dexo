<?php
    ini_set('display_errors', 1);

        require_once "./modules/mod_user/mod_user.php";
        require_once "./modules/mod_home/mod_home.php";
        require_once "./modules/mod_exercices/mod_exercices.php";
        require_once "./connexion.php";

    session_start();
    Connexion::set_up_connection();

        if (!isset($_GET["module"]))
            header("Location:index.php?module=home");
        $module = "";
        switch ($_GET["module"]){
            case "user":
                $module = new ModUser();
                break;
            case "exercices" :
                $module = new ModexErcices();
                break;
            case "home":
                $module = new ModHome();
                break;
            default :
                break;
        }

        if ($module !== ""){
            $content = $module->getDisplay();
        } else {
            $content = "Module not found";
        }
        ?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="./css/global.css" rel="stylesheet"/>
        <script src="./js/css_loader.js" type="text/javascript"></script>
        <title>SAE-GE</title>
    </head>

    <body>
        <?= $content ?>
    </body>

    <footer>
        <script src="./js/global.js"></script>
        <script src="./js/main.js" type="text/javascript"></script>
    </footer>
</html>