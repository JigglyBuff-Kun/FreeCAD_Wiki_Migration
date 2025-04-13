---
title: MeshToPart
---

|                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MeshToPart                                                                                                                                                                                                                                                                                                                                                                                          |
| Descripción                                                                                                                                                                                                                                                                                                                                                                                         |
| Esta macro convierte las mallas seleccionadas en piezas. Tiene una tolerancia bastante grande, así que utilízala sólo con objetos que no tengan curvas pues de otro modo obtendrás resultados extraños Versión macro : 1.0 Fecha última modificación : 2011-08-01 Versión FreeCAD : All Descargar : [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fa/Macro_MeshToPart.png) Autor : Wmayer |
| Autor                                                                                                                                                                                                                                                                                                                                                                                               |
| [Wmayer](/User:Wmayer "User:Wmayer")                                                                                                                                                                                                                                                                                                                                                                |
| Descargar                                                                                                                                                                                                                                                                                                                                                                                           |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fa/Macro_MeshToPart.png)                                                                                                                                                                                                                                                                                                                    |
| Enlace                                                                                                                                                                                                                                                                                                                                                                                              |
| [Macros recipes](/Macros_recipes/es "Macros recipes/es") [How to install macros](/How_to_install_macros/es "How to install macros/es") [How to customize toolbars](/Customize_Toolbars/es "Customize Toolbars/es")                                                                                                                                                                                  |
| Versión Macro                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.0                                                                                                                                                                                                                                                                                                                                                                                                 |
| Fecha última modificación                                                                                                                                                                                                                                                                                                                                                                           |
| 2011-08-01                                                                                                                                                                                                                                                                                                                                                                                          |
| Versión(es) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                 |
| All                                                                                                                                                                                                                                                                                                                                                                                                 |
| Acceso directo predeterminado                                                                                                                                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                                                                                                                                              |
| Ver también                                                                                                                                                                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                                                                     |

## Descripción

Esta macro convierte las mallas seleccionadas en piezas. Tiene una tolerancia bastante grande, así que utilízala sólo con objetos que no tengan curvas pues de otro modo obtendrás resultados extraños

## Guión

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

## Enlazar

La discusión en el foro [Convert mesh to solid?](http://forum.freecadweb.org/viewtopic.php?f=3&t=253&hilit=getPlanarSegments)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MeshToPart/es&oldid=692383>"
