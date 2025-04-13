---
title: Ustawienia Importu i Eksportu
---
## Wprowadzenie

FreeCAD może importować i eksportować wiele formatów plików. Dla niektórych formatów istnieją dedykowane ustawienia. Można je znaleźć w [Edytorze ustawień](/Preferences_Editor/pl "Preferences Editor/pl"). W menu wybierz **Edycja → Preferencje ...** a następnie **Import-Export**.

Nie wszystkie strony preferencji importu i eksportu są domyślnie dostępne. W przypadku niektórych z nich należy najpierw wczytać Środowisko pracy.

Ta strona została zaktualizowana do wersji 1.0.

## Uwagi

### Strona TechDraw

Wymienione tutaj opcje DXF i SVG nie są używane przez polecenia ![](/images/TechDraw_ExportPageSVG.svg) [Eksport strony do SVG](/TechDraw_ExportPageSVG/pl "TechDraw ExportPageSVG/pl") i ![](/images/TechDraw_ExportPageDXF.svg) [Eksport strony do DXF](/TechDraw_ExportPageDXF/pl "TechDraw ExportPageDXF/pl") w środowisku ![](/images/Workbench_TechDraw.svg) [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") ani przez opcję eksportu [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl"): **Plik → Eksport → Technical Drawing *(\*.svg \*.dxf \*.pdf)***.

### Pliki IFC

Niektóre specyficzne dla NativeIFC preferencje importu i eksportu IFC można znaleźć w ustawieniach środowiska pracy [BIM](/BIM_Preferences/pl "BIM Preferences/pl").

### Pliki OpenSCAD

Preferencje importu i eksportu plików OpenSCAD można znaleźć na stronie [OpenSCAD: Ustawienia](/OpenSCAD_Preferences/pl "OpenSCAD Preferences/pl").

## Powiązane

Dodatkowe informacje znajdują się na kolejnych stronach:

