---
title: MES Solver CalculiX
---

|                                                    |
| -------------------------------------------------- |
| MES: Solver CalculiX                               |
| Lokalizacja w menu                                 |
| Rozwiąż → Solver CalculiX                          |
| Środowisko pracy                                   |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")        |
| Domyślny skrót                                     |
| S X                                                |
| Wprowadzono w wersji                               |
| -                                                  |
| Zobacz także                                       |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                    |

## Opis

Narzędzie Solver CalculiX umożliwia użycie solvera [CalculiX](https://en.wikipedia.org/wiki/Calculix). Może być używane do:

1. Ustawiania parametrów analizy
2. Wybierania ścieżki roboczej
3. Uruchamiania solvera CalculiX

## Użycie

1. Obiekt ![](/images/FEM_SolverCalculixCxxtools.svg) CalculiXcxxTools jest tworzony automatycznie razem z ![](/images/FEM_Analysis.svg) [kontenerem analizy](/FEM_Analysis/pl "FEM Analysis/pl").  
   Aby utworzyć go samodzielnie, skorzystaj z jednego z poniższych sposobów:
   - Wciśnij przycisk ![](/images/FEM_SolverCalculixCxxtools.svg) **Solver CalculiX**.
   - Wybierz opcję **Rozwiąż → ![](/images/FEM_SolverCalculixCxxtools.svg) Solver CalculiX** z menu.
   - Wciśnij przycisk S a następnie X.
2. Opcjonalnie, zmień właściwości obiektu ![](/images/FEM_SolverCalculixCxxtools.svg) SolverCcxTools w [edytorze właściwości](/Property_editor/pl "Property editor/pl").
3. Dwukrotnie kliknij obiekt ![](/images/FEM_SolverCalculixCxxtools.svg) SolverCcxTools.
4. Wybierz **Typ analizy**.
5. Wciśnij przycisk Zapisz plik wejściowy .inp.
6. Wciśnij przycisk Uruchom CalculiX.

## Opcje

Wciśnij przycisk Edytuj plik .inp aby wyświetlić i ręcznie edytować plik wejściowy solvera CalculiX przed uruchomieniem analizy. W takim wypadku może być przydatne ustawienie właściwości DANE**Split Input Writer** na `Prawda`.

## Właściwości

Domyślne właściwości można ustawić w menu **Edycja → Preferencje ... → MES → CalculiX**

- DANE**Analysis Type**:

  - static - statyczna analiza naprężeń.
  - frequency - analiza modalna _(wyznaczenie częstotliwości i postaci drgań własnych)_.
  - thermomech - analiza termomechaniczna.
  - check - bez obliczeń, przeprowadza sprawdzenie danych wejściowych.
  - buckling - liniowa analiza wyboczeniowa. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

- DANE**Beam Reduced Integration** - [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"):

  - `Prawda` - używa elementów belkowych ze zredukowanym całkowaniem (B31R lub B32R), które są wymagane w przypadku korzystania z przekroju rurowego i mogą umożliwić uzyskanie [dokładnych wyników w analizach z plastycznością](https://forum.freecad.org/viewtopic.php?t=61233)
  - `Fałsz` - używa zwykłych elementów belkowych (z pełnym całkowaniem)

- DANE**Beam Shell Result Output 3D**: zwróć uwagę, że CalculiX wewnętrznie przekształca elementy 1D i 2D w elementy 3D

  - `Prawda` - wynikowa siatka będzie zawierała elementy 1D i 2D przekształcone w elementy 3D.
  - `Fałsz` - wyniki dla elementów 1D i 2D będą uśrednione w węzłach oryginalnych elementów 1D lub 2D _(np. belka poddana czystemu zginaniu będzie miała zerowe naprężenia w węzłach z powodu uśredniania)_.

- DANE**Buckling Accuracy** - [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl"): definiuje dokładność wyznaczania wartości własnych wyboczenia. W większości przypadków domyślna wartość (0.01) jest wystarczająca, ale niekiedy konieczne jest jej obniżenie (np. do 0.0001) aby uchwycić pierwszą postać wyboczenia.

- DANE**Eigenmode High Limit**: wartości własne powyżej tego limitu nie będą wyznaczane; **Uwaga**: jeśli wartości własne modelu są wyższe od tego limitu, CalculiX zakończy analizę bez wyników.

- DANE**Eigenmode Low Limit**: wartości własne poniżej tego limitu nie będą obliczane.

- DANE**Eigenmodes Count**: liczba najniższych postaci własnych do wyznaczenia.

- DANE**Geometric Nonlinearity**:

  - linear - przeprowadzona zostanie analiza liniowa jeśli model nie zawiera nieliniowego materiału.
  - nonlinear - przeprowadzona zostanie analiza nieliniowa.

- DANE**Iterations Control parameter Cutb**: definiuje drugą linię [zaawansowanych parametrów iteracji solvera CalculiX](http://www.dhondt.de/ccx_2.17.pdf#subsection.8.24). Używane jeśli właściwość DANE**Iterations Control Parameter Time Use** jest ustawiona na `Prawda`.

- DANE**Iterations Control Parameter Iter**: definiuje pierwszą linię [zaawansowanych parametrów iteracji solvera CalculiX](http://www.dhondt.de/ccx_2.17.pdf#subsection.8.24). Używane jeśli właściwość DANE**Iterations Control Parameter Time Use** jest ustawiona na `Prawda`.

- DANE**Iterations Control Parameter Time Use**

  - `Prawda` - aktywuje DANE**Iterations Control parameter Cutb** i DANE**Iterations Control Parameter Iter**.
  - `Fałsz`

- DANE**Iterations Maximum**: maksymalna liczba przyrostów, po której analiza zostanie zatrzymana.

- DANE**Iterations User Defined Incrementations**:

  - `Prawda` - automatyczna kontrola inkrementacji będzie wyłączona przez parametr DIRECT.
  - `Fałsz` - kontrola inkrementacji będzie automatyczna.

- DANE**Iterations User Defined Time Step Length**:

  - `Prawda` - aktywuje parametry DANE**Time End** i DANE**Time Initial Step**
  - `Fałsz`

- DANE**Material Nonlinearity**:

  - linear - w analizie będą uwzględnione tylko liniowe właściwości materiału.
  - nonlinear - uwzględnione będą nieliniowe właściwości materiału z obiektu ![](/images/FEM_MaterialMechanicalNonlinear.svg) [Nieliniowy materiał mechaniczny](/FEM_MaterialMechanicalNonlinear/pl "FEM MaterialMechanicalNonlinear/pl").

- DANE**Matrix Solver Type**: typ solvera do rozwiązania układu równań w analizie MES. Może znacząco wpłynąć na szybkość obliczeń i wymogi pamięci. Wybór zależy od danego modelu MES i dostępnego komputera.

  - default - automatycznie wybiera solver do rozwiązywania macierzowego układu równań w zależności od dostępnych solverów _(zwykle jest to Spooles)_.
  - [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): pastix - jeden z najszybszych solverów (obok Pardiso), dostępny (i domyślny) w oficjalnych wersjach CalculiX od ccx 2.18, może nadal powodować okazjonalne problemy
  - [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): pardiso - jeden z najszybszych solverów (obok PaStiX), ale z zamkniętym kodem źródłowym, wymaga innego pliku wykonywalnego CalculiX (ccx_dynamic) i dodatkowych bibliotek, które nie są dostarczane z FreeCAD, bardziej niezawodny niż PaStiX
  - spooles - solver bezpośredni ze wsparciem dla wielu rdzeni. Liczbę rdzeni należy ustawić we [właściwościach](/FEM_Preferences/pl#CalculiX "FEM Preferences/pl") jako _Ustawienia domyślne solvera → Liczba rdzeni CPU do użycia_.
  - iterativescaling - solver iteracyjny z najniższymi wymaganiami pamięci, odpowiedni jeśli model składa się głównie z elementów 3D.
  - iterativecholesky - solver iteracyjny z prekondycjonowaniem i niskimi wymaganiami pamięci, odpowiedni jeśli model składa się głównie z elementów 3D.

- DANE**Model Space** - [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): przełącza między analizami 3D i 2D, te drugie wymagają geometrii powierzchniowej na płaszczyźnie XY (po prawej stronie od osi Y w przypadku osiowosymetrycznym) z [definicją grubości](/FEM_ElementGeometry2D/pl "FEM ElementGeometry2D/pl") (wartość ignorowana w przypadku osiowosymetrycznym) i odpowiednich warunków brzegowych (należy używać [warunku brzegowego przemieszczenia](/FEM_ConstraintDisplacement/pl "FEM ConstraintDisplacement/pl") ze stopniami swobody X i Y zamiast [warunku brzegowego utwierdzenia](/FEM_ConstraintFixed/pl "FEM ConstraintFixed/pl")) oraz obciążeniami działającymi w płaszczyźnie zadanymi na krawędzie

  - 3D - używane są trójwymiarowe elementy bryłowe/powłokowe/belkowe
  - plane stress - używane są elementy 2D płaskiego stanu naprężeń
  - plane strain - używane są elementy 2D płaskiego stanu odkształceń
  - axisymmetric - używane są elementy 2D osiowosymetryczne

- DANE**Output Frequency** - [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): definiuje częstotliwość zapisywania wyników w przyrostach (domyślne ustawienie 1 oznacza, że wyniki zapisywane są co przyrost, podczas gdy ustawienie wartości 2 oznaczałoby zapis wyników co 2 przyrosty itd.), ta opcja jest szczególnie przydatna do analiz nieliniowych i stanu nieustalonego, pomaga zredukować liczbę obiektów w drzewie, ponieważ obecnie para obiektów wyników (CCX_Results i Pipeline_CCX_Results) jest tworzona dla każdej klatki wyników

- DANE**Split Input Writer**:

  - `Fałsz` - zapisz wszystkie dane wejściowe do jednego pliku \*.inp file.
  - `Prawda` - podziel zapis danych wejściowych na więcej plików \*.inp - ułatwia ręczną edycję.

- DANE**Thermo Mech Steady State**:

  - `Prawda` - analiza termomechaniczna stanu ustalonego.
  - `Fałsz` - analiza termomechaniczna stanu nieustalonego.

- DANE**Thermo Mech Type** - [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"):

  - coupled - sprzężona analiza termomechaniczna,
  - uncoupled - niesprzężona analiza termomechaniczna,
  - pure heat transfer - analiza czysto termiczna _(\*HEAT TRANSFER)_.

- DANE**Time End**: czas trwania kroku, używany gdy parametr DANE**Iterations User Defined Incrementations** lub DANE**Iterations User Defined Time Step Length** jest ustawiony na `Prawda`

- DANE**Time Initial Step**: początkowy przyrost czasu dla kroku, używany gdy parametr DANE**Iterations User Defined Incrementations** lub DANE**Iterations User Defined Time Step Length** jest ustawiony na `Prawda`.

- DANE**Time Maximum Step** - [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): maksymalny przyrost czasu dla kroku, używany gdy parameter DANE**Iterations User Defined Incrementations** lub DANE**Iterations User Defined Time Step Length** jest ustawiony na `Prawda`

- DANE**Time Minimum Step** - [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): minimalny przyrost czasu dla kroku, używany gdy parameter DANE**Iterations User Defined Incrementations** lub DANE**Iterations User Defined Time Step Length** jest ustawiony na `Prawda`

- DANE**Working Dir**: ścieżka do katalogu roboczego, który będzie używany do plików solvera CalculiX.

## Ograniczenia

Podczas uruchamiania solvera CalculiX można się spotkać z błędem **error 4294977295**. Oznacza to brak wystarczającej pamięci RAM. Istnieją dwa rozwiązania:

1. zmniejszyć gęstość siatki, najlepiej przez pominięcie geometrii, która nie jest absolutnie niezbędna do analizy.
2. dokupić pamięć RAM do komputera.

## Uwagi

Oryginalną dokumentację solvera CalculiX można znaleźć na stronie <http://dhondt.de/> w części "ccx".

## Tworzenie skryptów

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverCalculixCxxtools/pl&oldid=1542279>"
