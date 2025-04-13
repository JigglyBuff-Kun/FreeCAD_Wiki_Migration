---
title: Linea
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Linea e opzioni                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Descrizione                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Crea una linea usando come argomento le coordinate XYZ, la lunghezza e l'angolo.La nuova linea viene creata nella coordinata reale dell'oggetto, non nelle coordinate del corpo. (Riga di comando, incolla questa macro completa nella console Python). Versione macro: 02.00 Ultima modifica: 2014-08-08 Versione FreeCAD: Tutte Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/bd/Macro_Line_Length.png) Autore: mario52 |
| Autore                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                       |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/bd/Macro_Line_Length.png)                                                                                                                                                                                                                                                                                                                                                             |
| Link                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                                                                                                                                      |
| Versione macro                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 02.00                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Data ultima modifica                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2014-08-08                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Tutte                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Scorciatoia                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| _Nessuna_                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Vedere anche                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| _Nessuno_                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Descrizione

Questa macro permette di creare una linea usando come argomento le coordinate XYZ, la lunghezza e l'angolo.

## Utilizzo

Può essere usata nell'editor delle macro di FreeCAD.

i valori di default sono : x1=0, y1=0, z1=0, length=10, angle=0

## Script

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

## Esempio

Se la macro viene copiata nella console Python può essere utilizzata con:

```
>>> line_length(x1 = 0, y1 = 0, z1 = 0, length = 10, angle = 45)

```

oppure, a scelta:

```
>>> line_length(x1 = 10, y1 = 10, z1 = 0, length = 50)

>>> line_length(length = 50, angle = 45)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Line_Length/it&oldid=1186358>"
