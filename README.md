# SAE | Generateur d'exo
![html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![php]( 	https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white) ![jquery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white) ![postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) ![docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

_IUT de Montreuil Pari8 | BUT Informatique en 2eme année._

## Sommaire:
- [Développeurs sur le projet](#développeurs-sur-le-projet)
- [Qu'est-ce que c'est ce projet ?](#quest-ce-que-cest-ce-projet-)
- [Concernant la BDD](#concernant-la-bdd)
- [Comment lancer le siteweb chez soi ?](#comment-lancer-le-siteweb-depuis-chez-soi-)

---

## Développeurs sur le projet:
- <code><img style="width: 35px; height: 35px" src="https://avatars.githubusercontent.com/u/67024770?v=4"/></code> [CHRZASZCZ Naulan](https://github.com/NaulaN)
- <code><img style="width: 35px; height: 35px" src="https://avatars.githubusercontent.com/u/95338528?v=4"/></code> [NARCISO Tiago](https://github.com/almerion)
- <code><img style="width: 35px; height: 35px" src="https://avatars.githubusercontent.com/u/101273741?v=4"/></code> [TOURE Mehedi](https://github.com/MehediT)

## Qu'est-ce que c'est ce projet ?
Ce projet est la SAE du semestre 3 du BUT Informatique, nous devons réaliser un site internet qui permet de generer des exercices pour une école primaire
- Cahier des charges selon le demande client: [here](https://github.com/DUT-Info-Montreuil/SAE-Generateur-Dexo/blob/main/SAE%20-%20S3.01-1.pdf)
- Conception BDD: [here](https://github.com/DUT-Info-Montreuil/SAE-Generateur-Dexo/blob/main/SAE-BDD.pdf)

## Concernant la BDD
Les `scripts` à executer pour remplir et crée la BDD sur `postgres` sont situé dans le repertoire [scripts](https://github.com/DUT-Info-Montreuil/SAE-Generateur-Dexo/tree/main/scripts) du repository 

## Comment lancer le siteweb depuis chez soi ?
Pour lancer le site web depuis chez soi en toute simplicité, vous devez vous assurer que vous avez plein droit sur votre machine qui tourne sur Linux et placez-vous à la racine du projet !
Ensuite, vous devez taper cette commande :
```console
sudo docker compose up
```
La commande suivante permet de construire le projet avec ses dépendances et de lancer le serveur web automatiquement, lorsque la construction et le lancement du projet est terminé vous pouvez vous rendre sur votre navigateur internet et écrire cet URL : `localhost: 80'
