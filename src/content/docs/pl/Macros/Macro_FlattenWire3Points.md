---
title: Makrodefinicja FlattenWire3Points
---
|  |
| --- |
| FlattenWire3Points |
| Description |
| Ta makrodefinicja spłaszcza polilinie środowiska Rysunek Roboczy, które nie są płaskie na płaszczyźnie zdefiniowanej przez 3 punkty.  Aby użyć tego makra, wybierz pierwsze 3 wierzchołki z pojedynczej polilinii Rysunek Roboczy.  Macro version: 1.0 Last modified: 2016-02-06 FreeCAD version: Wszystkie Download: [Ikonka paska narzędzi](https://www.freecadweb.org/wiki/images/1/1e/Macro_FlattenWire3Points.png) Author: Yorik |
| Author |
| [Yorik](/User:Yorik "User:Yorik") |
| Download |
| [Ikonka paska narzędzi](https://www.freecadweb.org/wiki/images/1/1e/Macro_FlattenWire3Points.png) |
| Links |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars") |
| Macro Version |
| 1.0 |
| Date last modified |
| 2016-02-06 |
| FreeCAD Version(s) |
| Wszystkie |
| Default shortcut |
| *None* |
| See also |
| *None* |
|  |
|  |

## Opis

Ta makrodefinicja spłaszcza polilinie środowiska Rysunek Roboczy, które nie są płaskie na płaszczyźnie zdefiniowanej przez 3 punkty.  
 Aby użyć tego makra, wybierz pierwsze 3 wierzchołki z pojedynczej [polilinii](/Draft_Wire/pl "Draft Wire/pl") Rysunek Roboczy.

## Tworzenie skryptów

Ikonka paska narzędzi ![](/images/Macro_FlattenWire3Points.png)

**Macro\_FlattenWire3Points.FCMacro**

```
import FreeCAD,FreeCADGui,Draft
 
 # check selection
 sel = FreeCADGui.Selection.getSelectionEx()
 ok = True
 if len(sel) != 1:
    FreeCAD.Console.PrintError("Please select 3 vertices from one Draft wire\n")
    ok = False
 sel = sel[0]
 if Draft.getType(sel.Object) not in ["Wire","BSpline"]:
    FreeCAD.Console.PrintError("Please select 3 vertices from one Draft wire\n")
    ok = False
 if len(sel.SubElementNames) != 3:
    FreeCAD.Console.PrintError("Please select 3 vertices from one Draft wire\n")
    ok = False
 for e in sel.SubElementNames:
    if not "Vertex" in e:
        FreeCAD.Console.PrintError("Please select 3 vertices from one Draft wire\n")
        ok = False
 
 if ok:
    # define a plane
    p1 = getattr(sel.Object.Shape,sel.SubElementNames[0]).Point
    p2 = getattr(sel.Object.Shape,sel.SubElementNames[1]).Point
    p3 = getattr(sel.Object.Shape,sel.SubElementNames[2]).Point
    p4 = p2.sub(p1).cross(p3.sub(p1))
    
    # project wire points
    points = []
    for p in sel.Object.Points:
        points.append(p.projectToPlane(p1,p4))
    sel.Object.Points = points
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FlattenWire3Points/pl&oldid=913877>"