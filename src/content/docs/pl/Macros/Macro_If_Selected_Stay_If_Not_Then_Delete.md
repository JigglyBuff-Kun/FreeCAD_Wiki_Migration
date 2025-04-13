---
title: Makrodefinicja Jeśli wybrane pozostaw, jeśli nie to usuń
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Makrodefinicja: Jeśli wybrane pozostaw, jeśli nie to usuń                                                                                                                                                                                                                                                                                                                                                                                    |
| Opis                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Makrodefinicja umożliwia usunięcie wszystkich niezaznaczonych obiektów. Macro version: 00.03b Last modified: 2023-09-24 FreeCAD version: wszystkie Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/62/Macro_If_Selected_Stay_If_Not_Then_Delete.png) Autor: Mario52                                                                                                                                                        |
| Autor                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                      |
| Do pobrania                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/62/Macro_If_Selected_Stay_If_Not_Then_Delete.png)                                                                                                                                                                                                                                                                                                                                    |
| Odnośniki                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Przepisy na makropolecenia](/Macros_recipes/pl "Macros recipes/pl") [Jak zainstalować makrodefinicje](/How_to_install_macros/pl "How to install macros/pl") [Dostosowanie pasków narzędzi](/Customize_Toolbars/pl "Customize Toolbars/pl")                                                                                                                                                                                                  |
| Wersja Makrodefinicji                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 00.03b                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Data zmian                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2023-09-24                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Wersja FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                               |
| wszystkie                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Domyślny skrót                                                                                                                                                                                                                                                                                                                                                                                                                               |
| _Brak_                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Zobacz również                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [Makro przełącz widoczność 2 1-2](/Macro_Toggle_Visibility2_1-2/pl "Macro Toggle Visibility2 1-2/pl") [Makro przełącz widoczność 2 2-2](/Macro_Toggle_Visibility2_2-2/pl "Macro Toggle Visibility2 2-2/pl") [Makro przełącz widoczność](/Macro_Toggle_Visibility/pl "Macro Toggle Visibility/pl") [Makro ukryj wszystko](/Macro_HiddenAlls/pl "Macro HiddenAlls/pl") [Makro wyświetl wszystko](/Macro_VisibleAlls/pl "Macro VisibleAlls/pl") |
|                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## Opis

Makrodefinicja umożliwia usunięcie wszystkich niezaznaczonych obiektów.

## Tworzenie skryptów

Ikonka paska narzędzi
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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_If_Selected_Stay_If_Not_Then_Delete/pl&oldid=1428488>"
