---
title: Part Crea forma da mesh
---
|  |
| --- |
| ‏‎Part Crea forma da mesh |
| Posizione nel menu |
| Parte → Crea forma da mesh... |
| Ambiente |
| [Part](/Part_Workbench/it "Part Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Converti in solido](/Part_MakeSolid/it "Part MakeSolid/it"), [Affina forma](/Part_RefineShape/it "Part RefineShape/it"), [Crea punti da mesh](/Part_PointsFromMesh/it "Part PointsFromMesh/it") |
|  |

## Introduzione

Il comando ![](/images/Part_ShapeFromMesh.svg) **Crea forma da mesh** crea forme da [oggetti mesh](/Mesh/it "Mesh/it"). In FreeCAD gli oggetti mesh hanno limitate capacità di editing, convertirli in [forme](/Shape/it "Shape/it") permette di manipolarli con molti più comandi di modifica e booleani.

L'operazione inversa è [Mesh da forma](/Mesh_FromPartShape/it "Mesh FromPartShape/it") dell'![](/images/Workbench_Mesh.svg) [Ambiente Mesh](/Mesh_Workbench/it "Mesh Workbench/it").

## Utilizzo

1. L'analisi e la riparazione dell'oggetto mesh, se necessario, devono essere eseguite prima di avviare questo comando. Strumenti appropriati per questa attività sono disponibili in ![](/images/Workbench_Mesh.svg) [Mesh](/Mesh_Workbench/it "Mesh Workbench/it").
2. Selezionare uno o più oggetti mesh.
3. Seleziona l'opzione **Parte → ![](/images/Part_ShapeFromMesh.svg) Crea forma da mesh** dal menu.
4. Si apre la finestra di dialogo **Forma da mesh**.
5. Facoltativamente selezionare la casella di controllo **Cuci forma** e specificare una tolleranza:
   * Questa opzione solitamente non è necessaria. È pensata per oggetti mesh che non sono impermeabili e presentano piccoli spazi tra i bordi.
   * Se l'opzione è selezionata, viene creato un composto di gusci, anziché un composto di facce.
   * L'operazione di cucitura potrebbe essere impegnativa dal punto di vista computazionale.
6. Premere il pulsante OK.
7. Per ogni oggetto mesh selezionato viene creata una [shape](/Shape/it "Shape/it") come un nuovo oggetto separato.
8. Facoltativamente utilizzare ![](/images/Part_RefineShape.svg) [Part Affina forma](/Part_RefineShape/it "Part RefineShape/it") su questi oggetti.
9. Facoltativamente, trasformare gli oggetti finali in solidi con ![](/images/Part_MakeSolid.svg) [Part Crea solido](/Part_MakeSolid/it "Part MakeSolid/it").

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Gli oggetti creati Part Forma da mesh sono oggetti [Part Feature](/Part_Feature/it "Part Feature/it") senza proprietà aggiuntive.

## Scripting

La creazione di una [Forma](/Shape/it "Shape/it") da una [Mesh](/Mesh/it "Mesh/it") può essere eseguita utilizzando il metodo `makeShapeFromMesh` da una [Part TopoShape](/Part_TopoShape/it "Part TopoShape/it"); è necessario specificare la mesh e la tolleranza di origine e assegnare il risultato a un nuovo oggetto [Part Feature](/Part_Feature/it "Part Feature/it").

Si noti che la mesh deve essere ricalcolata prima di essere convertita in Shape, altrimenti non ci saranno informazioni sulla topologia e la conversione non avrà successo.

```
import FreeCAD as App
import Part

doc = App.ActiveDocument
mesh = doc.addObject("Mesh::Cube", "Mesh")
mesh.recompute()

shape = Part.Shape()
shape.makeShapeFromMesh(mesh.Mesh.Topology, 0.1)

solid = doc.addObject("Part::Feature", "Solid")
solid.Shape = Part.Solid(shape.removeSplitter())
solid.Placement.Base = App.Vector(15, 0, 0)
doc.recompute()

```

## Links

* [Edit STL Files In FreeCAD](https://www.youtube.com/watch?v=5lwENZeNiNg&feature=youtu.be) video by AllVisuals4U.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ShapeFromMesh/it&oldid=1477654>"