---
title: Złożenie 3 Wiązanie zablokowania
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Assembly3 ConstraintLock |
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

This tool links an object to the global coordinate system (GCS) of the assembly using the implicit coordinate system (ICS) of a selected element.

:   - If a vertex is selected the coordinates of its ICS are fixed relative to the GCS.

    :   The object can still rotate around the vertex.
:   - If a (straight) edge is selected the coordinates of its ICS and the direction of its z-axis are fixed relative to the GCS.

    :   The object can still rotate around the edge.
:   - If a face is selected the coordinates and the orientation of its ICS are fixed relative to the GCS.

    :   The object is completely fixed to the GCS.

This can be used to define the fixed set in a static assembly as well as in a kinematic system.

## Usage

1. Place an object into an assembly.
2. Select one element of the object.
3. Press the ![](/images/Assembly_ConstraintLock.svg) [Locked](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") button.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintLock/pl&oldid=1081527>"