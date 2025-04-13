---
title: Sketcher Dimensione
---
|  |
| --- |
| Sketcher Dimensione |
| Posizione nel menu |
| Schizzo → Vincoli Sketcher → Dimensione |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| D |
| Introdotto nella versione |
| 1.0 |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_Dimension.svg) Sketcher Dimensione è lo strumento di vincolo sensibile al contesto dell'ambiente Sketcher. In base alla selezione attuale, offre vincoli dimensionali adeguati, ma anche vincoli geometrici.

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

1. Facoltativamente selezionare uno o più elementi (bordi o punti). I bordi [B-spline](/Sketcher_Workbench/it#Sketcher_CompCreateBSpline "Sketcher Workbench/it") non sono attualmente supportati.
2. Esistono diversi modi per richiamare lo strumento:
   * Se la [preferenza](/Sketcher_Preferences/it#General "Sketcher Preferences/it") **Vincolo dimensionale** è impostata su `Entrambi` o `Strumento singolo` (predefinito): premere il pulsante ![](/images/Sketcher_Dimension.svg) Dimensione.
   * Selezionare l'opzione **Schizzo → Vincoli Sketcher → ![](/images/Sketcher_Dimension.svg) Dimensione** dal menu.
   * Fare clic con il pulsante destro del mouse su [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **Dimensione → ![](/images/Sketcher_Dimension.svg) Dimensione** dal menu contestuale.
   * Se c'è una selezione: fare clic con il pulsante destro del mouse nella vista 3D e selezionare l'opzione **![](/images/Sketcher_Dimension.svg) Dimensione** dal menu contestuale.
   * Usare la scorciatoia da tastiera: D.
3. Il cursore si trasforma in una croce con l'icona dello strumento.
4. Se non si ha ancora selezionato un elemento: selezionane uno.
5. A seconda dell'elemento/i selezionato/i viene proposto un vincolo.
6. Facoltativamente selezionare un elemento aggiuntivo.
7. Facoltativamente deselezionare un elemento facendo nuovamente clic su di esso.
8. Il vincolo proposto viene aggiornato dopo ogni modifica della selezione.
9. Facoltativamente, premere il tasto M una o più volte per scorrere gli altri vincoli disponibili, se presenti.
10. Se viene proposto un vincolo geometrico, gli elementi selezionati potrebbero cambiare dando un'anteprima del risultato.
11. Effettuare una delle seguenti operazioni:
    * Fare clic in un'area vuota nella [Vista 3D](/3D_view/it "3D view/it") per confermare:
      1. Se viene creato un vincolo dimensionale, il punto cliccato ne determina la posizione. Per una quota lineare, il punto su cui si fa clic ne determina anche il tipo: ![](/images/Sketcher_ConstrainDistanceX.svg) [Distanza orizzontale](/Sketcher_ConstrainDistanceX/it "Sketcher ConstrainDistanceX/it"), ![](/images/Sketcher_ConstrainDistanceY.svg) [Distanza verticale](/Sketcher_ConstrainDistanceY/it "Sketcher ConstrainDistanceY/it") o ![](/images/Sketcher_ConstrainDistance.svg) [Distanza](/Sketcher_ConstrainDistance/it "Sketcher ConstrainDistance/it").
      2. Se viene creato un [vincolo dimensionale guida](/Sketcher_ToggleDrivingConstraint/it "Sketcher ToggleDrivingConstraint/it"), a seconda delle [preferenze](/Sketcher_Preferences/it#Display "Sketcher Preferences/it"), si apre una finestra di dialogo per [modificarne il valore](/Sketcher_Workbench/it#Edit_constraints "Sketcher Workbench/it").
      3. Viene aggiunto un vincolo.
      4. Questo strumento viene sempre eseguito in modalità continua: facoltativamente continuare a creare vincoli.
    * Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Dimension/it&oldid=1504907>"