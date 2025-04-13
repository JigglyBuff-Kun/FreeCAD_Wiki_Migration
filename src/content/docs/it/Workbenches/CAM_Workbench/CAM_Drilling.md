---
title: Path Foratura
---
|  |
| --- |
| Foratura |
| Posizione nel menu |
| Path → Foratura |
| Ambiente |
| [Path](/Path_Workbench/it "Path Workbench/it") |
| Avvio veloce |
| P,D |
| Introdotto nella versione |
| - |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

The ![](/images/CAM_Drilling.svg) [Drilling](/CAM_Drilling "CAM Drilling") tool generates a drilling Operation in the Job.

![](/images/Path_Drilling_Sample.png)

Above: CAM Drilling operation sample

## Usage

* Selezionare lo strumento Foratura dal menu Path, o premere il pulsante GUI.
* Scegliere un controller dell'utensile dalla finestra pop-up del dialogo di selezione e confermare premendo OK.
* I fori con il diametro degli utensili disponibili per l'elaborazione compaiono nell'elenco della scheda Geometria di base. Confermare che i fori dell'elenco sono i fori destinati all'elaborazione, oppure aggiungerne, abilitarne o disabilitarne, se necessario. I fori possono essere aggiunti selezionando le facce che ospitano i fori.
* Accertarsi che le profondità e la profondità finale, Depths e Final Depth, siano corrette, altrimenti correggerle.
* Accertarsi che Heights, Safe e Clearance Heights siano corrette, altrimenti correggerle.
* Nella scheda Operazione, specificare il valore di Retract Height, Peck Depth, e il periodo Dwell in secondi. Abilitare Peck, Dwell, e Use Tip Length se è necessario.

## Notes

* When using edges for Base Geometry, always select the bottom edge of the hole.
* Always verify the tool chosen is the correct diameter for the hole(s) selected.
* **Peck disabled** generates (G81 canned drill cycles). **Peck enabled** generates (G83 canned drill cycles).
* **Dwell enabled** is currently unsupported, but is intended to generate (G82 canned drill cycles).

## Properties

***Note*** : Not all of these Properties are available in the Task Window Editor. Some are only accessible in the Data tab of the Properties View panel for this Operation.

Base

Note: It is suggested that you do not edit the Placement property of path operations. Rather, move or rotate the CAM Job model as needed.

* Dati**Placement**: Overall placement[position and rotation] of the object - with respect to the origin (or origin of parent object container)
  + Dati**Angle**: Angle in degrees applied to rotation of the object around Axis property value
  + Dati**Axis**: Axis (one or multiple) around which to rotate the object, set in sub-properties: X, Y, Z
    - Dati**X**: X axis value
    - Dati**Y**: Y axis value
    - Dati**Z**: Z axis value
  + Dati**Position**: Position of the object, set in sub-properties: X, Y, Z - with respect to the origin (or origin of parent object container)
    - Dati**X**: X distance value
    - Dati**Y**: Y distance value
    - Dati**Z**: Z distance value
* Dati**Label**: User-provided name of the object (UTF-8)
* Dati**Disabled**: List of disabled features

Depth

* Dati**Clearance Height**: The height needed to clear clamps and obstructions
* Dati**Final Depth**: Final Depth of Tool- lowest value in Z
* Dati**Safe Height**: The height above which Rapid motions are allowed. (Rapid safety height between locations)
* Dati**Start Depth**: Starting depth of Tool - *first cut depth in Z*

Drill

* Dati**Add Tip Length**: Calculate the tip length and subtract from final depth
* Dati**Dwell Enabled**: Enable dwell
* Dati**Dwell Time**: The time to dwell between peck cycles
* Dati**Peck Depth**: Incremental Drill depth before retracting to clear chips
* Dati**Peck Enabled**: Enable pecking
* Dati**Retract Height**: The height where feed starts and height during retract tool when path is finished
* Dati**Return Level**: Controls how tool retracts Default=G98

Path

* Dati**Active**: Make False, to prevent operation from generating code
* Dati**Comment**: An optional comment for this Operation
* Dati**User Label**: User assigned label
* Dati**Tool Controller**: Defines the Tool controller used in the Operation

Rotation (*when available*)

* Dati**Attempt Inverse Angle**: Automatically attempt Inverse Angle if initial rotation is incorrect.
* ~~Dati**B\_Axis Error Override**: Visually orient B(y) rotations to model (error in FreeCAD rendering).~~
* Dati**Enable Rotation**: Enable rotation to gain access to holes not normal to Z axis.
* Dati**Inverse Angle**: Inverse the angle of the rotation.  ***Example:** change a rotation from -22.5 to 22.5 degrees.*
* Dati**Reverse Direction**: Reverse orientation of Operation by 180 degrees.

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

## Scripting

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Example:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Drilling/it&oldid=1386416>"