---
title: CAM Slot
---

:::caution
This is an unfinished experimental feature.Enable Experimental Features
:::

|                                       |
| ------------------------------------- |
| CAM Slot                              |
| Menu location                         |
| CAM → Slot                            |
| Workbenches                           |
| [CAM](/CAM_Workbench "CAM Workbench") |
| Default shortcut                      |
| _None_                                |
| Introduced in version                 |
| 0.19                                  |
| See also                              |
| _None_                                |
|                                       |

## Description

The ![](/images/CAM_Slot.svg) [Slot](/CAM_Slot "CAM Slot") tool creates a simple slotting operation using various methods of input.

Inputs include:

- selecting one or more faces or edges.
- selecting two vertices.
- entering two custom points.

The CAM Slot object is made to be part of a ![](/images/CAM_Job.svg) [CAM Job](/CAM_Job "CAM Job").

## Usage

1. Select the reference geometry on the model:
   - one or more faces or edges.
   - two vertices.
   - **_nothing_** to use two custom points entered in the Property View of the Data tab: Custom Point1 and Custom Point2.
2. Invoke the Slot command using several methods:
   - Pressing the ![](/images/CAM_Slot.svg) [Slot](/CAM_Slot "CAM Slot") button in the toolbar.
   - Using the CAM → ![](/images/CAM_Slot.svg) [Slot](/CAM_Slot "CAM Slot") entry from the top menu.
3. Adjust the desired properties. Descriptions of available properties are found below.

#### Usage Notes

- All slots:

  - Both the beginning and end of a slot path can be extended or shortened. Use the `Extend Path Start` and `Extend Path End` properties.
  - Use the `Layer Mode` property to cut the slot in `Single-pass` mode at final depth, or in `Multi-pass` mode using the available `Step Down` property.
  - Toggle the `Reverse Direction` property to reverse the direction of the cut path.

- Linear slots:

  - Currently there is no capability to offset linear slots laterally (parallel to path of travel). **_Example:_** Say you have a tool diameter smaller than the width of the slot area you are clearing. Current behavior of this operation is to create a set of paths on a plane down the center-line of the designated slot, which will result in the slot volume not being fully cleared. Some users would want the operation to create multiple paths that are offset laterally to clear the entire slot area; this not directly possible, though can be achieved through using "Custom Points", see "Vertical face milling" below. Alternatively use the Pocket operation for such clearing.
  - Create a custom linear slot using the `Custom Point1` and `Custom Point2` properties with no geometry selection. **_Example:_** Initiate a Slot operation in the GUI and click `OK` to save. Now locate and edit the `Custom Point1` and `Custom Point2` properties in the Data tab of the newly created Slot operation. Recompute the operation to update the path.

- Vertical face milling:

  - Most of the CAM tools cannot make a path on a single vertical plane since the projection onto horizontal plane has zero area (an internal limitation). The Slot operation makes this possible by selecting "Custom points" which define a line parallel to the vertical plane and suitable Depth parameters.

- Arc/Circular slots:
  - Creating arc/circular slots
    1. You will need to select one bottom arc of the slot. This will produce a path directly on the arc edge you selected.
    2. You will then need to edit the `Extend Radius` property in the Data tab of the operation. Using the expression editor, set it to either `OpToolDiameter / 2.0` or the negative version `OpToolDiameter / -2.0` as needed, depending on whether you selected the inside or outside arc of the slot.
    3. Recompute the operation.
    4. Keep in mind that if the toolbit diameter is not equal to the slot width, the path will **_not_** be in the correct location. In this case, adjust the value in the `Extend Radius` property mentioned above.
  - Currently users are unable to create a custom arc/circular path. A third `Custom Center` property will need to be added, along with additional modifications to the code base.

## Properties

**_Note_** : Not all of these Properties are available in the Task Window Editor. Some are only accessible in the Data tab of the Properties View panel for this Operation.

Base

Note: It is suggested that you do not edit the Placement property of path operations. Rather, move or rotate the CAM Job model as needed.

