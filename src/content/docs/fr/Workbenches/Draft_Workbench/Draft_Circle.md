---
title: Draft Cercle
---
|  |
| --- |
| Draft Cercle |
| Emplacement du menu |
| Draft : Formes → Cercle  BIM : Formes 2D → Cercle |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| C I |
| Introduit dans la version |
| 0.7 |
| Voir aussi |
| [Draft Arc](/Draft_Arc/fr "Draft Arc/fr"), [Draft Arc par 3 points](/Draft_Arc_3Points/fr "Draft Arc 3Points/fr") |
|  |

## Description

La commande ![](/images/Draft_Circle.svg) **Draft Cercle** crée un cercle dans le [Draft Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") en cours à partir d'un centre et d'un rayon. Le rayon peut être défini en choisissant un point.

Un Draft Cercle peut être transformé en arc de cercle en donnant à Données**First Angle** et Données**Last Angle** des valeurs différentes.

![](/images/Draft_Circle_example.jpg)

Cercle défini par deux points, le centre et le rayon

## Utilisation

Voir aussi : [Draft La barre](/Draft_Tray/fr "Draft Tray/fr"), [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") et [Draft Contrainte](/Draft_Constrain/fr "Draft Constrain/fr").

1. Il existe plusieurs façons de lancer la commande :
   * Appuyer sur le ![](/images/Draft_Circle.svg) Cercle.
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr") : sélectionner l'option **Formes → ![](/images/Draft_Circle.svg) Cercle** du menu.
   * [BIM](/BIM_Workbench/fr "BIM Workbench/fr") : sélectionner l'option **Formes 2D → ![](/images/Draft_Circle.svg) Cercle** du menu.
   * Utiliser le raccourci clavier : C puis I.
2. Le panneau de tâches **Cercle** s'ouvre. Voir [Options](#Options) pour plus d'informations.
3. Choisir le premier point, le centre du cercle dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrer des coordonnées et appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
4. Choisir le deuxième point dans la [vue 3D](/3D_view/fr "3D view/fr") ou entrer un **Rayon**.

## Options

Les raccourcis clavier à caractère unique disponibles dans le panneau des tâches peuvent être modifiés. Voir [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr"). Les raccourcis mentionnés ici sont les raccourcis par défaut (pour la version 1.0).

* Pour saisir manuellement les coordonnées du centre, entrez les valeurs de X, Y et Z et appuyez sur Entrée après chacune, ou vous pouvez appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point lorsque vous avez les valeurs souhaitées. Il est conseillé de déplacer le pointeur hors de la [vue 3D](/3D_view/fr "3D view/fr") avant de saisir les coordonnées.
* Appuyez sur G ou cliquez sur la case **Global** pour basculer en mode global. Si le mode global est activé, les coordonnées sont relatives au système de coordonnées global, sinon elles sont relatives au système de coordonnées du [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").
* Appuyez sur F ou cliquez sur la case à cocher **Remplir** version 1.0 et précédentes ou **Créer une face** [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr") pour activer le mode de création d'une face. Si le mode Créer une face est activé, le cercle créé aura Données**Make Face** défini sur `true` et aura une face remplie.
* Appuyez sur N ou cliquez sur la case **Continuer** pour activer le mode continu. Si le mode continu est activé, la commande redémarre après avoir terminé, ce qui vous permet de continuer à créer des cercles.
* Appuyez sur S pour activer ou désactiver [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr").
* Appuyez sur Échap ou sur le bouton Fermer pour interrompre la commande.

## Remarques

* Un Draft Cercle peut être édité avec la commande [Draft Editer](/Draft_Edit/fr "Draft Edit/fr").

## Préférences

Voir aussi : [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr") et [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr").

* Si l'option **Édition → Préférences... → Draft → Général → Créer des primitives Part si possible** est cochée, la commande créera un [Part Cercle](/Part_Circle/fr "Part Circle/fr") au lieu d'un Draft Cercle.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Draft Cercle est dérivé d'un [Part Part2DObject](/Part_Part2DObject/fr "Part Part2DObject/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Draft

* Données**Area** (`Area`) : (en lecture seule) spécifie la surface de la face du cercle. La valeur sera `0.0` si Données**Make Face** est `false` ou si la face ne peut être créée.
* Données**First Angle** (`Angle`) : spécifie l'angle de départ du cercle, normalement `0°`.
* Données**Last Angle** (`Angle`) : spécifie l'angle final du cercle, normalement `0°`.
* Données**Make Face** (`Bool`) : spécifie si le cercle forme une face ou non. Si c'est `true`, une face est créée, sinon seul le périmètre est considéré comme faisant partie de l'objet. Cette propriété ne fonctionne que si les Données**First Angle** et Données**Last Angle** ont la même valeur. Notez que `0°` et `360°` ne sont pas considérés comme identiques.
* Données**Radius** (`Length`) : spécifie le rayon du cercle.

### Vue

Draft

* Vue**Pattern** (`Enumeration`) : spécifie un [Draft Motif](/Draft_Pattern/fr "Draft Pattern/fr"). avec lequel remplir la face du cercle. Cette propriété ne fonctionne que si Données**Make Face** est `true` et si Vue**Display Mode** est `Flat Lines`.
* Vue**Pattern Size** (`Float`): spécifie la taille du [Draft Motif](/Draft_Pattern/fr "Draft Pattern/fr").

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour créer un Draft Cercle, utilisez la méthode `make_circle` ([introduit dans la version 0.19](/Release_notes_0.19/fr "Release notes 0.19/fr")) du module Draft. Cette méthode remplace la méthode dépréciée `makeCircle`.

```
circle = make_circle(radius, placement=None, face=None, startangle=None, endangle=None, support=None)
circle = make_circle(Part.Edge, placement=None, face=None, startangle=None, endangle=None, support=None)

```

* Crée un objet `circle` avec un `radius` donné en millimètres.
  + `radius` peut aussi être un `Part.Edge`, dont l'attribut `Curve` doit être un `Part.Circle`.
* Si un `placement` est `None`, le cercle est créé à l'origine.
* Si `face` a la valeur `True`, le cercle fera une face, c'est-à-dire qu'il apparaîtra rempli.
* Si `startangle` et `endangle` sont donnés en degrés et ont des valeurs différentes, ils sont utilisés et l'objet apparaît comme une [Draft Arc](/Draft_Arc/fr "Draft Arc/fr").

Exemple :

```
import FreeCAD as App
import Draft

doc = App.newDocument()

circle1 = Draft.make_circle(200)

zaxis = App.Vector(0, 0, 1)
p2 = App.Vector(1000, 1000, 0)
place2 = App.Placement(p2, App.Rotation(zaxis, 0))
circle2 = Draft.make_circle(500, placement=place2)

p3 = App.Vector(-1000, -1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 0))
circle3 = Draft.make_circle(750, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Circle/fr&oldid=1556565>"