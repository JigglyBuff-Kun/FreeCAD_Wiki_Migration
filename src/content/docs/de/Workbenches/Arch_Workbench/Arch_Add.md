---
title: Arch Hinzufügen
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Hinzufügen |
| Menüeintrag |
| Modify → Komponente hinzufügen |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Arch Entfernen](/Arch_Remove/de "Arch Remove/de") |
|  |

## Beschreibung

Das Werkzeug Hinzufügen ermöglicht vier Arten von Vorgängen durchzuführen:

* Hinzufügen von Objekten, die auf einer [Form](/Part_Workbench/de "Part Workbench/de") basieren, zu einer Arch-Komponente, wie einer ![](/images/Arch_Wall.svg) [Wand](/Arch_Wall/de "Arch Wall/de") oder ![](/images/Arch_Structure.svg) [Struktur](/Arch_Structure/de "Arch Structure/de"). Diese Objekte werden dann Teil der Arch-Komponente und ermöglichen es, ihre Form zu verändern, wobei die Basiseigenschaften wie Breite und Höhe erhalten bleiben.
* Hinzufügen von Arch-Komponenten, wie ![](/images/Arch_Wall.svg) [Arch Wände](/Arch_Wall/de "Arch Wall/de") oder ![](/images/Arch_Structure.svg) [Arch Strukturen](/Arch_Structure/de "Arch Structure/de") zu einem gruppierenden Arch-Objekt wie ![](/images/Arch_Floor.svg) [Arch Stockwerk](/Arch_Floor "Arch Floor").
* Hinzufügen von ![](/images/Arch_Axis.svg) [Achsensystemen](/Arch_Axis/de "Arch Axis/de") zu ![](/images/Arch_Structure.svg) [Struktur](/Arch_Structure/de "Arch Structure/de")-Objekten
* Objekte zu ![](/images/Arch_SectionPlane.svg)[Schnittebenen](/Arch_SectionPlane/de "Arch SectionPlane/de") hinzufügen

Das Gegenstück zu diesem Werkzeug ist das Werkzeug ![](/images/Arch_Remove.svg)[Arch Entfernen](/Arch_Remove/de "Arch Remove/de").

![](/images/Arch_Add_example.jpg)

Ein Quader wird einer Wand als Komponente hinzugefügt.

## Anwendung

1. Ein oder mehrere hinzuzufügende Objekte auswählen, dann das Zielobjekt. Das zuletzt ausgewählte Objekt wird das Zielobjekt.
2. Die Schaltfläche ![](/images/Arch_Add.png) Komponente hinzufügen drücken oder den Menüeintrag **Modify → ![](/images/Arch_Add.svg) Komponente hinzufügen** auswählen.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Hinzufügen kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de") Konsole aus durch folgende Funktion verwendet werden:

:   ```
    addComponents(objectsList, host)

    ```

:   Der obige Code Schnipsel fügt die in `objectsList` angegebenen Objekte zum `host`-Objekt hinzu.
:   **Anmerkung** `objectsList` kann ein einzelnes Objekt oder eine Liste von Objekten sein.

Beispiel:

```
import FreeCAD, Arch, Draft, Part

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 2000, 0)

Line = Draft.makeWire([p1, p2])
Wall = Arch.makeWall(Line, width=150, height=2000)

p3 = FreeCAD.Vector(0, 2000, 0)
p4 = FreeCAD.Vector(3000, 0, 0)

Line2 = Draft.makeWire([p3, p4])
Wall2 = Arch.makeWall(Line2, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Arch.addComponents(Wall2, Wall)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Add/de&oldid=1541958>"