---
title: SíťNaDíl
---

|                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MeshToPart                                                                                                                                                                                                                                                                                                                                                       |
| Popis                                                                                                                                                                                                                                                                                                                                                            |
| Toto makro zkonvertuje vybrané sítě na díl. Má ovšem značné tolerance, takže je použitelné pouze pro objekty, které nemají křivky, jinak nelze zaručit správný výsledek. Version macro : 1.0 Date last modification : 2011-08-01 FreeCAD version : All Download : [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fa/Macro_MeshToPart.png) Autor: Wmayer |
| Autor                                                                                                                                                                                                                                                                                                                                                            |
| [Wmayer](/User:Wmayer "User:Wmayer")                                                                                                                                                                                                                                                                                                                             |
| Download                                                                                                                                                                                                                                                                                                                                                         |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fa/Macro_MeshToPart.png)                                                                                                                                                                                                                                                                                 |
| Odkazy                                                                                                                                                                                                                                                                                                                                                           |
| [Makro recepty                                                                                                                                                                                                                                                                                                                                                   | ](/Macros_recipes/cs "Macros recipes/cs") [Jak nainstalovat makra](/How_to_install_macros/cs "How to install macros/cs") [Jak přizpůsobit panely nástrojů](/Customize_Toolbars/cs "Customize Toolbars/cs") |
| Verze                                                                                                                                                                                                                                                                                                                                                            |
| 1.0                                                                                                                                                                                                                                                                                                                                                              |
| Datum poslední úpravy                                                                                                                                                                                                                                                                                                                                            |
| 2011-08-01                                                                                                                                                                                                                                                                                                                                                       |
| Verze FreeCAD                                                                                                                                                                                                                                                                                                                                                    |
| All                                                                                                                                                                                                                                                                                                                                                              |
| Výchozí zástupce                                                                                                                                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                                                                                                                                           |
| Viz též                                                                                                                                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                  |

## Popis

Toto makro zkonvertuje vybrané sítě na díl. Má ovšem značné tolerance, takže je použitelné pouze pro objekty, které nemají křivky, jinak nelze zaručit správný výsledek.

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

## Odkaz

Diskuse na fóru [Convert mesh to solid?](http://forum.freecadweb.org/viewtopic.php?f=3&t=253&hilit=getPlanarSegments)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MeshToPart/cs&oldid=692384>"
