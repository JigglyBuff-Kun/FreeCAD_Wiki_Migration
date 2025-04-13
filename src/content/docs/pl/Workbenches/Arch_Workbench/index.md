---
title: Środowisko pracy Architektura
---

:::caution
W wersji v1.0 środowiska pracy BIM, Native-IFC i Architektura zostały połączone w zintegrowane środowisko pracyBIM.
:::
![](/images/Workbench_Arch.svg)

Ikonka FreeCAD dla środowiska pracy Architektura

## Wprowadzenie

Środowisko pracy ![](/images/Workbench_Arch.svg) Architektura zapewnia nowoczesny przepływ pracy dla FreeCAD [**B**uilding **I**nformation **M**odelling](http://en.wikipedia.org/wiki/Building_Information_Modeling) _(BIM)_, z obsługą funkcji takich jak w pełni parametryczne obiekty architektoniczne, takie jak ściany, belki, dachy, okna, schody, rury i meble. Obsługuje pliki [**I**ndustry **F**oundation **C**lasses](/Arch_IFC/pl "Arch IFC/pl") _(IFC)_ oraz tworzenie planów pięter 2D w połączeniu z środowiskiem pracy ![](/images/Workbench_TechDraw.svg) [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl").

Środowisko pracy Architektura importuje wszystkie narzędzia środowiska ![](/images/Workbench_Draft.svg) [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), ponieważ używa obiektów 2D do budowy swoich przestrzennych obiektów architektonicznych. Niemniej jednak Arch może używać kształtów brył utworzonych w innych środowiskach pracy, takich jak ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl") i ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").

Funkcjonalność BIM FreeCAD jest obecnie stopniowo poszerzana w obrębie środowiska pracy Architektura, które posiada podstawowe narzędzia architektoniczne, oraz ![](/images/Workbench_BIM.svg) [środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"), które można zainstalować za pomocą ![](/images/Std_AddonMgr.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl"). Środowisko BIM dodaje nową warstwę interfejsu nad narzędziami Arch, w celu uczynienia przepływu BIM bardziej intuicyjnym i przyjaznym dla użytkownika.
Zobacz [Przewodnik migracji FreeCAD BIM](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide).

