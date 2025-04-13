---
title: CAM ToolBitLibraryOpen
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------- |
| CAM ToolBitLibraryOpen                                                                                                                |
| Menu location                                                                                                                         |
| CAM → ToolBit Library editor                                                                                                          |
| Workbenches                                                                                                                           |
| [CAM](/CAM_Workbench "CAM Workbench")                                                                                                 |
| Default shortcut                                                                                                                      |
| _None_                                                                                                                                |
| Introduced in version                                                                                                                 |
| 0.19                                                                                                                                  |
| See also                                                                                                                              |
| [CAM ToolBitDock](/CAM_ToolBitDock "CAM ToolBitDock"), [CAM Tools](/CAM_Tools "CAM Tools"), [CAM ToolBit](/CAM_ToolBit "CAM ToolBit") |
|                                                                                                                                       |

## Description

The ![](/src/assets/images/CAM_ToolBitLibraryOpen.svg) [ToolBit Library editor](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") is the tool for creating, managing, and organize toolbits. Launching the library manager will display the manager as a modal dialog.

From here the user can perform all task related to toolbit management :

- Select a default library
- Create/edit/delete Toolbits
- Create libraries
- Modify libraries by adding and removing toolbits
- Save a library to a new name
- Export a library to the LinuxCNC tooltable (.tbl) format

Only the creation of new toolshapes cannot be done from the toolbit library manager. This is an advanced topic. (see [CAM ToolShape](/CAM_ToolShape "CAM ToolShape") creation).

![](/src/assets/images/Toolbitmanager.png)

The ToolBit Library editor

The left pane **(1)** shows a list of all libraries in the current working directory. The current library is highlighted.

The current working directory path is shown in the window title bar **(2)**. A file selector **(3)** can be used to select a different working directory.

The right side pane **(4)** shows all toolbits in the currently selected library. Doubleclicking in the left column allows you to change the default tool number for this toolbit. The toolnumber will be used when creating a tool controller. The number is an attribute of the library. This means the same toolbit can exist in multiple tool libraries and have different default toolnumbers in each.

Tools at the top **(5)** are used to create/add/remove toolbits from the current library.

The save as button **(6)** can be used to write the library to a new file or export to a valid tooltable format. Currently only LinuxCNC format is supported.

The manager will remember the last active tool library and working directory between uses.

The close button **(7)** at bottom right will dismiss the tool library manager. Any changes to the current library are persisted to disk. Pressing the Escape key will dismiss the manager but not make any changes to the current library. Whichever library is selected when the manager is dismissed will become the new default and will be shown in the Toolbit Dock.

## Usage

1. There are several ways to open the Toolbit Library Manager:
   - Select the **CAM → ![](/src/assets/images/CAM_ToolBitLibraryOpen.svg) ToolBit Library editor** option from the menu.
   - Open the [ToolBit Dock](/CAM_ToolBitDock "CAM ToolBitDock") as described and press the ![](/src/assets/images/Edit-edit.svg) [Library editor...](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") button.
2. Select a library from the list.
3. Create/Add/Remove toolbits from the library.
4. Double-click a row to edit the toolbit.
5. Close the manager.
6. The selected library will become the default library for the dock.

## Editing Toolbits

There are several ways to edit the toolbits and library:

A. By clicking the column headers of the library you can sort the toolbit library. The library will retain the sort and use it in the dock.

: ![](/src/assets/images/Librarysort.png)
: Sort the toolbit library via the column headers

B. By doubleclicking in the first column you can edit the toolbit number. This will be the default tool number used when creating a new tool controller. It is possible to use the same number for multiple toolbits.

: ![](/src/assets/images/Edittoolnumber.png)
: Double click first column to edit toolbit number

C. Double clicking anywhere else in the row will open the toolbit editing panel. From here you can edit other properties of the toolbit.

: ![](/src/assets/images/Editingpanel.png)
: Open toolbit editing panel by clicking anywhere else in the row.

## Related

- [CAM Tools](/CAM_Tools "CAM Tools")
- [CAM ToolBit](/CAM_ToolBit "CAM ToolBit")

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_ToolBitLibraryOpen/en&oldid=1491447>"
