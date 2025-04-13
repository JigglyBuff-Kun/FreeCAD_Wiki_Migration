---
title: Draw Parametric 2D Function
---

|                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Draw Parametric 2D Function                                                                                                                                                                                                                         |
| Description                                                                                                                                                                                                                                               |
| Draws 2-dimensional, parametric and optionally polar equations. Macro version: 2.0 Last modified: 2012-08-30 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/03/Macro_Draw_Parametric_2D_Function.png) Author: T4b |
| Author                                                                                                                                                                                                                                                    |
| [T4b](/index.php?title=User:T4b&action=edit&redlink=1 "User:T4b (page does not exist)")                                                                                                                                                                   |
| Download                                                                                                                                                                                                                                                  |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/03/Macro_Draw_Parametric_2D_Function.png)                                                                                                                                                         |
| Links                                                                                                                                                                                                                                                     |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                          |
| Macro Version                                                                                                                                                                                                                                             |
| 2.0                                                                                                                                                                                                                                                       |
| Date last modified                                                                                                                                                                                                                                        |
| 2012-08-30                                                                                                                                                                                                                                                |
| FreeCAD Version(s)                                                                                                                                                                                                                                        |
| All                                                                                                                                                                                                                                                       |
| Default shortcut                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                                    |
| See also                                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                           |

## Description

Draws 2-dimensional, parametric and optionally polar equations.

![](/src/assets/images/Macro_drawParametric2Dfunction.png)

DrawParametric2DFunction

## Limitations

Still has some bugs and misses some features. Documentation is in the docstrings.

## Usage

Type :

Example usage:

draw2Dfunction(xFunction="0.5\*n", yFunction="-0.75\*n", n=0, nd=-math.pi, step=50, pol=1)

## Script

ToolBar Icon ![](/src/assets/images/Macro_Draw_Parametric_2D_Function.png)

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Draw_Parametric_2D_Function/en&oldid=692174>"
