---
title: Środowisko pracy BIM
---

:::caution
W wersji 1.0 środowiska robocze BIM, Native-IFC iArchitekturazostały połączone w zintegrowane środowisko pracy BIM.Ta strona została zaktualizowana dla tej wersji.
:::
![](/images/Workbench_BIM.svg)

Ikonka FreeCAD dla zewnętrznego Środowiska pracy BIM

## Wprowadzenie

Środowisko pracy ![](/images/Workbench_Arch.svg) [Architektura](/Arch_Workbench/pl "Arch Workbench/pl") zapewnia nowoczesny przepływ pracy dla FreeCAD [Building **B**uilding **I**nformation **M**odelling](https://en.wikipedia.org/wiki/Building_information_modeling) _(BIM)_, z obsługą funkcji takich jak w pełni parametryczne obiekty architektoniczne, takie jak ściany, belki, dachy, okna, schody, rury i meble. Obsługuje pliki [**I**ndustry **F**oundation **C**lasses](/Arch_IFC/pl "Arch IFC/pl") _(IFC)_ oraz tworzenie planów pięter 2D w połączeniu z środowiskiem pracy ![](/images/Workbench_TechDraw.svg) [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl").

Środowisko pracy BIM importuje wszystkie narzędzia środowiska ![](/images/Workbench_Draft.svg) [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), ponieważ używa obiektów 2D do budowy swoich przestrzennych obiektów architektonicznych. Niemniej jednak może używać kształtów brył utworzonych w innych środowiskach pracy, takich jak ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl") i ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").

Zobacz [Przewodnik migracji FreeCAD BIM](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide) aby uzyskać szybki przegląd, jeśli jesteś już użytkownikiem innej aplikacji BIM.

