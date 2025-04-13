---
title: Złożenie 3 Wiązanie kąta
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Assembly3 ConstraintAngle |
| Menu location |
| *None* |
| Workbenches |
| [Assembly3](/Assembly3_Workbench "Assembly3 Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Description

This tool builds a link between two objects of an assembly and matches their orientation. The selected elements of each object or more precisely their implicit coordinate systems (ICS) are used to position one object to another.

The angle between two elements i.e. the angle between their z-axes is fixed.

The offset of their origins in x-, y- and z-direction and the angles between the x-, and y-axes are not defined. Related to the first object the following object can still move along the x-, y- and z-axis and spin around both z-axes. This is leaving 5 degrees of freedom (DOFs) for each link unconstrained.

The constraint accepts straight edges and planar faces.

## Usage

1. Place two or more objects into an assembly.
2. Select one straight edge element or one planar face element of each object.
3. Press the ![](/images/Assembly_ConstraintAngle.svg) Create "Angle" Constraint button.
4. Optionally change the value of the DANE**Angle** property.

## Notes

2D: This constraint seems to be the only way to control an angle in a skeleton sketch (2D kinematic assembly); Prove me wrong, PLEASE!

* Its DANE**Angle** (`Angle`) property allows any positive value, but 0° and 180° exactly are puzzling the solver.
* It flips direction if angles greater than 180° are used and as a result 135° and 225° give the same positions for the involved elements.

:   It is useless if you want to simulate a full rotation and so ruins the principle of using a skeleton sketch for a lot of kinematic tasks such as driving a piston by a rotating crank coupled with a con-rod.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintAngle/pl&oldid=1150744>"