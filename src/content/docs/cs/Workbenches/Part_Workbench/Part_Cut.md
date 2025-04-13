---
title: Díl Oddělit
---
|  |
| --- |
| Díl Oddělit |
| Umístění Menu |
| Díl → Oddělit |
| Pracovní stoly |
| [Díl](/Part_Workbench/cs "Part Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Díl Sjednotit](/Part_Union/cs "Part Union/cs"), [Díl Společné](/Part_Common/cs "Part Common/cs") |
|  |

Usekává (odděluje) vybrané objekty Díl tak, že později vybraný díl vyjme z dříve vybraného dílu. Tato operace je plně parametrická a komponenty mohou být upravovány a výsledek přepočítáván.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Cut/cs&oldid=1496751>"