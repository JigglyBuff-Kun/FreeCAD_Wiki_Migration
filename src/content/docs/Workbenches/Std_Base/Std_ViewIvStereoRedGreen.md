---
title: Std ViewIvStereoRedGreen
---

|                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Std ViewIvStereoRedGreen                                                                                                                                                                                                                                                                                                                                                   |
| Menu location                                                                                                                                                                                                                                                                                                                                                              |
| View → Stereo → Stereo red/cyan                                                                                                                                                                                                                                                                                                                                            |
| Workbenches                                                                                                                                                                                                                                                                                                                                                                |
| All                                                                                                                                                                                                                                                                                                                                                                        |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                                                                                                     |
| Introduced in version                                                                                                                                                                                                                                                                                                                                                      |
| -                                                                                                                                                                                                                                                                                                                                                                          |
| See also                                                                                                                                                                                                                                                                                                                                                                   |
| [Std ViewIvStereoQuadBuff](/Std_ViewIvStereoQuadBuff "Std ViewIvStereoQuadBuff"), [Std ViewIvStereoInterleavedRows](/Std_ViewIvStereoInterleavedRows "Std ViewIvStereoInterleavedRows"), [Std ViewIvStereoInterleavedColumns](/Std_ViewIvStereoInterleavedColumns "Std ViewIvStereoInterleavedColumns"), [Std ViewIvStereoOff](/Std_ViewIvStereoOff "Std ViewIvStereoOff") |
|                                                                                                                                                                                                                                                                                                                                                                            |

## Description

The **Std ViewIvStereoRedGreen** command changes the active [3D view](/3D_view "3D view") to red/cyan, [anaglyph](https://en.wikipedia.org/wiki/Anaglyph_3D), stereo view mode. To use this stereo mode glasses with colored lenses are required.

## Usage

1. Select the **View → Stereo → ![](/src/assets/images/Std_ViewIvStereoRedGreen.svg) Stereo red/cyan** option from the menu.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor").

- The eye to eye distance can be changed: **Edit → Preferences... → Display → 3D View → Eye to eye distance for stereo modes**.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Use the `setStereoType` method of the View object to change the stereo mode. The available modes are `"Anaglyph"`, `"QuadBuffer"`, `"InterleavedRows"`, `"InterleavedColumns"` and `"None"`.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.setStereoType("Anaglyph")
view.getStereoType()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewIvStereoRedGreen/en&oldid=1449701>"
