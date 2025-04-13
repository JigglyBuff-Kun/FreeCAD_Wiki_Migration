---
title: Złożenie 3 Wiązanie równy kąt
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Assembly3 ConstraintEqualAngle |
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

This tool builds a link between two objects of an assembly and fixes one angle between them in relation to another angle's value. The selected elements of each object or more precisely their implicit coordinate systems (ICS) are used to position one object to another.

It can handle 3D line elements and planar face elements as well as 2D line elements within a work plane.

The line directions as well as the face normals are represented by each ICS's z-axis and so it actually fixes the angle between both elements' z-axes (on basis of another angle between two z-axes).

## Usage

1. Place two objects into an assembly
2. Select one line element or one planar face element of each object
3. Select two more line or one planar face elements to extract the value of the angle between them
4. Press the ![](/images/Assembly_ConstraintEqualAngle.svg) [Equal angle](/Assembly3_ConstraintEqualAngle "Assembly3 ConstraintEqualAngle") button.

:   In addition the "Flip element" function of the elements properties panel may be needed if ICSs are not orientated as expected.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintEqualAngle/pl&oldid=1084569>"