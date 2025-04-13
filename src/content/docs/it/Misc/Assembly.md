---
title: Assemblaggio
---
## Introduzione

In FreeCAD il termine "Assemblaggio" è normalmente usato per riferirsi a un [modello 3D](/Model/it "Model/it") che è composto da diverse parti distinte, assemblate assieme in modo da creare un oggetto funzionale, proprio come sono fatti i prodotti nel mondo reale.

Ad esempio, un bullone, una ranella e un dado sono tre corpi separati che, quando messi assieme, compongono un assemblaggio.

![](/images/PartDesign_Body_contiguous_separate.png) ![](/images/PartDesign_Body_contiguous_assembly.png)

A sinistra: tre solidi contigui separati, ognuno dei quali modellato da un [corpo di PartDesign](/PartDesign_Body/it "PartDesign Body/it"). A destra: i corpi separati uniti assieme in una [Parte](/Std_Part/it "Std Part/it") per creare un assemblaggio.

## Utilizzo

### Assemblaggio manuale

In termini generali, non c'è bisogno di strumenti particolari per creare assemblaggi; è sufficiente avere diversi [corpi](/Body/it "Body/it") organizzati in qualche maniera.

Per posizionare i corpi dove li si vuole, si può

* usare lo strumento [Trasforma](/Std_TransformManip/it "Std TransformManip/it"), oppure
* usare il dialogo di ![](/images/Std_Placement.svg) [Posizionamento](/Std_Placement/it "Std Placement/it"), oppure
* modificare direttamente la proprietà [Placement](/Placement/it "Placement/it") nell'[Editore delle proprietà](/Property_editor/it "Property editor/it").

Si può usare uno degli [ambienti complementari](/External_workbenches/it "External workbenches/it") pseudo-assembly, come Lattice2, Manipulator, Part-o-magic, o WorkFeature, per avere un aiuto nel trovare intersezioni, misurare distanze e distribuire gli oggetti nel modo desiderato.

In generale, l'oggetto ![](/images/Std_Part.svg) [Parte](/Std_Part/it "Std Part/it") era progettato per servire come blocco costruttivo basilare per creare assemblaggi. Questo oggetto è usato per raggruppare insieme diversi [corpi](/Body/it "Body/it") e muoverli insieme come un'unità, ovvero come un sotto-asseblaggio. Successivamente questo sotto-assemblaggio può essere posto vicino a un altro sotto-assemblaggio (o usato al suo interno) in modo da creare l'assemblaggio finale.

### Assemblaggio regolamentato

È inoltre possibile utilizzare l'[Ambiente Assembly](/Assembly_Workbench/it "Assembly Workbench/it") integrato o le sue controparti aggiuntive, come ![](/images/A2p_workbench.svg) [A2plus](/A2plus_Workbench/it "A2plus Workbench/it"), ![](/images/Assembly3_workbench_icon.svg) [Assembly3](/Assembly3_Workbench/it "Assembly3 Workbench/it"), o ![](/images/Assembly4_workbench_icon.svg) [Assembly4](/Assembly4_Workbench/it "Assembly4 Workbench/it"). Si noti che [Assembly2](/Assembly2_Workbench/it "Assembly2 Workbench/it") non è mantenuto; il suo uso è fortemente sconsigliato per i nuovi modelli.

Gli ambienti di assemblaggio usano vincoli ed espressioni per creare relazioni tra i pezzi del modello, in modo da legare matematicamente gli oggetti sul posto; per esempio, "questa faccia dovrebbe attaccarsi a questa altra faccia", "questo cilindro dovrebbe essere concentrico a questo cerchio", "questo punto dovrebbe seguire questo bordo", ecc.

Questo è un uso avanzato del software che normalmente è usato in complessi sistemi meccanici. Se il [modello](/Model/it "Model/it") non è troppo complesso, usare un ambiente di assemblaggio può non essere necessario.

## Note

* A partire da FreeCAD 1.0, esiste un [Ambiente Assemblatore](/Assembly_Workbench/it "Assembly Workbench/it") ufficiale incluso per impostazione predefinita nel sistema.

* Si noti che gli ambienti di assemblaggio sono in genere incompatibili tra loro. Se si crea un assemblaggio con uno di questi ambienti, si dovrebbe rimanere fedeli ad esso, e non usare un altro ambiente di assemblaggio per lavorare sullo stesso documento.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly/it&oldid=1484138>"