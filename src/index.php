<!DOCTYPE html>
<html lang="fr">
    <?php
        require_once "./modules/mod_user/mod_user.php";
        require_once "./connexion.php";

        session_start();
        Connexion::set_up_connection();

        $cont = new ModUser();
        $content = $cont->getDisplay();
    ?>

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="css-loader.js" type="text/javascript"></script>
        <title>SAE-GE</title>
    </head>

    <body>
        <?= $content ?>
    </body>
</html>