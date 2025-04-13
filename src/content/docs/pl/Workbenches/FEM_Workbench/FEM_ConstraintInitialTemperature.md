---
title: MES Temperatura początkowa
---

|                                                                          |
| ------------------------------------------------------------------------ |
| MES: Temperatura początkowa                                              |
| Lokalizacja w menu                                                       |
| Model → Warunki brzegowe i obciążenia termiczne → Temperatura początkowa |
| Środowisko pracy                                                         |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                              |
| Domyślny skrót                                                           |
| _brak_                                                                   |
| Wprowadzono w wersji                                                     |
| -                                                                        |
| Zobacz także                                                             |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl")                       |
|                                                                          |

| Solvery         |
| --------------- |
| CalculiX, Elmer |

## Opis

Definiuje temperaturę początkową do analizy termo-mechanicznej

## Użycie

1. Jest kilka sposobów wywołania tej komendyː
   - Wciśnij przycisk ![](/images/FEM_ConstraintInitialTemperature.svg) **Temperatura początkowa**.
   - Wybierz opcję **Model → Warunki brzegowe i obciążenia termiczne → ![](/images/FEM_ConstraintInitialTemperature.svg) Temperatura początkowa** z menu.
2. Wprowadź wartość temperatury początkowej dla analizy.

## Ograniczenia

To narzędzie definiuje temperaturę początkową dla wszystkich węzłów siatki modelu - nie ma możliwość wskazania indywidualnych obszarów.

## Uwagi

- To narzędzie korzysta ze [słowa kluczowego \*INITIAL CONDITIONS w CalculiX](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node215.html).
- Temperatura początkowa musi być zdefiniowana dla wszystkich analiz termomechanicznych wykonywanych za pomocą CalculiX, nawet tych w stanie ustalonym.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintInitialTemperature/pl&oldid=1542219>"
