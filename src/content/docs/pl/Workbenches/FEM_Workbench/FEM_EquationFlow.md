---
title: MES Równanie przepływu
---

|                                             |
| ------------------------------------------- |
| MES: Równanie przepływu                     |
| Lokalizacja w menu                          |
| Rozwiąż → Równanie przepływu                |
| Środowisko pracy                            |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl") |
| Domyślny skrót                              |
| _brak_                                      |
| Wprowadzono w wersji                        |
| 0.17                                        |
| Zobacz także                                |
| _brak_                                      |
|                                             |

## Opis

To równanie analizuje przepływ płynów lepkich przy pomocy [równań Naviera-Stokesa](https://pl.wikipedia.org/wiki/R%C3%B3wnania_Naviera-Stokesa).

Informacje o teorii stojącej za tym równaniem można znaleźć w dokumencie [Elmer models manual](https://www.elmerfem.org/blog/documentation/), w sekcji **Navier-Stokes Equations** _(równania Naviera-Stokesa)_.

## Użycie

1. Dodaj ![](/images/FEM_SolverElmer.svg) [solver Elmer](/FEM_SolverElmer/pl#Równania "FEM SolverElmer/pl").
2. Wybierz go w [widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_EquationFlow.svg) Równanie przepływu.
   - Wybierz opcję **Rozwiąż → Równanie przepływu** z menu.
4. Zmień [ustawienia solvera dla równania](#Ustawienia_solvera) lub [ogólne ustawienia solvera](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl") jeśli to konieczne.

## Ustawienia solvera

Dla ogólnych ustawień solvera zobacz [konfigurację solvera Elmer](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl").

Równanie przeplywu posiada następujące specjalne ustawienia:

- DANE**Div Discretization**: Do ustawienia na `Prawda` w przypadku przepływu nieściśliwego dla bardziej stabilnej dyskretyzacji gdy rośnie [liczba Reynoldsa](https://pl.wikipedia.org/wiki/Liczba_Reynoldsa).
- DANE**Flow Model**: Model przepływu jaki powinien być użyty. Domyślne _Full_ uwzględnia człony konwekcji i pochodnych po czasie w modelu. _No convection_ wyłącza człony konwekcyjne zaś _Stokes_ wyłącza człony konwekcyjne i (jawne) człony pochodnych po czasie.
- DANE**Gradp Discretization**: Jeśli ustawione na `Prawda`, może być użyty ciśnieniowy [warunek brzegowy Dirichleta](https://pl.wikipedia.org/wiki/Warunek_brzegowy_Dirichleta). Ponadto, strumień masy jest dostępny jako naturalny warunek brzegowy.
- DANE**Variable**: Opcjonalne tylko do analiz 2D: Możesz zmienić domyślną wartość _3_ na _2_.  
  **Uwaga**: W takim wypadku żaden z warunków brzegowych przepływu nie może mieć wprowadzonej składowej z.

Równanie:

- DANE**Convection**: Typ konwekcji do użycia w ![](/images/FEM_EquationHeat.svg) [równaniu ciepła](/FEM_EquationHeat/pl "FEM EquationHeat/pl").  
  **Uwaga**: Do przepływów termicznych musi być ustawiony na _Computed_ (domyślne).
- DANE**Magnetic Induction**: Jeśli ustawione na `Prawda`, równanie indukcji magnetycznej będzie rozwiązywane razem z [równaniami Naviera-Stokesa](https://pl.wikipedia.org/wiki/R%C3%B3wnania_Naviera-Stokesa).

### Uwagi dotyczące zbieżności

Jeśli analiza z użyciem tego solvera się nie zbiega, można wypróbować następujące podejścia (w podanej kolejności)ː

1. Zmniejszyć wartość DANE**Relaxation Factor**, zobacz [ustawienia układu nieliniowego](/FEM_SolverElmer_SolverSettings/pl#Współczynnik_relaksacji "FEM SolverElmer SolverSettings/pl").
2. Zwiększyć wartość DANE**Nonlinear Newton After Iterations**, zobacz [ustawienia układu nieliniowego](/FEM_SolverElmer_SolverSettings/pl#Układ_nieliniowy "FEM SolverElmer SolverSettings/pl").
3. Zmniejszyć liczbę używanych rdzeni procesora, zobacz [preferencje MES](/FEM_Preferences/pl#Elmer "FEM Preferences/pl").
4. Zwiększyć gęstość siatki.

## Informacje o cechach analizy

Równanie przepływu uwzględnia następujące cechy analizy jeśli są zdefiniowane:

- ![](/images/FEM_ConstraintFlowVelocity.svg) [Warunek brzegowy prędkości przepływu](/FEM_ConstraintFlowVelocity/pl "FEM ConstraintFlowVelocity/pl")
- ![](/images/FEM_ConstraintInitialFlowVelocity.svg) [Warunek początkowy prędkości przepływu](/FEM_ConstraintInitialFlowVelocity/pl "FEM ConstraintInitialFlowVelocity/pl")
- ![](/images/FEM_ConstraintPressure.svg) [Obciążenie ciśnieniem](/FEM_ConstraintPressure/pl "FEM ConstraintPressure/pl")
- ![](/images/FEM_ConstraintInitialPressure.svg) [Warunek początkowy ciśnienia](/FEM_ConstraintInitialPressure/pl "FEM ConstraintInitialPressure/pl") ([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"))

### Uwagi

- Poza analizami 2D, dla wszystkich powyższych warunków brzegowych ważne jest to, żeby działały na ścianie lub objętości. Warunki brzegowe w 3D przypisane do linii lub wierzchołków nie będą rozpoznane przez solver Elmer.
- Ponieważ ![](/images/FEM_ConstraintPressure.svg) [Obciążenie ciśnieniem](/FEM_ConstraintPressure/pl "FEM ConstraintPressure/pl") może być zadane tylko na ściany, obciążenia ciśnieniem nie mogą być używane do analiz 2D.
- Jeśli nie ma ustawionego żadnego ![](/images/FEM_ConstraintPressure.svg) [obciążenia ciśnieniem](/FEM_ConstraintPressure/pl "FEM ConstraintPressure/pl"), ![](/images/FEM_ConstraintInitialPressure.svg) [warunek początkowy ciśnienia](/FEM_ConstraintInitialPressure/pl "FEM ConstraintInitialPressure/pl") będzie brany pod uwagę tylko jeśli właściwość DANE**Gradp Discretization** jest ustawiona na `Prawda`.

## Wyniki

Wynikiem są prędkość w

m

/
s
{\displaystyle {\rm {m/s}}}
![{\displaystyle {\rm {m/s}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/85ed42a2e5a4d36ef69387b1f26abef416b52669) i ciśnienie w

P
a
{\displaystyle {\rm {Pa}}}
![{\displaystyle {\rm {Pa}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c9835d51ddcf6f8ce955d02f677df5789506606a). Jeśli nie ma ustawionego żadnego ![](/images/FEM_ConstraintInitialPressure.svg) [warunku początkowego ciśnienia](/FEM_ConstraintInitialPressure/pl "FEM ConstraintInitialPressure/pl") ani ![](/images/FEM_ConstraintPressure.svg) [obciążenia ciśnieniem](/FEM_ConstraintPressure/pl "FEM ConstraintPressure/pl"), wynik ciśnienia będzie względny. Ponieważ ciśnienie musi działać na ścianie, bezwzględnych wyników ciśnienia nie da się uzyskać w przypadku analiz 2D.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationFlow/pl&oldid=1569472>"
