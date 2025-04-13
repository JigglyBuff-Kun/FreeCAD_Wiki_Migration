---
title: Surface Remplissage
---
|  |
| --- |
| Surface Remplissage |
| Emplacement du menu |
| Surface → Filling... |
| Ateliers |
| [Surface](/Surface_Workbench/fr "Surface Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| *Aucun* |
|  |

## Description

![](/images/Surface_Filling.svg) Surface Remplissage crée une surface à partir d'une série d'arêtes de délimitation connectées. La courbure de la surface peut être contrôlée en outre par des arêtes et des sommets non délimités, ainsi que par une surface de support.

La géométrie de base peut appartenir à des courbes créées avec l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") ou l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"), mais aussi à des objets solides tels que ceux créés avec l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr") ou l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").

![](/images/Surface_Filling_example.png)

Deux surfaces remplies délimitées par quatre arêtes situées sur le plan XY. La surface de droite est en plus contrôlée par une arête non délimitée.

## Utilisation

1. Appuyez sur le bouton ![](/images/Surface_Filling.svg) Remplissage.
2. Le panneau de tâches **Limites** s'ouvre. Voir [Options](#Options).
3. Sélectionnez deux ou plusieurs arêtes dans la [vue 3D](/3D_view/fr "3D view/fr") :
   * Il n'est pas nécessaire d'appuyer sur le bouton Ajouter une arête dans la section **Limites** à ce moment-là.
   * Les arêtes doivent être sélectionnées dans un ordre consécutif.
   * Les arêtes doivent être connectées, mais la frontière complète ne doit pas nécessairement être fermée.
   * Le contour complet ne doit pas s'auto-intersecter.
   * Pour un contour circulaire de 360°, deux arêtes semi-circulaires peuvent être sélectionnées.
