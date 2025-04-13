---
title: Złożenie 3 Zablokuj przesunięcie
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Assembly3 LockMover |
| Menu location |
| Assembly3 → Lock mover |
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

The ![](/images/Assembly_LockMover.svg) [Lock mover](/Assembly3_LockMover "Assembly3 LockMover") command is a toggle that prevents parts from being moved if they are fixed with a ![](/images/Assembly_ConstraintLock.svg) [Locked](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") constraint.

When activated, none of the mover commands ![](/images/Assembly_Move.svg) [Move part](/Assembly3_MovePart "Assembly3 MovePart"), ![](/images/Assembly_AxialMove.svg) [Axial move](/Assembly3_AxialMove "Assembly3 AxialMove"), or ![](/images/Assembly_QuickMove.svg) [Quick move](/Assembly3_QuickMove "Assembly3 QuickMove") can be selected as long as the current selection contains a fixed object. This seems not to apply to 2D geometry (see [Notes](#Notes)).

## Usage

1. Activate the ![](/images/Assembly_LockMover.svg) **Lock mover** command using one of the following:
   * The ![](/images/Assembly_LockMover.svg) [Lock mover](/Assembly3_LockMover "Assembly3 LockMover") button.
   * The **Assembly3 → ![](/images/Assembly_LockMover.svg) Lock mover** menu option.

## Notes

Selected **2D geometry**, such as Draft lines, arcs, and circles, fixed with the Locked constraint does not deactivate the mover tools. While circles and arcs still keep their position when a mover is applied to them, lines can be relocated and tilted.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_LockMover/pl&oldid=1163266>"