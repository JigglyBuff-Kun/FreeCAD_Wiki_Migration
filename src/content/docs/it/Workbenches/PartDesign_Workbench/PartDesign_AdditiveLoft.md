---
title: PartDesign Loft additivo
---
|  |
| --- |
| Loft additivo |
| Posizione nel menu |
| Part Design → Crea una funzione additiva → Loft additivo |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Sweep additivo](/PartDesign_AdditivePipe/it "PartDesign AdditivePipe/it"), [Loft sottrattivo](/PartDesign_SubtractiveLoft/it "PartDesign SubtractiveLoft/it") |
|  |

## Descrizione

**Loft additivo** crea un solido nel corpo attivo eseguendo una transizione tra due o più schizzi (indicati anche come sezioni trasversali). Se il corpo contiene già delle funzionalità, il loft additivo viene unito a loro.

![](/images/PartDesign_AddLoft_example.png)

A sinistra: sezioni trasversali (A), (B) e (C); a destra il loft additivo che viene creato.

## Utilizzo

### Flusso di lavoro basato su dialogo

1. Premere il pulsante ![](/images/PartDesign_AdditiveLoft.svg) Loft additivo.
2. Nella finestra di dialogo **Seleziona associazione** selezionare uno schizzo da utilizzare come profilo di base e fare clic su OK.
   * In alternativa, è possibile selezionare un singolo schizzo o la faccia di un oggetto 3D ([disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")) prima di premere il pulsante Loft additivo.
3. Nei **Parametri di Loft**, premere il pulsante Aggiungi sezione.
4. Selezionare lo schizzo successivo nella [vista 3D](/3D_view/it "3D view/it"). Ripetere per selezionare altri schizzi nell'ordine in cui si desidera che vengano loftati. Successivamente si può modificare l'ordine delle sezioni nella finestra di dialogo loft, in qualsiasi momento, trascinando le sezioni nell'elenco nella posizione desiderata.
5. Impostare le opzioni necessarie e fare clic su OK.

### Flusso di lavoro basato su selezione

1. Selezionare alcuni schizzi. È importante l'ordine in cui vengono selezionati:
   * Lo schizzo selezionato per primo diventa l'oggetto di partenza per il profilo nella fase successiva
   * Gli schizzi selezionati dopo il primo diventano sezioni del loft. Anche in questo caso l'ordine con cui sono selezionati è importante: lo schizzo selezionato come secondo diventa la prima sezione del loft, quello selezionato come terzo diventa la seconda sezione e così via. (È possibile modificare l'ordine delle sezioni successivamente in qualsiasi momento nella finestra di dialogo loft trascinando le sezioni nell'elenco alla posizione desiderata.
   * La prima o l'ultima selezione possono anche essere una faccia di un oggetto 3D ([disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it"))
2. Premere il pulsante ![](/images/PartDesign_AdditiveLoft.svg) [Loft additivo](/PartDesign_AdditiveLoft "PartDesign AdditiveLoft").
3. Se necessario impostare le opzioni e premere il pulsante OK.

## Opzioni

* **Superficie rigata**: effettua transizioni diritte tra le sezioni trasversali. Non si applica a un loft con due sezioni trasversali. Se non viene selezionato, le transizioni sono fluide.
* **Chiuso**: effettua una transizione dall'ultima sezione trasversale alla prima, creando un loop. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

## Proprietà

* Dati**Label**: nome dato all'operazione, questo nome può essere cambiato a piacere.
* Dati**Sections**: lista delle sezioni utilizzate.
* Dati**Ruled**: vedere [Opzioni](#Opzioni).
* Dati**Closed**: vedere [Opzioni](#Opzioni).
* Dati**Refine**: true o false. Se impostato su true, pulisce il solido dai bordi residui lasciati dalle operazioni. Vedere [Affina forma di Part](/Part_RefineShape/it "Part RefineShape/it") per ulteriori dettagli.
* Dati**Profile**: per vedere l'oggetto del profilo di base del loft.
* Dati**Midplane**: non applicable.
* Dati**Reversed**: non applicable.
* Dati**Up To Face**: non applicable.
* Dati**Allow Multi Face**: non applicable.

## Note

* Per un migliore controllo della la forma del loft, si raccomanda che tutte le sezioni trasversali abbiano lo stesso numero di segmenti. Per esempio, per un loft tra un rettangolo e un cerchio, il cerchio dovrebbe essere suddiviso in 4 archi collegati.
* Si può passare da o verso un singolo [vertice](/Glossary/it#V "Glossary/it") da uno schizzo o dal corpo. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")
* I [vertici](/Glossary/it#V "Glossary/it") possono essere solo l'inizio o la fine di un loft. Altrimenti il corpo del loft sarebbe composto da due solidi collegati ad un unico punto. Ciò viola la definizione del kernel CAD di un oggetto 3D.
* Una sezione trasversale non può giacere sullo stesso piano di quella immediatamente precedente.
* Se lo schizzo ha una geometria interna, allora l'ordine in cui viene creata la geometria dello schizzo dovrebbe essere lo stesso per tutte le sezioni. O si iniziano tutte le sezioni con la geometria interna, o si iniziano tutte con quella esterna. In caso contrario verrà creato un loft non valido in cui si incrociano pareti interne ed esterne.
* Non è possibile creare loft disgiunti o incrociati.
* Eventuali modalità non accettabili renderanno la parte nera.

## Link

* [Dettagli tecnici di Loft di Part](/Part_Loft_Technical_Details/it "Part Loft Technical Details/it") con la spiegazione su come viene creato un [Loft di Part](/Part_Loft/it "Part Loft/it"), gran parte del suo contenuto è rilevante anche per il loft additivo di PartDesign.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveLoft/it&oldid=1566904>"