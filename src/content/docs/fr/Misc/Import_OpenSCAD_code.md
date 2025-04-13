---
title: Importer du code d'OpenSCAD
---
|  |
| --- |
| Tutoriel |
| Thème |
| Importer du code d'OpenSCAD |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
| 30 minutes |
| Auteurs |
| r-frank |
| Version de FreeCAD |
| 0.16.6704 |
| Fichiers exemples |
|  |
| Voir aussi |
| *None* |
|  |

## Introduction

OpenSCAD, comme FreeCAD, est un programme de CAO 3D open source. Alors que FreeCAD utilise une approche visuelle, OpenSCAD utilise une interface de programmation pour effectuer des opérations 3D. OpenSCAD Workbench peut être utilisé pour importer du code objet OpenSCAD et pour accéder à certaines des opérations de maillage possibles avec OpenSCAD.

## Installation d'OpenSCAD

* Les utilisateurs de Linux peuvent installer à partir des dépôts de la distribution appropriée, comme Debian, openSUSE, Mint, Unbuntu, etc. ou à partir de la [page d'accueil OpenSCAD](http://www.openscad.org/).
* Les utilisateurs de Mac peuvent télécharger les binaires à partir de [page d'accueil OpenSCAD](http://www.openscad.org/).
* Les utilisateurs de Windows peuvent télécharger le programme à partir de [page d'accueil OpenSCAD](http://www.openscad.org/). Puisque seul l'exécutable OpenSCAD est nécessaire à FreeCAD, les utilisateurs de Windows peuvent installer la version portable s'ils le souhaitent.

## Configurer l'atelier OpenSCAD dans FreeCAD

* Ouvrir FreeCAD.
* Passez à l'[atelier OpenSCAD](/OpenSCAD_Workbench/fr "OpenSCAD Workbench/fr").
* Choisir Édition → Préférences → OpenSCAD (colonne de gauche) puis dans son menu principal
  + Définir le lien vers l'exécutable OpenSCAD (section: paramètres généraux OpenSCAD).
  + Toutes les autres valeurs de la page de configuration peuvent être laissées par défaut.

## Le modèle d'échantillon

Nous utiliserons ici le fichier [example005.scad](https://github.com/openscad/openscad/blob/master/examples/Old/example005.scad) des (anciens) exemples d'OpenSCAD, mais vous pouvez utiliser n'importe quel fichier scad de votre choix.

![](/images/TutorialOpenSCAD_SampleFile.jpg)

## Importation du modèle dans FreeCAD

* Dans FreeCAD, choisissez simplement Fichier → Ouvrir et choisissez le fichier .scad que vous souhaitez importer.
* Il n'est pas important de savoir quel atelier est activé, l'atelier OpenSCAD lui-même n'est nécessaire que pour appliquer des caractéristiques spéciales à votre modèle.
* FreeCAD va importer le fichier OpenSCAD et construire un arbre avec des primitives et des opérations booléennes.
* Tutoriel terminé.

![](/images/TutorialOpenSCAD_ImportFile.jpg)

## En relation

* [FreeCAD Howto Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export") (en)
* [Préférences Importer/Exporter](/Import_Export_Preferences/fr "Import Export Preferences/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Import_OpenSCAD_code/fr&oldid=1553127>"