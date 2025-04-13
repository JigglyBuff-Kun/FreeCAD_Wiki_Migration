---
title: Makrodefinicja Wyrównaj obiekt do widoku
---

|                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Align Object to View                                                                                                                                                                                                                                      |
| Opis                                                                                                                                                                                                                                                            |
| Makrodefinicja ta ustawia wybrany obiekt względem bieżącego widoku. Macro version: 0.1 Last modified: 2015-01-16 FreeCAD version: Wszystkie Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/f4/Macro_Align_Object_to_View.png) Autor: Mario52 |
| Autor                                                                                                                                                                                                                                                           |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                         |
| Do pobrania                                                                                                                                                                                                                                                     |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/f4/Macro_Align_Object_to_View.png)                                                                                                                                                                      |
| Odnośniki                                                                                                                                                                                                                                                       |
| [Przepisy na makropolecenia](/Macros_recipes/pl "Macros recipes/pl") [Jak zainstalować makrodefinicje](/How_to_install_macros/pl "How to install macros/pl") [Dostosowanie pasków narzędzi](/Customize_Toolbars/pl "Customize Toolbars/pl")                     |
| Wersja Makrodefinicji                                                                                                                                                                                                                                           |
| 0.1                                                                                                                                                                                                                                                             |
| Data zmian                                                                                                                                                                                                                                                      |
| 2015-01-16                                                                                                                                                                                                                                                      |
| Wersja FreeCAD                                                                                                                                                                                                                                                  |
| Wszystkie                                                                                                                                                                                                                                                       |
| Domyślny skrót                                                                                                                                                                                                                                                  |
| _Brak_                                                                                                                                                                                                                                                          |
| Zobacz również                                                                                                                                                                                                                                                  |
| [FCCamera](/File:FCCamera_00.png "FCCamera") [Makro FCCamera](/Macro_FCCamera/pl "Macro FCCamera/pl")                                                                                                                                                           |
|                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                 |

## Opis

Makrodefinicja ta wyrównuje i pozycjonuje wybrany obiekt względem bieżącego widoku.

## Użycie

- Skieruj widok, wybierz obiekt i uruchom makrodefinicję.
- Twój obiekt zostanie umieszczony we wskazanym miejscu przez współrzędne ujęcia widoku _(kamery)_.

## Tworzenie skryptów

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

## Przykład

- ![Obiekt w pierwotnym położeniu XY.](/images/Macro_Align_Object_to_View_01.png)

  Obiekt w pierwotnym położeniu XY.

- ![Obrócić ekran X? Y? Z? lub użyj tej makrodefinicji Makro Rotate View do precyzyjnego obracania.](/images/Macro_Align_Object_to_View_02.png)

  Obrócić ekran X? Y? Z? lub użyj tej makrodefinicji [Makro Rotate View](/Macro_Rotate_View/pl "Macro Rotate View/pl") do precyzyjnego obracania.

- [![Wybierz obiekt i uruchom makro (obiekt zwrócony w stronę ekranu).](/images/Macro_Align_Object_to_View_03.png)](/File:Macro_Align_Object_to_View_03.png  "Wybierz obiekt i uruchom makro (obiekt zwrócony w stronę ekranu).")

  Wybierz obiekt i uruchom makro _(obiekt zwrócony w stronę ekranu)_.

- [![Twój obiekt powróci na płaszczyźnie XY i w nowej pozycji współrzędnych (Umiejscowienie, Kąt).](/images/Macro_Align_Object_to_View_04.png)](/File:Macro_Align_Object_to_View_04.png  "Twój obiekt powróci na płaszczyźnie XY i w nowej pozycji współrzędnych (Umiejscowienie, Kąt).")

  Twój obiekt powróci na płaszczyźnie XY i w nowej pozycji współrzędnych _(Umiejscowienie, Kąt)_.

## Uznania

Zbiorniki Uproszczony kod do rentlau_64

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Align_Object_to_View/pl&oldid=1327615>"
