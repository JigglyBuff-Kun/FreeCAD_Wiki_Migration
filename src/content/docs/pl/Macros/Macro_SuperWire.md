---
title: Makrodefinicja SuperWire
---

|                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SuperWire                                                                                                                                                                                                                                                                                                                                                                                |
| Description                                                                                                                                                                                                                                                                                                                                                                              |
| This macro creates a wire from selected objects (lines and arcs) even where normal wire creation methods (for example the upgrade tool) fail. Attention, you need a recent version of FreeCAD for this to work Macro version: 0.1 Last modified: 2012-05-22 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/e3/Macro_SuperWire.png) Author: Yorik |
| Author                                                                                                                                                                                                                                                                                                                                                                                   |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                                                        |
| Download                                                                                                                                                                                                                                                                                                                                                                                 |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/e3/Macro_SuperWire.png)                                                                                                                                                                                                                                                                                                          |
| Links                                                                                                                                                                                                                                                                                                                                                                                    |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                         |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                            |
| 0.1                                                                                                                                                                                                                                                                                                                                                                                      |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                       |
| 2012-05-22                                                                                                                                                                                                                                                                                                                                                                               |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                       |
| All                                                                                                                                                                                                                                                                                                                                                                                      |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                                                                                                                                                                   |
| See also                                                                                                                                                                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                          |

## Description

This macro creates a wire from selected objects (lines and arcs) even where normal wire creation methods (for example the upgrade tool) fail.

Attention, you need a recent version of FreeCAD for this to work

## Script

ToolBar Icon
![](/images/Macro_SuperWire.png)

**Macro_SuperWire.FCMacro**

```
import FreeCAD,FreeCADGui,Part
try:
    import DraftGeomUtils as fcgeo
except:
    from draftlibs import fcgeo

sel = FreeCADGui.Selection.getSelection()
if not sel:
   FreeCAD.Console.PrintWarning("Select something first!")
else:
   elist = []
   for obj in sel:
       if hasattr(obj,"Shape"):
           elist.append(obj.Shape.Edges[0])
   wire = fcgeo.superWire(elist)
   if wire:
       Part.show(wire)
   else:
       FreeCAD.Console.PrintError("SuperWire operation failed!")
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_SuperWire/pl&oldid=1086207>"
