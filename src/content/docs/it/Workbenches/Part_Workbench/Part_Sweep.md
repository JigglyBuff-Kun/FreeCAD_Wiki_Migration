---
title: Part Sweep
---
|  |
| --- |
| Part Sweep |
| Posizione nel menu |
| Parte → Sweep... |
| Ambiente |
| [Part](/Part_Workbench/it "Part Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Part Loft](/Part_Loft/it "Part Loft/it") |
|  |

## Descrizione

Il comando ![](/images/Part_Sweep.svg) Part Sweep crea una faccia, un guscio (shell) o una forma solida da uno o più profili (sezioni trasversali) distribuiti lungo un percorso.

Il comando Part Sweep è simile a ![](/images/Part_Loft.svg) [Part Loft](/Part_Loft/it "Part Loft/it"), ma con l'aggiunta di un percorso.

![](/images/Part_Sweep_simple.png)

Un'estrusione solida generata da un singolo profilo (A) distribuito lungo un percorso (B)

## Utilizzo

1. Esistono diversi modi per richiamare il comando:
   * Premere il pulsante ![](/images/Part_Sweep.svg) Sweep....
   * Seleziona l'opzione **Parte → ![](/images/Part_Sweep.svg) Sweep...** dal menu.
2. Si apre il [pannello azioni](/Task_panel/it "Task panel/it") di Sweep.
3. Nell'elenco *Profili disponibili* a sinistra selezionare un profilo e fare clic sulla freccia destra per inserirlo nell'elenco *Profili selezionati* a destra.
4. Ripetere se si desidera più di un profilo.
5. Le frecce su e giù riordineranno l'elenco a destra. Ma questo non ha alcun impatto sul risultato. La posizione dei profili lungo il percorso determina l'ordine in cui vengono utilizzati.
6. Fare clic sul pulsante Percorso Sweep, quindi scegliere una delle modalità di selezione:
   * *Selezione segmento*: seleziona uno o più bordi contigui nella [vista 3D](/3D_view/it "3D view/it") (premere CTRL per la selezione multipla) e fare clic su Fatto. Lo sweep verrà generato solo lungo i bordi selezionati.
   * *Completa la selezione del percorso*: passa alla [Vista ad albero](/Tree_view/it "Tree view/it"), selezionare l'oggetto da utilizzare come percorso, ritornare al pannello delle azioni e fare clic su Fine. Lo sweep verrà generato lungo tutti i bordi contigui presenti nell'oggetto.
7. Definire le opzioni [Solid](#Solid) e [Frenet](#Frenet).
8. Fare clic su OK.

### Geometria accettata

* **Profili:** può essere un punto (vertice), una linea (bordo), una polilinea o una faccia. I bordi e le polilinee possono essere aperti o chiusi. Esistono varie [Limitazioni](#Limitazioni), vedere di seguito. A volte non è sufficiente allineare correttamente il profilo con il percorso. Per far funzionare correttamente lo strumento, potrebbe anche essere necessario [associare](/Part_EditAttachment/it "Part EditAttachment/it") il profilo al percorso. Se lo schizzo del profilo è associato all'estremità sbagliata del bordo del percorso, modificare Dati**Map Path Parameter** da 0 a 1.

* **Percorso**: può essere una linea (bordo) o una serie di linee collegate, una polilinea o vari oggetti dell'ambiente Part, oggetti dell'ambiente Draft o uno schizzo. Il percorso può essere aperto o chiuso.

* Gli oggetti [App Link](/App_Link/it "App Link/it") collegati ai tipi di oggetto appropriati e i contenitori [App Part](/App_Part/it "App Part/it") con gli oggetti visibili appropriati all'interno possono essere utilizzati anche come profili e percorsi. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")

## Opzioni

#### Solido

Se "Solido" è impostato su "true", FreeCAD crea un solido, a condizione che i profili siano chiusi; se impostato su "false", FreeCAD crea una faccia o un guscio (shell) per profili aperti o chiusi.

#### Frenet

![](/images/Sweep-frenet-comp.png)

La proprietà "Frenet" controlla come cambia l'orientamento del profilo mentre questo segue il percorso. Se "Frenet" è "false", l'orientamento del profilo viene mantenuto coerente da punto a punto. La forma risultante ha la minima torsione possibile. In modo non intuitivo, quando un profilo viene spostato lungo un'elica, ciò si traduce in un orientamento del profilo che si sposta lentamente (ruota) mentre segue l'elica. L'impostazione di "Frenet" su "true" impedisce ciò.

Se "Frenet" è "true" l'orientamento del profilo è basato sulla curvatura e tangenza dei vettori locali del percorso. Ciò mantiene l'orientamento del profilo coerente quando si muove lungo un'elica (in quanto il vettore di curvatura di un'elica punta sempre al suo asse). Tuttavia, quando percorso non è un'elica, la forma risultante può a volte avere strane torsioni. Per maggiori informazioni vedere [Frenet Serret formulas](http://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas).

#### Transition

"Transition" imposta lo stile di transizione dello Sweep nei giunti non tangenziali del percorso. La proprietà non è esposta nel pannello delle attività e può essere trovata in [proprietà](/Property_editor/it "Property editor/it") dopo la creazione dello Sweep.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Part Sweep deriva da un oggetto [Funzione Part](/Part_Feature/it "Part Feature/it") e ne eredita tutte le proprietà. Ha inoltre le seguenti proprietà aggiuntive:

### Dati

Sweep

* Dati**Sections** (`LinkList`): elenca le sezioni utilizzate.
* Dati**Spine** (`LinkSub`): percorso da seguire.
* Dati**Solid** (`Bool`): vero o falso (predefinito). True crea un solido.
* Dati**Frenet** (`Bool`): vero o falso (predefinito). True utilizza l'algoritmo Frenet.
* Dati**Transition** (`Enumeration`): modalità di transizione. Le opzioni sono *Trasformato*, *Angolo destro* o *Angolo arrotondato*.

## Limitazioni

### Vertici o punti

Un vertice o un punto possono essere utilizzati solo come primo e/o ultimo profilo.  
Per esempio:

* Non è possibile eseguire lo Sweep da un cerchio a un punto o a un'ellisse.
* E' possibile comunque eseguire lo Sweep da un punto a un cerchio, da un'ellisse a un altro punto.

### Profili

In uno Sweep, tutti i profili (linee, polilinee, ecc.) devono essere aperti o chiusi.  
Per esempio:

* FreeCAD non può eseguire lo Sweep tra un Part Cerchio e una Part Linea.

### Schizzi

* Il profilo può essere creato con uno schizzo. Tuttavia, solo gli schizzi validi saranno disponibili per la selezione nel pannello delle azioni.
* Lo schizzo deve contenere solamente una polilinea o linea aperte o chiuse (possono essere più linee, se tali linee sono tutte collegate come se fossero un unica polilinea).

### Oggetti dell'Ambiente Draft

Un profilo può essere un oggetto [Draft](/Draft_Workbench/it "Draft Workbench/it").  
I seguenti oggetti possono essere profili validi:

* Punto
* Linea, polilinea
* B-spline, curva di Bézier
* Cerchio, Ellisse
* Rettangolo, Poligono

### Oggetti Ambiente Part

Un profilo può essere un oggetto Part creato con il comando [Part Primitive](/Part_Primitives/it "Part Primitives/it").  
I seguenti oggetti possono essere profili validi:

* Punto (vertice)
* Linea (Bordo)
* Elica, Spirale
* Cerchio, Ellisse
* Poligono regolare
* Piano (faccia)

## Links

* Uno Sweep viene spesso utilizzato per creare filettature per viti e bulloni, vedere il [Tutorial per le filettature](/Thread_for_Screw_Tutorial/it "Thread for Screw Tutorial/it") per maggiori informazioni.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Sweep/it&oldid=1495260>"