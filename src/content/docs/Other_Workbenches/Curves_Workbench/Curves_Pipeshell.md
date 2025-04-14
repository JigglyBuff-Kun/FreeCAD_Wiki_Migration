---
title: Curves Pipeshell
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                |
| ---------------------------------------------- |
| Curves Pipeshell                               |
| Menu location                                  |
| Surfaces → Pipeshell                           |
| Workbenches                                    |
| [Curves](/Curves_Workbench "Curves Workbench") |
| Default shortcut                               |
| _None_                                         |
| Introduced in version                          |
| -                                              |
| See also                                       |
| _None_                                         |
|                                                |

## Description

The ![](/images/Curves_Pipeshell.svg) [Curves Pipeshell](/Curves_Pipeshell "Curves Pipeshell") creates a Pipeshell sweep object. This tool is part of the [external workbench](/External_workbenches "External workbenches") called [Curves](/Curves_Workbench "Curves Workbench").

## Usage

1. Switch to the ![](/images/Curves_workbench_icon.svg) [Curves](/Curves_Workbench "Curves Workbench") workbench (install from ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr") is necessary, if not previously installed)
2. Select the edge that builds the sweep path in the [3D view](/3D_view "3D view")
3. Select one or more required profiles in the [Tree view](/Tree_view "Tree view")
4. To invoke the command, do one of the following:
   - Press the ![](/images/Curves_Pipeshell.svg) [Creates a Pipeshell sweep object](/Curves_Pipeshell "Curves Pipeshell") button in the tool bar
   - Use the **Surfaces → Pipeshell**
5. Change the `Pipeshell` parameter to the required conditions

## Properties

### Data

Base

- Data**Placement**: [Placement](/Placement "Placement") is the location and orientation of an object in space.
- Data**Label**: User name of the object in the [Tree view](/Tree_view "Tree view").

Main

- Data**Mode**: Default is _Frenet_. Mode is used to select the sweeping algorithm. Choices: Frenet, DiscreteTrihedron, FixedTrihetron, Binormal, ShapeSupport, AuxiliarySpine.
- Data**Output**: Default is _Surface_. Output determines the shape of the object. Choices: Surface, Sections, Lofted Sections.
- Data**Profile**: List of the used profiles.
- Data**Spine**:

Mode

- Data**Auxiliary**:
- Data**Contact**:
- Data**Corrected**:
- Data**Direction**:
- Data**Equi Curvi**:
- Data**Location**:
- Data**Support**:

Settings

- Data**Max Degree**:
- Data**Max Segments**:
- Data**Samples**:
- Data**Solid**: Default is _False_
- Data**Tol3d**: Default is _0.00_.
- Data**Tol Ang**: Default is _0.00_.
- Data**Tol Bound**: Default is _0.00_.

## Notes

- _Pipeshell_ needs a wire object (as the sweep path), and at least one _Pipeshell Profile_.
- The two tools _Pipeshell_ and _Pipeshell Profile_ work together as an "Advanced" Sweep tool.

## Limitations

## Scripting

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_Pipeshell/en&oldid=886777>"
