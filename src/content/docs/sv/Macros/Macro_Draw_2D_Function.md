---
title: Draw 2D Function
---

|                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rita 2D-funktionen                                                                                                                                                                                                                                                                             |
| Beskrivning                                                                                                                                                                                                                                                                                    |
| Använd den för att rita en funktion som beskrivs av en "ekvation" [z=F(x)] (Z-X plane) Versions makro : 1.0 Datum senaste ändring : 2011-08-01 FreeCAD-versionen : All Ladda ner : [ToolBar Icon](https://www.freecadweb.org/wiki/images/3/36/Macro_Draw_2D_Function.png) Författare : unknown |
| Författare                                                                                                                                                                                                                                                                                     |
| [unknown](/index.php?title=User:Unknown&action=edit&redlink=1 "User:Unknown (page does not exist)")                                                                                                                                                                                            |
| Ladda ner                                                                                                                                                                                                                                                                                      |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/3/36/Macro_Draw_2D_Function.png)                                                                                                                                                                                                         |
| länkar                                                                                                                                                                                                                                                                                         |
| [Makros recept](/Macros_recipes/sv "Macros recipes/sv") [Så här installerar du makron](/How_to_install_macros/sv "How to install macros/sv") [Hur man anpassar verktygsfält](/Customize_Toolbars/sv "Customize Toolbars/sv")                                                                   |
| Makroversion                                                                                                                                                                                                                                                                                   |
| 1.0                                                                                                                                                                                                                                                                                            |
| Datum senaste ändring                                                                                                                                                                                                                                                                          |
| 2011-08-01                                                                                                                                                                                                                                                                                     |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                             |
| All                                                                                                                                                                                                                                                                                            |
| Standard genväg                                                                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                                                                         |
| Se även                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                |

## Beskrivning

Använd den för att rita en funktion som beskrivs av en "ekvation" [z=F(x)] (Z-X plan) Exemplet här genererar en parabol. Behöver definieras :

F=variabel som används i funktionen,

X=startvärde på x,

Nb= antal steg,

Z=funktionsuttryck med x

ZZ=funktionsuttryck med xx

## Manus

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Draw_2D_Function/sv&oldid=692163>"
