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

    public function displayHeader()
    { ?>
        <header>
        <nav>
            <h3>Historique</h3>
            <h2>Titre de la page</h2> <!--replace by a variable in php -->
            <div>
                <img class="logo" src="../res/img/done.png">
                <a href="index.php?module=user&status=register"><!--need to redirect to coonect or register page -->
                    <img class="logo" src="../res/img/account.png">
                </a>
            </div>
        </nav>
        </header>
    <?
    }
    private function displayAsideLeft()
    {?>
        <aside id="leftAside">
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
                    <img src="../res/img/img1.jpeg">
                    <img src="../res/img/img1.jpeg">
                    <img src="../res/img/img1.jpeg">
                    <img src="../res/img/img1.jpeg">
                </div>
            </section>

            <section>
                <div>
                    <h2>Mes Photos</h2>
                    <img class="Show" src="../res/img/show.png"> <!-- JS passer à img/hide.png-->
                </div>
                <div>
                    <img src="../res/img/img1.jpeg">
                    <img src="../res/img/img1.jpeg">
                    <img src="../res/img/img1.jpeg">
                    <img src="../res/img/img1.jpeg">
                </div>
            </section>

            <section>
                <div>
                    <h2>Banque de photos</h2>
                    <img class="Show" src="../res/img/show.png"> <!-- JS passer à img/hide.png-->
                </div>
                <div>
                    <img src="../res/img/img1.jpeg">
                    <img src="../res/img/img1.jpeg">
                    <img src="../res/img/img1.jpeg">
                    <img src="../res/img/img1.jpeg">
                </div>
            </section>
        </aside>
    <?}
    private function displayAsideRight()
    {?>
        <aside id="rightAside">
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

            <div>
                <p><a href="index.php?module=user&status=register">inscription</a></p>
            </div>
        </header>
    <?}

    public function displayMain()
    {
        $this->displayAsideLeft();
        $this->displayArticle();
        $this->displayAsideRight();
    }

    public function displayArticle()
    {?>
        <article id="sheet">
            <!--remplacer par le generation en php -->
        </article>
    <?}
}
?>