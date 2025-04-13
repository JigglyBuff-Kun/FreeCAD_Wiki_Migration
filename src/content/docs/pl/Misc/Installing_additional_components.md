---
title: Instalacja dodatkowych komponentów
---
# Wprowadzenie

Po zainstalowaniu FreeCAD w swoim systemie operacyjnym *([Linux](/Installing_on_Linux/pl "Installing on Linux/pl"), [Mac](/Installing_on_Mac/pl "Installing on Mac/pl"), lub  [Windows](/Installing_on_Windows/pl "Installing on Windows/pl"))*, możesz rozważyć zainstalowanie jednego lub więcej z następujących dodatkowych komponentów.

# Pliki pomocy

Zobacz dokument [Instalacja dokumentacji pomocy](/Installing_Helpfile/pl "Installing Helpfile/pl") aby uzyskać więcej informacji.

# Zewnętrzne środowiska pracy

Poza standardowymi [Środowiskami pracy](/Workbenches/pl "Workbenches/pl") dołączonymi do programu FreeCAD, dostępna jest coraz większa kolekcja użytecznych [dodatkowych Środowisk pracy](/External_workbenches/pl "External workbenches/pl") wykonanych przez członków społeczności.

# Oprogramowanie zewnętrzne

FreeCAD obsługuje kilka pakietów oprogramowania pochodzących od innych deweloperów. W wielu przypadkach wystarczy zainstalować oprogramowanie, a gdy FreeCAD zostanie zrestartowany, automatycznie znajdzie i będzie mógł z niego korzystać.   
 Ta sekcja ma na celu dostarczenie listy wszystkich takich pakietów oprogramowania wraz z informacjami, gdzie jest ono używane we FreeCAD i gdzie można je pobrać.

## Wspierane

### GitPython

