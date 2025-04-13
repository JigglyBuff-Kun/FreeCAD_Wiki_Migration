---
title: MES Wiązanie MPC typu płaszczyzna
---

|                                                                                         |
| --------------------------------------------------------------------------------------- |
| MES: Wiązanie MPC typu płaszczyzna                                                      |
| Lokalizacja w menu                                                                      |
| Model → Funkcje analizy geometrycznej → Wiązanie MPC typu płaszczyzna                   |
| Środowisko pracy                                                                        |
| [środowisko pracy MES](/FEM_Workbench/pl "FEM Workbench/pl")                            |
| Domyślny skrót                                                                          |
| _brak_                                                                                  |
| Wprowadzono w wersji                                                                    |
| -                                                                                       |
| Zobacz także                                                                            |
| [Lokalny układ współrzędnych](/FEM_ConstraintTransform/pl "FEM ConstraintTransform/pl") |
|                                                                                         |

| Solvery  |
| -------- |
| CalculiX |

## Opis

Tworzy wiązanie wielopunktowe _(MPC)_ w celu utrzymania węzłów leżących na płaskiej powierzchni na tej samej płaszczyźnie.

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Naciśnij przycisk ![](/images/FEM_ConstraintPlaneRotation.svg) **Wiązanie MPC typu płaszczyzna** na pasku narzędzi.
   - Wybierz opcję z menu **Model → Cechy geometryczne analizy → ![](/images/FEM_ConstraintPlaneRotation.svg) Wiązanie MPC typu płaszczyzna**.
2. W oknie [widoku 3D](/3D_view/pl "3D view/pl") wybierz obiekt, do którego ma być zastosowane wiązanie MPC, może to być tylko pojedyncza ściana.
3. Wciśnij przycisk Dodaj.

![](/images/FEM_plane_rotation_constraint_example.PNG)

Przykład użycia wiązania wielopunktowego typu płaszczyzna. Obie belki swobodnie podparte są poddane działaniu tej samej siły, ale dolna belka ma wiązanie MPC typu płaszczyzna nałożone na zielony segment górnej ściany. To zmusza węzły w tym obszarze do pozostania na tej samej płaszczyźnie i zmienia deformację (tu przeskalowana).

## Ograniczenia

1. Wiązanie wielopunktowe w płaszczyźnie może być zastosowane tylko do jednej ściany płaskiej.
2. Jeśli wiązanie wielopunktowe w płaszczyźnie zostanie zastosowane do tej samej ściany co wiązanie przemieszczenia / stały warunek brzegowy, pierwszeństwo ma wiązanie przemieszczenia / stały warunek brzegowy.

## Uwagi

1. Wiązanie to wykorzystuje [słowo kluczowe \*MPC w CalculiX](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node220.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintPlaneRotation/pl&oldid=1542187>"
