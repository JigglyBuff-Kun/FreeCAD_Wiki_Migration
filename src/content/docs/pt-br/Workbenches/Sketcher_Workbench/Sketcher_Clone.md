---
title: Clonar
---
:::caution
This tool is obsolete, it is not available in1.0 and above. UseSketcher Translateinstead.
:::

|  |
| --- |
| Sketcher Clone |
| Menu location |
| Sketch → Sketcher tools → Clone |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| Z L |
| Introduced in version |
| 0.16 |
| See also |
| [Sketcher Copy](/Sketcher_Copy "Sketcher Copy"), [Sketcher Move](/Sketcher_Move "Sketcher Move") |
|  |

## Description

The ![](/images/Sketcher_Clone.svg) [Sketcher Clone](/Sketcher_Clone "Sketcher Clone") command clones the selected sketch elements from one point to another, using the last selected point as reference. If any constraints are part of the source elements, then the new constraints are linked to the source constraints; if the constraints in the source are changed, the constraints in the clone are also changed. To avoid this linking see ![](/images/Sketcher_Copy.svg) [Sketcher Copy](/Sketcher_Copy "Sketcher Copy").

Note that a clone of a clone becomes a Sketcher Copy. If you wish to create linked constraints, clone the original source elements again.

## Usage

1. Select the sketch elements to clone.
2. There are several ways to invoke the command:
   * Press the ![](/images/Sketcher_Clone.svg) [Clone](/Sketcher_Clone "Sketcher Clone") button.
   * Select the **Sketch → Sketcher tools → ![](/images/Sketcher_Clone.svg) Clone** option from the menu.
   * The keyboard shortcut: Z then L.
3. Move the mouse in the [3D view](/3D_view "3D view") to the desired location for the clone.  
   By keeping Shift pressed, the angle to the location point can be fixed in steps of 5°. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
4. Left-click in the 3D view to create the clone.

No extra constraints are added for the clone.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Clone/pt-br&oldid=1458192>"