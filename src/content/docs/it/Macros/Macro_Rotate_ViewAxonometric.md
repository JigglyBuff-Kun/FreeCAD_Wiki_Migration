---
title: Rotate ViewAxonometric
---

|                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Rotate ViewAxonometric                                                                                                                                                                                                                                                    |
| Descrizione                                                                                                                                                                                                                                                                     |
| Questa macro ruota la vista corrente in ViewAxonometric (come è: Y). Versione macro: 01.00 Ultima modifica: 2010-11-17 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2e/Macro_Rotate_View_with_Y_pointing_upwards_.png) Autore: Yorik |
| Autore                                                                                                                                                                                                                                                                          |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                               |
| Download                                                                                                                                                                                                                                                                        |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2e/Macro_Rotate_View_with_Y_pointing_upwards_.png)                                                                                                                                                                      |
| Link                                                                                                                                                                                                                                                                            |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                        |
| Versione macro                                                                                                                                                                                                                                                                  |
| 01.00                                                                                                                                                                                                                                                                           |
| Data ultima modifica                                                                                                                                                                                                                                                            |
| 2010-11-17                                                                                                                                                                                                                                                                      |
| Versioni di FreeCAD                                                                                                                                                                                                                                                             |
| All                                                                                                                                                                                                                                                                             |
| Scorciatoia                                                                                                                                                                                                                                                                     |
| _Nessuna_                                                                                                                                                                                                                                                                       |
| Vedere anche                                                                                                                                                                                                                                                                    |
| [Macro_Rotate_View](/Macro_Rotate_View "Macro Rotate View")                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                 |

## Descrizione

Questa macro ruota la vista corrente in ViewAxonometric (come è: Y).

Avete due opzioni:

- modo 1: vista assonometrica con Y rivolta verso l'alto ![vista assonometrica con Y rivolta verso l'alto](/images/Macro_Rotate_View_with_Y_pointing_upwards_.png) modalità 1
- modo 2: vista assonometrica con Z rivolta verso l'alto ![vista assonometrica con Z rivolta verso l'alto](/images/Macro_Rotate_View_with_Z_pointing_upwards_.png) modalità 2 (commento per l'uso)

## Utilizzo

Per utilizzare le due macro, copiare la prima macro e denominarla "**Macro_Rotate_ViewAxonometric_Y**" (modo 1) senza modificare il codice e utilizzare questa icona ![vista assonometrica con Y rivolta verso l'alto](/images/Macro_Rotate_View_with_Y_pointing_upwards_.png)

Copia la seconda macro e chiamala "**Macro_Rotate_ViewAxonometric_Z**" (modo 2) e:

commenta la linea

**11** _#rot.setValue(coin.SbVec3f(1,0,0),-math.pi/2) # Y pointing upwards (mode 1)_

e decommenta la linea

**12** _rot.setValue(coin.SbVec3f(0,0,1),math.pi/2) # Z pointing upwards (mode 2 uncomment for use)_ e usare questa icona ![axonometric view with Z pointing upwards](/images/Macro_Rotate_View_with_Z_pointing_upwards_.png)

## Script

- mode 1 : ToolBar Icon ![](/images/Macro_Rotate_View_with_Y_pointing_upwards_.png)
- mode 2 : ToolBar Icon ![](/images/Macro_Rotate_View_with_Z_pointing_upwards_.png) (uncomment for use)

**Macro_Rotate_ViewAxonometric.FCMacro**

```
import math
import pivy
from pivy import coin

Gui.activeDocument().activeView().viewAxonometric()
Gui.SendMsgToActiveView("ViewFit")

cam = Gui.ActiveDocument.ActiveView.getCameraNode()
rot = coin.SbRotation()

rot.setValue(coin.SbVec3f(1,0,0),-math.pi/2) # Y pointing upwards (mode 1)
#rot.setValue(coin.SbVec3f(0,0,1),math.pi/2) # Z pointing upwards (mode 2 uncomment for use)
nrot = cam.orientation.getValue() * rot
cam.orientation = nrot
Gui.SendMsgToActiveView("ViewFit")
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Rotate_ViewAxonometric/it&oldid=1350428>"
