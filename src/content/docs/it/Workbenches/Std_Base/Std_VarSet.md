---
title: Crea insieme di variabili
---
|  |
| --- |
| Std Crea insieme di variabili |
| Posizione nel menu |
| *Nessuno* |
| Ambiente |
| Tutti |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 1.0 |
| Vedere anche |
| [Spreadsheet](/Spreadsheet_Workbench/it "Spreadsheet Workbench/it"), [DynamicData](/DynamicData_Workbench/it "DynamicData Workbench/it") |
|  |

## Descrizione

Il comando **Crea insieme di variabili** crea un VarSet. Un VarSet è un insieme di proprietà che possono essere utilizzate come variabili nelle [espressioni](/Expressions/it "Expressions/it").

![](/images/Std_VarSet_Dialog.png)

La finestra di dialogo Aggiungi una proprietà

## Utilizzo

1. Effettuare una delle seguenti operazioni:
   * Per creare un nuovo VarSet: premere il pulsante ![](/images/Std_VarSet.svg) Crea un insieme di variabili.
   * Per modificare un VarSet esistente: fare doppio clic sull'insieme nella [Vista ad albero](/Tree_view/it "Tree view/it").
2. Si apre la finestra di dialogo **Aggiungi una proprietà**.
3. Inserire un **Nome** per la proprietà.
   * Il nome deve essere univoco per il VarSet.
   * Solo caratteri alfanumerici e trattini bassi (da `A` a `Z`, da `a` a `z`, da `0` a `9` e `_`) sono consentiti.
   * Il primo carattere non può essere una cifra.
   * FreeCAD utilizza la convenzione [UpperCamelCase](https://en.wikipedia.org/wiki/Camel_case) ​​per i nomi delle sue proprietà, il che significa che ogni parola inizia con una lettera maiuscola e non ci sono spazi o caratteri di sottolineatura. Quando l'[Editor delle proprietà](/Property_editor/it "Property editor/it") visualizza tale nome, vengono inseriti degli spazi tra le parole, rendendo il nome più facile da leggere. Si consiglia di seguire questa convenzione.
4. Inserire un nome **Gruppo** per la proprietà o selezionare un gruppo dall'elenco. I nomi dei gruppi hanno le stesse restrizioni dei nomi delle proprietà.
5. Selezionare la proprietà **Tipo** dall'elenco. Vedere sotto per i [tipi più comuni](#Tipi_di_proprietà_più̠_comuni).
6. Inserire un **Valore** per la proprietà. Questo input accetta unità per proprietà che dispongono di unità.
7. Facoltativamente selezionare la casella di controllo **Aggiungi un altro** se si desidera aggiungere più proprietà.
8. Facoltativamente, inserire un **Tooltip** per la proprietà.
9. Premere il pulsante OK.
10. Se la casella di controllo **Aggiungi un altro** è stata selezionata, la finestra di dialogo si riapre ed è possibile aggiungere una nuova proprietà.
11. Al termine, premere il pulsante Annulla.

## Tipi di proprietà più comuni

FreeCAD supporta molti tipi di proprietà. La tabella seguente elenca alcuni dei tipi più comuni. Vedere [Proprietà personalizzate FeaturePython](/FeaturePython_Custom_Properties/it "FeaturePython Custom Properties/it") per ulteriori informazioni.

| Property type | Default unit (if any) | Remark |
| --- | --- | --- |
| `App::PropertyAngle` | ° (or deg) |  |
| `App::PropertyBool` |  | `true` or `false`, can be used in [conditional expressions](/Expressions#Conditional_expressions "Expressions") |
| `App::PropertyDistance` | mm |  |
| `App::PropertyFloat` |  | Decimal number |
| `App::PropertyInteger` |  | Whole number |
| `App::PropertyLength` | mm | Similar to `App::PropertyDistance` but cannot be negative |
| `App::PropertyString` |  | Text string |

## Note

* È inoltre possibile aggiungere proprietà ai VarSet esistenti nell'[Editor delle espressioni](/Expressions/it "Expressions/it") selezionando la casella di controllo **Mostra insiemi di variabili**.
* Una proprietà può essere rimossa da un VarSet tramite il [menu contestuale](/Property_editor/it#Context_menu "Property editor/it") dell'[Property\_editor|Editor delle proprietà](/Property_editor/it "Property editor/it").
* Il nome di un gruppo può essere modificato tramite lo stesso menu.
* Attualmente il comando non può impostare l'elenco degli elementi consentiti di una proprietà `App::PropertyEnumeration`. Questo può essere fatto tramite [Codice Python](/FeaturePython_Custom_Properties/it#App::PropertyEnumeration "FeaturePython Custom Properties/it") o nell'editor Proprietà. I passaggi per quest'ultima opzione sono:
  1. Selezionare **Mostra nascosti** nel menu contestuale dell'Editor delle proprietà.
  2. Espandere il nodo della proprietà.
  3. Fare clic nel campo **Enum**.
  4. Premere il pulsante ... che appare.
  5. Inserire i valori nella finestra di dialogo **Elenco** che si apre.
  6. Premere il pulsante OK.

## Script

```
import FreeCAD as App

doc = App.ActiveDocument

var_set = doc.addObject("App::VarSet", "VarSetName")
var_set.addProperty("App::PropertyInteger", "MyNumber")  # Property is added to the Base group.
var_set.MyNumber = 123
var_set.addProperty("App::PropertyString", "MyText", group="SomeGroup", doc="Some tooltip information")
var_set.MyText = "Abc"

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_VarSet/it&oldid=1528623>"