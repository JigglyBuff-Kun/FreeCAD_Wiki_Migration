---
title: Part Part2DObject
---
## Introduction

![](/images/Tree_Part2D.svg)

Part Part2DObject, ou formellement un `Part::Part2DObject`, est un élément simple associé à une [une forme topologique](/Part_TopoShape/fr "Part TopoShape/fr") qui peut être affiché dans la [Vue 3D](/3D_view/fr "3D view/fr").

Le `Part::Part2DObject` est dérivé de [Part Feature](/Part_Feature/fr "Part Feature/fr") mais est spécialisé pour la géométrie 2D, étant donné que sa forme reposera sur un plan. Ce plan est défini par sa propriété Données**Placement** (position, normale et rotation). Cependant, le plan peut également être défini en prenant en charge des éléments géométriques, tel que le plan créé par trois sommets arbitraires ou une face d'un corps solide.

![](/images/FreeCAD_core_objects.svg)

Diagramme simplifié des relations entre les objets centraux dans Freecad

## Utilisation

Part Part2DObject est un objet interne. Par conséquent, il ne peut pas être créé à partir de l'interface graphique, uniquement à partir de la [Console Python](/Python_console/fr "Python console/fr"), comme décrit dans la section [Script](#Script).

`Part::Part2DObject` est défini dans l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr") mais peut être utilisé comme classe de base pour les [Objets créés par script](/Scripted_objects/fr "Scripted objects/fr") dans tous les [Ateliers](/Workbenches/fr "Workbenches/fr") qui produisent des formes géométriques 2D. Par exemple, c'est l'objet de base pour les esquisses ([Sketcher SketchObject](/Sketcher_SketchObject/fr "Sketcher SketchObject/fr")), et pour la plupart des objets créés avec l'[atelier Draft](/Draft_Workbench "Draft Workbench").

Des ateliers peuvent ajouter plus de propriétés à cet élément de base pour produire un objet au comportement complexe.

## Propriétés

Voir [Propriétés](/Property/fr "Property/fr") pour tous les types de propriétés que les objets scriptés peuvent avoir.

Part Part2DObject (de classe `Part::Part2DObject`) est dérivé de [Part Feature](/Part_Feature/fr "Part Feature/fr") (de classe `Part::Feature`) et hérite de toutes ses propriétés.

Le Part Part2DObject possède également les propriétés supplémentaires suivantes dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"). Les propriétés cachées peuvent être affichées à l'aide de la commande **Afficher les propriétés cachées** du menu contextuel de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Données

Attachment

* Données (Hidden)**Attacher Type** (`String`) : nom de la classe de l'objet moteur de l'attachement. La valeur par défaut est `Attacher::AttachEnginePlane`.
* Données**Support** (`LinkSubList`) : il s'agit du plan ou de la face supportant la géométrie 2D. Par défaut, il s'agit d'une liste vide `[]`.
* Données**Map Mode** (`Enumeration`) : `Deactivated` par défaut. Cette propriété détermine un plan que l'objet utilisera comme référence pour la géométrie 2D. En cliquant sur l'ellipse ... (trois points), à droite du champ de saisie, lance la commande [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr") qui permet de sélectionner le plan de référence en choisissant différents éléments dans la [Vue 3D](/3D_view/fr "3D view/fr"). Les différents modes sont : `Deactivated`, `Translate origin`, `Object's XY`, `Object's XZ`, `Object's YZ`, `Plane face`, `Tangent to surface`, `Normal to edge`, `Frenet NB`, `Frenet TN`, `Frenet TB`, `Concentric`, `Revolution section`, `Plane by 3 points`, `Normal to 3 points`, `Folding`, `Inertia 2-3`, `Align O-N-X`, `Align O-N-Y`, `Align O-X-Y`, `Align O-X-N`, `Align O-Y-N`, `Align O-Y-X`.
* Données**Map Reversed** (`Bool`) : sa valeur par défaut est `false` ; si elle est `true`, la direction Z sera inversée. Par exemple, une [esquisse](/Sketch/fr "Sketch/fr") sera retournée à l'envers. Caché si Données**Map Mode** est `Deactivated`.
* Données (Hidden)**Map Path Parameter** (`Float`) : définit le point de la courbe vers lequel mapper une [esquisse](/Sketch/fr "Sketch/fr"). Il va de `0` à `1`, qui correspondent aux `start` et `end`. La valeur par défaut est `0`.
* Données**Attachment Offset** (`Placement`) : la position de l'objet dans la [Vue 3D](/3D_view/fr "3D view/fr"), par rapport au placement de l'objet d'attachement. L'emplacement est défini par un point `Base` (vecteur) et un `Rotation` (axe et angle). Voir [Placement](/Placement/fr "Placement/fr"). Masqué si Données**Map Mode** est `Deactivated`.

## Script

*Voir aussi :* [Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr") et [Objets créés par script](/Scripted_objects/fr "Scripted objects/fr").

Voir [Part Feature](/Part_Feature/fr "Part Feature/fr") pour les informations générales sur l'ajout d'objets au document.

Un Part2DObject est créé avec la méthode `addObject()` du document.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::Part2DObject", "Name")
obj.Label = "Custom label"

```

Pour la sous-classification de [Python](/Python/fr "Python/fr"), vous devez créer l'objet `Part::Part2DObjectPython`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::Part2DObjectPython", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Part2DObject/fr&oldid=1560979>"