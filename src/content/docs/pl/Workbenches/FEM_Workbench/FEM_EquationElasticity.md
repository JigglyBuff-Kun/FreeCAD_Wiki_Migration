---
title: MES Równanie elastyczności
---

|                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------- |
| MES: Równanie elastyczności                                                                                                         |
| Lokalizacja w menu                                                                                                                  |
| Rozwiąż → Równania mechaniczne → Równanie elastyczności                                                                             |
| Środowisko pracy                                                                                                                    |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                                                                         |
| Domyślny skrót                                                                                                                      |
| _brak_                                                                                                                              |
| Wprowadzono w wersji                                                                                                                |
| 0.17                                                                                                                                |
| Zobacz także                                                                                                                        |
| [Równanie deformacji](/FEM_EquationDeformation/pl "FEM EquationDeformation/pl"), [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                                                                                                     |

## Opis

To równanie opisuje właściwości mechaniczne ciał stałych.

Informacje o teorii stojącej za tym równaniem można znaleźć w dokumencie [Elmer models manual](http://www.elmerfem.org/blog/documentation/), w sekcji **Linear Elasticity** _(liniowa sprężystość)_.

## Użycie

1. Dodaj ![](/images/FEM_SolverElmer.svg) [solver Elmer](/FEM_SolverElmer/pl#Równania "FEM SolverElmer/pl")
2. Wybierz go w [widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_EquationElasticity.svg) Równanie elastyczności.
   - Wybierz opcję **Rozwiąż → Równania mechaniczne → Równanie elastyczności** z menu.
4. Zmień [ustawienia solvera dla równania](#Ustawienia_solvera) lub [ogólne ustawienia solvera](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl") jeśli to konieczne.

**Uwaga**: Do analiz z nieliniową sprężystością musisz skorzystać z ![](/images/FEM_EquationDeformation.svg) [równania deformacji](/FEM_EquationDeformation/pl "FEM EquationDeformation/pl") _([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"))_. Równanie elastyczności służy tylko do liniowej sprężystości.

**Uwaga**: Jeśli używasz więcej niż jednego rdzenia procesora dla solvera _([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"))_, nie możesz korzystać z domyślnych ustawień solvera. Używanie tylko jednego rdzenia i domyślnych ustawień solvera jest często szybsze niż używanie wielu rdzeni, ponieważ solver elastyczności jest szybki tylko gdy właściwość DANE**Linear Solver Type** jest ustawiona na _Direct_ _(domyślne ustawienie, opisane [tutaj](/FEM_SolverElmer_SolverSettings/pl#Układ_liniowy "FEM SolverElmer SolverSettings/pl"))_. Do obliczeń na wielu rdzeniach można używać tylko właściwości DANE**Linear Direct Method** ustawionej na _MUMPS_. Jednak MUMPS nie jest dostępne za darmo do bezpośredniego pobrania.

## Ustawienia solvera

Dla ogólnych ustawień solvera zobacz [konfigurację solvera Elmer](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl").

Równanie elastyczności posiada następujące specjalne ustawienia:

- DANE**Calculate Pangle**: Czy kąty główne mają być wyznaczone.
- DANE**Calculate Principal**: Czy wszystkie naprężenia mają być wyznaczone.
- DANE**Calculate Strains**: Czy odkształcenia mają być wyznaczone. Wyznaczy też naprężenia, nawet jeśli DANE**Calculate Principal** lub DANE**Calculate Stresses** jest ustawione na `Fałsz`.
- DANE**Calculate Stresses**: Czy naprężenia mają być wyznaczone. W porównaniu z DANE**Calculate Principal**, naprężenia zredukowane wg kryterium Tresci i naprężenia główne nie zostaną wyznaczone.
- DANE**Constant Bulk System**: Zobacz instrukcję Elmera aby uzyskać więcej informacji.
- DANE**Displace Mesh**: Czy siatka może być zdeformowana. Domyślnie jest to ustawione na `Prawda` i musi być zmienione na `Fałsz` do analiz częstotliwości drgań własnych.
- DANE**Fix Displacement**: Czy przemieszczenia lub siły są ustawione. Tym samym DANE**Model Lumping** jest automatycznie używane.
- DANE**Geometric Stiffness**: Uwzględnia sztywność geometryczną ciała.
- DANE**Incompressible**: Obliczanie materiału nieściśliwego w połączeniu z modelem lepkosprężystym Maxwella i niestandardową wartością DANE**Variable**.
- DANE**Maxwell Material**: Oblicza lepkosprężysty model materiału.
- DANE**Model Lumping**: Korzysta z [modelu jednowymiarowego](https://en.wikipedia.org/wiki/Lumped-element_model).
- DANE**Model Lumping Filename**: Plik do zapisu wyników z modelu jednowymiarowego.
- DANE**Stability Analysis**: Jeśli ta właściwość ma wartość `Prawda` to DANE**Eigen Analysis** staje się analizą stateczności (wyboczenia). W innym wypadku przeprowadzana jest analiza modalna (częstotliwości drgań własnych).
- DANE**Update Transient System**: Zobacz instrukcję solvera Elmer aby uzyskać więcej informacji.
- DANE**Variable**: Zmienna dla równania elastyczności. Należy to zmieniać tylko jeśli właściwość DANE**Incompressible** jest ustawiona na `Prawda` zgodnie z dokumentacją Elmera.

Wartości własne:

- DANE**Eigen Analysis**: Czy analiza problemu własnego ma być przeprowadzona (wyznaczanie postaci i częstotliwości drgań własnych).
- DANE**Eigen System Complex**: Ta właściwość powinna być ustawiona na `Prawda` jeśli układ własny jest zespolony. Musi być ustawiona na `Fałsz` dla analiz drgań własnych z tłumieniem.
- DANE**Eigen System Compute Residuals**: Oblicza residua układu wartości własnych.
- DANE**Eigen System Damped**: Ustawia tłumioną analizę drgań własnych. Może być używane tylko gdy właściwość DANE**[Linear Solver Type](/FEM_SolverElmer_SolverSettings/pl#Układ_liniowy "FEM SolverElmer SolverSettings/pl")** jest ustawiona na _Iterative_.
- DANE**Eigen System Select**: Wybór które wartości własne mają być wyznaczone. Zauważ, że wybór \*Largest\*\* _(najwyższe)_ powoduje, że analiza trwa w nieskończoność _(aktualne w sierpniu 2022 r.)_.
- DANE**Eigen System Tolerance**: Tolerancja zbieżności dla solvera iteracyjnego układu własnego. Domyślna wartość to 100 razy DANE**[Linear Tolerance](/FEM_SolverElmer_SolverSettings/pl#Układ_liniowy "FEM SolverElmer SolverSettings/pl")**.
- DANE**Eigen System Values**: Numer najwyższej postaci drgań własnych jaka ma być wyznaczona.

Równanie:

- DANE**Plane Stress**: Wyznacza rozwiązanie zgodnie z teorią płaskiego stanu naprężeń. Stosowane tylko do geometrii 2D.

## Informacje o cechach analizy

Równanie elastyczności uwzględnia następujące cechy analizy jeśli są zdefiniowane:

- ![](/images/FEM_ConstraintFixed.svg) [Warunek brzegowy utwierdzenia](/FEM_ConstraintFixed/pl "FEM ConstraintFixed/pl")
- ![](/images/FEM_ConstraintDisplacement.svg) [Warunek brzegowy przemieszczenia](/FEM_ConstraintDisplacement/pl "FEM ConstraintDisplacement/pl")
- ![](/images/FEM_ConstraintForce.svg) [Obciążenie siłą](/FEM_ConstraintForce/pl "FEM ConstraintForce/pl")
- ![](/images/FEM_ConstraintInitialTemperature.svg) [Warunek początkowy temperatury](/FEM_ConstraintInitialTemperature/pl "FEM ConstraintInitialTemperature/pl")
- ![](/images/FEM_ConstraintPressure.svg) [Obciążenie ciśnieniem](/FEM_ConstraintPressure/pl "FEM ConstraintPressure/pl")
- ![](/images/FEM_ConstraintSelfWeight.svg) [Obciążenie grawitacją](/FEM_ConstraintSelfWeight/pl "FEM ConstraintSelfWeight/pl")
- ![](/images/FEM_ConstraintSpring.svg) [Sprężyna](/FEM_ConstraintSpring/pl "FEM ConstraintSpring/pl")

### Uwaga

- Oprócz analiz 2D, dla wszystkich cech analizy istotne jest żeby były zdefiniowane dla ścian. Cechy w 3D przypisane do linii i wierzchołków nie są rozpoznawane przez solver Elmer.

## Analiza drgań własnych

Aby przeprowadzić analizę drgań własnych _(wyznaczanie postaci i częstotliwości drgań własnych)_ należy:

1. Ustawić DANE**Eigen Analysis** na `Prawda`.
2. Ustawić DANE**Displace Mesh** na `Fałsz`.
3. Ustawić DANE**Eigen System Values** na najwyższy numer postaci drgań własnych jaką chcesz uzyskać. Im mniejsza ta liczba, tym szybsze obliczenia, ponieważ wyższe postaci drgań własnych mogą być pominięte.
4. Dodać [warunek brzegowy utwierdzenia](/FEM_ConstraintFixed/pl "FEM ConstraintFixed/pl") i ustawić przynajmniej jedną ścianę ciała jako utwierdzoną.
5. Uruchomić solver.

Wysoce zalecane jest ustawianie DANE**Linear Solver Type** na _Direct_ _(domyślne)_, ponieważ przyspiesza to znacząco obliczenia i zwiększa dokładność wyników.

## Analiza wyboczenia

Aby przeprowadzić liniową analizę wyboczeniową należy zrobić to samo co w przypadku [Analizy drgań własnych](#Analiza_drgań_własnych) i dodatkowo:

- Ustawić DANE**Stability Analysis** na `Prawda`

## Wyniki

Dostępne wyniki zależą od [ustawień solvera](#Ustawienia_solvera). Jeśli żadna z właściwości DANE**Calculate \*** nie została ustawiona na `Prawda` to obliczone zostaną tylko przemieszczenia. W przeciwnym wypadku dostępne będą też odpowiednie dodatkowe wyniki. Jeśli właściwość DANE**Eigen Analysis** została ustawiona na `Prawda` to wszystkie wyniki będą dostępne dla każdej obliczonej postaci drgań własnych.

Jeśli właściwość DANE**Eigen Analysis** została ustawiona na `Prawda` to częstotliwości drgań własnych będą zapisane na końcu dziennika solvera w jego oknie dialogowym i w dokumencie **SolverElmerOutput**, który zostanie utworzony w widoku drzewa po zakończeniu pracy solvera.

**Uwaga:** Wektor przemieszczenia postaci własnej

d
→
{\displaystyle {\vec {d}}}
![{\displaystyle {\vec {d}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3e1eb48ef8121a782f64c8453fa6f80a9ca26e2e) ma niefizyczną wartość, ponieważ wynik jest

d
→
=
c
⋅

u
→
{\displaystyle \quad {\vec {d}}=c\cdot {\vec {u}}}
![{\displaystyle \quad {\vec {d}}=c\cdot {\vec {u}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f1be0746f478e825c4e54a17871405caccf6b694)

podczas gdy

u
→
{\displaystyle {\vec {u}}}
![{\displaystyle {\vec {u}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/89c41e9cf70c5e5b56e2128a136985a75f90ba43) jest wektorem własnym zaś

c
{\displaystyle c}
![{\displaystyle c}](https://wikimedia.org/api/rest_v1/media/math/render/svg/86a67b81c2de995bd608d5b2df50cd8cd7d92455) jest liczbą zespoloną.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationElasticity/pl&oldid=1569429>"
