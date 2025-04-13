---
title: Mikro poradnik Szkicownik - wiązania w praktyce
---
|  |
| --- |
| Ćwiczenie |
| Temat |
| Modelowanie |
| Poziom trudności |
| początkujący |
| Czas wykonania |
| 30 minut |
| Autorzy |
| Mark Stephen ([Quick61](/User:Quick61 "User:Quick61")) and vocx |
| Wersja FreeCAD |
| 0.19 |
| Pliki z przykładami |
| [Sketcher: wiązania praktycznie](https://forum.freecadweb.org/viewtopic.php?f=36&p=371659#p371659) |
| Zobacz również |
| *-* |
|  |

## Wprowadzenie

Ten poradnik został pierwotnie napisany przez Quick61 i został zaktualizowany i odnowiony przez vocx.

## Witamy

Ten poradnik ma na celu pomóc nowemu użytkownikowi FreeCAD zapoznać się z technikami i najlepszymi praktykami dotyczącymi tworzenia wiązań [szkicu](/Sketch "Sketch") oraz przepływem pracy Środowiska ![](/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench/pl "Sketcher Workbench/pl").

Istnieje ogólna zasada dotycząca wiązań szkicownika FreeCAD, im mniej jest *wiązań wymiarów*, tym lepiej.

Lepiej jest używać *wiązania geometryczne* w miejsce wymiarowego, jeśli to możliwe. Ma to związek z wewnętrznym działaniem algorytmu wyliczającego wiązania Środowiska Sketcher.

## Sposób postępowania

1. Uruchom program FreeCAD, utwórz nowy pusty dokument przez menu **Plik → ![](/images/Std_New.svg) [Nowy](/Std_New "Std New")**.

:   1.1. Przełacz interfejs na Środowisko pracy [Sketcher](/Sketcher_Workbench/pl "Sketcher Workbench/pl") z [paska narzędzi Środowisko](/Std_Workbench "Std Workbench"), lub menu **[Widok](/Std_View_Menu/pl "Std View Menu/pl") → Środowisko → Sketcher**.

Kilka działań do zapamiętania:

* Naciśnij prawy przycisk myszy, lub naciśnij jeden raz klawisz Esc na klawiaturze, aby wyłączyć aktywne narzędzie w trybie edycji.
* Aby wyjść z trybu edycji szkicu, naciśnij przycisk Zamknij w [panelu zadań](/Task_panel "Task panel"), lub naciśnij dwukrotnie klawisz Esc na klawiaturze.
* Aby ponownie wejść w tryb edycji, kliknij dwukrotnie na obiekt szkicu w [widoku drzewa](/Tree_view "Tree view"), lub wybierz go, a następnie kliknij na przycisk ![](/images/Sketcher_EditSketch.svg). [Edycja szkicu](/Sketcher_EditSketch "Sketcher EditSketch").

## Utwórz szkic

2. Kliknij w przycisk ![](/images/Sketcher_NewSketch.svg) [Utwórz nowy szkic](/Sketcher_NewSketch "Sketcher NewSketch").

:   2.1. Wybierz orientację szkicu, czyli jedną z płaszczyzn bazowych XY, XZ lub YZ. Będziemy korzystać z ustawień domyślnych dla płaszczyzny i opcji.
:   2.2 Kliknij OK, aby rozpocząć tworzenie szkicu.

*Uwaga:* w [panelu zadań](/Task_panel "Task panel") rozwinąć sekcję **Edycja kontrolek** i upewnić się, że opcja **Automatyczne wiązania** jest wyłączona. Wyłącz również przyciąganie do siatki i ukryj siatkę.

## Podejście pierwsze: wiązania dotyczące danych

3. Narysujemy całkowicie związany kwadrat, wyśrodkowany w punkcie początku układu współrzędnych.

:   3.1. Kliknij na ![](/images/Sketcher_CreatePolyline.svg) [Utwórz polilinię ...](/Sketcher_CreatePolyline/pl "Sketcher CreatePolyline/pl"), a następnie wytycz cztery linie w ogólnym kształcie prostokąta, wokół punktu początku.

![](/images/01a_Sk02_Sketcher_Rectangle_unconstrained.png)

Szkic prostokąta bez wiązań.

:   3.2. Wybierz pierwszą linię poziomą i naciśnij przycisk ![](/images/Constraint_HorizontalDistance.svg) [Ustal poziomą odległość](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl"), wprowadź wartość `20mm`.
:   3.3. Wybierz drugą linię poziomą i nadaj wiązanie z tą samą długością.
:   3.4. Wybierz pierwszą linię pionową i naciśnij przycisk ![](/images/Constraint_VerticalDistance.svg) [Ustal pionową odległość](/Sketcher_ConstrainDistanceY/pl "Sketcher ConstrainDistanceY/pl"), wprowadź wartość `20mm`.
:   3.5. Wybierz drugą linię pionową i nadaj wiązanie z tą samą długością.
:   3.6. Wybierz jeden dolny punkt narożny *(a)* i punkt początku szkicu, naciśnij ![](/images/Constraint_HorizontalDistance.svg) [Ustal poziomą odległość](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl"), a następnie wpisz `10mm`.
:   3.7. Wybierz górny punkt narożnika *(b)* powyżej punktu narożnika *(a)* oraz punkt początku szkicu, a następnie powtórnie zastosuj wiązanie poziome z taką samą odległością.
:   3.8. Wybierz inny dolny punkt narożnika *(c)*, oraz punkt początkowy szkicu i naciśnij ![](/images/Constraint_VerticalDistance.svg) [Ustal pionową odległość](/Sketcher_ConstrainDistanceY/pl "Sketcher ConstrainDistanceY/pl"), a następnie wpisz `10mm`.
:   3.9. Wybierz ponownie górny punkt narożny *(b)* i początek szkicu, a następnie ponownie utwórz wiązanie pionowe z taką samą odległością.

![](/images/01b_Sk02_Sketcher_Rectangle_constrained_lengths_1.png) ![](/images/01c_Sk02_Sketcher_Rectangle_constrained_lengths_2.png)

Z lewej: wiązania dotyczące wymiarów dla boków. Z prawej: dodatkowe wiązania odległości wewnętrznych.

Patrząc na sekcję **Wiązania** w [Panelu zadań](/Task_panel/pl "Task panel/pl"), widzimy, że istnieje zbyt wiele wiązań. Zaburzają one również widok szkicu. Wiązania te są również skomplikowane obliczeniowo dla solvera. Choć nie stanowi to problemu z prostym kształtem, to jednak może on stać się jednym z bardziej złożonych kształtów.

## Lepsza droga: wymiary i wiązania geometryczne

4. Narysujemy całkowicie związany kwadrat, wyśrodkowany w punkcie początku układu współrzędnych. Podczas tworzenia nowego szkicu, upewnij się, że opcja **Automatyczne wiązania** jest wyłączona.

:   4.1. Kliknij na ![](/images/Sketcher_CreatePolyline.svg) [Utwórz polilinię ...](/Sketcher_CreatePolyline/pl "Sketcher CreatePolyline/pl"), a następnie wytycz cztery linie w ogólnym kształcie prostokąta, wokół punktu początku.
:   4.2. Zaznacz jedna z linii poziomych, i kliknij na przycisk ![](/images/Constraint_Horizontal.svg) [Utwórz wiązanie poziome](/Sketcher_ConstrainHorizontal/pl "Sketcher ConstrainHorizontal/pl").
:   4.3. Zaznacz kolejna linię poziomą i powtórz tworzenie wiązania.
:   4.4. Zaznacz jedna z linii pionowych, i kliknij na przycisk ![](/images/Constraint_Vertical.svg) [Utwórz wiązanie pionowe](/Sketcher_ConstrainVertical/pl "Sketcher ConstrainVertical/pl").
:   4.5. Zaznacz kolejna linię pionową i powtórz tworzenie wiązania.

![](/images/02a_Sk02_Sketcher_Rectangle_constrained_horizontal-vertical.png)

Wiązania geometryczne poziome i pionowe.

:   4.6. Zaznacz pierwszą z linii poziomych, i naciśnij przycisk ![](/images/Constraint_HorizontalDistance.svg) [Ustal poziomą odległość](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl"), wprowadź wartość `20mm`. Obserwujemy, że druga pozioma linia zmienia rozmiar w tym samym czasie.
:   4.7. Zaznacz pierwszą z linii pionowych, i naciśnij przycisk ![](/images/Constraint_VerticalDistance.svg) [Ustal pionową odległość](/Sketcher_ConstrainDistanceY/pl "Sketcher ConstrainDistanceY/pl"), wprowadź wartość `20mm`. Obserwujemy, że druga pionowa linia zmienia rozmiar w tym samym czasie.
:   4.8. Zaznacz jeden dolny punkt narożny *(a)* i punkt początku szkicu, naciśnij przycisk ![](/images/Constraint_HorizontalDistance.svg) [Ustal poziomą odległość](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl"), wprowadź wartość `10mm`.
:   4.9. Zaznacz punkt narożny *(b)* powyżej poprzednio używanego punktu *(a)* oraz punkt początku szkicu, naciśnij przycisk ![](/images/Constraint_VerticalDistance.svg) [Ustal pionową odległość](/Sketcher_ConstrainDistanceY/pl "Sketcher ConstrainDistanceY/pl"), wprowadź wartość `10 mm`.

![](/images/02b_Sk02_Sketcher_Rectangle_constrained_lengths_1.png) ![](/images/02c_Sk02_Sketcher_Rectangle_constrained_lengths_2.png)

Z lewej: wiązania dotyczące wymiarów tylko dwóch boków. Z prawej: dodatkowe wiązania dotyczące tylko dwóch odległości wewnętrznych.

W porównaniu do pierwszego, ten szkic jest związany znacznie lepiej. Poziome i pionowe wiązania geometryczne pozwalają nam na zastosowanie mniejszej liczby wiązań w układzie odniesienia. Dzięki czemu nasz szkic wygląda bardziej przejrzyście.

## Schemat optymalny: przede wszystkim wiązania geometryczne

5. Narysujemy ten sam kwadrat, w pełni związany i wyśrodkowany w punkcie początku układu współrzędnych. Podczas tworzenia nowego szkicu, upewnij się, że opcja **Automatyczne wiązania** jest wyłączona.

:   5.1. Kliknij na ![](/images/Sketcher_CreatePolyline.svg) [Utwórz polilinię ...](/Sketcher_CreatePolyline/pl "Sketcher CreatePolyline/pl"), a następnie wykreśl cztery linie w ogólnym kształcie prostokąta wokół punktu początku.
:   5.2. Zaznacz jedna z linii poziomych, i kliknij na przycisk ![](/images/Constraint_Horizontal.svg) [Utwórz wiązanie poziome](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal").
:   5.3. Zaznacz kolejna linię poziomą i powtórz tworzenie wiązania.
:   5.4. Zaznacz jedna z linii pionowych, i kliknij na przycisk ![](/images/Constraint_Vertical.svg) [Utwórz wiązanie pionowe](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical").
:   5.5. Zaznacz kolejna linię pionową i powtórz tworzenie wiązania.

![](/images/03a_Sk02_Sketcher_Rectangle_constrained_horizontal-vertical.png)

Wiązania geometryczne poziome i pionowe.

:   5.6. Wybierz jeden dolny narożnik *(a)*, a następnie górny narożnik, który znajduje się po przekątnej, oraz punkt początku szkicu. Następnie naciśnij ![](/images/Constraint_Symmetric.svg) [Utwórz wiąz symetrii](/Sketcher_ConstrainSymmetric "Sketcher ConstrainSymmetric"). Dwa wybrane narożniki zostaną ustawione w równej odległości od punktu środkowego.
:   5.7. Wybierz dwa przylegające boki prostokąta *(połączone w jednym rogu)* i naciśnij przycisk ![](/images/Constraint_EqualLength.svg) [Utwórz wiązanie równości](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual"). Zauważ, że ze względu na symetrię punktów narożnych, wszystkie boki mają teraz tę samą długość.

![](/images/03b_Sk02_Sketcher_Rectangle_constrained_symmetric.png) ![](/images/03c_Sk02_Sketcher_Rectangle_constrained_equal_length.png)

Po lewej: Wiązanie symetrii dla dwóch punktów narożnych. Po prawej: dodatkowo jednakowa długość tylko dla dwóch sąsiednich boków..

:   5.8. Zaznacz jedna z poziomych linii i naciśnij przycisk ![](/images/Constraint_HorizontalDistance.svg) [Ustal pozioma odległość ...](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"), wprowadź wartość `20mm`. Ze względu na dodane wcześniej wiązania symetryczne i równości długości, widzimy, że wszystkie boki stają się równe w tym samym czasie.

![](/images/03d_Sk02_Sketcher_Rectangle_constrained_length.png)

Zastosowano wszystkie wiązania geometryczne i jedno wiązanie wymiarowe dla długości boku.

Jest to najlepszy sposób na związanie tego szkicu, ponieważ użyliśmy tylko jednego wiązania danych *(wymiarowego)*.

## Dodatkowe zasoby

* [Poradnik: Podstawy dla Środowiska pracy Szkicownik](/Basic_Sketcher_Tutorial/pl "Basic Sketcher Tutorial/pl")
* [Poradnik do szkicownika](/Sketcher_Lecture "Sketcher Lecture")
* [Poradnik dla środowiska pracy Szkicownik](/Sketcher_Tutorial/pl "Sketcher Tutorial/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Micro_Tutorial_-_Constraint_Practices/pl&oldid=1467973>"