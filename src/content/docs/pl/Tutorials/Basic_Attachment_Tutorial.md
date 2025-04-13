---
title: Poradnik Podstawy mocowania
---

|                                                                                                             |
| ----------------------------------------------------------------------------------------------------------- |
| Ćwiczenie                                                                                                   |
| Temat                                                                                                       |
| Dołączanie                                                                                                  |
| Poziom trudności                                                                                            |
| Początkujący/Średniozaawansowany                                                                            |
| Czas wykonania                                                                                              |
| 1 godzina                                                                                                   |
| Autorzy                                                                                                     |
| Bance                                                                                                       |
| Wersja FreeCAD                                                                                              |
| 0.17 lub nowszy                                                                                             |
| Pliki z przykładami                                                                                         |
| [Basic Attachment Tutorial.FCStd](https://github.com/BanceFC/Examples/blob/master/AttachmentTutorial.FCStd) |
| Zobacz również                                                                                              |
| _-_                                                                                                         |
|                                                                                                             |

![](/images/Attachment_Model.png)

Ukończony model

Ten poradnik powinien służyć jako wprowadzenie do pracy z narzędziem ![](/images/Part_EditAttachment.svg) [Edytuj mocowanie](/Part_EditAttachment/pl "Part EditAttachment/pl") środowiska Część, nie jest on wyczerpujący, ale mam nadzieję, że pomoże użytkownikom w eksperymentowaniu.

Mocowanie jest narzędziem do łączenia umiejscowienia obiektu z umiejscowieniem lub kształtem jednego lub większej liczby obiektów. Pierwszy, mocowany, obiekt będzie podążał jeśli umiejscowienie lub kształt drugiego obiektu ulegnie zmianie Skupiamy się na środowisku pracy Projekt Części i dołączaniu szkiców do innych szkiców, jest to zalecana metoda do tworzenia [_stabilnych_](/Feature_editing/pl#Porady_dotycz.C4.85ce_tworzenia_stabilnych_modeli "Feature editing/pl") modeli.  
Ten poradnik został napisany dla wersji v0.19, ale powinien być odpowiedni dla każdej wersji 0.17 i późniejszych. Jednakże, niektóre szczegóły mogą się różnić.
Oryginalny model został zaprojektowany przez Md. Aminul Islam i został pobrany stąd:-<https://grabcad.com/library/50-cad-exercise-drawing-1> jako "Ćwiczenie - 13".

## Wymagania wstępne

Przed przystąpieniem do wykonywania tego poradnika użytkownik powinien

1. Używać wersji 0.17 lub nowszej.
2. Wygodnie poruszać się w oknie [widoku 3D](/3D_view/pl "3D view/pl").
3. Umieć tworzyć i związać [szkic](/Sketcher_Workbench/pl "Sketcher Workbench/pl").
4. Posiadać podstawową wiedzę na temat środowiska pracy ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").
5. Posiadać podstawową wiedzę na temat [Wyrażeń](/Expressions/pl "Expressions/pl").

## Cele

Celem tego poradnika jest pokazanie, w jaki sposób można zbudować model poprzez pozycjonowanie szkiców względem innych geometrii przy użyciu niektórych z dostępnych trybów dołączania.

Chociaż możliwe jest użycie geometrii bryłowej ( wierzchołków, krawędzi i ścian) jako geometrii odniesienia, w interesie tego, co jest uważane za dobrą praktykę, ten poradnik powstrzyma się od tego. Zobacz stronę [Edycja cech](/Feature_editing/pl "Feature editing/pl") aby uzyskać więcej wyjaśnień.

## Czynności wstępne

Zanim zaczniemy, sprawdźmy jak powinniśmy podejść do budowy tego modelu.

Niezależnie od kąta patrzenia, widzimy kwadrat lub prostokąt ze ściętym rogiem.

![](/images/AttachmentTD.png)

Widok z Rysunku Technicznego

Istnieje jednak oczywista oś, od której wszystkie cechy są wspólne.

Jest całkowicie możliwe, aby stworzyć tutaj trochę danych geometrii i dołączyć do niej wszystkie szkice. W niektórych modelach byłby to dobry wybór, ale na potrzeby tego poradnika ograniczymy się do standardowych płaszczyzn i szkiców.

Możemy wykonać szkic na każdej z głównych płaszczyzn. Moglibyśmy dołączyć przycięty narożnik do naszego szkicu bazowego, ale zrezygnujmy z tego i dołączmy dodatkowy szkic i kieszeń, dla celów edukacyjnych.

![](/images/CommonAxis.png)

Wspólna oś

## Dołączenie

Zaczniemy od bloku i zgarniemy nadmiar za pomocą kieszeni.

Przechodzimy do środowiska pracy Projekt Części, otwieramy nowy dokument, tworzymy bryłę i nowy szkic na płaszczyźnie XY.

W ten sposób utworzyłeś właśnie **_dołączenie_**. Kiedy wybierasz płaszczyznę, na której ma zostać wykonany szkic, to właśnie to jest robione, okno dialogowe wyboru płaszczyzny jest tylko uproszczoną wersją okna dialogowego dołączania, w którym wszystkie przesunięcia są ustawione na zero.

Narysuj prostokąt. W wersjach 0.17-0.21 kierunek linii prostokąta zależy od sposobu jego tworzenia. Aby uzyskać takie same wyniki mocowania jak na rysunku poniżej, użyj narzędzia [prostokąt ze środka](/Sketcher_CreateRectangle_Center/pl "Sketcher CreateRectangle Center/pl") i jako pierwszy punkt wybierz początek szkicu a jako drugi punkt wybierz prawy górny róg prostokątu. W wersji 1.0 i nowszych krawędzie prostokąta mają stały kierunek przeciwny do tego na rysunkach, co trochę utrudnia podążanie za tym poradnikiem. Można tego uniknąć ręcznie tworząc prostokąt zgodnie ze wskazówkami zegara przy pomocy narzędzia [polilinia](/Sketcher_CreatePolyline/pl "Sketcher CreatePolyline/pl").

Upewnij się, że prostokąt jest wyśrodkowany na początku, zwiąż długością _(poziomą)_ 70mm i nadaj wiązaniu nazwę "długość", następnie zwiąż go szerokością _(pionową)_ 40mm i nadaj wiązaniu nazwę "szerokość".

Zaznacz szkic, naciśnij klawisz F2 i zmień nazwę na "BaseSketch".

![](/images/Sketch1.png)

Szkic podstawy

[Przewiń na górę strony](#top)

### Odsunięcie dołączenia

Gdybyśmy pozostawili szkic tam, gdzie jest, przykład byłby zbyt prosty, więc zmieńmy położenie szkicu, zmieniając przesunięcie jego dołączenia.

W widoku połączonym _(zakładka Dane)_, spójrz na sekcję Dołączenie w panelu właściwości, tutaj widzimy, że BaseSketch ma właściwość Support 0.21 and below lub Attachment Support [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") jako XY_Plane i jest dołączony z trybem Płaska ściana. Spójrz dalej w dół i znajdź właściwość Odsunięcie dołączenia i rozwiń ją, klikając znak plusa lub strzałkę obok.

Zrób to samo dla podtytułu Pozycja. Zmień wartość odsunięcia X na 80mm, a wartość odsunięcia Y na 90mm.

![](/images/Comboview.png)

Odsunięcie dołączenia

Przesunięcie dołączenia jest często używane w połączeniu z wyrażeniami, aby zaoferować parametryczne położenie równoległe do płaszczyzny, np. pozycjonowanie szkicu na górnej powierzchni podkładki przy użyciu wyrażenia _(Pad.Length)_ dla przesunięcia Z.

Szkic może być teraz wyciągnięty ![](/images/PartDesign_Pad.svg), załóżmy, że wysokość wyciągnięcia powinna być taka sama jak szerokość szkicu. W oknie dialogowym **Parametry wyciągnięcia** wybierz pole **Długość**, naciśnij klawisz = lub wybierz ikonę funkcji ![](/images/Bound-expression.svg) i wpisz "**Sketch.Constraints.szerokość**" lub "**<<BaseSketch>>.Constraints.width**", to wyrażenie powinno mieć wartość "40 mm", następnie zaznacz **Symetrycznie do płaszczyzny** i naciśnij przycisk OK.

![](/images/BasePad2.png)

Bazowe wyciągnięcie

Zróbmy następny szkic, nie jest tak naprawdę ważne, który wybierzemy, ale najłatwiejszy jest trójkąt równoramienny 20x20, który przechodzi przez długość bryły.

Utwórz nowy szkic, wybierz dowolną płaszczyznę _(docelowo i tak zmienimy jego dołączenie)_.

Narysuj trójkąt, zrównaj dwa boki i zwiąż długość w taki sam sposób, jak w przypadku długości wyciągnięcia, tylko tym razem zastosuj formułę "**Sketch.Constraints.width/2**" lub "**<<BaseSketch>>.Constraints.width/2**".

Powinny pozostać dwa stopnie swobody, czyli położenie względem Odniesienie położenia. Przymocuj jeden z rogów do Odniesienia położenia tak, aby szkic wyglądał następująco:

![](/images/IsoscelesSketch.png)

Pierwszy trójkąt

[Przewiń na górę strony](#top)

### Zmiana dołączenia

Zamknij szkic. Zmień nazwę szkicu, nazywając go "IsoscelesSketch".
Początek szkicu jest punktem, który zostanie dołączony w przyszłości, dlatego ważny jest wybór sposobu związania szkicu z Odniesieniem położenia. Odniesienie położenia można traktować jako haczyk, który łapie miejsce odniesienia. Możemy dostosować położenie szkicu za pomocą przesunięć, ale lepiej jest wybrać mądrze na początku.

Teraz zmienimy tryb dołączania szkicu w naszym modelu.

Zaznacz wyciągnięcie i uczyń go niewidocznym, a Szkic bazowy uczyń widocznym. Musimy widzieć Szkic bazowy, a chcemy ukryć wyciągnięcie, aby uniknąć popełnienia błędów przy zaznaczaniu.

Obraz w oknie [widoku 3D](/3D_view/pl "3D view/pl") powinien wyglądać tak jak poniżej:

![](/images/TwoSketches.png)

Dwa szkice

Ja wybrałem płaszczyznę XY dla mojego szkicu równoramiennego, Twoja może być inna.

Teraz musimy wybrać IsoscelesSketch i przejść do panelu właściwości w [widoku połączonym](/Combo_view/pl "Combo view/pl").
Klikamy w polu wartości obok właściwości Map Mode, pojawi się przycisk ....

![](/images/MapModeSelect.png)

Wybór własności Map Mode

Kliknij na nim, a otworzy się okienko dialogowe dołączania.

![](/images/AttachmentDialogue.png)

Okienko dialogowe dołączania

Tutaj widzimy dołączenie, które wybraliśmy podczas tworzenia szkicu _(w oknie dialogowym Wybierz płaszczyznę)_.

Przycisk Reference 1 jest w trybie wyboru, więc w oknie [widoku 3D](/3D_view/pl "3D view/pl") wybierz jeden z długich boków szkicu bazowego.

Szkic trójkąta równoramiennego zostanie dołączony do wybranej linii, a okno trybu dołączania zmieni się, aby odzwierciedlić dostępne tryby. Jeśli trójkąt jest skierowany w złą stronę możesz to skorygować zaznaczając pole wyboru "Odwróć strony" na dole okna dialogowego _(lub później po zamknięciu okna dialogowego można to zmienić w zakładce danych właściwości ustawiając wartość parametru "Map Reversed" na `Prawda`)_. Nie jest ważne, do którego końca linii jest dołączony trójkąt (zależy to od sposobu jego utworzenia).

![](/images/NormalToEdgeIsosceles.png)

Normalny do krawędzi Równoramiennego

![](/images/NormalToEdgeAttachment.png)

Normalny do krawędzi Dołączenia

Widać, że szkic równoramienny został dołączony do wybranej prostej w punkcie, który wcześniej został związany do punktu początkowego.

Koncepcja, w której punkt początkowy jest punktem zaczepienia jest bardzo ważna, sprawia, że tryby dołączania są bardzo elastyczne i mogą być potężnym narzędziem w modelowaniu.

Można go używać z dodatkiem przesunięć, aby precyzyjnie pozycjonować szkice bez polegania na wygenerowanej geometrii i wszystkich problemach, które mogą z niej wynikać.

FreeCAD próbuje przewidzieć tryb dołączania dla Ciebie, i filtruje tryby dostępne dla danego zaznaczenia.

W tym przypadku opcje są następujące: "Wyłączone", ["**Normalna do krawędzi**"](/Part_EditAttachment/pl#Normalna_do_kraw.C4.99dzi "Part EditAttachment/pl") i ["Bezwładność 2-3"](/Part_EditAttachment/pl#Bezw.C5.82adno.C5.9B.C4.87_2-3 "Part EditAttachment/pl"). Opcja "Normalnie do krawędzi" jest pogrubiona i jest uważana za preferowany wybór.

W obszarze powiadomień w górnej części okna dialogowego wyświetlany jest komunikat w kolorze zielonym informujący o używanym trybie.

Opcje wyszarzone wskazują, że do ich aktywacji wymagane jest więcej zaznaczeń.

W tym momencie możesz dokonać kolejnego zaznaczenia i zobaczyć różnicę w trybach. Nie zapomnij zmienić trybu na "**Normalny do krawędzi**" przed kontynuowaniem poradnika.

Szkic równoramienny jest teraz prawidłowo ustawiony, więc potwierdź i opuść okienko dialogowe.

Teraz można wykorzystać szkic do operacji [kieszeni](/PartDesign_Pocket/pl "PartDesign Pocket/pl"). Wybierz typ _Przez wszystko_ oraz, w zależności od orientacji szkicu, opcję _Odwrócone_.

![](/images/Pocket.png)

Kieszeń

[Przewiń na górę strony](#top)

### O krok dalej

Utwórz następny szkic, wymiary powinny być wyrażeniami _("**Sketch.Constraints.width**","**Sketch.Constraints.width/2**" lub "**<<BaseSketch>>.Constraints.width**","**<<BaseSketch>>.Constraints.width/2**")_ i powinien być związany z punktem odniesienia położenia w wierzchołku sąsiadującym z przeciwprostokątną i jej najkrótszym bokiem. _(Jeśli jesteś zaznajomiony z funkcją ![](/images/Sketcher_CarbonCopy.svg) [Kalka techniczna](/Sketcher_CarbonCopy/pl "Sketcher CarbonCopy/pl") możesz jej użyć, aby w pustym szkicu utworzyć kopię szkicu "IsoscelesSketch" i odpowiednio edytować jego parametry)_.

Zmień nazwę szkicu na RightAngleTriangleSketch.

![](/images/FinalSketch.png)

szkic RightAngleTriangleSketch

Po raz kolejny musimy ukryć bryłę, w tym przypadku Kieszeń, i upewnić się, że oba szkice są widoczne do zaznaczenia _(zostawmy isoscelesSketch niewidoczny, będzie po prostu przeszkadzał)_.

Wybierz szkic RightAngleTriangleSketch i otwórz jego okno dialogowe trybu dołączania.

Wybierz jeden z krótkich boków prostokąta jako pierwszy punkt odniesienia.

![](/images/RATNormalToEdge.png)

szkic RightAngleTriangleSketch Tryb - normalny do krawędzi

Widok 3D powinien być podobny do tego na powyższym rysunku. Nie jest ważne, do którego końca linii jest przyczepiony trójkąt _(zależy to od tego, jak został utworzony prostokąt)_.

Jeśli wybrałeś złą linię, zmień ją teraz. Jeśli trójkąt jest skierowany w złą stronę, możesz to skorygować, zaznaczając pole wyboru "Odwróć strony" na dole okna dialogowego _(lub później, po zamknięciu okna dialogowego, można to zmienić w zakładce Danych właściwości, ustawiając opcję "Mapowanie odwrócone" na wartość `Prawda`)_.

Szkic RightAngleTriangleSketch jest teraz w pozycji, która zapewni nam poprawną geometrię po operacji kieszeni, jednak możemy być trochę bardziej pomysłowi i ustawić szkic tak, aby ułatwić sobie dołączenie dalszej geometrii w późniejszym czasie. Przesuniemy nasz szkic na środek linii tak, aby uzyskać wierzchołek w górnej części [fazy](/Glossary/pl#C "Glossary/pl") narożnika.

W dialogu dołączania zmienimy tryb dołączania z ["Normalna do krawędzi"](/Part_EditAttachment/pl#Normalna_do_kraw.C4.99dzi "Part EditAttachment/pl") na ["Bezwładność 2-3"](/Part_EditAttachment/pl#Bezw.C5.82adno.C5.9B.C4.87_2-3 "Part EditAttachment/pl"). To zmieni położenie na środek linii, opisanie wszystkich trybów dołączania wykracza poza zakres tego poradnika, ich opisy można znaleźć na stronie ![](/images/Part_Attachment.svg) [Część: Edytuj mocowanie](/Part_EditAttachment/pl "Part EditAttachment/pl"). Wystarczy powiedzieć, że tryb **inercja 2-3** wykorzystuje środek masy i tutaj spełnia swoje zadanie.

![](/images/ADInertia.png)

Okienko dialogowe: Dołączanie, tryb Inercja 2-3

![](/images/3DInertia.png)

szkic RightAngleTriangleSketch, tryb Inertia 2-3

Szkic RightAngleTriangleSketch jest teraz prawidłowo ustawiony, więc potwierdź i opuść okienko dialogowe.

Możesz teraz wykonać kieszeń ze szkicu. Tym razem użyj opcji "Symetrycznie do płaszczyzny".

![](/images/2ndPocket.png)

Druga kieszeń

[Przewiń na górę strony](#top)

### Manipulowanie dołączeniem

Ogólnie rzecz biorąc, lepiej jest pozycjonować nasze szkice po prostu za pomocą trybów dołączania. Jednak nie zawsze jest możliwe pozycjonowanie szkiców dokładnie tam, gdzie chcemy, bez modyfikowania trybu dołączania w jakiś sposób.

FreeCAD oferuje kilka sposobów, aby to zrobić.

1. [Odsunięcie mocowania](/Part_Part2DObject/pl#Property_Odsunięcie_mocowania "Part Part2DObject/pl"), umożliwia pozycjonowanie względem lokalnych współrzędnych punktu dołączenia _(gdzie dołączony jest początek pozycjonowanego szkicu)_.
2. Parametr [Ścieżka dołączenia](/Part_Part2DObject/pl#Property_.C5.9Acie.C5.BCka_do.C5.82.C4.85czenia "Part Part2DObject/pl") _(w zakładce Dane właściwości z włączoną opcją Pokaż ukryte)_ Umożliwia pozycjonowanie wzdłuż wybranej krawędzi.
3. Parametr [Odwróć strony / mapuj odwrotnie](/Part_Part2DObject/pl#Property_Dołączenie_odwrotne "Part Part2DObject/pl") powoduje odbicie lustrzane szkicu.

W naszym ostatecznym szkicu zamocujemy go arbitralnie i skorygujemy jego położenie za pomocą modyfikatorów wymienionych powyżej.

Utwórz ostateczny szkic, którego wymiary powinny być wyrażeniami _("**Sketch.Constraints.width**","**Sketch.Constraints.width/2**" lub "**<<BaseSketch>>.Constraints.width**" , "**<<BaseSketch>>.Constraints.width/2**")_ i który powinien być związany do punktu odniesienia położenia w wierzchołku sąsiadującym z przeciwprostokątną i jej najkrótszym bokiem.

Zmień nazwę szkicu na FinalSketch.

![](/images/RightAngleTriangle.png)

FinalSketch

Zauważ, że FinalSketch został związany z punktem odniesienia położenia w inny sposób. W przeciwnym razie moglibyśmy użyć funkcji ![](/images/Sketcher_CarbonCopy.svg) [Kalka techniczna](/Sketcher_CarbonCopy/pl "Sketcher CarbonCopy/pl"), ale szkic ma tylko trzy linie i pięć wiązań.

Po raz kolejny musimy ukryć bryłę, w tym przypadku Pocket001, i upewnić się, że oba szkice są widoczne do wyboru _(BaseSketch i FinalSketch)_.

Wybierz FinalSketch i otwórz okno dialogowe załącznika, wybierz jeden z prostokątów o krótkich bokach jako pierwsze odniesienie.

![](/images/NormalToEdgeFinal.png)

FinalSketch dołączenie

Widok 3D powinien być podobny do tego na powyższym rysunku. Nie jest ważne, do którego końca linii jest przyczepiony trójkąt _(zależy to od tego, jak został utworzony prostokąt)_.

Teraz musimy go przerzucić _(odbicie lustrzane)_, przekształcić o 90°, i przesunąć do rogu.

W dolnej części okna dialogowego załącznika znajduje się pole wyboru ![](/images/CheckBoxFalse.svg) Odwróć strony, zaznacz to pole.

FinalSketch w odbiciu lustrzanym

Teraz dokonamy obrotu o 90°. Na ilustracji FinalSketch powyżej widzimy, że osią obrotu powinna być oś X. W Wiki jest to określane jako [Obrót](/Tasks_Placement/pl#Obrót "Tasks Placement/pl"). Pamiętaj, że operacja odbywa się względne w stosunku do lokalnego układu współrzędnych. Wprowadź wartość 90° ![](/images/SpinBox.svg) w polu "Wokół osi X" w sekcji **Odsunięcie dołączenia** okna dialogowego.

![](/images/FSFlipRot.png)

Szkic "FinalSketch" odwrócony i obrócony

![](/images/FSFlipRotAD.png)

FinalSketch okienko dialogowe dołaczenia

Moglibyśmy użyć odsunięcia w kierunku Z - które teraz odpowiada przeciwnemu kierunkowi Y w globalnym układzie współrzędnych - aby przesunąć FinalSketch do narożnika, ale chciałbym zademonstrować inną właściwość.

Potwierdźmy więc i zakończmy na razie tą czynność zamykając okno dialogowe.

[Przewiń na górę strony](#top)

### Mapowanie parametru ścieżki

Wybierz FinalSketch i poszukaj w widoku połączonym, w panelu właściwości w sekcji dołączania, tuż pod właściwością Tryb Mapowania znajduje się parametr Ścieżka Mapy.

![](/images/FinalSketchProperties.png)

Panel właściwości szkicu FinalSketch

Domyślnym ustawieniem jest wartość 0.0. Jeśli zmienimy ją na 1 szkic będzie mapowany na drugim końcu linii, a 0.5 daje nam połowę odległości. W kolumnie wartość wpisz liczbę 0,5.

Kombinacja parametru "Normalna do krawędzi" i parametru ścieżki mapy jest bardzo przydatna do pozycjonowania szkiców dla wyciągnięcia po ścieżce i profilach.

![](/images/FinalSketchPosition.png)

Pozycja końcowa szkicu

Możesz teraz wykonać kieszeń na szkicu. Nie zapomnij użyć opcji Symetrycznie do płaszczyzny.

![](/images/3rdPocket.png)

trzecia kieszeń

[Przewiń na górę strony](#top)

### Inny tryb wyboru

Do tej pory widzieliśmy, jak pozycjonować szkice za pomocą trybów dołączania i odsunięć, ale mogliśmy użyć płaszczyzn standardowych, ponieważ pozycjonowanie względne było dość proste.

Teraz stoimy przed trudniejszym problemem, jak odciąć pozostałą część bryły?

![](/images/3rdPocketMarked.png)

Pozostała część do odcięcia

Widzimy, że istnieje płaszczyzna, która przechodzi przez narożniki czerwonego trójkąta, byłoby proste, gdybyśmy mogli ją tam po prostu odciąć.

Cóż, ponieważ byliśmy bardzo uważni przy tworzeniu naszych szkiców, możemy to zrobić!

Najpierw uczyń bryłę niewidoczną, w rzeczywistości uczyń wszystko niewidocznym z wyłączeniem szkicu RightAngleTriangleSketch oraz FinalSketch niewidocznym.

Teraz wybierz trzy punkty, które tworzą płaszczyznę. Nie zapomnij przytrzymać klawisza Ctrl _(CMD na Macu)_ podczas zaznaczania.

![](/images/TwoTriangles.png)

Wybór

Po naciśnięciu przycisku ![](/images/PartDesign_Plane.svg) [utwórz płaszczyzne odniesienia](/PartDesign_Plane/pl "PartDesign Plane/pl"), otworzy się okno dialogowe dołączania, pokazujące trzy punkty, które wybrałeś jako odniesienia 1-3 i tryb "Płaszczyzna przez 3 punkty".

![](/images/DPAttachDia.png)

Okienko dialogowe dołączenia

Potwierdź i zamknij okno dialogowe. Możemy teraz użyć płaszczyzny odniesienia do stworzenia szkicu, ale nie ma takiej potrzeby, możemy użyć płaszczyzny bezpośrednio do kieszeni, aby usunąć nadmiar materiału.
Upewnij się, że płaszczyzna bazowa jest wybrana i kliknij na kieszeń, w oknie dialogowym kieszeni wybierz "przez wszystkie" i "odwrócone". Zamknij okno dialogowe i gotowe.

![](/images/FinishedArticle.png)

Artykuł ukończony

[Przewiń na górę strony](#top)

### Tymczasowe dołączenie do generowanej płaszczyzny

Czasami trudno jest dowiedzieć się, jak wyrównać szkic lub płaszczyznę odniesienia do wygenerowanej powierzchni bez faktycznego dołączenia do niej, co, jak wspomniano powyżej, może być problematyczne. Jednym z rozwiązań jest dołączenie do wygenerowanej geometrii, a następnie zmiana dołączenia na jedną z płaszczyzn współrzędnych. FreeCAD zachowa istniejące położenie i orientację, ale teraz odniesie je do stabilnych płaszczyzn, unikając w ten sposób problemów ze zmianą nazwy topologicznej. Jednakże, kosztem tego jest utrata parametrycznego powiązania z wygenerowaną geometrią. Jeśli model bazowy ulegnie zmianie, nie rozpadnie się, jak to się często zdarza podczas dołączania do wygenerowanej geometrii, ale dołączenie nie będzie podążało za zmianami i będzie wymagało dostosowania poprzez powtórzenie sztuczki z tymczasowym dołączeniem.

Poprzednia metoda jest bardziej stabilna, ale bardziej abstrakcyjna i skomplikowana do osiągnięcia. Sztuczka z tymczasowym mocowaniem jest szybka i łatwa do wdrożenia, bardziej wytrzymała niż mocowanie do wygenerowanej geometrii, ale traci pewien stopień powiązania w procesie modelowania parametrycznego.

## Rozważania

Dołączenie części nie gwarantuje solidnego modelu, kluczem jest unikanie dołączania lub umieszczania szkiców na wygenerowanej geometrii, takiej jak powierzchnie lub krawędzie wyciągnięć i kieszeni.

Użytkownicy mają do dyspozycji wiele trybów mocowania, tutaj omówione zostały tylko podstawy.

Jedną z ważnych rzeczy, którą należy wynieść z tego poradnika, jest znaczenie pozycji pochodzenia jako "Haka". Pamiętaj również, że orientacja jest dokonywana w Lokalnym Układzie Współrzędnych.

Miłego dołączania!

[Przewiń na górę strony](#top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_Attachment_Tutorial/pl&oldid=1560914>"
