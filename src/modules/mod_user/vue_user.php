<?php
require_once "./generic_view.php";

class VueUser extends GenericView
{

    public function __construct()
    {
    }

    public function loginForm()
    {
        ?>
        <div id="form-connect">
            <form action="./index.php?module=user&status=login" method="post">
                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>

                    <button type="submit">Se connecter</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"> Remember me
                    </label>
                </div>

                <div>
                    <button type="button">Retour</button>
                    <span><a href="#">Mot de passe oublié ?</a></span>
                    <span>Pas de compte ? <a href="./index.php?module=user&status=register">S'inscrire</a></span>
                </div>
            </form>
        </div>
    <?php }


    public function registerForm()
    {
        ?>
        <div id="register-form">
            <div id="register-background">
                <form action="./index.php?module=user&status=register" method="post" id="form-register-container">
                    <label for="uname"><b>identifiant</b></label>
                    <input type="text" placeholder="identifiant" name="uname" required class="register-input">

                    <label for="psw"><b>Mot de passe</b></label>
                    <input type="password" placeholder="mot de passe" name="psw" required class="register-input">

                    <label for="email"><b>Adresse email</b></label>
                    <input type="text" placeholder="exemple@xyz.exemple" name="email" required class="register-input">

                    <label for="surname"><b>Nom</b></label>
                    <input type="text" placeholder="Lexample" name="surname" required class="register-input">

                    <label for="name"><b>Prénom</b></label>
                    <input type="text" placeholder="Jean" name="name" required class="register-input">

                    <button type="submit" id="register-submit" class="register-button">S'inscrire</button>
                </form>
                <div>
                    <button type="button" class="register-button" >Retour</button>
                    <span><a href="./index.php?module=user&status=login" id="register-redirect-connexion">Se connecter</a></span>
                </div>
            </div>
        </div>
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