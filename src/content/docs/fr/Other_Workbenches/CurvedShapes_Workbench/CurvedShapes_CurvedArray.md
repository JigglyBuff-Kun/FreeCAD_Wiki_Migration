---
title: CurvedShapes CurvedArray
---
|  |
| --- |
| CurvedShapes CurvedArray |
| Emplacement du menu |
| *Aucun* |
| Ateliers |
| [CurvedShapes](/CurvedShapes_Workbench/fr "CurvedShapes Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

Crée un réseau et redimensionne les objets dans les limites d'une ou plusieurs courbes de la coque. Dans cet exemple, la forme de base orange est redimensionnée dans les limites des courbes de coque rouge et violette. Il n'est pas nécessaire de relier les courbes entre elles.
Les courbes de coque doivent se trouver sur le plan XY- XZ- ou YZ- ou être parallèles à celui-ci.

<https://github.com/chbergmann/CurvedShapesWorkbench/blob/master/Examples/WingExample.png>
[[Image:]]

## Utilisation

1. Étape 1
2. Étape 2: appelez la commande de plusieurs manières:
   * Utilisation de [File:WorkbenchName Command.svg](/index.php?title=Special:Upload&wpDestFile=WorkbenchName_Command.svg "File:WorkbenchName Command.svg") [Commande WorkbenchName](/index.php?title=WorkbenchName_Command/fr&action=edit&redlink=1 "WorkbenchName Command/fr (page does not exist)")
   * Utilisation du raccourci clavier {{{1}}} {{{1}}}
   * Utilisation de **Menu → Command** dans la liste déroulante Menu
3. Étape 3

## Remarques

* La première courbe que vous sélectionnez pour la création de CurvedArray sera l'élément balayé et redimensionné dans les limites des autres courbes sélectionnées.

## Propriétés

Base

* Données**Base**: objet pour créer un tableau à partir de
* Données**Hullcurves**: liste d'une ou plusieurs courbes limites
* Données**Axis**: axe de direction de la forme de base
* Données**Items**: nombre d'éléments du tableau
* Données**OffsetStart**: décalage de la première partie dans la direction de l'axe
* Données**OffsetEnd**: décalage de la dernière partie de la fin dans la direction opposée de l'axe
* Données**Twist**: applique une rotation autour de l'axe aux éléments du tableau.
* Données**Surface**: fait une surface sur les éléments du tableau
* Données**Solid**: fait un solide si la base est une forme fermée

Retrieved from "<http://wiki.freecad.org/index.php?title=CurvedShapes_CurvedArray/fr&oldid=1536698>"