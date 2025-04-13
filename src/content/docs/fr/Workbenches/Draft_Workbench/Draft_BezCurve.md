---
title: Draft Courbe de Bézier
---
|  |
| --- |
| Draft Courbe de Bézier |
| Emplacement du menu |
| Draft : Formes → Outils de Bézier → Courbe de Bézier  BIM : Formes 2D → Courbe de Bézier |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| B Z |
| Introduit dans la version |
| 0.14 |
| Voir aussi |
| [Draft Courbe de Bézier cubique](/Draft_CubicBezCurve/fr "Draft CubicBezCurve/fr"), [Draft B-spline](/Draft_BSpline/fr "Draft BSpline/fr") |
|  |

## Description

La commande ![](/images/Draft_BezCurve.svg) **Draft Courbe de Bézier** crée une [courbe de Bézier](http://fr.wikipedia.org/wiki/Courbe_de_B%C3%A9zier) à partir de plusieurs points.

La commande crée une seule courbe de Bézier dont la Données**Degree** est `number_of_points - 1`. Elle peut être transformée en une courbe de Bézier par morceaux en réduisant cette propriété.

Les commandes Draft Courbe de Bézier et [Draft Courbe de Bézier cubique](/Draft_CubicBezCurve/fr "Draft CubicBezCurve/fr") utilisent des *points de contrôle* pour définir la position et la courbure de la spline. La commande [Draft B-spline](/Draft_BSpline/fr "Draft BSpline/fr"), quant à elle, spécifie les *points exacts* par lesquels la courbe passera.

![](/images/Draft_BezCurve_Example.png)

Courbe de Bézier définie par plusieurs points de control

## Utilisation

Voir aussi : [Draft La barre](/Draft_Tray/fr "Draft Tray/fr"), [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") et [Draft Contrainte](/Draft_Constrain/fr "Draft Constrain/fr").

1. Il existe plusieurs façons de lancer la commande :
   * Appuyer sur le bouton ![](/images/Draft_BezCurve.svg) Courbe de Bézier.
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr") : sélectionner l'option **Formes → Outils de Bézier → ![](/images/Draft_BezCurve.svg) Courbe de Bézier** du menu.
   * [BIM](/BIM_Workbench/fr "BIM Workbench/fr") : sélectionner l'option **Formes 2D → ![](/images/Draft_BezCurve.svg) Courbe de Bézier** du menu.
   * Utiliser le raccourci clavier : B puis Z.
2. Le panneau de tâches **Courbe de Bézier** s'ouvre. Voir [Options](#Options) pour plus d'informations.
3. Choisir le premier point dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrer des coordonnées et appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
4. Choisir des points supplémentaires dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrer des coordonnées et appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
5. Appuyer sur Échap ou sur le bouton Fermer pour terminer la commande.

## Options

Les raccourcis clavier à caractère unique disponibles dans le panneau des tâches peuvent être modifiés. Voir [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr"). Les raccourcis mentionnés ici sont les raccourcis par défaut (pour la version 1.0).

* Pour saisir manuellement des coordonnées, entrez les valeurs X, Y et Z et appuyez sur Entrée après chacune. Ou vous pouvez appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point lorsque vous avez les valeurs souhaitées. Il est conseillé de déplacer le pointeur hors de la [vue 3D](/3D_view/fr "3D view/fr") avant de saisir les coordonnées.
* Appuyez sur R ou cliquez sur la case **Relative** pour activer le mode relatif. Si le mode relatif est activé, les coordonnées sont relatives au dernier point, si disponible, sinon elles sont relatives à l'origine du système de coordonnées.
* Appuyez sur G ou cliquez sur la case **Global** pour activer le mode global. Si le mode global est activé, les coordonnées sont relatives au système de coordonnées global, sinon elles sont relatives au système de coordonnées du [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").
* Appuyez sur F ou cliquez sur la case à cocher **Remplir** version 1.0 et précédentes ou **Créer une face** [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr") pour activer le mode de création d'une face. Si le mode Créer une face est activé, la spline créée aura Données**Make Face** fixé à `true` et aura une face remplie, à condition qu'elle soit fermée et qu'elle ne s'auto-intersecte pas. Une spline auto-intersectrice avec une face ne s'affichera pas correctement, pour une telle spline Données**Make Face** doit être réglé sur `false`.
* Appuyez sur N ou cliquez sur la case **Continuer** pour activer le mode continu. Si le mode continu est activé, la commande redémarre après avoir utilisé ![](/images/Draft_FinishLine.svg) Terminer ou ![](/images/Draft_CloseLine.svg) Fermer, ou après avoir créé une courbe fermée en la fixant au premier point de la courbe, ce qui vous permet de continuer à créer des courbes.
* Appuyez sur / ou sur le bouton ![](/images/Draft_UndoLine.svg) Annuler pour annuler le dernier point.
* Appuyez sur A ou sur le bouton ![](/images/Draft_FinishLine.svg) Terminer pour terminer la commande et laisser la courbe ouverte.
* Appuyez sur O ou sur le bouton ![](/images/Draft_CloseLine.svg) Fermer pour terminer la commande et fermer la courbe. Une courbe fermée peut également être créée en se plaçant au premier point de la courbe.
* Appuyez sur W ou sur le bouton ![](/images/Draft_Wipe.svg) Effacer pour supprimer les segments déjà placés, mais continuez à travailler à partir du dernier point.
* Appuyez sur U ou sur le bouton ![](/images/Draft_SelectPlane.svg) [Définir le plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") pour ajuster le plan de travail actuel dans l'orientation définie par le dernier et le précédent point.
* Appuyez sur S pour activer ou désactiver [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr").
* Appuyez sur Échap ou sur le bouton Fermer pour terminer la commande.

## Remarques

* Une Draft Courbe de Bézier peut être éditée avec la commande [Draft Éditer](/Draft_Edit/fr "Draft Edit/fr").
* OpenCascade, et donc FreeCAD, ne supporte pas les courbes de Bézier de degrés supérieurs à 25. Cela ne devrait pas être un problème en pratique, car la plupart des utilisateurs utilisent généralement des courbes de Bézier de degrés 3 à 5.

## Propriétés

Voir aussi: [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Draft Courbe de Bézier est dérivé d'un [Part Part2DObject](/Part_Part2DObject/fr "Part Part2DObject/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Draft

* Données**Area** (`Area`) : (en lecture seule) spécifie la surface de la face de la courbe. La valeur sera `0.0` si Données**Make Face** est `false` ou si la face ne peut être créée.
* Données**Closed** (`Bool`) : spécifie si la courbe est fermée ou non. Si la courbe est initialement ouverte, cette valeur est `false`, si vous lui attribuez la valeur `true`, un segment sera dessiné pour fermer la courbe. Si la courbe est initialement fermée, cette valeur est `true`, la mettre à `false` supprimera le dernier segment et rendra la courbe ouverte.
* Données**Continuity** (`IntegerList`) : (en lecture seule) spécifie la continuité de la courbe.
* Données**Degree** (`Integer`) : spécifie le degré de la courbe.
* Données**Length** (`Length`) : (en lecture seule) spécifie la longueur totale de la courbe.
* Données**Make Face** (`Bool`) : spécifie si la courbe fait une face ou non. Si c'est `true`, une face est créée, sinon seul le périmètre est considéré comme faisant partie de l'objet. Cette propriété ne fonctionne que si Données**Closed** est `true` et si la courbe ne s'auto-intersecte pas.
* Données**Points** (`VectorList`) : spécifie les points de contrôle de la courbe dans son système de coordonnées local.

### Vue

Draft

* Vue**Arrow Size** (`Length`) : spécifie la taille du symbole affiché à l'extrémité de la courbe.
* Vue**Arrow Type** (`Enumeration`) : spécifie le type de symbole affiché à la fin de la courbe, qui peut être `Dot`, `Circle`, `Arrow`, `Tick` ou `Tick-2`.
* Vue**End Arrow** (`Bool`) : spécifie s'il faut afficher un symbole à la fin de la courbe, afin qu'elle puisse être utilisée comme ligne d'annotation.
* Vue**Pattern** (`Enumeration`) : spécifie le [Draft Motif](/Draft_Pattern/fr "Draft Pattern/fr") avec lequel remplir la face de la courbe fermée. Cette propriété ne fonctionne que si Données**Make Face** est `true` et si Vue**Display Mode** est `Flat Lines`.
* Vue**Pattern Size** (`Float`) : spécifie la taille du [Draft Motif](/Draft_Pattern/fr "Draft Pattern/fr").

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour créer une Draft Ligne, utilisez la méthode `make_bezcurve` ([introduit dans la version 0.19](/Release_notes_0.19/fr "Release notes 0.19/fr")) du module Draft. Cette méthode remplace la méthode dépréciée `makeBezCurve`.

```
bezcurve = make_bezcurve(pointslist, closed=False, placement=None, face=None, support=None, degree=None)
bezcurve = make_bezcurve(Part.Wire, closed=False, placement=None, face=None, support=None, degree=None)

```

* Crée un objet `bezcurve` avec la liste de points donnée, `pointslist`.
  + Chaque point de la liste est défini par son `FreeCAD.Vector`, en millimètres.
  + Sinon, l'entrée peut être un `Part.Wire` à partir duquel les points sont extraits.
* Si `closed` est `True` ou si les premier et dernier points sont identiques, la courbe est fermée.
* Si un `placement` est `None`, la courbe est créée à l'origine.
* Si `face` est `True` et la courbe est fermée, la courbe fera une face, c'est-à-dire qu'elle apparaîtra remplie.

Exemple :

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)
p4 = App.Vector(1500, -2000, 0)

bezcurve1 = Draft.make_bezcurve([p1, p2, p3, p4], closed=True)
bezcurve2 = Draft.make_bezcurve([p4, 1.3*p2, p1, 4.1*p3], closed=True)
bezcurve3 = Draft.make_bezcurve([1.7*p3, 1.5*p4, 2.1*p2, p1], closed=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_BezCurve/fr&oldid=1556569>"