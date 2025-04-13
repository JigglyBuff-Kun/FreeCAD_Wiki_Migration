---
title: Import Export
---
## Introduction

Această pagină adună diferite formate de fișiere care pot fi importate sau exportate din FreeCAD. Cele mai multe dintre aceste formate de fișiere sunt implementate de un anumit modul. Acest modul nu trebuie să fie încărcat pentru a importa sau a exporta în acest format, dar trebuie să fie încărcat pentru a afișa pagina preferințelor corespunzătoare.

## Related

See the following pages for additional information:

* [Import Export Preferences](/Import_Export_Preferences "Import Export Preferences")
* [FreeCAD Howto Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export")

## Overview of file formats

| Format | Description | Import | Export | Module | Preferences page |
| --- | --- | --- | --- | --- | --- |
| [FCStd](/Fcstd_file_format "Fcstd file format") | FreeCAD's native file format | yes | yes | Built-in | no |
| [FCMat](/Material "Material") | FreeCAD Material Card | yes | yes | Built-in | no |
| [FCMacro](/Macros "Macros") | FreeCAD Macro | yes | yes | Built-in | no |
| STEP | One of the most widely used exchange format for engineering models | yes | yes | [Part](/Part_Workbench "Part Workbench") | yes |
| STPZ | Compressed version of STEP exchange format for engineering models | yes | yes | [Part](/Part_Workbench "Part Workbench") | yes |
| IGES | A bit older but still much in use solid-based format | yes | yes | [Part](/Part_Workbench "Part Workbench") | yes |
| BREP | OpenCasCade's native format | yes | yes | [Part](/Part_Workbench "Part Workbench") | no |
| [DXF](/Draft_DXF "Draft DXF") | Autodesk Exchange Format. Only 2D geometry is supported | yes | yes | [Draft](/Draft_Workbench "Draft Workbench") | yes |
| [DWG](/FreeCAD_and_DWG_Import "FreeCAD and DWG Import") | Autocad main format. Only 2D geometry is supported. Requires the installation of [external software](/FreeCAD_and_DWG_Import "FreeCAD and DWG Import"). | yes | yes | [Draft](/Draft_Workbench "Draft Workbench") | yes |
| [SVG](/Draft_SVG "Draft SVG") | 2D format widely used for vector graphics | yes | yes | [Draft](/Draft_Workbench "Draft Workbench") / [Drawing](/Drawing_Workbench "Drawing Workbench") | yes |
| [OCA](/Draft_OCA "Draft OCA") | Open CAD Format (obsolete, 2D-only format) | yes | yes | [Draft](/Draft_Workbench "Draft Workbench") | yes |
| [IFC](/Arch_IFC "Arch IFC") | Industry Foundation Classes, used to exchange BIM models. Requires the installation of [external software](/Arch_IFC "Arch IFC"). | yes | yes | [Arch](/Arch_Workbench "Arch Workbench") | yes |
| [DAE](/Arch_DAE "Arch DAE") | Collada format, used for exchange of mesh geometry | yes | yes | [Arch](/Arch_Workbench "Arch Workbench") | yes |
| [OBJ](/Arch_OBJ "Arch OBJ") | Mesh exchange format | yes | yes | [Arch](/Arch_Workbench "Arch Workbench") / [Mesh](/Mesh_Workbench "Mesh Workbench") | no |
| STL | Mesh exchange format mostly used for 3D printing | yes | yes | [Mesh](/Mesh_Workbench "Mesh Workbench") | no |
| BMS | Binary mesh exchange format | yes | yes | [Mesh](/Mesh_Workbench "Mesh Workbench") | no |
| AST | Mesh exchange format | yes | yes | [Mesh](/Mesh_Workbench "Mesh Workbench") | no |
| OFF | Mesh exchange format | yes | yes | [Mesh](/Mesh_Workbench "Mesh Workbench") | no |
| PLY | Mesh exchange format / Points cloud | yes | yes | [Mesh](/Mesh_Workbench "Mesh Workbench") / [Points](/Points_Workbench "Points Workbench") | no |
| INP | Abaqus format | yes | yes | [FEM](/FEM_Workbench "FEM Workbench") | no |
| POLY | Tetgen format | no | yes | [FEM](/FEM_Workbench "FEM Workbench") | no |
| UNV | FEM exchange format | yes | yes | [FEM](/FEM_Workbench "FEM Workbench") | no |
| MED | FEM exchange format | yes | yes | [FEM](/FEM_Workbench "FEM Workbench") | no |
| DAT | FEM exchange format (FEM) or 2D airfoil profile (Draft) | yes | yes | [FEM](/FEM_Workbench "FEM Workbench") / [Draft](/Draft_Workbench "Draft Workbench") | no |
| BDF | FEM exchange format | yes | no | [FEM](/FEM_Workbench "FEM Workbench") | no |
| FRD | CalculiX result format | yes | no | [FEM](/FEM_Workbench "FEM Workbench") | no |
| NC | G-Code file format | yes | yes | [Path](/Path_Workbench "Path Workbench") | no |
| GC | G-Code file format | yes | yes | [Path](/Path_Workbench "Path Workbench") | no |
| NCC | G-Code file format | yes | yes | [Path](/Path_Workbench "Path Workbench") | no |
| NGC | G-Code file format | yes | yes | [Path](/Path_Workbench "Path Workbench") | no |
| CNC | G-Code file format | yes | yes | [Path](/Path_Workbench "Path Workbench") | no |
| TAP | G-Code file format | yes | yes | [Path](/Path_Workbench "Path Workbench") | no |
| GCODE | G-Code file format | yes | yes | [Path](/Path_Workbench "Path Workbench") | no |
| EMN | IDF file format | yes | no | Idf | no |
| IV | OpenInventor file format | yes | yes | Built-in | no |
| VRML | Web 3D format | yes | yes | Built-in | no |
| WebGL (HTML) | Web 3D format | no | yes | [Arch](/Arch_Workbench "Arch Workbench") | no |
| SCAD | OpenSCAD file format | yes | yes | [OpenSCAD](/OpenSCAD_Workbench "OpenSCAD Workbench") | no |
| CSG | OpenSCAD Constructive Solid Geometry | yes | yes | [OpenSCAD](/OpenSCAD_Workbench "OpenSCAD Workbench") | no |
| ASC | Points cloud format | yes | no | [Points](/Points_Workbench "Points Workbench") | no |
| POV | Povray format | no | yes | [Raytracing](/Raytracing_Workbench "Raytracing Workbench") | no |
| CSV | Comma-separated values spreadsheet | yes | yes | [Spreadsheet](/Spreadsheet_Workbench "Spreadsheet Workbench") | no |
| PDF | Adobe portable document format | no | yes | Built-in | no |

Retrieved from "<http://wiki.freecad.org/index.php?title=Import_Export/ro&oldid=958522>"