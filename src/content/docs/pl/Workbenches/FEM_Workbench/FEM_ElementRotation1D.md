---
title: MES Obrót belki
---

|                                                    |
| -------------------------------------------------- |
| MES: Obrót belki                                   |
| Lokalizacja w menu                                 |
| Model → Geometria elementu → Obrót belki           |
| Środowisko pracy                                   |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")        |
| Domyślny skrót                                     |
| _brak_                                             |
| Wprowadzono w wersji                               |
| -                                                  |
| Zobacz także                                       |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                    |

| Solvery  |
| -------- |
| CalculiX |

## Opis

**ElementRotation1D** jest używany do obrócenia przekroju poprzecznego belki wokół osi elementów belkowych.

## Użycie

1. Jest kilka sposobów wywołania tej komendy:
   - Wciśnij przycisk ![](/images/FEM_ElementRotation1D.svg) Obrót belki button.
   - Wybierz opcję **Model → Geometria elementu → ![](/images/FEM_ElementRotation1D.svg) Obrót belki** z menu.
2. Podaj kąt obrotu przekroju poprzecznego belki.

![](/images/FEM_beam_no_rotation.png)

Bez obrotu, domyślna orientacja - lokalna oś 1 zrównana z globalną osią Y (zielona)

![](/images/FEM_beam_rotation.png)

Obrót o 90 stopni

## Właściwości

DANE**Rotation**: określa kąt obrotu.

## Ograniczenia

- Obecnie nie są wspierane różne obroty w jednym modelu _(jeden obrót jest zadawany na wszystkie belki w modelu)_.

## Uwagi

- Aby zwizualizować obrócony przekrój, należy ustawić `Beam Shell Result Output 3D` w [solverze CalculiX](/FEM_SolverCalculixCxxtools/pl "FEM SolverCalculixCxxtools/pl") na wartość `Prawda` i uruchomić analizę.
- To narzędzie korzysta ze [słowa kluczowego \*BEAM SECTION w CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node162.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElementRotation1D/pl&oldid=1531382>"
