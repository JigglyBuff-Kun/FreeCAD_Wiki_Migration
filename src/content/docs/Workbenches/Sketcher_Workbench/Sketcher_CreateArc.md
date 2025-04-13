---
title: Sketcher CreateArc
---

|                                                                         |
| ----------------------------------------------------------------------- |
| Sketcher CreateArc                                                      |
| Menu location                                                           |
| Sketch → Sketcher geometries → Create arc by center                     |
| Workbenches                                                             |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench")                    |
| Default shortcut                                                        |
| G A                                                                     |
| Introduced in version                                                   |
| -                                                                       |
| See also                                                                |
| [Sketcher CreateCircle](/Sketcher_CreateCircle "Sketcher CreateCircle") |
|                                                                         |

## Description

The ![](/src/assets/images/Sketcher_CreateArc.svg) [Sketcher CreateArc](/Sketcher_CreateArc "Sketcher CreateArc") tool creates an arc by its center and its endpoints. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Or optionally by its endpoints and a point along the arc.

![](/src/assets/images/Sketcher_ArcExample3.png)

Arc created in Center mode with automatically applied constraints defined by entering all On-View-Parameters

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

Pos-OVP = Positional [On-View-Parameters](/Sketcher_Preferences#General "Sketcher Preferences"). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")  
Dim-OVP = Dimensional On-View-Parameters. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

1. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Sketcher_CreateArc.svg) [Center and endpoints](/Sketcher_CreateArc "Sketcher CreateArc") button.
   - Select the **Sketcher → Sketcher geometries → ![](/src/assets/images/Sketcher_CreateArc.svg) Create arc by center** option from the menu.
   - Right-click in the [3D view](/3D_view "3D view") and select the **![](/src/assets/images/Sketcher_CreateArc.svg) Create arc by center** option from the context menu.
   - Use the keyboard shortcut: G then A.
2. The cursor changes to a cross with the current tool mode icon.
3. The **Arc parameters** section ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) is added at the top of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
4. Optionally press the M key or select from the dropdown list in the parameters section to change the tool mode:
   - ![](/src/assets/images/Sketcher_CreateArc.svg) **Center**:
     1. Pick the center of the arc. Or with Pos-OVP: enter its X and/or Y coordinate.
     2. Pick the start point of the arc, this also defines the radius. Or with Dim-OVP: enter the radius and/or start angle of the arc. The angle is relative to the X axis of the sketch. No constraint is created for this angle.
     3. Pick the endpoint of the arc. Or with Dim-OVP: enter the aperture angle of the arc.
   - ![](/src/assets/images/Sketcher_Create3PointArc.svg) **3 rim points**: [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
     1. Pick the start and end points of the arc. Or with Pos-OVP: enter their X and/or Y coordinates.
     2. Pick another point to define the radius. Or with Pos-OVP: enter its X and/or Y coordinate. No constraints are created for this point.
5. The arc is created and applicable Pos-OVP and Dim-OVP based constraints are added.
6. If the tool runs in [continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench"):
   1. Optionally keep creating arcs.
   2. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateArc/en&oldid=1402647>"
