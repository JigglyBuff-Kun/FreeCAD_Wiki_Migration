---
title: Architektura API
---
:::caution
(Listopad 2018)Arch API jest wymieniony wautomatycznie generowanej dokumentacji API.
:::

Funkcje API są częścią Środowiska pracy [Architektura](/Arch_Workbench/pl "Arch Workbench/pl") i mogą być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") po zaimportowaniu modułu `Arch`. Dodatek [Zbrojenie](/Reinforcement_Workbench/pl "Reinforcement Workbench/pl") ma swoje własne [skrypty](/Reinforcement_API/pl "Reinforcement API/pl").

Przykład:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)

Arch.makeWall(baseline, length=None, width=200, height=2000)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_API/pl&oldid=1432706>"