---
title: Ambiente Part
---

![](/images/Workbench_Part.svg)

L'icona dell'ambiente Part

## Introduzione

L'\*_Ambiente Part_- ![](/images/Workbench_Part.svg) fornisce un flusso di lavoro tradizionale [geometria solida costruttiva](/Constructive_solid_geometry/it "Constructive solid geometry/it") (CSG). In questo flusso di lavoro ogni oggetto è un solido indipendente. L'ambiente Part può creare questi oggetti da [schizzi](/Sketcher_Workbench/it "Sketcher Workbench/it") definiti parametricamente utilizzando strumenti come [Estrusione](/Part_Extrude/it "Part Extrude/it"), [Rivoluzione](/Part_Revolve/it "Part Revolve/it"), [Loft](/Part_Loft/it "Part Loft/it"), ecc. Inoltre, è possibile creare dei solidi con primitive di base come [Cubo](/Part_Box/it "Part Box/it"), [Cilindro](/Part_Cylinder/it "Part Cylinder/it"), ecc. Questi oggetti possono essere combinati, tramite [Operazioni booleane](/Part_Boolean/it "Part Boolean/it"), per creare solidi più complessi.

L'ambiente Part può anche creare oggetti che non sono solidi, come facce, gusci e oggetti con solo bordi o vertici. Fornisce inoltre una varietà di strumenti generici per la manipolazione della geometria, la convalida della geometria e la creazione di copie.

L'![](/images/Workbench_PartDesign.svg) [Ambiente PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") utilizza un flusso di lavoro alternativo per la creazione di solidi. Per una discussione dettagliata dell'ambiente Part e dell'ambiente Part Design vedere [Part e Part Design](/Part_and_PartDesign/it "Part and PartDesign/it").

![](/images/Part_Workbench_Example.jpg)

## Gli strumenti

### Barra degli strumenti Solidi

- ![](/images/Part_Box.svg) [Cubo](/Part_Box/it "Part Box/it"): Crea un cubo.

- ![](/images/Part_Cylinder.svg) [Cilindro](/Part_Cylinder/it "Part Cylinder/it"): Crea un cilindro.

- ![](/images/Part_Sphere.svg) [Sfera](/Part_Sphere/it "Part Sphere/it"): Crea una sfera.

- ![](/images/Part_Cone.svg) [Cono](/Part_Cone/it "Part Cone/it"): Crea un cono.

- ![](/images/Part_Torus.svg) [Toro](/Part_Torus/it "Part Torus/it"): Crea un toro.

- ![](/images/Part_Tube.svg) [Tubo](/Part_Tube/it "Part Tube/it"): Crea un tubo.

- ![](/images/Part_Primitives.svg) [Crea primitive...](/Part_Primitives/it "Part Primitives/it"): uno strumento per creare una delle seguenti primitive:

- ![](/images/Part_Plane.svg) [Piano](/Part_Plane/it "Part Plane/it"): crea un piano.

- ![](/images/Part_Box.svg) [Cubo](/Part_Box/it "Part Box/it"): crea un cubo. Questo oggetto può anche essere creato con lo strumento [Cubo](/Part_Box/it "Part Box/it").

- ![](/images/Part_Cylinder.svg) [Cilindro](/Part_Cylinder/it "Part Cylinder/it"): crea un cilindro. Questo oggetto può anche essere creato con lo strumento [Cilindro](/Part_Cylinder/it "Part Cylinder/it").

- ![](/images/Part_Cone.svg) [Cono](/Part_Cone/it "Part Cone/it"): crea un cono. Questo oggetto può anche essere creato con lo strumento [Cono](/Part_Cone/it "Part Cone/it").

- ![](/images/Part_Sphere.svg) [Sfera](/Part_Sphere/it "Part Sphere/it"): crea una sfera. Questo oggetto può anche essere creato con lo strumento [Sfera](/Part_Sphere/it "Part Sphere/it").

- ![](/images/Part_Ellipsoid.svg) [Ellissoide](/Part_Ellipsoid/it "Part Ellipsoid/it"): crea un ellissoide.

- ![](/images/Part_Torus.svg) [Toro](/Part_Torus/it "Part Torus/it"): crea un toro. Questo oggetto può anche essere creato con lo strumento [Toro](/Part_Torus/it "Part Torus/it").

- ![](/images/Part_Prism.svg) [Prisma](/Part_Prism/it "Part Prism/it"): crea un prisma.

- ![](/images/Part_Wedge.svg) [Cuneo](/Part_Wedge/it "Part Wedge/it") crea un cuneo.

