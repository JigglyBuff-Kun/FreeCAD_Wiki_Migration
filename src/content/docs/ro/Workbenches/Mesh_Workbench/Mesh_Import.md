---
title: Mesh Import
---

|                                          |
| ---------------------------------------- |
| Mesh ImportMesh‏‎                        |
| Menu location                            |
| Meshes → Import Mesh                     |
| Workbenches                              |
| [Mesh](/Mesh_Workbench "Mesh Workbench") |
| Default shortcut                         |
| _None_                                   |
| Introduced in version                    |
| -                                        |
| See also                                 |
| [Std Import](/Std_Import "Std Import")   |
|                                          |

## Introducere

Acest instrument vă permite să importați un obiect mesh ca fișier [\*.STL](<https://en.wikipedia.org/wiki/STL_(file_format)>), [\*.AST](<https://en.wikipedia.org/wiki/STL_(file_format)#ASCII_STL>), \*.BMS, [\*.OBJ](https://en.wikipedia.org/wiki/Wavefront_.obj_file), [\*.OFF](http://en.wikipedia.org/wiki/OFF), [\*.iv](http://web.mit.edu/ivlib/www/iv/files.html), [\*.PLY](<https://en.wikipedia.org/wiki/PLY_(file_format)>) from the current document.

## Utilizare

1. Faceți clic pe![](/images/Mesh_ImportMesh.png) or choose Mesh → ![](/images/Mesh_ImportMesh.png) Import Mesh... din meniul principal.
2. Selectați fișierul de importat

## Supported file formats

The command supports: stl, ast, bms, obj, off, iv, ply, nas and bdf files. For the NASTRAN (nas/bdf) file format, only GRID, CTRIA3 and CQUAD4 cards are supported.

## Preferences

- The last used file location is stored: **Tools → Edit parameters... → BaseApp → Preferences → General → FileOpenSavePath**.

## Properties

See: [Mesh Feature](/Mesh_Feature "Mesh Feature").

## Scripting

See also: [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To import a mesh file use the `insert` method of the Mesh module.

```
import Mesh
Mesh.insert('D:/testfiles/cylinder.stl')

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Import/ro&oldid=1333028>"
