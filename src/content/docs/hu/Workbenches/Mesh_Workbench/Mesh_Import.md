---
title: Háló importálása
---
|  |
| --- |
| Mesh ImportMesh |
| Menu location |
| Hálók → Háló importálása |
| Workbenches |
| [Háló](/Mesh_Workbench "Mesh Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Std Import](/Std_Import "Std Import") |
|  |

## Bemutatás

Ez az eszköz lehetővé teszi egy [\*.STL](https://en.wikipedia.org/wiki/STL_(file_format)), [\*.AST](https://en.wikipedia.org/wiki/STL_(file_format)#ASCII_STL), \*.BMS, [\*.OBJ](https://en.wikipedia.org/wiki/Wavefront_.obj_file), [\*.OFF](http://en.wikipedia.org/wiki/OFF), [\*.iv](http://web.mit.edu/ivlib/www/iv/files.html), [\*.PLY](https://en.wikipedia.org/wiki/PLY_(file_format)) fájl hozzáadását a jelenlegi dokumentumhoz.

## Használat

1. Kattintson a ![](/images/Mesh_ImportMesh.png) ikonra vagy válassza a Hálók → ![](/images/Mesh_ImportMesh.png) Háló importálása… menüpontot a felső menüből.
2. Válassza ki az importálandó fájlt.

## Supported file formats

The command supports: stl, ast, bms, obj, off, iv, ply, nas and bdf files. For the NASTRAN (nas/bdf) file format, only GRID, CTRIA3 and CQUAD4 cards are supported.

## Preferences

* The last used file location is stored: **Tools → Edit parameters... → BaseApp → Preferences → General → FileOpenSavePath**.

## Properties

See: [Mesh Feature](/Mesh_Feature "Mesh Feature").

## Scripting

See also: [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To import a mesh file use the `insert` method of the Mesh module.

```
import Mesh
Mesh.insert('D:/testfiles/cylinder.stl')

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Import/hu&oldid=1333024>"