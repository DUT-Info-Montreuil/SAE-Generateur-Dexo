<?php
require_once "./generic_view.php";

class VueExercices extends GenericView
{

    public function __construct()
    {
        parent::__construct();
    }
    public function displayMain()
    { ?>
        <header>
            <a href="./index.php?module=home"><p>Annuler</p></a>
            <form action="./index.php?module=exercices&status=send" method="POST">
                <input type="hidden" id="jsonOutput" name="json">
                <p id="sendButton">Valider</p>
            </form>
        </header>
        <div id="container">
            <aside id="tools">
                <p value="h1" class="elements">trait_exists</p>
                <p value="img" class="elements">image</p>
                <p value="p" class="elements">paragraph</p>
            </aside>
            <div id="preview-div">
                <div id="A4-page">
                    <div id="preview">
                    </div>
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