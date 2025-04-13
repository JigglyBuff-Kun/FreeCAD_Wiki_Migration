---
title: Funzione 2D
---

|                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Funzione 2D                                                                                                                                                                                                                                                                              |
| Descrizione                                                                                                                                                                                                                                                                              |
| Si usa per disegnare una funzione descritta da una equazione z=F(x) (piano Z-X) Versione macro: 1.0 Ultima modifica: 2011-08-01 Versione FreeCAD: Tutte versione Download: [Icona per la ToolBar](https://www.freecadweb.org/wiki/images/3/36/Macro_Draw_2D_Function.png) Autore: ignoto |
| Autore                                                                                                                                                                                                                                                                                   |
| [ignoto](/index.php?title=User:Ignoto&action=edit&redlink=1 "User:Ignoto (page does not exist)")                                                                                                                                                                                         |
| Download                                                                                                                                                                                                                                                                                 |
| [Icona per la ToolBar](https://www.freecadweb.org/wiki/images/3/36/Macro_Draw_2D_Function.png)                                                                                                                                                                                           |
| Link                                                                                                                                                                                                                                                                                     |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                 |
| Versione macro                                                                                                                                                                                                                                                                           |
| 1.0                                                                                                                                                                                                                                                                                      |
| Data ultima modifica                                                                                                                                                                                                                                                                     |
| 2011-08-01                                                                                                                                                                                                                                                                               |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                      |
| Tutte versione                                                                                                                                                                                                                                                                           |
| Scorciatoia                                                                                                                                                                                                                                                                              |
| _Nessuna_                                                                                                                                                                                                                                                                                |
| Vedere anche                                                                                                                                                                                                                                                                             |
| _Nessuno_                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                          |

## Description

Si usa per disegnare una funzione descritta da una equazione [z=F(x)] (piano ZX). Questo esempio genera una parabola.

Elementi da definire:

: F=variable utilizzata nella funzione,

: X=Valore iniziale di x,

: Nb= Numero di passi,

: Z=Funzione espressa con x

: ZZ=Funzione espressa con xx

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Draw_2D_Function/it&oldid=1080436>"
