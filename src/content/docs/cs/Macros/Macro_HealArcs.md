---
title: OpravaOblouku
---

|                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HealArcs                                                                                                                                                                                                                                                                                                                                                                   |
| Popis                                                                                                                                                                                                                                                                                                                                                                      |
| Oblouky jsou někdy transformovány do B-křivek, například když na ně jsou aplikovány změny měřítka. Toto makro z nich znovu vytvoří platný oblouk. Je to užitečné před exportem do dxf Version macro : 0.1 Date last modification : 2011-09-24 FreeCAD version : All Download : [ToolBar Icon](https://www.freecadweb.org/wiki/images/5/5a/Macro_HealArcs.png) Autor: Yorik |
| Autor                                                                                                                                                                                                                                                                                                                                                                      |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                                          |
| Download                                                                                                                                                                                                                                                                                                                                                                   |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/5/5a/Macro_HealArcs.png)                                                                                                                                                                                                                                                                                             |
| Odkazy                                                                                                                                                                                                                                                                                                                                                                     |
| [Makro recepty                                                                                                                                                                                                                                                                                                                                                             | ](/Macros_recipes/cs "Macros recipes/cs") [Jak nainstalovat makra](/How_to_install_macros/cs "How to install macros/cs") [Jak přizpůsobit panely nástrojů](/Customize_Toolbars/cs "Customize Toolbars/cs") |
| Verze                                                                                                                                                                                                                                                                                                                                                                      |
| 0.1                                                                                                                                                                                                                                                                                                                                                                        |
| Datum poslední úpravy                                                                                                                                                                                                                                                                                                                                                      |
| 2011-09-24                                                                                                                                                                                                                                                                                                                                                                 |
| Verze FreeCAD                                                                                                                                                                                                                                                                                                                                                              |
| All                                                                                                                                                                                                                                                                                                                                                                        |
| Výchozí zástupce                                                                                                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                                                                                                     |
| Viz též                                                                                                                                                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                            |

## Description

Oblouky jsou někdy transformovány do B-křivek, například když na ně jsou aplikovány změny měřítka. Toto makro z nich znovu vytvoří platný oblouk. Je to užitečné před exportem do dxf

## Skript

ToolBar Icon ![](/images/Macro_HealArcs.png)
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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_HealArcs/cs&oldid=1148872>"
