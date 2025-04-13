---
title: Poradnik Natywne IFC
---

|                                   |
| --------------------------------- |
| Ćwiczenie                         |
| Temat                             |
| Poradnik do natywnego IFC         |
| Poziom trudności                  |
| średnio zaawansowany/zaawansowany |
| Czas wykonania                    |
| 60 minut                          |
| Autorzy                           |
| yorik                             |
| Wersja FreeCAD                    |
| 1.0                               |
| Pliki z przykładami               |
|                                   |
| Zobacz również                    |
| _-_                               |
|                                   |

## FreeCAD i poradnik do natywnego IFC

![](/images/Nativeifc-tutorial-01.jpg)

[FreeCAD](https://freecad.org), darmowa i otwartoźródłowa (FOSS) platforma do modelowania CAD 3D, od wielu lat oferuje narzędzia [BIM](https://pl.wikipedia.org/wiki/Building_Information_Modeling) w środowisku pracy Arch. Począwszy od wersji 1.0, wydanej w listopadzie 2024 roku, narzędzia Arch zostały rozszerzone i przemianowane na [środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"), wzbogacone o nowy natywny system IFC. Ten poradnik przeprowadzi Cię przez różne koncepcje stosowane w natywnym IFC oraz pokaże, jak zastosować je na przykładowym modelu.

### Format IFC

Nie sposób zacząć rozmowy o natywnym IFC bez wspomnienia o [Industry Foundation Classes](https://en.wikipedia.org/wiki/Industry_Foundation_Classes), znanym lepiej jako IFC. IFC to format pliku, ale także, co ważniejsze, format danych. Jest to standard (zarejestrowana norma ISO) określający, w jaki sposób różne elementy budynku powinny być reprezentowane cyfrowo, jakie właściwości powinny posiadać oraz jakie relacje mogą lub powinny mieć z innymi elementami. Krótko mówiąc, jest to przepis na cyfrowy opis budynku.

Format IFC posiada wiele interesujących cech. Przede wszystkim jest otwarty i publiczny (utrzymywany przez konsorcjum, podobnie jak format HTML), wywodzi się z formatu STEP — dobrze znanego, niezawodnego formatu geometrii 3D szeroko stosowanego w przemyśle mechanicznym, jest czytelny dla człowieka (można go otworzyć w edytorze tekstu), a dane mogą być zapisywane nie tylko w jednym, ale w kilku formatach plików, a nawet wykorzystywane jako baza danych.

Te cechy czynią ten format niezawodnym pod względem geometrii, dzięki jego "przodkowi" STEP, a także bardzo rozsądnym wyborem do przechowywania danych, ponieważ nawet za 50 lat będzie można otworzyć pliki IFC i odzyskać dane, nawet jeśli Twoja aplikacja BIM zniknie. Pliki IFC stają się również coraz częściej preferowanym formatem wymaganym przez władze przy składaniu wniosków o pozwolenia budowlane.

Do tej pory format IFC był głównie używany jako format _eksportu_. Projektanci nadal zapisywali swoje projekty w natywnym formacie plików swojej aplikacji BIM, a pliki IFC eksportowali w razie potrzeby. To wystarczające, aby zaprezentować swoją pracę, ale bardzo problematyczne, gdy inni muszą pracować na tym modelu, ponieważ dochodzi do dużej utraty danych, a przy każdym eksporcie dane są całkowicie przepisywane. Korzystanie z nowej wersji modelu bywa więc dla innych prawdziwym utrapieniem.

Dzięki natywnemu IFC chcemy to zmienić.

### Koncepcja natywnego IFC

Pomysł pochodzi z [pracy Bruno Postle](https://github.com/brunopostle/ifcmerge/blob/main/docs/whitepaper.rst), która opisuje, jak format IFC mógłby być wykorzystywany nie tylko jako format eksportu, ale także jako główny plik projektu, zamiast (zwykle zastrzeżonych) formatów stosowanych przez aplikacje BIM. Aby to osiągnąć, kluczowe jest, aby aplikacje BIM obsługiwały format IFC natywnie — zamiast każdorazowego konwertowania własnej zawartości z wewnętrznego formatu do IFC, powinny bezpośrednio manipulować danymi IFC.

![](/images/Nativeifc-tutorial-02.jpg)

rysunek z pracy Bruno Postle

Konkretne w FreeCAD można otwierać lub tworzyć modele IFC, eksplorować je, modyfikować ich zawartość, a każda zmiana będzie wyraźnie zarejestrowana, możliwa do zlokalizowania, zidentyfikowania i cofnięcia. Zmiany dokonane przez innych podczas Twojej pracy mogą zostać scalone, nawet jeśli korzystają z innych aplikacji (z natywnym IFC).

![](/images/Nativeifc-tutorial-03.jpg)

Powyższy rysunek przedstawia zwartą i ograniczoną zmianę pliku podczas dodawania nowej ściany

Praca nad natywnym IFC we FreeCAD nie jest jeszcze zakończona, ale jest już całkowicie użyteczna "do prawdziwej pracy". Jeśli już znasz narzędzia BIM we FreeCAD, musisz nauczyć się bardzo niewiele, ponieważ większość podejść korzysta z tych samych narzędzi.

### Czy potrzebuję IFC?

Decyzja należy do Ciebie. IFC to surowy format, w którym każdy element (ściana, piętro, okno) ma bardzo ścisłe atrybuty i cechy, których nie można modyfikować. Ta standaryzacja zapewnia jego kompatybilność i niezawodność. Oznacza to również, że "nie możesz robić, czego chcesz" z IFC. Musisz przestrzegać tego, co format definiuje. To jest pożądane i doskonałe podczas pracy z innymi, ponieważ dokładnie tego oczekujemy od _standardu_. Istnieją gwarancje dotyczące tego, co znajdziesz po otwarciu pliku IFC, ale oczywiście może to również ograniczać kreatywność.

Jednym z aksjomatów środowiska pracy BIM we FreeCAD jest brak ograniczeń dla kreatywności. Możliwe jest wszystko, każda forma geometryczna, każde parametryczne powiązanie. Pracując w środowisku pracy BIM bez natywnego IFC, ta wolność jest w zasięgu ręki. Włączając natywne IFC, ta wolność staje się ograniczona. Czy to dobre, czy złe dla Twojego projektu? To zależy.

Osobiście zalecałbym pracować bez IFC, gdy pracujesz samodzielnie i nadal rozwijasz koncepcje, aby skorzystać z maksymalnej wolności. Gdy projekt się ustabilizuje i zaangażują się inni, to może być moment, aby przejść na natywne IFC, aby skorzystać ze standaryzacji. Pamiętaj, że możesz przełączyć się w dowolnym momencie lub nawet wyeksportować swój projekt nienatywny do IFC w dowolnym czasie. Rzadko jest konieczne, aby od razu zaczynać od natywnego IFC.

## Otwieranie i tworzenie modeli IFC

### Wyszukiwanie i przeglądanie modeli IFC

Jeśli nigdy wcześniej nie pracowałeś z IFC, warto zacząć od dokładnego zapoznania się z kilkoma przykładowymi modelami. Jako format otwarty, na szczęście przykładowe modele są bardzo łatwe do znalezienia w internecie. Proste wyszukiwanie "przykładowe modele IFC" pozwoli Ci szybko dotrzeć do materiałów. Sugeruję na przykład ten [kanoniczny przykład domu](<https://github.com/buildingSMART/Sample-Test-Files/tree/main/PCERT-Sample-Scene/IFC%204.0.2.1%20(IFC%204)>) udostępniony przez konsorcjum IFC, ale wiele stron internetowych zgromadziło kolekcje przykładowych plików, jak na przykład [ta na BIMPlot](https://bimplot.com/free-ifc-project-samples-for-architects-and-bim-enthusists/).

![](/images/Nativeifc-tutorial-04.jpg)

Istnieje wiele aplikacji do przeglądania plików IFC. Niektóre są tylko darmowe, a niektóre są nawet darmowe i otwartoźródłowe (FOSS). Wśród komercyjnych, ale darmowych przeglądarek IFC, dobrymi opcjami są [BIMVision](https://bimvision.eu/) lub [przeglądarka ODA IFC](https://openifcviewer.com/) (działająca na Win/Mac/Linux). Wśród przeglądarek FOSS, prostą, którą często używam, jest [IFC++](http://www.ifcquery.com/), która jest dostępna w repozytoriach Debian/Ubuntu. Zarówno [FreeCAD](https://freecad.org), jak i [Bonsai](https://bonsaibim.org) są również dobrymi i szybkimi przeglądarkami IFC.

Możliwość otwierania i przeglądania plików IFC w innej aplikacji jest kluczowa podczas pracy z plikami IFC, ponieważ pozwala na podwójne sprawdzenie, czy to, co wysyłasz do współpracowników lub klientów, zawiera wszystko, co powinno.

### Co sprawia, że model IFC jest dobry

Format IFC jest skomplikowany, a aplikacje BIM, nawet te najdroższe komercyjne, są powszechnie złe lub bardzo złe w obsłudze plików IFC. Dlatego wyniki mogą się różnić, pliki IFC, z którymi się spotkasz, mogą mieć bardzo słabą jakość i być pełne niepotrzebnych danych, czasami do tego stopnia, że są ledwo użyteczne. Często wykorzystywano to przez zwolenników zastrzeżonych aplikacji BIM, aby zdyskredytować format IFC i próbować wykazać jego nieskuteczność.

Tworzenie wysokiej jakości modeli IFC nie jest jednak trudne. Ale wymaga to aplikacji, która traktuje ten format poważnie i pozostawia użytkownikowi kontrolę nad tym, co jest eksportowane i w jaki sposób.

Jest kilka rzeczy, które powinieneś wiedzieć:

- Jak dziedziczy po formacie STEP, plik IFC jest **plikiem tekstowym**, w którym każda linia reprezentuje element i zaczyna się od numeru ID. Na przykład:

  ```
  #66=IFCWALL('3JmWkr',$,'MyWall',$,$,(#71),$,$,$,.SOLIDWALL.);
  ```

  Powyższa linia definiuje element klasy **IfcWall**, o ID 66. Elementy wewnątrz nawiasów to jego atrybuty. Więcej o atrybutach poniżej.

  Ważnym elementem jest **klasa** (jak w _Industry Foundation Classes_). Każdy element ma klasę, która definiuje typ elementu: Ściana, okno, ale także piętro, przestrzeń, a nawet linia, okrąg, punkt w przestrzeni 3D, a nawet pojęcia takie jak moment w czasie czy zadanie do wykonania. Najbardziej użyteczne klasy IFC dla elementów budowlanych pochodzą z klasy [IfcBuildingElement](https://standards.buildingsmart.org/IFC/RELEASE/IFC4_1/FINAL/HTML/schema/ifcproductextension/lexical/ifcbuildingelement.htm).

- Modele IFC zwykle przestrzegają **sztywnej struktury**: W każdym pliku powinien znajdować się tylko jeden **IfcProject**. [IfcProject](https://ifc43-docs.standards.buildingsmart.org/IFC/RELEASE/IFC4x3/HTML/lexical/IfcProject.htm) to korzeń wszystkich obiektów w modelu IFC. Pod IfcProject zazwyczaj znajduje się co najmniej jedno **IfcSite**, które może zawierać jeden lub więcej **IfcBuildings**, które z kolei są podzielone na **IfcBuildingStoreys**. Te mogą być dalej dzielone na **IfcZones** i **IfcSpaces**.
- Elementy budowlane, takie jak **IfcWalls** lub **IfcWindows**, są następnie **powiązane** z jedną ze struktur powyżej, zazwyczaj z IfcBuildingStorey, ale mogą być również powiązane z innym elementem budowlanym, tak więc jeden element może składać się z kilku innych. Te relacje są zawsze wyraźnie określone w plikach IFC, nigdy nie są automatyczne ani domyślne.
- Elementy IFC, czy to elementy budowlane, takie jak ściany czy okna, czy elementy strukturalne, takie jak miejsca i piętra, czy jakiekolwiek inne [klasy elementów](https://ifc43-docs.standards.buildingsmart.org/IFC/RELEASE/IFC4x3/HTML/annex-b1.html) oferowane przez format IFC, wszystkie mają zdefiniowany zestaw **atrybutów**. Atrybuty to takie rzeczy jak nazwa, pozycja w przestrzeni czy unikalny numer ID, które są zdefiniowane w formacie. Wszystkie encje tej samej klasy muszą mieć te same atrybuty. Elementy mogą również mieć **właściwości**. W przeciwieństwie do atrybutów, właściwości nie są zdefiniowane przez format IFC i mogą być swobodnie definiowane przez użytkownika (lub aplikację BIM). Można je traktować jako niestandardowe atrybuty. Format IFC proponuje również domyślne zestawy właściwości dla wielu klas elementów. Na przykład, dla belek, istnieje zestaw o nazwie [BimCommon](https://ifc43-docs.standards.buildingsmart.org/IFC/RELEASE/IFC4x3/HTML/lexical/Pset_BeamCommon.htm), który zawiera szereg właściwości typowych dla belek.
- **Geometria** elementów IFC jest definiowana w oddzielnych elementach, które są przypisane do każdej ściany, okna, drzwi itd. Może być również współdzielona przez kilka elementów. Istnieje wiele sposobów definiowania geometrii, i to tam zaczynają się problemy. Elementy budowlane mogą mieć zarówno geometrię 3D, jak i 2D (na przykład widok z planu lub kontur), a także na przykład geometrię liniową (przydatną w badaniach stabilności). Dobra geometria jest zazwyczaj dobrze zdefiniowana i sensownie skonstruowana. Na przykład geometria prostej ściany byłaby zdefiniowana jako prostokąt na ziemi, o szerokości i długości, który następnie jest wyciągany w górę o daną wysokość, tworząc kształt ściany. To trzy linie w pliku IFC: Prostokąt, wyciągnięcie i pozycja ostatecznego obiektu. Jest to rozpoznawane przez inne aplikacje BIM, a parametry mogą być zmieniane, na przykład szerokość podstawowego prostokąta.
- W niektórych plikach IFC, które możesz otrzymać, ta logiczna informacja może zostać całkowicie utracona, a geometria ściany może być zdefiniowana jako zbiór trójkątnych powierzchni. Często zdarza się to w plikach, które zostały przekonwertowane na IFC z innego formatu. Mogą wystąpić dalsze problemy, takie jak niekompletne relacje itp. Wystarczy powiedzieć, że format IFC pozwala na ogromny zakres sposobów definiowania geometrii, od _najprostszych_ (trójkątnych powierzchni) po _najbardziej zaawansowane_ (obiekty oparte na NURBS), z dużym naciskiem na dobrze zdefiniowane bryły (takie jak nasz wyciągnięty prostokąt). Na szczęście dla nas, to specjalność FreeCAD.

### Otwieranie, tworzenie i konwersja modeli IFC

We FreeCAD otwieranie pliku IFC odbywa się tak samo jak każdego innego pliku, przez menu **Plik → Otwórz**. Domyślnie pliki IFC będą ładowane z tylko jednym elementem pojawiającym się w **Widoku drzewa**. Jest to najszybszy sposób importu, i zazwyczaj model o wielkości 100 MB można załadować w kilka sekund.

![](/images/Nativeifc-tutorial-05.jpg)

Możesz zmienić preferencje importu natywnego IFC w **Edycja → Preferencje → BIM → Natywne IFC**. Możesz na przykład ustawić, aby cała struktura budynku była ujawniana przy imporcie lub aby system pytał o to za każdym razem.

Tworzenie nowego modelu IFC zaczyna się po prostu od utworzenia nowego projektu IFC w menu **3D/BIM**.

Konwertowanie modelu FreeCAD, który nie jest w formacie IFC, na natywny IFC można wykonać po prostu eksportując go do formatu IFC, za pomocą menu **Plik → Eksportuj** lub używając przycisku blokady (więcej o tym poniżej).

## Eksplorowanie modelu

## Rozszerzanie zawartości modelu

Domyślnie, otwierając pliki IFC, wyświetlany jest tylko pierwszy, zewnętrzny element pliku. Zwykle jest to IfcSite. Aby zobaczyć zawartość tego elementu oraz kolejnych, należy go **rozwinąć**. Rozwijanie odbywa się przez **podwójne kliknięcie elementu w Widoku drzewa** lub alternatywnie, poprzez opcję menu **Narzędzia → Rozwiń IFC**. Ta komenda może być [dostosowana](/Interface_Customization/pl "Interface Customization/pl") i przypisana do skrótu klawiaturowego, dzięki czemu możliwe jest poruszanie się po Widoku drzewa za pomocą strzałek i rozwijanie modelu w razie potrzeby, używając wyłącznie klawiatury.

![](/images/Nativeifc-tutorial-06.jpg)

Podwójne kliknięcie elementu w Widoku drzewa spowoduje, że za pierwszym razem zostaną ujawnione jego dzieci, a za drugim razem, lub jeśli nie ma więcej dzieci do ujawnienia, **załadowane zostaną jego pełne właściwości, materiały i kształt**.

Pozwala to na jak najszybsze załadowanie modelu oraz rozszerzanie/definiowanie elementów w razie potrzeby. Możesz zmienić to zachowanie w **Edycja → Preferencje → BIM → Natywne IFC**.

### Blokowanie i odblokowywanie

Kiedy model IFC jest załadowany w FreeCAD, może być zablokowany lub odblokowany. Domyślnie, otwieranie plików IFC spowoduje ich zablokowanie, podczas gdy importowanie ich (za pomocą **Plik → Importuj**) pozostawi je odblokowane.

Blokowanie lub odblokowywanie odbywa się po prostu za pomocą przycisku blokady na pasku stanu w FreeCAD:

![](/images/Nativeifc-tutorial-07.jpg)

- **Tryb zablokowany** oznacza, że dokument FreeCAD JEST plikiem IFC. Nie widzisz IfcProject (jest to sam dokument FreeCAD w Widoku drzewa), a wszystko, co robisz w tym dokumencie, jest automatycznie, przezroczysto i natychmiastowo robione w danych IFC. Dodanie ściany zmieni plik IFC, tak samo jak dodanie linii czy wymiaru, wszystko odbywa się w IFC. Nie możesz mieć żadnych elementów FreeCAD w dokumencie, które nie są częścią pliku IFC. Możesz przekonwertować każdy model FreeCAD (BIM lub nie) na IFC, klikając przycisk blokady.
- **Tryb odblokowany**, zwany także trybem hybrydowym, oznacza, że projekt IFC znajduje się w obiekcie **projekt**. Możesz nadal mieć normalne, niefunkcjonujące w IFC obiekty FreeCAD obok elementów IFC. Aby dodać element do projektu IFC, musisz dodać go samodzielnie, przeciągając go na projekt lub jeden z pod-elementów projektu. Możesz utworzyć nowy, pusty projekt IFC za pomocą menu **3D/BIM → Projekt**.
- **Praca bez projektu IFC**: Pamiętaj, że nie musisz tworzyć projektu IFC, aby rozpocząć projekt BIM (można to zrobić w dowolnym momencie później, jeśli zajdzie taka potrzeba). Możesz po prostu zacząć budować ściany, dodawać piętra i dachy, bez definiowania struktury IFC lub nawet bez zajmowania się IFC.

Tryb zablokowany oznacza tryb ostrożności: Kiedy otwierasz plik stworzony przez kogoś innego, nie chcesz niczego zepsuć, chcesz zbadać plik, a może naprawić coś lub dokonać kilku lokalnych zmian. Chcesz mieć pewność, że wprowadzone zmiany są ściśle określone i możliwe do śledzenia.

We wszystkich innych przypadkach nie ma rzeczywistej potrzeby ani korzyści zablokowania modelu. W rzeczywistości, możesz zmienić domyślne zachowanie, aby otwierać modele IFC w trybie odblokowanym, jeśli wolisz, w **Edycja → Preferencje → BIM → Natywne IFC**.

Przy przechodzeniu na model IFC, często chcesz zweryfikować **co zostało zmienione w danych IFC** od ostatniego zapisania. Robi się to za pomocą **Narzędzia → Różnice IFC**. Zmiany są prezentowane w formacie [diff](https://pl.wikipedia.org/wiki/Diff), z sekcjami wyróżnionymi na czerwono i zielono. Ten format jest również zrozumiały dla systemów komputerowych, takich jak Git, które potrafią śledzić duże zestawy zmian, przez co twoje pliki IFC stają się obiektami pierwszoklasowymi takich systemów.

![](/images/Nativeifc-tutorial-08.jpg)

### Struktura modelu

Jak wspomniano powyżej, większość plików IFC korzysta ze standardowej struktury **Site → Building → Storey**. Jest to tak powszechne, że często uważa się to za obowiązkowe, choć nie jest to wyraźnie określone w standardzie IFC. Można równie dobrze mieć wszystkie elementy bezpośrednio powiązane z IfcProject. Jednakże, ponieważ standaryzacja działa, gdy wszyscy decydują się używać tego samego systemu, zaleca się, aby w modelu znajdowało się przynajmniej jedno miejsce (site), jeden budynek i jedno piętro (nazywane **Level** we FreeCAD).

![](/images/Nativeifc-tutorial-09.jpg)

We FreeCAD można używać **Grup** do dalszej organizacji obiektów w obrębie poziomu. Na przykład, w obrębie pierwszego piętra, można utworzyć grupę 'Walls' do dodania wszystkich ścian, grupę 'Carpentry' do dodania drewnianych belek, itd. Grupy są obsługiwane przez IFC, jednakże nie jest standardem umieszczanie grup wewnątrz elementów strukturalnych budynku, takich jak piętro. Z tego powodu grupy domyślnie są zapisywane jako **IfcBuildingElementAssemblies** zamiast IfcGroups. We FreeCAD jednak wierzymy, że takie zachowanie jest przydatne i powinno być dozwolone. Dlatego istnieje opcja preferencji, która na to pozwala. Większość aplikacji BIM z powodzeniem otworzy pliki z grupami wewnątrz innych elementów. Ta opcja preferencji ma na celu szerzenie naszej wizji i ewentualne przekonanie innych.

Zaczynajmy więc od praktyki i rozpracowania naszego modelu...

## Dodawanie i modyfikowanie elementów

### Modyfikowanie atrybutów i właściwości

Po otwarciu modelu możemy zacząć modyfikować jego zawartość. Należy jednak pamiętać, że w momencie pisania tego poradnika, nie ma **graficznego edytora geometrii** dla elementów IFC (choć znajduje się to na liście planów i powinien pojawić się wkrótce). Sposób modyfikacji geometrii elementów polega na edytowaniu ich **właściwości geometrycznych**.

Gdy elementy IFC są ładowane z pliku, ich atrybuty są wyświetlane w [edytorze właściwości](/Property_editor/pl "Property editor/pl") w grupie **IFC**. Tam można zmieniać takie rzeczy, jak nazwa, opis, a nawet klasa elementów.

Podwójne kliknięcie elementu w widoku drzewa spowoduje najpierw ujawnienie elementów podrzędnych tego elementu. Podwójne kliknięcie po raz drugi załaduje dodatkowe dane, takie jak **zbiory właściwości**, **własne właściwości**, **materiały** i **dane kształtu**. Dodatkowo utworzy zestaw **właściwości geometrii**, które pozwolą na modyfikację geometrii tego elementu. Te właściwości geometrii tworzą również podstawy przyszłego edytora graficznego.

![](/images/Nativeifc-tutorial-10.jpg)

Wszystkie te dodatkowe właściwości można zmieniać bezpośrednio, a nowe własne właściwości można dodać za pomocą dwóch przycisków znajdujących się pod edytorem właściwości.

### Modyfikowanie geometrii

Możesz zmienić pozycję dowolnego elementu, zmieniając jego właściwość **Umiejscowienie** (lub używając narzędzi [Przesuń](/Draft_Move/pl "Draft Move/pl") lub [Obróć](/Draft_Rotate/pl "Draft Rotate/pl")).

Aby zmodyfikować geometrię, na przykład szerokość ściany, musisz najpierw dwukrotnie kliknąć, aby ujawnić jej **właściwości geometrii**. Jeśli ta ściana została skonstruowana w standardowy sposób, jako wyciągnięty prostokąt, zobaczysz szerokość i długość prostokąta, a także wysokość wyciągnięcia wśród tych właściwości.

Oczywiście, wszystko zależy od tego, jak ściana została zdefiniowana w pliku IFC. Może to nie być wyciągnięty prostokąt. W takim przypadku dostępnych może być mniej lub inne właściwości geometrii.

### Dodawanie nowych obiektów BIM

Sposób dodawania nowych obiektów zależy od bieżącego trybu: zablokowanego lub odblokowanego. W trybie zablokowanym wszystko, co narysujesz, takie jak ściana lub kolumna, jest automatycznie tworzone w samym pliku IFC. Może być konieczne przypisanie jej do odpowiedniego poziomu lub budynku po utworzeniu, co odbywa się po prostu przez przeciągnięcie nowej ściany do odpowiedniego poziomu w widoku drzewa.

W trybie odblokowanym, twoja nowa ściana nie będzie jeszcze elementem IFC. Zawsze musisz ręcznie przeciągnąć ścianę w odpowiednie miejsce po jej utworzeniu.

### Typy

W IFC, każdy element może być zdefiniowany przez [typ](https://standards.buildingsmart.org/IFC/RELEASE/IFC4_1/FINAL/HTML/schema/ifckernel/lexical/ifctypeproduct.htm). Typ (np. IfcWallType, IfcWindowType) to element IFC, który może zawierać wspólne cechy, właściwości, a nawet geometrię, które będą automatycznie używane przez wszystkie obiekty tego typu. W niektórych aplikacjach BIM, jest to czasem określane jako rodziny.

We FreeCAD, w projektach BIM bez IFC, zwykle robiliśmy to za pomocą klonowania. W natywnym IFC, pełne wsparcie dla typów jest dostępne. Aby zdefiniować typ, najłatwiej jest zbudować obiekt pożądanej klasy, na przykład ścianę, a następnie kliknąć prawym przyciskiem myszy na obiekcie w widoku drzewa i wybrać **IFC → konwertuj na typ**.

Gdy obiekt zostanie przekonwertowany na typ, zostaje przeniesiony do specjalnej grupy _Types_ w obrębie projektu. Może się wtedy do niego odnosić każda inna ściana w projekcie.

![](/images/Nativeifc-tutorial-11.jpg)

Powyższy rysunek pokazuje naszą ścianę, która teraz używa 'Mój Typ Ściany' jako swój typ

### Dodawanie pobranej zawartości

W projekcie BIM często trzeba dodać zawartość do pobrania, taką jak meble, urządzenia czy elementy, takie jak prefabrykowane ramy okienne. Elementy te są zazwyczaj pobierane ze stron producentów lub stron z bibliotekami BIM.

Wszystkie te przypadki, jakość i format pobranych elementów mają duże znaczenie. Należy zwrócić uwagę (w tej kolejności) na użycie formatu pliku dobrze wspieranego przez FreeCAD, uzyskanie modeli o dobrej jakości geometrycznej oraz odpowiedniej ilości metadanych (kolor, materiały, informacje o producencie itd…). Kilka dobrych pomysłów to:

- Pliki STEP z [GrabCAD](https://grabcad.com/library?page=1&time=this_month&sort=popular&softwares=step-slash-iges): Pliki STEP są bardzo dobrze wspierane przez FreeCAD i zwykle zawierają wysokiej jakości geometrię, ponieważ jest to popularny format inżynierski. Zwykle bardzo dobrze konwertują się także do formatu IFC.
- Pliki IFC z bibliotek modeli, takich jak [BIMObject](https://bimobject.com): Choć używanie formatu IFC może brzmieć interesująco, pliki IFC udostępniane przez te strony są często automatycznie konwertowane z innych (komercyjnych) formatów, a ich jakość może być bardzo niska.
- Eksportowanie modeli z aplikacji BIM takich jak Revit czy ArchiCAD do formatu SAT i otwieranie ich w FreeCAD za pomocą dodatku [Inventor Loader](https://github.com/jmplonka/InventorLoader) (do zainstalowania przez [Menedżer dodatków](/Std_AddonMgr "Std AddonMgr")). Choć te aplikacje umożliwiają eksport części i elementów do formatu IFC, często pogarszają geometrię. Eksportowanie typów i rodzin do formatu SAT często daje podobną jakość jak pliki STEP. Inventor Loader to jednak rozwijający się projekt, który może nie działać z każdym plikiem.

### Zapisywanie i obsługa plików

Plik FreeCAD zawierający natywny projekt IFC, niezależnie od tego, czy jest zablokowany, czy odblokowany, zawsze będzie miał dołączony plik IFC, w którym przechowywane są dane IFC. Kiedy tworzysz nowy projekt i jeszcze nie zapisałeś pliku, zawartość IFC istnieje w pamięci. Gdy tylko zapiszesz plik, tworzony jest towarzyszący plik IFC, który od tej pory jest dołączony do pliku FreeCAD.

W **trybie zablokowanym** dokument FreeCAD zawiera w swojej właściwości _Ścieżka pliku IFC_ ścieżkę do towarzyszącego pliku IFC. Ponieważ wszystko, co dzieje się we FreeCAD, dzieje się bezpośrednio w pliku IFC, nie ma już potrzeby posiadania pliku FreeCAD. Opcje 'Zapisz' i 'Zapisz jako' w menu pliku FreeCAD zostały zastąpione przez 'Zapisz plik IFC' i 'Zapisz plik IFC jako'. Kiedy zapisujesz plik, zapisujesz plik IFC, a plik FreeCAD nie jest tworzony. Dosłownie pracujesz tylko z plikiem IFC.

W **trybie odblokowanym** w dokumencie FreeCAD istnieje obiekt _projekt_, który ma również właściwość _Ścieżka pliku IFC_, wskazującą na towarzyszący plik IFC. Jeśli przekażesz swój plik komuś innemu, będziesz musiał również przekazać im plik IFC. Jeśli przeniesiesz plik IFC, będziesz musiał naprawić właściwość _Ścieżka pliku IFC_ obiektu projektu.

Można jednak udostępniać plik FreeCAD bez pliku IFC: Ustaw właściwość _Tryb kształtu_ wszystkich obiektów na 'Kształt'. Spowoduje to, że plik FreeCAD zachowa kształt wszystkich obiektów i otworzy się poprawnie, nawet jeśli plik IFC nie będzie obecny. Obiekty jednak nie będą edytowalne w takim przypadku.

## Tworzenie danych wyjściowych

### Tworzenie widoków i zawartości 2D

Widoki 2D, które mają zostać umieszczone na [arkuszach TechDraw](/TechDraw_Workbench/pl "TechDraw Workbench/pl"), nadal można tworzyć [w ten sam sposób jak wcześniej](/BIM_Workbench/pl "BIM Workbench/pl"): Dodając [płaszczyzny przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl"), tworząc [widoki 2D](/BIM_Shape2DView/pl "BIM Shape2DView/pl"), wypełniając je adnotacjami, a następnie [umieszczając je](/BIM_TDView/pl "BIM TDView/pl") na [arkuszach](/BIM_TDPage/pl "BIM TDPage/pl"). Proces jest dokładnie taki sam dla modeli BIM niezwiązanych z IFC, jak i dla modeli z natywnym IFC.

Domyślnie obiekty IFC ładowane są bez swojej geometrii (ich właściwość _Tryb kształtu_ jest ustawiona na 'Coin'). Dzięki temu ładowanie odbywa się szybciej. Jednak algorytmy cięcia, używane do generowania widoków 2D, potrzebują pełnej geometrii, dlatego podczas dodawania obiektów IFC do płaszczyzny przekroju ich tryb kształtu zostanie automatycznie ustawiony na 'Kształt'.

Choć sam finalny arkusz nie może być obecnie zapisany do pliku IFC, widoki 2D, płaszczyzny przekroju oraz ich adnotacje mogą. Po dodaniu (poprzez przeciągnięcie w trybie odblokowanym lub automatycznie w trybie zablokowanym) płaszczyzny przekroju do projektu, automatycznie tworzona jest grupa pod projektem. Ta grupa reprezentuje widok 2D (jej właściwość _Typ obiektu_ jest ustawiona na 'RYSUNEK'), a wszystko, co dodasz do tej grupy, stanie się częścią tego widoku 2D.

![Zrzut ekranu widoku 2D utworzonego z projektu IFC](/images/Nativeifc-tutorial-12.jpg)

### Tworzenie arkuszy

W tej chwili arkusze nie są zapisywane w pliku IFC. W przypadku plików zablokowanych, arkusze będą musiały być ponownie utworzone.

### Tworzenie obmiarów

Obmiary i wszelkiego rodzaju zapytania można tworzyć w ten sam sposób dla projektów z natywnym IFC, jak i niezależnych od natywnego IFC, przy użyciu narzędzia [Obmiar](/Arch_Schedule/pl "Arch Schedule/pl"). Obmiary można również dodać do projektu z natywnym IFC. W takim przypadku towarzyszący im arkusz kalkulacyjny nie jest zapisywany w pliku IFC i musi zostać ponownie utworzony po otwarciu pliku.

## Tworzenie skryptów

### IfcOpenShell

[IfcOpenShell](https://ifcopenshell.org/) to komponent oprogramowania wykorzystywany we wszystkich operacjach związanych z IFC w FreeCAD. Środowisko pracy BIM może działać bez niego, ale w takim przypadku wszystkie operacje związane z IFC są wyłączone. IfcOpenShell odpowiada za tworzenie i modyfikowanie plików IFC oraz obiektów IFC, a także za generowanie geometrii BREP dla obiektów FreeCAD, które reprezentują elementy IFC. FreeCAD obecnie korzysta z IfcOpenShell tylko przez jego interfejs Pythona.

IfcOpenShell oferuje [szeroką dokumentację](https://docs.ifcopenshell.org/), która szczegółowo wyjaśnia, jak z niego korzystać.

Możesz także używać zarówno IfcOpenShell, jak i ifc_tools do manipulowania danymi IFC bezpośrednio. Poniżej znajduje się krótki przykład, jak użyć IfcOpenShell do otwarcia pliku IFC i analizy jego zawartości:

```
import ifcopenshell
my_ifc_file = ifcopenshell.open("/path/to/some/file.ifc")
walls = my_ifc_file.by_type("IfcWall") # get a list of all IfcWalls
some_specific_object = my_ifc_file[66] # get an object by its ID
some_specific_object = my_ifc_file.by_id(66) # alternative way
print(some_specific_object.Name) # you can access attributes that way

```

IfcOpenShell sam w sobie (jeszcze) nie posiada funkcjonalności specyficznej dla FreeCAD, więc używa się go głównie do wykonywania operacji niezwiązanych bezpośrednio z FreeCAD, na przykład do pobierania lub modyfikowania obiektów i ich atrybutów, zmiany atrybutów, a nawet bezpośredniego dodawania obiektów. Koniecznie zapoznaj się z [dokumentacją Pythona IfcOpenShell](https://docs.ifcopenshell.org/ifcopenshell-python.html), aby dowiedzieć się więcej.

We FreeCAD, po załadowaniu pliku IFC, tworzony jest obiekt pliku IfcOpenShell, który jest dołączany do projektu (obiekt projektu dla plików odblokowanych lub sam dokument FreeCAD dla projektów zablokowanych). Wszystko, co robisz we FreeCAD, faktycznie manipuluje tym obiektem. Możesz łatwo uzyskać dostęp i manipulować obiektem pliku IfcOpenShell w projekcie FreeCAD z natywnym plikiem IFC. Na przykład, w trybie zablokowanym, robisz to w następujący sposób:

```
import FreeCAD
my_doc = FreeCAD.loadFile("/path/to/some/file.ifc")
my_ifc_file = my_doc.Proxy.ifcfile

```

W trybie odblokowanym, każdy obiekt projektu ma również członka `Proxy.ifcfile`.

### Moduł ifc_tools

Moduł [ifc_tools](https://github.com/FreeCAD/FreeCAD/blob/main/src/Mod/BIM/nativeifc/ifc_tools.py) jest głównym narzędziem do używania IfcOpenShell w module BIM we FreeCAD. Zawiera wiele narzędzi i funkcji, które umożliwiają wykonanie wszelkich operacji związanych z plikami i obiektami IFC, takich jak tworzenie nowych plików, otwieranie plików, tworzenie elementów, modyfikowanie atrybutów itd.

Przy pracy z obiektami FreeCAD, korzystanie z ifc_tools jest znacznie wygodniejsze, ponieważ obsługuje ono wszystkie relacje między obiektem FreeCAD a obiektem IFC, który on reprezentuje. Na przykład:

```
from nativeifc import ifc_tools
selection = FreeCADGui.Selection.getSelection()
my_obj = selection[0] # just get the first selected object
project = ifc_tools.get_project(my_obj)
ifcfile = ifc_tools.get_ifcfile(project)
ifc_elem = ifc_tools.get_ifc_element(my_obj)
my_obj.LongName = "Changed long name" # this updates the IFC data too
print(ifc_elem.LongName)

```

W module ifc_tools znajduje się znacznie więcej funkcji, takich jak narzędzia do tworzenia i modyfikowania obiektów FreeCAD (i odpowiadających im elementów IFC). Oto kilka prostych przykładów, które pomogą Ci zacząć:

#### Wczytaj kształt wybranych obiektów

Domyślnie, otwierając plik IFC, załadowana zostaje tylko lekka reprezentacja 3D każdego elementu. Aby wykonać bardziej zaawansowaną pracę z tymi elementami, może być konieczne załadowanie ich pełnego kształtu:

```
for obj in FreeCADGui.Selection.getSelection():
    obj.ShapeMode = "Shape"
FreeCAD.ActiveDocument.recompute()

```

#### Wczytaj zestawy właściwości wybranych obiektów

Zestawy właściwości i zawarte w nich właściwości są wyświetlane jako właściwości obiektów we FreeCAD. Po załadowaniu, możesz łatwo manipulować wartościami za pomocą edytora właściwości we FreeCAD (lub za pomocą Pythona):

```
from nativeifc import ifc_psets
for obj in FreeCADGui.Selection.getSelection():
    ifc_psets.show_psets(obj)
my_object.FireResistanceClass = "1B" # manipulate properties once loaded

```

#### Zapisywanie pliku IFC

```
ifc_tools.save(project)

```

#### Dodaj nowy dokument IFC

Użyj narzędzia **Project** ze [środowiska pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"), aby utworzyć obiekt projektu IFC. Nie jest konieczne natychmiastowe zapisanie nowego projektu IFC, ale jest to dobra praktyka. Jeśli zapomnisz to zrobić, otrzymasz powiadomienie i będziesz mógł zapisać projekt przy zapisywaniu dokumentu FreeCAD.

```
doc = FreeCAD.ActiveDocument
new_project = ifc_tools.create_document(doc)
ifc_tools.save(new_project, "/path/for/our/new/file.ifc")

```

#### Modyfikacja klasy IFC obiektu

Zmiana klasy jest bardzo prosta, wystarczy wybrać inną w właściwości **class** obiektu. Uwaga, może to również zmienić domyślne atrybuty tego obiektu, więc niektóre atrybuty mogą zniknąć.

```
my_object.Class = "IfcWall"

```

#### Agregacja (i konwersja) dowolnego obiektu FreeCAD na projekt IFC

Zakładając, że zbudowaliśmy nową ścianę i musimy dodać ją do projektu IFC, możemy to zrobić graficznie, przeciągając go i upuszczając na projekt w widoku drzewa, ale równie łatwo można to zrobić w Pythonie:

```
import Arch
my_new_wall = Arch.makeWall(None, 200, 20, 300)
ifc_tools.aggregate(my_new_wall, project)

```

#### Dodaj nową strukturę modelu

Tworząc nowy projekt, możesz również automatycznie stworzyć podstawową strukturę, odpowiadając 'tak' w oknie dialogowym, które się pojawi. Możesz także łatwo zrobić to w Pythonie:

```
import Arch
doc = FreeCAD.ActiveDocument
project = ifc_tools.create_document(doc)
site = Arch.makeSite()
site = ifc_tools.aggregate(site, project)
building = Arch.makeBuilding()
building = ifc_tools.aggregate(building, site)
level = Arch.makeFloor()
level = ifc_tools.aggregate(floor, building)

```

#### Zmień schemat dokumentu IFC

Po prostu zmień właściwość 'Schemat' projektu. Uwaga, może to mieć głębokie konsekwencje (niektóre typy obiektów mogą się zmienić w nowej wersji schematu), więc używaj tego ostrożnie i sprawdź swoje dane po zmianie.

```
project.Schema = "IFC4"

```

Jest znacznie więcej do odkrycia, ponieważ dostępne są dodatkowe funkcje przez różne [podmoduły IFC](https://github.com/FreeCAD/FreeCAD/tree/main/src/Mod/BIM/nativeifc), z których każdy oferuje narzędzia do obsługi konkretnego aspektu IFC (zbiory właściwości, geometria, warstwy…). Koniecznie zapoznaj się z nimi, jeśli będzie to potrzebne!

Mam nadzieję, że teraz wiesz od czego zacząć i co można zrobić z natywnym IFC we FreeCAD. Koniecznie zajrzyj do [sekcji BIM na forum FreeCAD](https://forum.freecad.org/viewforum.php?f=23), jeśli potrzebujesz pomocy!

Retrieved from "<http://wiki.freecad.org/index.php?title=Native_IFC_Tutorial/pl&oldid=1546080>"
