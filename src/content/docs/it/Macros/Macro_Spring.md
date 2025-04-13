---
title: Spring
---

|                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Spring Simul                                                                                                                                                                                                                                                                                  |
| Descrizione                                                                                                                                                                                                                                                                                   |
| Simula il movimento di una molla. Versione macro: 1.0 Ultima modifica: 2014-09-29 Versione FreeCAD: All Download: The file [Spring.FCStd](http://forum.freecadweb.org/download/file.php?id=7679) [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2d/Macro_Spring.png) Autore: Mario52 |
| Autore                                                                                                                                                                                                                                                                                        |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                       |
| Download                                                                                                                                                                                                                                                                                      |
| The file [Spring.FCStd](http://forum.freecadweb.org/download/file.php?id=7679) [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2d/Macro_Spring.png)                                                                                                                                   |
| Link                                                                                                                                                                                                                                                                                          |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                      |
| Versione macro                                                                                                                                                                                                                                                                                |
| 1.0                                                                                                                                                                                                                                                                                           |
| Data ultima modifica                                                                                                                                                                                                                                                                          |
| 2014-09-29                                                                                                                                                                                                                                                                                    |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                           |
| All                                                                                                                                                                                                                                                                                           |
| Scorciatoia                                                                                                                                                                                                                                                                                   |
| _Nessuna_                                                                                                                                                                                                                                                                                     |
| Vedere anche                                                                                                                                                                                                                                                                                  |
| _Nessuno_                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                               |

## Descrizione

Simula la compressione e la distensione di una molla.

![](/images/Spring_00.gif)

## Uso

Per eseguire la macro aprire in FreeCAD i 2 file indicati sotto (Spring.FCMacro e Spring.FCStd) con 2 schermi (Menu: Finestre → Affiancate) poi fare clic nella finestra e nella macro fare clic su F6 (avvia macro), oppure avviare la macro con ![](/images/Std_DlgMacroExecuteDirect.svg)

![](/images/Spring_02.png)

## Il File

[Spring.FCStd](http://forum.freecadweb.org/download/file.php?id=7679)

## Lo Script

ToolBar Icon ![](/images/Macro_Spring.png)

**Spring.FCMacro**

```
import FreeCAD, FreeCADGui, Draft, Part
from FreeCAD import Base
import time

ii = iib = FreeCAD.getDocument("Spring").getObject("Helix001").Pitch.Value
i = ib = FreeCAD.getDocument("Spring").getObject("Helix001").Height.Value

pas = 1

for ii2 in range(int(60)):
    if pas == 0:
        if ii > iib-1:
            pas = 1
        else:
            ii += 1
            i = (ii * 10)
    else:
        if ii < 2:
            pas = 0
        else:
            ii -= 1
            i = (ii * 10)

    FreeCAD.getDocument("Spring").getObject("Helix001").Pitch = ii
    FreeCAD.getDocument("Spring").getObject("Helix001").Height = i
    App.Console.PrintMessage(str(ii2)+"  " + str(ii)+"  " + str(i)+"  " + str(pas) +"\n")
    Gui.updateGui()
    time.sleep(0.1)
```

## Link

La pagina della discussione nel forum: [scripting animations](http://forum.freecadweb.org/viewtopic.php?f=22&t=7449#p62193)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Spring/it&oldid=710877>"
