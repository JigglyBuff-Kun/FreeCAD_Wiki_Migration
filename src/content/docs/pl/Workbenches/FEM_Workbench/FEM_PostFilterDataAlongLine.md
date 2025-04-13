---
title: MES Filtr przycięcia linią
---

|                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------- |
| MES: Filtr przycięcia linią                                                                                                                         |
| Lokalizacja w menu                                                                                                                                  |
| Wyniki → Filtr przycięcia linią                                                                                                                     |
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

Tworzy wykres wartości pola wzdłuż wskazanej linii.

![](/images/FEM_Line-Clip-Filter-Example.png)

Filtr przycięcia linią w [filtrze przycięcia obszaru](/FEM_PostFilterClipRegion/pl "FEM PostFilterClipRegion/pl").  
Filtr przycięcia obszaru jest półprzezroczysty.  
Część linii poza filtrem przycięcia obszaru jest ustawiona na wartość zero i dlatego wyświetla się na niebiesko.

## Użycie

1. Zaznacz wcześniej utworzony [obiekt prezentacji graficznej wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl") lub inny filtr.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_PostFilterDataAlongLine.svg) Filtr przycięcia linią.
   - Wybierz opcję **Wyniki → ![](/images/FEM_PostFilterDataAlongLine.svg) Filtr przycięcia linią** z menu.
3. Wprowadź współrzędne dwóch punktów definiujących linię, wzdłuż której wyniki mają być uzyskane. Opcjonalnie, wciśnij przycisk Wybierz punkty i wskaż punkty ręcznie na powierzchni siatki.
4. Opcjonalnie, podaj **Rozdzielczość**.
5. Wybierz **Pole** z listy rozwijanej.
6. Wciśnij przycisk Utwórzy wykres. Wykres XY wartości pola w funkcji długości linii zostanie utworzony w osobnym oknie.
7. Wciśnij przycisk OK aby zakończyć polecenie.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostFilterDataAlongLine/pl&oldid=1569568>"
