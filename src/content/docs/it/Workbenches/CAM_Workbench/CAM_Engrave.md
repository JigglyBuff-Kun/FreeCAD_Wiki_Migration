---
title: Path Incisione
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| Incisione |
| Posizione nel menu |
| Path → Incisione |
| Ambiente |
| [Path](/Path_Workbench/it "Path Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Incisione serve principalmente per incidere un testo ShapeString su una parte, ma può essere utile anche per altre lavorazioni 2D

The ![](/images/CAM_Engrave.svg) [Engrave](/CAM_Engrave "CAM Engrave") tool is primarily for engraving a ![](/images/Draft_ShapeString.svg) [Draft ShapeString](/Draft_ShapeString "Draft ShapeString") onto a part. However, it may be useful for other kinds of 2D.

## Usage

Empty

## Options

Empty

## Properties

### Data

Base

* Dati**Placement**:
* Dati**Label**: User name of the object (UTF-8)

Depth

* Dati**Clearance Height**: The height needed to clear clamps and obstructions
* Dati**Final Depth**: Final Depth of Tool- lowest value in Z
* Dati**Safe Height**: The above which Rapid motions are allowed.
* Dati**Start Depth**: Starting Depth of Tool- first cut depth in Z
* Dati**Step Down**: Incremental Step Down of Tool

Path

* Dati**Active**: Make False, to prevent operation from generating code
* Dati**Base**: The base geometry for this operation
* Dati**Comment**: An optional comment for this operation
* Dati**Coolant Mode**: Coolant mode for this operation
* Dati**Cycle Time**: Estimated cycle time for this operation
* Dati**Start Vertex**: The vertex index to start the path from
* Dati**Tool Controller**: The tool controller that will be used to calculate the path
* Dati**User Label**: User assigned label

Hidden

* Dati**Base Object**:
* Dati**Base Shapes**:
* Dati**Expression Engine**:
* Dati**Label2**:
* Dati**Path**:
* Dati**Proxy**:
* Dati**Visibility**:

### View

Empty

## Scripting

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Example:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Engrave/it&oldid=1386409>"