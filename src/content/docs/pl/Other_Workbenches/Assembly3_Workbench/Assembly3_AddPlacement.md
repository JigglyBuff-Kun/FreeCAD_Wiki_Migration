---
title: Złożenie 3 Dodaj umiejscowienie
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Assembly3 AddPlacement |
| Menu location |
| Assembly3 → Workplane and origin → Add placement |
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

The ![](/images/Assembly_Add_Placement.svg) [Add placement](/Assembly3_AddPlacement "Assembly3 AddPlacement") command adds a Placement to an active assembly.

A Placement object will be created inside the Parts container of the assembly tree and a related placement item will be placed in the 3D view. It is placed at the assembly's origin and inherits the orientation of the assembly's local coordinate system, if the Assembly object was selected directly.

![](/images/Assembly3_AddPlacement-01.png) ![](/images/Assembly3_AddPlacement-02.png)

Left: Tree view. Right: A placement near the assembly origin (shown as file origin here)

The assembly can also be selected indirectly by some item belonging to the assembly. Then the placement is placed at the item's origin and inherits the orientation of this item's local coordinate system.

Valid items are e.g. elements, bodies, vertexes, edges, faces, origins, workplanes, and other placements from either the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view").

## Usage

1. Activate the ![](/images/Assembly_Add_Placement.svg) **Add placement** command using one of the following:
   * The ![](/images/Assembly_Add_Placement.svg) [Add placement](/Assembly3_AddPlacement "Assembly3 AddPlacement") button.
   * The **Assembly3 → Workplane and origin → ![](/images/Assembly_Add_Placement.svg) Add placement** menu option.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_AddPlacement/pl&oldid=1097334>"