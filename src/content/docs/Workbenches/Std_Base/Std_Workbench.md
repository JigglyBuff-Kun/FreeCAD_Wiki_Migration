---
title: Std Workbench
---

|                       |
| --------------------- |
| Std Workbench         |
| Menu location         |
| View → Workbench      |
| Workbenches           |
| All                   |
| Default shortcut      |
| _None_                |
| Introduced in version |
| -                     |
| See also              |
| _None_                |
|                       |

## Description

The **Std Workbench** command activates a selected [workbench](/Workbenches "Workbenches").

![](/images/Std_Workbench_ComboBox_Icons_And_Text.png)

The default ComboBox Workbench selector type

![](/images/Std_Workbench_TabBar_Icons_Only.png)

The optional TabBar Workbench selector type (here displayed with icons only) [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

## Usage

1. There are several ways to invoke the command:
   - Select a workbench from the ComboBox or TabBar ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) in the Workbench toolbar.
   - Press the ![](/images/List-add.svg)![](/images/Toolbar_flyout_arrow.svg) button on the TabBar to select a workbench that has been disabled in the [preferences](/Preferences_Editor#Available_Workbenches "Preferences Editor") from the menu that opens.
   - Select a workbench from the **View → Workbench** sub-menu.

## Notes

- Additional [External Workbenches](/External_Workbenches "External Workbenches") can be downloaded with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor").

- A [page with related preferences](/Preferences_Editor#Available_Workbenches "Preferences Editor") is available: **Edit → Preferences... → Workbenches → Available Workbenches**. You can change the **Start up workbench**, the **Workbench selector type**, and more. The ![](/images/List-add.svg)![](/images/Toolbar_flyout_arrow.svg) button on the TabBar gives access to this page via its menu.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To change the workbench use the `activateWorkbench` method of the FreeCADGui module.

```
import FreeCADGui

FreeCADGui.activateWorkbench("PartDesignWorkbench")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Workbench/en&oldid=1494630>"
