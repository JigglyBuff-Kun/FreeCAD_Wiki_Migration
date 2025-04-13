---
title: Sketcher Scripts
---
## Créer un SketchObject en utilisant Python

Nous créons un SketchObject comme ceci :

```
import FreeCAD as App
import Part
import Sketcher

doc = App.newDocument()  

sketch = doc.addObject("Sketcher::SketchObject", "Sketch")
sketch.addGeometry(Part.LineSegment(App.Vector(1.2, 1.8, 0),
                                    App.Vector(5.2, 5.3, 0)), False)
sketch.addGeometry(Part.LineSegment(App.Vector(6.5, 1.5, 0),
                                    App.Vector(10.2, 5.0, 0)), False)
sketch.addGeometry(Part.LineSegment(App.Vector(12.2, 1.0, 0),
                                    App.Vector(15.4, 5.0, 0)), False)

doc.recompute()

```

Cela ajoute également trois [lignes](/Topological_data_scripting/fr#Ligne "Topological data scripting/fr") dans l'esquisse juste créée.

## Créer une contrainte en Python

Une contrainte géométrique, ![](/images/Sketcher_ConstrainCoincident.svg) ![](/images/Sketcher_ConstrainPointOnObject.svg) ![](/images/Sketcher_ConstrainVertical.svg) ![](/images/Sketcher_ConstrainHorizontal.svg) ![](/images/Sketcher_ConstrainParallel.svg) ![](/images/Sketcher_ConstrainPerpendicular.svg) ![](/images/Sketcher_ConstrainTangent.svg) ![](/images/Sketcher_ConstrainEqual.svg) ![](/images/Sketcher_ConstrainSymmetric.svg) et ![](/images/Sketcher_ConstrainBlock.svg) peuvent être créées à partir de macros et de la console Python en utilisant la commande suivante :

```
sketch.addConstraint(Sketcher.Constraint(ConstraintType, EdgeOrPartOfEdge…))

```

Une contrainte dimensionnelle, ![](/images/Sketcher_ConstrainLock.svg) ![](/images/Sketcher_ConstrainDistanceX.svg) ![](/images/Sketcher_ConstrainDistanceY.svg) ![](/images/Sketcher_ConstrainDistance.svg) ![](/images/Sketcher_ConstrainRadius.svg) ![](/images/Sketcher_ConstrainDiameter.svg) ![](/images/Sketcher_ConstrainAngle.svg), et la contrainte spéciale ![](/images/Sketcher_ConstrainSnellsLaw.svg) [Loi de Snell](/Sketcher_ConstrainSnellsLaw/fr "Sketcher ConstrainSnellsLaw/fr") peuvent être créés à partir de macros et de la console Python en utilisant la commande suivante :

```
sketch.addConstraint(Sketcher.Constraint(DimensionalConstraintType, EdgeOrPartOfEdge…, App.Units.Quantity("float_value unit")))

```

par exemple

```
sketch.addConstraint(Sketcher.Constraint(DimensionalConstraintType, EdgeOrPartOfEdge…, App.Units.Quantity("123.0 mm")))

```

Le premier argument `ConstraintType` est décrit ci-dessous dans les [Types de contraintes](#Types_de_contraintes).

Une contrainte peut prendre jusqu'à six arguments qui sont des arêtes ou indiquent quelle sous-partie d'une arête est utilisée par la contrainte. Consultez la documentation des contraintes individuelles pour plus de détails sur les combinaisons d'arêtes et de sous-parties d'arêtes pouvant être passées en arguments.
Le principal problème avec cette fonction est d'identifier correctement le numéro de ligne et le numéro de sommet des lignes que vous souhaitez traiter.
Les sections ci-dessous décrivent comment [identifier le numéro d'une ligne](#Identifier_le_num.C3.A9ro_d.27une_ligne) et comment [Identifier le numéro des sous-parties d'une ligne](#Identifier_le_num.C3.A9ro_des_sous-parties_d.27une_ligne).

## Types de contraintes

Pour les contraintes géométriques, le premier argument est l'un des suivants. Voir la page de fonctionnalités correspondante pour les combinaisons d'arguments possibles autorisées pour chaque contrainte.

| Code | Icône | Fonction |
| --- | --- | --- |
| `"Coincident"` |  | [Contrainte de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") |
| `"PointOnObject"` |  | [Contrainte point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") |
| `"Vertical"` |  | [Contrainte verticale](/Sketcher_ConstrainVertical/fr "Sketcher ConstrainVertical/fr") |
| `"Horizontal"` |  | [Contrainte horizontale](/Sketcher_ConstrainHorizontal/fr "Sketcher ConstrainHorizontal/fr") |
| `"Parallel"` |  | [Contrainte parallèle](/Sketcher_ConstrainParallel/fr "Sketcher ConstrainParallel/fr") |
| `"Perpendicular"` |  | [Contrainte perpendiculaire](/Sketcher_ConstrainPerpendicular/fr "Sketcher ConstrainPerpendicular/fr") |
| `"Tangent"` |  | [Contrainte tangente](/Sketcher_ConstrainTangent/fr "Sketcher ConstrainTangent/fr") |
| `"Equal"` |  | [Contrainte d'égalité](/Sketcher_ConstrainEqual/fr "Sketcher ConstrainEqual/fr") |
| `"Symmetric"` |  | [Contrainte symétrique](/Sketcher_ConstrainSymmetric/fr "Sketcher ConstrainSymmetric/fr") |
| `"Block"` |  | [Contrainte de blocage](/Sketcher_ConstrainBlock/fr "Sketcher ConstrainBlock/fr") |

Pour les contraintes dimensionnelles, le premier argument est l'un des suivants. Voir la page de fonctionnalités correspondante pour les combinaisons d'arguments possibles autorisées pour chaque contrainte.

| Code | Icône | Fonction |
| --- | --- | --- |
| `"DistanceX"` |  | [Contrainte distance en X](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr") |
| `"DistanceY"` |  | [Contrainte distance en Y](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr") |
| `"Distance"` |  | [Contrainte dimensionnelle](/Sketcher_ConstrainDistance/fr "Sketcher ConstrainDistance/fr") |
| `"Radius"` |  | [Contrainte rayon](/Sketcher_ConstrainRadius/fr "Sketcher ConstrainRadius/fr") |
| `"Diameter"` |  | [Contrainte diamètre](/Sketcher_ConstrainDiameter/fr "Sketcher ConstrainDiameter/fr") |
| `"Angle"` |  | [Contrainte angulaire](/Sketcher_ConstrainAngle/fr "Sketcher ConstrainAngle/fr") |
| `"AngleViaPoint"` |  | [Contrainte angulaire](/Sketcher_ConstrainAngle/fr "Sketcher ConstrainAngle/fr") |

Les contraintes de la ![](/images/Sketcher_ConstrainSnellsLaw.svg) [Loi de Snell](/Sketcher_ConstrainSnellsLaw/fr "Sketcher ConstrainSnellsLaw/fr") se comportent comme des contraintes dimensionnelles pour les besoins du script. Encore une fois, consultez la page de fonctionnalités correspondante pour les combinaisons d'arguments possibles autorisées pour chaque contrainte.

| Code | Icône | Fonction |
| --- | --- | --- |
| `"SnellsLaw"` |  | [Contrainte de réfraction](/Sketcher_ConstrainSnellsLaw/fr "Sketcher ConstrainSnellsLaw/fr") |

La contrainte ![](/images/Sketcher_ConstrainLock.svg) [fixe](/Sketcher_ConstrainLock/fr "Sketcher ConstrainLock/fr") est une commande de l'interface graphique qui crée une contrainte ![](/images/Sketcher_ConstrainDistanceX.svg) [distance horizontale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr") et une ![](/images/Sketcher_ConstrainDistanceY.svg) [distance verticale](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr"), ce n'est pas une contrainte en soi.

## Identifier le numéro d'une ligne

J'ai dessiné trois lignes comme indiqué dans la figure suivante.

![](/images/PartDesignConstraintPointOnPointScriptingFigure1.jpg)

En déplaçant le curseur de la souris au-dessus de la ligne, vous pouvez voir le numéro de la ligne en bas à gauche des fenêtres FreeCAD, voir la figure suivante.

![](/images/PartDesignConstraintPointOnPointScriptingFigure2.jpg)

Malheureusement la numérotation affichée sur les fenêtres de FreeCAD commence à partir de 1 alors que la numérotation de la ligne utilisée pour le script commence à partir de 0 : cela signifie que vous devez soustraire un à chaque fois que vous voulez faire référence à une ligne.

Les nombres positifs indiquent les arêtes d'esquisse (lignes droites, cercles, coniques, B-splines, etc.). Les valeurs suivantes peuvent être utilisées pour désigner des éléments qui ne sont pas des arêtes d'esquisse :

* `-1` désigne l'axe horizontal des x
* `-2` désigne l'axe vertical y
* `-n` désigne le numéro de l'élément de géométrie externe `n-3` (par exemple, l'élément de géométrie externe avec l'indice 0 dans la liste aplatie `sketch.ExternalGeometry` serait désigné par -3, l'élément suivant dans la liste aplatie serait -4 et ainsi de suite).

## Identifier le numéro des sous-parties d'une ligne

Pour déterminer quelle partie d'une ligne est affectée par une contrainte, les valeurs suivantes peuvent être utilisées :

* `0` pour indiquer que la contrainte affecte toute l'arête.
* `1` pour indiquer que la contrainte affecte le point de départ de l'arête (un cercle entier n'a pas de point de départ).
* `2` pour indiquer que la contrainte affecte le point final de l'arête.
* `3` pour indiquer que la contrainte affecte le point central de l'arête. Ne peut être utilisé que pour les cercles, les arcs de cercle, les ellipses et les arcs elliptiques.
* `n` pour indiquer que la contrainte affecte le n-ième pôle d'une B-spline.

Les sommets indiqués par 1 et 2 sont numérotés selon leur ordre de création. Pour connaître l'ordre de leur création (si vous avez beaucoup de lignes, vous ne vous souvenez plus quel sommet vous avez créé en premier), il vous suffit de déplacer le curseur de votre souris au-dessus des deux sommets d'une ligne, voir figure suivante.

![](/images/PartDesignConstraintPointOnPointScriptingFigure3.jpg)

Si vous lisez par exemple 4 et 5, cela signifie que le sommet avec le numéro le plus bas (4 dans cet exemple) sera référencé en utilisant le numéro 1 (en premier dans la commande de script et le sommet avec le numéro le plus élevé (5 dans cet exemple) sera référencé par en utilisant le numéro 2 dans la commande de script.

## Exemple

Prenons l'exemple précédent des trois lignes. La figure suivante indique la numérotation de chaque ligne et de leurs sommets selon la convention de script.

![](/images/PartDesignConstraintPointOnPointScriptingFigure3Bis.jpg)

**Text en bleu :** numérotation des lignes, **text en noir :** numérotation des sommets

La commande `sketch.addConstraint(Sketcher.Constraint("Coincident", 1, 2, 2, 1))` donne le résultat suivant :

![](/images/PartDesignConstraintPointOnPointScriptingFigure4.jpg)

Le code complet pour dessiner les trois lignes et ajouter une contrainte de coïncidence sur deux points de deux lignes est le suivant :

```
import FreeCAD as App
import Part
import Sketcher

doc = App.newDocument()  

sketch = doc.addObject("Sketcher::SketchObject", "Sketch")
sketch.addGeometry(Part.LineSegment(App.Vector(1.2, 1.8, 0),
                                    App.Vector(5.2, 5.3, 0)), False)
sketch.addGeometry(Part.LineSegment(App.Vector(6.5, 1.5, 0),
                                    App.Vector(10.2, 5.0, 0)), False)
sketch.addGeometry(Part.LineSegment(App.Vector(12.2, 1.0, 0),
                                    App.Vector(15.4, 5.0, 0)), False)
sketch.addConstraint(Sketcher.Constraint("Coincident", 1, 2, 2, 1))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_scripting/fr&oldid=1419195>"