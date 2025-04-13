---
title: Import / Export
---
## Einleitung

Diese Seite listet die verschiedenen Dateiformate auf, die FreeCAD importieren und exportieren kann. Der Vollständigkeit halber ist FreeCADs eigenes Format in der Liste enthalten. Einige Formate haben eine zugehörige Wiki-Seite, die durch Klicken auf die Erweiterung in der ersten Spalte erreicht werden kann.

## Verwandt

Siehe die folgenden Seiten für zusätzliche Informationen:

* [Import Export Einstellungen](/Import_Export_Preferences/de "Import Export Preferences/de")
* [FreeCAD Anleitung Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export")

## Übersicht der Dateiformate

| Format | Beschreibung | Importieren/Öffnen mit | Exportieren/Erstellen mit |
| --- | --- | --- | --- |
| [\*.FCStd](/File_Format_FCStd/de "File Format FCStd/de") | FreeCADs eigenes Dateiformat | [Std Öffnen](/Std_Open/de "Std Open/de"), [Std ProjekteZusammenführen](/Std_MergeProjects/de "Std MergeProjects/de") | [Std Speichern](/Std_Save/de "Std Save/de") |
| [\*.cam](/Std_FreezeViews/de "Std FreezeViews/de") | FreeCADs eingefrorene Ansichten (Kameraeinstellungen) | [Std AnsichtenEinfrieren](/Std_FreezeViews/de "Std FreezeViews/de") | [Std AnsichtenEinfrieren](/Std_FreezeViews/de "Std FreezeViews/de") |
| [\*.FCMacro](/Macros/de "Macros/de") | FreeCAD-Makro (Python-Code) | [Std Import](/Std_Import/de "Std Import/de") | [Std DlgMakroAufzeichnen](/Std_DlgMacroRecord/de "Std DlgMacroRecord/de") |
| [\*.FCMat](/index.php?title=Material/de&action=edit&redlink=1 "Material/de (page does not exist)") | FreeCAD-Materialkarte | [Std Import](/Std_Import/de "Std Import/de") | Nein |
| [\*.FCParam](/Std_DlgParameter/de "Std DlgParameter/de") | FreeCAD-Parameterdatei | [Std DlgParameterEditor](/Std_DlgParameter/de "Std DlgParameter/de") | [Std DlgParameterEditor](/Std_DlgParameter/de "Std DlgParameter/de") |
| \*.FCScript | FreeCAD-Skript (Python-Code) | [Std Import](/Std_Import/de "Std Import/de") | [Std DlgMakroAufzeichnen](/Std_DlgMacroRecord/de "Std DlgMacroRecord/de") |
| \*.fctb | CAM-Werkzeug-Bit-Datei (JSON-Format) | [CAM WerkzeugBitBibliothekÖffnen](/CAM_ToolBitLibraryOpen/de "CAM ToolBitLibraryOpen/de") | [CAM WerkzeugBitBibliothekÖffnen](/CAM_ToolBitLibraryOpen/de "CAM ToolBitLibraryOpen/de") |
| \*.fctl | CAM-Werkzeugbibliothek-Datei (JSON-Format) | [CAM WerkzeugBitBibliothekÖffnen](/CAM_ToolBitLibraryOpen/de "CAM ToolBitLibraryOpen/de") | [CAM WerkzeugBitBibliothekÖffnen](/CAM_ToolBitLibraryOpen/de "CAM ToolBitLibraryOpen/de") |
| [\*.3ds](/Arch_3DS/de "Arch 3DS/de") | 3D-Studio-Netz | [Std Import](/Std_Import/de "Std Import/de") | Nein |
| \*.3mf | 3D-Manufacturing-Format | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de"), [Mesh Exportieren](/Mesh_Export/de "Mesh Export/de") |
| \*.amf | Additive-Manufacturing-Format | Nein | [Std Export](/Std_Export/de "Std Export/de") |
| \*.asc | Punktwolke-Format | [Std Import](/Std_Import/de "Std Import/de"), [Punkte Importieren](/Points_Import/de "Points Import/de") | [Std Export](/Std_Export/de "Std Export/de"), [Punkte Exportieren](/Points_Export/de "Points Export/de") |
| \*.ast | ASCII-Stereolithographie-Netz (hauptsächlich für 3D-Druck verwendet) | [Std Import](/Std_Import/de "Std Import/de"), [Mesh Importieren](/Mesh_Import/de "Mesh Import/de") | [Std Export](/Std_Export/de "Std Export/de"), [Mesh Exportieren](/Mesh_Export/de "Mesh Export/de") |
| [\*.asy](/Asymptote/de "Asymptote/de") | Asymptote-Code (Asymptote ist eine Programmiersprache zur Generierung von Graphen und Zahlen in 2D und 3D) | Nein | [Mesh Exportieren](/Mesh_Export/de "Mesh Export/de") |
| \*.bdf | FEM-Netz | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*.bdf | Nastran-Netz | [Mesh Importieren](/Mesh_Import/de "Mesh Import/de") | [Mesh Exportieren](/Mesh_Export/de "Mesh Export/de") |
| \*.bmp | Bildformat | [Std Import](/Std_Import/de "Std Import/de"), [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | [Std AnsichtAufnehmen](/Std_ViewScreenShot/de "Std ViewScreenShot/de") |
| \*.bms | Binary mesh | [Std Import](/Std_Import/de "Std Import/de"), [Mesh Importieren](/Mesh_Import/de "Mesh Import/de") | [Std Export](/Std_Export/de "Std Export/de"), [Mesh Exportieren](/Mesh_Export/de "Mesh Export/de") |
| \*.brep | OpenCasCades eigenes Format | [Std Import](/Std_Import/de "Std Import/de"), [Part Import](/Part_Import/de "Part Import/de") | [Std Export](/Std_Export/de "Std Export/de"), [Part Export](/Part_Export/de "Part Export/de") |
| \*.brp | OpenCasCades eigenes Format | [Std Import](/Std_Import/de "Std Import/de"), [Part Import](/Part_Import/de "Part Import/de") | [Std Export](/Std_Export/de "Std Export/de"), [Part Export](/Part_Export/de "Part Export/de") |
| \*.cnc | G-Code | [Std Import](/Std_Import/de "Std Import/de") | [CAM Nachbereiten](/CAM_Post/de "CAM Post/de") |
| \*.csg | OpenSCADs Constructive-Solid-Geometry-Format | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*.csv | [Comma-Separated-Values](https://en.wikipedia.org/wiki/Comma-separated_values) | [Std Import](/Std_Import/de "Std Import/de"), [Spreadsheet Importieren](/Spreadsheet_Import/de "Spreadsheet Import/de") | [Spreadsheet Exportieren](/Spreadsheet_Export/de "Spreadsheet Export/de") |
| \*.cur | Bildformat | [Std Import](/Std_Import/de "Std Import/de") | [Std AnsichtAufnehmen](/Std_ViewScreenShot/de "Std ViewScreenShot/de") |
| [\*.dae](/Arch_DAE/de "Arch DAE/de") | Collada-Format. Für Linux-Anwender: Externes pyCollada-Modul erforderlich. | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| [\*.dat](/Draft_DAT/de "Draft DAT/de") | Gebräuchliche Tragflächendaten | [Std Import](/Std_Import/de "Std Import/de") | Nein |
| \*.dat | FEM-Netz | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*.dib | Bildformat | [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | Nein |
| \*.dwg | AutoCADs eigenes Format. Nur 2D-Geometrie wird unterstützt. [Externe Software](/FreeCAD_and_DWG_Import/de "FreeCAD and DWG Import/de") erforderlich. | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| [\*.dxf](/Draft_DXF/de "Draft DXF/de") | Autodesks Zeichnungsaustauschformat. Nur 2D-Geometrie wird unterstützt.[Externe Software](/FreeCAD_and_DXF_Import/de "FreeCAD and DXF Import/de") erforderlich für den Legacy-Python-Importer und den Legacy-Python-Exporter. | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de"), [TechDraw BlattExportierenDXF](/TechDraw_ExportPageDXF/de "TechDraw ExportPageDXF/de") |
| \*.e57 | Punktwolke-Format | [Std Import](/Std_Import/de "Std Import/de") | Nein |
| \*.emn | IDF-Format | [Std Import](/Std_Import/de "Std Import/de") | Nein |
| \*.frd | FEM-Ergebnis CalculiX | [Std Import](/Std_Import/de "Std Import/de") | Nein |
| \*.gc | G-Code | [Std Import](/Std_Import/de "Std Import/de") | [CAM Nachbereiten](/CAM_Post/de "CAM Post/de") |
| \*.gcad | Offenes CAD-Format (veraltet, Nur-2D-Format) | [Std Import](/Std_Import/de "Std Import/de") | Nein |
| \*.gcode | G-Code | [Std Import](/Std_Import/de "Std Import/de") | [CAM Nachbereiten](/CAM_Post/de "CAM Post/de") |
| \*.gif | Bildformat | [Std Import](/Std_Import/de "Std Import/de"), [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | Nein |
| [\*.glb](/GlTF/de "GlTF/de") | [GL-Transmission-Format](https://en.wikipedia.org/wiki/GlTF) | Nein | [Std Export](/Std_Export/de "Std Export/de") |
| [\*.gltf](/GlTF "GlTF") | [GL-Transmission-Format](https://en.wikipedia.org/wiki/GlTF) | Nein | [Std Export](/Std_Export/de "Std Export/de") |
| \*.html | WebGL | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*.icb | Bildformat | [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | Nein |
| \*.icns | Bildformat | [Std Import](/Std_Import/de "Std Import/de"), [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | [Std AnsichtAufnehmen](/Std_ViewScreenShot/de "Std ViewScreenShot/de") |
| \*.ico | Bildformat | [Std Import](/Std_Import/de "Std Import/de"), [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | [Std AnsichtAufnehmen](/Std_ViewScreenShot/de "Std ViewScreenShot/de") |
| [\*.ifc](/Arch_IFC/de "Arch IFC/de") | Industry-Foundation-Classes-Austauschformat für BIM-Modelle. Für Linux-Anwender: Externes IfcOpenShell-Modul erforderlich. | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| [\*.ifcJSON](/Arch_IFC/de "Arch IFC/de") | Industry-Foundation-Classes-Austauschformat für BIM-Modelle. [Externes IFCJson-Modul](https://github.com/buildingSMART/ifcJSON) erforderlich (muss manuell installiert werden). Für Linux-Anwender: Externes IfcOpenShell-Modul erforderlich. | Nein | [Std Export](/Std_Export/de "Std Export/de") |
| \*.gv | [Graphviz format](https://en.wikipedia.org/wiki/DOT_%28graph_description_language%29) | no | [Std Speichern](/Std_Save/de "Std Save/de"), [Std Speichern unter](/Std_SaveAs/de "Std SaveAs/de"), [Std AbhängigkeitsgraphExportieren](/Std_ExportDependencyGraph/de "Std ExportDependencyGraph/de") |
| \*.iges | Älteres festkörperbasiertes Format | [Std Import](/Std_Import/de "Std Import/de"), [Part Import](/Part_Import/de "Part Import/de") (mit oder ohne Farben) | [Std Export](/Std_Export/de "Std Export/de"), [Part Export](/Part_Export/de "Part Export/de") (mit oder ohne Farben) |
| \*.igs | Älteres festkörperbasiertes Format | [Std Import](/Std_Import/de "Std Import/de"), [Part Import](/Part_Import/de "Part Import/de") (mit oder ohne Farben) | [Std Export](/Std_Export/de "Std Export/de"), [Part Export](/Part_Export/de "Part Export/de") (mit oder ohne Farben) |
| \*.inc | Povray-Format | [Std Import](/Std_Import/de "Std Import/de") | Nein |
| \*.inp | FEM-Netz | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*.iv | Inventor-V2.1-Format | [Std Import](/Std_Import/de "Std Import/de"), [Mesh Importieren](/Mesh_Import/de "Mesh Import/de") | [Std Export](/Std_Export/de "Std Export/de"), [Mesh Exportieren](/Mesh_Export/de "Mesh Export/de") |
| \*.jpe | Bildformat | [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | Nein |
| \*.jpeg | Bildformat | [Std Import](/Std_Import/de "Std Import/de"), [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | [Std AnsichtAufnehmen](/Std_ViewScreenShot/de "Std ViewScreenShot/de") |
| \*.jpg | Bildformat | [Std Import](/Std_Import/de "Std Import/de"), [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | [Std AnsichtAufnehmen](/Std_ViewScreenShot/de "Std ViewScreenShot/de") |
| \*.json | Draft-Beschriftungsstile | [Draft BeschriftungsstilEditor](/Draft_AnnotationStyleEditor/de "Draft AnnotationStyleEditor/de") | [Draft BeschriftungsstilEditor](/Draft_AnnotationStyleEditor/de "Draft AnnotationStyleEditor/de") |
| \*.json | Draft-Stileinstellungen | [Draft StilFestlegen](/Draft_SetStyle/de "Draft SetStyle/de") | [Draft StilFestlegen](/Draft_SetStyle/de "Draft SetStyle/de") |
| \*.json | FEM-Netz | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| [\*.json](/Arch_JSON/de "Arch JSON/de") | JavaScript-Object-Notation | Nein | [Std Export](/Std_Export/de "Std Export/de") |
| \*.med | FEM-Netz | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*.meshjson | FEM-Netz | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*.meshpy | FEM-Netz | no | [Std Export](/Std_Export/de "Std Export/de") |
| \*.meshyaml | FEM-Netz | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*.nas | Nastran-Netz | [Mesh Importieren](/Mesh_Import/de "Mesh Import/de") | [Mesh Exportieren](/Mesh_Export/de "Mesh Export/de") |
| \*.nc | G-Code | [Std Import](/Std_Import/de "Std Import/de") | [CAM Nachbereiten](/CAM_Post/de "CAM Post/de") |
| \*.ncc | G-Code | [Std Import](/Std_Import/de "Std Import/de") | [CAM Nachbereiten](/CAM_Post/de "CAM Post/de") |
| \*.ngc | G-Code | [Std Import](/Std_Import/de "Std Import/de") | [CAM Nachbereiten](/CAM_Post/de "CAM Post/de") |
| \*.obj | Alias-Netz | [Std Import](/Std_Import/de "Std Import/de"), [Mesh Importieren](/Mesh_Import/de "Mesh Import/de") | [Std Export](/Std_Export/de "Std Export/de"), [Mesh Exportieren](/Mesh_Export/de "Mesh Export/de") |
| [\*.obj](/Arch_OBJ/de "Arch OBJ/de") | Wavefront-Format - Arch-Modul | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| [\*.oca](/Draft_OCA/de "Draft OCA/de") | Offenes CAD-Format (veraltet, Nur-2D-Format) | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*.off | Object-File-Format-Netz | [Std Import](/Std_Import/de "Std Import/de"), [Mesh Importieren](/Mesh_Import/de "Mesh Import/de") | [Std Export](/Std_Export/de "Std Export/de"), [Mesh Exportieren](/Mesh_Export/de "Mesh Export/de") |
| \*.pbm | Bildformat | [Std Import](/Std_Import/de "Std Import/de"), [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | [Std AnsichtAufnehmen](/Std_ViewScreenShot/de "Std ViewScreenShot/de") |
| \*.pcd | Punktwolke-Format | [Std Import](/Std_Import/de "Std Import/de"), [Points Importieren](/Points_Import/de "Points Import/de") | [Std Export](/Std_Export/de "Std Export/de"), [Points Exportieren](/Points_Export/de "Points Export/de") |
| [\*.pdf](/PDF/de "PDF/de") | Portable-Document-Format | [Std Import](/Std_Import/de "Std Import/de") (Bildformat), [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | [Std Export](/Std_Export/de "Std Export/de"), [Std DruckZuPDF](/Std_PrintPdf/de "Std PrintPdf/de") |
| \*.pgm | Bildformat | [Std Import](/Std_Import/de "Std Import/de"), [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | [Std AnsichtAufnehmen](/Std_ViewScreenShot/de "Std ViewScreenShot/de") |
| \*.plmxml | Siemens PLM-format | [Std Import](/Std_Import/de "Std Import/de") | Nein |
| \*.ply | Punktwolke-Format | [Std Import](/Std_Import/de "Std Import/de"), [Points Importieren](/Points_Import/de "Points Import/de") | [Std Export](/Std_Export/de "Std Export/de"), [Points Exportieren](/Points_Export/de "Points Export/de") |
| \*.ply | Stanford Dreiecksnetz-Format | [Std Import](/Std_Import/de "Std Import/de"), [Mesh Importieren](/Mesh_Import/de "Mesh Import/de") | [Std Export](/Std_Export/de "Std Export/de"), [Mesh Exportieren](/Mesh_Export/de "Mesh Export/de") |
| \*.png | Bildformat | [Std Import](/Std_Import/de "Std Import/de"), [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | [Std AnsichtAufnehmen](/Std_ViewScreenShot/de "Std ViewScreenShot/de") |
| \*.poly | FEM-Netz TetGen | Nein | [Std Export](/Std_Export/de "Std Export/de") |
| \*.pov | Povray-Format | [Std Import](/Std_Import/de "Std Import/de") | Nein |
| \*.ppm | Bildformat | [Std Import](/Std_Import/de "Std Import/de"), [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | [Std AnsichtAufnehmen](/Std_ViewScreenShot/de "Std ViewScreenShot/de") |
| \*.pvtu | FEM-Netz | [Std Import](/Std_Import/de "Std Import/de") | Nein |
| \*.pvtu | FEM-Ergebnis VTK | [Std Import](/Std_Import/de "Std Import/de") | Nein |
| \*.py | Python-Code | [Std Import](/Std_Import/de "Std Import/de") | [Std DlgMakroAufzeichnen](/Std_DlgMacroRecord/de "Std DlgMacroRecord/de") |
| \*.py | Python module def | Nein | [Mesh Exportieren](/Mesh_Export/de "Mesh Export/de") |
| \*.scad | OpenSCAD-Format. Externe software für den Import erforderlich | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| [\*.shp](/Arch_SHP/de "Arch SHP/de") | GIS-Form-Datei | [Std Import](/Std_Import/de "Std Import/de") | Nein |
| \*.smf | Simple-Model-Format | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de"), [Mesh Exportieren](/Mesh_Export/de "Mesh Export/de") |
| \*.src | KRL-Roboter-Bewegungsbahn | Nein | [Robot Export - KukaCompact](/Robot_Export/de "Robot Export/de"), [Robot Export - KukaFull](/Robot_Export/de "Robot Export/de") |
| \*.step | Austauschformat für technische Modelle | [Std Import](/Std_Import/de "Std Import/de"), [Part Import](/Part_Import/de "Part Import/de") (mit oder ohne Farben) | [Std Export](/Std_Export/de "Std Export/de"), [Part Export](/Part_Export/de "Part Export/de") (mit oder ohne Farben) |
| \*.stl | FEM-Netz | Nein | [Std Export](/Std_Export/de "Std Export/de") |
| \*.stl | Stereolithographie-Netz (hauptsächlich für 3D-Druck verwendet) | [Std Import](/Std_Import/de "Std Import/de"), [Mesh Importieren](/Mesh_Import/de "Mesh Import/de") | [Std Export](/Std_Export/de "Std Export/de"), [Mesh Exportieren](/Mesh_Export/de "Mesh Export/de") (binär oder ASCII) |
| \*.stp | Austauschformat für technische Modelle | [Std Import](/Std_Import/de "Std Import/de"), [Part Import](/Part_Import/de "Part Import/de") (mit oder ohne Farben) | [Std Export](/Std_Export/de "Std Export/de"), [Part Export](/Part_Export/de "Part Export/de") (mit oder ohne Farben) |
| \*.stpz | Komprimiertes STEP-Format | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| [\*.svg](/Draft_SVG/de "Draft SVG/de") | Scalable-Vector-Graphics-Format | [Std Import](/Std_Import/de "Std Import/de") (SVG oder Bildformat), [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | [Std Export](/Std_Export/de "Std Export/de"), [TechDraw BlattExportierenSVG](/TechDraw_ExportPageSVG/de "TechDraw ExportPageSVG/de") |
| \*.svgz | Komprimiertes SVG-Format | [Std Import](/Std_Import/de "Std Import/de") (Bildformat), [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | Nein |
| \*.tap | G-Code | [Std Import](/Std_Import/de "Std Import/de") | [CAM Nachbereitung](/CAM_Post/de "CAM Post/de") |
| \*.tga | Bildformat | [Std Import](/Std_Import/de "Std Import/de"), [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | Nein |
| \*.tif | Bildformat | [Std Import](/Std_Import/de "Std Import/de"), [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | [Std AnsichtAufnehmen](/Std_ViewScreenShot/de "Std ViewScreenShot/de") |
| \*.tiff | Bildformat | [Std Import](/Std_Import/de "Std Import/de"), [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | [Std AnsichtAufnehmen](/Std_ViewScreenShot/de "Std ViewScreenShot/de") |
| \*.tooltable | CAM-Werkzeug | [CAM WerkzeugBitBibliothekÖffnen](/CAM_ToolBitLibraryOpen/de "CAM ToolBitLibraryOpen/de") | [CAM WerkzeugBitBibliothekÖffnen](/CAM_ToolBitLibraryOpen/de "CAM ToolBitLibraryOpen/de") |
| \*.tpic | Bildformat | [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | Nein |
| \*i1.txt | FEM-Netz Z88 | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*o2.txt | FEM-Ergebnis Z88 Verschiebungen | [Std Import](/Std_Import/de "Std Import/de") | Nein |
| \*.unv | FEM-Netz | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*.vda | Bildformat | [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | Nein |
| \*.vrml | VRML-Web-3D-Format | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de"), [Mesh Exportieren](/Mesh_Export/de "Mesh Export/de") |
| \*.vst | Bildformat | [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | Nein |
| \*.vtk | FEM-Netz | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*.vtk | FEM-Ergebnis VTK | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*.vtu | FEM-Netz | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*.vtu | FEM-Ergebnis VTK | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*.wbmp | Bildformat | [Std Import](/Std_Import/de "Std Import/de"), [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | [Std AnsichtAufnehmen](/Std_ViewScreenShot/de "Std ViewScreenShot/de") |
| \*.webp | Bildformat | [Std Import](/Std_Import/de "Std Import/de"), [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | [Std AnsichtAufnehmen](/Std_ViewScreenShot/de "Std ViewScreenShot/de") |
| \*.wrl | VRML-Web-3D-Format | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de"), [Mesh Exportieren](/Mesh_Export/de "Mesh Export/de") |
| \*.wrl.gz | Komprimiertes VRML-Format | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*.wrml | VRML-Web-3D-Format | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*.wrz | Komprimiertes VRML-Format | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de"), [Mesh Exportieren](/Mesh_Export/de "Mesh Export/de") |
| \*.x3d | X3D, Extensible-3D | Nein | [Std Export](/Std_Export/de "Std Export/de"), [Mesh Exportieren](/Mesh_Export/de "Mesh Export/de") |
| \*.x3dz | Komprimiertes X3D-Format | Nein | [Std Export](/Std_Export/de "Std Export/de"), [Mesh Export](/Mesh_Export/de "Mesh Export/de") |
| \*.xbm | Bildformat | [Std Import](/Std_Import/de "Std Import/de"), [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | [Std AnsichtAufnehmen](/Std_ViewScreenShot/de "Std ViewScreenShot/de") |
| \*.xdmf | FEM-Netz Fenics | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*.xhtml | WebGL/X3D | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de"), [Mesh Exportieren](/Mesh_Export/de "Mesh Export/de") |
| \*.xlsx | Excel / Office Open-XML-Spreadsheet | [Std Import](/Std_Import/de "Std Import/de") | Nein |
| \*.xml | FEM-Netz Fenics | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*.xml | CAM-Werkzeug | [CAM WerkzeugBitBibliothekÖffnen](/CAM_ToolBitLibraryOpen/de "CAM ToolBitLibraryOpen/de") | [CAM WerkzeugBitBibliothekÖffnen](/CAM_ToolBitLibraryOpen/de "CAM ToolBitLibraryOpen/de") |
| \*.xpm | Bildformat | [Std Import](/Std_Import/de "Std Import/de"), [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de") | [Std AnsichtAufnehmen](/Std_ViewScreenShot/de "Std ViewScreenShot/de") |
| \*.yaml | FEM-Netz | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*.yml | YAML-Skript | [Std Import](/Std_Import/de "Std Import/de") | Nein |
| \*.z88 | FEM-Netz | [Std Import](/Std_Import/de "Std Import/de") | [Std Export](/Std_Export/de "Std Export/de") |
| \*.zip | SweetHome3D-XML | [Std Import](/Std_Import/de "Std Import/de") | Nein |
| job\_\*.json | CAM-Auftragsvorlage | [CAM Auftrag](/CAM_Job/de "CAM Job/de") | [CAM VorlageExportieren](/CAM_ExportTemplate/de "CAM ExportTemplate/de") |

Retrieved from "<http://wiki.freecad.org/index.php?title=Import_Export/de&oldid=1510763>"