---
title: FlattenWire3Points
---

|                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FlattenWire3Points                                                                                                                                                                                                                                                                                               |
| Description                                                                                                                                                                                                                                                                                                      |
| Cette macro aplatit les fils (Wire) du projet qui ne sont pas plan à la médiane de leurs coordonnées z Version macro : 1.0 Date dernière modification : 2016-02-06 Version FreeCAD : All Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/1e/Macro_FlattenWire3Points.png) Auteur: Yorik |
| Auteur                                                                                                                                                                                                                                                                                                           |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                |
| Téléchargement                                                                                                                                                                                                                                                                                                   |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/1e/Macro_FlattenWire3Points.png)                                                                                                                                                                                                                         |
| Liens                                                                                                                                                                                                                                                                                                            |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                 |
| Version Macro                                                                                                                                                                                                                                                                                                    |
| 1.0                                                                                                                                                                                                                                                                                                              |
| Dernière modification                                                                                                                                                                                                                                                                                            |
| 2016-02-06                                                                                                                                                                                                                                                                                                       |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                               |
| All                                                                                                                                                                                                                                                                                                              |
| Raccourci clavier                                                                                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                                                                                           |
| Voir aussi                                                                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                  |

## Description

Cette macro aplatit les fils qui ne sont pas planaires sur un plan défini par 3 points. Pour utiliser cette macro, sélectionnez les 3 premiers sommets d'un seul [Draft Wire](/Draft_Wire/fr "Draft Wire/fr").

## Script

Icône de la barre d'outils ![](/images/Macro_FlattenWire3Points.png)

**Macro_FlattenWire3Points.FCMacro**

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FlattenWire3Points/fr&oldid=915260>"
