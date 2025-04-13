---
title: Złożenie 3 Wiązanie zbieżności
---

:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 ConstraintCoincidence                         |
| Menu location                                           |
| _None_                                                  |
| Workbenches                                             |
| [Assembly3](/Assembly3_Workbench "Assembly3 Workbench") |
| Default shortcut                                        |
| _None_                                                  |
| Introduced in version                                   |
| -                                                       |
| See also                                                |
| _None_                                                  |
|                                                         |

## Description

This tool links two or more objects of an assembly and matches their orientations. The selected elements of each object or more precisely their implicit coordinate systems (ICSs) are used to position one object in relation to another.

Assuming the first object is already locked in place by the ![](/images/Assembly_ConstraintLock.svg) [Lock constraint](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") then the following objects are moved to positions where the x-y-planes of all ICSs are coplanar and the z-axes are collinear.

An option for this link is to set a distance between the x-y-planes and making them parallel.

The angle between their x-axes (and y-axes as well) are not defined. Related to the first object the following objects can still spin around the z-axis.
This is leaving 1 degree of freedom (DOF) for each link unconstrained.

This link can be used as a hinge in kinematics.

The rotation can be stopped by switching Lock Angle to true in the properties panel and the angle can be set to a specific value.
With controlled value the link can be used as an actuator in a kinematic system.

## Usage

1. Place two or more objects into an assembly.
2. Select one planar face element of each object.
3. Activate the ![](/images/Assembly_ConstraintCoincidence.svg) **Assembly3 ConstraintCoincidence** command using:
   - The ![](/images/Assembly_ConstraintCoincidence.svg) [Create "PlaneCoincident" constraint](/Assembly3_ConstraintCoincidence "Assembly3 ConstraintCoincidence") button.

## Kinematic Equivalent

Used in kinematic context this constraint resembles a hinge or a **revolute joint** when used with arcs and circles.

In real life the shapes of the objects allow rotation and prevent sliding and in this case arcs and circles are utilised to simulate this.

![](/images/Assembly3_ConstraintCoincidence-01.png) ![](/images/Button_right.svg)
![](/images/Assembly3_ConstraintCoincidence-02.png)

Constrained objects before and after running the solver

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintCoincidence/pl&oldid=1106041>"
