---
title: Arch Unire i Muri
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                |
| ---------------------------------------------- |
| Arch MergeWalls                                |
| Menu location                                  |
| Arch → Utilità → Unisci Muri                   |
| Workbenches                                    |
| [Arch](/Arch_Workbench/it "Arch Workbench/it") |
| Default shortcut                               |
| _None_                                         |
| Introduced in version                          |
| -                                              |
| See also                                       |
| [Muro](/Arch_Wall/it "Arch Wall/it")           |
|                                                |

## Descrizione

Lo strumento Unisci Muri fonde due o più ![](/images/Arch_Wall.svg) [Muri](/Arch_Wall/it "Arch Wall/it") selezionati.

## Utilizzo

1. Selezionare due o più muri. I muri devono avere la stessa altezza, larghezza e allineamento.
2. Premere il pulsante ![](/images/Arch_MergeWalls.svg), o utilizzare Arch → Utilità → ![](/images/Arch_MergeWalls.svg) Unisci Muri dal menu principale.

## Note

- [Aggiungi componente](/Arch_Add/it "Arch Add/it") può unire i muri anche se hanno altezze, larghezze e allineamenti diversi.

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

```
base = joinWalls(walls, delete=False)

```

Esempio:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_MergeWalls/it&oldid=1435535>"
