---
title: Sketcher Move
---

:::caution
This tool is obsolete, it is not available in1.0 and above. UseSketcher Translateinstead.
:::

|                                                                                                     |
| --------------------------------------------------------------------------------------------------- |
| Sketcher Move                                                                                       |
| Menu location                                                                                       |
| Sketch → Sketcher tools → Move                                                                      |
| Workbenches                                                                                         |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench")                                                |
| Default shortcut                                                                                    |
| Z M                                                                                                 |
| Introduced in version                                                                               |
| 0.18                                                                                                |
| See also                                                                                            |
| [Sketcher Clone](/Sketcher_Clone "Sketcher Clone"), [Sketcher Copy](/Sketcher_Copy "Sketcher Copy") |
|                                                                                                     |

## Description

The ![](/src/assets/images/Sketcher_Move.svg) [Sketcher Move](/Sketcher_Move "Sketcher Move") command moves the selected sketch elements from one point to another, using the last selected point as reference.

![](/src/assets/images/Sketcher_move.png)

The sequence of clicks is indicated by yellow arrows with numbers. Select element **A**; see a vector line indicated by two red lines from pivot point **A** pointing to mouse position number **2**. Move the mouse pointer to the target location **3** and see the element now as **B** autoconstrained on point **3**.

## Usage

1. Select the sketch elements for the move operation.
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Sketcher_Move.svg) [Move](/Sketcher_Move "Sketcher Move") button in the toolbar.
   - Use the Z then M keyboard shortcut.
   - Use the **Sketch → Sketcher tools → ![](/src/assets/images/Sketcher_Move.svg) Move** entry in the menu.
3. Move the mouse in the [3D view](/3D_view "3D view") to the desired location.  
   By keeping Ctrl pressed (Cmd on macOS), the angle to the location can be fixed in steps of 5°. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
4. Left-click in the 3D view to finish the move. The existing constraints move as well.
5. If you want to detach an element and move it freely, delete its locking constraints and drag it with the mouse.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Move/en&oldid=1458226>"
