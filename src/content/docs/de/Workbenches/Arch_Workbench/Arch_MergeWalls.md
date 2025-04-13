---
title: Arch WändeVerbinden
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch WändeVerbinden |
| Menüeintrag |
| Utils → Wände Zusammenfügen |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Arch Wand](/Arch_Wall/de "Arch Wall/de") |
|  |

## Beschreibung

Das Werkzeug WändeVerbinden fügt [Arch-Wände](/Arch_Wall/de "Arch Wall/de") zusammen.

## Anwendung

1. Eine der folgenden Möglichkeiten ausführen:
   * Eine einzelne Wand mit einer oder mehreren [Komponenten](/Arch_Add/de "Arch Add/de"), die auch Wände sind, auswählen.
   * Zwei oder mehr Wände auswählen.
2. In beiden Fällen müssen die Daten-Eigenschaft**Height**, Daten-Eigenschaft**Width** und Daten-Eigenschaft**Align** der Wände identisch sein.
3. Den Menüeintrag **Utils → ![](/images/Arch_MergeWalls.svg) Wände zusammenfügen** auswählen.

## Hinweise

* [Arch Hinzufügen](/Arch_Add/de "Arch Add/de") kann Wände zusammenführen, auch wenn sie unterschiedlich hoch, unterschiedlich breit und unterschiedlich ausgerichtet sind.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Dieses Werkzeug kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus durch folgende Funktion verwendet werden:

```
base = joinWalls(walls, delete=False)

```

Beispiel:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Wall2 = Arch.makeWall(None, length=2000, width=200, height=1000)
FreeCAD.ActiveDocument.recompute() 

base = Arch.joinWalls([Wall1, Wall2])

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_MergeWalls/de&oldid=1541984>"