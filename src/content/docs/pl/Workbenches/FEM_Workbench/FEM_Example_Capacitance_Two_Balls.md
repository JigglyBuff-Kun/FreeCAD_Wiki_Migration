---
title: Przykład MES Pojemność elektryczna dwóch kul
---
|  |
| --- |
| Ćwiczenie |
| Temat |
| Analiza metodą elementów skończonych |
| Poziom trudności |
| Początkujący |
| Czas wykonania |
| 30 min |
| Autorzy |
| [Sudhanshu Dubey](https://wiki.freecadweb.org/User:Sudhanshu_Dubey) |
| Wersja FreeCAD |
| 0.19 lub nowszy |
| Pliki z przykładami |
| Tworzone automatycznie |
| Zobacz również |
| *-* |
|  |

## Wprowadzenie

Ten przykład pokazuje jak zasymulować przypadek 6 z dokumentu [Elmer GUI Tutorials](https://www.nic.funet.fi/pub/sci/physics/elmer/doc/ElmerTutorials.pdf), **Electrostatic equation – Capacitance of two balls** (Równanie elektrostatyczne – Pojemność elektryczna dwóch kul) przy pomocy [Przykładów MES](/FEM_Examples/pl "FEM Examples/pl"). Wyjaśnia jak ustawić przykład, przeanalizować jego różne części, rozwiązać używając [solvera Elmer](/FEM_SolverElmer/pl "FEM SolverElmer/pl") i zwizualizować wyniki za pomocą [filtra przycinania](/FEM_PostFilterClipRegion/pl "FEM PostFilterClipRegion/pl").

![](/images/Two_balls_result_2.png)

Wynik końcowy tego przykładu

## Wymagania

* Kompatybilna wersja programu FreeCAD wskazana w opisie przykładu.

  :   Użyj opcji **Pomoc → Informacje o FreeCAD** aby sprawdzić jaka wersja programu jest zainstalowana
* Do wczytania przykładu, obejrzenia siatki i geometrii oraz wizualizacji wyników nie jest wymagane żadne zewnętrzne oprogramowanie.
* Do przeprowadzenia analizy metodą elementów skończonych (MES), solver ELmer musi być zainstalowany na komputerze. Zobacz [tę stronę](/FEM_SolverElmer/pl#Instalacja "FEM SolverElmer/pl") aby dowiedzieć się jak zainstalować solver Elmer.

## Ustaw przykład

### Załaduj środowisko pracy MES

* Uruchom FreeCAD, moduł Start powinien być załadowany
* Przełącz się na ![](/images/Workbench_FEM.svg) [środowisko pracy MES](/FEM_Workbench/pl "FEM Workbench/pl").

### Załaduj plik przykładu

* Idź do **Narzędzia → ![](/images/FEM_Examples.svg) Otwórz przykłady**.
* Gdy otworzy się okno dialogowe, znajdź i otwórz przykład "Electrostatics Capacitance Two Balls". Możesz go łatwo znaleźć w kategoriach **All** lub **Solvers → Elmer**. Aby otworzyć przykład, kliknij na nim dwukrotnie lub zaznacz go i wciśnij przycisk Setup.

![](/images/Two_balls_selection.png)

## Zrozumienie przypadku obliczeniowego

Ten przypadek przedstawia rozwiązanie pojemności elektrycznej doskonale przewodzących kul w wolnej przestrzeni. Różnica napięć między kulami wywołuje ładunek elektryczny w układzie. Kule mają też własną pojemność elektryczną, która wynika z różnicy napięć z dalekim otoczeniem. Zatem rozwiązania musi być symetryczna macierz 2 x 2 pojemności elektrycznej. Pojemności mogą być obliczone z dwóch różnych konfiguracji napięć.

## Zrozumienie modelu

* Model zawiera trzy kule.

1. Dwie mniejsze są doskonale przewodzące.
2. Większa symuluje otaczające powietrze.

* Dwie mniejsze kule są ze sobą scalone a następnie wycięte z większej kuli.

![](/images/Two_balls_model_full.png)

Początkowy model

### Kontener analizy i jego obiekty

Obiekty używane w tej analizie elektrostatycznej:

1. ![](/images/FEM_Analysis.svg) Kontener analizy
2. ![](/images/FEM_SolverElmer.svg) SolverElmer
3. ![](/images/FEM_EquationElectrostatic.svg) Electrostatic, równanie elektrostatyczne
4. ![](/images/FEM_MaterialFluid.svg) FemMaterial, materiał płynu reprezentujący otaczające powietrze
5. ![](/images/FEM_ConstraintElectrostaticPotential.svg) ElectrostaticPotential, warunki brzegowe (trzy)
6. ![](/images/FEM_ConstantVacuumPermittivity.svg) ConstantVaccumPermittivity, opcjonalne
7. ![](/images/FEM_MeshGmshFromShape.svg) Mesh, siatka [Gmsh](/FEM_MeshGmshFromShape/pl "FEM MeshGmshFromShape/pl")
8. ![](/images/FEM_MeshRegion.svg) MeshRegion, obszar siatki dla mniejszych kul

![](/images/Two_balls_analysis.png)

Obiekty w [widoku drzewa](/Tree_view/pl "Tree view/pl")

### Uruchamianie analizy

* W [widoku drzewa](/Tree_view/pl "Tree view/pl") dwukrotnie kliknij na obiekcie solvera ![](/images/FEM_SolverElmer.svg).
* Wciśnij przycisk Zapisz w tym samym panelu zadań. Obserwuj okno dziennika aż pojawi się w nim komunikat "write completed." Możesz zignorować ewentualne ostrzeżenie o przenikalności elektrycznej próżni.
* Wciśnij przycisk Uruchom. Jest to mała analiza, więc powinna trwać tylko kilka sekund. Poczekaj aż zbaczysz komunikat "ELMER SOLVER FINISHED AT".
* Wciśnij przycisk Zamknij w panelu zadań po zakończeniu analizy.
* W widoku drzewa utworzone zostaną dwa nowe obiekty wyników, ![](/images/FEM_PostPipelineFromResult.svg) SolverElmerResult oraz ![](/images/TextDocument.svg) SolverElmerOutput.

Jeśli podczas uruchamiania analizy pojawi się błąd o pliku wykonywalnym solvera lub zbliżony, sprawdź [instalację](/FEM_SolverElmer/pl#Instalacja "FEM SolverElmer/pl") solvera Elmer.

### Wizualizacja wyników

* Upewnij się, że siatka jest niewidoczna. Jeśli tak nie jest, wybierz ![](/images/FEM_MeshGmshFromShape.svg) obiekt siatki i wciśnij klawisz Spacja aby przełączyć widoczność.
* Upewnij się też, że obiekt Cut jest niewidoczny.
* Dwukrotnie kliknij na obiekcie ![](/images/FEM_PostPipelineFromResult.svg) SolverElmerResult aby otworzyć jego okno dialogowe.
* Zmień "Pole" na "potential" i kliknij OK.
* Zobaczysz, że kula zmieniła kolor na niebieski a gradient po prawej stronie pokazuje wartości od 0 do 1. Powinno to wyglądać mniej więcej tak:

![](/images/Two_balls_potential.png)

## Obróbka wyników

* Chociaż poprawnie zwizualizowaliśmy wyniki potencjału, widzimy tylko zerowy potencjał powietrza otaczającego dwie kule. Aby zobaczyć potencjał na kulach, musimy zastosować [filtr przycinania](/FEM_PostFilterClipRegion/pl "FEM PostFilterClipRegion/pl").
* W widoku drzewa wybierz obiekt ![](/images/FEM_PostPipelineFromResult.svg) SolverElmerResult i kliknij przycisk ![](/images/FEM_PostFilterClipRegion.svg) Filtr przycięcia obszaru na pasku narzędzi.
* Otworzy to okno z konfiguracjami filtra. Kliknij w nim przycisk ![](/images/List-add.svg) Utwórz i wybierz ![](/images/FEM_PostCreateFunctionPlane.svg) Płaszczyzna. Dodaje to płaszczyznę przecinającą siatkę wyników przez środek kuli. Aby wygładzić powierzchnię cięcia, zaznacz opcję **Wytnij komórki**. W końcu kliknij Zastosuj.

![](/images/Two_balls_postcreate.png)

* W widoku drzewa jest nowy obiekt o nazwie Functions. Zawiera utworzoną ![](/images/FEM_PostCreateFunctionPlane.svg) Płaszczyznę. Schowaj go wciskając klawisz Spacja.
* Dwukrotnie kliknij na obiekcie ![](/images/FEM_PostFilterClipRegion.svg) filtra przycinania w widoku drzewa.
* Zmień "Pole" na "potential" i kliknij OK.
* Przełącz widoczność obiektu ![](/images/FEM_PostPipelineFromResult.svg) SolverElmerResult używając klawisza Spacja a powinieneś zobaczyć coś takiego:

![](/images/Two_balls_result.png)

Teraz wyraźnie widzimy rozkład potencjału w i dookoła kul.

Zauważ, że gdyby opcja ![](/images/FEM_PostApplyChanges.svg) [Zastosuj zmiany](/FEM_PostApplyChanges "FEM PostApplyChanges") była włączona, mógłbyś wybrać "Pole" w oknie dialogowym filtra przycinania bezpośrednio a nie musiałbyś otwierać go ponownie po utworzeniu płaszczyzny.

## Znalezienie poejmności

* Naszym faktycznym celem jest znalezienie pojemności, która jest zawarta w dokumencie ![](/images/TextDocument.svg) SolverElmerOutput.
* Dwukrotnie kliknij na dokumencie ![](/images/TextDocument.svg) SolverElmerOutput aby go otworzyć. Przewiń w dół aż znajdziesz:

```
StatElecSolve: Capacitance matrix computation performed (i,j,C_ij)
StatElecSolve:   1  1    5.07016E+00
StatElecSolve:   1  2    1.69328E+00
StatElecSolve:   2  2    5.07201E+00

```

* Tutaj naszym poszukiwanym wynikiem jest `C12 = 1.69328`. Ta wartość jest zbliżona do wartości `1.691` podanej w dokumencie [Elmer GUI Tutorials](https://www.nic.funet.fi/pub/sci/physics/elmer/doc/ElmerTutorials.pdf). Możemy uzyskać jeszcze dokładniejszy wynik poprzez użycie większego [zagęszczenia siatki](/FEM_MeshRegion/pl "FEM MeshRegion/pl"), ale to pozostawiamy użytkownikowi. Zalecamy też przetestowanie [filtra przycinania](/FEM_PostFilterClipRegion/pl "FEM PostFilterClipRegion/pl") aby uzyskać wizualny wynik podobny do pierwszego rysunku w tym przykładzie.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Example_Capacitance_Two_Balls/pl&oldid=1340504>"