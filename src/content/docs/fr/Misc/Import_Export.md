---
title: Import Export
---
## Introduction

Cette page répertorie les différents formats de fichiers que FreeCAD peut importer et exporter. Pour être complet, le format natif de FreeCAD est inclus dans la liste. Certains formats ont une page wiki en cliquant sur l'extension dans la première colonne.

## En relation

Consultez les pages suivantes pour plus d'informations:

* [Préférences Importer/Exporter](/Import_Export_Preferences/fr "Import Export Preferences/fr")
* [FreeCAD Howto Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export") (en)

## Présentation des formats de fichiers

| Format | Description | Importer / Ouvrir | Exporter / Créer |
| --- | --- | --- | --- |
| [\*.FCStd](/File_Format_FCStd/fr "File Format FCStd/fr") | Format natif de FreeCAD | [Std Ouvrir](/Std_Open/fr "Std Open/fr"), [Std Ajouter au document](/Std_MergeProjects/fr "Std MergeProjects/fr") | [Std Enregistrer](/Std_Save/fr "Std Save/fr") |
| [\*.cam](/Std_FreezeViews/fr "Std FreezeViews/fr") | Vues figées de FreeCAD (paramètres de la caméra) | [Std Figer l'affichage](/Std_FreezeViews/fr "Std FreezeViews/fr") | [Std Figer l'affichage](/Std_FreezeViews/fr "Std FreezeViews/fr") |
| [\*.FCMacro](/Macros/fr "Macros/fr") | Macro FreeCAD (code Python) | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Enregistrer une macro](/Std_DlgMacroRecord/fr "Std DlgMacroRecord/fr") |
| [\*.FCMat](/Material "Material") | Jeu de paramètres des matériaux FreeCAD | [Std Importer](/Std_Import/fr "Std Import/fr") | non |
| [\*.FCParam](/Std_DlgParameter/fr "Std DlgParameter/fr") | Fichier de paramètres FreeCAD | [Std Editeur des paramètres](/Std_DlgParameter/fr "Std DlgParameter/fr") | [Std Editeur des paramètres](/Std_DlgParameter/fr "Std DlgParameter/fr") |
| \*.FCScript | Script FreeCAD (code Python) | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Enregistrer une macro](/Std_DlgMacroRecord/fr "Std DlgMacroRecord/fr") |
| \*.fctb | Fichier du gestionnaire d'outils de CAM (format JSON) | [CAM Gestionnaire d'outils](/CAM_ToolBitLibraryOpen/fr "CAM ToolBitLibraryOpen/fr") | [CAM Gestionnaire d'outils](/CAM_ToolBitLibraryOpen/fr "CAM ToolBitLibraryOpen/fr") |
| \*.fctl | Fichier du gestionnaire d'outils de CAM (format JSON) | [CAM Gestionnaire d'outils](/CAM_ToolBitLibraryOpen/fr "CAM ToolBitLibraryOpen/fr") | [CAM Gestionnaire d'outils](/CAM_ToolBitLibraryOpen/fr "CAM ToolBitLibraryOpen/fr") |
| [\*.3ds](/Arch_3DS/fr "Arch 3DS/fr") | Maillage 3D Studio | [Std Importer](/Std_Import/fr "Std Import/fr") | non |
| \*.3mf | Format de fabrication 3D | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Mesh Exporter un maillage](/Mesh_Export/fr "Mesh Export/fr") |
| \*.amf | Additive manufacturing format | non | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.asc | Format des nuages de Points | [Std Importer](/Std_Import/fr "Std Import/fr"), [Points Importer](/Points_Import/fr "Points Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Points Exporter](/Points_Export/fr "Points Export/fr") |
| \*.ast | Maillage ASCII pour la stéréolithographie (principalement pour l'impression 3D) | [Std Importer](/Std_Import/fr "Std Import/fr"), [Mesh Importer un maillage](/Mesh_Import/fr "Mesh Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Mesh Exporter un maillage](/Mesh_Export/fr "Mesh Export/fr") |
| [\*.asy](/Asymptote/fr "Asymptote/fr") | Code Asymptote (Asymptote est un langage de programmation pour générer des graphiques et des figures en 2D et 3D) | non | [Asymptote](/Asymptote/fr "Asymptote/fr"), [Mesh Exporter un maillage](/Mesh_Export/fr "Mesh Export/fr") |
| \*.bdf | Maillage FEM | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.bdf | Maillage Nastran | [Mesh Importer](/Mesh_Import/fr "Mesh Import/fr") | [Mesh Exporter](/Mesh_Export/fr "Mesh Export/fr") |
| \*.bmp | Format Image | [Std Importer](/Std_Import/fr "Std Import/fr"), [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | [Std Capture d'écran](/Std_ViewScreenShot/fr "Std ViewScreenShot/fr") |
| \*.bms | Maillage binaire | [Std Importer](/Std_Import/fr "Std Import/fr"), [Mesh Importer un maillage](/Mesh_Import/fr "Mesh Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Mesh Exporter un maillage](/Mesh_Export/fr "Mesh Export/fr") |
| \*.brep | Format natif d'OpenCascade | [Std Importer](/Std_Import/fr "Std Import/fr"), [Part Importer](/Part_Import/fr "Part Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Part Exporter](/Part_Export/fr "Part Export/fr") |
| \*.brp | Format natif d'OpenCascade | [Std Importer](/Std_Import/fr "Std Import/fr"), [Part Importer](/Part_Import/fr "Part Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Part Exporter](/Part_Export "Part Export") |
| \*.cnc | G-code | [Std Importer](/Std_Import/fr "Std Import/fr") | [Path Post-processeur](/Path_Post/fr "Path Post/fr") |
| \*.csg | Format OpenSCAD Constructive Solid Geometry | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.csv | [Valeurs séparées par des virgules](https://fr.wikipedia.org/wiki/Comma-separated_values) | [Std Importer](/Std_Import/fr "Std Import/fr"), [Spreadsheet Importer](/Spreadsheet_Import/fr "Spreadsheet Import/fr") | [Spreadsheet Exporter](/Spreadsheet_Export/fr "Spreadsheet Export/fr") |
| \*.cur | Format Image | [Std Import](/Std_Import/fr "Std Import/fr") |
| [\*.dae](/Arch_DAE/fr "Arch DAE/fr") | Format Collada. Pour les utilisateurs de Linux : module pyCollada externe requis. | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| [\*.dat](/Draft_DAT/fr "Draft DAT/fr") | Données sur les profils communs d'aérodynamique | [Std Importer](/Std_Import/fr "Std Import/fr") | non |
| \*.dat | Maillage FEM | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.dib | Format Image | [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | non |
| \*.dwg | Format natif d'AutoCAD. Seule la géométrie 2D est prise en charge. Un [logiciel externe](/FreeCAD_and_DWG_Import/fr "FreeCAD and DWG Import/fr") est nécessaire. | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| [\*.dxf](/Draft_DXF/fr "Draft DXF/fr") | Format d'échange de dessins Autodesk. Seule la géométrie 2D est prise en charge. Un [logiciel externe](/FreeCAD_and_DWG_Import/fr "FreeCAD and DWG Import/fr") est requis pour l'importateur Python et l'exportateur Python. | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [TechDraw Exporter au format DXF](/TechDraw_ExportPageDXF/fr "TechDraw ExportPageDXF/fr") |
| \*.e57 | Format de nuage de points | [Std Importer](/Std_Import/fr "Std Import/fr") | non |
| \*.emn | Format IDF | [Std Importer](/Std_Import/fr "Std Import/fr") | non |
| \*.frd | Résultat FEM CalculiX | [Std Importer](/Std_Import/fr "Std Import/fr") | non |
| \*.gc | G-code | [Std Importer](/Std_Import/fr "Std Import/fr") | [Path Post-processeur](/Path_Post/fr "Path Post/fr") |
| \*.gcad | Format CAO ouvert (format obsolète, uniquement en 2D) | [Std Importer](/Std_Import/fr "Std Import/fr") | non |
| \*.gcode | G-code | [Std Importer](/Std_Import/fr "Std Import/fr") | [Path Post-processeur](/Path_Post/fr "Path Post/fr") |
| \*.gif | Format Image | [Std Importer](/Std_Import/fr "Std Import/fr"), [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | non |
| [\*.glb](/GlTF/fr "GlTF/fr") | [Format de transmission GL](https://fr.wikipedia.org/wiki/GlTF) | non | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| [\*.gltf](/GlTF/fr "GlTF/fr") | [Format de transmission GL](https://fr.wikipedia.org/wiki/GlTF) | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.gv | [format Graphviz](https://fr.wikipedia.org/wiki/DOT_(langage)) | non | [Std Enregistrer](/Std_Save/fr "Std Save/fr"), [Std Enregistrer sous](/Std_SaveAs/fr "Std SaveAs/fr"), [Std Exporter le graphe des dépendances](/Std_ExportDependencyGraph/fr "Std ExportDependencyGraph/fr") |
| \*.html | WebGL | non | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.icb | Format Image | [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | non |
| \*.icns | Format Image | [Std Importer](/Std_Import/fr "Std Import/fr"), [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | [Std Capture d'écran](/Std_ViewScreenShot "Std ViewScreenShot") |
| \*.ico | Format Image | [Std Importer](/Std_Import/fr "Std Import/fr"), [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | [Std Capture d'écran](/Std_ViewScreenShot "Std ViewScreenShot") |
| [\*.ifc](/Arch_IFC/fr "Arch IFC/fr") | Format d'échange des classes Industry Foundation pour les modèles BIM. Pour les utilisateurs Linux: module IfcOpenShell externe requis. | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| [\*.ifcJSON](/Arch_IFC/fr "Arch IFC/fr") | Format d'échange des classes Industry Foundation pour les modèles BIM. Le [module externe IFCJson](https://github.com/buildingSMART/ifcJSON) est requis (doit être installé manuellement). Pour les utilisateurs Linux: module IfcOpenShell externe requis. | non | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.iges | Ancien format des solides | [Std Importer](/Std_Import/fr "Std Import/fr"), [Part Importer](/Part_Import/fr "Part Import/fr") (avec ou sans couleurs) | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Part Exporter](/Part_Export/fr "Part Export/fr") (avec ou sans couleurs) |
| \*.igs | Ancien format des solides | [Std Importer](/Std_Import/fr "Std Import/fr"), [Part Importer](/Part_Import/fr "Part Import/fr") (avec ou sans couleurs) | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Part Exporter](/Part_Export/fr "Part Export/fr") (avec ou sans couleurs) |
| \*.inc | Format Povray | [Std Importer](/Std_Import/fr "Std Import/fr") | non |
| \*.inp | Maillage FEM | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.iv | Format Inventor V2.1 | [Std Importer](/Std_Import/fr "Std Import/fr"), [Mesh Importer](/Mesh_Import/fr "Mesh Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Mesh Exporter](/Mesh_Export/fr "Mesh Export/fr") |
| \*.jpe | Format Image | [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | non |
| \*.jpeg | Format Image | [Std Importer](/Std_Import/fr "Std Import/fr"), [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | [Std Capture d'écran](/Std_ViewScreenShot/fr "Std ViewScreenShot/fr") |
| \*.jpg | Format Image | [Std Importer](/Std_Import/fr "Std Import/fr"), [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | [Std Capture d'écran](/Std_ViewScreenShot/fr "Std ViewScreenShot/fr") |
| \*.json | Draft styles d'annotation | [Draft Éditer le style des annotations](/Draft_AnnotationStyleEditor/fr "Draft AnnotationStyleEditor/fr") | [Draft Éditer le style des annotations](/Draft_AnnotationStyleEditor/fr "Draft AnnotationStyleEditor/fr") |
| \*.json | Draft réglages de style | [Draft Définir le style](/Draft_SetStyle/fr "Draft SetStyle/fr") | [Draft Définir le style](/Draft_SetStyle/fr "Draft SetStyle/fr") |
| \*.json | Maillage FEM | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| [\*.json](/Arch_JSON/fr "Arch JSON/fr") | Notation des objets JavaScript | non | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.med | Maillage FEM | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.meshjson | Maillage FEM | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.meshpy | Maillage FEM | non | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.meshyaml | Maillage FEM | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.nas | Maillage Nastran | [Mesh Importer](/Mesh_Import/fr "Mesh Import/fr") | [Mesh Exporter](/Mesh_Export/fr "Mesh Export/fr") |
| \*.nc | G-code | [Std Importer](/Std_Import/fr "Std Import/fr") | [Path Post-processeur](/Path_Post/fr "Path Post/fr") |
| \*.ncc | G-code | [Std Importer](/Std_Import/fr "Std Import/fr") | [Path Post-processeur](/Path_Post/fr "Path Post/fr") |
| \*.ngc | G-code | [Std Importer](/Std_Import/fr "Std Import/fr") | [Path Post-processeur](/Path_Post/fr "Path Post/fr") |
| \*.obj | Maillage Alias | [Std Importer](/Std_Import/fr "Std Import/fr"), [Mesh Importer](/Mesh_Import/fr "Mesh Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Mesh Exporter](/Mesh_Export/fr "Mesh Export/fr") |
| [\*.obj](/Arch_OBJ/fr "Arch OBJ/fr") | Format Wavefront - Arch module | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| [\*.oca](/Draft_OCA/fr "Draft OCA/fr") | Format Open CAD (obsolète, format 2D seulement) | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.off | Maillage Object file format | [Std Importer](/Std_Import/fr "Std Import/fr"), [Mesh Importer](/Mesh_Import/fr "Mesh Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Mesh Exporter](/Mesh_Export/fr "Mesh Export/fr") |
| \*.pbm | Format Image | [Std Importer](/Std_Import/fr "Std Import/fr"), [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | [Std Capture d'écran](/Std_ViewScreenShot/fr "Std ViewScreenShot/fr") |
| \*.pcd | Format des nuages de Point | [Std Importer](/Std_Import/fr "Std Import/fr"), [Points Importer](/Points_Import/fr "Points Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Points Exporter](/Points_Export/fr "Points Export/fr") |
| [\*.pdf](/PDF/fr "PDF/fr") | Portable Document Format | [Std Importer](/Std_Import/fr "Std Import/fr") (format image), [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Std Exporter au format PDF](/Std_PrintPdf/fr "Std PrintPdf/fr") |
| \*.pgm | Format Image | [Std Importer](/Std_Import/fr "Std Import/fr"), [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | [Std Capture d'écran](/Std_ViewScreenShot/fr "Std ViewScreenShot/fr") |
| \*.plmxml | Format Siemens PLM | [Std Importer](/Std_Import/fr "Std Import/fr") | non |
| \*.ply | Format des nuages de Point | [Std Importer](/Std_Import/fr "Std Import/fr"), [Points Importer](/Points_Import/fr "Points Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Points Exporter](/Points_Export/fr "Points Export/fr") |
| \*.ply | Format maillage triangulaire de Stanford | [Std Importer](/Std_Import/fr "Std Import/fr"), [Mesh Importer](/Mesh_Import/fr "Mesh Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Mesh Exporter](/Mesh_Export/fr "Mesh Export/fr") |
| \*.png | Format Image | [Std Importer](/Std_Import/fr "Std Import/fr"), [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | [Std Capture d'écran](/Std_ViewScreenShot/fr "Std ViewScreenShot/fr") |
| \*.poly | Maillage FEM TetGen | non | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.pov | Format Povray | [Std Importer](/Std_Import/fr "Std Import/fr") | non |
| \*.ppm | Format Image | [Std Importer](/Std_Import/fr "Std Import/fr"), [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | [Std Capture d'écran](/Std_ViewScreenShot/fr "Std ViewScreenShot/fr") |
| \*.pvtu | Maillage FEM | [Std Importer](/Std_Import/fr "Std Import/fr") | non |
| \*.pvtu | FEM résultat VTK | [Std Importer](/Std_Import/fr "Std Import/fr") | non |
| \*.py | Code Python | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Enregistrer une macro](/Std_DlgMacroRecord/fr "Std DlgMacroRecord/fr") |
| \*.py | Python module def | non | [Mesh Exporter](/Mesh_Export/fr "Mesh Export/fr") |
| \*.scad | Format OpenSCAD. Un logiciel externe est nécessaire pour l'importation. | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| [\*.shp](/Arch_SHP/fr "Arch SHP/fr") | Fichier de forme GIS | [Std Importer](/Std_Import/fr "Std Import/fr") | non |
| \*.smf | Simple model simple | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Mesh Exporter](/Mesh_Export/fr "Mesh Export/fr") |
| \*.src | Trajectoire du robot KRL | non | [Robot Exportation de trajectoire](/Robot_Export/fr "Robot Export/fr"), [Robot Exportation de trajectoire](/Robot_Export/fr "Robot Export/fr") |
| \*.step | Format d'échange pour les modèles d'ingénierie | [Std Importer](/Std_Import/fr "Std Import/fr"), [Part Importer](/Part_Import/fr "Part Import/fr") (avec ou sans couleurs) | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Part Exporter](/Part_Export/fr "Part Export/fr") (avec ou sans couleurs) |
| \*.stl | Maillage FEM | non | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.stl | Maillage stéréolithographique (principalement utilisé pour l'impression 3D) | [Std Importer](/Std_Import/fr "Std Import/fr"), [Mesh Importer](/Mesh_Import/fr "Mesh Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Mesh Exporter](/Mesh_Export/fr "Mesh Export/fr") (binaire ou ASCII) |
| \*.stp | Format d'échange pour les modèles d'ingénierie | [Std Importer](/Std_Import/fr "Std Import/fr"), [Part Importer](/Part_Import/fr "Part Import/fr") (avec ou sans couleurs) | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Part Exporter](/Part_Export/fr "Part Export/fr") (avec ou sans couleurs) |
| \*.stpz | STEP compressé | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| [\*.svg](/Draft_SVG/fr "Draft SVG/fr") | Format Scalable vector graphics | [Std Importer](/Std_Import/fr "Std Import/fr") (SVG ou format image), [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [TechDraw Exporter au format SVG](/TechDraw_ExportPageSVG/fr "TechDraw ExportPageSVG/fr") |
| \*.svgz | SVG compressé | [Std Importer](/Std_Import/fr "Std Import/fr") (format image), [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | non |
| \*.tap | G-code | [Std Importer](/Std_Import/fr "Std Import/fr") | [Path Post-processeur](/Path_Post/fr "Path Post/fr") |
| \*.tga | Format Image | [Std Importer](/Std_Import/fr "Std Import/fr"), [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | non |
| \*.tif | Format Image | [Std Importer](/Std_Import/fr "Std Import/fr"), [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | [Std Capture d'écran](/Std_ViewScreenShot/fr "Std ViewScreenShot/fr") |
| \*.tiff | Format Image | [Std Importer](/Std_Import/fr "Std Import/fr"), [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | [Std Capture d'écran](/Std_ViewScreenShot/fr "Std ViewScreenShot/fr") |
| \*.tooltable | Outil Path | [Path Gestionnaire d'outils](/Path_ToolLibraryEdit/fr "Path ToolLibraryEdit/fr") | [Path Gestionnaire d'outils](/Path_ToolLibraryEdit/fr "Path ToolLibraryEdit/fr") |
| \*.tpic | Format Image | [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | non |
| \*i1.txt | Maillage FEM Z88 | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*o2.txt | FEM Résultat déplacements Z88 | [Std Importer](/Std_Import/fr "Std Import/fr") | non |
| \*.unv | Maillage FEM | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.vda | Format Image | [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | non |
| \*.vrml | Format VRML Web 3D | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Mesh Exporter](/Mesh_Export/fr "Mesh Export/fr") |
| \*.vst | Format image | [Std Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | no |
| \*.vtk | Maillage FEM | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.vst | Format Image | [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | non |
| \*.vtk | FEM résultat VTK | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.vtu | Maillage FEM | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.vtu | FEM résultat VTK | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.wbmp | Format Image | [Std Importer](/Std_Import/fr "Std Import/fr"), [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | [Std Capture d'écran](/Std_ViewScreenShot/fr "Std ViewScreenShot/fr") |
| \*.webp | Format Image | [Std Importer](/Std_Import/fr "Std Import/fr"), [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | [Std Capture d'écran](/Std_ViewScreenShot/fr "Std ViewScreenShot/fr") |
| \*.wrl | Format VRML Web 3D | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Mesh Exporter](/Mesh_Export/fr "Mesh Export/fr") |
| \*.wrl.gz | VRML compressé | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.wrml | Format VRML Web 3D | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.wrz | FVRML compressé | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Mesh Exporter](/Mesh_Export/fr "Mesh Export/fr") |
| \*.x3d | 3D extensible X3D | non | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Mesh Exporter](/Mesh_Export/fr "Mesh Export/fr") |
| \*.x3dz | X3D compressé | non | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Mesh Exporter](/Mesh_Export/fr "Mesh Export/fr") |
| \*.xbm | Format Image | [Std Importer](/Std_Import/fr "Std Import/fr"), [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | [Std Capture d'écran](/Std_ViewScreenShot/fr "Std ViewScreenShot/fr") |
| \*.xdmf | FEM maillage Fenics | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.xhtml | WebGL/X3D | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr"), [Mesh Exporter](/Mesh_Export/fr "Mesh Export/fr") |
| \*.xlsx | Tableur Excel / Office Open XML | [Std Importer](/Std_Import/fr "Std Import/fr") | non |
| \*.xml | FEM maillage Fenics | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.xml | Outil Path | [Path Gestionnaire d'outils](/Path_ToolLibraryEdit/fr "Path ToolLibraryEdit/fr") | [Path Gestionnaire d'outils](/Path_ToolLibraryEdit/fr "Path ToolLibraryEdit/fr") |
| \*.xpm | Format Image | [Std Importer](/Std_Import/fr "Std Import/fr"), [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr") | [Std Capture d'écran](/Std_ViewScreenShot/fr "Std ViewScreenShot/fr") |
| \*.yaml | Maillage FEM | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.yml | Script YAML | [Std Importer](/Std_Import/fr "Std Import/fr") | non |
| \*.z88 | Maillage FEM | [Std Importer](/Std_Import/fr "Std Import/fr") | [Std Exporter](/Std_Export/fr "Std Export/fr") |
| \*.zip | SweetHome3D XML | [Std Importer](/Std_Import/fr "Std Import/fr") | non |
| job\_\*.json | Modèle de tâche de Path | [Path Tâche](/Path_Job/fr "Path Job/fr") | [Path Exporter un modèle](/Path_ExportTemplate/fr "Path ExportTemplate/fr") |

Retrieved from "<http://wiki.freecad.org/index.php?title=Import_Export/fr&oldid=1533263>"