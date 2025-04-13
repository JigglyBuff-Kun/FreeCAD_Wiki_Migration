---
title: Wire appiattita su piano da 3 punti
---

|                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wire appiattita su piano da 3 punti                                                                                                                                                                                                                     |
| Descrizione                                                                                                                                                                                                                                             |
| Appiattisce contorni non planari su un piano definito da 3 punti Versione macro: 1.0 Ultima modifica: 2016-02-06 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/1e/Macro_FlattenWire3Points.png) Autore: Yorik |
| Autore                                                                                                                                                                                                                                                  |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                       |
| Download                                                                                                                                                                                                                                                |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/1e/Macro_FlattenWire3Points.png)                                                                                                                                                                |
| Link                                                                                                                                                                                                                                                    |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                |
| Versione macro                                                                                                                                                                                                                                          |
| 1.0                                                                                                                                                                                                                                                     |
| Data ultima modifica                                                                                                                                                                                                                                    |
| 2016-02-06                                                                                                                                                                                                                                              |
| Versioni di FreeCAD                                                                                                                                                                                                                                     |
| All                                                                                                                                                                                                                                                     |
| Scorciatoia                                                                                                                                                                                                                                             |
| _Nessuna_                                                                                                                                                                                                                                               |
| Vedere anche                                                                                                                                                                                                                                            |
| _Nessuno_                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                         |

## Descrizione

Questa macro appiattisce i contorni non planari su un piano definito da 3 punti.
Per utilizzare questa macro, selezionare primi 3 vertici da una unica [polilinea di Draft](/Draft_Wire/it "Draft Wire/it").

## Script

Icona barra strumenti ![](/images/Macro_FlattenWire3Points.png)

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FlattenWire3Points/it&oldid=1186496>"