- Data**Placement**: Overall placement[position and rotation] of the object - with respect to the origin (or origin of parent object container)
  - Data**Angle**: Angle in degrees applied to rotation of the object around Axis property value
  - Data**Axis**: Axis (one or multiple) around which to rotate the object, set in sub-properties: X, Y, Z
    - Data**X**: X axis value
    - Data**Y**: Y axis value
    - Data**Z**: Z axis value
  - Data**Position**: Position of the object, set in sub-properties: X, Y, Z - with respect to the origin (or origin of parent object container)
    - Data**X**: X distance value
    - Data**Y**: Y distance value
    - Data**Z**: Z distance value
- Data**Label**: User-provided name of the object (UTF-8)

Depth

- Data**Clearance Height**: The height needed to clear clamps and obstructions
- Data**Final Depth**: Final Depth of Tool- lowest value in Z
- Data**Finish Depth**: Maximum material removed on final pass. The height (thickness) of the last cutting level - _set for a better finish_.
- Data**Safe Height**: The height above which Rapid motions are allowed. (Rapid safety height between locations)
- Data**Start Depth**: Starting depth of Tool - _first cut depth in Z_
- Data**Step Down**: Incremental step down of Tool during operation

![](/images/Path-DepthsAndHeights.gif)

Visual reference for Depth properties (settings)

Path

- Data**Active**: Make False, to prevent operation from generating code
- Data**Base**: The base geometry for this operation
- Data**Comment**: An optional comment for this Operation
- Data**Coolant Mode**: The coolant mode for this operation.
- Data**Cycle Time**: The cycle time estimation for this operation.
- Data**Tool Controller**: Defines the Tool controller used in the Operation
- Data**User Label**: User assigned label

Slot

- Data**Custom Point1**: Enter custom start point for slot path.
- Data**Custom Point2**: Enter custom end point for slot path.
- Data**Cut Pattern**: Set the geometric clearing pattern to use for the operation.
- Data**Extend Path End**: Positive extends the end of the path, negative shortens.
- Data**Extend Path Start**: Positive extends the beginning of the path, negative shortens.
- Data**Extend Radius**: For arcs/circlular edges, offset the radius for the path.
- Data**Layer Mode**: Complete the operation in a single pass at depth, or mulitiple passes to final depth.
- Data**Path Orientation**: Choose the path orientation with regard to the feature(s) selected.
- Data**Reference1**: Choose what point to use on the first selected feature.
- Data**Reference2**: Choose what point to use on the second selected feature.
- Data**Reverse Direction**: Enable to reverse the cut direction of the slot path.

Start Point

- Data**Start Point**: The custom start point for the path of this operation.
  - Data**X**: X distance value
  - Data**Y**: Y distance value
  - Data**Z**: Z distance value
- Data**Use Start Point**: Make True, if manually specifying a Start Point. Set the start point in the property data Start Point field.

## Tasks Window Editor Layout

_Descriptions for the settings are provided in the Properties list above._

This section is simply a layout map of the settings in the window editor for the Operation.

### Base Geometry

- **Add**: Adds selected element(s) which should be the base(s) for the path(s)
- **Delete**: Delete the selected item(s) in the Base Geometry list
- **Clear**: Clear all items in the Base Geometry list

### Depths

- Data**Start Depth**
- Data**Final Depth**
- Data**Step Down**

### Heights

- Data**Safe Height**
- Data**Clearance Height**

### Operation

- Data**Tool Controller**: The tool and its settings to be used for this operation.
- Data**Coolant Mode**: Coolant mode for this operation.
- Data**Start Reference \*\***: Choose what point to use on the first selected feature.
- Data**End Reference \*\***: Choose what point to use on the second selected feature.
- Data**Extend Path End**: Positive extends the end of the path, negative shortens.
- Data**Extend Path Start**: Positive extends the beginning of the path, negative shortens.
- Data**Layer Mode**: Complete the operation in a single pass at depth, or mulitiple passes to final depth.
- Data**Path Orientation \*\***: Choose the path orientation with regard to the feature(s) selected.
- Data**Reverse Direction**: Enable to reverse the cut direction of the slot path.

**\*\*** Visibility changes depending on Base Geometry selected.

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Example:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Slot/en&oldid=1386692>"
