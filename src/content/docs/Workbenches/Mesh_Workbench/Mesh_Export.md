---
title: Mesh Export
---

|                                                                                         |
| --------------------------------------------------------------------------------------- |
| Mesh Export                                                                             |
| Menu location                                                                           |
| Meshes → Export mesh...                                                                 |
| Workbenches                                                                             |
| [Mesh](/Mesh_Workbench "Mesh Workbench")                                                |
| Default shortcut                                                                        |
| _None_                                                                                  |
| Introduced in version                                                                   |
| -                                                                                       |
| See also                                                                                |
| [Std Export](/Std_Export "Std Export"), [Import Export](/Import_Export "Import Export") |
|                                                                                         |

## Description

The **Mesh Export** command exports a mesh object to a mesh file format. Several file formats are supported.

## Usage

1. Select a single mesh object.
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Mesh_Export.svg) [Export mesh...](/Mesh_Export "Mesh Export") button.
   - Select the **Meshes → ![](/src/assets/images/Mesh_Export.svg) Export mesh...** option from the menu.
   - Select the **![](/src/assets/images/Mesh_Export.svg) Export mesh...** option from the [Tree view](/Tree_view "Tree view") context menu or [3D view](/3D_view "3D view") context menu.
3. Select the correct file format in the dialog box.
4. Enter a filename. If you have selected the `All files (*.*)` option in the previous step, and do not specify a file extension here, the .stl extension will be used.
5. Press the Save button.

## Notes

- There are some [export preferences related to Mesh Formats](/Import_Export_Preferences#Mesh_Formats "Import Export Preferences") but these do not apply to this command. They are used by the [Std Export](/Std_Export "Std Export") command.

## Preferences

- The last used file location is stored: **Tools → Edit parameters... → BaseApp → Preferences → General → FileOpenSavePath**.

## Scripting

See also: [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To export objects (including mesh objects) to a mesh file format use the `export` method of the Mesh module.

```
import FreeCAD
import Mesh

doc = FreeCAD.ActiveDocument

Mesh.export([doc.Cone, doc.Cylinder], 'D:/testfiles/mymodel.stl')

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Export/en&oldid=1332975>"
