---
title: Part Union
---
|  |
| --- |
| Part Union |
| Umístění Menu |
| Part → Boolean → Union |
| Pracovní stoly |
| [Part](/Part_Workbench/cs "Part Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Part Cut](/Part_Cut/cs "Part Cut/cs"), [Part Common](/Part_Common/cs "Part Common/cs") |
|  |

## Popis

Sjednocuje vybrané objekty Díl do jednoho. Tato operace je plně parametrická a komponenty mohou být upravovány a výsledek přepočítáván.

**Note:** This command is an automated form of the ![](/images/Part_Boolean.svg) [Boolean operation](/Part_Boolean "Part Boolean").

## Usage

1. Select two or more shapes
2. There are several ways to invoke the command:
   * Press the ![](/images/Part_Fuse.svg) Part Fuse button in the **Part tools** toolbar
   * Use the **Part → Boolean → Union** entry in the Part menu

## Supported inputs

Input objects must be [OpenCASCADE](/OpenCASCADE "OpenCASCADE") shapes. Examples: stuff made with Part, PartDesign, Sketcher workbenches. Not meshes (unless those were converted to shapes) - for meshes, there are specific Boolean tools in MeshDesign workbench.

* Solid + Solid: the result is a solid that occupies all the volume covered by the inputs

* Shell + Shell, Shell + Face, Face + Face: the result is a shell. Where faces intersect, they are split. Shells can be non-manifold. After fusion, faces can be united by [Refining](/Part_RefineShape "Part RefineShape") the result.

* Wire + Wire, Edge + Wire, Edge + Edge: the result is a wire. Edges are split where they intersect.

Compounds are supported; however, it is assumed that shapes packed into a compound do not touch or intersect. If they actually do, Fusion will likely fail, or produce an incorrect result.

## Options

Items can be added and removed from a fusion, by dragging them in or out of the fusion feature in the tree view with the mouse. To drag items out of a fusion you have to drop them onto the document node (the filename) of your model. A manual recompute (press F5 key or click on the ![](/images/Std_Refresh.svg) [Refresh/Recompute](/Std_Refresh "Std Refresh") icon) is required to see the results.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Fuse/cs&oldid=1466677>"