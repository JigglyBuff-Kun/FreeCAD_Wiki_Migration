---
title: Makrodefinicja Wyrównaj ścianę obiektu do widoku
---

|                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Makrodefinicja: Wyrównaj ścianę obiektu do widoku                                                                                                                                                                                                            |
| Opis                                                                                                                                                                                                                                                         |
| To makro kieruje ścianę obiektu na stronę aktywnego widoku. Macro version: 0.1 Last modified: 2015-01-16 FreeCAD version: Wszystkie Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/d/d5/Macro_Align_Face_Object_to_View.png) Autor: Mario52 |
| Autor                                                                                                                                                                                                                                                        |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                      |
| Do pobrania                                                                                                                                                                                                                                                  |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/d/d5/Macro_Align_Face_Object_to_View.png)                                                                                                                                                              |
| Odnośniki                                                                                                                                                                                                                                                    |
| [Przepisy na makropolecenia](/Macros_recipes/pl "Macros recipes/pl") [Jak zainstalować makrodefinicje](/How_to_install_macros/pl "How to install macros/pl") [Dostosowanie pasków narzędzi](/Customize_Toolbars/pl "Customize Toolbars/pl")                  |
| Wersja Makrodefinicji                                                                                                                                                                                                                                        |
| 0.1                                                                                                                                                                                                                                                          |
| Data zmian                                                                                                                                                                                                                                                   |
| 2015-01-16                                                                                                                                                                                                                                                   |
| Wersja FreeCAD                                                                                                                                                                                                                                               |
| Wszystkie                                                                                                                                                                                                                                                    |
| Domyślny skrót                                                                                                                                                                                                                                               |
| _Brak_                                                                                                                                                                                                                                                       |
| Zobacz również                                                                                                                                                                                                                                               |
| [FCCamera](/File:FCCamera_00.png "FCCamera") [Makro FCCamera](/Macro_FCCamera/pl "Macro FCCamera/pl")                                                                                                                                                        |
|                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                              |

## Opis

To makro kieruje ścianę obiektu na stronę aktywnego widoku.
W przypadku czoła otworu wiertniczego _(lub wewnętrznego lub cylindrycznego)_ czoło wiertła skierowane jest w stronę ekranu.

## Użycie

- Wybierz swój obiekt i uruchom makrodefinicję,
- Twój obiekt będzie stał przed kamerą.

## Skrypt

Ikonka paska narzędzi
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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Align_Face_Object_to_View/pl&oldid=1086143>"
