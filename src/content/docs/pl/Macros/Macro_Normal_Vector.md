---
title: Makrodefinicja Normal Vector
---

|                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Normal Vector Macro                                                                                                                                                                                                    |
| Description                                                                                                                                                                                                            |
| Get normal vector of preselected face Macro version: 1.0 Last modified: 2016-09-26 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/8/8b/Macro_Normal_Vector.png) Author: ulrich1a |
| Author                                                                                                                                                                                                                 |
| [ulrich1a](/index.php?title=User:Ulrich1a&action=edit&redlink=1 "User:Ulrich1a (page does not exist)")                                                                                                                 |
| Download                                                                                                                                                                                                               |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/8/8b/Macro_Normal_Vector.png)                                                                                                                                    |
| Links                                                                                                                                                                                                                  |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                       |
| Macro Version                                                                                                                                                                                                          |
| 1.0                                                                                                                                                                                                                    |
| Date last modified                                                                                                                                                                                                     |
| 2016-09-26                                                                                                                                                                                                             |
| FreeCAD Version(s)                                                                                                                                                                                                     |
| All                                                                                                                                                                                                                    |
| Default shortcut                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                 |
| See also                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                        |

## Description

Simple macro to extract normal vector of previously within the 3D-View chosen face and give the output to the python console

## Usage

- Choose Face in 3D View.
- Copy Macro code to python console.
- FreeCAD will then display normal vector information in python console.
- Use these values for setting up direction when creating a drawing view.

## Script

ToolBar Icon
![](/images/Macro_Normal_Vector.png)

**Macro_Normal_Vector.FCMacro**

```
Gui.Selection.getSelectionEx()[0].SubObjects[0].Faces[0].normalAt(0,0)
```

## Link

[Link to dicussion thread (german)](http://forum.freecadweb.org/viewtopic.php?f=13&t=10959)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Normal_Vector/pl&oldid=1086189>"
