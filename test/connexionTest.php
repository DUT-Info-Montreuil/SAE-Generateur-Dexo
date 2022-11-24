<?php
use PHPUnit\Framework\TestCase;


class Module extends Connexion { public static function getBdd() { return self::$bdd; } }

class ConnexionTest extends TestCase
{
    public function test_set_up_connection()
    {
        $bdd = Module::getBdd();
        Connexion::set_up_connection();

        $this->assertTrue(isset($bdd));
    }
}
?>
