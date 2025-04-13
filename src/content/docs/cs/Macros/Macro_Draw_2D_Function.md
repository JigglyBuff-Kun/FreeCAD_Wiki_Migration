---
title: Vykresli 2D funkci
---
|  |
| --- |
| Vykresli 2D funkci |
| Popis |
| Použijete k nakreslení funkce popsané "rovnicí" [z=F(x)] (Z-X rovina)  Version macro : 1.0 Date last modification : 2011-08-01 FreeCAD version : All Download : [ToolBar Icon](https://www.freecadweb.org/wiki/images/3/36/Macro_Draw_2D_Function.png) Autor: unknown |
| Autor |
| [unknown](/index.php?title=User:Unknown&action=edit&redlink=1 "User:Unknown (page does not exist)") |
| Download |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/3/36/Macro_Draw_2D_Function.png) |
| Odkazy |
| [Makro recepty|](/Macros_recipes/cs "Macros recipes/cs") [Jak nainstalovat makra](/How_to_install_macros/cs "How to install macros/cs") [Jak přizpůsobit panely nástrojů](/Customize_Toolbars/cs "Customize Toolbars/cs") |
| Verze |
| 1.0 |
| Datum poslední úpravy |
| 2011-08-01 |
| Verze FreeCAD |
| All |
| Výchozí zástupce |
| *None* |
| Viz též |
| *None* |
|  |
|  |

## Description

Použijete k nakreslení funkce popsané "rovnicí" [z=F(x)] (Z-X rovina). Příklad ukázaný zde generuje parabolu.  
Nemá žádné dialogové okno. Je potřeba definovat :  
F = proměnná použitá ve funkci,  
X = iniciační hodnota x,  
Nb = počet kroků,  
Z = funkce vyjádřená x   
ZZ = funkce vyjádřená xx

## Skript

ToolBar Icon ![](/images/Macro_Draw_2D_Function.png)

**Macro\_Draw\_2D\_Function.FCMacro**

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Draw_2D_Function/cs&oldid=692165>"