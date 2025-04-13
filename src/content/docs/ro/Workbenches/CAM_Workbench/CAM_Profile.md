---
title: Path Profile
---

|                                       |
| ------------------------------------- |
| CAM Profile                           |
| Menu location                         |
| CAM → Profile                         |
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

The ![](/images/CAM_Profile.svg) [Profile](/CAM_Profile "CAM Profile") tool creates a contour operation based on selected features of the model. The tool was introduced in version 0.19. It offers three operations that were handled by separate tools in previous versions.

All operations create objects that are made to be part of a ![](/images/CAM_Job.svg) [CAM Job](/CAM_Job "CAM Job").

These are the available operations:

### Contour operation

A Contour operation is the default. It creates a simple external contour cut of complex 3D ![](/images/Workbench_Part.svg) [Part](/Part_Workbench "Part Workbench")-based objects. The entire Job Model serves as the input for the Operation, regardless of whether any Body Geometry is selected when the Contour command is invoked.

### Profile Face operation

A Profile Face operation creates a simple contour path from one or more selected faces of an object.

### Profile Edges operation

A Profile Edges operation creates a simple contour path from selected edges.

![](/images/Path_profile_example.jpg)

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/images/CAM_Profile.svg) [CAM Profile](/CAM_Profile "CAM Profile") button.
   - Select the **CAM → ![](/images/CAM_Profile.svg) Profile** option from the menu.
