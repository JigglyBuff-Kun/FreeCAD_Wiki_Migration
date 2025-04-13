---
title: PartDesign Cuneo sottrattivo
---
|  |
| --- |
| Cuneo sottrattivo |
| Posizione nel menu |
| Part Design → Crea una primitiva sottrattiva → Cuneo |
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

Inserisce un cuneo sottrattivo nel corpo attivo. La sua forma viene sottratta dal solido esistente.

![](/images/PartDesign_SubtractiveWedge_example.svg)

*A sinistra il corpo attivo (A) mostrato in grigio e il cuneo sottrattivo (B) mostrato in rosso trasparente; a destra il risultato.*

## Utilizzo

1. Premere il pulsante ![](/images/PartDesign_SubtractiveWedge.png) **Cuneo sottrattivo**. **Nota**: Il Cuneo sottrattivo fa parte di un menu di icone etichettato *Crea una primitiva sottrattiva*. Dopo l'avvio, FreeCAD visualizza Cubo sottrattivo nella barra degli strumenti. Per accedere al Cuneo, fare clic sulla freccia verso il basso accanto all'icona visibile e selezionare Cuneo nel menu.
2. Impostare i parametri della primitiva e il modo di [Associazione](/Part_EditAttachment/it "Part EditAttachment/it").
3. Cliccare OK.
4. Nel corpo attivo viene visualizzata una funzione Cuneo.

## Opzioni

Dopo la sua creazione il cuneo può essere modificato in due modi:

* Fare doppio clic nella struttura del modello, oppure fare clic con il tasto destro e selezionare **Modifica primitiva** nel menu contestuale; questo richiama i parametri primitivi.
* Tramite l'[editor delle proprietà](/Property_editor/it "Property editor/it").

## Proprietà

Usando il posizionamento predefinito, gli input sottostanti sono:

* Dati**X min/max** : Estensione sull'asse X della faccia di base
* Dati**Y min/max**: Altezza del cuneo
* Dati**Z min/max** : Estensione sull'asse Z della faccia di base
* Dati**X2 min/max** : Estensione sull'asse X della faccia superiore
* Dati**Z2 min/max** : Estensione sull'asse Z della faccia superiore

## Pyramids

Wedges can be used to create pyramids by setting Dati**X2 min/max** and Dati**Z2 min/max** each so that min = max.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveWedge/it&oldid=1424913>"