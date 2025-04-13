---
title: Sketcher Estendi
---
|  |
| --- |
| Estendi |
| Posizione nel menu |
| Schizzo → Strumenti Sketcher → Estendi bordo |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| G Q |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Rifila](/Sketcher_Trimming/it "Sketcher Trimming/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_Extend.svg) Sketcher Estendi estende o accorcia una linea o un arco in una posizione arbitraria o in un bordo o punto di destinazione.

![](/images/Sketcher_Extend_example_01.png)

Mostrati a sinistra (1), i due elementi dello schizzo prima dell'operazione; al centro (2), la linea viene estesa fino all'arco; a destra (3), il risultato finale.

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

1. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Sketcher_Extend.svg) Estendi bordo.
   * Selezionare l'opzione **Schizzo → Strumenti Sketcher → ![](/images/Sketcher_Extend.svg) Estendi bordo** dal menu.
   * Fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **![](/images/Sketcher_Extend.svg) Estendi bordo** dal menu contestuale.
   * Usare la scorciatoia da tastiera: G quindi Q.
2. Se c'è una selezione precedente, viene cancellata. Lo strumento non accetta una preselezione.
3. Il cursore si trasforma in una croce con l'icona dello strumento.
4. Selezionare una linea o un arco.
5. Spostare il cursore nella direzione per estendere o accorciare.
6. Effettuare una delle seguenti operazioni:
   * Fare clic su un punto arbitrario.
   * Per estendere/accorciare a un altro bordo ([Vincoli automatici](/Sketcher_Workbench/it#Auto_constraints "Sketcher Workbench/it") deve essere abilitato): posizionare il cursore sul bordo di destinazione. Quando è evidenziato e viene visualizzata l'icona ![](/images/Sketcher_ConstrainPointOnObject.svg) [Vincolo Punto su oggetto](/Sketcher_ConstrainPointOnObject/it "Sketcher ConstrainPointOnObject/it") accanto al cursore, fare clic per confermare. Viene aggiunto il vincolo.
   * Per estendere/accorciare fino a un punto (i vincoli automatici devono essere abilitati): posizionare il cursore sul punto target. Quando è evidenziato e accanto al cursore viene visualizzata l'icona ![](/images/Sketcher_ConstrainCoincident.svg) [Vincolo coincidente](/Sketcher_ConstrainCoincident/it "Sketcher ConstrainCoincident/it"), fare clic per confermare. Viene aggiunto il vincolo.
7. Se lo strumento viene eseguito in [modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it"):
   1. Facoltativamente, continuare ad estendere/accorciare i bordi.
   2. Per terminare, fare clic in un'area vuota nella [Vista 3D](/3D_view/it "3D view/it"), fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

## Note

* Se non completamente vincolato, anche il bordo o il punto di destinazione può essere modificato.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Extend/it&oldid=1523053>"