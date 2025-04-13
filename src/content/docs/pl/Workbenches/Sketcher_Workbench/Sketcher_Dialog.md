---
title: Okienko dialogowe Szkicownika
---
## Wprowadzenie

Podczas edycji szkicu lub, innymi słowy, gdy szkic jest w trybie edycji, okno dialogowe szkicownika jest wyświetlane na karcie Zadanie w panelu [Widoku złożonego](/Combo_view/pl "Combo view/pl").

Aby umieścić szkic w trybie edycji zobacz temat ![](/images/Sketcher_EditSketch.svg) [Edycja szkicu](/Sketcher_EditSketch/pl "Sketcher EditSketch/pl"). Aby zakończyć tryb edycji zobacz ![](/images/Sketcher_LeaveSketch.svg) [Zamknij szkic](/Sketcher_LeaveSketch/pl "Sketcher LeaveSketch/pl").

Okno dialogowe składa się z następujących sekcji:

## Parametry narzędzia

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

Niektóre narzędzia dodają sekcję parametrów w górnej części okna dialogowego. Dostępne opcje i / lub tryby zależą od narzędzia.

![](/images/Sketcher_Dialog_Line_parameters.png)

Sekcja parametrów narzędzia [Utwórz linię](/Sketcher_CreateLine/pl "Sketcher CreateLine/pl").

## Komunikaty solvera

Ta część informuje o stanie szkicu.

Możliwe komunikaty to:

