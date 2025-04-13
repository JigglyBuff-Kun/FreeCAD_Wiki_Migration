---
title: Architektura Linia cięcia
---
:::caution
TO NARZĘDZIE JEST PRZESTARZAŁENie będzie ono dostępne wwersja 1.0 i powyżej. Zamiast tego należy użyć narzędziaPrzetnij płaszczyzną.
:::

|  |
| --- |
| Arch CutLine |
| Menu location |
| Architektura → Linia Cięcia |
| Workbenches |
| [Architektura](/Arch_Workbench "Arch Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.19 |
| See also |
| [Płaszczyzna cięcia](/Arch_CutPlane/pl "Arch CutPlane/pl") |
|  |

## Opis

Narzędzie **Linia Cięcia** przecina obiekt architektury, taki jak [ściana](/Arch_Wall/pl "Arch Wall/pl") lub [konstrukcja](/Arch_Structure/pl "Arch Structure/pl"), prostą krawędzią. W oparciu o tę krawędź i normalną [Płaszczyzna robocza szkicu](/Draft_SelectPlane/pl "Draft SelectPlane/pl") generowana jest powierzchnia cięcia.

![](/images/Arch_CutLine_example_1.png) ![](/images/Arch_CutLine_example_2.png)

[Sciana](/Arch_Wall/pl "Arch Wall/pl") przecięta linią. Po lewej: pole odejmowania, które pojawia się podczas korzystania z narzędzia. Po prawej: ściana wynikowa po zakończeniu cięcia.

## Użycie

1. W razie potrzeby wyrównaj płaszczyznę roboczą:
   * Wybrana krawędź może nie być równoległa do normalnej płaszczyzny roboczej.
   * Wygenerowana powierzchnia cięcia będzie prostopadła do płaszczyzny roboczej.
2. Wybierz obiekt w [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl") do wycięcia.
3. Wybierz krawędź prostą. Musi być ona wybrana w [widoku 3D](/3D_view/pl "3D view/pl").
4. Naciśnij przycisk ![](/images/Arch_CutLine.svg) Cięcie linią.
5. Wybierz **Za** lub **Przed**, aby wskazać, po której stronie powierzchni cięcia materiał ma zostać usunięty.
6. Naciśnij przycisk OK.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CutLine/pl&oldid=1468853>"