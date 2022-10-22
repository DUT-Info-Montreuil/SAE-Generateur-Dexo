<?php
require_once "./modules/mod_user/mod_user.php";
require_once "./connexion.php";

Connexion::set_up_connection();
session_start();
$cont = new ModUser();
$content = $cont->getDisplay();
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="../res/style.css" rel="stylesheet">
        <title>Essaie</title>
    </head>

    <body>
        <?= $content ?>
    </body>
</html>