---
title: Arch API
---
:::caution
(November 2018) Diese Information kann unvollständig und veraltet sein. Für die letzte API siehe die (engl.)autogenerierte API-Dokumentation.
:::

Die Funktionen der API sind Teil des Arbeitsbereichs [Arch](/Arch_Workbench/de "Arch Workbench/de") und können in [Makros](/Macros/de "Macros/de") und in der [Python](/Python/de "Python/de")-Konsole verwendet werden, sobald das `Arch`-Modul importiert wurde. Der Arbeitsbereich [Reinforcement](/Reinforcement_Workbench "Reinforcement Workbench") hat seine eigene [Reinforcement-API](/Reinforcement_API/de "Reinforcement API/de").

Beispiel:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)

Arch.makeWall(baseline, length=None, width=200, height=2000)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_API/de&oldid=1432707>"