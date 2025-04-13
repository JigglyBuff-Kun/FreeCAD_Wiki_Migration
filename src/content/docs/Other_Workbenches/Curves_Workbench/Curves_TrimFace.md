---
title: Curves TrimFace
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                |
| ---------------------------------------------- |
| Curves TrimFace                                |
| Menu location                                  |
| Surfaces → Trim face                           |
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

The ![](/src/assets/images/Curves_TrimFace.svg) **Curves TrimFace** tool trims a face with a projected curve.

## Usage

1. Select a face and a curve.
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Curves_TrimFace.svg) [Trim face](/Curves_TrimFace "Curves TrimFace") button.
   - Select the **Surfaces → ![](/src/assets/images/Curves_TrimFace.svg) Trim face** option from the menu.
3. A **TrimmedFace** object is created.

## Notes

- The point picked to select the face defines the side of the projected curve that is kept.
- The projection vector is the direction vector of the selected curve if available, or else the current direction of the aktive view.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **TrimmedFace** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

### Data

Trim Face

- Data**Vector** (`Link`): Trimming Vector.
- Data**Direction** (`Vector`): Trimming direction.
- Data**Face** (`LinkSub`): Input face
- Data**Picked Point** (`Vector`): Picked point in parametric space of the face (u,v,0).
- Data**Tool** (`LinkSubList`): Trimming curve.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_TrimFace/en&oldid=1567415>"
