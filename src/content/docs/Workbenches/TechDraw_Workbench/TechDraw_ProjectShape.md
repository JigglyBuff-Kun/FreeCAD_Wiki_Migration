---
title: TechDraw ProjectShape
---

|                                                             |
| ----------------------------------------------------------- |
| TechDraw ProjectShape                                       |
| Menu location                                               |
| TechDraw → TechDraw Views → Project shape...                |
| Workbenches                                                 |
| [TechDraw](/TechDraw_Workbench "TechDraw Workbench")        |
| Default shortcut                                            |
| _None_                                                      |
| Introduced in version                                       |
| 0.20                                                        |
| See also                                                    |
| [Draft Shape2DView](/Draft_Shape2DView "Draft Shape2DView") |
|                                                             |

## Description

The **TechDraw ProjectShape** tool creates projections of shapes. The projections are created in the [3D view](/3D_view "3D view"), and not on a [TechDraw Page](/TechDraw_PageDefault "TechDraw PageDefault").

![](/src/assets/images/ProjectShape1_it.png)

## Usage

1. Optionally rotate the [3D view](/3D_view "3D view"). The objects will be projected onto a plane parallel to the screen i.e. along the 3D view's camera direction, which is used as the default Data**Direction** property.
2. Select one or more objects. For each object a separate projection will be created.
3. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/TechDraw_ProjectShape.svg) [Project shape...](/TechDraw_ProjectShape "TechDraw ProjectShape") button.
   - Select the **TechDraw → TechDraw Views → ![](/src/assets/images/TechDraw_ProjectShape.svg) Project shape...** option from the menu.
4. The **Project shapes** task panel opens. See [Properties](#Properties).
5. Set the desired options.
6. The selected options should not result in an empty projection as this will cause an error. For example, for an object with only sharp edges such as a [Part Box](/Part_Box "Part Box"), the **Visible sharp edges** and/or **Hidden sharp edges** option must be checked.
7. Press the OK button.
8. The projection is placed on the XY plane.
9. Optionally change the Data**Placement** property and/or Data**Direction** property of the projection.

## Properties

A Projection object is derived from a [Part Feature](/Part_Feature "Part Feature") and inherits all its properties. It also has the following additional properties:

### Data

Projection

- Data**Source** (`Link`): The shape to project.
- Data**Direction** (`Vector`): The direction of the projection. This is the normal vector of the projection plane.
- Data**VCompound** (`Bool`): If `true`, visible sharp edges are shown. Example: all edges of a [Part Box](/Part_Box "Part Box").
- Data**Rg1 Line VCompound** (`Bool`): If `true`, visible smooth edges are shown. Example: the edges between a fillet and its adjoining faces.
- Data**Rg NLine VCompound** (`Bool`): If `true`, visible sewn edges are shown. Example: the seam of a 360° cylindrical face.
- Data**Out Line VCompound** (`Bool`): If `true`, visible outline edges (that are not sharp) are shown. Example: the side view of a [Part Cylinder](/Part_Cylinder "Part Cylinder") has two such edges.
- Data**Iso Line VCompound** (`Bool`): If `true`, visible isoparameters are shown. Does not work currently.
- Data**HCompound** (`Bool`): If `true`, hidden sharp edges are shown.
- Data**Rg1 Line HCompound** (`Bool`): If `true`, hidden smooth edges are shown
- Data**Rg NLine HCompound** (`Bool`): If `true`, hidden sewn edges are shown.
- Data**Out Line HCompound** (`Bool`): If `true`, hidden outline edges are shown.
- Data**Iso Line HCompound** (`Bool`): If `true`, hidden isoparameters are shown. Does not work currently.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ProjectShape/en&oldid=1490183>"
