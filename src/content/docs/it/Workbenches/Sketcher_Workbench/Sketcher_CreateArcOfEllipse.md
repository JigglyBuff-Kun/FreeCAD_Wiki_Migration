---
title: Sketcher Crea arco di ellisse
---
|  |
| --- |
| Sketcher Crea arco di ellisse |
| Posizione nel menu |
| Schizzo → Geometrie Sketcher → Crea arco di ellisse |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| G E A |
| Introdotto nella versione |
| 0.15 |
| Vedere anche |
| [Sketcher Crea ellisse da centro](/Sketcher_CreateEllipseByCenter/it "Sketcher CreateEllipseByCenter/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_CreateArcOfEllipse.svg) Sketcher Crea arco di ellisse crea un arco di ellisse.

![](/images/Sketcher_CreateArcOfEllipse_Example.png)

Arco di ellisse (bianco) con geometria interna (giallo scuro)

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

1. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Sketcher_CreateArcOfEllipse.svg) Arco di ellisse per centro, raggio, punti finali.
   * Selezionare l'opzione **Sketcher → Geometrie Sketcher → ![](/images/Sketcher_CreateArcOfEllipse.svg) Crea arco di ellisse** dal menu.
   * Usare la scorciatoia da tastiera: G quindi E, quindi A.
2. Il cursore si trasforma in una croce con l'icona dello strumento.
3. Scegliere il centro dell'arco.
4. Scegliere un punto finale di uno degli assi dell'arco, questo definisce anche uno dei suoi raggi.
5. Scegliere il punto iniziale dell'arco, questo definisce anche l'altro raggio dell'arco.
6. Selezionare il punto finale dell'arco.
7. Viene creato l'arco di ellisse, incluso un insieme di geometrie interne (asse maggiore, asse minore e due fuochi).
8. Se lo strumento viene eseguito in [modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it"):
   1. Facoltativamente continuare a creare archi.
   2. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

## Note

* Gli elementi della geometria interna possono essere cancellati. Possono essere ricreati in qualsiasi momento con [Sketcher Mostra/nascondi la geometria interna](/Sketcher_RestoreInternalAlignmentGeometry/it "Sketcher RestoreInternalAlignmentGeometry/it").
* Una volta creati, gli assi maggiore e minore di un arco di ellisse sono rigorosi e non possono essere scambiati ridimensionando. Questa è una conseguenza della parametrizzazione del risolutore e dello stesso rigido comportamento di [OpenCASCADE](/OpenCASCADE/it "OpenCASCADE/it"). Un arco di ellisse deve essere ruotato per scambiare i suoi assi.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateArcOfEllipse/it&oldid=1501042>"