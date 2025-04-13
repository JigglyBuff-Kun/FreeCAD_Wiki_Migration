---
title: Part Unione
---
|  |
| --- |
| Part Unione |
| Posizione nel menu |
| Parte → Operazione booleana → Unione |
| Ambiente |
| [Part](/Part_Workbench/it "Part Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Part Operazione boooleana](/Part_Boolean/it "Part Boolean/it"), [Part Taglio](/Part_Cut/it "Part Cut/it"), [Part Interszione](/Part_Common/it "Part Common/it") |
|  |

## Descrizione

Il comando ![](/images/Part_Fuse.svg) [Unione](/Part_Union/it "Part Union/it") fonde gli oggetti Parte selezionati in uno solo.
Questa operazione è completamente parametrica e le componenti possono essere modificate e il risultato ricalcolato.

**Nota:** Questo comando è una forma automatizzata di ![](/images/Part_Booleans.svg) [Operazione booleana](/Part_Boolean/it "Part Boolean/it").

## Utilizzo

1. Selezionare una o due forme.
2. Invocare il comando Unione in uno di questi modi:
   * Premere il pulsante ![](/images/Part_Fuse.svg) Unione della barra degli strumenti di Part
   * Usare **Parte → Operazioni booleane → Unisci** nel menu principale

## Input supportati

Gli oggetti di input devono essere forme [OpenCASCADE](/OpenCASCADE/it "OpenCASCADE/it"). Esempi: materiale realizzato con gli ambienti Part, PartDesign e Sketcher. Non mesh (a meno che non siano state convertite in forme): per le mesh, ci sono strumenti booleani specifici nell'ambiente MeshDesign.

* Solido + Solido: il risultato è un solido che occupa tutto il volume coperto dagli oggetti in ingresso

* Shell + Shell, Shell + Face, Face + Face: il risultato è un guscio. Le facce che si intersecano sono divise. I gusci possono essere non-manifold. Dopo la fusione, le facce possono essere unite [Affinando](/Part_RefineShape/it "Part RefineShape/it") il risultato.

* Wire + Wire, Edge + Wire, Edge + Edge: il risultato è un wire (polilinea). I bordi (edge) sono divisi dove si intersecano.

I composti sono supportati a condizione che le forme confezionate in un composto non si tocchino o si intersechino. Se lo fanno, la Fusione probabilmente fallisce, o produce un risultato errato.

## Opzioni

Gli elementi possono essere aggiunti e rimossi da una fusione, trascinandoli dentro o fuori dalla funzione di fusione nella vista ad albero con il mouse. Per trascinare gli elementi fuori da una fusione bisogna rilasciarli sul nodo del documento (il nome del file) del proprio modello. Per visualizzare i risultati è necessario un ricalcolo manuale (premere il tasto F5 o fare clic sull'icona ![](/images/Std_Refresh.svg) [Aggiorna](/Std_Refresh/it "Std Refresh/it")).

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Fuse/it&oldid=1497681>"