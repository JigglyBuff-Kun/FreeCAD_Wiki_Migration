---
title: Sketcher SketchObject
---
## Introduction

![](/images/Sketcher_Sketch.svg)

Un Sketcher SketchObject, ou formellement un `Sketcher::SketchObject`, est l'élément de base pour créer des objets 2D avec l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr").

`Sketcher::SketchObject` est dérivé de [Part Part2DObject](/Part_Part2DObject/fr "Part Part2DObject/fr"). Cela signifie qu'il s'agit d'un objet [Part Feature](/Part_Feature/fr "Part Feature/fr") spécialisé dans la géométrie 2D. Comme Part2DObject, l'objet SketchObject peut être attaché à des plans et à des faces. En plus de cela, SketchObject peut gérer les contraintes géométriques des lignes et des courbes qui y sont dessinées.

![](/images/FreeCAD_core_objects.svg)

Diagramme simplifié des relations entre les objets centraux dans Freecad

## Utilisation

Voir [Sketcher Créer une esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr").

## Propriétés

Voir [Propriétés](/Property/fr "Property/fr") pour tous les types de propriétés que les objets scriptés peuvent avoir.

Sketcher SketchObject (classe `Sketcher::SketchObject`) est dérivé de [Part Part2DObject](/Part_Part2DObject/fr "Part Part2DObject/fr") (classe `Part::Part2DObject`) et hérite de toutes ses propriétés.

Sketcher SketchObject possède également les propriétés supplémentaires suivantes dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"). Les propriétés cachées peuvent être affichées à l'aide de la commande **Afficher les propriétés cachées** du menu contextuel de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Données

Sketch

* Données (Hidden)**Geometry** (`GeometryList`) : une liste des géométries de Part qui existent dans l'esquisse.
* Données**Constraints** : contraintes nommées, si elles existent ; sinon, il s'agit d'une liste vide `[]`.
* Données**External Geometry** (`LinkSubList`) : une liste de géométries de pièces extérieures à cette esquisse qui sont utilisées comme référence.
* Données (Hidden)**Fully Constrained** (`Bool`) : (en lecture seule) si `true` l'esquisse est entièrement contrainte.

### Vue

Auto Constraints

* Vue**Autoconstraints** (`Bool`) : si `true` les contraintes sont automatiquement ajoutées lorsque la géométrie est dessinée.
* Vue**Avoid Redundant** (`Bool`) : si `true` les contraintes automatiques redondantes sont évitées.

Grid

* Vue**Grid Auto** (`Bool`) : si `true`, la grille est redimensionnée en fonction de la boîte de délimitation de la géométrie de l'esquisse.
* Vue**Grid Size** (`Length`) : la taille de l'espacement des lignes de la grille locale dans la [vue 3D](/3D_view/fr "3D view/fr") ; la valeur par défaut est `10 mm`.
* Vue**Show Grid** (`Bool`) : si `true`, une grille locale à l'objet sera affichée dans la [vue 3D](/3D_view/fr "3D view/fr"). Cette grille est indépendante de la [Draft Grille](/Draft_ToggleGrid/fr "Draft ToggleGrid/fr").

Visibility automation

* Vue**Editing Workbench** (`String`) : nom de l'atelier à activer lors de l'édition de l'esquisse ; la valeur par défaut est `SketcherWorkbench`.
* Vue**Force Ortho** (`Bool`) : si `true`, la caméra sera forcée à [mode de vue orthographique](/Std_OrthographicCamera/fr "Std OrthographicCamera/fr") lorsque l'esquisse est ouverte.
* Vue**Hide Dependent** (`Bool`) : si `true`, tous les objets qui dépendent de l'esquisse sont masqués lorsque l'esquisse est ouverte.
* Vue**Restore Camera** (`Bool`) : si `true`, la position de la caméra est enregistrée avant l'ouverture de l'esquisse et est restaurée après sa fermeture.
* Vue**Section View** (`Bool`) : si `true`, seuls les (parties des) objets situés derrière le plan de l'esquisse sont visibles pendant l'édition de l'esquisse.
* Vue**Show Links** (`Bool`) : si `true`, tous les objets utilisés dans les liens vers la géométrie externe sont affichés à l'ouverture de l'esquisse.
* Vue**Show Support** (`Bool`) : si `true`, tous les objets auxquels cette esquisse est attachée sont affichés lorsque l'esquisse est ouverte.
* Vue (Hidden)**Tempo Vis** (`PythonObject`) : une classe personnalisée associée à cet objet, qui gère le masquage et l'affichage d'autres objets lors de l'ouverture et de la fermeture de l'esquisse.

## Création de scripts

*Voir aussi :* [Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr") et [Objets créés par script](/Scripted_objects/fr "Scripted objects/fr").

Voir [Part Feature](/Part_Feature/fr "Part Feature/fr") pour les informations générales sur l'ajout d'objets au document.

Un SketchObject est créé avec la méthode `addObject()` du document.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Sketcher::SketchObject", "Sketch")
obj.Label = "Custom label"

```

Pour la sous-classification de [Python](/Python/fr "Python/fr"), vous devez créer l'objet `Sketcher::SketchObjectPython`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Sketcher::SketchObjectPython", "CustomSketch")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SketchObject/fr&oldid=1560997>"