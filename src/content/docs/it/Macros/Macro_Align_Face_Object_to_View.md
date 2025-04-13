---
title: Align Face Object to View
---

|                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Allinea la faccia dell'oggetto alla vista                                                                                                                                                                                                                            |
| Descrizione                                                                                                                                                                                                                                                          |
| Questa macro allinea la faccia dell'oggetto verso la Vista Attiva. Versione macro: 0.1 Ultima modifica: 2015-01-16 Versione FreeCAD: Tutte Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/d/d5/Macro_Align_Face_Object_to_View.png) Autore: Mario52 |
| Autore                                                                                                                                                                                                                                                               |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                              |
| Download                                                                                                                                                                                                                                                             |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/d/d5/Macro_Align_Face_Object_to_View.png)                                                                                                                                                                      |
| Link                                                                                                                                                                                                                                                                 |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                             |
| Versione macro                                                                                                                                                                                                                                                       |
| 0.1                                                                                                                                                                                                                                                                  |
| Data ultima modifica                                                                                                                                                                                                                                                 |
| 2015-01-16                                                                                                                                                                                                                                                           |
| Versioni di FreeCAD                                                                                                                                                                                                                                                  |
| Tutte                                                                                                                                                                                                                                                                |
| Scorciatoia                                                                                                                                                                                                                                                          |
| _Nessuna_                                                                                                                                                                                                                                                            |
| Vedere anche                                                                                                                                                                                                                                                         |
| [FCCamera](/File:FCCamera_00.png "FCCamera") [Macro_FCCamera](/Macro_FCCamera/it "Macro FCCamera/it")                                                                                                                                                                |
|                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                      |

## Descrizione

Questa macro orienta la faccia dell'oggetto verso la ActiveView (telecamera).
Nel caso della faccia di un foro (o di una faccia interna o di un cilindro) orienta la faccia della foratura verso lo schermo.

## Utilizzo

- Selezionare l'oggetto ed eseguire la macro
- L'oggetto viene orientato verso la telecamera

## Script

Icona barra strumenti
![](/images/Macro_Align_Face_Object_to_View.png)

**Macro_Align_Face_Object_to_View.FCMacro**

```
# This macro directs the face of the object on the side of the ActiveView (camera)
# extact FCCamera
# 16/01/2015

__title__="Macro_Align_Face_Object_to_View"
__author__ = "Mario52"

import pivy
from pivy import coin

try:
    v=Gui.Selection.getSelectionEx()[0].SubObjects[0].Surface.Axis    # to Axis
#    v = Gui.Selection.getSelectionEx()[0].SubObjects[0].normalAt(0,0) # normalAt
    r=App.Rotation(App.Vector(0,0,1),v)
    Gui.ActiveDocument.ActiveView.setCameraOrientation(r.Q)
except Exception:
    App.Console.PrintError("Select a face and run the macro"+"\n")
```

## Links

Original macro by wmayer [Looking for some helpful GUI-commands](http://forum.freecadweb.org/viewtopic.php?f=3&t=7029&p=56735&hilit=Shape.Face4#p56735)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Align_Face_Object_to_View/it&oldid=1491610>"
