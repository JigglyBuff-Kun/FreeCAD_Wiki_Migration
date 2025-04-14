---
title: Draw Parametric 2D Function
---

|                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Draw Parametric 2D Function                                                                                                                                                                                                                                                      |
| Beschreibung                                                                                                                                                                                                                                                                           |
| Zeichnet 2-dimensionale, parametrische und optional polare Gleichungen. Versionsmakro : 1.0 Datum der letzten Änderung : 2012-08-30 FreeCAD version : All Herunterladen : [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/03/Macro_Draw_Parametric_2D_Function.png) Autor: T4b |
| Autor                                                                                                                                                                                                                                                                                  |
| [T4b](/index.php?title=User:T4b&action=edit&redlink=1 "User:T4b (page does not exist)")                                                                                                                                                                                                |
| Herunterladen                                                                                                                                                                                                                                                                          |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/03/Macro_Draw_Parametric_2D_Function.png)                                                                                                                                                                                      |
| Links                                                                                                                                                                                                                                                                                  |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                           |
| Macro-Version                                                                                                                                                                                                                                                                          |
| 1.0                                                                                                                                                                                                                                                                                    |
| Datum der letzten Änderung                                                                                                                                                                                                                                                             |
| 2012-08-30                                                                                                                                                                                                                                                                             |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                     |
| All                                                                                                                                                                                                                                                                                    |
| Standardverknüpfung                                                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                                                                 |
| Siehe auch                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                        |

## Beschreibung

Zeichnet 2-dimensionale, parametrische und optional polare Gleichungen.

![](/images/Macro_drawParametric2Dfunction.png)

DrawParametric2DFunction

## Einschränkungen

Hat noch ein paar Fehler und vermisst einige Funktionen. Die Dokumentation befindet sich in den Dokumentenketten.

## Anwendung

Art :

Beispielverwendung:

draw2Dfunction(xFunction="0.5\*n", yFunction="-0.75\*n", n=0, nd=-math.pi, step=50, pol=1)

## Skript

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Draw_Parametric_2D_Function/de&oldid=934232>"
