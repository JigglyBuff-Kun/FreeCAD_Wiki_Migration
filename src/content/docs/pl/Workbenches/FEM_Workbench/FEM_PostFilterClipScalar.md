---
title: MES Filtr przycinania skalarnego
---

|                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------- |
| MES: Filtr przycinania skalarnego                                                                                                                   |
| Lokalizacja w menu                                                                                                                                  |
| Wyniki → Filtr przycinania skalarnego                                                                                                               |
| Środowisko pracy                                                                                                                                    |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                                                                                         |
| Domyślny skrót                                                                                                                                      |
| _brak_                                                                                                                                              |
| Wprowadzono w wersji                                                                                                                                |
| -                                                                                                                                                   |
| Zobacz także                                                                                                                                        |
| [Prezentacja graficzna wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl"), [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                                                                                                                     |

## Opis

Przycina pole używając podanej wartości skalarnej.

![](/images/FEM_Scalar-Clip-Filter-Example.png)

Rezultat filtra przycinania skalarnego.  
Oryginalny obiekt prezentacji graficznej wyników jest półprzezroczysty.

Filtr przycinania skalarnego może być łączony z innymi filtrami. Przykładowo, filtr przycinania skalarnego na [filtrze wizualizacji deformacji](/FEM_PostFilterWarp/pl "FEM PostFilterWarp/pl") (półprzezroczysty):

![](/images/FEM_Scalar-Clip-Filter-On-Warp-Example.png)

## Użycie

1. Zaznacz wcześniej utworzony [obiekt prezentacji graficznej wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl") lub inny dodany filtr.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_PostFilterClipScalar.svg) Filtr przycinania skalarnego.
   - Wybierz opcję **Wyniki → ![](/images/FEM_PostFilterClipScalar.svg) Filtr przycinania skalarnego** z menu.
3. Dostosuj **Opcje wyświetlania wyników** jak dla [obiektu prezentacji graficznej wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl"). Ukryj obiekt prezentacji graficznej wyników żeby zobaczyć efekt filtra przycinania skalarnego.
4. Wybierz typ **Skalar** z listy rozwijanej.
5. Zdefiniuj wartość **Skalar do przycinania** bezpośrednio lub przy pomocy suwaka.
6. Domyślnie wszystkie obszary z wartościami pola poniżej podanej wartości zostaną ukryte. Zaznacz opcję **Przytnij na drugą stronę** żeby odwrócić wyświetlanie i ukryć obszary z wartościami powyżej podanej.
7. Wciśnij przycisk OK żeby zakończyć polecenie.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostFilterClipScalar/pl&oldid=1569560>"
