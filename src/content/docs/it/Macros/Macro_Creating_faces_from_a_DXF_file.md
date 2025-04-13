---
title: Facce da DXF
---

|                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Facce da DXF                                                                                                                                                                                                                                                        |
| Descrizione                                                                                                                                                                                                                                                         |
| Questa macro crea delle facce dai file DXF. Versione macro: 1.0 Ultima modifica: 2014-10-29 Versione FreeCAD: Tutte versione Download: [Icona per la ToolBar](https://www.freecadweb.org/wiki/images/0/03/Macro_Creating_faces_from_a_DXF_file.png) Autore: shoogen |
| Autore                                                                                                                                                                                                                                                              |
| [shoogen](/index.php?title=User:Shoogen&action=edit&redlink=1 "User:Shoogen (page does not exist)")                                                                                                                                                                 |
| Download                                                                                                                                                                                                                                                            |
| [Icona per la ToolBar](https://www.freecadweb.org/wiki/images/0/03/Macro_Creating_faces_from_a_DXF_file.png)                                                                                                                                                        |
| Link                                                                                                                                                                                                                                                                |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                            |
| Versione macro                                                                                                                                                                                                                                                      |
| 1.0                                                                                                                                                                                                                                                                 |
| Data ultima modifica                                                                                                                                                                                                                                                |
| 2014-10-29                                                                                                                                                                                                                                                          |
| Versioni di FreeCAD                                                                                                                                                                                                                                                 |
| Tutte versione                                                                                                                                                                                                                                                      |
| Scorciatoia                                                                                                                                                                                                                                                         |
| _Nessuna_                                                                                                                                                                                                                                                           |
| Vedere anche                                                                                                                                                                                                                                                        |
| _Nessuno_                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                     |

## Descrizione

Questa macro crea facce da un file DXF, i "Layer" sono riconosciuti separatamente e inseriti in gruppi.

Nel file ci devono essere i gruppi.

## Uso

Avviare la macro e tutti gli oggetti vengono analizzati e trasformati in facce.

Nota: un oggetto non chiuso restituisce un errore

## Script

ToolBar Icon ![](/images/Macro_Creating_faces_from_a_DXF_file.png)

**Macro_Creating_faces_from_a_DXF_file.FCMacro**

```
import FreeCAD,Part,OpenSCAD2Dgeom
doc = App.ActiveDocument
for group in doc.findObjects('App::DocumentObjectGroup'):
    try:
        edges=sum((obj.Shape.Edges for obj in group.Group \
                if hasattr(obj,'Shape')),[])
        face = OpenSCAD2Dgeom.edgestofaces(edges)
        faceobj = doc.addObject('Part::Feature','face_%s' % group.Name)
        faceobj.Label = 'face_%s' % group.Label
        faceobj.Shape = face
    except Part.OCCError: # Exception: #
        FreeCAD.Console.PrintError('Error in Group %s (%s)' % (group.Name,group.Label)+"\n")
```

## Link

Nel forum [Creating faces from a DXF file](http://forum.freecadweb.org/viewtopic.php?f=3&t=8144)

Questo è un esempio: [Generate 3D solid from intersection of three imported 2D](http://forum.freecadweb.org/viewtopic.php?f=3&t=8280&p=67863#p67840)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Creating_faces_from_a_DXF_file/it&oldid=692127>"
