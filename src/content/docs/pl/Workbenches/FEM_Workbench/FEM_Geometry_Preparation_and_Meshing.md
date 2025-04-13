---
title: MES Przygotowanie geometrii i tworzenie siatki
---

|                                                                        |
| ---------------------------------------------------------------------- |
| Ćwiczenie                                                              |
| Temat                                                                  |
| Analiza MES                                                            |
| Poziom trudności                                                       |
| początkujący                                                           |
| Czas wykonania                                                         |
| Nie dotyczy                                                            |
| Autorzy                                                                |
| [NewJoker](https://www.freecad.org/wiki/index.php?title=User:NewJoker) |
| Wersja FreeCAD                                                         |
| 1.0 lub nowszy                                                         |
| Pliki z przykładami                                                    |
| _Nie dołączono_                                                        |
| Zobacz również                                                         |
| [środowisko pracy MES](/FEM_Workbench/pl "FEM Workbench/pl")           |
|                                                                        |

## Kontekst

Przygotowanie geometrii i tworzenie siatek to kluczowe elementy preprocessingu symulacji MES _(metoda elementów skończonych)_. Podczas gdy łatwo dostępne oprogramowanie do analiz połączone ze środowiskiem CAD _(takie jak [środowisko pracy MES](/FEM_Workbench/pl "FEM Workbench/pl") we FreeCAD)_ zachęca do przeprowadzania symulacji na nowych projektach bez żadnych przygotowań, należy pamiętać, że MES to zaawansowana metoda i wymaga odpowiednio przygotowanej geometrii i siatki aby zapewnić prawidłowe wyniki. Stara zasada [_garbage in, garbage out_](https://pl.wikipedia.org/wiki/Garbage_in,_garbage_out) _(śmieci na wejściu - śmieci na wyjściu)_ jest tu szczególnie istotna. Są jeszcze inne istotne ustawienia, od których w znaczącym stopniu zależy dokładność analiz MES _(takie jak właściwości materiałów i warunki brzegowe)_, ale pierwsze etapy i jedne z najczęstszych źródeł błędów to właśnie przygotowanie geometrii i tworzenie siatek, opisane na tej stronie.

## Typy geometrii używanej do analiz MES we FreeCAD

- Linie - używane w analizach z elementami belkowymi
- Powierzchnie - używane w analizach z elementami powłokowymi i 2D (płaski stan naprężeń/odkształceń i osiowosymetryczne)
- Bryły - używane w analizach z elementami bryłowymi

## Wybór typu geometrii

Podczas gdy większość modeli CAD składa się z brył, często bardzo zalecane jest użycie linii i powierzchni w analizach MES jeśli pozwala na to dana konstrukcja:

- jeśli część jest smukła _(długa i wąska)_ i przypomina belkę oraz ma regularny przekrój należący do jednego z obecnie wspieranych typów przekrojów belkowych _(prostokątny, okrągły lub rurowy)_ to powinna być liczona z użyciem elementów belkowych _(chyba że występują pewne specyficzne formy obciążenia, odpowiedzi lub detale geometrii, których nie można pominąć, a które sprawiają, że to założenie upraszczające jest nieprawdziwe)_. Należy po prostu narysować linię środkową _(kilka rad na temat jej uzyskiwania z istniejącej geometrii bryłowej można znaleźć w [tym wątku na forum](https://forum.freecad.org/viewtopic.php?t=81589) - w skrócie, użyj [Polilinii](/Draft_Wire/pl "Draft Wire/pl") lub [Krzywej złożoej](/Draft_BSpline/pl "Draft BSpline/pl") z odpowiednim [przyciąganiem](/Draft_Workbench/pl#Pasek_narzędzi_Rysunek_roboczy:_Przyciągnij "Draft Workbench/pl") i [liniami](/Draft_Line/pl "Draft Line/pl") jako geometriami pomocniczymi)_ i zdefiniować odpowiedni [przekrój belki](/FEM_ElementGeometry1D/pl "FEM ElementGeometry1D/pl") z opcjonalnym [obrotem](/FEM_ElementRotation1D/pl "FEM ElementRotation1D/pl"). Nie ma jednej przyjętej zasady kiedy można używać elementów belkowych, ale często zaleca się aby wymiary przekroju były < 1/10 długości części żeby można było zastosować teorię belek.

![](/images/FEM_beam_model.JPG)

Smukła część nadająca się do analizy przy pomocy elementów belkowych - podświetlona linia środkowa

- jeśli część jest cienkościenna _(np. konstrukcje blachowe)_ to powinna być liczona z użyciem elementów powłokowych _(chyba, że potrzebne są dokładne wyniki związane z kontaktem lub problem stanowią pewne ograniczenia elementów powłokowych)_. Jest to bardzo istotne i często pomijane. Do uzyskania odpowiedniej dokładności wyników _(zwłaszcza gdy występuje zginanie)_ potrzeba kilku elementów _(co najmniej 3-5)_ po grubości. W przypadku części cienkościennych, zwykle prowadzi to do uzyskania dużych siatek _(szczególnie gdy używane są elementy czworościenne, ponieważ sześciościenne nie mogą być wygenerowane we FreeCAD)_ i znacznego zwiększenia kosztu obliczeń _(wymaganej mocy komputera i czasu analizy)_. Aby uzyskać geometrię odpowiednią do analizy z użyciem elementów powłokowych, należy narysować powierzchnię środkową części _(kilka rad na temat jej uzyskiwania z istniejącej geometrii bryłowej można znaleźć w [tym wątku na forum](https://forum.freecad.org/viewtopic.php?t=67505), [tym](https://forum.freecad.org/viewtopic.php?t=71821) oraz [tym](https://forum.freecad.org/viewtopic.php?t=81834) - w skrócie, użyj [Łącznika kształtów podrzędnych](/PartDesign_SubShapeBinder/pl "PartDesign SubShapeBinder/pl") lub [Łącznika kształtu](/Draft_Facebinder/pl "Draft Facebinder/pl") a następnie [Odsunięcia 3D](/Part_Offset/pl "Part Offset/pl") i wreszcie Łącznika kształtów podrzędnych i [Wyciągnięcia](/Part_Extrude/pl "Part Extrude/pl") do wydłużenia krawędzi powierzchni środkowych aby zamknąć przerwy między nimi)_ i zdefiniować odpowiednią [grubość](/FEM_ElementGeometry2D/pl "FEM ElementGeometry2D/pl"). Tu również nie ma jednej przyjętej zasady, ale zaleca się aby grubość była < 1/10 typowego wymiaru globalnego _(długość / szerokość)_ części żeby można było zastosować teorię powłok.

![](/images/FEM_shell_model.JPG)

Cienkościenna część nadająca się do analizy przy pomocy elementów powłokowych - podświetlona powierzchnia środkowa

- w niektórych przypadkach możliwe są też analizy 2D, które można aktywować ustawiając odpowiednio właściwość DANE**Model Space** [obiektu solvera CalculiX](/FEM_SolverCalculixCxxtools/pl "FEM SolverCalculixCxxtools/pl"):
  - plane stress (płaski stan naprężeń) - dla cienkich części, które można uprościć do płaskich powierzchni reprezentujących profil dla wyciągnięcia (grubość jest definiowana tak samo jak dla powłok), są obciążone i deformują się tylko w płaszczyźnie i mają zerowe naprężenia w kierunku poza płaszczyznowym. Dostępne są jedynie dwa stopnie swobody - przemieszczenia w kierunkach X i Y. Powierzchnie muszą w tym przypadku leżeć na płaszczyźnie XY. To podejście jest dosyć powszechne. Przykładowo, można w ten sposób analizować cienką płytkę poddaną rozciąganiu.
  - plane strain (płaski stan odkształceń) - dla grubych części, które można uprościć do płaskich powierzchni reprezentujących profil do wyciągnięcia (grubość jest definiowana tak samo jak dla powłok), są obciążone i deformują się tylko w płaszczyźnie i mają zerowe odkształcenia w kierunku poza płaszczyznowym. Dostępne są jedynie dwa stopnie swobody - przemieszczenia w kierunkach X i Y. Powierzchnie muszą w tym przypadku leżeć na płaszczyźnie XY. To podejście nie jest tak często używane. Przykładowo, można w ten sposób analizować długie tamy, ściany lub rury poddane ciśnieniu równomiernemu na całej długości.
  - axisymmetric (osiowosymetryczne) - dla części, które można uprościć do płaskich powierzchni reprezentujących profil do obrócenia (grubość nie ma tu znaczenia) i są obciążone równomiernie na całym obwodzie. Dostępne są jedynie dwa stopnie swobody - przesunięcie w kierunku promieniowym i osiowym. Powierzchnie muszą leżeć na płaszczyźnie XY, po prawej stronie osi Y. To podejście jest bardzo często stosowane. Przykładowo, można w ten sposób analizować niektóre zbiorniki ciśnieniowe, gumowe wibroizolatory, tulejki, uszczelki, kołnierze a nawet połączenia śrubowe (traktując gwint jako osiowosymetryczny).

Należy pamiętać, że elementy belkowe, powłokowe, płaskiego stanu naprężeń/odkształceń i osiowosymetryczne w CalculiX nie są prawdziwymi elementami tego typu _(nie korzystają z klasycznych sformułowań znanych z literatury i innego oprogramowania)_ - wewnętrznie są przekształcane w elementy bryłowe. Pomimo tego, zaleca się korzystanie z nich w wyżej wymienionych przypadkach.

## Poprawność geometrii

Geometria używana w analizach MES musi być poprawna. Przede wszystkim, nie mogą występować żadne przenikania. Jest to częsty problem, zwykle występujący gdy złożenia są modelowane bez odpowiednich połączeń między częściami. Narzędzie [Część: Wycinek z przekroju](/Part_SectionCut/pl "Part SectionCut/pl") może pomóc w znalezieniu takich przenikań między częściami. Oczywiście narzędzie [Część: Połączenie](/Part_Fuse/pl "Part Fuse/pl") może pomóc je naprawić jeśli są celowe. Inne problemy z geometrią _(takie jak geometrie typu non-manifold, zbędne krawędzie i ściany itp.)_ również muszą być naprawione przed przystąpieniem do tworzenia siatki. Narzędzie [Część: Sprawdź geometrię](/Part_CheckGeometry/pl "Part CheckGeometry/pl") może być pomocne, ale istotna jest też wizualna ocena. Przy przygotowywaniu symulacji z użyciem elementów bryłowych, w razie wątpliwości czy część faktycznie jest bryłą czy tylko zamkniętą powłoką, wyżej wymienione narzędzia _(Część: Wycinek z przekroju i zakładka_ Zawartość kształtu _w wynikach narzędzia Część: Sprawdź geometrię)_ mogą rozwiać te wątpliwości.

## Upraszczanie geometrii

Projekty przygotowane w programach CAD często są zbyt szczegółowe żeby nadawały się do analiz MES. W wielu przypadkach konieczne jest najpierw ich uproszczenie. Ten krok jest często pomijany a jest bardzo istotny, ponieważ może być trudno uzyskać dobrą siatkę jeśli część jest zbyt szczegółowa a nawet jeśli uda się w końcu uzyskać taką siatkę, to może być bardzo gęsta, prowadząc do przesadnie długiego czasu rozwiązywania. Zatem należy zawsze przyjrzeć się projektowi i postarać się go uprościć tak bardzo jak to możliwe, zostawiając tylko te cechy geometrii, które mogą mieć istotny wpływ na wyniki _(wytrzymałość / sztywność)_, więc nie można ich pominąć. Następujące cechy zwykle są pomijane:

- małe zaokrąglenia i sfazowania,
- małe otwory,
- inne małe detale,
- spawy,
- śruby, gwinty,
- elementy dekoracyjne (loga, grawerunki).

Narzędzie [Część: Usuwanie cech](/Part_Defeaturing/pl "Part Defeaturing/pl") i dodatkowe [środowisko pracy Upraszczanie](/Defeaturing_Workbench/pl "Defeaturing Workbench/pl") mogą być pomocne podczas upraszczania części do analiz.

![](/images/FEM_bracket_original.PNG)

Oryginalna geometria kątownika

![](/images/FEM_bracket_simplified.PNG)

Geometria kątownika uproszczona przy pomocy samego narzędzia Część: Usuwanie cech

W przypadku złożeń _(więcej o nich w jednej z kolejnych sekcji)_, często niektóre części można wykluczyć z symulacji i zastąpić warunkami brzegowymi jeśli były one połączone z częściami podlegającymi analizie. Takie podejście jest prawidłowe jeśli wykluczone części są znacznie sztywniejsze (w rozumieniu sztywności strukturalnej, więc biorąc pod uwagę nie tylko materiał, ale też geometrię części) niż analizowane części, z którymi były połączone. Jest tak dlatego, że warunki brzegowe blokady przemieszczeń wprowadzają sztywność (jakby analizowana część była połączona z nieskończenie sztywnym komponentem) a podpory sprężyste, takie jak elementy typu sprężyna, nie są dostępne w środowisku pracy MES programu FreeCAD w przypadku korzystania z solvera CalculiX (Elmer ma zaimplementowane [sprężyny](/FEM_ConstraintSpring/pl "FEM ConstraintSpring/pl")).

Upraszczanie geometrii do analiz MES może też oznaczać jej cięcie w jednej z płaszczyzn symetrii aby skorzystać z założenia symetrii planarnej w symulacji. Jest ono prawidłowe tylko gdy wszystkie poniższe aspekty modelu wykazują symetrię w danej płaszczyźnie:

- geometria,
- obciążenia,
- warunki brzegowe,
- odpowiedź _(należy uważać w przypadku analiz częstotliwości drgań własnych i wyboczenia korzystających z symetrii - nie uzyska się asymetrycznych postaci drgań własnych i wyboczenia)_.

Korzystanie z symetrii _(1/2, 1/4 lub 1/8 modelu)_ jest zalecane gdy tylko wchodzi to w grę, ponieważ można w ten sposób znacznie zredukować koszt obliczeń. Inną zaletą jest to, że eliminowane są niektóre ruchy sztywne, dzięki czemu łatwiej jest związać część. Warunek brzegowy symetrii powinien być zadany na ściany należące do płaszczyzny symetrii:

- przesunięcie w kierunku normalnym do płaszczyzny symetrii powinno być zablokowane dla części bryłowych,
- przesunięcie w kierunku normalnym do płaszczyzny symetrii i obroty w kierunkach innych niż wokół osi normalnej do płaszczyzny symetrii powinny być zablokowane dla części powłokowych i belkowych.

Przyłożoną siłę należy odpowiednio zredukować jeśli płaszczyzna symetrii przecina obszar jej przyłożenia (nieistotne w przypadku obciążenia ciśnieniem).

![](/images/FEM_symmetric_vessel.JPG)

Model 1/8 zbiornika cylindrycznego z warunkami brzegowymi symetrii i ciśnieniem wewnętrznym

Innym, rzadziej stosowanym typem symetrii dostępnym w środowisku pracy MES jest symetria cykliczna. Można ją zdefiniować przy pomocy [więzu tie](/FEM_ConstraintTie/pl#Symetria_cykliczna "FEM ConstraintTie/pl") i umożliwia analizowanie reprezentatywnego sektora konstrukcji składającej się z takiego szyku kołowego wokół osi. Zakłada się, że warunki brzegowe i obciążenia również wykazują ten typ symetrii. Można zadawać obciążenia styczne, więc da się w ten sposób symulować skręcanie. Jednak z symetrią cykliczną często używane jest [obciążenie siłą odśrodkową](/FEM_ConstraintCentrif/pl "FEM ConstraintCentrif/pl"). To podejście można stosować m.in. dla wirników, wałów, turbin, wiatraków czy kół zamachowych.

## Partycjonowanie geometrii

Tak zwane partycjonowanie to podział geometrii na mniejsze segmenty. W innych programach jest to powszechnie używane aby umożliwić tworzenie siatek złożonych z elementów sześciościennych, ale we FreeCAD może być przydatne z innych powodów. Głównym zastosowaniem partycjonowania są przypadki gdy obciążenie _(lub warunek brzegowy)_ trzeba przyłożyć tylko do wybranego obszaru na powierzchni części. Najłatwiejszym sposobem aby to osiągnąć jest utworzenie szkicu z odpowiednim konturem na ścianie i użycie narzędzia [Część: Fragmentacja funkcją logiczną](/Part_BooleanFragments/pl "Part BooleanFragments/pl") aby podzielić ścianę przy pomocy szkicu. Innym powodem partycjonowania może być przypadek gdy na jedną część trzeba nałożyć wiele materiałów _(bez używania wielu części połączonych ze sobą)_. Wtedy partycjonowania można dokonać przy pomocy [płaszczyzny odniesienia](/PartDesign_Plane/pl "PartDesign Plane/pl") i narzędzia Fragmentacja funkcją logiczną z trybem _Compsolid_ _(bryła złożona)_. Partycjonowanie jest też wykorzystywane do tworzenia obszarów do [zagęszczenia siatki](/FEM_MeshRegion/pl "FEM MeshRegion/pl").

![](/images/FEM_partition.JPG)

Część ze ścianą podzieloną do zadania obciążenia lub warunku brzegowego

## Geometrie złożeń

Obecnie jednym z największych ograniczeń środowiska pracy MES jest brak wsparcia dla wielu siatek w jednej analizie. W praktyce oznacza to, że nie można nałożyć siatki na każdą część złożenia osobno i połączyć je odpowiednimi więzami do analizy. Zamiast tego, należy utworzyć pojedynczy obiekt zawierający wszystkie części złożenia i nałożyć siatkę na ten obiekt. Jest tu kilka opcji, wszystkie korzystające z [operacji logicznych](/Part_Workbench/pl#Pasek_narzędzi_Operacje_logiczne "Part Workbench/pl"). Wybór zależy od oczekiwanego efektu - czy poszczególne części / objętości i ich brzegi mają mieć możliwość wskazania _(np. do przypisania materiałów lub definicji warunków brzegowych na wewnętrznych ścianach)_ czy nie:

- [Część: Połączenie](/Part_Fuse/pl "Part Fuse/pl") - scala części, uniemożliwiając ich indywidualne wskazywanie np. do definicji materiałów,
- [Część: Utwórz kształt złożony](/Part_Compound/pl "Part Compound/pl") - tworzy obiekt złożony, umożliwiając wskazywanie poszczególnych części,
- [Część: Połącz obiekty](/Part_JoinConnect/pl "Part JoinConnect/pl") - działa jak Część: Połączenie, scalając części i uniemożliwiając ich indywidualne wskazywanie,
- [Część: Fragmentacja funkcją logiczną](/Part_BooleanFragments/pl "Part BooleanFragments/pl") - działa jak Część: Utwórz kształt złożony, uniemożliwiając indywidualne wskazywanie części.

Należy wspomnieć, że jeśli części się stykają to na obiekcie boolowskim powstanie ciągła siatka i nie będzie potrzeby zadawania więzów do symulacji. Jeśli jest nawet drobna przerwa (albo przenikanie w przypadku narzędzia Utwórz kształt złożony) między częściami, siatka nie będzie ciągła i konieczne będą więzy takie jak [tie](/FEM_ConstraintTie/pl "FEM ConstraintTie/pl") lub [kontakt](/FEM_ConstraintContact/pl "FEM ConstraintContact/pl"). Przeprowadzenie analizy częstotliwości drgań własnych to dobry sposób na sprawdzenie czy siatka jest ciągła czy nie - jeśli części nie są połączone to pierwsze postacie drgań własnych z deformacją zwizualizowaną przy pomocy [filtra wizualizacji deformacji](/FEM_PostFilterWarp/pl "FEM PostFilterWarp/pl") pokażą ich separację - części będą "odlatywać".

![](/images/FEM_modal_separation.JPG)

Pierwsza postać drgań własnych z filtrem wizualizacji deformacji - analizie poddano dwie kostki z niewielką początkową przerwą między nimi

Wskazywanie wewnętrznych obszarów _(ścian / objętości)_ bywa problematyczne. Może być konieczne do zdefiniowania różnych materiałów, obciążeń objętościowych lub warunków brzegowych _(zwłaszcza w analizach termicznych i elektromagnetycznych)_. Istnieje kilka sposobów:

- włączenie [płaszczyzny tnącej](/Std_ToggleClipPlane/pl "Std ToggleClipPlane/pl") na czas dokonywania wskazania i wybranie wewnętrznych ścian,
- schowanie obiektu boolowskiego, zostawiając pokazaną tylko jedną z części, na których został on zastosowany i wybranie jej,
- wybranie innego, zewnętrznego obiektu i edycja właściwości _References_ w zakładce _Dane_ określonej cechy analizy _(wymaga ręcznego podania numeru obiektu geometrycznego)_.

## Podstawy tworzenia siatek

Zbyt rzadka siatka to jedno z najczęstszych źródeł niedokładności i innych problemów w MES. Często jest to po części wina automatycznych ustawień generatorów siatek - zwykle tworzą bardzo rzadkie, nienadające się do analizy siatki gdy rozmiar elementu nie jest ręcznie podany tylko zostawiony z domyślną wartością. Należy zawsze znać przybliżone rozmiary części, zwłaszcza rozmiar najmniejszej istotnej cechy _(może w tym pomóc narzędzie [Pomiary](/Std_Measure/pl "Std Measure/pl"))_ i wprowadzać odpowiedni maksymalny rozmiar elementu w oparciu o to. Dostępne jest też ustawienie minimalnego rozmiaru elementu, które zapobiega powstawaniu zbyt drobnych elementów wokół małych cech geometrii, co może prowadzić do niepotrzebnie gęstych siatek _(a czasem nawet crashy i zawieszania się programu FreeeCAD podczas prób generowania takich siatek)_. Ogólnie rzecz biorąc, lepiej zacząć od rzadszej siatki _(generowanej szybciej)_, zobaczyć jak wygląda _(potrzeba pewnego doświadczenia)_ i zagęścić ją w razie potrzeby. Często sens ma użycie gęstej siatki tylko w pobliżu obszarów zainteresowania _(miejsc z dużymi gradientami / koncentracjami naprężeń - karby)_ i względnie rzadkiej siatki z dala od nich. Dzięki temu liczba elementów jest znacząco redukowana, co prowadzi do krótszego czasu obliczeń. Lokalnego zagęszczenia siatki można dokonać przy pomocy narzędzia [MES: Obszar siatki](/FEM_MeshRegion/pl "FEM MeshRegion/pl").

![](/images/FEM_default_mesh.PNG)

Domyślna, zbyt rzadka siatka

![](/images/FEM_globally_refined_mesh.PNG)

Globalnie zagęszczona siatka

![](/images/FEM_locally_refined_mesh.PNG)

Lokalnie zagęszczona siatka

Wybór typu elementów skończonych nie jest łatwy i zależy od wielu czynników, ale ogólną zasadą jest to, że preferowane są elementy sześciościenne i czworokątne w stosunku do czworościennych i trójkątnych. Jednak skomplikowane geometrie nie mogą być dyskretyzowane przy pomocy elementów sześciościennych a FreeCAD nie potrafi ich porządnie generować _(tylko przy pomocy algorytmu Subdivision generatora Gmsh, ale jego wyniki nie są tym, czego można by oczekiwać od siatki z elementami sześciościennymi)_. Siatki złożone z elementów czworokątnych lub z dominującymi elementami tego typu można normalnie generować na powierzchniach - zobacz [ten wątek na forum](https://forum.freecad.org/viewtopic.php?t=20351). Elementy sześciościenne można zaimportować z zewnętrznych generatorów takich jak [Gmsh](https://gmsh.info) i wykorzystać w środowisku pracy MES, co pokazano w [tym filmiku](https://www.youtube.com/watch?v=vylt24G7qj4&t=932s).

Wybór rzędu elementów _(pierwszy lub drugi)_ zależy od warunków analizy, ale w większości przypadków preferowane są elementy drugiego rzędu. Jest tak zwłaszcza w przypadku elementów trójkątnych i czworokątnych - ich wersje pierwszego rzędu _(liniowe)_ nie powinny być normalnie używane - zaleca się korzystanie z nich tylko jak z wypełniaczy w mało istotnych obszarach. Jednak ponieważ FreeCAD nie może porządnie generować elementów sześciościennych to można korzystać z liniowych czworościanów w niektórych przypadkach jeśli siatki są wystarczająco gęste. Dotyczy to zwłaszcza analiz z [kontaktem](/FEM_ConstraintContact/pl "FEM ConstraintContact/pl").

## Ujemne Jacobiany

Jeśli przestrzega się powyższych zasad (szczególnie w kwestii poprawności geometrii, usuwania jej zbędnych cech i doboru rozmiaru elementów), to siatka powinna zostać poprawnie wygenerowana. Jednak w niektórych przypadkach geometrii nie można za bardzo uprościć albo procedura modelowania jest prawidłowa, ale i tak prowadzi do małych krawędzi i ścianek. Wtedy tworzenie siatki z elementami drugiego rzędu może się nie udać ze względu na ujemne Jacobiany. Wynika to z faktu, iż generatory siatek muszą podążać za geometrią CAD i umieszczają węzły środkowe elementów drugiego rzędu na geometrii. Dla bardziej złożonych kształtów może to prowadzić do rozciągnięcia elementów w takim stopniu, że zostają odwrócone na drugą stronę. Jacobian to jedna z głównych miar jakości siatki. opisuje rozbieżność między idealnym a rzeczywistym kształtem elementu. Staje się ujemny gdy element odwraca się na drugą stronę z powodu dużych deformacji w trakcie analizy (nie omawiane tutaj) lub ze względu na opisane wyżej problemy z generowaniem siatki. Ujemne Jacobiany w środowisku pracy MES programu FreeCAD może zgłaszać Gmsh lub CalculiX. Ich położenia na siatce są podświetlane gdy włącza się analizy z CalculiX przy pomocy przycisku [Uruchom solver](/FEM_SolverRun/pl "FEM SolverRun/pl"). Następujące zalecenia mogą pomóc wyeliminować ujemne Jacobiany:

- ustaw właściwość _Second Order Linear_ obiektu [FEMMeshGmsh](/FEM_MeshGmshFromShape/pl "FEM MeshGmshFromShape/pl") na _prawda_ - to powoduje, że węzły środkowe elementów drugiego rzędu są bezpośrednio dodawane w środku prostych krawędzi elementów (początkowo) pierwszego rzędu, bez umieszczania ich na geometrii i rozwiązuje problem w większości przypadków,
- skorzystaj z generatora Netgen zamiast Gmsh - Netgen jest mniej wrażliwy na problemy z ujemnymi Jacobianami, ale też ich nie zgłasza, więc można się o nich dowiedzieć dopiero uruchamiając analizę,
- jeszcze bardziej zmniejsz rozmiar elementów,
- wyeksportuj geometrię i spróbuj wygenerować dla niej siatkę przy pomocy środowisk graficznych programów Gmsh lub Netgen (NGSolve) bądź innych niezależnych preprocessorów (jak Salome_Meca) - te programy mają dodatkowe narzędzia, które mogą pomóc pozbyć się ujemnych Jacobianów (np. Gmsh ma tzw. "High-order tools"),
- użyj elementów pierwszego rzędu - tylko w ostateczności, ponieważ elementy czworościenne pierwszego rzędu są znane z niskiej dokładności.

Niezależnie od tych zaleceń, należy ponownie podkreślić, że ujemne Jacobiany są zwykle winą niechlujnego podejścia do modelowania i braku przygotowania geometrii do analizy (szczególnie częste w przypadku modeli STEP pobieranych z różnych stron internetowych). Nawet jeśli uda się w końcu wygenerować siatkę w takich przypadkach, to wyniki mogą być kiepskiej jakości (zasada _śmieci na wejściu - śmieci na wyjściu_ wspomniana w pierwszym akapicie). Tak więc oczyszczenie i przygotowanie geometrii do symulacji powinno zawsze być priorytetem.

## Studia zbieżności siatki

Studia zbieżności siatki są zalecane w przypadku wszystkich poważnych projektów wymagających dokładnych wyników. Wynika to z faktu, iż wyniki mogą się znacznie różnić, zbliżając się do poprawnych wartości wraz z zagęszczaniem siatki. Powinno się stosować następujące podejście:

1. Po uzyskaniu pierwszych wyników i zanotowaniu ich _(zwykle maksymalne naprężenia von Mises, naprężenia von Mises w danym miejscu i maksymalne przemieszczenia)_ należy zagęścić siatkę _(globalnie lub lepiej lokalnie - przy pomocy narzędzia [MES: Obszar siatki](/FEM_MeshRegion/pl "FEM MeshRegion/pl"))_ i ponownie uruchomić analizę.
2. Sprawdź wyniki i zanotuj ich nowe wartości. Jeśli odbiegają znacznie od początkowych wartości, ponownie zagęść siatkę i uruchom analizę.
3. Powtórz proces jeśli wyniki nadal się znacząco zmieniają _(zwykle rosną)_ wraz z zagęszczaniem siatki.

Zwykle pomaga utworzenie wykresu z danym wynikiem w funkcji gęstości siatki. W ten sposób łatwiej zauważyć kiedy wyniki zaczynają się zbiegać. Akceptowalna różnica w wynikach między dwoma uruchomieniami to zwykle kilka procent _(np. poniżej 5%)_.

W niektórych przypadkach zdarza się, że maksymalne naprężenia rosną w nieskończoność niezależnie od tego, jak gęsta jest siatka. Taki niefizyczny efekt to osobliwość naprężeń. Może mieć kilka powodów:

- siły skupione _(punktowe)_ przyłożone do modeli bryłowych i powłokowych,
- warunki brzegowe zadane w punktach _(pojedynczych węzłach)_,
- ostre narożniki,
- kontakt występujący w narożniku.

Typowe sposoby radzenia sobie z osobliwościami naprężeń to:

- zadawanie obciążeń i warunków brzegowych na małe powierzchnie zamiast punktów - zobacz sekcję o partycjonowaniu powyżej
- dodawania małych zaokrągleń do ostrych narożników _(wyjątek zasady pomijania małych zaokrągleń podczas upraszczania modeli do analiz)_,
- dodanie plastyczności do zachowania materiału aby umożliwić redystrybucję naprężeń i ograniczyć je do wartości, na jakie pozwala definicja plastyczności przy obserwowaniu odpowiedniego poziomu uplastycznienia _(odkształcenia plastyczne)_,
- ignorowanie osobliwości i odczytywanie wyników z dala od nich jeśli to możliwe _(w oparciu o regułę St. Venanta)_.

![](/images/FEM_mesh_convergence.PNG)

Typowe wykresy zbieżności siatki:

- przemieszczenia _(**zielona krzywa**)_ zbiegają się szybko,
- maksymalne naprężenia w karbie takim jak otwór _(**niebieska krzywa**)_ potrzebują więcej iteracji zagęszczania siatki aby się zbiegać,
- maksymalne naprężenia w ostrym narożniku z warunkiem brzegowym utwierdzenia _(**czerwona krzywa**)_ nie zbiegają się w ogóle - występuje osobliwość naprężeń i potrzebne jest małe zaokrąglenie i zamodelowanie połączenia w bardziej realistyczny, podatny sposób aby uniknąć tego zjawiska.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Geometry_Preparation_and_Meshing/pl&oldid=1571159>"
