---
title: Surface Remplir entre les courbes limites
---
|  |
| --- |
| Surface Remplir entre les courbes limites |
| Emplacement du menu |
| Surface → Fill boundary curves |
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

![](/images/Surface_GeomFillSurface.svg) Surface Remplir entre les courbes limites crée une surface paramétrique à partir de deux, trois ou quatre arêtes de limite en essayant de créer une transition douce entre elles.

![](/images/Surface_GeomFillSurface_4_edges.png) ![](/images/Surface_GeomFillSurface_4_edges_example.png)

![](/images/Surface_GeomFillSurface_3_edges.png) ![](/images/Surface_GeomFillSurface_3_edges_example.png)

![](/images/Surface_GeomFillSurface_2_edges.png) ![](/images/Surface_GeomFillSurface_2_edges_example.png)

A gauche : arêtes utilisées pour générer une surface avec l'outil Remplir entre les courbes limites, 4 arêtes connectées, 3 arêtes connectées et 2 arêtes déconnectées.  
 A droite : surface résultante de l'utilisation de 4, 3 et 2 arêtes respectivement.

## Utilisation

1. Appuyez sur la touche ![](/images/Surface_GeomFillSurface.svg) Fill boundary curves.
2. Sélectionnez les arêtes dans la [Vue 3D](/3D_view/fr "3D view/fr"). Les bords doivent se connecter afin de donner un profil fermé.
3. Appuyez sur OK.

*Remarque :* une fois créée, il n'est pas possible d'appliquer des contraintes supplémentaires à la surface créée.

## Options

**Fill type** : ![](/images/RadioButtonTrue.svg) Stretch, ![](/images/RadioButtonTrue.svg) Coons ou ![](/images/RadioButtonTrue.svg) Curved.

## Propriétés

Surface Remplir entre les courbes limites (classe `Surface::GeomFillSurface`) est dérivée de la classe de base [Part Feature](/Part_Feature/fr "Part Feature/fr") (classe `Part::Feature` via la sous-classe `Part::Spline`), elle partage donc toutes les propriétés de cette dernière.

Outre les propriétés décrites dans [Part Feature](/Part_Feature/fr "Part Feature/fr"), *Surface Remplir entre les courbes limites* a les propriétés suivantes dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Données

Base

* Données**Fill Type** (`Enumeration`) : algorithme de remplissage appliqué. Stretch, le style avec les patchs les plus plats; [`Coons`](https://en.wikipedia.org/wiki/Coons_patch), un style arrondi avec moins de profondeur que Curved; Curved, le style avec les patchs les plus arrondis.
* Données**Boundary List** (`LinkSubList`) : une liste des arêtes qui seront utilisées pour construire la surface.
* Données (caché)**Reversed List** (`BoolList`) :

### Vue

Base

* Vue**Control Points** (`Bool`) : par défaut `false`. Mis à `true`, elle affichera une superposition avec les points de contrôle de la surface.

## Torsion de la surface

La forme de la surface dépend de la direction des arêtes choisies; si des arêtes sont sélectionnées et que le résultat est une surface qui "se tord" sur elle-même, l'une des arêtes peut avoir besoin de sa liste de sommets dans l'ordre inverse. Une surface qui se tord sur elle-même aura probablement des auto-intersections et sera donc une [forme](/Part_TopoShape/fr "Part TopoShape/fr") invalide. Ceci peut être vérifié avec ![](/images/Part_CheckGeometry.svg) [Part Vérifier la géométrie](/Part_CheckGeometry/fr "Part CheckGeometry/fr").

Par exemple, si deux courbes ont les points

```
curve1 = [a, b, c, d]
curve2 = [e, f, g]

```

et la surface résultante après avoir utilisé ![](/images/Surface_GeomFillSurface.svg) Remplir entre les courbes limites ou ![](/images/Surface_Sections.svg) [Surface Sections](/Surface_Sections/fr "Surface Sections/fr") est une surface torsadée, vous pouvez créer une troisième courbe égale à l'une des deux courbes d'origine mais avec une liste de points inversée.

Soit

```
curve1 = [a, b, c, d]
curve3 = [g, f, e]

```

ou

```
curve3 = [d, c, b, a]
curve2 = [e, f, g]

```

devrait fonctionner pour générer une surface qui non tordue.

En termes pratiques, cela signifie que toutes les arêtes utilisées pour générer une surface doivent être créées de préférence dans le même sens horaire ou anti-horaire. Suivre cette règle simple garantit généralement que la surface suivra la direction la plus lisse et ne se tordra pas.

Lorsque la propriété Vue**Lighting** de la surface est `One side`, une face sera coloriée complètement en noir si sa direction normale pointe dans la [Vue 3D](/3D_view/fr "3D view/fr") (loin du visualiseur actuel) indiquant une face inversée par rapport aux autres faces colorées.

![](/images/Surface_twisting_example_smooth.png) ![](/images/Surface_twisting_example_twisted.png)

A gauche : les arêtes limites sont orientées dans la même direction et ainsi la surface générée est lisse.  
A droite : les arêtes limites ont des directions opposées et donc la surface générée se tord sur elle-même, ce qui entraîne des auto-intersections.

## Script

*Voir aussi :* [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Surface Remplir entre les courbes limites peut être utilisé dans des [macros](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr") en ajoutant l'objet `Surface::GeomFillSurface`.

* Les arêtes à utiliser pour définir la surface doivent être affectées en tant que [LinkSubList](/FeaturePython_Custom_Properties/fr#App::PropertyLinkSubList "FeaturePython Custom Properties/fr") à la propriété `BoundaryList` de l'objet.
* Le type d'algorithme doit être attribué comme une chaîne de caractère à la propriété `FillType`.
* Tous les objets avec des arêtes doivent être calculés avant de pouvoir être utilisés comme entrée pour les propriétés de l'objet GeomFillSurface.

```
import FreeCAD as App
import Draft

doc = App.newDocument()

a = App.Vector(-140, -100, 0)
b = App.Vector(175, -108, 0)
c = App.Vector(200, 101, 0)
d = App.Vector(-135, 107, 70)

points1 = [a, App.Vector(-55, -91, 65), App.Vector(35, -85, -5), b]
obj1 = Draft.make_bspline(points1)

points2 = [b, App.Vector(217, -45, 55), App.Vector(217, 35, -15), c]
obj2 = Draft.make_bspline(points2)

points3 = [c, App.Vector(33, 121, 55), App.Vector(0, 91, 15), App.Vector(-80, 121, -40), d]
obj3 = Draft.make_bspline(points3)

points4 = [d, App.Vector(-140, 0, 45), a]
obj4 = Draft.make_bspline(points4)
doc.recompute()

surf = doc.addObject("Surface::GeomFillSurface", "Surface")
surf.BoundaryList = [(obj1, "Edge1"),
                     (obj2, "Edge1"),
                     (obj3, "Edge1"),
                     (obj4, "Edge1")]
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_GeomFillSurface/fr&oldid=1465739>"