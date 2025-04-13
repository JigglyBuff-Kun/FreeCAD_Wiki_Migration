---
title: Projekt Części tworzenie podstawowych brył
---

|                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ćwiczenie                                                                                                                                                                                                                                                                                                         |
| Temat                                                                                                                                                                                                                                                                                                             |
| Modelowanie                                                                                                                                                                                                                                                                                                       |
| Poziom trudności                                                                                                                                                                                                                                                                                                  |
| Początkujący                                                                                                                                                                                                                                                                                                      |
| Czas wykonania                                                                                                                                                                                                                                                                                                    |
| 1 godzina                                                                                                                                                                                                                                                                                                         |
| Autorzy                                                                                                                                                                                                                                                                                                           |
| GlouGlou                                                                                                                                                                                                                                                                                                          |
| Wersja FreeCAD                                                                                                                                                                                                                                                                                                    |
| 0.17 lub nowszy                                                                                                                                                                                                                                                                                                   |
| Pliki z przykładami                                                                                                                                                                                                                                                                                               |
| nie dołączono                                                                                                                                                                                                                                                                                                     |
| Zobacz również                                                                                                                                                                                                                                                                                                    |
| [Projekt Części: Tworzenie prostej części](/Creating_a_simple_part_with_Part_WB/pl "Creating a simple part with Part WB/pl"), [Tworzenie prostej części za pomocą środowiska pracy Rysunek Roboczy i Część](/Creating_a_simple_part_with_Draft_and_Part_WB/pl "Creating a simple part with Draft and Part WB/pl") |
|                                                                                                                                                                                                                                                                                                                   |

![](/images/GGTuto1_Vue.PNG)

Ten samouczek ma na celu nauczenie początkujących użytkowników FreeCAD kilku podstawowych funkcji, na przykładzie.
Po omówieniu podstaw w [Centrum użytkownika](/User_hub/pl "User hub/pl"), będziesz mógł modelować pierwszą część krok po kroku.

**W tym Poradniku omówimy w szczegółach:**

