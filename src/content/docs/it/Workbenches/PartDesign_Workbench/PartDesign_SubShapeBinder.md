---
title: PartDesign Crea un riferimento di forma per i(l) sotto oggetti(o)
---
|  |
| --- |
| Crea un riferimento di forma per i(l) sotto oggetti(o) |
| Posizione nel menu |
| Part Design → Crea un riferimento di forma per i(l) sotto oggetti(o) |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.19 |
| Vedere anche |
| [Creare un clone](/PartDesign_Clone/it "PartDesign Clone/it") |
|  |

## Descrizione

Lo strumento **PartDesign SubShapeBinder** crea una forma legata che fa riferimento alla geometria da uno o più oggetti principali. Un SubShapeBinder viene in genere utilizzato all'interno di un [Corpo](/PartDesign_Body/it "PartDesign Body/it") per fare riferimento alla geometria esterna al corpo. L'utilizzo della geometria esterna direttamente in un corpo non è consentito e porterà a errori fuori ambito. Ma un SubShapeBinder può essere utilizzato anche senza essere annidato in un Body.

Una Forma Legata Secondaria traccerà il posizionamento relativo della geometria di riferimento, che è utile nel contesto della creazione di [assiemi](/Assembly/it "Assembly/it"), ma oltre a ciò ha anche un proprio posizionamento.

La geometria referenziata può essere composta da uno o più elementi. Ogni elemento può essere un oggetto individuale (ad esempio un [Corpo di PartDesign](/PartDesign_Body/it "PartDesign Body/it")), un sotto-oggetto (ad esempio un [Cubo di Part](/Part_Box/it "Part Box/it") all'interno di una [Parte](/Std_Part/it "Std Part/it"), o uno [schizzo](/PartDesign_NewSketch/it "PartDesign NewSketch/it") o una [Funzione](/PartDesign_Feature/it "PartDesign Feature/it") all'interno di un Corpo), o un sotto-elemento (una faccia, un bordo o un vertice). La geometria da selezionare dipende dallo scopo previsto per il SubShapeBinder. Per un'operazione booleana, si dovrebbe selezionare un solido. Per un'operazione di [estrusione](/PartDesign_Pad/it "PartDesign Pad/it"), è possibile utilizzare una faccia, uno schizzo o un bordo planare. E per la [geometria esterna](/Sketcher_External/it "Sketcher External/it") in uno schizzo, o per collegarsi a uno schizzo, può essere appropriata qualsiasi combinazione di sotto-elementi. Gli elementi possono appartenere a diversi oggetti padre e possono persino appartenere al Body in cui è annidato lo SubShapeBinder. Poiché un SubShapeBinder è [basato sui link](/Std_LinkMake/it "Std LinkMake/it"), la geometria referenziata può anche appartenere a un documento esterno.

![](/images/PartDesign_SubShapeBinder_example_1.png) ![](/images/PartDesign_SubShapeBinder_example_2.png)

A sinistra: due solidi creati in due [Corpi](/PartDesign_Body/it "PartDesign Body/it") separati.  
A destra: due SubShapeBinders estratti dal primo corpo, importati nel secondo corpo e spostati in una posizione diversa.

![](/images/PartDesign_SubShapeBinder_example_3.png)

I due SubShapeBinders vengono utilizzati per creare un [Taglio booleano](/PartDesign_Boolean/it "PartDesign Boolean/it") e un [Pad](/PartDesign_Pad/it "PartDesign Pad/it"), con il secondo Corpo.

## Utilizzo

### Stesso documento

1. Se nel documento sono presenti più Corpi: facoltativamente [attivare il Corpo](/PartDesign_Body/it#Stato_attivo "PartDesign Body/it") in cui verrà inserito il SubShapeBinder.
2. Selezionare la geometria richiesta. I sottoelementi possono essere selezionati solo nella [vista 3D](/3D_view/it "3D view/it").
3. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/PartDesign_SubShapeBinder.svg) Crea un riferimento di forma per i(l) sotto oggetti(o) di PartDesign.
   * Selezionare l'opzione **Part Design → ![](/images/PartDesign_SubShapeBinder.svg) Crea un riferimento di forma per i(l) sotto oggetti(o)** dal menu.
4. Viene creato il SubShapeBinder.
5. Se nel documento è presente un solo Corpo, il SubShapeBinder viene automaticamente aggiunto a questo e il Corpo viene attivato. Se in questo caso il SubShapeBinder non si desidera che sia inserito, può essere trascinato fuori dal Corpo e rilasciato sul nodo del documento ![](/images/Document.svg) nella [Vista ad albero](/Tree_view/it "Tree view/it").

### Documento esterno

1. Se necessario, aprire il documento sorgente (il documento esterno) e il documento di destinazione. Entrambi i documenti devono essere stati salvati almeno una volta.
2. Se nel documento di destinazione sono presenti più Corpi: eventualmente attivare il Corpo in cui deve essere annidato il SubShapeBinder.
3. Selezionare la geometria richiesta nel documento sorgente. I sottoelementi possono essere selezionati solo nella [vista 3D](/3D_view/it "3D view/it").
4. Passare al documento di destinazione cliccando sulla sua scheda nell'[Area della vista principale](/Main_view_area/it "Main view area/it").
5. Richiamare lo strumento come descritto sopra.

### Iniziare con uno SubShapeBinder vuoto

