---
title: API de l'atelier Arch
---
:::caution
(November 2018) L'API de l'atelier Arch est répertoriée dans ladocumentation API générée automatiquement.
:::

Les fonctions de l'API font partie de l'[atelier Arch](/Arch_Workbench/fr "Arch Workbench/fr") et peuvent être utilisées dans des [macros](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") une fois que le module `Arch` a été importé. L'[atelier Reinforcement](/Reinforcement_Workbench/fr "Reinforcement Workbench/fr") a ses propres [API](/Reinforcement_API/fr "Reinforcement API/fr").

Exemple :

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)

Arch.makeWall(baseline, length=None, width=200, height=2000)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_API/fr&oldid=1432702>"