- ![](/images/Part_Helix.svg) [Elica](/Part_Helix/it "Part Helix/it"): crea un'elica.

- ![](/images/Part_Spiral.svg) [Spirale](/Part_Spiral/it "Part Spiral/it"): crea una spirale.

- ![](/images/Part_Circle.svg) [Cerchio](/Part_Circle/it "Part Circle/it"): crea un arco circolare.

- ![](/images/Part_Ellipse.svg) [Ellisse](/Part_Ellipse/it "Part Ellipse/it"): crea un arco ellittico.

- ![](/images/Part_Point.svg) [Punto](/Part_Point/it "Part Point/it"): crea un punto.

- ![](/images/Part_Line.svg) [Linea](/Part_Line/it "Part Line/it"): crea una linea.

- ![](/images/Part_RegularPolygon.svg) [Poligono regolare](/Part_RegularPolygon/it "Part RegularPolygon/it"): crea un poligono regolare.

- ![](/images/Part_Builder.svg) [Crea una forma...](/Part_Builder/it "Part Builder/it"): Crea forme partendo da varie primitive.

### Barra degli strumenti Strumenti Part

- ![](/images/Sketcher_NewSketch.svg) [Crea schizzo](/Sketcher_NewSketch/it "Sketcher NewSketch/it"): crea un nuovo schizzo e apre la finestra [Dialogo Schizzo](/Sketcher_Dialog/it "Sketcher Dialog/it") per modificarlo.

- ![](/images/Part_Extrude.svg) [Estrudi](/Part_Extrude/it "Part Extrude/it"): Estrude facce planari.

- ![](/images/Part_Revolve.svg) [Rivoluziona](/Part_Revolve/it "Part Revolve/it"): Crea un solido tramite la rivoluzione di un oggetto (non solido) attorno ad un asse.

- ![](/images/Part_Mirror.svg) [Specchia](/Part_Mirror/it "Part Mirror/it"): Riflette l'oggetto selezionato rispetto ad un asse stabilito.

- ![](/images/Part_Scale.svg) [Scala](/Part_Scale/it "Part Scale/it"): Ridimensiona una o più forme. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/Part_Fillet.svg) [Raccorda](/Part_Fillet/it "Part Fillet/it"): Raccorda (arrotonda) i bordi di un oggetto.

- ![](/images/Part_Chamfer.svg) [Smussa](/Part_Chamfer/it "Part Chamfer/it"): Smussa i bordi di un oggetto.

- ![](/images/Part_MakeFace.svg) [Crea faccia](/Part_MakeFace/it "Part MakeFace/it"): Crea una faccia da un insieme di linee (contorni).

- ![](/images/Part_RuledSurface.svg) [Superficie rigata](/Part_RuledSurface/it "Part RuledSurface/it"): Crea una superficie rigata.

- ![](/images/Part_Loft.svg) [Loft](/Part_Loft/it "Part Loft/it"): Loft da un profilo all'altro.

- ![](/images/Part_Sweep.svg) [Sweep](/Part_Sweep/it "Part Sweep/it"): fa scorrere uno o più profili lungo un percorso.

- ![](/images/Part_Section.svg) [Seziona](/Part_Section/it "Part Section/it"): Crea una sezione intersecando un oggetto con un piano di sezione.

- ![](/images/Part_CrossSections.svg) [Sezioni...](/Part_CrossSections/it "Part CrossSections/it"): Crea una o più sezioni trasversali attraverso un oggetto.

