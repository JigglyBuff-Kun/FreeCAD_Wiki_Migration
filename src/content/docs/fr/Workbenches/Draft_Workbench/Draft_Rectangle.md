---
title: Draft Rectangle
---
|  |
| --- |
| Draft Rectangle |
| Emplacement du menu |
| Draft : Formes → Rectangle  BIM : Formes 2D → Rectangle |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| R E |
| Introduit dans la version |
| 0.7 |
| Voir aussi |
| *Aucun* |
|  |

## Description

La commande ![](/images/Draft_Rectangle.svg) **Draft Rectangle** crée un rectangle dans le [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") en cours à partir de deux points.

Les coins d'un Draft Rectangle peuvent être arrondis ou chanfreinés en modifiant respectivement sa Données**Fillet Radius** ou sa Données**Chamfer Size**. Il est également possible de subdiviser un Draft Rectangle en modifiant sa Données**Columns** et/ou sa Données**Rows**.

![](/images/Draft_Rectangle_example.jpg)

Rectangle défini par deux points

## Utilisation

Voir aussi : [Draft La barre](/Draft_Tray/fr "Draft Tray/fr"), [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") et [Draft Contrainte](/Draft_Constrain/fr "Draft Constrain/fr").

1. Il existe plusieurs façons de lancer la commande :
   * Appuyer sur le bouton ![](/images/Draft_Rectangle.svg) Rectangle.
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr") : sélectionnez l'option **Formes → ![](/images/Draft_Rectangle.svg) Rectangle** du menu.
   * [BIM](/BIM_Workbench/fr "BIM Workbench/fr") : sélectionnez l'option **Formes 2D → ![](/images/Draft_Rectangle.svg) Rectangle** du menu.
   * Utiliser le raccourci clavier : R puis E.
2. Le panneau de tâches **Rectangle** s'ouvre. Voir [Options](#Options) pour plus d'informations.
3. Choisir le premier point dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrer des coordonnées et appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
4. Choisir le deuxième point dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrer des coordonnées et appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point. Ce point ne doit pas être contraint sur l'axe X, Y ou Z.

## Options

Les raccourcis clavier à caractère unique disponibles dans le panneau des tâches peuvent être modifiés. Voir [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr"). Les raccourcis mentionnés ici sont les raccourcis par défaut (pour la version 1.0).

* Pour saisir manuellement des coordonnées, entrez les valeurs X, Y et Z et appuyez sur Entrée après chacune, ou vous pouvez appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point lorsque vous avez les valeurs souhaitées. Il est conseillé de déplacer le pointeur hors de la [vue 3D](/3D_view/fr "3D view/fr") avant de saisir les coordonnées.
* Appuyez sur R ou cliquez sur la case **Relatif** pour activer le mode relatif. Si le mode relatif est activé, les coordonnées du deuxième point sont relatives au premier point, sinon elles sont relatives à l'origine du système de coordonnées.
* Appuyez sur G ou cliquez sur la case **Global** pour activer le mode global. Si le mode global est activé, les coordonnées sont relatives au système de coordonnées global, sinon elles sont relatives au système de coordonnées du [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").
* Appuyez sur F ou cliquez sur la case à cocher **Remplir** version 1.0 et précédentes ou **Créer une face** [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr") pour activer le mode de création d'une face. Si le mode Créer une face est activé, le rectangle créé aura Données**Make Face** défini sur `true` et aura une face remplie.
* Appuyez sur N ou cliquez sur la case **Continuer** pour activer le mode continu. Si le mode continu est activé, la commande redémarre après avoir terminé, ce qui vous permet de continuer à créer des rectangles.
* Appuyez sur S pour activer ou désactiver [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr").
* Appuyez sur Échap ou sur le bouton Fermer pour interrompre la commande.

## Remarques

* Un Draft Rectangle peut être édité avec la commande [Draft Éditer](/Draft_Edit/fr "Draft Edit/fr").

## Préférences

Voir aussi : [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr") et [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr").

* Si l'option **Édition → Préférences... → Draft → Général → Créer des primitives Part si possible** est cochée, la commande créera un [Part Plan](/Part_Plane/fr "Part Plane/fr") au lieu d'un Draft Rectangle.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Draft Rectangle est dérivé d'un [Part Part2DObject](/Part_Part2DObject/fr "Part Part2DObject/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Draft

* Données**Area** (`Area`) : (en lecture seule) spécifie la surface de la face du rectangle. La valeur sera `0.0` si Données**Make Face** est `false`.
* Données**Chamfer Size** (`Length`) : spécifie la longueur des chanfreins aux coins du rectangle.
* Données**Columns** (`Integer`) : indique le nombre de colonnes de taille égale dans lesquelles le rectangle est divisé.
* Données**Fillet Radius** (`Length`) : spécifie le rayon des congés aux coins du rectangle.
* Données**Height** (`Distance`) : spécifie la hauteur du rectangle.
* Données**Length** (`Distance`) : spécifie la longueur du rectangle.
* Données**Make Face** (`Bool`) : spécifie si le rectangle forme un visage ou non. Si c'est `true`, une face est créée, sinon seul le périmètre est considéré comme faisant partie de l'objet.
* Données**Rows** (`Integer`) : spécifie le nombre de lignes de taille égale dans lesquelles le rectangle est divisé.

### Vue

Draft

* Vue**Pattern** (`Enumeration`) : spécifie le [Draft Motif](/Draft_Pattern/fr "Draft Pattern/fr") avec lequel remplir la face du rectangle. Cette propriété ne fonctionne que si Données**Make Face** est `true` et si Vue**Display Mode** est `Flat Lines`.
* Vue**Pattern Size** (`Float`) : spécifie la taille du [Draft Motif](/Draft_Pattern/fr "Draft Pattern/fr").
* Vue**Texture Image** (`File`) : spécifie le chemin d'accès au fichier image qui doit être mappé sur la face du rectangle. Si vous videz cette propriété, l'image sera supprimée. Le rectangle doit avoir les mêmes proportions que l'image pour éviter les distorsions.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour créer un Draft Rectangle, utilisez la méthode `make_rectangle` ([introduit dans la version 0.19](/Release_notes_0.19/fr "Release notes 0.19/fr")) du module Draft. Cette méthode remplace la méthode dépréciée `makeRectangle`.

```
rectangle = make_rectangle(length, height, placement=None, face=None, support=None)

```

* Crée un objet `rectangle` avec `length` dans la direction X et `height` dans la direction Y, avec des unités en millimètres.
* Si `placement` est `None`, le rectangle est créé à l'origine et la longueur sera parallèle à l'axe X.
* Si `face` est `True`, le rectangle fera une face, c'est-à-dire qu'il apparaîtra rempli.

Exemple :

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle1 = Draft.make_rectangle(4000, 1000)
rectangle2 = Draft.make_rectangle(1000, 4000)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 45))

rectangle3 = Draft.make_rectangle(3500, 250, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Rectangle/fr&oldid=1556557>"