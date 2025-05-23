---
title: MeshToPart
---

|                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MeshToPart                                                                                                                                                                                                                                                                                                                             |
| Description                                                                                                                                                                                                                                                                                                                            |
| This macro converts selected meshes to parts. It has a broad tolerance, so use it only with objects that have no curves otherwise you'll get weird results Macro version: 1.0 Last modified: 2011-08-01 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fa/Macro_MeshToPart.png) Author: Wmayer |
| Author                                                                                                                                                                                                                                                                                                                                 |
| [Wmayer](/User:Wmayer "User:Wmayer")                                                                                                                                                                                                                                                                                                   |
| Download                                                                                                                                                                                                                                                                                                                               |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fa/Macro_MeshToPart.png)                                                                                                                                                                                                                                                       |
| Links                                                                                                                                                                                                                                                                                                                                  |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                       |
| Macro Version                                                                                                                                                                                                                                                                                                                          |
| 1.0                                                                                                                                                                                                                                                                                                                                    |
| Date last modified                                                                                                                                                                                                                                                                                                                     |
| 2011-08-01                                                                                                                                                                                                                                                                                                                             |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                     |
| All                                                                                                                                                                                                                                                                                                                                    |
| Default shortcut                                                                                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                                                                                 |
| See also                                                                                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                                                                        |

## Description

This macro converts selected meshes to parts. It has a broad tolerance, so use it only with objects that have no curves otherwise you'll get errors or weird results

## Script

ToolBar Icon ![](/images/Macro_MeshToPart.png)

**Macro_MeshToPart.FCMacro**

```
import FreeCAD,FreeCADGui,Mesh,Part,MeshPart

for obj in FreeCADGui.Selection.getSelection():
    if "Mesh" in obj.PropertiesList:
        faces = []
        mesh = obj.Mesh
        segments = mesh.getPlanarSegments(0.01) # use rather strict tolerance here

        for i in segments:
          if len(i) > 0:
             # a segment can have inner holes
             wires = MeshPart.wireFromSegment(mesh, i)
             # we assume that the exterior boundary is that one with the biggest bounding box
             if len(wires) > 0:
                ext = None
                max_length = 0
                for i in wires:
                   if i.BoundBox.DiagonalLength > max_length:
                      max_length = i.BoundBox.DiagonalLength
                      ext = i
                wires.remove(ext)
                # all interior wires mark a hole and must reverse their orientation, otherwise Part.Face fails
                for i in wires:
                   i.reverse()
                # make sure that the exterior wires comes as first in the lsit
                wires.insert(0, ext)
                faces.append(Part.Face(wires))

        shell=Part.Compound(faces)
        solid = Part.Solid(Part.Shell(faces))
        name = obj.Name
        FreeCAD.ActiveDocument.removeObject(name)
        FreeCAD.ActiveDocument.addObject("Part::Feature",name).Shape = solid
```

## Link

The discussion on the forum [Convert mesh to solid?](http://forum.freecadweb.org/viewtopic.php?f=3&t=253&hilit=getPlanarSegments)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MeshToPart/en&oldid=692382>"
