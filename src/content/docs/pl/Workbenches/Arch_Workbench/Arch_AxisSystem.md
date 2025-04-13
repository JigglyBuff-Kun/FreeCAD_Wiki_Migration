---
title: Architektura Układ osi
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| Architektura: Układ osi |
| Lokalizacja w menu |
| Opisy → Układ osi |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Osie](/Arch_Axis/pl "Arch Axis/pl"), [Siatka](/Arch_Grid/pl "Arch Grid/pl") |
|  |

## Opis

Narzędzie Układ osi pozwala na połączenie dwóch lub trzech obiektów [Osiami](/Arch_Axis/pl "Arch Axis/pl") środowiska pracy Architektura.

Jest to przydatne do definiowania punktów przecięcia między różnymi osiami. Obiekty Architektury mogą następnie użyć tego systemu do powielenia swojego kształtu na różnych punktach przecięcia.

![](/images/Arch_AxisSystem_example.jpg)

Trzy obiekty [osi](/Arch_Axis/pl "Arch Axis/pl") połączone w jeden układ osi. Obiekt [konstrukcji](/Arch_Structure/pl "Arch Structure/pl") używa tego systemu jako swojej właściwości DANE**Axis**, aby jego kształt był powielany w każdym punkcie przecięcia.

## Użycie

1. Opcjonalnie wybierz obiekty [osi](/Arch_Axis/pl "Arch Axis/pl"), które chcesz włączyć do tego systemu.
2. Naciśnij przycisk ![](/images/Arch_AxisSystem.svg) **Układ osi**.
3. Kliknij prawym przyciskiem myszy nowo utworzony obiekt systemu osi w widoku drzewa, aby dodać / edytować obiekty [osi](/Arch_Axis/pl "Arch Axis/pl") zawarte w tym systemie.
4. Wybierz dowolną istniejącą [oś](/Arch_Axis/pl "Arch Axis/pl") i naciśnij ![](/images/Arch_Add.svg) [Połącz obiekty](/Arch_Add/pl "Arch Add/pl") lub ![](/images/Arch_Remove.svg) [Usuń komponent](/Arch_Remove/pl "Arch Remove/pl"), aby dodać lub usunąć ją do / z tego systemu.
5. Ustaw właściwość DANE**Axis** dowolnego obiektu Architektury na ten system, aby jego kształt został zduplikowany w punktach przecięcia tego systemu.

## Opcje

* Ten sam obiekt [osi](/Arch_Axis/pl "Arch Axis/pl") może być częścią więcej niż jednego systemu.
* Dowolny obiekt oparty na kształcie może być również użyty jako właściwość **Axis** obiektów Architektury. W takim przypadku kształt obiektu zostanie zduplikowany wzdłuż wierzchołków obiektu Oś.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Układ osi** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
AxisSystem = makeAxisSystem(axes, name="Axis System")

```

* Tworzy obiekt `AxisSystem` z podanego `axes`, który jest pojedynczą [osią](/Arch_Axis/pl "Arch Axis/pl") lub ich listą.

Przykład:

```
import Draft, Arch

Axes = Arch.makeAxis(5, 1000)

Axes.ViewObject.LineWidth = 3
Axes.ViewObject.BubbleSize = 200
Axes.ViewObject.FontSize = 150

Axes2 = Arch.makeAxis(6, 500)

Axes2.ViewObject.LineWidth = 2
Axes2.ViewObject.BubbleSize = 200
Axes2.ViewObject.FontSize = 150
Axes2.ViewObject.NumberingStyle = "A,B,C"
FreeCAD.ActiveDocument.recompute()

Axes2.Length = 6000
Draft.rotate(Axes2, -90)
Draft.move(Axes2, FreeCAD.Vector(-1000, 2500, 0))
FreeCAD.ActiveDocument.recompute()

AxisSystem = Arch.makeAxisSystem([Axes, Axes2])

Structure = Arch.makeStructure(length=200, width=200, height=100)
Draft.move(Structure, FreeCAD.Vector(-100, 0, 0))
Structure.Axis = AxisSystem
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_AxisSystem/pl&oldid=1434075>"