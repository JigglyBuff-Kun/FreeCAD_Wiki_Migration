---
title: Part Inverti forma
---
|  |
| --- |
| ‏‎Part Inverti forma ‎ |
| Posizione nel menu |
| Parte → Inverti forma |
| Ambiente |
| [Part](/Part_Workbench/it "Part Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Il comando ![](/images/Part_ReverseShape.svg) **Part Inverti forma** crea copie parametriche dagli oggetti selezionati con normali delle facce invertite.

## Utilizzo

1. Selezionare uno o più oggetti.
2. Selezionare l'opzione **Parte → ![](/images/Part_ReverseShape.svg) Inverti forme** dal menu.
3. Per ciascun oggetto selezionato viene creata una forma invertita.

## Note

* Gli oggetti [App Link](/App_Link/it "App Link/it") collegati ai tipi di oggetto appropriati e i contenitori [App Part](/App_Part/it "App Part/it") con gli oggetti visibili appropriati all'interno possono essere utilizzati anche come oggetti di origine. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")
* Per vedere l'effetto del comando, modificare la proprietà Vista**Lighting** della forma invertita in `On side` e, se necessario, modificare **Modifica → Preferenze... → Visualizzazione → Vista 3D → Rendering → Colore di retroilluminazione**.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Part Inverti forma deriva da un oggetto [Funzione Part](/Part_Feature/it "Part Feature/it") e ne eredita tutte le proprietà. Ha inoltre le seguenti proprietà aggiuntive:

### Dati

Reverse

* Dati**Source** (`Link`): specifica il collegamento alla la forma sorgente.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ReverseShape/it&oldid=1476244>"