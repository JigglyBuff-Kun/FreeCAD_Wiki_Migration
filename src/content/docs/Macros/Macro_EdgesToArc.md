---
title: EdgesToArc
---

|                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EdgesToArc                                                                                                                                                                                                                                                                        |
| Description                                                                                                                                                                                                                                                                       |
| Replaces the selected Edges by a circular Arc if possible. Useful for restoring discretized arcs. Macro version: 1.0 Last modified: 2014-01-02 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/65/Macro_EdgesToArc.png) Author: Jreinhardt |
| Author                                                                                                                                                                                                                                                                            |
| [Jreinhardt](/index.php?title=User:Jreinhardt&action=edit&redlink=1 "User:Jreinhardt (page does not exist)")                                                                                                                                                                      |
| Download                                                                                                                                                                                                                                                                          |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/65/Macro_EdgesToArc.png)                                                                                                                                                                                                  |
| Links                                                                                                                                                                                                                                                                             |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                  |
| Macro Version                                                                                                                                                                                                                                                                     |
| 1.0                                                                                                                                                                                                                                                                               |
| Date last modified                                                                                                                                                                                                                                                                |
| 2014-01-02                                                                                                                                                                                                                                                                        |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                |
| All                                                                                                                                                                                                                                                                               |
| Default shortcut                                                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                                                            |
| See also                                                                                                                                                                                                                                                                          |
| [Macro SuperWire](/Macro_SuperWire "Macro SuperWire")                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                   |

## Description

Sometimes one encounters wires that contain arcs that are made up of small straight segments. This often happens when working with files from other programs. This macro makes it relatively easy to convert these discretized arcs back to circular arcs. This reduces the file size and makes the file more manageable.

To use this macro, you have to break down the wire into individual edges using the ![](/images/Draft_Downgrade.svg) [Draft Downgrade](/Draft_Downgrade "Draft Downgrade") function. Then just select the segments that you want to replace by an circular arc and execute the macro. You need at least two segments.

The macro will check whether the segments all lie on a common circle and will abort if this is not the case. Otherwise it will create the arc and remove the segments.

Because of small inaccuracies in the calculations, the ![](/images/Draft_Upgrade.svg) [Draft Upgrade](/Draft_Upgrade "Draft Upgrade") function can sometimes fail to recombine the other edges and the arcs back into a wire. In this case the [Macro_SuperWire](/Macro_SuperWire "Macro SuperWire") provides a more robust way to do this.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_EdgesToArc/en&oldid=692191>"
