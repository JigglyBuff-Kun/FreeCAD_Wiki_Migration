---
title: Part Genera forme
---
|  |
| --- |
| Genera forme |
| Posizione nel menu |
| Parte → Genera una forma... |
| Ambiente |
| [Part](/Part_Workbench/it "Part Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Part Primitive](/Part_Primitives/it "Part Primitives/it") |
|  |

## Descrizione

Uno strumento per creare forme più complesse da varie primitive geometriche parametriche.

## Utilizzo

Questo strumento può creare i seguenti oggetti:

### Bordo da due vertici

1. Selezionare due vertici
2. Fare clic su Crea

![](/images/Edge_from_verts-1.gif)

### Polilinea da bordi

1. Selezionare una serie di bordi adiacenti nella [vista 3D](/3D_view/it "3D view/it")
2. Fare clic su Crea

![](/images/Wire_from_edges-1.gif)

### Faccia da vertici

1. Selezionare i vertici che delimitano la faccia nella [vista 3D](/3D_view/it "3D view/it")
2. Selezionare se la faccia deve essere planare
3. Fare clic su Crea
4. L'oggetto verrà creato nella [vista 3D](/3D_view/it "3D view/it") e sarà elencato nella [vista ad albero](/Tree_view/it "Tree view/it")

![](/images/Face_from_verts.gif)

### Faccia da bordi

1. Selezionare una serie chiusa di bordi che delimitano la faccia nella [vista 3D](/3D_view/it "3D view/it")
2. Selezionare se la faccia deve essere planare
3. Fare clic su Crea
4. L'oggetto verrà creato nella [vista 3D](/3D_view/it "3D view/it") e sarà elencato nella [vista ad albero](/Tree_view/it "Tree view/it")

![](/images/Face_from_edges.gif)

### Guscio da facce

1. Selezionare le facce nella [vista 3D](/3D_view/it "3D view/it")
2. Selezionare se la forma deve essere rifinita
3. Selezionare se tutte le facce devono essere incluse nel guscio
4. Fare clic su Crea
5. L'oggetto verrà creato nella [vista 3D](/3D_view/it "3D view/it") e sarà elencato nella [vista ad albero](/Tree_view/it "Tree view/it")

### Solido da guscio

1. Selezionare se la forma deve essere rifinita
2. Fare clic su Crea
3. L'oggetto verrà creato nella [vista 3D](/3D_view/it "3D view/it") e sarà elencato nella [vista ad albero](/Tree_view/it "Tree view/it")

## Note

Un possibile flusso di lavoro potrebbe essere:

* Disegnare un modello a fil di ferro della forma utilizzando gli strumenti in ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/it "Draft Workbench/it") (ad esempio linee e polilinee)
* Creare tutte le facce con "faccia dai bordi"
* Creare un "guscio da facce"
* Creare un "solido da guscio"

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Builder/it&oldid=1351900>"