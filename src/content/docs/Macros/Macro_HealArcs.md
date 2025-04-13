---
title: HealArcs
---

|                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HealArcs                                                                                                                                                                                                                                                                                                                                                                                       |
| Description                                                                                                                                                                                                                                                                                                                                                                                    |
| Sometimes arcs are transformed into BSplines, for example when scale operations have been applied to them. This macro recreates valid arcs from them. Useful before exporting to dxf. Useful before exporting to dxf. Macro version: 0.1 Last modified: 2011-09-24 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/5/5a/Macro_HealArcs.png) Author: Yorik |
| Author                                                                                                                                                                                                                                                                                                                                                                                         |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                                                              |
| Download                                                                                                                                                                                                                                                                                                                                                                                       |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/5/5a/Macro_HealArcs.png)                                                                                                                                                                                                                                                                                                                 |
| Links                                                                                                                                                                                                                                                                                                                                                                                          |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                               |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.1                                                                                                                                                                                                                                                                                                                                                                                            |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                             |
| 2011-09-24                                                                                                                                                                                                                                                                                                                                                                                     |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                             |
| All                                                                                                                                                                                                                                                                                                                                                                                            |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                                                                                                                                         |
| See also                                                                                                                                                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                                                                                                                |

## Description

Sometimes arcs are transformed into BSplines, for example when scale operations have been applied to them. This macro recreates valid arcs from them. Useful before exporting to dxf

## Script

ToolBar Icon ![](/src/assets/images/Macro_HealArcs.png)
**Macro_HealArcs.FCMacro**

```
try:
    import DraftGeomUtils as fcgeo
except:
    from draftlibs import fcgeo
import FreeCAD,FreeCADGui,Part

sel = FreeCADGui.Selection.getSelection()
if not sel:
    FreeCAD.Console.PrintWarning("Select something first!")
else:
    removeList = []
    for obj in sel:
        ed = obj.Shape.Edges[0]
        arc = fcgeo.arcFromSpline(ed)
        if arc:
            Part.show(arc)
            removeList.append(obj.Name)
    FreeCAD.ActiveDocument.recompute()
    print("removing", removeList)
    for n in removeList:
        FreeCAD.ActiveDocument.removeObject(n)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_HealArcs/en&oldid=1148882>"
