---
title: Yapı API
---
:::caution
(Kasım 2018) YAPI API,otomatikleştirilmiş API belgelerindelistelenmiştir.
:::

API'nin işlevleri [Yapı tezgahın](/Arch_Workbench/tr "Arch Workbench/tr") 'ın bir parçasıdır ve `Arch` modülü alındıktan sonra [makrolar](/Macros/tr "Macros/tr") ve [Python](/Python "Python") konsolundan kullanılabilir. [Takviye Eklentisi](/Reinforcement_Addon "Reinforcement Addon") kendi [Reinforcement API](/Reinforcement_API "Reinforcement API") 'ye sahiptir.

Örnek:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)

Arch.makeWall(baseline, length=None, width=200, height=2000)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_API/tr&oldid=1432701>"