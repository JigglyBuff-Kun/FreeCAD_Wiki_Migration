---
title: Select Hovering/hr
---

|                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Macro Select Hovering                                                                                                                                                                                                                                                                                                                                              |
| Description                                                                                                                                                                                                                                                                                                                                                        |
| This macro select a choice Face, Edge, Vertex hovering by the mouse. PS: For unselected one face (or other) click the Pause grab and use the standard procedure : CTRL + Click Macro version: 00.04 Last modified: 2024-01-11 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/d/d8/Macro_Select_Hovering.png) Author: Mario52 |
| Author                                                                                                                                                                                                                                                                                                                                                             |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                            |
| Download                                                                                                                                                                                                                                                                                                                                                           |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/d/d8/Macro_Select_Hovering.png)                                                                                                                                                                                                                                                                              |
| Links                                                                                                                                                                                                                                                                                                                                                              |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                   |
| Macro Version                                                                                                                                                                                                                                                                                                                                                      |
| 00.04                                                                                                                                                                                                                                                                                                                                                              |
| Date last modified                                                                                                                                                                                                                                                                                                                                                 |
| 2024-01-11                                                                                                                                                                                                                                                                                                                                                         |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                 |
| All                                                                                                                                                                                                                                                                                                                                                                |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                                                                                                                                                             |
| See also                                                                                                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                                                                                                                    |

## Description

this macro select a choice Face, Edge, Vertex hovering by the mouse.

![Macro Select Hovering](/images/Select_Hovering00.gif)

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/7ebe6b3fd047441114d9d0e08ceddd63/raw/f9dea03a0327b48c76a7c3e9d7cd391b5093a8cf/Macro%2520Select%2520Hovering.FCMacro)_

```

# This code is copied instead of the original macro code
# to guide the user to the online download page.
# Use it if the code of the macro is larger than 64 KB and cannot be included in the wiki
# or if the RAW code URL is somewhere else in the wiki.

from PySide import QtGui, QtCore

diag = QtGui.QMessageBox(QtGui.QMessageBox.Information,
    "Information",
    "This macro must be downloaded from this link\n"
    "\n"
    "https://gist.githubusercontent.com/mario52a/7ebe6b3fd047441114d9d0e08ceddd63/raw/f9dea03a0327b48c76a7c3e9d7cd391b5093a8cf/Macro%2520Select%2520Hovering.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/7ebe6b3fd047441114d9d0e08ceddd63/raw/f9dea03a0327b48c76a7c3e9d7cd391b5093a8cf/Macro%2520Select%2520Hovering.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/7ebe6b3fd047441114d9d0e08ceddd63/raw/f9dea03a0327b48c76a7c3e9d7cd391b5093a8cf/Macro%2520Select%2520Hovering.FCMacro>">raw code</a>

![Macro Select Hovering](/images/Macro_Select_Hovering_00.png)

PS: For deselect one face (or other) click the Pause grab and use the standard procedure : CTRL + Click

## How To Use

Hovering element by the mouse.

#### Section Face

![](/images/CheckBoxFalse.svg) Select Face → 3 number of face(s)
300.0 area total of selections
100.0 area of the latest selection

#### Section Edge

![](/images/CheckBoxFalse.svg) Select Edge → 4 number of edge(s)
40.0 length total of selections
10.0 length of the latest selection

#### Section Vertex

![](/images/CheckBoxFalse.svg) Select Vertex → 1 number of vertex(s)

#### Section Main

Title display info of the :

- ( Obj: 1 ) : number object(s) selected
- ( Sub: 8 ) : number of Sub object(s) selected
- ( Tot: 9 ) : Somme Obj + Sub

Unnamed: Box. Face6 (1.34,2.64,10.0)

- display little info and info below the cursor mouse

Unnamed: 1 : (8 sel.) (Obj. 1, Fa. 3, Ed. 4, Ve. 1) ![](/images/ComboBox.svg)

- Name of document
- 8 selections
- Obj. 1 object
- Fa. 3 faces
- Ed. 4 edges
- Ve. 1 vertex
- If you use several document the macro restores only the selection in the document open (to work)
- The toolTip display the listing of the selected document Name and subObject

![Info objects memorized displayed](/images/Macro_Select_Hovering_01.png)

Selected by Box

- if you select by the Box selection this button select all objects checked of the selection
- Other think you check the vertex option and you want selected all vertexes of the object ... click this button

Reset Data

- Reset all data in the macro (not the memo)

Reset Memo

- Reset the memo

Remove selection

- Remove the selections in the current document

_(**PS:** if several document are open on click mouse in the 3D view remove all selection in all documents)_

Quit

- Quit the macro

Pause grab/Refresh

- Pause the macro for ex: deselect on of many object
- after pause click for return on macro and upgrade al info in the macro
- Can be use for upgrade the selections in the macro (all time)
- Ex: many object are selected before run the macro
- The macro adapts and detect all change of document

### Icons

The icon must be copied into the same directory as the macro

The icon ToolBar ![Macro Select Hovering](/images/Macro_Select_Hovering.png)

## Script

**Macro_Select_Hovering.FCMacro**

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mario52a/7ebe6b3fd047441114d9d0e08ceddd63)

[Download latest version of the macro](https://gist.github.com/mario52a/7ebe6b3fd047441114d9d0e08ceddd63)

## Version

ver 00.04 (11/01/2024) : add:

- LineEdit info,
- ComboBox memo selection,
- Button Memo selection,
- Button Selected by body
- Button Reset Data
- Button Reset Memo
- Button Remove Selection

ver 00.03b (28/10/2020) : add print**()** for Python 3

ver 00.03 (26/12/2017)  : replace test with (FreeCAD.ActiveDocument.getObject(obj), sub) == False)

ver 00.02 (26/12/2017)  :

ver 00.01 (25/12/2017)  :

## Poveznica

[Multiple face selection to convert a shape to a solid](https://forum.freecadweb.org/viewtopic.php?f=3&t=26370)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Select_Hovering/hr&oldid=1353882>"
