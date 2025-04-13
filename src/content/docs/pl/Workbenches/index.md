---
title: Środowiska pracy
---

FreeCAD, podobnie jak wiele nowoczesnych aplikacji projektowych, takich jak [Revit](https://en.wikipedia.org/wiki/Autodesk_Revit) lub [CATIA](https://en.wikipedia.org/wiki/CATIA), opiera się na koncepcji [Środowisk pracy](https://en.wikipedia.org/wiki/Workbench). Środowisko pracy może być traktowane jako zestaw narzędzi specjalnie pogrupowanych dla potrzeb realizacji konkretnego zadania. W tradycyjnym warsztacie meblowym miałbyś stół roboczy dla osoby pracującej z drewnem, inny dla osoby pracującej z metalowymi elementami, a może trzeci dla faceta, który montuje wszystkie elementy razem.

W programie **FreeCAD** stosuje się tę samą koncepcję. Narzędzia są pogrupowane w **Środowiska pracy** według zadań, które są z nimi związane.

Kiedy przełączasz się z jednego Środowiska pracy na drugie, zmieniają się narzędzia dostępne z poziomu interfejsu. Paski narzędzi, paski poleceń i ewentualnie inne części interfejsu przełączają się na nowe Środowisko pracy, ale zawartość Twojej sceny się nie zmienia. Możesz, na przykład, rozpocząć rysowanie kształtów 2D w Draft, a następnie pracować nad nimi dalej w Środowisku pracy Part.

Należy pamiętać, że czasami środowisko pracy jest nazywane **modułem**. Jednak środowiska pracy i moduły są różnymi częściami składowymi. Moduł to dowolne rozszerzenie FreeCAD, natomiast Środowisko pracy to specjalna konfiguracja GUI _(moduł)_ grupująca niektóre paski narzędzi i menu.

## Wbudowane Środowiska pracy

### Aktualne

Poniższe środowiska pracy są dostępne w każdej instalacji FreeCAD:

- ![](/images/Freecad.svg) [Std: Base](/Std_Base/pl "Std Base/pl"). To nie jest tak naprawdę środowisko pracy, ale raczej kategoria "standardowych" poleceń i narzędzi, które mogą być używane we wszystkich środowiskach pracy.

- ![](/images/Workbench_Assembly.svg)[Złożenie](/Assembly_Workbench/pl "Assembly Workbench/pl") do budowania i rozwiązywania zespołów mechanicznych. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/Workbench_BIM.svg) [BIM](/BIM_Workbench/pl "BIM Workbench/pl") do pracy z elementami architektonicznymi i tworzenia modeli [BIM](https://en.wikipedia.org/wiki/Building_information_modeling). Łączy w sobie środowisko pracy Architektura i wcześniejsze zewnętrzne środowisko pracy BIM dostępne w 0.21 and below.

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

- ![](/images/Workbench_TechDraw.svg) [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") do tworzenia rysunków technicznych dla modeli przestrzennych. Jest to następca środowiska [Kreślenie](/Drawing_Workbench/pl "Drawing Workbench/pl").

- ![](/images/Workbench_Test.svg) [Test Framework](/Testing/pl "Testing/pl") służy do debugowania programu FreeCAD.

### Przestarzałe

Następujące środowiska pracy nie są już zawarte w instalacji podstawowej po wersji 0.21:

- ![](/images/Workbench_Start.svg) [Start](/Start_Workbench/pl "Start Workbench/pl") pozwala na szybkie przejście do jednego z najczęściej stosowanych środowisk pracy. To środowisko pracy zostało zastąpione stroną Start dostępną z poziomu [menu Pomoc](/Std_Help_Menu/pl "Std Help Menu/pl").

- ![](/images/Workbench_Web.svg)[Web](/Web_Workbench/pl "Web Workbench/pl") udostępnia okno przeglądarki w oknie [widoku 3D](/3D_view/pl "3D view/pl") dla programiu FreeCAD.

Następujące środowiska pracy nie są już zawarte w instalacji podstawowej po wersji 0.20:

- ![](/images/Workbench_Drawing.svg) [Kreślenie](/Drawing_Workbench/pl "Drawing Workbench/pl") został stworzony do przygotowania rysunku technicznego. Zobacz środowisko [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl"), które jest bardziej zaawansowanym zamiennikiem.

- ![](/images/Workbench_Image.svg) [Obraz](/Image_Workbench/pl "Image Workbench/pl") służyło do pracy z grafikami bitmapowymi. Jego funkcjonalność została zintegrowana w [Narzędziach standardowych](/Std_Base/pl "Std Base/pl").

Zobacz strony [Std: Import](/Std_Import/pl "Std Import/pl") i [Std: Otwórz widok obrazu](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl").

- ![](/images/Workbench_Raytracing.svg) [Raytracing](/Raytracing_Workbench/pl "Raytracing Workbench/pl") do pracy z ray-tracingiem _(renderingiem)_. Zamiast tego należy użyć zewnętrznego środowiska [Render](https://github.com/FreeCAD/FreeCAD-render).

## Zewnętrzne środowiska pracy

Środowiska pracy FreeCAD są łatwe do zaprogramowania w [Python](/Python "Python"). Dlatego też, wiele osób opracowuje dodatkowe stoły robocze wykraczające poza główny obszar rozwoju programu FreeCAD.

Strona [zewnętrzne środowiska pracy](/External_workbenches/pl "External workbenches/pl") zawiera listę wszystkich, które są znane tej społeczności. Większość z nich można łatwo zainstalować z poziomu FreeCAD, używając [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl"), znajdującego się w menu **Narzędzia → ![](/images/Std_AddonMgr.svg) Menadżer dodatków**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Workbenches/pl&oldid=1540570>"
