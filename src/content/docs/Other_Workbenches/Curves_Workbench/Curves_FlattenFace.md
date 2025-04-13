---
title: Curves FlattenFace
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                |
| ---------------------------------------------- |
| Curves FlattenFace                             |
| Menu location                                  |
| Surfaces → Flatten face                        |
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

The ![](/src/assets/images/Curves_FlattenFace.svg) **Curves FlattenFace** tool creates a flat developed face from conical or cylindrical faces.

![](/src/assets/images/Curves_FlattenFace01.png)

A truncated cone and two Flatten objects, one in place (green), and one on the XY plane (red)

## Usage

1. Select one or more conical or cylindrical faces.
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Curves_FlattenFace.svg) [Flatten face](/Curves_FlattenFace "Curves FlattenFace") button.
   - Select the **Surfaces → ![](/src/assets/images/Curves_FlattenFace.svg) Flatten face** option from the menu.
3. A **Flatten** object is created for each selected face.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **Flatten** object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Settings

- Data**InPlace** (`Bool`): Unroll the face in place.
  - `true`: The output surface will be placed so that it is tangent to the source face, at the seam line.
  - `false`: The output surface will be in the default XY plane.
- Data (Hidden)**Size** (`Float`): Size of the underlying surface

Source

- Data**Source** (`LinkSub`): The conical face to flatten

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_FlattenFace/en&oldid=1571007>"
