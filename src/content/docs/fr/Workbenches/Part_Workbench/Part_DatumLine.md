---
title: Part Ligne de référence
---
|  |
| --- |
| Part Ligne de référence |
| Emplacement du menu |
| *Aucun* |
| Ateliers |
| Tous |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 1.1 |
| Voir aussi |
| [Part Système de coordonnées](/Part_CoordinateSystem/fr "Part CoordinateSystem/fr"), [Part Plan de référence](/Part_DatumPlane/fr "Part DatumPlane/fr"), [Part Point de référence](/Part_DatumPoint/fr "Part DatumPoint/fr") |
|  |

## Description

La commande **Part Ligne de référence** crée un objet datum line qui peut être ancré à d'autres objets. Une ligne de référence est un des [objets de référence](/Std_Base#Std_Base/fr#Part_Datums "Std Base"). Un objet de référence est généralement utilisé pour ancrer plusieurs autres objets. Si la position ou l'orientation d'un objet de référence change, tous les objets qui lui sont ancrés suivront.

Un objet datum peut également fournir une référence géométrique pour une fonctionnalité ou une opération. Selon son type, il peut par exemple être utilisé comme vecteur de direction, axe de rotation ou plan miroir.

## Utilisation

Voir [Part Système de coordonnées](/Part_CoordinateSystem/fr#Utilisation "Part CoordinateSystem/fr").

## Remarques

Voir [Part Système de coordonnées](/Part_CoordinateSystem/fr#Remarque "Part CoordinateSystem/fr").

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet `Part::DatumLine` est dérivé d'un objet `App::Line`. Toutes ses propriétés sont héritées, à l'exception de celles énumérées sous Attachment.

### Données

Voir [Part Plan de référence](/Part_DatumPlane/fr#Données "Part DatumPlane/fr").

### Vue

Voir [Part Plan de référence](/Part_DatumPlane/fr#Vue "Part DatumPlane/fr").

## Script

```
import FreeCAD as App

doc = App.newDocument()
obj = doc.addObject("Part::DatumLine", "DatumLine")
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_DatumLine/fr&oldid=1538306>"