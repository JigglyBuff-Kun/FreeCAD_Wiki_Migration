---
title: Architektura Usuń kształt z Architektury
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| BIM: Usuń kształt |
| Lokalizacja w menu |
| Narzędzia → Usuń kształt z Architektury |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Podziel siatkę](/Arch_SplitMesh/pl "Arch SplitMesh/pl"), [Kształt z siatki](/Arch_MeshToShape/pl "Arch MeshToShape/pl") |
|  |

## Opis

Narzędzie **Usuń kształt z Architektury** próbuje usunąć wewnętrzny sześcienny kształt [ściany](/Arch_Wall/pl "Arch Wall/pl") lub [konstrukcji](/Arch_Structure/pl "Arch Structure/pl") i dostosowanie jego właściwości, czyniąc go całkowicie parametrycznym. Narzędzie to będzie działać tylko wtedy, gdy kształt bazowy jest sześcienny *(dokładnie 6 ścian, wszystkie narożniki mają tylko kąty proste)*.

## Użycie

1. Wybierz obiekt ![](/images/Arch_Wall.svg) [ściany](/Arch_Wall/pl "Arch Wall/pl") lub ![](/images/Arch_Structure.svg) [konstrukcji](/Arch_Structure/pl "Arch Structure/pl").
2. Naciśnij przycisk **Narzędzia → ![](/images/Arch_RemoveShape.svg) Usuń kształt z Architektury** z menu głównego.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Kształt z siatki** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
removeShape(objs, mark=True)

```

* Pobiera listę obiektów Architektury (`objs`) zbudowanych na sześciennym kształcie i usuwa wewnętrzny kształt, zachowując długość, szerokość i wysokość jako właściwości obiektu Architektury.
  + `objs` jest pojedynczym obiektem, [ściany](/Arch_Wall/pl "Arch Wall/pl") lub [konstrukcji](/Arch_Structure/pl "Arch Structure/pl"), lub ich listą.
* Jeśli właściwość `mark` ma wartość `True`, obiekty, które nie mogą zostać przetworzone przez tę funkcję, zostaną zaznaczone na czerwono.

```
import FreeCAD, Draft, Arch

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 1000
Box.Width = 2000
Box.Height = 1000
FreeCAD.ActiveDocument.recompute()

Structure = Arch.makeStructure(Box)
FreeCAD.ActiveDocument.recompute()

Arch.removeShape(Structure)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_RemoveShape/pl&oldid=1438134>"