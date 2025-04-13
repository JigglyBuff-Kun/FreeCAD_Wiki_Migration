---
title: Złożenie 3 Wiązanie identycznej orientacji
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Assembly3 ConstraintSameOrientation |
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

This tool builds a link between two or more objects of an assembly and matches their orientation. The selected elements of each object or more precisely their implicit coordinate systems (ICS) are used to position one object to another.

Assuming the first object is already locked in place by the ![](/images/Assembly_ConstraintLock.svg) [Lock constraint](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") then the following objects are moved to positions where all ICSs have the same orientation i.e. all z-axes are parallel and all x-axes are parallel (making the y-axes parallel as well).

The offset of their origins in x-, y- and z-direction are not defined. Related to the first object the following objects can still move along the x-, y- and z-axis. This is leaving 3 degrees of freedom (DOFs) for each link unconstrained.

The constraint accepts planar faces.

## Usage

1. Place two or more objects into an assembly
2. Select one planar face element of each object
3. Press the ![](/images/Assembly_ConstraintSameOrientation.svg) [Same orientation](/Assembly3_ConstraintSameOrientation "Assembly3 ConstraintSameOrientation") button.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintSameOrientation/pl&oldid=1081517>"