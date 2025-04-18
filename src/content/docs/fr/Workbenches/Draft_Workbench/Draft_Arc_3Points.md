---
title: Draft Arc par 3 points
---
|  |
| --- |
| Draft Arc par 3 points |
| Emplacement du menu |
| Draft : Formes → Outils pour les arcs → Arc par 3 points  BIM : Formes 2D → Arc par 3 points |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| A T |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [Draft Arc](/Draft_Arc/fr "Draft Arc/fr"), [Draft Cercle](/Draft_Circle/fr "Draft Circle/fr") |
|  |

## Description

La commande ![](/images/Draft_Arc_3Points.svg) **Draft Arc par 3 points** crée un arc de cercle sur le [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") en cours à partir de trois points qui définissent sa circonférence. Le centre et le rayon sont calculés à partir de ces points.

Un Draft Arc est en fait un [Draft Cercle](/Draft_Circle/fr "Draft Circle/fr") dont Données**First Angle** n'est pas identique à Données**Last Angle**.

![](/images/Draft_Arc_3Points_example.png)

Arc defini par trois points passant par la circonférence

## Utilisation

Voir aussi : [Draft La barre](/Draft_Tray/fr "Draft Tray/fr"), [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") et [Draft Contrainte](/Draft_Constrain/fr "Draft Constrain/fr").

1. Il existe plusieurs façons de lancer la commande :
   * Appuyer sur le ![](/images/Draft_Arc_3Points.svg) Arc par 3 points.
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr") : sélectionner l'option **Formes → Outils pour les arcs → ![](/images/Draft_Arc_3Points.svg) Arc par 3 points** du menu.
   * [BIM](/BIM_Workbench/fr "BIM Workbench/fr") : sélectionner l'option **Formes 2D → ![](/images/Draft_Arc_3Points.svg) Arc par 3 points** du menu.
   * Utiliser le raccourci clavier : A puis T.
2. Le panneau de tâches **Arc par 3 points** s'ouvre. Voir [Options](#Options) pour plus d'informations.
3. Choisir le premier point dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrer des coordonnées et appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
4. Choisir le deuxième point dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrer des coordonnées et appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
5. Choisir le troisième point dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrer des coordonnées et appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.

## Options

Les raccourcis clavier à caractère unique disponibles dans le panneau des tâches peuvent être modifiés. Voir [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr"). Les raccourcis mentionnés ici sont les raccourcis par défaut (pour la version 1.0).

* Pour saisir manuellement des coordonnées, entrez la composante X, Y et Z, et appuyer sur Entrée après chacune. Ou vous pouvez appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point lorsque vous avez les valeurs souhaitées. Il est conseillé de déplacer le pointeur hors de la [vue 3D](/3D_view/fr "3D view/fr") avant de saisir les coordonnées.
* Appuyer sur R ou cliquer sur la case **Relative** pour activer le mode relatif. Si le mode relatif est activé, les coordonnées sont relatives au dernier point, si disponible, sinon elles sont relatives à l'origine du système de coordonnées.
* Appuyer sur G ou cliquer sur la case **Global** pour activer le mode global. Si le mode global est activé, les coordonnées sont relatives au système de coordonnées global, sinon elles sont relatives au système de coordonnées du [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").
* Appuyer sur N ou cliquer sur la case **Continuer** pour activer le mode continu. Si le mode continu est activé, la commande redémarre après avoir terminé, ce qui vous permet de continuer à créer des arcs.
* Appuyer sur S pour activer ou désactiver [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr").
* Appuyer sur Échap ou sur le bouton Fermer pour abandonner la commande.

## Remarques

* Un Draft Arc peut être édité avec la commande [Draft Éditer](/Draft_Edit/fr "Draft Edit/fr").

## Préférences

Voir aussi : [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr") et [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr").

* Si l'option **Édition → Préférences... → Draft → Général → Créer des primitives Part si possible** est cochée, la commande créera une [Part Feature](/Part_Feature/fr "Part Feature/fr") non modifiable au lieu d'un cercle de Draft.

## Propriétés

Voir [Draft Cercle](/Draft_Circle/fr#Propri.C3.A9t.C3.A9s "Draft Circle/fr").

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour créer un Draft Arc par 3 points, utilisez la méthode `make_arc_3points` du module Draft :

```
arc = make_arc_3points(points, placement=None, face=False, support=None, map_mode="Deactivated", primitive=False)

```

* Crée un objet `arc` à partir de la liste donnée `points`.
* Si un `placement` est donné, le centre de l'arc circulaire sera déplacé à cet endroit. Voir [Positionnement](/Placement/fr "Placement/fr") pour plus d'informations.
* Si `face` est `True`, l'arc fera une surface, c'est-à-dire qu'il apparaîtra rempli.
* Si `support` est donné, c'est un `LinkSubList`, c'est-à-dire une liste indiquant un objet et un sous-élément de cet objet. Ceci est utilisé pour que l'objet apparaisse référencé à ce support.

:   Par exemple, `support=[(obj, ("Face1"))]`

* Si `map_mode` est donné, il s'agit d'une chaîne définissant un type de mappage, par exemple, `map_mode='FlatFace'`, `map_mode='ThreePointsPlane'` etc. Voir [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr") pour plus d'informations.
* Si `primitive` est `True`, l'arc créé sera une simple [Part Feature](/Part_Feature/fr "Part Feature/fr") et non un objet Draft complexe.

Exemple :

```
import FreeCAD as App
import Draft

doc = App.newDocument()

points = [App.Vector(0, 0, 0),
          App.Vector(5, 10, 0),
          App.Vector(10, 0, 0)]

arc = Draft.make_arc_3points(points)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Arc_3Points/fr&oldid=1513930>"