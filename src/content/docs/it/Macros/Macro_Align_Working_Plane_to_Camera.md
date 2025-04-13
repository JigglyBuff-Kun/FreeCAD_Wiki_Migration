---
title: Allinea il piano di lavoro alla camera
---

|                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Allinea il piano di lavoro alla camera                                                                                                                                                                                                                                                                                                      |
| Descrizione                                                                                                                                                                                                                                                                                                                                 |
| Questa macro sposta il corrente [Piano di lavoro di Draft](/Draft_SelectPlane/it "Draft SelectPlane/it") al centro della vista corrente Versione macro: 1.0 Ultima modifica: 2017-05-10 Versione FreeCAD: Tutte Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/01/Macro_Align_Working_Plane_to_Camera.png) Autore: yorik |
| Autore                                                                                                                                                                                                                                                                                                                                      |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                           |
| Download                                                                                                                                                                                                                                                                                                                                    |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/01/Macro_Align_Working_Plane_to_Camera.png)                                                                                                                                                                                                                                         |
| Link                                                                                                                                                                                                                                                                                                                                        |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                                    |
| Versione macro                                                                                                                                                                                                                                                                                                                              |
| 1.0                                                                                                                                                                                                                                                                                                                                         |
| Data ultima modifica                                                                                                                                                                                                                                                                                                                        |
| 2017-05-10                                                                                                                                                                                                                                                                                                                                  |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                                         |
| Tutte                                                                                                                                                                                                                                                                                                                                       |
| Scorciatoia                                                                                                                                                                                                                                                                                                                                 |
| _Nessuna_                                                                                                                                                                                                                                                                                                                                   |
| Vedere anche                                                                                                                                                                                                                                                                                                                                |
| [Macro Align Camera to Working Plane](/Macro_Align_Camera_to_Working_Plane/it "Macro Align Camera to Working Plane/it") [Macro Align Camera to Working Plane](/File:Macro_Align_Camera_to_Working_Plane.png "Macro Align Camera to Working Plane")                                                                                          |
|                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                             |

## Descrizione

Questa macro sposta il corrente [Piano di lavoro di Draft](/Draft_SelectPlane/it "Draft SelectPlane/it") al centro della vista corrente. È utile quando si lavora abbastanza lontano dal centro della griglia.

## Utilizzo

- Spostare la vista nella zona in cui si desidera guardare
- Eseguire la macro

## Script

Icona barra strumenti
![](/images/Macro_Align_Working_Plane_to_Camera.png)

**Macro_Align_Working_Plane_to_Camera.FCMacro**

```
import FreeCAD,FreeCADGui
cam = FreeCAD.Vector(FreeCADGui.ActiveDocument.ActiveView.getCameraNode().position.getValue().getValue())
pos = FreeCAD.DraftWorkingPlane.projectPoint(cam)
FreeCAD.DraftWorkingPlane.position = pos
FreeCADGui.Snapper.setGrid()
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Align_Working_Plane_to_Camera/it&oldid=1304998>"
