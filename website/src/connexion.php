<?php

class Connexion
{
    protected static $bdd;


    public static function set_up_connection($path = "./res/")
    {
        $file_name = "key.json";
        $data = file_get_contents($path.$file_name);
        $json = json_decode($data);

        $host = "database";
        $bdd_name = "sae_ge";
        try {
            self::$bdd = new PDO("pgsql:host=$host;dbname=$bdd_name;port=5432", $json->user, $json->password);
        } catch (PDOException $Exception) { echo $Exception->getMessage() . "\n $data"; }
    }

    public static function getBdd() { return self::$bdd; }
}