---
title: Import Eksport
---
## Wprowadzenie

Ta strona gromadzi różne formaty plików, które mogą być importowane lub eksportowane z FreeCAD. Dla pełnego obrazu, na liście znajduje się macierzysty format FreeCAD.

## Powiązane

Jeśli chcesz zobaczyć dodatkowe informacje zajrzyj na stronę:

* [Import i eksport ustawień](/Import_Export_Preferences "Import Export Preferences").
* [FreeCAD Jak dokonać importu, eksportu](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export").

## Przegląd formatów plików

| Format | Opis | Import / Otwórz | Eksport / Utwórz |
| --- | --- | --- | --- |
| [\*.FCStd](/File_Format_FCStd/pl "File Format FCStd/pl") | Naturalny format FreeCAD. | [Std: Otwórz](/Std_Open/pl "Std Open/pl"), [Std: MergeProjects](/Std_MergeProjects/pl "Std MergeProjects/pl") | [Std: Zapisz](/Std_Save/pl "Std Save/pl") |
| [\*.cam](/Std_FreezeViews/pl "Std FreezeViews/pl") | Zamrożone widoki FreeCAD *(ustawienia kamery)* | [Std: FreezeViews](/Std_FreezeViews/pl "Std FreezeViews/pl") | [Std: FreezeViews](/Std_FreezeViews/pl "Std FreezeViews/pl") |
| [\*.FCMacro](/Macros/pl "Macros/pl") | Makrodefinicja FreeCAD *(kod Python)*. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: DlgMacroRecord](/Std_DlgMacroRecord/pl "Std DlgMacroRecord/pl") |
| \*.fctb | Plik binarny narzędzia CAM*(format JSON)* | [CAM ToolBitLibraryOpen](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") | [CAM ToolBitLibraryOpen](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") |
| \*.fctl | Plik biblioteki narzędzia CAM *(format JSON)* | [CAM ToolBitLibraryOpen](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") | [CAM ToolBitLibraryOpen](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") |
| [\*.FCMat](/Material "Material") | Karta materiałów FreeCAD. | [Std: Import](/Std_Import/pl "Std Import/pl") | nie |
| [\*.FCParam](/Std_DlgParameter "Std DlgParameter") | Plik FreeCAD z parametrami. | [Std: DlgParameter](/Std_DlgParameter/pl "Std DlgParameter/pl") | [Std: DlgParameter](/Std_DlgParameter/pl "Std DlgParameter/pl") |
| \*.FCScript | Skrypt FreeCAD *(kod Python)*. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: DlgMacroRecord](/Std_DlgMacroRecord/pl "Std DlgMacroRecord/pl") |
| [\*.3ds](/Arch_3DS/pl "Arch 3DS/pl") | Siatka 3D Studio. | [Std: Import](/Std_Import/pl "Std Import/pl") | nie |
| \*.3mf | Format produkcyjny 3D | [Std: Import](/Std_Import/pl "Std Import/pl") | nie | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Mesh: Eksport](/Mesh_Export/pl "Mesh Export/pl") |
| \*.amf | Dodatkowy format produkcyjny. | nie | [Std: Export](/Std_Export/pl "Std Export/pl") |
| \*.asc | Format chmury punktów. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Punkty: Import](/Points_Import/pl "Points Import/pl") | [Std: Export](/Std_Export/pl "Std Export/pl"), [Punkty: Eksport](/Points_Export/pl "Points Export/pl") |
| \*.ast | Siatka stereolitograficzna ASCII *(używany głównie do druku 3D)*. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Siatka: Import](/Mesh_Import/pl "Mesh Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Siatka: Eksport](/Mesh_Export/pl "Mesh Export/pl") |
| [\*.asy](/Asymptote/pl "Asymptote/pl") | Kod Asymptote *(Asymptote to język programowania do generowania grafiki i rysunków w 2D i 3D)*. | nie | [Siatka: Eksport](/Mesh_Export/pl "Mesh Export/pl") |
| \*.bdf | siatka FEM. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.bdf | Siatka Nastran. | [Import siatki](/Mesh_Import/pl "Mesh Import/pl") | [Siatka: Eksport](/Mesh_Export/pl "Mesh Export/pl") |
| \*.bmp | Format pliku graficznego. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | [Std: ViewScreenShot](/Std_ViewScreenShot/pl "Std ViewScreenShot/pl") |
| \*.pvtu | FEM mesh | [Std: Import](/Std_Import/pl "Std Import/pl") | nie |
| \*.pvtu | FEM result VTK | [Std: Import](/Std_Import/pl "Std Import/pl") | nie | \*.bms | Siatka Binarna. | [Std: Import](/Std_Import/pl "Std Import/pl"), [siatka: Import](/Mesh_Import/pl "Mesh Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Siatka: Eksport](/Mesh_Export/pl "Mesh Export/pl") |
| \*.brep | Naturalny format OpenCasCade. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Część: Import](/Part_Import/pl "Part Import/pl") | [Std: Export](/Std_Export/pl "Std Export/pl"), [Część: Eksport](/Part_Export/pl "Part Export/pl") |
| \*.brp | Naturalny format OpenCasCade. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Część: Import](/Part_Import/pl "Part Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Część: Eksport](/Part_Export/pl "Part Export/pl") |
| \*.cnc | G-code. | [Std: Import](/Std_Import/pl "Std Import/pl") | [CAM: Post](/CAM_Post/pl "CAM Post/pl") |
| \*.csg | Konstrukcyjna geometria bryłowa OpenSCAD. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.csv | [Wartości rozdzielane przecinkami](https://en.wikipedia.org/wiki/Comma-separated) | [Std: Import](/Std_Import/pl "Std Import/pl"), [Arkusz kalkulacyjny: Import](/Spreadsheet_Import/pl "Spreadsheet Import/pl") | [Arkusz kalkulacyjny: Eksport](/Spreadsheet_Export/pl "Spreadsheet Export/pl") |
| \*.cur | Format pliku graficznego. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: ViewScreenShot](/Std_ViewScreenShot/pl "Std ViewScreenShot/pl") |
| [\*.dae](/Arch_DAE/pl "Arch DAE/pl") | Format Collada, stosowany do wymiany geometrii siatki. Dla użytkowników Linuksa: Wymagany zewnętrzny moduł pyCollada. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| [\*.dae](/Draft_DAT/pl "Draft DAT/pl") | Wspólne dane profilu aerodynamicznego. | [Std: Import](/Std_Import/pl "Std Import/pl") | nie |
| [\*.dat](/Arch_DAE "Arch DAE") | Siatka FEM. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.dib | Format pliku graficznego. | [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | nie |
| \*.dwg | Główny format programu Autocad. Obsługiwana jest tylko geometria 2D. Wymaga instalacji [modułów zewnętrznych](/FreeCAD_and_DWG_Import/pl "FreeCAD and DWG Import/pl"). | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| [\*.dxf](/Draft_DXF/pl "Draft DXF/pl") | Format wymiany Autodesk. Obsługiwana jest tylko geometria 2D. [Zewnętrzne oprogramowanie](/FreeCAD_and_DXF_Import/pl "FreeCAD and DXF Import/pl") wymagane jest dla starszych wersji Pythona - importera i starszych wersji Pythona - eksportera. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Rysunek techniczny: ExportPageDXF](/TechDraw_ExportPageDXF/pl "TechDraw ExportPageDXF/pl") |
| \*.e57 | Format chmury punktów | [Std: Import](/Std_Import/pl "Std Import/pl") | no |
| \*.emn | Format IDF. | [Std: Import](/Std_Import/pl "Std Import/pl") | nie |
| \*.frd | FEM - format wynikowy CalculiX. | [Std: Import](/Std_Import/pl "Std Import/pl") | nie |
| \*.gc | G-code. | [Std: Import](/Std_Import/pl "Std Import/pl") | [CAM: Post](/CAM_Post/pl "CAM Post/pl") |
| \*.gcad | Format programu Open CAD *(przestarzały, tylko format 2D)*. | [Std: Import](/Std_Import/pl "Std Import/pl") | nie |
| \*.gcode | G-code. | [Std: Import](/Std_Import/pl "Std Import/pl") | [CAM: Post](/CAM_Post/pl "CAM Post/pl") |
| \*.gif | Format pliku graficznego. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | nie |
| [\*.glb](/GlTF "GlTF") | [Format przekazywania danych GL](https://en.wikipedia.org/wiki/GlTF) | nie | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| [\*.gltf](/GlTF "GlTF") | [Format przekazywania danych GL](https://en.wikipedia.org/wiki/GlTF) | nie | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.gv | [format Graphviz](https://en.wikipedia.org/wiki/DOT_%28graph_description_language%29) | nie | [Std Save](/Std_Save "Std Save"), [Std SaveAs](/Std_SaveAs "Std SaveAs"), [Std ExportDependencyGraph](/Std_ExportDependencyGraph "Std ExportDependencyGraph") |
| \*.html | Format WebGL. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.icb | Format pliku graficznego. | [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | no |
| \*.icns | Format pliku graficznego. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | [Std: ViewScreenShot](/Std_ViewScreenShot/pl "Std ViewScreenShot/pl") |
| \*.ico | Format pliku graficznego. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Std: VFormat obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | [Std: ViewScreenShot](/Std_ViewScreenShot/pl "Std ViewScreenShot/pl") |
| [\*.ifc](/Arch_IFC/pl "Arch IFC/pl") | Klasy Foundation Industry, używane do wymiany modeli BIM. Dla użytkowników Linuksa: Wymagany zewnętrzny moduł pyCollada. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| [\*.ifcJSON](/Arch_IFC/pl "Arch IFC/pl") | Format wymiany Industry Foundation Classes dla modeli BIM. Wymagany [Zewnętrzny moduł IFCJson](https://github.com/buildingSMART/ifcJSON) *(musi być zainstalowany ręcznie)*. Dla użytkowników systemu Linux: Wymagany zewnętrzny moduł IfcOpenShell. | nie |
| \*.iges | Trochę starszy, ale nadal używany format oparty na bryłach. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Część: Import](/Part_Import/pl "Part Import/pl") *(z kolorami lub bez)* | [Std: Export](/Std_Export/pl "Std Export/pl"), [Część: Eksport](/Part_Export/pl "Part Export/pl") *(z kolorami lub bez)* |
| \*.igs | Trochę starszy, format oparty na bryłach. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Część: Import](/Part_Import/pl "Part Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Część: Eksport](/Part_Export/pl "Part Export/pl") |
| \*.inc | Format Povray. | [Std: Import](/Std_Import/pl "Std Import/pl") | nie |
| \*.inp | Siatka FEM. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.iv | Format programu Inventor V2.1. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Siatka: Import](/Mesh_Import/pl "Mesh Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Siatka: Eksport](/Mesh_Export/pl "Mesh Export/pl") |
| \*.jpe | Format pliku graficznego. | [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | nie |
| \*.jpeg | Format pliku graficznego. | [Obraz: CreateImagePlane](/Image_CreateImagePlane/pl "Image CreateImagePlane/pl") | [Std: ViewScreenShot](/Std_ViewScreenShot/pl "Std ViewScreenShot/pl") |
| \*.jpg | Format pliku graficznego. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | [Std: ViewScreenShot](/Std_ViewScreenShot/pl "Std ViewScreenShot/pl") |
| \*.json | Siatka FEM. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| [\*.json](/Arch_JSON/pl "Arch JSON/pl") | Opis obiektu w języku JavaScript. | nie | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.json | Narzędzie CAM. | [CAM: ToolLibraryEdit](/index.php?title=CAM_ToolLibraryEdit/pl&action=edit&redlink=1 "CAM ToolLibraryEdit/pl (page does not exist)") | [CAM: ToolLibraryEdit](/index.php?title=CAM_ToolLibraryEdit/pl&action=edit&redlink=1 "CAM ToolLibraryEdit/pl (page does not exist)") |
| \*.json | Style adnotacji dla środowiska Rysunek Roboczy | [Rysunek roboczy: AnnotationStyleEditor](/Draft_AnnotationStyleEditor/pl "Draft AnnotationStyleEditor/pl") | [Rysunek roboczy: AnnotationStyleEditor](/Draft_AnnotationStyleEditor/pl "Draft AnnotationStyleEditor/pl") |
| \*.json | Ustawienia stylu dla środowiska Rysunek Roboczy | [Ustaw styl](/Draft_SetStyle/pl "Draft SetStyle/pl") środowiska Rysunek Roboczy | [Ustaw styl](/Draft_SetStyle/pl "Draft SetStyle/pl") środowiska Rysunek Roboczy |
| \*.json | FEM mesh | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| [\*.json](/Arch_JSON "Arch JSON") | JavaScript Object Notation | no | [Std Export](/Std_Export "Std Export") |
| \*.med | Siatka MES. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.meshjson | Siatka MES. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.meshpy | Siatki MES. | nie |
| \*.meshyaml | Siatka FEM. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.nas | Siatka typu Nastran. | [Import siatki](/Mesh_Import/pl "Mesh Import/pl") | [Siatka: Eksport](/Mesh_Export/pl "Mesh Export/pl") |
| \*.nc | G-code. | [Std: Import](/Std_Import/pl "Std Import/pl") | [CAM: Post](/CAM_Post/pl "CAM Post/pl") |
| \*.ncc | G-code. | [Std: Import](/Std_Import/pl "Std Import/pl") | [CAM: Post](/CAM_Post/pl "CAM Post/pl") |
| \*.ngc | G-code. | [Std: Import](/Std_Import/pl "Std Import/pl") | [CAM: Post](/CAM_Post/pl "CAM Post/pl") |
| \*.obj | Siatka typu Alias. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Siatka: Import](/Mesh_Import/pl "Mesh Import/pl") | [Std: Export](/Std_Export/pl "Std Export/pl"), [Siatka: Eksport](/Mesh_Export/pl "Mesh Export/pl") |
| [\*.obj](/Arch_OBJ/pl "Arch OBJ/pl") | Format Wavefront. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| [\*.oca](/Draft_OCA/pl "Draft OCA/pl") | Format programu Open CAD *(przestarzały, tylko format 2D)*. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.off | Format pliku obiektowego siatki. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Siatka: Import](/Mesh_Import/pl "Mesh Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Siatka: Eksport](/Mesh_Export/pl "Mesh Export/pl") |
| \*.pbm | Format pliku graficznego. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | [Std: ViewScreenShot](/Std_ViewScreenShot/pl "Std ViewScreenShot/pl") |
| \*.pcd | Format wymiany siatki / chmura punktów. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Punkty: Import](/Points_Import/pl "Points Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Punkty: Eksport](/Points_Export/pl "Points Export/pl") |
| [\*.pdf](/PDF "PDF") | Portable Document Format | [Std: Import](/Std_Import/pl "Std Import/pl") *(Format pliku graficznego)*, [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Std: PrintPdf](/Std_PrintPdf/pl "Std PrintPdf/pl") |
| \*.pgm | Format pliku graficznego. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | [Std: ViewScreenShot](/Std_ViewScreenShot/pl "Std ViewScreenShot/pl") |
| \*.plmxml | Format Siemens PLM. | [Std: Import](/Std_Import/pl "Std Import/pl") | nie |
| \*.ply | Format wymiany siatki / chmura punktów. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Punkty: Import](/Points_Import/pl "Points Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Punkty: Eksport](/Points_Export/pl "Points Export/pl") |
| \*.ply | Format siatki trójkąta Stanforda. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Siatka: Import](/Mesh_Import/pl "Mesh Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Siatka: Eksport](/Mesh_Export/pl "Mesh Export/pl") |
| \*.png | Format pliku graficznego. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | [Std: ViewScreenShot](/Std_ViewScreenShot/pl "Std ViewScreenShot/pl") |
| \*.poly | Format siatki FEM, TetGen | nie | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.pov | Format Povray. | [Std Import](/Std_Import/pl "Std Import/pl") | nie |
| \*.ppm | Format pliku graficznego. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | [Std: ViewScreenShot](/Std_ViewScreenShot/pl "Std ViewScreenShot/pl") |
| \*.py | Kod Python. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: DlgMacroRecord](/Std_DlgMacroRecord/pl "Std DlgMacroRecord/pl") |
| \*.py | Moduł Pythona def. | nie | [Siatka: Export](/Mesh_Export/pl "Mesh Export/pl") |
| \*.scad | Format programu OpenSCAD. Wymaga instalacji modułów zewnętrznych. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| [\*.shp](/Arch_SHP/pl "Arch SHP/pl") | Plik z kształtem GIS | [Std: Import](/Std_Import/pl "Std Import/pl") | nie |
| \*.smf | Format uproszczonego modelu. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Siatka: Eksport](/Mesh_Export/pl "Mesh Export/pl") |
| \*.src | Tor ruchu robota KRL. | nie | [Robot: ExportKukaCompact](/Robot_Export/pl "Robot Export/pl"), [Robot: ExportKukaFull](/Robot_Export/pl "Robot Export/pl") |
| \*.step | Format wymiany dla modeli inżynierskich. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Część: Import](/Part_Import/pl "Part Import/pl") *(z kolorami lub bez)* | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Część: Eksport](/Part_Export/pl "Part Export/pl") *(z kolorami lub bez)* |
| \*.stl | Siatka FEM. | nie | [Std: Eksport](/Std_Export/pl "Std Export/pl") *(binarny lub ASCII)* |
| \*.stl | Format wymiany siatki *(używany głównie na potrzeby druku 3D)*. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Siatka: Import](/Mesh_Import/pl "Mesh Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Siatka: Eksport](/Mesh_Export/pl "Mesh Export/pl") |
| \*.stp | Format wymiany dla modeli inżynierskich. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Część: Import](/Part_Import/pl "Part Import/pl") *(z kolorami lub bez)* | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Część: Eksport](/Part_Export/pl "Part Export/pl") *(z kolorami lub bez)* |
| \*.stpz | Skompresowany STEP. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| [\*.svg](/Draft_SVG/pl "Draft SVG/pl") | Format 2D szeroko stosowany w grafice wektorowej. | [Std: Import](/Std_Import/pl "Std Import/pl") *(format SVG lub pliku graficznego)*, [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Rysunek techniczny: ExportPageSVG](/TechDraw_ExportPageSVG/pl "TechDraw ExportPageSVG/pl"), |
| \*.svgz | Skompresowany SVG | [Std: Import](/Std_Import/pl "Std Import/pl") *(format pliku graficznego)*, [Std: ViewLoadImage](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | nie |
| \*.tap | G-code. | [Std: Import](/Std_Import/pl "Std Import/pl") | [CAM: Post](/CAM_Post/pl "CAM Post/pl") |
| \*.tga | Format pliku graficznego. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | nie |
| \*.tif | Format pliku graficznego. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | [Std: ViewScreenShot](/Std_ViewScreenShot/pl "Std ViewScreenShot/pl") |
| \*.tiff | Format pliku graficznego. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | [Std: ViewScreenShot](/Std_ViewScreenShot/pl "Std ViewScreenShot/pl") |
| \*.tooltable | Narzędzie CAM. | [CAM: ToolLibraryEdit](/index.php?title=CAM_ToolLibraryEdit/pl&action=edit&redlink=1 "CAM ToolLibraryEdit/pl (page does not exist)") | [CAM: ToolLibraryEdit](/index.php?title=CAM_ToolLibraryEdit/pl&action=edit&redlink=1 "CAM ToolLibraryEdit/pl (page does not exist)") |
| \*.tpic | Format pliku graficznego. | [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | no |
| \*i1.txt | Siatka FEM, Z88. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*o2.txt | FEM wynik przesunięcia Z88. | [Std: Import](/Std_Import/pl "Std Import/pl") | nie |
| \*.unv | Siatka FEM. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.vda | Format poiku graficznego | [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | nie |
| \*.vrml | Format VRML, Web 3D. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Siatka: Eksport](/Mesh_Export/pl "Mesh Export/pl") |
| \*.vst | Format pliku graficznego | [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | nie |
| \*.vtk | Siatka FEM. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.vtk | FEM wynik VTK. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.vtu | Siatka FEM. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.vtu | FEM wynik VTK. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.wbmp | Format pliku graficznego. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | [Std: ViewScreenShot](/Std_ViewScreenShot/pl "Std ViewScreenShot/pl") |
| \*.webp | Format pliku graficznego. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | [Std: ViewScreenShot](/Std_ViewScreenShot/pl "Std ViewScreenShot/pl") |
| \*.wrl | Format VRML, Web 3D. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Siatka: Eksport](/Mesh_Export/pl "Mesh Export/pl") |
| \*.wrl.gz | Format VRML, Web 3D. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.wrml | VRML Web 3D format | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.wrz | Format skompresowany VRML | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Siatka: Eksport](/Mesh_Export/pl "Mesh Export/pl") |
| \*.x3d | X3D rozszerzenie siatki 3D. | nie | [Siatka: Eksport](/Mesh_Export/pl "Mesh Export/pl") |
| \*.x3dz | Skompresowany X3D | nie | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Siatka: Eksport](/Mesh_Export/pl "Mesh Export/pl") |
| \*.xbm | Format pliku graficznego. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | [Std: ViewScreenShot](/Std_ViewScreenShot/pl "Std ViewScreenShot/pl") |
| \*.xdmf | Siatka FEM, Fenics. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.xhtml | WebGL/X3D | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl"), [Siatka: Eksport](/Mesh_Export/pl "Mesh Export/pl") |
| \*.xlsx | Format arkusza kalkulacyjnego Excel / Office Open XML. | [Std: Import](/Std_Import/pl "Std Import/pl") | nie |
| \*.xml | Siatka FEM, Fenics. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.xml | Narzędzie CAM. | [CAM: ToolLibraryEdit](/index.php?title=CAM_ToolLibraryEdit/pl&action=edit&redlink=1 "CAM ToolLibraryEdit/pl (page does not exist)") | [CAM: ToolLibraryEdit](/index.php?title=CAM_ToolLibraryEdit/pl&action=edit&redlink=1 "CAM ToolLibraryEdit/pl (page does not exist)") |
| \*.xpm | Format pliku graficznego. | [Std: Import](/Std_Import/pl "Std Import/pl"), [Std: Podgląd obrazka](/Std_ViewLoadImage/pl "Std ViewLoadImage/pl") | [Std: ViewScreenShot](/Std_ViewScreenShot/pl "Std ViewScreenShot/pl") |
| \*.yaml | Siatka FEM. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.yml | YAML script | [Std: Import](/Std_Import/pl "Std Import/pl") | nie |
| \*.z88 | Siatka FEM. | [Std: Import](/Std_Import/pl "Std Import/pl") | [Std: Eksport](/Std_Export/pl "Std Export/pl") |
| \*.zip | Format programu SweetHome3D, XML. | [Std: Import](/Std_Import/pl "Std Import/pl") | nie |
| job\_\*.json | Szablon zadania CAM. | [CAM: Job](/CAM_Job/pl "CAM Job/pl") | [CAM: ExportTemplate](/CAM_ExportTemplate/pl "CAM ExportTemplate/pl") |

Retrieved from "<http://wiki.freecad.org/index.php?title=Import_Export/pl&oldid=1512252>"