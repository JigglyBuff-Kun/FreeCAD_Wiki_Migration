---
title: PartDesign MuoverePunta
---
|  |
| --- |
| Usa come entità finale |
| Posizione nel menu |
| Menu contestuale → Usa come entità finale |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Sposta in altro corpo](/PartDesign_MoveFeature/it "PartDesign MoveFeature/it"), [Sposta dopo altro oggetto](/PartDesign_MoveFeatureInTree/it "PartDesign MoveFeatureInTree/it") |
|  |

## Descrizione

**Usa come entità finale** poiché questo comando è etichettato nel menu contestuale ridefinisce la cima, che è la caratteristica finale del corpo. Di default, la cima è l'ultima caratteristica aggiunta al Body; ma a volte può essere utile impostare temporaneamente la cima su una funzione precedente nell'albero. Questo può servire per aggiungere uno schizzo, una geometria di riferimento o una caratteristica che, in retrospettiva, avrebbe dovuto essere creata in precedenza nella cronologia del corpo.

La cima è visivamente distinta nell'albero del modello da una piccola freccia bianca rivolta in basso in un cerchio verde sovrapposto all'icona della funzione.

![](/images/PartDesign_Body_tree-04.png)

## Utilizzo

1. Nell'albero del modello, fare clic con il tasto destro del mouse sulla funzione da impostare come entità finale.
2. Nel menu contestuale selezionare ![](/images/PartDesign_MoveTip.svg) **Usa come entità finale**.
3. La nuova entità finale viene impostata su visibile e tutti gli elementi successivi alla cima sono nascosti alla vista. Gli elementi creati in questo punto sono posizionati dopo la cima e prima degli altri elementi esistenti.

**Nota**: è importante non dimenticare di impostare poi nuovamente come entità finale l'ultima funzione nella parte inferiore dell'albero del corpo.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_MoveTip/it&oldid=943401>"