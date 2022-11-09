<?php
require_once "./generic_view.php";

class VueExercices extends GenericView
{

    public function __construct()
    {
        parent::__construct();
        $this->displayMain();
    }
    public function displayMain()
    { ?>
        <header>
            <a href="./index.php?module=home"><p>Annuler</p></a>
            <a href="./index.php?"><p>Valider</p></a>
        </header>
        <div id="container">
            <aside id="tools">
                <p value="h1" class="elements">trait_exists</p>
                <p value="image" class="elements">image</p>
            </aside>
            <div id="preview-div">
                <div id="preview">
                </div>
            </div>
            <aside id="options">

            </aside>
        </div>
        <script src="./js/exercices.js" type="text/javascript"></script>
    <?php
    }
}
?>