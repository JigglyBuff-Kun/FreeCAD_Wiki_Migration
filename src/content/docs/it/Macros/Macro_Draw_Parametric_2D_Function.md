---
title: Funzione parametrica 2D
---

|                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Funzione parametrica 2D                                                                                                                                                                                                                                      |
| Descrizione                                                                                                                                                                                                                                                  |
| Disegna funzioni 2D, parametriche e polari. Versione macro: 2.0 Ultima modifica: 2012-08-30 Versione FreeCAD: Tutte versione Download: [Icona per la ToolBar](https://www.freecadweb.org/wiki/images/0/03/Macro_Draw_Parametric_2D_Function.png) Autore: T4b |
| Autore                                                                                                                                                                                                                                                       |
| [T4b](/index.php?title=User:T4b&action=edit&redlink=1 "User:T4b (page does not exist)")                                                                                                                                                                      |
| Download                                                                                                                                                                                                                                                     |
| [Icona per la ToolBar](https://www.freecadweb.org/wiki/images/0/03/Macro_Draw_Parametric_2D_Function.png)                                                                                                                                                    |
| Link                                                                                                                                                                                                                                                         |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                     |
| Versione macro                                                                                                                                                                                                                                               |
| 2.0                                                                                                                                                                                                                                                          |
| Data ultima modifica                                                                                                                                                                                                                                         |
| 2012-08-30                                                                                                                                                                                                                                                   |
| Versioni di FreeCAD                                                                                                                                                                                                                                          |
| Tutte versione                                                                                                                                                                                                                                               |
| Scorciatoia                                                                                                                                                                                                                                                  |
| _Nessuna_                                                                                                                                                                                                                                                    |
| Vedere anche                                                                                                                                                                                                                                                 |
| _Nessuno_                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                              |

## Descrizione

Disegna equazioni bidimensionali parametriche e opzionalmente polari.

![](/images/Macro_drawParametric2Dfunction.png)

DrawParametric2DFunction

## Limitazioni

Contiene ancora alcuni bug e mancano alcune funzionalità. La documentazione è in docstring.

## Utilizzo

Digitare :

Esempio utilizzazione

draw2Dfunction(xFunction="0.5\*n", yFunction="-0.75\*n", n=0, nd=-math.pi, step=50, pol=1)

## Script

ToolBar Icon ![](/images/Macro_Draw_Parametric_2D_Function.png)

**Macro_drawParametric2DFunction.FCMacro**

```
import FreeCAD, FreeCADGui, Part
import math

def evalFunction(suppliedFunction, n):
	"""This function uses eval to evaluate suppliedFunction.

	It does in no way check whether suppliedFunction is evil, thus it is itself evil!
	"""
	return eval(suppliedFunction)

def draw2Dfunction(xFunction="n", yFunction="n", n=-5, nd=10, step=10, z=0, pol=0):
	"""Draws 2-dimensional mathemathical functions

	The function is drawn for n's between n and n+nd, in steps of 1/step, on the z-coordinate z.
	Equations for x and y can be given (xFunction and yFunction arguments), they default to n.

	If pol=1 then x is interpreted as r and y is interpreted as t.
	"""
	nStart=n
	while math.fabs(n-nd)-1.0/step>0:
		print( "n: " + str(n))
		x=evalFunction(xFunction, n)
		y=evalFunction(yFunction, n)
		nNext=n+math.copysign(1,nd-n)/step
		print( "nNext: " + str(nNext))
		xNext=evalFunction(xFunction, nNext)
		yNext=evalFunction(yFunction, nNext)
		if pol==0:
			nextSeg=(x,y,z),(xNext,yNext,z)
		else:
			nextSeg=(x*math.cos(y),x*math.sin(y),z),(xNext*math.cos(yNext),xNext*math.sin(yNext),z)
		print( "nextSeg: " + str(nextSeg))
		nomme=Part.makeLine(*nextSeg)
		if n==nStart:
			WWire=Part.Wire([nomme])
		else:
			WWire=Part.Wire([WWire,nomme])
		n=nNext
	Part.show(WWire)
#Example usage:
draw2Dfunction(xFunction="0.5*n", yFunction="-0.75*n", n=0, nd=-math.pi, step=50, pol=1)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Draw_Parametric_2D_Function/it&oldid=1186346>"
