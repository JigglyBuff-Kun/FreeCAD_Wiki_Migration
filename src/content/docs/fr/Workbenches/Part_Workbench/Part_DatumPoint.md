---
title: Part Point de référence
---
|  |
| --- |
| Part Point de référence |
| Emplacement du menu |
| *Aucun* |
| Ateliers |
| Tous |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 1.1 |
| Voir aussi |
| [Part Système de coordonnées](/Part_CoordinateSystem/fr "Part CoordinateSystem/fr"), [Part Plan de référence](/Part_DatumPlane/fr "Part DatumPlane/fr"), [Part Ligne de référence](/Part_DatumLine/fr "Part DatumLine/fr") |
|  |

## Description

La commande **Part Point de référence** crée un objet datum point qui peut être ancré à d'autres objets. Un point de référence est un des [objets de référence](/Std_Base#Std_Base/fr#Part_Datums "Std Base"). Un objet de référence est généralement utilisé pour ancrer plusieurs autres objets. Si la position ou l'orientation d'un objet de référence change, tous les objets qui lui sont ancrés suivront.

## Utilisation

Voir [Part Système de coordonnées](/Part_CoordinateSystem/fr#Utilisation "Part CoordinateSystem/fr").

## Remarques

Voir [Part Système de coordonnées](/Part_CoordinateSystem/fr#Remarque "Part CoordinateSystem/fr").

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet `Part::DatumPoint` est dérivé d'un objet `App::Point`. Toutes ses propriétés sont héritées, à l'exception de celles énumérées sous Attachment.

### Données

Voir [Part Plan de référence](/Part_DatumPlane/fr#Données "Part DatumPlane/fr").

### Vue

Voir [Part Plan de référence](/Part_DatumPlane/fr#Vue "Part DatumPlane/fr").

## Script

```
import FreeCAD as App

doc = App.newDocument()
obj = doc.addObject("Part::DatumPoint", "DatumPoint")
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_DatumPoint/fr&oldid=1537379>"