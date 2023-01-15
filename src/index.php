<?php
ini_set("display_errors", 1);

require_once "./modules/mod_admin_panel/mod_admin_panel.php";
require_once "./modules/mod_user/mod_user.php";
require_once "./modules/mod_home/mod_home.php";
require_once "./connexion.php";

session_start();
Connexion::set_up_connection();

if (!isset($_GET["module"]))
    header("Location:index.php?module=home");
$module = "";
switch ($_GET["module"]) {
    case "user":
        $module = new ModUser();
        break;
    case "home":
        $module = new ModHome();
        break;
    case "admin_panel":
        $module = new ModAdminPanel();
        break;
    default:
        break;
}

$content = ($module !== "") ? $module->getDisplay() : "Module not found";
?>
<!DOCTYPE html>
<html id="html-index" lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/global.css">
    <link id="theme" rel="stylesheet" href="./css/themes/white.css">
    <script type="text/javascript" src="./js/librairies/jquery-3.6.1.min.js"></script>
    <script type="text/javascript" src="./js/css_loader.js"></script>
    <title>SAE | Générateur d'exercice</title>
</head>
<body>
<div id="loader" class="center"></div>
<?=$content?>
<footer>
    <script src="./js/loading-screen.js" type="text/javascript"></script>
    <script src="./js/global.js" type="text/javascript"></script>
</footer>
</body>
</html>