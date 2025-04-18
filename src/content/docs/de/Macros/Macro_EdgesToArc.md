---
title: EdgesToArc
---

|                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EdgesToArc                                                                                                                                                                                                                                                                                                                                |
| Beschreibung                                                                                                                                                                                                                                                                                                                              |
| Ersetzt die markierten Segmente durch einen Kreisbogen, falls möglich. Nützlich zum Wiederherstellen von diskretisierten Kreisbögen. Versionsmakro : 1.0 Datum der letzten Änderung : 2014-01-02 FreeCAD version : All Herunterladen : [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/65/Macro_EdgesToArc.png) Autor: Jreinhardt |
| Autor                                                                                                                                                                                                                                                                                                                                     |
| [Jreinhardt](/index.php?title=User:Jreinhardt&action=edit&redlink=1 "User:Jreinhardt (page does not exist)")                                                                                                                                                                                                                              |
| Herunterladen                                                                                                                                                                                                                                                                                                                             |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/65/Macro_EdgesToArc.png)                                                                                                                                                                                                                                                          |
| Links                                                                                                                                                                                                                                                                                                                                     |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                                                                              |
| Macro-Version                                                                                                                                                                                                                                                                                                                             |
| 1.0                                                                                                                                                                                                                                                                                                                                       |
| Datum der letzten Änderung                                                                                                                                                                                                                                                                                                                |
| 2014-01-02                                                                                                                                                                                                                                                                                                                                |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                                                                        |
| All                                                                                                                                                                                                                                                                                                                                       |
| Standardverknüpfung                                                                                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                                                                                    |
| Siehe auch                                                                                                                                                                                                                                                                                                                                |
| [Macro SuperWire](/Macro_SuperWire/de "Macro SuperWire/de")                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                                           |

## Desorption

Manchmal hat man mit einem Wire zu tun, bei dem ein Kreisbogen aus vielen kleinen geraden Segmenten aufgebaut ist. Dieser Fall tritt häufig auf, wenn man mit Dateien arbeitet, die mit anderen Programmen erstellt wurden. Mit diesem Macro kann man solche diskretisierten Kreisbögen in echte Kreisbögen umwandeln. Das führt zu kleineren und aufgeräumteren Dateien.

Um dieses Makro zu verwenden, muss man den Linienzug mit der ![](/images/Draft_Downgrade.svg) [Herabstufen](/Draft_Downgrade/de "Draft Downgrade/de")-Funktion in seine einzelnen Segmente zerlegen. Dann markiert man die Segmente, die man durch einen Kreisbogen ersetzen will und führt das Makro aus. Man muss mindestens zwei Segmente markiert haben.

Das Macro prüft, ob alle Segmente auf einem gemeinsamen Kreisbogen liegen und bricht ab, falls nicht. Im anderen Fall wird der Kreisbogen erstellt, und die geraden Segmente entfernt.

Bei den Berechnungen treten kleine Fehler auf. Aus diesem Grund kann es manchmal passieren, dass die ![](/images/Draft_Upgrade.svg) [Hochstufen](/Draft_Upgrade/de "Draft Upgrade/de")-Funktion die Kreisbögen und die unveränderten Segmente nicht wieder zu einem Linienzug zusammensetzen kann. In diesem Fall ist das [SuperWire](/Macro_SuperWire/de "Macro SuperWire/de")-Makro eine robustere Alternative.

## Script

ToolBar Icon ![](/images/Macro_EdgesToArc.png)

**Macro_EdgesToArc.FCMacro**

```
import Draft
import FreeCADGui, FreeCAD
from FreeCAD import Base, Console
from math import atan2, pi, fabs

#This macro replaces a number of edges approximating a circular arc by a proper circular arc.
#It might be necessary to use the superwire macro to recombine the edges back to a wire, because of small errors in the calculations.

sel = FreeCADGui.Selection.getSelection()
if len(sel) < 2:
    Console.PrintError("Too few edges are selected\n")
edges = [s.Shape for s in sel]

start_vertices = []
end_vertices = []
for edge in edges:
    start_vertices.append(edge.Vertexes[0].Point)
    end_vertices.append(edge.Vertexes[1].Point)
vertices = start_vertices + end_vertices

start,end,middle = None,None,None

#find start and end points
for edge in edges:
    is_start = True
    is_end = True
    for point in end_vertices:
        if edge.Vertexes[0].Point.distanceToPoint(point) < 1e-8:
            is_start = False

    for point in start_vertices:
        if edge.Vertexes[1].Point.distanceToPoint(point) < 1e-8:
            is_end = False
    if is_start:
        start = edge.Vertexes[0].Point
    if is_end:
        end = edge.Vertexes[1].Point

#find middle point, at least not too far away from the middle

for v in vertices:
    ratio = v.distanceToPoint(start)/v.distanceToPoint(end)
    if ratio > 0.5 and ratio < 2.:
        middle = v
        break

if middle is None:
    Console.PrintError("Could not find suitable middle point\n")

arc = Part.ArcOfCircle(start,middle,end)

#Check circularity
circular = True
for v in vertices:
    if fabs(v.distanceToPoint(arc.Center) - arc.Radius) > 1e-6:
        Console.PrintError("Edges do not approximate a circular arc\n")
        circular = False
        break

if circular:
        Part.show(arc.toShape())
        for shape in sel:
            FreeCAD.ActiveDocument.removeObject(shape.Name)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_EdgesToArc/de&oldid=1070103>"
