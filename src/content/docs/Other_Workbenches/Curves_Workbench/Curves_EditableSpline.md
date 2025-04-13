---
title: Curves EditableSpline
---

|                                                |
| ---------------------------------------------- |
| Curves EditableSpline                          |
| Menu location                                  |
| Curves → Freehand BSpline                      |
| Workbenches                                    |
| [Curves](/Curves_Workbench "Curves Workbench") |
| Default shortcut                               |
| _None_                                         |
| Introduced in version                          |
| -                                              |
| See also                                       |
| _None_                                         |
|                                                |

## Description

The ![](/src/assets/images/Curves_EditableSpline.svg) **Curves EditableSpline** tool creates a freehand B-spline curve.

## Usage

1. Optionally select vertices, edges and/or faces:
   - The number of the spline vertices will match the number of selected elements.
   - The spline vertices will snap to the selected vertices, and to the midpoints of the selected edges and faces.
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Curves_EditableSpline.svg) [Freehand BSpline](/Curves_EditableSpline "Curves EditableSpline") button.
   - Select the **Curves → ![](/src/assets/images/Curves_EditableSpline.svg) Freehand BSpline** option from the menu.
3. A **Freehand_BSpline** object is created and set in a special edit mode.
4. Drag the spline into the desired shape. See options below for details
5. Press Q, or right-click the spline in the [Tree view](/Tree_view "Tree view") and select the **Finish editing** option in the context menu to exit the edit mode and finish the command.

## Options

During the command a special edit mode is active and there are several actions and behaviors that can be controlled by keys and mouse clicks.

- To move a vertex or guide line (guide lines are the straight lines between vertexes) press and hold down the left mouse button on it, and move the mouse.
- The A key selects or deselects all vertexes and guide lines.
- The I key will add a vertex to the segment belonging to the selected guide line. The new vertex will be selected.
- The T key sets or un-sets tangent mode for the selected vertexes or guide lines (relative to the view direction).
- The P key aligns selected objects.
- The S key can be used to snap a vertex to a vertex belonging to another B-spline. With a vertex of the B-spline being edited selected, hold down the Ctrl key and add the target vertex to the selection, then hit the S key. The vertexes are snapped together.
- To unsnap vertexes, select the snapped vertex pair and again hit the S key. The vertex of the B-spline being edited remains selected and can now be moved.
- The L key sets or un-sets the linear interpolation.
- The X, Y or Z keys can be used to constrain the movement of the object being dragged. While dragging, hit the desired axis key. Hit the same key again to disable the constraint.
- The Q key finishes the command and exits edit mode.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **Freehand_BSpline** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

### Data

Profile

- Data**Data** (`VectorList`): Data list.
- Data**Data Type** (`IntegerList`): Types of interpolated points.
- Data**Flags** (`BoolList`): Tangent flags.
- Data**Linear Segments** (`BoolList`): Linear segment flags.
- Data**Parametrization** (`FloatConstraint`): Parametrization factor.
- Data**Periodic** (`Bool`): Periodic curve.
- Data**Support** (`LinkSubList`): Constraint shapes.
- Data**Tangents** (`VectorList`): Tangents list.
- Data**Tolerance** (`Float`): Tolerance.

## Scripting

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_EditableSpline/en&oldid=1566767>"
