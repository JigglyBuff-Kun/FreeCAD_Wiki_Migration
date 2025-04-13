---
title: HealArcs
---

|                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| HealArcs                                                                                                                                                                                                                                                                                                                                                                             |
| Beschreibung                                                                                                                                                                                                                                                                                                                                                                         |
| Manchmal werden Bögen in BSplines umgewandelt, z. B. wenn Skalenoperationen darauf angewendet wurden. Dieses Makro erstellt aus ihnen gültige Bögen. Nützlich vor dem Export nach DXF. Versionsmakro : 0.1 Datum der letzten Änderung : 2011-09-24 FreeCAD version : All Herunterladen : [ToolBar Icon](https://www.freecadweb.org/wiki/images/5/5a/Macro_HealArcs.png) Autor: Yorik |
| Autor                                                                                                                                                                                                                                                                                                                                                                                |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                                                    |
| Herunterladen                                                                                                                                                                                                                                                                                                                                                                        |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/5/5a/Macro_HealArcs.png)                                                                                                                                                                                                                                                                                                       |
| Links                                                                                                                                                                                                                                                                                                                                                                                |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                                                                                                                         |
| Macro-Version                                                                                                                                                                                                                                                                                                                                                                        |
| 0.1                                                                                                                                                                                                                                                                                                                                                                                  |
| Datum der letzten Änderung                                                                                                                                                                                                                                                                                                                                                           |
| 2011-09-24                                                                                                                                                                                                                                                                                                                                                                           |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                                                                                                                   |
| All                                                                                                                                                                                                                                                                                                                                                                                  |
| Standardverknüpfung                                                                                                                                                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                                                                                                                                                               |
| Siehe auch                                                                                                                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                                                                                      |

## Beschreibung

Manchmal werden Bögen in BSplines umgewandelt, z. B. wenn Skalenoperationen darauf angewendet wurden. Dieses Makro erstellt aus ihnen gültige Bögen. Nützlich vor dem Export nach DXF

## Skript

Werkzeugleistensymbol ![](/src/assets/images/Macro_HealArcs.png)
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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_HealArcs/de&oldid=1148886>"
