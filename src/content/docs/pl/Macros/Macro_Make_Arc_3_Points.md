---
title: Makrodefinicja Utwórz łuk przez 3 punkty
---

|                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Make Arc 3 Points                                                                                                                                                                                                                      |
| Opis                                                                                                                                                                                                                                         |
| Tworzy łuk na podstawie trzech wybranych punktów. Macro version: 02.00 Last modified: 2019-07-29 FreeCAD version: wszystkie Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/92/Macro_Make_Arc_3_Points.png) Autor: Mario52 |
| Autor                                                                                                                                                                                                                                        |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                      |
| Do pobrania                                                                                                                                                                                                                                  |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/92/Macro_Make_Arc_3_Points.png)                                                                                                                                                      |
| Odnośniki                                                                                                                                                                                                                                    |
| [Przepisy na makropolecenia](/Macros_recipes/pl "Macros recipes/pl") [Jak zainstalować makrodefinicje](/How_to_install_macros/pl "How to install macros/pl") [Dostosowanie pasków narzędzi](/Customize_Toolbars/pl "Customize Toolbars/pl")  |
| Wersja Makrodefinicji                                                                                                                                                                                                                        |
| 02.00                                                                                                                                                                                                                                        |
| Data zmian                                                                                                                                                                                                                                   |
| 2019-07-29                                                                                                                                                                                                                                   |
| Wersja FreeCAD                                                                                                                                                                                                                               |
| wszystkie                                                                                                                                                                                                                                    |
| Domyślny skrót                                                                                                                                                                                                                               |
| _Brak_                                                                                                                                                                                                                                       |
| Zobacz również                                                                                                                                                                                                                               |
| _-_                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                              |

## Opis

Tworzy łuk na podstawie trzech wybranych punktów.

## Użycie

Uruchom makrodefinicję, wybierz trzy punkty, łuk zostanie utworzony, a współrzędne i długość łuku zostaną wyświetlone w oknie widoku raportu.

_(Nie jest wymagane przytrzymanie klawisza Ctrl)_

## Skrypt

Ikonka paska narzędzi ![](/images/Macro_Make_Arc_3_Points.png)

**Macro_Make_Arc_3_Points.FCMacro**

```
# -*- coding: utf-8 -*-
from FreeCAD import Base

__title__   = "Macro_Make_Arc_3_points"
__author__  = "Mario52"
__url__     = "http://www.freecadweb.org/index-fr.html"
__version__ = "00.02"
__date__    = "29/07/2019"

global selected; selected = []
App = FreeCAD

class SelObserver:
    print( "Create Arc to 3 points ...")
    def addSelection(self,doc,obj,sub,pnt):  # Selection
        global selected
        selected.append(pnt)
        if len(selected) == 1:
            print( "Point 1 : ",FreeCAD.Vector(selected[0]))
        elif len(selected) == 2:
            print( "Point 2 : ",FreeCAD.Vector(selected[1]))
        elif len(selected) == 3:
            print( "Point 3 : ",FreeCAD.Vector(selected[2]))
            try:
                C1 = Part.Arc(FreeCAD.Vector(selected[0]),FreeCAD.Vector(selected[1]),FreeCAD.Vector(selected[2]))
                S1 = Part.Shape([C1])
                W = Part.Wire(S1.Edges)
                Part.show(W)
                App.ActiveDocument.ActiveObject.Label   = "Arc_3_Points"
                print( "Length  : ",W.Length)
            except Exception:
                print( "Three points are collinear or bad selection")
            del selected[:]
            FreeCADGui.Selection.removeObserver(s)
            print( "End Make_Arc_3_Points")
            print( "_____________________")

s=SelObserver()
FreeCADGui.Selection.addObserver(s)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Make_Arc_3_Points/pl&oldid=1428951>"
