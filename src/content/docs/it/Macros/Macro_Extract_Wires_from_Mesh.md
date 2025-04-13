---
title: Estrai Wire da Mesh
---

|                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wire da Mesh                                                                                                                                                                                                                       |
| Descrizione                                                                                                                                                                                                                        |
| Estrae i bordi wire dai mesh selezionati Versione macro: 1 Ultima modifica: 2016-12-17 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/28/Macro_Extract_Wires_from_Mesh.png) Autore: Yorik |
| Autore                                                                                                                                                                                                                             |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                  |
| Download                                                                                                                                                                                                                           |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/28/Macro_Extract_Wires_from_Mesh.png)                                                                                                                                      |
| Link                                                                                                                                                                                                                               |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")           |
| Versione macro                                                                                                                                                                                                                     |
| 1                                                                                                                                                                                                                                  |
| Data ultima modifica                                                                                                                                                                                                               |
| 2016-12-17                                                                                                                                                                                                                         |
| Versioni di FreeCAD                                                                                                                                                                                                                |
| All                                                                                                                                                                                                                                |
| Scorciatoia                                                                                                                                                                                                                        |
| _Nessuna_                                                                                                                                                                                                                          |
| Vedere anche                                                                                                                                                                                                                       |
| _Nessuno_                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                    |

## Descrizione

Trova i contorni di wire negli oggetti mesh selezionati. I contorni wire sono formati da tutti i bordi trovati nell'oggetto mesh che sono condivisi da una sola faccia, cioè, che sono spigoli "confine". I wire trovati vengono aggiunti al documento (un composto per oggetto mesh), mentre la mesh stessa viene nascosta.

## Script

Icona barra strumenti
![](/images/Macro_Extract_Wires_from_Mesh.png)

**Macro_Extract_Wires_from_Mesh.FCMacro**

```
#!/usr/bin/python

# This macro will extract wires from selected meshes
# The result is a new Part Compound containing wires, one per original mesh object
# The selected meshes will be hidden but still selected after the operation.
# Warning, it takes a bit of time...

import FreeCAD,FreeCADGui,Part,Draft,DraftGeomUtils,Mesh
for obj in FreeCADGui.Selection.getSelection():
    if obj.isDerivedFrom("Mesh::Feature"):
        shape = Part.Shape()
        shape.makeShapeFromMesh(obj.Mesh.Topology,0.1)
        edges = []
        lut = {}
        for f in shape.Faces:
            for e in f.Edges:
                lut.setdefault(e.hashCode(),[]).append(e)
        for k,v in lut.items():
            if len(v) == 1:
                edges.extend(v)
        if edges:
            wires = DraftGeomUtils.findWires(edges)
            if wires:
                Part.show(Part.makeCompound(wires))
                obj.ViewObject.hide()
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Extract_Wires_from_Mesh/it&oldid=1186494>"