* [Import elsport](/Import_Export/pl "Import Export/pl"): Tabela zawierająca listę wszystkich obsługiwanych formatów plików.
* [FreeCAD\_Howto\_Import\_Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export"): Zestawienie wszystkich obsługiwanych formatów plików: Lista poradników, które mogą pomóc użytkownikom w konwersji danych z jednego formatu do drugiego.

## Dostępne preferencje

### DAE

![](/images/Preferences_Import-Export_Page_DAE.png)

Format [Collada](http://en.wikipedia.org/wiki/COLLADA) DAE *(Digital Asset Exchange)* jest standardowym formatem plików do wymiany danych Mesh. FreeCAD może importować siatki z plików .dae i eksportować obiekty oparte na [kształcie](/Part_Workbench/pl "Part Workbench/pl") do formatu .dae.

Uwaga dla użytkowników Linuksa: Do obsługi tego formatu pliku, FreeCAD wymaga modułu [pyCollada](/Extra_python_modules/pl#pyCollada "Extra python modules/pl").

Na tej stronie można określić następujące parametry:

| Nazwa | opis |
| --- | --- |
| **Współczynnik skalowania** | Wszystkie wymiary w pliku będą przeskalowane z podanym współczynnikiem. |
| **Mesher** | Ustawia program tworzenia siatki, który powinien być używany. Jeśli używasz *Netgen*, upewnij się, że jest dostępny. Można to sprawdzić za pomocą środowiska pracy  [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") i narzędzia [tworzenie siatki](/Mesh_FromPartShape/pl "Mesh FromPartShape/pl") używając Netgen. Jeśli nie jest dostępne, należy zainstalować inną wersję FreeCAD, skompilowaną z Netgen. |
| **Tessellatcja** | Wartość teselacji, którą należy stosować z programami tworzenia siatki „Builtin” i „Mefisto”. |
| **Grading** | Wartość stopniowania używana do tworzenia siatki przy użyciu „Netgen”. Ta wartość opisuje, jak szybko zmniejsza się rozmiar siatki. Gradient lokalnego rozmiaru oczek  `h (x)` jest ograniczony przez  `abs (Δh (x)) ≤ 1 / wartość`. |
| **Segmenty na krawędź** | Maksymalna liczba segmentów dla krawędzi. |
| **Segmenty na promień** | Liczba segmentów na promień. |
| **Second order** | Zezwalaj na siatkę drugiego rzędu. |
| **Optymalizuj** | Zezwalaj na optymalizację. |
| **Zezwalaj na kwadraty** | Zezwalaj na [czworoboczne ściany](https://en.wikipedia.org/wiki/Types_of_mesh#Two-dimensional). |

### DWG

![](/images/Preferences_Import-Export_Page_DWG.png)

DWG *(pochodzący od rysunku)* jest zastrzeżonym, zamkniętym źródłowym, binarnym formatem pliku używanym do przechowywania dwu- i trójwymiarowych danych projektowych i metadanych. FreeCAD wymaga [zewnętrznego konwertera plików](/FreeCAD_and_DWG_Import "FreeCAD and DWG Import") do przetwarzania plików DWG.

Uwaga: Wszystkie ustawienia formatu pliku DXF dotyczą również formatu DWG.

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Metoda konwersji** | Wybierz konwerter DWG, którego chcesz użyć:  * **Automatyczny**: Będzie próbował znaleźć konwerter automatycznie, kierując się kolejnością pozostałych elementów tej listy. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"): Dla LibreDWG przeszukiwana jest ścieżka wyszukiwania OS (`os.getenv("PATH")`), dla pozostałych konwerterów przyjmowane są domyślne ścieżki instalacji. * **LibreDWG**: [LibreDWG](https://www.gnu.org/software/libredwg/) jest otwartoźródłową biblioteką do odczytu i zapisu DWG. Brakuje jej wsparcia dla kilku elementów DWG, i nie zawsze może dawać wierne wyniki. * **ODA Converter**: [ODA File Converter](https://www.opendesign.com/guestfiles/oda_file_converter) jest darmowym narzędziem dostarczanym przez Open Design Alliance. Daje on bardzo dobre i wiarygodne wyniki. * **QCAD pro**: [QCAD pro](https://qcad.org/en/qcad-command-line-tools#dwg2dwg) to płatna wersja open-source'owej platformy CAD 2D QCAD opartej na DXF. Jego konwerter DWG używa bibliotek Teigha z OpenDesign Alliance i dlatego daje tak samo dobre wyniki jak ODA File Converter. |
| **Ścieżka do konwertera plików** | Jeśli FreeCAD nie może znaleźć konwertera, należy podać tutaj ścieżkę:  * LibreDWG: dwg2dxf lub dxf2dwg w systemach Linux i macOS, dwg2dxf.exe lub dxf2dwg.exe w systemie Windows. Każda nazwa pliku może być określona zarówno dla konwersji z DWG, jak i do DWG. * ODA Converter: ODAFileConverter w systemach Linux i macOS, ODAFileConverter.exe w systemie Windows. * QCAD pro: dwg2dwg (skrypt bash) w systemach Linux i macOS, dwg2dwg.bat w systemie Windows.   [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): Ścieżka musi zawierać poprawną nazwę pliku. |

### DXF

![](/images/Preferences_Import-Export_Page_DXF.png)

AutoCAD [DXF](/DXF "DXF") *(Drawing eXchange Format)* jest zastrzeżonym formatem wymiany danych CAD pomiędzy AutoCAD a innymi programami.

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Pokaż to okno dialogowe podczas importu i eksportu** | Jeśli opcja jest zaznaczona, to okno dialogowe preferencji zostanie wyświetlone podczas importowania lub eksportowania plików DXF. |
| **Użyj starszego importera Pythona** | Jeśli opcja jest zaznaczona, używany jest importer Python, w przeciwnym razie nowszy C++. Importer C++ jest szybszy, ale nie posiada jeszcze tak wielu funkcji. Importer Pythona używa opcji **Edycja → Preferencje... → Draft → Ustawienia ogólne → Wewnętrzny poziom dokładności**. Aby uzyskać dokładny wynik importu, ustaw tę wartość na 8 lub wyższą. |
| **Użyj starszego eksportera Python** | Jeśli opcja ta jest zaznaczona, stosowany jest Eksporter Python, w przeciwnym razie nowszy C++. Eksporter C++ jest szybszy, ale nie ma jeszcze tak wielu funkcjonalności. |
| **Pozwól programowi FreeCAD na automatyczne pobieranie i aktualizację bibliotek DXF** | Poprzez zaznaczenie tego, pozwolisz FreeCAD pobrać [Python Converter](/FreeCAD_and_DXF_Import "FreeCAD and DXF Import") do importu i eksportu DXF. Ten konwerter nie może być dołączony do programu FreeCAD, ponieważ posiada on inną licencję. |
| **Import** | Wybierz co będzie importowane. Jeśli opcja **teksty i wymiary** jest zaznaczona, teksty i [mteksty](https://www.autodesk.com/techpubs/autocad/acad2000/dxf/mtext_dxf_06.htm) również zostaną zaimportowane.  Jeśli **punkty** jest zaznaczona, punkty również zostaną zaimportowane.  Jeśli zaznaczono opcję  układy graficzne**, zaimportowane zostaną również obiekty obszaru papieru.**  Jeśli zaznaczono **\*bloki**, zaimportowane zostaną również nienazwane bloki *(których nazwy zaczynają się od \*)*. |
| **Utwórz** Jeśli wybrano **proste kształty części**, to zostaną utworzone tylko standardowe obiekty części. Jest to najszybszy proces.  Jeśli wybrana jest opcja '*Obiekty szkicowe*, to w miarę możliwości tworzone będą parametryczne obiekty szkicowe.  Jeśli wybrana zostanie opcja '*Szkice*, w miarę możliwości będą tworzone szkice. |
| **Współczynnik skalowania do zastosowania przy imporcie plików** | Współczynnik skalowania ma zastosowanie podczas importu plików DXF. Współczynnik to konwersja pomiędzy jednostką Twojego pliku DXF a milimetrami. Przykład: dla plików w milimetrach: 1, w centymetrach: 10, w metrach: 1000, w calach: 25,4, w stopach: 304.8. |
| **Użyj kolorów z pliku DXF** | Jeśli opcja jest zaznaczona, kolory będą pobierane z obiektów DXF, gdy tylko będzie to możliwe. W przeciwnym razie zostaną zastosowane kolory domyślne. |
| **Łącz geometrie** | Jeśli opcja jest zaznaczona, FreeCAD będzie próbował łączyć przypadkowe obiekty w linie łamane. Zauważ, że może to chwilę potrwać! |
| **Grupuj warstwy w bloki** | Jeśli opcja zostanie zaznaczona, obiekty z tych samych warstw zostaną połączone w bloki robocze, które wyświetlają się szybciej, ale są mniej edytowalne. |
| **Użyj standardowego rozmiaru czcionki dla tekstów** | Jeśli opcja jest zaznaczona, importowane teksty uzyskają standardowy rozmiar [Draft: Tekst](/Draft_Text/pl "Draft Text/pl"), zamiast rozmiaru, który mają w dokumencie DXF. |
| **Użyj warstw** | Jeśli opcja zostanie zaznaczona, warstwy DXF będą importowane jako [Draft: Layers](/Draft_Layer/pl "Draft Layer/pl"). |
| **Importuj obwiednie kreskowania jako polilinie** | Jeśli opcja zostanie zaznaczona, kreskowanie zostanie zamienione na proste linie łamane. |
| **Renderuj polilinie o szerokości** | Jeśli opcja zostanie zaznaczona, i polilinie mają zdefiniowaną szerokość, będą renderowane jako zamknięte linie łamane o odpowiedniej szerokości. |
| **Elipsy i splajny traktuj jako polilinie** | Eksport elips i splajnów jest słabo obsługiwany. Użyj tej opcji, aby wyeksportować je jako polilinie. Ustawienie "*Max Spline Segment'* jest wówczas maksymalną długością każdego z segmentów polilinii. Jeśli jest on ustawiony na **0**, cały splajn jest traktowany jako odcinek prosty. |
| **Eksportuj obiekty 3D jako siatki wielopowierzchniowe** | Jeśli opcja zostanie zaznaczona, wszystkie obiekty zawierające powierzchnie zostaną wyeksportowane jako polipowierzchnie 3D. |
| **Eksportuj widoki Rysunku Technicznego jako bloki** | Jeśli ta opcja jest zaznaczona, widoki Rysunku Technicznego będą eksportowane jako bloki. Może się to nie udać w przypadku szablonów post DXF R12. |
| **Rzutuj wyeksportowane obiekty wzdłuż bieżącego kierunku widoku** | Jeśli opcja zostanie zaznaczona, eksportowane obiekty będą rzutowane tak, aby odzwierciedlały aktualny kierunek widoku. Ta opcja działa tylko wtedy, gdy używany jest starszy eksporter Python. |

### IFC

[Industry Foundation Classes](http://en.wikipedia.org/wiki/Industry_Foundation_Classes) *(IFC)* to szeroko rozpowszechniony format wymiany danych pomiędzy aplikacjami [BIM](http://en.wikipedia.org/wiki/Building_Information_Modeling). Jest on używany w architekturze i inżynierii.

Uwaga dla użytkowników Linuksa: Do obsługi tego formatu pliku, FreeCAD wymaga modułu [IfcOpenShell](/Extra_python_modules/pl#IfcOpenShell "Extra python modules/pl").

#### Import IFC

![](/images/Preferences_Import-Export_Page_IFC_import.png)

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Pokaż okno dialogowe podczas importowania** | Jeśli opcja jest zaznaczona,to okno dialogowe preferencji zostanie wyświetlone podczas importowania lub eksportowania plików IFC. |
| **Pokaż komunikaty debugowania** | Wyświetla szczegółowe komunikaty debugowania podczas importowania i eksportowania plików IFC w oknie [Widoku raportu](/Report_view/pl "Report view/pl"). |
| **Twórz klony, gdy obiekty mają wspólną geometrię** | Obiekty IFC mogą mieć tę samą definicję geometrii pomiędzy kilkoma obiektami, tylko ich rozmieszczenie jest różne. Tak więc gdy ta opcja jest włączona, klony są używane do osiągnięcia tego samego wyniku w FreeCAD. Jeden obiekt jest obiektem bazowym, pozostałe są klonami. |
| **Liczba rdzeni do użycia (opcja eksperymentalna)** | Określa liczbę rdzeni CPU, które mają być użyte podczas importu IFC. Maksymalna liczba powinna być mniejsza niż liczba faktycznie dostępnych rdzeni. Użyj **0'** aby wyłączyć tę funkcję. |
| **Importuj obiekty architektoniczne IFC jako** | Definiuje elementy, które zostaną utworzone w programie FreeCAD dla obiektów architektury IFC. |
| **Importuj obiekty konstrukcyjne IFC jako** | Definiuje elementy, które zostaną utworzone w programie FreeCAD dla obiektów konstrukcyjnych IFC. |
| **Element główny** | Zaimportowane zostaną tylko podtypy określonego elementu. Zachowaj predefiniowany element *[IfcProduct](http://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifckernel/lexical/ifcproduct.htm)* aby zaimportować wszystkie elementy budowlane. |
| **Otwory oddzielnie** | Jeśli ta opcja jest zaznaczona, otwory będą importowane jako odjęcia, w przeciwnym razie otwory będą już odjęte od kształtów ścian. |
| **Wykryj wyciągnięcia** | Jeśli opcja zostanie zaznaczona, importer będzie próbował wykryć obecność wytłoczek. Należy pamiętać, że może to spowolnić proces. |
| **Podziel ściany wielowarstwowe** | Rozdziela ściany wykonane z wielu warstw. |
| **Przedrostek nazwy z numerem ID** | Jeśli opcja jest zaznaczona, nazwy obiektów będą uzupełnione o numer [IFC ID](http://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcutilityresource/lexical/ifcgloballyuniqueid.htm). |
| **Połącz materiały o tej samej nazwie i tym samym kolorze** | Jeśli w pliku IFC znajduje się kilka materiałów o tej samej nazwie, będą one traktowane jako jeden. |
| **Importuj właściwości IFC do arkusza kalkulacyjnego** | Jeśli opcja zostanie zaznaczona, każdy obiekt będzie miał swoje [właściwości IFC](http://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcpropertyresource/lexical/ifcproperty.htm) przechowywane w obiekcie arkusza kalkulacyjnego. |
| **Zezwalaj na nieprawidłowe kształty** | Jeśli opcja nie jest zaznaczona, nieprawidłowe kształty nie są importowane. |
| **Lista wykluczeń** | Lista oddzielonych przecinkami [podmiotów IFC](https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/toc-5.htm) które mają być wykluczone z importu. |
| **Dopasuj widok podczas importowania** | Dopasuj widok podczas importu na importowane obiekty. Spowoduje to spowolnienie importu, ale można oglądać jego przebieg. |
| **Importuj pełne definicje parametryczne FreeCAD, jeśli są dostępne** | Tworzy pełny model parametryczny na imporcie przy użyciu zapisanych właściwości obiektu FreeCAD. Aby uzyskać parametry FreeCAD, model musi zostać wyeksportowany przy użyciu opcji **Eksportuj pełny model parametryczny FreeCAD**. |
| **Zastępowanie obiektów "Projekt", "Teren", "Budynek" i "Kondygnacja" obiektem "Grupa".** | Jeśli opcja zostanie zaznaczona, grupy zostaną użyte do zastąpienia wymienionych obiektów. |

#### Eksport IFC

![](/images/Preferences_Import-Export_Page_IFC_export.png)

Na tej stronie można określić następujące parametry:

**Dodaj domyślną kondygnację budynku, jeśli nie ma jej w dokumencie**

| Nazwa | Opis |
| --- | --- |
| **Pokaż to okno dialogowe podczas eksportu** | Jeżeli opcja jest zaznaczona, to podczas eksportu plików IFC to okno dialogowe preferencji będzie wyświetlane. |
| **Typ eksportu** | Należy określić, w jaki sposób model powinien być eksportowany: jako **Model standardowy**, **Analiza strukturalna** lub **Standardowy + konstrukcyjny**. |
| **Wymuś eksport do Brep** | Niektóre przeglądarki IFC nie lubią obiektów eksportowanych jako wytłaczane. Użyj tej opcji, aby wyeksportować wszystkie obiekty jako geometria [BREP](https://en.wikipedia.org/wiki/Boundary_representation). Należy jednak zauważyć, że czyni to obiekt nieparametrycznym. Unikaj eksportu jako Brep, jeśli to możliwe. |
| **Używaj opcji triangulacji DAE** | Użyj opcji triangulacji ustawionych na stronie Opcje DAE. |
| **Połącz wielokąty współpłaszczyznowe podczas triangulacji** | Kształty zakrzywione, które nie mogą być przedstawione jako krzywe w IFC, są rozkładane na płaskie ścianki. Jeżeli jest to zaznaczone, wykonywane są dodatkowe obliczenia w celu połączenia ścianek współpłaszczyznowych. |
| **Przechowuj unikalny identyfikator IFC w obiektach FreeCAD** | Przy eksporcie obiektów bez [unikalnego ID](http://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcutilityresource/lexical/ifcgloballyuniqueid.htm) *(UID)*, wygenerowany UID zostanie zapisany wewnątrz obiektu FreeCAD do ponownego użycia przy następnym wyeksportowaniu tego obiektu. Prowadzi to do mniejszych różnic pomiędzy wersjami plików. |
| **Używaj serializatora IfcOtwartSystem, jeśli jest dostępny** | [IFCOpenShell](/Extra_python_modules#IfcOpenShell "Extra python modules") to biblioteka, która pozwala na import plików IFC. Jest biblioteką dla plików IFC. Jej funkcjonalność *serializera* może produkować poprawną geometrię IFC z kształtów [OCC](/Glossary#OCC "Glossary"). Należy pamiętać, że jest to wciąż funkcja eksperymentalna. |
| **Eksportuj obiekty 2D jako IfcAnnotations** | Jeśli opcja zostanie zaznaczona, obiekty 2D będą eksportowane jako [IfcAnnotation](https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcproductextension/lexical/ifcannotation.htm). |
| **Eksportuj pełny model parametryczny FreeCAD** | Jeśli opcja jest zaznaczona, wszystkie właściwości obiektu FreeCAD będą przechowywane wewnątrz eksportowanych obiektów, co pozwoli na odtworzenie pełnego modelu parametrycznego przy ponownym imporcie za pomocą opcji **Importuj pełne definicje parametryczne FreeCAD, jeśli są dostępne**. |
| **Ponownie wykorzystuj podobne elementy** | Jeśli opcja zostanie zaznaczona, podobne obiekty zostaną użyte tylko raz w pliku, jeśli to możliwe. Może to znacznie zmniejszyć rozmiar pliku, ale sprawi, że będzie on mniej czytelny. |
| **Wyłącz IfcRectangleProfileDef** | Jeśli to możliwe, obiekty IFC, które są wyciągniętymi prostokątami, będą eksportowane jako [IfcRectangleProfileDef](http://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcprofileresource/lexical/ifcrectangleprofiledef.htm). Jednakże niektóre inne aplikacje mogą mieć problemy z importem tej wielkości. Jeśli tak jest w Twoim przypadku, możesz to wyłączyć, a następnie wszystkie profile zostaną wyeksportowane jako [IfcArbitraryClosedProfileDef](http://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcprofileresource/lexical/ifcarbitraryclosedprofiledef.htm). |
| **Automatyczne wykrywanie i eksport jako standardowe przypadki, gdy ma to zastosowanie** | Niektóre typy IFC, takie jak [IfcWall](https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcsharedbldgelements/lexical/ifcwall.htm) or [IfcBeam](https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcsharedbldgelements/lexical/ifcbeam.htm) mają specjalne standardowe wersje, jak na przykład: [IfcWallStandardCase](https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcsharedbldgelements/lexical/ifcwallstandardcase.htm) or [IfcBeamStandardCase](https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcsharedbldgelements/lexical/ifcbeamstandardcase.htm). Jeśli ta opcja jest włączona, FreeCAD automatycznie wyeksportuje takie obiekty jako przypadki standardowe, gdy spełnione zostaną niezbędne warunki. |
| **Dodaj domyślną kondygnację budynku, jeśli nie ma jej w dokumencie** | Podczas eksportowania pliku IFC, jeśli w dokumencie FreeCAD nie zostanie znaleziony żaden obiekt, zostanie dodany obiekt domyślny. Miejsce nie jest obowiązkowe zgodnie ze standardem IFC, ale powszechną praktyką jest posiadanie co najmniej jednego w pliku. |
| Podczas eksportowania pliku IFC, jeśli w dokumencie FreeCAD nie znaleziono kondygnacji budynku, dodawana jest kondygnacja domyślna. Kondygnacja budynku nie jest obowiązkowa zgodnie ze standardem IFC, ale powszechną praktyką jest posiadanie co najmniej jednej kondygnacji w pliku. |
| **Jednostki w pliku IFC** | Wybierz jednostki, które będą używane podczas eksportowania plików IFC. |
| **Dodaj domyślny budynek, jeśli nie znaleziono go w dokumencie** | Podczas eksportu pliku IFC, jeśli w dokumencie FreeCAD nie ma budynku, to zostanie dodany domyślny. **Ostrzeżenie**: Standard IFC wymaga, aby w każdym pliku był co najmniej jeden budynek. Wyłączenie tej opcji spowoduje, że powstanie niestandardowy plik IFC.  Jednak w FreeCAD uważamy, że posiadanie budynku nie powinno być obowiązkowe, a ta opcja ma szansę na przedstawienie naszego punktu widzenia. |
| **Eksportuj zagnieżdżone grupy jako złożenia** | W programie FreeCAD możliwe jest zagnieżdżanie grup wewnątrz budynków lub kondygnacji. Jeśli ta opcja jest wyłączona, grupy FreeCAD zostaną zapisane jako IfcGroups i zagregowane do konstrukcji budynku. Agregacja elementów niebudynkowych, takich jak grupy IfcGroup, nie jest jednak zalecana przez standardy IFC. Dlatego możliwe jest również wyeksportowanie tych grup jako IfcElementAssemblies, co tworzy plik zgodny z IFC. Jednak w FreeCAD uważamy, że zagnieżdżanie grup wewnątrz konstrukcji powinno być możliwe, a ta opcja ma na celu zademonstrowanie naszego punktu widzenia. |

### IGES

![](/images/Preferences_Import-Export_Page_IGES.png)

Format pliku [Initial Graphics Exchange Specification](https://en.wikipedia.org/wiki/IGES) *(IGES)* jest formatem umożliwiającym cyfrową wymianę informacji pomiędzy systemami CAD. Po opublikowaniu formatu pliku [STEP](/Preferences_Editor/pl#STEP "Preferences Editor/pl"), rozwój IGES został wstrzymany w 1996 roku, ale nadal jest on obsługiwany przez wiele programów CAD. Pliki IGES mają rozszerzenie .iges lub .igs.

Ta strona jest wyświetlana tylko wtedy, gdy masz uruchomione jedno ze środowisk pracy ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl"), ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") lub ![](/images/Workbench_OpenSCAD.svg) [OpenSCAD](/OpenSCAD_Workbench/pl "OpenSCAD Workbench/pl") lub jeśli został załadowany w bieżącej sesji FreeCAD.

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Jednostki przeznaczone do eksportu IGES** | Wybierz jakie jednostki będą używane podczas eksportowania plików IGES. |
| **Zapisuj bryły i korpusy jako** | Wybierz, w jaki sposób mają być generowane bryły i powłoki. Jeśli wybrano opcję **Grupy powierzchni przyciętych (typ 144)**, będą one eksportowane jako [powierzchnie przycięte](https://wiki.eclipse.org/IGES_file_Specification#Trimmed_Surface_.28Type_144.29).  Jeżeli wybrano opcję **Bryły (typ 186) i Powłoki (typ 514) / tryb B-REP**, to bryły zostaną wyeksportowane jako [bryły manifold obiekt B-Rep](https://wiki.eclipse.org/IGES_file_Specification#Manifold_Solid_B-Rep_Object_.28Type_186.29), powłoki jako [korpusy](https://wiki.eclipse.org/IGES_file_Specification#Shell_.28Type_514.29). |
| **Pomijanie pustych pozycji.** | Jeśli opcja została zaznaczona, puste [pozycje](https://wiki.eclipse.org/IGES_file_Specification#Entities) nie będa importowane. |
| **Firma** | Jeśli pole nie jest puste, wprowadzony tekst zostanie użyty w nagłówku pliku IGES dla określenia nazwy firmy. |
| **Autor** | Jeśli pole nie jest puste, wprowadzony tekst zostanie użyty w nagłówku pliku IGES dla określenia nazwy autora. |
| **Produkt** | Jeśli pole nie jest puste, wprowadzony tekst zostanie użyty w nagłówku pliku IGES dla określenia nazwy produktu. |

### INP

![](/images/Preferences_Import-Export_Page_INP.png)

INP jest formatem pliku wejściowego dla oprogramowania MES [Abaqus](https://en.wikipedia.org/wiki/Abaqus). Jest on używany dla [CalculiX](/FEM_CalculiX/pl "FEM CalculiX/pl") solvera w środowisku pracy ![](/images/Workbench_FEM.svg) [MES](/FEM_Workbench/pl "FEM Workbench/pl").

Ta strona jest wyświetlana w preferencjach tylko wtedy, gdy używasz Środowiska pracy ![](/images/Workbench_FEM.svg) [MES](/FEM_Workbench/pl "FEM Workbench/pl") lub gdy został załadowany w bieżącej sesji FreeCAD.

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Elementy siatki, które mają być eksportowane** | Wybierz, które elementy siatki mają być eksportowane. Jeśli wybrano **Wszystkie**, wszystkie elementy zostaną wyeksportowane.  Jeśli wybrana zostanie opcja '*Najwyższy*, eksportowane będą tylko najwyższe elementy. Oznacza to wielkości dla siatki objętościowej i ścian dla siatki powłoki.  Jeśli wybrana zostanie opcja **FEM**, eksportowane będą tylko elementy FEM. Oznacza to tylko krawędzie nie należące do powierzchni i powierzchnie nie należące do objętości. |
| **Eksportuj dane grupy** | Jeśli opcja jest zaznaczona, grupy siatek są również eksportowane. Każde wiązanie oraz, jeśli istnieją różne materiały, materiał składa się z dwóch grup siatki, ścianek i ich węzłów, w których stosowane jest to wiązanie lub materiał. |

### Formaty Siatki

![](/images/Preferences_Import-Export_Page_Mesh_Formats.png)

Siatki są szczególnym rodzajem obiektu 3D, składającego się z trójkątnych powierzchni połączonych swoimi [wierzchołkami](/Glossary/pl#Wierzchołek "Glossary/pl") i krawędziami. Są one szeroko stosowane do [produkcji przyrostowej](https://en.wikipedia.org/wiki/3D_printing). FreeCAD dostarcza ![](/images/Workbench_Mesh.svg) Środowisko pracy [Mesh](/Mesh_Workbench "Mesh Workbench") do tworzenia i obsługi siatek. FreeCAD obsługuje kilka formatów plików mesh.

Ta strona jest jest wyświetlana w preferencjach tylko wtedy, gdy używasz Środowiska pracy ![](/images/Workbench_Mesh.svg) [Mesh](/Mesh_Workbench "Mesh Workbench") lub gdy został załadowany w bieżącej sesji FreeCAD.

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Maksymalne odchylenie siatki** | Określenie maksymalnego odchylenia siatki od obiektu. |
| **Eksport plików AMF z zastosowaniem kompresji** | Jeśli opcja jest zaznaczona, podczas zapisu pliku mesh w formacie AMF stosowana jest kompresja ZIP. |
| **Eksportuj 3MF jako typ modelu** | Jeśli opcja jest zaznaczona, siatki są zawsze eksportowane jako typ modelu w formacie 3MF, nawet jeśli nie są bryłą. |
| **Szerokość** | Szerokość asymptoty strony. |
| **Wysokość** | Wysokość asymptoty strony. |

### OCA

![](/images/Preferences_Import-Export_Page_OCA.png)

Format pliku [OCA](https://groups.google.com/g/open_cad_format) jest projektem społeczności, mającym na celu stworzenie wolnego, prostego i otwartego formatu pliku CAD.
OCA jest w dużej mierze oparty na formacie pliku GCAD generowanym przez program [gCAD3D](http://www.gcad3d.org/). Oba formaty mogą być importowane we FreeCAD, a eksportowane przez FreeCAD pliki OCA mogą być otwierane w gCAD3D.

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Import obszarów OCA** | Jeśli opcja zostanie zaznaczona, obszary *(powierzchnie 3D)* również zostaną zaimportowane. |

### STEP

![](/images/Preferences_Import-Export_Page_STEP.png)

Format pliku [Standard for The Exchange of Product model data](https://en.wikipedia.org/wiki/ISO_10303) *(STEP)* to standard ISO dotyczący interpretacji komputerowej i wymiany informacji o wytwarzaniu produktu. STEP jest powszechnie używany do wymiany danych 3D między oprogramowaniem CAD. Pliki STEP mają rozszerzenie .step lub .stp. W przypadku plików skompresowanych używane jest rozszerzenie .stpz.

Ta strona jest wyświetlana tylko wtedy, uruchomiono jedno ze Środowisk pracy ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl"), ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") lub ![](/images/Workbench_OpenSCAD.svg) [OpenSCAD](/OpenSCAD_Workbench/pl "OpenSCAD Workbench/pl") lub jeśli zostały załadowane w bieżącej sesji FreeCAD.

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Zapisz krzywe w przestrzeni parametrycznej powierzchni** | Jeżeli opcja jest zaznaczona, to do pliku STEP zostaną zapisane krzywe parametryczne *(krzywe w przestrzeni parametrycznej powierzchni)*. Odznaczenie tej opcji może być pomocne w zminimalizowaniu rozmiaru wynikowego pliku STEP. |
| **Eksport niewidocznych obiektów** | Usuń zaznaczenie, aby pomijać obiekty niewidoczne podczas eksportu, co jest przydatne w programach CAD, które nie obsługują stylu niewidzialności STEP. |
| **Eksport pojedynczych obiektów** | Zaznacz tę opcję, aby zachować informacje o położeniu podczas eksportu pojedynczego obiektu. Zauważ, że podczas ponownego importu pliku STEP, położenie zostanie zakodowane w geometrii kształtu, zamiast utrzymania go wewnątrz właściwości Umieszczenie. |
| **Użyj starszej funkcji eksportu** | Skorzystaj ze starszego eksportera. |
| **Jednostki przeznaczone do eksportu w formacie STEP** | Wybierz jednostki, które będą używane podczas eksportu plików STEP. |
| **Schemat** | Wybierz, jaki protokół aplikacji *(AP)* STEP będzie używany do eksportu. **AP 203** jest protokołem do projektowania 3D części i zespołów mechanicznych z kontrolą konfiguracji.  **AP 214** jest protokołem dla podstawowych danych dla procesów projektowania mechaniki samochodowej. |
| **Włączyć łączenie zespołów STEP** | Jeśli opcja jest zaznaczona, podczas odczytu pliku zostanie wykonane połączenie [związków](/Glossary/pl#Związek "Glossary/pl"). Proces ten jest wolniejszy, ale skutkuje zwiększeniem szczegółów. |
| **Używaj LinkGroup** | Wybierz ta opcję aby uźyć kontenerów grupy App::LinkGroup zamiast App::Part. |
| **Importowanie niewidocznych obiektów** | Wybierz tą opcję, aby zaimportować niewidoczne obiekty. |
| **Ograniczyć liczbę obiektów** | Zmniejszenie liczby obiektów za pomocą tablic powiązań. |
| **Rozwiń kształt związku** | Rozwiń złożone kształty za pomocą wielu brył. |
| **Pokaż pasek postępu przy imporcie** | Pokaż pasek postępu w trakcie trwania importu. |
| **Ignoruj nazwy poszczególnych instancji** | Nie należy używać nazw instancji. Przydatne dla niektórych starszych plików STEP z nieoznaczonymi nazwami instancji wygenerowanymi automatycznie. |
| **CodePage** | Tutaj można określić kodowanie plików STEP. |
| **Tryb** | Wybierz wymaganą strukturę dokumentu. **Jeden dokument**  **Montaż według dokumentu**  **Każde złożenie na odrębny dokument w podkatalogu**  **Obiekt na odrębny dokument**  **Każde obiekt na odrębny dokument w podkatalogu** |
| **Firma** | Jeśli pole nie jest puste, wprowadzony tekst zostanie użyty w nagłówku pliku STEP dla określenia danych firmy. |
| **Autor** | Jeśli pole nie jest puste, wprowadzony tekst zostanie użyty w nagłówku pliku STEP dla określenia nazwy autora. |
| **Produkt** | Jeśli pole nie jest puste, wprowadzony tekst zostanie użyty w nagłówku pliku STEP dla określenia danych produktu. |

### SVG

![](/images/Preferences_Import-Export_Page_SVG.png)

[Skalowalna grafika wektorowa](/SVG/pl "SVG/pl") *(Scalable Vector Graphics - SVG)* to format obrazu wektorowego dla grafiki dwuwymiarowej. Obraz wektorowy może być skalowany do dowolnego rozmiaru bez utraty jego kształtu i szczegółów. Obraz SVG może być konwertowany do formatów bitmapowych takich jak PNG lub JPEG dla potrzeb późniejszego wydruku.

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Tryb importu** | Wybierz, jak będą importowane kolory obiektów SVG i szerokości linii. W przypadku wybrania opcji **Brak *(najszybszy)*** nie zostaną zaimportowane żadne ustawienia koloru lub szerokości linii.  Jeśli wybrana jest opcja **Użyj domyślnego koloru i szerokości linii** FreeCAD użyje własnego *(domyślnego)* koloru i szerokości linii.  Jeśli wybrana jest opcja **Oryginalny kolor i szerokość linii** FreeCAD użyje koloru i szerokości linii pochodzącej z obiektów SVG. |
| **Wyłącz skalowanie jednostek** | Jeśli opcja ta jest zaznaczona, nie będzie miała miejsca żadna konwersja jednostek. Jedna jednostka z pliku SVG zostanie przetłumaczona jako jeden milimetr. |
| **Tryb eksportu** | Wybierz sposób, w jaki szkice są eksportowane do SVG. Jeśli wybrano opcję **Przetłumaczone *(do drukowania i wyświetlania)***, obiekty SVG są umieszczane w grupie, która jest skalowana i przenoszona w odpowiednie miejsce w dokumencie SVG, aby zmieściła się w obszarze drukowania.  Jeżeli wybrana jest opcja **Raw *(dla CAM)***, to obiekty SVG są umieszczane w takim stanie, w jakim są - na tych samych współrzędnych co w modelu FreeCAD *(eksport 1:1)*. |
| **Przełóż kolor białej linii na czarną** | Jeśli opcja będzie zaznaczona, wszystkie białe linie pojawią się w pliku SVG w kolorze czarnym, aby zapewnić lepszą czytelność na białym tle. |
| **Maksymalna długość segmentu dla łuków dyskretnych** | Wersje [Open CASCADE](/Glossary/pl#Open_CASCADE "Glossary/pl") starsze od 6.8 nie obsługują wyświetlania łuku. W tym przypadku łuki zostaną podzielone na małe odcinki linii. Wartość ta jest maksymalną długością segmentu. |

### VTK

![](/images/Preferences_Import-Export_Page_VTK.png)

Oprogramowanie [Visualization Toolkit](https://en.wikipedia.org/wiki/VTK) *(VTK)* jest otwartym, ogólnodostępnym systemem oprogramowania dla grafiki komputerowej 3D, przetwarzania obrazu i wizualizacji. Pliki VTK są wykorzystywane przez Środowisko pracy ![](/images/Workbench_FEM.svg) [MES](/FEM_Workbench/pl "FEM Workbench/pl") dla [przetwarzania końcowego](/FEM_Post_Processing_based_on_VTK "FEM Post Processing based on VTK") wyników symulacji.

Ta strona jest wyświetlana tylko wtedy, gdy środowisko pracy ![](/images/Workbench_FEM.svg) [MES](/FEM_Workbench/pl "FEM Workbench/pl") zostało załadowane w bieżącej sesji FreeCAD.

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Który obiekt ma zostać zaimportowany** | Wybierz, które z obiektów mają być importowane i w jaki sposób. Jeżeli jest wybrana opcja '*Obiekt wynikowy VTK*, to zostanie zaimportowany obiekt wynikowy FreeCAD FEM VTK *(odpowiadający obiektowi, który został wyeksportowany)*.  Jeżeli jest wybrany obiekt FEM mesh, to wyniki w pliku VTK zostaną pominięte, tylko dane mesh zostaną zaimportowane i zostanie utworzony obiekt FreeCAD FEM mesh.  Jeżeli jest wybrany "obiekt wynikowy FreeCAD*, to importowane dane zostaną przekonwertowane na obiekt wynikowy FreeCAD FEM. **Uwaga:** to ustawienie wymaga dokładnych nazw komponentów wynikowych i dlatego działa poprawnie tylko z plikami VTK eksportowanymi z FreeCAD.* |

Retrieved from "<http://wiki.freecad.org/index.php?title=Import_Export_Preferences/pl&oldid=1521340>"