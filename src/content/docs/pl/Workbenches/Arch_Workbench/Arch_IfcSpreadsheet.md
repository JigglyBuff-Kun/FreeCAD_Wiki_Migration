---
title: Architektura Utwórz arkusz IFC
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| Architektura: Utwórz arkusz IFC |
| Lokalizacja w menu |
| Architektura → Narzędzia → Utwórz arkusz IFC |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| I P |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [IFC](/Arch_IFC/pl "Arch IFC/pl") |
|  |

## Opis

To narzędzie tworzy arkusz kalkulacyjny do przechowywania właściwości [IFC](/Arch_IFC/pl "Arch IFC/pl") obiektu.

## Użycie

1. Wybierz obiekt.
2. Wywołaj polecenie przy użyciu jednej z kilku metod:
   * Wybierz opcję **Narzędzia → ![](/images/Arch_IfcSpreadsheet.svg) Utwórz arkusz IFC...** z menu.
   * Użyj skrótu klawiszowego: I a następnie P.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Kształt z siatki** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
spreadsheet = makeIfcSpreadsheet(archobj=None)

```

* Tworzy obiekt `spreadsheet`. Opcjonalnie można podać `archobj`.

Przykład:

```
import FreeCAD, Draft, Arch

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)
FreeCAD.ActiveDocument.recompute()

spreadsheet = Arch.makeIfcSpreadsheet(Wall)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_IfcSpreadsheet/pl&oldid=1474162>"