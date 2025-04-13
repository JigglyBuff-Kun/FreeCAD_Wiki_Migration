---
title: Środowisko pracy Wykres
---

![](/images/Workbench_Plot.svg)

Ikonka FreeCAD dla środowiska pracy Wykres

## Wprowadzenie

FreeCAD jest w stanie wykonywać wykresy przy użyciu biblioteki [Python](/Python/pl "Python/pl") [matplotlib](https://matplotlib.org/). W tym celu w wersji 0.19 dostarczany jest moduł, jako zewnętrzny dodatek a od wersji 0.20 jako podstawowy komponent. Starsze wersje FreeCAD nie są objęte niniejszą dokumentacją.

Generowane wykresy oferują standardowe narzędzia [matplotlib](https://matplotlib.org/) do edycji i zapisu. Dodatkowo, środowisko pracy ![](/images/Workbench_Plot.svg) Wykres jest dostarczane jako zewnętrzny dodatek oferujący bardziej kompletne narzędzia do edycji i zapisywania wykresu. Dodatek ten może być zainstalowany za pomocą [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl").

## Moduł

Moduł można wywołać w konsoli [Python](/Python/pl "Python/pl") lub w [makrodefinicji](/Macros/pl "Macros/pl"). Pierwszą rzeczą, niezbędna do wykonania jest zaimportowanie modułu.
We FreeCAD v0.19 musisz najpierw zainstalować środowisko pracy ![](/images/Workbench_Plot.svg) Wykres za pomocą [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl"), a następnie możesz zaimportować pisanie wykresu

```
from freecad.plot import Plot

```

Od wersji FreeCAD **v0.20** moduł Wykres jest wbudowany w program, więc nie trzeba instalować żadnego dodatku, a jedynie wpisać:

```
from FreeCAD.Plot import Plot

```

Następnie można wykreślić linię prostą od współrzędnych _(0,0)_ do _(1,2)_ wpisując po prostu:

```
Plot.plot([0, 1], [0, 2])

```

Bardziej złożone przykłady znajdziesz w poradnikach [Poradnik: Podstawy dla środowiska pracy Wykres](/Plot_Basic_tutorial/pl "Plot Basic tutorial/pl") i [Poradnik: Wykres wieloosiowy](/Plot_MultiAxes_tutorial/pl "Plot MultiAxes tutorial/pl").

## Narzędzia środowiska pracy

Jeśli zdecydujesz się na zainstalowanie środowiska pracy ![](/images/Workbench_Plot.svg) Wykres za pomocą [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl"), będziesz miał dostępne następujące narzędzia do zarządzania wykresami utworzonymi za pomocą modułu:

- ![](/images/Plot_Save.svg) [Zapisz wykres](/Plot_Save/pl "Plot Save/pl"): Zapisuje wykres w kilku formatach. Możesz również wybrać rozmiar wyjściowy i rozdzielczość.
- ![](/images/Plot_Axes.svg) [Konfiguruj osie](/Plot_Axes/pl "Plot Axes/pl"): Dodaj, usuń lub edytuj osie wykresu.
- ![](/images/Plot_Series.svg) [Skonfiguruj serie](/Plot_Series/pl "Plot Series/pl"): Edycja tytułu i stylów serii.
- ![](/images/Plot_Grid.svg) [Pokaż / ukryj siatkę](/Plot_Grid "Plot Grid"): Wyświetla / ukrywa siatkę.
- ![](/images/Plot_Legend.svg) [Pokaż / ukryj legendę](/Plot_Legend/pl "Plot Legend/pl"): Wyświetla / ukrywa legendę.
- ![](/images/Plot_Labels.svg) [Ustaw etykiety](/Plot_Labels/pl "Plot Labels/pl"): Edycja etykiet.
- ![](/images/Plot_Positions.svg) [Ustaw pozycje i rozmiary](/Plot_Positions/pl "Plot Positions/pl"): Ustawianie pozycji elementów.

## Tworzenie skryptów

Ponieważ środowisko pracy Wykres jest nakładką `matplotlib`, możesz swobodnie używać dowolnych funkcji z tej biblioteki na instancjach plot. Aby zobaczyć przykłady, przeczytaj stronę [Skrypty i makrodefinicje](/Scripting_and_macros/pl "Scripting and macros/pl").

## Poradniki

- [Poradnik: Podstawy dla środowiska pracy Wykres](/Plot_Basic_tutorial/pl "Plot Basic tutorial/pl")
- [Poradnik: Wykres wieloosiowy](/Plot_MultiAxes_tutorial/pl "Plot MultiAxes tutorial/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=Plot_Workbench/pl&oldid=1158124>"
