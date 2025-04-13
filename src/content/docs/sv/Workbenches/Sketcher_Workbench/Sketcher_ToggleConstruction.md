---
title: Sketcher ConstructionMode
---
|  |
| --- |
| Toggle construction geometry |
| Menyplacering |
| Sketch → Skissgeometrier → Toggle construction geometry |
| Arbetsbänkar |
| [Sketcher](/Sketcher_Workbench/sv "Sketcher Workbench/sv") |
| Standard genväg |
| *Ingen* |
| Introducerad i version |
| - |
| Se även |
| *Ingen* |
|  |

## Description

The ![](/images/Sketcher_ToggleConstruction.svg) [Sketcher ToggleConstruction](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction") tool either toggles the geometry creation tools to/from construction mode, or toggles selected geometry to/from construction geometry.

Construction geometry is marked with a dedicated [color](/Sketcher_Preferences#Appearance "Sketcher Preferences") (default blue) and ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) linetype. Construction geometry is not visible outside the sketch, it is intended to help define constraints and other geometry inside the sketch itself. Construction lines can however be used as a rotation axis by [PartDesign Revolution](/PartDesign_Revolution "PartDesign Revolution").

![](/images/Sketcher_ConstructionMode_fr_01.png)

## Usage

### Toggle tools

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_ToggleConstruction.svg) [Toggle construction geometry](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction") button.
   * Select the **Sketcher → Sketcher geometries → ![](/images/Sketcher_ToggleConstruction.svg) Toggle construction geometry** option from the menu.
   * Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ToggleConstruction.svg) Toggle construction geometry** option from the context menu.
   * Use the keyboard shortcut: G then N.
3. The mode of the geometry creation tools is toggled:
   * In normal mode their menu and toolbar icons are white, and they create regular geometry (default color white). The icon of this tool is then: ![](/images/Sketcher_ToggleConstruction.svg).
   * In construction mode their menu and toolbar icons are blue, and they create construction geometry (default color blue). The icon of this tool is then: ![](/images/Sketcher_ToggleConstruction_Constr.svg).

### Toggle geometry

1. Select one or more elements in the sketch.
2. Invoke the tool as described above, or with the following additional option:
   * Right-click in the **Elements** section of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog") and select the **![](/images/Sketcher_ToggleConstruction.svg) Toggle construction geometry** option from the context menu.
3. The selected elements are changed from normal geometry to construction geometry or vice versa. Their appearance changes accordingly.
4. The mode of the geometry creation tools is not changed.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ToggleConstruction/sv&oldid=1414829>"