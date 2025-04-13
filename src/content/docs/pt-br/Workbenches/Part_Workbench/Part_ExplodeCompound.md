---
title: Explodir composição
---
|  |
| --- |
| Part ExplodeCompound |
| Menu location |
| Part → Compound → Explode compound |
| Workbenches |
| [Part](/Part_Workbench "Part Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.18 |
| See also |
| [Part Compound](/Part_Compound "Part Compound"), [Draft Downgrade](/Draft_Downgrade "Draft Downgrade") |
|  |

## Description

The ![](/images/Part_ExplodeCompound.svg) **Part ExplodeCompound** tool splits a compound of shapes, to make each contained shape (child) available as a separate object. The children are automatically put into a [Group](/Std_Group "Std Group") if there is more than one child.

It is semi-parametric: the shapes of the children will update as the source compound changes, but if the number of children in the compound is changed, the explosion will be either missing some shapes, or have redundant objects in an error state.

Placements of extracted shapes follow the placements of the originals, plus the Placement property of each child.

The tool will also explode non-compound shapes into their lower-level constituents: compsolids into solids, solids into shells, shells into faces, faces into wires, wires into edges, edges into vertices.

## Usage

1. Select a single compound.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Part_ExplodeCompound.svg) [Explode compound](/Part_ExplodeCompound "Part ExplodeCompound") button.
   * Select the **Part → Compound → ![](/images/Part_ExplodeCompound.svg) Explode compound** option from the menu.

## Use cases

* Tweaking positions of shapes made by ![](/images/Draft_OrthoArray.svg) [Draft OrthoArray](/Draft_OrthoArray "Draft OrthoArray")
* Obtaining split pieces from result of ![](/images/Part_Slice.svg) [Part Slice](/Part_Slice "Part Slice") and ![](/images/Part_Cut.svg) [Part Cut](/Part_Cut "Part Cut")
* Obtaining individual contours from multi-contour sketches and faces
* Obtaining a pure solid from a solid-in-compound, for use in ![](/images/Workbench_FEM.svg) [FEM Workbench](/FEM_Workbench "FEM Workbench").

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ExplodeCompound/pt-br&oldid=1496838>"