---
title: Architektura Zamknij otwory
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| Architektura: Zamknij otwory |
| Lokalizacja w menu |
| Narzędzia → Zamknij otwory |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Sprawdź](/Arch_Check/pl "Arch Check/pl") |
|  |

## Opis

Narzędzie to identyfikuje otwory *(okrągłe sekwencje otwartych krawędzi)* w obiekcie [kształtu](/Part_Workbench/pl "Part Workbench/pl") i próbuje je zamknąć poprzez dodanie nowej ściany utworzonej z tej sekwencji krawędzi. Należy jednak upewnić się, że wynikiem jest bryła.

## Użycie

1. Wybierz obiekt [kształtu](/Part_Workbench/pl "Part Workbench/pl").
2. Wybierz z menu opcję **Architektura → Narzędzia → ![](/images/Arch_CloseHoles.svg) Zamknij otwory**.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Kształt z siatki** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
solid = closeHole(shape)

```

* Zamyka otwór w `shape`, który jest `Part.Shape` i zwraca nowy obiekt `solid`.

Przykład:

```
import FreeCAD, Draft, Arch

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0),FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 900
Box.Width = 450
Box.Height = 2000
FreeCAD.ActiveDocument.recompute()

Draft.rotate(Box, 45)
Draft.move(Box, FreeCAD.Vector(1000, 700, 0))

Arch.removeComponents(Box, Wall)
FreeCAD.ActiveDocument.recompute() 

solid = Arch.closeHole(Wall.Shape)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CloseHoles/pl&oldid=1434110>"