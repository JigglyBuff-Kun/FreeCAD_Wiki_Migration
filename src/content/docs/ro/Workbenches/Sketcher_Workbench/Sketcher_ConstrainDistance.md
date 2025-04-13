---
title: Sketcher Constrâgere Distanță
---
|  |
| --- |
| Sketcher ConstrainDistance |
| Menu location |
| Sketch → Sketcher constraints → Constrain distance |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| Shift + D |
| Introduced in version |
| - |
| See also |
| [Constrain horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"), [Constrain vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY") |
|  |

## Description

## Descriere

**Constrain distance** constrânge lungimea unei linii, distanța perpendiculară dintre un punct și o linie sau distanța dintre două puncte pentru a avea o valoare specificată.

![](/images/Sketcher_ConstrainDistance_example.png)

## Cum se folosește

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Selectează două puncte sau o linie sau un punct și o linie.
2. Apăsați butonul ![](/images/Sketcher_ConstrainDistance.png) **Constrain distance** .
3. Un dialog se deschide pentru a edita și a confirma valoarea. Apăsați OK pentru a valida.

### Run-once mode

1. Do one of the following:
   * Select a single line.
   * Select two points.
   * Select a point and a line (in any order).
   * Select the edges of two circles or arcs.
   * Select the edge of a circle or arc and a line (idem).
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Select the edge of a single arc.
2. Invoke the tool as explained above.
3. Optionally [edit the constraint value](/Sketcher_Workbench#Edit_constraints "Sketcher Workbench").
4. A constraint is added.

## Notes

### Aluzie

Dacă este cazul, vă rugăm să luați în considerare utilizarea constrîngerii [Horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX") sau în loc a constrângerii [Vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY") . Aceste constrângeri sunt mai robuste și mai rapide pentru a calcula decât constrângerea de lungime documentată aici.

## Scripting

Distance from origin:

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge, PointOfEdge, -1, 1, App.Units.Quantity('123.0 mm')))

```

Distance between two vertices:

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge1, PointOfEdge1, Edge2, PointOfEdge2, App.Units.Quantity('123.0 mm')))

```

Length of line (the GUI allows selecting the edge itself, but it is just a shorthand for using the two extremities of the same line):

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Line, 1, Line, 2, App.Units.Quantity('123.0 mm')))

```

Distance from point (`Edge, PointOfEdge`) to perpendicular point on line (`Line`):

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge, PointOfEdge, Line, 0, App.Units.Quantity('123.0 mm')))

```

Distance between the edges of two circles:

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Circle1, 0, Circle2, 0, App.Units.Quantity('123.0 mm')))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `Edge`, `Edge1`, `Edge2`, `PointOfEdge`, `PointOfEdge1`, `PointOfEdge2`, `Line`, `Circle1` and `Circle2`, and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDistance/ro&oldid=1405187>"