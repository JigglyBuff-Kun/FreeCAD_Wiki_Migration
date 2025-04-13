---
title: Arch Stockwerk
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Stockwerk |
| Menüeintrag |
| 3D/BIM → Stockwerk |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| L V |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug Arch Stockwerk ist ein spezielles FreeCAD-Gruppenobjekt mit mehreren Zusatzeigenschaften, welche insbesondere zur Etagenkonstruktion geeignet sind. Insbesondere hält diese Gruppe eine Eigenschaft Höhe, die von allen Kindobjekten ([Wänden](/Arch_Wall/de "Arch Wall/de") und [Struktur](/Arch_Structure/de "Arch Structure/de")-Objekten) genutzt werden kann, um die Höhe automatisch anzupassen. Sie werden hauptsächlich zum Gliedern des Modells verwendet.

Für 0.18 und neuer wird das Arch Stockwerk vollständig aus dem [Arch Gebäudeteil](/Arch_BuildingPart/de "Arch BuildingPart/de")-Objekt abgeleitet, das ein allgemeiner Behälter zur Organisation eines Gebäudemodells ist, der nicht auf Stockwerke oder Etagen beschränkt ist. Ältere Stockwerk-Objekte können in den neuen Typ umgewandelt werden, indem sie mit der rechten Maustaste angeklickt werden und `Konvertieren zu Gebäudeteil` ausgewählt wird.

## Anwendung

1. Wahlweise ein oder mehrere Objekte auswählen, die in dem neuen Stockwerk enthalten sein sollen.
2. Den Befehl Arch Stockwerk mit einer der folgenden Möglichkeiten aufrufen:
   * Die Schaltfläche ![](/images/Arch_Floor.svg) Stockwerk drücken.
   * Das Tastaturkürzel L dann V.
   * Den Menüeintrag **3D/BIM → Stockwerk** auswählen.

## Optionen

* Nach Erstellung eines Stockwerks können diesem mit Ziehen und Ablegen in der Baumansicht Objekte hinzugefügt werden oder mit dem Werkzeug ![](/images/Arch_Add.svg) [Hinzufügen](/Arch_Add/de "Arch Add/de").
* Objekte können durch Herausziehen und Ablegen in der Baumansicht aus dem Stockwerk entfernt werden oder mit dem Werkzeug ![](/images/Arch_Remove.svg) [Entfernen](/Arch_Remove/de "Arch Remove/de").

## Eigenschaften

Ein Arch-Stockwerk-Objekt besitzt alle Eigenschaften eines [Arch Gebäudeteils](/Arch_BuildingPart/de "Arch BuildingPart/de"), aber mit der Daten-Eigenschaft**Ifc Type** auf `"Building Storey"` gesetzt.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Stockwerk kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit folgender Funktion verwendet werden:

```
Floor = makeFloor(objectslist=None, baseobj=None, name="Floor")

```

* Erzeugt ein `Floor`-Objekt aus `objectslist`, einer Liste von Objekten.

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

Floor = Arch.makeFloor([Wall1, Wall2])

Building = Arch.makeBuilding([Floor])
Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Floor/de&oldid=1541978>"