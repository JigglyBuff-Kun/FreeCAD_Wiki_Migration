---
title: Part Bezugsebene
---
|  |
| --- |
| Part DatumPlane |
| Menüeintrag |
| *Keiner* |
| Arbeitsbereich |
| Alle |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 1.1 |
| Siehe auch |
| [Part Bezugssystem](/Part_CoordinateSystem/de "Part CoordinateSystem/de"), [Part Bezugslinie](/Part_DatumLine/de "Part DatumLine/de"), [Part Bezugspunkt](/Part_DatumPoint/de "Part DatumPoint/de") |
|  |

## Beschreibung

Der Befehl **Part Bezugsebene** erstellt eine Bezugsebene (datum plane object), die an andere Objekte befestigt werden kann. Eine Bezugsebene ist eines von mehreren [Bezugsobjekten](/Std_Base#Part_Datums/de "Std Base"). Ein Bezugsobjekt wird üblicherweise eingesetzt, um mehrere andere Objekte daran zu befestigen. Wenn sich die Position oder Ausrichtung eines Bezugsobjekts ändert, folgen alle befestigten Objekte dieser Änderung.

Ein Datum-Objekt kann ebenso eine geometrische Referenz für ein zukünftiges Merkmal oder eine Operation sein. Abhängig seines Typs kann es beispielsweise als ein Richtungsvektor, eine Rotationsachse oder eine Spiegelebene genutzt werden.

## Anwendung

Siehe [Part Bezugssystem](/Part_CoordinateSystem/de#Anwendung "Part CoordinateSystem/de").

## Hinweise

Siehe [Part Bezugssystem](/Part_CoordinateSystem/de#Hinweise "Part CoordinateSystem/de").

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein `Part::DatumPlane`-Objekt ist von einem `App::Plane`-Objekt abgeleitet. Es erbt alle seine Eigenschaften, außer den unter Attachment gelisteten.

### Daten

Attachment

Das Objekt hat dieselben Befestigungseigenschaften wie ein [Part Part2DObject](/Part_Part2DObject/de#Daten "Part Part2DObject/de").

Basis

* Daten-Eigenschaft**Role** (`String`): Funktion des Bezuges im Bezugssystem.
* Daten-Eigenschaft**Placement** (`Placement`): Siehe [Part Formelement](/Part_Feature/de#Daten "Part Feature/de").
* Daten-Eigenschaft**Label** (`String`): Wie vorher.
* Daten-Eigenschaft (versteckt)**Label2** (`String`): Wie vorher.
* Daten-Eigenschaft (versteckt)**Expression Engine** (`ExpressionEngine`): Wie vorher.
* Daten-Eigenschaft (versteckt)**Visibility** (`Bool`): Wie vorher.

### Ansicht

Display Options

* Ansicht-Eigenschaft**Bounding Box** (`Bool`): Siehe [Part Formelement](/Part_Feature/de#Ansicht "Part Feature/de").
* Ansicht-Eigenschaft**Display Mode** (`Enumeration`): Wie vorher.
* Ansicht-Eigenschaft**Show In Tree** (`Bool`): Wie vorher.
* Ansicht-Eigenschaft**Visibility** (`Bool`): Wie vorher.

Object Style

* Ansicht-Eigenschaft**Shape Appearance** (`MaterialList`): Siehe [Part Formelement](/Part_Feature/de#Ansicht "Part Feature/de").
* Ansicht-Eigenschaft**Transparency** (`Percent`): Wie vorher.

Selection

* Ansicht-Eigenschaft**On Top When Selected** (`Enumeration`): Siehe [Part Formelement](/Part_Feature/de#Ansicht "Part Feature/de").
* Ansicht-Eigenschaft**Selectable** (`Bool`): Wie vorher.
* Ansicht-Eigenschaft**Selection Style** (`Enumeration`): Wie vorher.

## Skripten

```
import FreeCAD as App

doc = App.newDocument()
obj = doc.addObject("Part::DatumPlane", "DatumPlane")
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_DatumPlane/de&oldid=1550649>"