2. Activate the Base Geometry section by clicking its tab, and select features from the Job model.
   - If no features are selected, the command defaults to a **Contour** operation, contouring the entire model.
   - If faces are selected, then the result is a **Profile Face** operation.
   - If edges are selected, then the result is a **Profile Edges** operation.  
     **NOTE**: This operation has received improvements to allow functionality on some open-edge (non-loop) selections. See the [Usage Notes](#Usage_Notes) section below for additional information on best practice for profiling open-edges.
3. Activate the Operation section by clicking on its tab, and adjust the operation's settings as desired.
4. Optionally press the Apply button to preview the operation with the current settings.
5. Click the OK button or the Cancel button to create or cancel the operation.

**Important Note: CAM Profile doesn't take care of other details of the object. You have to adjust the properties, especially the final depth, carefully, a mistake might destroy your work piece**

A Start point can be enabled from the Operation tab in the Tasks Window editor, using a location defined in the **Property View → Data → Start Point**.

Make additional adjustments to the operation by modifying the operation's properties in the Data tab of the Property View. Advanced properties will be located here, if any.

## Usage Notes

- The ![](/images/CAM_Profile.svg) [Profile](/CAM_Profile "CAM Profile") operation is capable of profiling **open-edges** (one or more continuous edges that do not form a loop as seen from the _Top View_)
  - It is best to select the top edges (highest edges) for the selection. After doing so, you will need to manually set the Final Depth for the operation. Selection of bottom edges only is unpredictable and will likely return undesirable paths in many situations; however, it will return correct paths in some situations.
  - Selected edges must form a continual edge _as viewed from the Top View_. Selected top edges may have differing heights, so long as they connect at a common (X, Y) coordinate - differing Z-heights are acceptable in \*some**\*\*\*** cases.  
    **\*\***In certain cases, the user will need to include in their selection the straight vertical connecting edge between two adjacent edges of different heights that share a common (X, Y) coordinate.
  - Because top edges are selected, the Final Depth for the operation will need to be set manually.
  - When profiling open-edges, the `Side` or `Cut Side` property is disabled internally even though it will likely be visible within the Task editor window and the Properties list within the Data tab.
- When profiling the entire model (a complete contour of the model) the `Side` or `Cut Side` property is set to `Outside` by default. User can adjust it depending on the configuration of the part.

## Proprietăți

**_Note_** : Not all of these Properties are available in the Task Window Editor. Some are only accessible in the Data tab of the Properties View panel for this Operation.

Base

Note: It is suggested that you do not edit the Placement property of path operations. Rather, move or rotate the CAM Job model as needed.

- Date**Placement**: Overall placement[position and rotation] of the object - with respect to the origin (or origin of parent object container)
  - Date**Angle**: Angle in degrees applied to rotation of the object around Axis property value
  - Date**Axis**: Axis(one or multiple) around which to rotate the object, set in sub-properties: x, y, z
    - Date**X**: x axis value
    - Date**Y**: y axis value
    - Date**Z**: z axis value
  - Date**Position**: Position of the object, set in sub-properties: x, y, z - with respect to the origin (or origin of parent object container)
    - Date**X**: x distance value
    - Date**Y**: y distance value
    - Date**Z**: z distance value
- Date**Label**: User-provided name of the object (UTF-8)

Depth

- Date**Clearance Height**: The height needed to clear clamps and obstructions
- Date**Final Depth**: Final Depth of Tool- lowest value in Z. User must define it.
- Date**Finish Depth**: Maximum material removed on final pass. The height (thickness) of the last cutting level - _set for a better finish_.
- Date**Safe Height**: The height above which Rapid motions are allowed. (Rapid safety height between locations)
- Date**Start Depth**: Starting depth of Tool - _first cut depth in Z_. User must define it.
- Date**Step Down**: Incremental step down of Tool during operation

![](/images/Path-DepthsAndHeights.gif)

Visual reference for Depth properties (settings)

Path

- Date**Active**: make False, to prevent operation from generating code
- Date**Base**: The base geometry for this operation
- Date**Comment**: An optional comment for this Operation
- Date**Coolant Mode**: The coolant mode for this operation.
- Date**Cycle Time**: The cycle time estimation for this operation.
- Date**Tool Controller**: Defines the Tool controller used in the Operation
- Date**User Label**: User assigned label

### Profile Properties

- Date**Direction**: The direction that the tool path should go around the part: Clockwise[CW] or Counterclockwise[CCW]
- Date**Expand Profile**: Extend the profile clearing beyond the Extra Offset.
- Date**Expand Profile Step Over**: Set the stepover percentage, based on the tool's diameter.
- Date**Handle Multiple Features**: Choose how to process multiple Base Geometry features.
- Date**OffsetExtra**: Extra value to stay away from final profile- good for roughing toolpath
- Date**Process Circles**: Check if you want this Profile Operation to also be applied to cylindrical holes, _which normally get drilled_.
- Date**Process Holes**: Check if this Profile Operation should also process holes in the base geometry. **Note** that this does not include cylindrical holes.
- Date**Process Perimeter**: Check if this Profile Operation should also process the outside perimeter of the base geometry shapes
- Date**Side**: (Cut Side) Side of edge that tool should cut. This only matters if `Use Compensation` is True(checked).
- Date**Use Compensation**: If checked, the Profile Operation is offset by the tool radius. The offset direction is determined by the Cut Side.

Rotation

- Date**Attempt Inverse Angle**: Automatically attempt Inverse Angle if initial rotation is incorrect.
- Date**Enable Rotation**: Enable rotation to gain access to pockets or areas not normal to Z axis.
- Date**Inverse Angle**: Inverse the angle of the rotation. **\*Example:** change a rotation from -22.5 to 22.5 degrees.\*
- Date**Limit Depth To Face**: Enforce the Z-depth of the selected face as the lowest value for final depth. Higher user values for final depth will be observed.
- Date**Reverse Direction**: Reverse orientation of Operation by 180 degrees.

Start Point

- Date**Start Point**: The custom start point for the path of this operation.
  - Date**X**: x distance value
  - Date**Y**: y distance value
  - Date**Z**: z distance value
- Date**Use Start Point**: Make True, if manually specifying a Start Point. Set the start point in the property data Start Point field.

## Tasks Window Editor Layout

_Descriptions for the settings are provided in the Properties list above._
This section is simply a layout map of the settings in the window editor for the Operation.

### Base Geometry

- **Add**: Adds selected element(s) which should be the base(s) for the path(s)
- **Delete**: Delete the selected item(s) in the Base Geometry list
- **Clear**: Clear all items in the Base Geometry list

### Depths

- Date**Start Depth**
- Date**Final Depth**
- Date**Step Down**

### Heights

- Date**Safe Height**
- Date**Clearance Height**

### Operation

- Date**Tool Controller**
- Date**Coolant Mode**
- Date**Cut Side \*\***
- Date**Direction**
- Date**Extra Offset**
- Date**Enable Rotation**
- Date**Use Start Point**
- Date**Use Compensation**
- Date**Process Holes \*\***
- Date**Process Circles \*\***
- Date**Process Perimeter \*\***

**\*\*** Availability changes based on selections in Base Geometry section.

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Example:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Profile/ro&oldid=1477808>"
