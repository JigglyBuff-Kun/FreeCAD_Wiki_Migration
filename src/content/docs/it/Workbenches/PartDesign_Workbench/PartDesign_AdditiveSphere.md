---
title: PartDesign Sfera additiva
---
|  |
| --- |
| Sfera additiva |
| Posizione nel menu |
| Part Design → Crea una primitiva additiva → Sfera |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Primitiva additiva](/PartDesign_CompPrimitiveAdditive/it "PartDesign CompPrimitiveAdditive/it"), [Sfera sottrattiva](/PartDesign_SubtractiveSphere/it "PartDesign SubtractiveSphere/it") |
|  |

## Descrizione

Inserisce una sfera primitiva nel corpo attivo come prima caratteristica o la fonde con le caratteristiche esistenti.

![](/images/PartDesign_AdditiveSphere_example.png)

## Utilizzo

1. Premere il pulsante ![](/images/PartDesign_AdditiveSphere.svg) **Sfera additiva**. **Nota**: La sfera additiva fa parte di un menu di icone etichettato *Crea una primitiva additiva*. Dopo l'avvio di FreeCAD, nella barra degli strumenti viene visualizzato il cubo additivo. Per accedere alla Sfera, fare clic sulla freccia rivolta verso il basso accanto all'icona e selezionare Sfera nel menu.
2. Impostare i parametri della primitiva e la modalità di [Associazione](/Part_EditAttachment/it "Part EditAttachment/it").
3. Cliccare su OK.
4. Nel corpo attivo viene visualizzata una funzione Sfera.

## Opzioni

Dopo la sua creazione la sfera può essere modificata in due modi:

* Nell'albero del modello fare doppio clic, oppure fare clic con il tasto destro e selezionare **Edita la primitiva** dal menu contestuale; questo mostra i parametri primitivi.
* Tramite l'[editor delle proprietà](/Property_editor/it "Property editor/it").

## Proprietà

* Dati**Attachment**: Definisce la modalità e l'offset di associazione. Vedere [Associazione](/Part_EditAttachment/it "Part EditAttachment/it").
* Dati**Label**: Etichetta data all'oggetto Sfera. Modificabile secondo le proprie esigenze.
* Dati**Radius**: Raggio della sfera.
* Dati**Angle1**: (etichettato *Parametri V* nei parametri delle primitive) Troncamento inferiore della sfera, parallelo alla sezione trasversale circolare (-90 gradi in una sfera piena)
* Dati**Angle2**: (non etichettato nei parametri delle primitive) troncatura superiore della sfera, parallelo alla sezione trasversale circolare (90 gradi in una sfera completa).
* Dati**Angle3**: (etichettato *Parametro U*  nei parametri primitivi) angolo di rotazione della sezione trasversale (360 gradi in una sfera piena).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveSphere/it&oldid=1571337>"