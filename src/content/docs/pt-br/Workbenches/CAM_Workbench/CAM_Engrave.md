---
title: Gravação
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| CAM Engrave |
| Menu location |
| CAM → Engrave |
| Workbenches |
| [CAM](/CAM_Workbench "CAM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Description

The ![](/images/CAM_Engrave.svg) [Engrave](/CAM_Engrave "CAM Engrave") tool is primarily for engraving a ![](/images/Draft_ShapeString.svg) [Draft ShapeString](/Draft_ShapeString "Draft ShapeString") onto a part. However, it may be useful for other kinds of 2D.

## Usage

Empty

## Options

Empty

## Properties

### Data

Base

* Dados**Placement**:
* Dados**Label**: User name of the object (UTF-8)

Depth

* Dados**Clearance Height**: The height needed to clear clamps and obstructions
* Dados**Final Depth**: Final Depth of Tool- lowest value in Z
* Dados**Safe Height**: The above which Rapid motions are allowed.
* Dados**Start Depth**: Starting Depth of Tool- first cut depth in Z
* Dados**Step Down**: Incremental Step Down of Tool

Path

* Dados**Active**: Make False, to prevent operation from generating code
* Dados**Base**: The base geometry for this operation
* Dados**Comment**: An optional comment for this operation
* Dados**Coolant Mode**: Coolant mode for this operation
* Dados**Cycle Time**: Estimated cycle time for this operation
* Dados**Start Vertex**: The vertex index to start the path from
* Dados**Tool Controller**: The tool controller that will be used to calculate the path
* Dados**User Label**: User assigned label

Hidden

* Dados**Base Object**:
* Dados**Base Shapes**:
* Dados**Expression Engine**:
* Dados**Label2**:
* Dados**Path**:
* Dados**Proxy**:
* Dados**Visibility**:

### View

Empty

## Scripting

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Example:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Engrave/pt-br&oldid=1386349>"