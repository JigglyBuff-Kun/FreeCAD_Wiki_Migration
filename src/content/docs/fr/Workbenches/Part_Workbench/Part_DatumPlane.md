---
title: Part Plan de référence
---
|  |
| --- |
| Part Plan de référence |
| Emplacement du menu |
| *Aucun* |
| Ateliers |
| Tous |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 1.1 |
| Voir aussi |
| [Part Système de coordonnées](/Part_CoordinateSystem/fr "Part CoordinateSystem/fr"), [Part Ligne de référence](/Part_DatumLine/fr "Part DatumLine/fr"), [Part Point de référence](/Part_DatumPoint/fr "Part DatumPoint/fr") |
|  |

## Description

La commande **Part Plan de référence** crée un objet datum plane qui peut être ancré à d'autres objets. Un plan de référence est un des [objets de référence](/Std_Base#Std_Base/fr#Part_Datums "Std Base"). Un objet de référence est généralement utilisé pour ancrer plusieurs autres objets. Si la position ou l'orientation d'un objet de référence change, tous les objets qui lui sont ancrés suivront.

Un objet datum peut également fournir une référence géométrique pour une fonctionnalité ou une opération. Selon son type, il peut par exemple être utilisé comme vecteur de direction, axe de rotation ou plan miroir.

## Utilisation

Voir [Part Système de coordonnées](/Part_CoordinateSystem/fr#Utilisation "Part CoordinateSystem/fr").

## Remarques

Voir [Part Système de coordonnées](/Part_CoordinateSystem/fr#Remarque "Part CoordinateSystem/fr").

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet `Part::DatumPlane` est dérivé d'un objet `App::Plane`. Toutes ses propriétés sont héritées, à l'exception de celles énumérées sous Attachment.

### Données

Attachment

L'objet a les mêmes propriétés d'attachement qu'un [Part Part2DObject](/Part_Part2DObject/fr#Donn.C3.A9es "Part Part2DObject/fr").

Base

* Données**Role** (`String`): rôle de la référence dans le système de coordonnées.
* Données**Placement** (`Placement`) : voir [Part Feature](/Part_Feature/fr#Données "Part Feature/fr").
* Données**Label** (`String`) : idem.
* Données (hidden)**Label2** (`String`) : idem.
* Données (hidden)**Expression Engine** (`ExpressionEngine`) : idem.
* Données (hidden)**Visibility** (`Bool`) : idem.

### Vue

Display Options

* Données**Role** (`String`): rôle de la référence dans le système de coordonnées.
* Données**Placement** (`Placement`) : voir [Part Feature](/Part_Feature/fr#Données "Part Feature/fr").
* Données**Label** (`String`) : idem.
* Données (hidden)**Label2** (`String`) : idem.
* Données (hidden)**Expression Engine** (`ExpressionEngine`) : idem.
* Données (hidden)**Visibility** (`Bool`) : idem.

Object Style

* Vue**Shape Appearance** (`MaterialList`) : voir [Part Feature](/Part_Feature/fr#Vue "Part Feature/fr").
* Vue**Transparency** (`Percent`) : idem.

Selection

* Vue**On Top When Selected** (`Enumeration`) : voir [Part Feature](/Part_Feature/fr#Vue "Part Feature/fr").
* Vue**Selectable** (`Bool`) : idem.
* Vue**Selection Style** (`Enumeration`) : idem.

## Script

```
import FreeCAD as App

doc = App.newDocument()
obj = doc.addObject("Part::DatumPlane", "DatumPlane")
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_DatumPlane/fr&oldid=1538308>"