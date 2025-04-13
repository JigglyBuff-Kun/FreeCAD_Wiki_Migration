---
title: Part Cut
---
|  |
| --- |
| Part Cut |
| Menyplacering |
| Part → Cut |
| Arbetsbänkar |
| [Del](/Part_Workbench/sv "Part Workbench/sv") |
| Standard genväg |
| *Ingen* |
| Introducerad i version |
| - |
| Se även |
| [Union](/Part_Union/sv "Part Union/sv"), [Common](/Part_Common/sv "Part Common/sv") |
|  |

Klipper (subtraherar) valda Del objekt, där den sista subtraheras från den första. Denna operation är helt parametrisk, så de ingående komponenterna kan förändras och resultatet beräknas om.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Cut/sv&oldid=1496754>"