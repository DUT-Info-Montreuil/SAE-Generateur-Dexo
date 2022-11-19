<?php
require_once "./generic_view.php";


class VueHome extends GenericView
{


    public function __construct()
    {
        parent::__construct();
        $this->displayHeader();
        $this->displayMain();
        $this->displayAccountMenu();
        $this->displaySettingsMenu();
        $this->displayPopInInfo();
        $this->putScripts();
    }

    public function displayHeader()
    { ?>
        <header>
            <h1>Historique</h1>
            <h1>SAE | Générateur d'exercices !</h1>
            <div> <img id="account-button" src="../res/profile-user.png" alt="profile-user"/> </div>
        </header>
    <?php }

    public function displayMain()
    {
        $this->displayAsideLeft();
        $this->displayA4Exo();
        $this->displayAsideRight();
    }

    /**
     * Display images available on the website
     * @return void
     */
    private function displayAsideLeft()
    { ?>
        <aside id="left-panel-close" class="panels-close">
            <img id="left-arrow-close"
                 class="arrows-collapse"
                 src="../res/arrow.png" alt="Arrow">
        </aside>

        <aside id="left-panel" class="panels">
            <div class="hideAside">
                <h2>Cacher</h2>
                <img id="left-arrow-collapse"
                     class="arrows-collapse"
                     src="../res/img/circleArrow.png"
                     alt="Arrow">
            </div>

            <section class="contentAside">
                <section class="titleAside">
                    <h1>GALERIES</h1>
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

    /**
     * Display an A4 paper
     * @return void
     */
    public function displayA4Exo()
    { ?>
        <object title="A4-paper" type="text/html" role="application" id="A4-exo-iframe" data="./html/A4-paper-exo.html">
            <p>Don't support object tag</p>
        </object>
    <?php }

    /**
     * Display exercise available on the website
     * @return void
     */
    private function displayAsideRight()
    { ?>

        <aside id="right-panel-close" class="panels-close">
            <img id="right-arrow-close" class="arrows-collapse" src="../res/arrow.png" alt="Arrow">
        </aside>

        <aside id="right-panel" class="panels">
            <div class="hideAside">
                <h2>Cacher</h2>
                <img id="right-arrow-collapse" src="../res/img/circleArrow.png" alt="Arrow">
            </div>

            <section class="titleAside">
                <h1>EXERCICES</h1>

                <div class="search-Part">
                    <label for="exercice-search"></label>
                    <input type="search" id="site-search" name="searchBar">
                    <button>
                        <img class="loupeImg" src="../res/img/loupe.png">
                    </button>
                </div>
            </section>

            <section class="contentAside">
                <div>
                    <div style="display: flex; justify-content: space-around">
                        <label for="checkbox-category1" class="collapsible">Categorie 1</label>
                        <input type="checkbox" id="checkbox-category1" class="checkboxes">
                    </div>

                    <object class="object-categories" id="exos-categorie1" type="text/html" data="./html/categories/cat1.html">
                        <p>Don't support object tag</p>
                    </object>
                </div>

                <div>
                    <div style="display: flex; justify-content: space-around">
                        <label for="checkbox-category2" class="collapsible">Categorie 2</label>
                        <input type="checkbox" id="checkbox-category2" class="checkboxes">
                    </div>

                    <object class="object-categories" id="exos-categorie2" type="text/html" data="./html/categories/cat2.html">
                        <p>Don't support object tag</p>
                    </object>
                </div>

                <div>
                    <div style="display: flex; justify-content: space-around">
                        <label for="checkbox-category3" class="collapsible">Categorie 3</label>
                        <input type="checkbox" id="checkbox-category3" class="checkboxes">
                    </div>

                    <object class="object-categories" id="exos-categorie3" type="text/html" data="./html/categories/cat3.html">
                        <p>Don't support object tag</p>
                    </object>
                </div>

                <div>
                    <div style="display: flex; justify-content: space-around">
                        <label for="checkbox-category4" class="collapsible">Categorie 4</label>
                        <input type="checkbox" id="checkbox-category4" class="checkboxes">
                    </div>

                    <object class="object-categories" id="exos-categorie4" type="text/html" data="./html/categories/cat4.html">
                        <p>Don't support object tag</p>
                    </object>
                </div>
            </section>
        </aside>
    <?php }

    /**
     * Display account menu
     *  When user connected, the menu displayed:
     *      - settings
     *      - logout
     *  When user not connected, the menu displayed:
     *      - settings
     *      - login
     *      - register
     * @return void
     */
    private function displayAccountMenu()
    {
        if (!isset($_GET["user"])) { ?>
            <div class="account-menu">
                <!-- TODO -->
                <div><button id="settings-button">Paramètre</button></div>
                <div><a href="./index.php?module=user&status=register">S'inscrire</a></div>
                <div><a href="./index.php?module=user&status=login">Se connecter</a></div>
            </div>
        <?php } else { ?>
            <div class="account-menu">
                <table>
                    <tbody>
                    <!-- TODO -->
                    <tr><a href="./index.php?module=user&status=settings">Paramètre</a></tr>
                    <!-- TODO -->
                    <tr><a href="./index.php?module=user&status=logout">Se déconnecter</a></tr>
                    </tbody>
                </table>
            </div>
        <?php } ?>
    <?php }

    private function displaySettingsMenu()
    {  ?>
        <object title="Settings" type="text/html" role="application" id="settings-iframe" data="./html/settings.html">
            <p>Don't support object tag</p>
        </object>
    <?php }

    private function displayPopInInfo() { ?> <div id="pop-in-info-div"></div> <?php }

    /**
     * @return void
     */
    private function putScripts()
    { ?>
        <script type="text/javascript" src="./js/left_panel.js"></script>
        <script type="text/javascript" src="./js/right_panel.js"></script>
        <script type="text/javascript" src="./js/vue_home.js"></script>
        <script type="text/javascript" src="./js/toggle-themes.js"></script>
        <script type="text/javascript" src="./js/account_menu.js"></script>
        <script type="text/javascript" src="./js/settings.js"></script>
    <?php }
}

?>