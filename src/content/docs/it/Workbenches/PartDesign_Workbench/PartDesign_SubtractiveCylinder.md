---
title: PartDesign Cilindro sottrattivo
---
|  |
| --- |
| Cilindro sottrattivo |
| Posizione nel menu |
| Part Design → Crea una primitiva sottrattiva → Cilindro |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Primitive sottrattive](/PartDesign_CompPrimitiveSubtractive/it "PartDesign CompPrimitiveSubtractive/it") |
|  |

## Descrizione

Inserisce un cilindro sottrattivo nel corpo attivo. La sua forma viene sottratta dal solido esistente.

![](/images/PartDesign_SubtractiveCylinder_example.svg)

*A sinistra il corpo attivo (A) mostrato in grigio e il cilindro sottrattivo (B) mostrato in rosso trasparente; a destra il risultato.*

## Utilizzo

1. Premere il pulsante ![](/images/PartDesign_SubtractiveCylinder.png) **Cilindro sottrattivo**. **Nota**: Il Cilindro sottrattivo fa parte di un menu di icone etichettato *Crea una primitiva sottrattiva*. Dopo l'avvio, FreeCAD visualizza Cubo sottrattivo nella barra degli strumenti. Per accedere al Cilindro, fare clic sulla freccia verso il basso accanto all'icona visibile e selezionare Cilindro nel menu.
2. Impostare i parametri della primitiva e il modo di [Associazione](/Part_EditAttachment/it "Part EditAttachment/it").
3. Cliccare OK.
4. Nel corpo attivo viene visualizzata una funzione Cilindro.

## Opzioni

It is possible to create skewed cylinders by specifying angles in respect to the normal vector of the chosen attachment. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

Dopo la sua creazione il cilindro può essere modificato in due modi:

* Fare doppio clic nella struttura del modello, oppure fare clic con il tasto destro e selezionare **Modifica primitiva** nel menu contestuale; questo richiama i parametri primitivi.
* Tramite l'[editor delle proprietà](/Property_editor/it "Property editor/it").

## Proprietà

* Dati**Attachment**: Definisce la modalità e l'offset di associazione. Vedere [Associazione](/Part_EditAttachment/it "Part EditAttachment/it").
* Dati**Label**: Etichetta data all'oggetto Cilindro. Modificabile secondo le proprie esigenze.
* Dati**Radius**: Il valore del raggio del cilindro.
* Dati**Angle**: Angolo di rotazione della sezione trasversale (360 gradi in un cilindro completo).
* Dati**Height**: L'altezza del cilindro lungo il suo asse.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveCylinder/it&oldid=1570783>"