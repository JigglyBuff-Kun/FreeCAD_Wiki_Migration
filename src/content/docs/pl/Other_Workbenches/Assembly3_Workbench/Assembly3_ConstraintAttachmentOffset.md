---
title: Złożenie 3 Wiązenie Odsunięcie dołączenia
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Assembly3 ConstraintAttachmentOffset |
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

This tool builds a link between two objects of an assembly and fixes the distance between them and their orientation to each other. The selected elements of each object or more precisely their element coordinate systems (ECS) are used to fix the current relative position of the objects.

This link leaves no degree of freedom (DOF) unconstrained.

## Usage

1. Place two objects into an assembly.
2. Select one element of each object.
3. Press the ![](/images/Assembly_ConstraintAttachmentOffset.svg) [Create "AttachmentOffset" constraint](/Assembly3_ConstraintAttachmentOffset "Assembly3 ConstraintAttachmentOffset") button.
4. Both objects remain at their position.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintAttachmentOffset/pl&oldid=1178421>"