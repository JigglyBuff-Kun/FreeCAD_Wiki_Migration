---
title: Part Ligne
---
|  |
| --- |
| Part Ligne |
| Emplacement du menu |
| Part → [Créer des primitives](/Part_Primitives/fr "Part Primitives/fr") → Ligne |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr"), [OpenSCAD](/OpenSCAD_Workbench/fr "OpenSCAD Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Part Primitives](/Part_Primitives/fr "Part Primitives/fr") |
|  |

## Description

Une ![](/images/Part_Line.svg) **Part Ligne** est une ligne paramétrique qui peut être créée avec la commande ![](/images/Part_Primitives.svg) [Part Primitives](/Part_Primitives/fr "Part Primitives/fr"). Les coordonnées de son point de départ et de son point d'arrivée sont relatives au système de coordonnées défini par sa propriété Données**Placement**.

![](/images/Part_Line_Example.png)

## Utilisation

Voir [Part Primitives](/Part_Primitives/fr#Utilisation "Part Primitives/fr").

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr").

Un objet Part Ligne est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Attachment

L'objet a les mêmes propriétés d'attachement qu'un [Part Part2DObject](/Part_Part2DObject/fr#Donn.C3.A9es "Part Part2DObject/fr").

Vertex 1 - Start

* Données**X1** (`Distance`) : coordonnée X du point de départ de la ligne. La valeur par défaut est `0mm`.
* Données**Y1** (`Distance`) : coordonnée Y du point de départ de la ligne. La valeur par défaut est `0mm`.
* Données**Z1** (`Distance`) : coordonnée Z du point de départ de la ligne. La valeur par défaut est `0mm`.

Vertex 2 - Finish

* Données**X2** (`Distance`) : coordonnée X du dernier point de la ligne. La valeur par défaut est `10mm`.
* Données**Y2** (`Distance`) : coordonnée Y du dernier point de la ligne. La valeur par défaut est `10mm`.
* Données**Z2** (`Distance`) : coordonnée Z du dernier point de la ligne. La valeur par défaut est `10mm`.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/), [Part Ecrire un script](/Part_scripting/fr "Part scripting/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Une Part Ligne est créée avec la méthode `addObject()` du document :

```
line = FreeCAD.ActiveDocument.addObject("Part::Line", "myLine")

```

* Où `"myLine"` est le nom de l'objet.
* La fonction restitue l'objet nouvellement créé.

Exemple :

```
import FreeCAD as App

doc = App.activeDocument()

line = doc.addObject("Part::Line", "myLine")
line.X1 = 1
line.Y1 = 3
line.Z1 = 6
line.X2 = 2
line.Y2 = 3
line.Z2 = 9

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Line/fr&oldid=1222584>"