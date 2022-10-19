<?php
require_once "./modules/module/mod_user/mod_user.php";

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
    </body>
</html>