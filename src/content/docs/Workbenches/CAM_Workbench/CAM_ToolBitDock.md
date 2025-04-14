---
title: CAM ToolBitDock
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CAM ToolBitDock                                                                                                                                            |
| Menu location                                                                                                                                              |
| CAM → ToolBit Dock                                                                                                                                         |
| Workbenches                                                                                                                                                |
| [CAM](/CAM_Workbench "CAM Workbench")                                                                                                                      |
| Default shortcut                                                                                                                                           |
| P T                                                                                                                                                        |
| Introduced in version                                                                                                                                      |
| 0.19                                                                                                                                                       |
| See also                                                                                                                                                   |
| [CAM ToolBitLibraryOpen](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen"), [CAM Tools](/CAM_Tools "CAM Tools"), [CAM ToolBit](/CAM_ToolBit "CAM ToolBit") |
|                                                                                                                                                            |

## Description

The ![](/images/CAM_ToolBitDock.svg) [ToolBit Dock](/CAM_ToolBitDock "CAM ToolBitDock") is easily accessible from the main toolbar in the CAM workbench. Pressing the button will toggle the state of the dock. The dock is displayed in the right position by default but may be moved by the user.

The purpose of the dock is to display the currently selected library and allow the user to quickly add tool controllers to the CAM Job(s).

Double-clicking on a toolbit will create a single tool controller for the toolbit. Multi-selecting toolbits and pressing the 'Add to Job' button will create tool controllers for all toolbits in the library.

The user may also select multiple tools and use the 'add...' button at the bottom to add tool controllers for the selection.

|     |                                                                                                                                                                                                                                                                                                                                                                                           |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | The top of the panel shows the name of the current library **(1)**. All tool libraries from that location are scanned and shown in the dock. The dock will remember the last selection between uses. A manager button at the top right **(4)** allows the user to launch the library manager. The library manager can be used to maintain the toolbits and to select a different library. |

## Usage

### Create Tool Controllers

1. There are several ways to open the Toolbit Dock:
   - Press the ![](/images/CAM_ToolBitDock.svg) [CAM ToolBitDock](/CAM_ToolBitDock "CAM ToolBitDock") button.
   - Select the **CAM → ![](/images/CAM_ToolBitDock.svg) ToolBit Dock** option from the menu.
   - Use the keyboard shortcut: P then T.
2. Use the dock to add tool controllers to a CAM Job.
   - Doubleclick on a toolbit node **(2)** to create a toolcontroller for that toolbit.
   - select one or more toolbits and press the 'add to Job..' **(3)** button.

## Options

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_ToolBitDock/en&oldid=1391252>"
