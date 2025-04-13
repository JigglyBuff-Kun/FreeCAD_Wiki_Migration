---
title: Cura gli archi
---

|                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cura gli archi                                                                                                                                                                                                                                                                                                                                                                    |
| Descrizione                                                                                                                                                                                                                                                                                                                                                                       |
| Talvolta gli archi vengono trasformati in BSpline, per esempio quando si applicano ad essi delle operazioni di scala. Questa macro ricrea gli archi dalle BSpline. È utile prima di esportare in dxf Versione macro: 0.1 Ultima modifica: 2011-09-24 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/5/5a/Macro_HealArcs.png) Autore: Yorik |
| Autore                                                                                                                                                                                                                                                                                                                                                                            |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                                                 |
| Download                                                                                                                                                                                                                                                                                                                                                                          |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/5/5a/Macro_HealArcs.png)                                                                                                                                                                                                                                                                                                    |
| Link                                                                                                                                                                                                                                                                                                                                                                              |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                                                                          |
| Versione macro                                                                                                                                                                                                                                                                                                                                                                    |
| 0.1                                                                                                                                                                                                                                                                                                                                                                               |
| Data ultima modifica                                                                                                                                                                                                                                                                                                                                                              |
| 2011-09-24                                                                                                                                                                                                                                                                                                                                                                        |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                                                                               |
| All                                                                                                                                                                                                                                                                                                                                                                               |
| Scorciatoia                                                                                                                                                                                                                                                                                                                                                                       |
| _Nessuna_                                                                                                                                                                                                                                                                                                                                                                         |
| Vedere anche                                                                                                                                                                                                                                                                                                                                                                      |
| _Nessuno_                                                                                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                                                                                   |

## Descrizione

Talvolta gli archi vengono trasformati in BSpline, per esempio quando si applicano ad essi delle operazioni di scala. Questa macro ricrea gli archi dalle BSpline. È utile prima di esportare in dxf

## Script

Icona barra strumenti ![](/images/Macro_HealArcs.png)
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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_HealArcs/it&oldid=1186488>"
