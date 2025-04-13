---
title: Copiare oggetti
---
## Panoramica

Come molti altri programmi per computer, FreeCAD ha la capacità di tagliare, copiare e incollare oggetti. Gli oggetti di un [documento](/Document_structure/it "Document structure/it") possono essere copiati liberamente all'interno di un stesso documento o tra documenti utilizzando i comandi ![](/images/Std_Copy.svg) [Copia](/Std_Copy/it "Std Copy/it"), ![](/images/Std_Paste.svg) [Incolla](/Std_Paste/it "Std Paste/it") e [Duplica l'oggetto selezionato](/Std_DuplicateSelection/it "Std DuplicateSelection/it").

![](/images/Copy_past_duplicate.png)

Si tenga presente che gli oggetti copiati-incollati sono scollegati dall'originale. Se si desiderano cloni collegati, utilizzare ![](/images/Draft_Clone.svg) [Clone dell'Ambiente Draft](/Draft_Clone/it "Draft Clone/it") o ![](/images/PartDesign_Clone.svg) [Clone dell'Ambiente Part Design](/PartDesign_Clone/it "PartDesign Clone/it"). Se non si ha bisogno né di un clone dipendente né di una replica parametrica, si può anche utilizzare ![](/images/Part_SimpleCopy.svg)  [Crea una copia semplice dell'Ambiente Part](/Part_SimpleCopy/it "Part SimpleCopy/it"). Per i cloni con motivi, esaminare la sezione [Altri metodi](#Altri_metodi) di questa pagina.

## Copia di oggetti collegati

Se un oggetto da copiare ha collegamenti a oggetti non presenti nella selezione, FreeCAD chiederà se gli oggetti non selezionati devono essere inclusi nell'operazione di copia.

## Trovare e posizionare gli oggetti incollati

Dopo un'operazione di copia-incolla, potrebbe non essere ovvio dove si trovano i nuovi oggetti nella [vista 3D](/3D_view/it "3D view/it"). Questo perché i nuovi oggetti hanno la stessa proprietà [Placement](/Placement/it "Placement/it") degli originali. Attivare/disattivare la proprietà Visibilità (Barra spaziatrice) per nascondere gli originali e quindi spostare le copie nella posizione corretta, ad esempio utilizzando ![](/images/Std_TransformManip.svg) [Trasforma](/Std_TransformManip/it "Std TransformManip/it") o ![](/images/Std_Placement.svg) [Posizionamento](/Std_Placement/it "Std Placement/it").

## Altri metodi

Come per la maggior parte delle operazioni, anche per fare le copie, in FreeCAD ci sono molti modi. Per ulteriori idee, vedere:

* PartDesign: [Rifletti](/PartDesign_Mirrored/it "PartDesign Mirrored/it"), [Schiera lineare](/PartDesign_LinearPattern/it "PartDesign LinearPattern/it"), [Schiera polare](/PartDesign_PolarPattern/it "PartDesign PolarPattern/it"), [Multi Trasformazione](/PartDesign_MultiTransform/it "PartDesign MultiTransform/it")
* Part: [Specchia](/Part_Mirror/it "Part Mirror/it"), [Crea semplice copia](/Part_SimpleCopy/it "Part SimpleCopy/it")
* Draft: [Offset](/Draft_Offset/it "Draft Offset/it"), [Scala](/Draft_Scale/it "Draft Scale/it"), [Schiera](/Draft_OrthoArray/it "Draft OrthoArray/it"), [PathArray](/Draft_PathArray/it "Draft PathArray/it"), [Clona](/Draft_Clone/it "Draft Clone/it"), [Simmetria](/Draft_Mirror/it "Draft Mirror/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Copying_Objects/it&oldid=1442252>"