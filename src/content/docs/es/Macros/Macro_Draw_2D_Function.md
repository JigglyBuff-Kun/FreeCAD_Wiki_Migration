---
title: Draw 2D Function
---

|                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draw 2D Function                                                                                                                                                                                                                                                                        |
| Descripción                                                                                                                                                                                                                                                                             |
| Utilízala para dibujar una función descrita por una "ecuación" [z=F(x)] (Z-X plano) Versión macro : 1.0 Fecha última modificación : 2011-08-01 Versión FreeCAD : All Descargar : [ToolBar Icon](https://www.freecadweb.org/wiki/images/3/36/Macro_Draw_2D_Function.png) Autor : unknown |
| Autor                                                                                                                                                                                                                                                                                   |
| [unknown](/index.php?title=User:Unknown&action=edit&redlink=1 "User:Unknown (page does not exist)")                                                                                                                                                                                     |
| Descargar                                                                                                                                                                                                                                                                               |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/3/36/Macro_Draw_2D_Function.png)                                                                                                                                                                                                  |
| Enlace                                                                                                                                                                                                                                                                                  |
| [Macros recipes](/Macros_recipes/es "Macros recipes/es") [How to install macros](/How_to_install_macros/es "How to install macros/es") [How to customize toolbars](/Customize_Toolbars/es "Customize Toolbars/es")                                                                      |
| Versión Macro                                                                                                                                                                                                                                                                           |
| 1.0                                                                                                                                                                                                                                                                                     |
| Fecha última modificación                                                                                                                                                                                                                                                               |
| 2011-08-01                                                                                                                                                                                                                                                                              |
| Versión(es) FreeCAD                                                                                                                                                                                                                                                                     |
| All                                                                                                                                                                                                                                                                                     |
| Acceso directo predeterminado                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                  |
| Ver también                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                         |

## Descripción

Utilízala para dibujar una función descrita por una "ecuación" [z=F(x)] (Z-X plano) El ejemplo indicado aquí genera una parábola.

Necesita ser definida:

F=variable utilizada en la función,

X=Valor inicial de x,

Nb= Número de pasos,

Z=Función expresada express con x

ZZ=Función expresada express con xx

## Script

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Draw_2D_Function/es&oldid=692164>"
