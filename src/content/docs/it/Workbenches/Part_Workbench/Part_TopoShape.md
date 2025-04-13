---
title: Part TopoShape
---
## Introduzione

Una Part TopoShape, o formalmente una `Part::TopoShape`, è una classe che definisce una "forma topologica" parametrica nel software. Gli oggetti del documento che mostrano qualcosa nella [Vista 3D](/3D_view/it "3D view/it") normalmente hanno una TopoShape.

Le forme topologiche, così come i loro metodi, sono definiti dal kernel [OpenCASCADE Technology](/OpenCASCADE/it "OpenCASCADE/it") (OCCT). FreeCAD usa queste forme e crea dei [App DocumentObjects](/App_DocumentObject/it "App DocumentObject/it") attorno ad esse.

Un altro tipo di classe è quella [meshes](/Mesh/it "Mesh/it"); questa classe non è molto parametrica perché non può essere ridefinita facilmente se non specificando singoli vertici e superfici triangolari.

![](/images/Shape_and_mesh.svg)

A sinistra: Part TopoShape parametrico definito dalle proprietà. A destra: [mesh](/Mesh/it "Mesh/it") non parametrico, definito da vertici e superfici triangolari.

![](/images/FreeCAD_core_objects.svg)

Diagramma semplificato delle relazioni tra gli oggetti principali del programma. La classe `Part::TopoShape` è incorporata nell'oggetto `Part::Feature` e da lì viene propagata a tutti gli oggetti che ne derivano.

## Utilizzo

TopoShape è un oggetto assegnato ad alcuni [App DocumentObjects](/App_DocumentObject/it "App DocumentObject/it").

In particolare, l'oggetto base che gestisce questi tipi di forme è la [Part Feature](/Part_Feature/it "Part Feature/it") (classe `Part::Feature`). Tutti gli oggetti derivati da questa classe avranno accesso a una Part TopoShape.

Alcuni degli oggetti più importanti con Part TopoShape sono i seguenti:

* Qualsiasi solido primitivo creato con [Part](/Part_Workbench/it "Part Workbench/it").
* Qualsiasi [Corpo di PartDesign](/PartDesign_Body/it "PartDesign Body/it") e [PartDesign Feature](/PartDesign_Feature/it "PartDesign Feature/it") creati con [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it").
* Qualsiasi oggetto derivato da [Part Part2DObject](/Part_Part2DObject/it "Part Part2DObject/it"), come la maggior parte degli oggetti creati con [Draft](/Draft_Workbench/it "Draft Workbench/it").
* Qualsiasi [schizzo](/Sketch/it "Sketch/it"), cioè, [Sketcher SketchObject](/Sketcher_SketchObject/it "Sketcher SketchObject/it"), creato con [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it").
* Qualsiasi oggetto creato importando uno STEP, BREP e file simili in formato solido.

## Script

*Vedere anche:* [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it"), e [script di oggetti](/Scripted_objects/it "Scripted objects/it").

Tutti gli oggetti derivati da `Part::Feature` avranno un Part TopoShape, che è normalmente accessibile dal suo attributo `Shape`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::Box", "Box")
print(obj.Shape)

```

Un TopoShape ha molti attributi (variabili) e metodi che contengono informazioni su di esso e che consentono di eseguire operazioni con esso. Queste variabili e metodi possono essere testati nella [console Python](/Python_console/it "Python console/it").

```
print(obj.Shape.Area)
print(obj.Shape.BoundBox)
print(obj.Shape.CenterOfMass)
print(obj.Shape.ShapeType)

obj.Shape.check()
obj.Shape.copy()
obj.Shape.exportStep("my_file.step")
obj.Shape.exportStl("my_file.stl")

```

Per un elenco completo di attributi e metodi, consultare la [documentazione sorgente](/Source_documentation/it "Source documentation/it") e lo strumento ![](/images/Std_PythonHelp.svg) [Documentazione dei moduli Python](/Std_PythonHelp/it "Std PythonHelp/it").

Si può ottenere un rapido riepilogo di tutti i metodi utilizzando la funzione integrata `help()` di Python.

```
help(obj.Shape)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_TopoShape/it&oldid=1345750>"