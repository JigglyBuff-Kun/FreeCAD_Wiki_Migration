---
title: Feature
---
## Introduzione

In FreeCAD la parola "Feature" viene normalmente utilizzata per fare riferimento a un oggetto [Feature di PartDesign](/PartDesign_Feature/it "PartDesign Feature/it") (classe `PartDesign::Feature`) definito dalla classe [Ambiente di lavoro PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it"). Questa è un'operazione o un passaggio di modellazione eseguito per creare o modificare una [Shape](/Shape/it "Shape/it") solida seguendo il paradigma [feature editing](/Feature_editing/it "Feature editing/it").

Vedere [PartDesign Feature](/PartDesign_Feature/it "PartDesign Feature/it") per ulteriori informazioni su questo tipo di oggetto.

## Utilizzo

1. Passare a ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it").
2. Premere ![](/images/PartDesign_Body.svg) [Crea un corpo](/PartDesign_Body/it "PartDesign Body/it").
3. Premere ![](/images/PartDesign_NewSketch.svg) [Crea uno schizzo](/PartDesign_NewSketch/it "PartDesign NewSketch/it") per creare un nuovo [Schizzo](/Sketch/it "Sketch/it").
4. Creare una figura chiusa, quindi utilizzare ![](/images/PartDesign_Pad.svg) [Estrusione](/PartDesign_Pad/it "PartDesign Pad/it") per estrudere lo schizzo e creare un solido iniziale. Questo solido iniziale è la Feature iniziale.
5. Aggiungere altri schizzi e pad e utilizzare gli altri strumenti di [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") per modificare e trasformare il solido iniziale. Ciascuno di questi passaggi corrisponde alle Feature del [Corpo](/Body/it "Body/it").
6. In alternativa, aggiungere oggetti primitivi, come ![](/images/PartDesign_AdditiveBox.svg) [Cubo additivo](/PartDesign_AdditiveBox/it "PartDesign AdditiveBox/it") e ![](/images/PartDesign_SubtractiveCylinder.svg) [Cilindro sottrattivo](/PartDesign_SubtractiveCylinder/it "PartDesign SubtractiveCylinder/it"). Tutti i passaggi additivi e sottrattivi inseriscono feature utilizzate per creare un volume finale.

## Note

In senso generale, una "Feature" può essere un qualsiasi passaggio di modellazione utilizzato per creare una [Shape](/Shape/it "Shape/it") finale, con qualsiasi strumento di ogni [Ambiente di lavoro](/Workbenches/it "Workbenches/it").

* Ad esempio, in [Ambiente Part](/Part_Workbench/it "Part Workbench/it"), nel flusso di lavoro della [geometria solida costruttiva](/Constructive_solid_geometry/it "Constructive solid geometry/it"), una "Feature" potrebbe essere una qualsiasi operazione booleana, come ![](/images/Part_Fuse.svg) [Unione](/Part_Fuse/it "Part Fuse/it"), ![](/images/Part_Cut.svg) [Taglio](/Part_Cut/it "Part Cut/it") o ![](/images/Part_Common.svg) [Intersezione](/Part_Common/it "Part Common/it").

In un senso più specifico, una "Feature" è un passaggio di modellazione utilizzato all'interno di un [Corpo](/PartDesign_Body/it "PartDesign Body/it").

* Ad esempio, ![](/images/PartDesign_AdditiveCylinder.svg) [Cilindro additivo](/PartDesign_AdditiveCylinder/it "PartDesign AdditiveCylinder/it"), ![](/images/PartDesign_AdditiveLoft.svg) [Loft additivo](/PartDesign_AdditiveLoft/it "PartDesign AdditiveLoft/it"), ![](/images/PartDesign_Pocket.svg) [Tasca](/PartDesign_Pocket/it "PartDesign Pocket/it"), ![](/images/PartDesign_SubtractiveCone.svg) [Cono sottrattivo](/PartDesign_SubtractiveCone/it "PartDesign SubtractiveCone/it"), ecc., sono tutte "Feature".

Retrieved from "<http://wiki.freecad.org/index.php?title=Feature/it&oldid=1363662>"