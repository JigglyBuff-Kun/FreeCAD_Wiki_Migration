---
title: Informacje o wydaniu 1.1
---
:::caution
FreeCAD 1.1 jest w trakcie rozwoju, nie ma jeszcze oczekiwanej daty wydania.
:::

Czy brakuje jakichś funkcji? Wspomnij o nich w wątku na forum [Informacje o wydaniu v1.1](https://forum.freecad.org/viewtopic.php?f=10&t=92080).

Więcej informacji na temat sposobów przyczyniania się do rozwoju programu FreeCAD można znaleźć na stronie [Pomóż w rozwoju FreeCAD](/Help_FreeCAD/pl "Help FreeCAD/pl").

Wszystkie obrazy na tej stronie muszą używać przyrostka \_relnotes\_1.1.

**FreeCAD 1.1** zostanie wydany w roku *...*, pobranie będzie możliwe ze strony [Pobieranie programu](/Download/pl "Download/pl"). Ta strona jest podsumowaniem najciekawszych zmian i funkcji.

Starsze uwagi na temat wydania FreeCAD można znaleźć na stronie [Lista funkcji](/Feature_list/pl#Informacje_o_wydaniu "Feature list/pl").

Miejsce na przyciągający wzrok obrazek wybrany przez adminów z [galerii pokazowej użytkowników](https://forum.freecad.org/viewforum.php?f=24).

## Ogólne

## Interfejs użytkownika

|  |  |
| --- | --- |
|  | Dodano trzypunktowe oświetlenie aby usprawnić renderowanie modeli 3D. [Pull request #19397](https://github.com/FreeCAD/FreeCAD/pull/19397) |

### Pozostałe ulepszenia interfejsu użytkownika

* Dodano domyślny skrót dla [Preferencji](/Std_DlgPreferences/pl "Std DlgPreferences/pl"). [Pull request #15536](https://github.com/FreeCAD/FreeCAD/pull/15536)
* Usprawniono stronę preferencji obszaru powiadomień. [Pull request #15207](https://github.com/FreeCAD/FreeCAD/pull/15207)
* Do narzędzia [Pomiary](/Std_Measure/pl "Std Measure/pl") dodano opcje automatycznego zapisu i wskazywania dodającego. [Pull request #17717](https://github.com/FreeCAD/FreeCAD/pull/17717)
* Dodano parametr [dostrajania](/Fine-tuning/pl "Fine-tuning/pl") *ToggleTransparency* aby umożliwić użytkownikom zmianę domyślnego poziomu przezroczystości aktywowanego przez narzędzie [Włącz / wyłącz przezroczystość](/Std_ToggleTransparency/pl "Std ToggleTransparency/pl"). [Pull request #18986](https://github.com/FreeCAD/FreeCAD/pull/18986)
* Dodana została właściwość widoku *Show Plane*, aby wyświetlać płaszczyznę, na której oparty jest obiekt 2D. [Pull request #18910](https://github.com/FreeCAD/FreeCAD/pull/18910)
* Możliwa jest teraz zmiana koloru osi układu współrzędnych przy pomocy nowych preferencji na stronie *Edycja → Preferencje → Wyświetlanie → Widok 3D*. [Pull request #16995](https://github.com/FreeCAD/FreeCAD/pull/16995)
* Dodana została właściwość widoku *Show Placement*, aby wyświetlać umiejscowienie jako układ współrzędnych w punkcie początkowym obiektu 2D. [Pull request #19671](https://github.com/FreeCAD/FreeCAD/pull/19671)
* Dodany został [styl nawigacji](/Mouse_navigation/pl "Mouse navigation/pl") SolidWorks. [Pull request #19568](https://github.com/FreeCAD/FreeCAD/pull/19568)

## Rdzeń i API

### Rdzeń programu

|  |  |
| --- | --- |
|  | [Narzędzia do globalnych geometrii konstrukcyjnych](/Std_Base/pl#Menu_Struktura "Std Base/pl") zostały dodane umożliwiając tworzenie układów współrzędnych, płaszczyzn, osi i punktów pomocniczych, które można również dołączać i wykorzystywać w Złożeniu. [Pull request #18332](https://github.com/FreeCAD/FreeCAD/pull/18332) |

|  |  |
| --- | --- |
| Kliknij na obrazku jeśli animacja nie uruchamia się automatycznie. | Narzędzie [Przemieszczenie](/Std_TransformManip/pl "Std TransformManip/pl") zostało przebudowane i pozwala teraz na precyzyjne sterowanie oprócz przeciągania w widoku 3D. Można wyrównywać interaktywny manipulator z dowolnym elementem w dokumencie i przemieszczać obiekt w lokalnym układzie współrzędnych (U, V, W) manipulatora lub w globalnym układzie współrzędnych. Manipulator można wyrównać z początkiem układu współrzędnych obiektu jak dotychczas, ale też ze środkiem masy obiekty. Dostępna jest nowa opcja do przesuwania obiekty (w położeniu manipulatora) do lokalizacji docelowej w dokumencie i odwracanie orientacji. Zobacz wszystkie [nowe opcje](/Std_TransformManip/pl#Opcje "Std TransformManip/pl"). [Pull request #17564](https://github.com/FreeCAD/FreeCAD/pull/17564) |

### API

#### Usunięte API Pythona

#### Zmienione API Phytona

#### Nowe API Pythona

## Środowisko pracy Start

* Strona startowa może teraz wyświetlać zawartość dodatkowych folderów określonych przez użytkownika. Ich ścieżki powinny być rozdzielone podwójnymi średnikami (`;;`). [Pull request #19473](https://github.com/FreeCAD/FreeCAD/pull/19473), [Pull request #19918](https://github.com/FreeCAD/FreeCAD/pull/19918) i [Pull request #19948](https://github.com/FreeCAD/FreeCAD/pull/19948).
* Sekcja Przykłady na stronie startowej może być ukryta za pomocą ustawienia w preferencjach. [Pull request #19376](https://github.com/FreeCAD/FreeCAD/pull/19376) i [Pull request #19918](https://github.com/FreeCAD/FreeCAD/pull/19918).

## Menadżer dodatków

* Narzędzie do aktualizowania zależności Pythona działa teraz poprawnie gdy FreeCAD jest zainstalowany jako pakiet snap lub AppImage. [Pull request #19384](https://github.com/FreeCAD/FreeCAD/pull/19384), [Pull request #19766](https://github.com/FreeCAD/FreeCAD/pull/19766) i [Pull request #19814](https://github.com/FreeCAD/FreeCAD/pull/19814).
* Ścieżka instalacji modułów Pythona w narzędziu do aktualizowania zależności jest teraz pokazana jako bezwzględna ścieżka dla większej czytelności. Jest też pokazana poprawnie zgodnie z metodą instalacji programu FreeCAD. [Pull request #19828](https://github.com/FreeCAD/FreeCAD/pull/19828) i [Pull request #19816](https://github.com/FreeCAD/FreeCAD/pull/19816).

## Środowisko pracy Złożenie

* Dodane zostało narzędzie [Wstaw nową część](/Assembly_InsertNewPart/pl "Assembly InsertNewPart/pl") umożliwiające łatwe dodawanie nowych części do złożenia. [Pull request #17922](https://github.com/FreeCAD/FreeCAD/pull/17922)
* Dodane zostało narzędzie [Utwórz symulację](/Assembly_CreateSimulation/pl "Assembly CreateSimulation/pl") umożliwiające dodawanie ruchów do połączeń i tworzenie animacji. [Pull request #16414](https://github.com/FreeCAD/FreeCAD/pull/16414)

### Pozostałe ulepszenia środowiska Złożenie

* Nowe globalne geometrie konstrukcyjne można wykorzystywać do dołączania połączeń aby składać części. [Pull request #18332](https://github.com/FreeCAD/FreeCAD/pull/18332)

## Środowisko pracy BIM

### Pozostałe ulepszenia środowiska BIM

* Panel [Widoków BIM](/BIM_Views/pl "BIM Views/pl") został przebudowany i ma teraz również sekcję dla wszystkich widoków 2D. [Pull request #15836](https://github.com/FreeCAD/FreeCAD/pull/15836)
* Wsparcie NativeIFC dla obiektów 2D objects zostało dodane do środowiska pracy BIM, pozwalając na osadzanie obiektów 2D (linii, tekstów, wymiarów) wewnątrz plików IFC, jak również otwieranie takich plików z innych programów BIM. [Pull request #16629](https://github.com/FreeCAD/FreeCAD/pull/16629)
* Okno dialogowe narzędzia [Obmiar](/Arch_Schedule/pl "Arch Schedule/pl") zyskało wsparcie dla prostych szyków (nieosadzonych). To umożliwia przetwarzanie szyków standardowych i opartych o łącza do dalszych obliczeń w raporcie Obmiaru BIM. [Pull request #19219](https://github.com/FreeCAD/FreeCAD/pull/19219)

## Środowisko pracy CAM

### Pozostałe ulepszenia środowiska CAM

* Dodane zostały operacje gwintowania G84/G74. [Pull request #8069](https://github.com/FreeCAD/FreeCAD/pull/8069)
* Do operacji profilowania dodane zostało wsparcie dla wielu przejść. [Pull request #17326](https://github.com/FreeCAD/FreeCAD/pull/17326)

## Środowisko pracy Rysunek Roboczy

* Do narzędzia [Kształt z tekstu](/Draft_ShapeString/pl "Draft ShapeString/pl") dodane zostało wsparcie dla względnych ścieżek czcionek. [Pull request #17819](https://github.com/FreeCAD/FreeCAD/pull/17819)
* Obsługa Łączy w narzędziu [Rysunek Techniczny: Wstaw obiekt środowiska Rysunek Roboczy](/TechDraw_DraftView/pl "TechDraw DraftView/pl") została naprawiona. [Pull request #18175](https://github.com/FreeCAD/FreeCAD/pull/18175) i [Pull request #19296](https://github.com/FreeCAD/FreeCAD/pull/19296)
* Tryb wyciągnięcia narzędzia [Przytnij](/Draft_Trimex/pl "Draft Trimex/pl") bierze teraz pod uwagę Łącza. Może już działać na ścianach należących do Łączy i obiektach w kontenerach z zastosowanymi Łączami. Ponadto, punkt definiujący wyciągnięcie może być współpłaszczyznowy ze ścianą. [Pull request #18314](https://github.com/FreeCAD/FreeCAD/pull/18314) i [Pull request #18320](https://github.com/FreeCAD/FreeCAD/pull/18320)
* Narzędzia [Przesuń](/Draft_Move/pl "Draft Move/pl"), [Obróć](/Draft_Rotate/pl "Draft Rotate/pl") i [Skaluj](/Draft_Scale/pl "Draft Scale/pl") również biorą teraz pod uwagę Łącza. [Pull request #18795](https://github.com/FreeCAD/FreeCAD/pull/18795)
* Jeśli [Łącznik kształtu](/Draft_Facebinder/pl "Draft Facebinder/pl") oparty na połączonych ścianach jest wyciągany, następuje próba zamknięcia jego narożników. Właściwość *Sew* obiektu musi być ustawiona na `Prawda` w tym celu. Miej na uwadze, że ten algorytm może nie działać dla skomplikowanych kształtów. [Pull request #18901](https://github.com/FreeCAD/FreeCAD/pull/18901)
* [Szyki po ścieżce](/Draft_PathArray/pl "Draft PathArray/pl") zostały wzbogacone o kilka nowych właściwości. Możliwe jest teraz odwrócenie szyku, określenie stałej jednostki rozstawu i użycie wzorów rozstawu. [Pull request #19017](https://github.com/FreeCAD/FreeCAD/pull/19017)
* Obiekty w [warstwach](/Draft_Layer/pl "Draft Layer/pl") mogą teraz mieć nadpisania. [Pull request #19207](https://github.com/FreeCAD/FreeCAD/pull/19207)
* Dodane zostało polecenie [Dodaj do warstwy](/Draft_AddToLayer/pl "Draft AddToLayer/pl"), aby szybko umieszczać obiekty w odpowiednich warstwach. [Pull request #19427](https://github.com/FreeCAD/FreeCAD/pull/19427)
* Kod środkowiska pracy Rysunek Techniczny, na którym polega narzędzie [Rysunek Roboczy: Kreskowanie](/Draft_Hatch/pl "Draft Hatch/pl") został zmodyfikowany aby również obsługiwać linie przerywane we wzorach kreskowania. [Pull request #19458](https://github.com/FreeCAD/FreeCAD/pull/19458)
* Narzędzia [Rozbij kształt](/Draft_Downgrade/pl "Draft Downgrade/pl") i [Ulepsz kształt](/Draft_Upgrade/pl "Draft Upgrade/pl") zostały zaktualizowane. [Szyki](/Draft_Workbench/pl#Modyfikacja "Draft Workbench/pl") mogą być rozbijane a nowe obiekty są umieszczane w tym samym kontenerze ([Grupa](/Std_Group/pl "Std Group/pl"), [Część](/Std_Part/pl "Std Part/pl")) co oryginalne obiekty i również otrzymują wizualne właściwości oryginalnych obiektów. [Pull request #19487](https://github.com/FreeCAD/FreeCAD/pull/19487) i [Pull request #19685](https://github.com/FreeCAD/FreeCAD/pull/19685)

### Pozostałe ulepszenia środowiska Rysunek Roboczy

* Polecenie [Rysunek Roboczy: Zaokrąglenie](/Draft_Fillet/pl "Draft Fillet/pl") działa teraz na wskazanych krawędziach zamiast na pierwszej krawędzi wskazanych obiektów. [Pull request #17945](https://github.com/FreeCAD/FreeCAD/pull/17945) oraz [Pull request #18150](https://github.com/FreeCAD/FreeCAD/pull/18150)
* Narzędzia [Grupowanie automatyczne](/Draft_AutoGroup/pl "Draft AutoGroup/pl") i [Dodaj do grupy](/Draft_AddToGroup/pl "Draft AddToGroup/pl") zostały ulepszone. Menu obu poleceń są sortowane alfabetycznie. W menu polecenia [Grupowanie automatyczne](/Draft_AutoGroup/pl "Draft AutoGroup/pl") warstwy są oddzielone od grup a opcja *Nowa warstwa* pyta o nazwę i aktywuje warstwę. Akcje obu poleceń można teraz cofnąć. [Pull request #18172](https://github.com/FreeCAD/FreeCAD/pull/18172) i [Pull request #19312](https://github.com/FreeCAD/FreeCAD/pull/19312)
* Położenie pola *Mnożnik skali* w interfejsie zostało ulepszone ([Ustaw styl](/Draft_SetStyle/pl "Draft SetStyle/pl"), [Edytor stylu opisu](/Draft_AnnotationStyleEditor/pl "Draft AnnotationStyleEditor/pl") i [Rysunek Roboczy: Ustawienia](/Draft_Preferences/pl "Draft Preferences/pl")). [Pull request #18299](https://github.com/FreeCAD/FreeCAD/pull/18299)
* Narzędzie [Rysunek roboczy do szkicu](/Draft_Draft2Sketch/pl "Draft Draft2Sketch/pl") teraz nadaje również wiązania zbieżności między krawędziami z różnych obiektów źródłowych. [Pull request #18805](https://github.com/FreeCAD/FreeCAD/pull/18805)
* Promień, sfazowanie i tryby usunięcia narzędzia [Zaokrąglenie](/Draft_Fillet/pl "Draft Fillet/pl") są przechowywane. [Pull request #19067](https://github.com/FreeCAD/FreeCAD/pull/19067)
* Opcja edycji została dodana do [Klonów środowiska Rysunek Roboczy](/Draft_Clone/pl "Draft Clone/pl"). Po dwukrotnym kliknięciu na nich w [Widoku drzewa](/Tree_view/pl "Tree view/pl") ich skalę można zmienić w panelu zadań. [Pull request #19477](https://github.com/FreeCAD/FreeCAD/pull/19477)
* Dla czytelności, pole *Wypełnione* w panelu zadań np. [Polilinii](/Draft_Wire/pl "Draft Wire/pl") zostało przemianowane na *Utwórz ścianę*. [Pull request #19738](https://github.com/FreeCAD/FreeCAD/pull/19738)
* Teksty nowo utworzonych wymiarów są teraz orientowane automatycznie względem bieżącej płaszczyzny roboczej. Dostępny jest [parametr dostrajania](/Fine-tuning/pl#środowisko_pracy_Rysunek_Roboczy "Fine-tuning/pl") umożliwiający wyłączenie tego zachowania. [Pull request #20072](https://github.com/FreeCAD/FreeCAD/pull/20072)
* [Przyciąganie do najbliższego](/Draft_Snap_Near/pl "Draft Snap Near/pl") nie ma już pierwszeństwa nad innymi rodzajami przyciągania. Przyciągania na obiekt, takie jak [do punktu środkowego](/Draft_Snap_Midpoint/pl "Draft Snap Midpoint/pl") i [do punktu końcowego](/Draft_Snap_Endpoint/pl "Draft Snap Endpoint/pl") w *zakresie przyciągania* kursora są teraz wykrywane [Pull request #20118](https://github.com/FreeCAD/FreeCAD/pull/20118)

## Środowisko pracy MES

|  |  |
| --- | --- |
|  | Dodane zostało menu kontekstowe umożliwiające wybór właściwej bryły jeśli wskazana ściana obiektu CompSolid (BryłaZłożona) należy do dwóch brył. To ułatwia wybór wewnętrznych brył np. w celu przypisania do nich materiałów. [Pull request #18812](https://github.com/FreeCAD/FreeCAD/pull/18812) |

|  |  |
| --- | --- |
|  | Właściwość *ZRefine* została dodana do [generatora siatki Netgen](/FEM_MeshNetgenFromShape/pl "FEM MeshNetgenFromShape/pl"), umożliwiając tworzenie prostych wyciąganych siatek z dominującymi elementami sześciościennymi gdy właściwość *Quad Dominated* jest włączona. Działa to jednak tylko dla elementów pierwszego rzędu, chyba że wygenerowane elementy to tylko sześciościany. [Pull request #19524](https://github.com/FreeCAD/FreeCAD/pull/19524) |

|  |  |
| --- | --- |
| Kliknij na obrazku jeśli animacja się nie uruchamia. | [Obiekty wyników MES](/FEM_ResultShow/pl "FEM ResultShow/pl") wspierają teraz animacje wyników. [Pull request #18496](https://github.com/FreeCAD/FreeCAD/pull/18496) |

|  |  |
| --- | --- |
|  | Dodane zostało wsparcie dla [solvera Elmer przepływu prądu stałego](/FEM_EquationStaticCurrent/pl "FEM EquationStaticCurrent/pl"). Przy jego pomocy można również obliczać grzanie Joule'a. [Pull request #19835](https://github.com/FreeCAD/FreeCAD/pull/19835) |

|  |  |
| --- | --- |
|  | [Obiekt prezentacji graficznej wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl") może teraz przechowywać wyniki z wielu klatek. [Pull request #19610](https://github.com/FreeCAD/FreeCAD/pull/19610) |

### Pozostałe ulepszenia środowiska MES

* Szczegółowość logów Gmsh można teraz ustawić w [Preferencjach](/FEM_Preferences/pl#Gmsh "FEM Preferences/pl"). [Pull request #17699](https://github.com/FreeCAD/FreeCAD/pull/17699)
* Właściwość DANE**Second Order Linear** i wsparcie dla [lokalnego zagęszczenia siatki](/FEM_MeshRegion/pl "FEM MeshRegion/pl"), wcześniej dostępne tylko dla Gmsh, są teraz również dostępne dla nowej implementacji [Netgen](/FEM_MeshNetgenFromShape/pl "FEM MeshNetgenFromShape/pl"). [Pull request #17170](https://github.com/FreeCAD/FreeCAD/pull/17170)
* Dodany został [przekrój](/FEM_ElementGeometry1D/pl "FEM ElementGeometry1D/pl") skrzynkowy i eliptyczny dla belek. [Pull request #15843](https://github.com/FreeCAD/FreeCAD/pull/15843)
* Narzędzie [Usuń wyniki](/FEM_ResultsPurge/pl "FEM ResultsPurge/pl") usuwa teraz wszystkie obiekty wyników, nie tylko te natywne dla solvera CalculiX. [Pull request #18328](https://github.com/FreeCAD/FreeCAD/pull/18328)
* [Wiązanie tie](/FEM_ConstraintTie/pl "FEM ConstraintTie/pl") można teraz stosować na powierzchnie powłok. [Pull request #18325](https://github.com/FreeCAD/FreeCAD/pull/18325)
* Dla solvera Elmer można teraz ustawić format wyników (binarny lub ASCII) i zapisywanie identyfikatorów geometrii, również w [Preferencjach](/FEM_Preferences/pl#Elmer "FEM Preferences/pl"). [Pull request #17972](https://github.com/FreeCAD/FreeCAD/pull/17972)
* Do [Filtra konturów](/FEM_PostFilterContours/pl "FEM PostFilterContours/pl") dodana została opcja wygładzania. [Pull request #18088](https://github.com/FreeCAD/FreeCAD/pull/18088)
* Dodany został parametr *BucklingAccuracy* dla [solvera CalculiX](/FEM_SolverCalculixCxxtools/pl "FEM SolverCalculixCxxtools/pl") - może być konieczny do uchwycenia pierwszej wartości własnej w liniowych analizach wyboczenia. [Pull request #18790](https://github.com/FreeCAD/FreeCAD/pull/18790)
* Teraz wszystkie obiekty MES, dla których wygaszanie ma sens mogą zostać wygaszone. Wcześniej tylko warunki brzegowe i obciążenia były wygaszalne. [Pull request #18636](https://github.com/FreeCAD/FreeCAD/pull/18636)
* Siły od kontaktu są teraz zapisywane do pliku ccx\_dat\_file w analizach z solverem CalculiX. [Pull request #18840](https://github.com/FreeCAD/FreeCAD/pull/18840)
* Narzędzie [Materiał zbrojony (beton)](/FEM_MaterialReinforced/pl "FEM MaterialReinforced/pl") korzysta teraz z [nowego edytora materiałów](/Material_Edit/pl "Material Edit/pl"). [Pull request #18893](https://github.com/FreeCAD/FreeCAD/pull/18893)
* [Warunek brzegowy potencjału elektrostatycznego](/FEM_ConstraintElectrostaticPotential/pl "FEM ConstraintElectrostaticPotential/pl") został rozbudowany aby wspierać również warunek brzegowy typu Neumanna, co pozwala zadawać gęstość strumienia elektrycznego. Ma on teraz również symbol. [Pull request #18514](https://github.com/FreeCAD/FreeCAD/pull/18514) i [Pull request #19011](https://github.com/FreeCAD/FreeCAD/pull/19011)
* Temperatura odniesienia dla rozszerzalności termicznej może być teraz definiowana dla [materiału bryły](/FEM_MaterialSolid/pl "FEM MaterialSolid/pl") w analizach termomechanicznych z CalculiX. [Pull request #19285](https://github.com/FreeCAD/FreeCAD/pull/19285)
* Dodana została funkcja Pythona *Fem.frdToVTK* umożliwiająca konwersję plików frd z wynikami solvera CalculiX do formatu VTK używanego przez ParaView. [Pull request #19426](https://github.com/FreeCAD/FreeCAD/pull/19426)
* [Warunek brzegowy gęstości prądu](/FEM_ConstraintCurrentDensity/pl "FEM ConstraintCurrentDensity/pl") został ulepszony. Ma teraz dwa tryby (*Custom* i *Normal*) oraz symbol dla trybu *Normal*. [Pull request #19930](https://github.com/FreeCAD/FreeCAD/pull/19930)
* Dodane zostały dwa nowe [Przykłady MES](/FEM_Examples/pl "FEM Examples/pl") - jeden dla nowo zaimplementowanego [Równania przepływu prądu stałego](/FEM_EquationStaticCurrent/pl "FEM EquationStaticCurrent/pl") (ciepło Joule) i jeden dla [Wiązania ciała sztywnego](/FEM_ConstraintRigidBody/pl "FEM ConstraintRigidBody/pl"). [Pull request #20007](https://github.com/FreeCAD/FreeCAD/pull/20007) i [Pull request #20011](https://github.com/FreeCAD/FreeCAD/pull/20011)
* Panel zadań [Obciążenia strumieniem ciepła](/FEM_ConstraintHeatflux/pl "FEM ConstraintHeatflux/pl") został ulepszony - przyciski wyboru typu strumienia zostały zastąpione listą rozwijaną. [Pull request #20059](https://github.com/FreeCAD/FreeCAD/pull/20059)
* Panel zadań [Warunku brzegowego magnetyzacji](/FEM_ConstraintMagnetization/pl "FEM ConstraintMagnetization/pl") został ulepszony. [Pull request #20055](https://github.com/FreeCAD/FreeCAD/pull/20055)
* Do okna Wybór geometrii odniesienia w panelu zadań równań solvera Elmer dodany został Tryb zaznaczania. [Pull request #20053](https://github.com/FreeCAD/FreeCAD/pull/20053)
* Dodane zostało obciążenie [gęstością ładunku elektrycznego](/FEM_ElectricChargeDensity/pl "FEM ElectricChargeDensity/pl") do użycia z [równaniem Elektrostatycznym](/FEM_EquationElectrostatic/pl "FEM EquationElectrostatic/pl") solvera Elmer. [Pull request #20494](https://github.com/FreeCAD/FreeCAD/pull/20494)

## Środowisko pracy Materiał

### Pozostałe ulepszenia środowiska Materiał

* [Poliwęglan](https://pl.wikipedia.org/wiki/Poliw%C4%99glany) ze zdefiniowanymi właściwościami fizycznymi został dodany do bazy materiałów. [Pull request #19432](https://github.com/FreeCAD/FreeCAD/pull/19432)

## Środowisko pracy Siatka

### Pozostałe ulepszenia środowiska Siatka

## Środowisko pracy OpenSCAD

### Pozostałe ulepszenia środowiska OpenSCAD

## Środowisko pracy Część

### Pozostałe ulepszenia środowiska Część

* Narzędzie [Sprawdź geometrię](/Part_CheckGeometry/pl "Part CheckGeometry/pl") teraz również zawiera wyniki dla prawidłowych kształtów, pokazuje pominięte obiekty i generuje raporty w [widoku raportu](/Report_view/pl "Report view/pl").

## Środowisko pracy Projekt Części

|  |  |
| --- | --- |
| Kliknij na obrazku jeśli animacja się nie uruchamia. | Panel zadań narzędzia [Otwór](/PartDesign_Hole/pl "PartDesign Hole/pl") został przeprojektowany. Elementy, które nie są istotne są teraz ukrywane, pozostawiając tylko te przydatne dla bieżącej konfiguracji, nawet jeśli są tylko do odczytu. Panel jest oparty o schemat, który zapewnia bezpośredni kontekst a jego elementy zostały umieszczone w pobliżu ich obszaru działania. [Pull request #19052](https://github.com/FreeCAD/FreeCAD/pull/19052) i [Pull request #19167](https://github.com/FreeCAD/FreeCAD/pull/19167) |

|  |  |
| --- | --- |
| Kliknij na obrazku jeśli animacja się nie uruchamia. | Do narzędzia [Otwór](/PartDesign_Hole/pl "PartDesign Hole/pl") dodane zostało wsparcie dla stożkowych gwintów i więcej profili gwintów:  * [British Standard Whitworth](https://en.wikipedia.org/wiki/British_Standard_Whitworth) * [British Standard Fine](https://en.wikipedia.org/wiki/British_Standard_Fine) * [British Standard Pipe](https://en.wikipedia.org/wiki/British_Standard_Pipe) * [National Pipe Threads](https://en.wikipedia.org/wiki/National_pipe_thread)   [Pull request #15744](https://github.com/FreeCAD/FreeCAD/pull/15744) |

### Pozostałe ulepszenia środowiska Projekt Części

* Początek Zawartości środowiska Projekt Części korzysta teraz z nowych globalnych geometrii konstrukcyjnych. Wygląd został zmieniony a płaszczyzny powiększają się przy tworzeniu nowego szkicu. Ponieważ orientacja była błędna w starszych wersjach programu FreeCAD, pliki w nich utworzone muszą być przekonwertowane przy otwieraniu. Może to zepsuć pliki z odniesieniami do geometrii konstrukcyjnych i pliki przekonwertowane lub utworzone na nowo w wersja 1.1 i powyżej będą zepsute w wersja 1.0 i poniżej. [Pull request #18126](https://github.com/FreeCAD/FreeCAD/pull/18126)
* Polecenie [Włącz / wyłącz przeliczanie](/Std_ToggleFreeze/pl "Std ToggleFreeze/pl") jest teraz dostępne ze środowiska pracy Projekt Części. [Pull request #18373](https://github.com/FreeCAD/FreeCAD/pull/18373)
* Wydajność gwintów modelowanych narzędziem [Otwór](/PartDesign_Hole/pl "PartDesign Hole/pl") została zwiększona. [Pull request #15744](https://github.com/FreeCAD/FreeCAD/pull/15744)
* Kąt początkowy dla zwężających się gwintów w narzędziu [Otwór](/PartDesign_Hole/pl "PartDesign Hole/pl") jest teraz automatycznie ustawiany na wartość z norm ISO 7-1 i ASME B1.20.1. [Pull request #15744](https://github.com/FreeCAD/FreeCAD/pull/15744)

## Środowisko pracy Punkty

### Pozostałe ulepszenia środowiska Punkty

## Środowisko pracy Szkicownik

|  |  |
| --- | --- |
| Kliknij na obrazku jeśli animacja się nie uruchamia. | Dodane zostało narzędzie [Rzutowanie](/Sketcher_Projection/pl "Sketcher Projection/pl") umożliwiające tworzenie definiującej [geometrii zewnętrznej](/Sketcher_External/pl "Sketcher External/pl") i przełączanie między trybem definiującym i konstrukcyjnym dla geometrii zewnętrznej. [Pull request #17736](https://github.com/FreeCAD/FreeCAD/pull/17736) |

|  |  |
| --- | --- |
|  | Dodane zostało narzędzie [Przecięcie](/Sketcher_Intersection/pl "Sketcher Intersection/pl") umożliwiające tworzenie [geometrii zewnętrznej](/Sketcher_External/pl "Sketcher External/pl") w oparciu o wskazaną geometrię odniesienia i przecięcie z płaszczyzną szkicu. [Pull request #17736](https://github.com/FreeCAD/FreeCAD/pull/17736) |

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | [Geometria zewnętrzna](/Sketcher_External/pl "Sketcher External/pl") (zarówno rzutowania jak i przecięcia) może być teraz tworzona poprzez wskazanie ściany. [Pull request #17736](https://github.com/FreeCAD/FreeCAD/pull/17736) |

### Pozostałe ulepszenia środowiska Szkicownik

* Możliwe jest teraz bezpośrednie używanie geometrii zewnętrznej (zarówno konstrukcyjnej, jak i definiującej) jako wejścia dla narzędzi takich jak odsunięcie czy szyk. [Pull request #17615](https://github.com/FreeCAD/FreeCAD/pull/17615)
* Geometria zewnętrzna (rzutowania lub przecięcia) jest teraz domyślnie definiująca (nie trzeba jej obrysowywać jak w wersji 1.0 i starszych). Można ją przełączyć na konstrukcyjną jak każdą inną geometrię. [Pull request #17736](https://github.com/FreeCAD/FreeCAD/pull/17736)
* Osie w Szkicowniku są teraz wyświetlane z nieskończoną długością. [Pull request #17312](https://github.com/FreeCAD/FreeCAD/pull/17312)
* Szkice są teraz segregowane alfabetycznie w oknie dialogowym narzędzia [Mapuj szkic na powierzchnię](/Sketcher_MapSketch/pl "Sketcher MapSketch/pl"). [Pull request #16518](https://github.com/FreeCAD/FreeCAD/pull/16518)
* Dodane zostały grupowe przeciąganie, co umożliwia jednoczesne przeciąganie wszystkich zaznaczonych obiektów geometrycznych. [Pull request #18273](https://github.com/FreeCAD/FreeCAD/pull/18273)
* Dodane zostało nowe ustawienie, które, jeśli zaznaczone, sprawia, że tworzenie geometrii zewnętrznej jest niezależne od aktualnego trybu konstrukcyjnego - jest ona wtedy zawsze tworzona jako geometria odniesienia. [Pull request #18697](https://github.com/FreeCAD/FreeCAD/pull/18697)
* Dodane zostało ustawienie umożliwiające opcjonalne grupowanie narzędzi [Linia](/Sketcher_CreateLine/pl "Sketcher CreateLine/pl") i [Polilinia](/Sketcher_CreatePolyline "Sketcher CreatePolyline"). [Pull request #20165](https://github.com/FreeCAD/FreeCAD/pull/20165)

## Środowisko pracy Arkusz Kalkulacyjny

### Pozostałe ulepszenia środowiska Arkusz Kalkulacyjny

* Dodane zostały domyślne skróty dla poleceń [Pogrub](/Spreadsheet_StyleBold/pl "Spreadsheet StyleBold/pl"), [Pochyl](/Spreadsheet_StyleItalic "Spreadsheet StyleItalic") i [Podkreśl](/Spreadsheet_StyleUnderline "Spreadsheet StyleUnderline"). [Pull request #15556](https://github.com/FreeCAD/FreeCAD/pull/15556)
* Dwukrotne kliknięcie na separatorze w nagłówku dopasowuje teraz rozmiar kolumny do jej zawartości. [Pull request #16296](https://github.com/FreeCAD/FreeCAD/pull/16296)
* Do Arkusza Kalkulacyjnego dodane zostało przybliżanie. [Pull request #16130](https://github.com/FreeCAD/FreeCAD/pull/16130)

## Środowisko pracy Powierzchnia 3D

### Pozostałe ulepszenia środowiska Powierzchnia 3D

## Środowisko pracy Rysunek Techniczny

### Pozostałe ulepszenia środowiska Rysunek Techniczny

* Narzędzie [Wstaw adnotację obszaru](/TechDraw_AreaDimension/pl "TechDraw AreaDimension/pl") teraz poprawnie uwzględnia otwory w ścianach. [Pull request #17740](https://github.com/FreeCAD/FreeCAD/pull/17740)
* Dodana została walidacja kształtu - można ją włączyć w [Preferencjach](/TechDraw_Preferences/pl#Zaawansowane "TechDraw Preferences/pl"). [Pull request #18282](https://github.com/FreeCAD/FreeCAD/pull/18282)
* Skalowanie symboli SVG zostało naprawione. [Pull request #18757](https://github.com/FreeCAD/FreeCAD/pull/18757)
* Dodany został nowy format *r*. Zaokrągla on wartość wymiaru do kroku podanego jako wartość przed *r*. Przykładowo, *%0.5r* (lub po prostu *%.5r*) zaokrągla do 0.5. [Pull request #19393](https://github.com/FreeCAD/FreeCAD/pull/19393)

## Import i eksport

* Wyrównanie szkiców w eksporcie do formatów SVG i starszego DXF zostało naprawione. [Pull request #19765](https://github.com/FreeCAD/FreeCAD/pull/19765)

## Kompilacja

## Znane ograniczenia

## Dodatkowe zasoby

Retrieved from "<http://wiki.freecad.org/index.php?title=Release_notes_1.1/pl&oldid=1571155>"