---
title: CAM Bohrung
---
|  |
| --- |
| CAM Bohrung |
| Menüeintrag |
| CAM → Drilling |
| Arbeitsbereich |
| [CAM](/CAM_Workbench/de "CAM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

The ![](/images/CAM_Drilling.svg) [Drilling](/CAM_Drilling "CAM Drilling") tool generates a drilling Operation in the Job.

![](/images/Path_Drilling_Sample.png)

Above: CAM Drilling operation sample

## Anwendung

1. There are several ways to invoke the command:
   * Press the ![](/images/CAM_Drilling.svg) [CAM Drilling](/CAM_Drilling "CAM Drilling") button.
   * Select the **CAM → ![](/images/CAM_Drilling.svg) Drilling** option from the menu.
2. In the **Operation** section:
   * Select a **ToolController**.
   * Select a **Coolant Mode**.
   * Optionally enable and adjust the following:
     + **Peck** set the **Depth**.
     + **Dwell** set the **Time** in seconds.
     + **Extended Depth**.
3. In the **Base Geometry** section confirm that the list matches the holes that are intended for processing, and adjust add, enable, or disable, as necessary. Holes can be added by selecting the wall faces of the Holes.
4. In the **Depths** section check, and if required adjust, the **Start Depth** and **Final Depth**.
5. In the **Heights** section check, and if required adjust, the **Safe Height** and the **Clearance Height**.
6. Press the OK button to generate the drilling path(s).

## Hinweise

* When using edges for Base Geometry, always select the bottom edge of the hole.
* Always verify the tool chosen is the correct diameter for the hole(s) selected.
* **Peck disabled** generates (G81 canned drill cycles). **Peck enabled** generates (G83 canned drill cycles).
* **Dwell enabled** is currently unsupported, but is intended to generate (G82 canned drill cycles).

## Eigenschaften

***Note*** : Not all of these Properties are available in the Task Window Editor. Some are only accessible in the Data tab of the Properties View panel for this Operation.

Base

Note: It is suggested that you do not edit the Placement property of path operations. Rather, move or rotate the CAM Job model as needed.

* Daten**Placement**: Overall placement[position and rotation] of the object - with respect to the origin (or origin of parent object container)
  + Daten**Angle**: Angle in degrees applied to rotation of the object around Axis property value
  + Daten**Axis**: Axis (one or multiple) around which to rotate the object, set in sub-properties: X, Y, Z
    - Daten**X**: X axis value
    - Daten**Y**: Y axis value
    - Daten**Z**: Z axis value
  + Daten**Position**: Position of the object, set in sub-properties: X, Y, Z - with respect to the origin (or origin of parent object container)
    - Daten**X**: X distance value
    - Daten**Y**: Y distance value
    - Daten**Z**: Z distance value
* Daten**Label**: User-provided name of the object (UTF-8)
* Daten**Disabled**: List of disabled features

Depth

* Daten**Clearance Height**: The height needed to clear clamps and obstructions
* Daten**Final Depth**: Final Depth of Tool- lowest value in Z
* Daten**Safe Height**: The height above which Rapid motions are allowed. (Rapid safety height between locations)
* Daten**Start Depth**: Starting depth of Tool - *first cut depth in Z*

Drill

* Daten**Add Tip Length**: Calculate the tip length and subtract from final depth
* Daten**Dwell Enabled**: Enable dwell
* Daten**Dwell Time**: The time to dwell between peck cycles
* Daten**Peck Depth**: Incremental Drill depth before retracting to clear chips
* Daten**Peck Enabled**: Enable pecking
* Daten**Retract Height**: The height where feed starts and height during retract tool when path is finished
* Daten**Return Level**: Controls how tool retracts Default=G98

Path

* Daten**Active**: Make False, to prevent operation from generating code
* Daten**Comment**: An optional comment for this Operation
* Daten**User Label**: User assigned label
* Daten**Tool Controller**: Defines the Tool controller used in the Operation

Rotation (*when available*)

* Daten**Attempt Inverse Angle**: Automatically attempt Inverse Angle if initial rotation is incorrect.
* ~~Daten**B\_Axis Error Override**: Visually orient B(y) rotations to model (error in FreeCAD rendering).~~
* Daten**Enable Rotation**: Enable rotation to gain access to holes not normal to Z axis.
* Daten**Inverse Angle**: Inverse the angle of the rotation.  ***Example:** change a rotation from -22.5 to 22.5 degrees.*
* Daten**Reverse Direction**: Reverse orientation of Operation by 180 degrees.

## Tasks Window Editor Layout

*Descriptions for the settings are provided in the Properties list above.*

This section is simply a layout map of the settings in the window editor for the Operation.

### Base Geometry

* **Add**: Adds selected element(s) which should be the base(s) for the path(s).
* **Delete**: Delete the selected item(s) in the Base Geometry list.
* **Clear**: Clear all items in the Base Geometry list.

### Base Location

* **Add**: Add an (X,Y) coordinate location to the current drilling operation.
* **Remove**: Remove the selected location item(s) from the Base Location list.
* **Edit**: Edit the selected location item.

### Depths

* **Start Depth**:
* **Final Depth**:

### Heights

* **Safe Height**:
* **Clearance Height**:

### Operation

* **Tool Controller**:
* **Retract Height**:
* **Peck**:
* **Peck Depth**:
* **Dwell**:
* **Dwell Time**:
* **Use Tip Length**:

## Skripten

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Beispiel:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Drilling/de&oldid=1393276>"