Twórcy Draft, Arch i BIM współpracują również z większą [Społecznością OSArch](https://osarch.org), mając na uwadze ostateczny cel, jakim jest poprawa projektowania budynków przy użyciu całkowicie wolnego oprogramowania.

![](/images/Screenshot_arch_window.jpg)

## Przybory

Są to narzędzia służące do tworzenia obiektów architektonicznych.

- ![](/images/Arch_Wall.svg) [Ściana](/Arch_Wall/pl "Arch Wall/pl"): Tworzy ścianę od podstaw lub używając wybranego obiektu jako podstawy.

- ![](/images/Arch_Structure.svg) [Konstrukcja](/Arch_Structure/pl "Arch Structure/pl"): Tworzy element konstrukcyjny od podstaw lub używając wybranego obiektu jako podstawy.

- ![](/images/Arch_CompRebarStraight.png) [Narzędzia zbrojenia](/Arch_CompRebarStraight/pl "Arch CompRebarStraight/pl"): Narzędzia te, z wyjątkiem ostatniego, są dostępne tylko po zainstalowaniu środowiska pracy [Zbrojenie](/Reinforcement_Workbench/pl "Reinforcement Workbench/pl").

- ![](/images/Reinforcement_StraightRebar.svg) [Pręty zbrojeniowe proste](/Reinforcement_StraightRebar/pl "Reinforcement StraightRebar/pl"): Tworzy prosty pręt zbrojeniowy w wybranym elemencie konstrukcyjnym.

- ![](/images/Reinforcement_UShapeRebar.svg) [Pręty zbrojeniowe typu U](/Reinforcement_UShapeRebar/pl "Reinforcement UShapeRebar/pl"): Tworzy pręt zbrojeniowy w kształcie litery U w wybranym elemencie konstrukcyjnym.

- ![](/images/Reinforcement_LShapeRebar.svg) [Pręty zbrojeniowe typu L](/Reinforcement_LShapeRebar/pl "Reinforcement LShapeRebar/pl"): Tworzy pręt zbrojeniowy w kształcie litery L w wybranym elemencie konstrukcyjnym.

- ![](/images/Reinforcement_StirrupRebar.svg) [Strzemiona zbrojeniowe](/Reinforcement_StirrupRebar/pl "Reinforcement StirrupRebar/pl"): Tworzy pręt zbrojeniowy strzemion w wybranym elemencie konstrukcyjnym.

- ![](/images/Reinforcement_BentShapeRebar.svg) [Pręty zbrojeniowe wygięte](/Reinforcement_BentShapeRebar/pl "Reinforcement BentShapeRebar/pl"): Tworzy pręt zbrojeniowy typu wygiętego w wybranym elemencie konstrukcyjnym.

- ![](/images/Reinforcement_HelicalRebar.svg) [Pręty zbrojeniowe spiralne](/Reinforcement_HelicalRebar/pl "Reinforcement HelicalRebar/pl"): Tworzy spiralny pręt zbrojeniowy w wybranym elemencie konstrukcyjnym.

- ![](/images/Reinforcement_ColumnRebars.svg) [Pręty zbrojeniowe, zbrojenie słupów](/Reinforcement_ColumnRebars/pl "Reinforcement ColumnRebars/pl"): Tworzy pręty zbrojeniowe w wybranym elemencie konstrukcyjnym słupa prostokątnego.

- ![](/images/Reinforcement_BeamRebars.svg) [Pręty zbrojeniowe, zbrojenie belek](/Reinforcement_BeamRebars/pl "Reinforcement BeamRebars/pl"): Tworzy pręty zbrojeniowe w wybranym elemencie konstrukcyjnym belki.

- ![](/images/Reinforcement_SlabRebars.svg) [Pręty zbrojeniowe, zbrojenie płyt stropowych](/Reinforcement_SlabRebars/pl "Reinforcement SlabRebars/pl"): Tworzy pręty zbrojeniowe w wybranym elemencie konstrukcyjnym płyty.

- ![](/images/Arch_Rebar_Footing_Reinforcement.svg) [Zbrojenie stóp fundamentowych](/Reinforcement_FootingRebars/pl "Reinforcement FootingRebars/pl"): Tworzy pręty zbrojeniowe wewnątrz obiektu konstrukcyjnego ławy fundamentowej.

- ![](/images/Arch_Rebar.svg) [Pręt zbrojeniowy](/Arch_Rebar/pl "Arch Rebar/pl"): Tworzy niestandardowy pręt zbrojeniowy w wybranym elemencie konstrukcyjnym za pomocą szkicu.

- ![](/images/Arch_CurtainWall.svg) [Ściana kurtynowa](/Arch_CurtainWall/pl "Arch CurtainWall/pl"): Tworzy ścianę kurtynową od podstaw lub używając wybranego obiektu jako bazy.

- ![](/images/Arch_BuildingPart.svg) [Część budowli - piętro](/Arch_BuildingPart/pl "Arch BuildingPart/pl"): Tworzy część budynku zawierającą wybrane obiekty.

- ![](/images/Arch_Project.svg) [Projekt](/Arch_Project/pl "Arch Project/pl"): Tworzy projekt zawierający wybrane obiekty.

- ![](/images/Arch_Site.svg) [Teren](/Arch_Site/pl "Arch Site/pl"): Tworzy teren z uwzględnieniem wybranych obiektów.

- ![](/images/Arch_Building.svg) [Budynek](/Arch_Building/pl "Arch Building/pl"): Tworzy budynek wraz z wybranymi obiektami.

- ![](/images/Arch_Floor.svg) [Piętro](/Arch_Floor/pl "Arch Floor/pl"): Tworzy piętro obejmujące wybrane obiekty.

- ![](/images/Arch_Reference.svg) [Odniesienie](/Arch_Reference/pl "Arch Reference/pl"): Łączy obiekty z innego pliku FreeCAD do bieżącego dokumentu.

- ![](/images/Arch_Window.svg) [Okno](/Arch_Window/pl "Arch Window/pl"): Tworzy okno od podstaw lub używając wybranego obiektu jako bazy.

- ![](/images/Arch_Roof.svg) [Dach](/Arch_Roof/pl "Arch Roof/pl"): Tworzy spadzisty dach z wybranych linii łamanych.

- ![](/images/Arch_CompAxis.png) [Komponent osie](/Arch_CompAxis/pl "Arch CompAxis/pl")

- ![](/images/Arch_Axis.svg) [Osie](/Arch_Axis/pl "Arch Axis/pl"): Dodaje zestaw osi jednokierunkowych.

- ![](/images/Arch_AxisSystem.svg) [Układ osi](/Arch_AxisSystem/pl "Arch AxisSystem/pl"): Dodaje układ osi składający się z kilku osi.

- ![](/images/Arch_Grid.svg) [Siatka](/Arch_Grid/pl "Arch Grid/pl"): Dodaje obiekt przypominający siatkę.

- ![](/images/Arch_SectionPlane.svg) [Płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl"): Dodaje obiekt płaszczyzny przekroju.

- ![](/images/Arch_Space.svg) [Kubatura](/Arch_Space/pl "Arch Space/pl"): Tworzy obiekt kubatury.

- ![](/images/Arch_Stairs.svg) [Schody](/Arch_Stairs/pl "Arch Stairs/pl"): Tworzy obiekt schodów.

- ![](/images/Arch_CompPanel.png) [Komponent panel](/Arch_CompPanel/pl "Arch CompPanel/pl")

- ![](/images/Arch_Panel.svg) [Panel](/Arch_Panel/pl "Arch Panel/pl"): Tworzy obiekt panelu z wybranego obiektu 2D.

- ![](/images/Arch_Panel_Cut.svg) [Panelizacja do cięcia](/Arch_Panel_Cut/pl "Arch Panel Cut/pl"): Tworzy widok wycięcia 2D z panelu.

- ![](/images/Arch_Panel_Sheet.svg) [Arkusz panela](/Arch_Panel_Sheet/pl "Arch Panel Sheet/pl"): Tworzy arkusz cięcia 2D zawierający wycięcia paneli lub innych obiektów 2D.

- ![](/images/Arch_Nest.svg) [Zagnieżdżanie](/Arch_Nest/pl "Arch Nest/pl"): Umożliwia zagnieżdżenie kilku płaskich obiektów wewnątrz kształtu kontenera.

- ![](/images/Arch_Equipment.svg) [Wyposażenie](/Arch_Equipment/pl "Arch Equipment/pl"): Tworzy obiekt wyposażenia lub mebli.

- ![](/images/Arch_Frame.svg) [Ramy](/Arch_Frame/pl "Arch Frame/pl"): Tworzy obiekt ramy na podstawie wybranego układu.

- ![](/images/Arch_Fence.svg) [Ogrodzenie](/Arch_Fence/pl "Arch Fence/pl"): Tworzy obiekt ogrodzenia z wybranego słupka i ścieżki.

- ![](/images/Arch_Truss.svg) [Kratownica](/Arch_Truss/pl "Arch Truss/pl"): Tworzy kratownicę na podstawie wybranej linii lub od podstaw.

- ![](/images/Arch_Profile.svg) [Profil](/Arch_Profile/pl "Arch Profile/pl"): Tworzy parametryczny profil 2D.

- ![](/images/Arch_CompSetMaterial.png) [Komponent ustaw materiał](/Arch_CompSetMaterial/pl "Arch CompSetMaterial/pl")

- ![](/images/Arch_SetMaterial.svg) [Materiał](/Arch_SetMaterial/pl "Arch SetMaterial/pl"): Tworzy materiał i przypisuje go do wybranych obiektów, jeśli takie istnieją.

- ![](/images/Arch_MultiMaterial.svg) [Materiał wielowarstwowy](/Arch_MultiMaterial/pl "Arch MultiMaterial/pl"): Tworzy materiał złożony z wielu elementów i przypisuje go do wybranych obiektów, jeśli takie istnieją.

- ![](/images/Arch_Schedule.svg) [Obmiar](/Arch_Schedule/pl "Arch Schedule/pl"): Tworzenie różnych typów obmiaru.

- ![](/images/Arch_CompPipe.png) [Komponent narzędzia rur](/Arch_CompPipe/pl "Arch CompPipe/pl")

- ![](/images/Arch_Pipe.svg) [Rura](/Arch_Pipe/pl "Arch Pipe/pl"): Tworzy rurę.

- ![](/images/Arch_PipeConnector.svg) [Kształtka](/Arch_PipeConnector/pl "Arch PipeConnector/pl"): Tworzy połączenie kolankiem lub połączenie typu trójnik między dwoma lub trzema wybranymi rurami.

### Narzędzia do modyfikacji

Są to narzędzia służące do modyfikowania obiektów architektonicznych.

- ![](/images/Arch_CutPlane.svg) [Płaszczyzna cięcia](/Arch_CutPlane/pl "Arch CutPlane/pl"): Przycina obiekt według płaszczyzny.

- ![](/images/Arch_CutLine.svg) [Linia cięcia](/Arch_CutLine/pl "Arch CutLine/pl"): Przycina obiekt zgodnie z linią.

- ![](/images/Arch_Add.svg) [Dodaj komponent](/Arch_Add/pl "Arch Add/pl"): Dodaje obiekty do komponentu.

- ![](/images/Arch_Remove.svg) [Usuń komponent](/Arch_Remove/pl "Arch Remove/pl"): Odejmuje lub usuwa obiekty z komponentu.

- ![](/images/Arch_Survey.svg) [Spis wymiarów](/Arch_Survey/pl "Arch Survey/pl"): Włącza lub wyłącza tryb pomiaru.

### Przydatne narzędzia

Są to dodatkowe narzędzia, które pomogą Ci w konkretnych zadaniach.

- ![](/images/Arch_Component.svg) [Komponent](/Arch_Component/pl "Arch Component/pl"): Tworzy nieparametryczny komponent architektury.

- ![](/images/Arch_CloneComponent.svg) [Klonuj komponent](/Arch_CloneComponent/pl "Arch CloneComponent/pl"): Tworzy komponenty architektury, które są klonami wybranych obiektów architektury _(nie mylić z funkcją środowiska Rysunek Roboczy [Klonuj](/Draft_Clone/pl "Draft Clone/pl"))_.

- ![](/images/Arch_SplitMesh.svg) [Podziel siatkę](/Arch_SplitMesh/pl "Arch SplitMesh/pl"): Dzieli wybraną siatkę na osobne elementy.

- ![](/images/Arch_MeshToShape.svg) [Siatka na kształt](/Arch_MeshToShape/pl "Arch MeshToShape/pl"): Przekształca siatkę w kształt, ujednolicając współpłaszczyznowe powierzchnie.

- ![](/images/Arch_SelectNonSolidMeshes.svg) [Zaznacz siatki niebryłowe](/Arch_SelectNonSolidMeshes/pl "Arch SelectNonSolidMeshes/pl"): Wybiera wszystkie siatki typu non-manifold z bieżącego zaznaczenia lub z dokumentu.

- ![](/images/Arch_RemoveShape.svg) [Usuń kształt](/Arch_RemoveShape/pl "Arch RemoveShape/pl"): Zmienia obiekt architektury oparty na kształcie sześciennym w całkowicie parametryczny.

- ![](/images/Arch_CloseHoles.svg) [Zamknij otwory](/Arch_CloseHoles/pl "Arch CloseHoles/pl"): Zamyka otwory w wybranym obiekcie opartym na kształcie.

- ![](/images/Arch_MergeWalls.svg) [Połącz ściany](/Arch_MergeWalls/pl "Arch MergeWalls/pl"): Scala dwie lub więcej ścian.

- ![](/images/Arch_Check.svg) [Sprawdź](/Arch_Check/pl "Arch Check/pl"): Sprawdza, czy wybrane obiekty są bryłami i nie zawierają defektów.

- ![](/images/Arch_ToggleIfcBrepFlag.svg) [Przełącz flagę Brep IFC](/Arch_ToggleIfcBrepFlag/pl "Arch ToggleIfcBrepFlag/pl"): Wymusza wyeksportowanie wybranego obiektu jako obiektu [IfcFacetedBrep](http://www.buildingsmart-tech.org/ifc/IFC4/final/html/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm).

- ![](/images/Arch_3Views.svg) [Trzy widoki](/Arch_3Views/pl "Arch 3Views/pl"): Tworzy widoki z góry, z przodu i z boku dla [siatki](/Mesh_Workbench/pl "Mesh Workbench/pl").

- ![](/images/Arch_IfcSpreadsheet.svg) [Arkusz kalkulacyjny IFC](/Arch_IfcSpreadsheet/pl "Arch IfcSpreadsheet/pl"): Tworzy arkusz kalkulacyjny do przechowywania właściwości [IFC](/Arch_IFC/pl "Arch IFC/pl") obiektu.

- ![](/images/Arch_ToggleSubs.svg) [Przełącz widoczność elementów podrzędnych](/Arch_ToggleSubs/pl "Arch ToggleSubs/pl"): Pokazuje lub ukrywa elementy podrzędne obiektu architektury.

### Ustawienia

- ![](/images/Preferences-arch.svg) [Preferences](/Arch_Preferences "Arch Preferences"): preferencje dotyczące domyślnego wyglądu ścian, konstrukcji, zbrojenia, okien, schodów, paneli, rur, siatek i osi.

### Formaty plików

- [IFC](/Arch_IFC "Arch IFC") : Industry foundation Classes.
- [DAE](/Arch_DAE "Arch DAE") : format Collada dla siatek.
- [OBJ](/Arch_OBJ "Arch OBJ") : format OBJ dla siatek _(tylko eksport)_.
- [JSON](/Arch_JSON "Arch JSON") : format zapisu obiektu w JavaScript _(tylko eksport)_.
- [3DS](/Arch_3DS "Arch 3DS") : format 3DS _(tylko import)_.
- [SHP](/Arch_SHP "Arch SHP"): GIS Shapefiles _(tylko import)_.

## API

Moduł Arch może być używany w skryptach [Python](/Python "Python") i [makrodefiniacjach](/Macros/pl "Macros/pl") za pomocą funkcji [Arch Python API](/Arch_API/pl "Arch API/pl").

## Poradniki

- [Migracja do FreeCAD z Revit](/Migrating_to_FreeCAD_from_Revit/pl "Migrating to FreeCAD from Revit/pl")
- [Architecture workflow](http://yorik.uncreated.net/guestblog.php?tag=freecad): Przykład, w jaki sposób FreeCAD może zacząć zajmować pierwsze miejsce pod względem przepływu pracy w architekturze.
- [Poradnik do Środowiska pracy Arch](/Arch_tutorial "Arch tutorial") _(v0.14)_.
- [Szybki przegląd na blogu Yorika](http://yorik.uncreated.net/guestblog.php?2012=180) _(v0.13)_.
- [Wideo prezentacja Środowiska pracy Arch](https://www.youtube.com/watch?v=lTDOeHapv_E) _(2016)_.
- [Poradnik Arch panel](/Arch_panel_tutorial "Arch panel tutorial") _(v0.15)_
- [Rozdział z podręcznika FreeCAD dotyczący modelowania BIM](/Manual:BIM_modeling "Manual:BIM modeling")
- [Import z formatu STL lub OBJ](/Import_from_STL_or_OBJ "Import from STL or OBJ")
- [Eksport do formatu STL lub OBJ](/Export_to_STL_or_OBJ "Export to STL or OBJ")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Workbench/pl&oldid=1435781>"
