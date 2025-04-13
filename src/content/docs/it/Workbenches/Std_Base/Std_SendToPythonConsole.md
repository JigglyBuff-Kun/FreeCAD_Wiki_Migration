---
title: Modifica Invia alla console Python
---
|  |
| --- |
| Invia alla console Python |
| Posizione nel menu |
| Modifica → Invia alla console Python |
| Ambiente |
| Tutti |
| Avvio veloce |
| Ctrl+Maiusc+P |
| Introdotto nella versione |
| 0.19 |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Il comando **Invia alla console Python** crea variabili nella [console Python](/Python_console/it "Python console/it") che fanno riferimento a un oggetto selezionato e alle sue forme secondarie selezionate, insieme ad altri riferimenti utili. Le variabili e il codice coinvolti possono essere utilizzati nello sviluppo del codice Python.

A seconda dell'oggetto selezionato e delle sue forme secondarie selezionate, se presenti, vengono create le seguenti variabili:

| Variable name | Referenced object(s) |
| --- | --- |
| `doc` | Il documento contenente l'oggetto selezionato |
| `lnk` | L'oggetto Link selezionato (creato solo se l'oggetto selezionato è un Link) |
| `obj` | A seconda dell'oggetto selezionato:  L'oggetto selezionato stesso (se l'oggetto selezionato non è un collegamento)  L'oggetto collegato (se l'oggetto selezionato è un collegamento) |
| `shp` | A seconda del tipo di `obj`:  La proprietà `Shape` di `obj` (per oggetti derivati ​​dalla classe `Part::Feature`)  La proprietà `Mesh` di `obj` (per gli oggetti Mesh)  La proprietà `Points` di `obj` (per oggetti Points) |
| `sub` | La prima forma secondaria selezionata (creata solo se è selezionata almeno una forma secondaria) |
| `subs` | Un elenco contenente tutte le forme secondarie (creato solo se sono selezionate due o più forme secondarie) |

```
>>> ### Begin command Std_SendToPythonConsole
>>> try:
>>>     del(doc,lnk,obj,shp,sub,subs)
>>> except Exception:
>>>     pass
>>> 
>>> doc = App.getDocument("Unnamed")
>>> lnk = doc.getObject("Link")
>>> obj = lnk.getLinkedObject()
>>> shp = obj.Shape
>>> sub = obj.getSubObject("Edge10")
>>> subs = [obj.getSubObject("Edge10"),obj.getSubObject("Face3"),obj.getSubObject("Vertex5"),]
>>> ### End command Std_SendToPythonConsole

```

Esempio di output: un bordo, una faccia e un vertice di un [Link](/Std_LinkMake/it "Std LinkMake/it") a un [Part Box](/Part_Box/it "Part Box/it") sono stati selezionati

## Utilizzo

1. Selezionare un singolo oggetto o una o più sottoforme appartenenti a un singolo oggetto.
2. Esistono diversi modi per invocare il comando:
   * Selezionare l'opzione **Modifica → ![](/images/Std_SendToPythonConsole.svg) Invia alla console Python** dal menu.
   * Selezionare l'opzione **![](/images/Std_SendToPythonConsole.svg) Invia alla console Python** dal menu contestuale della [vista ad albero](/Tree_view/it "Tree view/it") o della [vista 3D](/3D_view/it "3D view/it").
   * Usare la scorciatoia da tastiera: Ctrl+Maiusc+P.
3. Se necessario, si apre la [Python console](/Python_console/it "Python console/it").
4. La [Python console](/Python_console/it "Python console/it") riceve il focus della tastiera.

## Note

* Tutte le variabili create in precedenza vengono eliminate ogni volta che viene eseguito il comando.

* Se l'oggetto selezionato è un Link (`App::Link`) e l'oggetto Linked è derivato dalla classe `Part::Feature`, la variabile `shp` sarà la forma dell'oggetto collegato. Se il Link è stato trasformato o ridimensionato e si vuole accedere alla forma ridimensionata/trasformata, lo si può fare con questo codice:

:   ```
    lnk_shp = Part.getShape(lnk)

    ```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SendToPythonConsole/it&oldid=1448990>"