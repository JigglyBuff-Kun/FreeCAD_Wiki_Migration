---
title: PartDesign Sweep sottrattivo
---
|  |
| --- |
| Sweep sottrattivo |
| Posizione nel menu |
| Part Design → Sweep sottrattivo |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| None |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Sweep additivo](/PartDesign_AdditivePipe/it "PartDesign AdditivePipe/it"), [Loft sottrattivo](/PartDesign_SubtractiveLoft/it "PartDesign SubtractiveLoft/it") |
|  |

## Descrizione

**Sweep sottrattivo** crea un solido sottrattivo nel corpo attivo spazzando uno o più schizzi (detti anche sezioni trasversali) lungo un percorso aperto o chiuso. La sua forma viene quindi sottratta dal solido esistente.
Sweep sottrattivo viene spesso utilizzato in combinazione con [Elica](/Part_Helix/it "Part Helix/it") di Part e [Lega forme](/PartDesign_ShapeBinder/it "PartDesign ShapeBinder/it") di PartDesign per creare una filettatura; vedere il [Tutorial Filettatura](/Thread_for_Screw_Tutorial/it "Thread for Screw Tutorial/it") per i dettagli.

## Utilizzo

1. Premere il pulsante ![](/images/PartDesign_SubtractivePipe.png) **Sweep sottrattivo**.
2. Nel dialogo **Selezione della funzione**, selezionare uno schizzo da utilizzare come prima sezione trasversale e poi fare clic OK.
   * In alternativa, è possibile selezionare un singolo schizzo prima di premere il pulsante Sweep sottrattivo.
3. In **Parametri di sweep** sotto **Profilo**, premere il pulsante Oggetto.
4. Selezionare nella vista 3D lo schizzo da utilizzare come percorso:
   * In alternativa, è possibile selezionare i bordi del corpo premendo Aggiungi bordo e selezionando i bordi nella vista 3D.
5. Per utilizzare più di una sezione trasversale, sotto **Trasformazione della sezione** impostare la Modalità di trasformazione in *Multisezione*; premere Aggiungi sezione quindi selezionare uno schizzo nella vista 3D. Ripetere l'operazione per ogni sezione trasversale aggiuntiva.
6. Impostare le opzioni, se necessario, e poi fare clic su OK.

## Opzioni

**Section Transformation**:

* Select **Constant** to use a single profile
* Select **Multisection** to use multiple profiles

**Section Orientation**:

* Standard
  + This keeps the cross section shape perpendicular to the path. This is the default setting.
* Fixed
  + Orientation set by first profile and constant throughout. This deactivates the alignment to the path normal vector. That means that the cross-section shape will not rotate with the path. Sweep along a circle to see the effect.
* Frenet
  + Create minimum possible twisting of profile. For more info, see [Frenet-Serret Formulas](https://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas)
* Auxiliary
  + Specify secondary path to guide pipe.
  + For each point *P* along the sweep path, there will be a corresponding point *Q* on the auxiliary path.
  + As the profile is swept, it will be transformed such that the *PQ* line is the normal of the sweep path.
  + If *Curvelinear equivalence* is set, then the *Q* points are scaled proportionally along the sweep path, regardless of is length.
* Binormal
  + Specify binormal vector in X, Y and Z

**Corner Transition**

* Transformed
* Right
* Rounded

## Proprietà

* Dati**Label**: nome dato all'operazione, questo nome può essere cambiato a piacere.
* Dati**Refine**: vero o falso. Se impostato su true, pulisce il solido dai bordi residui lasciati dalle funzioni. Per maggiori dettagli vedere [Affina forma](/Part_RefineShape/it "Part RefineShape/it").
* Dati**Sections**: elenca le sezioni utilizzate.
* Dati**Spine Tangent**: vero o falso (predefinito). True estende il percorso per includere i bordi tangenti.
* Dati**Auxiliary Spine Tangent**: vero o falso (predefinito). Vero estende il percorso ausiliario per includere i bordi tangenti.
* Dati**Auxiliary Curvelinear**: vero o falso (predefinito). True calcola la normale tra i punti equidistanti su entrambe le dorsali.
* Dati**Mode**: modalità di profilo. Vedere [Opzioni](#Opzioni).
* Dati**Binormal**: vettore binomiale per la corrispondente modalità di orientamento.
* Dati**Transition**: modalità di transizione. Le opzioni sono *Trasformato*, *Angolo retto* o *Angolo arrotondato*.
* Dati**Transformation**: *Costante* usa una singola sezione trasversale. *Multisezione* utilizza due o più sezioni trasversali. *Lineare*, *S-shape* e *Interpolazione* al momento non sono funzionanti.

## Note

* Gli schizzi devono formare profili chiusi.
* Non è possibile utilizzare un vertice come sezione trasversale.
* Una sezione trasversale non può giacere sullo stesso piano di quella immediatamente precedente.
* Per controllare meglio la forma dello sweep, è consigliabile che tutte le sezioni abbiano lo stesso numero di segmenti. Ad esempio, per uno sweep tra un rettangolo e un cerchio, il cerchio può essere suddiviso in 4 archi collegati.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractivePipe/it&oldid=1570685>"