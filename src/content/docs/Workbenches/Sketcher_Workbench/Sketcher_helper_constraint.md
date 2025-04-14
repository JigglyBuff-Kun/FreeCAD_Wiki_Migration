---
title: Sketcher helper constraint
---

## Overview

![](/images/Sketcher_helper_constraint_example1.png)

Example of a helper constraint (Constraint5 - point on circle) for a tangent constraint (Constraint6; in tangent-via-point mode). Only one helper constraint is used in this case, since the point of tangency is the endpoint of ellipse's major diameter, which inherently lies on the ellipse.

Helper constraint is a regular sketcher constraint that is needed as a part of a more complex constraint, but is exposed in user interface to assist dealing with redundancy. For example, for [Snell's Law constraint](/Sketcher_ConstrainSnellsLaw "Sketcher ConstrainSnellsLaw"), the two lines that represent rays of light need to be connected ([Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident")), and the joint must lie on the interface ([Point on object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject")).

Helper constraints are added automatically when they are needed. The decision for if they are needed is currently made by evaluating the helper constraint error for current state of geometry (this may change in future versions). If the error is small enough, the constraint is considered to be unnecessary, and is not added. In some cases, this logic can lead to errors (the constraint can be satisfied by accident, which can easily happen when Sketcher Grid Snapping is on).

If this happens (a helper constraint is missing, and the required conditions is not satisfied otherwise), the complex constraint will be broken. It will do something, but the actual behavior is undefined. Such a broken constraint can be repaired by adding the missing helper constraint manually.

Helper constraints are currently required for:

- [Constrain tangent or collinear](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent") (in tangent-via-point mode two Point on object constraints are needed)
- [Constrain perpendicular](/Sketcher_ConstrainPerpendicular "Sketcher ConstrainPerpendicular") (in perpendicular-via-point mode two Point on object constraints are needed)
- [Constrain angle](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle") (in angle-via-point mode two Point on object constraints are needed)
- [Constrain refraction (Snell's law)](/Sketcher_ConstrainSnellsLaw "Sketcher ConstrainSnellsLaw") (Coincident constraint and Point on object constraint are needed)

## Scripting

When constraints requiring helpers are added from Python, no helper constraints are automatically added. One can replicate the automatic decision-making of the UI commands in a script by testing the following functions, specifically added for the purpose and used in the UI routines:

```
Sketch.isPointOnCurve(icurve,x,y)

```

`isPointOnCurve` tests if a virtual point, given by sketch coordinates `x,y` (float values), happens to satisfy a virtual point-on-object constraint - i.e. lies on curve specified by curve index `icurve`. Returns True if the point is on curve, and False if it doesn't.

```
Sketch.calculateConstraintError(iconstr)

```

`calculateConstraintError` evaluates an error function of a constraint specified by its index `iconstr` in the sketch. If there is only one error function in the constraint, the return value is the signed return value of the error function. If there is more than one error function associated with the constraint (i.e. the constraint removes more than one degree of freedom), the return value is the RMS of all the error functions (always positive).

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_helper_constraint/en&oldid=1409376>"
