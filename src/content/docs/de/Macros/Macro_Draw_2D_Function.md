---
title: Draw 2D Function
---

|                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draw 2D Function                                                                                                                                                                                                                                                                                |
| Beschreibung                                                                                                                                                                                                                                                                                    |
| Zeichnen Sie eine durch eine "Gleichung" beschriebene Funktion [z = F (x)] (Z-X-Ebene). Versionsmakro : 1.0 Datum der letzten Änderung : 2011-08-01 FreeCAD version : All Herunterladen : [ToolBar Icon](https://www.freecadweb.org/wiki/images/3/36/Macro_Draw_2D_Function.png) Autor: unknown |
| Autor                                                                                                                                                                                                                                                                                           |
| [unknown](/index.php?title=User:Unknown&action=edit&redlink=1 "User:Unknown (page does not exist)")                                                                                                                                                                                             |
| Herunterladen                                                                                                                                                                                                                                                                                   |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/3/36/Macro_Draw_2D_Function.png)                                                                                                                                                                                                          |
| Links                                                                                                                                                                                                                                                                                           |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                                    |
| Macro-Version                                                                                                                                                                                                                                                                                   |
| 1.0                                                                                                                                                                                                                                                                                             |
| Datum der letzten Änderung                                                                                                                                                                                                                                                                      |
| 2011-08-01                                                                                                                                                                                                                                                                                      |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                              |
| All                                                                                                                                                                                                                                                                                             |
| Standardverknüpfung                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                                          |
| Siehe auch                                                                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                 |

## Beschreibung

Verwenden Sie es, um eine Funktion zu zeichnen, die durch eine "Gleichung" beschrieben wird [z = F (x)] (Z-X-Ebene). Das hier ausgeführte Beispiel erzeugt einen Parabol.
Hat keinen Dialog Muss definiert werden:

: F = in der Funktion verwendete Variable,
: X = Anfangswert von x,
: Nb = Nummer der Stufe,
: Z = Funktion mit x ausdrücken
: ZZ = Funktion Express mit xx

## Skript

ToolBar Icon ![](/images/Macro_Draw_2D_Function.png)

**Macro_Draw_2D_Function.FCMacro**

```
# F = variable used in the function,
# X = initial value of x,
# Nb = Number of step,
# Z = function express with x
# ZZ = function express with xx

import FreeCAD, FreeCADGui, Part
import math
F=800
X=-500
Nb=10
Step=1000/Nb
Y=0
for I in range(Nb):
	XX=X+Step
 	Z=X*X/(4*F)
 	ZZ=XX*XX/(4*F)
 	if I==0:
 		print( "Le test est vrai !")
 		nomme=Part.makeLine((X,Y,Z),(XX,Y,ZZ))
 		WWire=Part.Wire([nomme])
 	else :
 		print( "Le test est 2 !")
 		nomme=Part.makeLine((X,Y,Z),(XX,Y,ZZ))
 		WWire=Part.Wire([WWire,nomme])
 	X=XX

Part.show(WWire)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Draw_2D_Function/de&oldid=692168>"
