---
title: Part Bezugslinie
---
|  |
| --- |
| Part DatumLine |
| Menüeintrag |
| *Keiner* |
| Arbeitsbereich |
| Alle |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 1.1 |
| Siehe auch |
| [Part Bezugssystem](/Part_CoordinateSystem/de "Part CoordinateSystem/de"), [Part Bezugsebene](/Part_DatumPlane/de "Part DatumPlane/de"), [Part Bezugspunkt](/Part_DatumPoint/de "Part DatumPoint/de") |
|  |

## Beschreibung

Der Befehl **Part Bezugslinie** erstellt eine Bezugslinie (datum line object), die an andere Objekte befestigt werden kann. Eine Bezugslinie ist eines von mehreren [Bezugsobjekten](/Std_Base#Part_Datums/de "Std Base"). Ein Bezugsobjekt wird üblicherweise eingesetzt, um mehrere andere Objekte daran zu befestigen. Wenn sich die Position oder Ausrichtung eines Bezugsobjekts ändert, folgen alle befestigten Objekte dieser Änderung.

Ein Datum-Objekt kann ebenso eine geometrische Referenz für ein zukünftiges Merkmal oder eine Operation sein. Abhängig seines Typs kann es beispielsweise als ein Richtungsvektor, eine Rotationsachse oder eine Spiegelebene genutzt werden.

## Anwendung

Siehe [Part Bezugssystem](/Part_CoordinateSystem/de#Anwendung "Part CoordinateSystem/de").

## Hinweise

Siehe [Part Bezugssystem](/Part_CoordinateSystem/de#Hinweise "Part CoordinateSystem/de").

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein `Part::DatumLine`-Objekt ist von einem `App::Line`-Objekt abgeleitet. Es erbt alle seine Eigenschaften, außer den unter Attachment gelisteten.

### Daten

Siehe [Part Bezugsebene](/Part_DatumPlane/de#Daten "Part DatumPlane/de").

### Ansicht

Siehe [Part Bezugsebene](/Part_DatumPlane/de#Ansicht "Part DatumPlane/de").

## Skripten

```
import FreeCAD as App

doc = App.newDocument()
obj = doc.addObject("Part::DatumLine", "DatumLine")
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_DatumLine/de&oldid=1550651>"