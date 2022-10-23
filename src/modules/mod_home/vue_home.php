<?php
require_once "./generic_view.php";

class VueHome extends GenericView
{

    public function __construct()
    {
        parent::__construct();
        $this->displayHeader();
        $this->displayPannels();
    }

    public function displayHeader()
    { ?>
        <header>
            <div>
                <p>history</p>
            </div>

            <div>
                <p>page title</p>
            </div>

            <div>
                <p><a href="index.php?module=user&status=register">inscription</a></p>
            </div>
        </header>
<?php
    }

    public function displayPannels()
    {
        ?>
        <div id="left-panel-close">
            <img class="img-button-panel" id="arrow-left-panel" src="../res/right-arrow.png" alt="arrow-indicator"/>
        </div>

        <div id="right-panel-close">
            <img class="img-button-panel" id="arrow-right-panel" src="../res/right-arrow.png" alt="arrow-indicator"/>
        </div>

        <div id="left-panel-open">
            <img class="img-button-panel" id="arrow-left-panel-down" src="../res/down-arrow.png" alt="arrow-indicator"/>
        </div>

        <div id="right-panel-open">
            <img class="img-button-panel" id="arrow-right-panel-down" src="../res/down-arrow.png" alt="arrow-indicator"/>
        </div>

        <script src="../scripts/home-page.js"></script>
<?php
    }
}
?>