- ![](/images/Part_Offset.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Offset:

- ![](/images/Part_Offset.svg) [Offset 3D](/Part_Offset/it "Part Offset/it"): Crea una forma parallela ad una data distanza dall'originale.

- ![](/images/Part_Offset2D.svg) [Offset 2D](/Part_Offset2D/it "Part Offset2D/it"): Crea un contorno parallelo ad una certa distanza dall'originale, ingrandisce o contrae una faccia piana.

- ![](/images/Part_Thickness.svg) [Spessore](/Part_Thickness/it "Part Thickness/it"): Svuota un solido.

- ![](/images/Part_ProjectionOnSurface.svg) [Proiezione su superficie](/Part_ProjectionOnSurface/it "Part ProjectionOnSurface/it"): Proietta un logo, un testo o qualsiasi faccia, polilinea o bordo su una superficie.

- ![](/images/Part_ColorPerFace.svg) [Colore per faccia](/Part_ColorPerFace/it "Part ColorPerFace/it"): assegna i colori alle singole facce degli oggetti.

### Barra degli strumenti Boolean

- ![](/images/Part_Compound.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Composto:

- ![](/images/Part_Compound.svg) [Crea un composto](/Part_Compound/it "Part Compound/it"): Crea un composto dagli oggetti selezionati.

- ![](/images/Part_ExplodeCompound.svg) [Esplodi composto](/Part_ExplodeCompound/it "Part ExplodeCompound/it"): Divide i composti.

- ![](/images/Part_CompoundFilter.svg) [Filtra composto](/Part_CompoundFilter/it "Part CompoundFilter/it"): Estrae i singoli pezzi di un composto.

- ![](/images/Part_Boolean.svg) [Operazione booleana](/Part_Boolean/it "Part Boolean/it"): Esegue operazioni booleane su due oggetti.

- ![](/images/Part_Cut.svg) [Sottrai](/Part_Cut/it "Part Cut/it"): Sottrae un oggetto da un altro.

- ![](/images/Part_Fuse.svg) [Unisci](/Part_Fuse/it "Part Fuse/it"): Unisce (fonde) due o più oggetti.

- ![](/images/Part_Common.svg) [Interseca](/Part_Common/it "Part Common/it"): Estrae la parte comune (intersezione) di due oggetti.

- ![](/images/Part_JoinConnect.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Giunzione:

- ![](/images/Part_JoinConnect.svg) [Congiungi oggetti](/Part_JoinConnect/it "Part JoinConnect/it"): Congiunge le facce interne di oggetti con pareti (es. tubi).

- ![](/images/Part_JoinEmbed.svg) [Incorpora oggetto](/Part_JoinEmbed/it "Part JoinEmbed/it"): Incorpora un oggetto con pareti in un altro oggetto con pareti.

- ![](/images/Part_JoinCutout.svg) [Ritaglio per l'oggetto](/Part_JoinCutout/it "Part JoinCutout/it"): Crea un ritaglio nella parete di un oggetto per un altro oggetto con pareti.

- ![](/images/Part_BooleanFragments.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Suddivisione:

- ![](/images/Part_BooleanFragments.svg) [Frammenti booleani](/Part_BooleanFragments/it "Part BooleanFragments/it"): Crea qualsiasi pezzo ottenendolo da operazioni booleane.

- ![](/images/Part_SliceApart.svg) [Affetta in parti](/Part_SliceApart/it "Part SliceApart/it"): Taglia e divide un oggetto intersecandolo con altri oggetti.

- ![](/images/Part_Slice.svg) [Affetta in composto](/Part_Slice/it "Part Slice/it"): Taglia un oggetto intersecandolo con altri oggetti.

- ![](/images/Part_XOR.svg) [XOR booleano](/Part_XOR/it "Part XOR/it"): Rimuove lo spazio condiviso da un numero pari di oggetti.

- ![](/images/Part_CheckGeometry.svg) [Controlla la geometria](/Part_CheckGeometry/it "Part CheckGeometry/it"): Controlla se la geometria degli oggetti selezionati contiene degli errori.

- ![](/images/Part_Defeaturing.svg) [Elimina funzioni](/Part_Defeaturing/it "Part Defeaturing/it"): Rimuove le funzioni da un oggetto.

### Altri strumenti

- ![](/images/Part_Import.svg) [Importa file CAD...](/Part_Import/it "Part Import/it"): Importazione da file \*.IGES, \*.STEP, o \*.BREP.

- ![](/images/Part_Export.svg) [Esporta file CAD...](/Part_Export/it "Part Export/it"): Esportazione in file \*.IGES, \*.STEP, o \*.BREP.

- ![](/images/Part_BoxSelection.svg) [Box di selezione](/Part_BoxSelection/it "Part BoxSelection/it"): Seleziona le facce da un'area rettangolare.

- ![](/images/Part_ShapeFromMesh.svg) [Crea forma da mesh](/Part_ShapeFromMesh/it "Part ShapeFromMesh/it"): Crea forme (shapes) da oggetti mesh.

- ![](/images/Part_PointsFromMesh.svg) [Crea oggetto punti da geometria](/Part_PointsFromMesh/it "Part PointsFromMesh/it"): Crea oggetti punti a partire da oggetti geometrici.

- ![](/images/Part_MakeSolid.svg)[Converti in solido](/Part_MakeSolid/it "Part MakeSolid/it"): Crea solidi a partire da oggetti forma (shape).

- ![](/images/Part_ReverseShape.svg) [Inverti le forme](/Part_ReverseShape/it "Part ReverseShape/it"): Crea copie parametriche degli oggetti selezionati con normali delle facce invertite.

- Creare una copia:

- ![](/images/Part_SimpleCopy.svg) [Crea una copia semplice](/Part_SimpleCopy/it "Part SimpleCopy/it"): Crea copie non parametriche di oggetti.

- ![](/images/Part_TransformedCopy.svg) [Crea una copia modificata](/Part_TransformedCopy/it "Part TransformedCopy/it"): Crea copie non parametriche di oggetti. È destinato agli oggetti nidificati in contenitori.

- ![](/images/Part_ElementCopy.svg) [Crea una copia di un elemento](/Part_ElementCopy/it "Part ElementCopy/it"): Crea copie non parametriche di sottoelementi: vertici, bordi e facce.

- ![](/images/Part_RefineShape.svg) [Affina una forma](/Part_RefineShape/it "Part RefineShape/it"): Crea copie parametriche con una forma raffinata da oggetti selezionati. Rimuove i bordi non necessari dalle facce planari e cilindriche.

- ![](/images/Part_EditAttachment.svg) [Associazione...](/Part_EditAttachment/it "Part EditAttachment/it"): Associa un oggetto ad uno o più altri oggetti.

## Strumenti obsoleti

### Misura

Lo strumento ![](/images/Std_Measure.svg) [Misurare](/Std_Measure/it "Std Measure/it") sostituisce gli strumenti elencati di seguito. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/Part_Measure_Linear.svg) [Misura lineare](/Part_Measure_Linear/it "Part Measure Linear/it") Crea una misura lineare. Non disponibile nella versione 1.0 e superiori.

- ![](/images/Part_Measure_Angular.svg) [Misura angolare](/Part_Measure_Angular/it "Part Measure Angular/it"): Crea una misura angolare. Non disponibile nella versione 1.0 e superiori.

- ![](/images/Part_Measure_Refresh.svg) [Aggiorna misure](/Part_Measure_Refresh/it "Part Measure Refresh/it"): Aggiorna tutte le misure. Non disponibile nella versione 1.0 e superiori.

- ![](/images/Part_Measure_Clear_All.svg) [Cancella Tutto](/Part_Measure_Clear_All/it "Part Measure Clear All/it"): Cancella tutte le misure. Non disponibile nella versione 1.0 e superiori.

- ![](/images/Part_Measure_Toggle_All.svg) [Attiva o Disattiva tutte le misure](/Part_Measure_Toggle_All/it "Part Measure Toggle All/it") e [Attiva o Disattiva Vista Tutte le Misure](/View_Measure_Toggle_All/it "View Measure Toggle All/it"): Mostra o nasconde tutte le misure. Non disponibile nella 1.0 and above.

- ![](/images/Part_Measure_Toggle_3D.svg) [Attiva o Disattiva le misure 3D](/Part_Measure_Toggle_3D/it "Part Measure Toggle 3D/it"): Mostra o nasconde le misure 3D. Non disponibile nella 1.0 and above.

- ![](/images/Part_Measure_Toggle_Delta.svg) [Attiva o Disattiva le misure Delta](/Part_Measure_Toggle_Delta/it "Part Measure Toggle Delta/it"): Mostra o nasconde le misure delta. Non disponibile nella 1.0 and above.

## Preferenze

- ![](/images/Preferences-part_design.svg) [Preferenze](/PartDesign_Preferences/it "PartDesign Preferences/it"): Preferenze per l'Ambiente Part.
- ![](/images/Preferences-import-export.svg) [Preferenze di Importa e esporta](/Import_Export_Preferences/it "Import Export Preferences/it"): preferenze per l'importazione e l'esportazione in diversi formati di file.
- [Ottimizzazione](/Fine-tuning/it#Part_Workbench "Fine-tuning/it"): Alcuni parametri extra per mettere a punto il comportamento di Part.

## Script

Vedere [Script di Part](/Part_scripting/it "Part scripting/it")

## Tutorial

- [Importare da STL o OBJ](/Import_from_STL_or_OBJ/it "Import from STL or OBJ/it") : come importare file STL/OBJ in FreeCAD
- [Esportare in STL o OBJ](/Export_to_STL_or_OBJ/it "Export to STL or OBJ/it") : come esportare file STL/OBJ da FreeCAD
- [Tutorial Sfera traforata](/Whiffle_Ball_tutorial/it "Whiffle Ball tutorial/it") : come usare il modulo Part

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Workbench/it&oldid=1501012>"
