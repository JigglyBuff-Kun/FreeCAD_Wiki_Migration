---
title: Złożenie 3 Wiązanie umocowania
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Assembly3 ConstraintAttachment |
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

This tool builds a link between two objects of an assembly and fixes the distance between them and their orientation to each other. The selected elements of each object or more precisely their element coordinate systems (ECS) are used to reposition the objects relative to each other.

This link leaves no degree of freedom (DOF) unconstrained.

## Usage

1. Place two objects into an assembly.
2. Select one element of each object.
3. Press the ![](/images/Part_Attachment.svg) [Create "Attachment" constraint](/Assembly3_ConstraintAttachment "Assembly3 ConstraintAttachment") button.
4. The objects are rearranged so that their ECSs share the same origin and have the same orientation.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintAttachment/pl&oldid=1168430>"