---
title: PartDesign Sfera sottrattiva
---
|  |
| --- |
| Sfera sottrattiva |
| Posizione nel menu |
| Part Design → Crea una primitiva sottrattiva → Sfera |
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

Inserisce una sfera sottrattiva nel corpo attivo. La sua forma viene sottratta dal solido esistente.

![](/images/PartDesign_SubtractiveSphere_example.svg)

*A sinistra il corpo attivo (A) mostrato in grigio e la sfera sottrattiva (B) mostrata in rosso trasparente; a destra il risultato.*

## Utilizzo

1. Premere il pulsante ![](/images/PartDesign_SubtractiveSphere.png) **Sfera sottrattiva**. **Nota**: La sfera sottrattiva fa parte di un menu di icone etichettato *Crea una primitiva sottrattiva*. Dopo l'avvio, FreeCAD visualizza Cubo sottrattivo nella barra degli strumenti. Per accedere alla sfera, fare clic sulla freccia verso il basso accanto all'icona visibile e selezionare Sfera nel menu.
2. Impostare i parametri della primitiva e il modo di [Associazione](/Part_EditAttachment/it "Part EditAttachment/it").
3. Cliccare OK.
4. Nel corpo attivo viene visualizzata una funzione Sfera.

## Opzioni

Dopo la sua creazione la sfera può essere modificata in due modi:

* Fare doppio clic nella struttura del modello, oppure fare clic con il tasto destro e selezionare **Modifica primitiva** nel menu contestuale; questo richiama i parametri primitivi.
* Tramite le [Proprietà](/Property_editor/it "Property editor/it").

## Proprietà

* Dati**Attachment**: Definisce la modalità e l'offset di associazione. Vedere [Associazione](/Part_EditAttachment/it "Part EditAttachment/it").
* Dati**Label**: Etichetta data all'oggetto sfera. Modificabile secondo le proprie esigenze.
* Dati**Radius**: Raggio della sfera.
* Dati**Angle1**: (etichettato  *Parametro V*  nei parametri Primitive) Troncamento inferiore della sfera, parallelo alla sezione trasversale circolare (-90 gradi in una sfera piena)
* Dati**Angle2**: (non etichettato nei parametri primitivi) troncatura superiore dell'ellissoide, parallelo alla sezione trasversale circolare (90 gradi in una sfera piena).
* Dati**Angle3**: (etichettato  *parametro U*  nei parametri primitivi) angolo di rotazione della sezione trasversale (360 gradi in una sfera completa).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveSphere/it&oldid=1570789>"