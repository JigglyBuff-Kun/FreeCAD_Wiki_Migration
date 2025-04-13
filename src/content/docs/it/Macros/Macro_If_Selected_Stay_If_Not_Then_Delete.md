---
title: If Selected Stay If Not Then Delete
---

|                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro If Selected Stay If Not Then Delete                                                                                                                                                                                                                                                                                                                                                                                  |
| Descrizione                                                                                                                                                                                                                                                                                                                                                                                                                |
| Questa macro cancella gli obietti non selezionati. Versione macro: 00.03b Ultima modifica: 2023-09-24 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/62/Macro_If_Selected_Stay_If_Not_Then_Delete.png) Autore: Mario52                                                                                                                                                            |
| Autore                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                    |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/62/Macro_If_Selected_Stay_If_Not_Then_Delete.png)                                                                                                                                                                                                                                                                                                                  |
| Link                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                                                                                                                   |
| Versione macro                                                                                                                                                                                                                                                                                                                                                                                                             |
| 00.03b                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Data ultima modifica                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2023-09-24                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                        |
| All                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Scorciatoia                                                                                                                                                                                                                                                                                                                                                                                                                |
| _Nessuna_                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Vedere anche                                                                                                                                                                                                                                                                                                                                                                                                               |
| [Macro Toggle Visibility2 1-2](/Macro_Toggle_Visibility2_1-2/it "Macro Toggle Visibility2 1-2/it") [Macro Toggle Visibility2 2-2](/Macro_Toggle_Visibility2_2-2/it "Macro Toggle Visibility2 2-2/it") [Macro_Toggle_Visibility](/Macro_Toggle_Visibility/it "Macro Toggle Visibility/it") [Macro HiddenAlls](/Macro_HiddenAlls/it "Macro HiddenAlls/it") [Macro_VisibleAlls](/Macro_VisibleAlls/it "Macro VisibleAlls/it") |
|                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Descrizione

Questa macro cancella gli obietti non selezionati.

## Script

Icona barra strumenti
![](/images/Macro_If_Selected_Stay_If_Not_Then_Delete.png)

**Macro_If_Selected_Stay_If_Not_Then_Delete.FCMacro**

```
import FreeCAD
import Draft
# 16/06/2016, 21/02/2018, 22/09/2023, 24/09/2023
# Macro_SelectVisible series
__title__   = "Macro_If_Selected_Stay_If_Not_Then_Delete"
__author__  = "Mario52"
__url__     = "http://www.freecadweb.org/index-fr.html"
__version__ = "00.03b"
__date__    = "24/09/2023"

App = FreeCAD
try:
    for ShapeNameObj in FreeCAD.ActiveDocument.Objects:
        if str(ShapeNameObj) == "<group object>":
            if len(Draft.get_group_contents(ShapeNameObj)) == 0:
                App.ActiveDocument.removeObject(ShapeNameObj.Name)        # remove group not selecteds
        else:
            if Gui.Selection.isSelected(ShapeNameObj):
                None
            else:
                App.ActiveDocument.removeObject(ShapeNameObj.Name)        # remove objects not selecteds

    for ShapeNameGroup in FreeCAD.ActiveDocument.Objects:
        if (str(ShapeNameGroup) == "<group object>"):
            if len(Draft.get_group_contents(ShapeNameGroup)) == 0:
                App.ActiveDocument.removeObject(ShapeNameGroup.Name)      # remove group emptied
except Exception:
    None
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_If_Selected_Stay_If_Not_Then_Delete/it&oldid=1305272>"
