---
title: Sketcher Dimension
---

|                                                      |
| ---------------------------------------------------- |
| Sketcher Dimension                                   |
| Menu location                                        |
| Sketch → Sketcher constraints → Dimension            |
| Workbenches                                          |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut                                     |
| D                                                    |
| Introduced in version                                |
| 1.0                                                  |
| See also                                             |
| _None_                                               |
|                                                      |

## Description

The ![](/src/assets/images/Sketcher_Dimension.svg) [Sketcher Dimension](/Sketcher_Dimension "Sketcher Dimension") tool is the context-sensitive constraint tool of the Sketcher Workbench. Based on the current selection, it offers appropriate dimensional constraints, but also geometric constraints.

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

1. Optionally select one or more elements (edges or points). [B-spline](/Sketcher_Workbench#Sketcher_CompCreateBSpline "Sketcher Workbench") edges are currently not supported.
2. There are several ways to invoke the tool:
   - If the **Dimensioning constraints** [preference](/Sketcher_Preferences#General "Sketcher Preferences") is set to `Both` or `Single tool` (default): press the ![](/src/assets/images/Sketcher_Dimension.svg) [Dimension](/Sketcher_Dimension "Sketcher Dimension") button.
   - Select the **Sketch → Sketcher constraints → ![](/src/assets/images/Sketcher_Dimension.svg) Dimension** option from the menu.
   - Right-click in the [3D view](/3D_view "3D view") and select the **Dimension → ![](/src/assets/images/Sketcher_Dimension.svg) Dimension** option from the context menu.
   - If there is a selection: Right-click in the 3D view and select the **![](/src/assets/images/Sketcher_Dimension.svg) Dimension** option from the context menu.
   - Use the keyboard shortcut: D.
3. The cursor changes to a cross with the tool icon.
4. If you have not yet selected an element: select one.
5. Depending on the selected element(s) a constraint is proposed.
6. Optionally select an additional element.
7. Optionally deselect an element by clicking it again.
8. The proposed constraint is updated after every selection change.
9. Optionally press the M key one or more times to cycle through other available constraints, if any.
10. If a geometric constraint is proposed, selected elements may change giving a preview of the result.
11. Do one of the following:
    - Click in an empty area in the [3D view](/3D_view "3D view") to confirm:
      1. If a dimensional constraint is created the clicked point determines its location. For a linear dimension the clicked point also determines its type: ![](/src/assets/images/Sketcher_ConstrainDistanceX.svg) [Horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"), ![](/src/assets/images/Sketcher_ConstrainDistanceY.svg) [Vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY") or ![](/src/assets/images/Sketcher_ConstrainDistance.svg) [Distance](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance").
      2. If a [driving dimensional constraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") is created, depending on the [preferences](/Sketcher_Preferences#Display "Sketcher Preferences"), a dialog opens to [edit its value](/Sketcher_Workbench#Edit_constraints "Sketcher Workbench").
      3. A constraint is added.
      4. This tool always runs in continue mode: optionally keep creating constraints.
    - To finish, right-click or press Esc, or start another geometry or constraint creation tool.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Dimension/en&oldid=1413805>"
