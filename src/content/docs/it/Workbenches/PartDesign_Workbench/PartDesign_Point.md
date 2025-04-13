---
title: PartDesign Crea punto di riferimento
---
|  |
| --- |
| PartDesign Point |
| Menu location |
| Part Design → Crea un riferimento → Crea punto di riferimento |
| Workbenches |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.17 |
| See also |
| [Linea di riferimento](/PartDesign_Line/it "PartDesign Line/it"), [Piano di riferimento](/PartDesign_Plane/it "PartDesign Plane/it") |
|  |

## Descrizione

Crea un **punto di riferimento** che può essere utilizzato come riferimento per schizzi o altre geometrie di riferimento.

![](/images/DatumPoint.png)

Un punto di riferimento associato a una sfera con un offset di `2` nella direzione Z

## Utilizzo

1. Premere il pulsante ![](/images/PartDesign_Point.svg) **Punto di riferimento**.
2. Definire i parametri del punto. Selezionare un primo riferimento nella vista 3D per filtrare le modalità di associazione disponibili.
3. A seconda del riferimento selezionato, nell'elenco sono disponibili una o più modalità di associazione. La più probabile è selezionata automaticamente e mostrata in grassetto nella lista. Il testo *Associata con modalità* insieme al nome della modalità di associazione appare in verde nella parte superiore del pannello Parametri.
4. Per aggiungere un ulteriore riferimento, premere il pulsante Riferimento successivo. Una volta premuto, l'etichetta cambia in *Selezione...* fino a quando non viene effettuata una selezione.
5. Selezionare una modalità di associazione nell'elenco.
6. Definire i valori di offset dell'associazione.
7. Premere OK.

## Opzioni

Fare doppio clic sull'etichetta DatumPoint nell'albero del modello o fare clic con il tasto destro e selezionare **Modifica il riferimento** nel menu contestuale per modificarne i parametri. Per ulteriori dettagli sulla modalità e sull'offset di associazione, vedere [Associazione](/Part_EditAttachment/it "Part EditAttachment/it").

## Preferenze

Vedere [Piano di riferimento di Partdesign](/PartDesign_Plane/it#Preferenze "PartDesign Plane/it").

## Proprietà

* Dati**MapMode**: elenca la modalità di associazione utilizzata.
* Dati**Attachment Offset**: applica una trasformazione (traslazione e rotazione) in riferimento alla posizione di associazione.
* Dati**Label**: nome dato all'oggetto, questo nome può essere cambiato a piacere.

## Limitazioni

* Il punto di riferimento non può essere utilizzato come sezione per le funzionalità di Sweep e Loft.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Point/it&oldid=1563032>"