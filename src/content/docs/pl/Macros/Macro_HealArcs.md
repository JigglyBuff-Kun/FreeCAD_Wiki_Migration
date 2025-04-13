---
title: Makrodefinicja HealArcs
---
|  |
| --- |
| HealArcs |
| Description |
| Czasami łuki są przekształcane w krzywą złożoną, na przykład gdy zastosowano do nich operacje skalowania. To makro odtwarza z nich prawidłowe łuki. Przydatne przed eksportem do formatu DXF.  Macro version: 0.1 Last modified: 2011-09-24 FreeCAD version: Wszystkie Download: [Ikonka paska narzędzi](https://www.freecadweb.org/wiki/images/5/5a/Macro_HealArcs.png) Author: Yorik |
| Author |
| [Yorik](/User:Yorik "User:Yorik") |
| Download |
| [Ikonka paska narzędzi](https://www.freecadweb.org/wiki/images/5/5a/Macro_HealArcs.png) |
| Links |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars") |
| Macro Version |
| 0.1 |
| Date last modified |
| 2011-09-24 |
| FreeCAD Version(s) |
| Wszystkie |
| Default shortcut |
| *None* |
| See also |
| *None* |
|  |
|  |

## Opis

Czasami łuki są przekształcane w krzywą złożoną, na przykład gdy zastosowano do nich operacje skalowania. To makro odtwarza z nich prawidłowe łuki. Przydatne przed eksportem do formatu DXF.

## Tworzenie skryptów

Ikonka paska narzędzi ![](/images/Macro_HealArcs.png)
**Macro\_HealArcs.FCMacro**

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_HealArcs/pl&oldid=1148875>"