- Używanie [Środowiska pracy Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"), rysowanie szkicu.
- Używanie funkcji wyciągnięcia _(Pad)_ i kieszeni _(Pocket)_.
- Zmiana koloru i przezroczystości.
- Ręczne przenoszenie części.
- Wyświetlanie przypisanych wymiarów w szkicu.
- Edycja jednego lub wielu wymiarów.
- Korzystanie z funkcji geometrii zewnętrznej i użycie płaszczyzny odniesienia do wyśrodkowania otworu.

### Używanie [Środowiska pracy Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"), rysowanie szkicu

Stwórz nowy dokument i wybierz Środowisko pracy ![](/images/Workbench_PartDesign.svg) **Projekt Części** używając [okienka wyboru](/Getting_started/pl#Poznawaj_interfejs_użytkownika "Getting started/pl") _(numer 10 na obrazku)_ lub przez menu _Widok → Środowiska pracy_. FreeCAD uruchamia się z paskami narzędzi u góry, "widokiem łączonym" po lewej, i widokiem 3d po prawej.

**Tworzenie nowej zawartości (body):**

Wciśnij przycisk ![](/images/PartDesign_Body.svg) [Stwórz nową zawartość i ustaw ją jako aktywną](/PartDesign_Body/pl "PartDesign Body/pl"). **\*Uwaga:** nie pomyl tej ikony która jest niebieska, z ikoną od Part Container która jest żółta._. W zakładce **Model** pod paskiem bocznym z widokiem łączonym pojawi się nowy obiekt nazwany **Body**. Pojawi się on pod nazwą dokumentu, która jest "Nienazwany" do czasu aż dokument nie zostanie zapisany. Zawartość jest pojemnikiem / kontenerem, w którym elementy środowiska Projekt Części są kolejno rozmieszczane w celu utworzenia pojedynczej bryły. Zawiera własne osie odniesienia i płaszczyzny. Zostanie oznaczony na niebiesko w drzewie modelu, co oznacza że jest aktywna, czyli możemy edytować elementy które zawiera jak również dodawać nowe elementy do niej. Jeśli nie jest podświetlona na niebiesko, kliknij na nią dwukrotnie, lub wciśnij prawy przycisk myszy i w menu kontekstowym wybierz opcję **Przełącz na aktywną zawartość**. Przed nazwą "Body" znajduje się niebieska ikona identyczna z tą, za pomocą której stworzyłeś obiekt "Body". Klikając w strzałkę lub znak plusa znajdujący się przed "Body" możesz rozwinąć jego zawartość. W tej chwili zawiera on jedynie element nazwany **Odniesienie położenia** _(origin)\*. Przed **odniesieniem położenia** także znajduje się znak strzałki lub plusa. Kliknij na niego aby rozwinąć jego zawartość. Odsłania to wyżej wymienione osie i płaszczyzny odniesienia, jak pokazano na poniższym obrazku:

![](/images/PartDesign_Body_tree_Unnamed.png)

_Nowo stworzone aktywne "Body" z jego zawartością_
Odniesienie połóżenia _(Origin)_ jest niedostępne, co oznacza, że jego zawartość nie jest widoczna w oknie widoku 3D. Możesz przełączyć jego widoczność w widoku 3D zaznaczając obiekt Origin i wciskając spacje na klawiaturze. "Origin" teraz będzie oznaczone na czarno na drzewie. Wciśnij spacje ponownie aby ukryć "Origin" w widoku 3D. Naciśnij ponownie na klawisz strzałki lub znak plusa przed "Origin" aby zwinąć jego zawartość.

Zanim będziemy kontynuować, skorzystajmy z okazji do zmiany nazwy Body.

**Zmiana nazwy "Zawartości" (Body):**

Na drzewie modelu kliknij prawym przyciskiem myszki na Body. Wybierz Zmień nazwę i wpisz nazwę, na przykład "Body part1" i naciśnij Enter, aby potwierdzić.

**Tworzenie szkicu:**

Teraz będziemy zajmować się szkicem, określającym ogólny kształt części. Szkic jest rysunkiem opisującym profil, który należy zastosować dla elementu w celu uzyskania kształtu. Może być albo "dodatni" lub " dodawany", jak np. wyciągnięcie; albo "ujemny" lub "odejmowalny", jak kieszeń.

Ponieważ w tym przypadku ogólny kształt części jest regularny wzdłuż osi Y, stworzymy wyciągnięcie wzdłuż tej osi.

Wciśnij przycisk ![](/images/Sketcher_NewSketch.svg) [Utwórz nowy szkic](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl"). Okienko widok połączony przełącza się teraz na zakładkę **Zadania' _i wyświetla okno dialogowe_** \*Wybierz funkcję**. To okno dialogowe oczekuje wyboru płaszczyzny, do której ma zostać dołączony nasz szkic i wyświetla listę dostępnych płaszczyzn. Wybierz\*** **XZ_Plane (płaszczyzna podstawowa)** i naciśnij OK. Interfejs teraz się zmienia, Szkicownik przejmuje kontrolę, a jego paski narzędzi pojawiają się nad widokiem okna 3D. Znajdujemy się na płaszczyźnie XZ bryły, aby można było utworzyć szkic.

Aby ułatwić szkicowanie, można ustawić następujące opcje w polu **Edycja elementów sterujących** w panelu Zadania po lewej stronie:

- Pokaż siatkę: zaznaczone.
- Rozmiar siatki: 10 mm.
- Automatyczne wiązania: zaznaczone.

Narysujemy poniższy szkic:

![](/images/GGTuto1_0.PNG)

**Zacznijmy od pierwszego segmentu:**

Wybierz narzędzie ![](/images/Sketcher_Line.svg)[Utwórz linię na szkicu](/Sketcher_CreateLine/pl "Sketcher CreateLine/pl"). Kliknij na punkt początkowy, upewniając się najpierw, że obok i po prawej stronie kursora myszy pojawi się mała czerwona kropka. Kliknij następnie na oś X około 10 kwadratów w prawo lub około 100mm. Jeśli odcinek nie ma dokładnie 100 m w tym miejscu, nie ma to znaczenia, później nadamy mu stały wymiar, który będzie limitował tę długość.

Zrób to samo dla innych segmentów, spróbuj wycelować w punkty, które stworzyłeś i które muszą się rozjaśnić na żółto. Co oznacza, że punkty te będą zbieżne. Powinieneś otrzymać praktycznie tyle:

![](/images/GGTuto1_1.PNG)

Zwróć uwagę na małe czerwone linie powyżej i obok narysowanych odcinków: są to ograniczenia poziome i pionowe. Twoje linie są zmuszone do pozostania w pozycji poziomej lub pionowej. Zauważ również symbol w postaci małego łuku po lewej stronie: oznacza to, że punkt jest przyczepiony do osi Z.

Teraz wybierz różne segmenty linii lewym przyciskiem myszy i trzymając wciśnięty lewy przycisk myszy, przeciągnij myszką, aby spróbować je przesunąć: niektóre są swobodne, inne nie.

**Nakładanie wiązań:**

W górnej części pola wyboru, w panelu Zadania, można odczytać liczbę stopni swobody już naszkicowanych elementów: musi to być około 6, celem ograniczeń jest zmniejszenie liczby stopni swobody do zera.

Skośna linia powinna się teraz swobodnie obracać: będziemy ją wiązać kątowo.

Kliknij na linię ukośną, następnie linię u dołu. Po wybraniu tych linii ich kolor zmieni na ciemnozielony. Następnie kliknij przycisk ![](/images/Constraint_InternalAngle.svg) [Ustaw kąt linii](/Sketcher_ConstrainAngle/pl "Sketcher ConstrainAngle/pl").

![](/images/GGTuto1_2.PNG)

Wpisz wartość 30°. Obie linie mają teraz sztywny wybrany przez nas kąt. Wiązanie zostało stworzone po lewej stronie szkicu. Za pomocą myszki przesuń stworzone ograniczenie do wewnątrz szkicu.

Teraz zwiążemy dolną linie konkretnym wymiarem. Wybierz tą linie i kliknij ![](/images/Constraint_HorizontalDistance.svg) [Ustal poziomą odległość](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX").

Wpisz wartość 100mm. Pionowa linia po prawej stronie wyrównuje się teraz dokładnie z dziesiątym kwadratem siatki po prawej stronie.od jej początku.

Ustawmy całkowitą wysokość profilu, wybierając najwyższy punkt po lewej stronie, potem punkt początkowy. Kliknij na ![](/images/Constraint_VerticalDistance.svg) [Ustal pionową odległość](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY"), wprowadź wartość 50mm.

Czynności te należy powtórzyć dla poziomej długości pochylonej linii z dodatkowym ograniczeniem odległości poziomej 50 mm.

Odsuń wymiary od profilu, aby zapewnić lepszą widoczność. Teraz powinieneś mieć coś takiego:

![](/images/GGTuto1_3.PNG)

Zauważ, że ilość stopni swobody zmniejszyła się do 2. Powodują to wciąż otwarte końce.

**Rysowanie łuku**

Kliknij na przycisk ![](/images/Sketcher_Arc.svg) [utwórz łuk w szkicowniku](/Sketcher_CreateArc/pl "Sketcher CreateArc/pl"), ustaw kursor na współrzędnych około x = 80 y = 30; następnie kliknij, aby zdefiniować pierwszy punkt początkowy łuku w prawym górnym punkcie końcowym linii poziomej. Kolejnie kliknij, aby zdefiniować koniec łuku w górnym punkcie końcowym linii pionowej po prawej stronie _(upewnij się, że punkty są podświetlone na żółto przed kliknięciem)_.

Nadaj promień wiązania łuku: wybierz łuk, a następnie kliknij na przycisk ![](/images/Constraint_Radius.svg) [Zwiąż łuk](/Sketcher_ConstrainRadius/pl "Sketcher ConstrainRadius/pl"), po czym wprowadź wartość 20mm.

Teraz wybierzmy kształt łuku jako styczną do połączonych z nim linii: wybierzmy łuk, następnie górną linię, a następnie kliknijmy na ![](/images/Constraint_Tangent.svg) [Utwórz styczną ...](/Sketcher_ConstrainTangent/pl "Sketcher ConstrainTangent/pl"). Pojawia się komunikat _Zastępowanie wiązań_, kliknij w przycisk OK. To samo dotyczy wiązań stycznej po drugiej stronie łuku.

Wykonaliśmy dwa etapy tworzenia szkicu, ale mogliśmy również całkowicie prześledzić profil, aby całkowicie go związać.

**Szkic w pełni związany**

Jeśli działałeś sprawnie, to powinieneś otrzymać to samo:

![](/images/GGTuto1_4.PNG)

Szkic zmienił kolor na zielony, co oznacza, że cały został ograniczony. Nie ma w nim żadnych dwuznaczności, wszystko jest perfekcyjnie zdefiniowane. Potwierdza to komunikat solwera w lewym górnym rogu. Zwróć także uwagę na to, że środek łuku lekko się przemieścił, tak naprawdę podając te trzy ostatnie ograniczenia, FreeCAD obliczył poprawną pozycję punktu środka.

Jeśli Twój szkic nie jest jeszcze prezentowany w kolorze zielonym, oznacza to, że jeden lub więcej punktów nie zbiega się we właściwym miejscu _(2 punkty mogą być jeszcze nie zbieżne, ale znajduja sie w sąsiedztwie)_. Zrób małe okno _(okno przechwytywania)_ wokół punktu, aby wybrać i utworzyć ![](/images/Constraint_PointOnPoint.svg) [Wiązanie zgodności na wybranym elemencie](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl"). Uwaga: nie myl **Wiązanie zgodności _z_ Utwórz punkt na szkicu**. Ich ikony są bardzo podobne, jednak drugie narzędzie ma większą ikonę i dodaje indywidualny punkt w szkicu.

Czynności należy przeprowadzić w ten sam sposób w odniesieniu do wszystkich punktów.

Jeśli Twój szkic nadal nie jest wyświetlany na zielono, sprawdź, czy wszystkie linie _(z wyjątkiem ukośnej)_ mają zdefiniowane albo ![](/images/Constraint_Horizontal.svg) [wiązania poziome](/Sketcher_ConstrainHorizontal/pl "Sketcher ConstrainHorizontal/pl") lub ![](/images/Constraint_Vertical.svg) [wiązania pionowe](/Sketcher_ConstrainVertical/pl "Sketcher ConstrainVertical/pl"). W razie potrzeby dodaj je.

### Używanie funkcji wyciągnięcia i kieszeni

Kliknij w przycisk Close w zakładce **zadania**. Środowisko pracy Sketcher zostanie automatycznie zamknięte, a Part Design ponownie wybrane. **Widok złozony** powróci do zakładki **Model**. Jeśli zostawiłeś element "Body part1" rozwinięty na drzewku, to zobaczysz nowy element obok **Origin**, zagnieżdżony w elemencie **Body**.

W tym momencie zapisujemy nasz dokument. Nadaj mu nazwę _(na przykład "tutorial1" lub jakąkolwiek nazwę, którą uznasz za odpowiednią)_. Dobrą praktyką jest częste zapisywanie dokumentu, na przykład po wykonaniu szkicu lub funkcji.

Kliknij w przycisk ![](/images/Std_ViewIsometric.svg) **Ustaw widok izometryczny** a następnie ![](/images/Std_ViewFitAll.svg) [Dopasuj widok do okna](/Std_ViewFitAll "Std ViewFitAll"), co daje wyśrodkowany widok izometryczny 3D.

Kliknij w przycisk ![](/images/PartDesign_Pad.svg) [Wyciągnij wybrany szkic](/PartDesign_Pad/pl "PartDesign Pad/pl"), podaj długość 30mm. Kliknij w przycisk OK, kształt jest teraz gotowy. W drzewie modelu obiekt **Pad** _(nazywany właściwość)_ pojawi się zamiast szkicu. W rzeczywistości jest to zatwierdzony szkic, ponieważ kształt opiera się na nim. Teraz kliknij na strzałkę lub plusa przy elemencie **Pad** aby rozwinąć go. Poniżej pojawi się nasz szkic, jest on automatycznie ukrywany w widoku 3D _(jego etykieta jest szara)_.

Zauważ, że utworzony kształt jest bryłą.

![](/images/GGTuto1_5.PNG)

### Tworzenie otworu

Ustaw kursor myszki na górnej powierzchni elementu i kliknij, kolejnie użyj narzędzia ![](/images/Sketcher_NewSketch.svg) **Utwórz nowy szkic**. FreeCAD automatycznie stworzy szkic związany do tej powierzchni. Znajdujemy się więc na płaszczyźnie równoległej do płaszczyzny bezwzględnej XY, ale z przesunięciem wysokości o wysokość elementu, tj. 50mm.

Możesz przełączyć widok okna 3D na widok izometryczny ![](/images/Std_ViewIsometric.svg) lub pozostawić model w widoku od góry ![](/images/Std_ViewTop.svg). W każdej chwili można powrócić do widoku szkicu _(widok jest zorientowany na płaszczyznę szkicu)_ za pomocą ![](/images/Sketcher_ViewSketch.svg) ikonki [Widok szkicu](/Sketcher_ViewSketch/pl "Sketcher ViewSketch/pl").

Zauważ, że **źródłem** tego nowego **szkicu** jest bryła. Oczywiście mogą się one różnić, jednak tutaj są mylone z pochodzeniem bezwzględnym.

Za pomocą narzędzia ![](/images/Sketcher_Circle.svg) [Utwórz okrąg w szkicowniku](/Sketcher_CreateCircle/pl "Sketcher CreateCircle/pl") narysuj okrąg mniej więcej na środku powierzchni. Okrąg może mieć dowolny promień.

Wybierz okrąg i stwórz wiązanie za pomocą narzędzia ![](/images/Constraint_Radius.svg) [Zwiąż łuk lub okrąg](/Sketcher_ConstrainRadius/pl "Sketcher ConstrainRadius/pl"), jako miarę promienia podaj 5mm.

Wybierz punkt będący środkiem okręgu, a następnie ![](/images/Sketcher_ConstrainLock.svg) [Utwórz blokadę wiązania dla wybranego elementu](/Sketcher_ConstrainLock/pl "Sketcher ConstrainLock/pl"); kliknij dwukrotnie na pole z wymiarem poziomym i wpisz wartość **-65**mm _(tutaj wskazujemy pozycję względem pochodzenia szkicu)_. To samo dotyczy wymiaru pionowego _(-15mm)_. Okrąg zajmuje właściwą pozycję, a szkic staje się zielony, co oznacza, że jest w pełni związany:

![](/images/GGTuto1_6.PNG)

Zamknij szkic, w drzewie modelu pojawił się nowy o obiekt o nazwie **Sketch001**. Podczas gdy szkic jest cały czas zaznaczony, kliknij przycisk narzędzia ![](/images/PartDesign_Pocket.svg) [Utwórz kieszeń z wybranego szkicu](/PartDesign_Pocket "PartDesign Pocket").

Kieszeń jest właściwością zwaną "substrakcyjną", usuwa materiał z naszej części, tutaj w formie cylindra, ponieważ szkic jest kołem. Ustaw jako Typ wartość **Przez wszystkie**, aby całkowicie wyciąć część. Wciśnij przycisk OK, aby zakończyć operację. W drzewie modelu na dole części Body1 pojawia się nowy element oznaczony **Pocket** i wskazuje Sketch001.

### Zmiana koloru i przezroczystości

Istnieje możliwość zmiany koloru części, często przydatne jest wyróżnienie części spośród innych. Również można modyfikować przeźroczystość detalu, co jest pomocne przy prezentacji jego wnętrza.

Wybierz bryłę **Body part1** i przejdź do najniższej części widoku połączonego, kliknij na zakładkę **Widok**; znajdź właściwość **Kolor kształtu** _(Shape color)_. Może okazać się konieczne użycie pionowego paska przewijania w prawo, aby ją znaleźć. Możesz również poszerzyć kolumnę Właściwość: przesuń wskaźnik myszki nad linię rozdzielającą nagłówki **Właściwości** i **Wartość**; gdy kursor zmieni się w dwustronną strzałkę, naciśnij i przytrzymaj lewy przycisk myszy i przeciągnij go na bok, a następnie puść.  
W prawej kolumnie kliknij na szary kwadrat, który otwiera okno dialogowe **Wybierz kolor**. Wybierz inny kolor, a następnie kliknij w przycisk OK. Ponownie w zakładce **Widok**, zmień wartość opcji **Przeźroczystość** _(Transparency)_, na przykład na 50 i naciśnij klawisz Enter, aby zakończyć _(0=całkowicie nieprzezroczysty, 100=całkowicie przezroczysty)_.

Otwór jest teraz widoczny wewnątrz części. Jest to często przydatne przy oglądaniu ukrytych lub wewnętrznych ścian modelu.

Można również zmieniać kolor linii i szerokość linii, aby zmienić grubość i kolor konturu części.

### Ręczne przesuwanie części

Przejdź do zakładki menu głównego **Widok** i wybierz pozycję **Przełącz oś przekroju**  
To są osie absolutne. Powinieneś teraz zobaczyć w oknie widoku 3D trzy osie X, Y i Z w kolorach czerwonym, zielonym i niebieskim.  
Ten punkt orientacyjny pomoże nam odnaleźć się w przestrzeni. Ten punkt orientacyjny jest stały i niezmienny, jest to widok, który się obraca lub obiekt, który obraca się w tej przestrzeni.

W drzewie modelu wybierz **Body**, kolejnie w dolnej części **Widoku połączonego** zwróć uwagę na zakładkę **Dane** _(zakładka **Dane** musi znajdować się na pierwszym planie, być może będziesz musiał kliknąć na nią, aby stała widoczna jej treść)_:

![](/images/GGTuto1_10.PNG)

Kliknij na mały trzykropek właściwości **Placement** _(jeśli jest niewidoczny kliknij w pole **Placement**)_. Zostanie wyświetlona nowa treść zakładki **Zadania**. Używając strzałek możesz zmienić pozycje i kąt usytuowania bryły. To właśnie pozycja bryły _(a więc jej początek)_ przemieszcza się w przestrzeni, orientacja widoku 3D nie ulega zmianie.

Kolejna metoda: w widoku połączonym wybierz **Body** i kliknij prawym przyciskiem myszy, a następnie wybierz opcje **Przekształć**. Pojawia się następujący widok:

![](/images/GGTuto1_11.PNG)

Przytrzymaj i przeciągnij wierzchołek na osi lub kulę, aby bryłą ciałem w dowolnym kierunku.

Potwierdź.  
Następnie zresetuj kąty i współrzędne do wartości 0.

### Wyświetlanie wymiarów w szkicu

Przydatna może okazać się znajomość wymiarów niektórych fragmentów szkicu, na podstawie wewnętrznych obliczeń FreeCAD. Informacje te mogą być użyte tylko do celów poglądowych lub można wykorzystać je później np. do zdefiniowania innych wymiarów.

Na drzewie modelu, _(w razie potrzeby)_ należy rozwinąć gałąź **Body part1**, a następnie **Pad**, aby pokazać pierwszy szkic. Kliknij tą pozycję dwukrotnie _(lub kliknij prawym przyciskiem myszy i wybierz **Edytuj szkic** w menu kontekstowym)_, a następnie kliknij na ![](/images/Sketcher_ToggleConstraint.svg) [Przełącz tryb wiązań](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint"). _(**Uwaga:** w zależności od rozdzielczości ekranu, ta ikona może nie być widoczna. Na prawym końcu paska narzędzi **Wiązań**, możesz znaleźć przycisk ». Kliknij na niego, aby rozwinąć i uzyskać dostęp do ukrytych ikon narzędzi)._ Od teraz możemy tworzyć wymiary referencyjne zamiast wymiarów konstrukcyjnych. Będą one kreślone w kolorze niebieskim i nie będą miały wpływu na kształty szkicu, z którego pochodzą, będą wyliczane automatycznie.

Na przykład można wyświetlić informacje o tych wymiarach:

![](/images/GGTuto1_7.PNG)

Widzimy na przykład, że długość łuku wynosi 20, ponieważ jest on styczny do krawędzi.

Widzimy również, że FreeCAD dokonuje obliczeń lewego boku _(50-50xTAN 30°)_, jak również wymiaru odległości osi łuku wraz z jego początkiem.

### Edycja jednego lub wielu wymiarów

Podczas modelowania można dowolnie modyfikować wymiary detalu. Jest to bardzo proste: w przypadku grubości elementu kliknij dwukrotnie ikonę **Wyciągnięcia**, a następnie wprowadź nową wartość, na przykład 40mm. W dolnej części **widoku złożonego** możesz również zmienić daną wartość. Zatwierdź ją, kształt bryły obiektu zostanie zmieniony.

To samo dotyczy całkowitej długości elementu: kliknij dwukrotnie na **Szkic**, następnie kliknij dwukrotnie na linijkę wymiarową 100mm. Zmień wartość na 110mm, a następnie zaakceptuj.

Widzimy, że fragment ten został powiększony, ale otwór nie jest już wyśrodkowany na górze ściany. Dzieje się tak dlatego, że został on związany z pochodzeniem szkicu. Co niekoniecznie odpowiada temu, co chcielibyśmy osiągnąć. Otwór powinien pozostać po środku, niezależnie od wielkości ściany.

### Wyśrodkowanie otworu

#### Metoda pierwsza, z wykorzystaniem geometrii zewnętrznej.

Edytuj ponownie szkic otworu i usuń jego poziome i pionowe wiązania odległości.

Teraz kliknij narzędzie ![](/images/Sketcher_External.svg) [Utwórz krawędź związaną z zewnętrzną geometrią](/Sketcher_External/pl "Sketcher External/pl").

Teraz stworzymy dwie linie w szkicu, ale wyodrębnione z kształtu _(lub elementu)_ zewnętrznego, w stosunku do tego i wcześniej zdefiniowanego: kształtu Wyciagnięcia.

Kliknij na pionową krawędź znajdującą się u góry części. Na przykład: krawędź przy pochyłej ścianie.

Nad krawędzią pojawi się nowa purpurowa linia. Powtórz tą czynność dla drugiej krawędzi, po zaokrąglonej stronie ściany.

Teraz można wykorzystać te linie _(a zwłaszcza ich punkty końcowe)_ do wyśrodkowania okręgu, jednak musimy dodać kolejne dwie linie konstrukcyjne: na przykład przekątne.

W tym celu kliknij narzędzie ![](/images/Sketcher_AlterConstruction.svg) [Przełącz tryb konstrukcji](/Sketcher_ToggleConstruction/pl "Sketcher ToggleConstruction/pl"):
linie będą miały kolor niebieski i nie będą uwzględniane w trybie edycji szkicu detalu. Pozwalają one ustalić punkt środkowy okręgu. Utwórz przekątne w ten sam sposób, w jaki narysowałeś pierwsze linie. Upewnij się, że wszystkie punkty są zbieżne.

Po czym należy zaznaczyć środek okręgu, kolejnie dwie niebieskie linie po przekątnej' i kliknąć na ikonę narzędzia ![](/images/Constraint_PointOnObject.svg) [Ustaw punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl"). Okrąg zostanie umieszczony w punkcie przecięcia przekątnych, czyli po środku ściany.  
Szkic musi być zielony, całkowicie związany _(jest to niezbędne)_. Zauważ, że oprócz promienia okręgu, nie jest już niezbędne tworzenie wiązań wymiarów.

Proszę zauważyć, że oprócz przełączenia paska narzędzi w tryb konstruowania, ![](/images/Sketcher_AlterConstruction.svg) Przycisk [Construction Mode](/Sketcher_ToggleConstruction/pl "Sketcher ToggleConstruction/pl") może również przełączać poszczególne elementy Sketchera w tryb konstrukcyjny, jeśli zostały one wcześniej wybrane. Jeśli przypadkowo przełączysz element w tryb konstrukcyjny, może pojawić się błąd po zakończeniu szkicu.

![](/images/GGTuto1_8.PNG)

Opuść ten szkic, przekonamy się, że krąg jest prawidłowo wyśrodkowany. _(Funkcja kieszeni nie została usunięta, ale zmodyfikowana)_. Jeśli ponownie zmienisz wymiary części, grubość lub długość, okrąg będzie pozostawał na środku ściany.

#### Unikaj linii konstrukcyjnych:

Często można uniknąć tworzenia linii konstrukcyjnych. Możesz ponownie edytować szkic, i usunąć linie konstrukcyjne. Następnie należy posłużyć się funkcją ![](/images/Constraint_Symmetric.svg) [Utwórz wiązanie symetrii ...](/Sketcher_ConstrainSymmetric/pl "Sketcher ConstrainSymmetric/pl") pomiędzy dwoma przeciwległymi wierzchołkami zewnętrznych linii geometrii, a środkiem okręgu _(punkty należy wybrać w tej kolejności)_:

![](/images/GGTuto1_12.PNG)

Uzyskamy identyczny wynik dla położenia środka otworu. W rzeczywistości, dzięki dostępnym wiązaniom w Środowisku pracy Sketcher, istnieje wiele możliwych dróg postępowania.

/Ten przykład pokazuje, że często lepiej jest wybrać najprostszą metodę, ograniczając w ten sposób liczbę utworzonych obiektów oraz liczbę błędów, które mogą się pojawić.

#### Metoda druga z płaszczyzną odniesienia

Oto kolejna, szybsza metoda, możliwa do zastosowania od wersji **0.17**.  
 Użycie płaszczyzny odniesienia i jej dołączenie.

Zacznij od skasowania efektu działania funkcji **Kieszeń** oraz szkicu otworu. Wybierz górną ścianę i kliknij przycisk ![](/images/PartDesign_Point.svg) [Utwórz nowy punkt odniesienia](/PartDesign_Point "PartDesign Point"): dla aktywnej części bryły. Wybranym trybem dołączenia powinien być "Środek ciężkości".

Ponieważ ściana jest prostokątna, jej środek masy odpowiada punktowi przecięcia przekątnych. Zatwierdź, a punkt odniesienia zostanie utworzony.

Wybierz górną ścianę ponownie i trzymając wciśnięty klawisz CTRL, na drzewie modelu wybierz punkt odniesienia, który właśnie utworzyłeś. Puść klawisz CTRL i kliknij w przycisk ![](/images/PartDesign_Plane.svg) [Utwórz nowa płaszczyznę odniesienia](/PartDesign_Plane "PartDesign Plane"). Płaszczyzna odniesienia zostanie utworzona na podstawie pochodzenia punktu. Kliknij przycisk OK.

Teraz bardzo łatwo jest umieścić okrąg w samym środku! Z drzewa modelu lub w widoku 3D, wybierz płaszczyznę którą stworzyłeś, i kliknij ![](/images/Sketcher_NewSketch.svg) [Utwórz nowy szkic](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl"),
szkic zostanie stworzony z podaniem miejsca początkowego. Następnie wystarczy narysować okrąg o promieniu 5mm na podstawie punktu początku, po czym zatwierdzić _(szkic musi być zielony bezwzględnie)_.

Za pomocą funkcji **Kieszeń**, jak poprzednio, utwórz otwór, który zawsze będzie wyśrodkowany.

![](/images/GGTuto1_9.PNG)

Ten poradnik jest zakończony, zapisz ten plik, możesz się dobrze bawić badając różne funkcje. Zmień wymiary, zmodyfikuj kształty, umieść nowe otwory na innych ścianach, to właśnie podczas popełniania błędów robimy postępy!

Możesz również kontynuować ćwiczenie umiejętności w kolejnym poradniku o nieco bardziej skomplikowanej części:

[Podstawy dla Środowiska pracy Projekt Części](/Basic_Part_Design_Tutorial "Basic Part Design Tutorial")

Retrieved from "<http://wiki.freecad.org/index.php?title=Creating_a_simple_part_with_PartDesign/pl&oldid=1251741>"
