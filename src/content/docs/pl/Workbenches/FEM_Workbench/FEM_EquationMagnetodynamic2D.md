---
title: MES Równanie magnetodynamiczne 2D
---

|                                                                                              |
| -------------------------------------------------------------------------------------------- |
| MES: Równanie magnetodynamiczne 2D                                                           |
| Lokalizacja w menu                                                                           |
| Rozwiąż → Równania elektromagnetyczne → Równanie magnetodynamiczne 2D                        |
| Środowisko pracy                                                                             |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                                  |
| Domyślny skrót                                                                               |
| _brak_                                                                                       |
| Wprowadzono w wersji                                                                         |
| 0.21                                                                                         |
| Zobacz także                                                                                 |
| [Równanie magnetodynamiczne](/FEM_EquationMagnetodynamic/pl "FEM EquationMagnetodynamic/pl") |
|                                                                                              |

## Opis

To równanie przeprowadza wersję 2D analizy [równań Maxwella](https://pl.wikipedia.org/wiki/R%C3%B3wnania_Maxwella) gdy niewiadomą jest składowa z (lub φ).

Informacje o teorii stojącej za tym równaniem można znaleźć w dokumencie [Elmer models manual](http://www.elmerfem.org/blog/documentation/), w sekcji **Computation of Magnetic Fields in 2D** _(obliczenia pól magnetycznych w 2D)_.

Do bardziej ogólnych analiz za pomocą równań Maxwella w 3D FreeCAD wspiera [równanie magnetodynamiczne](/FEM_EquationMagnetodynamic/pl "FEM EquationMagnetodynamic/pl"). Jednak jeśli możliwe jest przeprowadzenie analizy w 2D to jest to zalecane, ponieważ sformułowanie jest prostsze, a więc obliczenia trwają krócej.

## Użycie

1. Dodaj ![](/images/FEM_SolverElmer.svg) [solver Elmer](/FEM_SolverElmer/pl#Równania "FEM SolverElmer/pl")
2. Wybierz go w [widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Istnieje kilka sposobów na wywołanie tego polecenia.
   - Wciśnij przycisk ![](/images/FEM_EquationMagnetodynamic2D.svg) Równanie magnetodynamiczne 2D.
   - Wybierz opcję **Rozwiąż → Równania elektromagnetyczne → Równanie magnetodynamiczne 2D** z menu.
4. Zmień [ustawienia solvera dla równania](#Ustawienia_solvera) lub [ogólne ustawienia solvera](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl") jeśli to konieczne.

## Ustawienia solvera

Dla ogólnych ustawień solvera zobacz [konfigurację solvera Elmer](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl").

Równanie magnetodynamiczne 2D posiada następujące specjalne ustawienia:

- DANE**Angular Frequency**: Częstotliwość wzbudzenia harmonicznego. Używana tylko jeśli DANE**Is Harmonic** jest ustawione na `Prawda`.
- DANE**Calculate Current Density**: Wzynacza [gęstość prądu](https://pl.wikipedia.org/wiki/G%C4%99sto%C5%9B%C4%87_pr%C4%85du_elektrycznego).
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
- DANE**Is Harmonic**: Czy siła elektromotoryczna jest harmonicznie wzbudzana (prąd stały). Jeśli ta właściwość jest ustawiona na `Prawda` to właściwość DANE**Angular Frequency** musi mieć wartość > 0.

## Informacje o cechach analizy

Równanie magnetodynamiczne 2D uwzględnia następujące cechy analizy jeśli są zdefiniowane:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationMagnetodynamic2D/pl&oldid=1569439>"
