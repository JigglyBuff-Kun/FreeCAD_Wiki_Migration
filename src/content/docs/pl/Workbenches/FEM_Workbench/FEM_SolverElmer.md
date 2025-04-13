---
title: MES Solver Elmer
---

|                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MES: Solver Elmer                                                                                                                                                                                                                                                                                  |
| Lokalizacja w menu                                                                                                                                                                                                                                                                                 |
| Solver → Solver Elmer                                                                                                                                                                                                                                                                              |
| Środowisko pracy                                                                                                                                                                                                                                                                                   |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                                                                                                                                                                                                                                        |
| Domyślny skrót                                                                                                                                                                                                                                                                                     |
| S E                                                                                                                                                                                                                                                                                                |
| Wprowadzono w wersji                                                                                                                                                                                                                                                                               |
| -                                                                                                                                                                                                                                                                                                  |
| Zobacz także                                                                                                                                                                                                                                                                                       |
| [Konfiguracja solvera Elmer](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl"), [Narzędzia CalculiX](/FEM_SolverCalculixCxxtools/pl "FEM SolverCalculixCxxtools/pl"), [Solver Z88](/FEM_SolverZ88/pl "FEM SolverZ88/pl"), [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                                                                                                                                                                                                                                                                    |

## Opis

[Elmer](https://www.elmerfem.org) to otwarto źródłowy solver do symulacji z różnych dziedzin fizyki, opracowywany głównie przez IT Center for Science _(CSC)_. Rozwój Elmera rozpoczął się w 1995 r. we współpracy z fińskimi uniwersytetami, instytutami badawczymi i przemysłem. Po publikacji kodu źródłowego w 2005 r., Elmera zaczęto używać i rozwijać globalnie.

Elmer posiada modele fizyczne m.in. mechaniki płynów, mechaniki ciał stałych, elektromagnetyzmu, przepływu ciepła i akustyki. Są one opisane równaniami różniczkowymi cząstkowymi, które [Elmer](https://www.csc.fi/web/elmer) rozwiązuje przy pomocy metody elementów skończonych _(MES)_.

Utworzenie obiektu SolverElmer w kontenerze analizy we FreeCAD daje dostęp do równań Elmera dla analiz pojedynczych zagadnień fizycznych lub zagadnień sprzężonych.

Ponieważ FreeCAD wspiera już intensywnie ![](/images/FEM_SolverCalculiX.svg) [solver Calculix](/FEM_SolverCalculixCxxtools/pl "FEM SolverCalculixCxxtools/pl") i ![](/images/FEM_SolverZ88.svg) [solver Z88](/FEM_SolverZ88/pl "FEM SolverZ88/pl") do analiz mechanicznych i termomechanicznych, Elmer jest preferowany do symulacji z zakresu mechaniki płynów _(CFD)_, przepływu ciepła, elektrostatyki i elektrodynamiki. Może być również używany do analiz mechanicznych dzięki równaniu elastyczności lub dowolnej kombinacji wyżej wymienionych równań. Ta kombinacja sprawia, że Elmer jest preferowany do analiz sprzężonych.

## Instalacja

Elmer wymaga dwóch komponentów do powiązania z FreeCADː

- ElmerGrid to interfejs obsługujący siatki,
- ElmerSolver obsługuje obliczenia.

Istnieją niezależne programy do obu tych zastosowań, ale ich instalacja i użycie są poza zakresem integracji z FreeCAD.

1. Pobierz i zainstaluj wersję najbardziej pasującą do Twojego systemu operacyjnego _([Windows](https://www.nic.funet.fi/pub/sci/physics/elmer/bin/windows/) lub [Linux](https://www.nic.funet.fi/pub/sci/physics/elmer/bin/linux/Readme1st.txt))_. Zalecana jest instalacja wersji `mpi`, aby móc skorzystać ze wsparcia dla obliczeń równoległych ([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")).
2. We FreeCAD przejdź do **Edycja → Preferencje ... → MES → Elmer**
3. We [właściwościach MES](/FEM_Preferences/pl#Elmer "FEM Preferences/pl") ustaw poprawną ścieżkę dla `ElmerGrid` i `ElmerSolver`, lub wersja 0.21 i powyżej: ustaw ścieżkę dla `ElmerSolver_mpi` zamiast `ElmerSolver` aby Elmer korzystał ze wszystkich dostępnych rdzeni procesora.

   : ![Zakładka Elmera w preferencjach MES](/images/Preferences-ElmerPath.png)
   : Menu dialogowe Elmera pokazujące pola do zlokalizowania ważnych plików wykonywalnych Elmera dla systemu Windows

Elmer jest gotowy do użycia we FreeCAD.

wersja 0.19 i poniżej: Uruchom FreeCAD i zmień układ jednostek na **MKS** w [preferencjach](/Preferences_Editor/pl#Ogólne_2 "Preferences Editor/pl"). Zobacz [Uwagi](#Uwagi).

## Użycie

1.  Przełącz się na ![](/images/Workbench_FEM.svg) [środowisko pracy MES](/FEM_Workbench/pl "FEM Workbench/pl")
2.  Utwórz [kontener analizy](/FEM_Analysis/pl "FEM Analysis/pl") poprzez wciśnięcie przycisku ![](/images/FEM_Analysis.svg).
3.  Dodaj solver Elmer, wciskając przycisk ![](/images/FEM_SolverElmer.svg).

    - Uwaga: Poprawnie zdefiniowana analiza wymaga co najmniej Modelu _(2D lub 3D)_, Materiału _([płynu](/FEM_MaterialFluid/pl "FEM MaterialFluid/pl") lub [ciała stałego](/FEM_MaterialSolid/pl "FEM MaterialSolid/pl"))_,[siatki](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape"), równań i warunków brzegowych.

    : ![](/images/Elmer_typical_file_tree.png)
    : Przykład [widoku drzewa](/Tree_view/pl "Tree view/pl") po dodaniu solvera Elmer

        .

4.  Edytuj parametry solvera w [edytorze właściwości](/Property_editor/pl "Property editor/pl"), w zakładce Dane obiektu SolverElmer w [widoku drzewa](/Tree_view/pl "Tree view/pl").
5.  Dwukrotnie kliknij na obiekcie ![](/images/FEM_SolverElmer.svg) SolverElmer aby przygorować analizę do uruchomienia.

    : ![](/images/ElmerSolver_TaskPanel.png)
    : Okno dialogowe do uruchomienia analizy przy pomocy solvera Elmer.

6.  Wybierz ścieżkę do zapisania analizy wciskając przycisk ....
7.  Wciśnij przycisk Zapisz aby zapisać pliki analizy w wybranym wcześniej katalogu.
8.  Wciśnij przycisk Uruchom aby rozpocząć obliczenia.

## Równania

- Aby przeprowadzić analizę danego typu zjawiska fizycznego, potrzebne jest równanie _(przepływowe, cieplne, elektrostatyczne...)_.
- Uściślenie: Określenie _równanie_ jest używane we FreeCAD do pisania różnych zjawisk fizycznych, określenie _Solver_ jest używane we wszystkich dokumentach Elmera. Więc jeśli używane jest "równanie przepływu" to w rzeczywistości Elmer korzysta z "solvera przepływowego" do znalezienia rozwiązania równań Naviera-Stokesa.
- Można używać jednego lub wielu równań jednocześnie poprzez dodanie obiektu równania pod obiektem SolverElmer, co skutkuje przeprowadzeniem analizy sprzężonej:

1. Wciśnij przycisk ![](/images/FEM_SolverElmer.svg) SolverElmer w [widoku drzewa](/Tree_view/pl "Tree view/pl")
2. Wybierz jedno lub wiele dostępnych równań:
   - ![](/images/FEM_EquationDeformation.svg) [równanie deformacji](/FEM_EquationDeformation/pl "FEM EquationDeformation/pl").
   - ![](/images/FEM_EquationElasticity.svg) [równanie elastyczności](/FEM_EquationElasticity/pl "FEM EquationElasticity/pl").
   - ![](/images/FEM_EquationElectricforce.svg) [równanie siły elektrostatycznej](/FEM_EquationElectricforce/pl "FEM EquationElectricforce/pl").
   - ![](/images/FEM_EquationElectrostatic.svg) [równanie elektrostatyczne](/FEM_EquationElectrostatic/pl "FEM EquationElectrostatic/pl").
   - ![](/images/FEM_EquationFlow.svg) [równanie przepływu](/FEM_EquationFlow/pl "FEM EquationFlow/pl").
   - ![](/images/FEM_EquationFlux.svg) [równanie strumienia](/FEM_EquationFlux/pl "FEM EquationFlux/pl").
   - ![](/images/FEM_EquationHeat.svg) [równanie ciepła](/FEM_EquationHeat/pl "FEM EquationHeat/pl").
   - ![](/images/FEM_EquationMagnetodynamic.svg) [równanie magnetodynamiczne](/FEM_EquationMagnetodynamic/pl "FEM EquationMagnetodynamic/pl").
   - ![](/images/FEM_EquationMagnetodynamic2D.svg) [równanie magnetodynamiczne 2D](/FEM_EquationMagnetodynamic2D/pl "FEM EquationMagnetodynamic2D/pl").
   - ![](/images/FEM_EquationStaticCurrent.svg) [Równanie przepływu prądu stałego](/FEM_EquationStaticCurrent/pl "FEM EquationStaticCurrent/pl") - [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")

### Ustawienia solvera

- W zależności od używanych równań, musisz zmienić domyślne ustawienia solvera. Są one opisane na stronie [Ustawienia solvera Elmer](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl").
- Solver będzie domyślnie przeprowadzał analizę stanu ustalonego. Aby przeprowadzić analizę stanu nieustalonego _(jak model zachowuje / zmienia się w czasie)_ zobacz sekcję _Timestepping (transient analyses)_ na stronie [Ustawienia solvera Elmer](</FEM_SolverElmer_SolverSettings/pl#Timestepping_(transient_analyses)> "FEM SolverElmer SolverSettings/pl").

### Wizualizacja

Wyniki obliczeń solvera Elmer są zapisywane w obiektach [prezentacji graficznej wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl"). ([Obiekty wyników](/FEM_ResultShow/pl "FEM ResultShow/pl") nie są dostępne.)

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"):

W przypadku analiz stanu nieustalonego uzyskiwany jest obiekt prezentacji graficznej wyników dla każdego kroku czasowego wyników. Aby edytować wszystkie te obiekty naraz, zaznacz je w [widoku drzewa](/Tree_view/pl "Tree view/pl") i ustaw parametry w [edytorze właściwości](/Property_editor/pl "Property editor/pl").
Aby stworzyć animację zmiany wyników w czasie, obecnie najlepiej:

- Ukryć pierwszy obiekt wyników.
- Zaznaczyć wybrany obiekt w widoku drzewa, ale nie obiekt prezentacji graficznej wyników.
- Przesunąć myszką po obiektach prezentacji graficznej wyników.

Uzyskuje się animację taką jak ta:

![](/images/ElmerSolver_TransientAnalysis.gif)

## Uwagi

- **Ważne**: aby uzyskać rozsądne wyniki i móc wymieniać pliki wejściowe solvera Elmer _(nazwane_ case.sif*)* z innymi, wszystkie wartości w plikach wejściowych powinny być podane w jednostkach SI. W wersji FreeCAD 0.19 i wcześniejszych jest tak tylko jeśli system jednostek **MKS** jest wybrany w [preferencjach](/Preferences_Editor/pl#Ogólne_2 "Preferences Editor/pl").
- Parametry dla solvera i dla równań są niezależnie ustawiane poprzez zakładkę Dane [edytora właściwości](/Property_editor/pl "Property editor/pl") odpowiednich obiektów w [widoku drzewa](/Tree_view/pl "Tree view/pl").
- Każde równanie będzie miało priorytet, przykładowo, chcąc zobaczyć wpływ konwekcyjnego przepływu gorącego powietrza, równanie przepływu powinno być rozwiązane z wyższym priorytetem niż równanie ciepła, inaczej solver będzie najpierw rozwiązywał przepływ ciepła przez przewodzenie a dopiero potem przepływ płynu.
- Przypadki 2D vs 3D: Elmer może być używany do analiz 2D i 3D cases. Jednak w przypadkach 2D ściany muszą leżeć na płaszczyźnie XY, inaczej solver będzie próbował obliczyć przypadek 3D na powierzchni a wektory normalne będą niezdefiniowane. Więcej informacji można znaleźć na forum: <https://forum.freecadweb.org/viewtopic.php?f=18&t=48175>

## Dokumentacja

Następujący link daje dostęp do pełnej [dokumentacji solvera Elmer](https://www.nic.funet.fi/pub/sci/physics/elmer/doc/). W jej skład wchodzą instrukcje obsługi i poradniki. Dokumenty i pliki z dopiskiem "GUI" oznaczają użycie interfejsu Elmer GUI a nie implementację Elmera we FreeCAD.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverElmer/pl&oldid=1568345>"
