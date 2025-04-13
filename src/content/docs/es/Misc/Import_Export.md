---
title: Importar Exportar
---
## Introducción

En esta página se enumeran los diversos formatos de archivo que FreeCAD puede importar y exportar. Para completar la lista se incluye el formato nativo de FreeCAD. Algunos formatos tienen una página wiki relacionada a la que se puede acceder haciendo clic en la extensión en la primera columna.

## Relacionados

Ver las siguientes páginas para obtener información adicional:

* [Preferencias de importación y exportación](/Import_Export_Preferences/es "Import Export Preferences/es")
* [FreeCAD Cómo importar y exportar](/index.php?title=FreeCAD_Howto_Import_Export/es&action=edit&redlink=1 "FreeCAD Howto Import Export/es (page does not exist)")

## Vista general de los formatos archivo

| Formato | Descripción | Importar | Exportar | Modulo | Pagina de preferencias |
| --- | --- | --- | --- | --- | --- |
| [FCStd](/Fcstd_file_format/es "Fcstd file format/es") | Formato de archivo nativo de FreeCAD | si | si | Incorporado | no |
| [FCMat](/Material "Material") | Tarjeta de material de FreeCAD | si | si | Incorporado | no |
| [FCMacro](/Macros/es "Macros/es") | Macro de FreeCAD | si | si | Incorporado | no |
| STEP | Uno de los mas ampliamente usado formato de intercambio para modelos de ingenieria | si | si | [Part](/Part_Workbench/es "Part Workbench/es") | si |
| IGES | Un poco viejo pero todavia sigue mucho en uso de formato basado-solido | si | si | [Part](/Part_Workbench/es "Part Workbench/es") | si |
| BREP | Formato nativo de OpenCasCade | si | si | [Part](/Part_Workbench/es "Part Workbench/es") | no |
| [DXF](/Draft_DXF/es "Draft DXF/es") | Formato de intercambio Autodesk. Solo geometrica 2D es soportada | si | si | [Draft](/Draft_Workbench/es "Draft Workbench/es") | si |
| [DWG](/FreeCAD_and_DWG_Import/es "FreeCAD and DWG Import/es") | Formato principal de Autocad.Solo geometria 2D soportada. Requiere de la instalación de [software externo](/FreeCAD_and_DWG_Import/es "FreeCAD and DWG Import/es"). | si | si | [Borrador](/Draft_Workbench/es "Draft Workbench/es") | si |
| [SVG](/Draft_SVG/es "Draft SVG/es") | Formato 2D ampliamente utilizado por gráficos vectoriales | si | si | [Borrador](/Draft_Workbench/es "Draft Workbench/es") / [Dibujo](/Drawing_Workbench/es "Drawing Workbench/es") | si |
| [OCA](/Draft_OCA/es "Draft OCA/es") | Open CAD Format (obsolete, 2D-only format) | yes | yes | [Borrador](/Draft_Workbench/es "Draft Workbench/es") | yes |
| [IFC](/Arch_IFC "Arch IFC") | Clases de origen industrial, utilizado para intercambiar modelos. Requiere la instalación de [software externo](/Arch_IFC/es "Arch IFC/es"). | si | si | [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") | si |
| [DAE](/Arch_DAE/es "Arch DAE/es") | Formato collada, utilizado para intercambio de geometrías de malla | si | si | [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") | si |
| [OBJ](/Arch_OBJ/es "Arch OBJ/es") | Formato de intercambio de mallas | si | si | [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") / [Malla](/Mesh_Workbench/es "Mesh Workbench/es") | no |
| STL | Formato de intercambio de malla mayormente utilizado para impresoras 3D | si | si | [Malla](/Mesh_Workbench/es "Mesh Workbench/es") | no |
| BMS | Formato de intercambio de malla binaria | si | si | [Malla](/Mesh_Workbench/es "Mesh Workbench/es") | no |
| AST | Formato de intercambio de malla | yes | yes | [Malla](/Mesh_Workbench/es "Mesh Workbench/es") | no |
| OFF | Formato de intercambio de malla | si | si | [Malla](/Mesh_Workbench/es "Mesh Workbench/es") | no |
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

Retrieved from "<http://wiki.freecad.org/index.php?title=Import_Export/es&oldid=1252075>"