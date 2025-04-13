---
title: Złożenie 3 Wiązanie wyrównania
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Assembly3 ConstraintAlignment |
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

This tool links two or more objects of an assembly and matches their orientations. The selected elements of each object or more precisely their implicit coordinate systems (ICSs) are used to position one object in relation to another.

Assuming the first object is already locked in place by the ![](/images/Assembly_ConstraintLock.svg) [Lock constraint](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") then the following objects are moved to positions where the x-y-planes of all ICSs are coplanar and the z-axes point in the same direction.

The offset of their z-axes and the angle between their x-axes (and y-axes as well) are not defined.
Related to the first object the following objects can still move along the x- and y-direction and spin around the z-axis.
This is leaving 3 degrees of freedom (DOFs) for each link unconstrained.

## Usage

1. Place two or more objects into an assembly.
2. Select one planar face element of each object.
3. Press the ![](/images/Assembly_ConstraintAlignment.svg) [Alignment](/Assembly3_ConstraintAlignment "Assembly3 ConstraintAlignment") button.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintAlignment/pl&oldid=1081525>"