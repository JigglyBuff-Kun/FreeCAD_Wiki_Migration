---
title: Złożenie 3 Śledzenie ruchu części
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Assembly3 TracePartMove |
| Menu location |
| Assembly3 → Trace part move |
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

The ![](/images/Assembly_Trace.svg) [Trace part move](/Assembly3_TracePartMove "Assembly3 TracePartMove") command traces one single point of a kinematic assembly, when one of the assembled objects is moved with either the ![](/images/Assembly_Move.svg) [Move part](/Assembly3_MovePart "Assembly3 MovePart") tool or the ![](/images/Assembly_AxialMove.svg) [Axial move](/Assembly3_AxialMove "Assembly3 AxialMove") tool.

## Usage

1. Optionally select a wire object:
   * A point to trace itself.
   * An edge or face to trace the center point of its shape.
2. Activate the ![](/images/Assembly_Trace.svg) **Trace part move** command using one of the following:
   * The ![](/images/Assembly_Trace.svg) [Trace part move](/Assembly3_TracePartMove "Assembly3 TracePartMove") button.
   * The **Assembly3 → ![](/images/Assembly_Trace.svg) Trace part move** menu option.
3. Select one object of the assembly and move it using one of the following:
   * The ![](/images/Assembly_Move.svg) [Move part](/Assembly3_MovePart "Assembly3 MovePart") tool.
   * The ![](/images/Assembly_AxialMove.svg) [Axial move](/Assembly3_AxialMove "Assembly3 AxialMove") tool.
4. Press the esc key or the OK button (Axial move only) to finish tracing.
5. Find an AsmTrace object in the [Tree view](/Tree_view "Tree view").

## Notes

* If you don't select any shape in the first step, you will be tracing the shape that was selected in the third step.
* To change the element to trace, you need to disable this tool before selecting a new element and enabling it again.
* If you control the movement with another tool such as this [kinematic controller](/Tutorial_KinematicController "Tutorial KinematicController") that allows to use a mover tool in parallel, you could use this tool to alter the assembly step by step and use the mover tool to add a point and connecting line on each step. It is possible to use the mover tool as a trigger by picking and dragging any of the arrows - just a tiny bit until the next point and line appears (use transparency if necessary).

:   (I hope there will be a more elegant way in the future)

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_TracePartMove/pl&oldid=1168424>"