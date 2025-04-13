---
title: Path Gravură
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                          |
| ---------------------------------------- |
| Path Engrave                             |
| Menu location                            |
| Path → Engrave                           |
| Workbenches                              |
| [Path](/Path_Workbench "Path Workbench") |
| Default shortcut                         |
| _None_                                   |
| Introduced in version                    |
| -                                        |
| See also                                 |
| _None_                                   |
|                                          |

## Descriere

Path Engrave este în primul rând pentru gravarea pe ShapeString pe o piesă. Cu toate acestea, Engrave poate fi util pentru alte tipuri de lucrări 2D

The ![](/images/CAM_Engrave.svg) [Engrave](/CAM_Engrave "CAM Engrave") tool is primarily for engraving a ![](/images/Draft_ShapeString.svg) [Draft ShapeString](/Draft_ShapeString "Draft ShapeString") onto a part. However, it may be useful for other kinds of 2D.

## Usage

Empty

## Options

Empty

## Properties

### Data

Base

- Date**Placement**:
- Date**Label**: User name of the object (UTF-8)

Depth

- Date**Clearance Height**: The height needed to clear clamps and obstructions
- Date**Final Depth**: Final Depth of Tool- lowest value in Z
- Date**Safe Height**: The above which Rapid motions are allowed.
- Date**Start Depth**: Starting Depth of Tool- first cut depth in Z
- Date**Step Down**: Incremental Step Down of Tool

Path

- Date**Active**: Make False, to prevent operation from generating code
- Date**Base**: The base geometry for this operation
- Date**Comment**: An optional comment for this operation
- Date**Coolant Mode**: Coolant mode for this operation
- Date**Cycle Time**: Estimated cycle time for this operation
- Date**Start Vertex**: The vertex index to start the path from
- Date**Tool Controller**: The tool controller that will be used to calculate the path
- Date**User Label**: User assigned label

Hidden

- Date**Base Object**:
- Date**Base Shapes**:
- Date**Expression Engine**:
- Date**Label2**:
- Date**Path**:
- Date**Proxy**:
- Date**Visibility**:

### View

Empty

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Example:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Engrave/ro&oldid=1386370>"
