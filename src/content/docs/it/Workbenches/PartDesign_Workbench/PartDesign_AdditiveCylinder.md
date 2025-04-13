---
title: PartDesign Cilindro additivo
---
|  |
| --- |
| Cilindro additivo |
| Posizione nel menu |
| Part Design → Crea una primitiva additiva → Cilindro |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Primitiva additiva](/PartDesign_CompPrimitiveAdditive/it "PartDesign CompPrimitiveAdditive/it"), [Cilindro sottrattivo](/PartDesign_SubtractiveCylinder/it "PartDesign SubtractiveCylinder/it") |
|  |

## Descrizione

Inserisce un cilindro primitivo nel corpo attivo come prima caratteristica o lo fonde con le caratteristiche esistenti.

![](/images/PartDesign_AdditiveCylinder_example.png)

## Utilizzo

1. Premere il pulsante ![](/images/PartDesign_AdditiveCylinder.svg) **Cilindro additivo**. **Nota**: Il Cilindro additivo fa parte di un menu di icone etichettato *Crea una primitiva additiva*. Dopo l'avvio di FreeCAD, nella barra degli strumenti viene visualizzato il cubo additivo. Per accedere al Cilindro, fare clic sulla freccia rivolta verso il basso accanto all'icona e selezionare Cilindro nel menu.
2. Impostare i parametri della primitiva e la modalità di [Associazione](/Part_EditAttachment/it "Part EditAttachment/it").
3. Cliccare su OK.
4. Nel corpo attivo viene visualizzata una funzione Cilindro.

## Opzioni

È possibile creare cilindri sghembi specificando gli angoli rispetto al vettore normale al riferimento scelto. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")

Dopo la sua creazione il cilindro può essere modificato in due modi:

* Nell'albero del modello fare doppio clic, oppure fare clic con il tasto destro e selezionare **Edita la primitiva** dal menu contestuale; questo mostra i parametri primitivi.
* Tramite l'[editor delle proprietà](/Property_editor/it "Property editor/it").

## Proprietà

* Dati**Attachment**: Definisce la modalità e l'offset di associazione. Vedere [Associazione](/Part_EditAttachment/it "Part EditAttachment/it").
* Dati**Label**: Etichetta data all'oggetto Cilindro. Modificabile secondo le proprie esigenze.
* Dati**Radius**: Il valore del raggio del cilindro.
* Dati**Angle**: Angolo di rotazione della sezione trasversale (360 gradi in un cilindro completo).
* Dati**Height**: L'altezza del cilindro lungo il suo asse.
* Dati**First Angle**: Angolo nella prima direzione. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")
* Dati**Second Angle**: Angolo nella seconda direzione. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveCylinder/it&oldid=1570916>"