---
title: MES Równanie przepływu prądu stałego
---

|                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MES: Równanie przepływu prądu stałego                                                                                                                                                                                                                                                                      |
| Lokalizacja w menu                                                                                                                                                                                                                                                                                         |
| Rozwiąż → Równania elektromagnetyczne → Równanie przepływu prądu stałego                                                                                                                                                                                                                                   |
| Środowisko pracy                                                                                                                                                                                                                                                                                           |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                                                                                                                                                                                                                                                |
| Domyślny skrót                                                                                                                                                                                                                                                                                             |
| _brak_                                                                                                                                                                                                                                                                                                     |
| Wprowadzono w wersji                                                                                                                                                                                                                                                                                       |
| 1.1                                                                                                                                                                                                                                                                                                        |
| Zobacz także                                                                                                                                                                                                                                                                                               |
| [Warunek brzegowy potencjału elektrostatycznego](/FEM_ConstraintElectrostaticPotential/pl "FEM ConstraintElectrostaticPotential/pl"), [Warunek brzegowy gęstości prądu](/FEM_ConstraintCurrentDensity/pl "FEM ConstraintCurrentDensity/pl"), [Równanie ciepła](/FEM_EquationHeat/pl "FEM EquationHeat/pl") |
|                                                                                                                                                                                                                                                                                                            |

## Opis

To równanie przeprowadza analizy przepływu prądu stałego. Rozwiązuje ono potencjał elektryczny w ośrodku przewodzącym, pozwalając na wyznaczenie prądów objętościowych i strat mocy elektrycznej ([prawo Joule'a](<https://pl.wikipedia.org/wiki/Prawo_Joule%E2%80%99a_(pr%C4%85d_elektryczny)>)).

Informacje o teorii stojącej za tym równaniem można znaleźć w dokumencie [Elmer models manual](https://www.elmerfem.org/blog/documentation/), w sekcji **Static Current Conduction** _(przepływ prądu stałego)_.

## Użycie

1. Dodaj ![](/images/FEM_SolverElmer.svg) [solver Elmer](/FEM_SolverElmer/pl#Równania "FEM SolverElmer/pl").
2. Wybierz go w [widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_EquationStaticCurrent.svg) Równanie przepływu prądu stałego.
   - Wybierz opcję **Rozwiąż → Równania elektromagnetyczne → Równanie przepływu prądu stałego** z menu.
4. Zmień [ustawienia solvera dla równania](#Ustawienia_solvera) lub [ogólne ustawienia solvera](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl") jeśli to konieczne.

## Ustawienia solvera

Dla ogólnych ustawień solvera zobacz [konfigurację solvera Elmer](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl").

Równanie przepływu prądu stałego posiada następujące specjalne ustawienia:

- DANE**Calculate Joule Heating**: Oblicza ciepło Joule'a.
- DANE**Calculate Nodal Heating**: Oblicza strumień ciepła dla węzłów, który może być użyty do optymalnego sprzężenia równania ciepła podczas używania pasujących do siebie siatek MES.
- DANE**Calculate Volume Current**: Oblicza prąd objętościowy.
- DANE**Constant Weights**: Włącza stałe ważenie dla wyników.
- DANE**Current**: Kontrolna wartość prądu.
- DANE**Current Control**: Stosuje kontrolę prądu z zadaną wartością prądu.
- DANE**Heat Source**: Używa ciepło Joule'a jako źródło ciepła w połączeniu z równaniem ciepła.
- DANE**Power**: Kontrolna wartość mocy.
- DANE**Power Control**: Stosuje kontrolę mocy z zadaną wartością mocy grzania.

## Informacje o cechach analizy

Równanie przepływu prądu stałego uwzględnia następujące cechy analizy jeśli są zdefiniowane:

- ![](/images/FEM_ConstraintElectrostaticPotential.svg) [Warunek brzegowy potencjału elektrostatycznego](/FEM_ConstraintElectrostaticPotential/pl "FEM ConstraintElectrostaticPotential/pl")
- ![](/images/FEM_ConstraintCurrentDensity.svg) [Warunek brzegowy gęstości prądu](/FEM_ConstraintCurrentDensity/pl "FEM ConstraintCurrentDensity/pl")

### Uwagi

Oprócz analiz 2D, dla ![](/images/FEM_ConstraintElectrostaticPotential.svg) [warunków brzegowych potencjału elektrostatycznego](/FEM_ConstraintElectrostaticPotential/pl "FEM ConstraintElectrostaticPotential/pl") ważne jest żeby działały na ścianie lub objętości. Warunki brzegowe przypisane do linii lub wierzchołków nie będą rozpoznawane przez solver Elmer.

## Wyniki

Dostępne wyniki zależą od [ustawień solvera](#Ustawienia_solvera). Jeśli żadna z właściwości DANE**Calculate \*** nie została ustawiona na `Prawda` to obliczony zostanie tylko potencjał elektryczny. W przeciwnym wypadku dostępne będą też odpowiednie dodatkowe wyniki.

Możliwe wyniki to:

- Ciepło Joule'a w

  W

  /

  m

  3
  {\displaystyle {\rm {W/m^{3}}}}
  ![{\displaystyle {\rm {W/m^{3}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4705de6ab2ed2eb79b03ed63c1763185126cf1fc)

- Węzłowe ciepło Joule’a w

  W
  {\displaystyle {\rm {W}}}
  ![{\displaystyle {\rm {W}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/348101b89aedeceb2ebc93991ada7c21040495b7)

- Prąd objętościowy w

  A

  /

  m

  2
  {\displaystyle {\rm {A/m^{2}}}}
  ![{\displaystyle {\rm {A/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/43867b3d6808de93dfdf66697429ca88013a2368)

- Potencjał w

  V
  {\displaystyle {\rm {V}}}
  ![{\displaystyle {\rm {V}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/de56ca37a64ca666d4f60a961bafffb588cfe87f)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationStaticCurrent/pl&oldid=1569427>"
