---
title: Architektura Usuń komponent
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| Architektura: Usuń komponent |
| Lokalizacja w menu |
| Modyfikacja → Usuń komponent |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Przetnij płaszczyzną](/Arch_CutPlane/pl "Arch CutPlane/pl"), [Połącz obiekty](/Arch_Add/pl "Arch Add/pl") |
|  |

## Opis

Narzędzie **Usuń komponent** pozwala na wykonanie 2 rodzajów operacji:

* Usunięcie komponentu podrzędnego z obiektu Architektury, na przykład usunięcie prostopadłościanu, który został dodany do ściany, jak w ![](/images/Arch_Add.svg) [Połącz obiekty](/Arch_Add/pl "Arch Add/pl").
* Odjęcie obiektu opartego na [kształcie](/Part_Workbench/pl "Part Workbench/pl") od komponentu Architektury, takiego jak ![](/images/Arch_Wall.svg) [ściana](/Arch_Wall/pl "Arch Wall/pl") lub ![](/images/Arch_Structure.svg) [konstrukcja](/Arch_Structure/pl "Arch Structure/pl").

Odpowiednikiem tego narzędzia jest ![](/images/Arch_Add.svg) [Połącz obiekty](/Arch_Add/pl "Arch Add/pl").

![](/images/Arch_Remove_example.jpg)

Prostopadłościan odjęty od ściany, pozostawiający w niej dziurę.

## Użycie

1. Wybierz komponent podrzędny wewnątrz obiektu Architektury.
2. Naciśnij przycisk ![](/images/Arch_Remove.svg) **Połącz obiekty** lub **Modyfikacja → ![](/images/Arch_Remove.svg) Połącz obiekty** z menu głównego.

lub

1. Wybierz obiekty do odjęcia, ostatni wybrany obiekt musi być obiektem Architektury, od którego zostaną odjęte pozostałe obiekty.
2. Naciśnij przycisk ![](/images/Arch_Remove.svg) **Usuń komponent** lub **Modyfikacja → ![](/images/Arch_Remove.svg) Usuń komponent** z menu głównego.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Usuń komponent** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
removeComponents(objectsList, host=None)

```

* Usuwa podane obiekty w `objectsList` z ich obiektów nadrzędnych.
* Jeśli podano obiekt `host`, funkcja ta spróbuje dodać obiekty w `objectsList` jako otwory do `host`.

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

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Remove/pl&oldid=1438117>"