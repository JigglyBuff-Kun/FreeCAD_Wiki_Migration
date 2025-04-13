---
title: Dostrajanie parametrów
---
## Wprowadzenie

[Edytor preferencji](/Preferences_Editor/pl "Preferences Editor/pl") FreeCAD w menu **Edycja → Preferencje** jest powszechnie używany do wprowadzania i edycji tabeli parametrów programu.

Jednak możliwy jest również dostęp, modyfikacja i ręczne tworzenie parametrów za pomocą [Edytora parametrów](/Std_DlgParameter/pl "Std DlgParameter/pl") znajdującego się w menu **Narzędzia → Edycja parameterów**.

Poniższa strona przedstawia listę parametrów, które nie są dostępne za pośrednictwem edytora preferencji aby dopracować instalację FreeCAD lub pokonać problemy. Wszystkie parametry można ustawić ręcznie w **BaseApp/Preferencje/**:

## Informacje ogólne

* **Bitmaps/Theme/Name** (string): Wprowadź nazwę motywu ikon do nadpisania systemowego motywu ikon używanego przez FreeCAD. Stosowane tylko jeśli **Bitmaps/Theme/UseIconTheme** jest ustawione na `PRAWDA`.
* **Bitmaps/Theme/ThemeSearchPaths** (boolean): Ustaw na `FAŁSZ` aby FreeCAD korzystał ze swoich ikon zamiast motywu ikon systemowych na Linux. wersja 0.21 i poniżej. Dla starszych wersji użyj **Bitmaps/Theme/UseIconTheme** zamiast tego.
* **Bitmaps/Theme/UseIconTheme** (boolean): Ustaw na `PRAWDA` aby zmusić Qt do używania ikon z motywu systemowego. Domyślnie ustawienie to `FAŁSZ`, co sprawia, że FreeCAD korzysta ze swoich ikon. Nie ma to wpływu na inne mechanizmy motywów ikon Qt, takie jak okna systemowe, przyciski itp. Powinny one zawsze używać ikon z motywu systemowego. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* **Dialog/DontUseNativeColorDialog** *(boolean)*: Ustawienie okna dialogowego selektora kolorów. Ustaw wartość na `FAŁSZ`, jeśli chcesz, aby FreeCAD używał natywnego okna dialogowego koloru w twoim systemie, a nie okna Qt Color. Wartość domyślna to `PRAWDA`.
* **Dialog/DontUseNativeDialog** *(boolean)*: Ustawienie okna dialogowego pliku. Ustaw wartość na `FAŁSZ`, jeśli chcesz używać natywnego okna dialogowego Plik podczas otwierania plików lub `PRAWDA`, aby używać okna dialogowego Qt File Picker. Domyślne zależy od ustawienia podczas kompilacji: #define *(USE\_QT\_FILEDIALOG)*.
* **Dialog/DontUseNativeFontDialog** *(boolean)*: Używane przez polecenie [Kształt z tekstu](/Draft_ShapeString/pl "Draft ShapeString/pl"). Ustaw wartość na `FAŁSZ`, aby użyć natywnego okna dialogowego Czcionka. Wartość domyślna to `PRAWDA`.
* **DockWindows/TreeView/Enabled** *(boolean)*: Ustaw wartość opcji na `PRAWDA` aby umożliwić dokowanie widżetu [Widok drzewa](/Document_structure/pl "Document structure/pl") niezależnie od Widoku Połączonego. Po zmianie wartości parametru potrzebny jest restart programu FreeCAD, aby widżet był dostępny na liście Panelu - Widok połączony.
* **DockWindows/PropertyView/Enabled** *(boolean)*: Ustaw wartość opcji na `PRAWDA` aby umożliwić dokowanie widżetu [Widok właściwości](/Property_editor/pl "Property editor/pl") niezależnie od Widoku Połączonego. Po zmianie wartości parametru potrzebny jest restart programu FreeCAD, aby widżet był dostępny na liście Panelu - Widok.
* **DockWindows/DAGView/Enabled** *(boolean)*: Ustaw wartość opcji na `PRAWDA` aby włączyć wersję testową dokowanego widżetu [DAG view](/DAG_view/pl "DAG view/pl"). Po zmianie wartości parametru potrzebny jest restart programu FreeCAD, aby widżet był dostępny na liście Panelu - Widok.
* **Document/AutoNameDynamicProperty** *(boolean)*: Ustaw na wartość `PRAWDA`, aby FreeCAD automatycznie zmieniał nazwy właściwości dynamicznych z niepoprawnie podaną nazwą zamiast wyrzucać wyjątek. Zwróć uwagę, że kod Pythona nie będzie miał dostępu do nowej nazwy.
* **Document/ChangeViewProviderTouchDocument** *(boolean)*: Ustaw wartość opcji na `false` aby zmiany widoczności elementów nie oznaczały dokumentu jako zmodyfikowany.
* **Document/SaveThumbnailFix** *(boolean)*: Ustaw wartość opcji na `PRAWDA` aby naprawić problem z Qt5, który uniemożliwia generowanie miniaturek plików `.FCStd`.
* **General/LockToolBars** *(boolean)*: Ustaw wartość na `PRAWDA`, aby uniemożliwić przeciąganie pasków narzędzi i ukryć małe uchwyty do przeciągania. Najczęściej używane w połączeniu z arkuszami stylów, które sprawiają, że paski narzędzi są pionowe.
* **General/RecentIncludesExported** *(boolean)*: Ustaw wartość opcji na `PRAWDA` to include exported files in the Recent Files list. Defaults to `FAŁSZ`.
* **General/RecentIncludesImported** *(boolean)*: Ustaw wartość opcji na `FAŁSZ` to exclude imported files from the Recent Files list. Defaults to `PRAWDA`.
* **General/ShowSplasherMessages** *(boolean)*: Ustaw wartość `FAŁSZ`, aby pominąć wyświetlanie komunikatów na ekranie powitalnym. Może to skrócić czas uruchamiania FreeCAD. Wartość domyślna to `PRAWDA`.
* **Macro/DuplicateFrom001** *(boolean)*: Ustaw wartość opcji na `PRAWDA` aby zawsze rozpoczynać poszukiwanie sugerowanej nazwy pliku z duplikatem makra od @001 zamiast aktualnego @NNN *(jeśli dotyczy)*. Domyślna wartość `FAŁSZ`.
* **Macro/DuplicateIgnoreExtraNote** *(boolean)*: Ustaw wartość na `PRAWDA`, aby zignorować dodatkową notatkę podczas sugerowania zduplikowanej nazwy pliku makra. Dodatkowa uwaga to tekst w nazwie pliku po "@NNN" i przed ".FCMacro". Przykład: "my\_macro@005.my\_note.FCMacro". Jeżeli ustawiono wartość `PRAWDA`, następną sugerowaną nazwą pliku będzie "my\_macro@006.FCMacro". Jeżeli `FAŁSZ`, to następną sugerowaną nazwą pliku jest "my\_macro@006.my\_note.FCMacro". Aby tekst został rozpoznany jako dodatkowa notatka, powinien zaczynać się od kropki *(".")* po członie "@NNN". W przeciwnym razie, na przykład "my\_macro@006\_my\_note.FCMacro" otrzyma "my\_macro@006\_my\_note@001.FCMacro" jako sugerowaną nową nazwę pliku, co może być pożądane w niektórych przypadkach. Domyślną wartością jest `FAŁSZ`.
* **Macro/ReplaceSpaces** *(boolean)*: Ustaw wartość na `FAŁSZ`, jeśli nie chcesz, aby spacje w nazwach plików były automatycznie zamieniane na podkreślenia podczas tworzenia, zmiany nazwy lub powielania makra. Nie ma to wpływu na istniejące pliki, ma znaczenie tylko przy tworzeniu nowego pliku, zmianie nazwy lub powielaniu istniejącego. Domyślną wartością jest `PRAWDA`.
* **MainWindow/ClearMenuBar** *(boolean)*: Ustaw wartość na `PRAWDA` aby wyczyścić pasek menu przy zmianie środowiska pracy, przydatne gdy używasz globalnego menu, gdyż może ono nie aktualizować się przy zmianie środowiska pracy i szybko stać się zagracone wpisami w menu każdego środowiska. Domyślna wartość to `FAŁSZ`. Na macOS jest oczyszczane w każdym przypadku, aby obejść błąd w Qt.
* **MainWindow/ToolBarNameAsToolTip** *(boolean)*: Ustaw wartość na `FAŁSZ`, aby nie wyświetlać nazwy paska narzędzi jako etykiety. Domyślnie `PRAWDA`.
* **PropertyView/AutoTransactionView** *(boolean)*: Ustawienie wartość opcji na `PRAWDA` powoduje, że zmiany właściwości karty Widok są dodawane do stosu cofania *(a więc można je cofnąć)*. Domyślną wartością jest `FAŁSZ`.
* **Selection/AutoShowSelectionView** *(boolean)*: Ustaw wartość opcji na `PRAWDA` aby panel Widok zaznaczenia wyświetlał się automatycznie po wybraniu obiektu. Domyślnie `FAŁSZ`.
* **Selection/singleClickFeatureSelect** *(boolean)*: Ustaw opcję na wartość `FAŁSZ`, aby wyłączyć możliwość wyboru elementu jednym kliknięciem w środowisku Projekt Części. Domyślnie `PRAWDA`.
* **TreeView/HideColumn** *(boolean)*: Ustaw wartość parametru na `Prawda`, aby ukryć kolumnę **Opis** w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl"). Domyślnie `FAŁSZ`.
* **TreeView/TreeViewStretchDescription** *(boolean)*: Ustaw opcję na wartość `FAŁSZ`, aby rozciągnąć kolumnę "Opis" w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") do prawej krawędzi panelu. Wartość domyślna to `FAŁSZ`.
* **Units/PropertyVectorListCopyPrecision** (integer): Liczba cyfr dokładności przy kopiowaniu tabeli wektorów z menu kontekstowego do schowka systemowego podczas używania [Edytora właściwości](/Property_editor/pl "Property editor/pl") dla właściwości typu `App::PropertyVectorList`. Wartość domyślna to `16`. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")
* **View/AxisLetterColor** *(unsigned)*: Kolor liter układu współrzędnych wyświetlanych w prawym dolnym rogu widoku 3D. Domyślnie `255`. Zobacz stronę [Kostka nawigacyjna](/Navigation_Cube/pl#Dostosowywanie "Navigation Cube/pl"), aby uzyskać informacje na temat wartości koloru.
* **View/AxisXColor** *(unsigned)*: Kolor dla elementów osi X gizma [Std: Przemieszczenie](/Std_TransformManip/pl "Std TransformManip/pl"). Domyślnie `3425907456`. Zobacz stronę [Kostka nawigacyjna](/Navigation_Cube/pl#Dostosowywanie "Navigation Cube/pl"), aby uzyskać informacje na temat wartości koloru.
* **View/AxisYColor** *(unsigned)*: Analogicznie dla elementów osi Y. Domyślnie `869020416`.
* **View/AxisZColor** *(unsigned)*: Analogicznie dla elementów osi Z. Domyślnie `859032576`.
* **View/LocalCoordinateSystemSize** (float): Rozmiar lokalnych układów współrzędnych. Domyślnie `2.0`.
* **View/NavigationDebug** *(boolean)*: Włącza debugowanie stylów nawigacji *(od wersji v0.19 tylko styl nawigacji Gesture ma coś do powiedzenia)*.
* **View/NavigationDebug** *(boolean)*: Udostępnia możliwość debugowania stylów nawigacji *(od v0.19, tylko styl nawigacji Gesture znajduje zastosowanie)*.
* **View/SavePicture** *(string)*: Ustaw wartość opcji na `FramebufferObject`, `PixelBuffer` lub `CoinOffscreenRenderer` dla różnych metod tworzenia obrazów w oknie widoku 3D.
* **View/ToggleTransparency** (integer): Maksymalny procent przezroczystości, który użytkownik chce przełączać z zera. Domyślna wartość to `70`. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")

## Domyślna nazwa pliku eksportu

.

* **General/ExportDefaultFilenameMultiple** *(string)*: Ustaw domyślną nazwę pliku, która będzie używana podczas eksportu wielu obiektów. Domyślną wartością jest `%F`.
* **General/ExportDefaultFilenameSingle** *(string)*: Ustaw domyślną nazwę pliku, która będzie używana podczas eksportu pojedynczego obiektu. Domyślną wartością jest `%F-%P-`.

Obie te opcje umożliwiają automatyczne wstawianie do nazwy pliku różnych informacji, przy użyciu następujących znaków formatu:

* %F - nazwa pliku .FCStd *(lub etykieta, jeśli nie jest jeszcze zapisana)*
* %Lx - etykieta wybranego obiektu *(obiektów)*, oddzielona znakiem 'x'
* %Px - etykieta zaznaczonego obiektu*(ów)* i ich pierwszego rodzica, oddzielona znakiem 'x'
* %U - data i godzina, w UTC, [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
* %D - data i czas, w lokalnej strefie czasowej, [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

Wszelkie inne znaki traktowane są dosłownie. Jeśli wynikowa nazwa pliku jest nieprawidłowa, zostanie zmieniona przy zapisie, a nieprawidłowe znaki zostaną zastąpione znakiem podkreślenia  *' **\_** '* .

## Powiązane z myszką

.

* **General/ComboBoxWheelEventFilter** *(boolean)*: Należy ustawić wartość `true`, aby widżety nie przechwytywały zdarzeń związanych z kółkiem myszy i uniemożliwiały przewijanie obszarów, które można przewijać. Wymaga uwzględnienia ponownego uruchomienia programu FreeCAD.
* **View/GestureRollFwdCommand**, **View/GestureRollBackCommand** *(string)*: Komendy, które mają być wykonywane za pomocą gestów przewijania przycisków myszy w stylu nawigacji Gesture.
* **View/GestureMoveThreshold** *(integer)*: Odległość, jaką musi pokonać kursor myszy *(px)*, aby wejść w tryb obrotu lub przesuwania w stylu nawigacji Gesture. Wartość domyślna `5`.
* **View/GestureTapHoldTimeout** *(integer)*: Określa jak długo trzeba czekać *(w milisekundach)*, aby wejść w tryb obrotu w stylu nawigacji Gesture. Pomocne może być zwiększenie wartości, jeśli przeciąganie geometrii w szkicowniku jest trudne. Domyślnie jest to wartość `700`.

## Skróty klawiaturowe

### Klawisz ESC

* **General/TasksKeyEsc** *(boolean)*: Utwórz i ustaw wartość na `false`, aby wyłączyć wychodzenie klawiszem ESC z [Panelu zadań](/Task_panel/pl "Task panel/pl") we wszystkich środowiskach pracy *(to znaczy, jeśli panel zadań jest aktywny)*.

## Kostka nawigacyjna

Zobacz stronę [Kostka nawigacyjna](/Navigation_Cube/pl#Parametry_zaawansowane "Navigation Cube/pl").

## Szczególne środowiska pracy

### [środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl")

* **Mod/BIM/DefaultPageScale** *(float)*: Domyślne skalowanie dla nowych stron Rysunku Technicznego utworzonych z poziomu środowiska pracy BIM, w przypadku gdy szablon nie zawiera żadnego edytowalnego pola tekstowego "Skala" lub "Skalowanie" *(wielkość liter nie ma znaczenia)*.

### [środowisko pracyCAM](/CAM_Workbench/pl "CAM Workbench/pl")

* Środowisko pracy[CAM](/CAM_Workbench/pl "CAM Workbench/pl") posiada przełącznik umożliwiający włączenie eksperymentalnych funkcji udokumentowanych na stronie [Funkcje eksperymentalne](/CAM_experimental/pl "CAM experimental/pl").

### [środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl")

* **Mod/Draft/DefaultAnnoDisplayMode** *(liczba całkowita)*: Ustaw wartość `1`, aby tworzyć adnotacje Rysunku Roboczego *([tekst](/Draft_Text/pl "Draft Text/pl"), [wymiar](/Draft_Dimension/pl "Draft Dimension/pl") i [etykieta](/Draft_Label/pl "Draft Label/pl"))* z ich właściwością WIDOK**Tryb wyświetlania** ustawionym na `Ekran`. Ustaw na `0` dla nowych adnotacji z tą właściwością ustawioną na `Świat`. Domyślnie `0`. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* **Mod/Draft/DimAutoFlipText** (boolean): Ustaw na `FAŁSZ` aby wyłączyć automatyczne orientowanie tekstu nowo utworzonych wymiarów względem bieżącej [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl"). Domyślna wartość to `PRAWDA`. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")
* **Mod/Draft/GridHideInOtherWorkbenches** *(boolean)*: Ustaw wartość `FAŁSZ`, aby utrzymać [siatkę](/Draft_ToggleGrid/pl "Draft ToggleGrid/pl") podczas przełączania na inne środowiska pracy niż [BIM](/BIM_Workbench/pl "BIM Workbench/pl") lub [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"). Wartością domyślną jest `PRAWDA`. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* **Mod/Draft/SvgLinesBlack** (boolean): Ustaw na `PRAWDA` aby przekonwertować kolor biały na czarny w wynikowym SVG. Ustaw na `FAŁSZ` aby zachować kolor biały. Wpływ na eksport do spłaszczonego SVG i [widoki środowiska Rysunek Roboczy w środowisku Rysunek Techniczny](/TechDraw_DraftView/pl "TechDraw DraftView/pl"). Domyślna wartość to `PRAWDA`.
* **Mod/Draft/useSupport** (wartość logiczna): Ustaw wartość `PRAWDA`, aby ustawić właściwość DANE**Support** obiektów Rysunku Roboczego utworzonych na powierzchni wychodzącego obiektu bazowego na ten obiekt bazowy. Było to standardowe zachowanie przed wersją FreeCAD 0.19. Należy pamiętać, że parametr ten może nie być obsługiwany w przyszłych wersjach. Wartością domyślną jest `FAŁSZ`.

### [środowisko pracy Część](/Part_Workbench/pl "Part Workbench/pl")

* **Mod/Part/ParametricRefine** *(boolean)*: Ustaw wartość opcji na `FAŁSZ`, aby funkcja [udoskonal kształt](/Part_RefineShape/pl "Part RefineShape/pl") utworzyła niezależną kopię, a nie linkowaną. Domyślną wartością jest `PRAWDA` jeśli wartość nie jest dostępna.

### [środowisko pracy Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl")

* **Mod/PartDesign/AdditiveHelixPreview** *(boolean)*: Ustaw wartość opcji na `PRAWDA` aby zapewnić, że helisa addytywna, która nie przecina ciała, jest widoczna w podglądzie. Domyślną wartością jest `FAŁSZ`.
* **Mod/PartDesign/DefaultDatumColor** *(unsigned)*: kolor i przezroczystość dla [geometrii konstrukcyjnych środowiska Projekt Części](/PartDesign_CompDatums/pl "PartDesign CompDatums/pl"), [Łącznika kształtu](/PartDesign_ShapeBinder/pl "PartDesign ShapeBinder/pl") i [Łącznika kształtów podrzędnych](/PartDesign_SubShapeBinder/pl "PartDesign SubShapeBinder/pl"). Domyślna wartość to `4292280473`. Zobacz [tutaj](/Navigation_Cube/pl#Dostosowywanie "Navigation Cube/pl") aby uzyskać informacje o wartości koloru.
* **Mod/PartDesign/SubtractiveHelixPreview** *(boolean)*: Ustaw wartość opcji na `PRAWDA` aby upewnić się, że helisa odejmowana, która nie przecina ciała, jest widoczna w podglądzie. Wartością domyślną jest `PRAWDA`.
* **Mod/PartDesign/SwitchToTask** *(boolean)*: Ustaw wartość opcji na `FAŁSZ`, aby uniemożliwić przełączenie na panel zadań podczas uruchamiania Środowiska pracy [Projekt części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"). Wartością domyślną jest `PRAWDA`, jeśli wartość nie jest dostępna.
* **Mod/PartDesign/SwitchToWB** *(boolean)*: Ustaw wartość opcji na `FAŁSZ`, aby zapobiec automatycznemu wywołaniu Środowiska pracy [Projekt części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"), gdy aktywowana jest opcja [zawartość](/PartDesign_Body/pl "PartDesign Body/pl"). Wartością domyślną jest `PRAWDA`, jeśli wartość nie jest dostępna.

### [środowisko pracy Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl")

* **Mod/Sketcher/RadiusDiameterConstraintDisplayAngleRandomness** *(float)*: Ustawia losowość kąta na powyższej wartości. Wartość to zakres losowego kąta, wyśrodkowany na kącie bazowym. Domyślnie jest to `0°`.
* **Mod/Sketownik/RadiusDiameterConstraintDisplayBaseAngle** *(float)*: Ustawia kąt *(od poziomu)* używany do wyświetlania wiązań promienia/średnicy w Szkicowniku w czasie tworzenia. Domyślnie `15°` *(jeśli nie ustawiono wartości)*.
* **Mod/Sketcher/RoundRectangleSuggConstraints** *(boolean)*: Ustaw na wartość `FAŁSZ`, aby wyłączyć dodawanie dwóch dodatkowych punktów konstrukcyjnych podczas tworzenia zaokrąglonego prostokąta. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

#### Kolory etykiet wiązań

Etykieta w Szkicowniku, która wyświetla aktualny stan wiązań (np. " Nie w pełni wiązany", " W pełni wiązany" itd.) jest stylizowana dla każdego stanu za pomocą arkusza stylów Qt lub preferencji użytkownika. Preferencje użytkownika mają pierwszeństwo, jeśli zostały ustawione *(w **Mod/Szkicownik/Ogólne**)*:

* Kolor komunikatu **Pustego szkicu** - domyślnie czarny z 50% kryciem.
* Kolor komunikatu **Nie w pełni związany** - domyślnie czarny.
* Kolor komunikatu **Nieprawidłowo sformułowane wiązanie** - domyślnie czerwony.
* Kolor komunikatu **Wiązanie konfliktowe** - domyślnie czerwony.
* Kolor komunikatu **Wiązanie nadmiarowe** - domyślnie czerwony.
* Kolor komunikatu **Wiązanie częściowo nadmiarowe** - domyślnie królewski niebieski.
* Kolor komunikatu **Błąd solwera** - domyślnie czerwony.
* Kolor komunikatu **Związany w pełni** - domyślnie zielony.

### [środowisko pracy Start](/Start_Workbench/pl "Start Workbench/pl")

Środowisko pracy Start nie jest już dołączane po wersji 0.21.

* **Mod/Start/DefaultImportXXX** *(string)*: Gdzie XXX to rozszerzenie pliku pisane małymi literami. Na przykład DefaultImportifc dla plików .IFC. Umożliwia ustawienie domyślnego modułu importu, który będzie używany po kliknięciu ikony na stronie startowej, gdy dostępnych jest kilka importerów. Na przykład ustawienie DefaultImportifc = ifc\_import spowoduje użycie importera NativeIFC, jeśli jest dostępny. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
* **Mod/Start/TimeFormat** *(string)*: Ciąg formatu czasu, taki jak `%m/%d/%Y %H:%M:%S` używany dla daty w podpowiedzi wyświetlanej po najechaniu kursorem na element na stronie startowej.

### [Moduł pomocy](/Help_Module/pl "Help Module/pl")

* **Mod/Help/UseWebModule** (boolean): Pozwala wymusić użycie modułu Web do otwierania zakładek MDI *(Multiple Document Interface)*. Może to być przydatne do obejścia problemów QWebEngine w niektórych wersjach Qt5. Domyślnie `Fałsz`. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=Fine-tuning/pl&oldid=1565128>"