---
title: Centrum użytkownika.
---

![](/images/User_hub.png)

---

Jesteś właśnie na głównej stronie pomocy przeznaczonej dla wszystkich nowych użytkowników FreeCAD.

Tak jak sam program FreeCAD, tak i ta dokumentacja jest w ciągłym rozwoju. Niektóre informacje mogą być już nieaktualne, lub pominięte.
Jeśli nie możesz znaleźć potrzebnych informacji, nie wahaj się zapytać na [forum FreeCAD](https://forum.freecad.org).

Jeśli chciałbyś wesprzeć projekt FreeCAD, proszę wykjonaj [dotację](/Donate "Donate") oraz zobacz stronę: [Wesprzyj program FreeCAD](/Help_FreeCAD/pl "Help FreeCAD/pl") dla innych sposobów wnoszenia wkładu. Jeśli chciałbyś przyczynić się do tworzenia tej Wiki, poproś o uprawnienia edycji [na forum](https://forum.freecad.org/viewtopic.php?f=21&t=6830), i przeczytaj [WikiPages](/WikiPages "WikiPages"). Tam znajdziesz ogólne zasady których powinieneś się trzymać podczas edycji Wikipedii.

A jeśli interesuje cię historia programu FreeCAD, odwiedź stronę [Historia](/History "History").

## Korzystanie z programu FreeCAD

### Wprowadzenie

- [Przegląd aplikacji](/About_FreeCAD/pl "About FreeCAD/pl"): Ogólny przegląd programu FreeCAD.
- [Instalacja](/Installing/pl "Installing/pl"): Instrukcja instalacji FreeCAD dla [Linux](/Install_on_Linux/pl "Install on Linux/pl"), [Mac](/Install_on_Mac/pl "Install on Mac/pl") i [Windows](/Install_on_Windows/pl "Install on Windows/pl").
- [Instalacja dokumentacji użytkownika](/Installing_Helpfile/pl "Installing Helpfile/pl"): jak zainstalować dokumentację offline, bazującą na Wiki.
- [Instalacja dodatkowych komponentów](/Installing_additional_components/pl "Installing additional components/pl"): jak zainstalować dodatkowe komponenty zewnętrzne, które mogą współpracować z programem FreeCAD.
- [Jak zacząć](/Getting_started/pl "Getting started/pl"): Szybkie wprowadzenie do dostępnych funkcji programu.
- [FAQ](/Frequently_asked_questions/pl "Frequently asked questions/pl"): Odpowiedzi na najczęściej zadawane pytania.
- [Poradniki](/Tutorials/pl "Tutorials/pl") obejmujące różne części FreeCAD.

#### Migracja z innego oprogramowania?

- [Rozwiązania](/Workarounds "Workarounds")
- [Migracja do FreeCAD z Fusion360](/Migrating_to_FreeCAD_from_Fusion360/pl "Migrating to FreeCAD from Fusion360/pl")
- [Migracja do FreeCAD z OnShape](/Migrating_to_FreeCAD_from_OnShape/pl "Migrating to FreeCAD from OnShape/pl")
- [Migracja do FreeCAD z SolidWorks](/Migrating_to_FreeCAD_from_SolidWorks/pl "Migrating to FreeCAD from SolidWorks/pl")
- [Migracja do FreeCAD z Revit](/Migrating_to_FreeCAD_from_Revit/pl "Migrating to FreeCAD from Revit/pl")
- [FreeCAD BIM poradnik migracji](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide)
- [Tabela kompatybilności aplikacji BIM](/BIM_application_compatibility_table/pl "BIM application compatibility table/pl")

### Informacje podstawowe

- [Interface](/Interface/pl "Interface/pl"): interfejs FreeCAD jest zbudowany z różnych elementów graficznych dostępnych na ekranie, w tym [widok 3D](/3D_view/pl "3D view/pl"), [widok drzewa](/Tree_view/pl "Tree view/pl"), [edytor właściwości](/Property_editor/pl "Property editor/pl"), [panel zadań](/Task_panel/pl "Task panel/pl"), oraz [konsola Pythona](/Python_console/pl "Python console/pl").
- [Nawigacja przy użyciu myszki](/Mouse_navigation/pl "Mouse navigation/pl"): różne warianty obsługi za pomocą myszki lub gładzika do obsługi widoku 3D.
- [Wybór](/Selection_methods/pl "Selection methods/pl"): różne style wybierania obiektów w programie.
- [Nazwa obiektu](/Object_name/pl "Object name/pl"): obiekty FreeCAD mają atrybut `Nazwa` tylko do odczytu, który je jednoznacznie identyfikuje, oraz atrybut `Etykieta`, który można być edytowany przez użytkownika.
- [Edytor ustawień](/Preferences_Editor/pl "Preferences Editor/pl") i [Presonalizacja](/Interface_Customization/pl "Interface Customization/pl"):: mechanizm, który pozwala dostosować wiele parametrów systemu bazowego i poszczególnych środowisk roboczych.
- [Właściwości obiektów](/Property_editor/pl "Property editor/pl"): Jak działają właściwości obiektów w programie FreeCAD.
- [Struktura dokumentu](/Document_structure/pl "Document structure/pl"): W jaki sposób twój dokument jest zorganizowany, z jakich części się składa.
- [Formaty plików](/Import_Export/pl "Import Export/pl"): różne typy plików, które mogą być odczytywane i zapisywane przez FreeCAD.
- [Środowiska pracy](/Workbenches/pl "Workbenches/pl"): W jaki sposób zorganizowany jest interfejs aplikacji.
- [Makra](/Macros/pl "Macros/pl"): jak łatwo zautomatyzować powtarzające się czynności

### Środowiska pracy

[Środowisko pracy](/Workbenches/pl "Workbenches/pl") reprezentowane jest przez zestaw powiązanych narzędzi, które są wykorzystywane do realizacji konkretnych zadań. Są to podstawowe środowiska pracy dołączone do każdej instalacji FreeCAD:

- ![](/images/Freecad.svg) [Narzędzia standardowe](/Std_Base/pl "Std Base/pl"). Te polecenia i narzędzia są obecne we wszystkich środowiskach pracy.

- ![](/images/Workbench_Assembly.svg)[Złożenie](/Assembly_Workbench/pl "Assembly Workbench/pl") do budowania i rozwiązywania zespołów mechanicznych. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/Workbench_BIM.svg) [BIM](/BIM_Workbench/pl "BIM Workbench/pl") do pracy z elementami architektonicznymi i tworzenia modeli [BIM](https://en.wikipedia.org/wiki/Building_information_modeling). Łączy w sobie środowisko pracy Architektura i wcześniejsze zewnętrzne środowisko pracy BIM dostępne w wersja 0.21 i poniżej.

- ![](/images/Workbench_CAM.svg) [CAM](/CAM_Workbench/pl "CAM Workbench/pl") służy do tworzenia instrukcji G-Code. To środowisko pracy zostało nazwane "Path" w wersja 0.21 i poniżej.

- ![](/images/Workbench_Draft.svg) [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") zawiera narzędzia 2D oraz podstawowe operacje CAD 2D i 3D.

- ![](/images/Workbench_FEM.svg) [MES](/FEM_Workbench/pl "FEM Workbench/pl") zapewnia przepływ pracy w zakresie analizy elementów skończonych _(Finite Element Analysis FEA)_.

- ![](/images/Workbench_Inspection.svg) [Inspekcja](/Inspection_Workbench/pl "Inspection Workbench/pl") ma na celu udostępnienie narzędzi do badania kształtów. Nadal jest w fazie rozwoju.

- ![](/images/Workbench_Material.svg) [Materiał](/Material_Workbench "Material Workbench") obsługuje system materiałów we FreeCAD. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/Workbench_Mesh.svg) [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") do pracy z siatkami o trójkątnych oczkach.

- ![](/images/Workbench_OpenSCAD.svg) [OpenSCAD](/OpenSCAD_Workbench/pl "OpenSCAD Workbench/pl") dla interoperacyjności z OpenSCAD i naprawiania historii modeli typu [konstrukcyjnej geometrii bryły](/Constructive_solid_geometry/pl "Constructive solid geometry/pl") _(CSG)_.

- ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl") do pracy z pierwotnymi obiektami geometrycznymi i operacjami logicznymi.

- ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") do budowy kształtów części ze szkiców.

- ![](/images/Workbench_Points.svg) [Punkty](/Points_Workbench/pl "Points Workbench/pl") do pracy z chmurami punktów.

- ![](/images/Workbench_Reverse_Engineering.svg) [Inżynieria Wsteczna](/Reverse_Engineering_Workbench/pl "Reverse Engineering Workbench/pl") ma na celu dostarczenie specyficznych narzędzi do konwersji kształtów/brył/siatek na parametryczne elementy kompatybilne z FreeCAD.

- ![](/images/Workbench_Robot.svg) [Robot](/Robot_Workbench/pl "Robot Workbench/pl") do badania ruchów robotów. Obecnie nie jest utrzymywany.

- ![](/images/Workbench_Sketcher.svg) [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") do pracy na szkicach z zachowaniem wiązań geometrii.

- ![](/images/Workbench_Spreadsheet.svg) [Arkusz Kalkulacyjny](/Spreadsheet_Workbench/pl "Spreadsheet Workbench/pl") do tworzenia i manipulowania danymi w arkuszu kalkulacyjnym.

- ![](/images/Workbench_Surface.svg) [Powierzchnia](/Surface_Workbench/pl "Surface Workbench/pl") dostarcza narzędzi do tworzenia i modyfikowania powierzchni. Jest on podobny do narzędzia [konstruktora kształtu części](/Part_Builder/pl "Part Builder/pl") środowiska Część, z krawędzi.

- ![](/images/Workbench_TechDraw.svg) [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") do tworzenia rysunków technicznych dla modeli przestrzennych.

- ![](/images/Workbench_Test.svg) [Test Framework](/Testing/pl "Testing/pl") służy do debugowania programu FreeCAD.

### Makra

[Makrodefinicje](/Macros "Macros") to niewielkie fragmenty kodu [Python](/Python "Python"), które wykonują proste lub złożone zadania, dotychczasowo niedostępne w bazowym systemie FreeCAD.

Doświadczeni użytkownicy napisali różne [makra](/Macros "Macros"), aby wzbogacić FreeCAD o więcej funkcjonalności.

Od wersji FreeCAD 0.17, wiele makr można zainstalować za pomocą [Menadżer dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl"). Lista makrodefinicji znajduje się na stronie [przepisy na makrodefinicje](/Macros_recipes/pl "Macros recipes/pl"). Ręczna instalacja - patrz [Jak zainstalować makra](/How_to_install_macros/pl "How to install macros/pl").

### Zewnętrzne środowiska pracy

Gdy wiele makrodefinicji lub funkcji jest opracowywanych przy użyciu wspólnych pasków narzędzi i menu, mogą one stać się nowym Środowiskiem pracy.

[Zewnętrzne Środowiska pracy](/External_workbenches "External workbenches") to zbiór funkcji, które nie są częścią podstawowego systemu FreeCAD, zwykle stworzone są przez doświadczonych użytkowników i ukierunkowane na realizacje konkretnej potrzeby.

Od wersji FreeCAD **0.17**, wiele stołów roboczych może być zainstalowanych przy użyciu [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl"). Ręczna instalacja - patrz [Jak zainstalować dodatkowe Środowiska pracy](/How_to_install_additional_workbenches/pl "How to install additional workbenches/pl").

## Odwołania

[Lista komend](/List_of_Commands/pl "List of Commands/pl"): Pełna lista dostępnych poleceń FreeCAD.

## System pomocy Online

Jest to oficjalna pomoc Online FreeCAD. Proszę zwrócić uwagę, że cały system pomocy Online jest obecnie opracowywany na nowo. Zostanie on użyty do wygenerowania pliku w formacie .CHM, który będzie dystrybuowany wraz z pakietami binarnymi FreeCAD. W chwili obecnej pomoc online streszcza niektóre z najbardziej kompletnych sekcji tej wiki.

- [System pomocy online - Spis treści](/Online_Help_Toc/pl "Online Help Toc/pl")

## Informacje dodatkowe

- [Centrum Power użytkownika](/Power_users_hub/pl "Power users hub/pl") to miejsce dla zaawansowanych użytkowników programu FreeCAD.
- [Portal społecznościowy FreeCAD](/FreeCAD_Community_Portal/pl "FreeCAD Community Portal/pl") wyświetla listę projektów wykonanych przez członków społeczności zgromadzonej wokół FreeCAD.
- Nie rozumiesz jakiegoś terminu lub zwrotu w FreeCAD? Sprawdź go w [Słowniczku](/Glossary/pl "Glossary/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=User_hub/pl&oldid=1509797>"
