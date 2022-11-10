<?php
require_once "./generic_view.php";

class VueHome extends GenericView
{


    public function __construct()
    {
        parent::__construct();
        $this->displayHeader();
        $this->displayMain();
        $this->setInfoDiv();
        $this->displayScript();
    }
    
    public function displayMain()
    {
        $this->displayAsideLeft();
        $this->displayA4Exo();
        $this->displayAsideRight();
        $this->displayAccountMenu();
    }

    private function displayScript()
    { ?>
        <script src="./js/left_panel.js" type="text/javascript"></script>
        <script src="./js/right_panel.js" type="text/javascript"></script>
        <script src="./js/vue_home.js" type="text/javascript"></script>
    <?php }

    private function displayAccountMenu()
    {
        if (!isset($_GET["user"])) { ?>

<div class="account-menu">
<!-- TODO --> <div><a href="./index.php?module=user&status=settings">Paramètre</a></div>
    <div><a href="./index.php?module=user&status=register">S'inscrire</a></div>
    <div><a href="./index.php?module=user&status=login">Se connecter</a></div>
</div>

    <?php } else { ?>

<div class="account-menu">
    <table>
        <tbody>
<!-- TODO --> <tr scope="row"><a href="./index.php?module=user&status=settings">Paramètre</a></tr>
<!-- TODO --> <tr scope="row"><a href="./index.php?module=user&status=logout">Se déconnecter</a></tr>
        </tbody>
    </table>
</div>

    <?php } ?>

<script src="./js/account_menu.js" type="text/javascript"></script>
    
    <?php }


    public function displayA4Exo() 
    { ?>

<iframe id="A4-exo-iframe" src="./html/A4-paper-exo.html">
    <p>Don't support iframe</p>
</iframe>

    <?php }

    public function displayHeader()
    { ?>
        <header>
            <h3>Historique</h3>
            <h2>Titre de la page</h2>
            <!--replace by a variable in php
     <a href="index.php?module=user&status=register">inscription</a>-->

            <div>
                <img id="account-button" src="../res/profile-user.png" alt="profile-user" />
            </div>
        </header>

    <?php }

    private function displayAsideLeft()
    { ?>
        <aside id="left-panel-close">
            <img id="left-arrow-close" src="../res/arrow.png" alt="Arrow">
        </aside>

        <aside id="left-panel">
            <div class="hideAside">
                <h2>Cacher menu</h2>
                <img id="left-arrow-collapse" src="../res/img/circleArrow.png" alt="Arrow">
            </div>

            <section class="contentAside">
                <section class="titleAside">
                    <h2>Galeries</h2>
                    <div class="search-Part">
                        <label for="exercice-search"></label>
                        <input type="search" id="site-search" name="searchBar">
                        <button>
                            <img class="loupeImg" src="../res/img/loupe.png">
                        </button>
                    </div>
                </section>

                <section>
                    <button class="collapsible">
                        <h2>Utilisé recement</h2>
                        <img class="Hide" src="../res/img/hide.png"> <!-- JS passer à img/show.png-->
                    </button>
                    <div class="content">
                        <img src="../res/img/img1.jpeg" height="10">
                        <img src="../res/img/img1.jpeg" height="10">
                        <img src="../res/img/img1.jpeg" height="10">
                        <img src="../res/img/img1.jpeg" height="10">
                    </div>
                </section>

                <section>
                    <button class="collapsible">
                        <h2>Mes Photos</h2>

                        <img class="Hide" src="../res/img/hide.png"> <!-- JS passer à img/show.png-->
                    </button>
                    <div class="content">
                        <img src="../res/img/img1.jpeg" height="10">
                        <img src="../res/img/img1.jpeg" height="10">
                        <img src="../res/img/img1.jpeg" height="10">
                        <img src="../res/img/img1.jpeg" height="10">
                    </div>
                </section>

                <section>
                    <button class="collapsible">
                        <h2>Banque de photos</h2>

                        <img class="Hide" src="../res/img/hide.png"> <!-- JS passer à img/show.png-->
                    </button>
                    <div class="content">
                        <img src="../res/img/img1.jpeg" height="10">
                        <img src="../res/img/img1.jpeg" height="10">
                        <img src="../res/img/img1.jpeg" height="10">
                        <img src="../res/img/img1.jpeg" height="10">
                    </div>
                </section>
            </section>

        </aside>
    <?php }

    private function displayAsideRight()
    { ?>

        <aside id="right-panel-close">
            <img id="right-arrow-close" src="../res/arrow.png" alt="Arrow">
        </aside>

        <aside id="right-panel">

            <div class="hideAside">
                <h2>Cacher menu</h2>
                <img id="right-arrow-collapse" src="../res/img/circleArrow.png" alt="Arrow">
            </div>

            <section class="contentAside">
                <section class="titleAside">
                    <h2>Exercise</h2>
                    <div class="search-Part">
                        <label for="exercice-search"></label>
                        <input type="search" id="site-search" name="searchBar">
                        <button>
                            <img class="loupeImg" src="../res/img/loupe.png">
                        </button>
                    </div>
                </section>

                <section>
                    <button class="collapsible">
                        <img class="Hide" src="../res/img/hide.png"> <!-- JS passer à img/show.png-->
                        <h2>Categorie 1</h2>
                    </button>
                    <div class="content">
                        <iframe id="banques-photos-iframe" src="./html/banques-photos.html"></iframe>
                    </div>
                </section>

                <section>
                    <button class="collapsible">
                        <img class="Hide" src="../res/img/hide.png"> <!-- JS passer à img/show.png-->
                        <h2>Categorie 2</h2>
                    </button>
                    <div class="content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem consequatur molestiae doloremque,
                            sed beatae dolor velit vel corrupti veniam ab pariatur, assumenda harum ipsum impedit. Adipisci
                            labore autem consequatur reprehenderit!</p>
                    </div>
                </section>

                <section>
                    <button class="collapsible">
                        <img class="Hide" src="../res/img/hide.png"> <!-- JS passer à img/show.png-->
                        <h2>Categorie 3</h2>
                    </button>
                    <div class="content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem consequatur molestiae doloremque,
                            sed beatae dolor velit vel corrupti veniam ab pariatur, assumenda harum ipsum impedit. Adipisci
                            labore autem consequatur reprehenderit!</p>
                    </div>
                </section>

                <section>
                    <button class="collapsible">
                        <img class="Hide" src="../res/img/hide.png"> <!-- JS passer à img/show.png-->
                        <h2>Categorie 4</h2>
                    </button>
                    <div class="content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem consequatur molestiae doloremque,
                            sed beatae dolor velit vel corrupti veniam ab pariatur, assumenda harum ipsum impedit. Adipisci
                            labore autem consequatur reprehenderit!</p>
                    </div>
                </section>
            </section>
        </aside>
    <?php }

    private function setInfoDiv()
    { ?>
        <div id="pop-in-info-div"></div>
    <?php }
}
?>