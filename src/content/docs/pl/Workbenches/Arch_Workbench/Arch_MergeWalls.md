---
title: Architektura Połącz ściany
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| Architektura: Połącz ściany |
| Lokalizacja w menu |
| Narzędzia → Połącz ściany |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Ściana](/Arch_Wall/pl "Arch Wall/pl") |
|  |

## Opis

Narzędzie **Połącz ściany** łączy [ściany](/Arch_Wall/pl "Arch Wall/pl").

## Użycie

Wykonaj jedną z poniższych czynności:

1. * Wybierz pojedynczą ścianę z jednym lub wieloma [połączonymi obiektami](/Arch_Add/pl "Arch Add/pl"), które również są ścianami.
   * Wybierz dwie lub więcej ścian.
2. W obu przypadkach ściany muszą mieć te same właściwości DANE**Wysokość**, DANE**Szerokość** i DANE**Wyrównanie**.
3. Wybierz polecenie **Narzędzia → ![](/images/Arch_MergeWalls.svg) Połącz ściany** z menu.

## Uwagi

* Narzędzie [Połącz obiekty](/Arch_Add/pl "Arch Add/pl") może łączyć ściany, nawet jeśli mają one różne wysokości, szerokości i wyrównania.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Kształt z siatki** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
base = joinWalls(walls, delete=False)

```

Przykład:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_MergeWalls/pl&oldid=1478749>"