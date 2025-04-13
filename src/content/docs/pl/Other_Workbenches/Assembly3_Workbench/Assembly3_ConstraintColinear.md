---
title: Złożenie 3 Wiązanie współliniowości
---

:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 ConstraintColinear                            |
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

The ![](/images/Assembly_ConstraintColinear.svg) [Colinear](/Assembly3_ConstraintColinear "Assembly3 ConstraintColinear") command constrains two 2D lines such as non-subdivided wires made with the Draft workbench in relation with a work plane.

It links the positions of both 2D lines in a way that the origin of one line's implicit coordinate system (ICS) lies on the z axis of the other line's ICS with both z axes pointing in the same direction.

## Usage

1. Select two 2D lines.
2. Activate the ![](/images/Assembly_ConstraintColinear.svg) [Colinear](/Assembly3_ConstraintColinear "Assembly3 ConstraintColinear") command using the:
   - ![](/images/Assembly_ConstraintColinear.svg) [Colinear](/Assembly3_ConstraintColinear "Assembly3 ConstraintColinear") button.
3. Press the ![](/images/Assembly3_workbench_icon.svg) [Solve constraints](/Assembly3_ResolveConstraints "Assembly3 ResolveConstraints") or the ![](/images/Assembly_QuickSolve.svg) [Quick solve](/Assembly3_QuickSolve "Assembly3 QuickSolve") button to recompute

: : (if ![](/images/Assembly_AutoRecompute.svg) [Auto recompute](/Assembly3_AutoRecompute "Assembly3 AutoRecompute") and ![](/images/Assembly_SmartRecompute.svg) [Smart recompute](/Assembly3_SmartRecompute "Assembly3 SmartRecompute") are disabled).

## Notes

This tool accepts a 3D elements as well e.g. edges or center lines.

- 2D/3D or 3D/2D: Instead of the 3D elements z axis the projection of that axis onto the 2D line's workplane is used to position the lines.
- Both 3D: The lines are positioned to one another but I can't figure out how...

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintColinear/pl&oldid=1085994>"
