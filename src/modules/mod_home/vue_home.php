<?php
require_once "./generic_view.php";

class VueHome extends GenericView
{

    public function __construct()
    {
        parent::__construct();
        $this->displayHeader();
        $this->displayMain();
    }

    private function displayAccountMenu()
    { ?>

    <?php }

    public function displayHeader()
    { ?>

<header>
    <h3>Historique</h3>
    <h2>Titre de la page</h2> <!--replace by a variable in php
     <a href="index.php?module=user&status=register">inscription</a>-->

    <div>
        <img id="account-button" src="../res/profile-user.png" alt="profile-user"/>
    </div>
</header>

    <?php }

    private function displayAsideLeft()
    { ?>

<aside id="left-panel-close">
    <img id="left-arrow-close" src="../res/arrow.png" alt="Arrow">
</aside>

<aside id="left-panel-open">
    <img id="left-arrow-open" src="../res/arrow.png" alt="Arrow">

    <section class="titleAside">
        <h2>Galeries</h2>
        <div>
            <img class="loupeImg" src="../res/img/loupe.png">
            <img class="Show" src="../res/img/show.png"> <!-- JS passer à img/hide.png-->
        </div>
    </section>

    <section>
        <div>
            <h2>Utilisé recement</h2>
            <img class="Show" src="../res/img/show.png"> <!-- JS passer à img/hide.png-->
        </div>
        <div>
            <img src="../res/img/img1.jpeg" height="10">
            <img src="../res/img/img1.jpeg" height="10">
            <img src="../res/img/img1.jpeg" height="10">
            <img src="../res/img/img1.jpeg" height="10">
        </div>
    </section>

    <section>
        <div>
            <h2>Mes Photos</h2>
            <img class="Show" src="../res/img/show.png"> <!-- JS passer à img/hide.png-->
        </div>
        <div>
            <img src="../res/img/img1.jpeg" height="10">
            <img src="../res/img/img1.jpeg" height="10">
            <img src="../res/img/img1.jpeg" height="10">
            <img src="../res/img/img1.jpeg" height="10">
        </div>
    </section>

    <section>
        <div>
            <h2>Banque de photos</h2>
            <img class="Show" src="../res/img/show.png"> <!-- JS passer à img/hide.png-->
        </div>
        <div>
            <img src="../res/img/img1.jpeg" height="10">
            <img src="../res/img/img1.jpeg" height="10">
            <img src="../res/img/img1.jpeg" height="10">
            <img src="../res/img/img1.jpeg" height="10">
        </div>
    </section>
</aside>

<script src="./left_panel.js" type="text/javascript"></script>

    <?php }

    private function displayAsideRight()
    { ?>

<aside id="right-panel-close">
    <img id="right-arrow-close" src="../res/arrow.png" alt="Arrow">
</aside>

<aside id="right-panel-open">
    <img id="right-arrow-open" src="../res/arrow.png" alt="Arrow">

    <section class="titleAside">
        <div>
            <img class="Show" src="../res/img/show.png"> <!-- JS passer à img/hide.png-->
            <img class="loupeImg" src="../res/img/loupe.png">
        </div>
        <h2>Exercise</h2>
    </section>

    <section>
        <div>
            <img class="Hide" src="../res/img/hide.png"> <!-- JS passer à img/show.png-->
            <h2>Categorie 1</h2>
        </div>
        <div>
            <!-- contenue à cacher/appeler  ou non -->
        </div>
    </section>

    <section>
        <div>
            <img class="Hide" src="../res/img/hide.png"> <!-- JS passer à img/show.png-->
            <h2>Categorie 2</h2>
        </div>
        <div>
            <!-- contenue à cacher/appeler  ou non -->
        </div>
    </section>

    <section>
        <div>
            <img class="Hide" src="../res/img/hide.png"> <!-- JS passer à img/show.png-->
            <h2>Categorie 3</h2>
        </div>
        <div>
            <!-- contenue à cacher/appeler  ou non -->
        </div>
    </section>

    <section>
        <div>
            <img class="Hide" src="../res/img/hide.png"> <!-- JS passer à img/show.png-->
            <h2>Categorie 4</h2>
        </div>
        <div>
            <!-- contenue à cacher/appeler  ou non -->
        </div>
    </section>
</aside>

<script src="./right_panel.js" type="text/javascript"></script>

    <?php }

    public function displayMain()
    {
        $this->displayAsideLeft();
        $this->displayArticle();
        $this->displayAsideRight();
    }

    public function displayArticle()
    { ?>

<article id="sheet">
    <!--remplacer par le generation en php -->
</article>

    <?php }
}
?>