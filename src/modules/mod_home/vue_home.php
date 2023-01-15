<?php
require_once "./generic_view.php";


class VueHome extends GenericView
{
    private $categories;
    private $bank_pictures;
    private $my_pictures;


    public function __construct($categories, $pictures_bank, $my_pictures)
    {
        parent::__construct();
        $this->categories = $categories;
        $this->bank_pictures = $pictures_bank;
        $this->my_pictures = $my_pictures;

        $this->displayHeader();
        $this->displayMain();
        $this->displayAccountMenu();
        $this->displaySettingsMenu();
        $this->displayPopInInfo();
        $this->displayExercices();
        $this->putScripts();
    }

    public function displayMain()
    {
        $this->displayAsideLeft();
        $this->displayA4Exo();
        $this->displayAsideRight();
        $this->displayImageUploadMenu();
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
                $categories_html = $categories_html."<div id=\"idexercise-".$exercise->id."\" class=\"categories draggable\" id-ex=\"".$exercise->id."\" draggable=\"true\" alt=\"".$exercise->nom."\">";
                $categories_html = $categories_html."<h1>".$exercise->nom."</h1>";
                $categories_html = $categories_html."</div>";
            }

            $categories_html = $categories_html."</div></div>";
        }

        return $categories_html;
    }

    public function generatePicturesBank()
    {
        $picture_bank_html = "";
        $img_id = 0;
        foreach ($this->bank_pictures as $image) {
            $picture_bank_html = $picture_bank_html.'<img img-id="'.$img_id.'" src="data:image;base64,'.$image->bin.'" class="draggable" draggable="true" height="30" alt="'.$image->name.'">';
            $img_id = $img_id + 1;
        }
        return $picture_bank_html;
    }

    public function generateMyPictures()
    {
        $my_pictures_html = "";
        if(isset($_SESSION["id"])) {
            foreach ($this->my_pictures as $image)
                $my_pictures_html = $my_pictures_html.'<img src="data:image;base64,'.$image->bin.'" class="draggable" draggable="true" height="30" alt="'.$image->name.'">';
        } else $my_pictures_html = $my_pictures_html."<p>Vous devez vous connectez pour pouvoir avoir vos images</p>";

        return $my_pictures_html;
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

    public function displayImageUploadMenu()
    { ?>
    <object title="image-menu" type="text/html" id="pop-in_Image" data="./html/upload-Image.html">
        <p>Don't support object tag</p>
    </object>
    <?php }

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
                    <input id="images-input-search-bar" type="search" placeholder="Rechercher votre images"/>
                    <button>
                        <img class="loupeImg" src="../res/img/loupe.png">
                    </button>
                </div>
            </section>

            <section class="contentAside">
                <div>
                    <div id="images-search-container" class="content" style="max-height: initial;"></div>
                </div>

                <div>
                    <button class="collapsible">
                        <h2>Images utilisées récemment</h2>
                        <img class="Hide" src="../res/img/hide.png"> <!-- JS passer à img/show.png-->
                    </button>
                    <div class="content" id="images-recently-used-content"></div>
                </div>

                <div>
                    <button class="collapsible">
                        <h2>Banque de photos</h2>
                        <img class="Hide" src="../res/img/hide.png">
                    </button>
                    <label id="labelImg" for="menuImg"><img src="../res/img/upload.png"></label>
                    <input id="menuImg" style="display : none" type="button">
                    
                    <div id="bank-pictures-container" class="content">
                        <?=$this->generatePicturesBank()?>
                    </div>
                </div>

                <div>
                    <button class="collapsible">
                        <h2>Mes Photos</h2>
                        <img class="Hide" src="../res/img/hide.png">
                    </button>
                    <div id="personal-pictures-container" class="content"><?=$this->generateMyPictures()?></div>
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
                    <input id="exercises-input-search-bar" placeholder="Recherchez un exercice" type="search"/>
                    <button>
                        <img class="loupeImg" src="../res/img/loupe.png">
                    </button>
                </div>
            </section>

            <div>
                <div id="exercises-search-container" class="content" style="max-height: initial;"></div>
            </div>

            <section class="contentAside">
                <div>
                    <button class="collapsible">
                        <h2>Exercices utilisé recement</h2>
                        <img class="Hide" src="../res/img/hide.png"> <!-- JS passer à img/show.png-->
                    </button>
                    <div class="content" id="exercises-recently-used-content"></div>
                </div>

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
                <?php if ($_SESSION['role'] === 1) { ?>
                <a href="./index.php?module=admin_panel&mode=0"><button id="admin-panel-button">Gestion du site</button></a>
                <?php } ?>
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
        <script type="text/javascript" src="./js/search-bar.js"></script>
        <script type="text/javascript" src="./js/recently-used.js"></script>
    <?php }
}
