---
title: ModernUI Workbench/de
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::
![](/images/ModernUI_workbench_icon.svg)

Modern UI workbench icon

## Einführung

The [ModernUI Workbench](/ModernUI_Workbench "ModernUI Workbench") is an [external workbench](/External_workbenches "External workbenches") that replaces the standard user interface. It has modern features such as:

* Each workbench has its ribbon tab.
* **Modern UI** ribbon tab replaces the top-level menu.
* Activating a workbench's ribbon tab shows groups of the workbench's tools.
* Panels such as [Combo View](/Combo_view "Combo view") are collapsed/expanded upon mouse-over.

## Referenzen

* Author: Hakan Seven
* Source code on github: [Source code Modern-UI](https://github.com/HakanSeven12/Modern-UI)

## Begrenzungen und Problembehebung

* If you experience unexpected behavior, always first try to uninstall and then reinstall the ModernUI workbench.
* The workbench is primarily tested with English and may exhibit unexpected behavior in other languages.
* Installing more workbenches after installing ModernUI may cause problems.

## Installieren

Install with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

Note: To uninstall, you have to create a macro and execute it. If you do not feel confident about this, consider to not install.

### Running Modern UI in a self-contained directory

To easily test Modern UI without interfering with your standard configuration, you can contain it in a separate directory. Uninstalling Modern UI is then simply accomplished by deleting the directory. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

#### Linux

Zum Beispiel:

```
$ mkdir modernUI  # new directory that contains Modern UI
$ cd modernUI
$ HOME="$PWD" FREECAD_USER_HOME="$PWD" FreeCAD_0.19.AppImage

```

When starting FreeCAD like this for the first time, you have a new default configuration. Now install (and configure) Modern UI. This is essentially a [*portable* FreeCAD version](/Download#Notes_for_GNU.2FLinux_users "Download").

Instead of using the command line, you can also [create a dedicated desktop icon](/Start_up_and_Configuration#Starting_FreeCAD_from_the_desktop "Start up and Configuration").

#### Windows

There are not dedicated instructions for Windows yet, however, it is very similar to [creating a portable version of FreeCAD on a USB medium](/Start_up_and_Configuration#Starting_FreeCAD_from_a_portable_USB_medium "Start up and Configuration").

## Uninstall

Detailed instructions can be found on [GitHub](https://github.com/HakanSeven12/Modern-UI#uninstallation).

The uninstall sequence is as follows:

1. Uninstall with the ![](/images/AddonManager.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").
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
4. Führe das Makro aus.
5. FreeCAD neu starten.

## Verweise

* FreeCAD Forum: <https://forum.freecadweb.org/viewtopic.php?f=34&t=44937>
* Report bugs: <https://github.com/HakanSeven12/Modern-UI>
* Patreon (to support the author): <https://www.patreon.com/HakanSeven12>

Retrieved from "<http://wiki.freecad.org/index.php?title=ModernUI_Workbench/de&oldid=1065076>"