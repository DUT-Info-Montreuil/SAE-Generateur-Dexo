<?php
require_once "./generic_view.php";

class VueUser extends GenericView
{

    public function __construct()
    {
    }

    public function loginForm()
    { ?>

        <div class="form">
            <div class="border-form"></div>

            <img src="../res/profile-user.png" alt="profile-user-img"/>
            <h1>BIENVENUE !</h1>

            <form class="form-container" action="./index.php?module=user&status=login" method="POST">
                <input type="text" placeholder="  Entrez l'identifiant/email" name="uname" required>
                <input type="password" placeholder="  Mot de passe" name="psw" required>

                <div class="form-buttons">
                    <button class="buttons-form" type="submit">CONNECTION</button>
                    <button id="register-button" class="buttons-form" type="button">PAS DE COMPTE ?</button>
                    <button id="back-button" class="buttons-form" type="button">RETOUR</button>
                </div>

                <div id="remember-me-section">
                    <input type="checkbox" checked="checked" name="remember">
                    <label for="remember"><b>Remember me</b></label>
                </div>
            </form>
            <div id="pop-in-info-div" class="test"></div>
        </div>

        <script src="./js/vue_user.js" type="text/javascript"></script>

    <?php }


    public function registerForm()
    { ?>

        <div class="form">
            <div class="border-form"></div>

            <img src="../res/profile-user.png" alt="profile-user-img"/>
            <h1>BIENVENUE !</h1>

            <form class="form-container" action="./index.php?module=user&status=register" method="POST">
                <input type="text" placeholder="  Nom" name="surname" required>
                <input type="text" placeholder="  Prénom" name="name" required>
                <input type="text" placeholder="  Identifiant" name="uname" required>
                <input type="text" placeholder="  Adresse email" name="email" required>
                <input type="password" placeholder="  Mot de passe" name="psw" required>

                <div class="form-buttons">
                    <button class="buttons-form" type="submit">INSCRIPTION</button>
                    <button id="connexion-button" class="buttons-form" type="button">CONNECTION</button>
                    <button id="back-button" class="buttons-form" type="button">RETOUR</button>
                </div>
            </form>
            <div id="pop-in-info-div"></div>
        </div>

        <script src="./js/vue_user.js" type="text/javascript"></script>

    <?php }

    public function loginAlreadyTaken()
    {
        ?>

        <div>
            <p>Le login que vous avez saisi est déjà utilisé par un autre utilisateur, veuillez en choisir un autre.</p>
        </div>

    <?php }

    public function wrongInfos()
    { ?>
        <script src="./js/wrong-login-infos.js" type="text/javascript"></script>
    <?php }

    public function lostForm()
    {
        # code...
    }
}

?>