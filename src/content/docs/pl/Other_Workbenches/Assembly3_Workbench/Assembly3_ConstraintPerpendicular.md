---
title: Złożenie 3 Wiązanie prostopadłości
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Assembly3 ConstraintPerpendicular |
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

Assuming the first object is already locked in place by the ![](/images/Assembly_ConstraintLock.svg) [Lock constraint](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") then the following object is moved to a position where both z-axes are perpendicular.

The offset of their origins in x-, y- and z-direction and the angles between the x-, and y-axes are not defined. Related to the first object the following object can still move along the x-, y- and z-axis and spin around both z-axes. This is leaving 5 degrees of freedom (DOFs) for each link unconstrained.

The constraint accepts straight edges and planar faces.

## Usage

1. Place two objects into an assembly.
2. Select one straight edge element or one planar face element of each object.
3. Press the ![](/images/Assembly_ConstraintPerpendicular.svg) [Perpendicular](/Assembly3_ConstraintPerpendicular "Assembly3 ConstraintPerpendicular") button.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintPerpendicular/pl&oldid=1081511>"