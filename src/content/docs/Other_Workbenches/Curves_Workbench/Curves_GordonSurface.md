---
title: Curves GordonSurface
---

|                                                |
| ---------------------------------------------- |
| Curves GordonSurface                           |
| Menu location                                  |
| Surfaces → Gordon surface                      |
| Workbenches                                    |
| [Curves](/Curves_Workbench "Curves Workbench") |
| Default shortcut                               |
| _None_                                         |
| Introduced in version                          |
| -                                              |
| See also                                       |
| _None_                                         |
|                                                |

## Description

The ![](/src/assets/images/Curves_GordonSurface.svg) [Curves GordonSurface](/Curves_GordonSurface "Curves GordonSurface") creates a surface that skins a network of curves. This tool is part of the [external workbench](/External_workbenches "External workbenches") called [Curves](/Curves_Workbench "Curves Workbench").

![](/src/assets/images/GordonSurf-1.png)

## Usage

1. A Gordon surface requires a network of lines or curves that create a support network for the surface.
   - The surface will be "tented" between and over these lines.
2. In the example above the blue lines (or ribs) represent the shape of the surface at different points along surface.
   - These can be thought of as cross sections along the surface. Or, like supports that the surface will "tent" over.
3. The yellow lines represent the extent and shape of the surface between the cross sections ("ribs") defined by the blue lines.
4. These lines (blue & yellow) can be created in sketches.
   - The sketches containing the blue ribs would typically have a placement offset.
     - Each "rib" is in a separate sketch.
   - The sketches containing the extent/shape (yellow) lines will typically reference external geometry from the "rib" sketches for accurate positioning.
5. These need to be created before the next step.
6. Switch to the ![](/src/assets/images/Curves_workbench_icon.svg) [Curves](/Curves_Workbench "Curves Workbench") workbench (install from ![](/src/assets/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr") is necessary, if not previously installed)
7. Now select all the lines of that will define the surface.
8. The order of selection defines the stitching or tenting order.
9. Use multi-select to select all lines defining the surface. (Left click while holding the Ctrl key.)
10. Select the ribs first, in order. (In the example above, select the blue lines from left to right. or right to left.)
11. Continue to hold the Ctrl key and select the extent lines. (Yellow lines in the example above.)
12. To invoke the command, do one of the following:
    - Press the ![](/src/assets/images/Curves_GordonSurface.svg) button
    - Use the **Surfaces → Gordon surface**

## Properties

- Data**Placement**: Can be used to adjust the placement of the resulting Gordon surface. See: [Placement](/Placement "Placement")
  - Note: The Placement properties do not adjust the placement of the curves/lines used to create the surface, only the surface.
- Data**Label**: User specified label (name) for the surface. (Default: Gordon)
- Data**Output**: Defines the output type. (Default: Surface, Options: Surface, Wireframe)
- Data**Gordon>Max Ctrl Pts**: (Default: 80)
- Data**Gordon>Sources**: User selected lines that are used to create the Gordon surface.
- Data**Gordon>Tol3D**: 3D tolerance (Default: 0.01)
- Data**Wireframe>Samples U**: Number of samples in the U direction. (Default: 16)
  - This value is used to determine density of the mesh when the Output property is set to Wireframe.
- Data**Wireframe>Samples V**: Number of samples in the V direction. (Default: 16)
  - This value is used to determine density of the mesh when the Output property is set to Wireframe.
  - Gordon surface in wire frame mode, U=16, V=16

![](/src/assets/images/GordonSurf-wireframe.png)

## Notes

- The curves of each group (ribs and rails) should touch all curves of the other group.
  - In other words, they must form a grid or net pattern as shown here:

![](/src/assets/images/Grid.png)

- In general, the surface normal of the resulting Gordon surface will be determined by the direction of the ribs.

In this example, the surface on the left, the rails were drawn from +Y to -Y and the resulting surface normal is +Z

On the right, the ribs are drawn from -Y to +Y, resulting in the surface normal oriented -Z.

![](/src/assets/images/Normals_shown.png)

- [Part Extrude](/Part_Extrude "Part Extrude") can be used to create a solid from the surface.

- [PartDesign Pad](/PartDesign_Pad "PartDesign Pad") can also create a solid from the surface. Dragging the surface into a Body creates a [Base Feature](/PartDesign_Body#Base_Feature "PartDesign Body") that can then be padded.

## Limitations

TODO

## Scripting

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_GordonSurface/en&oldid=886722>"
