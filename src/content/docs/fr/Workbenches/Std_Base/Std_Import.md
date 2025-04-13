---
title: Std Importer
---
|  |
| --- |
| Std Importer |
| Emplacement du menu |
| Fichier → Importer... |
| Ateliers |
| Tous |
| Raccourci par défaut |
| Ctrl+Alt+I |
| Introduit dans la version |
| - |
| Voir aussi |
| [Std Ouvrir](/Std_Open/fr "Std Open/fr"), [Import Export](/Import_Export/fr "Import Export/fr"), [Préférences Importer/Exporter](/Import_Export_Preferences/fr "Import Export Preferences/fr") |
|  |

## Description

La commande **Std Importer** importe la géométrie d'un format de fichier différent dans le document actif. De nombreux formats de fichiers sont pris en charge et pour certains formats, plusieurs options d'importation existent. Voir [Import Export](/Import_Export/fr "Import Export/fr") pour plus d'informations.

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") : si un format d'image est sélectionné, la commande créera un [plan d'image](#Plan_d'image).

## Utilisation

1. Il existe plusieurs façons d'appeler la commande:
   * Sélectionnez l'option **Fichier → ![](/images/Std_Import.svg) Importer...** du menu.
   * Utilisez le raccourci clavier : Ctrl+I. version 1.0 et précédentes
   * Utilisez le raccourci clavier : Ctrl+Alt+I. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")
2. Sélectionnez éventuellement le format de fichier correct dans la boîte de dialogue.
3. Sélectionnez un fichier.
4. Appuyez sur le bouton Ouvrir.

## Options

* Appuyez sur Échap ou sur le bouton Annuler pour annuler la commande.

## Remarques

* Pour convertir un [maillage](/Mesh_Workbench/fr "Mesh Workbench/fr") importé en tant que solide, consultez le tutoriel [Importer depuis STL ou OBJ](/Import_from_STL_or_OBJ/fr "Import from STL or OBJ/fr").
* Pour importer dans un nouveau document, vous pouvez utiliser la commande [Std Ouvrir](/Std_Open/fr "Std Open/fr").
* Certains ateliers ont des commandes d'importation supplémentaires. Voir: [Import Export](/Import_Export/fr "Import Export/fr").

## Préférences

* Voir : [Préférences Importer/Exporter](/Import_Export_Preferences/fr "Import Export Preferences/fr").

## Plan d'image

Un plan d'image est une représentation plane d'une image dans la [vue 3D](/3D_view/fr "3D view/fr"). Il peut par exemple être utilisé lors de la création d'un modèle basé sur des photographies d'un objet existant.

Par défaut, un plan d'image est placé sur le plan global XY. La taille initiale d'un plan d'image est calculée sur la base d'une résolution de 96 px/pouce.

### Modifier

1. Pour modifier un plan d'image, effectuez l'une des opérations suivantes :
   * Double-cliquez sur le plan d'image dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
   * Cliquez avec le bouton droit de la souris sur le plan d'image dans la vue en arborescence et sélectionnez **![](/images/Image-scaling.svg) Modifier l'image...** dans le menu contextuel.
2. Si le plan de l'image n'est pas parallèle au plan XY, XZ ou YZ du système de coordonnées global, il est réaligné pour être parallèle au plan XY.
3. Le panneau de tâches **Réglages du plan de l'image** s'ouvre.
4. Sélectionnez **Plan XY**, **Plan XZ** ou **Plan YZ** du système de coordonnées global.
5. Cochez **Inverser le sens** pour faire pivoter le plan de l'image de 180°. L'axe de rotation dépend du plan sélectionné. Pour le plan XY, il s'agit de l'axe X global. Pour les plans XZ et YZ, il s'agit de l'axe Z global.
6. Les **Décalage**, **Distance X** et **Distance Y** sont relatifs au système de coordonnées du plan de l'image. Un petit décalage négatif peut être utile pour tracer l'image avec une [esquisse](/Sketcher_Workbench/fr "Sketcher Workbench/fr") ou une géométrie de [Draft](/Draft_Workbench/fr "Draft Workbench/fr").
7. Vous pouvez modifier la **Transparence**.
8. Options de **Dimension de l'image** :
   * Mise à l'échelle par une valeur numérique :
     1. Vous pouvez décocher **Conserver les proportions** pour une mise à l'échelle inégale.
     2. Entrez une **Largeur** et/ou une **Hauteur**.
   * Mise à l'échelle par des points :
     1. Appuyez sur le bouton Calibrer.
     2. Choisissez deux points dans l'image.
     3. Une ligne de dimension s'affiché.
     4. Saisissez la dimension souhaitée.
     5. Appuyez sur Entrée ou sur le bouton Appliquer.
9. Appuyez sur le bouton OK pour confirmer les modifications et fermez le panneau de tâches.

### Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Plan d'image est dérivé d'un objet [App GeoFeature](/App_GeoFeature/fr "App GeoFeature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Image Plane

* Données**Image File** (`FileIncluded`) : le fichier d'image utilisé pour le plan d'image. Ce fichier est stocké dans le fichier .FCStd.
* Données**XSize** (`Length`) : largeur du plan de l'image.
* Données**YSize** (`Length`) : hauteur du plan de l'image.

#### Vue

Object Style

* Vue**Lighting** (`Enumeration`) : comment le plan de l'image est éclairé dans la [vue 3D](/3D_view/fr "3D view/fr"). Peut être `Two side` ou `One side`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Import/fr&oldid=1507228>"