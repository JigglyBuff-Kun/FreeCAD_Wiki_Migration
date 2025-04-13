---
title: HealArcs
---

|                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HealArcs                                                                                                                                                                                                                                                                                                                                                                                |
| Descripción                                                                                                                                                                                                                                                                                                                                                                             |
| A veces los arcos se transforman en BSplines, por ejemplo cuando se les aplica operaciones de escala. Esta macro vuelve a crear arcos válidos a partir de ellos. Útil antes de exportar a DXF Versión macro : 0.1 Fecha última modificación : 2011-09-24 Versión FreeCAD : All Descargar : [ToolBar Icon](https://www.freecadweb.org/wiki/images/5/5a/Macro_HealArcs.png) Autor : Yorik |
| Autor                                                                                                                                                                                                                                                                                                                                                                                   |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                                                       |
| Descargar                                                                                                                                                                                                                                                                                                                                                                               |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/5/5a/Macro_HealArcs.png)                                                                                                                                                                                                                                                                                                          |
| Enlace                                                                                                                                                                                                                                                                                                                                                                                  |
| [Macros recipes](/Macros_recipes/es "Macros recipes/es") [How to install macros](/How_to_install_macros/es "How to install macros/es") [How to customize toolbars](/Customize_Toolbars/es "Customize Toolbars/es")                                                                                                                                                                      |
| Versión Macro                                                                                                                                                                                                                                                                                                                                                                           |
| 0.1                                                                                                                                                                                                                                                                                                                                                                                     |
| Fecha última modificación                                                                                                                                                                                                                                                                                                                                                               |
| 2011-09-24                                                                                                                                                                                                                                                                                                                                                                              |
| Versión(es) FreeCAD                                                                                                                                                                                                                                                                                                                                                                     |
| All                                                                                                                                                                                                                                                                                                                                                                                     |
| Acceso directo predeterminado                                                                                                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                                                                                                                  |
| Ver también                                                                                                                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                                         |

## Descripción

A veces los arcos se transforman en BSplines, por ejemplo cuando se les aplica operaciones de escala. Esta macro vuelve a crear arcos válidos a partir de ellos. Útil antes de exportar a DXF

## Script

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_HealArcs/es&oldid=1148883>"
