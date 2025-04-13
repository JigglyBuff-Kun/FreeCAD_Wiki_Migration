---
title: インポート・エクスポート
---
## Introduction

This page lists the various file formats that FreeCAD can import and export. For completeness the FreeCAD native format is included in the list. Some formats have a related wiki page that can be reached by clicking on the extension in the first column.

## Related

See the following pages for additional information:

* [Import Export Preferences](/Import_Export_Preferences "Import Export Preferences")
* [FreeCAD Howto Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export")

## Overview of file formats

| Format | Description | Import / Open | Export / Create |
| --- | --- | --- | --- |
| [\*.FCStd](/File_Format_FCStd "File Format FCStd") | FreeCAD native format | [Std Open](/Std_Open "Std Open"), [Std MergeProjects](/Std_MergeProjects "Std MergeProjects") | [Std Save](/Std_Save "Std Save") |
| [\*.cam](/Std_FreezeViews "Std FreezeViews") | FreeCAD frozen views (camera settings) | [Std FreezeViews](/Std_FreezeViews "Std FreezeViews") | [Std FreezeViews](/Std_FreezeViews "Std FreezeViews") |
| [\*.FCMacro](/Macros "Macros") | FreeCAD macro (Python code) | [Std Import](/Std_Import "Std Import") | [Std DlgMacroRecord](/Std_DlgMacroRecord "Std DlgMacroRecord") |
| [\*.FCMat](/Material "Material") | FreeCAD material card | [Std Import](/Std_Import "Std Import") | no |
| [\*.FCParam](/Std_DlgParameter "Std DlgParameter") | FreeCAD parameter file | [Std DlgParameter](/Std_DlgParameter "Std DlgParameter") | [Std DlgParameter](/Std_DlgParameter "Std DlgParameter") |
| \*.FCScript | FreeCAD script (Python code) | [Std Import](/Std_Import "Std Import") | [Std DlgMacroRecord](/Std_DlgMacroRecord "Std DlgMacroRecord") |
| \*.fctb | CAM tool bit file (JSON format) | [CAM ToolBitLibraryOpen](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") | [CAM ToolBitLibraryOpen](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") |
| \*.fctl | CAM tool library file (JSON format) | [CAM ToolBitLibraryOpen](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") | [CAM ToolBitLibraryOpen](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") |
| [\*.3ds](/Arch_3DS "Arch 3DS") | 3D Studio mesh | [Std Import](/Std_Import "Std Import") | no |
| \*.3mf | 3D manufacturing format | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export"), [Mesh Export](/Mesh_Export "Mesh Export") |
| \*.amf | Additive manufacturing format | no | [Std Export](/Std_Export "Std Export") |
| \*.asc | Point cloud format | [Std Import](/Std_Import "Std Import"), [Points Import](/Points_Import "Points Import") | [Std Export](/Std_Export "Std Export"), [Points Export](/Points_Export "Points Export") |
| \*.ast | ASCII Stereolithography mesh (mostly used for 3D printing) | [Std Import](/Std_Import "Std Import"), [Mesh Import](/Mesh_Import "Mesh Import") | [Std Export](/Std_Export "Std Export"), [Mesh Export](/Mesh_Export "Mesh Export") |
| [\*.asy](/Asymptote "Asymptote") | Asymptote code | no | [Mesh Export](/Mesh_Export "Mesh Export") |
| \*.bdf | FEM mesh | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*.bdf | Nastran mesh | [Mesh Import](/Mesh_Import "Mesh Import") | [Mesh Export](/Mesh_Export "Mesh Export") |
| \*.bmp | Image format | [Std Import](/Std_Import "Std Import"), [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | [Std ViewScreenShot](/Std_ViewScreenShot "Std ViewScreenShot") |
| \*.bms | Binary mesh | [Std Import](/Std_Import "Std Import"), [Mesh Import](/Mesh_Import "Mesh Import") | [Std Export](/Std_Export "Std Export"), [Mesh Export](/Mesh_Export "Mesh Export") |
| \*.brep | OpenCasCade native format | [Std Import](/Std_Import "Std Import"), [Part Import](/Part_Import "Part Import") | [Std Export](/Std_Export "Std Export"), [Part Export](/Part_Export "Part Export") |
| \*.brp | OpenCasCade native format | [Std Import](/Std_Import "Std Import"), [Part Import](/Part_Import "Part Import") | [Std Export](/Std_Export "Std Export"), [Part Export](/Part_Export "Part Export") |
| \*.cnc | G-code | [Std Import](/Std_Import "Std Import") | [CAM Post](/CAM_Post "CAM Post") |
| \*.csg | OpenSCAD Constructive Solid Geometry format | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*.csv | [Comma-separated values](https://en.wikipedia.org/wiki/Comma-separated_values) | [Std Import](/Std_Import "Std Import"), [Spreadsheet Import](/Spreadsheet_Import "Spreadsheet Import") | [Spreadsheet Export](/Spreadsheet_Export "Spreadsheet Export") |
| \*.cur | Image format | [Std Import](/Std_Import "Std Import") | [Std ViewScreenShot](/Std_ViewScreenShot "Std ViewScreenShot") |
| [\*.dae](/Arch_DAE "Arch DAE") | Collada format. For Linux users: External pyCollada module required. | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| [\*.dat](/Draft_DAT "Draft DAT") | Common airfoil data | [Std Import](/Std_Import "Std Import") | no |
| \*.dat | FEM mesh | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*.dib | Image format | [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | no |
| \*.dwg | AutoCAD native format. Only 2D geometry is supported. [External software](/FreeCAD_and_DWG_Import "FreeCAD and DWG Import") required. | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| [\*.dxf](/Draft_DXF "Draft DXF") | Autodesk drawing exchange format. Only 2D geometry is supported. [External software](/FreeCAD_and_DXF_Import "FreeCAD and DXF Import") required for the legacy Python importer and the legacy Python exporter. | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export"), [TechDraw ExportPageDXF](/TechDraw_ExportPageDXF "TechDraw ExportPageDXF") |
| \*.e57 | Point cloud format | [Std Import](/Std_Import "Std Import") | no |
| \*.emn | IDF format | [Std Import](/Std_Import "Std Import") | no |
| \*.frd | FEM result CalculiX | [Std Import](/Std_Import "Std Import") | no |
| \*.gc | G-code | [Std Import](/Std_Import "Std Import") | [CAM Post](/CAM_Post "CAM Post") |
| \*.gcad | Open CAD format (obsolete, 2D-only format) | [Std Import](/Std_Import "Std Import") | no |
| \*.gcode | G-code | [Std Import](/Std_Import "Std Import") | [CAM Post](/CAM_Post "CAM Post") |
| \*.gif | Image format | [Std Import](/Std_Import "Std Import"), [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | no |
| [\*.glb](/GlTF "GlTF") | [GL Transmission Format](https://en.wikipedia.org/wiki/GlTF) | no | [Std Export](/Std_Export "Std Export") |
| [\*.gltf](/GlTF "GlTF") | [GL Transmission Format](https://en.wikipedia.org/wiki/GlTF) | no | [Std Export](/Std_Export "Std Export") |
| \*.gv | [Graphviz format](https://en.wikipedia.org/wiki/DOT_%28graph_description_language%29) | no | [Std Save](/Std_Save "Std Save"), [Std SaveAs](/Std_SaveAs "Std SaveAs"), [Std ExportDependencyGraph](/Std_ExportDependencyGraph "Std ExportDependencyGraph") |
| \*.html | WebGL | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*.icb | Image format | [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | no |
| \*.icns | Image format | [Std Import](/Std_Import "Std Import"), [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | [Std ViewScreenShot](/Std_ViewScreenShot "Std ViewScreenShot") |
| \*.ico | Image format | [Std Import](/Std_Import "Std Import"), [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | [Std ViewScreenShot](/Std_ViewScreenShot "Std ViewScreenShot") |
| [\*.ifc](/Arch_IFC "Arch IFC") | Industry Foundation Classes exchange format for BIM models. For Linux users: External IfcOpenShell module required. | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| [\*.ifcJSON](/Arch_IFC "Arch IFC") | Industry Foundation Classes exchange format for BIM models. [External IFCJson module](https://github.com/buildingSMART/ifcJSON) required (must be installed manually). For Linux users: External IfcOpenShell module required. | no | [Std Export](/Std_Export "Std Export") |
| \*.iges | Older solid-based format | [Std Import](/Std_Import "Std Import"), [Part Import](/Part_Import "Part Import") (with or without colors) | [Std Export](/Std_Export "Std Export"), [Part Export](/Part_Export "Part Export") (with or without colors) |
| \*.igs | Older solid-based format | [Std Import](/Std_Import "Std Import"), [Part Import](/Part_Import "Part Import") (with or without colors) | [Std Export](/Std_Export "Std Export"), [Part Export](/Part_Export "Part Export") (with or without colors) |
| \*.inc | Povray format | [Std Import](/Std_Import "Std Import") | no |
| \*.inp | FEM mesh | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*.iv | Inventor V2.1 format | [Std Import](/Std_Import "Std Import"), [Mesh Import](/Mesh_Import "Mesh Import") | [Std Export](/Std_Export "Std Export"), [Mesh Export](/Mesh_Export "Mesh Export") |
| \*.jpe | Image format | [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | no |
| \*.jpeg | Image format | [Std Import](/Std_Import "Std Import"), [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | [Std ViewScreenShot](/Std_ViewScreenShot "Std ViewScreenShot") |
| \*.jpg | Image format | [Std Import](/Std_Import "Std Import"), [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | [Std ViewScreenShot](/Std_ViewScreenShot "Std ViewScreenShot") |
| \*.json | Draft annotation styles | [Draft AnnotationStyleEditor](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor") | [Draft AnnotationStyleEditor](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor") |
| \*.json | Draft style settings | [Draft SetStyle](/Draft_SetStyle "Draft SetStyle") | [Draft SetStyle](/Draft_SetStyle "Draft SetStyle") |
| \*.json | FEM mesh | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| [\*.json](/Arch_JSON "Arch JSON") | JavaScript Object Notation | no | [Std Export](/Std_Export "Std Export") |
| \*.med | FEM mesh | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*.meshjson | FEM mesh | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*.meshpy | FEM mesh | no | [Std Export](/Std_Export "Std Export") |
| \*.meshyaml | FEM mesh | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*.nas | Nastran mesh | [Mesh Import](/Mesh_Import "Mesh Import") | [Mesh Export](/Mesh_Export "Mesh Export") |
| \*.nc | G-code | [Std Import](/Std_Import "Std Import") | [CAM Post](/CAM_Post "CAM Post") |
| \*.ncc | G-code | [Std Import](/Std_Import "Std Import") | [CAM Post](/CAM_Post "CAM Post") |
| \*.ngc | G-code | [Std Import](/Std_Import "Std Import") | [CAM Post](/CAM_Post "CAM Post") |
| \*.obj | Alias mesh | [Std Import](/Std_Import "Std Import"), [Mesh Import](/Mesh_Import "Mesh Import") | [Std Export](/Std_Export "Std Export"), [Mesh Export](/Mesh_Export "Mesh Export") |
| [\*.obj](/Arch_OBJ "Arch OBJ") | Wavefront format - Arch module | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| [\*.oca](/Draft_OCA "Draft OCA") | Open CAD format (obsolete, 2D-only format) | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*.off | Object file format mesh | [Std Import](/Std_Import "Std Import"), [Mesh Import](/Mesh_Import "Mesh Import") | [Std Export](/Std_Export "Std Export"), [Mesh Export](/Mesh_Export "Mesh Export") |
| \*.pbm | Image format | [Std Import](/Std_Import "Std Import"), [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | [Std ViewScreenShot](/Std_ViewScreenShot "Std ViewScreenShot") |
| \*.pcd | Point cloud format | [Std Import](/Std_Import "Std Import"), [Points Import](/Points_Import "Points Import") | [Std Export](/Std_Export "Std Export"), [Points Export](/Points_Export "Points Export") |
| [\*.pdf](/PDF "PDF") | Portable Document Format | [Std Import](/Std_Import "Std Import") (image format), [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | [Std Export](/Std_Export "Std Export"), [Std PrintPdf](/Std_PrintPdf "Std PrintPdf") |
| \*.pgm | Image format | [Std Import](/Std_Import "Std Import"), [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | [Std ViewScreenShot](/Std_ViewScreenShot "Std ViewScreenShot") |
| \*.plmxml | Siemens PLM format | [Std Import](/Std_Import "Std Import") | no |
| \*.ply | Point cloud format | [Std Import](/Std_Import "Std Import"), [Points Import](/Points_Import "Points Import") | [Std Export](/Std_Export "Std Export"), [Points Export](/Points_Export "Points Export") |
| \*.ply | Stanford triangle mesh format | [Std Import](/Std_Import "Std Import"), [Mesh Import](/Mesh_Import "Mesh Import") | [Std Export](/Std_Export "Std Export"), [Mesh Export](/Mesh_Export "Mesh Export") |
| \*.png | Image format | [Std Import](/Std_Import "Std Import"), [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | [Std ViewScreenShot](/Std_ViewScreenShot "Std ViewScreenShot") |
| \*.poly | FEM mesh TetGen | no | [Std Export](/Std_Export "Std Export") |
| \*.pov | Povray format | [Std Import](/Std_Import "Std Import") | no |
| \*.ppm | Image format | [Std Import](/Std_Import "Std Import"), [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | [Std ViewScreenShot](/Std_ViewScreenShot "Std ViewScreenShot") |
| \*.pvtu | FEM mesh | [Std Import](/Std_Import "Std Import") | no |
| \*.pvtu | FEM result VTK | [Std Import](/Std_Import "Std Import") | no |
| \*.py | Python code | [Std Import](/Std_Import "Std Import") | [Std DlgMacroRecord](/Std_DlgMacroRecord "Std DlgMacroRecord") |
| \*.py | Python module def | no | [Mesh Export](/Mesh_Export "Mesh Export") |
| \*.scad | OpenSCAD format. External software required for import. | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| [\*.shp](/Arch_SHP "Arch SHP") | GIS shapefile | [Std Import](/Std_Import "Std Import") | no |
| \*.smf | Simple model format | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export"), [Mesh Export](/Mesh_Export "Mesh Export") |
| \*.src | KRL robot trajectory | no | [Robot ExportKukaCompact](/Robot_Export "Robot Export"), [Robot ExportKukaFull](/Robot_Export "Robot Export") |
| \*.step | Exchange format for engineering models | [Std Import](/Std_Import "Std Import"), [Part Import](/Part_Import "Part Import") (with or without colors) | [Std Export](/Std_Export "Std Export"), [Part Export](/Part_Export "Part Export") (with or without colors) |
| \*.stl | FEM mesh | no | [Std Export](/Std_Export "Std Export") |
| \*.stl | Stereolithography mesh (mostly used for 3D printing) | [Std Import](/Std_Import "Std Import"), [Mesh Import](/Mesh_Import "Mesh Import") | [Std Export](/Std_Export "Std Export"), [Mesh Export](/Mesh_Export "Mesh Export") (binary or ASCII) |
| \*.stp | Exchange format for engineering models | [Std Import](/Std_Import "Std Import"), [Part Import](/Part_Import "Part Import") (with or without colors) | [Std Export](/Std_Export "Std Export"), [Part Export](/Part_Export "Part Export") (with or without colors) |
| \*.stpz | Compressed STEP | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| [\*.svg](/Draft_SVG "Draft SVG") | Scalable vector graphics format | [Std Import](/Std_Import "Std Import") (SVG or image format), [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | [Std Export](/Std_Export "Std Export"), [TechDraw ExportPageSVG](/TechDraw_ExportPageSVG "TechDraw ExportPageSVG") |
| \*.svgz | Compressed SVG | [Std Import](/Std_Import "Std Import") (image format), [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | no |
| \*.tap | G-code | [Std Import](/Std_Import "Std Import") | [CAM Post](/CAM_Post "CAM Post") |
| \*.tga | Image format | [Std Import](/Std_Import "Std Import"), [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | no |
| \*.tif | Image format | [Std Import](/Std_Import "Std Import"), [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | [Std ViewScreenShot](/Std_ViewScreenShot "Std ViewScreenShot") |
| \*.tiff | Image format | [Std Import](/Std_Import "Std Import"), [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | [Std ViewScreenShot](/Std_ViewScreenShot "Std ViewScreenShot") |
| \*.tooltable | CAM tool | [CAM ToolBitLibraryOpen](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") | [CAM ToolBitLibraryOpen](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") |
| \*.tpic | Image format | [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | no |
| \*i1.txt | FEM mesh Z88 | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*o2.txt | FEM result Z88 displacements | [Std Import](/Std_Import "Std Import") | no |
| \*.unv | FEM mesh | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*.vda | Image format | [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | no |
| \*.vrml | VRML Web 3D format | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export"), [Mesh Export](/Mesh_Export "Mesh Export") |
| \*.vst | Image format | [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | no |
| \*.vtk | FEM mesh | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*.vtk | FEM result VTK | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*.vtu | FEM mesh | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*.vtu | FEM result VTK | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*.wbmp | Image format | [Std Import](/Std_Import "Std Import"), [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | [Std ViewScreenShot](/Std_ViewScreenShot "Std ViewScreenShot") |
| \*.webp | Image format | [Std Import](/Std_Import "Std Import"), [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | [Std ViewScreenShot](/Std_ViewScreenShot "Std ViewScreenShot") |
| \*.wrl | VRML Web 3D format | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export"), [Mesh Export](/Mesh_Export "Mesh Export") |
| \*.wrl.gz | Compressed VRML | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*.wrml | VRML Web 3D format | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*.wrz | Compressed VRML | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export"), [Mesh Export](/Mesh_Export "Mesh Export") |
| \*.x3d | X3D extensible 3D | no | [Std Export](/Std_Export "Std Export"), [Mesh Export](/Mesh_Export "Mesh Export") |
| \*.x3dz | Compressed X3D | no | [Std Export](/Std_Export "Std Export"), [Mesh Export](/Mesh_Export "Mesh Export") |
| \*.xbm | Image format | [Std Import](/Std_Import "Std Import"), [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | [Std ViewScreenShot](/Std_ViewScreenShot "Std ViewScreenShot") |
| \*.xdmf | FEM mesh Fenics | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*.xhtml | WebGL/X3D | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export"), [Mesh Export](/Mesh_Export "Mesh Export") |
| \*.xlsx | Excel / Office Open XML spreadsheet | [Std Import](/Std_Import "Std Import") | no |
| \*.xml | FEM mesh Fenics | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*.xml | CAM tool | [CAM ToolBitLibraryOpen](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") | [CAM ToolBitLibraryOpen](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") |
| \*.xpm | Image format | [Std Import](/Std_Import "Std Import"), [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage") | [Std ViewScreenShot](/Std_ViewScreenShot "Std ViewScreenShot") |
| \*.yaml | FEM mesh | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*.yml | YAML script | [Std Import](/Std_Import "Std Import") | no |
| \*.z88 | FEM mesh | [Std Import](/Std_Import "Std Import") | [Std Export](/Std_Export "Std Export") |
| \*.zip | SweetHome3D XML | [Std Import](/Std_Import "Std Import") | no |
| job\_\*.json | CAM job template | [CAM Job](/CAM_Job "CAM Job") | [CAM ExportTemplate](/CAM_ExportTemplate "CAM ExportTemplate") |

Retrieved from "<http://wiki.freecad.org/index.php?title=Import_Export/ja&oldid=1531459>"