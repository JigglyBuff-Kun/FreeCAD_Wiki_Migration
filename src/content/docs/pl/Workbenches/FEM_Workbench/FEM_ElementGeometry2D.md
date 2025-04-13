---
title: MES Grubość powłoki
---

|                                                    |
| -------------------------------------------------- |
| MES: Grubość powłoki                               |
| Lokalizacja w menu                                 |
| Model → Geometria elementu → Grubość powłoki       |
| Środowisko pracy                                   |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")        |
| Domyślny skrót                                     |
| C S                                                |
| Wprowadzono w wersji                               |
| -                                                  |
| Zobacz także                                       |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                    |

| Solvery   |
| --------- |
| Wszystkie |

## Opis

**ElementGeometry2D** jest używane do definiowania grubości elementów 2D (powłokowych i [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): płaskiego stanu naprężeń/odkształceń), wszystkich lub należących do wybranej powierzchni.

## Użycie

1. Jest kilka sposobów wywołania tej komendy:
   - Wciśnij przycisk ![](/images/FEM_ElementGeometry2D.svg) Grubość powłoki.
   - Wybierz opcję **Model → Geometria elementu → ![](/images/FEM_ElementGeometry2D.svg) Grubość powłoki** z menu.
2. Podaj grubość powłoki.
3. Opcjonalnie, wciśnij przycisk Dodaj w panelu zadań a następnie kliknij na powierzchni, dla której chcesz przypisać grubość. Jeśli żadna powierzchnia nie zostanie wskazana, wszystkie pozostałe powierzchnie _(których grubości nie są zdefiniowane przy pomocy innych obiektów **Grubość powłoki 2D**)_ będą automatycznie użyte.

## Ograniczenia

- Obecnie analizy łączące elementy powłokowe z bryłowymi lub belkowymi nie są wspierane.

## Właściwości

DANE**Grubość**: Określa grubość elementów 2D.

## Uwagi

Do wyświetlania wyników z solvera CalculiX na siatce ze zwizualizowaną grubością, należy ustawić właściwość `Beam Shell Result Output 3D` w [solverze CalculiX](/FEM_SolverCalculixCxxtools/pl "FEM SolverCalculixCxxtools/pl") na wartość `Prawda`. Żeby tylko zwizualizować zdefiniowane grubości przed uruchomieniem właściwych obliczeń, można włączyć analizę typu _check_ z tą właściwością ustawioną na `Prawda`.

- To narzędzie korzysta ze [słowa kluczowego \*SHELL SECTION w CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node238.html) dla elementów powłokowych i [słowa kluczowego \*SOLID SECTION](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node239.html) dla elementów płaskiego stanu naprężeń/odkształceń.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElementGeometry2D/pl&oldid=1544166>"
