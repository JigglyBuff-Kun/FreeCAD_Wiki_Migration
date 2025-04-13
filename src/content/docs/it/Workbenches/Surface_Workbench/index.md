---
title: Ambiente Surface
---

![](/images/Workbench_Surface.svg)

L'icona dell'ambiente Surface

## Introduzione

L'Ambiente Surface![](/images/Workbench_Surface.svg) introdotto in FreeCAD 0.17 fornisce strumenti per creare e modificare semplici [superfici NURBS](https://en.wikipedia.org/wiki/Non-uniform_rational_B-spline). Questi strumenti hanno una funzionalità simile allo strumento ![](/images/Part_Builder.svg) [Genera una forma...](/Part_Builder/it "Part Builder/it") di Part quando si usa l'opzione **Faccia dai bordi**. Tuttavia, a differenza di quello strumento, gli strumenti di Surface sono parametrici e forniscono opzioni aggiuntive. A tale riguardo, gli strumenti di questo ambiente sono simili a funzioni come ![](/images/PartDesign_AdditiveLoft.svg) [Loft additivo](/PartDesign_AdditiveLoft/it "PartDesign AdditiveLoft/it") e ![](/images/PartDesign_AdditivePipe.svg) [Sweep additivo](/PartDesign_AdditivePipe/it "PartDesign AdditivePipe/it") di PartDesign.

Alcune delle funzioni fornite sono:

- Creare superfici dai bordi delimitanti.
- Allineare la curvatura alle facce vicine,
- Vincolare le superfici a curve o vertici aggiuntivi.
- Estendere le facce (è necessario scoprire come!)
- Si può usare un oggetto mesh come modello per creare curve spline sulla sua superficie.

![](/images/Surface_example.png)

## Utilizzo

L'obiettivo dell'ambiente Superficie è quello di creare delle facce con delle forme che non sono disponibili con gli strumenti standard degli altri ambienti. Il kernel di OCCT fornisce ad esempio una scatola rettangolare con angoli arrotondati con raggi diversi.

![](/images/Toy_Duck.png)

Superficie creata con schizzi posizionati in piani di riferimento con gli strumenti di [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it")

Surface si integra con gli altri ambienti di FreeCAD. L'esempio sopra è stato creato da ![](/images/Sketcher_NewSketch.svg) [schizzi](/Sketch/it "Sketch/it") posizionati su ![](/images/PartDesign_Plane.svg) [piani di riferimento](/PartDesign_Plane/it "PartDesign Plane/it") in ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it"). Il modello può essere completamente parametrico, se tutti i piani di riferimento e gli schizzi sono definiti di conseguenza. Nella maggior parte dei casi è sufficiente disegnare uno schizzo chiuso per definire il bordo per una faccia, poi usare le opzioni per modificare ulteriormente la sua forma.

Allo stato attuale di FreeCAD (v0.17) non è possibile posizionare le superfici in un ![](/images/PartDesign_Body.svg) [Corpo](/PartDesign_Body/it "PartDesign Body/it") di PartDesign. Tuttavia le superfici generate possono essere posizionate all'interno di una ![](/images/Std_Part.svg) [Parte standard](/Std_Part/it "Std Part/it") insieme al ![](/images/PartDesign_Body.svg) [Corpo](/PartDesign_Body/it "PartDesign Body/it") che contiene tutti i piani di riferimento e gli schizzi. Dopo, si può usare lo strumento ![](/images/Part_Builder.svg) [Crea forme](/Part_Builder/it "Part Builder/it") di Part, che non è parametrico, per creare un [shell](/Glossary#Shell "Glossary") (guscio) e infine un [solido](/Glossary#Solid "Glossary").

## Strumenti

- ![](/images/Surface_Filling.svg) [Filling](/Surface_Filling/it "Surface Filling/it"): riempie una serie di curve di confine con una superficie.

- ![](/images/Surface_GeomFillSurface.svg) [Riempi le curve del contorno](/Surface_GeomFillSurface/it "Surface GeomFillSurface/it"): crea una superficie da due, tre o quattro bordi limite.

- ![](/images/Surface_Sections.svg) [Sections](/Surface_Sections/it "Surface Sections/it"): crea una superficie dai bordi che rappresentano sezioni trasversali di superficie.

- ![](/images/Surface_ExtendFace.svg) [Estendi faccia](/Surface_ExtendFace/it "Surface ExtendFace/it"): estrapola la superficie dai bordi con il suo parametro U locale e il parametro V.

- ![](/images/Surface_CurveOnMesh.svg) [Curve on mesh](/Surface_CurveOnMesh "Surface CurveOnMesh"): crea segmenti di spline approssimati sopra un oggetto [mesh](/Mesh_Workbench/it "Mesh Workbench/it") selezionato.

- ![](/images/Surface_BlendCurve.svg) [Blend Curve](/index.php?title=Surface_BlendCurve/it&action=edit&redlink=1 "Surface BlendCurve/it (page does not exist)"): crea una curva di Bezier tra due bordi, con la continuità desiderata.

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_Workbench/it&oldid=1407307>"
