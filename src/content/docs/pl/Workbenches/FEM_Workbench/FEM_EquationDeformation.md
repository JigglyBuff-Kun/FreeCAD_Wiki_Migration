---
title: MES Równanie deformacji
---

|                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------ |
| MES: Równanie deformacji                                                                                                             |
| Lokalizacja w menu                                                                                                                   |
| Rozwiąż → Równania mechaniczne → Równanie deformacji                                                                                 |
| Środowisko pracy                                                                                                                     |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                                                                          |
| Domyślny skrót                                                                                                                       |
| _brak_                                                                                                                               |
| Wprowadzono w wersji                                                                                                                 |
| 0.21                                                                                                                                 |
| Zobacz także                                                                                                                         |
| [Równanie elastyczności](/FEM_EquationElasticity/pl "FEM EquationElasticity/pl"), [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                                                                                                      |

## Opis

To równanie opisuje nieliniowo sprężystą deformację ciał stałych.

Informacje o teorii stojącej za tym równaniem można znaleźć w dokumencie [Elmer models manual](http://www.elmerfem.org/blog/documentation/), w sekcji **Finite Elasticity** _(nieliniowa sprężystość)_.

## Użycie

1. Dodaj ![](/images/FEM_SolverElmer.svg) [solver Elmer](/FEM_SolverElmer/pl#Równania "FEM SolverElmer/pl")
2. Wybierz go w [widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Istnieje kilka sposobów na wywołanie tego polecenia:
4. Wciśnij przycisk ![](/images/FEM_EquationDeformation.svg) Równanie deformacji.
   - Wybierz opcję **Rozwiąż → Równania mechaniczne → Równanie deformacji** z menu.
5. Zmień [ustawienia solvera dla równania](#Ustawienia_solvera) lub [ogólne ustawienia solvera](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl") jeśli to konieczne.

## Ustawienia solvera

Dla ogólnych ustawień solvera zobacz [ustawienia solvera Elmer](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl").

Równanie deformacji posiada następujące specjalne ustawienia:

- DANE**Calculate Pangle**: Czy kąty główne mają być wyznaczone.
- DANE**Calculate Principal**: Czy wszystkie naprężenia mają być wyznaczone.
- DANE**Calculate Strains**: Czy odkształcenia mają być wyznaczone. Wyznaczy też naprężenia, nawet jeśli DANE**Calculate Principal** lub DANE**Calculate Stresses** jest ustawione na `Fałsz`.
- DANE**Calculate Stresses**: Czy naprężenia mają być wyznaczone. W porównaniu z DANE**Calculate Principal**, naprężenia zredukowane wg kryterium Tresci i naprężenia główne nie zostaną wyznaczone.
- DANE**Initialize State Variables**: Zobacz instrukcję Elmera aby uzyskać więcej informacji.
- DANE**Mixed Formulation**: Zobacz instrukcję Elmera aby uzyskać więcej informacji.
- DANE**Neo Hookean Model**: Używa modelu materiałowego neo-Hookean.
- DANE**Variable**: Zmienna dla równania deformacji. Zmień tam _3_ na _2_ jeśli masz geometrię 2D. Dla szczególnego przypadku gdy DANE**Mixed Formulation** i DANE**Neo Hookean Model** są ustawione na `Prawda`, wartość zmiennej musi być przestrzenią geometrii + 1, więc dla 3D należy zmienić wartość z _3_ na _4_.

Równanie:

- DANE**Plane Stress**: Wyznacza rozwiązanie zgodnie z teorią płaskiego stanu naprężeń. Stosowane tylko do geometrii 2D.

## Informacje o cechach analizy

Równanie deformacji uwzględnia następujące cechy analizy jeśli są zdefiniowane:

- ![](/images/FEM_ConstraintFixed.svg) [Warunek brzegowy utwierdzenia](/FEM_ConstraintFixed/pl "FEM ConstraintFixed/pl")
- ![](/images/FEM_ConstraintDisplacement.svg) [Warunek brzegowy przemieszczenia](/FEM_ConstraintDisplacement/pl "FEM ConstraintDisplacement/pl")
- ![](/images/FEM_ConstraintForce.svg) [Obciążenie siłą](/FEM_ConstraintForce/pl "FEM ConstraintForce/pl")
- ![](/images/FEM_ConstraintInitialTemperature.svg) [Warunek początkowy temperatury](/FEM_ConstraintInitialTemperature/pl "FEM ConstraintInitialTemperature/pl")
- ![](/images/FEM_ConstraintPressure.svg) [Obciążenie ciśnieniem](/FEM_ConstraintPressure/pl "FEM ConstraintPressure/pl")
- ![](/images/FEM_ConstraintSelfWeight.svg) [Obciążenie grawitacją](/FEM_ConstraintSelfWeight/pl "FEM ConstraintSelfWeight/pl")
- ![](/images/FEM_ConstraintSpring.svg) [Sprężyna](/FEM_ConstraintSpring/pl "FEM ConstraintSpring/pl")

### Uwaga

- Oprócz analiz 2D, dla wszystkich cech analizy istotne jest żeby były zdefiniowane dla ścian. Cechy w 3D przypisane do linii i wierzchołków nie są rozpoznawane przez solver Elmer.

## Wyniki

Dostępne wyniki zależą od [ustawień solvera](#Ustawienia_solvera). Jeśli żadna z właściwości DANE**Calculate \*** nie została ustawiona na `Prawda` to obliczone zostaną tylko przemieszczenia. W przeciwnym wypadku dostępne będą też odpowiednie dodatkowe wyniki.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationDeformation/pl&oldid=1569437>"
