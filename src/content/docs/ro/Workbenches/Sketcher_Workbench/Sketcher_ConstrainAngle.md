---
title: Sketcher Constrângere de Unghi
---
|  |
| --- |
| Constraint InternalAngle |
| Menu location |
| Sketch → Sketcher constraints → Constrain angle |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| A |
| Introduced in version |
| - |
| See also |
| [Constrain distance](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance"), [Constraint Perpendicular](/Sketcher_ConstrainPerpendicular "Sketcher ConstrainPerpendicular") |
|  |

## Description

## Descriere

Constrângerea de unghi este o [datum constraint](/Sketcher_Workbench#Sketcher_Constraints "Sketcher Workbench") având ca scop fixarea unghiurilor unei schițe. Este capabilă să definească pantele liniilor individuale, unghiurile dintre linii, unghiurile de intersecții ale curbelor și deschiderile unghiulare ale arcurilor circulare.

## Cum se folosește

Sunt patru căi diferite pentru ca această constrângere să fie aplicată:

1. Liniilor individuale
2. între linii
3. asupra interesecțiilor curbelor
4. Arcurilor de cercuri

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the **Dimensioning constraints** [preference](/Sketcher_Preferences#General "Sketcher Preferences") is set to `Single tool` (default): press the down arrow to the right of the ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) button and select the **![](/images/Sketcher_ConstrainAngle.svg) Constrain angle** option from the dropdown.
   * If this preference has a different value (and in 0.21 and below): press the ![](/images/Sketcher_ConstrainAngle.svg) [Constrain angle](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle") button.
   * Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ConstrainAngle.svg) Constrain angle** option from the menu.
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **Dimension → ![](/images/Sketcher_ConstrainAngle.svg) Constrain angle** option from the context menu.
   * Use the keyboard shortcut: K then A.
3. The cursor changes to a cross with the tool icon.
4. Do one of the following:
   * Select two lines.
   * Select a point and two edges (in that order).
   * Select an edge, a point and an edge (idem).
5. If a [driving dimensional constraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") is created, depending on the [preferences](/Sketcher_Preferences#Display "Sketcher Preferences"), a dialog opens to [edit its value](/Sketcher_Workbench#Edit_constraints "Sketcher Workbench"). A negative value will reverse the angle direction.
6. An Angle constraint is added. If a point and two edges have been selected, up to two [Point to object constraints](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") can also be added. See [Examples](#Between_two_edges_at_point).
7. Optionally keep creating constraints.
8. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Do one of the following:
   * Select a single line.
   * Select a single circular arc.
   * Select two lines.
   * Select a point and two edges (in any order).
2. Invoke the tool as explained above.
3. Optionally [edit the constraint value](/Sketcher_Workbench#Edit_constraints "Sketcher Workbench").
4. An Angle constraint is added. If a point and two edges have been selected, up to two [Point on object constraints](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") can also be added. See [Examples](#Between_two_edges_at_point).

## Examples

### Single line

![](/images/Sketcher_ConsraintAngle_mode1.png)

Constrângerea stabilește unghiul polar al direcției liniei. Este unghiul dintre linie și axa X a schiței.

### Single circular arc

![](/images/Sketcher_ConsraintAngle_mode2.png)

In acest mod, constrângerea fixată unghiulară a unui arc circular.

### Between two lines

![](/images/Sketcher_ConsraintAngle_mode3.png)

În acest mod, constrângerea stabilește unghiul dintre două linii. Nu este necesar ca liniile să se intersecteze.

### Between two edges at point

![](/images/Sketcher_ConsraintAngle_mode4.png)

The angle between the two edges at a given point is fixed. The point can be any point, e.g. the center of a circle, the endpoint of an edge, or the origin, it can belong to either or both edges, and it can also be a [Point object](/Sketcher_CreatePoint "Sketcher CreatePoint"). If required [Point on object constraint(s)](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") are added to ensure the point lies on both (extended) edges. These additional constraints are called [helper constraints](/Sketcher_helper_constraint "Sketcher helper constraint").

## Script

Constrângerea Unghiulară poate fi creată cu [macros](/Macros "Macros") și de la consola Python console utilizând următoarele:

```
# line slope angle
Sketch.addConstraint(Sketcher.Constraint('Angle',iline,angle))

# angular span of arc
Sketch.addConstraint(Sketcher.Constraint('Angle',iarc,angle))

# angle between lines
Sketch.addConstraint(Sketcher.Constraint('Angle',iline1,pointpos1,iline2,pointpos2,angle))

# angle-via-point (no helper constraints are added automatically when from python)
Sketch.addConstraint(Sketcher.Constraint('AngleViaPoint',icurve1,icurve2,geoidpoint,pointpos,angle))

```

unde:

:   * Sketch este un obiect tip schiță
    * iline, iline1, iline2 sunt numere întregi specificând liniile printr-un număr ordinal in Sketch.
    * pointpos1, pointpos2 should be 1 for start point and 2 for end point. The choice of endpoints allows to set internal angle (or external), and it affects how the constraint is drawn on the screen.
    * geoidpoint and pointpos in AngleViaPoint are the indexes specifying the point of intersection.
    * angle este valoarea unghiului în radiani. Unghiul este contorizat între vectorii tangenți în sens antiorar. Vectorii tangenți indică de la început până la capăt liniile (sau invers, dacă punctul final este indicat liniar) și în sens antiorar pentru cercuri, arce și elipse. Cantitatea este, de asemenea, acceptată ca un unghi (de exempluApp.Units.Quantity('45 deg'))

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `iline`, `iline1`, `iline2`, `pointpos1`, `pointpos2`, `geoidpoint` and `pointpos` and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainAngle/ro&oldid=1405283>"