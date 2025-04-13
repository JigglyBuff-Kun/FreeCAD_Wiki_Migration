---
title: Corpo
---
## Introduzione

In FreeCAD la parola "Body" (Corpo) viene normalmente utilizzata per fare riferimento a un oggetto [PartDesign Body](/PartDesign_Body/it "PartDesign Body/it") (classe `PartDesign::Body`) definito dall'ambiente [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it"). Si tratta di un oggetto contenitore che può contenere degli [Schizzi 2D](/Sketch/it "Sketch/it") e delle [funzioni geometriche 3D](/PartDesign_Feature/it "PartDesign Feature/it") per creare una forma solida.

Per ulteriori informazioni su questo tipo di oggetto vedere [Corpo di PartDesign](/PartDesign_Body/it "PartDesign Body/it").

## Utilizzo

1. Passare nell'ambiente [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it").
2. Premere ![](/images/PartDesign_Body.svg) [Crea un corpo](/PartDesign_Body/it "PartDesign Body/it").
3. Premere ![](/images/PartDesign_NewSketch.svg) [Crea uno schizzo](/PartDesign_NewSketch/it "PartDesign NewSketch/it") per creare un nuovo [schizzo](/Sketch/it "Sketch/it").
4. Creare un contorno chiuso, quindi utilizzare ![](/images/PartDesign_Pad.svg) [Pad](/PartDesign_Pad/it "PartDesign Pad/it") di PartDesign per estrudere lo schizzo e creare un solido iniziale.
5. Aggiungere altri schizzi e pad e usare altri strumenti di [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") per modificare e trasformare il solido iniziale.

In alternativa, invece di usare gli [schizzi](/Sketch/it "Sketch/it"), si possono aggiungere [funzioni primitive](/PartDesign_Feature/it "PartDesign Feature/it") di PartDesign, ad esempio, un ![](/images/PartDesign_AdditiveBox.svg) [Cubo additivo](/PartDesign_AdditiveBox/it "PartDesign AdditiveBox/it"). Per creare un volume finale è possibile utilizzare qualsiasi numero di funzioni additive e sottrattive.

## Note

È richiesto un Corpo quando si utilizza [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") nella metodologia di [editazione delle funzioni](/Feature_editing/it "Feature editing/it").

Non è necessario un Corpo quando si utilizza [Part](/Part_Workbench/it "Part Workbench/it"), poiché questo ambiente utilizza il flusso di lavoro detto [geometria solida costruttiva](/Constructive_solid_geometry/it "Constructive solid geometry/it"), che si basa sulle [forme primitive](/Part_Primitives/it "Part Primitives/it") e le operazioni booleane.

Retrieved from "<http://wiki.freecad.org/index.php?title=Body/it&oldid=1351045>"