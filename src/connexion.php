<?php
class Connexion
{
    protected static $bdd;


    public function __construct() { }

    public static function set_up_connection()
    {
        $file_name = "key.json";
        $data = file_get_contents("../res/".$file_name);
        $json = json_decode($data);

        $host = "vps-db5011c7.vps.ovh.net";
        $bdd_name = "sae_ge";
        try {
            self::$bdd = new PDO("pgsql:host=$host;dbname=$bdd_name", $json->user, $json->password);
        } catch (PDOException $Exception) { echo $Exception->getMessage(); }
    }
}
?>