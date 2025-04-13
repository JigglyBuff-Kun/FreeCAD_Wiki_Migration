---
title: PartDesign Toro additivo
---
|  |
| --- |
| Toro additivo |
| Posizione nel menu |
| Part Design → Crea una primitiva additiva → Toro |
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

Inserisce un toro primitivo nel corpo attivo come prima caratteristica o lo fonde con le caratteristiche esistenti.

![](/images/PartDesign_AdditiveTorus_example.png)

## Utilizzo

1. Premere il pulsante ![](/images/PartDesign_AdditiveTorus.png) **Toro additivo**. **Nota**: Il Toro additivo fa parte di un menu di icone etichettato *Crea una primitiva additiva*. Dopo l'avvio, FreeCAD visualizza Cubo additivo nella barra degli strumenti. Per accedere al Toro, fare clic sulla freccia verso il basso accanto all'icona visibile e selezionare Toro nel menu.
2. Impostare i parametri della primitiva e [Attachment](/Part_EditAttachment/it "Part EditAttachment/it").
3. Cliccare OK.
4. Nel corpo attivo viene visualizzata una funzione Toro.

## Opzioni

Dopo la sua creazione il toro può essere modificato in due modi:

* Fare doppio clic nella struttura del modello, oppure fare clic con il tasto destro e selezionare **Modifica primitiva** nel menu contestuale; questo richiama i parametri primitivi.
* Tramite l'[editor delle proprietà](/Property_editor/it "Property editor/it").

## Proprietà

* Dati**Attachment**: Definisce la modalità e l'offset di associazione. Vedere [Associazione](/Part_EditAttachment/it "Part EditAttachment/it").
* Dati**Label**: Etichetta data all'oggetto Toro. Modificabile secondo le proprie esigenze.
* Dati**Radius1**: Raggio dell'orbita immaginaria attorno alla quale ruota la sezione circolare. (La distanza tra il centro del toro e il centro di rotazione della sezione trasversale)
* Dati**Radius2**: Raggio della sezione trasversale circolare che definisce la forma del toro.
* Dati**Angle1**: (etichettato  *Parametro V*  nei parametri Primitive) Troncamento inferiore del toro, parallelo alla sezione trasversale circolare (-180 gradi in un toro pieno). Un bug nel codice causa risultati imprevisti cambiando il valore di Angle1.
* Dati**Angle2**: (non etichettato nei parametri primitivi) troncatura superiore dell'ellissoide, parallela alla sezione trasversale circolare (180 gradi in un toro pieno). Un bug nel codice causa risultati imprevisti cambiando il valore di Angle2.
* Dati**Angle3**: (etichettato  *parametro U*  nei parametri primitivi) angolo di rotazione della sezione trasversale circolare (360 gradi in un toro pieno).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveTorus/it&oldid=1568536>"