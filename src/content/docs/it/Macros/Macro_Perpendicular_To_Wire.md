---
title: Perpendicolare a linea
---

|                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Perpendicolare a linea                                                                                                                                                                                                                                                                                                                                                                               |
| Descrizione                                                                                                                                                                                                                                                                                                                                                                                          |
| Posiziona l'oggetto perpendicolarmente alla linea selezionata. Versione 00.02 : 2019-04-06. Icona per la ToolBar: [Icon](https://www.freecadweb.org/wiki/images/0/0c/Macro_Perpendicular_To_Wire.png). Versione macro: 00.02 Ultima modifica: 2019-04-06 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/0c/Macro_Perpendicular_To_Wire.png) Autore: Mario52 |
| Autore                                                                                                                                                                                                                                                                                                                                                                                               |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                              |
| Download                                                                                                                                                                                                                                                                                                                                                                                             |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/0c/Macro_Perpendicular_To_Wire.png)                                                                                                                                                                                                                                                                                                          |
| Link                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                                                                                             |
| Versione macro                                                                                                                                                                                                                                                                                                                                                                                       |
| 00.02                                                                                                                                                                                                                                                                                                                                                                                                |
| Data ultima modifica                                                                                                                                                                                                                                                                                                                                                                                 |
| 2019-04-06                                                                                                                                                                                                                                                                                                                                                                                           |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                                                                                                  |
| All                                                                                                                                                                                                                                                                                                                                                                                                  |
| Scorciatoia                                                                                                                                                                                                                                                                                                                                                                                          |
| _Nessuna_                                                                                                                                                                                                                                                                                                                                                                                            |
| Vedere anche                                                                                                                                                                                                                                                                                                                                                                                         |
| _Nessuno_                                                                                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                                                                                                      |

## Descrizione

Posiziona l'oggetto perpendicolarmente alla linea selezionata.

## Uso

1. : selezionare il percorso (può essere un elemento o un sotto-elemento)
2. : selezionare l'oggetto da posizionare
3. : eseguire la macro

## Script

L'icona per la barra degli strumenti ![](/images/Macro_Perpendicular_To_Wire.png)

**Macro Perpendicular To Wire.FCMacro**

```
# -*- coding: utf-8 -*-
__title__   = "Macro Perpendicular To Wire"
__author__  = "Mario52"
__url__     = "https://wiki.freecadweb.org/Macro_Perpendicular_To_Wire"
__version__ = "00.03"
__date__    = "31/03/2020"

import Draft, Part

try:
    sel = FreeCADGui.Selection.getSelection()                               # Select an object

    lineSelected = FreeCADGui.Selection.getSelectionEx()[0].SubObjects[0]   # first object the Path object or SubObjects
    myCircle     = sel[1]                                                   # second object

    pointsDirection  = []

    pointsDirection = lineSelected.discretize(Number=500)                   # discretize the path line first selection

    v=pointsDirection[0].sub(pointsDirection[1])                            # avec vecteurs 1 et 2 (direction debut ligne)
    r=App.Rotation(App.Vector(0,0,1),v)

    pl=FreeCAD.Placement()                                                  # placement object
    pl.Rotation.Q = r.Q
    pl.Base = pointsDirection[0]
    myCircle.Placement = pl

    del pointsDirection[:]
    FreeCAD.ActiveDocument.recompute()
except Exception:
    print( "Select two objects. 1:The path 2:The object to align" )
```

## Opzioni

Principio di funzionamento :

```
pointsDirection = lineSelected.Shape.discretize(Number=500)             # discretize the path line first selection

```

la perpendicolarità è calcolata tra 2 punti modificando :

```
v=pointsDirection[0].sub(pointsDirection[1])          # perpendicular of first > second point

```

: ![](/images/Macro_Perpendicular_To_Wire_01.png)

2:

```
v=pointsDirection[-1].sub(pointsDirection[-2])       # perpendicular of last > before last point
pl.Base = pointsDirection[-1]                        # position base last point

```

: ![](/images/Macro_Perpendicular_To_Wire_02.png)

3:

```
v=pointsDirection[100].sub(pointsDirection[101])   # perpendicular of point 100 > point 101
pl.Base = pointsDirection[100]                     # position base point 100

```

: ![](/images/Macro_Perpendicular_To_Wire_03.png)

4:

```
v=pointsDirection[0].sub(pointsDirection[-1])         # perpendicular of first point > last point
pl.Base = pointsDirection[0]                          # position base first point

```

: ![](/images/Macro_Perpendicular_To_Wire_04.png)

per discretizzare gli altri parametri

```
# Discretizes the edge and returns a list of points.
# Forum thread: http://forum.freecadweb.org/viewtopic.php?f=12&t=16336#p129468
# The function accepts keywords as argument:
# discretize(Number=n) => gives a list of 'n' equidistant points
# discretize(QuasiNumber=n) => gives a list of 'n' quasi equidistant points (is faster than the method above)
# discretize(Distance=d) => gives a list of equidistant points with distance 'd'
# discretize(Deflection=d) => gives a list of points with a maximum deflection 'd' to the edge
# discretize(QuasiDeflection=d) => gives a list of points with a maximum deflection 'd' to the edge (faster)
# discretize(Angular=a,Curvature=c,[Minimum=m]) => gives a list of points with an angular deflection of 'a'
# and a curvature deflection of 'c'. Optionally a minimum number of points
# can be set which by default is set to 2.

```

## Esempio

![](/images/Macro_Perpendicular_To_Wire_05.gif)

![](/images/Macro_Perpendicular_To_Wire.gif)

## Discussions

La discussione nel forum [[Spiralbohrer](https://forum.freecadweb.org/viewtopic.php?f=13&t=19899&start=20)]

## Version

Ver 00.02 2019-04-06 : Python 3

Ver 00.03 2020-03-21: Source and comment typo fixes
Ver 00.02 2019-04-06: Python 3

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Perpendicular_To_Wire/it&oldid=692434>"
