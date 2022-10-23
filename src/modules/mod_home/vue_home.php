<?php
require_once "./generic_view.php";

class VueHome extends GenericView
{

    public function __construct()
    {
        parent::__construct();
        $this->displayHeader();
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
}
?>