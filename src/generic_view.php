<?php
class GenericView
{

    public function __construct() { ob_start(); }

    public function getDisplay(){ return ob_get_clean(); }
}
?>