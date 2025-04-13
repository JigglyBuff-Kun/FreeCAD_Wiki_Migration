---
title: Draw 2D Function
---

|                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draw 2D Function                                                                                                                                                                                                                                            |
| Description                                                                                                                                                                                                                                                 |
| Use it to draw a function described by a "equation" [z=F(x)] (Z-X plane) Macro version: 1.0 Last modified: 2011-08-01 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/3/36/Macro_Draw_2D_Function.png) Author: unknown |
| Author                                                                                                                                                                                                                                                      |
| [unknown](/index.php?title=User:Unknown&action=edit&redlink=1 "User:Unknown (page does not exist)")                                                                                                                                                         |
| Download                                                                                                                                                                                                                                                    |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/3/36/Macro_Draw_2D_Function.png)                                                                                                                                                                      |
| Links                                                                                                                                                                                                                                                       |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                            |
| Macro Version                                                                                                                                                                                                                                               |
| 1.0                                                                                                                                                                                                                                                         |
| Date last modified                                                                                                                                                                                                                                          |
| 2011-08-01                                                                                                                                                                                                                                                  |
| FreeCAD Version(s)                                                                                                                                                                                                                                          |
| All                                                                                                                                                                                                                                                         |
| Default shortcut                                                                                                                                                                                                                                            |
| _None_                                                                                                                                                                                                                                                      |
| See also                                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                             |

## Description

Use it to draw a function described by a "equation" [z=F(x)] (Z-X plane) The example done here generate a parabol.
Has no dialog. Needs to be defined:

: F = variable used in the function,
: X = initial value of x,
: Nb = Number of step,
: Z = function express with x
: ZZ = function express with xx

## Script

ToolBar Icon ![](/src/assets/images/Macro_Draw_2D_Function.png)

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Draw_2D_Function/en&oldid=692167>"
