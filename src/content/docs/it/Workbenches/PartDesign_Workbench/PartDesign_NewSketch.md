---
title: PartDesign Crea uno schizzo
---
|  |
| --- |
| Crea uno schizzo |
| Posizione nel menu |
| Schizzo → Crea uno schizzo |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Sketcher: Crea uno schizzo](/Sketcher_NewSketch/it "Sketcher NewSketch/it") |
|  |

## Descrizione

Questo strumento crea un nuovo schizzo, se non esiste crea un nuovo [Corpo](/PartDesign_Body/it "PartDesign Body/it") per contenere lo schizzo e dopo la creazione apre automaticamente l'ambiente [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it").

Quando si creano modelli utilizzando l'[Ambiente PartDesign](/PartDesign_Workbench "PartDesign Workbench"), questo strumento dovrebbe essere preferito rispetto allo strumento ![](/images/Sketcher_NewSketch.svg) [Crea uno schizzo](/Sketcher_NewSketch/it "Sketcher NewSketch/it") che si trova nell'[Ambiente Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it").

## Utilizzo

1. Premere il pulsante ![](/images/PartDesign_NewSketch.svg) Crea uno schizzo dalla barra degli strumenti di PartDesign.
2. Nel pannello Azioni, viene visualizzata la finestra di dialogo **Seleziona associazione**. Selezionare uno dei piani nell'elenco o nella vista 3D, che può essere orientata per una migliore la visibilità.
3. Premere OK.
4. L'interfaccia passa automaticamente a Sketcher e lo schizzo può venire modificato. Quando lo schizzo è terminato e viene chiuso, l'interfaccia viene riportata a PartDesign e la vista 3D viene ripristinata all'orientamento della vista, utilizzata prima della creazione dello schizzo.
5. In alternativa, è possibile selezionare un piano o una faccia sul corpo attivo esistente, prima di creare lo schizzo, nel qual caso lo schizzo viene creato immediatamente.

## Opzioni

* Per cambiare il modo di associazione di uno schizzo esistente, cambiare le sue proprietà*Map Mode*.

* Il dialogo *Seleziona associazione* definisce le funzioni di un nuovo schizzo

:   :   ![](/images/PartDesign.CreateSketch.SelectFeatureDialog.jpeg)
    :   Dialogo *Seleziona associazione*. Queste impostazioni creano uno schizzo sul piano XY e permettono i riferimenti da altri elementi dello stesso corpo

Impostazioni nel dialogo

* Riquadro per il sistema di coordinate: definisce l'orientamento del piano dello schizzo
* Consenti funzioni utilizzate: *TBD*

:   Consenti funzioni esterne

* Da altri corpi della stessa parte: ci si può riferire a tutti gli elementi utilizzati nello stesso corpo
* Da parti diverse o da funzioni libere: *TBD*
* Crea una copia indipendente: tutti gli altri elementi saranno copie separate, cioè non cambieranno quando l'originale cambia.
* Crea una copia dipendente: gli elementi saranno copie, ma viene mantenuta la dipendenza dagli elementi originali. Questo è fondamentalmente utilizzato con [Shapebinder](/PartDesign_ShapeBinder/it "PartDesign ShapeBinder/it")
* Crea riferimenti incrociati: gli elementi collegati non saranno copie, ma punteranno agli elementi originali, ad esempio uno schizzo master. Eventuali modifiche si rifletteranno su questo schizzo

Per fare riferimento a qualsiasi elemento nell' [Ambiente Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") utilizzare ![](/images/Sketcher_External.svg) [Crea geometria esterna](/Sketcher_External/it "Sketcher External/it") e ![](/images/Sketcher_CarbonCopy.svg) [Crea copia carbone](/Sketcher_CarbonCopy/it "Sketcher CarbonCopy/it"). Generalmente si consiglia di utilizzare altri schizzi come fonte per riferimenti piuttosto che facce o bordi, perché sono meno colpiti dal Topological Naming Issue.

## Proprietà

* Dati**Map Mode**: modalità di associazione dello schizzo ad un altro oggetto, solitamente un piano o una faccia ma possono essere altri tipi di oggetti. Fare clic una volta sul campo per rendere visibile il pulsante  ... e premerlo per aprire la finestra di dialogo [Associazione](/Part_EditAttachment/it "Part EditAttachment/it"). Se è impostato su Disattivato, la proprietà Placement è abilitata.
* Dati**Placement**: controlla l'orientamento dello schizzo nello spazio 3D; vedere [Posizionamento](/Std_Placement/it "Std Placement/it"). Disabilitato se lo schizzo è associato tramite la proprietà Map Mode.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_NewSketch/it&oldid=1557515>"