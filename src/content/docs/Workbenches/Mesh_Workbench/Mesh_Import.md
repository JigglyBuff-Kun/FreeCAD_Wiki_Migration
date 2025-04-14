---
title: Mesh Import
---

|                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------- |
| Mesh Import                                                                                                               |
| Menu location                                                                                                             |
| Meshes → Import mesh...                                                                                                   |
| Workbenches                                                                                                               |
| [Mesh](/Mesh_Workbench "Mesh Workbench")                                                                                  |
| Default shortcut                                                                                                          |
| _None_                                                                                                                    |
| Introduced in version                                                                                                     |
| -                                                                                                                         |
| See also                                                                                                                  |
| [Std Import](/Std_Import "Std Import"), [Std Open](/Std_Open "Std Open"), [Import Export](/Import_Export "Import Export") |
|                                                                                                                           |

## Description

The **Mesh Import** command imports geometry from a mesh file format into the active document. Several file formats are supported. The command creates a non-parametric mesh object, a [Mesh Feature](/Mesh_Feature "Mesh Feature").

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/images/Mesh_Import.svg) [Import mesh...](/Mesh_Import "Mesh Import") button.
   - Select the **Meshes → ![](/images/Mesh_Import.svg) Import mesh...** option from the menu.
   - Select the **![](/images/Mesh_Import.svg) Import mesh...** option from the [Tree view](/Tree_view "Tree view") context menu or [3D view](/3D_view "3D view") context menu. This option is only available if an existing mesh object has been selected. Note that the selected object is actually not used or modified by the command.
2. Optionally select the correct file format in the dialog box.
3. Select a file.
4. Press the Open button.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Import/en&oldid=1333013>"
