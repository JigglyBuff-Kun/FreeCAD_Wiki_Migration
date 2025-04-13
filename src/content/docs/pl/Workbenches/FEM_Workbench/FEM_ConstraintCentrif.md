---
title: MES Obciążenie siłą odśrodkową
---

|                                                                                |
| ------------------------------------------------------------------------------ |
| MES: Obciążenie siłą odśrodkową                                                |
| Lokalizacja w menu                                                             |
| Model → Warunki brzegowe i obciążenia mechaniczne → Obciążenie siłą odśrodkową |
| Środowisko pracy                                                               |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                    |
| Domyślny skrót                                                                 |
| _brak_                                                                         |
| Wprowadzono w wersji                                                           |
| 0.20                                                                           |
| Zobacz także                                                                   |
| _brak_                                                                         |
|                                                                                |

| Solvery  |
| -------- |
| CalculiX |

## Opis

Definiuje obciążenie siłą odśrodkową bryły.

## Użycie

1. Jest kilka sposobów wywołania tej komendy:
   - Wciśnij przycisk ![](/images/FEM_ConstraintCentrif.svg) Obciążenie siłą odśrodkową.
   - Wybierz opcję **Model → Warunki brzegowe i obciążenia mechaniczne → ![](/images/FEM_ConstraintCentrif.svg) Obciążenie siłą odśrodkową** z menu.
2. Podaj częstotliwość obrotów w Hz.
3. Wciśnij przycisk Dodaj w oknie **Wybór geometrii odniesienia dla Solid** i w [widoku 3D](/3D_view "3D view") wybierz bryłę, do której obciążenie ma być przypisane.
4. Wciśnij przycisk Dodaj w oknie **Wybór geometrii odniesienia dla Edge** i w [widoku 3D](/3D_view "3D view") wybierz krawędź, która ma stanowić oś obrotu.

## Uwagi

- To narzędzia korzysta ze [słowa kluczowego \*DLOAD w CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node190.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintCentrif/pl&oldid=1542213>"
