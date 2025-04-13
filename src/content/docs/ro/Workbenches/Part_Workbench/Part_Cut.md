---
title: Part Cut
---
|  |
| --- |
| Part Cut |
| Menu location |
| Part → Cut |
| Workbenches |
| [Part](/Part_Workbench "Part Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Part Union](/Part_Union "Part Union"), [Part Common](/Part_Common "Part Common") |
|  |

### Descriere

Se taie (scade) obiecte parțiale selectate, ultima fiind scăzută din prima. Această operație este complet parametrică, iar componentele pot fi modificate, iar rezultatul este recalculat.

The ![](/images/Part_Cut.svg) **Part Cut** tool cuts (subtracts) selected Part objects, the last one being subtracted from the first one. This operation is fully parametric and the components can be modified and the result recomputed.

This tool is an automated form of the ![](/images/Part_Boolean.svg) [Boolean operation](/Part_Boolean "Part Boolean").

![](/images/Part_Cut_01.png)

![Part Cut](/images/Part_Cut_01.png)

Part Cut

### Cum se utilizează

1. Select two shapes
2. Press the ![](/images/Part_Cut.png) **Part Cut** button.

1. Select two shapes.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Part_Cut.svg) [Cut](/Part_Cut "Part Cut") button.
   * Select the **Part → Boolean → ![](/images/Part_Cut.svg) Cut** option from the menu.

### Intrări suportate

Input objects must be OpenCascade shapes. Examples: stuff made with Part, PartDesign, Sketcher workbenches. Not meshes (unless those were converted to shapes) - for meshes, there are specific Boolean tools in MeshDesign workbench.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Cut/ro&oldid=1496750>"