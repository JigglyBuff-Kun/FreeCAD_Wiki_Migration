---
title: Scharnier
---

|                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Simuliert Scharnierbewegung                                                                                                                                                                                                                                                                                      |
| Beschreibung                                                                                                                                                                                                                                                                                                     |
| Scharnier Simulation. Versionsmakro : 1.0 Datum der letzten Änderung : 2014-09-09 FreeCAD version : Alle Herunterladen : Die Datei [20140908b_Hinge-1.fcstd](http://forum.freecadweb.org/download/file.php?id=7628) [ToolBar Symbol](https://www.freecadweb.org/wiki/images/a/a8/Macro_hinge.png) Autor: Mario52 |
| Autor                                                                                                                                                                                                                                                                                                            |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                          |
| Herunterladen                                                                                                                                                                                                                                                                                                    |
| Die Datei [20140908b_Hinge-1.fcstd](http://forum.freecadweb.org/download/file.php?id=7628) [ToolBar Symbol](https://www.freecadweb.org/wiki/images/a/a8/Macro_hinge.png)                                                                                                                                         |
| Links                                                                                                                                                                                                                                                                                                            |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                                                     |
| Macro-Version                                                                                                                                                                                                                                                                                                    |
| 1.0                                                                                                                                                                                                                                                                                                              |
| Datum der letzten Änderung                                                                                                                                                                                                                                                                                       |
| 2014-09-09                                                                                                                                                                                                                                                                                                       |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                                               |
| Alle                                                                                                                                                                                                                                                                                                             |
| Standardverknüpfung                                                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                                                           |
| Siehe auch                                                                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                  |

## Beschreibung

Simuliert Scharnierbewegung

![](/images/Hing_00.gif)

## Verwendet

Öffne die 2 Dateien (20140908b_Hinge-1.FCMacro und 20140908b_Hinge-1.FCStd) in FreeCAD mit 2 Bildschirmen (Menü: Fenster > Kacheln) und klicke in das Fenster und das Makro und klicke F6 (Makro debuggen), um das Makro auszuführen oder führe das Makro mit ![](/images/Std_DlgMacroExecuteDirect.svg) aus

![](/images/Hing_01.png)

## Die Datei

[20140908b_Hinge-1.fcstd](http://forum.freecadweb.org/download/file.php?id=7628)

## Skript

ToolBar Icon ![](/images/Macro_hinge.png)

**20140908b_Hinge-1.FCMacro**

```
import FreeCAD, FreeCADGui, Draft, Part
from FreeCAD import Base
import time

ii = 0
pas = 0
for ii2 in range(180):
    if pas == 0:
        if ii > 90:
            pas = 1
        ii += 5
    else:
        if ii < 1:
            pas = 0
        ii -= 5

    App.getDocument("_0140908b_Hinge_1").Fusion.Placement=App.Placement(App.Vector(0,0,0), App.Rotation(App.Vector(0,0,1),ii), App.Vector(44.4,6.9,0))
    App.Console.PrintMessage(str(ii2)+"  " + str(ii)+"  " + str(pas) +"\n")
    Gui.updateGui()
    time.sleep(0) #modify the time here
```

## Verweis

Die Diskussionsseite [Probleme mit LinearMustern (wiederholt)](http://forum.freecadweb.org/viewtopic.php?f=3&t=7606&p=62086#p62086)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_hinge/de&oldid=823949>"
