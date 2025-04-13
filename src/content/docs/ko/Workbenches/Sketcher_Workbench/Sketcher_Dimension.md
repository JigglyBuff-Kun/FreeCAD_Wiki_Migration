---
title: 스케치 치수
---
|  |
| --- |
| 스케치 치수 |
| Menu location |
| 스케치→ 스케치 구속 → 치수 |
| Workbenches |
| [스케치 작업대](/Sketcher_Workbench/ko "Sketcher Workbench/ko") |
| Default shortcut |
| D |
| Introduced in version |
| 1.0 |
| See also |
| *None* |
|  |

## 설명

![](/images/Sketcher_Dimension.svg) 스케치 치수 도구는 스케치 작업대의 상황에 맞는 구속 도구입니다. 현재 선택에 따라 적절한 치수 구속뿐만 아니라 기하학적 구속도 제공합니다.

## 용법

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

1. Optionally select one or more elements (edges or points). [B-spline](/Sketcher_Workbench#Sketcher_CompCreateBSpline "Sketcher Workbench") edges are currently not supported.
2. There are several ways to invoke the tool:
   * If the **Dimensioning constraints** [preference](/Sketcher_Preferences#General "Sketcher Preferences") is set to `Both` or `Single tool` (default): press the ![](/images/Sketcher_Dimension.svg) [Dimension](/Sketcher_Dimension "Sketcher Dimension") button.
   * Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_Dimension.svg) Dimension** option from the menu.
   * Right-click in the [3D view](/3D_view "3D view") and select the **Dimension → ![](/images/Sketcher_Dimension.svg) Dimension** option from the context menu.
   * If there is a selection: Right-click in the 3D view and select the **![](/images/Sketcher_Dimension.svg) Dimension** option from the context menu.
   * Use the keyboard shortcut: D.
3. The cursor changes to a cross with the tool icon.
4. If you have not yet selected an element: select one.
5. Depending on the selected element(s) a constraint is proposed.
6. Optionally select an additional element.
7. Optionally deselect an element by clicking it again.
8. The proposed constraint is updated after every selection change.
9. Optionally press the M key one or more times to cycle through other available constraints, if any.
10. If a geometric constraint is proposed, selected elements may change giving a preview of the result.
11. Do one of the following:
    * Click in an empty area in the [3D view](/3D_view "3D view") to confirm:
      1. If a dimensional constraint is created the clicked point determines its location. For a linear dimension the clicked point also determines its type: ![](/images/Sketcher_ConstrainDistanceX.svg) [Horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"), ![](/images/Sketcher_ConstrainDistanceY.svg) [Vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY") or ![](/images/Sketcher_ConstrainDistance.svg) [Distance](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance").
      2. If a [driving dimensional constraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") is created, depending on the [preferences](/Sketcher_Preferences#Display "Sketcher Preferences"), a dialog opens to [edit its value](/Sketcher_Workbench#Edit_constraints "Sketcher Workbench").
      3. A constraint is added.
      4. This tool always runs in continue mode: optionally keep creating constraints.
    * To finish, right-click or press Esc, or start another geometry or constraint creation tool.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Dimension/ko&oldid=1563149>"