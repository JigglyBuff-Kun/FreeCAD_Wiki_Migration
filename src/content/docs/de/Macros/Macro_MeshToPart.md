---
title: MeshToPart
---

|                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MeshToPart                                                                                                                                                                                                                                                                                                                                                                              |
| Beschreibung                                                                                                                                                                                                                                                                                                                                                                            |
| Dieses Makro konvertiert ausgewählte Netze in Teile. Es hat eine große Toleranz, verwenden Sie es also nur für Objekte, die keine Kurven haben, sonst erhalten Sie seltsame Ergebnisse Versionsmakro : 1.0 Datum der letzten Änderung : 2011-08-01 FreeCAD version : All Herunterladen : [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fa/Macro_MeshToPart.png) Autor: Wmayer |
| Autor                                                                                                                                                                                                                                                                                                                                                                                   |
| [Wmayer](/User:Wmayer "User:Wmayer")                                                                                                                                                                                                                                                                                                                                                    |
| Herunterladen                                                                                                                                                                                                                                                                                                                                                                           |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fa/Macro_MeshToPart.png)                                                                                                                                                                                                                                                                                                        |
| Links                                                                                                                                                                                                                                                                                                                                                                                   |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                                                                                                                            |
| Macro-Version                                                                                                                                                                                                                                                                                                                                                                           |
| 1.0                                                                                                                                                                                                                                                                                                                                                                                     |
| Datum der letzten Änderung                                                                                                                                                                                                                                                                                                                                                              |
| 2011-08-01                                                                                                                                                                                                                                                                                                                                                                              |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                                                                                                                      |
| All                                                                                                                                                                                                                                                                                                                                                                                     |
| Standardverknüpfung                                                                                                                                                                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                                                                                                                                                                                  |
| Siehe auch                                                                                                                                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                                         |

## Beschreibung

Dieses Makro konvertiert ausgewählte Netze in Teile. Es hat eine große Toleranz, verwenden Sie es also nur für Objekte, die keine Kurven haben, andernfalls werden Fehler oder seltsame Ergebnisse angezeigt

## Skript

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

## Verknüpfung

Die Diskussion im Forum [Convert mesh to solid?](http://forum.freecadweb.org/viewtopic.php?f=3&t=253&hilit=getPlanarSegments)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MeshToPart/de&oldid=692386>"
