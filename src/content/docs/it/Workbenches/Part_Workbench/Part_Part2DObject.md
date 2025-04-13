---
title: Part Part2DObject
---
## Introduzione

![](/images/Tree_Part2D.svg)

Un Part Part2DObject, o formalmente un `Part::Part2DObject`, è un elemento semplice con una [forma topologica](/Part_TopoShape/it "Part TopoShape/it") che può essere visualizzato nella [Vista 3D](/3D_view/it "3D view/it").

`Part::Part2DObject` è derivato dalla [Part Feature](/Part_Feature/it "Part Feature/it"), ma è specializzato nella geometria 2D, dato che la sua forma è posizionata su un piano. Il piano è definito dalla sua proprietà Dati**Placement** (posizione, normale e rotazione). Tuttavia, il piano può anche essere definito supportando elementi geometrici, come il piano creato da tre vertici arbitrari o una faccia di un corpo solido.

![](/images/FreeCAD_core_objects.svg)

Diagramma semplificato delle relazioni tra gli oggetti principali in FreeCAD

## Utilizzo

[Part Part2DObject](/Part_Part2DObject "Part Part2DObject") è un oggetto interno, quindi non può essere creato dall'interfaccia grafica, ma solo dalla [console Python](/Python_console/it "Python console/it") come descritto nel paragrafo [Scripting](#Script).

`Part::Part2DObject` è definito nell'ambiente [Part](/Part_Workbench/it "Part Workbench/it") ma può essere usato come classe base per gli [oggetti da script](/Scripted_objects/it "Scripted objects/it") in tutti gli [[Workbenches/it|ambienti] ] che producono forme geometriche 2D. Ad esempio, è l'oggetto base per gli ([Sketcher SketchObject](/Sketcher_SketchObject/it "Sketcher SketchObject/it")) degli schizzi e per la maggior parte degli oggetti creati con [Draft](/Draft_Workbench/it "Draft Workbench/it").

I workbench possono aggiungere diverse proprietà a questo elemento di base per produrre un oggetto con comportamento complesso.

## Proprietà

Vedere [Proprietà](/Property/it "Property/it") per tutti i tipi di proprietà che possono avere gli oggetti con script.

Il Part Part2DObject (classe `Part::Part2DObject`) è derivato da [Part Feature](/Part_Feature/it "Part Feature/it") (classe `Part::Feature`) e ne eredita tutte le proprietà.

Il Part Part2DObject ha anche le seguenti proprietà aggiuntive nell'[editor delle proprietà](/Property_editor/it "Property editor/it"). Le proprietà nascoste possono essere visualizzate utilizzando il comando **Mostra nascoste** nel menu contestuale dell'[editor delle proprietà](/Property_editor/it "Property editor/it").

### Dati

Attachment

* Dati (Hidden)**Attacher Type** (`String`): nome della classe dell'oggetto motore di collegamento che guida l'allegato. Il valore predefinito è `Attacher::AttachEnginePlane`.
* Dati**Support** (`LinkSubList`): è il piano o la faccia che supporta la geometria 2D. Il valore predefinito è un elenco vuoto `[]`.
* Dati**Map Mode** (`Enumeration`): `Deactivated` per impostazione predefinita. Questa proprietà determina un piano che l'oggetto utilizzerà come riferimento per la geometria 2D. Cliccando sui puntini di sospensione ... (tre punti), a destra del campo di immissione si avvia il comando [Part EditAttachment](/Part_EditAttachment/it "Part EditAttachment/it") che consente di selezionare il piano di appoggio selezionando diversi elementi nella [Vista 3D](/3D_view/it "3D view/it"). Le diverse modalità sono: `Deactivated`, `Translate origin`, `Object's XY`, `Object's XZ`, `Object's YZ`, `Plane face`, `Tangent to surface`, `Normal to edge`, `Frenet NB`, `Frenet TN`, `Frenet TB`, `Concentric`, `Revolution section`, `Plane by 3 points`, `Normal to 3 points`, `Folding`, `Inertia 2-3`, `Align O-N-X`, `Align O-N-Y`, `Align O-X-Y`, `Align O-X-N`, `Align O-Y-N`, `Align O-Y-X`.
* Dati**Map Reversed** (`Bool`): il valore predefinito è `false`; se è `true` la direzione Z verrà invertita. Ad esempio, uno [schizzo](/Sketch/it "Sketch/it") verrà capovolto. Nascosto se Dati**Map Mode** è `Deactivated`.
* Dati (Hidden)**Map Path Parameter** (`Float`): imposta il punto della curva su cui mappare uno [schizzo](/Sketch/it "Sketch/it"). Va da `0` a `1`, che corrisponde a `start` e `end`. Il valore predefinito è `0`.
* Dati**Attachment Offset** (`Placement`): la posizione dell'oggetto nella [vista 3D](/3D_view/it "3D view/it"), rispetto al posizionamento dell'oggetto allegato. Il posizionamento è definito da un punto `Base` (vettore) e da una `Rotazione` (asse e angolo). Vedi [Posizionamento](/Placement/it "Placement/it"). Nascosto se Dati**Map Mode** è `Deactivated`.

## Script

*Vedere anche:* [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it"), e [script di oggetti](/Scripted_objects/it "Scripted objects/it").

Vedere [Part Feature](/Part_Feature/it "Part Feature/it") per le informazioni generali sull'aggiunta di oggetti al documento..

Un Part2DObject viene creato con il metodo `addObject()` del documento.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::Part2DObject", "Name")
obj.Label = "Custom label"

```

Per la sottoclasse [Python](/Python/it "Python/it"), è necessario creare un oggetto `Part::Part2DObjectPython`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::Part2DObjectPython", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Part2DObject/it&oldid=1562496>"