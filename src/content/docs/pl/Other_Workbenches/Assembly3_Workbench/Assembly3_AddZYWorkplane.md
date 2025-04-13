---
title: Złożenie 3 Dodaj płaszczyznę roboczą ZY
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Assembly3 AddZYWorkplane |
| Menu location |
| Assembly3 → Workplane and origin → Add ZY workplane |
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

The ![](/images/Assembly_Add_WorkplaneZY.svg) [Add ZY workplane](/Assembly3_AddZYWorkplane "Assembly3 AddZYWorkplane") command adds a ZY Workplane to an active assembly.

A Workplane object will be created inside the Parts container of the assembly tree and a related workplane item will be placed in the 3D view. It is placed at the assembly's origin and oriented according to the assembly's YZ plane, if the Assembly object was selected directly.

![](/images/Assembly_Add_Workplane-01.png) ![](/images/Assembly_AddZYWorkplane-04.png)

The assembly can also be selected indirectly by some item belonging to the assembly. Then the workplane is placed at the item's origin but it is still oriented according to the assembly's YZ plane.

Valid items are e.g. elements, bodies, vertexes, edges, faces, origins, and other workplanes from either the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view").

## Usage

1. Activate the ![](/images/Assembly_Add_WorkplaneZY.svg) **Add ZY workplane** command using one of the following:
   * The ![](/images/Assembly_Add_WorkplaneZY.svg) [Add ZY workplane](/Assembly3_AddZYWorkplane "Assembly3 AddZYWorkplane") button.
   * The **Assembly3 → Workplane and origin → ![](/images/Assembly_Add_WorkplaneZY.svg) Add ZY workplane** menu option.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_AddZYWorkplane/pl&oldid=1096286>"