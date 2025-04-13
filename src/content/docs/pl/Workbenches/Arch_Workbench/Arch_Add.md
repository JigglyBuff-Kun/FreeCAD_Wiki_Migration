---
title: BIM Połącz obiekty
---

:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|                                                    |
| -------------------------------------------------- |
| Architektura: Połącz obiekty                       |
| Lokalizacja w menu                                 |
| Modyfikacja → Połącz obiekty                       |
| Środowisko pracy                                   |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl")        |
| Domyślny skrót                                     |
| _brak_                                             |
| Wprowadzono w wersji                               |
| -                                                  |
| Zobacz także                                       |
| [Usuń komponent](/Arch_Remove/pl "Arch Remove/pl") |
|                                                    |

## Opis

Narzędzie Add pozwala na wykonywanie 4 rodzajów operacji:

- Dodawanie obiektów opartych na [kształcie](/Part_Workbench/pl "Part Workbench/pl") do komponentu Architektury, takich jak ![](/images/Arch_Wall.svg) [ściana](/Arch_Wall/pl "Arch Wall/pl") lub ![](/images/Arch_Structure.svg) [konstrukcja](/Arch_Structure/pl "Arch Structure/pl"). Obiekty te stają się częścią komponentu Architektonicznego i pozwalają modyfikować jego kształt, zachowując jego podstawowe właściwości, takie jak szerokość i wysokość.
- Dodawanie komponentów Architektury, takich jak ![](/images/Arch_Wall.svg) [ściana](/Arch_Wall/pl "Arch Wall/pl") lub ![](/images/Arch_Structure.svg) [konstrukcja](/Arch_Structure/pl "Arch Structure/pl"), do obiektu Architektonicznego opartego na grupie, takiego jak ![](/images/Arch_Floor.svg) [Piętra](/Arch_Floor/pl "Arch Floor/pl").
- Dodawanie ![](/images/Arch_Axis.svg) [Systemu osi](/Arch_Axis/pl "Arch Axis/pl") do ![](/images/Arch_Structure.svg) [obiektów konstrukcyjnych](/Arch_Structure/pl "Arch Structure/pl").
- Dodawanie obiektów do ![](/images/Arch_SectionPlane.svg) [płaszczyzny przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl").

Odpowiednikiem tego narzędzia jest ![](/images/Arch_Remove.svg) [Usuń komponent](/Arch_Remove/pl "Arch Remove/pl").

![](/images/Arch_Add_example.jpg)

Prostopadłościan dodana do ściany jako komponent.

## Użycie

1. Wybierz obiekty, które mają zostać dodane. Ostatni wybrany obiekt będzie głównym obiektem Architektury.
2. Naciśnij przycisk ![](/images/Arch_Add.svg) **Połącz obiekty** lub użyj narzędzia **Modyfikacja → ![](/images/Arch_Add.svg) Połącz obiekty** z menu głównego.

## Tworzenie skryptów

_Zobacz również:_ [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Połącz obiekty** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

: ```
addComponents(objectsList, host)

    ```

: Powyższy fragment kodu dodaje podane obiekty w `objectsList` do podanego obiektu `host`.

**Uwaga:** `objectsList` może być indywidualnym obiektem lub listą obiektów.

Przykład:

```
import FreeCAD, Arch, Draft, Part

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 2000, 0)

Line = Draft.makeWire([p1, p2])
Wall = Arch.makeWall(Line, width=150, height=2000)

p3 = FreeCAD.Vector(0, 2000, 0)
p4 = FreeCAD.Vector(3000, 0, 0)

Line2 = Draft.makeWire([p3, p4])
Wall2 = Arch.makeWall(Line2, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Arch.addComponents(Wall2, Wall)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Add/pl&oldid=1474152>"
