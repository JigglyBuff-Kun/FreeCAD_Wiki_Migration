---
title: MES Równanie magnetodynamiczne
---

|                                                                                                     |
| --------------------------------------------------------------------------------------------------- |
| MES: Równanie magnetodynamiczne                                                                     |
| Lokalizacja w menu                                                                                  |
| Rozwiąż→ Równania elektromagnetyczne → Równanie magnetodynamiczne                                   |
| Środowisko pracy                                                                                    |
| [FEM](/FEM_Workbench "FEM Workbench")                                                               |
| Domyślny skrót                                                                                      |
| _brak_                                                                                              |
| Wprowadzono w wersji                                                                                |
| 0.21                                                                                                |
| Zobacz także                                                                                        |
| [Równanie magnetodynamiczne 2D](/FEM_EquationMagnetodynamic2D/pl "FEM EquationMagnetodynamic2D/pl") |
|                                                                                                     |

## Opis

To równanie przeprowadza analizę z użyciem [równań Maxwella](https://pl.wikipedia.org/wiki/R%C3%B3wnania_Maxwella).

Informacje o teorii stojącej za tym równaniem można znaleźć w dokumencie [Elmer models manual](http://www.elmerfem.org/blog/documentation/), w sekcji **Computation of Magnetic Fields in 3D** _(obliczenia pól magnetycznych w 3D)_.

Jeśli możliwe jest przeprowadzenie analizy 2D, prostsze sformułowanie może być uzyte skutkując krótszymi obliczeniami. Do 2D, FreeCAD wspiera [równanie magnetodynamiczne 2D](/FEM_EquationMagnetodynamic2D/pl "FEM EquationMagnetodynamic2D/pl") solvera Elmer.

## Użycie

1. Dodaj ![](/images/FEM_SolverElmer.svg) [solver Elmer](/FEM_SolverElmer/pl#Równania "FEM SolverElmer/pl")
2. Wybierz go w [widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_EquationMagnetodynamic.svg) Równanie magnetodynamiczne.
   - Wybierz opcję **Rozwiąż → Równania elektromagnetyczne → Równanie magnetodynamiczne** z menu.
4. Zmień [ustawienia solvera dla równania](#Ustawienia_solvera) lub [ogólne ustawienia solvera](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl") jeśli to konieczne.
5. Zalecane jest ustawienie w [ustawieniach solvera dla układu liniowego](/FEM_SolverElmer_SolverSettings/pl#Układ_liniowy "FEM SolverElmer SolverSettings/pl") właściwości DANE**Linear Iterative Method** na **BiCGStabl** , właściwości DANE**BiCGstabl Degree** na **4** zaś właściwości DANE**Linear Preconditioning** na **None**. To zapewnia rozwiązanie równania w większości przypadków. Po uzyskaniu rozwiązania, te parametry można zmienić w razie potrzeby.

## Ustawienia solvera

Dla ogólnych ustawień solvera zobacz [konfigurację solvera Elmer](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl").

Równanie magnetodynamiczne posiada następujące specjalne ustawieniaː

### Układ liniowy

- DANE**Linear System Refactorize**: Refaktoryzuje macierz układu.

### Magnetodynamiczne

- DANE**Angular Frequency**: Częstotliwość wzbudzenia harmonicznego. Używana tylko jeśli DANE**Is Harmonic** jest ustawione na `Prawda`.
- DANE**Automated Source Projection BCs**: Zobacz dokument [Elmer models manual](https://www.elmerfem.org/blog/documentation/), sekcję _Computation of Magnetic Fields in 3D_ aby uzyskać więcej informacji.
- DANE**FixInput Current Density**: Zapewnia zbieżność gęstości prądu.
- DANE**Is Harmonic**: Czy siła elektromotoryczna jest harmonicznie wzbudzana (prąd stały). Jeśli ta właściwość jest ustawiona na `Prawda` to właściwość DANE**Angular Frequency** musi mieć wartość > 0.
- DANE**Lagrange Gauge Penalization Coefficient**: Zobacz dokument [Elmer models manual](http://www.elmerfem.org/blog/documentation/), sekcję _Computation of Magnetic Fields in 3D_ aby uzyskać więcej informacji.
- DANE**Quadratic Approximation**: Umożliwia aproksymację drugiego rzędu prądu zasilania.  
  **Uwaga:** Domyślny rząd [siatek Gmsh](/FEM_MeshGmshFromShape/pl "FEM MeshGmshFromShape/pl") we FreeCAD to drugi. Przy korzystaniu z siatek drugiego rzędu, konieczne jest ustawienie tej właściwości na `Prawda`. W innym wypadku wystąpi błąd: _ERROR:: GetEdgeBasis: Can't handle but linear elements, sorry._  
  Jednak dla większości zastosowań siatki pierwszego rzędu są wystarczające. Wyjątek stanowi przypadek, gdy filtr izokonturowy powinien być użyty do wizualizacji wyników. Wtedy użycie siatki drugiego rzędu, a więc również ustawienie właściwości DANE**Quadratic Approximation** na `Prawda` jest zalecane.
- DANE**Static Conductivity**: Zobacz dokument [Elmer models manual](https://www.elmerfem.org/blog/documentation/), sekcję _Computation of Magnetic Fields in 3D_ aby uzyskać więcej informacji.
- DANE**Use Lagrange Gauge**: Zobacz dokument [Elmer models manual](https://www.elmerfem.org/blog/documentation/), sekcję _Computation of Magnetic Fields in 3D_ aby uzyskać więcej informacji.
- DANE**Use Piola Transform**: Musi być `Prawda` jeśli funkcje bazowe do interpolacji elementu krawędziowego są wybrane do bycia członkami rodziny optymalnych krawędzi elementów lub jeśli używana jest aproksymacja drugiego rzędu.
- DANE**Use Tree Gauge**: Zobacz dokument [Elmer models manual](https://www.elmerfem.org/blog/documentation/), sekcję _Computation of Magnetic Fields in 3D_ aby uzyskać więcej informacji. Właściwość ta będzie ignorowana jeśli DANE**Use Piola Transform** jest ustawione na `Prawda`.

## Wyniki

- DANE**Calculate Current Density**: Wyznacza [gęstość prądu elektrycznego](https://pl.wikipedia.org/wiki/G%C4%99sto%C5%9B%C4%87_pr%C4%85du_elektrycznego).
- DANE**Calculate Electric Field**: Wyznacza [wektorowe pole elektryczne](https://pl.wikipedia.org/wiki/Pole_elektryczne).
- DANE**Calculate Elemental Fields**: Wyznacza pola elektromagnetyczne w każdym elemencie siatki. Może to być przydatne do poszukiwania nieciągłości w siatkach.  
  **Uwaga**: obecnie FreeCAD nie może poprawnie wyświetlić tego wyniku. Nie ma on więc praktycznego zastosowania na ten moment.
- DANE**Calculate Harmonic Loss**: Wyznacza liniową i kwadratową harmoniczną utratę mocy. Zobacz dokument [Elmer models manual](https://www.elmerfem.org/blog/documentation/), sekcję _Loss Estimation Using the Fourier Series_ aby uzyskać więcej informacji.
- DANE**Calculate Joule Heating**: Oblicza [grzanie Joule'a](https://en.wikipedia.org/wiki/Joule_heating).
- DANE**Calculate Magnetic Strength**: Wyznacza [siłę pola magnetycznego](https://pl.wikipedia.org/wiki/Pole_magnetyczne).
- DANE**Calculate Maxwell Stress**: Wyznacza pole [tensora naprężeń Maxwella](https://en.wikipedia.org/wiki/Maxwell_stress_tensor).
- DANE**Calculate Nodal Fields**: Wyznacza pola w każdym węźle siatki. Domyślnie ustawione na `Prawda`. Jeśli żadna inna właściwość DANE**Calculate \*** nie jest ustawiona na `Prawda` to wyznacza tylko gęstość strumienia magnetycznego.
- DANE**Calculate Nodal Forces**: Wyznacza siły dla każdego węzła siatki. Wyniki mogą być użyte do dalszej analizy mechanicznej.
- DANE**Calculate Nodal Heating**: Wyznacza pole skalarowe grzania Joule'a dla każdego węzła siatki.

## Informacje o cechach analizy

Równanie magnetodynamiczne uwzględnia następujące cechy analizy jeśli są zdefiniowane:

- ![](/images/FEM_ConstraintElectrostaticPotential.svg) [Warunek brzegowy potencjału elektrostatycznego](/FEM_ConstraintElectrostaticPotential/pl "FEM ConstraintElectrostaticPotential/pl")
- ![](/images/FEM_ConstraintCurrentDensity.svg) [Warunek brzegowy gęstości prądu](/FEM_ConstraintCurrentDensity/pl "FEM ConstraintCurrentDensity/pl")
- ![](/images/FEM_ConstraintMagnetization.svg) [Warunek brzegowy magnetyzacji](/FEM_ConstraintMagnetization/pl "FEM ConstraintMagnetization/pl")
- ![](/images/FEM_ConstantVacuumPermittivity.svg) [Zdefiniuj przenikalność elektryczną próżni](/FEM_ConstantVacuumPermittivity/pl "FEM ConstantVacuumPermittivity/pl")

## Wyniki

Dostępne wyniki zależą od [ustawień solvera](#Ustawienia_solvera). Jeśli żadna z właściwości DANE**Calculate \*** nie została ustawiona na `Prawda` to obliczany jest tylko potencjał elektryczny (nazwany **av** w wynikach). W przeciwnym wypadku dostępne będą też odpowiednie dodatkowe wyniki.

Możliwe wyniki to:

- Gęstość prądu w

  A

  /

  m

  2
  {\displaystyle {\rm {A/m^{2}}}}
  ![{\displaystyle {\rm {A/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/43867b3d6808de93dfdf66697429ca88013a2368)

- Wartości wektora pola elektrycznego w

  V

  /
  m
  {\displaystyle {\rm {V/m}}}
  ![{\displaystyle {\rm {V/m}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4fcd8f7093f303ba6608e014c763a4df6837819a)

- Harmoniczna utrata mocy w

  W
  {\displaystyle {\rm {W}}}
  ![{\displaystyle {\rm {W}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/348101b89aedeceb2ebc93991ada7c21040495b7)

- Gęstość strumienia magnetycznego w

  T
  {\displaystyle {\rm {T}}}
  ![{\displaystyle {\rm {T}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/36c6ae2607b1fee1a67ea90ada529384f2d435ca)

- Wartości tensora naprężeń Maxwella w

  A
  s

  /

  m

  3
  {\displaystyle {\rm {As/m^{3}}}}
  ![{\displaystyle {\rm {As/m^{3}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1c4023218c46a9838fef5aecb785149f5d42b53a)

- Siła pola magnetycznego w

  A

  /
  m
  {\displaystyle {\rm {A/m}}}
  ![{\displaystyle {\rm {A/m}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8a9bff2cfdd6baeb5d1214e018cb8a560247eb46)

- Siła węzłowa w

  N
  {\displaystyle {\rm {N}}}
  ![{\displaystyle {\rm {N}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8a5ac694020ec28aa0bbf32e3cee832638c38cb9)

- Grzanie Joule'a w

  J
  {\displaystyle {\rm {J}}}
  ![{\displaystyle {\rm {J}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/77a638267bd97d1b235d2c7eabef24adfcf44530)

- Potencjał w

  V
  {\displaystyle {\rm {V}}}
  ![{\displaystyle {\rm {V}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/de56ca37a64ca666d4f60a961bafffb588cfe87f)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationMagnetodynamic/pl&oldid=1569465>"
