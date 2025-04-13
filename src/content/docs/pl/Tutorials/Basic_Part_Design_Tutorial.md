---
title: Poradnik Podstawy dla środowiska pracy Projekt Części
---

|                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ćwiczenie                                                                                                                                                                             |
| Temat                                                                                                                                                                                 |
| Modelowanie                                                                                                                                                                           |
| Poziom trudności                                                                                                                                                                      |
| Początkujący                                                                                                                                                                          |
| Czas wykonania                                                                                                                                                                        |
| poniżej godziny                                                                                                                                                                       |
| Autorzy                                                                                                                                                                               |
| Mark Stephen ([Quick61](/User:Quick61 "User:Quick61")) oraz HarryGeier ([HarryGeier](/index.php?title=User:HarryGeier&action=edit&redlink=1 "User:HarryGeier (page does not exist)")) |
| Wersja FreeCAD                                                                                                                                                                        |
| 0.17 lub nowszy                                                                                                                                                                       |
| Pliki z przykładami                                                                                                                                                                   |
| [Basic Part Design for v0.17](https://github.com/FreeCAD/Examples/blob/master/Basic_Part_Design_Tutorial_Example_017_Files/Basic_Part_Design_Tutorial_017.fcstd)                      |
| Zobacz również                                                                                                                                                                        |
| [Poradnik: Podstawy dla Środowiska pracy Part Design 019](/Basic_Part_Design_Tutorial_019/pl "Basic Part Design Tutorial 019/pl")                                                     |
|                                                                                                                                                                                       |

Ten poradnik zapozna nowego użytkownika z niektórymi narzędziami i technikami dostępnymi w środowisku pracy [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"). Ten poradnik nie jest kompletnym i wyczerpującym przewodnikiem po środowisku Projekt Części, a wiele narzędzi i możliwości nie zostało omówionych. Ten poradnik pozwoli użytkownikowi wykonać kroki niezbędne do modelowania części pokazanej na rysunku poniżej za pomocą szkiców.

![](/images/Tut17_final_refined.png)

Nagranie wideo przedstawiające całą konstrukcję znajduje się tutaj:
<https://youtu.be/geIrH1cOCzc>

_(każda sekcja ma swój własny podział Wideo poniżej)_

## Nim zaczniesz

## Zadanie

W tym poradniku, za pomocą stanowiska roboczego Projekt Części utworzysz trójwymiarowy model bryłowy części pokazanej na [Rysunku](/TechDraw_Workbench/pl "TechDraw Workbench/pl") poniżej. Podane są wszystkie wymiary niezbędne do wykonania tego zadania. Rozpoczniesz od stworzenia kształtu rdzenia z bazowego szkicu, a następnie zbudujesz go na tym kształcie, dodając coś, co jest znane jako Cechy. Cechy te albo dodadzą materiał do bryły, albo usuną materiał z bryły za pomocą dodatkowych szkiców i towarzyszących im operacji na cechach. Przewodnik ten nie będzie wykorzystywał wszystkich funkcji i narzędzi dostępnych w środowisku Part Design, ale powinien wykorzystywać je na tyle, aby dać użytkownikowi tego przewodnika solidne podstawy, na których będzie mógł budować swoją wiedzę i umiejętności.

## Model detalu

![](/images/Tutorial_Drawing_Sheet.png)

## Konstruowanie części

### Rozpoczynamy

Zacznij od upewnienia się, że jesteś w obszarze stanowiska pracy Part Design. Gdy już tam będziesz, będzie trzeba stworzyć nowy dokument, jeśli jeszcze tego nie zrobiłeś. Dobrym zwyczajem jest częste zapisywanie pracy, więc zanim cokolwiek innego zapisze nowy dokument, nadaj mu dowolną nazwę.

Wszystkie prace w środowisku Projekt Części rozpoczynają się od stworzenia Zawartości - [Body](/Glossary#Body "Glossary"). Następnie zbudujemy bryłę wewnątrz korpusu zaczynając od [szkicu](/Glossary#Sketch "Glossary").

1. Kliknij na przycisk ![](/images/PartDesign_Body.svg) [Utwórz nowa zawartość](/PartDesign_Body/pl "PartDesign Body/pl"), aby stworzyć i aktywować nowy obiekt Body. _Uwaga: ten krok może zostać pominięty. Podczas tworzenia szkicu, jeśli nie znaleziono istniejącego korpusu_ (obiektu Body)_, nowy zostanie automatycznie utworzony i aktywowany._
2. Kliknij na ![](/images/PartDesign_NewSketch.svg) [Utwórz nowy szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl") W ten sposób powstanie szkic w obrębie właśnie utworzonego korpusu.
3. Musimy określić, gdzie będzie dołączony szkic. Dołączymy go do płaszczyzny [początkowej](/Glossary#Origin "Glossary") z korpusu .
4. W zakładce [Zadania](/Task_panel/pl "Task panel/pl") z [widoku połączonego](/Combo_view/pl "Combo view/pl"), wybierz na liście **YZ_Plane** i naciśnij przycisk OK:

![](/images/Tut17_sketchplanes.png)

_Uwaga: możliwe, że przycisk OK może nie być widoczny, jeśli panel boczny nie jest wystarczająco szeroki. Można go rozszerzyć przeciągając jego prawą ramkę. Umieść wskaźnik myszy nad obramowaniem, gdy kursor zmieni się na dwukierunkową strzałkę, naciśnij i przytrzymaj lewy przycisk myszy i przeciągnij._

Po kliknięciu przycisku OK, FreeCAD automatycznie przełącza się do środowiska pracy [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") i otwiera szkic w trybie edycji:

![](/images/Tut17_sketcherempty.png)

### Tworzenie szkicu

Następnie należy użyć narzędzia ![](/images/Sketcher_CreatePolyline.svg) [polilinia](/Sketcher_CreatePolyline/pl "Sketcher CreatePolyline/pl") i wykonać kształt mniej więcej taki jak na następnym obrazku. Nie musi być on idealny, ponieważ kształt końcowy jest wykonywany z użyciem wiązań. Kiedy już będziesz miał podstawowy kształt, zaczniemy wprowadzać wiązania. Jeśli miałeś włączoną opcję Automatyczne wiązania, niektóre z tych wiązań zostaną zastosowane natychmiast, jeśli nie, wykonaj następujące czynności.
Ale najpierw upewnij się, że opuściłeś narzędzie polilinia, klikając prawym przyciskiem myszy lub dwukrotnie naciskając klawisz ESC. Kursor myszki powinien zmienić się z krzyżyka na standardowy kursor strzałki. Nie naciskaj klawisza ESC po raz trzeci, gdyż inaczej wyjdziesz z trybu edycji szkicu. Jeśli tak się stanie, kliknij zakładkę **Model**, a następnie kliknij dwukrotnie element szkicu na drzewie lub w menu kontekstowym kliknij prawym przyciskiem myszy i wybierz **Edytuj szkic**. Aby uniknąć opuszczania trybu edycji po zbyt częstym naciskaniu Esc, zmień preferencje **Klawisz Esc umożliwia wyjście z trybu edycji szkicu** _([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl"))_, zobacz [Preferencje szkicownika](/Sketcher_Preferences#Ogólne "Sketcher Preferences").

_UWAGA: Od czasu napisania tego poradnika wprowadzono ulepszenia do solvera szkicownika, jeśli wykryje on nadmiarowe wiązanie, zmieni kolor szkicu na pomarańczowy, a przed dodaniem kolejnych wiązań, nadmiarowe wiązanie powinno zostać usunięte._ (Nadmiarowe wiązanie jest pokazane w widoku Zadania, kliknij na niebieskie odniesienie i naciśnij przycisk Usuń)_"._

1. Wybierz dwie linie poziome klikając na nie myszką, a po wybraniu kliknij na ![](/images/Sketcher_ConstrainHorizontal.svg) [wiązanie poziome](/Sketcher_ConstrainHorizontal/pl "Sketcher ConstrainHorizontal/pl").
2. Wybierz linię pionową po prawej stronie, a następnie kliknij na ![](/images/Sketcher_ConstrainVertical.svg) [wiązanie pionowe](/Sketcher_ConstrainVertical/pl "Sketcher ConstrainVertical/pl").
3. Wybierz punkt początkowy i końcowy polilinii, a następnie kliknij na ![](/images/Sketcher_ConstrainCoincident.svg) [wiązanie zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl"), aby zamknąć polilinię.
4. Wybierz dolną linię poziomą i prawą linię pionową, a następnie zastosuj ![](/images/Sketcher_ConstrainEqual.svg) [wiązanie równości](/Sketcher_ConstrainEqual/pl "Sketcher ConstrainEqual/pl").
5. Wybierz poziomą lub pionową linię i zastosuj odpowiednie wiązanie ![](/images/Sketcher_ConstrainDistanceX.svg) [poziome](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl") lub ![](/images/Sketcher_ConstrainDistanceY.svg) [pionowe](/Sketcher_ConstrainDistanceY/pl "Sketcher ConstrainDistanceY/pl") ograniczenia długości i podaj wartość 26mm.
6. Wybierz górną linię poziomą i zastosuj poziome wiązanie odległości i podaj wartość 5mm.
7. Wybierz dolny prawy punkt, _(wierzchołek)_ linii poziomej Początku układu współrzędnych, a następnie środkowy punkt siatki i zastosuj ograniczenie ![](/images/Sketcher_ConstrainCoincident.svg) [zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl"), aby naprawić swój kształt.

W tym momencie powinieneś mieć w pełni związany szkic, na co wskazuje zmiana koloru i komunikat wyświetlany w widoku połączonym. Powinien on teraz wyglądać dokładnie tak, jak na poniższym obrazku.

![](/images/Tut17B_profile.png)

Teraz w [widoku połączonym](/Combo_view/pl "Combo view/pl"), kliknij przycisk Zamknij, aby wyjść z trybu edycji szkicu i wybierz ![](/images/PartDesign_Pad.svg) [Wyciągnięcie](/PartDesign_Pad/pl "PartDesign Pad/pl") z paska narzędzi lub z menu Projekt Części. Dzięki temu zostanie wyświetlone okno dialogowe **Parametry wyciągnięcia** w widoku połączonym. Używając tego okna dialogowego, najpierw z menu rozwijanego **Typ** wybierz opcję **Dwa wymiary**. Rysunek przedstawiony na początku tego poradnika mówi, że część ma 53mm długości. Robimy to przez wyciągnięcie naszego szkicu w obie strony od płaszczyzny środkowej, aby nadrobić tę odległość, czyli uczynić pad symetrycznym w stosunku do płaszczyzny szkicu. Przyczyna tego jest widoczna później przy tworzeniu elementów. Na razie, biorąc pod uwagę, że chcemy, aby miał on w sumie 53mm długości, wprowadzimy 26,5mm dla długości, oraz 26,5mm dla długości drugiej. Alternatywnie, możesz podać pojedynczą długość 53mm i kliknąć pole wyboru **Symetryczne do płaszczyzny**. Gdy to zrobimy, mamy teraz naszą bryłę bazową, na której dodamy dodatkowe funkcje do konstrukcji naszej części.

Poniżej znajduje się nagranie wideo z kroków użytych w tej części poradnika:
<https://youtu.be/cUyPnCMeTgg>

### Cechy charakterystyczne dla kieszeni i geometrii zewnętrznej

Za pomocą myszki lub ikon widoku obróć model, aby zobaczyć jego tył. Gdy tylna strona części jest już widoczna, zaznacz ją klikając w sposób widoczny na następnym obrazku.

![](/images/PD_WB_Tutorial003.png)

Po wybraniu powierzchni, kliknij na ikonę nowego szkicu na pasku narzędzi lub z menu Projekt Części, co spowoduje mapowanie naszego kolejnego szkicu do tylnej powierzchni części. Teraz wybierz narzędzie ![](/images/Sketcher_CreateRectangle.svg) [prostokąt](/Sketcher_CreateRectangle/pl "Sketcher CreateRectangle/pl") i umieść prostokąt na tylnej ścianie części w podobny sposób, jak pokazano poniżej. Teraz wykonaj poniższe kroki, wiążąc szkic.

1. Wybierz jedną z linii poziomych zastosuj poziome wiązanie odległości i wartość 5mm.
2. Wybierz jedną z linii pionowych i nadaj jej pionowe ograniczenie odległości oraz wartość 11mm.
3. Wybierz narzędzie do ![](/images/Sketcher_External.svg) [geometrii zewnętrznej](/Sketcher_External/pl "Sketcher External/pl").
4. Wybierz prawy górny wierzchołek powierzchni i kliknij w niego, aby otrzymać punkt z zewnętrznej geometrii, do którego połączysz nasz szkic.

![](/images/Tut17_slot_unconstrained.png)

1. Kliknij prawym przyciskiem myszy, aby zakończyć tryb geometrii zewnętrznej
2. Wybierz punkt, który właśnie udostępniłeś za pomocą narzędzia Geometria zewnętrzna, a następnie wybierz prawy górny wierzchołek prostokąta i kliknij narzędzie ![](/images/Sketcher_ConstrainCoincident.svg) [wiązanie zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl"). W tym momencie szkic powinien być w pełni związany i wyglądać jak na następnym obrazku.

![](/images/Tut17_slote_constrained.png)

Po wykonaniu tych czynności kliknij przycisk Zamknij znajdujący się na górze karty Zadania w oknie Widoku połączonego, a następnie wybierz narzędzie ![](/images/PartDesign_Pocket.svg) [Kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl") z paska narzędzi lub menu Part Design. Użycie tego narzędzia jest przeciwieństwem narzędzia Wyciągnij. Gdy narzędzie Wyciągnij dodaje materiał do części, narzędzie Kieszeń usuwa materiał z części. Obie operacje są nazywane funkcjami. W tej operacji Kieszeni chcemy wybrać opcję typu **Przez wszystkie** z rozwijanego menu, a następnie kliknąć przycisk OK.

Aby wykonać kolejną operację, upewnij się, że w widoku drzewa modelu wybrano opcję **Kieszeń** i po wybraniu kliknij na ![](/images/PartDesign_Mirrored.svg) the [Utwórz kopię lustrzaną ...](/PartDesign_Mirrored/pl "PartDesign Mirrored/pl") na pasku narzędzi lub z menu Projekt Części. W oknie dialogowym widoku połączonego wybieramy opcję **Szkic poziomej osi** z menu rozwijanego. Następnie klikamy w przycisk OK. Element **Utwórz kopię lustrzaną ...** działa w ten sposób, ponieważ element bazowy naszego modelu w pierwszej operacji ze szkicem bazowym został dodany w obu kierunkach od płaszczyzny poziomej. Jeśli wszystko poszło dobrze, powinieneś teraz mieć część, która wygląda jak na obrazku poniżej, po tym jak zostanie wyświetlona po odwróceniu do przodu.

![](/images/Tut17_profilewithslots.png)

Nagranie wideo z kroków użytych w tej części poradnika dostępne jest tutaj:
<https://youtu.be/wiGXV9G7mrM>

### Opcje wyciągnięcia i geometrii zewnętrznej

Po obejrzeniu obróć widok z powrotem i ponownie wybierz tylną powierzchnię części i kliknij w tę ścianę, aby odwzorować następny szkic.

![](/images/Tut17_profilewithslotsrearplane.png)

Wybierz opcję **Nowy szkic** i utwórz nowy prostokąt w sposób podobny do tego, który jest pokazany na następnym obrazku poniżej. Następnie przejdź do dodania wiązań wymiarowych do prostokąta.

1. Wybierz poziomą linię i zastosuj wiązanie długości w poziomie o wartości 16,7mm.
2. Wybierz linię pionową i zastosuj wiązanie długości w pionie o wartości 7mm.
3. Używając narzędzia Geometria zewnętrzna, wybierz lewy górny wierzchołek powierzchni elementu.

![](/images/Tut17_sidblockunconstrained.png)

Teraz wybierając lewy górny wierzchołek prostokąta i zewnętrzny punkt geometrii, kliknij na wiązanie zbieżności w celu pełnego związania szkicu.

![](/images/Tut17_sideblockconstraind.png)

Zakończ pracę w Szkicowniku.

Następnie klikamy na funkcję **Wyciągnięcia** by następnie w oknie dialogowym **Parametry wyciągnięcia** widoku połączonego określić długość 26mm, usuwając opcję typ na Wymiar, a następnie zaznaczamy pole wyboru **Odwrócony**. Użycie tej opcji spowoduje, że wytłoczka przejdzie do części, a nie zostanie wysunięta poza nią. Operacja ta daje następujący wynik.

![](/images/Tut17_sideblock.png)

Jeszcze raz użyj funkcji **Utwórz kopie lustrzana ...**, aby uzyskać drugie wyciągnięcie. Najpierw upewnij się, że stworzony przed chwilą obiekt wyciągnięcia jest zaznaczony w widoku drzewa, a następnie kliknij na opcję **Utwórz kopie lustrzana ...** na pasku narzędzi, aby wybrać go z menu Part Design. Powtórzymy operację, którą wykonaliśmy dla Kieszeni powyżej i wybierzemy poziomą oś szkicu z menu rozwijanego **Plan**.

![](/images/Tut17_profilewithsideblocks.png)

Poniżej znajduje się nagranie wideo z kroków użytych w tej części poradnika:
<https://youtu.be/Ido1owp8ubc>

### Opcje kieszeni i geometrii zewnętrznej

W tym momencie poruszając się dookoła tej części, widzimy, że nasza część zaczyna wyglądać jak część na rysunku wymiarowym zamieszczonym na początku tego poradnika. Kiedy już będziesz miał widok od przodu, kliknij myszą na pochyloną ścianę, aby wybrać powierzchnię, której będziemy używać do kolejnego szkicu.

![](/images/Tut17_innerplane.png)

Tutaj użyjemy narzędzia **Utwórz prostokąt** i umieścimy prostokąt w naszym szkicu, a po jego wykonaniu zastosujemy następujące wiązania:

1. Zaznacz linię poziomą i pionową, a po wybraniu obu, wybierz wiązanie równości.
2. Zaznacz linię poziomą lub pionową i zastosuj odpowiednie wiązanie dystansu w poziomie lub pionie o wartości 17mm.
3. Używając narzędzia **Utwórz krawędź związaną z geometrią zewnętrzną**, wybierz prawy górny wierzchołek, jak pokazano na obrazku poniżej.

![](/images/Tut17_rechtangleholeunconstrained.png)

Teraz posługując się wymiarami z rysunku, zastosuj następujące wiązania:

1. Zaznacz zewnętrzny punkt geometrii i górny prawy wierzchołek szkicu kwadratu i zastosuj poziome wiązanie dystansu, nadając wymiar 7mm.
2. Zaznacz zewnętrzny punkt geometrii i górny prawy wierzchołek szkicu kwadratu i zastosuj pionowe wiązanie dystansu, nadając wymiar 11mm.

Wynik powinien być następujący:

![](/images/Tut17_rectangleholeconstrained.png)

W tym momencie, gdybyśmy mogli po prostu wyciąć ten szkic, powstała dziura byłaby prostopadła do nachylonej ściany, do której jest przyporządkowana, ale to nie jest to, co chcemy uzyskać.

![](/images/Tut17_wrongplaneforpocket.png)

Chcemy, aby otwór był prostopadły do tylnej płaszczyzny, ale jego wymiary projektowane nie są wymiarami 17mm x 17mm, które są podane na rysunku. Teraz możemy wykonać obliczenia matematyczne i wyliczyć potrzebne wymiary, lub możemy użyć narzędzi dostarczonych w programie FreeCAD do wykonania tego rzutu za nas.

Nagranie wideo z kroków użytych w tej części poradnika dostępne jest tutaj:
<https://youtu.be/x4d5nZPWCLQ>

Aby stworzyć kieszeń, która ma kształt pochylonego prostokąta jako wylot, rysujemy na tylnej ścianie nowy prostokąt, wykorzystując rzut prostokąta pochylonego jako zewnętrzny punkt odniesienia.
Obracamy bryłę dookoła, aby jeszcze raz zobaczyć tylną ścianę elementu i wybieramy tylną ścianę w celu odwzorowania ostatecznego szkicu.

![](/images/Tut17_profilewithsideblocksrearplane.png)

Wybierz ![](/images/PartDesign_NewSketch.svg) [Nowy szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl") ![](/images/PartDesign_NewSketch.svg) z paska narzędzi lub menu Part Design.
Teraz w trybie edycji szkicu, nie widzimy szkicu prostokąta na powierzchni pochyłej. Aby go wybrać, przełączamy widok połączony na zakładkę model i wybieramy ostatnio wykonany szkic _(Sketch003)_ na płaszczyźnie pochyłej. Następnie za pomocą spacji uaktywniamy jego widoczność. Następnie wybieramy element lustrzany powyżej _(mirrored001)_ i ponownie za pomocą spacji, ukrywamy go. Następnie powinieneś zobaczyć skośny prostokąt wewnątrz widoku 3D. Możesz kontynuować pracę z widoczną zakładką modelu lub wrócić do zakładki zadań. Używając narzędzia ![](/images/Sketcher_External.svg) [Utwórz krawędź związaną z zewnętrzną geometrią](/Sketcher_External/pl "Sketcher External/pl"), wybierz górną i dolną krawędź poziomą pochylonego prostokąta. Następnie dodaj nowy prostokąt do szkicu za pomocą narzędzia ![](/images/Sketcher_CreateRectangle.svg) [Utwórz prostokąt ...](/Sketcher_CreateRectangle/pl "Sketcher CreateRectangle/pl").

![](/images/Tut17_rectangleunconstrained.png)

1. Wybierz lewy górny wierzchołek nowego prostokąta i lewy górny punkt geometrii zewnętrznej oraz kliknij na narzędzie wiązania zbieżności.
2. Kliknij na dolny prawy wierzchołek nowego prostokąta i dolny prawy punkt geometrii zewnętrznej oraz kliknij na narzędzie wiązania zbieżności.

I na tym powinniśmy poprzestać.

![](/images/Tut17_rectangleconstrained.png)

Ostatni krok tego poradnika to zamknięcie okna szkicownika poprzez zamknięcie lub zakończenie edycji z menu kontekstowego szkicownika004, a następnie wybranie opcji ![](/images/PartDesign_Pocket.svg) [Kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl") z paska narzędzi lub z menu Projekt Części. Z menu rozwijanego Typ wybierz **Przez wszystkie** i kliknij w przycisk OK.

![](/images/Tut17_final.png)

W tym momencie zobaczysz kilka linii, które pochodzą z przecinających się elementów. W tym przypadku _blok boczny_ przecina się z _profilem bazowym_, dzięki czemu pojawia się jako trójkątny blok nad profilem _(tzn. na powyższym zdjęciu po prawej stronie modelu widoczna jest dodatkowa linia)_. Aby usunąć te linie, można albo włączyć **dopracowanie kształtu** w ustawieniach projektu części lub, aby zaoszczędzić trochę prędkości przetwarzania i nadal mieć te linie podczas konstruowania, indywidualnie włączyć je przy każdej funkcji. Ustawienie na poziomie elementu może być wykonane w zakładce **Dane** elementu. Ustaw [**_refine_ property**](/Property_editor#Data "Property editor") na `true` dla funkcji kieszeni Pocket001, aby wywołać udoskonalenie.

![](/images/Tut17_refine.png)

![](/images/Tut17_final_refined.png)

Poniżej znajduje się link do nagrania wideo z kroków użytych w tej części poradnika:
<https://youtu.be/UYI0gvxCYeI>

Ten poradnik i twój model zostałty ukończone.

## Dodatkowe zasoby

- Plik projektu FreeCAD do porównania _(wykonany w wersji 0.17)_ [Pobierz](https://github.com/FreeCAD/Examples/blob/master/Basic_Part_Design_Tutorial_Example_017_Files/Basic_Part_Design_Tutorial_017.fcstd)

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_Part_Design_Tutorial/pl&oldid=1351922>"
