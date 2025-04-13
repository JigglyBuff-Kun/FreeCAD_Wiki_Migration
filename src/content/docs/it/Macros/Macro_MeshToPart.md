---
title: Da Mesh a Part
---

|                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Da Mesh a Part                                                                                                                                                                                                                                                                                                                                                             |
| Descrizione                                                                                                                                                                                                                                                                                                                                                                |
| Questa macro converte gli oggetti Mesh selezionati in Parti. Ha una tolleranza ampia, quindi è da utilizzare solo con oggetti che non hanno curve altrimenti si ottengono strani risultati Versione macro: 1.0 Ultima modifica: 2011-08-01 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fa/Macro_MeshToPart.png) Autore: Wmayer |
| Autore                                                                                                                                                                                                                                                                                                                                                                     |
| [Wmayer](/User:Wmayer "User:Wmayer")                                                                                                                                                                                                                                                                                                                                       |
| Download                                                                                                                                                                                                                                                                                                                                                                   |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fa/Macro_MeshToPart.png)                                                                                                                                                                                                                                                                                           |
| Link                                                                                                                                                                                                                                                                                                                                                                       |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                                                                   |
| Versione macro                                                                                                                                                                                                                                                                                                                                                             |
| 1.0                                                                                                                                                                                                                                                                                                                                                                        |
| Data ultima modifica                                                                                                                                                                                                                                                                                                                                                       |
| 2011-08-01                                                                                                                                                                                                                                                                                                                                                                 |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                                                                        |
| All                                                                                                                                                                                                                                                                                                                                                                        |
| Scorciatoia                                                                                                                                                                                                                                                                                                                                                                |
| _Nessuna_                                                                                                                                                                                                                                                                                                                                                                  |
| Vedere anche                                                                                                                                                                                                                                                                                                                                                               |
| _Nessuno_                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                            |

## Descrizione

Questa macro converte gli oggetti Mesh selezionati in Parti. Ha una tolleranza ampia, quindi è da utilizzare solo con oggetti che non hanno curve altrimenti si ottengono errori o strani risultati

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

## Vincolo

La discussione sul foro [Convert mesh to solid?](http://forum.freecadweb.org/viewtopic.php?f=3&t=253&hilit=getPlanarSegments)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MeshToPart/it&oldid=692387>"
