---
title: Fasteners Smusso per foro
---

:::caution
Questo comando è obsoleto, non è disponibile dallaversione 0.5.13 e superiori. Utilizzare inveceForo di PartDesign.
:::

|                                                               |
| ------------------------------------------------------------- |
| Fasteners: Smusso per foro                                    |
| Posizione nel menu                                            |
| Fasteners → Make countersunk                                  |
| Ambiente                                                      |
| [Fasteners](/Fasteners_Workbench/it "Fasteners Workbench/it") |
| Avvio veloce                                                  |
| _Nessuno_                                                     |
| Introdotto nella versione                                     |
| -                                                             |
| Vedere anche                                                  |
| _Nessuno_                                                     |
|                                                               |

## Descrizione

Il comando ![](/images/Fasteners_ChamferHole.svg) **Fasteners ChamferHole** smussa i fori per le viti a testa svasata.

![](/images/Fasteners_ChamferHole_Example.png)

Fori smussati per viti a testa svasata

## Utilizzo

1. Il comando può rilevare automaticamente i diametri delle viti. Affinché ciò funzioni, i fori devono avere il diametro corretto. Ad esempio, una vite M5 richiede un foro passante da 5 mm o un foro filettato da 4,2 mm. Il comando ![](/images/Fasteners_ScrewCalculator.svg) [Fasteners ScrewCalculator](/Fasteners_ScrewCalculator/it "Fasteners ScrewCalculator/it") può essere utilizzato per determinare i diametri dei fori maschiati.
2. Selezionare una parte con fori circolari.
3. Esistono diversi modi per richiamare il comando:
   - Premere il pulsante ![](/images/Fasteners_ChamferHole.svg) Make countersunk.
   - Selezionare l'opzione **Fasteners → ![](/images/Fasteners_ChamferHole.svg) Make countersunk** dal menu.
4. Si apre il pannello delle attività **Chamfer holes for countersunk screws**.
5. L'elenco **Edges to chamfer** mostra tutti i bordi circolari della parte selezionata.
6. Selezionare i bordi che si desidera smussare effettuando una delle seguenti operazioni:
   - Fare clic su singoli bordi circolari o facce con bordi circolari nella [vista 3D](/3D_view/it "3D view/it"):
     - Non è necessario tenere premuto il tasto Ctrl.
     - Ogni bordo selezionato viene controllato nell'elenco **Edges to chamfer**.
     - Il diametro della vite per ciascun bordo viene rilevato automaticamente.
     - I bordi non possono essere deselezionati nella [vista 3D](/index.php?title=Vista_3D/it&action=edit&redlink=1 "Vista 3D/it (page does not exist)").
   - Selezionare o deselezionare i bordi selezionandoli o deselezionandoli nell'elenco **Edges to chamfer**:
     - In questo caso il diametro della vite non viene rilevato automaticamente.
7. Facoltativamente, modificare il diametro della vite dei singoli bordi nell'elenco **Edges to chamfer** facendo doppio clic sul campo **Diameter** e selezionando un nuovo valore dall'elenco a discesa visualizzato.
8. Facoltativamente, modificare il diametro della vite di tutti i bordi selezionati impostando un nuovo valore dall'elenco a discesa **Diameter** sotto l'elenco **Edges to chamfer**.
9. Facoltativamente specificare un **Screw type**.
10. Premere il pulsante OK.
11. Viene creato un oggetto svasatura con un incavo smussato per ciascun bordo selezionato.
12. Facoltativamente, fissare le viti. Vedere l' [Ambiente Fasteners](/Fasteners_Workbench/it#Utilizzo "Fasteners Workbench/it").

## Note

- Gli oggetti Countersunk sono parametrici. Un oggetto svasato esistente può essere modificato facendo doppio clic su di esso nella [Vista ad albero](/Tree_view/it "Tree view/it"). Si aprirà il pannello delle attività **Chamfer holes for countersunk screws**. È possibile aggiungere o rimuovere bordi circolari e modificare i parametri dei bordi.

Retrieved from "<http://wiki.freecad.org/index.php?title=Fasteners_ChamferHole/it&oldid=1457778>"
