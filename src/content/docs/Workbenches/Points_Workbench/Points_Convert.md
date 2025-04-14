---
title: Points Convert
---

|                                                |
| ---------------------------------------------- |
| Points Convert                                 |
| Menu location                                  |
| Points → Convert to points...                  |
| Workbenches                                    |
| [Points](/Points_Workbench "Points Workbench") |
| Default shortcut                               |
| _None_                                         |
| Introduced in version                          |
| -                                              |
| See also                                       |
| _None_                                         |
|                                                |

## Description

The **Points Convert** command creates point clouds from shape objects or mesh objects.

Here a shape object refers any object with a Data**Shape** property. Objects created with the [Part](/Part_Workbench "Part Workbench") and [PartDesign](/PartDesign_Workbench "PartDesign Workbench") workbench are shape objects. But so are objects created with the [Sketcher](/Sketcher_Workbench "Sketcher Workbench") and [Draft](/Draft_Workbench "Draft Workbench") workbench.

## Usage

1. Select one or more objects.
2. There are several ways to invoke the command:
   - Press the ![](/images/Points_Convert.svg) [Convert to points...](/Points_Convert "Points Convert") button.
   - Select the **Points → ![](/images/Points_Convert.svg) Convert to points...** option from the menu.
3. The **Distance** dialog box opens.
4. Enter the **maximum distance**. The value must be in the `0.01` - `10.00` range.
5. Press the OK button to close the dialog box and finish the command.

## Properties

Point cloud objects are [App GeoFeature](/App_GeoFeature "App GeoFeature") objects with the following additional properties. Select the **Show hidden** option from the [Property editor](/Property_editor "Property editor") context menu to display the hidden properties.

### Data

Base

- Data (Hidden)**Points** (`PointsKernel`): a Points Kernel associated with this object.
- Data (Hidden)**Normal** (`NormalList`): a list of normals. This property is only available for point clouds created with the [Points Convert](/Points_Convert "Points Convert") command from mesh objects or shape objects with faces.

Structured points

- Data**Height** (`Integer`): the number of unique Y coordinates in the point cloud. This property is only available for point clouds created with the [Points Structure](/Points_Structure "Points Structure") command.
- Data**Width** (`Integer`): the number of unique X coordinates in the point cloud. This property is only available for point clouds created with the [Points Structure](/Points_Structure "Points Structure") command.

### View

Base

- View**Point Size** (`FloatConstraint`): the size in pixels of the points in the [3D view](/3D_view "3D view").

Retrieved from "<http://wiki.freecad.org/index.php?title=Points_Convert/en&oldid=1560784>"