* Pusty szkic
* Wiązania nadmiarowe: (#, #, #)
* Wiązania zniekształcone: (#, #, #)
* Wiązania nadmierne: (#, #, #)
* Częściowo nadmierne: (#, #, #)
* Solver nie osiągnął zbieżności
* Niezwiązany: n DoF(s)
* W pełni związany

Jeśli szkic jest nie w pełni związany, wskazana jest liczba stopni swobody *(lub Dofs)*. Kliknięcie podkreślonego tekstu spowoduje wybranie elementów szkicu z niedostatecznymi wiązaniami. Zobacz również informacje na stronie ![](/images/Sketcher_SelectElementsWithDoFs.svg) [Wybierz elementy bez wiązań](/Sketcher_SelectElementsWithDoFs/pl "Sketcher SelectElementsWithDoFs/pl").

Jeśli szkic ma nadmiarowe wiązania lub jest nadmiernie związany, wskazywane są indeksy powiązanych wiązań. Kliknięcie podkreślonego tekstu spowoduje ich zaznaczenie. Zobacz ![](/images/Sketcher_SelectRedundantConstraints.svg) [Wybierz zbędne wiązania](/Sketcher_SelectRedundantConstraints/pl "Sketcher SelectRedundantConstraints/pl") i ![](/images/Sketcher_SelectConflictingConstraints.svg) [Wybierz wiązania konfliktowe](/Sketcher_SelectConflictingConstraints/pl "Sketcher SelectConflictingConstraints/pl").

Zniekształcone wiązania mogą być naprawione przy pomocy narzędzia ![](/images/Sketcher_ValidateSketch.svg) [Szkicownik: Sprawdź poprawność szkicu](/Sketcher_ValidateSketch/pl "Sketcher ValidateSketch/pl").

Niektóre komunikaty są wyświetlane na czerwono nie bez powodu: są to ostrzeżenia, których nie należy ignorować. Wskazują problemy, które muszą być rozwiązane, ponieważ zakłócają działanie solvera. Komunikaty nie są wzajemnie wykluczające się. Jeśli więcej niż jeden ma zastosowanie, wyświetlany jest tylko pierwszy na liście.

Aby zmienić kolory komunikatów zobacz [Dostrajanie parametrów](/Fine-tuning/pl#Kolory_etykiet_wiązań "Fine-tuning/pl").

Dostępne opcje:

| Opcja | Opis |
| --- | --- |
|  | Ten przycisk otwiera menu:  * **Aktualizuj automatycznie**: Jeśli opcja jest zaznaczona, cały dokument jest ponownie obliczany po każdej akcji na szkicu. Niewskazane dla złożonych dokumentów. |

## Zaawansowana kontrola solvera

Ta sekcja pojawi się tylko wtedy, gdy zaznaczysz opcję **Pokaż sekcję *Zaawansowane sterowanie solverem*** w [ustawieniach szkicownika](/Sketcher_Preferences/pl "Sketcher Preferences/pl").

Zauważ, że większość opcji w tej sekcji nie ma praktycznego zastosowania. Mogą one jednak pomóc w testowaniu i zrozumieniu solverów.

Dostępne opcje:

| Opcja | Opis |
| --- | --- |
| **Domyślny solver** | Solver, który jest używany do rozwiązywania geometrii. *[LevenbergMarquardt](https://en.wikipedia.org/wiki/Levenberg%E2%80%93Marquardt_algorithm)* i **DogLeg** to [region zaufania](https://en.wikipedia.org/wiki/Trust_region) algorytmy optymalizacyjne. Solver **BFGS'** wykorzystuje [algorytm Broyden-Fletcher-Goldfarb-Shanno](https://en.wikipedia.org/wiki/Broyden%E2%80%93Fletcher%E2%80%93Goldfarb%E2%80%93Shanno_algorithm). |
| **Krok Gauss DogLeg** | To ustawienie jest dostępne tylko dla solvera **DogLeg**. Jest to typ kroku używany w algorytmie DogLeg. |
| **Maksymalna liczba kolejnych kroków** | Jeśli solver potrzebuje więcej kroków, aby znaleźć zbieżność do rozwiązania, zatrzyma się i napisze, że się nie udało. |
| **Mnożnik dla rozmiaru szkicu** | Jeśli opcja jest zaznaczona, maksymalna liczba powtórzeń zostanie pomnożona przez liczbę parametrów. Chodzi o to, że większe szkice będą potrzebowały większej liczby iteracji, aby się zrównać. |
| **Zbieżność** | Próg dla błędu kwadratowego. Ten błąd jest używany do określenia, czy rozwiązanie jest zbieżne, czy nie. |
| **Eps/Eps1/Tau** | Ustawienia te są dostępne tylko dla solwera **LevenbergMarquardt**. Powinieneś zmieniać tam coś tylko wtedy, gdy w pełni rozumiesz jak działa solver LevenbergMarquardt. |
| **Tolg/Tolx/Tolf** | Te ustawienia są dostępne tylko dla solwera **DogLeg**. Powinieneś zmieniać tam coś tylko wtedy, gdy w pełni rozumiesz jak działa solver DogLeg. |
| **Algorytm QR** | Podczas diagnozowania obliczana jest ranga macierzy, która umożliwia dalszą analizę układu wiązań w celu określenia, czy istnieją nadmiarowe / konfliktowe wiązania. Dekompozycja ujawniająca rangę używana w programie FreeCAD to QR. Istnieją dwa algorytmy: **Eigen Dense QR** jest to gęsta macierz QR z pełnym przestawieniem, co jest sprawdzonym algorytmem, który działa bardzo dobrze, ale jest raczej powolny, gdy układ rozrasta się. Algorytm **Eigen Sparse QR** jest optymalizacją dla macierzy rzadkich *(mających dużo zer)*, który jest zwykle znacznie szybszy, ponieważ systemy FreeCAD mają dużo zer. |
| **Próg przestawny** | W przypadku QR przyjmuje się wartości poniżej przestawnej wartości progowej są traktowane jako zero. |
| **Solver nadmiarowy** | Solver, który jest używany podczas diagnozowania, aby określić, czy grupa jest zbędna lub konfliktowa. |
| **Maksymalna liczba kolejnych kroków solvera nadmiarowego** | To samo co **Maksymalna liczba kolejnych kroków**, ale dla solvera nadmiarowego. |
| **Mnożnik dla rozmiaru szkicu solvera nadmiarowego** | To samo co **Mnożnik dla rozmiaru szkicu**, ale dla solvera nadmiarowego. |
| **Zbieżność solvera nadmiarowego** | To samo co **Zbieżność**, ale dla solvera nadmiarowego. |
| **R.Eps/R.Eps1/R.Tau** | To samo co **Eps/Eps1/Tau**, ale dla solvera nadmiarowego. |
| **R.Tolg/R.Tolx/R.Tolf** | To samo co **Tolg/Tolx/Tolf**, ale dla solvera nadmiarowego. |
| **Tryb debugowania w konsoli** | Ustawienie określające szczegółowość komunikatów w konsoli. |
| Rozwiąż | Za pomocą tego przycisku nastąpi natychmiastowe uruchomienie solvera. |
| Przywróć nastawy domyślne | Ten przycisk przywraca domyślne ustawienia solwera. |

## Wiązania

W tej części znajduje się lista wiązań szkicu. Usunięcie zaznaczenia wiązania na liście spowoduje jego ukrycie w szkicu. Wiązania można wybierać zarówno na liście, jak i w szkicu.

Wiązania mogą być również *(nie)*ukryte za pomocą narzędzia ![](/images/Sketcher_SwitchVirtualSpace.svg) [Przełącz przestrzeń wirtualną](/Sketcher_SwitchVirtualSpace/pl "Sketcher SwitchVirtualSpace/pl").

Dostępne opcje:

| Opcja | Opis |
| --- | --- |
| Filtry | Jeśli pole wyboru Filtr jest zaznaczone, rozwijana lista kontroluje, które wiązania będą wyświetlane poniżej:  * **Wszystkie**: Wszystkie więzy. * **Geometryczne**: Wiązania geometryczne. * **Odniesienia**: [Kontrolujące](/Sketcher_ToggleDrivingConstraint/pl "Sketcher ToggleDrivingConstraint/pl") więzy wymiarowe. Nie działa poprawnie: wszystkie ograniczenia wymiarowe są filtrowane. * **Nazwane**: Wiązania z nazwą. Nie działa. * **Odniesienie**: [Kontrolujące](/Sketcher_ToggleDrivingConstraint/pl "Sketcher ToggleDrivingConstraint/pl") więzy wymiarowe. Nie działa. * **Wybrane wiązania**: Wiązania zaznaczone w szkicu. * **Powiązane wiązania**: Więzy związane z elementami wybranymi w szkicu. |
|  | Ten przycisk przełącza widoczność wymienionych wiązań w szkicu. |
|  | Ten przycisk otwiera menu podręczne:  * **Wiązania automatyczne**: Jeśli opcja jest zaznaczona, niektóre wiązania geometryczne są automatycznie stosowane do nowych elementów. * **Usuń wiązania nadmiarowe automatycznie**: Jeśli opcja jest zaznaczona, nowe wiązania, które są zbędne, będą automatycznie usuwane. * **Pokazuj wyłącznie wiązania według filtrów**: Jeśli opcja ta jest zaznaczona, na szkicu będą widoczne tylko wybrane wiązania. * **Informacje rozszerzone (w widżecie)**: Jeśli opcja jest zaznaczona, w tym formularzu dodawane są rozszerzone informacje:   `[(GeoID1,PosID1),(GeoID2,PosID2),(GeoID3,PosID3)]`  GeoID jest indeksem o wartości zero dla geometrii niezewnętrznej. Oś X ma GeoID -1, oś Y ma GeoID -2. Dla geometrii zewnętrznej stosuje się GeoID -3, -4 itd.  PosID może mieć następujące wartości:  0 = krawędź, 1 = punkt początkowy, 2 = punkt końcowy, 3 = punkt środkowy.  Na przykład wymiar od początku do środka okręgu, który jest 2. niezewnętrznym elementem w szkicu, będzie miał następująco rozszerzoną informację:  `[(-1,1),(1,3)]`   * **Ukryj wyrównanie wewnętrzne (w widżecie)**: Jeśli opcja jest zaznaczona, więzy związane z wewnętrznymi wyrównaniami są ukryte na liście. Narzędzie  [Pokaż / ukryj geometrię wewnętrzną](/Sketcher_RestoreInternalAlignmentGeometry/pl "Sketcher RestoreInternalAlignmentGeometry/pl") może również ukryć te wiązania, ale ukryje również wewnętrzne wyrównania w szkicu. |
| **Menu podręczne** | Kliknięcie prawym przyciskiem myszy tła listy lub prawym przyciskiem myszy wybranych wiązań na liście otwiera menu kontekstowe. Menu zawiera następujące opcje:  * **Zmień wartość**: Zmienia wartość wiązania wymiarowego. Działa tylko dla pojedynczego ograniczenia. Możesz także dwukrotnie kliknąć wiązanie na liście lub dwukrotnie kliknąć jego wartość w [3D view](/3D_view "3D view"). * **Przełącz z / do trybu konstrukcyjnego**: zobacz stronę [Przełącz kontrolę wiązania](/Sketcher_ToggleDrivingConstraint/pl "Sketcher ToggleDrivingConstraint/pl"). * **Dezaktywuj** or **Aktywuj**: zobacz stronę [Przełącz aktywność wiązania](/Sketcher_ToggleActiveConstraint/pl "Sketcher ToggleActiveConstraint/pl"). * **Pokaż wiązania**: To samo działanie co zaznaczenie pola wyboru wiązania. Ale w przeciwieństwie do pola wyboru, działa również dla więcej niż jednego wiązania. * **Ukryj wiązania**: To samo działanie co odzanaczenie pola wyboru wiązania. Jak wyżej. * **Zaznacz elementy w szkicu**: zobacz stronę [Wybierz powiązaną geometrię](/Sketcher_SelectElementsAssociatedWithConstraints/pl "Sketcher SelectElementsAssociatedWithConstraints/pl"). * **Zmień nazwę**: Umożliwia zmianę nazwy wiązania. * **Wyśrodkuj szkic**: Wyśrodkowuje widok 3D wokół wybranych wiązań. * **Usuń**: Usuwa wybrane więzy. Można również użyć klawisza Del. * **Zamień nazwy wiązań**: Zamienia nazwy wybranych więzów. Działa tylko wtedy, gdy wybrane są dwa wiązania o nazwach podanych przez użytkownika. |

## Elementy

W tej części znajduje się lista elementów szkicu. Usunięcie zaznaczenia elementu na liście spowoduje jego ukrycie w szkicu. Elementy można wybierać zarówno na liście, jak i w szkicu.

Dostępne opcje:

| Opcja | Opis |
| --- | --- |
| Filtry | Jeśli pole wyboru Filtr jest zaznaczone, rozwijana lista kontroluje, które wiązania będą wyświetlane poniżej:  * **Normalny**: Normal geometry: geometry that does not fall in the next three categories. * **Konstrukcyjny**: [Construction geometry](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction"). * **Wewnętrzne**: [Internal geometry](/Sketcher_RestoreInternalAlignmentGeometry "Sketcher RestoreInternalAlignmentGeometry"). * **Zewnętrzne**: [External geometry](/Sketcher_External "Sketcher External"). * **Wszystkie rodzaje**: All geometry types. Specific types can be selected in the rest of the list:   + **Punkt**   + **Linia**   + **Okrąg**   + **Elipsa**   + **Łuk okręgu**   + **Łuk elipsy**   + **Łuk hiperboli**   + **Łuk paraboli**   + **Krzywa złożona** |
|  | Ten przycisk otwiera menu podręczne:  * **Informacje rozszerzone**: Jeśli opcja jest zaznaczona, wyświetlane są rozszerzone informacje o elemencie.   Dla geometrii niezewnętrznej informacje na liście zmieniają się wówczas z:  `<N>-<TYPE>`  na:  `<TYPE>(Edge<N>#ID<GeoID>#<VLX>)[-Construction]`  <TYPE>: Typ elementu.  <N>: Indeks o wartości 1, który wskazuje na kolejność tworzenia elementu.  <GeoID>: Patrz akapit [Wiązania](#Wiązania)  <VLX>: Warstwa elementu. Zobacz poniżej. |
|  | Każdy element na liście ma od 1 do 4 przycisków zorganizowanych w 4 kolumnach. Wybierają one określoną część elementu. Pokazane są tylko przyciski mające zastosowanie.  * Przycisk w kolumnie 1: wybiera krawędź elementu. * Przycisk w kolumnie 2: wybiera punkt początkowy elementu. * Przycisk w kolumnie 3: Wybiera punkt końcowy elementu. * Przycisk w kolumnie 4: Wybiera punkt środkowy elementu.   Kliknięcie tekstu ma taki sam efekt jak kliknięcie pierwszego dostępnego przycisku elementu.  *Na obrazie wybrano krawędź linii i środek łuku.*  *Linia nie ma przycisku w kolumnie 4, ponieważ nie ma środka.* |
| **Menu podręczne** | Kliknięcie prawym przyciskiem myszy tła listy lub elementów zaznaczonych na liście otwiera menu podręczne. Menu zawiera narzędzia [Narzędzia wiązań geometrycznych](/Sketcher_Workbench/pl#Więzy_geometrii "Sketcher Workbench/pl"), [Narzędzia ograniczeń wymiarowych](/Sketcher_Workbench/pl#Wiązania_wymiarów "Sketcher Workbench/pl") oraz następujące opcje dodatkowe:  * **Przełącz tryb konstrukcji**: Zobacz stronę [Przełącz tryb konstrukcji](/Sketcher_ToggleConstruction/pl "Sketcher ToggleConstruction/pl"). * **Wybierz powiązane więzy**: Zobacz stronę [Wybierz powiązane więzy](/Sketcher_SelectConstraints/pl "Sketcher SelectConstraints/pl"). * **Wybierz odniesienie położenia**: Zobacz stronę [Wybierz odniesienie położenia](/Sketcher_SelectOrigin/pl "Sketcher SelectOrigin/pl"). * **Wybierz oś poziomą**: Zobacz stronę [Wybierz oś poziomą](/Sketcher_SelectHorizontalAxis/pl "Sketcher SelectHorizontalAxis/pl"). * **Wybierz oś pionową**: Zobacz stronę [Wybierz oś pionową](/Sketcher_SelectVerticalAxis/pl "Sketcher SelectVerticalAxis/pl"). * **Warstwa**: dostępne są trzy opcje:   + **Warstwa 0**: Wskazana jako `VL0` w informacji rozszerzonej. Jest to warstwa domyślna. Elementy na tej warstwie są wyświetlane za pomocą linii ciągłej.   + **Warstwa 1**: Wskazane jako `VL1` w rozszerzonej informacji. Elementy na tej warstwie wyświetlane są za pomocą typu linii przerywanej.   + **Ukryte**: Wskazane jako `VL2` w rozszerzonych informacjach. Elementy na tej warstwie są ukryte w szkicu.   Kolejność renderowania warstw 0 i 1 jest taka, że podczas wybierania punktów zbieżnych w oknie [widoku 3D](/3D_view/pl "3D view/pl") elementy na warstwie 0 są wybierane priorytetowo względem tych na warstwie 1.   * **Usuń**: Usuwa zaznaczone elementy. Można również użyć klawisza Del. |

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Dialog/pl&oldid=1462306>"