---
title: CAM Gravure en V
---
|  |
| --- |
| CAM Gravure en V |
| Emplacement du menu |
| CAM → Graver en V |
| Ateliers |
| [CAM](/CAM_Workbench/fr "CAM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/CAM_Vcarve.svg) Gravure en V est principalement destiné à la gravure de la ligne centrale d'une ![](/images/Draft_ShapeString.svg) [Draft Forme à partir d'un texte](/Draft_ShapeString/fr "Draft ShapeString/fr") sur une pièce. Cependant, cela peut être utile pour d'autres types de 2D.

Contrairement à la gravure qui suit les lignes d'une Forme à partir texte, la gravure en V utilise un couteau en forme de V et tente de dégager la zone en déplaçant le couteau au centre de la région et en variant la profondeur de coupe. Étant donné qu'un rayon de coupe en V varie avec la profondeur, la largeur de coupe varie également. Le résultat est une coupe plus naturelle, en particulier pour les polices serif.

![](/images/Engravepath.png)

![](/images/Vcarvepath.png)

Example Vcarving Path

![](/images/Vcarved.png)

![](/images/Scrolltest.png)

L'algorithme V-carve calcule une trajectoire le long de la ligne centrale d'une région à l'aide d'un diagramme de Voronoï. Cette ligne centrale est le parcours que l'outil suivra dans le plan XY. Il calcule ensuite un "cercle inscrit maximal" le long du parcours. Il s'agit du plus grand cercle qui peut être tracé à ce point et qui reste entièrement à l'intérieur de la zone de dégagement. La profondeur de coupe est calculée à l'aide du rayon du cercle et de l'angle de la pointe de l'outil.

## Utilisation

### Préparation des formes à graver

* Les ![](/images/Draft_ShapeString.svg) [Draft Formes à partir d'un texte](/Draft_ShapeString/fr "Draft ShapeString/fr") sont utilisables immédiatement.
* Les fichiers SVG nécessitent un certain traitement, à la fois dans l'éditeur et dans l'![](/images/Workbench_Draft.svg) [atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") :
  + Dans l'éditeur (par exemple [Inkscape](https://www.inkscape.org)) : assurez-vous que le fichier ne contient que des parcours et que les parcours sont dissociés. Assurez-vous qu'il n'y a pas de parcours auto-sécants, (dans Inkscape) utilisez Path → Simplify and union to join CAMs that overlap.
  + Basculez vers l'![](/images/Workbench_Draft.svg) [atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") depuis le [sélecteur d'atelier](/Std_Workbench/fr "Std Workbench/fr")
  + Importez le SVG en utilisant **Fichier → Importer → sélectionnez "SVG as geometry"**
  + Le résultat devrait ressembler à ceci :

    :   ![](/images/Svgimport.png)
    :   Ci-dessus: Résultats de l'importation de "SVG as geometry"

:   :   :   Les trajectoires avec des trous (lettres, la vigne dans l'image ci-dessus) sont importés comme 2 parcours séparés (nommés le long des lignes de `CAM905` et `CAM905001` dans la [vue en arborescence](/Tree_view/fr "Tree view/fr")), l'un d'eux est le trou et l'autre est le contour. Nous traiterons de cela dans la prochaine étape

* + Pour obtenir les faces 2D, CAM Gravure en V a besoin de :
    - Pour les parcours sans trous :
      1. Sélectionnez le parcours
      2. Choisissez **Modification → ![](/images/Draft_Upgrade.svg) [Agréger](/Draft_Upgrade/fr "Draft Upgrade/fr")**
      3. Suivi de **Modification → ![](/images/Draft_Downgrade.svg) [Désagréger](/Draft_Downgrade/fr "Draft Downgrade/fr")**
    - Pour les parcours avec trous :
      1. Sélectionnez le parcours extérieur puis le parcours intérieur
      2. Choisissez **Modification → ![](/images/Draft_Downgrade.svg) [Désagréger](/Draft_Downgrade/fr "Draft Downgrade/fr")** **deux fois**

    :   Certains parcours se comportent différemment, vous devrez donc peut-être jouer avec ![](/images/Draft_Upgrade.svg) Agréger et ![](/images/Draft_Downgrade.svg) Désagréger jusqu'à ce que vous obteniez quelque chose nommé : `Face<number>`
    :   Le résultat final devrait ressembler à ceci :
    :   ![](/images/Svgfaces.png)

### Création de l'opération Gravure en V

* Passer à l'![](/images/Workbench_CAM.svg) [atelier CAM](/CAM_Workbench/fr "CAM Workbench/fr") depuis le [sélecteur d'atelier](/Std_Workbench/fr "Std Workbench/fr")
* Ajouter une tâche, utilisez les objets nommés `Face<number>` (ou la Forme à partir d'un texte) comme base, ajouter contrôleur d'objets coupants en V, définir les avances, les vitesses, etc.
* L'opération ne prend en charge qu'un seul objet (soit un seul objet Face, soit une Forme à partir d'un texte), donc pour chaque objet :
  + Sélectionner **CAM → ![](/images/CAM_Vcarve.svg) Gravure en V** du menu supérieur. Cela ouvre le panneau de configuration.
  + Ouvrir l'onglet Géométrie de base et ajouter toutes les faces de la Forme à partir d'un texte, ou la face d'un seul objet Face obtenu ci-dessus.
  + Cliquer sur Appliquer et inspecter le parcours généré; si nécessaire, ajuster les paramètres d'opération (le seuil peut être réglé plus haut dans la plupart des situations).
  + Appuyez sur OK pour terminer.

## Options

Vide

## Propriétés

### Données

Base

* Données**Placement**: -
* Données**Label**: -

Depth

* Données**ClearanceHeight**: -
* Données**FinalDepth**: -
* Données**SafeHeight**: -
* Données**StartDepth**: -
* Données**StepDown**: -

Op Values

* Données**OpFinalDepth**: -
* Données**OpStartDepth**: -
* Données**OpStockZMax**: -
* Données**OpStockZMin**: -
* Données**OpToolDiameter**: -

Path

* Données**Active**: -
* Données**Comment**: -
* Données**CoolantMode**: -
* Données**StartVertex**: -
* Données**ToolController**: -
* Données**UserLabel**: -

#### Hidden

* Données**Base**: -
* Données**BaseObject**: -
* Données**BaseShapes**: -
* Données**ExpressionEngine**: -
* Données**Label2**: -
* Données**Path**: -
* Données**Proxy**: -
* Données**Visibility**: -

### Vue

Vide

## Script

*Voir aussi:* [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Exemple :

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Vcarve/fr&oldid=1493297>"