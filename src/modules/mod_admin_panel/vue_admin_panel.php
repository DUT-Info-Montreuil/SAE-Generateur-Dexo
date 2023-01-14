<?php
require_once "./generic_view.php";


class VueAdminPanel extends GenericView
{
    public function __construct()
    {
        parent::__construct();

        $this->displayHeader();
    }

    public function displayHeader()
    { ?>
        <header>
            <a href="./index.php?module=home"><p>Retour</p></a>
            <a href="./index.php?module=admin_panel&mode=0"><p>Comptes</p></a>
            <a href="./index.php?module=admin_panel&mode=1"><p>Photos</p></a>
        </header>
    <?php }

    public function displayAdminPannel($datas,$mode)
    {
        if (count($datas) > 0) {
            ?>
            <table>
            <thead>
            <tr>
                <?php
                foreach ($datas[0] as $key => $value) {
                    ?>
                    <th><?= $key ?></th>
                <?php }
                ?>
                <th>Supprimer</th>
            </tr>
            </thead>
            <tbody>
            <?php
            foreach ($datas as $row) {
                ?>
                <tr>
                    <?php
                    foreach ($row as $value) {
                        ?>
                        <td><?= $value ?></td>
                        <?php
                    }
                    ?>
                <td><?php $this->getDelete($row['id'], $mode) ?></td></tr>
                <?php
            }
            ?>
            </tbody></table>
            <?php
        }
    }

    private function getDelete($id,$mode) {
        ?>
        <button class="delete-button" value="<?=implode(",",array($id,$mode))?>">
            <span>&times;</span>
        </button>
        <?php
    }

    private function displayInfoDiv() {
        ?>
            <div id="pop-in-info-div"></div>
        <?php
    }

    public function getScripts()
    {
        ?>
        <script type="text/javascript" src="./js/admin.js"></script>
        <?php
    }
}