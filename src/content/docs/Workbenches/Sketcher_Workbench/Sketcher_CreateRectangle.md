---
title: Sketcher CreateRectangle
---

|                                                                               |
| ----------------------------------------------------------------------------- |
| Sketcher CreateRectangle                                                      |
| Menu location                                                                 |
| Sketch → Sketcher geometries → Create rectangle                               |
| Workbenches                                                                   |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench")                          |
| Default shortcut                                                              |
| G R                                                                           |
| Introduced in version                                                         |
| -                                                                             |
| See also                                                                      |
| [Sketcher CreatePolyline](/Sketcher_CreatePolyline "Sketcher CreatePolyline") |
|                                                                               |

## Description

The ![](/images/Sketcher_CreateRectangle.svg) [Sketcher CreateRectangle](/Sketcher_CreateRectangle "Sketcher CreateRectangle") tool creates a rectangle. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The tool has four modes, two of which can also produce parallelograms. Rounded corners and creating an offset copy are optional features.

![](/images/SketcherCreateRectangleExample.png)

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

Pos-OVP = Positional [On-View-Parameters](/Sketcher_Preferences#General "Sketcher Preferences"). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")  
Dim-OVP = Dimensional On-View-Parameters. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

1. There are several ways to invoke the tool:
   - Press the ![](/images/Sketcher_CreateRectangle.svg) [Rectangle](/Sketcher_CreateRectangle "Sketcher CreateRectangle") button.
   - Select the **Sketcher → Sketcher geometries → ![](/images/Sketcher_CreateRectangle.svg) Create rectangle** option from the menu.
   - Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_CreateRectangle.svg) Create rectangle** option from the context menu.
   - Use the keyboard shortcut: G then R.
2. The cursor changes to a cross with the current tool mode icon.
3. The **Rectangle parameters** section ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) is added at the top of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
4. Optionally press the U key or check the **Rounded corners** checkbox to apply fillets to the rectangle. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
5. Optionally press the J key or check the **Frame** checkbox to create a second offset shape. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
6. Optionally press the M key or select from the dropdown list in the parameters section to change the tool mode:
   - ![](/images/Sketcher_CreateRectangle.svg) **Corner, width, height**:
     1. Pick the first corner of the rectangle. Or with Pos-OVP: enter its X and/or Y coordinate.
     2. Pick the opposite corner of the rectangle. Or with Dim-OVP: enter the width and/or height of the rectangle.
   - ![](/images/Sketcher_CreateRectangle_Center.svg) **Center, width, height**: [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
     1. Pick the center of the rectangle. Or with Pos-OVP: enter its X and/or Y coordinate.
     2. Pick a corner of the rectangle. Or with Dim-OVP: enter the width and/or height of the rectangle.
   - ![](/images/Sketcher_CreateRectangle3Points.svg) **3 corners**: [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
     1. Pick the first corner of the rectangle. Or with Pos-OVP: enter its X and/or Y coordinate.
     2. Pick the endpoint of the first edge of the rectangle. Or with Dim-OVP: enter the length and/or angle of the first edge. The angle is relative to the X axis of the sketch.
     3. Pick the third corner, opposite the first, of the rectangle. Or with Dim-OVP: enter the length and/or angle of the second edge. The angle is relative to the first edge. Only if this angle is 90° will the result be a rectangle.
   - ![](/images/Sketcher_CreateRectangle3Points_Center.svg) **Center, 2 corners**: [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
     1. Pick the center of the rectangle. Or with Pos-OVP: enter its X and/or Y coordinate.
     2. Pick the first corner of the rectangle. Or with Pos-OVP: enter its X and/or Y coordinate.
     3. Pick the second corner of the rectangle. Or with Dim-OVP: enter the length and/or angle of the edge between the first and the second corner. The angle is relative to the other edge connected to the first corner. Only if this angle is 90° will the result be a rectangle.
7. If **Rounded corners** is selected: Pick a point to define the fillet radius. Or with Dim-OVP: enter it.
8. If **Frame** is selected: Pick a point to define the offset distance. Or with Dim-OVP: enter it. If the offset is inward and larger than the radius, the offset shape will not have fillets.
9. The geometry is created and applicable Pos-OVP and Dim-OVP based constraints are added.
10. If the tool runs in [continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench"):
    1. Optionally keep creating rectangles.
    2. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateRectangle/en&oldid=1413763>"
