---
title: Criar Polígono Regular
---
|  |
| --- |
| Sketcher CreateRegularPolygon |
| Menu location |
| Sketch → Sketcher geometries → Create regular polygon |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| G P R |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Description

The ![](/images/Sketcher_CreateRegularPolygon.svg) [Sketcher CreateRegularPolygon](/Sketcher_CreateRegularPolygon "Sketcher CreateRegularPolygon") tool creates a regular polygon.

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

Pos-OVP = Positional [On-View-Parameters](/Sketcher_Preferences#General "Sketcher Preferences"). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")  
Dim-OVP = Dimensional On-View-Parameters. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

1. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_CreateRegularPolygon.svg) [Regular polygon](/Sketcher_CreateRegularPolygon "Sketcher CreateRegularPolygon") button.
   * Select the **Sketcher → Sketcher geometries → ![](/images/Sketcher_CreateRegularPolygon.svg) Create regular polygon** option from the menu.
   * Use the keyboard shortcut: G then P, then R.
2. Enter the **Number of Sides** in the dialog that opens.
3. The cursor changes to a cross with the tool icon.
4. The **Polygon parameters** section ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) is added at the top of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
5. Optionally change the number of **Sides** (this can also be done after picking the center):
   * Enter a number greater than two.
   * Press the U key to increase the number.
   * Press the J key to decrease the number.
6. Pick the center of the polygon. Or with Pos-OVP: enter its X and/or Y coordinate.
7. Pick the first point of the polygon, this also defines the radius of the circumscribed circle. Or with Dim-OVP: enter the radius of the circle and/or the angle of the first point. The angle is relative to the X axis of the sketch. No constraint is created for this angle.
8. The polygon is created, including a circumscribed construction geometry circle, and applicable Pos-OVP and Dim-OVP based constraints are added.
9. If the tool runs in [continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench"):
   1. Optionally keep creating polygons.
   2. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

## Notes

* The construction geometry circle is not visible outside the sketch. It cannot be deleted without breaking the geometry of the polygon.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateRegularPolygon/pt-br&oldid=1402556>"