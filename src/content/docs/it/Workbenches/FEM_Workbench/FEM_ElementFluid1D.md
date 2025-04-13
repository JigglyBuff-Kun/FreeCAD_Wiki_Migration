---
title: FEM Sezione del fluido per il flusso 1D
---
|  |
| --- |
| Elemento Fluido 1D |
| Posizione nel menu |
| Modello → Sezione del fluido per il flusso 1D |
| Ambiente |
| [FEM](/FEM_Workbench/it "FEM Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [FEM tutorial](/FEM_tutorial/it "FEM tutorial/it") |
|  |

| Solvers |
| --- |
| CalculiX |

## Descrizione

Crea un elemento FEM di sezione del fluido per le reti pneumatiche e idrauliche risolto con CalculiX.

## Utilizzo

1. Esistono diversi modi per richiamare il comando:
   * Premere il pulsante ![](/images/FEM_ElementFluid1D.svg) Sezione fluido per flusso 1D.
   * Seleziona l'opzione **Model → Geometria dell'Elemento → ![](/images/FEM_ElementFluid1D.svg) Sezione fluido per flusso 1D** dal menu.
2. Selezionare il tipo di fluido: liquido, gas o canale aperto
3. Selezionare il tipo di sezione: Pipe Manning (coefficiente di scabrezza), Pipe Inlet (tubo di aspirazione) ecc.
4. Inserire i parametri del tipo di sezione.
5. Selezionare e aggiungere un bordo.

## Limitazioni

1. Funziona solo con un elemento di rete a 3 nodi. Le informazioni possono essere trovate in: <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node54.html>

## Note

1. Un esempio di impostazione di una rete idraulica è disponibile in: <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node13.html>
2. La [\*scheda FLUID SECTION](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node205.html) viene utilizzata per modellare elementi fluidi per il flusso 1D.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElementFluid1D/it&oldid=1509840>"