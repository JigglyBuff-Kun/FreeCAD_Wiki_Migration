---
title: Draft Polyligne
---
|  |
| --- |
| Draft Polyligne |
| Emplacement du menu |
| Draft : Formes → Polyligne  BIM : Formes 2D → Polyligne |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| P L |
| Introduit dans la version |
| 0.7 |
| Voir aussi |
| [Draft Ligne](/Draft_Line/fr "Draft Line/fr"), [Draft B-spline](/Draft_BSpline/fr "Draft BSpline/fr") |
|  |

## Description

La commande ![](/images/Draft_Wire.svg) **Draft Polyligne** [crée](#Cr.C3.A9er) une polyligne, une séquence de plusieurs segments de ligne connectés. La commande peut aussi être utilisée pour [joindre](#Joindre) des [Draft Lignes](/Draft_Line/fr "Draft Line/fr") et des Draft Polylignes.

Les angles d'une Draft Polyligne peuvent être arrondis ou chanfreinés en modifiant respectivement sa propriété Données**Fillet Radius** ou Données**Chamfer Size**. Il est également possible de subdiviser les bords d'une Draft Polyligne en modifiant sa propriété Données**Subdivisions**.

![](/images/Draft_Polyline_example.jpg)

Une polyligne définie par plusieurs points

## Créer

### Utilisation

Voir aussi : [Draft La barre](/Draft_Tray/fr "Draft Tray/fr"), [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") et [Draft Contrainte](/Draft_Constrain/fr "Draft Constrain/fr").

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Draft_Wire.svg) Polyligne.
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr") : sélectionnez l'option **Formes → ![](/images/Draft_Wire.svg) Polyligne** du menu.
   * [BIM](/BIM_Workbench/fr "BIM Workbench/fr") : sélectionnez l'option **Formes 2D → ![](/images/Draft_Wire.svg) Polyligne** du menu.
   * Utilisez le raccourci clavier : P puis L.
2. Le panneau de tâches **Polyligne** s'ouvre. Voir [Options](#Options) pour plus d'informations.
3. Choisissez le premier point dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrez des coordonnées et appuyez sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
4. Choisissez des points supplémentaires dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrez des coordonnées et appuyez sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
5. Appuyez sur Échap ou sur le bouton Fermer pour terminer la commande.

### Options

Les raccourcis clavier à caractère unique disponibles dans le panneau des tâches peuvent être modifiés. Voir [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr"). Les raccourcis mentionnés ici sont les raccourcis par défaut (pour la version 1.0).

* Pour saisir manuellement des coordonnées, entrez les valuers X, Y et Z, et appuyez sur Entrée après chacune, ou vous pouvez appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point lorsque vous savez les valeurs souhaitées. Il est conseillé de déplacer le pointeur hors de la [vue 3D](/3D_view/fr "3D view/fr") avant de saisir les coordonnées.
* Appuyez sur R ou cochez la case **Relative** pour activer le mode relatif. Si le mode relatif est activé, les coordonnées sont relatives au dernier point, si disponible, sinon elles sont relatives à l'origine du système de coordonnées.
* Appuyez sur G ou cochez la case **Global** pour activer le mode global. Si le mode global est activé, les coordonnées sont relatives au système de coordonnées global, sinon elles sont relatives au système de coordonnées du [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").
* Appuyez sur F ou cliquez sur la case à cocher **Remplir** version 1.0 et précédentes ou **Créer une face** [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr") pour activer le mode de création d'une face. Si le mode Créer une face est activé, la polyligne créée aura Données**Make Face** définie sur `true` et aura une face remplie, à condition qu'elle soit fermée et qu'elle ne s'auto-intersecte pas. Une polyligne qui s'auto-intersecte avec une face ne s'affichera pas correctement, pour une telle polyligne Données**Make Face** doit être réglée sur `false`.
* Appuyez sur N ou cochez la case **Continuer** pour activer le mode continu. Si le mode continu est activé, la commande redémarre après avoir utilisé ![](/images/Draft_FinishLine.svg) Terminer ou ![](/images/Draft_CloseLine.svg) Fermer, ou après avoir créé une ligne fermée en s'aimantant au premier point de la ligne, ce qui vous permet de continuer à créer des lignes.
* Appuyez sur / ou sur le bouton ![](/images/Draft_UndoLine.svg) Annuler pour annuler le dernier point.
* Appuyez sur A ou sur le bouton ![](/images/Draft_FinishLine.svg) Terminer pour terminer la commande et laisser la ligne ouverte.
* Appuyez sur O ou sur le bouton ![](/images/Draft_CloseLine.svg) Fermer pour terminer la commande et fermer la ligne. Une ligne fermée peut également être créée en s'aimantant au premier point de la ligne.
* Appuyez sur W ou sur le bouton ![](/images/Draft_Wipe.svg) Effacer pour supprimer les segments déjà placés, mais continuez à travailler à partir du dernier point.
* Appuyez sur U ou sur le bouton ![](/images/Draft_SelectPlane.svg) [Définir le plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") pour ajuster le plan de travail actuel dans l'orientation du dernier segment.
* Appuyez sur S pour activer ou désactiver [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr").
* Appuyez sur Échap ou sur le bouton Fermer pour terminer la commande.

## Joindre

### Utilisation

1. Les extrémité des [Draft Lignes](/Draft_Line/fr "Draft Line/fr") et/ou des Draft Polylignes à joindre doivent coïncider exactement. Si nécessaire, ajustez d'abord les points pour vous assurer que c'est le cas.
2. Sélectionnez deux ou plusieurs [Draft Lignes](/Draft_Line/fr "Draft Line/fr") et/ou des Draft Polylignes.
3. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Draft_Wire.svg) Polyligne.
   * Sélectionnez l'option **Draft → ![](/images/Draft_Wire.svg) Polyligne** dans le menu.
   * Utilisez les raccourcis du clavier : P puis L.

## Remarques

* Une Draft Polyligne peut être éditée avec la commande [Draft Éditer](/Draft_Edit/fr "Draft Edit/fr").
* Une Draft Ligne peut être convertie en une [Draft B-spline](/Draft_BSpline/fr "Draft BSpline/fr") avec la commande [Draft Polyligne vers B-spline](/Draft_WireToBSpline/fr "Draft WireToBSpline/fr").
* Les [Draft Lignes](/Draft_Line/fr "Draft Line/fr") et les Draft Polylignes peuvent également être jointes avec la commande [Draft Joindre](/Draft_Join/fr "Draft Join/fr") ou la commande [Draft Agréger](/Draft_Upgrade/fr "Draft Upgrade/fr").

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Draft Polyligne est dérivé d'un [Part Part2DObject](/Part_Part2DObject/fr "Part Part2DObject/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Draft

* Données**Area** (`Area`) : (en lecture seule) spécifie la surface de la face générée par la ligne. La valeur sera `0.0` si Données**Make Face** est `false` ou si la face ne peut être créée.
* Données**Base** (`Link`)
* Données**Chamfer Size** (`Length`) : spécifie la longueur des chanfreins aux coins de la ligne.
* Données**Closed** (`Bool`) : spécifie si la ligne est fermée ou non. Si la ligne est initialement ouverte, cette valeur est `false`. Si vous lui attribuez la valeur `true`, un segment de la ligne sera dessiné pour fermer la ligne. Si la ligne est initialement fermée, cette valeur est `true`, la mettre à `false` supprimera le dernier segment de la ligne et rendra la ligne ouverte.
* Données**End** (`VectorDistance`) : spécifie le dernier point de la ligne.
* Données**lignelet Radius** (`Length`) : spécifie le rayon des filets aux brisures de la ligne.
* Données**Length** (`Length`) : (en lecture seule) spécifie la longueur totale de la ligne.
* Données**Make Face** (`Bool`) : spécifie si la ligne fait une face ou non. Si c'est `true`, une face est créée, sinon seuls les bords sont considérés comme faisant partie de l'objet. Cette propriété ne fonctionne que si Données**Closed** est `true` et si la ligne ne s'auto-intersecte pas.
* Données**Points** (`VectorList`) : spécifie les points de la ligne dans son système de coordonnées local.
* Données**Start** (`VectorDistance`) : spécifie le premier point de la ligne.
* Données**Subdivisions** (`Integer`) : spécifie le nombre de subdivisions pour chaque arête de la ligne. Si la valeur est `1`, chaque bord sera divisé en `2` segments égaux. Les subdivisions sont appliquées avant les chanfreins et les ligneets.
* Données**Tool** (`Link`)

### Vue

Draft

* Vue**Arrow Size** (`Length`) : spécifie la taille du symbole affiché à l'extrémité de la ligne.
* Vue**Arrow Type** (`Enumeration`) : spécifie le type de symbole affiché à l'extrémité de la ligne, qui peut être `Dot`, `Circle`, `Arrow`, `Tick` ou `Tick-2`.
* Vue**End Arrow** (`Bool`) : spécifie s'il faut afficher un symbole à la fin de la ligne, afin qu'elle puisse être utilisée comme ligne d'annotation.
* Vue**Pattern** (`Enumeration`) : spécifie le [Draft Motif](/Draft_Pattern/fr "Draft Pattern/fr") avec lequel remplir la face de la ligne fermée. Cette propriété ne fonctionne que si Données**Make Face** est `true` et si Vue**Display Mode** est à `Flat Lines`.
* Vue**Pattern Size** (`Float`) : spécifie la taille du [Draft Motif](/Draft_Pattern/fr "Draft Pattern/fr").

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour créer une Draft Polyligne, utilisez la méthode `make_wire` ([introduit dans la version 0.19](/Release_notes_0.19/fr "Release notes 0.19/fr")) du module Draft. Cette méthode remplace la méthode dépréciée `makeWire`.

```
wire = make_wire(pointslist, closed=False, placement=None, face=None, support=None)
wire = make_wire(Part.Wire, closed=False, placement=None, face=None, support=None)

```

* Crée un objet `Wire` avec la liste de points donnée, `liste de points`.
  + Chaque point de la liste est défini par son `FreeCAD.Vector`, avec comme unité le millimètre.
  + Sinon, l'entrée peut être un `Part.Wire`, à partir duquel les points sont extraits.
* Si `closed` est réglé sur `True`, ou si les premier et dernier points sont identiques, le fil est fermé.
* Si un `placement` est `None`, la courbe est créée à l'origine.
* Si `face` est réglé sur `True`, et que le fil est fermé, le fil fera une face, c'est-à-dire qu'elle apparaîtra remplie.

Exemple :

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)

wire1 = Draft.make_wire([p1, p2, p3], closed=True)
wire2 = Draft.make_wire([p1, 2*p3, 1.3*p2], closed=True)
wire3 = Draft.make_wire([1.3*p3, p1, -1.7*p2], closed=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Wire/fr&oldid=1556555>"