[GitPython](https://github.com/gitpython-developers/GitPython) jest biblioteką do interakcji z repozytoriami Git. [Menadżer dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl") może korzystać z tej biblioteki. GitPython jest zawarty w instalatorach FreeCAD dla systemów Windows i Mac.

### GraphViz

[GraphViz](https://www.graphviz.org) to oprogramowanie typu open source, służące do wizualizacji wykresów.
We FreeCAD służy do generowania wykresów zależności narzędziem [Dependency Graph](/Std_DependencyGraph "Std DependencyGraph").

### OpenCAMLib

[OpenCAMLib](http://www.anderswallin.net/CAM) to biblioteka open source algorytmów produkcji wspomaganej komputerowo **(CAM)**. Jest ona używana w Środowisku pracy [CAM](/CAM_Workbench/pl "CAM Workbench/pl") programu FreeCAD . Zobacz [jego stronę](/OpenCamLib "OpenCamLib"), aby uzyskać instrukcje instalacji.

### OpenSCAD

[OpenSCAD](https://www.openscad.org) jest stabilnym modułem do modelowania 3D. Od tego oprogramowania jest zależne środowisko pracy [OpenSCAD](/OpenSCAD_Workbench/pl "OpenSCAD Workbench/pl"), a środowisko [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") używa go dla swoich narzędzi logicznych. Jest on również wymagany do importu plików SCAD za pomocą narzędzia [Std: Import](/Std_Import/pl "Std Import/pl").

## Formaty plików

Wszystkie programy w tej sekcji będą używane przez narzędzia [Std: Import](/Std_Import/pl "Std Import/pl") lub [Std: Export](/Std_Export/pl "Std Export/pl").

### CAD Exchanger

Komercyjna aplikacja [CADExchanger](https://cadexchanger.com) z zamkniętym źródłem kodu, do wymiany danych w różnych formatach plików używanych w CAD. Istnieje [zewnętrzne Środowisko pracy](https://github.com/yorikvanhavre/CADExchanger) do korzystania z tej aplikacji w programie FreeCAD.

### DXF Importer

FreeCAD posiada własnego importera i eksportera plików DXF, który zaprogramowano w C++. Obecnie importer ten nie implementuje wszystkich funkcji formatu DXF. Dla tych funkcji dostępny jest nadal starszy importer eksporter Python. Wymaga on biblioteki [Draft-dxf-importer](https://github.com/yorikvanhavre/Draft-dxf-importer) Python. Zobacz stronę [FreeCAD i Import DXF](/FreeCAD_and_DXF_Import "FreeCAD and DXF Import") aby uzyskać więcej informacji.

### Konwerter DWG

FreeCAD nie może bezpośrednio odczytywać i zapisywać plików DWG. Aby przekonwertować pliki DXF na pliki DWG i odwrotnie, FreeCAD polega na zewnętrznych konwerterach. Istnieje wbudowane wsparcie dla następujących konwerterów DWG:

* [LibreDWG](https://www.gnu.org/software/libredwg) *(open-source, brak wsparcia dla niektórych elementów DWG)*.
* [Konwerter plików w formacie ODA](https://www.opendesign.com/guestfiles/oda_file_converter) *(bezpłatny, ale nie z otwartym kodem źródłowym)*.
* [QCAD pro](https://qcad.org/en/qcad-command-line-tools#dwg2dwg) *(komercyjny)*. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

Zobacz strony [Ustawienia Importu i Eksportu](/Import_Export_Preferences/pl#DWG "Import Export Preferences/pl") i [FreeCAD i import DWG](/FreeCAD_and_DWG_Import/pl "FreeCAD and DWG Import/pl"), aby uzyskać więcej informacji.

### IfcOpenShell

[IfcOpenShell](http://ifcopenshell.org) jest biblioteką pracującą z plikami Industry Foundation Classes *(IFC)* używanymi w projektowaniu architektonicznym.
Biblioteka ta jest również używana przez [Arch: IfcExplorer](/Arch_IfcExplorer "Arch IfcExplorer"). (wersja 0.18 i poniżej) oraz narzędzia [BIM: IfcExplorer](/BIM_IfcExplorer "BIM IfcExplorer"). IfcOpenShell jest zawarty w instalatorach FreeCAD dla Windows i Mac.

### IfcJson

[IfcJson](https://github.com/buildingSMART/ifcJSON) jest to biblioteka wymagana przy eksporcie do pliku w formacie IFCJSON. IFCJSON jest nowym formatem IFC, który nie jest jeszcze obsługiwany przez wiele aplikacji.

### Pycollada

[Pycollada](https://github.com/pycollada/pycollada/releases), znana również jako python-collada, jest biblioteką Pythona do czytania i tworzenia plikówów COLLADA *(DAE)*.
Pycollada jest zawarta w instalatorach FreeCAD dla systemów Windows i Mac.

## Renderowanie

### LuxCoreRender

[LuxCoreRender](https://www.luxcorerender.org) jest silnikiem renderującym, stanowiącym odrodzenie projektu [LuxRender](/LuxRender/pl "LuxRender/pl"). Oficjalnie nie jest wspierany przez środowisko [Raytracing](/Raytracing_Workbench/pl "Raytracing Workbench/pl"), ale może warto spróbować. Oficjalnie jest wspierany przez nowe środowisko [Render](https://github.com/FreeCAD/FreeCAD-render), mające w przyszłości zastąpić środowisko pracy Raytracing. Zobacz stronę [LuxRender](/LuxRender/pl "LuxRender/pl") po więcej informacji i instrukcje instalacji.

### LuxRender

[LuxRender](https://luxcorerender.org/history/) jest jednym z dwóch silników renderujących obsługiwanych przez środowisko pracy [Raytracing](/Raytracing_Workbench/pl "Raytracing Workbench/pl"). W 2013 roku projekt został reaktywowany jako [LuxCoreRender](/LuxCoreRender/pl "LuxCoreRender/pl"), z gruntownym przepisaniem kodu i zmianami naruszającymi kompatybilność. Oficjalnie środowisko pracy Raytracing obsługuje tylko porzucony [LuxRender](/LuxRender/pl "LuxRender/pl") *(najnowsza wersja to 1.6, 2017-12-28)*, podczas gdy nowe środowisko [Render](https://github.com/FreeCAD/FreeCAD-render) *(przeznaczone jako przyszły następca środowiska Raytracing)* obsługuje zamiast tego LuxCoreRender i porzuca wsparcie dla LuxRender. Tak czy inaczej, nawet jeśli oficjalnie nie jest wspierany, [LuxCoreRender](/LuxCoreRender/pl "LuxCoreRender/pl") może działać ze środowiskiem Raytracing, może warto spróbować. Zobacz stronę [LuxRender](/LuxRender/pl "LuxRender/pl") po więcej informacji i instrukcje instalacji, oraz [LuxCoreRender](/LuxCoreRender/pl "LuxCoreRender/pl") jeśli chcesz wypróbować bardziej nowoczesne oprogramowanie.

### POVRay

[POV-Ray](https://www.povray.org) jest znanym ray-trakerem, który potrafi oddać fotorealistyczne obrazy. Jest to jeden z dwóch silników renderowania obecnie wspieranych przez FreeCAD w środowisku pracy [Raytracing](/Raytracing_Workbench/pl "Raytracing Workbench/pl"). Więcej informacji i instrukcje instalacji można znaleźć na stronie [POV-Ray](/POV-Ray/pl "POV-Ray/pl").

## Element końcowy

## CalculiX

[CalculiX](http://calculix.de) jest zestawem dwóch kompletnych pakietów elementów skończonych:
CalculiX CrunchiX, solwer FEM i
CalculiX GraphiX, nakładka GUI. FreeCAD obsługuje tylko solver. Jest używany przez narzędzie [SolverCalculixCxxtools](/FEM_SolverCalculixCxxtools/pl "FEM SolverCalculixCxxtools/pl").

## Gmsh

[Gmsh](http://gmsh.info) to automatyczny generator siatki elementów skończonych. Może być używany w FreeCAD z poziomu Środowiska pracy [FEM](/FEM_Workbench/pl "FEM Workbench/pl") i narzędzia [Mesh: FromPartShape](/Mesh_FromPartShape "Mesh FromPartShape").

### Elmer

[Elmer](https://www.csc.fi/web/elmer) to symulator wykorzystujący wiele analiz fizycznych, uruchomiono go w 2005 roku. W FreeCAD jego moduły Grid i Solver mogą być używane przez narzędzia [FEM: SolverElmer](/FEM_SolverElmer "FEM SolverElmer").

### FEniCS

[FEniCS](https://fenicsproject.org) jest platformą obliczeniową do rozwiązywania równań różniczkowych cząstkowych *(PDE)*, które są szeroko stosowane przy rozwiązywaniu problemów MES. Wykorzystuje go Środowisko pracy [MES](/FEM_Workbench/pl "FEM Workbench/pl").

### Z88

[Z88](https://en.z88.de) jest kolejnym programem FEM, zawierający mesher, solwer i konwertery. Jest on używany przez narzędzie [FEM: SolverZ88](/FEM_SolverZ88 "FEM SolverZ88"). FreeCAD wymaga pakietu otwarto źródłowego Z88OS.

### OpenFOAM

[OpenFOAM](https://openfoam.org) to duży zbiór bibliotek do symulacji obliczeniowej dynamiki płynów *(Computational Fluid Dynamics CFD)*. OpenFOAM jest używany przez [Cfd](/Cfd_Workbench "Cfd Workbench") i [CfdOF](https://github.com/jaheyns/CfdOF) [zewnętrzne Środowiska pracy](/External_workbenches/pl "External workbenches/pl").

# Warto odwiedzić

* [Import eksport](/Import_Export/pl "Import Export/pl")
* [Ustawienia Importu i Eksportu](/Import_Export_Preferences/pl "Import Export Preferences/pl")
* [Biblioteki zewnętrzne](/Third_Party_Libraries/pl "Third Party Libraries/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=Installing_additional_components/pl&oldid=1476616>"