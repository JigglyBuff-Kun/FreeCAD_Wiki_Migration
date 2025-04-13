---
title: Part Cut
---
|  |
| --- |
| Part Cut |
| Ubicación en el Menú |
| Part → Cut |
| Entornos de trabajo |
| [Part](/Part_Workbench/es "Part Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [Part Union](/Part_Union/es "Part Union/es"), [Part Common](/Part_Common/es "Part Common/es") |
|  |

Corta (resta) los objetos Pieza seleccionados, el último será sustraído del primero. Esta operación es completamente paramétrica y los componentes pueden ser modificados y el resultado recalculado.

The ![](/images/Part_Cut.svg) **Part Cut** tool cuts (subtracts) selected Part objects, the last one being subtracted from the first one. This operation is fully parametric and the components can be modified and the result recomputed.

This tool is an automated form of the ![](/images/Part_Boolean.svg) [Boolean operation](/Part_Boolean "Part Boolean").

![](/images/Part_Cut_01.png)

## Usage

1. Select two shapes.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Part_Cut.svg) [Cut](/Part_Cut "Part Cut") button.
   * Select the **Part → Boolean → ![](/images/Part_Cut.svg) Cut** option from the menu.

## Supported inputs

Input objects must be [OpenCASCADE](/OpenCASCADE "OpenCASCADE") shapes. For example objects made with the Part, PartDesign or Sketcher workbenches. For meshes there are dedicated Boolean tools in [Mesh Workbench](/Mesh_Workbench "Mesh Workbench").

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Cut/es&oldid=1496752>"