---
title: Rysunek Roboczy Ustaw nachylenie
---
|  |
| --- |
| Rysunek Roboczy: Ustaw nachylenie |
| Lokalizacja w menu |
| Modyfikacja → Ustaw nachylenie Narzędzia → Ustaw nachylenie |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Draft_Slope.svg) **Utwórz nachylenie** pochyla wybraną [linię](/Draft_Line/pl "Draft Line/pl") lub [polilinię](/Draft_Wire/pl "Draft Wire/pl") poprzez zwiększenie lub zmniejszenie współrzędnej Z każdego punktu znajdującego się za punktem pierwszym. Narzędzie to może być również użyte do spłaszczenia [polilinii](/Draft_Wire/pl "Draft Wire/pl"). Należy pamiętać, że nachylenie odnosi się do płaszczyzny XY zdefiniowanej przez właściwość DANE**Umiejscowienie** obiektów.

![](/images/Draft_Slope_example.png)

Po lewej, pozioma linia. Po prawej, ta sama linia o wartości nachylenia 1 *(kąt 45°)*.

## Użycie

1. Wybierz jedną lub więcej [linii](/Draft_Line/pl "Draft Line/pl") i / lub [polilinii](/Draft_Wire/pl "Draft Wire/pl").
2. Polecenie można wywołać na kilka sposobów:
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Naciśnij przycisk ![](/images/Draft_Slope.svg) **Ustaw nachylenie****.**
   * Rysunek Roboczy: Wybierz z menu opcję **Modyfikacja → ![](/images/Draft_Slope.svg) Ustaw nachylenie**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Narzędzia → ![](/images/Draft_Slope.svg) Ustaw nachylenie** z menu.
3. Wprowadź wartość **Nachylenie**. `0` oznacza, że każdy segment jest poziomy, `0.5` oznacza, że wysokość delta dla każdego segmentu jest `0.5` razy jego długość, itd. Wartość może być również ujemna.
4. Naciśnij Enter lub przycisk OK, aby zakończyć wykonywanie polecenia.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Nie ma metody Python do pochylania obiektów. Aby naśladować wyniki polecenia **Utwórz nachylenie**, należy zmodyfikować właściwości geometryczne obiektów.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Slope/pl&oldid=1474040>"