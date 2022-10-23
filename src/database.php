<?php
require_once "./connexion.php";


class Database extends Connexion
{


    public function __construct() { }

    private static function attributes_builder($attr) {
        $request = "SELECT ";
        for ($i = 0; $i < sizeof($attr); $i++)
            $request = ($i < sizeof($attr)-1) ? $request."?, " : $request."?";
        
        return $request;
    }

    private static function query_builder($table, $attr, $where, $limit) 
    {
        $request = "";
        if ($attr == NULL)
            $request = "SELECT *";
        else $request = self::attributes_builder($attr);

        $request = $request." FROM public.".$table;

        if ($where != NULL) $request = $request." WHERE $where";
        if ($limit != NULL) $request = $request." LIMIT $limit";

        echo $request;
        $request_prepare = parent::$bdd->prepare($request);
        return ($attr == NULL) ? $request_prepare->execute() : $request_prepare->execute($attr);
    }

    public static function inner_join_query($table1, $on1, $table2, $on2, $attr, $where, $limit)
    {
        $request = "";
        if ($attr == NULL)
            $request = "SELECT * FROM public.".$table1;
        if(gettype($attr) == "array")
            self::attributes_builder($request, $attr);
        $request = $request." FROM public".$table1." a INNER JOIN public.".$table2." b ON a.".$on1."=b.".$on2;
        if($where != NULL)
            $request = $request." WHERE $where";
        if (gettype($limit) == "integer")
            $request = $request." LIMIT $limit";
    }

    public static function get_categorie_table($attr=NULL, $where=NULL, $limit=NULL) {
        return self::query_builder("categorie", $attr, $where, $limit);
    }

    public static function get_compte_table($attr=NULL, $where=NULL, $limit=NULL) {
        return self::query_builder("compte", $attr, $where, $limit);
    }

    public static function get_exercices_table($attr=NULL, $where=NULL, $limit=NULL) {
        return self::query_builder("exercices", $attr, $where, $limit);
    }

    public static function get_historique_table($attr=NULL, $where=NULL, $limit=NULL) {
        return self::query_builder("historique", $attr, $where, $limit);
    }

    public static function get_photo_table($attr=NULL, $where=NULL, $limit=NULL) {
        return self::query_builder("photo", $attr, $where, $limit);
    }

    public static function get_role_table($attr=NULL, $where=NULL, $limit=NULL) {
        return self::query_builder("role", $attr, $where, $limit);
    }

    public static function get_templates_table($attr=NULL, $where=NULL, $limit=NULL) {
        return self::query_builder("templates", $attr, $where, $limit);
    }

    public static function get_templates_exercice_table($attr=NULL, $where=NULL, $limit=NULL) {
        return self::query_builder("templates_exercice", $attr, $where, $limit);
    }
}
?>