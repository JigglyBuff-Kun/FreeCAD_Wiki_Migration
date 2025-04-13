---
title: MES Równanie siły elektrostatycznej
---

|                                                                                           |
| ----------------------------------------------------------------------------------------- |
| MES: Równanie siły elektrostatycznej                                                      |
| Lokalizacja w menu                                                                        |
| Rozwiąż → Równania elektromagnetyczne → Równanie siły elektrostatycznej                   |
| Środowisko pracy                                                                          |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                               |
| Domyślny skrót                                                                            |
| _brak_                                                                                    |
| Wprowadzono w wersji                                                                      |
| 0.19                                                                                      |
| Zobacz także                                                                              |
| [Równanie elektrostatyczne](/FEM_EquationElectrostatic/pl "FEM EquationElectrostatic/pl") |
|                                                                                           |

## Opis

To równanie opisuje siłę elektrostatyczną działającą na powierzchni.

Informacje o teorii stojącej za tym równaniem można znaleźć w dokumencie [Elmer models manual](http://www.elmerfem.org/blog/documentation/), w sekcji **Electrostatic force** _(siła elektrostatyczna)_.

## Użycie

1. Dodaj ![](/images/FEM_SolverElmer.svg) [solver Elmer](/FEM_SolverElmer/pl#Równania "FEM SolverElmer/pl").
2. Wybierz go w [widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_EquationElectricforce.svg) Równanie siły elektrostatycznej.
   - Wybierz opcję **Rozwiąż → Równania elektromagnetyczne → Równanie siły elektrostatycznej** z menu.
4. Równanie siły elektrostatycznej wymaga pola potencjału:
   - Wywołaj polecenie ![](/images/FEM_EquationElectrostatic.svg) [Równanie elektrostatyczne](/FEM_EquationElectrostatic/pl "FEM EquationElectrostatic/pl").
5. Zmień [ustawienia solvera dla równania](#Ustawienia_solvera) lub [ogólne ustawienia solvera](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl") jeśli to konieczne.

Równanie siły elektrostatycznej oblicza siłę tylko dla powierzchni z ![](/images/FEM_ConstraintElectrostaticPotential.svg) [warunkiem brzegowym potencjału elektrostatycznego](/FEM_ConstraintElectrostaticPotential/pl "FEM ConstraintElectrostaticPotential/pl") jeśli w opcjach warunku brzegowego jest używane **Calculate Electric Force**.

## Ustawienia solvera

Dla ogólnych ustawień solvera zobacz [konfigurację solvera Elmer](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl").

Równanie siły elektrostatycznej posiada to specjalne ustawienieː

- DANE**Exec Solver**: Domyślnie równanie jest rozwiązywane tylko po zakończeniu kroku czasowego. Oznacza to, że jest po raz pierwszy rozwiązywane po osiągnięciu zbieżności rozwiązania innych równań. Gdy ustawione jest _Always_, równanie jest rozwiązywane po każdej iteracji w obrębie kroku czasowego (dla symulacji [stanu ustalonego](/FEM_SolverElmer_SolverSettings/pl#Typ "FEM SolverElmer SolverSettings/pl") cała symulacja jest jednym krokiem czasowym).

## Informacje o cechach analizy

Równanie siły elektrostatycznej nie ma własnych cech analizy. Korzysta z ![](/images/FEM_ConstraintElectrostaticPotential.svg) [warunku brzegowego potencjału elektrostatycznego](/FEM_ConstraintElectrostaticPotential/pl "FEM ConstraintElectrostaticPotential/pl") z ![](/images/FEM_EquationElectrostatic.svg) [równania elektrostatycznego](/FEM_EquationElectrostatic/pl "FEM EquationElectrostatic/pl"). Ważne jest aby w warunku brzegowym użyć opcji **Calculate Electric Force**.

## Wyniki

Wynikiem jest gęstość siły elektrycznej w

N

/

m

2
{\displaystyle {\rm {N/m^{2}}}}
![{\displaystyle {\rm {N/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a90004e7cf2472e320272d782c911ff786f8be02).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationElectricforce/pl&oldid=1569447>"
