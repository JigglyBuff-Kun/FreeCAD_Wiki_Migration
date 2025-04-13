---
title: hinge
---

|                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hinge Simul                                                                                                                                                                                                                                                                                                |
| Descrizione                                                                                                                                                                                                                                                                                                |
| Simula il movimento di una cerniera. Versione macro: 1.0 Ultima modifica: 2014-09-09 Versione FreeCAD: All Download: The File [20140908b_Hinge-1.fcstd](http://forum.freecadweb.org/download/file.php?id=7628) [ToolBar Icon](https://www.freecadweb.org/wiki/images/a/a8/Macro_hinge.png) Autore: Mario52 |
| Autore                                                                                                                                                                                                                                                                                                     |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                    |
| Download                                                                                                                                                                                                                                                                                                   |
| The File [20140908b_Hinge-1.fcstd](http://forum.freecadweb.org/download/file.php?id=7628) [ToolBar Icon](https://www.freecadweb.org/wiki/images/a/a8/Macro_hinge.png)                                                                                                                                      |
| Link                                                                                                                                                                                                                                                                                                       |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                   |
| Versione macro                                                                                                                                                                                                                                                                                             |
| 1.0                                                                                                                                                                                                                                                                                                        |
| Data ultima modifica                                                                                                                                                                                                                                                                                       |
| 2014-09-09                                                                                                                                                                                                                                                                                                 |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                        |
| All                                                                                                                                                                                                                                                                                                        |
| Scorciatoia                                                                                                                                                                                                                                                                                                |
| _Nessuna_                                                                                                                                                                                                                                                                                                  |
| Vedere anche                                                                                                                                                                                                                                                                                               |
| _Nessuno_                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                            |

## Descrizione

Simula il movimento di una cerniera di una porta.

![](/images/Hing_00.gif)

## Uso

Per eseguire la macro aprire in FreeCAD i 2 file (20140908b_Hinge-1.FCMacro e 20140908b_Hinge-1.FCStd) in 2 schermi (Menu: Finestre -> Affiancate) poi fare clic nella finestra e nella macro fare clic su F6 (avvia macro), oppure avviare la macro con ![](/images/Std_DlgMacroExecuteDirect.svg)

![](/images/Hing_01.png)

## Il File

[20140908b_Hinge-1.fcstd](http://forum.freecadweb.org/download/file.php?id=7628)

## Lo Script

ToolBar Icon ![](/images/Macro_hinge.png)

**20140908b_Hinge-1.FCMacro**

```
import FreeCAD, FreeCADGui, Draft, Part
from FreeCAD import Base
import time

ii = 0
pas = 0
for ii2 in range(180):
    if pas == 0:
        if ii > 90:
            pas = 1
        ii += 5
    else:
        if ii < 1:
            pas = 0
        ii -= 5

    App.getDocument("_0140908b_Hinge_1").Fusion.Placement=App.Placement(App.Vector(0,0,0), App.Rotation(App.Vector(0,0,1),ii), App.Vector(44.4,6.9,0))
    App.Console.PrintMessage(str(ii2)+"  " + str(ii)+"  " + str(pas) +"\n")
    Gui.updateGui()
    time.sleep(0) #modify the time here
```

## Link

La pagina della discussione: [Struggling with LinearPattern (again)](http://forum.freecadweb.org/viewtopic.php?f=3&t=7606&p=62086#p62086)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_hinge/it&oldid=809672>"
