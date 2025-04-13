---
title: Přímka podle délky
---

|                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Line Length                                                                                                                                                                                                                                                                                                                                                                                                |
| Popis                                                                                                                                                                                                                                                                                                                                                                                                            |
| Vytvoří přímku danou argumenty jež jsou souřadnice XYZ, délka a úhel.Nový řádek je vytvořen v reálné souřadnici objektu, nikoli v souřadnici Body. (Příkazový řádek, vložte toto kompletní makro do konzoly Python). Version macro : 02.00 Date last modification : 2014-08-08 FreeCAD version : All Download : [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/bd/Macro_Line_Length.png) Autor: mario52 |
| Autor                                                                                                                                                                                                                                                                                                                                                                                                            |
| [mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                          |
| Download                                                                                                                                                                                                                                                                                                                                                                                                         |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/bd/Macro_Line_Length.png)                                                                                                                                                                                                                                                                                                                                |
| Odkazy                                                                                                                                                                                                                                                                                                                                                                                                           |
| [Makro recepty                                                                                                                                                                                                                                                                                                                                                                                                   | ](/Macros_recipes/cs "Macros recipes/cs") [Jak nainstalovat makra](/How_to_install_macros/cs "How to install macros/cs") [Jak přizpůsobit panely nástrojů](/Customize_Toolbars/cs "Customize Toolbars/cs") |
| Verze                                                                                                                                                                                                                                                                                                                                                                                                            |
| 02.00                                                                                                                                                                                                                                                                                                                                                                                                            |
| Datum poslední úpravy                                                                                                                                                                                                                                                                                                                                                                                            |
| 2014-08-08                                                                                                                                                                                                                                                                                                                                                                                                       |
| Verze FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                    |
| All                                                                                                                                                                                                                                                                                                                                                                                                              |
| Výchozí zástupce                                                                                                                                                                                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                           |
| Viz též                                                                                                                                                                                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                                                  |

## Popis

Toto malé makro vytvoří přímku danou argumenty jež jsou souřadnice XYZ, délka a úhel.

## Použití

Může být použito z editoru maker FreeCADu.

predvolené hodnoty sú : x1 = 0, y1 = 0, z1 = 0, length = 10, angle = 0

## Skript

ToolBar Icon ![](/images/Macro_Line_Length.png)

**Macro Line_Length.py**

```
# -*- coding: utf-8 -*-
# créer une ligne avec une coordonnée une longueur et un angle sur le plan X Y
# create line with coordinate length and angle to plane X Y
import FreeCAD, FreeCADGui, Draft
from math import cos, sin, radians
#from FreeCAD import Base

def line_length(x1 = 0.0, y1 = 0.0, z1 = 0.0, length = 10.0, angle = 0.0):
    x2 = x1 + (length * cos(radians(angle)))
    y2 = y1 + (length * sin(radians(angle)))
    z2 = z1 #+ ()
    Draft.makeWire([FreeCAD.Vector(x1,y1,z1),FreeCAD.Vector(x2,y2,z2)])

#Example:
#x1 = 0.0          # Edit coordinate x1 origin
#y1 = 0.0          # Edit coordinate y1 origin
#z1 = 0.0          # Edit coordinate z1 origin
#length = 50.0       # Edit length
#angle  = 45.0       # Edit angle plane XY

#line_length(x1, y1, z1, length, angle)
```

## Príklad

Ak sa makro kopíruje do konzoly Python, môžete ho použiť:

```
>>> line_length(x1 = 0, y1 = 0, z1 = 0, length = 10, angle = 45)

```

alebo výberu

```
>>> line_length(x1 = 10, y1 = 10, z1 = 0, length = 50)

>>> line_length(length = 50, angle = 45)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Line_Length/cs&oldid=692343>"
