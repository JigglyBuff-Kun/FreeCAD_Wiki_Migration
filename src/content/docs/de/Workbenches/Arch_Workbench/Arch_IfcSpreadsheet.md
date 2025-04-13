---
title: Arch IfcTabellenblatt
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch\_IfcTabellenblatt |
| Menüeintrag |
| Dienstprogramme → IFC-Kalkulationstabelle erstellen... |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| I P |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Arch IFC](/Arch_IFC "Arch IFC") |
|  |

## Beschreibung

Dieses Werkzeug erstellt eine Kalkulationstabelle, um [IFC](/Arch_IFC/de "Arch IFC/de")-Eigenschaften eines Objekts zu speichern.

## Anwendung

1. Ein Objekt auswählen.
2. Es gibt mehrere Mögkichkeiten, den Befehl aufzurufen:
   * Den Menüeintrag **Dienstprogramme → ![](/images/Arch_IfcSpreadsheet.svg) IFC-Kalkulationstabelle erstellen...** auswählen.
   * Das Tastaturkürzel I dann P.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Dieses Werkzeug kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus durch folgende Funktion verwendet werden:

```
spreadsheet = makeIfcSpreadsheet(archobj=None)

```

* Erstellt ein `Tabellenblatt` Objekt. Optional kann ein `archobj` angegeben werden.

Beispiel:

```
import FreeCAD, Draft, Arch

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)
FreeCAD.ActiveDocument.recompute()

spreadsheet = Arch.makeIfcSpreadsheet(Wall)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_IfcSpreadsheet/de&oldid=1541982>"