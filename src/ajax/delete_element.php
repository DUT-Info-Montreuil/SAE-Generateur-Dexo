<?php
require "../connexion.php";

session_start();
Connexion::set_up_connection("../../res/");

if (isset($_POST['id'], $_POST['mode'])) {
    $id = $_POST['id'];
    $mode = $_POST['mode'];

    if ($mode === 0)
        deleteAccount($id);
    elseif ($mode === 1)
        deleteImage($id);
}

function deleteImage($id) {

}

function deleteAccount($id) {

}