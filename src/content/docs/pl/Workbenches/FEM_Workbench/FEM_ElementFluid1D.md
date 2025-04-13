---
title: MES Przekrój dla przepływu 1D
---

|                                                        |
| ------------------------------------------------------ |
| MES: Przekrój dla przepływu 1D                         |
| Lokalizacja w menu                                     |
| Model → Geometria elementu → Przekrój dla przepływu 1D |
| Środowisko pracy                                       |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")            |
| Domyślny skrót                                         |
| _brak_                                                 |
| Wprowadzono w wersji                                   |
| -                                                      |
| Zobacz także                                           |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl")     |
|                                                        |

| Solvery  |
| -------- |
| CalculiX |

## Opis

Tworzy element MES przekroju płynu dla układów pneumatycznych i hydraulicznych rozwiązywanych przy pomocy solvera CalculiX.

## Użycie

1. Jest kilka sposobów wywołania tej komendy:
   - Wciśnij przycisk ![](/images/FEM_ElementFluid1D.svg) **Przekrój dla przepływu 1D**.
   - Wybierz opcję **Model → Geometria elementu → ![](/images/FEM_ElementFluid1D.svg) Przekrój dla przepływu 1D** z menu.
2. Wybierz rodzaj płynu: ciecz, gaz lub otwarty kanał.
3. Wybierz rodzaj przekroju: rura Manninga, wlot rury itd.
4. Wprowadź parametry typu przekroju.
5. Wybierz i dodaj krawędź.

## Ograniczenia

1. To narzędzie działa tylko z 3-węzłowymi elementami układu płynowego. Więcej informacji można znaleźć na stronie: <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node54.html>

## Uwagi

1. Przykład ustawiania układu hydraulicznego można znaleźć tutaj: <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node13.html>
2. Do modelowania elementów płynowych dla przepływu 1D wykorzystywane jest [słowo kluczowe \*FLUID SECTION w CalculiX](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node205.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElementFluid1D/pl&oldid=1460210>"
