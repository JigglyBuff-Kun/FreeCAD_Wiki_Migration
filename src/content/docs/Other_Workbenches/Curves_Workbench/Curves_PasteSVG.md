---
title: Curves PasteSVG
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                |
| ---------------------------------------------- |
| Curves PasteSVG                                |
| Menu location                                  |
| Misc. → Paste SVG                              |
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

The ![](/src/assets/images/Curves_PasteSVG.svg) [Curves PasteSVG](/Curves_PasteSVG "Curves PasteSVG") tool pastes the SVG content of the clipboard into the [3D view](/3D_view "3D view").

## Usage

1. Copy the desired SVG content (code) to the clipboard.
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Curves_PasteSVG.svg) [PasteSVG](/Curves_PasteSVG "Curves PasteSVG") button.
   - Select the **Misc. → ![](/src/assets/images/Curves_PasteSVG.svg) PasteSVG** option from the menu.
3. For each recognized svg element a separate object is created.

## Notes

A sample file result:

- 1 rect -> 1 Rectangle object
- 1 circle -> 1 Circle object
- 5 path -> 6 Path objects (one path split in two at the second **m** command)
- 4 text -> 12 Text objects (the first of of each triplet contains the text position, the next contains the text string, and the last one ?)

Rectangle and Circle are filled and visible, Paths are visible but nothing is displayed for any Text object.  
What is a use case for these objects?

## Properties

These objects have no additional properties.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_PasteSVG/en&oldid=1570237>"
