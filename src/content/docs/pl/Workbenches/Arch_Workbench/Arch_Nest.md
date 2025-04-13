---
title: Architektura Zagnieżdżanie
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| Architektura: Zagnieżdżanie |
| Lokalizacja w menu |
| Narzędzia → Narzędzia panelu → Zagnieżdżanie |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Panel](/Arch_Panel/pl "Arch Panel/pl"), [Arkusz Panelu](/Arch_Panel_Sheet/pl "Arch Panel Sheet/pl") |
|  |

## Opis

Narzędzie **Zagnieżdżanie** pozwala na wybranie płaskiego kształtu jako kontenera i serii innych płaskich kształtów do zorganizowania wewnątrz przestrzeni zdefiniowanej przez kształt kontenera. Jest to zwykle potrzebne w operacjach CNC, w których chcesz wyciąć serię elementów z panelu bazowego i musisz zorganizować te elementy w najlepszy możliwy kompaktowy sposób, aby zajmowały mniej miejsca na panelu.

Algorytm stojący za narzędziem Zagnieżdżanie, jest w ciągłej ewolucji i obecnie nie jest w pełni zoptymalizowany. W przyszłości wydajność tego narzędzia powinna być znacznie lepsza.

![](/images/Arch_Nest_example.jpg)

*Powyższy obraz przedstawia serię kształtów przed i po operacji zagnieżdżania.*

## Użycie

1. Wybierz opcję w menu '*Narzędzia → Narzędzia panelu → ![](/images/Arch_Nest.svg) **Zagnieżdżanie'***.
2. Wybierz obiekt, który będzie kontenerem. Obiekt ten musi być płaski i w tym momencie prostokątny.
3. Kliknij przycisk Wybierz zaznaczone, aby użyć tego obiektu jako kontenera.
4. Wybierz serię innych płaskich obiektów, które chcesz umieścić wewnątrz kontenera. Wszystkie te obiekty muszą być płaskie i znajdować się w tej samej płaszczyźnie co kontener.
5. Dostosuj żądane opcje poniżej.
6. Rozpocznij proces obliczania.
7. Po zakończeniu obliczeń kliknij przycisk Podgląd, aby utworzyć tymczasowy podgląd wyniku.
8. Jeśli chcesz zastosować wynik *(przenieść i obrócić rzeczywiste kształty na miejsce)*, kliknij przycisk OK.

![](/images/Arch_Nest_panel.jpg)

Panel widoku zadań dla narzędzia **Zagnieżdżanie**

## Uwagi

* Wszystkie obiekty muszą mieć powierzchnię.
* W tej chwili narzędzie będzie działać tylko z płaskimi obiektami, które mają taką samą orientację.
* W tej chwili kontener musi być prostokątny.
* W tej chwili marginesy / odstępy między elementami nie są jeszcze zaimplementowane.
* Obliczenia mogą zająć dużo czasu w przypadku wielu obiektów. Zostanie to zoptymalizowane w przyszłości.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Nest/pl&oldid=1438149>"