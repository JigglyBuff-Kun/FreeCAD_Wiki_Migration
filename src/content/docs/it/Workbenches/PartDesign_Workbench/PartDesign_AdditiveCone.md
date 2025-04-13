---
title: PartDesign Cono additivo
---
|  |
| --- |
| Cono additivo |
| Posizione nel menu |
| Part Design → Crea una primitiva additiva → Cono |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Primitiva additiva](/PartDesign_CompPrimitiveAdditive/it "PartDesign CompPrimitiveAdditive/it"), [Cono sottrattivo](/PartDesign_SubtractiveCone/it "PartDesign SubtractiveCone/it") |
|  |

## Descrizione

Inserisce un cono primitivo nel corpo attivo come prima caratteristica o lo fonde con le caratteristiche esistenti.

![](/images/PartDesign_AdditiveCone_example.png)

## Utilizzo

1. Premere il pulsante ![](/images/PartDesign_AdditiveCone.png) **Cono additivo**. **Nota**: Il Cono additivo fa parte di un menu di icone etichettato *Crea una primitiva additiva*. Dopo l'avvio, FreeCAD visualizza Cubo additivo nella barra degli strumenti. Per accedere al Cono, fare clic sulla freccia verso il basso accanto all'icona visibile e selezionare Cono nel menu.
2. Impostare i parametri della primitiva (per un cono completo, impostare a zero uno dei due raggi) e la modalità di [Associazione](/Part_EditAttachment/it "Part EditAttachment/it").
3. Cliccare su OK.
4. Nel corpo attivo viene visualizzata una funzione Cono.

## Opzioni

Dopo la sua creazione il cono può essere modificato in due modi:

* Nell'albero del modello fare doppio clic, oppure fare clic con il tasto destro e selezionare **Modifica primitiva** nel menu contestuale; questo mostra i parametri primitivi.
* Tramite l'[editor delle proprietà](/Property_editor/it "Property editor/it").

## Proprietà

* Dati**Attachment**: Definisce la modalità e l'offset di associazione. Vedere [Associazione](/Part_EditAttachment/it "Part EditAttachment/it").
* Dati**Label**: Etichetta data all'oggetto Cono. Modificabile secondo le proprie esigenze.
* Dati**Radius1**: Il valore del raggio alla base del cono.
* Dati**Radius2**: Il valore del raggio nella parte superiore del cono. Un valore diverso da zero crea un tronco di cono.
* Dati**Height**: L'altezza del cono lungo il suo asse.
* Dati**Angle**: Angolo di rotazione della sezione trasversale (360 gradi per un cono completo).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveCone/it&oldid=1571339>"