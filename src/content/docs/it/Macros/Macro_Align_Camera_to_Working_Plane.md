---
title: Allinea la camera al piano di lavoro
---

|                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Allinea la camera al piano di lavoro                                                                                                                                                                                                                                                                                      |
| Descrizione                                                                                                                                                                                                                                                                                                               |
| Questa macro allinea la fotocamera al corrente [Piano di lavoro di Draft](/Draft_SelectPlane/it "Draft SelectPlane/it") Versione macro: 0.1 Ultima modifica: 2017-03-16 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fd/Macro_Align_Camera_to_Working_Plane.png) Autore: yorik |
| Autore                                                                                                                                                                                                                                                                                                                    |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                         |
| Download                                                                                                                                                                                                                                                                                                                  |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fd/Macro_Align_Camera_to_Working_Plane.png)                                                                                                                                                                                                                       |
| Link                                                                                                                                                                                                                                                                                                                      |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                  |
| Versione macro                                                                                                                                                                                                                                                                                                            |
| 0.1                                                                                                                                                                                                                                                                                                                       |
| Data ultima modifica                                                                                                                                                                                                                                                                                                      |
| 2017-03-16                                                                                                                                                                                                                                                                                                                |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                       |
| All                                                                                                                                                                                                                                                                                                                       |
| Scorciatoia                                                                                                                                                                                                                                                                                                               |
| _Nessuna_                                                                                                                                                                                                                                                                                                                 |
| Vedere anche                                                                                                                                                                                                                                                                                                              |
| [Macro Align Working Plane to Camera](/Macro_Align_Working_Plane_to_Camera/it "Macro Align Working Plane to Camera/it")                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                           |

## Descrizione

Questa macro allinea la fotocamera al corrente [Piano di lavoro di Draft](/Draft_SelectPlane/it "Draft SelectPlane/it")

## Utilizzo

- Impostare il [Piano di lavoro di Draft](/Draft_SelectPlane/it "Draft SelectPlane/it") desiderato
- Eseguire la macro

## Script

Icona barra strumenti
![](/images/Macro_Align_Camera_to_Working_Plane.png)

**Macro_Align_Camera_to_Working_Plane.FCMacro**

```
import FreeCAD,FreeCADGui
c = FreeCADGui.ActiveDocument.ActiveView.getCameraNode()
r = FreeCAD.DraftWorkingPlane.getRotation().Rotation.Q
c.orientation.setValue(r)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Align_Camera_to_Working_Plane/it&oldid=1304978>"
