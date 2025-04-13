---
title: Wykres Konfiguruj osie
---
|  |
| --- |
| Wykres: Konfiguruj osie |
| Lokalizacja w menu |
| Wykres → Konfiguruj osie |
| Środowisko pracy |
| [Wykres](/Plot_Workbench/pl "Plot Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Standardowy moduł wykresów dostarcza już elementarne narzędzie do kontroli osi wykresów ![](/images/Matplotlib_edit_subplot.png). Jednak narzędzie to jest niewystarczające, gdy trzeba obsługiwać wieloosiowe wykresy, jak to ma miejsce w [Poradnik: Wykres wieloosiowy](/Plot_MultiAxes_tutorial/pl "Plot MultiAxes tutorial/pl").
Aby przezwyciężyć to ograniczenie, możesz zainstalować środowisko pracy ![](/images/Workbench_Plot.svg) [Wykres](/Plot_Workbench/pl "Plot Workbench/pl") używając [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl"), dzięki czemu będzie dostępne bardziej kompletne narzędzie do edycji osi wykresu.

![](/images/Plot_MultiAxes_Example.png)

## Użycie

Wybierz kartę wykresu, którą chcesz edytować, i uruchom to narzędzie.

Zalecane jest rozpoczęcie skalowania całej powierzchni, aby mieć pewność, że zmieści się ona w dostępnej przestrzeni. W tym celu należy włączyć opcję **Zastosuj do wszystkich osi**.

![Apply to all axes](/images/Apply_To_All_Axes.png)

Zastosuj do wszystkich selektorów osi

Następnie możesz przeskalować cały wykres, aby zmieścić go w widocznym obszarze, używając czterech suwaków.

![Plot area controlling sliders](/images/Plot_Axes_Sliders.png)

Suwaki do skalowania wykresu

Kiedy jesteś zadowolony z ogólnego rozmiaru wykresu, możesz odznaczyć **Zastosuj do wszystkich osi** i dostroić każdy zestaw osi niezależnie. Po prostu wybierz zestaw osi, które chcesz edytować na górze.

![Plot axes selector](/images/Plot_Axes_Active.png)

Selektor dla zestawu osi do edycji

Ponownie możesz użyć suwaków, aby kontrolować obszar objęty przez dany wykres cząstkowy. Możesz również kontrolować, gdzie umieszczane są zaznaczenia i napisy zarówno dla osi X jak i Y.

![Plot axes position editor](/images/Plot_Axes_Position.png)

Edytor pozycji dla wybranych osi

Dokładniej, można ustawić, czy oś X jest wyświetlana poniżej czy powyżej wykresu, jak również czy oś Y jest wyświetlana po lewej czy po prawej stronie wykresu. Można nawet ustawić przesunięcie obu osi względem linii bazowej wykresu.

Na koniec można ustawić minimalne i maksymalne wartości uwzględniane dla każdego zestawu osi, tzw. przybliżenie.

![Plot zoom editor](/images/Plot_Axes_Zoom.png)

Edytor rozważanych wartości minimalnych i maksymalnych

Retrieved from "<http://wiki.freecad.org/index.php?title=Plot_Axes/pl&oldid=1049768>"