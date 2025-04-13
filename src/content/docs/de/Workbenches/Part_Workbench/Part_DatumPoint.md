---
title: Part Bezugspunkt
---
|  |
| --- |
| Part Bezugspunkt |
| Menüeintrag |
| *Keiner* |
| Arbeitsbereich |
| Alle |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 1.1 |
| Siehe auch |
| [Part Bezugssystem](/Part_CoordinateSystem/de "Part CoordinateSystem/de"), [Part Bezugsebene](/Part_DatumPlane/de "Part DatumPlane/de"), [Part Bezugsliie](/Part_DatumLine/de "Part DatumLine/de") |
|  |

## Beschreibung

Der Befehl **Part Bezugspunkt** erstellt einen Bezugspunkt (datum point object), der an andere Objekte befestigt werden kann. Ein Bezugspunkt ist eines von mehreren [Bezugsobjekten](/Std_Base#Part_Datums/de "Std Base"). Ein Bezugsobjekt wird üblicherweise eingesetzt, um mehrere andere Objekte daran zu befestigen. Wenn sich die Position oder Ausrichtung eines Bezugsobjekts ändert, folgen alle befestigten Objekte dieser Änderung.

## Anwendung

Siehe [Part Bezugssystem](/Part_CoordinateSystem/de#Anwendung "Part CoordinateSystem/de").

## Hinweise

Siehe [Part Bezugssystem](/Part_CoordinateSystem/de#Hinweise "Part CoordinateSystem/de").

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein `Part::DatumPoint`-Objekt ist von einem `App::Point`-Objekt abgeleitet. Es erbt alle seine Eigenschaften, außer den unter Attachment gelisteten.

### Daten

Siehe [Part Bezugsebene](/Part_DatumPlane/de#Daten "Part DatumPlane/de").

### Ansicht

Siehe [Part Bezugsebene](/Part_DatumPlane/de#Ansicht "Part DatumPlane/de").

## Skripten

```
import FreeCAD as App

doc = App.newDocument()
obj = doc.addObject("Part::DatumPoint", "DatumPoint")
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_DatumPoint/de&oldid=1537377>"