---
title: Draft Ellipse
---
|  |
| --- |
| Draft Ellipse |
| Emplacement du menu |
| Draft : Formes → Ellipse  BIM : Formes 2D → Ellipse |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| E L |
| Introduit dans la version |
| 0.7 |
| Voir aussi |
| *Aucun* |
|  |

## Description

La commande ![](/images/Draft_Ellipse.svg) **Draft Ellipse** crée une ellipse dans le [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") en cours à partir de deux points définissant un rectangle dans lequel l'ellipse s'inscrira.

Une Draft Ellipse peut être transformée en arc d'ellipse en donnant à Données**First Angle** et Données**Last Angle** des valeurs différentes.

![](/images/Draft_ellipse_example.jpg)

Ellipse définie par les coins d'un rectangle

## Utilisation

Voir aussi : [Draft La barre](/Draft_Tray/fr "Draft Tray/fr"), [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") et [Draft Contrainte](/Draft_Constrain/fr "Draft Constrain/fr").

1. Il existe plusieurs façons de lancer la commande :
   * Appuyer sur le bouton ![](/images/Draft_Ellipse.svg) Ellipse.
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr"): sélectionner l'option **Formes → ![](/images/Draft_Ellipse.svg) Ellipse** du menu.
   * [BIM](/BIM_Workbench/fr "BIM Workbench/fr"): sélectionner l'option **Formes 2D → ![](/images/Draft_Ellipse.svg) Ellipse** du menu.
   * Utiliser le raccourci clavier : E puis L.
2. Le panneau de tâches **Ellipse** s'ouvre. Voir [Options](#Options) pour plus d'informations.
3. Choisir le premier point dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrer des coordonnées et appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
4. Choisir le deuxième point dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrer des coordonnées et appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point. Ce point ne doit pas être contraint sur l'axe X, Y ou Z.

## Options

Les raccourcis clavier à caractère unique disponibles dans le panneau des tâches peuvent être modifiés. Voir [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr"). Les raccourcis mentionnés ici sont les raccourcis par défaut (pour la version 1.0).

* Pour saisir manuellement des coordonnées, entrez les valeurs de X, Y et Z, et appuyez sur Entrée après chacune, ou, vous pouvez appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point lorsque vous avez les valeurs souhaitées. Il est conseillé de déplacer le pointeur hors de la [vue 3D](/3D_view/fr "3D view/fr") avant de saisir les coordonnées.
* Appuyez sur R ou cliquez sur la case **Relative** pour activer le mode relatif. Si le mode relatif est activé, les coordonnées du deuxième point sont relatives au premier point, sinon elles sont relatives à l'origine du système de coordonnées.
* Appuyez sur G ou cliquez sur la case **Global** pour activer le mode global. Si le mode global est activé, les coordonnées sont relatives au système de coordonnées global, sinon elles sont relatives au système de coordonnées du [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").
* Appuyez sur F ou cliquez sur la case à cocher **Remplir** version 1.0 et précédentes ou **Créer une face** [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr") pour activer le mode de création d'une face. Si le mode Créer une face est activé, l'ellipse créée aura Données**Make Face** défini sur `true` et aura une face remplie.
* Appuyez sur N ou cliquez sur la case **Continuer** pour activer le mode continu. Si le mode continu est activé, la commande redémarre après avoir terminé, ce qui vous permet de continuer à créer des ellipses.
* Appuyez sur S pour activer ou désactiver [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr").
* Appuyez sur Échap ou sur le bouton Fermer pour interrompre la commande.

## Remarques

* Une Draft Ellipse peut être éditée avec la commande [Draft Éditer](/Draft_Edit/fr "Draft Edit/fr").

## Préférences

Voir aussi : [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr") et [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr").

* Si l'option **Édition → Préférences... → Draft → Général → Créer des primitives Part si possible** est cochée, la commande créera une [Part Ellipse](/Part_Ellipse/fr "Part Ellipse/fr") au lieu d'une Draft Ellipse.

## Propriétés

Voir aussi: [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Draft Ellipse est dérivé d'un [Part Part2DObject](/Part_Part2DObject/fr "Part Part2DObject/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Draft

* Données**Area** (`Area`) : (en lecture seule) spécifie la surface de la face de l'ellipse. La valeur sera `0.0` si Données**Make Face** est `false` ou si la face ne peut être créée.
* Données**First Angle** (`Angle`) : spécifie l'angle du premier point de l'ellipse, normalement `0°`.
* Données**Last Angle** (`Angle`) : spécifie l'angle du dernier point de l'ellipse, normalement `0°`.
* Données**Major Radius** (`Length`) : indique le rayon principal de l'ellipse.
* Données**Make Face** (`Bool`) : spécifie si l'ellipse forme une face ou non. Si c'est `true`, une face est créée, sinon seul le périmètre est considéré comme faisant partie de l'objet. Cette propriété ne fonctionne que si la forme est une ellipse complète.
* Données**Minor Radius** (`Length`) : spécifie le rayon mineur de l'ellipse.

### Vue

Draft

* Vue**Pattern** (`Enumeration`): spécifie un [Draft Motif](/Draft_Pattern/fr "Draft Pattern/fr"). avec lequel remplir la face de l'ellipse. Cette propriété ne fonctionne que si Données**Make Face** est `true` et si Vue**Display Mode** est `Flat Lines`.
* Vue**Pattern Size** (`Float`): spécifie la taille du [Draft Motif](/Draft_Pattern/fr "Draft Pattern/fr").

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour créer une Draft Ellipse, utilisez la méthode `make_ellipse` ([introduit dans la version 0.19](/Release_notes_0.19/fr "Release notes 0.19/fr")) du module Draft. Cette méthode remplace la méthode dépréciée `makeEllipse`.

```
ellipse = make_ellipse(majradius, minradius, placement=None, face=True, support=None)

```

* Crée un objet `ellipse` avec un grand rayon donné (`majradius`) et un petit (`minradius`) en millimètres.
  + La valeur la plus grande sera utilisée pour le grand rayon (X axis) si aucun autre placement n'est indiqué.
* Si `placement` est `None`, l'ellipse sera créée à l'origine.
* Si `face` est `True`, l'ellipse fera une surface c'est-à-dire rempli.

Exemple :

```
import FreeCAD as App
import Draft

doc = App.newDocument()

ellipse1 = Draft.make_ellipse(3000, 200)
ellipse2 = Draft.make_ellipse(700, 1000)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 90))

ellipse3 = Draft.make_ellipse(700, 1000, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Ellipse/fr&oldid=1556561>"