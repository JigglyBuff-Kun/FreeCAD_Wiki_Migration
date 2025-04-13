---
title: Architektura Kształt z siatki
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| Architektura: Kształt z siatki |
| Lokalizacja w menu |
| Narzędzia → Kształt z siatki |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Podziel siatkę](/Arch_SplitMesh/pl "Arch SplitMesh/pl"), [Usuń kształt](/Arch_RemoveShape/pl "Arch RemoveShape/pl") |
|  |

## Opis

Narzędzie **Kształt z siatki** konwertuje wybrany obiekt [siatki](/Mesh/pl "Mesh/pl") *([cechy siatki](/Mesh_Feature/pl "Mesh Feature/pl"))* na obiekt [kształtu](/Shape/pl "Shape/pl") *([cechę Części](/Part_Feature/pl "Part Feature/pl"))*.

Narzędzie to jest zoptymalizowane dla obiektów o płaskich powierzchniach *(bez krzywych)*. Odpowiednie narzędzie ![](/images/Part_ShapeFromMesh.svg) [Utwórz kształt z siatki](/Part_ShapeFromMesh/pl "Part ShapeFromMesh/pl") ze środowiska ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl") może być bardziej odpowiednie dla obiektów zawierających zakrzywione powierzchnie.

## Użycie

1. Wybierz obiekt siatki.
2. Naciśnij przycisk w menu **Narzędzia → ![](/images/Arch_MeshToShape.svg) Kształt z siatki**.

## Właściwości

## Ograniczenia

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Kształt z siatki** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
new_obj = meshToShape(obj, mark=True, fast=True, tol=0.001, flat=False, cut=True)

```

Powyższy fragment kodu konwertuje podaną `obj` (siatkę) w kształt łączący współpłaszczyznowe elementy.

* Jeśli właściwość `mark` ma wartość `True`, obiekty nie będące bryłami zostaną wyróżnione kolorem czerwonym.
* Jeśli ma wartość`fast` ma wartość `True`, używa szybszego algorytmu, budując powłokę z elementów, a następnie usuwając rozdzielacz.
* `tol` jest tolerancją używaną podczas konwersji segmentów siatki na druty.
* Jeśli ma wartość`flat` ma wartość `True`, wymusi to, że polilinie będą idealnie płaskie, aby upewnić się, że można je przekonwertować na ściany, ale może to pozostawić luki w końcowej powłoce.
* Jeśli ma wartość`cut` ma wartość `True`, otwory w ścianach są tworzone przez odejmowanie.

Przykład:

```
import Arch, Mesh, BuildRegularGeoms

Box = FreeCAD.ActiveDocument.addObject("Mesh::Cube", "Cube")
Box.Length = 1000
Box.Width = 2000
Box.Height = 1000
FreeCAD.ActiveDocument.recompute()

new_obj = Arch.meshToShape(Box)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_MeshToShape/pl&oldid=1436134>"