---
title: PartDesign Sistema di coordinate locali
---
|  |
| --- |
| Sistema di coordinate locali |
| Posizione nel menu |
| Part Design → Sistema di coordinate locali |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.18 |
| Vedere anche |
| [Punto di riferimento](/PartDesign_Point/it "PartDesign Point/it"), [Linea di riferimento](/PartDesign_Line/it "PartDesign Line/it"), [Piano di riferimento](/PartDesign_Plane/it "PartDesign Plane/it") |
|  |

## Descrizione

Crea un **sistema di coordinate locali** che può essere usato come riferimento per altre geometrie di riferimento. Aiuta anche a identificare l'orientamento della geometria di riferimento referenziata nello spazio 3D.

![](/images/PartDesign_LocalCoordinateSystem_Example.png)

Sistema di coordinate locale originato dall'origine di un piano di riferimento.

## Utilizzo

1. Premere il pulsante ![](/images/PartDesign_CoordinateSystem.svg) Sistema di coordinate locali.
2. Definire i parametri del sistema di coordinate. Selezionare un primo riferimento nella vista 3D per filtrare le modalità di associazione disponibili.
3. A seconda del riferimento selezionato, nell'elenco possono essere disponibili una o più modalità di associazione. La più probabile è selezionata automaticamente e mostrata in grassetto nell'elenco. Nella parte superiore del pannello Parametri appare in verde il testo  *Associato con modalità*  insieme al nome della modalità di associazione.
4. Per aggiungere un riferimento aggiuntivo, premere il successivo pulsante Riferimento. Una volta premuto, l'etichetta cambia in "Selezione ..." fino a quando viene effettuata una selezione.
5. Selezionare una modalità di associazione nell'elenco.
6. Definire i valori di offset dell'associazione.
7. Premere OK.

## Opzioni

Fare doppio clic sull'etichetta **Local\_CS** nell'albero del modello o fare clic con il tasto destro e selezionare **Modifica il riferimento** nel menu contestuale per modificarne i parametri. Per ulteriori dettagli sulla modalità e sull'offset di associazione, vedere [Associazione](/Part_EditAttachment/it "Part EditAttachment/it").

## Preferenze

Vedere [Piano di riferimento di Partdesign](/PartDesign_Plane/it#Preferenze "PartDesign Plane/it").

## Proprietà

### Dati

* Dati**MapMode**: elenca le modalità di associazione utilizzabili.
* Dati**Attachment Reversed**: indica se l'orientamento del sistema di coordinate è invertito.
* Dati**Attachment Offset**: applica una trasformazione (traslazione e rotazione) in riferimento alla posizione del riferimento.
* Dati**Placement**: indica le coordinate e l'allineamento dell'origine del sistema di coordinate.
* Dati**Label**: nome dato all'oggetto, questo nome può essere cambiato a piacere.

## Script

```
lcs = App.activeDocument().addObject( 'PartDesign::CoordinateSystem', 'LCS' )

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_CoordinateSystem/it&oldid=1563036>"