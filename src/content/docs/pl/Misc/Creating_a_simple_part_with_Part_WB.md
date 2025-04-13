---
title: Środowisko CzęśćTworzenie prostej części
---

|                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ćwiczenie                                                                                                                                                                                                                                                                                                                  |
| Temat                                                                                                                                                                                                                                                                                                                      |
| Modelowanie                                                                                                                                                                                                                                                                                                                |
| Poziom trudności                                                                                                                                                                                                                                                                                                           |
| początkujący                                                                                                                                                                                                                                                                                                               |
| Czas wykonania                                                                                                                                                                                                                                                                                                             |
| 2 godziny                                                                                                                                                                                                                                                                                                                  |
| Autorzy                                                                                                                                                                                                                                                                                                                    |
| heda                                                                                                                                                                                                                                                                                                                       |
| Wersja FreeCAD                                                                                                                                                                                                                                                                                                             |
| 0.19 lub nowszy                                                                                                                                                                                                                                                                                                            |
| Pliki z przykładami                                                                                                                                                                                                                                                                                                        |
| nie dołączono                                                                                                                                                                                                                                                                                                              |
| Zobacz również                                                                                                                                                                                                                                                                                                             |
| [Projekt Części: tworzenie podstawowych brył](/Creating_a_simple_part_with_PartDesign/pl "Creating a simple part with PartDesign/pl"), [Tworzenie prostej części za pomocą środowiska pracy Rysunek Roboczy i Część](/Creating_a_simple_part_with_Draft_and_Part_WB/pl "Creating a simple part with Draft and Part WB/pl") |
|                                                                                                                                                                                                                                                                                                                            |

## Wprowadzenie

