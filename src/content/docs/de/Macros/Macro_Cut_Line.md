---
title: Linie Schneiden
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Cut Line                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Schneidet eine Linie aus, wobei als Argument number cut, create line, bicolor, create point angegeben wird. Die neue Linie wird in der realen Koordinate des Objekts erstellt, nicht in der Koordinate des Körpers. (Befehlszeile, füge dieses komplette Makro in die Python Konsole ein). Versionsmakro : 2.0 Datum der letzten Änderung : 2019/06/17 FreeCAD version : Alle Herunterladen : [ToolBar Symbol](https://www.freecadweb.org/wiki/images/3/35/Macro_Cut_Line.png) Autor: mario52 |
| Autor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Herunterladen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [ToolBar Symbol](https://www.freecadweb.org/wiki/images/3/35/Macro_Cut_Line.png)                                                                                                                                                                                                                                                                                                                                                                                                              |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                                                                                                                                                                                                                                  |
| Macro-Version                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Datum der letzten Änderung                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2019/06/17                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Alle                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Standardverknüpfung                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Siehe auch                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Beschreibung

Dieses kleine Makro schneidet eine Linie und erzeugt einen Punkt , Linien , zwei Farben der Linie.

![](/images/Macro_cutLine_00.png)

Linieschneiden

## Anwendung

Kann aus dem Freecad Makro Editor verwendet werden.

- **4 :** Anzahl Schnitte
- **createPoint** : Punkte erzeugen oder nicht (0) (Defaut 1)
- **createLine** : Linie erzeugen (>0) oder nicht (0) (Defaut 0)
- **biColor** : Linie erzeugen biColor (>0) oder nicht (0) (Defaut 0)

du kannst die Standardwerte im Makro ändern.

Mit bisColor werden die Linien auf der ursprünglichen Linie durch eine weiße Linie rote Linie weiße Linie .... erzeugt, die Farben sind im Code veränderbar, Zeile 20 und 23.

## Skript

ToolBar Icon ![](/images/Macro_Cut_Line.png)

**Macro_cutLine.FCMacro**

```
#################################################################
# http://forum.freecadweb.org/viewtopic.php?f=3&t=4217&hilit=discretize
# 08/03/2015 2019/06/17

__title__   = "cutLine"
__author__  = "Mario52"
__version__ = "00.02"
__date__    = "2019/06/17"

import Draft, Part
def cutLine(numberOfPoints = 2, createPoint = 1, createLine = 0, biColor = 0):           # create a points of forme

    def createLines(numberOfPoints, points, biColor):                                        # create line
        biscolor = 0
        for lin in range(numberOfPoints-1):
            creaLine = [FreeCAD.Vector(points[lin]),FreeCAD.Vector(points[lin+1])]
            wire = Draft.makeWire(creaLine,closed=False,face=False,support=None)
            if biColor != 0:                                                                 # biColor
                if biscolor == 0:
                    FreeCADGui.ActiveDocument.getObject(wire.Name).LineColor = (1.0,0.0,0.0) # 255 = 1 (10 = (1/255 * 10 ))
                    biscolor = 1
                else:
                    FreeCADGui.ActiveDocument.getObject(wire.Name).LineColor = (1.0,1.0,1.0) # 255 = 1 (10 = (1/255 * 10 ))
                    biscolor = 0
    try:
        points = []
        points[:] = []
        selectionObjects = FreeCADGui.Selection.getSelectionEx()         # getSelectionEx
        numberOfPoints += 1
        for selection in selectionObjects:
            compteur = pas = 0
            for selectedEdge in selection.SubObjects:
                    FreeCAD.Console.PrintMessage(selectionObjects[0].SubElementNames[compteur] + "\n")
#                    print( selectionObjects[0].SubElementNames[compteur])# getSelectionEx
                    compteur += 1
                    points = selectedEdge.discretize(numberOfPoints)
                    if createLine != 0:
                        createLines(numberOfPoints, points, biColor)
                    for p in points:
                        if createPoint != 0:
                            Draft.makePoint( p.x, p.y, p.z)
                        FreeCAD.Console.PrintMessage(str(compteur)+" X"+ str(p.x)+" Y"+ str(p.y)+ " Z"+ str(p.z) + "\n")
#                        print( compteur," X", p.x, " Y", p.y, " Z", p.z)
                    pas = 1                                              #

            if pas == 0:                                                 # the not SubObjects
                selectionObjects = FreeCADGui.Selection.getSelection()   # select all elements
                FreeCAD.Console.PrintMessage(selectionObjects[0].Name + "\n")
#                print( selectionObjects[0].Name)                         # getSelection()
                compteur = 0
                for ii in enumerate(selectionObjects[0].Shape.Edges):
                    compteur += 1
                    points = ii[1].discretize(numberOfPoints)            # discretize the element
                    for p in points:
                        if createPoint != 0:
                            Draft.makePoint( p.x, p.y, p.z)              # create points
                        FreeCAD.Console.PrintMessage(str(compteur)+" X"+ str(p.x)+" Y"+ str(p.y)+ " Z"+ str(p.z) + "\n")
#                         print( compteur, " X", p.x, " Y", p.y, " Z", p.z)  # list and display the coordinates
                    if createLine != 0:
                        createLines(numberOfPoints, points, biColor)
    except:
        FreeCAD.Console.PrintError("Error" + "\n" + "Give : cutLine(numberOfPoints = 2, createPoint = 1, createLine = 0, biColor = 0)"+"\n")
        FreeCAD.Console.PrintError("Select the complete shape or separate wire(s) line, circle ..."+"\n")

#        print( "Error : Give cutLine(numberOfPoints = 2, createPoint = 1, createLine = 0, biColor = 0)")

# Example in command line (paste the macro in FC Python console) and write:
#cutLine(2, createLine = 1, biColor = 1, createPoint = 0)
```

## Beispiel

Kann aus dem Freecad Makro Editor verwendet werden.

Wenn das Makro in die Python Konsole kopiert wird, kannst du es folgendermaßen verwenden durch:

```
cutLine(4, createLine = 1, biColor = 1, createPoint = 0)

```

## Verweise

diese Funktion verwendet die Funktion discretize [the original code](http://forum.freecadweb.org/viewtopic.php?f=3&t=4217&hilit=discretize)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Cut_Line/de&oldid=824135>"
