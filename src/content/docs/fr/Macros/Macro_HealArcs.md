---
title: HealArcs
---

|                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HealArcs                                                                                                                                                                                                                                                                                                                                                                                                 |
| Description                                                                                                                                                                                                                                                                                                                                                                                              |
| Parfois les arcs sont transformés en BSplines, par exemple, lorsqu'une opération d'échelle leurs ont été appliquées. Cette macro recrée des arcs valides. Utile avant l'exportation vers un fichier .dxf Version macro : 0.1 Date dernière modification : 2011-09-24 Version FreeCAD : All Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/5/5a/Macro_HealArcs.png) Auteur: Yorik |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                                                                        |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                           |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/5/5a/Macro_HealArcs.png)                                                                                                                                                                                                                                                                                                                           |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                         |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.1                                                                                                                                                                                                                                                                                                                                                                                                      |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                    |
| 2011-09-24                                                                                                                                                                                                                                                                                                                                                                                               |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                       |
| All                                                                                                                                                                                                                                                                                                                                                                                                      |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                   |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                                          |

## Description

Parfois les arcs sont transformés en BSplines, par exemple, lorsqu'une opération d'échelle leurs ont été appliquées. Cette macro recrée des arcs valides. Utile avant l'exportation vers un fichier .dxf

## Script

Icône de la barre d'outils ![](/images/Macro_HealArcs.png)
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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_HealArcs/fr&oldid=1148874>"
