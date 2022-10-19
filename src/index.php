<?php
require_once "./modules/mod_user/mod_user.php";
require_once "./connexion.php";

Connexion::set_up_connection();

$cont = new ModUser();
$content = $cont->getDisplay();
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Essaie</title>
    </head>

    <body>
        <?= $content ?>
        <h1>Page de test</h1>

        <?php 
        require_once "./connexion.php";
        require_once "./database.php";
        
        Connexion::set_up_connection();
        $result = Database::get_role_table();
        var_dump($result);
        ?>
    </body>
</html>