---
title: Poradnik Podstawy dla środowiska pracy Szkicownik
---

|                                                                                            |
| ------------------------------------------------------------------------------------------ |
| Ćwiczenie                                                                                  |
| Temat                                                                                      |
| Szkicownik                                                                                 |
| Poziom trudności                                                                           |
| początkujący                                                                               |
| Czas wykonania                                                                             |
| 60 minut                                                                                   |
| Autorzy                                                                                    |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) oraz vocx                     |
| Wersja FreeCAD                                                                             |
| 0.19 lub nowszy                                                                            |
| Pliki z przykładami                                                                        |
| [Basic Sketcher tutorial updated](https://forum.freecadweb.org/viewtopic.php?f=36&t=43594) |
| Zobacz również                                                                             |
| _-_                                                                                        |
|                                                                                            |

### Wprowadzenie

Ten poradnik ma na celu zapoznanie czytelnika z podstawowym przepływem pracy środowiska ![](/images/Workbench_Sketcher.svg) [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl").

Środowisko pracy [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") funkcjonuje jako samodzielny moduł, dzięki czemu może być używany do rysowania podstawowych obiektów 2D _(płaskich)_. Jest on jednak najczęściej używany w połączeniu ze środowiskiem pracy ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"). Zamknięty szkic jest zwykle używany do utworzenia powierzchni lub profilu, który ma zostać wyciągnięty do bryły [Zawartość](/PartDesign_Body/pl "PartDesign Body/pl") przy użyciu operacji takiej jak ![](/images/PartDesign_Pad.svg) [Wyciągnij wybrany szkic](/PartDesign_Pad/pl "PartDesign Pad/pl").

Przećwiczymy:

- Tworzenie geometrii konstrukcyjnej.
- Tworzenie geometrii.
- Stosowanie wiązań geometrycznych.
- Stosowanie wiązań wymiarów.
- Uzyskanie profilu zamkniętego.

Aby uzyskać bardziej szczegółowy opis szkicownika, przeczytaj stronę [Poradnik do szkicownika](/Sketcher_Lecture/pl "Sketcher Lecture/pl").

![](/images/00_Sk01_Sketcher_fully_constrained_final.png)

Wynik końcowy szkicu, z geometrią w pełni ograniczoną w całości, łącznie z geometrią konstrukcji pomocniczej.

## Sposób postępowania

1. Uruchom program FreeCAD, utwórz nowy pusty dokument przez menu **Plik → ![](/images/Std_New.svg) [Nowy](/Std_New/pl "Std New/pl")**.

: 1.1. Przełacz interfejs na środowisko pracy [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") z [paska narzędzi Środowisko](/Std_Workbench/pl "Std Workbench/pl"), lub menu **[Widok](/Std_View_Menu/pl "Std View Menu/pl") → Środowisko → Szkicownik**.

Kilka działań do zapamiętania:

- Naciśnij prawy przycisk myszy, lub naciśnij jeden raz klawisz Esc na klawiaturze, aby wyłączyć aktywne narzędzie w trybie edycji.
- Aby wyjść z trybu edycji szkicu, naciśnij przycisk Zamknij w [panelu zadań](/Task_panel "Task panel"), lub naciśnij dwukrotnie klawisz Esc na klawiaturze.
- Aby ponownie wejść w tryb edycji, kliknij dwukrotnie na obiekt szkicu w [widoku drzewa](/Tree_view/pl "Tree view/pl"), lub wybierz go, a następnie kliknij na przycisk ![](/images/Sketcher_EditSketch.svg). [Edycja szkicu](/Sketcher_EditSketch/pl "Sketcher EditSketch/pl").

## Utwórz szkic

2. Kliknij w przycisk ![](/images/Sketcher_NewSketch.svg) [Utwórz nowy szkic](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl").

: 2.1. Wybierz orientację szkicu, czyli jedną z płaszczyzn bazowych XY, XZ lub YZ. Wybierz również, czy chcesz mieć odwróconą orientację i przesunięcie od płaszczyzny bazowej.
: 2.2. Będziemy korzystać z domyślnej płaszczyzny i opcji.
: 2.3. Kliknij OK, aby rozpocząć konstruowanie szkicu.

Jesteśmy obecnie w trybie edycji szkicu, w którym możemy korzystać z większości narzędzi tego warsztatu.

_Uwaga:_ w [panelu zadań](/Task_panel/pl "Task panel/pl") widoku połączonego należy rozwinąć sekcję **Edycja kontrolek** i upewnić się, że opcja **Automatyczne wiązania** jest włączona.
Tutaj mogą zostać zmienione również inne opcje, w tym gęstość widocznej siatki, oraz to czy chcemy aktywować przyciąganie do siatki. W tym poradniku nie będziemy aktywować przyciągania do siatki i ukryjemy ją. W innych sekcjach [panelu zadań](/Task_panel/pl "Task panel/pl") możesz również zobaczyć, które elementy geometryczne i wiązania zostały zdefiniowane.

![](/images/01_Sk01_Sketcher_Task_panel.png)

Górna część [panelu zadań](/Task_panel/pl "Task panel/pl") szkicownika.

## Geometrie konstrukcyjne

3. Geometria konstrukcyjna służy do wspomagania tworzenia właściwej geometrii. Rzeczywista geometria będzie wyświetlana poza trybem edycji szkicu, podczas gdy geometria konstrukcyjna będzie wyświetlana tylko i wyłącznie w trybie edycji. Dlatego też, możesz użyć tyle geometrii konstrukcji ile potrzebujesz by zbudować konkretne kształty.

: 3.1. Kliknij na przycisk ![](/images/Sketcher_ToggleConstruction.svg) [Przełącz tryb konstrukcji](/Sketcher_ToggleConstruction/pl "Sketcher ToggleConstruction/pl"). Teraz elementy geometryczne zostaną narysowane w **trybie konstrukcyjnym**.
: 3.2. Kliknij na przycisk ![](/images/Sketcher_Line.svg) [Utwórz linię](/Sketcher_CreateLine/pl "Sketcher CreateLine/pl").
: 3.3. Zbliż kursor do punktu początku szkicu, powinien zostać podświetlony, a przy kursorze ![](/images/Constraint_PointOnPoint.svg) pojawi się ikona [wiązania żbieżności](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident").
: 3.4. Kliknij na punkt, a następnie przesuń kursor, aby rozpocząć rysowanie od niego nowej linii. Przesuń wskaźnik tak, aby linia miała długość około `30mm`. Nie musisz być bardzo precyzyjny w tym kroku, po zakończeniu ustawimy odpowiedni wymiar.
: 3.5. Powtórz tę procedurę jeszcze cztery razy, aby umieścić linie konstrukcji na wzór gwiazdy. Nie martw się zbytnio o ich rozmiar lub położenie, po prostu przedłuż je w czterech strefach.
: 3.6. Aby wyjść z trybu konstrukcyjnego, po prostu kliknij ponownie na przycisk ![](/images/Sketcher_ToggleConstruction.svg) [Przełącz tryb konstrukcji](/Sketcher_ToggleConstruction/pl "Sketcher ToggleConstruction/pl").

_Uwaga:_ do tej pory narzędzie [Utwórz linię](/Sketcher_CreateLine/pl "Sketcher CreateLine/pl") jest nadal aktywne. Oznacza to, że możemy nadal klikać na [widok 3D](/3D_view/pl "3D view/pl"), aby narysować tyle linii ile chcemy. Jeśli chcemy zakończyć pracę z tym narzędziem, możemy nacisnąć prawy przycisk myszy, lub nacisnąć raz klawisz Esc na klawiaturze. W ten sposób kursor nie będzie już tworzył linii, będzie to po prostu kursor pozwalający nam na zaznaczenie obiektów, które właśnie stworzyliśmy. W tym trybie możemy wybrać i przeciągnąć punkty końcowe każdej z linii, aby dostosować ich położenie.

_Uwaga 2:_ nie naciskaj klawisza Esc drugi raz, ponieważ spowoduje to zamknięcie trybu edycji szkicu. Jeśli to zrobisz, wejdź ponownie w tryb edycji, klikając dwukrotnie na szkic w [widoku drzewa](/Tree_view/pl "Tree view/pl").

Spójrz jeszcze raz na [panel zadań](/Task_panel/pl "Task panel/pl"). Sekcja **Komunikaty solwera** wskazuje, że szkic jest niedostatecznie związany, i podaje liczbę _stopni swobody_.

Spójrz na sekcje **Wiązania** i **Elementy**, aby zobaczyć nowo utworzone wiązania i linie. Gdy twoje szkice mają wiele elementów, może być trudno je wybrać w oknie [widoku 3D](/3D_view/pl "3D view/pl"), więc możesz użyć tych list, aby wybrać dokładnie ten obiekt który chcesz.

![](/images/02_Sk01_Sketcher_construction.png)

Linie konstrukcyjne tworzące kształt gwiazdy ze środkiem w miejscu początku układu współrzędnych.

## Geometria detalu

Geometria właściwa musi mieć kształt zamknięty, jeśli ma być użyta jako profil, który może być wytłaczany za pomocą takich narzędzi jak ![](/images/PartDesign_Pad.svg) [Projekt Części: Wyciągnij wybrany szkic](/PartDesign_Pad/pl "PartDesign Pad/pl").

Jeśli wcześniej nie opuściłeś tego trybu, upewnij się, że nie jesteś w trybie konstrukcji, klikając na przycisk ![](/images/Sketcher_ToggleConstruction.svg) [Przełącz tryb konstrukcji](/Sketcher_ToggleConstruction/pl "Sketcher ToggleConstruction/pl").

### Łuki zewnętrzne

4. Rysujemy okrąg.

: 4.1. Kliknij w przycisk ![](/images/Sketcher_Circle.svg) [Utwórz okrąg w szkicowniku](/Sketcher_CreateCircle/pl "Sketcher CreateCircle/pl").
: 4.2. Kliknij na **początek** szkicu, aby ustawić punkt środka okręgu.
: 4.3. Kliknij w dowolnym miejscu w oknie [widoku 3D](/3D_view/pl "3D view/pl"), aby ustawić promień obwodu jako odległość od punku początku. Zrób to w przybliżeniu - około `8mm`. Wymiar ustawimy ponownie później.

5. Utwórz kilka łuków.

: 5.1. Kliknij na przycisk ![](/images/Sketcher_Arc.svg) [Utwórz łuk w szkicowniku](/Sketcher_CreateArc/pl "Sketcher CreateArc/pl").
: 5.2. Przesuń kursor do punktu końcowego jednej z linii konstrukcyjnych i kliknij na nią. Spowoduje to ustawienie środkowego punktu łuku w pozycji ![](/images/Constraint_PointOnPoint.svg) [zbierznej](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl") z punktem końcowym tej linii.
: 5.3. Kliknij raz w oknie [widoku 3D](/3D_view/pl "3D view/pl") w dowolnym miejscu, aby jednocześnie ustalić promień łuku i pierwszy z jego punktów końcowych. Wyznacz promień w przybliżeniu na wartość `8mm`.
: 5.4. Przesuń kursor w kierunku przeciwnym do ruchu wskazówek zegara, aby wyznaczyć łuk, który ma swoją wklęsłość skierowaną ku początkowi szkicu. Kliknij, aby ustawić ostateczny punkt końcowy łuku, definiując łuk, który w przybliżeniu rozciąga się na `180°` lub połowę okręgu.
: 5.5. Powtórz te kroki dla każdej linii konstrukcyjnej, tak aby każda z nich posiadała okrągły łuk na swoim końcu. Nazwiemy te łuki łukami zewnętrznymi.

![](/images/03_Sk01_Sketcher_outer_arcs.png)

Łuki dodane w punktach końcowych linii konstrukcyjnych. Dodatkowo okrąg centralny.

### Łuki wewnętrzne

6. Rysujemy łuk pomiędzy każdą parą łuków zewnętrznych.

: 6.1. Nadal przy aktywnym narzędziu ![](/images/Sketcher_Arc.svg) [Utwórz łuk](/Sketcher_CreateArc "Sketcher CreateArc") kliknij gdzieś pomiędzy dwoma łukami zewnętrznymi, ale w odstępie od początku szkicu, aby ustawić środek nowego łuku.
: 6.2. Kliknij w pobliżu punktu końcowego pierwszego z łuków zewnętrznych. Następnie przesuń kursor, aby przeciągnąć zakończenie tworzonego łuku w pobliże kolejnego punktu końca, sąsiedniego łuku zewnętrznego, tak jakbyś próbował połączyć punkty końcowe łuków zewnętrznych. Tym razem wklęsłość musi być tworzona w kierunku od punktu początku szkicu.
: 6.3. Powtórz te kroki, tak aby każda para łuków zewnętrznych miała nowy łuk pomiędzy nimi. Nazwiemy nowo utworzone łuki, łukami wewnętrznymi.

**Podsumowując**, łuki zewnętrzne powinny mieć krzywiznę skierowaną na zewnątrz, a wklęsłość skierowaną w stronę początku szkicu;  
łuki wewnętrzne powinny mieć krzywiznę skierowaną do wewnątrz, a ich wklęsłość powinna być skierowana od tego samego punktu początku szkicu.

![](/images/04_Sk01_Sketcher_inner_arcs.png)

Łuki dodawane pomiędzy pierwszym zestawem umieszczonych łuków zewnętrznych.

## Wiązania

Spójrz raz jeszcze na [panel zadań](/Task_panel/pl "Task panel/pl"). Ze względu na nowe elementy geometryczne, które narysowaliśmy, sekcja **Komunikaty solwera** wskazuje jeszcze więcej _stopni swobody_.
_Stopień swobody_ _(DOF)_ wskazuje na możliwy ewentualny ruch jednego elementu. Na przykład, punkt może być przesuwany zarówno w kierunku poziomym jak i pionowym, a więc ma dwa stopnie swobody. Linia jest zdefiniowana przez dwa punkty, a więc w sumie posiada cztery stopnie swobody. Jeżeli zwiążemy jeden z tych punktów, to cały system ma tylko dwa stopnie swobody. Jeżeli dodatkowo zwiążemy ruch poziomy pozostałego punktu, to mamy tylko jeden stopień swobody. Jeżeli natomiast zwiążemy również ruch pionowy tego punktu, to ostatni stopień swobody zniknie, a linia nie będzie mogła być już przemieszczana.

Do tej pory, kiedy rysowaliśmy linie i łuki, szkicownik dodawał dla nas automatyczne wiązania, te, które utrzymują linie powiązane z początkiem, a łuki zewnętrzne powiązane z liniami konstrukcyjnymi. Nie dodaliśmy jednak innych wyraźnych wiązań, dzięki czemu kształty geometryczne mogą być nadal przesuwane w wielu kierunkach. **Wiązania to _zasady_, które mówią nam, w jakich warunkach obiekt geometryczny może się poruszać i na ile jest to możliwe.** Służą one do eliminacji stopni swobody, dzięki czemu szkic jest stabilny. Jeśli wyeliminujemy wszystkie stopnie swobody, wówczas szkic jest _całkowicie związany_ i posiada sztywny kształt, to znaczy, że jego punkty nie mogą być przemieszczane. Ogólnie rzecz biorąc, dobrym pomysłem jest całkowite związanie szkiców, ponieważ spowoduje to powstanie stabilnych modeli.

Istnieją dwa główne rodzaje wiązań:

- _Wiązania geometrii_ definiują właściwości kształtów bez określania dokładnych wymiarów, np. poziomu, pionu, równoległości, prostopadłości i zbieżności.
- _Wiązania danych_ definiują charakterystykę kształtów poprzez określenie wymiarów, na przykład wymiar długości lub kąta.

## Wiązania geometrii

### Jednakowa długość i promień

7. Wiązania geometrii linii i łuków.

: 7.1 Zaznacz wszystkie pięć linii konstrukcyjnych. Wystarczy kliknąć tylko raz, by wybrać element.
: 7.2. Naciśnij przycisk ![](/images/Constraint_EqualLength.svg) [Utwórz wiązanie równości](/Sketcher_ConstrainEqual/pl "Sketcher ConstrainEqual/pl").
: _Uwaga:_ utworzone zostaną cztery wiązania. Są one tworzone łańcuchowo, pierwsza linia ma taką samą długość jak druga, która ma taką samą długość jak trzecia, która ponownie ma taką samą długość jak czwarta, która z kolei ma taką samą długość jak piąta. Tak więc w tym przypadku, pierwsza i piąta mają tę samą długość.

: 7.3. Wybierz wszystkie pięć łuków zewnętrznych, te, które są umieszczone na końcu linii konstrukcyjnej.
: 7.4. Naciśnij przycisk ![](/images/Constraint_EqualLength.svg) [Utwórz wiązanie równości](/Sketcher_ConstrainEqual/pl "Sketcher ConstrainEqual/pl").
: 7.5. Powtórz to ze wszystkimi łukami wewnętrznymi, tymi między łukami zewnętrznymi.
: _Uwaga:_ ponowne wiązania mają charakter łańcuchowy. Dlatego wszystkie łuki zewnętrzne będą miały ten sam promień, a wszystkie łuki wewnętrzne będą miały ten sam promień. W tym momencie, konkretna wartość tych długości nie jest zdefiniowana. Możesz użyć kursora myszki do przeciągnięcia punktu i zobaczyć, jak szkic jest aktualizowany z uwzględnieniem istniejących wiązań.

: 7.6. Zaznacz linię konstrukcyjną, której pozycja jest najbliższa osi pionowej.
: 7.7. Wybierz narzędzie ![](/images/Constraint_Vertical.svg) [Utwórz wiązanie pionowe](/Sketcher_ConstrainVertical/pl "Sketcher ConstrainVertical/pl") _(opcjonalnie)_. Jeśli narysujesz linię konstrukcyjną w dół nad osią Y, automatycznie ![](/images/Constraint_PointOnObject.svg) [Punkt dotyczący wiązania z obiektem](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl") zostanie już umieszczony, utrzymując linię konstrukcyjną w pionie. W takim przypadku nie jest wymagane tworzenie dodatkowego ![](/images/Constraint_Vertical.svg) [wiązania pionowego](/Sketcher_ConstrainVertical/pl "Sketcher ConstrainVertical/pl").

_Uwaga:_ w trakcie dodawania wiązań, w obszarze okna [widoku 3D](/3D_view/pl "3D view/pl"), nad rysunkiem geometrii pojawiają się symbole graficzne wskazujące typ zastosowanego wiązania. Jeśli te symbole przysłaniają ci widok, możesz je ukryć, usuwając zaznaczenie wiązań w polu [panelu zadań](/Task_panel/pl "Task panel/pl"). Należy również zauważyć, że liczba stopni swobody maleje po dodaniu każdego z wiązań.

_Uwaga 2:_ jeśli chcesz tymczasowo wyłączyć wiązanie, możesz zaznaczyć je i nacisnąć przycisk ![](/images/Sketcher_ToggleActiveConstraint.svg) [Przełącz aktywność wiązania](/Sketcher_ToggleActiveConstraint/pl "Sketcher ToggleActiveConstraint/pl"). Gdy zechcesz zastosować je ponownie, wciśnij powtórnie ten sam przycisk.

![](/images/05a_Sk01_Sketcher_equality_constraints_lines.png) ![](/images/05b_Sk01_Sketcher_equality_constraints_O-arcs.png)

![](/images/05c_Sk01_Sketcher_equality_constraints_I-arcs.png)

Szkic z wiązaniami równości stosowanymi do linii konstrukcyjnych oraz do dwóch zestawów łuków.

### Zbieżność

8. Nakładamy wiązanie zbieżności na łuki.

: 8.1. Zaznacz punkt końcowy łuku zewnętrznego i najbliższy mu punkt końcowy sąsiedniego łuku wewnętrznego.
: 8.2. Wybierz narzędzie ![](/images/Constraint_Tangent.svg) [Utwórz styczną](/Sketcher_ConstrainTangent/pl "Sketcher ConstrainTangent/pl"). Dzięki temu dwa sąsiadujące ze sobą łuki łagodnie połączą się w punktach końcowych.

8.3. Powtarzaj tą czynność dla poszczególnych punktów końcowych łuków, aż powstanie profil zamknięty.

_Uwaga:_ bardzo często zastosowanie wiązania zbieżności spowoduje przesunięcie geometrii w celu uzyskania płynnego połączenia. Być może trzeba będzie użyć kursora do zmiany położenia punktów przed nałożeniem następnego wiązania zbieżności. Spróbuj umieścić punkty końcowe w taki sposób, aby dwa łuki nie były zbytnio od siebie oddalone, dzięki czemu można je połączyć za pomocą krótkiej, a nie długiej linii.

Na tym etapie stworzyliśmy zamknięty profil, ponieważ końce wszystkich łuków zostały związane razem. Teraz możemy wprowadzić wiązania punktów odniesienia, aby ustalić kształt szkicu. Podczas gdy wymiary linii i łuków pozostają niezmienione, możemy przeciągać punkty szkicu i obserwować, jak zmienia się cały szkic.

![](/images/06_Sk01_Sketcher_tangency_constraints.png)

Szkic z wiązaniami zbieżności nałożonymi na łuki, które powodują zamknięcie kształtu.

## Wiązania wymiarów

Wiązania te definiują liczbowe odległości między dwoma punktami, oraz kąty między dwoma liniami.

### Odległości i kąty

9. Ustalamy rozmiar linii konstrukcyjnych.

: 9.1. Zaznacz linię konstrukcyjną związaną pionowo.
: 9.2. Wybierz narzędzie ![](/images/Constraint_VerticalDistance.svg) [Ustal pionowa odległość ...](/Sketcher_ConstrainDistanceY/pl "Sketcher ConstrainDistanceY/pl")
: 9.3. Ustaw długość na `30 mm`. Ponieważ wszystkie linie konstrukcyjne są związane taką samą długością, wszystkie te linie dostosowują swoje rozmiary w tym samym czasie.

10. Ustawiamy kąt pomiędzy liniami konstrukcyjnymi.

: 10.1. Zaznacz pionową linię konstrukcyjną i kolejna linię znajdującą się najbliżej niej.
: 10.2. Wybierz narzędzie ![](/images/Constraint_InternalAngle.svg) [Ustaw kąt linii](/Sketcher_ConstrainAngle/pl "Sketcher ConstrainAngle/pl").
: 10.3. Ustaw wartość kąta na `72°`.
: 10.4. Powtórz tę samą procedurę dla każdej pary sąsiadujących linii.
: _Uwaga:_ na tym etapie szkic może mieć bardzo niewiele swobody, co oznacza, że jego kształt nie może być zbytnio zmieniony. Jeśli spróbujesz dodać więcej wiązań, mogą one spowodować konflikt z już istniejącymi. Jeśli tak jest, nie dodawaj tych wiązań i przejdź do następnych kroków.

![](/images/07a_Sk01_Sketcher_length_constraint.png) ![](/images/07b_Sk01_Sketcher_angle_constraint.png)

Szkic z wiązaniem długości nakładanym na jedną pionową linię konstrukcyjną _(po lewej)_, oraz wiązaniem kątowym na trzy pary linii konstrukcyjnych _(po prawej)_.

### Promień

11. Ustalamy rozmiar łuków.

: 11.1. Zaznacz jeden z łuków zewnętrznych umieszczonych na końcu linii konstrukcyjnej.
: 11.2. Wybierz narzędzie ![](/images/Constraint_Radius.svg) [Zwiąż łuk ...](/Sketcher_ConstrainRadius/pl "Sketcher ConstrainRadius/pl").
: 11.3. Ustaw długość promienia na `8 mm`. Ponieważ wszystkie łuki zewnętrzne są związane tym samym promieniem, wszystkie te łuki dostosowują rozmiary w tym samym czasie.
: 11.4. Zaznacz jeden z łuków wewnętrznych, pomiędzy dwoma łukami zewnętrznymi.
: 11.5. Wybierz narzędzie ![](/images/Constraint_Radius.svg) [Zwiąż łuk ...](/Sketcher_ConstrainRadius/pl "Sketcher ConstrainRadius/pl").
: 11.6. Ustaw wartość promienia na `11mm`. Ponieważ wszystkie łuki wewnętrzne są związane tym samym promieniem, wszystkie te łuki dostosowują rozmiary w tym samym czasie.

![](/images/08a_Sk01_Sketcher_radius_1_constraint.png) ![](/images/08b_Sk01_Sketcher_radius_2_constraint.png)

Szkic z wiązaniami promienia nałożonymi na łuki zewnętrzne _(po lewej)_ i wewnętrzne _(po prawej)_.

: 11.7. Na koniec wybierz koło ze środka szkicu, naciśnij przycisk ![](/images/Constraint_Radius.svg) [Zwiąż łuk ...](/Sketcher_ConstrainRadius/pl "Sketcher ConstrainRadius/pl"), i podaj wartość `8mm`.

Powinieneś zakończyć swoją pracę szkicem całkowicie związanym. Można to potwierdzić zauważając zmianę koloru geometrii głównej oraz komunikatem, który jest pokazany w polu [Widoku połączonego](/Task_panel/pl "Task panel/pl").

![](/images/09_Sk01_Sketcher_fully_constrained.png)

Szkic z zastosowanymi wszystkimi wiązaniami geometrycznymi i dotyczącymi układu odniesienia.

## Wytłaczanie

12. Teraz, gdy mamy już całkowicie związany szkic, można go wykorzystać do stworzenia jednolitej bryły.

: 12.1. Wyjdź z trybu edycji szkicu, naciskając przycisk Zamknij lub naciskając dwukrotnie klawisz Esc. Szkic powinien pojawić się w [widoku drzewa](/Tree_view/pl "Tree view/pl") oraz w oknie [widoku 3D](/3D_view/pl "3D view/pl").
: 12.2. Przejdź do Środowiska pracy [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").
: 12.3. Po wybraniu szkicu w [widoku drzewa](/Tree_view/pl "Tree view/pl") naciśnij ![](/images/PartDesign_Body.svg) [Stwórz nową zawartość](/PartDesign_Body/pl "PartDesign Body/pl"), wybierz domyślną płaszczyznę _XY_ i naciśnij OK. Szkic powinien pojawić się teraz wewnątrz obiektu.
: 12.4. Wybierz szkic, a następnie naciśnij ![](/images/PartDesign_Pad.svg) [Wyciągnij wybrany szkic](/PartDesign_Pad/pl "PartDesign Pad/pl"), wybierz domyślne opcje i naciśnij przycisk OK, aby wykonać wyciągnięcie bryły.

![](/images/09b_Sk01_Sketcher_fully_constrained_clean.png) ![](/images/10_Sk01_Sketcher_solid_extrusion.png)

Po lewej: szkic w pełni związany, z zaznaczonymi tylko najważniejszymi z wiązań. Po prawej: wyciągnięcie wykonane z [Projekt Części: Wyciągnij wybrany szkic](/PartDesign_Pad/pl "PartDesign Pad/pl").

## Informacje dodatkowe

Aby uzyskać bardziej szczegółowy opis szkicownika, przejdź do dokumentacji [środowiska pracy Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), a także przeczytaj [Poradnik do szkicownika](/Sketcher_Lecture/pl "Sketcher Lecture/pl").

Ograniczenie szkicu może być wykonane na wiele różnych sposobów. Ogólnie rzecz biorąc, zaleca się użycie najpierw ograniczeń geometrycznych i zminimalizowanie liczby ograniczeń w układzie odniesienia, ponieważ upraszcza to pracę wewnętrznego solwera wiązań. Aby to zbadać, powtórz ten przykład, dodając teraz ograniczenia w innej kolejności.

- Najpierw należy związać linie konstrukcyjne przed narysowaniem łuków.
- Lub określ rozmiar łuków przed uczynieniem ich stycznymi.
- Lub ustaw kąt linii konstrukcyjnych przed dodaniem kolejnych elementów.
- Spróbuj użyć innej geometrii konstrukcji.

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_Sketcher_Tutorial/pl&oldid=1467971>"