Twórcy środowisk Rysunek Roboczy i BIM współpracują również z większą [społecznością OSArch](https://osarch.org), mając na uwadze ostateczny cel, jakim jest poprawa projektowania budynków przy użyciu całkowicie wolnego oprogramowania.

![](/images/BIM_workbench_presentation.png)

## Rozpoczęcie pracy

![](/images/BIM_welcome_screen.png)

Przy pierwszym uruchomieniu środowiska pracy BIM wyświetlane jest okno powitalne, który umożliwia szybki przegląd działania środowiska pracy i pozwala użytkownikowi na rozpoczęcie [Poradnika: Obsługa BIM](/BIM_ingame_tutorial/pl "BIM ingame tutorial/pl"). Okno powitalne jest również dostępne z menu **pomoc**. Gdy ekran powitalny zostanie zamknięty przez kliknięcie OK, pojawi się okno dialogowe [Konfiguracja środowiska BIM](/BIM_Setup/pl "BIM Setup/pl"), które pozwala użytkownikowi na szybkie ustawienie niektórych z najczęściej używanych preferencji programu FreeCAD, związanych z BIM bez potrzeby przeglądania pełnych [stron preferencji FreeCAD](/Preferences_Editor/pl "Preferences Editor/pl").

Narzędzie [Konfiguracja środowiska](/BIM_Setup/pl "BIM Setup/pl") pozwala na szybką konfigurację projektu BIM poprzez wypełnienie kilku podstawowych informacji o projekcie. Następnie można, na przykład, użyć różnych narzędzi kreślarskich 2D do szkicowania wytycznych i linii bazowych, a następnie użyć różnych narzędzi do modelowania 3D, aby automatycznie zbudować z nich obiekty 3D BIM. Na przykład linia może stać się ścianą, wystarczy ją wybrać i nacisnąć przycisk [Ściana](/Arch_Wall/pl "Arch Wall/pl").

Powszechne elementy budowlane, takie jak [ściany](/Arch_Wall/pl "Arch Wall/pl") lub [kolumny](/BIM_Column/pl "BIM Column/pl") można łatwo tworzyć wciskając odpowiedni przycisk z paska narzędzi i klikając punkty w widoku 3D. Mogą one być przesuwane, obracane i edytowane po utworzeniu. Większość elementów BIM jest tworzonych na bieżącej [płaszczyźnie roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl"), więc typowe podejście uwzględnia umieszczenie najpierw płaszczyzny roboczej a następnie utworzenie elementu BIM. Więcej złożonych elementów można tworzyć rysując najpierw elementy 2D a następnie korzystając z jednego z odpowiednich narzędzi BIM aby przekształcić je w pożądane elementy.

Elementy projektów budowlanych mogą być organizowane przy pomocy [terenów](/Arch_Site/pl "Arch Site/pl"), [budynków](/Arch_Building/pl "Arch Building/pl") i [poziomów](/Arch_BuildingPart/pl "Arch BuildingPart/pl"), aby odtworzyć to, co jest zwykle robione w innych programach BIM. We FreeCAD jednak te struktury nie są obowiązkowe i masz wolność organizowania elementów modelu tak jak uważasz, np. używając [grup](/Std_Group/pl "Std Group/pl").

Rysunki 2D można generować z modelu aby przedstawić widok planu, sekcji lub elewacji. Aby generować takie rysunki, [płaszczyzny przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl") są umieszczane w modelu, aby wskazać gdzie powinien on być przecięty lub skąd oglądany. Gdy płaszczyzny przekroju są na miejscu, możliwe są dwa podejścia:

1. Utwórz rzutowane widoki w dokumencie przy pomocy [widoków kształtów](/Draft_Shape2DView/pl "Draft Shape2DView/pl"), następnie dodaj wszystkie niezbędne adnotacje, takie jak teksty i wymiary a potem umieść to wszystko na stronie. To zalecany sposób, ponieważ oferuje więcej swobody.
2. Utwórz widok na stronie bezpośrednio z płaszczyzny przekroju. Następnie wszystkie niezbędne adnotacje 2D muszą albo być dodane do tej płaszczyzny przekroju albo wykonane bezpośrednio na stronie. To mniej swobodna opcja.

Wreszcie, plany ilościowe można tworzyć przy pomocy narzędzia [Obmiar](/Arch_Schedule/pl "Arch Schedule/pl").

Jeśli jesteś przyzwyczajony do innej aplikacji BIM, sprawdź naszą [tabela zgodności zastosowań BIM](/BIM_application_compatibility_table/pl "BIM application compatibility table/pl"), aby uzyskać swoje oceny podczas rozpoczynania pracy z FreeCAD.

![](/images/BIM_tutorial_screenshot.png)

Samouczek [Obsługa BIM](/BIM_ingame_tutorial/pl "BIM ingame tutorial/pl") jest łatwym sposobem na szybkie rozpoczęcie pracy ze środowiskiem BIM.

## Przybory

Środowisko pracy BIM gromadzi narzędzia z kilku innych środowisk pracy FreeCAD, głównie [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") i [Część](/Part_Workbench/pl "Part Workbench/pl"), z grubsza zreorganizowane w logiczne kategorie.

Dodatkowo, jeżeli są zainstalowane [dodatki](/External_workbenches/pl "External workbenches/pl"), narzędzia ze środowiska [Zbrojenie](/Reinforcement_Workbench/pl "Reinforcement Workbench/pl") _(dodatkowe narzędzia do prętów zbrojeniowych)_, [Elementy złączne](/Fasteners_Workbench/pl "Fasteners Workbench/pl") _(śruby i wkręty)_, [Flamingo / Dodo](/Flamingo_Workbench/pl "Flamingo Workbench/pl") _(narzędzia do konstrukcji stalowych i rurociągów)_ oraz [Biblioteka podzespołów](/Parts_Library_Workbench/pl "Parts Library Workbench/pl") są automatycznie dołączane do środowiska BIM.

Środowisko pracy BIM dodaje również serię pozycji w _pasku statusu_ programu FreeCAD, oraz kilka pozycji _menu kontekstowego_, dostępnych po kliknięciu prawym przyciskiem myszy w widoku 3D lub w widoku drzewa.

### Rysunki 2D

Obiekty 2D są powszechnie używane jako pomoce kreślarskie, lub do rysowania linii bazowych i profili, na których można budować obiekty BIM. Mogą być również używane do kreślenia symboli i adnotacji w modelu. Oprócz szkiców, które używają swojego własnego układu współrzędnych, obiekty 2D będą rysowane na bieżącej [płaszczyżnie roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").

- ![](/images/BIM_Sketch.svg) [Szkic](/BIM_Sketch/pl "BIM Sketch/pl"): Tworzy nowy szkic i przechodzi do trybu edycji szkicu. Szkice są zaawansowanymi obiektami 2D z obsługą wiązań.

- ![](/images/Draft_Line.svg) [Linia](/Draft_Line/pl "Draft Line/pl"): tworzy linię prostą.

- ![](/images/Draft_Wire.svg) [Polilinia](/Draft_Wire/pl "Draft Wire/pl"): tworzy polilinię, czyli sekwencję kilku połączonych segmentów linii.

- ![](/images/Draft_Circle.svg) [Okrąg](/Draft_Circle/pl "Draft Circle/pl"): tworzy okrąg na podstawie środka i promienia.

- ![](/images/Draft_Arc.svg) [Łuk](/Draft_Arc/pl "Draft Arc/pl"): tworzy łuk kołowy z punktu środka, promienia, kąta początkowego i kąta rozwarcia.

- ![](/images/Draft_Arc_3Points.svg) [Łuk przez trzy punkty](/Draft_Arc_3Points/pl "Draft Arc 3Points/pl"): tworzy łuk okręgu z trzech punktów, które definiują jego przebieg.

- ![](/images/Draft_Fillet.svg) [Zaokrąglenie](/Draft_Fillet/pl "Draft Fillet/pl"): tworzy zaokrąglenie, zaokrąglony narożnik, lub fazę, prostą krawędź, pomiędzy dwoma [liniami](/Draft_Line/pl "Draft Line/pl").

- ![](/images/Draft_Ellipse.svg) [Ellipsa](/Draft_Ellipse/pl "Draft Ellipse/pl"): tworzy elipsę z dwóch punktów definiujących prostokąt, w którym elipsa będzie wpisana.

- ![](/images/Draft_Polygon.svg) [Wielokąt](/Draft_Polygon/pl "Draft Polygon/pl"): tworzy wielokąt foremny o zadanym punkcie środkowym i promieniu.

- ![](/images/Draft_Rectangle.svg) [Prostokąt](/Draft_Rectangle/pl "Draft Rectangle/pl"): tworzy prostokąt z dwóch punktów.

- ![](/images/Draft_BSpline.svg) [Krzywa złożona](/Draft_BSpline/pl "Draft BSpline/pl"): tworzy krzywą złożoną z kilku punktów.

- ![](/images/Draft_BezCurve.svg) [Krzywa Bezier'a](/Draft_BezCurve/pl "Draft BezCurve/pl"): tworzy krzywą Béziera z kilku punktów.

- ![](/images/Draft_CubicBezCurve.svg) [Sześcienna krzywa Beziera](/Draft_CubicBezCurve/pl "Draft CubicBezCurve/pl"): tworzy krzywą Béziera trzeciego stopnia.

- ![](/images/Draft_Point.svg) [Punkt](/Draft_Point/pl "Draft Point/pl"): tworzy zwykły punkt.

### 3D / BIM

Obiekty 3D i BIM są elementami świata rzeczywistego, które składają się na Twój projekt BIM.

- ![](/images/BIM_Project.svg) [Projekt](/BIM_Project/pl "BIM Project/pl"): Tworzy projekt IFC zawierający wybrane obiekty.

- ![](/images/Arch_Site.svg) [Teren](/Arch_Site/pl "Arch Site/pl"): Tworzy teren z uwzględnieniem wybranych obiektów.

- ![](/images/Arch_Building.svg) [Budynek](/Arch_Building/pl "Arch Building/pl"): Tworzy budynek wraz z wybranymi obiektami.

- ![](/images/Arch_Floor.svg) [Piętro](/Arch_Floor/pl "Arch Floor/pl"): Tworzy piętro obejmujące wybrane obiekty.

- ![](/images/Arch_Space.svg) [Kubatura](/Arch_Space/pl "Arch Space/pl"): Tworzy obiekt kubatury.

- ![](/images/Arch_Wall.svg) [Ściana](/Arch_Wall/pl "Arch Wall/pl"): Tworzy ścianę od podstaw lub używając wybranego obiektu jako podstawy.

- ![](/images/Arch_CurtainWall.svg) [Ściana kurtynowa](/Arch_CurtainWall/pl "Arch CurtainWall/pl"): Tworzy ścianę kurtynową od podstaw lub używając wybranego obiektu jako bazy.

- ![](/images/BIM_Column.svg) [Słup](/BIM_Column/pl "BIM Column/pl"): Tworzy pionowy element [konstrukcji](/Arch_Structure/pl "Arch Structure/pl") w danym punkcie, opcjonalnie używając wybranego obiektu jako profilu.

- ![](/images/BIM_Beam.svg) [Belka](/BIM_Beam/pl "BIM Beam/pl"): Tworzy poziomy element [konstrukcji](/Arch_Structure/pl "Arch Structure/pl") pomiędzy dwoma punktami, opcjonalnie używając wybranego obiektu jako profilu.

- ![](/images/BIM_Slab.svg) [Płyta](/BIM_Slab/pl "BIM Slab/pl"): Tworzy płaski element [konstrukcji](/Arch_Structure/pl "Arch Structure/pl") poprzez wyciągnięcie wybranego płaskiego obiektu.

- ![](/images/BIM_Door.svg) [Drzwi](/BIM_Door/pl "BIM Door/pl"): Tworzy obiekt [Okno](/Arch_Window/pl "Arch Window/pl") przy użyciu ustawień wstępnych drzwi.

- ![](/images/Arch_Window.svg) [Okno](/Arch_Window/pl "Arch Window/pl"): Tworzy okno od podstaw lub używając wybranego obiektu jako bazy.

- ![](/images/Arch_Pipe.svg) [Rura](/Arch_Pipe/pl "Arch Pipe/pl"): Tworzy rurę.

- ![](/images/Arch_PipeConnector.svg) [Kształtka](/Arch_PipeConnector/pl "Arch PipeConnector/pl"): Tworzy połączenie kolankiem lub połączenie typu trójnik między dwoma lub trzema wybranymi rurami.

- ![](/images/Arch_Stairs.svg) [Schody](/Arch_Stairs/pl "Arch Stairs/pl"): Tworzy obiekt schodów.

- ![](/images/Arch_Roof.svg) [Dach](/Arch_Roof/pl "Arch Roof/pl"): Tworzy spadzisty dach z wybranych linii łamanych.

- ![](/images/Arch_Panel.svg) [Panel](/Arch_Panel/pl "Arch Panel/pl"): Tworzy obiekt panelu z wybranego obiektu 2D.

- ![](/images/Arch_Frame.svg) [Ramy](/Arch_Frame/pl "Arch Frame/pl"): Tworzy obiekt ramy na podstawie wybranego układu.

- ![](/images/Arch_Fence.svg) [Ogrodzenie](/Arch_Fence/pl "Arch Fence/pl"): Tworzy obiekt ogrodzenia z wybranego słupka i ścieżki.

- ![](/images/Arch_Truss.svg) [Kratownica](/Arch_Truss/pl "Arch Truss/pl"): Tworzy kratownicę na podstawie wybranej linii lub od podstaw.

- ![](/images/Arch_Equipment.svg) [Wyposażenie](/Arch_Equipment/pl "Arch Equipment/pl"): Tworzy obiekt wyposażenia lub mebli.

- Narzędzia zbrojenia:

: Narzędzia te, z wyjątkiem pierwszego, są dostępne tylko po zainstalowaniu środowiska pracy [Zbrojenie](/Reinforcement_Workbench/pl "Reinforcement Workbench/pl").

- ![](/images/Arch_Rebar.svg) [Pręt zbrojeniowy](/Arch_Rebar/pl "Arch Rebar/pl"): Tworzy niestandardowy pręt zbrojeniowy w wybranym elemencie konstrukcyjnym za pomocą szkicu.

- ![](/images/Reinforcement_StraightRebar.svg) [Pręty zbrojeniowe proste](/Reinforcement_StraightRebar/pl "Reinforcement StraightRebar/pl"): Tworzy prosty pręt zbrojeniowy w wybranym elemencie konstrukcyjnym.

- ![](/images/Reinforcement_UShapeRebar.svg) [Pręty zbrojeniowe typu U](/Reinforcement_UShapeRebar/pl "Reinforcement UShapeRebar/pl"): Tworzy pręt zbrojeniowy w kształcie litery U w wybranym elemencie konstrukcyjnym.

- ![](/images/Reinforcement_LShapeRebar.svg) [Pręty zbrojeniowe typu L](/Reinforcement_LShapeRebar/pl "Reinforcement LShapeRebar/pl"): Tworzy pręt zbrojeniowy w kształcie litery L w wybranym elemencie konstrukcyjnym.

- ![](/images/Reinforcement_StirrupRebar.svg) [Strzemiona zbrojeniowe](/Reinforcement_StirrupRebar/pl "Reinforcement StirrupRebar/pl"): Tworzy pręt zbrojeniowy strzemion w wybranym elemencie konstrukcyjnym.

- ![](/images/Reinforcement_BentShapeRebar.svg) [Pręty zbrojeniowe wygięte](/Reinforcement_BentShapeRebar/pl "Reinforcement BentShapeRebar/pl"): Tworzy pręt zbrojeniowy typu wygiętego w wybranym elemencie konstrukcyjnym.

- ![](/images/Reinforcement_HelicalRebar.svg) [Pręty zbrojeniowe spiralne](/Reinforcement_HelicalRebar/pl "Reinforcement HelicalRebar/pl"): Tworzy spiralny pręt zbrojeniowy w wybranym elemencie konstrukcyjnym.

- ![](/images/Reinforcement_ColumnRebars.svg) [Zbrojenie słupa](/Reinforcement_ColumnRebars/pl "Reinforcement ColumnRebars/pl"): Tworzy pręty zbrojeniowe w wybranym elemencie konstrukcyjnym słupa prostokątnego.

- ![](/images/Reinforcement_BeamRebars.svg) [Zbrojenie belki](/Reinforcement_BeamRebars/pl "Reinforcement BeamRebars/pl"): Tworzy pręty zbrojeniowe w wybranym elemencie konstrukcyjnym belki.

- ![](/images/Reinforcement_SlabRebars.svg) [Zbrojenie płyty](/Reinforcement_SlabRebars/pl "Reinforcement SlabRebars/pl"): Tworzy pręty zbrojeniowe w wybranym elemencie konstrukcyjnym płyty.

- ![](/images/Arch_Rebar_Footing_Reinforcement.svg) [Zbrojenie stóp fundamentowych](/Reinforcement_FootingRebars/pl "Reinforcement FootingRebars/pl"): Tworzy pręty zbrojeniowe wewnątrz obiektu konstrukcyjnego ławy fundamentowej.

* Ogólne narzędzia 3D:

: Narzędzia te tworzą ogólne obiekty 3D, które można przekształcić lub wykorzystać w komponentach BIM.

- ![](/images/Arch_Profile.svg) [Profil](/Arch_Profile/pl "Arch Profile/pl"): Tworzy parametryczny profil 2D.

- ![](/images/BIM_Box.svg) [Prostopadłościan](/BIM_Box "BIM Box"): Tworzy prostopadłościan poprzez graficzne określenie jego wymiarów.

- ![](/images/Part_Builder.svg) [Konstruktor kształtu ...](/Part_Builder/pl "Part Builder/pl"): Tworzy bardziej złożone kształty z różnych pierwotnych elementów geometrycznych.

: \* Polecenie ![](/images/Draft_Facebinder.svg) [Łącznik kształtów](/Draft_Facebinder/pl "Draft Facebinder/pl"): tworzy obiekt powierzchni z wybranych ścian.

- ![](/images/BIM_Library.svg) [Biblioteka obiektów](/BIM_Library/pl "BIM Library/pl"): Wstawia obiekt wyposażenia lub mebla. Wymaga dodatku [Środowisko pracy biblioteka podzespołów](/index.php?title=Parts_Library/pl&action=edit&redlink=1 "Parts Library/pl (page does not exist)").

- ![](/images/Arch_Component.svg) [Komponent](/Arch_Component/pl "Arch Component/pl"): Tworzy nieparametryczny komponent architektury.

- ![](/images/Arch_Reference.svg) [Odniesienie](/Arch_Reference/pl "Arch Reference/pl"): Łączy obiekty z innego pliku FreeCAD do bieżącego dokumentu.

### Adnotacje

Adnotacje są wizualnymi obiektami pomocniczymi, które mogą być umieszczone wewnątrz Twojego modelu. Mogą one być użyte do eksportu modelu bezpośrednio do formatu 2D jak [DXF](/Draft_DXF/pl "Draft DXF/pl"), lub ponownie użyte podczas tworzenia widoków 2D Twojego modelu za pomocą środowiska [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl").

- ![](/images/BIM_Text.svg) [Tekst](/BIM_Text/pl "BIM Text/pl"): Tworzy tekst 2D w dokumencie lub na stronie środowiska Rysunek Techniczny.

- ![](/images/Draft_ShapeString.svg) [Kształt z tekstu](/Draft_ShapeString/pl "Draft ShapeString/pl"): Tworzy kształt złożony, który reprezentuje ciąg tekstowy.

- ![](/images/BIM_DimensionAligned.svg) [Wymiar dopasowany](/BIM_DimensionAligned/pl "BIM DimensionAligned/pl"): Tworzy wymiar wyrównany z dwoma punktami lub wybraną krawędzią.

- ![](/images/BIM_DimensionHorizontal.svg) [Wymiar poziomy](/BIM_DimensionHorizontal/pl "BIM DimensionHorizontal/pl"): Tworzy poziomy wymiar między dwoma punktami lub ze wskazanej krawędzi.

- ![](/images/BIM_DimensionVertical.svg) [Wymiar pionowy](/BIM_DimensionVertical/pl "BIM DimensionVertical/pl"): Tworzy pionowy wymiar między dwoma punktami lub z wybranej krawędzi.

- ![](/images/BIM_Leader.svg) [Linia odniesienia](/BIM_Leader/pl "BIM Leader/pl"): Tworzy polilinię 2-segmentową ze strzałką na końcu, do użycia jako linia odniesienia w połączeniu z [tekstem](/BIM_Text/pl "BIM Text/pl").

- ![](/images/Draft_Label.svg) [Etykieta](/Draft_Label/pl "Draft Label/pl"): tworzy tekst wielowierszowy z dwu-segmentową linią wiodącą i strzałką.

- ![](/images/Arch_Axis.svg) [Osie](/Arch_Axis/pl "Arch Axis/pl"): Dodaje zestaw osi jednokierunkowych.

- ![](/images/Arch_AxisSystem.svg) [Układ osi](/Arch_AxisSystem/pl "Arch AxisSystem/pl"): Dodaje układ osi składający się z kilku osi.

- ![](/images/Arch_Grid.svg) [Siatka](/Arch_Grid/pl "Arch Grid/pl"): Dodaje obiekt przypominający siatkę.

- ![](/images/Arch_SectionPlane.svg) [Płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl"): Dodaje obiekt płaszczyzny przekroju.

- ![](/images/Draft_Hatch.svg) [Kreskowanie](/Draft_Hatch/pl "Draft Hatch/pl"): Tworzy kreskowania na płaskich powierzchniach wybranego obiektu.

- ![](/images/BIM_TDPage.svg) [Strona](/BIM_TDPage/pl "BIM TDPage/pl"): Tworzy [stronę środowiska Rysunek Techniczny](/TechDraw_PageTemplate/pl "TechDraw PageTemplate/pl") z pliku szablonu SVG.

- ![](/images/BIM_TDView.svg) [Widok](/BIM_TDView/pl "BIM TDView/pl"): Tworzy widok wybranego obiektu/obiektów, takich jak [Płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl") lub Grupa zawierająca różne elementy widoku 2D.

- ![](/images/BIM_Shape2DView.svg) [Widok oparty o kształt](/BIM_Shape2DView/pl "BIM Shape2DView/pl"): Tworzy widok rzutowany 2D z wybranego obiektu, takiego jak [Płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl") lub [Poziom](/Arch_BuildingPart/pl "Arch BuildingPart/pl").

### Przyciąganie

To menu zawiera narzędzia [Przyciągania](/Draft_Snap/pl "Draft Snap/pl") środowiska Rysunek Roboczy, a także następujące narzędzia:

- ![](/images/BIM_SetWPTop.svg) [Płaszczyzna robocza z góry](/BIM_SetWPTop/pl "BIM SetWPTop/pl"): Ustawia płaszczyznę roboczą na globalnej płaszczyźnie XY (podłoże).

- ![](/images/BIM_SetWPFront.svg) [Płaszczyzna robocza z przodu](/BIM_SetWPFront/pl "BIM SetWPFront/pl"): Ustawia płaszczyznę roboczą na globalnej płaszczyźnie XZ (przód).

- ![](/images/BIM_SetWPSide.svg) [Płaszczyzna robocza z boku](/BIM_SetWPSide/pl "BIM SetWPSide/pl"): Ustawia płaszczyznę roboczą na globalnej płaszczyźnie YZ (bok).

### Modyfikacja

- ![](/images/Draft_Move.svg) [Przesuń](/Draft_Move/pl "Draft Move/pl"): przesuwa lub kopiuje wybrane obiekty z jednego punktu do drugiego.

- ![](/images/BIM_Copy.svg) [Kopiuj](/BIM_Copy/pl "BIM Copy/pl"): Kopiuje wybrane obiekty z jednego punktu do drugiego.

- ![](/images/Draft_Rotate.svg) [Obróć](/Draft_Rotate/pl "Draft Rotate/pl"): obraca lub kopiuje wybrane obiekty wokół punktu środka o zadany kąt.

- ![](/images/BIM_Clone.svg) [Klon](/BIM_Clone/pl "BIM Clone/pl"): Klonuje wybrane obiekty.

- ![](/images/BIM_SimpleCopy.svg) [Utwórz prostą kopię](/BIM_SimpleCopy/pl "BIM SimpleCopy/pl"): Tworzy nieparametryczną kopię wybranego obiektu. Jest to to samo narzędzie co [Utwórz prostą kopię](/Part_SimpleCopy/pl "Part SimpleCopy/pl") środowiska Część.

- ![](/images/BIM_Compound.svg) [Utwórz kształt złożony](/BIM_Compound/pl "BIM Compound/pl"): Tworzy obiekt złożony z wybranych obiektów. Jest to to samo narzędzie co [Utwórz kształt złożony](/Part_Compound/pl "Part Compound/pl") środowiska Część.

- ![](/images/Draft_Offset.svg) [Odsunięcie](/Draft_Offset/pl "Draft Offset/pl"): Odsuwa każdy segment wybranego obiektu na określoną odległość lub tworzy odsuniętą kopię wybranego obiektu.

- ![](/images/BIM_Offset2D.svg) [Odsunięcie 2D ...](/BIM_Offset2D/pl "BIM Offset2D/pl"): Konstruuje równoległą linię w danej odległości od oryginału lub powiększa/zwęża płaską powierzchnię (wersja parametryczna). Jest to to samo narzędzie co [Odsunięcie 2D ...](/Part_Offset2D/pl "Part Offset2D/pl") środowiska Część.

- ![](/images/Draft_Trimex.svg) [Przytnij](/Draft_Trimex/pl "Draft Trimex/pl"): Przycina lub wydłuża wybrany obiekt.

- ![](/images/Draft_Join.svg) [Połącz](/Draft_Join/pl "Draft Join/pl"): Łączy [linie](/Draft_Line/pl "Draft Line/pl") oraz [polilinie](/Draft_Wire/pl "Draft Wire/pl") w pojedynczą polilinię.

- ![](/images/Draft_Split.svg) [Rozdziel](/Draft_Split/pl "Draft Split/pl"): Dzieli [Linie](/Draft_Line/pl "Draft Line/pl") lub [polilinie](/Draft_Wire/pl "Draft Wire/pl") w określonym punkcie lub krawędzi.

- ![](/images/Draft_Scale.svg) [Skaluj](/Draft_Scale/pl "Draft Scale/pl"): Skaluje lub kopiuje wybrane obiekty wokół punktu bazowego.

- ![](/images/Draft_Stretch.svg) [Rozciągnij](/Draft_Stretch/pl "Draft Stretch/pl"): Rozciąga obiekty poprzez przesuwanie wybranych punktów.

- ![](/images/Draft_Draft2Sketch.svg) [Rysunek roboczy do szkicu](/Draft_Draft2Sketch/pl "Draft Draft2Sketch/pl"): Konwertuje obiekty rysunku roboczego na [szkic](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl") i odwrotnie.

- ![](/images/Draft_Upgrade.svg) [Ulepsz kształt](/Draft_Upgrade/pl "Draft Upgrade/pl"): Powoduje zwiększenie stopnia zaawansowania wybranych obiektów.

- ![](/images/Draft_Downgrade.svg) [Rozbij obiekt na elementy](/Draft_Downgrade/pl "Draft Downgrade/pl"): Powoduje redukcję stopnia zaawansowania wybranych obiektów.

- ![](/images/Arch_Add.svg) [Dodaj komponent](/Arch_Add/pl "Arch Add/pl"): Dodaje obiekty do komponentu.

- ![](/images/Arch_Remove.svg) [Usuń komponent](/Arch_Remove/pl "Arch Remove/pl"): Odejmuje lub usuwa obiekty z komponentu.

- ![](/images/Draft_OrthoArray.svg) [Szyk](/Draft_OrthoArray/pl "Draft OrthoArray/pl"): Tworzy szyk ortogonalny z wybranego obiektu. Opcjonalnie może utworzyć również szyk [powiązań](/App_Link/pl "App Link/pl").

- ![](/images/Draft_PathArray.svg) [Szyk po ścieżce](/Draft_PathArray/pl "Draft PathArray/pl"): Tworzy szyk z wybranego obiektu poprzez umieszczenie kopii wzdłuż ścieżki.

- ![](/images/Draft_CircularArray.svg) [Szyk kołowy](/Draft_CircularArray/pl "Draft CircularArray/pl"): Tworzy szyk z wybranego obiektu poprzez umieszczenie kopii wzdłuż obwodu okręgu. Opcjonalnie może utworzyć szyk [powiązań](/App_Link/pl "App Link/pl").

- ![](/images/Draft_PointArray.svg) [Szyk z punktów](/Draft_PointArray/pl "Draft PointArray/pl"): Tworzy szyk z wybranego obiektu poprzez umieszczenie kopii w punktach ze zbioru punktów.

- ![](/images/Arch_CutPlane.svg) [Przetnij płaszczyzną](/Arch_CutPlane/pl "Arch CutPlane/pl"): Przycina obiekt według płaszczyzny.

- ![](/images/Draft_Mirror.svg) [Odbicie lustrzane](/Draft_Mirror/pl "Draft Mirror/pl"): Tworzy kopie w odbiciu lustrzanym z wybranych obiektów.

- ![](/images/BIM_Extrude.svg) [Wyciągnięcie ...](/BIM_Extrude/pl "BIM Extrude/pl"): Wyciąga płaskie powierzchnie obiektu. Jest to to samo narzędzie co [Wyciągnięcie](/Part_Extrude/pl "Part Extrude/pl") środowiska Część.

- ![](/images/BIM_Cut.svg) [Różnica](/BIM_Cut/pl "BIM Cut/pl"): Odejmuje jeden obiekt od drugiego. Jest to to samo narzędzie co [Wytnij](/Part_Cut/pl "Part Cut/pl") środowiska Część.

```
![](/images/1/19/BIM_Fuse.svg) Połączenie: Łączy dwa obiekty. Jest to to samo narzędzie co połącz środowiska Część.

```

- ![](/images/BIM_Common.svg) [Przecięcie](/BIM_Common/pl "BIM Common/pl"): Wyodrębnia część wspólną dwóch obiektów. Jest to to samo narzędzie co [Przecięcie](/Part_Common/pl "Part Common/pl") środowiska Część.

### Zarządzanie

- ![](/images/BIM_Setup.svg) [Ustawienia BIM ...](/BIM_Setup/pl "BIM Setup/pl"): Konfiguruje niektóre z preferencji FreeCAD najczęściej używanych w środowisku pracy BIM.

- ![](/images/BIM_Views.svg) [Menadżer widoków](/BIM_Views/pl "BIM Views/pl"): Zarządzanie różnymi widokami i poziomami projektu.

- ![](/images/BIM_ProjectManager.svg) [Zarządzaj projektem ...](/BIM_ProjectManager/pl "BIM ProjectManager/pl"): Umożliwia tworzenie podstawowych obiektów, takich jak [teren](/Arch_Site/pl "Arch Site/pl"), [budynek](/Arch_Building/pl "Arch Building/pl") i [osie](/Arch_Axis/pl "Arch Axis/pl") poprzez wypełnienie podstawowych informacji o projekcie.

- ![](/images/BIM_Windows.svg) [Zarządzaj drzwiami i oknami ...](/BIM_Windows/pl "BIM Windows/pl"): Zarządzanie drzwiami i oknami w projekcie.

- ![](/images/BIM_IfcElements.svg) [Zarządzaj elementami IFC ...](/BIM_IfcElements/pl "BIM IfcElements/pl"): Zarządzaj sposobem eksportowania różnych elementów projektu do IFC.

- ![](/images/BIM_IfcQuantities.svg) [Edytuj ilości IFC ...](/BIM_IfcQuantities/pl "BIM IfcQuantities/pl"): Zarządzanie sposobem eksportowania ilości obiektów do standardu IFC.

- ![](/images/BIM_IfcProperties.svg) [Edytuj właściwości IFC ...](/BIM_IfcProperties/pl "BIM IfcProperties/pl"): Zarządzaj właściwościami IFC dołączonymi do każdego z obiektów.

- ![](/images/BIM_Classification.svg) [Zarządzaj klasyfikacją ...](/BIM_Classification/pl "BIM Classification/pl"): Zarządzaj sposobem, w jaki obiekty i materiały projektu odnoszą się do systemów klasyfikacji, takich jak [Uniclass](https://en.wikipedia.org/wiki/Uniclass).

- ![](/images/BIM_Layers.svg) [Zarządzaj warstwami ...](/BIM_Layers/pl "BIM Layers/pl"): Zarządzanie warstwami dokumentu.

- ![](/images/BIM_Material.svg) [Materiał](/BIM_Material/pl "BIM Material/pl"): Zarządza [materiałami](/Arch_SetMaterial/pl "Arch SetMaterial/pl") lub [materiałami wielowarstwowymi](/Arch_MultiMaterial/pl "Arch MultiMaterial/pl") wybranych obiektów.

- ![](/images/Arch_Schedule.svg) [Obmiar](/Arch_Schedule/pl "Arch Schedule/pl"): Tworzenie różnych typów obmiaru.

- ![](/images/BIM_Preflight.svg) [Kontrola wstępna ...](/BIM_Preflight/pl "BIM Preflight/pl"): Przed wyeksportowaniem do IFC należy przeprowadzić różne operacje sprawdzające model.

- ![](/images/Draft_AnnotationStyleEditor.svg) [Edytor stylów adnotacji](/Draft_AnnotationStyleEditor/pl "Draft AnnotationStyleEditor/pl"): pozwala zdefiniować style, które wpływają na właściwości wizualne obiektów związanych z adnotacjami.

### Narzędzia

- ![](/images/BIM_TogglePanels.svg) [Przełącz dolne panele](/BIM_TogglePanels/pl "BIM TogglePanels/pl"): Pokazuje lub ukrywa okna wyników (widok raportu i konsola Pythona).

- ![](/images/BIM_Trash.svg) [Przenieś do kosza](/BIM_Trash/pl "BIM Trash/pl"): Przenosi wybrane obiekty do grupy kosz, która jest tworzona w razie potrzeby

- ![](/images/BIM_WPView.svg) [Widok płaszczyzny roboczej](/BIM_WPView/pl "BIM WPView/pl"): Ustawia kamerę na wprost bieżącej płaszczyzny roboczej

- ![](/images/Draft_SelectGroup.svg) [Wybierz grupę](/Draft_SelectGroup/pl "Draft SelectGroup/pl"): Wybiera zawartość [warstwy](/Draft_Layer/pl "Draft Layer/pl"), [Grupy](/Std_Group/pl "Std Group/pl") lub obiektów zbliżone do grupy [Architektury](/Arch_Workbench/pl "Arch Workbench/pl").

- ![](/images/Draft_Slope.svg) [Nachylenie](/Draft_Slope/pl "Draft Slope/pl"): Powoduje nachylenie wybranych [linii](/Draft_Line/pl "Draft Line/pl") lub [polilinii](/Draft_Wire/pl "Draft Wire/pl") poprzez zwiększenie lub zmniejszenie współrzędnej Z, dla wszystkich punktów po pierwszym.

- ![](/images/Draft_WorkingPlaneProxy.svg) [Pośrednia płaszczyzna robocza](/Draft_WorkingPlaneProxy/pl "Draft WorkingPlaneProxy/pl"): Tworzy zastępczą płaszczyznę roboczą, aby zapisać bieżącą [płaszczyznę robocza projektu](/Draft_SelectPlane/pl "Draft SelectPlane/pl").

- ![](/images/Draft_AddConstruction.svg) [Dodaj do grupy konstrukcyjnej](/Draft_AddConstruction/pl "Draft AddConstruction/pl"): Przenosi obiekty do [trybu konstrukcji](/Draft_ToggleConstructionMode/pl "Draft ToggleConstructionMode/pl").

- ![](/images/Arch_SplitMesh.svg) [Podziel siatkę](/Arch_SplitMesh/pl "Arch SplitMesh/pl"): Dzieli wybraną siatkę na osobne elementy.

- ![](/images/Arch_MeshToShape.svg) [Siatka na kształt](/Arch_MeshToShape/pl "Arch MeshToShape/pl"): Przekształca siatkę w kształt, ujednolicając współpłaszczyznowe powierzchnie.

- ![](/images/Arch_SelectNonSolidMeshes.svg) [Zaznacz siatki niebryłowe](/Arch_SelectNonSolidMeshes/pl "Arch SelectNonSolidMeshes/pl"): Wybiera wszystkie siatki typu non-manifold z bieżącego zaznaczenia lub z dokumentu.

- ![](/images/Arch_RemoveShape.svg) [Usuń kształt](/Arch_RemoveShape/pl "Arch RemoveShape/pl"): Zmienia obiekt architektury oparty na kształcie sześciennym w całkowicie parametryczny.

- ![](/images/Arch_CloseHoles.svg) [Zamknij otwory](/Arch_CloseHoles/pl "Arch CloseHoles/pl"): Zamyka otwory w wybranym obiekcie opartym na kształcie.

- ![](/images/Arch_MergeWalls.svg) [Połącz ściany](/Arch_MergeWalls/pl "Arch MergeWalls/pl"): Łączy ściany.

- ![](/images/Arch_Check.svg) [Sprawdź](/Arch_Check/pl "Arch Check/pl"): Sprawdza, czy wybrane obiekty są bryłami i nie zawierają defektów.

- ![](/images/Arch_ToggleIfcBrepFlag.svg) [Przełącz flagę Brep IFC](/Arch_ToggleIfcBrepFlag/pl "Arch ToggleIfcBrepFlag/pl"): Wymusza wyeksportowanie wybranego obiektu jako obiektu [IfcFacetedBrep](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm).

- ![](/images/Arch_ToggleSubs.svg) [Przełącz widoczność elementów podrzędnych](/Arch_ToggleSubs/pl "Arch ToggleSubs/pl"): Pokazuje lub ukrywa elementy podrzędne obiektu architektury.

- ![](/images/Arch_Survey.svg) [Spis wymiarów](/Arch_Survey/pl "Arch Survey/pl"): Włącza lub wyłącza tryb pomiaru.

- ![](/images/BIM_Diff.svg) [Różnice IFC](/BIM_Diff/pl "BIM Diff/pl"): Pokazuje wizualne różnice między dwoma plikami IFC

- ![](/images/BIM_IfcExplorer.svg) [Przeglądarka IFC](/BIM_IfcExplorer/pl "BIM IfcExplorer/pl"): Otwiera okno do eksploracji struktury pliku IFC przed importem

- ![](/images/Arch_IfcSpreadsheet.svg) [Utwórz arkusz IFC...](/Arch_IfcSpreadsheet/pl "Arch IfcSpreadsheet/pl"): To narzędzie tworzy arkusz do przechowywania właściwości IFC obiektu.

- ![](/images/BIM_ImagePlane.svg) [Płaszczyzna rysunku](/index.php?title=BIM_ImagePlane/pl&action=edit&redlink=1 "BIM ImagePlane/pl (page does not exist)"): Wstawia płaszczyznę rysunku do dokumentu.

- ![](/images/BIM_Unclone.svg) [Przekształć z klona](/index.php?title=BIM_Unclone/pl&action=edit&redlink=1 "BIM Unclone/pl (page does not exist)"): Tworzy klon niezależny od oryginalnego obiektu

- ![](/images/BIM_Rewire.svg) [Odtwórz polilinię](/index.php?title=BIM_Rewire/pl&action=edit&redlink=1 "BIM Rewire/pl (page does not exist)"):

- ![](/images/BIM_Glue.svg) [Sklej](/index.php?title=BIM_Glue/pl&action=edit&redlink=1 "BIM Glue/pl (page does not exist)"):

- ![](/images/BIM_Reextrude.svg) [Wyciągnij ponownie](/index.php?title=BIM_Reextrude/pl&action=edit&redlink=1 "BIM Reextrude/pl (page does not exist)"): Odtwarza wyciągnięcie z kształtu, który stracił swoje parametryczne wyciągnięcie poprzez wskazanie ściany bazowej

- Narzędzia panelu:

- ![](/images/Arch_Panel.svg) [Panel](/Arch_Panel/pl "Arch Panel/pl"): Tworzy obiekt panelu z wybranego obiektu 2D.

- ![](/images/Arch_Panel_Cut.svg) [Panelizacja do cięcia](/Arch_Panel_Cut/pl "Arch Panel Cut/pl"): Tworzy widok wycięcia 2D z panelu.

- ![](/images/Arch_Panel_Sheet.svg) [Arkusz panela](/Arch_Panel_Sheet/pl "Arch Panel Sheet/pl"): Tworzy arkusz cięcia 2D zawierający wycięcia paneli lub innych obiektów 2D.

- ![](/images/Arch_Nest.svg) [Zagnieżdżanie](/Arch_Nest/pl "Arch Nest/pl"): Umożliwia zagnieżdżenie kilku płaskich obiektów wewnątrz kształtu kontenera.

- Narzędzia konstrukcyjne:

- ![](/images/Arch_Structure.svg) [Konstrukcja](/Arch_Structure/pl "Arch Structure/pl"): Tworzy element konstrukcyjny od podstaw lub używając wybranego obiektu jako podstawy.

- ![](/images/Arch_StructuralSystem.svg) [Układ konstrukcyjny](/index.php?title=Arch_StructuralSystem/pl&action=edit&redlink=1 "Arch StructuralSystem/pl (page does not exist)"):

- ![](/images/Arch_StructuresFromSelection.svg) [Wiele konstrukcji](/index.php?title=Arch_StructuresFromSelection/pl&action=edit&redlink=1 "Arch StructuresFromSelection/pl (page does not exist)"):

- ![](/images/IFC_Diff.svg) [Różnice IFC ...](/index.php?title=IFC_Diff/pl&action=edit&redlink=1 "IFC Diff/pl (page does not exist)"):

- ![](/images/IFC_Expand.svg) [Rozwiń IFC](/index.php?title=IFC_Expand/pl&action=edit&redlink=1 "IFC Expand/pl (page does not exist)"):

- ![](/images/IFC_MakeProject.svg) [Utwórz projekt IFC](/index.php?title=IFC_MakeProject/pl&action=edit&redlink=1 "IFC MakeProject/pl (page does not exist)"):

- ![](/images/IFC_UpdateIOS.svg) [Aktualizacja IfcOpenShell](/index.php?title=IFC_UpdateIOS/pl&action=edit&redlink=1 "IFC UpdateIOS/pl (page does not exist)"):

- Małe przemieszczenie:

: \* [Przełącz krok](/index.php?title=BIM_Nudge_Switch/pl&action=edit&redlink=1 "BIM Nudge Switch/pl (page does not exist)"):

: \* [Przesuń w górę](/index.php?title=BIM_Nudge_Up/pl&action=edit&redlink=1 "BIM Nudge Up/pl (page does not exist)"):

: \* [Przesuń w dół](/index.php?title=BIM_Nudge_Down/pl&action=edit&redlink=1 "BIM Nudge Down/pl (page does not exist)"):

: \* [Przesuń w lewo](/index.php?title=BIM_Nudge_Left/pl&action=edit&redlink=1 "BIM Nudge Left/pl (page does not exist)"):

: \* [Przesuń w prawo](/index.php?title=BIM_Nudge_Right/pl&action=edit&redlink=1 "BIM Nudge Right/pl (page does not exist)"):

: \* [Przesuń obracając w lewo](/index.php?title=BIM_Nudge_RotateLeft/pl&action=edit&redlink=1 "BIM Nudge RotateLeft/pl (page does not exist)"):

: \* [Przesuń obracając w prawo](/index.php?title=BIM_Nudge_RotateRight/pl&action=edit&redlink=1 "BIM Nudge RotateRight/pl (page does not exist)"):

: \* [Zwiększ krok](/index.php?title=BIM_Nudge_Extend/pl&action=edit&redlink=1 "BIM Nudge Extend/pl (page does not exist)"):

: \* [Zmniejsz krok](/index.php?title=BIM_Nudge_Shrink/pl&action=edit&redlink=1 "BIM Nudge Shrink/pl (page does not exist)"):

### Pasek stanu

Pasek statusu zawiera kilka przycisków, które pozwalają na łatwą zmianę różnych stanów:

- ![](/images/BIM_TogglePanels.svg) [Przełącz panele](/BIM_TogglePanels/pl "BIM TogglePanels/pl"): Pokazuje lub ukrywa [widok raportu](/Report_view "Report view") i [konsolę Pythona](/Python_console "Python console").

- ![](/images/BIM_ToggleViews.svg) Przełącz widoki: Pokazuje lub ukrywa panel [widoków BIM](/BIM_Views/pl "BIM Views/pl").

- ![](/images/BIM_ToggleBackground.svg) Cykliczne tło: Przełącza cyklicznie między gradientem pionowym i promieniowym oraz pojedynczym kolorem tła. Można z tego skorzystać do przełączania między ciemnym tłem do modelowania i białym tłem do rysunków 2D.

- ![](/images/IFC.svg) Blokada IFC: Przełącza między [trybem zablokowanym i odblokowanym IFC](/index.php?title=NativeIFC/pl&action=edit&redlink=1 "NativeIFC/pl (page does not exist)").

## Menu kontekstowe Widoku drzewa

Do opracowania.

## Menu kontekstowe okna widoku 3D

Do opracowania.

### Narzędzia przestarzałe

- ![](/images/Arch_3Views.svg) [Trzy widoki z siatki](/Arch_3Views/pl "Arch 3Views/pl"): Tworzy widoki z góry, przodu i boku z [siatki](/Mesh_Workbench/pl "Mesh Workbench/pl"). Niedostępne w wersja 1.0 i powyżej.

- ![](/images/Arch_BuildingPart.svg) [Część budynku - piętro](/Arch_BuildingPart/pl "Arch BuildingPart/pl"): Tworzy część budynku włączając wybrane obiekty. Niedostępne w wersja 1.0 i powyżej. Użyj narzędzia [Kondygnacja](/Arch_Floor/pl "Arch Floor/pl") zamiast tego.

- ![](/images/Arch_CloneComponent.svg) [Klonuj komponent](/Arch_CloneComponent/pl "Arch CloneComponent/pl"): Tworzy komponenty Arch, które są klonami wybranych obiektów Arch. Niedostępne w wersja 1.0 i powyżej. Użyj narzędzia [Rysunek Roboczy: Klonuj](/Draft_Clone/pl "Draft Clone/pl") zamiast tego.

- ![](/images/Arch_CutLine.svg) [Linie cięcia](/Arch_CutLine/pl "Arch CutLine/pl"): Wycina obiekt zgodnie z linią. Niedostępne w wersja 1.0 i powyżej. Zamiast tego należy użyć [Płaszczyzna cięcia](/Arch_CutPlane/pl "Arch CutPlane/pl").

- ![](/images/Arch_MultiMaterial.svg) [Materiał wielowarstwowy](/Arch_MultiMaterial/pl "Arch MultiMaterial/pl"): Tworzy materiał wielowarstwowy i przypisuje go do wybranych obiektów, jeśli jakiekolwiek są. Niedostępne w wersja 1.0 i powyżej. Użyj [Materiału BIM](/BIM_Material/pl "BIM Material/pl") zamiast tego.

- ![](/images/Arch_Project.svg) [Arch Projekt](/Arch_Project/pl "Arch Project/pl"): Tworzy projekt zawierający wybrane obiekty. Niedostępne w wersja 1.0 i powyżej. Zamiast tego należy użyć [Projekt BIM](/BIM_Project/pl "BIM Project/pl").

- ![](/images/Arch_SetMaterial.svg) [Ustaw materiał](/Arch_SetMaterial/pl "Arch SetMaterial/pl"): Tworzy materiał i przypisuje go do wybranych obiektów, jeśli jakiekolwiek są. Niedostępne w wersja 1.0 i powyżej. Użyj narzędzia [Materiał BIM](/BIM_Material/pl "BIM Material/pl") zamiast tego.

## Ustawienia

- ![](/images/Preferences-bim.svg) [Ustawienia](/BIM_Preferences/pl "BIM Preferences/pl"): Ogólne preferencje dla środowiska pracy BIM.
- [Dostrajanie](/Fine-tuning/pl#środowisko_pracy_BIM "Fine-tuning/pl"): Dodatkowe parametry do dostrajania zachowania BIM.

## Praca z IFC

Środowisko pracy BIM działa natywnie z plikami [Industry Foundation Classes](https://en.wikipedia.org/wiki/Industry_Foundation_Classes) (IFC). Natywność oznacza, że nie ma więcej konwersji między zawartościami IFC a programem FreeCAD: zawartości IFC są bezpośrednio renderowane we FreeCAD i każda zmiana wpływa na nie bezpośrednio. Przeczytaj więcej na stronie [Natywne IFC](/index.php?title=NativeIFC/pl&action=edit&redlink=1 "NativeIFC/pl (page does not exist)").

Jeśli nie planujesz współpracować z innymi użytkownikami i nie masz potrzeby używania IFC, nadal możesz korzystać z narzędzi środowiska pracy BIM i po prostu ignorować wszystko związane z IFC. Nadal możesz wyeksportować swój model do IFC w dowolnej chwili.

Stary importer [Arch IFC](/Arch_IFC/pl "Arch IFC/pl") jest domyślnie wyłączony we FreeCAD, ale nadal dostępny z poziomu Pythona.

Jest też konkretny [Poradnik do Natywnego IFC](/index.php?title=NativeIFC_Tutorial/pl&action=edit&redlink=1 "NativeIFC Tutorial/pl (page does not exist)"), który wyjaśnia te koncepcje bardziej szczegółowo.

## Formaty plików

- [IFC](/Arch_IFC/pl "Arch IFC/pl") : Industry foundation Classes.
- [DAE](/Arch_DAE/pl "Arch DAE/pl") : format Collada dla siatek.
- [OBJ](/Arch_OBJ/pl "Arch OBJ/pl") : format OBJ dla siatek _(tylko eksport)_.
- [JSON](/Arch_JSON/pl "Arch JSON/pl") : format zapisu obiektu w JavaScript _(tylko eksport)_.
- [3DS](/Arch_3DS/pl "Arch 3DS/pl") : format 3DS _(tylko import)_.
- [SHP](/Arch_SHP/pl "Arch SHP/pl"): GIS Shapefiles _(tylko import)_.

## API

Moduł Arch może być używany w skryptach [Python](/Python "Python") i [makrodefiniacjach](/Macros/pl "Macros/pl") za pomocą funkcji [Arch Python API](/Arch_API/pl "Arch API/pl").

## Poradniki i nauka

- [Migracja do FreeCAD z Revit](/Migrating_to_FreeCAD_from_Revit/pl "Migrating to FreeCAD from Revit/pl")
- [Poradniki Wiki - Arch & BIM](/Tutorials/pl#Architektura_i_BIM/pl "Tutorials/pl")
- ["BIM with FreeCAD" seria wideo przygotowana przez Yorik](https://www.youtube.com/playlist?list=PLmKdGVtV5Vnt2cj4IZIv9FM39QHaE1ZaU)
- ["FreeCAD tutorials" seria wideo przygotowana przez Regis](https://www.youtube.com/playlist?list=PLDd21g-eSHwkkxVOfVmR8ObpPN5QbL7ye)
- ["Quinta Monroy" seria wideo przygotowana przez by Regis](https://www.youtube.com/playlist?list=PLDd21g-eSHwnAYyutuKhrPY51skaBhrVU)
- [Kanał YouTube "HRCompacta" (w większości po portugalsku)](https://www.youtube.com/@HRCompacta)
- [Kanał YouTube "FreeCADBIM" (w większości po portugalsku)](https://www.youtube.com/@FreeCadBIM)

## Przykładowe pliki

- FreeCAD zawiera przykładowy plik BIM na stronie Start.
- Więcej przykładowych plików BIM można znaleźć na stronie <https://github.com/yorikvanhavre/FreeCAD-BIM-examples>. Z poziomu programu FreeCAD, użyj menu Pomoc -> Przykłady BIM.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Workbench/pl&oldid=1538653>"
