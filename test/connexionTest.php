<?php
require_once "../src/connexion.php";

use PHPUnit\Framework\TestCase;


class ConnexionTest extends TestCase
{
    public function test_set_up_connection()
    {
        Connexion::set_up_connection();
        $bdd = Connexion::getBdd();

        $this->assertTrue(isset($bdd));
    }
}