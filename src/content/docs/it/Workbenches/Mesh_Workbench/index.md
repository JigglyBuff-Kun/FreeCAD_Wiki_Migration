---
title: Ambiente Mesh
---

![](/images/Workbench_Mesh.svg)

L'icona dell'ambiente Mesh

## Introduzione

L'Ambiente Mesh ![](/images/Workbench_Mesh.svg) gestisce i reticoli triangolari degli oggetti [mesh](http://en.wikipedia.org/wiki/Triangle_mesh). Gli oggetti mesh sono un tipo speciale di oggetti 3D, composti da facce triangolari (le maglie della griglia) connesse lungo i loro bordi e nei loro vertici. Oggetti tessellati.

Molte applicazioni 3D utilizzano i mesh come tipo principale di oggetti 3D, ad esempio: [Sketchup](http://en.wikipedia.org/wiki/Sketchup), [Blender](<http://en.wikipedia.org/wiki/Blender_(software)>), [Maya](<http://en.wikipedia.org/wiki/Maya_(software)>) e [3D Studio Max](http://en.wikipedia.org/wiki/3d_max). Dato che i mesh sono oggetti molto semplici, contenenti solo vertici (punti), bordi e facce (triangoli), sono molto facili da creare, modificare, suddividere, allungare, e altrettanto facili da trasferire da un'applicazione all'altra senza alcuna perdita di informazioni. Inoltre, dal momento che contengono dati molto semplici, le applicazioni 3D ne possono gestire grandi quantità senza alcun problema. Per queste ragioni, gli oggetti mesh sono spesso il tipo di oggetto 3D utilizzato dalle applicazioni che si occupano di cinema, animazione e creazione di immagini.

Tuttavia, nel campo ingegneristico le mesh presentano una grande limitazione: non possono definire con precisione le superfici curve. Questo è il motivo per cui FreeCAD si affida invece a [Brep](http://en.wikipedia.org/wiki/Boundary_representation "wikipedia:Boundary representation"). L'ambiente Mesh offre alcuni comandi per manipolare direttamente le mesh, ma viene spesso utilizzato per importare dati di mesh 3D e convertirle in un solido da utilizzare con ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/it "Part Workbench/it") o ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it").

![](/images/Mesh_example.jpg)

## Strumenti

Tutti gli strumenti dell'ambiente Mesh sono accessibili dal menu **Meshes**. Quasi tutti sono disponibili anche in una delle barre degli strumenti Mesh.

- ![](/images/Mesh_Import.svg) [Importa mesh...](/Mesh_Import/it "Mesh Import/it"): importa un oggetto mesh da un file.

- ![](/images/Mesh_Export.svg) [Esporta mesh...](/Mesh_Export/it "Mesh Export/it"): esporta un oggetto mesh in un file.

- ![](/images/Mesh_FromPartShape.svg) [Crea mesh da una forma...](/Mesh_FromPartShape/it "Mesh FromPartShape/it"): crea oggetti mesh da oggetti forma.

- ![](/images/Mesh_RemeshGmsh.svg) [Affinamento...](/Mesh_RemeshGmsh/it "Mesh RemeshGmsh/it"): affina un oggetto mesh.

* Analizza
  - ![](/images/Mesh_Evaluation.svg) [Valuta e ripara la mesh...](/Mesh_Evaluation/it "Mesh Evaluation/it"): analizza e ripara un oggetto mesh.
  - ![](/images/Mesh_EvaluateFacet.svg) [Dettagli della faccia](/Mesh_EvaluateFacet/it "Mesh EvaluateFacet/it"): fornisce informazioni sulle facce di un oggetto mesh.
  - ![](/images/Mesh_CurvatureInfo.svg) [Dettagli della curvatura](/Mesh_CurvatureInfo/it "Mesh CurvatureInfo/it"): mostra la curvatura assoluta di [oggetti curvati](/Mesh_VertexCurvature/it "Mesh VertexCurvature/it") in punti selezionati.
  - ![](/images/Mesh_EvaluateSolid.svg) [Controlla se è un solido](/Mesh_EvaluateSolid/it "Mesh EvaluateSolid/it"): controlla se l'oggetto mesh è un solido.
  - ![](/images/Mesh_BoundingBox.svg) [Info limiti d'ingombro...](/Mesh_BoundingBox/it "Mesh BoundingBox/it"): valuta il cuboide di delimitazione di un oggetto mesh.

- ![](/images/Mesh_VertexCurvature.svg) [Grafico della curvatura](/Mesh_VertexCurvature/it "Mesh VertexCurvature/it"): Crea oggetti Curvatura mesh per oggetti mesh.

- ![](/images/Mesh_HarmonizeNormals.svg) [Armonizza le normali](/Mesh_HarmonizeNormals/it "Mesh HarmonizeNormals/it"): armonizza le normali di un oggetto mesh.

- ![](/images/Mesh_FlipNormals.svg) [Inverti le normali](/Mesh_FlipNormals/it "Mesh FlipNormals/it"): capovolge le normali di un oggetto mesh.

- ![](/images/Mesh_FillupHoles.svg) [Riempi i buchi...](/Mesh_FillupHoles/it "Mesh FillupHoles/it"): riempie i buchi negli oggetti mesh.

- ![](/images/Mesh_FillInteractiveHole.svg) [Chiudi il buco](/Mesh_FillInteractiveHole/it "Mesh FillInteractiveHole/it"): riempie i fori selezionati negli oggetti mesh.

- ![](/images/Mesh_AddFacet.svg) [Aggiungi triangolo](/Mesh_AddFacet/it "Mesh AddFacet/it"): aggiunge facce lungo un bordo di un oggetto mesh aperto.

- ![](/images/Mesh_RemoveComponents.svg) [Rimuovi componente...](/Mesh_RemoveComponents/it "Mesh RemoveComponents/it"): rimuove le facce dagli oggetti mesh.

- ![](/images/Mesh_RemoveCompByHand.svg) [Rimuovi componente a mano...](/Mesh_RemoveCompByHand/it "Mesh RemoveCompByHand/it"): rimuove i componenti dagli oggetti mesh.

- ![](/images/Mesh_Segmentation.svg) [Crea segmenti di mesh...](/Mesh_Segmentation/it "Mesh Segmentation/it"): crea segmenti di mesh separati per tipi di superfici specificate di un oggetto mesh.

- ![](/images/Mesh_SegmentationBestFit.svg) [Adatta i segmenti...](/Mesh_SegmentationBestFit/it "Mesh SegmentationBestFit/it"): crea segmenti di mesh separati per tipi di superficie specifiche di un oggetto mesh e può identificarne i parametri.

- ![](/images/Mesh_Smoothing.svg) [Leviga...](/Mesh_Smoothing/it "Mesh Smoothing/it"): leviga un oggetto mesh.

- ![](/images/Mesh_Decimating.svg) [Decima...](/Mesh_Decimating/it "Mesh Decimating/it"): riduce il numero di facce negli oggetti mesh.

- ![](/images/Mesh_Scale.svg) [Scala...](/Mesh_Scale/it "Mesh Scale/it"): scala un oggetto mesh.

- ![](/images/Mesh_BuildRegularSolid.svg) [Solido regolare...](/Mesh_BuildRegularSolid/it "Mesh BuildRegularSolid/it"): Crea un oggetto mesh solido parametrico regolare.

* Operazioni booleane

  - ![](/images/Mesh_Union.svg) [Unione](/Mesh_Union/it "Mesh Union/it"): crea un oggetto mesh che è l'unione di due oggetti mesh.
  - ![](/images/Mesh_Intersection.svg) [Intersezione](/Mesh_Intersection/it "Mesh Intersection/it"): crea un oggetto mesh che è l'intersezione di due oggetti mesh.
  - ![](/images/Mesh_Difference.svg) [Differenza](/Mesh_Difference/it "Mesh Difference/it"): crea un oggetto mesh che è la differenza di due oggetti mesh.

* Taglio
  - ![](/images/Mesh_PolyCut.svg) [Taglia la mesh](/Mesh_PolyCut/it "Mesh PolyCut/it"): taglia facce intere da oggetti mesh.
  - ![](/images/Mesh_PolyTrim.svg) [Rifila con un poligono](/Mesh_PolyTrim/it "Mesh PolyTrim/it"): taglia facce e parti di facce da oggetti mesh..
  - ![](/images/Mesh_TrimByPlane.svg) [Rifila con un piano](/Mesh_TrimByPlane/it "Mesh TrimByPlane/it"): taglia facce e parti di facce su un lato di un piano da un oggetto mesh.
  - ![](/images/Mesh_SectionByPlane.svg) [Sezione da mesh e piano](/Mesh_SectionByPlane/it "Mesh SectionByPlane/it"): crea una sezione trasversale attraverso un oggetto mesh.
  - ![](/images/Mesh_CrossSections.svg) [Sezioni...](/Mesh_CrossSections/it "Mesh CrossSections/it"): crea più sezioni trasversali su oggetti mesh.

- ![](/images/Mesh_Merge.svg) [Unisci](/Mesh_Merge/it "Mesh Merge/it"): crea un oggetto mesh combinando le maglie di due o più oggetti mesh.

- ![](/images/Mesh_SplitComponents.svg) [Dividi in componenti](/Mesh_SplitComponents/it "Mesh SplitComponents/it"): Divide un oggetto mesh nei suoi componenti.

- ![](/images/MeshPart_CreateFlatMesh.svg) [Sviluppa una mesh](/MeshPart_CreateFlatMesh/it "MeshPart CreateFlatMesh/it"): crea una rappresentazione piatta di un oggetto mesh.

- ![](/images/MeshPart_CreateFlatFace.svg) [Sviluppa una faccia](/MeshPart_CreateFlatFace/it "MeshPart CreateFlatFace/it"): Crea una rappresentazione piatta di una faccia di un oggetto forma.

## Preferenze

- Esistono alcune [preferenze di esportazione correlate ai formati mesh](/Import_Export_Preferences/it#Formati_mesh "Import Export Preferences/it") ma esse non vengono utilizzate dai comandi appartenenti a questo ambiente. Sono utilizzate dal comando [Esporta](/Std_Export/it "Std Export/it").

Le preferenze di Mesh si trovano nei seguenti gruppi nell'[editor delle preferenze](/Preferences_Editor/it "Preferences Editor/it"):

- ![](/images/Preferences-display.svg) [Visualizzazione](/Preferences_Editor/it#Visualizzazione "Preferences Editor/it"): Nella pagina [Visualizzazione mesh](/Preferences_Editor/it#Visualizzazione_mesh "Preferences Editor/it") possono essere impostate diverse preferenze.
- ![](/images/Preferences-openscad.svg) [OpenSCAD](/OpenSCAD_Preferences/it "OpenSCAD Preferences/it"): I comandi [Mesh Unione](/Mesh_Union/it "Mesh Union/it"), [Mesh Intersezione](/Mesh_Intersection/it "Mesh Intersection/it") e [Mesh Differenza](/Mesh_Difference/it "Mesh Difference/it") richiedono [OpenSCAD](http://www.openscad.org/) e usano le preferenze **OpenSCAD executable** per trovare il loro eseguibile.

## Note

- Altri strumenti mesh sono disponibili nell'ambiente ![](/images/Workbench_OpenSCAD.svg) [OpenSCAD](/OpenSCAD_Workbench/it "OpenSCAD Workbench/it").
- Vedere [Scipt Mesh](/Mesh_Scripting/it "Mesh Scripting/it") per manipolare e creare mesh utilizzando [Python](/Python/it "Python/it").
- Vedere anche [Importare oggetti Mesh in FreeCAD](/FreeCAD_and_Mesh_Import/it "FreeCAD and Mesh Import/it").
- Vedere [Asintoto](/Asymptote/it "Asymptote/it") per esportare le mesh nel formato Asymptote.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Workbench/it&oldid=1468298>"
