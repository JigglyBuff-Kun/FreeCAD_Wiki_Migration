---
title: Importazione ed Esportazione
---
## Introduzione

Questa pagina elenca i vari formati di file che FreeCAD può importare ed esportare. Per completezza, il formato nativo di FreeCAD è incluso nell'elenco. Alcuni formati hanno una relativa pagina wiki che può essere raggiunta cliccando sull'estensione nella prima colonna.

## Correlati

Per maggiori informazioni consultare queste pagine:

* [Preferenze di Importa/Esporta](/Import_Export_Preferences/it "Import Export Preferences/it")
* [FreeCAD Come importare/Esportare](/index.php?title=FreeCAD_Howto_Import_Export/it&action=edit&redlink=1 "FreeCAD Howto Import Export/it (page does not exist)")

## Panoramica dei formati di file

| Formato | Descrizione | Importa / Apre | Esporta / Crea |
| --- | --- | --- | --- |
| [\*.FCStd](/File_Format_FCStd/it "File Format FCStd/it") | Formato nativo di FreeCAD | [File: Apri](/Std_Open/it "Std Open/it"), [File: Unisci progetto...](/Std_MergeProjects/it "Std MergeProjects/it") | [File: Salva](/Std_Save/it "Std Save/it") |
| [\*.cam](/Std_FreezeViews/it "Std FreezeViews/it") | Viste bloccate di FreeCAD (impostazioni di visualizzazione) | [Visualizza: Viste bloccate](/Std_FreezeViews/it "Std FreezeViews/it") | [Visualizza: Viste bloccate](/Std_FreezeViews/it "Std FreezeViews/it") |
| [\*.FCMacro](/Macros/it "Macros/it") | Macro di FreeCAD (codice Python) | [File: Importa](/Std_Import/it "Std Import/it") | [Macro: Registra una macro](/Std_DlgMacroRecord/it "Std DlgMacroRecord/it") |
| [\*.FCMat](/index.php?title=Material/it&action=edit&redlink=1 "Material/it (page does not exist)") | Scheda materiale di FreeCAD | [File: Importa](/Std_Import/it "Std Import/it") | no |
| [\*.FCParam](/Std_DlgParameter/it "Std DlgParameter/it") | File dei parametri di FreeCAD | [Strumenti: Modifica parametri](/Std_DlgParameter/it "Std DlgParameter/it") | [Strumenti: Modifica parametri](/Std_DlgParameter/it "Std DlgParameter/it") |
| \*.FCScript | Script di FreeCAD (codice Python) | [File: Importa](/Std_Import/it "Std Import/it") | [Macro: Registra una macro](/Std_DlgMacroRecord/it "Std DlgMacroRecord/it") |
| \*.fctb | File bit dello strumento CAM (formato JSON) | [CAM ToolBitLibraryOpen](/index.php?title=CAM_ToolBitLibraryOpen/it&action=edit&redlink=1 "CAM ToolBitLibraryOpen/it (page does not exist)") | [CAM ToolBitLibraryOpen](/index.php?title=CAM_ToolBitLibraryOpen/it&action=edit&redlink=1 "CAM ToolBitLibraryOpen/it (page does not exist)") |
| \*.fctl | CAM tool library file (JSON format) | [CAM ToolBitLibraryOpen](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") | [CAM ToolBitLibraryOpen](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") |
| [\*.3ds](/Arch_3DS/it "Arch 3DS/it") | Mesch 3D Studio | [File: Importa](/Std_Import/it "Std Import/it") | no |
| \*.3mf | Formato 3D manufacturing | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it"), [Mesh: Esporta](/Mesh_Export/it "Mesh Export/it") |
| \*.amf | Formato additive manufacturing | no | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.asc | Formato Point cloud | [File: Importa](/Std_Import/it "Std Import/it"), [Punti: Importa punti](/Points_Import/it "Points Import/it") | [File: Esporta](/Std_Export/it "Std Export/it"), [Punti: Esporta punti](/Points_Export/it "Points Export/it") |
| \*.ast | Stereolitografia Mesh in ASCII (utilizzata principalmente per la stampa 3D) | [File: Importa](/Std_Import/it "Std Import/it"), [Mesh: Importa mesh](/Mesh_Import/it "Mesh Import/it") | [File: Esporta](/Std_Export/it "Std Export/it"), [Mesh: Esporta mesh](/Mesh_Export/it "Mesh Export/it") |
| [\*.asy](/Asymptote/it "Asymptote/it") | Codice Asymptote | no | [Mesh: Esporta mesh](/Mesh_Export/it "Mesh Export/it") |
| \*.bdf | Mesh di FEM | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.bdf | Mesh di Nastran | [Mesh: Importa mesh](/Mesh_Import/it "Mesh Import/it") | [Mesh: Esporta mesh](/Mesh_Export/it "Mesh Export/it") |
| \*.bmp | Formato immagine | [File: Importa](/Std_Import/it "Std Import/it"), [Strumentiː Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | [Strumenti: Salva immagine](/Std_ViewScreenShot/it "Std ViewScreenShot/it") |
| \*.bms | Mesh binario | [File: Importa](/Std_Import/it "Std Import/it"), [Mesh: Importa mesh](/Mesh_Import/it "Mesh Import/it") | [File: Esporta](/Std_Export/it "Std Export/it"), [Mesh: Esporta mesh](/Mesh_Export/it "Mesh Export/it") |
| \*.brep | Formato nativo OpenCasCade | [File: Importa](/Std_Import/it "Std Import/it"), [Parte: Importa CAD](/Part_Import/it "Part Import/it") | [File: Esporta](/Std_Export/it "Std Export/it"), [Part: Esporta CAD](/Part_Export/it "Part Export/it") |
| \*.brp | Formato nativo OpenCasCade | [File: Importa](/Std_Import/it "Std Import/it"), [Part: Importa CAD](/Part_Import/it "Part Import/it") | [File: Esporta](/Std_Export/it "Std Export/it"), [Part: Esporta CAD](/Part_Export/it "Part Export/it") |
| \*.cnc | G-code | [File: Importa](/Std_Import/it "Std Import/it") | [CAM: Post process](/CAM_Post/it "CAM Post/it") |
| \*.csg | Formato OpenSCAD Constructive Solid Geometry | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.csv | [Comma-separated values](https://en.wikipedia.org/wiki/Comma-separated_values) | [File: Importa](/Std_Import/it "Std Import/it"), [Foglio di calcolo: Importa foglio di calcolo](/Spreadsheet_Import/it "Spreadsheet Import/it") | [Foglio di calcolo: Esporta foglio di calcolo](/Spreadsheet_Export/it "Spreadsheet Export/it") |
| \*.cur | Formato immagine | [File: Importa](/Std_Import/it "Std Import/it") | [Strumenti: Salva immagine](/Std_ViewScreenShot/it "Std ViewScreenShot/it") |
| [\*.dae](/Arch_DAE/it "Arch DAE/it") | Formato Collada. Per gli utenti Linux: è richiesto il modulo pyCollada esterno. | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| [\*.dat](/Draft_DAT/it "Draft DAT/it") | Dati comuni profilo profilo alare | [File: Importa](/Std_Import/it "Std Import/it") | no |
| \*.dat | Mesh FEM | [File: Importa](/Std_Import/it "Std Import/it") | [File Esporta](/Std_Export/it "Std Export/it") |
| \*.dib | Formato immagine | [Strumentiː Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | no |
| \*.dwg | Formato nativo di AutoCAD. È supportata solo la geometria 2D. Richiesto un [Software aggiuntivo](/FreeCAD_and_DWG_Import/it "FreeCAD and DWG Import/it"). | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| [\*.dxf](/Draft_DXF "Draft DXF") | Formato di scambio disegni Autodesk. È supportata solo la geometria 2D. È richiesto un [Software esterno](/FreeCAD_and_DXF_Import/it "FreeCAD and DXF Import/it") per l'importatore Python legacy e per l'esportatore Python legacy. | [File: Importa](/Std_Import "Std Import") | [File: Esporta](/Std_Export "Std Export"), [TechDraw: Esporta la pagina in DXF](/TechDraw_ExportPageDXF/it "TechDraw ExportPageDXF/it") |
| \*.e57 | Formato Point cloud | [File: Importa](/Std_Import/it "Std Import/it") | no |
| \*.emn | Formato IDF | [File: Importa](/Std_Import/it "Std Import/it") | no |
| \*.frd | Risultati della FEM di CalculiX | [File: Importa](/Std_Import/it "Std Import/it") | no |
| \*.gc | G-code | [File: Importa](/Std_Import/it "Std Import/it") | [CAM: Post process](/CAM_Post/it "CAM Post/it") |
| \*.gcad | Formato Open CAD(obsoleto, formato solo 2D) | [File: Importa](/Std_Import/it "Std Import/it") | no |
| \*.gcode | G-code | [File: Importa](/Std_Import/it "Std Import/it") | [CAM Post process](/CAM_Post/it "CAM Post/it") |
| \*.gif | Formato immagine | [File: Importa](/Std_Import/it "Std Import/it"), [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | no |
| [\*.glb](/GlTF "GlTF") | [GL Transmission Format](https://en.wikipedia.org/wiki/GlTF) | no | [File: Esporta](/Std_Export/it "Std Export/it") |
| [\*.gltf](/GlTF "GlTF") | [GL Transmission Format](https://en.wikipedia.org/wiki/GlTF) | no | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.gv | [Graphviz format](https://en.wikipedia.org/wiki/DOT_%28graph_description_language%29) | no | [Salva](/Std_Save/it "Std Save/it"), [Salva come](/Std_SaveAs/it "Std SaveAs/it"), [Strumenti: ExportDependencyGraph](/Std_ExportDependencyGraph/it "Std ExportDependencyGraph/it") |
| \*.html | WebGL | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.icb | Formato immagine | [Strumenti:Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | no |
| \*.icns | Formato immagine | [File: Importa](/Std_Import/it "Std Import/it"), [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | [Strumenti: Salva immagine](/Std_ViewScreenShot/it "Std ViewScreenShot/it") |
| \*.ico | Formato immagine | [File: Importa](/Std_Import/it "Std Import/it"), [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | [Strumenti: Salva immagine](/Std_ViewScreenShot/it "Std ViewScreenShot/it") |
| [\*.ifc](/Arch_IFC/it "Arch IFC/it") | Il formato di scambio delle Industry Foundation Classes per i modelli BIM. Per utenti Linux: è richiesto il modulo IfcOpenShell esterno. | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| [\*.ifcJSON](/Arch_IFC "Arch IFC") | Il formato di scambio delle Industry Foundation Classes per i modelli BIM. È richiesto il [Modulo IFCJson esterno](https://github.com/buildingSMART/ifcJSON) (deve essere installato manualmente). Per utenti Linux: è richiesto il modulo IfcOpenShell esterno. | no | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.iges | Formato precedente solid-based | [File: Importa](/Std_Import/it "Std Import/it"), [Part: Importa CAD](/Part_Import/it "Part Import/it") (con o senza i colori) | [File: Esporta](/Std_Export/it "Std Export/it"), [Part: Esporta CAD](/Part_Export/it "Part Export/it") (con o senza i colori) |
| \*.igs | Formato precedente solid-based | [File: Importa](/Std_Import/it "Std Import/it"), [Part: Importa CAD](/Part_Import/it "Part Import/it") (con o senza i colori) | [File: Esporta](/Std_Export/it "Std Export/it"), [Part: Esporta CAD](/Part_Export/it "Part Export/it") (con o senza i colori) |
| \*.inc | Formato Povray | [File: Importa](/Std_Import/it "Std Import/it") | no |
| \*.inp | Mesh FEM | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.iv | Formato Inventor V2.1 | [File: Importa](/Std_Import/it "Std Import/it"), [Mesh: Importa mesh](/Mesh_Import/it "Mesh Import/it") | [File: Esporta](/Std_Export/it "Std Export/it"), [Mesh: Esporta mesh](/Mesh_Export/it "Mesh Export/it") |
| \*.jpe | Formato immagine | [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | no |
| \*.jpeg | Formato immagine | [File: Importa](/Std_Import/it "Std Import/it"), [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | [Strumenti: Salva immagine](/Std_ViewScreenShot/it "Std ViewScreenShot/it") |
| \*.jpg | Format immagine | [File: Importa](/Std_Import/it "Std Import/it"), [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | [Strumenti: Salva immagine](/Std_ViewScreenShot/it "Std ViewScreenShot/it") |
| \*.json | Stili di annotazione di Draft | [Draft: Stili di annotazione](/Draft_AnnotationStyleEditor/it "Draft AnnotationStyleEditor/it") | [Draft: Stili di annotazione](/Draft_AnnotationStyleEditor/it "Draft AnnotationStyleEditor/it") |
| \*.json | Impostazioni di stile di Draft | [Utilità: imposta stile](/Draft_SetStyle/it "Draft SetStyle/it") | [Utilità: imposta stile](/Draft_SetStyle/it "Draft SetStyle/it") |
| \*.json | Mesh di FEM | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| [\*.json](/Arch_JSON/it "Arch JSON/it") | JavaScript Object Notation | no | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.med | Mesh di FEM | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.meshjson | FEM mesh | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.meshpy | Mesh di FEM | no | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.meshyaml | Mesh di FEM | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.nas | Mesh di Nastran | [Mesh: Importa mesh](/Mesh_Import/it "Mesh Import/it") | [Mesh: Esporta mesh](/Mesh_Export/it "Mesh Export/it") |
| \*.nc | G-code | [File: Importa](/Std_Import/it "Std Import/it") | [CAM: Post process](/CAM_Post/it "CAM Post/it") |
| \*.ncc | G-code | [File: Importa](/Std_Import/it "Std Import/it") | [CAM: Post process](/CAM_Post/it "CAM Post/it") |
| \*.ngc | G-code | [File: Importa](/Std_Import/it "Std Import/it") | [CAM: Post process](/CAM_Post/it "CAM Post/it") |
| \*.obj | Mesh Alias | [File: Importa](/Std_Import/it "Std Import/it"), [Mesh: Importa mesh](/Mesh_Import/it "Mesh Import/it") | [File: Esporta](/Std_Export/it "Std Export/it"), [Mesh: Esporta mesh](/Mesh_Export/it "Mesh Export/it") |
| [\*.obj](/Arch_OBJ/it "Arch OBJ/it") | Formato Wavefront - modulo Arch | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| [\*.oca](/Draft_OCA/it "Draft OCA/it") | Formato Open CAD (obsoleto, formato solo 2D) | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.off | Formato file mesh Object | [File: Importa](/Std_Import/it "Std Import/it"), [Mesh: Importa mesh](/Mesh_Import/it "Mesh Import/it") | [File: Esporta](/Std_Export/it "Std Export/it"), [Mesh: Esporta mesh](/Mesh_Export/it "Mesh Export/it") |
| \*.pbm | Formato immagine | [File: Importa](/Std_Import/it "Std Import/it"), [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | [Strumenti: Salva immagine](/Std_ViewScreenShot/it "Std ViewScreenShot/it") |
| \*.pcd | Formato Point cloud | [File: Importa](/Std_Import/it "Std Import/it"), [Punti: Importa punti](/Points_Import/it "Points Import/it") | [File: Esporta](/Std_Export/it "Std Export/it"), [Punti: Esporta punti](/Points_Export/it "Points Export/it") |
| [\*.pdf](/PDF/it "PDF/it") | Portable Document Format | [File: Importa](/Std_Import/it "Std Import/it") (formato immagine), [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | [File: Esporta](/Std_Export/it "Std Export/it"), [File: Esporta pdf](/Std_PrintPdf/it "Std PrintPdf/it") |
| \*.pgm | Formato immagine | [File: Importa](/Std_Import/it "Std Import/it"), [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | [Strumenti: Salva immagine](/Std_ViewScreenShot/it "Std ViewScreenShot/it") |
| \*.plmxml | Formato Siemens PLM | [File: Importa](/Std_Import/it "Std Import/it") | no |
| \*.ply | Formato Point cloud | [File: Importa](/Std_Import/it "Std Import/it"), [Punti: Importa punti](/Points_Import/it "Points Import/it") | [File: Esporta](/Std_Export/it "Std Export/it"), [Punti: Esporta punti](/Points_Export/it "Points Export/it") |
| \*.ply | Formato mesh Stanford triangle | [File: Importa](/Std_Import/it "Std Import/it"), [Mesh: Importa mesh](/Mesh_Import/it "Mesh Import/it") | [File: Esporta](/Std_Export/it "Std Export/it"), [Mesh: Esporta mesh](/Mesh_Export/it "Mesh Export/it") |
| \*.png | Formato immagine | [File: Importa](/Std_Import/it "Std Import/it"), [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | [Strumenti: Salva immagine](/Std_ViewScreenShot/it "Std ViewScreenShot/it") |
| \*.poly | Mesh FEM di TetGen | no | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.pov | Formato Povray | [File: Importa](/Std_Import/it "Std Import/it") | no |
| \*.ppm | Formato immagine | [File: Importa](/Std_Import/it "Std Import/it"), [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | [Strumenti: Salva immagine](/Std_ViewScreenShot/it "Std ViewScreenShot/it") |
| \*.pvtu | Mesh di FEM | [File: Importa](/Std_Import/it "Std Import/it") | no |
| \*.pvtu | Risultato di FEM in VTK | [File: Importa](/Std_Import/it "Std Import/it") | no |
| \*.py | Codice Python | [File: Importa](/Std_Import/it "Std Import/it") | [Macro: Registra una macro](/Std_DlgMacroRecord/it "Std DlgMacroRecord/it") |
| \*.py | Modulo Python | no | [Mesh: Esporta mesh](/Mesh_Export/it "Mesh Export/it") |
| \*.scad | Formato OpenSCAD. Software esterno richiesto per l'importazione. | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| [\*.shp](/Arch_SHP/it "Arch SHP/it") | GIS shapefile | [File: Importa](/Std_Import/it "Std Import/it") | no |
| \*.smf | Simple model format | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it"), [Mesh: Esporta mesh](/Mesh_Export/it "Mesh Export/it") |
| \*.src | Traiettoria robot KRL | no | [Robot: Subroutine Kuka compatta](/Robot_Export/it "Robot Export/it"), [Robot: Subroutine Kuka completa](/Robot_Export/it "Robot Export/it") |
| \*.step | Formato di scambio per modelli ingegneristici | [File: Importa](/Std_Import/it "Std Import/it"), [Parte: Importa CAD](/Part_Import/it "Part Import/it") (con o senza colori) | [File: Esporta](/Std_Export/it "Std Export/it"), [Parte: Esporta CAD](/Part_Export/it "Part Export/it") (con o senza colori) |
| \*.stl | Mesh FEM | no | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.stl | Mesh in Stereolitografia (utilizzato principalmente per la stampa 3D) | [File: Importa](/Std_Import/it "Std Import/it"), [Mesh: Importa mesh](/Mesh_Import/it "Mesh Import/it") | [File: Esporta](/Std_Export/it "Std Export/it"), [Mesh: Esporta mesh](/Mesh_Export/it "Mesh Export/it") (binario or ASCII) |
| \*.stp | Formato di scambio per modelli ingegneristici | [File: Importa](/Std_Import/it "Std Import/it"), [Part: Importa CAD](/Part_Import/it "Part Import/it") (con o senza colori) | [File: Esporta](/Std_Export/it "Std Export/it"), [Parte: Esporta CAD](/Part_Export/it "Part Export/it") (con o senza colori) |
| \*.stpz | STEP Compresso | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| [\*.svg](/Draft_SVG/it "Draft SVG/it") | Formato Scalable Vector Graphics | [File: Importa](/Std_Import/it "Std Import/it") (SVG o formato immagine), [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | [File: Esporta](/Std_Export/it "Std Export/it"), [TechDraw: Esporta la pagina in SVG](/TechDraw_ExportPageSVG/it "TechDraw ExportPageSVG/it") |
| \*.svgz | SVG compresso | [File: Importa](/Std_Import/it "Std Import/it") (formato immagine), [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | no |
| \*.tap | G-code | [File: Importa](/Std_Import/it "Std Import/it") | [CAM: Post process](/CAM_Post/it "CAM Post/it") |
| \*.tga | Formato Immagine | [File: Importa](/Std_Import/it "Std Import/it"), [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | no |
| \*.tif | Formato immagine | [File: Importa](/Std_Import/it "Std Import/it"), [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | [Strumenti: Salva immagine](/Std_ViewScreenShot/it "Std ViewScreenShot/it") |
| \*.tiff | Formato immagine | [File: Importa](/Std_Import/it "Std Import/it"), [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | [Strumenti: Salva immagine](/Std_ViewScreenShot/it "Std ViewScreenShot/it") |
| \*.tooltable | CAM tool | [CAM ToolLibraryEdit](/index.php?title=CAM_ToolLibraryEdit&action=edit&redlink=1 "CAM ToolLibraryEdit (page does not exist)") | [CAM ToolLibraryEdit](/index.php?title=CAM_ToolLibraryEdit&action=edit&redlink=1 "CAM ToolLibraryEdit (page does not exist)") |
| \*.tpic | Formato immagine | [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | no |
| \*i1.txt | Mesh della FEM Z88 | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*o2.txt | Risultati delle deformazioni per la FEM Z88 | [File: Importa](/Std_Import/it "Std Import/it") | no |
| \*.unv | Mesh FEM | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.vda | Formato immagine | [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | no |
| \*.vrml | Formato 3D VRML Web | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it"), [Mesh: Esporta mesh](/Mesh_Export/it "Mesh Export/it") |
| \*.vst | Formato immagine | [Strumenti: Salva immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | no |
| \*.vtk | Mesh FEM | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.vtk | Risultato FEM di VTK | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.vtu | Mesh FEM | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.vtu | Risultato FEM di VTK | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.wbmp | Formato immagine | [File: Importa](/Std_Import/it "Std Import/it"), [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | [Strumenti: Salva immagine](/Std_ViewScreenShot/it "Std ViewScreenShot/it") |
| \*.webp | Formato immagine | [File: Importa](/Std_Import/it "Std Import/it"), [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | [Strumenti: Salva immagine](/Std_ViewScreenShot/it "Std ViewScreenShot/it") |
| \*.wrl | Formato VRML Web 3D | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it"), [Mesh: Esporta mesh](/Mesh_Export/it "Mesh Export/it") |
| \*.wrl.gz | VRML compresso | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.wrml | Formato VRML Web 3D | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.wrz | VRML compresso | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it"), [Mesh: Esporta mesh](/Mesh_Export/it "Mesh Export/it") |
| \*.x3d | 3D estensibile X3D | no | [File: Esporta](/Std_Export/it "Std Export/it"), [Mesh: Esporta mesh](/Mesh_Export/it "Mesh Export/it") |
| \*.x3dz | X3D compresso | no | [File: Esporta](/Std_Export/it "Std Export/it"), [Mesh: Esporta mesh](/Mesh_Export/it "Mesh Export/it") |
| \*.xbm | Formato immagine | [File: Importa](/Std_Import/it "Std Import/it"), [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | [Strumenti: Salva immagine](/Std_ViewScreenShot/it "Std ViewScreenShot/it") |
| \*.xdmf | Mesh FEM di Fenics | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.xhtml | WebGL/X3D | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it"), [Mesh: Esporta mesh](/Mesh_Export/it "Mesh Export/it") |
| \*.xlsx | Foglio di calcolo Excel / Office Open XML | [File: Importa](/Std_Import/it "Std Import/it") | no |
| \*.xml | Mesh FEM di Fenics | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.xml | Utensile di CAM | [CAM: ToolBit Library editor](/index.php?title=CAM_ToolLibraryEdit/it&action=edit&redlink=1 "CAM ToolLibraryEdit/it (page does not exist)") | [CAM: ToolBit Library editor](/index.php?title=CAM_ToolLibraryEdit/it&action=edit&redlink=1 "CAM ToolLibraryEdit/it (page does not exist)") |
| \*.xpm | Formato immagine | [File: Importa](/Std_Import/it "Std Import/it"), [Strumenti: Carica immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it") | [Strumenti: Salva immagine](/Std_ViewScreenShot/it "Std ViewScreenShot/it") |
| \*.yaml | Mesh FEM | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.yml | Script YAML | [File: Importa](/Std_Import/it "Std Import/it") | no |
| \*.z88 | Mesh FEM | [File: Importa](/Std_Import/it "Std Import/it") | [File: Esporta](/Std_Export/it "Std Export/it") |
| \*.zip | SweetHome3D XML | [File: Importa](/Std_Import/it "Std Import/it") | no |
| job\_\*.json | Modello CAM job | [CAM: Lavorazione](/CAM_Job/it "CAM Job/it") | [CAM: Exporta Modello](/CAM_ExportTemplate/it "CAM ExportTemplate/it") |

Retrieved from "<http://wiki.freecad.org/index.php?title=Import_Export/it&oldid=1511529>"