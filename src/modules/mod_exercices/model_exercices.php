<?php
require_once "./connexion.php";

class ModelExercices extends Connexion
{
    public function __construct()
    {
        parent::__construct();
    }
    public function tryAddJSON()
    {
        $json = json_decode($_POST["json"]);
        $data = $json->{'elements'};

        if($this->canBeSend($json)){
            $idCompte = $_SESSION['id'];
            $idCategorie = $json->{'idCategorie'};
            $title = $json->{'title'};

            $query = "INSERT INTO public.exercices VALUES (DEFAULT,:idCompte,:idCategorie,:title,:json)";
            $prepare = parent::$bdd->prepare($query);
            $prepare->bindValue(':idCompte',$idCompte);
            $prepare->bindValue(':idCategorie',$idCategorie);
            $prepare->bindValue(':title',$title);
            $prepare->bindValue(':json',json_encode($data));
            
            $prepare->execute();
        }
    }

    public function canBeSend($json)
    {
        $canBeSend = true;
        $data = $json->{'elements'};
        
        $strJsonFileContents = json_decode(file_get_contents("../res/exerciceOptions.json"));

        foreach ($data as $key => $value) {
            if($canBeSend === true && isset($strJsonFileContents->{strtolower($value->{'type'})})){
                $properties = $value->{'properties'};
                if(!(isset($properties->{'left'}) && isset($properties->{'top'}))){
                    $left = $this->getDoubleSize($properties->{'left'});
                    $top = $this->getDoubleSize($properties->{'top'});
                    $maxTop = $this->getDoubleSize($json->{'height'});
                    if (!($left > 0 && $left < 21 && $top > 0 && $top < $maxTop && $maxTop > 0 && $maxTop < 29.7)){
                        $canBeSend = false;
                    }
                }
            }
        }
        return $canBeSend;
    }

    public function getDoubleSize(String $property)
    {
        return doubleval(substr($property,0,strpos($property, 'cm')));
    }

}
?>