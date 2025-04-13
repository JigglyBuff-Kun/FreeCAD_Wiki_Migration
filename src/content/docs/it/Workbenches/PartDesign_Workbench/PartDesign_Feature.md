---
title: Funzioni di PartDesign
---
## Introduzione

Per PartDesign Feature (funzione di PartDesign) si intende a un "passaggio" nel processo di modellazione che si verifica all'interno di un [Corpo di PartDesign](/PartDesign_Body/it "PartDesign Body/it"). Ad esempio, ogni volta che si aggiunge un cubo solido con [Cubo additivo](/PartDesign_AdditiveBox/it "PartDesign AdditiveBox/it"), si aggiunge una funzione; quando si aggiunge uno smusso a un bordo con [Smusso di PartDesign](/PartDesign_Chamfer/it "PartDesign Chamfer/it"), si aggiunge un'altra funzione; quando si intaglia un foro usando uno [schizzo](/Sketch/it "Sketch/it") per creare una [Tasca](/PartDesign_Pocket/it "PartDesign Pocket/it"), si aggiunge un'altra funzione.

![](/images/PartDesign_Feature_example.png)

Editazione delle funzioni in un Corpo di PartDesign con tre funzioni sequenziali.

Esistono molti tipi di funzioni che possono aggiungere o rimuovere del volume da un solido iniziale. La parola "funzione" si riferisce all'operazione stessa e anche al solido risultante dopo tale operazione.

Per ulteriori informazioni sulla creazione di oggetti solidi con [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") vedere [editazione delle funzioni](/Feature_editing/it "Feature editing/it").

## Utilizzo

Quasi tutti gli strumenti di PartDesign hanno lo scopo di aggiungere funzioni a un Corpo. È possibile accedere a questi strumenti dal menu e dai pulsanti della barra degli strumenti mentre è selezionato un oggetto o un sottoelemento (vertice, bordo, faccia).

Le funzioni possono essere inserite in diverse categorie:

* Funzione base: si riferisce all'oggetto Funzione Base che può essere creato in un [Corpo di Part Design](/PartDesign_Body/it "PartDesign Body/it").
* Additive e sottrattive
  + Forme primitive additive: [Cubo](/PartDesign_AdditiveBox/it "PartDesign AdditiveBox/it"), [Cono](/PartDesign_AdditiveCone/it "PartDesign AdditiveCone/it"), [Cilindro](/PartDesign_AdditiveCylinder/it "PartDesign AdditiveCylinder/it"), [Elissoide](/PartDesign_AdditiveEllipsoid/it "PartDesign AdditiveEllipsoid/it"), [Prisma](/PartDesign_AdditivePrism/it "PartDesign AdditivePrism/it"), [Sfera](/PartDesign_AdditiveSphere/it "PartDesign AdditiveSphere/it"), [Toro](/PartDesign_AdditiveTorus/it "PartDesign AdditiveTorus/it"), e [Cuneo](/PartDesign_AdditiveWedge/it "PartDesign AdditiveWedge/it").
  + Forme primitive sottrattive: [Cubo sottrattivo](/PartDesign_SubtractiveBox/it "PartDesign SubtractiveBox/it"), [Cono sottrattivo](/PartDesign_SubtractiveCone/it "PartDesign SubtractiveCone/it"), [Cilindro sottrattivo](/PartDesign_SubtractiveCylinder/it "PartDesign SubtractiveCylinder/it"), [Elissoide sottrattivo](/PartDesign_SubtractiveEllipsoid/it "PartDesign SubtractiveEllipsoid/it"), [Prisma sottrattivo](/PartDesign_SubtractivePrism/it "PartDesign SubtractivePrism/it") [Sfera sottrattiva](/PartDesign_SubtractiveSphere/it "PartDesign SubtractiveSphere/it"), [Toro sottrattivo](/PartDesign_SubtractiveTorus/it "PartDesign SubtractiveTorus/it"), e [Cuneo sottrattivo](/PartDesign_SubtractiveWedge/it "PartDesign SubtractiveWedge/it").
  + Additive basate sul profilo: [Estrusione](/PartDesign_Pad/it "PartDesign Pad/it"), [Rivoluzione](/PartDesign_Revolution/it "PartDesign Revolution/it"), [Loft](/PartDesign_AdditiveLoft/it "PartDesign AdditiveLoft/it"), [Sweep](/PartDesign_AdditivePipe/it "PartDesign AdditivePipe/it").
  + Sottrattive basate sul profilo: [Tasca](/PartDesign_Pocket/it "PartDesign Pocket/it"), [Foro](/PartDesign_Hole/it "PartDesign Hole/it"), [Gola](/PartDesign_Groove/it "PartDesign Groove/it"), [Loft sottrattivo](/PartDesign_SubtractiveLoft/it "PartDesign SubtractiveLoft/it"), [Sweep sottrattivo](/PartDesign_SubtractivePipe/it "PartDesign SubtractivePipe/it").
* [Booleane](/PartDesign_Boolean/it "PartDesign Boolean/it"), compreso fusione, taglio e intersezione.
* Spoglia
  + [Smusso](/PartDesign_Chamfer/it "PartDesign Chamfer/it")
  + [Sformo](/PartDesign_Draft/it "PartDesign Draft/it")
  + [Raccordo](/PartDesign_Fillet/it "PartDesign Fillet/it")
  + [Spessore](/PartDesign_Thickness/it "PartDesign Thickness/it")
* Trasformazione
  + [Serie rettangolare](/PartDesign_LinearPattern/it "PartDesign LinearPattern/it")
  + [Specchiato](/PartDesign_Mirrored/it "PartDesign Mirrored/it")
  + [Multi-trasformazione](/PartDesign_MultiTransform/it "PartDesign MultiTransform/it")
  + [Serie Polare](/PartDesign_PolarPattern/it "PartDesign PolarPattern/it")
  + [Scala](/PartDesign_Scaled/it "PartDesign Scaled/it")

## Eredità

![](/images/FreeCAD_core_objects.svg)

Diagramma semplificato delle relazioni tra gli oggetti principali del programma. Gli oggetti `PartDesign::Feature` sono usati per costruire solidi 3D parametrici e quindi sono derivati dall'oggetto base `Part::Feature`.

## Script

*Vedere anche:* [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it"), e [script di oggetti](/Scripted_objects/it "Scripted objects/it").

Vedere [Part Feature](/Part_Feature/it "Part Feature/it") per le informazioni generali su come aggiugere oggetti tramite la [console Python](/Python_console/it "Python console/it").

Vedere [Corpo di PartDesign](/PartDesign_Body/it "PartDesign Body/it") per le informazioni generali su come aggiungere un Corpo. Quando esiste un Corpo, le funzioni possono essere collegate ad esso usando il metodo `addObject()` del Corpo.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject('PartDesign::Body', 'Body')
obj.Label = "Custom label"

feature = App.ActiveDocument.addObject('PartDesign::AdditiveBox', 'Box')
feature.Width = 200
feature.Length = 300
feature.Height = 500
obj.addObject(feature)
App.ActiveDocument.recompute()

feature2 = App.ActiveDocument.addObject('PartDesign::SubtractiveBox', 'Box')
feature2.Width = 50
feature2.Length = 200
feature2.Height = 400
obj.addObject(feature2)
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Feature/it&oldid=1341932>"