<?php
require_once "./generic_view.php";

class VueUser extends GenericView
{

    public function __construct()
    {
    }

    public function loginForm()
    { ?>
        <div id="form-connect">
            <form action="./index.php?module=user&status=login" method="post">
                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>

                    <div>
                        <button type="submit">Se connecter</button>
                        <button type="button">Retour</button>

                        <span>Pas de compte ? <a href="./ind                        <span><a href="#">Mot de passe oublié ?</a></span>
                        ex.php?module=user&status=register">S'inscrire</a></span>
                    </div>

                    <label for="remember"><b>Remember me</b></label>
                    <input type="checkbox" checked="checked" name="remember">
                </div>
            </form>
        </div>
    <?php }


    public function registerForm()
    { ?>
        <div id="register-form">
            <form action="./index.php?module=user&status=register" method="post" id="register-form-container">
                <input type="text" placeholder="Nom" name="surname" required>
                <input type="text" placeholder="Prénom" name="name" required>
                <input type="text" placeholder="identifiant" name="uname" required>
                <input type="text" placeholder="Adresse email" name="email" required>
                <input type="password" placeholder="Mot de passe" name="psw" required>

                <div id="register-form-buttons">
                    <button id="register-submit" class="buttons-form" type="submit">INSCRIPTION</button>
                    <button id="connexion-button" class="buttons-form" type="button">CONNECTION</button>
                    <button id="back-button" class="buttons-form" type="button">RETOUR</button>
                </div>
            </form>
        </div>

        <script src="./vue_user.js" type="text/javascript"></script>
    <?php }

    public function loginAlreadyTaken()
    {
        ?>
        <div>
            <p>Le login que vous avez saisi est déjà utilisé par un autre utilisateur, veuillez en choisir un autre.</p>
        </div>
        <?php
    }

}

?>