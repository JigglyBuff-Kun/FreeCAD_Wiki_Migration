---
title: Arch Gebäude
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Gebäude |
| Menüeintrag |
| 3D/BIM → Gebäude |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| B U |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Ein Gebäude ist ein spezielles FreeCAD-Gruppenobjekt, das sich besonders dafür eignet, eine ganze Gebäudeeinheit zu repräsentieren. Es wird durch enthaltene [Stockwerk](/Arch_Floor/de "Arch Floor/de")-Objekte zur Organisation des Modells eingesetzt.

## Anwendung

1. Wahlweisel ein oder mehrere Objekte auswählen, die in das neues Gebäude aufgenommen werden sollen.
2. Die Schaltfläche ![](/images/Arch_Building.svg) [Gebäude](/Arch_Building "Arch Building") drücken oder das Tastaturkürzel B dann U.

## Optionen

* Seit FreeCAD Version 0.18 ist das Gebäudeobjekt tatsächlich ein [Gebäudeteil](/Arch_BuildingPart/de "Arch BuildingPart/de"), dessen Daten-Eigenschaft**IFC Type** auf *Gebäude* gesetzt ist. Jedes Gebäudeteil kann in ein Gebäude umgewandelt werden, einfach durch Ändern seines IFC-Typs.
* Nach dem erstellen eines Gebäudes, können ihm weitere Objekte durch Ziehen und Ablegen in der Baumansicht hinzugefügt werden oder durch verwenden des Werkzeugs ![](/images/Arch_Add.svg) [Arch hinzufügen](/Arch_Add/de "Arch Add/de").
* Objekte können aus einem Gebäude entfernt werden, durch Herausziehen und Ablegen in der Baumansicht oder durch Verwenden des Werkzeugs ![](/images/Arch_Remove.svg) [Arch Entfernen](/Arch_Remove/de "Arch Remove/de").

## Eigenschaften

* Daten-Eigenschaft**Gebäude Typ**: Der Typ des Gebäudes, wählbar aus einer Liste

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Gebäude Werkzeug kann sowohl in [Makros](/Macros/de "Macros/de") als auch aus der [Python](/Python/de "Python/de") Konsole aus mit folgender Funktion verwendet werden:

```
Building = makeBuilding(objectslist=None, baseobj=None, name="Building")

```

* Erzeugt ein `Gebäude` Objekt aus der `Objekteliste`, die entweder eine Liste von Objekten oder oder ein `Basisobj`, das ein `Form` ist.

Beispiel:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseline2 = Draft.makeLine(p1, -1*p2)

Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
Wall2 = Arch.makeWall(baseline2, length=None, width=150, height=1800)
FreeCAD.ActiveDocument.recompute()

Building = Arch.makeBuilding([Wall1, Wall2])

Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Building/de&oldid=1541964>"