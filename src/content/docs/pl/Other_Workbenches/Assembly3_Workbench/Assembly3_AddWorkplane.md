---
title: Złożenie 3 Dodaj płaszczyznę roboczą
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Assembly3 AddWorkplane |
| Menu location |
| Assembly3 → Workplane and origin → Add workplane |
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

The ![](/images/Assembly_Add_Workplane.svg) [Add workplane](/Assembly3_AddWorkplane "Assembly3 AddWorkplane") command adds a Workplane to an active assembly.

A Workplane object will be created inside the Parts container of the assembly tree and a related workplane item will be placed in the 3D view. It is placed at the assembly's origin and oriented according to the assembly's XY plane, if the Assembly object was selected directly.

![](/images/Assembly_Add_Workplane-01.png) ![](/images/Assembly_Add_Workplane-02.png)

The assembly can also be selected indirectly by some item belonging to the assembly. Then the workplane is placed at the item's origin and oriented according to this item's local XY plane.

Valid items are e.g. elements, bodies, vertexes, edges, faces, origins, and other workplanes from either the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view").

## Usage

1. Activate the ![](/images/Assembly_Add_Workplane.svg) **Add workplane** command using one of the following:
   * The ![](/images/Assembly_Add_Workplane.svg) [Add workplane](/Assembly3_AddWorkplane "Assembly3 AddWorkplane") button.
   * The **Assembly3 → Workplane and origin → ![](/images/Assembly_Add_Workplane.svg) Add workplane** menu option.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_AddWorkplane/pl&oldid=1096416>"