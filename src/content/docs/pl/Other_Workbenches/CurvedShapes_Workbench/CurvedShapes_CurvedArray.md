---
title: Kształty Zakrzywione Szyk krzywych
---
|  |
| --- |
| Kształty Zakrzywione: Szyk krzywych |
| Lokalizacja w menu |
| *brak* |
| Środowisko pracy |
| [Kształty Zakrzywione](/CurvedShapes_Workbench/pl "CurvedShapes Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Tworzy tablicę i zmienia rozmiar elementów w granicach jednej lub więcej krzywych kadłuba. W tym przykładzie pomarańczowy kształt bazowy jest przeskalowywany w granicach czerwonej i fioletowej krzywej kadłuba. Krzywe nie muszą być połączone.
Krzywe kadłuba powinny leżeć na płaszczyźnie XY- XZ- lub YZ- lub równolegle do niej.

<https://github.com/chbergmann/CurvedShapesWorkbench/blob/master/Examples/WingExample.png>
[[Image:]]

## Użycie

1. Krok 1
2. Krok 2: Wywołaj polecenie na kilka sposobów:
   * Używając przycisku [File:WorkbenchName Command.svg](/index.php?title=Special:Upload&wpDestFile=WorkbenchName_Command.svg "File:WorkbenchName Command.svg") przycisku [WorkbenchName Command](/index.php?title=WorkbenchName_Command/pl&action=edit&redlink=1 "WorkbenchName Command/pl (page does not exist)")
   * Używając skrótu klawiaturowego {{{1}}} {{{1}}}
   * Używając opcji menu podręcznego **Menu → Command**.
3. Krok 3

## Uwagi

* Pierwsza krzywa wybrana do utworzenia Szyku krzywych będzie elementem, który zostanie przeciągnięty i zmieni rozmiar w granicach innych wybranych krzywych.

## Właściwości

Podstawa

* DANE**Base**: Obiekt, z którego ma zostać utworzona tablica
* DANE**Hullcurves**: Lista jednej lub więcej krzywych ograniczających
* DANE**Axis**: Oś kierunku kształtu Baza.
* DANE**Items**: Liczba elementów tablicy.
* DANE**OffsetStart**: Przesunięcie pierwszej części w kierunku osi.
* DANE**OffsetEnd**: pPrzesunięcie ostatniej części od końca w przeciwnym kierunku osi.
* DANE**Twist**: Stosuje obrót wokół osi do elementów tablicy.
* DANE**Surface**: Tworzy powierzchnię nad elementami tablicy.
* DANE**Solid**: Tworzy bryłę, jeśli Base jest kształtem zamkniętym.

Retrieved from "<http://wiki.freecad.org/index.php?title=CurvedShapes_CurvedArray/pl&oldid=1319504>"