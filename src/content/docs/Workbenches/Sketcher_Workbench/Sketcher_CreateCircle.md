---
title: Sketcher CreateCircle
---

|                                                                |
| -------------------------------------------------------------- |
| Sketcher CreateCircle                                          |
| Menu location                                                  |
| Sketch → Sketcher geometries → Create circle by center         |
| Workbenches                                                    |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench")           |
| Default shortcut                                               |
| G C                                                            |
| Introduced in version                                          |
| -                                                              |
| See also                                                       |
| [Sketcher CreateArc](/Sketcher_CreateArc "Sketcher CreateArc") |
|                                                                |

## Description

The ![](/images/Sketcher_CreateCircle.svg) [Sketcher CreateCircle](/Sketcher_CreateCircle "Sketcher CreateCircle") tool creates a circle by its center and a point along the circle. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Or optionally by three points along the circle.

![](/images/Sketcher_CircleExample1.png)

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

Pos-OVP = Positional [On-View-Parameters](/Sketcher_Preferences#General "Sketcher Preferences"). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")  
Dim-OVP = Dimensional On-View-Parameters. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

1. There are several ways to invoke the tool:
   - Press the ![](/images/Sketcher_CreateCircle.svg) [Center and rim point](/Sketcher_CreateCircle "Sketcher CreateCircle") button.
   - Select the **Sketcher → Sketcher geometries → ![](/images/Sketcher_CreateCircle.svg) Create circle by center** option from the menu.
   - Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_CreateCircle.svg) Create circle by center** option from the context menu.
   - Use the keyboard shortcut: G then C.
2. The cursor changes to a cross with the current tool mode icon.
3. The **Circle parameters** section ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) is added at the top of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
4. Optionally press the M key or select from the dropdown list in the parameters section to change the tool mode:
   - ![](/images/Sketcher_CreateCircle.svg) **Center**:
     1. Pick the center of the circle. Or with Pos-OVP: enter its X and/or Y coordinate.
     2. Pick a point to define the radius of the circle. Or with Dim-OVP: enter this radius.
   - ![](/images/Sketcher_Create3PointCircle.svg) **3 rim points**: [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
     1. Pick three points to define the circle. Or with Pos-OVP: enter their X and/or Y coordinates. No constraints are created for these points.
5. The circle is created and applicable Pos-OVP and Dim-OVP based constraints are added.
6. If the tool runs in [continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench"):
   1. Optionally keep creating circles.
   2. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateCircle/en&oldid=1413739>"