4. Un aperçu de la forme finale s'affiche dès qu'un nombre suffisant de géométries valides a été sélectionné.
5. Optionnellement, sélectionnez une **Surface de support**. Voir [Exemple](#Exemple).
6. Vous pouvez sélectionner une ou plusieurs **Contraintes d'arête**.
7. Vous pouvez sélectionner une ou plusieurs **Contraintes de sommets**.
8. Appuyez sur le bouton OK.

## Options

* Dans la section **Limites**, vous pouvez spécifier une surface de support et les arêtes de délimitation :
  + Appuyez sur le bouton Surface de support et sélectionnez une face dans la [vue 3D](/3D_view/fr "3D view/fr") pour ajouter une surface de support.
    - Cliquez sur l'icône ![](/images/Edit-cleartext.svg) pour supprimer la surface de support.
  + Appuyez une fois sur le bouton Ajouter une arête pour commencer à sélectionner les arêtes de délimitation dans la [vue 3D](/3D_view/fr "3D view/fr").
  + Il existe plusieurs façons de désélectionner les arêtes de délimitation :
    - Appuyez une fois sur le bouton Supprimer l'arête pour commencer à désélectionner les arêtes dans la [vue 3D](/3D_view/fr "3D view/fr").
    - Sélectionnez une arête dans la liste et appuyez sur Supprimer.
    - Cliquez avec le bouton droit de la souris sur un bord de la liste et sélectionnez **Supprimer** dans le menu contextuel.

* Dans la section **Contraintes d'arêtes**, il est possible de spécifier des arêtes qui ne délimitent pas :
  + Les options de sélection sont similaires à celles des arêtes de délimitation.

* Dans la section **Contraintes de sommets**, il est possible de spécifier des sommets qui ne délimitent pas :
  + Les options de sélection sont similaires à celles des arêtes de délimitation.

* Appuyez sur Échap ou sur le bouton Annuler pour annuler l'opération.

## Exemple

**Surface de support** agit comme une contrainte supplémentaire pour la surface. L'exemple simple suivant vous donnera une idée de la façon dont cela fonctionne :

1. Dans l'![](/images/Workbench_Part.svg) [atelier Part](/Part_Workbench/fr "Part Workbench/fr"), créez un ![](/images/Part_Cylinder.svg)[cylindre](/Part_Cylinder/fr "Part Cylinder/fr") et définissez Données**Angle** à `180°`.
2. Passez à l'![](/images/Workbench_Surface.svg) [atelier Surface](/Surface_Workbench/fr "Surface Workbench/fr") et appuyez sur ![](/images/Surface_Filling.svg) Remplissage.
3. Sélectionnez les deux bords semi-circulaires et les deux arêtes rectilignes qui les relient.
4. Le résultat correspond aux quatre arêtes de délimitation mais la forme intérieure est très différente de la face cylindrique.
5. Éditez l'objet Surface et pour la **Surface de support**, sélectionnez la face cylindrique.
6. La forme modifiée correspond beaucoup mieux à la face cylindrique.

## Propriétés

Surface Remplissage (classe `Surface::Filling`) est dérivée de la classe de base [Part Feature](/Part_Feature/fr "Part Feature/fr") (classe `Part::Feature` via la sous-classe `Part::Spline`), elle partage donc toutes les propriétés de cette dernière.

Outre les propriétés décrites dans [Part Feature](/Part_Feature/fr "Part Feature/fr"), Surface Remplissage a les propriétés suivantes dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Données

Filling

* Données**Boundary Edges** (`LinkSubList`) : arêtes de frontière; C0 est requis pour les arêtes sans face correspondante.
* Données**Boundary Faces** (`StringList`) :
* Données**Boundary Order** (`IntegerList`) : ordre de contrainte sur les faces limites : `0`, `1` et `2` sont possibles.
* Données**Unbound Edges** (`LinkSubList`) : arêtes de contrainte non liés; C0 est requis pour les arêtes sans face correspondante.
* Données**Unbound Faces** (`StringList`) :
* Données**Unbound Order** (`IntegerList`) : ordre de contrainte sur les faces non liées : `0`, `1` et `2` sont possibles.
* Données**Free Faces** (`LinkSubList`) : contrainte libre sur une face.
* Données**Free Order** (`IntegerList`) : ordre de contrainte sur les faces libres.
* Données**Points** (`LinkSubList`) : points de contrainte sur la surface.
* Données**Initial Face** (`LinkSub`) : surface initiale à utiliser.
* Données**Degree** (`Integer`) : degré de départ, par défaut `3`.
* Données**Points On Curve** (`Integer`) : nombre de points sur une arête pour la contrainte.
* Données**Iterations** (`Integer`) : nombre d'itérations, par défaut `2`.
* Données**Anisotropy** (`Bool`) : par défaut `false`.
* Données**Tolerance2d** (`Float`) : tolérance 2D, par défaut `0.0`.
* Données**Tolerance3d** (`Float`) : tolérance 3D, par défaut `0.0`.
* Données**Tol Angular** (`Float`) : tolérance G1, par défaut `0.01`.
* Données**Tol Curvature** (`Float`) : tolérance G2, par défaut `0.10`.
* Données**Maximum Degree** (`Integer`) : degré maximum de la courbe, par défaut `8`.
* Données**Maximum Segments** (`Integer`) : nombre maximum de segments, par défaut `9`.

### Vue

Base

* Vue**Control Points** (`Bool`) : par défaut `false`. Mis à `true`, elle affichera une superposition avec les points de contrôle de la surface.

## Script

*Voir aussi :* [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Remplissage de Surface peut être utilisé dans des [macros](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr") en ajoutant l'objet `Surface :: Filling`.

* Les arêtes à utiliser pour définir la surface doivent être affectées en tant que [LinkSubList](/FeaturePython_Custom_Properties/fr#App::PropertyLinkSubList "FeaturePython Custom Properties/fr") à la propriété `BoundaryEdges` de l'objet.
* Les arêtes et les sommets auxiliaires doivent être affectés en tant que [LinkSubLists](/FeaturePython_Custom_Properties/fr#App::PropertyLinkSubList "FeaturePython Custom Properties/fr") aux propriétés `UnboundEdges` et `Points` de l'objet.
* Tous les objets avec des arêtes doivent être calculés avant de pouvoir être utilisés comme entrée pour les propriétés de l'objet Filling.

```
import FreeCAD as App
import Draft

doc = App.newDocument()

a = App.Vector(-20, -20, 0)
b = App.Vector(-18, 25, 0)
c = App.Vector(60, 26, 0)
d = App.Vector(33, -20, 0)

points1 = [a, App.Vector(-20, -8, 0), App.Vector(-17, 7, 0), b]
obj1 = Draft.make_bspline(points1)

points2 = [b, App.Vector(0, 25, 0), c]
obj2 = Draft.make_bspline(points2)

points3 = [c, App.Vector(37, 4, 0), d]
obj3 = Draft.make_bspline(points3)

points4 = [d, App.Vector(-2, -18, 0), a]
obj4 = Draft.make_bspline(points4)
doc.recompute()

surf = doc.addObject("Surface::Filling", "Surface")
surf.BoundaryEdges = [(obj1, "Edge1"),
                      (obj2, "Edge1"),
                      (obj3, "Edge1"),
                      (obj4, "Edge1")]
doc.recompute()

# ---------------------------------------------------------
points_spl = [App.Vector(-10, 0, 2),
              App.Vector(4, 0, 7),
              App.Vector(18, 0, -5),
              App.Vector(25, 0, 0),
              App.Vector(30, 0, 0)]
aux_edge = Draft.make_bspline(points_spl)
doc.recompute()

surf.UnboundEdges = [(aux_edge, "Edge1")]
doc.recompute()

# ---------------------------------------------------------
aux_v1 = Draft.make_line(App.Vector(-13, -12, 5),
                         App.Vector(-13, -12, -5))
aux_v2 = Draft.make_line(App.Vector(-3, 18, 5),
                         App.Vector(-3, 18, -5))
doc.recompute()

surf.Points = [(aux_v1, "Vertex2"),
               (aux_v2, "Vertex1")]
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_Filling/fr&oldid=1493102>"