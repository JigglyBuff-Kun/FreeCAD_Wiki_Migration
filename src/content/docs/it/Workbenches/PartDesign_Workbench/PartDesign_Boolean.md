---
title: PartDesign Booleane
---
|  |
| --- |
| Operazioni booleane |
| Posizione nel menu |
| Part Design → Operazioni booleane |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

**PartDesign Booleane** importa uno o più [Corpi PartDesign](/PartDesign_Body "PartDesign Body") o [Cloni PartDesign](/PartDesign_Clone "PartDesign Clone") (designati come "tool bodies") nel corpo PartDesign attivo e applica un'operazione booleana (fusione, taglio o comune).

![](/images/PartDesign_Boolean_example.png)

A sinistra il corpo attivo (A) con i corpi utensile (B) e (C); a destra il risultato dopo un taglio booleano.

## Utilizzo

1. Attivare il corpo che deve ricevere l'operazione booleana. ***Nota**: È importante che né il corpo attivo né alcuna delle caratteristiche in esso contenute siano selezionati!*
2. Premere il pulsante ![](/images/PartDesign_Boolean.svg) **Booleana**.
3. In **Parametri Booleana**, cliccare sul pulsante Aggiungi corpo. Il corpo attivo scompare temporaneamente dalla vista 3D per facilitare la selezione del corpo utensile.
4. Nella vista 3D, selezionare il corpo da usare nella funzione booleana. Ripetere per aggiungere altri corpi.
5. Selezionare il tipo di operazione booleana nel menu a discesa (Fuse, Cut o Common)
6. Cliccare su OK.

In alternativa, è possibile selezionare uno o più Corpi prima di premere il pulsante Booleana; essi vengono aggiunti automaticamente.

Alternatively, objects can be selected prior to pressing the Boolean button. They will be added automatically. When pre-selecting you are not restricted to Bodies. [PartDesign ShapeBinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder"), [PartDesign SubShapeBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder") and even solids created with other workbenches can then also be selected.

## Opzioni

* **Fuse:** unisce il corpo strumento o i corpi al corpo attivo.
* **Cut:** sottrae il corpo strumento o i corpi dal corpo attivo.
* **Common:** estrae l'intersezione del corpo strumento o dei corpi con il corpo attivo.
* Premere il pulsante Rimuovi corpo per rimuovere un corpo, selezionandolo nella vista 3D.

## Proprietà

* Dati**Type**: imposta l'operazione booleana (Fuse, Cut, Common)
* Dati**Label**: nome dato all'operazione, questo nome può essere cambiato a piacere.
* Dati**Group**: elenca i corpi strumento.
* Vista**Display**: imposta la visualizzazione tra 2 modalità:
  + Result (default): visualizza il risultato della funzione booleana. In questa modalità, i Corpi degli strumenti non possono essere visualizzati nel loro stato originale, anche quando viene attivata la loro visibilità.
  + Tools: visualizza i Corpi utensile nel loro stato originale. Questa modalità è utile quando è necessario modificare i corpi strumento.
* Vista**Selectable**: true o false. Se impostato su false, la funzione non può essere selezionata nella vista 3D.
* Vista**Visibility**: true o false. Attiva / disattiva la visibilità della funzione nella vista 3D.

## Limitazioni

* Affinché Common funzioni con più di un corpo utensile, tutti i corpi devono intersecarsi tra loro e con il Corpo attivo.
* I corpi utensile adottano l'origine locale del corpo attivo. Se il corpo attivo non si trova in (0,0,0) nel sistema di coordinate globali, la posizione dei corpi utensile deve essere relativa al corpo attivo. Potrebbe essere più semplice lasciare il posizionamento del Corpo attivo nell'origine prima di applicare l'operazione booleana, e poi cambiare la sua posizione dopo l'operazione.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Boolean/it&oldid=1446899>"