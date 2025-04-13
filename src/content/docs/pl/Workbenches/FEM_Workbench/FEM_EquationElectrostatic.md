---
title: MES Równanie elektrostatyczne
---

|                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MES: Równanie elektrostatyczne                                                                                                                                                                                     |
| Lokalizacja w menu                                                                                                                                                                                                 |
| Rozwiąż → Równania elektromagnetyczne → Równanie elektrostatyczne                                                                                                                                                  |
| Środowisko pracy                                                                                                                                                                                                   |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                                                                                                                                                        |
| Domyślny skrót                                                                                                                                                                                                     |
| _brak_                                                                                                                                                                                                             |
| Wprowadzono w wersji                                                                                                                                                                                               |
| 0.19                                                                                                                                                                                                               |
| Zobacz także                                                                                                                                                                                                       |
| [Równanie siły elektrostatycznej](/FEM_EquationElectricforce/pl "FEM EquationElectricforce/pl"), [MES: Przykład pojemność dwóch kul](/FEM_Example_Capacitance_Two_Balls/pl "FEM Example Capacitance Two Balls/pl") |
|                                                                                                                                                                                                                    |

## Opis

To równanie służy do przeprowadzania analiz elektrostatycznych przy pomocy [prawa Gaussa](<https://pl.wikipedia.org/wiki/Prawo_Gaussa_(elektryczno%C5%9B%C4%87)>).

Informacje o teorii stojącej za tym równaniem można znaleźć w dokumencie [Elmer models manual](http://www.elmerfem.org/blog/documentation/), w sekcji **Electrostatics** _(elektrostatyka)_.

## Użycie

1. Dodaj ![](/images/FEM_SolverElmer.svg) [solver Elmer](/FEM_SolverElmer/pl#Równania "FEM SolverElmer/pl")
2. Wybierz go w [widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_EquationElectrostatic.svg) Równanie elektrostatyczne.
   - Wybierz opcję **Rozwiąż → Równania elektromagnetyczne → Równanie elektrostatyczne** z menu.
4. Zmień [ustawienia solvera dla równania](#Ustawienia_solvera) lub [ogólne ustawienia solvera](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl") jeśli to konieczne.

## Ustawienia solvera

Dla ogólnych ustawień solvera zobacz [konfigurację solvera Elmer](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl").

Równanie elektrostatyczne posiada następujące specjalne ustawienia:

- DANE**Calculate Capacitance Matrix**: Wyznacza macierz pojemności elektrycznej. Macierz ta zawiera ładunki punktowe węzłów siatki.
- DANE**Calculate Electric Energy**: Wyznacza [potencjalną energię elektryczną](https://en.wikipedia.org/wiki/Electric_potential_energy).
- DANE**Calculate Electric Field**: Wyznacza [pole elektryczne](https://pl.wikipedia.org/wiki/Pole_elektryczne).
- DANE**Calculate Electric Flux**: Wyznacza [strumień pola elektrycznego](https://pl.wikipedia.org/wiki/Strumie%C5%84_pola_elektrycznego).
- DANE**Calculate Surface Charge**: Wyznacza [ładunek powierzchniowy](https://en.wikipedia.org/wiki/Surface_charge).
- DANE**Capacitance Matrix Filename**: Plik, w którym zapisywana jest macierz pojemności elektrycznej. Używane tylko jeśli właściwość DANE**Calculate Capacitance Matrix** jest ustawiona na `Prawda`.
- DANE**Constant Weights**: Czy używane jest stałe ważenie wyników.
- DANE**Potential Difference**: Różnica potencjałów w Voltach, dla której liczona jest pojemność elektryczna. Używane tylko jeśli właściwość DANE**Calculate Capacitance Matrix** jest ustawiona na `Fałsz`. Zatem w praktyce to ustawienie określa napięcie między elektrodami prostego kondensatora. Zauważ, że podane napięcie musi być zgodne z potencjałami zdefiniowanymi w warunku brzegowym.

## Informacje o cechach analizy

Równanie elektrostatyczne uwzględnia następujące cechy analizy jeśli są zdefiniowane:

- ![](/images/FEM_ConstraintElectrostaticPotential.svg) [Warunek brzegowy potencjału elektrostatycznego](/FEM_ConstraintElectrostaticPotential/pl "FEM ConstraintElectrostaticPotential/pl")
- ![](/images/FEM_ConstraintElectricChargeDensity.svg) [Gęstość ładunku elektrycznego](/FEM_ElectricChargeDensity/pl "FEM ElectricChargeDensity/pl") - [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")
- ![](/images/FEM_ConstantVacuumPermittivity.svg) [Zdefiniuj przenikalność elektryczną próżni](/FEM_ConstantVacuumPermittivity/pl "FEM ConstantVacuumPermittivity/pl")

### Uwaga

Oprócz analiz 2D, dla ![](/images/FEM_ConstraintElectrostaticPotential.svg) [warunków brzegowych potencjału elektrostatycznego](/FEM_ConstraintElectrostaticPotential/pl "FEM ConstraintElectrostaticPotential/pl") ważne jest żeby działały na ścianie lub objętości. Warunki brzegowe przypisane do linii lub wierzchołków nie będą rozpoznawane przez solver Elmer.

## Wyniki

Dostępne wyniki zależą od [ustawień solvera](#Ustawienia_solvera). Jeśli żadna z właściwości DANE**Calculate \*** nie została ustawiona na `Prawda` to obliczona zostanie tylko gęstość siły elektrycznej i potencjał elektryczny. W przeciwnym wypadku dostępne będą też odpowiednie dodatkowe wyniki.

Możliwe wyniki to:

- Gęstość energii elektrycznej w

  J

  /

  m

  3
  {\displaystyle {\rm {J/m^{3}}}}
  ![{\displaystyle {\rm {J/m^{3}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7ed87a7c7bc9e1ccd3164a9adcc722d5330e2bd4)

- Pole elektryczne w

  V

  /
  m
  {\displaystyle {\rm {V/m}}}
  ![{\displaystyle {\rm {V/m}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4fcd8f7093f303ba6608e014c763a4df6837819a)

- Strumień pola elektrycznego w

  A
  ⋅
  s

  /

  m

  2
  {\displaystyle {\rm {A\cdot s/m^{2}}}}
  ![{\displaystyle {\rm {A\cdot s/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0498caa2492aa6dc4af5dcccd7c95a43c3e1a3cc)

- Gęstość energii elektrycznej w

  N

  /

  m

  2
  {\displaystyle {\rm {N/m^{2}}}}
  ![{\displaystyle {\rm {N/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a90004e7cf2472e320272d782c911ff786f8be02)

- Potencjał elektryczny w

  V
  {\displaystyle {\rm {V}}}
  ![{\displaystyle {\rm {V}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/de56ca37a64ca666d4f60a961bafffb588cfe87f)

- Obciążenia potencjalne w

  C
  {\displaystyle {\rm {C}}}
  ![{\displaystyle {\rm {C}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f18a828c02c22bd8096604e61ed72fb32b171e4c)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationElectrostatic/pl&oldid=1569433>"
