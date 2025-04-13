---
title: PartDesign Cuneo additivo
---
|  |
| --- |
| Cuneo additivo |
| Posizione nel menu |
| Part Design → Crea una primitiva additiva → Cuneo |
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

Inserisce un cuneo primitivo nel corpo attivo come prima caratteristica o lo fonde con le caratteristiche esistenti.

![](/images/PartDesign_AdditiveWedge_example.png)

## Utilizzo

1. Premere il pulsante ![](/images/PartDesign_AdditiveWedge.png) **Cuneo additivo**. **Nota**: Il Cuneo additivo fa parte di un menu di icone etichettato *Crea una primitiva additiva*. Dopo l'avvio, FreeCAD visualizza Cubo additivo nella barra degli strumenti. Per accedere al Cuneo, fare clic sulla freccia verso il basso accanto all'icona visibile e selezionare Cuneo nel menu.
2. Impostare i parametri della primitiva e [Associazione](/Part_EditAttachment/it "Part EditAttachment/it").
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

## Piramidi

Wedges can be used to create pyramids by setting Dati**X2 min/max** and Dati**Z2 min/max** each so that min = max.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveWedge/it&oldid=1568630>"