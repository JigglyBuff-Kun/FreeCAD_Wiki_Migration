---
title: Toggle Panels Visibility
---

|                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Macro Toggle Panels Visibility                                                                                                                                                                                                                                                                                                       |
| Description                                                                                                                                                                                                                                                                                                                          |
| This macro toggles the visibility of various supporting views in FreeCAD, allowing the main window to be viewed with all available screen space. Macro version: 1.0 Last modified: 2015-01-17 FreeCAD version: All Download: [ToolBar Icon](https://wiki.freecad.org/images/d/d0/Macro_Toggle_Views_Visibility.png) Author: Piffpoof |
| Author                                                                                                                                                                                                                                                                                                                               |
| [Piffpoof](/User:Piffpoof "User:Piffpoof")                                                                                                                                                                                                                                                                                           |
| Download                                                                                                                                                                                                                                                                                                                             |
| [ToolBar Icon](https://wiki.freecad.org/images/d/d0/Macro_Toggle_Views_Visibility.png)                                                                                                                                                                                                                                               |
| Links                                                                                                                                                                                                                                                                                                                                |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                     |
| Macro Version                                                                                                                                                                                                                                                                                                                        |
| 1.0                                                                                                                                                                                                                                                                                                                                  |
| Date last modified                                                                                                                                                                                                                                                                                                                   |
| 2015-01-17                                                                                                                                                                                                                                                                                                                           |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                   |
| All                                                                                                                                                                                                                                                                                                                                  |
| Default shortcut                                                                                                                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                                                                                                                               |
| See also                                                                                                                                                                                                                                                                                                                             |
| [Toggle Panels](https://forum.freecadweb.org/viewtopic.php?f=22&t=30450&hilit=Toggle_Panels)                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                                      |

## Description

When working with FreeCAD there are times when you need many supporting windows open, such as Combo View, Report View, etc. There are other times when you want all the clutter of the supporting windows to disappear so that all the screen space available can be used to view the model being worked with. This macro lets you hide all the supporting windows (or make them visible again) with one click on the toolbar.

## Installation

Save the provided code to the appropriate Macro directory and execute it from the Macro menu. It is preferable to add it to a toolbar for ease of access.

- see [How to install macros](/How_to_install_macros "How to install macros") for information on how to install this macro code
- see [Customize Toolbars](/Customize_Toolbars "Customize Toolbars") for information how to install as a button on a toolbar

## Usage

Click on the associated toolbar button, or invoke from the Macro menu. The supporting windows Python console, Report view, Combo view will either all become visible or all become hidden.

## User Interface

There is immediate confirmation of the user action as the supporting windows either appear or disappear.

## Scripts

Toolbar icon ![](/images/Macro_Toggle_Views_Visibility.png)

**Macro_Toggle_Panels_Visibility.FCMacro**

```
# -*- coding: utf-8 -*-
# macro to toggle visibility of Report view, Python console, Combo view
from PySide import QtCore, QtGui
mainWindow = FreeCADGui.getMainWindow()
dockWidgets = mainWindow.findChildren(QtGui.QDockWidget)
for dw in dockWidgets:
    if dw.objectName() == "Python console":
        pcWidget = dw
    if dw.objectName() == "Combo View":
        cvWidget = dw
    if dw.objectName() == "Report view":
        rvWidget = dw

if pcWidget.isVisible():
    pcWidget.hide()
    cvWidget.hide()
    rvWidget.hide()
else:
    pcWidget.show()
    cvWidget.show()
    rvWidget.show()
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Toggle_Panels_Visibility/en&oldid=1346283>"
