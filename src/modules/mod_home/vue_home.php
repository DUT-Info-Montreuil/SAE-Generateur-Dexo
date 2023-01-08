<?php
require_once "./generic_view.php";


class VueHome extends GenericView
{
    private $categories;


    public function __construct($categories)
    {
        parent::__construct();
        $this->categories = $categories;

        $this->displayHeader();
        $this->displayMain();
        $this->displayAccountMenu();
        $this->displaySettingsMenu();
        $this->displayPopInInfo();
        $this->displayExercices();
        $this->putScripts();
    }

    public function displayExercices()
    { ?>
        <object id="exercice-edit" data="./html/exercices.html" type="text/html" style="display: none">
            <p>Don't support object tag</p>
        </object>
    <?php }

    public function displayHeader()
    { ?>
        <header id="header-index">
            <h1>Historique</h1>
            <h1>SAE | Générateur d'exercices !</h1>
            <div><img id="account-button" src="../res/profile-user.png" alt="profile-user"/></div>
        </header>
    <?php }

    public function displayMain()
    {
        $this->displayAsideLeft();
        $this->displayA4Exo();
        $this->displayAsideRight();
        $this->displayImagUploadMenu();
    }

    public function displayImagUploadMenu()
    {
        ?>
        <object title="image-menu" type="text/html" id="pop-in_Image" data="./html/upload-Image.html">
            <p>Don't support object tag</p>
        </object>
        <?php
    }


    public function generateCategories()
    {
        $categories_html = "";
        foreach ($this->categories as $category) {
            $categories_html = $categories_html."<div id=\"root-categorie".$category->id."\">";
            $categories_html = $categories_html."<button class=\"collapsible\">";
            $categories_html = $categories_html."<img class=\"Hide\" src=\"../res/img/hide.png\">";
            $categories_html = $categories_html."<h2>".$category->nom."</h2>";
            $categories_html = $categories_html."</button>";
            $categories_html = $categories_html."<div class=\"content\">";

            foreach ($category->exercises as $exercise) {
                $categories_html = $categories_html."<div id=\"idexercise-".$exercise->id."\" class=\"categories draggable\" id-ex=\"".$exercise->id."\" draggable=\"true\">";
                $categories_html = $categories_html."<h1>".$exercise->nom."</h1>";
                $categories_html = $categories_html."</div>";
            }

            $categories_html = $categories_html."</div></div>";
        }

        return $categories_html;
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

            <section class="contentAside">
                <div>
                    <button class="collapsible">
                        <h2>Utilisé recement</h2>
                        <img class="Hide" src="../res/img/hide.png"> <!-- JS passer à img/show.png-->
                    </button>
                    <div class="content">
                        <img class="draggable" src="../res/img/img1.jpeg" height="30" draggable="true">
                        <img class="draggable" src="../res/img/img1.jpeg" height="30" draggable="true">
                        <img class="draggable" src="../res/img/img1.jpeg" height="30" draggable="true">
                        <img class="draggable" src="../res/img/img1.jpeg" height="30" draggable="true">
                    </div>
                </div>

                <div>
                    <button class="collapsible">
                        <h2>Banque de photos</h2>
                        <img class="Hide" src="../res/img/hide.png"> <!-- JS passer à img/show.png-->
                    </button>
                    <label id="labelImg" for="menuImg"><img src="../res/img/upload.png"></label>
                    <input id="menuImg" style="display : none" type="button">
                    <div class="content">
                        <img class="draggable" src="../res/img/img1.jpeg" height="30" draggable="true">
                        <img class="draggable" src="../res/img/img1.jpeg" height="30" draggable="true">
                        <img class="draggable" src="../res/img/img1.jpeg" height="30" draggable="true">
                        <img class="draggable" src="../res/img/img1.jpeg" height="30" draggable="true">
                    </div>
                </div>

                <div>
                    <button class="collapsible">
                        <h2>Mes Photos</h2>
                        <img class="Hide" src="../res/img/hide.png"> <!-- JS passer à img/show.png-->
                    </button>
                    <div class="content">
                        <img class="draggable" src="../res/img/img1.jpeg" height="30" draggable="true">
                        <img class="draggable" src="../res/img/img1.jpeg" height="30" draggable="true">
                        <img class="draggable" src="../res/img/img1.jpeg" height="30" draggable="true">
                        <img class="draggable" src="../res/img/img1.jpeg" height="30" draggable="true">
                    </div>
                </div>
            </section>
        </aside>
    <?php }

    /**
     * Display an A4 paper
     * @return void
     */
    public function displayA4Exo()
    { ?>
        <main>
            <object title="A4-paper" type="text/html" role="application" id="A4-exo-iframe"
                    data="./html/A4-paper-exo.html">
                <p>Don't support object tag</p>
            </object>
        </main>
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
                <?=$this->generateCategories()?>
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
        if (!isset($_SESSION["id"])) { ?>
            <div class="account-menu">
                <button class="settings-button">Paramètre</button>
                <button id="register-button">S'inscrire</button>
                <button id="login-button">Se connecter</button>
            </div>
        <?php } else { ?>
            <div class="account-menu">
                <button class="settings-button">Paramètre</button>
                <button id="logout-button">Se déconnecter</button>
            </div>
        <?php } ?>
    <?php }

    private function displaySettingsMenu()
    { ?>
        <object title="Settings" type="text/html" role="application" id="settings-iframe" data="./html/settings.html">
            <p>Don't support object tag</p>
        </object>
    <?php }

    private function displayPopInInfo()
    { ?>
        <div id="pop-in-info-div"></div>
    <?php }

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
        <script type="text/javascript" src="./js/show_hide_popIn_Image.js"></script>
        <script type="text/javascript" src="./js/movable-elements.js"></script>
        <script type="text/javascript" src="./js/draggable-elements.js"></script>
    <?php }
}

?>