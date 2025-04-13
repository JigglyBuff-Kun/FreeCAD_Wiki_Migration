---
title: Sketcher Crea polilinea
---
|  |
| --- |
| Sketcher Crea polilinea |
| Posizione nel menu |
| Schizzo → Geometrie Sketcher → Crea polilinea |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Sketcher Linea](/Sketcher_CreateLine/it "Sketcher CreateLine/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_CreatePolyline.svg) Sketcher Crea polilinea crea una serie di segmenti di linea e arco collegati dai loro punti finali. Lo strumento ha diverse modalità.

![](/images/Sketcher_PolylineExample1.png)

La polilinea inizia con una linea, un arco tangente, un arco perpendicolare quindi una linea tangente.

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

1. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Sketcher_CreatePolyline.svg) Crea polilinea.
   * Selezionare l'opzione **Schizzo → Geometrie Sketcher → ![](/images/Sketcher_CreatePolyline.svg) Crea polilinea** dal menu.
   * Fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **![](/images/Sketcher_CreatePolyline.svg) Crea polilinea** dal menu contestuale.
   * Usare la scorciatoia da tastiera: G quindi M.
2. Il cursore si trasforma in una croce con l'icona dello strumento.
3. Le modalità dello strumento richiedono un segmento precedente. Effettuare una delle seguenti operazioni:
   * Scegliere due punti per definire un segmento di linea.
   * Selezionare il punto finale di una linea o di un segmento di arco esistente ([Vincoli automatici](/Sketcher_Workbench/it#Auto_constraints "Sketcher Workbench/it") deve essere abilitato).
4. Facoltativamente, premere il tasto M una o più volte per scorrere le modalità per il segmento successivo. Le modalità disponibili sono:
   * Linea perpendicolare al segmento precedente.
   * Linea tangente al segmento precedente (questa è la modalità iniziale se il segmento precedente è un arco).
   * Arco tangente al segmento precedente.
   * Arco perpendicolare (a sinistra) al segmento precedente.
   * Arco perpendicolare (a destra) al segmento precedente.
   * Linea collegata solo al segmento precedente.
5. In una qualsiasi delle modalità arco, opzionalmente tenere premuto il tasto Ctrl per agganciare l'arco a incrementi di 45° rispetto al segmento precedente.
6. Scegliere il punto finale del segmento.
7. Facoltativamente, ripetere l'operazione per creare più segmenti.
8. Per terminare l'input, effettuare una delle seguenti operazioni:
   * Agganciare al punto iniziale per creare una polilinea chiusa.
   * Fare clic con il tasto destro o premere Esc per creare una polilinea aperta.
9. I segmenti della polilinea sono stati creati e sono stati aggiunti i vincoli applicabili.
10. Se lo strumento viene eseguito in [modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it"):
    1. Facoltativamente, continuare a creare polilinee.
    2. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreatePolyline/it&oldid=1503010>"