1. Seguire le istruzioni descritte per lo [Stesso documento](#Stesso_documento) come sopra, ma senza selezionare la geometria.
2. Viene creato un SubShapeBinder vuoto.
3. Selezionare la geometria richiesta. I sottoelementi possono essere selezionati solo nella [vista 3D](/3D_view/it "3D view/it").
4. Nella [Vista ad albero](/Tree_view/it "Tree view/it") trascinare e rilasciare la selezione sullo SubShapeBinder. Se si sono selezionati dei sottoelementi, i loro oggetti padre sono evidenziati nella [Vista ad albero](/Tree_view/it "Tree view/it"), indicando gli oggetti da trascinare.
5. Se lo si desidera, aggiungere dell'altra geometria nello stesso modo.
6. Per sostituire la geometria già selezionata, tenere premuto Ctrl durante l'operazione di trascinamento.

## Note

* L'offset 2D è supportato per alcuni tipi di forma, incluse facce planari, bordi e linee. Poiché l'offset è un'operazione difficile per il software, non sempre riesce.
* Un SubShapeBinder non nidificato in un Corpo può essere utilizzato come [Funzione di base](/PartDesign_Body/it#Funzione_di_base "PartDesign Body/it") per un nuovo Corpo.
* La proprietà Dati**Support** contiene i collegamenti alla geometria referenziata. La proprietà è di sola lettura per impostazione predefinita, ma può essere modificata seguendo le istruzioni descritte in [Iniziare con uno SubShapeBinder vuoto](#Iniziare_con_uno_SubShapeBinder_vuoto).
* Uno SubShapeBinder creato da uno schizzo può avere una "direzione utensile" opposta. Ad esempio, una [Estrusione](/PartDesign_Pad/it "PartDesign Pad/it") creata da uno schizzo può estendersi nella direzione +Y, mentre una [Estrusione](/PartDesign_Pad/it "PartDesign Pad/it"), con le stesse proprietà, creata dal SubShapeBinder si potrebbe estendere nella direzione -Y. L'attivazione della proprietà (o dalla casella di controllo) Dati**Reversed** dovrebbere risolvere questo problema.

## PartDesign SubShapeBinder vs. PartDesign ShapeBinder

Vedere [ShapeBinder di PartDesign](/PartDesign_ShapeBinder/it#PartDesign_SubShapeBinder_vs._PartDesign_ShapeBinder "PartDesign ShapeBinder/it").

## Proprietà

Un oggetto PartDesign SubShapeBinder deriva da un oggetto [Funzione Part](/Part_Feature/it "Part Feature/it") e ne eredita tutte le proprietà. Ha anche le seguenti proprietà aggiuntive:

### Dati

Base

* Dati**Support** (`XLinkSubList`): supporto per la geometria.
* Dati**Fuse** (`Bool`): se è `true` fonde le forme solide legate.
* Dati**Make Face** (`Bool`): se è `true` crea una faccia dalle polilinee connesse.
* Dati**Claim Children** (`PropertyBool`): se è `true` richiama gli oggetti collegati come figli nella [vista ad albero](/Tree_view/it "Tree view/it").
* Dati**Relative** (`Bool`): se è `true` abiliterà il collegamento relativo degli oggetti secondari.
* Dati**Bind Mode** (`Enumeration`): modalità di legame, `Synchronized`, `Frozen`, `Detached`.
* Dati**Partial Load** (`Bool`): se è `true` abiliterà il caricamento parziale degli oggetti.
* Dati (hidden)**Context** (`XLink`): oggetto contenitore di questo oggetto raccoglitore.
* Dati**Bind Copy On Change** (`Enumeration`)
* Dati**Refine** (`Bool`): se `true` i bordi in eccesso verranno rimossi (ad esempio dopo un'operazione booleana).
* Dati (hidden)**\_ Version** (`Integer`): versione di questo tipo di oggetto.
* Dati (hidden)**\_ Copied Link** (`XLinkSub`)

Cache

* Dati (hidden)**Cache\_\*** (`Matrix`): matrice di unità (proprietà separata per ogni oggetto in Dati**Support**).

Offsetting

* Dati**Offset**: offset 2D da applicare. Se Offset = 0, non viene applicato alcun offset. Se Offset < 0, l'offset viene applicato verso l'interno.
* Dati**Offset Join Type**: metodo di giunzione per l'offset di giunti non tangenti. Il metodo può essere `Arcs`, `Tangent` o `Intersection`.
* Dati**Offset Fill** (`Bool`): se `true`, viene creata una faccia tra la nuova linea e la linea originale. Vedere anche la proprietà Dati**Make Face**.
* Dati**Offset Open Result** (`Bool`): influenza il modo in cui vengono elaborate le linee aperte. Se `false`, viene creato una linea aperta. Se `true`, viene creata una linea chiusa da un offset bilaterale, con arrotondamenti attorno ai vertici aperti.
* Dati**Offset Intersection** (`Bool`): influenza il modo in cui vengono elaborati i compounds. Se `false`, tutti i figli vengono elaborati in modo indipendente. Se `true` e i figli sono spigoli e linee, i figli ricevono un offset in modo collettivo.

### Vista

Base

* Vista**Use Binder Style** (`Bool`): Se `true` i colori dell'oggetto collegato dipendono dal parametro di [fine-tuning](/Fine-tuning/it#PartDesign_Workbench "Fine-tuning/it") **DefaultDatumColor**. Se `false`, vengono applicati i colori delle forme normali.

## Link

* [New Sublink Link Feature](https://forum.freecadweb.org/viewtopic.php?t=41450), spiegazione sull'uso con video.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubShapeBinder/it&oldid=1561334>"