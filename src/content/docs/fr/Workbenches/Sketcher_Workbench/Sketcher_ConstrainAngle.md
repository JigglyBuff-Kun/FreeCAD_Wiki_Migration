---
title: Sketcher Contrainte angulaire
---
|  |
| --- |
| Sketcher Contrainte angulaire |
| Emplacement du menu |
| Esquisse → Contraintes d'esquisse → Contrainte angulaire |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| K A |
| Introduit dans la version |
| - |
| Voir aussi |
| [Sketcher Contrainte perpendiculaire](/Sketcher_ConstrainPerpendicular/fr "Sketcher ConstrainPerpendicular/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_ConstrainAngle.svg) Sketcher Contrainte angulaire fixe l'angle entre deux arêtes (les lignes sont alors considérées comme infinies et les courbes ouvertes sont virtuellement étendues), l'angle d'une ligne avec l'axe horizontal de l'esquisse ou l'angle d'ouverture d'un arc de cercle.

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

### [Mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr")

1. Assurez-vous qu'il n'y a pas de sélection.
2. Il y a plusieurs façons de lancer l'outil :
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : si la [préférence](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") des **contraintes de dimensions** est réglée sur `Outil unique` (par défaut) : appuyez sur la flèche vers le bas à droite du bouton ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) et sélectionnez l'option **![](/images/Sketcher_ConstrainAngle.svg) Contrainte angulaire** du menu déroulant.
   * Si cette préférence a une valeur différente (et dans version 0.21 et précédentes) : appuyez sur le ![](/images/Sketcher_ConstrainAngle.svg) Contrainte angulaire.
   * Sélectionnez l'option **Esquisse → Contraintes d'esquisse → ![](/images/Sketcher_ConstrainAngle.svg) Contrainte angulaire** du menu.
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Dimension → ![](/images/Sketcher_ConstrainAngle.svg) Contrainte angulaire** du menu contextuel.
   * Utilisez le raccourci clavier : K puis A.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. Faites l'une des choses suivantes :
   * Sélectionner deux lignes.
   * Sélectionner un point et deux arêtes (dans cet ordre).
   * Sélectionner une arête, un point et une arête (idem).
5. Si une [contrainte pilotante dimensionnelle](/Sketcher_ToggleDrivingConstraint/fr "Sketcher ToggleDrivingConstraint/fr") est créée, en fonction des [préférences](/Sketcher_Preferences/fr#Affichage "Sketcher Preferences/fr"), une fenêtre de dialogue s'ouvre pour [modifier sa valeur](/Sketcher_Workbench/fr#Modifier_les_contraintes "Sketcher Workbench/fr"). Une valeur négative inversera la direction de l'angle.
6. Une contrainte d'angle est ajoutée. Si un point et deux arêtes ont été sélectionnés, jusqu'à deux [contraintes point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") peuvent également être ajoutées. Voir les [Exemples](#Entre_deux_arêtes_au_point).
7. Vous pouvez continuer à créer des contraintes.
8. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

### Mode unique

1. Faites l'une des choses suivantes :
   * Sélectionnez une seule ligne.
   * Sélectionnez un seul arc de cercle.
   * Sélectionnez deux lignes.
   * Sélectionnez un point et deux arêtes (dans n'importe quel ordre).
2. Lancez l'outil comme expliqué ci-dessus.
3. Vous pouvez [modifier la valeur de la contrainte](/Sketcher_Workbench/fr#Modifier_les_contraintes "Sketcher Workbench/fr").
4. Une contrainte d'angle est ajoutée. Si un point et deux arêtes ont été sélectionnés, jusqu'à deux [contraintes point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") peuvent également être ajoutées. Voir les [exemples](#Entre_deux_arêtes_au_point).

## Exemples

### Une seule ligne

![](/images/Sketcher_ConsraintAngle_mode1.png)

L'angle de la ligne avec l'axe X positif de l'esquisse est fixe.

### Un seul arc de cercle

![](/images/Sketcher_ConsraintAngle_mode2.png)

L'angle d'ouverture de l'arc est fixe.

### Entre deux lignes

![](/images/Sketcher_ConsraintAngle_mode3.png)

L'angle entre les deux lignes est fixe. Il n'est pas nécessaire que les lignes se croisent.

### Entre deux arêtes au point

![](/images/Sketcher_ConsraintAngle_mode4.png)

L'angle entre les deux arêtes en un point donné est fixe. Le point peut être n'importe quel point, par exemple le centre d'un cercle, l'extrémité d'une arête ou l'origine, il peut appartenir à l'une ou l'autre des arêtes ou aux deux, et il peut également être un [objet Point](/Sketcher_CreatePoint/fr "Sketcher CreatePoint/fr"). Si nécessaire, des [contrainte(s) de point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") sont ajoutées pour s'assurer que le point se trouve sur les deux arêtes (étendues). Ces contraintes supplémentaires sont appelées [contraintes d'aide](/Sketcher_helper_constraint/fr "Sketcher helper constraint/fr").

## Script

La Contrainte angle peut être créée depuis une [macros](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr") en utilisant :

```
# line slope angle
Sketch.addConstraint(Sketcher.Constraint('Angle',iline,angle))

# angular span of arc
Sketch.addConstraint(Sketcher.Constraint('Angle',iarc,angle))

# angle between lines
Sketch.addConstraint(Sketcher.Constraint('Angle',iline1,pointpos1,iline2,pointpos2,angle))

# angle-via-point (no helper constraints are added automatically when from python)
Sketch.addConstraint(Sketcher.Constraint('AngleViaPoint',icurve1,icurve2,geoidpoint,pointpos,angle))

```

où :

:   * `Sketch` est un objet d'esquisse:
    * `iline, iline1, iline2` sont des nombres entiers spécifiant les lignes par leurs nombres ordinaux dans `Sketch`.
    * `pointpos1, pointpos2` devrait être 1 pour point de départ et 2 pour le point de fin. Le choix des points permet de définir l'angle interne (ou externe) et il affecte la façon dont la contrainte est dessinée à l'écran.
    * `geoidpoint` et `pointpos` dans `AngleViaPoint` sont les indices précisant le point d'intersection.
    * `angle` est la valeur d'angle en radians. L'angle est compté entre vecteurs tangents dans le sens antihoraire. Les vecteurs tangents pointent du début à la fin pour les lignes (ou vice versa si le point final est fourni dans l'angle entre le mode de lignes) et le long du sens anti-horaire pour les cercles, arcs et ellipses.La valeur est également acceptée comme un angle (par exemple `App.Units.Quantity('45 deg')`)

La page [Sketcher Scripts](/Sketcher_scripting/fr "Sketcher scripting/fr") explique les valeurs qui peuvent être utilisées pour `iline`, `iline1`, `iline2`, `pointpos1`, `pointpos2`, `geoidpoint` et `pointpos` et contient d'autres exemples sur la façon de créer des contraintes à partir de scripts Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainAngle/fr&oldid=1496232>"