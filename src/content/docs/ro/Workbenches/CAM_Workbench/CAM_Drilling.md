---
title: Path Găurire
---

|                                          |
| ---------------------------------------- |
| Path Drilling                            |
| Menu location                            |
| Path → Drilling                          |
| Workbenches                              |
| [Path](/Path_Workbench "Path Workbench") |
| Default shortcut                         |
| P,D                                      |
| Introduced in version                    |
| -                                        |
| See also                                 |
| _None_                                   |
|                                          |

## Descriere

The ![](/images/CAM_Drilling.svg) [Drilling](/CAM_Drilling "CAM Drilling") tool generates a drilling Operation in the Job.

![](/images/Path_Drilling_Sample.png)

Above: CAM Drilling operation sample

## Usage

- Selectați Instrumentul de găurire din Path->menu sau butonul GUI și apăsați.
- Alegeți un instrument de control din fereastra de selecție din meniul contextual și confirmați apăsând OK.
- Găurile disponibile pentru procesare cu acest diametru de sculă vor popula lista în Tab-ul Geometrie de bază. Confirmați că lista se potrivește cu găurile destinate prelucrării și ajustați adăugarea, activarea sau dezactivarea după cum este necesar. Găurile pot fi adăugate prin selectarea fețelor de perete ale găurilor.
- Asigurați adâncimea, adâncimea finală este corectă și reglați dacă este necesar.
- Asigurați-vă că înălțimile, înălțimile de siguranță și înălțimea sunt corecte și ajustați dacă nu.
- În fila Operare, specificați Înălțimea retragerii, Perioada Peck și Perioada de așteptare în secunde. Activați Peck, Dwell, și Utilizați lungimea vârfului sculei, dacă este necesar.

## Notes

- When using edges for Base Geometry, always select the bottom edge of the hole.
- Always verify the tool chosen is the correct diameter for the hole(s) selected.
- **Peck disabled** generates (G81 canned drill cycles). **Peck enabled** generates (G83 canned drill cycles).
- **Dwell enabled** is currently unsupported, but is intended to generate (G82 canned drill cycles).

## Properties

**_Note_** : Not all of these Properties are available in the Task Window Editor. Some are only accessible in the Data tab of the Properties View panel for this Operation.

Base

Note: It is suggested that you do not edit the Placement property of path operations. Rather, move or rotate the CAM Job model as needed.

- Date**Placement**: Overall placement[position and rotation] of the object - with respect to the origin (or origin of parent object container)
  - Date**Angle**: Angle in degrees applied to rotation of the object around Axis property value
  - Date**Axis**: Axis (one or multiple) around which to rotate the object, set in sub-properties: X, Y, Z
    - Date**X**: X axis value
    - Date**Y**: Y axis value
    - Date**Z**: Z axis value
  - Date**Position**: Position of the object, set in sub-properties: X, Y, Z - with respect to the origin (or origin of parent object container)
    - Date**X**: X distance value
    - Date**Y**: Y distance value
    - Date**Z**: Z distance value
- Date**Label**: User-provided name of the object (UTF-8)
- Date**Disabled**: List of disabled features

Depth

- Date**Clearance Height**: The height needed to clear clamps and obstructions
- Date**Final Depth**: Final Depth of Tool- lowest value in Z
- Date**Safe Height**: The height above which Rapid motions are allowed. (Rapid safety height between locations)
- Date**Start Depth**: Starting depth of Tool - _first cut depth in Z_

Drill

- Date**Add Tip Length**: Calculate the tip length and subtract from final depth
- Date**Dwell Enabled**: Enable dwell
- Date**Dwell Time**: The time to dwell between peck cycles
- Date**Peck Depth**: Incremental Drill depth before retracting to clear chips
- Date**Peck Enabled**: Enable pecking
- Date**Retract Height**: The height where feed starts and height during retract tool when path is finished
- Date**Return Level**: Controls how tool retracts Default=G98

Path

- Date**Active**: Make False, to prevent operation from generating code
- Date**Comment**: An optional comment for this Operation
- Date**User Label**: User assigned label
- Date**Tool Controller**: Defines the Tool controller used in the Operation

Rotation (_when available_)

- Date**Attempt Inverse Angle**: Automatically attempt Inverse Angle if initial rotation is incorrect.
- ~~Date**B_Axis Error Override**: Visually orient B(y) rotations to model (error in FreeCAD rendering).~~
- Date**Enable Rotation**: Enable rotation to gain access to holes not normal to Z axis.
- Date**Inverse Angle**: Inverse the angle of the rotation. **\*Example:** change a rotation from -22.5 to 22.5 degrees.\*
- Date**Reverse Direction**: Reverse orientation of Operation by 180 degrees.

## Tasks Window Editor Layout

_Descriptions for the settings are provided in the Properties list above._

This section is simply a layout map of the settings in the window editor for the Operation.

### Base Geometry

- **Add**: Adds selected element(s) which should be the base(s) for the path(s).
- **Delete**: Delete the selected item(s) in the Base Geometry list.
- **Clear**: Clear all items in the Base Geometry list.

### Base Location

- **Add**: Add an (X,Y) coordinate location to the current drilling operation.
- **Remove**: Remove the selected location item(s) from the Base Location list.
- **Edit**: Edit the selected location item.

### Depths

- **Start Depth**:
- **Final Depth**:

### Heights

- **Safe Height**:
- **Clearance Height**:

### Operation

- **Tool Controller**:
- **Retract Height**:
- **Peck**:
- **Peck Depth**:
- **Dwell**:
- **Dwell Time**:
- **Use Tip Length**:

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Example:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Drilling/ro&oldid=1386351>"