Ten poradnik ma służyć jako pierwsze wprowadzenie do modelowania 3D z wykorzystaniem środowiska pracy [Część](/Part_Workbench/pl "Part Workbench/pl") ![](/images/Switch_PartWorkbench.JPG) programu FreeCAD. Po ukończeniu tego poradnika powinieneś umieć tworzyć proste modele 3D przy użyciu elementów pierwotnych takich jak sześciany, cylindry itp. techniką zwaną [Constructive Solid Geometry](https://en.wikipedia.org/wiki/Constructive_solid_geometry), w skrócie modelowanie **CSG**. Innym sposobem tworzenia modeli 3D jest użycie kształtu 2D poprzez np. wyciąganie lub obracanie kształtu 2D w przestrzeni 3D. Aby zapoznać się z tą techniką, proszę prześledzić siostrzany poradnik _[Projekt Części: tworzenie podstawowych brył](/Creating_a_simple_part_with_PartDesign/pl "Creating a simple part with PartDesign/pl")_. Oba poradniki celowo mają wygenerowany dokładnie ten sam model, co pozwala początkującym zapoznać się z dwoma różnymi technikami i ich implementacją w FreeCAD. Definicja tych dwóch technik może być postrzegana jako ściśle podzielona z semantycznego punktu widzenia, jednakże nie ma nic, co bezpośrednio utrudniałoby mieszanie tych technik podczas tworzenia modeli. Istnieją pewne zastrzeżenia, na które należy uważać przy mieszaniu technik modelowania, są one związane głównie z aspektami tego, jak FreeCAD jest zaprogramowany. Istnieje [trzeci poradnik](/Creating_a_simple_part_with_Draft_and_Part_WB/pl "Creating a simple part with Draft and Part WB/pl") przeznaczony jako pierwsze wprowadzenie do przykładu mieszanego modelowania. Używa on środowiska pracy **Rysunek Roboczy** do stworzenia płaskiego profilu 2D, który jest wykorzystywany do wytłaczania bryły w środowisku pracy **Część**, do stworzenia takiego samego modelu jak w niniejszym poradniku.

Przed rozpoczęciem proszę zapoznać się ze sposobem **[operowania](/Mouse_navigation/pl "Mouse navigation/pl")** w przestrzeni 3D. Po ustawieniu kursora myszki na selektor _Profil nawigacji_ w prawym dolnym rogu okna programu FreeCAD pojawia się okienko z aktualnym profilem myszki, jak na poniższym obrazku.

![](/images/T101pwb00-01_navi.png)

Wielu nowych użytkowników programów CAD utknęło podczas nauki oprogramowania, jeśli tak się stało, proszę śmiało przeszukać wiki lub forum w celu uzyskania dalszych informacji - istnieje szansa, że inni również utknęli w przeszłości na tej samej konkretnej rzeczy, więc istnieje już odpowiedź na twoje konkretne pytanie. Albo napisz post na forum ze swoimi pytaniami lub odkryciami. Forum ma kilka wątków, w których użytkownicy otrzymują pomoc w wykonaniu różnych zadań, wątki te są często podobne do poradników i często zawierają konkretne ilustracje.

### Przewodnik zawiera następujące zagadnienia

- Model do wykonania,
- Użycie środowiska pracy Część do tworzenia i manipulowania pierwotnymi elementami konstrukcyjnymi,
- Zmianę koloru i przezroczystości,
- Alternatywny sposób na umieszczenie otworu,
- Wykonanie otworu typu z pogłębieniem,
- Tworzenie wydrążonego elementu,
- Alternatywny sposób na umieszczenie fazy,
- Edycja wymiarów,
- Organizowanie drzewa w odmienny sposób,
- Zawijanie.

## Model do wykonania

![](/images/GGTuto1_Vue.PNG)

![](/images/T101pwb01-02_dims.png)

## Użycie środowiska pracy Część do tworzenia i manipulowania pierwotnymi elementami konstrukcyjnymi

Utwórz nowy dokument i zapisz go bezpośrednio pod nową nazwą, dobrą praktyką jest upewnienie się, że zapisujesz dokument w regularnych odstępach czasu, lub tuż przed większymi operacjami.
Następnie przełącz się do środowiska _[Część](/Part_Workbench/pl "Part Workbench/pl")_ używając [selektora środowisk](/Getting_started/pl#Poznawaj_interfejs_u.C5.BCytkownika "Getting started/pl") _(oznaczony jako 10 na podlinkowanym obrazku)_ lub przechodząc do menu **Widok → Środowisko pracy**. FreeCAD uruchomi się z paskami narzędzi u góry, widokiem złożonym po lewej stronie i widokiem 3D po prawej.

### Utwórz główny blok bryły

Naciśnij przycisk narzędzia ![](/images/Part_Box.svg) [Sześcian](/Part_Box/pl "Part Box/pl"), aby stworzyć domyślną bryłę sześcianu. Sześcian pojawi się w oknie [widoku 3D](/3D_view/pl "3D view/pl"), a także jako nowy obiekt w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") na pasku bocznym.

Naciśnij przycisk narzędzia ![](/images/Std_ViewIsometric.svg) [Widok izometryczny](/Std_ViewIsometric/pl "Std ViewIsometric/pl") aby zobaczyć sześcian w przestrzeni 3D.

![](/images/T101pwb01-03_cube1.png)

Wybierz sześcian w oknie [widok drzewa](/Tree_view "Tree view"), zostanie on podświetlony na zielono. Poniżej widoku drzewa zobaczysz teraz, że sześcian domyślnie jest tworzony z wymiarami **długość x szerokość x wysokość** jako **10 x 10 x 10 mm**. Zmień te wymiary na **100 x 30 x 50** zgodnie z założeniami początkowymi modelu.

![](/images/T101pwb01-04_cubedims.png)

Podczas zmiany właściwości, jak na przykład _Długość_ poprzez pole wyboru, można albo wprowadzić wartości, albo użyć kółka przewijania do odmierzenia wartości w górę lub w dół. Oczywiście można również użyć strzałek do zmiany wartości w górę lub w dół. Na obrazku po prawej stronie, właściwość _Wysokość_ znajduje się w trybie edycji, kręcenie kółkiem przewijania, gdy mysz znajduje się nad tą komórką, zmieni wartość o jeden w górę lub w dół.

Kliknij w narzędzie ![](/images/Std_ViewFitAll.svg) **[Przybliż i dopasuj wszystko](/Std_ViewFitAll/pl "Std ViewFitAll/pl")** aby zobaczyć cały sześcian.

![](/images/T101pwb01-05_cube2.png)

### Tworzenie zaokrąglenia

Aby wykonać zaokrąglony narożnik, w pasku narzędziowym naciśnij narzędzie ![](/images/Part_Fillet.svg) _[Zaokrąglenie](/Part_Fillet/pl "Part Fillet/pl")_, co spowoduje otwarcie _panelu zadań_ dla zaokrągleń w oknie [widoku połączonego](/Combo_view/pl "Combo view/pl"). Zmień wartość w polu wyboru _promień_ na `20 mm`, a następnie w widoku 3D wybierz krawędź szerokości w prawym górnym rogu i kliknij przycisk OK.

![](/images/T101pwb01-06_filletrad.png)

Zamykamy _panel zadań_ i wracamy do widoku Drzewa, w którym zamiast wcześniejszego sześcianu znajduje się teraz obiekt zaokrąglenia.

### Widoczność obiektów podrzędnych

Kliknij na znak plusa, aby rozwinąć obiekty podrzędne zaokrąglenia, którym w tym przypadku jest _sześcian_, utworzony przez nas wcześniej, ale jest on poszarzony. Zaznacz sześcian i naciśnij spację - to przełącza widoczność, więc sześcian jest teraz ponownie widoczny, a ikona nie jest już nieaktywna. Aby usunąć zaznaczenie sześcianu, kliknij w pustym miejscu w widoku drzewa lub oknie widoku 3D.

![](/images/T101pwb01-07_fillet.png)

### Tworzenie sfazowania

Następnie tworzymy 30-stopniową _fazę_, zaczynamy od przełączenia widoczności sześcianu będącego obiektem podrzędnym zaokrąglenia. W środowisku pracy [Część](/Part_Workbench/pl "Part Workbench/pl") jest narzędzie do sfazowania, ale zamiast go używać zrobimy fazę za pomocą innego bloku i cięcia funkcją logiczną.

Utwórz nowy ![](/images/Part_Box.svg) **[Sześcian](/Part_Box/pl "Part Box/pl")** o wymiarach 60 x 30 x 30. Zmień _kąt umiejscowienia_ na -30 stopni.

![](/images/T101pwb01-08_chamfer1.png)

Kąt umieszczenia wykorzystuje _wektor umieszczenia_ _(oś)_ jako oś obrotu. Domyślnie jest to oś Z, która nie odpowiada naszemu kierunkowi docelowemu, zmiana wektora pozycjonowania na _oś Y_ powoduje pożądaną orientację narzędzia tnącego dla fazy.

![](/images/T101pwb01-09_chamfer2.png)

Takie samo umiejscowienie można osiągnąć również z innymi wartościami, najprostszym alternatywnym przykładem umiejscowienia, które jest takie samo, jest kąt +30 stopni i nadana wartość dla osi Y, równa -1.

#### Konsola Python

Ponadto należy skorygować położenie, patrząc na rysunek gotowej części, nie ma bezpośredniego wymiaru, który można wykorzystać do zamierzonego przesunięcia w górę. Skoro wymiar w górę jest tym potrzebnym, musimy go obliczyć. Wykorzystajmy do tych obliczeń wbudowaną konsolę _[Python](/Python_console/pl "Python console/pl")_, jest to podstawowa trygonometria. Jeżeli konsola Python w programie FreeCAD nie jest widoczna, kliknij prawym przyciskiem myszki na puste miejsce w obszarze paska narzędzi i zaznacz opcję _konsola Python_, ta powinna pojawić się w obszarze roboczym. Gdy już się tam pojawi powinieneś również dodać okienko _[widoku raportu](/Report_view/pl "Report view/pl")_ jeżeli nie jest jeszcze widoczne. Widok raportu w większości przypadków dostarcza przydatnych informacji lub nawet podpowiedzi, co należy zrobić dalej dla różnych poleceń.

![](/images/T101pwb01-10_pyconsole.png)

Po zaimportowaniu modułu _[math](https://docs.python.org/3/library/math.html#module-math)_ z bibliotek standardowych środowiska Python możemy użyć formuły _(50 - math.tan(math.radians(30)) \* 50)_, aby znaleźć odległość w kierunku Z, na jaką należy przesunąć sześcian. Skopiuj wynik formuły z konsoli Python i wklej go do pozycji z dla **Cube001**. Narzędzie, które ma zostać użyte do wykonania cięcia fazy jest teraz prawidłowo zorientowane i umieszczone.

![](/images/T101pwb01-11_chamfer3.png)

#### Wyrażenia

Nie trzeba używać konsoli Python, aby wykonać obliczenia, W większości przypadków, gdy mamy do czynienia z numerycznymi wartościami parametrycznymi, FreeCAD posiada skrót do wbudowanego kalkulatora. Nazywa się on _[Wyrażenia](/Expressions/pl "Expressions/pl")_ w FreeCAD, do _trybu wyrażania_ można wejść klikając najpierw w pole wyboru dla pozycji Z, po prawej stronie pojawi się mała niebieskawa okrągła ikona.

![](/images/T101pwb01-12_expression1.png)

Kliknięcie tej ikony otwiera nowe okno _Edytor formuły_, w którym można wprowadzać formuły i wyrażenia, jak pokazano poniżej. Posługiwanie się wyrażeniami jest potężnym narzędziem, ponieważ można uzyskać dostęp do parametrów z modelu, efektywnie udostępniając wszystkie parametry w modelu jako zmienne do wykorzystania przy tworzeniu wyrażenia. W skrócie, w naszej formule, zamiast wpisywać liczbę 50 w edytorze formuły, możemy wprowadzić _parametr nazwany_ przechowujący wartość 50 sześcianu, z korzyścią, że jeśli zmienimy _wysokość_ sześcianu, pozycja fazy będzie automatycznie podążała. Wartość 50 w obecnym modelu jest określana jako _Cube.Length_, czyli właściwość _Length_ cechy _Cube_. Więcej informacji na ten temat można znaleźć na wiki.

![](/images/T101pwb01-13_expression2.png)

Aby wykonać cięcie, z wciśniętym klawiszem Ctrl najpierw wybierz obiekt **zaokrąglenie** w widoku drzewa, a następnie ostatnio utworzony sześcian _(nazwany **Cube001**)_ i na koniec w pasku narzędzi naciśnij przycisk ![](/images/Part_Cut.svg) _[Wytnij](/Part_Cut/pl "Part Cut/pl")_. Twój widok drzewa powinien teraz ponownie zawierać pojedynczy obiekt w korzeniu o nazwie **Cut**.

![](/images/T101pwb01-14_model1.png)

### Pasek narzędzi

Uwaga poboczna do pasków narzędzi, ponieważ są one typowym sposobem wywoływania poleceń. Na marginesie pasków narzędzi, ponieważ są one typowym sposobem wywoływania poleceń. Chociaż istnieje podstawowe ustawienie dla układu pasków narzędzi, rzeczywisty układ na Twoim komputerze może okazać się mniej niż idealny. W takich przypadkach można go łatwo dostosować. Rozważmy górną część poniższego obrazu. Są tam dwa rzędy pasków narzędzi i widoczna jest tylko ograniczona liczba przycisków paska narzędzi [środowiska Część](/Part_Workbench/pl "Part Workbench/pl"). Najprostszym sposobem na zobaczenie większej ilości przycisków paska narzędzi jest zmaksymalizowanie okna FreeCAD, o ile oczywiście nie jest już zmaksymalizowane.

Bardziej powszechne jest dostosowanie układu pasków narzędzi do potrzeb użytkownika i jego konkretnego komputera. Zmiana położenia odbywa się za pomocą uchwytu znajdującego się po lewej stronie każdego paska narzędzi. Możesz po prostu kliknąć i przeciągnąć za uchwyt w nowe miejsce. W dolnej części poniższego obrazu pozycje pasków narzędzi zostały dostosowane, odsłaniając ich pełną zawartość. Zmiany pozycji pasków narzędzi są trwałe przez całe sesje.

![](/images/T101pwb01-141_toolbars.png)

#### Narzędzia pomiarowe

Za pomocą _[narzędzi pomiarowych](/Part_Workbench/pl#Pomiary "Part Workbench/pl")_ w środowisku pracy **Część** możemy sprawdzić czy nasze obliczenia i umiejscowienie fazy jest poprawne. Naciśnij przycisk ![](/images/Part_Measure_Linear.svg) _[Wymiarowanie Liniowe](/Part_Measure_Linear/pl "Part Measure Linear/pl")_, otworzy się _panel zadań_, następnie wybierz 2 punkty końcowe jednej strony fazy.

![](/images/T101pwb01-15_model1measure1.png)

Zgadza się z wymiarem X wynoszącym 50mm, wyczyść pomiar i zamknij okno dialogowe.

### Utwórz otwór

Aby wykonać otwór, naciśnij przycisk narzędzia ![](/images/Part_Cylinder.svg) _[Walec](/Part_Cylinder/pl "Part Cylinder/pl")_, ustaw _promień_ na wartość `5 mm` i _wysokość_ `50 mm`.

![](/images/T101pwb01-16_cyl1.png)

Następnie musimy ustawić otwór zgodnie z wymiarami na rysunku. Zmień widok na ![](/images/Std_ViewTop.svg) **[Od góry](/Std_ViewTop/pl "Std ViewTop/pl")**, następnie kliknij prawym przyciskiem myszy na **Walec** w widoku Drzewa i wybierz opcję **Przekształć** z menu podręcznego.

![](/images/T101pwb01-17_cyl1translate.png)

Zmień wartość parametru _Przyrost przesunięcia_ na `5` i za pomocą czerwonej i zielonej strzałki ustaw walec we właściwej pozycji, przesuwając go o `15mm` w kierunku osi Y i `65mm` w X, przeciągając myszką końce strzałek. Kliknij OK, aby zamknąć okienko dialogowe _Przemieszczenie_. Aby wykonać otwór naciśnij klawisz Ctrl i zaznacz obiekty **Cut** oraz **Walec** w widoku Drzewa, a następnie naciśnij przycisk narzędzia ![](/images/Part_Cut.svg) _[Wytnij](/Part_Cut/pl "Part Cut/pl")_ na pasku narzędzi. Twój widok Drzewa powinien ponownie mieć pojedynczy obiekt w korzeniu o nazwie **Cut001**.

Gratulacje, model jest już skończony.

![](/images/T101pwb01-18_model1complete.png)

Mając gotowy podstawowy model, poznajmy różne sposoby na zmianę tego modelu, niektóre przykłady są związane z wyglądem, dodatkowymi funkcjami lub po prostu innym rozwiązaniem na wykonanie tego samego.

## Zmiana koloru i przezroczystości

Istnieje kilka różnych sposobów zmiany wyglądu obiektów, w tym przypadku użyjmy zakładki widok w części właściwości widoku złożonego. Najpierw wybierz obiekt w widoku drzewa, a następnie edytuj dowolną właściwość, taką jak kolor linii, kolor kształtu lub przezroczystość za pomocą **zakładki widoku** _(znajdującej się na dole okienka_ widoku złożonego*)*.

![](/images/T101pwb02-01_appearance1.png)

Niestety, gdy obiekt jest zaznaczony, trochę trudno zobaczyć, jak będzie wyglądał po dostrojeniu nowego wyglądu. Aby zobaczyć efekt końcowy należy odznaczyć obiekt. Oto nowy wygląd modelu, gdzie teraz można zobaczyć otwór przelotowy również w widoku izometrycznym. Innym sposobem edycji wyglądu jest użycie opcji **Widok → ![](/images/Std_SetAppearance.svg) Wygląd zewnętrzny ...**.

![](/images/T101pwb02-02_appearance2.png)

## Inny sposób na rozmieszczenie otworu

Wykonaj opcję _Zapisz jako ..._ z podaniem nowej nazwy pliku. Następnie usuń obiekt _Cut_, który dodał otwór i przesuń walec z powrotem do pozycji zerowej. Twój model powinien wyglądać jak na poniższym zdjęciu, które jest punktem wyjścia do zastosowania innej techniki w celu zlokalizowania otworu na środku górnej powierzchni. Zauważ, że kolor wrócił do domyślnej szarości, zmiana wyglądu, której dokonaliśmy, dotyczyła obiektu _Cut_, który teraz jest usunięty.

![](/images/T101pwb03-01_cyl.png)

Tym razem do usytuowania otworu posłuży środowisko pracy ![](/images/Workbench_Draft.svg) **[Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl")**. Otwór ma tak jak poprzednio znajdować się na środku górnej powierzchni czołowej, co pokrywa się z punktem środkowym przekątnej tej powierzchni.

Rozpocznij od przełączenia środowiska pracy na **Rysunek Roboczy**, może się okazać, że w widoku 3D pojawi się _siatka_, widoczność siatki można przełączać za pomocą narzędzia ![](/images/Draft_ToggleGrid.svg) [Przełącz widoczność siatki](/Draft_ToggleGrid/pl "Draft ToggleGrid/pl") na pasku narzędzi. Podczas korzystania z funkcjonalności _[przyciągania](/Draft_Snap "Draft Snap")_ w środowisku **Rysunek Roboczy** warto mieć włączone tylko interesujące nas _typy przyciągania_. Tym razem wystarczy pozostawić włączone _punkt końcowy, punkt środkowy i środek okręgu_, więc ustawienia przyciągania powinny wyglądać jak poniżej.

![](/images/T101pwb03-02_snap.png)

Znalezienie punktu, w którym należy umieścić środek walca, można by zrobić poprzez wykonanie przekątnej jako linii pomocniczej i użyć środka walca i punktu środkowego przekątnej do zidentyfikowania punktów, między którymi należy się poruszać, jednak okazuje się, że nie musimy nawet tworzyć żadnych linii pomocniczych, możemy zatrzasnąć się na już istniejącej geometrii bryły.

Zaznacz **Walec** w widoku drzewa _(zmieni kolor na zielony w oknie widoku 3D)_ i naciśnij przycisk ![](/images/Draft_Move.svg) **[Przesuń](/Draft_Move/pl "Draft Move/pl")** na pasku narzędzi. Otworzy się _panel zadań_ do przesuwania obiektów, upewnij się, że _Kopiowanie_ jest odznaczone.

![](/images/T101pwb03-03_move.png)

Następnie przesuń kursor myszki do górnej części walca tak, aby w środku okręgu pojawiła się _biała kropka_, jak na lewym zdjęciu poniżej, to wraz z symbolem środka obok wskaźnika myszki oznacza, że kliknięcie lewym przyciskiem myszki spowoduje przyciągnięcie do białego punktu.

![](/images/T101pwb03-04_snapselect.png)

Gdy na górnej ścianie pojawi się biała kropka, kliknij lewym przyciskiem myszki i powtórz czynność dla górnej kwadratowej ściany głównej bryły, jak na prawym obrazku powyżej, i zatwierdź wybór kliknięciem lewego przycisku myszki. Funkcja przyciągania wykorzystuje _środek masy_ dla każdego rodzaju ściany, a w tym przypadku środek masy jest identyczny z geometrycznym środkiem, który jest poszukiwany. Zauważyłeś już, że ruch walca jest animowany, więc zawsze widzisz, co się zaraz stanie.

Powtarzając jeszcze raz krok **cięcia logicznego** z wcześniejszego etapu, wykonamy otwór przelotowy, który uzupełni model. Korzystając z **narzędzia pomiaru liniowego** w środowisku Część sprawdzamy czy otwór jest prawidłowo umieszczony. Pomiar może być wykonany tylko pomiędzy _punktami_, więc pomiar jest wykonany od zera korpusu głównego do punktu szwu walca, co oznacza, że prawidłowa odległość wynosi `70mm` zamiast `65mm`, która znajduje się na rysunku, aby uwzględnić dodatkowy promień, zawarty w odległości.

![](/images/T101pwb03-05_modelmeasure.png)

## Wykonanie otworu z pogłębieniem stożkowym

Wróć do środowiska [Część](/Part_Workbench/pl "Part Workbench/pl") i utwórz _stożek_ używając narzędzia ![](/images/Part_Cone.svg) **[Stożek](/Part_Cone/pl "Part Cone/pl")** na pasku narzędzi. Zmień wartość _promień1_ na `0mm` i _promień2_ na `7mm` - da to 2mm _pogłębienia_. Nadając _wysokość_ stożkowi 7mm otrzymamy kąt wierzchołkowy 90 stopni lub kąt pogłębienia 45 stopni. Warto zauważyć, że znów równie dobrze można by użyć narzędzia ![](/images/Part_Chamfer.svg) [Fazka](/Part_Chamfer/pl "Part Chamfer/pl").

Podczas pracy z programem FreeCAD będziesz miał do czynienia z kilkoma różnymi sposobami na osiągnięcie pozornie tego samego rezultatu. Nie ma absolutnej pewności co do tego, jaki jest właściwy sposób na osiągnięcie konkretnego efektu końcowego - jednak w konkretnym kontekście jeden konkretny sposób pracy może być bardziej elastyczny, pozwalać na wykorzystanie późniejszych funkcji itp. Sposób w jaki budujesz modele 3D będzie ewoluował w czasie, gdy będziesz poznawał coraz więcej funkcji i możliwości programu FreeCAD.

![](/images/T101pwb04-01_cone.png)

Przekształć stożek tak, by był "współśrodkowy" z otworem i "współpłaszczyznowy" z górną powierzchnią głównej bryły. Użyj do tego celu dowolnej metody opisanej wcześniej w tym poradniku.

Na poniższym rysunku przesunięcie zostało wykonane przy użyciu funkcji _Przemieszczenia_ i ustawieniu _przyrost_ na `1mm`, ponieważ stożek ma charakterystyczny wymiar `7mm`, co oznacza, że wcześniejsze ustawienie przyrostu na `5mm` nie pozwoli na poprawne pozycjonowanie. W celu łatwiejszego zorientowania się, że stożek znajduje się we właściwej pozycji, zastosowano renderowanie [![](/images/Std_DrawStyleWireFrame.svg)](/Std_DrawStyle/pl#Szkieletowy "Std DrawStyle/pl ") **[szkieletowe](/Std_DrawStyle/pl#Szkieletowy "Std DrawStyle/pl")**.

![](/images/T101pwb04-02_conetranslate.png)

Aby ukończyć model, skorzystajmy z polecenia ![](/images/Part_Boolean.svg) **[Operacje logiczne na bryłach](/Part_Boolean/pl "Part Boolean/pl")** zamiast najpierw wybierać obiekty i zastosować konkretną operację logiczną. Naciśnij przycisk na pasku narzędzi, otworzy się _panel zadań_, jak na poniższym obrazku po lewej stronie.

![](/images/T101pwb04-03_boolean.png)

Należy podać trzy elementy, _typ operacji_, _pierwszy kształt_ i _drugi kształt_. Stożek ma zostać wycięty, w tym poleceniu nazywa się to _Różnica_, a nie _Przecięcie_. Pierwszy kształt to nasz 'Cut001', jest on wymieniony w kategorii _Kształt złożony_, ponieważ jest zbudowany z kilku brył. Drugi kształt to _Stożek_. Po wprowadzeniu prawidłowych ustawień dla polecenia, kliknij przycisk Zastosuj, aby wykonać operację. To wszystko zostało wykonane na rysunku po prawej stronie, można tam również zauważyć, że na liście znajduje się teraz _kształt złożony_ _Cut002_, jest to nasz ostateczny kształt modelu. Po zmianie wyglądu zakończony model wygląda następująco:

![](/images/T101pwb04-04_modelcomplete.png)

## Wykonanie elementu pustego

Wykonaj opcję _Zapisz jako ..._ z podaniem nowej nazwy pliku. FreeCAD posiada wszystkie typowe operacje modelarza 3D, jedną z nich jest ![](/images/Part_Thickness.svg) _[Grubość](/Part_Thickness/pl "Part Thickness/pl")'_, która użyjemy do _wydrążania_ części.

Obróć model tak, aby widoczna była dolna ściana.

![](/images/T101pwb05-01_frombottom.png)

Zaznacz _dolną ścianę_ modelu, a następnie w środowisku pracy [Część](/Part_Workbench/pl "Part Workbench/pl") wybierz ![](/images/Part_Thickness.svg) _[Grubość](/Part_Thickness/pl "Part Thickness/pl")_ i ekran powinien wyglądać następująco:

![](/images/T101pwb05-02_thickness_cmd.png)

Kliknij OK, jak widzisz na narożnikach części jest teraz _promień_.

![](/images/T101pwb05-03_thickness_dimension.png)

Co więcej, po zmierzeniu szerokości części, obecnie wynosi ona 32 mm, a więc _grubość_ została zastosowana _na zewnątrz_. Edytujmy to, kliknij dwukrotnie na model w widoku Drzewa i zmień ustawienia _typu dołączenia_ na _przecięcie_ oraz ustawienia _grubości_ na wartość `-1`.

![](/images/T101pwb05-04_thickness_modify.png)

Teraz szerokość zewnętrzna części wynosi 30 mm, tak samo jak poprzednio, a narożniki są wszystkie ostre.

![](/images/T101pwb05-05_thickness_modified.png)

## Inny sposób umieszczenia fazki

Wykonaj opcję _Zapisz jako ..._ z podaniem nowej nazwy pliku. Następnie usuń cechy tak, aby model wyglądał jak poniżej.

![](/images/T101pwb06-01_startingpoint.png)

Utwórz **sześcian** o wymiarach **30 x 30 x 60**, kończąc jak poniżej:

![](/images/T101pwb06-02_with_cube.png)

Zmień **umiejscowienie**, wykonując najpierw obrót o -120 stopni wokół osi Y.

![](/images/T101pwb06-03_rotated_cube.png)

Na koniec zmień pozycję na **X=50** i **Z=50** i wykonaj **wycięcie**, aby uzyskać taki sam efekt jak wcześniej.

![](/images/T101pwb06-04_cube_cut.png)

To po raz kolejny potwierdza, że zawsze istnieje kilka sposobów na uzyskanie tego samego rezultatu, co jest powtarzającym się tematem, jeśli chodzi o modelowanie 3D. Jeśli chodzi o podstawowe geometrie lub bryły, można używać różnych środowisk w FreeCAD, jak również różnych poleceń i nadal mieć ten sam zewnętrzny kształt bryły. Po prostu musisz znaleźć własną drogę do zestawu preferowanych narzędzi i przepływu pracy, z których wygodnie korzystasz. Modelowanie w parametrycznym środowisku 3D jest procesem ciągłej nauki i wymaga praktyki, aby go opanować.

## Edycja wymiarów, kolorów ścian i problem nazewnictwa topologicznego

FreeCAD jest parametrycznym modelerem 3D, pozwala to na zmianę dowolnego _umiejscowienia_ lub _wymiaru_, a model zostanie odpowiednio zaktualizowany. Ogólnie rzecz biorąc to działa, ale możliwe jest uszkodzenie modelu podczas edycji - na przykład, gdy zaokrąglenie jest oparte na krawędzi, która już nie istnieje z powodu edycji. Kiedy model ulega uszkodzeniu podczas edycji, określa się to jako **TNP, _(Topological Naming Problem)_ [Problem nazewnictwa topologicznego](/Topological_naming_problem/pl "Topological naming problem/pl")**.

Śmiało eksperymentuj ze zmianą wymiarów i umiejscowień, aby zobaczyć, czy możesz naruszyć model, nie zapomnij przeliczyć modelu po zmianach, jeśli to konieczne. Można to zrobić za pomocą narzędzia na pasku narzędzi ![](/images/Std_Refresh.svg) [Przelicz](/Std_Refresh/pl "Std Refresh/pl"), jeśli ikona jest "niedostępna" to nie ma potrzeby odświeżania obiektu.

### Zmiana położenia walca

Oto przykład walca przesuniętego ze środka na jedną stronę korpusu głównego za pomocą funkcji _Przemieszczenie_. Jak widać na rysunku, stożek nadal znajduje się w oryginalnym położeniu, nie naruszonym przesunięciem walca.

![](/images/T101pwb07-01_cylindermoved.png)

Kiedy przesuwasz walec i przebijasz się przez zewnętrzną powierzchnię, w wersji 0.19 tracisz część ustawień kolorów w swoim modelu. FreeCAD powraca do domyślnych ustawień użytkownika dla kolorów kształtu i przezroczystości w widoku 3D, jednak kształt **Cut002** nadal pokazuje kolory i przezroczystość, które miał wcześniej, jak widać na poniższym obrazku:

### Ustalenie kolorów

![](/images/T101pwb07-02_wrongcolor.png)

Oto jeden ze sposobów na przywrócenie ich. Najpierw zmień wartość _przezroczystości_ o jeden w górę lub w dół, a następnie z powrotem, to przywraca przezroczystość. Możesz zrobić tę samą sztuczkę z kolorem kształtu. Innym sposobem na przywrócenie koloru jest kliknięcie prawym przyciskiem myszy na "Cut002" w widoku drzewa i wybranie z menu kontekstowego opcji "Ustaw kolory ...". W wyświetlonym panelu zadań kliknij Ustaw na domyślne, co spowoduje przywrócenie koloru ustawionego we właściwościach widoku.

![](/images/T101pwb07-03_set_colors.png)

Polecenie **Ustaw kolory ...** umożliwia wybranie poszczególnych powierzchni kształtu i ustawienie indywidualnego koloru na wybranych powierzchniach.

### Wiele brył

Inny przykład, gdzie sześcian tworzący fazę został przesunięty i obrócony.

![](/images/T101pwb07-04_3solids.png)

Jak widać przy zmianie położenia fazy w ten sposób, efektem końcowym są _3 rozłączne bryły_. Środowisko pracy [Część](/Part_Workbench/pl "Part Workbench/pl") pozwala na to, natomiast [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") nie, albo otrzymasz _błąd wielu brył_ albo po prostu nie zostaną wyrenderowane wszystkie bryły.

### Problem nazewnictwa topologicznego

Wracając do oryginalnego, ukończonego modelu, zbadajmy jak nazwane są ściany.

Tutaj uaktywniony został **[Widok zaznaczenia](/Selection_view/pl "Selection view/pl")** aby dobitnie pokazać co jest zaznaczone a co nie, również kolorystyka została dopasowana tak, aby zaznaczenie było łatwiejsze do zobaczenia.

![](/images/T101pwb07-05_face2and9.png)

Wybranie jednej powierzchni bocznej i powierzchni wewnętrznej walca powoduje, że są one wewnętrznie nazywane powierzchniami _2_ i _9_, gdzie powierzchnia _2_ jest powierzchnią boczną. Numeracja powierzchni może być inna.

Przesunięcie walca tak, aby wgłębienie kończyło się na ścianie bocznej i wykonanie wyboru ścian powoduje teraz nadanie innego numeru dla ściany cylindrycznej.

![](/images/T101pwb07-06_newfacenumbers.png)

Twarz 2 jest prawą stroną pierwotnej ściany 2, lewa strona dawnej ściany 2 jest teraz ścianą 8. Część cylindryczna była ścianą 9, ale teraz jest ścianą 7. FreeCAD ponownie przypisuje numerację i kolejność nie musi być zachowana. Całkowita liczba ścian w pierwszym modelu wynosi 10, w wersji z walcową częścią przebijającą ścianę boczną całkowita liczba ścian wynosi 11. Więc oczywiście numeracja powierzchni musi się zmieniać, gdy zmienia się tzw. topologia. To pewnie wydaje się drobnym szczegółem, ale okazuje się dość istotne w parametrycznym modelowaniu CAD 3D. Wyobraź sobie, że użyłeś powierzchni cylindrycznej jako odniesienia dla innego elementu, wcześniej nazywała się ona powierzchnią 9, ale teraz nazywa się powierzchnią 8. Utracone zostało odniesienie do zamierzonej powierzchni cylindrycznej. Ponieważ FreeCAD, przynajmniej w obecnie wydanych wersjach, nie śledzi _zamierzonej powierzchni_, a jedynie _numerowaną powierzchnię_, model ulega uszkodzeniu, gdy odniesienie jest wykonane do powierzchni, która później jest przenumerowana. Zjawisku temu nadano nazwę **TNP _(Topological Naming Problem)_, [Problem nazewnictwa topologicznego](/Topological_naming_problem/pl "Topological naming problem/pl")**.

Zachęcamy do nauczenia się jak uniknąć uszkodzenia modeli z powodu TNP, dalszą lekturę można przeprowadzić [na stronie wiki dedykowanej tematowi](/Topological_naming_problem/pl "Topological naming problem/pl"), która w dużej mierze koncentruje się na przepływie pracy _sterowanym szkicem_, mechanizm leżący u podstaw jest taki sam. Opisana tutaj zmiana numeracji ścian dotyczy wszystkich elementów geometrycznych, ścian, krawędzi i wierzchołków.

## Organizowanie drzewa w odmienny sposób

Wykonaj opcję _Zapisz jako ..._ z podaniem nowej nazwy pliku. Następnie usuń wszystkie wycięcia kończąc na modelu wyglądającym jak poniżej:

![](/images/T101pwb08-01_primitives.png)

Podczas używania środowiska pracy _Część_ i modelowania brył bogatych w cechy, struktura drzewa bryły może być trudna do rozszyfrowania. Do tej pory utworzyliśmy jedną bryłę pierwotną / cechę i zastosowaliśmy operację logiczną. W środowisku Część można łączyć elementy pierwotne jedną operacją logiczną. W naszym przypadku mamy walec, stożek i sześcian, które są połączone operacją logiczną wycięcia.

Zamiast wykonywać wycięcie dla każdego elementu pierwotnego, możemy najpierw zastosować operację logiczną, ![](/images/Part_Fuse.svg) **[połączenia](/Part_Fuse/pl "Part Fuse/pl")** brył pierwotnych przeznaczonych do wycięcia logicznego, a następnie wykonać _wycięcie_ pomiędzy obiektami o nazwach _Fillet_ oraz _Fusion_.

Używając tego podejścia, widok drzewa kończy się wyglądając jak poniżej, co jest po prostu innym sposobem budowania tego samego modelu. Porównaj to z oryginalnym widokiem drzewa, żadne nie jest lepsze od drugiego, jednak podczas tworzenia bardziej złożonych modeli, jedno podejście nad drugim może mieć korzyści w łatwości modyfikacji / reorganizacji modelu w razie potrzeby.

![](/images/T101pwb08-02_fused.png)

## Zakończenie

Po przebrnięciu przez ten poradnik jesteś teraz krótko zaznajomiony z interfejsem użytkownika FreeCAD i poznałeś podstawy korzystania ze **środowiska Część**. Powinieneś teraz być w stanie budować proste modele według własnych upodobań. Środowisko pracy **Część** jest jednym ze środowisk, które można wykorzystać do tworzenia brył, innym jest **Projekt Części**. Poszczególne środowiska mają różne możliwości i sposoby pracy. Pełne nauczenie się programu FreeCAD, szczególnie biorąc pod uwagę wszystkie dodatki i makrodefinicje zajmuje lata, więc kontynuuj odkrywanie nowych i różnych sposobów tworzenia modeli - skorzystaj z różnych poradników na Wiki, podczas pracy z programem FreeCAD nauka nigdy się nie kończy. Sugeruje się abyś nauczył się _szkicowania_ i środowiska **Projekt Części** jeśli skupiasz się na tworzeniu brył. Jeśli skupiasz się na modelowaniu budynków, następnym etapem nauki powinno być środowisko **Rysunek Roboczy** i **Architektura**.

W końcu FreeCAD jest tworzony przez wolontariuszy w ich wolnym czasie. Jeśli chcesz dalej rozwijać możliwości programu, rozważ [pomoc w rozwoju FreeCAD](/Help_FreeCAD/pl "Help FreeCAD/pl"), na przykład poprzez poprawę dokumentacji.

Retrieved from "<http://wiki.freecad.org/index.php?title=Creating_a_simple_part_with_Part_WB/pl&oldid=1536701>"
