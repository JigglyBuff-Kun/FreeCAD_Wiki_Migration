---
title: Line Length
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Line Length                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Erzeugt eine Linie, in der die XYZ-Koordinaten, die Länge und der Winkel als Argument angegeben werden.Die neue Zeile wird in der realen Koordinate des Objekts erstellt, nicht in der Koordinate des Körpers. (Befehlszeile, fügen Sie dieses vollständige Makro in die Python-Konsole ein). Versionsmakro : 02.00 Datum der letzten Änderung : 2014-08-08 FreeCAD version : All Herunterladen : [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/bd/Macro_Line_Length.png) Autor: mario52 |
| Autor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Herunterladen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/bd/Macro_Line_Length.png)                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                                                                                                                                                                                                                                       |
| Macro-Version                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 02.00                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Datum der letzten Änderung                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2014-08-08                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| All                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Standardverknüpfung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Siehe auch                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Beschreibung

Dieses kleine Makro erstellt eine Linie, in der die XYZ-Koordinaten, die Länge und der Winkel als Argument angegeben werden

## Anwendung

Kann vom Freecad-Makro-Editor verwendet werden.

Die Standardwerte sind: x1 = 0, y1 = 0, z1 = 0, Länge = 10, Winkel = 0

## Skript

ToolBar Icon ![](/src/assets/images/Macro_Line_Length.png)

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

## Beispiel

Wenn das Makro in die Python-Konsole kopiert wird, können Sie es folgendermaßen verwenden:

```
>>> line_length(x1 = 0, y1 = 0, z1 = 0, length = 10, angle = 45)

```

oder Wahl

```
>>> line_length(x1 = 10, y1 = 10, z1 = 0, length = 50)

>>> line_length(length = 50, angle = 45)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Line_Length/de&oldid=934244>"
