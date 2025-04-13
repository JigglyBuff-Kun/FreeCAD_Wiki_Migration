---
title: Złożenie 3 Wiązanie symetrii linii
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Assembly3 ConstraintSymmetricLine |
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

This tool builds a link between two or three objects of an assembly. The selected elements of each object or more precisely their implicit coordinate systems (ICS) are used to position the objects to each other.

Based on one line element's ICS both other elements' ICSs' origins are positioned to have identical z-coordinates and the same x- and y-offsets in opposite directions.

## Usage

1. Place two objects into an assembly
2. Select two point elements of one object
3. Select a straight line element of the other object
4. Press the ![](/images/Assembly_ConstraintSymmetricLine.svg) [Symmetric line](/Assembly3_ConstraintSymmetricLine "Assembly3 ConstraintSymmetricLine") button.

Or

1. Place three objects into an assembly
2. Select one point element of the first two objects
3. Select a straight line element of the third object
4. Press the ![](/images/Assembly_ConstraintSymmetricLine.svg) [Symmetric line](/Assembly3_ConstraintSymmetricLine "Assembly3 ConstraintSymmetricLine") button.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintSymmetricLine/pl&oldid=1084683>"