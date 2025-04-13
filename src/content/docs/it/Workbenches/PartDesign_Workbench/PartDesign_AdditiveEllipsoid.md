---
title: PartDesign Ellissoide additivo
---
|  |
| --- |
| Ellissoide additivo |
| Posizione nel menu |
| Part Design → Crea una primitiva additiva → Ellissoide |
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

Inserisce un ellissoide primitivo nel corpo attivo come prima caratteristica o lo fonde con le caratteristiche esistenti.

![](/images/PartDesign_AdditiveEllipsoid_example.png)

## Utilizzo

1. Premere il pulsante ![](/images/PartDesign_AdditiveEllipsoid.png) **Ellissoide additivo**. **Nota**: L'ellissoide additivo fa parte di un menu di icone etichettato *Crea una primitiva additiva*. Dopo l'avvio, FreeCAD visualizza Cubo additivo nella barra degli strumenti. Per accedere all'ellissoide, fare clic sulla freccia verso il basso accanto all'icona visibile e selezionare l'ellissoide nel menu.
2. Impostare i parametri della primitiva e [Associazione](/Part_EditAttachment/it "Part EditAttachment/it").
3. Cliccare OK.
4. Nel corpo attivo viene visualizzata una funzione Ellissoide.

## Opzioni

Dopo la sua creazione l'ellissoide può essere modificato in due modi:

* Fare doppio clic nella struttura del modello, oppure fare clic con il tasto destro e selezionare **Modifica primitiva** nel menu contestuale; questo richiama i parametri primitivi.
* Tramite l'[editor delle proprietà](/Property_editor/it "Property editor/it").

## Proprietà

* Dati**Attachment**: Definisce la modalità e l'offset di associazione. Vedere [Associazione](/Part_EditAttachment/it "Part EditAttachment/it").
* Dati**Label**: Etichetta data all'oggetto ellissoide. Modificabile secondo le proprie esigenze.
* Dati**Radius1**: il valore del raggio lungo l'asse verticale dell'ellissoide; di default, parallelo all'asse Z.
* Dati**Radius2**: il valore del raggio lungo la lunghezza dell'ellissoide; di default, parallelo all'asse X.
* Dati**Radius3**: il valore del raggio lungo la larghezza dell'ellissoide; di default, parallelo all'asse Y. Al valore predefinito di zero, l'ellissoide forma un [oblate spheroid](http://en.wikipedia.org/wiki/Oblate_spheroid).
* Dati**Angle1**: (etichettato "Parametro V" nei parametri primitivi) Troncamento inferiore dell'ellissoide, parallelo alla sezione trasversale circolare (-90 gradi in uno sferoide completo)
* Dati**Angle2**: (non etichettato nei parametri primitivi) troncatura superiore dell'ellissoide, parallelo alla sezione trasversale circolare (90 gradi in uno sferoide completo).
* Dati**Angle3**: (etichettato  *parametro U*  nei parametri primitivi) angolo di rotazione della sezione trasversale ellittica (360 gradi in uno sferoide completo).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveEllipsoid/it&oldid=1568529>"