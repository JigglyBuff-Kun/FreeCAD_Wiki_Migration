---
title: Złożenie 3 Wiązanie odległość punktu równa długości linii
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Assembly3 ConstraintLengthEqualPointLineDistance |
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

This tool constrains the length of a 2D line like a non-subdivided wire made with the Draft workbench in relation with a work plane.

It links the length of the 2D line with the distance between a point and another line (2D or 3D).

The length value of the first selected line equals the shortest distance between the point and the second line.

## Usage

1. Select a point.
2. Select the 2D line to be constrained.
3. Select the line that defines the distance to the point.
4. Press the ![](/images/Assembly_ConstraintLengthEqualPointLineDistance.svg) [Length Equal Point Line Distance](/Assembly3_ConstraintLengthEqualPointLineDistance "Assembly3 ConstraintLengthEqualPointLineDistance") button.
5. Press the ![](/images/Assembly3_workbench_icon.svg) [Solve constraints](/Assembly3_ResolveConstraints "Assembly3 ResolveConstraints") or the ![](/images/Assembly_QuickSolve.svg) [Quick solve](/Assembly3_QuickSolve "Assembly3 QuickSolve") button to recompute

:   :   (if ![](/images/Assembly_AutoRecompute.svg) [Auto recompute](/Assembly3_AutoRecompute "Assembly3 AutoRecompute") and ![](/images/Assembly_SmartRecompute.svg) [Smart recompute](/Assembly3_SmartRecompute "Assembly3 SmartRecompute") are disabled).

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintLengthEqualPointLineDistance/pl&oldid=1085981>"