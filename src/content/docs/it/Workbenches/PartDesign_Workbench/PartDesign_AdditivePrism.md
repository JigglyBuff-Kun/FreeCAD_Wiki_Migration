---
title: PartDesign Prisma additivo
---
|  |
| --- |
| Prisma additivo |
| Posizione nel menu |
| Part Design → Crea una primitiva additiva → Prisma |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Primitive additive](/PartDesign_CompPrimitiveAdditive/it "PartDesign CompPrimitiveAdditive/it") |
|  |

## Descrizione

Inserisce un prisma primitivo nel corpo attivo come prima caratteristica o lo fonde con le caratteristiche esistenti.

![](/images/PartDesign_AdditivePrism_example.png)

## Utilizzo

1. Premere il pulsante ![](/images/PartDesign_AdditivePrism.png) **Prisma additivo**. **Nota**: Il Prisma additivo fa parte di un menu di icone etichettato *Crea una primitiva additiva*. Dopo l'avvio, FreeCAD visualizza Cubo additivo nella barra degli strumenti. Per accedere al Prisma, fare clic sulla freccia verso il basso accanto all'icona visibile e selezionare Prisma nel menu.
2. Impostare i parametri della primitiva e [Attachment](/Part_EditAttachment/it "Part EditAttachment/it").
3. Cliccare OK.
4. Nel corpo attivo viene visualizzata una funzione Prisma.

## Opzioni

It is possible to create skewed prisms by specifying angles in respect to the normal vector of the chosen attachment.

Dopo la sua creazione il Prisma può essere modificato in due modi:

* Fare doppio clic nella struttura del modello, oppure fare clic con il tasto destro e selezionare **Modifica primitiva** nel menu contestuale; questo richiama i parametri primitivi.
* Tramite l'[editor delle proprietà](/Property_editor/it "Property editor/it").

## Proprietà

* Dati**Attachment**: Definisce la modalità e l'offset di associazione. Vedere [Associazione](/Part_EditAttachment/it "Part EditAttachment/it").
* Dati**Label**: Etichetta data all'oggetto Prisma. Modificabile secondo le proprie esigenze.
* Dati**Polygon**: numero di lati nella sezione trasversale del poligono del prisma.
* Dati**Circumradius**: [raggio de cerchio circoscritto](https://en.wikipedia.org/wiki/Circumscribed_circle) della sezione trasversale del poligono del prisma.
* Dati**Height**: altezza del prisma.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditivePrism/it&oldid=1568610>"