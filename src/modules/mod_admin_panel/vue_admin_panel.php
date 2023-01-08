<?php
require_once "./generic_view.php";


class VueAdminPanel extends GenericView
{
    public function __construct()
    {
        parent::__construct();

        $this->displayInsert();
    }

    public function displayInsert()
    { ?>
        <form name="upload-image" method="POST" action="./index.php?module=admin_panel" enctype="multipart/form-data">
            <input type="file" name="image"/>
            <input type="submit" name="insert" value="Insertion"/>
        </form>
    <?php }
}