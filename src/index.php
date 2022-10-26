<!DOCTYPE html>
<html lang="fr">
    <?php
        ini_set('display_errors', 1);
        
        require_once "./modules/mod_user/mod_user.php";
        require_once "./connexion.php";

        session_start();
        Connexion::set_up_connection();

        if (!isset($_GET["status"]))
            header("Location:index.php?status=home");

        $cont = new ModUser();
        $content = $cont->getDisplay();
    ?>

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="../res/global.css" rel="stylesheet"/>
        <script src="css-loader.js" type="text/javascript"></script>
        <title>SAE-GE</title>
    </head>

    <body>
        <header>
            <div>
                <p>history</p>
            </div>

            <div>
                <p>page title</p>
            </div>

            <div>
                <p><a href="index.php?status=register">inscription</a></p>
            </div>
        </header>

        <?= $content ?>
    </body>
</html>