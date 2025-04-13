---
title: PartDesign Crea un piano di riferimento
---
|  |
| --- |
| Crea un piano di riferimento |
| Posizione nel menu |
| Part Design → Crea un riferimento → Crea un piano di riferimento |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Crea un punto di rifierimento](/PartDesign_Point/it "PartDesign Point/it"), [Linea di riferimento](/PartDesign_Line/it "PartDesign Line/it") |
|  |

## Descrizione

Crea un **piano di riferimento** che può essere utilizzato come riferimento per schizzi o altre geometrie di riferimento. Gli schizzi possono essere associati ai piani di Riferimento.

![](/images/Datum_plane.png)

*Piano di riferimento che attraversa 3 angoli del Cubo con un Cilindro disegnato su di esso usando il Piano di riferimento come suo Piano X-Y.*

## Prerequisiti

Un piano di riferimento può essere creato solo all'interno di un ![](/images/PartDesign_Body.svg) [Corpo](/PartDesign_Body/it "PartDesign Body/it"). Ogni corpo ha un'origine che di default è nascosta. Per poter fare riferimento ai piani di base dell'origine, rendere visibile l'origine. È possibile farlo prima di creare un piano di riferimento.

## Utilizzo

1. Premere il pulsante ![](/images/PartDesign_Plane.svg) Crea un piano di riferimento.
2. Definire i parametri del piano. Selezionare un primo riferimento nella vista 3D per filtrare le modalità di [associazione](/Part_EditAttachment/it "Part EditAttachment/it") disponibili.
3. A seconda del riferimento selezionato, nell'elenco possono essere disponibili una o più modalità di associazione. La più probabile è automaticamente selezionata e mostrata in grassetto nell'elenco. La modalità di associazione indicata nel campo *Modalità di associazione:* appare in verde anche nella parte superiore del pannello Parametri.
4. Per aggiungere un riferimento aggiuntivo, premere il successivo pulsante Riferimento. Una volta premuto, l'etichetta cambia in "Selezione..." fino a quando viene effettuata una selezione.
5. Selezionare una modalità di associazione nell'elenco.
6. **Offset:** Definisce i valori di offset dell'associazione. **Notare** che l'offset x, y e z si riferisce al sistema di coordinate locale del piano di riferimento, non al sistema di coordinate globali. Pertanto, l'offset z è sempre l'offset lungo il vettore normale al piano di riferimento.
7. **Rotazione:** Cambiando "Intorno all'asse x" il piano ruota attorno al suo asse X locale. Cambiando "Intorno all'asse y" il piano ruota attorno al suo asse Y locale. Cambiando "Intorno all'asse z" il piano ruota attorno al suo asse Z locale.
8. Premere OK.

## Opzioni

Fare doppio clic sull'etichetta DatumPlane nell'albero del modello o fare clic con il tasto destro e selezionare **Modifica il riferimento** nel menu contestuale per modificarne i parametri. Per ulteriori dettagli sulla modalità e sull'offset di associazione, vedere [Associazione](/Part_EditAttachment/it "Part EditAttachment/it").

## Preferenze

Il colore diffuso predefinito e la trasparenza dei [riferimenti di PartDesign](/PartDesign_CompDatums/it "PartDesign CompDatums/it") sono controllati dal parametro di [regolazione fine](/Fine-tuning/it#PartDesign_Workbench "Fine-tuning/it")  **DefaultDatumColor**.

## Utile per

I piani di riferimento hanno servono:

* come piano di specchiatura arbitrario,
* come supporto per un offset su più schizzi,
* come supporto per uno schizzo che deve essere ad un offset/angolo specifico dall'origine,
* come indicatore visibile (ad esempio, un piano focale).

Per supportare un singolo schizzo, sono fondamentalmente ridondanti. Soffrono del [problema di denominazione topologica](/Topological_naming_problem/it "Topological naming problem/it") tanto quanto gli schizzi.

## Proprietà

* Dati**MapMode**: elenca la modalità di associazione utilizzata.
* Dati**Attachment Offset**: applica una trasformazione (traslazione e rotazione) in riferimento alla posizione di associazione.
* Dati**Label**: nome dato all'oggetto, questo nome può essere cambiato a piacere.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Plane/it&oldid=1563034>"