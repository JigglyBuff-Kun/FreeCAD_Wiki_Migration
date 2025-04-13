---
title: Allinea l'oggetto alla vista
---

|                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Alinea l'obietto su la vista                                                                                                                                                                                                                               |
| Descrizione                                                                                                                                                                                                                                                |
| Questa macro allinea l'oggetto selezionato alla vista corrente. Versione macro: 0.1 Ultima modifica: 2015-01-16 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/f4/Macro_Align_Object_to_View.png) Autore: Mario52 |
| Autore                                                                                                                                                                                                                                                     |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                    |
| Download                                                                                                                                                                                                                                                   |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/f4/Macro_Align_Object_to_View.png)                                                                                                                                                                 |
| Link                                                                                                                                                                                                                                                       |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                   |
| Versione macro                                                                                                                                                                                                                                             |
| 0.1                                                                                                                                                                                                                                                        |
| Data ultima modifica                                                                                                                                                                                                                                       |
| 2015-01-16                                                                                                                                                                                                                                                 |
| Versioni di FreeCAD                                                                                                                                                                                                                                        |
| All                                                                                                                                                                                                                                                        |
| Scorciatoia                                                                                                                                                                                                                                                |
| _Nessuna_                                                                                                                                                                                                                                                  |
| Vedere anche                                                                                                                                                                                                                                               |
| [FCCamera](/File:FCCamera_00.png "FCCamera") [Macro_FCCamera](/Macro_FCCamera/it "Macro FCCamera/it")                                                                                                                                                      |
|                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                            |

## Descrizione

Questa macro posiziona e allinea l'oggetto selezionato alla Vista corrente.

## Utilizzo

- Orientare la visualizzazione, selezionare l'oggetto ed eseguire la macro
- L'oggetto assume il posizionamento delle coordinate della camera

## Script

ToolBar Icon ![](/images/Macro_Align_Object_to_View.png)

**Macro_Align_Object_to_View.FCMacro**

```
# This macro place your object selected to the position ActiveView (camera)
# extact FCCamera
# 16/01/2015

__title__  ="Align Object to View"
__author__ = "Mario52"
__date__   = "16/01/2015"
__version__= "0.1"

import pivy
from pivy import coin

sel = FreeCADGui.Selection.getSelection()
Nameelement = sel[0].Name
App.Console.PrintMessage(str(Nameelement)+"\n")

pl = FreeCAD.Placement()
pl.Rotation = FreeCADGui.ActiveDocument.ActiveView.getCameraOrientation()
pl.Base = FreeCAD.Vector(0.0,0.0,0.0)

App.ActiveDocument.getObject(Nameelement).Placement=pl
```

## Esempio

- ![L'oggetto nella sua posizione XY originale.](/images/Macro_Align_Object_to_View_01.png)

  L'oggetto nella sua posizione XY originale.

- ![Si può ruotare la vista con X? Y? Z? oppure usare la macro Rotate View per una rotazione di precisione.](/images/Macro_Align_Object_to_View_02.png)

  Si può ruotare la vista con X? Y? Z? oppure usare la macro Rotate View per una rotazione di precisione.

- [![Selezionare l'oggetto ed eseguire la macro (l'oggetto con la faccia rivolta verso lo schermo).](/images/Macro_Align_Object_to_View_03.png)](/File:Macro_Align_Object_to_View_03.png  "Selezionare l'oggetto ed eseguire la macro (l'oggetto con la faccia rivolta verso lo schermo).")

  Selezionare l'oggetto ed eseguire la macro (l'oggetto con la faccia rivolta verso lo schermo).

- [![L'oggetto è visualizzato nel piano XY e nelle coordinate della sua nuova posizione (Placement e Angle)](/images/Macro_Align_Object_to_View_04.png)](/File:Macro_Align_Object_to_View_04.png  "L'oggetto è visualizzato nel piano XY e nelle coordinate della sua nuova posizione (Placement e Angle)")

  L'oggetto è visualizzato nel piano XY e nelle coordinate della sua nuova posizione (Placement e Angle)

## Crediti

Grazie a rentlau_64 per il codice semplificato

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Align_Object_to_View/it&oldid=1186344>"
