---
title: Złożenie 3 Wiązanie projekt odległości punktów
---

:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 ConstraintPointsProjectDistance               |
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

The ![](/images/Assembly_ConstraintPointsProjectDistance.svg) [Points project distance](/Assembly3_ConstraintPointsProjectDistance "Assembly3 ConstraintPointsProjectDistance") command constrains the distance of two 2D points in relation to a Straight line.

Based on the line's direction (the z axis of its implicit coordinate system (ICS)) setting the distance of two points along the line means to add the distance value to the first point's z value to receive the second point's z value (and ignoring the x and y values).

## Usage

1. Select two points (2D or 3D).
2. Select a straight line (2D or 3D).
3. Activate the ![](/images/Assembly_ConstraintPointsProjectDistance.svg) [Points project distance](/Assembly3_ConstraintPointsProjectDistance "Assembly3 ConstraintPointsProjectDistance") command using the:
   - ![](/images/Assembly_ConstraintPointsProjectDistance.svg) [Points project distance](/Assembly3_ConstraintPointsProjectDistance "Assembly3 ConstraintPointsProjectDistance") button.
4. Press the ![](/images/Assembly3_workbench_icon.svg) [Solve constraints](/Assembly3_ResolveConstraints "Assembly3 ResolveConstraints") or the ![](/images/Assembly_QuickSolve.svg) [Quick solve](/Assembly3_QuickSolve "Assembly3 QuickSolve") button to recompute

: : (if ![](/images/Assembly_AutoRecompute.svg) [Auto recompute](/Assembly3_AutoRecompute "Assembly3 AutoRecompute") and ![](/images/Assembly_SmartRecompute.svg) [Smart recompute](/Assembly3_SmartRecompute "Assembly3 SmartRecompute") are disabled).

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintPointsProjectDistance/pl&oldid=1085991>"
