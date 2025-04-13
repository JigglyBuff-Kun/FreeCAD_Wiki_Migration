---
title: Draft Polygone
---
|  |
| --- |
| Draft Polygone |
| Emplacement du menu |
| Draft : Formes → Polygone  BIM : Formes 2D → Polygone |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| P G |
| Introduit dans la version |
| 0.7 |
| Voir aussi |
| *Aucun* |
|  |

## Description

La commande ![](/images/Draft_Polygon.svg) **Draft Polygone** crée un polygone régulier dans le [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") en cours à partir d'un centre et d'un rayon. Le rayon peut être défini en choisissant un point.

Un Draft Polygone peut passer du mode inscrit au mode circonscrit en modifiant sa propriété Données**Draw Mode**. Les coins d'un Draft Polygone peuvent recevoir un congé (arrondis) ou chanfreinés en modifiant respectivement Données**Fillet Radius** ou Données**Chamfer Size**.

![](/images/Draft_polygon_example.jpg)

Polygone régulier défini par deux points, le centre et le rayon

## Utilisation

Voir aussi : [Draft La barre](/Draft_Tray/fr "Draft Tray/fr"), [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") et [Draft Contrainte](/Draft_Constrain/fr "Draft Constrain/fr").

1. Il existe plusieurs façons de lancer la commande :
   * Appuyer sur le bouton ![](/images/Draft_Polygon.svg) Polygone.
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr") : sélectionner l'option **Formes → ![](/images/Draft_Polygon.svg) Polygone** du menu.
   * [BIM](/BIM_Workbench/fr "BIM Workbench/fr") : sélectionner l'option **Formes 2D → ![](/images/Draft_Polygon.svg) Polygone** du menu.
   * Utiliset le raccourci clavier : P puis G.
2. Le panneau de tâches **Polygone** s'ouvre. Voir [Options](#Options) pour plus d'informations.
3. Rentrer le nombre de **Côtés**.
4. Choisir le premier point, le centre du polygone, dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrer des coordonnées et appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
5. Choisir le deuxième point dans la [vue 3D](/3D_view/fr "3D view/fr") ou entrer un **Rayon**.

## Options

Les raccourcis clavier à caractère unique disponibles dans le panneau des tâches peuvent être modifiés. Voir [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr"). Les raccourcis mentionnés ici sont les raccourcis par défaut (pour la version 1.0).

* Pour saisir manuellement les coordonnées du centre, entrer les valeurs X, Y et Z et appuyer sur Entrée après chaque valeur, ou appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point lorsque vous avez les valeurs souhaitées. Il est conseillé de déplacer le pointeur hors de la [vue 3D](/3D_view/fr "3D view/fr") avant de saisir les coordonnées.
* Appuyer sur G ou cliquer sur la case **Global** pour basculer en mode global. Si le mode global est activé, les coordonnées sont relatives au système de coordonnées global, sinon elles sont relatives au système de coordonnées du [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").
* Appuyez sur F ou cliquez sur la case à cocher **Remplir** version 1.0 et précédentes ou **Créer une face** [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr") pour activer le mode de création d'une face. Si le mode Créer une face est activé, le polygone créé aura Données**Make Face** défini sur `true` et aura une face remplie.
* Appuyer sur N ou cliquer sur la case **Continuer** pour activer le mode continu. Si le mode continu est activé, la commande redémarre après avoir terminé, ce qui vous permet de continuer à créer des polygones.
* Appuyer sur S pour activer ou désactiver [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr").
* Appuyer sur Échap ou sur le bouton Fermer pour interrompre la commande.

## Remarques

* Un Draft Polygone peut être édité avec la commande [Draft Éditer](/Draft_Edit/fr "Draft Edit/fr").

## Préférences

Voir aussi : [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr") et [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr").

* Si l'option **Édition → Préférences... → Draft → Général → Créer des primitives Part si possible** est cochée, la commande créera une [Part Polygone régulier](/Part_RegularPolygon/fr "Part RegularPolygon/fr") au lieu d'une Draft Polygone.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Draft Polygone est dérivé d'un [Part Part2DObject](/Part_Part2DObject/fr "Part Part2DObject/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Draft

* Données**Area** (`Area`) : (en lecture seule) spécifie la surface de la face du polygone. La valeur sera `0.0` si Données**Make Face** est `false`.
* Données**Chamfer Size** (`Length`) : spécifie la longueur des chanfreins aux coins du polygone.
* Données**Draw Mode** (`Enumeration`) : spécifie si le polygone est `inscrit` dans un cercle ou `circonscrit` autour d'un cercle.
* Données**Faces Number** (`Integer`) : spécifie le nombre de côtés du polygone.
* Données**Fillet Radius** (`Length`) : spécifie le rayon des congés aux coins du polygone.
* Données**Make Face** (`Bool`) : spécifie si le polygone forme une face ou non. Si c'est `true`, une face est créée, sinon seul le périmètre est considéré comme faisant partie de l'objet.
* Données**Radius** (`Length`) : spécifie le rayon du cercle qui définit le polygone.

### Vue

Draft

* Vue**Pattern** (`Enumeration`): spécifie un [Draft Motif](/Draft_Pattern/fr "Draft Pattern/fr") avec lequel remplir la face du polygone. Cette propriété ne fonctionne que si Données**Make Face** est `true` et si Données**Make Face** est à `Flat Lines`.
* Vue**Pattern Size** (`Float`): spécifie la taille du [Draft Motif](/Draft_Pattern/fr "Draft Pattern/fr").

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour créer un Draft Polygone, utilisez la méthode `make_polygon` ([introduit dans la version 0.19](/Release_notes_0.19/fr "Release notes 0.19/fr")) du module Draft. Cette méthode remplace la méthode dépréciée `makePolygon`.

```
polygon = make_polygon(nfaces, radius=1, inscribed=True, placement=None, face=None, support=None)

```

* Crée un objet `polygon` avec le nombre de faces spécifié (`nfaces`) basé sur un cercle de `radius` en millimètres.
* Si `inscribed` est à `True`, le polygone est inscrit dans le cercle, sinon il sera circonscrit.
  + L'un des sommets du polygone sera situé sur l'axe des X si aucun autre placement n'est indiqué.
* Si `placement` est `None`, le polygone est créé à l'origine et l'un de ses sommets se trouve sur l'axe des X.
* Si `face` est à `True`, le polygone aura une surface, c'est-à-dire qu'il apparaîtra remplie.

Exemple :

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(4, radius=500)
polygon2 = Draft.make_polygon(5, radius=750)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 90))

Polygon3 = Draft.make_polygon(6, radius=1450, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Polygon/fr&oldid=1556559>"