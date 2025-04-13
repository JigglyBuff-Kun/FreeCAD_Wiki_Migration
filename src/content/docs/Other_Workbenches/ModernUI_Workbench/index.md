---
title: ModernUI Workbench
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::
![](/src/assets/images/ModernUI_workbench_icon.svg)

Modern UI workbench icon

## Introduction

The [ModernUI Workbench](/ModernUI_Workbench "ModernUI Workbench") is an [external workbench](/External_workbenches "External workbenches") that replaces the standard user interface. It has modern features such as:

- Each workbench has its ribbon tab.
- **Modern UI** ribbon tab replaces the top-level menu.
- Activating a workbench's ribbon tab shows groups of the workbench's tools.
- Panels such as [Combo View](/Combo_view "Combo view") are collapsed/expanded upon mouse-over.

## References

- Author: Hakan Seven
- Source code on github: [Source code Modern-UI](https://github.com/HakanSeven12/Modern-UI)

## Limitations and Troubleshooting

- If you experience unexpected behavior, always first try to uninstall and then reinstall the ModernUI workbench.
- The workbench is primarily tested with English and may exhibit unexpected behavior in other languages.
- Installing more workbenches after installing ModernUI may cause problems.

## Install

Install with the ![](/src/assets/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

Note: To uninstall, you have to create a macro and execute it. If you do not feel confident about this, consider to not install.

### Running Modern UI in a self-contained directory

To easily test Modern UI without interfering with your standard configuration, you can contain it in a separate directory. Uninstalling Modern UI is then simply accomplished by deleting the directory. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

#### Linux

For example:

```
$ mkdir modernUI  # new directory that contains Modern UI
$ cd modernUI
$ HOME="$PWD" FREECAD_USER_HOME="$PWD" FreeCAD_0.19.AppImage

```

When starting FreeCAD like this for the first time, you have a new default configuration. Now install (and configure) Modern UI. This is essentially a [_portable_ FreeCAD version](/Download#Notes_for_GNU.2FLinux_users "Download").

Instead of using the command line, you can also [create a dedicated desktop icon](/Start_up_and_Configuration#Starting_FreeCAD_from_the_desktop "Start up and Configuration").

#### Windows

There are not dedicated instructions for Windows yet, however, it is very similar to [creating a portable version of FreeCAD on a USB medium](/Start_up_and_Configuration#Starting_FreeCAD_from_a_portable_USB_medium "Start up and Configuration").

## Uninstall

Detailed instructions can be found on [GitHub](https://github.com/HakanSeven12/Modern-UI#uninstallation).

The uninstall sequence is as follows:

1. Uninstall with the ![](/src/assets/images/AddonManager.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").
2. Restart FreeCAD.
3. Create a macro with this code:

   ```
   from PySide2 import QtCore, QtGui, QtWidgets
   mw = FreeCADGui.getMainWindow()
   mw.menuBar().show()

   WBList = FreeCADGui.listWorkbenches()
   for WB in WBList:
       FreeCADGui.activateWorkbench(WB)
       for tb in mw.findChildren(QtWidgets.QToolBar):
           tb.show()

   ```

4. Execute the macro.
5. Restart FreeCAD.

## Links

- FreeCAD Forum: <https://forum.freecadweb.org/viewtopic.php?f=34&t=44937>
- Report bugs: <https://github.com/HakanSeven12/Modern-UI>
- Patreon (to support the author): <https://www.patreon.com/HakanSeven12>

Retrieved from "<http://wiki.freecad.org/index.php?title=ModernUI_Workbench/en&oldid=1065077>"
