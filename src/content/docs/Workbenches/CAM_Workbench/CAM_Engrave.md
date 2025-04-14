---
title: CAM Engrave
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                       |
| ------------------------------------- |
| CAM Engrave                           |
| Menu location                         |
| CAM → Engrave                         |
| Workbenches                           |
| [CAM](/CAM_Workbench "CAM Workbench") |
| Default shortcut                      |
| _None_                                |
| Introduced in version                 |
| -                                     |
| See also                              |
| _None_                                |
|                                       |

## Description

The ![](/images/CAM_Engrave.svg) [Engrave](/CAM_Engrave "CAM Engrave") tool is primarily for engraving a ![](/images/Draft_ShapeString.svg) [Draft ShapeString](/Draft_ShapeString "Draft ShapeString") onto a part. However, it may be useful for other kinds of 2D.

## Usage

Empty

## Options

Empty

## Properties

### Data

Base

- Data**Placement**:
- Data**Label**: User name of the object (UTF-8)

Depth

- Data**Clearance Height**: The height needed to clear clamps and obstructions
- Data**Final Depth**: Final Depth of Tool- lowest value in Z
- Data**Safe Height**: The above which Rapid motions are allowed.
- Data**Start Depth**: Starting Depth of Tool- first cut depth in Z
- Data**Step Down**: Incremental Step Down of Tool

Path

- Data**Active**: Make False, to prevent operation from generating code
- Data**Base**: The base geometry for this operation
- Data**Comment**: An optional comment for this operation
- Data**Coolant Mode**: Coolant mode for this operation
- Data**Cycle Time**: Estimated cycle time for this operation
- Data**Start Vertex**: The vertex index to start the path from
- Data**Tool Controller**: The tool controller that will be used to calculate the path
- Data**User Label**: User assigned label

Hidden

- Data**Base Object**:
- Data**Base Shapes**:
- Data**Expression Engine**:
- Data**Label2**:
- Data**Path**:
- Data**Proxy**:
- Data**Visibility**:

### View

Empty

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Example:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Engrave/en&oldid=1386348>"
