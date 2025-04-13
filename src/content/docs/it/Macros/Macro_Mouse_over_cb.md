---
title: Mouse over cb
---

|                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Mouse over cb                                                                                                                                                                                                                                         |
| Descrizione                                                                                                                                                                                                                                                 |
| Questa macro mostra nella finestra report tutti gli elementi sotto il mouse. Versione macro: 00.00 Ultima modifica: 2016-12-13 Versione FreeCAD: All Download: [ToolBar Icon](https://wiki.freecad.org/images/5/55/Macro_Mouse_over_cb.png) Autore: Chris_G |
| Autore                                                                                                                                                                                                                                                      |
| [Chris_G](/index.php?title=User:Chris_G&action=edit&redlink=1 "User:Chris G (page does not exist)")                                                                                                                                                         |
| Download                                                                                                                                                                                                                                                    |
| [ToolBar Icon](https://wiki.freecad.org/images/5/55/Macro_Mouse_over_cb.png)                                                                                                                                                                                |
| Link                                                                                                                                                                                                                                                        |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                    |
| Versione macro                                                                                                                                                                                                                                              |
| 00.00                                                                                                                                                                                                                                                       |
| Data ultima modifica                                                                                                                                                                                                                                        |
| 2016-12-13                                                                                                                                                                                                                                                  |
| Versioni di FreeCAD                                                                                                                                                                                                                                         |
| All                                                                                                                                                                                                                                                         |
| Scorciatoia                                                                                                                                                                                                                                                 |
| _Nessuna_                                                                                                                                                                                                                                                   |
| Vedere anche                                                                                                                                                                                                                                                |
| [Macro FC element selector](/Macro_FC_element_selector/it "Macro FC element selector/it")                                                                                                                                                                   |
|                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                             |

## Descrizione

Questa macro mostra nella finestra report tutti gli elementi sotto il mouse (verranno visualizzati anche tutti gli elementi coperti da altri elementi).

## Utilizzo

Lancia la macro, la macro sta residente in memoria

## Codice

Icona della barra strumenti ![](/images/Macro_Mouse_over_cb.png)

**Macro_Mouse_over_cb.FCMacro**

```
from pivy import coin
import FreeCADGui

def mouse_over_cb( event_callback):
    event = event_callback.getEvent()
    pos = event.getPosition().getValue()
    listObjects = FreeCADGui.ActiveDocument.ActiveView.getObjectsInfo((int(pos[0]),int(pos[1])))
    obj = []
    if listObjects:
        FreeCAD.Console.PrintMessage("\n *** Objects under mouse pointer ***")
        for o in listObjects:
            label = str(o["Object"])
            if not label in obj:
                obj.append(label)
        FreeCAD.Console.PrintMessage("\n"+str(obj))

view = FreeCADGui.ActiveDocument.ActiveView

mouse_over = view.addEventCallbackPivy( coin.SoLocation2Event.getClassTypeId(), mouse_over_cb )

# to remove Callback :
#view.removeEventCallbackPivy( coin.SoLocation2Event.getClassTypeId(), mouse_over_cb)
```

## Elenco

La discussione sul foro [finding/selecting all elements below cursor](https://forum.freecadweb.org/viewtopic.php?f=10&t=19072)

Altra similare macro [Selecting internal faces of a pressure vessel](https://forum.freecadweb.org/viewtopic.php?f=18&t=12381&p=151950#p151950) (carica il file [FC_element_selector_v1p1p1.py](https://forum.freecadweb.org/download/file.php?id=31041))

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Mouse_over_cb/it&oldid=1350300>"
