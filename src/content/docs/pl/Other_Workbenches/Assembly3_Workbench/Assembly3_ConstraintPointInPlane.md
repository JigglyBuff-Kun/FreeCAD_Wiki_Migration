---
title: Złożenie 3 Wiązanie punkt na płaszczyźnie
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Assembly3 ConstraintPointInPlane |
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

This tool builds a link between two objects of an assembly and fixes the distance between them and the orientation to each other. The selected elements of each object or more precisely their implicit coordinate systems (ICS) are used to position one object to another.

Assuming the first object is already locked in place by the ![](/images/Assembly_ConstraintLock.svg) [Lock constraint](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") then the following object is moved to a position where the point element's origin lies on the planar face element's xy-plane.

Point elements have no stretch in any direction (zero length) and so there's no orientation detectable i.e. their ICS are only to match other elements' settings. The orientation of the ICSs always stays the same as the global coordinate system's orientation and can not be used to reduce any degrees of freedom related to rotation.

Related to the first object the following object can still move along the x- and y-axis and spin around all three axes. This is leaving 5 degrees of freedom (DOFs) for each link unconstrained.

## Usage

1. Place two objects into an assembly.
2. Select one point element of one object and one planar face element of the other object.
3. Press the ![](/images/Assembly_ConstraintPointInPlane.svg) [Point on plane](/Assembly3_ConstraintPointInPlane "Assembly3 ConstraintPointInPlane") button.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintPointInPlane/pl&oldid=1081497>"