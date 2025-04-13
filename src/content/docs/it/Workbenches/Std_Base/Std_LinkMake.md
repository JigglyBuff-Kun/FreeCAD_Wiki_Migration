---
title: Crea link
---

|                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------- |
| Crea link                                                                                                                                    |
| Posizione nel menu                                                                                                                           |
| None                                                                                                                                         |
| Ambiente                                                                                                                                     |
| Tutti                                                                                                                                        |
| Avvio veloce                                                                                                                                 |
| _Nessuno_                                                                                                                                    |
| Introdotto nella versione                                                                                                                    |
| 0.19                                                                                                                                         |
| Vedere anche                                                                                                                                 |
| [Parte](/Std_Part/it "Std Part/it"), [Gruppo](/Std_Group/it "Std Group/it"), [Corpo di PartDesign](/PartDesign_Body/it "PartDesign Body/it") |
|                                                                                                                                              |

## Descrizione

![](/images/Std_LinkMake.svg) Crea link crea un [App Link](/App_Link/it "App Link/it") (classe `App::Link`), che è un tipo di oggetto che fa riferimento o si collega ad un altro oggetto nello stesso documento o in un altro documento. È appositamente progettato per duplicare in modo efficiente un singolo oggetto più volte, il che aiuta nella creazione di [assiemi](/Assembly/it "Assembly/it") complessi da sottoassiemi più piccoli e da più componenti riutilizzabili come viti, dadi e dispositivi di fissaggio simili.

L'oggetto [App Link](/App_Link/it "App Link/it") è stato introdotto di recente nella versione 0.19; in passato, si poteva ottenere una semplice duplicazione di oggetti con ![](/images/Draft_Clone.svg) [Clona](/Draft_Clone/it "Draft Clone/it") di Draft, ma questa è una soluzione meno efficiente a causa della sua implementazione, che essenzialmente crea una copia della [Forma (Shape)](/Part_TopoShape/it "Part TopoShape/it") interna dell'oggetto sorgente. Invece, un link fa riferimento direttamente alla forma originale, quindi è più efficiente in termini di memoria.

Di per sé l'oggetto [Link](/App_Link/it "App Link/it") può comportarsi come una serie (array), duplicando più volte il suo oggetto base; questo può essere fatto impostando la sua proprietà Dati**Element Count** su `1` o più grande. Questo oggetto "[Link_Array](#Link_Array)" può essere creato anche con i diversi strumenti dell'array ![](/images/Workbench_Draft.svg) [Ambiente Draft](/Draft_Workbench/it "Draft Workbench/it"), per esempio, ![](/images/Draft_OrthoArray.svg) [Draft Serie ortogonale](/Draft_OrthoArray/it "Draft OrthoArray/it"), ![](/images/Draft_PolarArray.svg) [Draft Serie polare](/Draft_PolarArray/it "Draft PolarArray/it"), and ![](/images/Draft_CircularArray.svg) [Draft Serie circolare](/Draft_CircularArray/it "Draft CircularArray/it").

Quando si lavora con l'![](/images/Workbench_PartDesign.svg) [Ambiente Part Design](/PartDesign_Workbench/it "PartDesign Workbench/it"), i link sono destinati ad essere utilizzati con i ![](/images/PartDesign_Body.svg) [Corpi di Part Design](/PartDesign_Body/it "PartDesign Body/it"), quindi si consiglia di impostare la modalità Vista**Display Mode Body** su `Tip` per selezionare le caratteristiche dell'intero corpo, e non le singole caratteristiche.
Per creare array di elementi interni [Funzioni di PartDesign](/PartDesign_Feature/it "PartDesign Feature/it"), utilizzare ![](/images/PartDesign_LinearPattern.svg) [PartDesign Serie lineare](/PartDesign_LinearPattern/it "PartDesign LinearPattern/it"), ![](/images/PartDesign_PolarPattern.svg) [PartDesign Serie polare](/PartDesign_PolarPattern/it "PartDesign PolarPattern/it"), e ![](/images/PartDesign_MultiTransform.svg) [PartDesign Multitransformazione](/PartDesign_MultiTransform/it "PartDesign MultiTransform/it").

Lo strumento ![](/images/Std_LinkMake.svg) Crea link non è definito da un particolare ambiente di lavoro, ma dal sistema di base, quindi si trova nella **Struttura della barra degli strumenti** che è disponibile in tutti gli [ambienti di lavoro](/Workbenches/it "Workbenches/it"). L'oggetto Link, usato insieme a ![](/images/Std_Part.svg) [Parte](/Std_Part/it "Std Part/it") per raggruppare vari oggetti, costituisce la base di ![](/images/Assembly3_workbench_icon.svg) [Assembly3](/Assembly3_Workbench/it "Assembly3 Workbench/it") e di ![](/images/Assembly4_workbench_icon.svg) [Assembly4](/Assembly4_Workbench/it "Assembly4 Workbench/it").

## Utilizzo

Con selezione:

1. Selezionare un oggetto nella [vista ad albero](/Tree_view/it "Tree view/it") o nella [vista 3D](/3D_view/it "3D view/it") per il quale si desidera creare un link.
2. Premere il pulsante ![](/images/Std_LinkMake.svg) Crea link. L'oggetto prodotto avrà stessa icona dell'oggetto originale, ma con una freccia sovrapposta che indica che è un collegamento.

Senza selezione:

1. Se non viene selezionato alcun oggetto, premere il pulsante ![](/images/Std_LinkMake.svg) [Make link](/Std_LinkMake "Std LinkMake") per creare un Link vuoto ![](/images/Link.svg).
2. Andare all'[editor delle proprietà](/Property_editor/it "Property editor/it"), quindi cliccare sulla proprietà Dati**Linked Object** per aprire [metodi di selezione](/Selection_methods/it "Selection methods/it") e scegliere un oggetto, poi premere OK.
3. Invece di scegliere un intero oggetto nella [vista ad albero](/Tree_view/it "Tree view/it"), è anche possibile scegliere i sottoelementi (vertici, bordi o facce) di un singolo oggetto nella [vista 3D](/3D_view/it "3D view/it"). In questo caso, il Link duplicherà solo questi sottoelementi, e la sovrapposizione delle frecce sarà diversa. Questo può essere fatto anche con ![](/images/Std_LinkMakeRelative.svg) [crea un link relativo](/Std_LinkMakeRelative/it "Std LinkMakeRelative/it").

![](/images/Std_Link_tree_example.png) ![](/images/Std_Link_example.png)

(1) Un oggetto, (2) Un Link vuoto, (3) un Link completo del primo oggetto (con materiale di rivestimento), (4) un collegamento solo ad alcuni sottoelementi dell'oggetto. Il Link vuoto non è legato all'oggetto reale, quindi non viene visualizzato nella [vista 3D](/3D_view/it "3D view/it").

## Utilizzo: documenti esterni

1. Iniziare con un documento che ha almeno un oggetto che sarà la fonte del Link.
2. Aprire un nuovo documento o un documento esistente. Per una più facile gestione, usare ![](/images/Std_TreeMultiDocument.svg) [Visualizza Multi documento](/Std_TreeMultiDocument/it "Std TreeMultiDocument/it") per mostrare entrambi i documenti nella [vista ad albero](/Tree_view/it "Tree view/it"). Prima di procedere, [salva](/Std_Save/it "Std Save/it") entrambi i documenti. Il Link non sarà in grado di trovare la sua fonte e la sua destinazione a meno che entrambi i documenti non siano salvati su disco.
3. Nel primo documento, selezionare l'oggetto che si desidera collegare; poi passare alle schede nell'[area della vista principale](/Main_view_area/it "Main view area/it") per passare al secondo documento.
4. Premere ![](/images/Std_LinkMake.svg) Crea link. L'oggetto prodotto ha la stessa icona dell'oggetto originale, ma ha una freccia aggiuntiva che indica che si tratta di un link proveniente da un documento esterno.

_Notes:_

- Quando si salva il documento con il Link, verrà anche chiesto di [salvare](/Std_Save/it "Std Save/it") il documento di origine che contiene l'oggetto originale.
- Per includere l'oggetto originale nel documento con il Link, utilizzare ![](/images/Std_LinkImport.svg) [Importa un link](/Std_LinkImport/it "Std LinkImport/it") oppure ![](/images/Std_LinkImportAll.svg) [Importa tutti i link](/Std_LinkImportAll/it "Std LinkImportAll/it").

* ![](/images/Std_LinkMake.svg) Crea link può essere utilizzato su un oggetto Link esistente, al fine di creare un Link ad un Link che si risolve in definitiva con l'oggetto originale nel documento di origine. Questo può essere utlizato con ![](/images/Std_LinkMakeRelative.svg) [Crea un link relativo](/Std_LinkMakeRelative/it "Std LinkMakeRelative/it") per scegliere anche solo alcuni sotto elementi.

![](/images/Std_Link_tree_documents_example.png) ![](/images/Std_Link_documents_example.png)

(1, 2) Due oggetti di un documento sorgente collegati in un documento di destinazione, (3) un Link al secondo Link (con materiale di sovrascrittura), e (4) un Link ai sotto elementi del secondo Link.

### Drag and drop

Invece di passare da una scheda all'altra del documento, è possibile creare dei Link eseguendo un'operazione di drag and drop nella [vista ad albero](/Tree_view/it "Tree view/it"): selezionare l'oggetto sorgente dal primo documento, trascinarlo, quindi rilasciarlo nel nome del secondo documento tenendo premuto il tasto Alt della tastiera.

Il trascinamento porta ad azioni diverse a seconda della tasto di modifica che si sta utilizzando.

- Senza il tasto di modifica si sposta semplicemente l'oggetto da un documento all'altro; una freccia inclinata viene mostrata nel cursore.
- Tenendo premuto il tasto Ctrl si copia l'oggetto; sul cursore viene mostrato un segno più.
- Tenendo premuto il tasto Alt si crea un collegamento; sul cursore viene mostrata una coppia di maglie di una catena.

Per i modificatori Ctrl e Alt, il trascinamento può essere fatto anche con un singolo documento. Ovvero, trascinando un oggetto e rilasciandolo nel nome dello stesso documento si possono creare più copie o più link ad esso.

## Gruppi

![](/images/Std_LinkMake.svg) Crea link può essere usato su una ![](/images/Std_Part.svg) [Parte](/Std_Part/it "Std Part/it") al fine di duplicare rapidamente gruppi di oggetti posizionati nello spazio, ovvero degli [assiemi](/Assembly/it "Assembly/it").

![](/images/Std_Link_tree_Std_Part_example.png)

Link creato da una [Parte](/Std_Part/it "Std Part/it"); gli oggetti non sono duplicati, ma sono elencati sotto il contenitore originale e sotto il Link contenitore.

Un ![](/images/Std_Group.svg) [Gruppo](/Std_Group/it "Std Group/it") normalmente non possiede una proprietà Dati**Placement**, quindi non può controllare la posizione degli oggetti al suo interno. Tuttavia, quando ![](/images/Std_LinkMake.svg) Crea link è usato con un ![](/images/Std_Group.svg) [Gruppo](/Std_Group/it "Std Group/it"), il Link risultante si comporta essenzialmente come una ![](/images/Std_Part.svg) [Parte](/Std_Part/it "Std Part/it") e quindi può anche essere spostato nello spazio.

![](/images/Std_Link_tree_Std_Group_example.png) ![](/images/Std_Link_Std_Group_example.png)

Link creato da un [Gruppo](/Std_Group/it "Std Group/it"); gli oggetti non sono duplicati ma sono elencati sotto il contenitore originale e sotto il contenitore Link. Il Link (col materiale sovrascritto) può essere spostato nello spazio, proprio come una [Parte](/Std_Part "Std Part").

Un collegamento a una ![](/images/Std_Part.svg) [Parte](/Std_Part/it "Std Part/it") manterrà la visibilità degli oggetti sincronizzati con la Parte originale; quindi se si nasconde un oggetto in un Link, esso sarà nascosto in tutti i Link e nell'oggetto originale. Invece un Link ad un ![](/images/Std_Group.svg) [Gruppo](/Std_Group/it "Std Group/it") consentirà il controllo indipendente delle visibilità.

![](/images/Std_Link_tree_Std_Part_visibility.png) ![](/images/Std_Link_tree_Std_Group_visibility.png)

Sinistra: [Parte](/Std_Part/it "Std Part/it") con due oggetti, e due Links alla Parte; la visibilità degli oggetti è sincronizzata. Destra: [Gruppo](/Std_Group/it "Std Group/it") con due oggetti, e due Links al Gruppo; la visibilità degli oggetti è controllata indipendentemente in ogni gruppo.

## Sovrascrittura dell'aspetto

Quando viene creato un Link, di default la Vista**Override Material** è `false`, quindi il Link avrà lo stesso aspetto dell'originale Dati**Linked Object**.

Quando la Vista**Override Material** è impostato su `true`, la proprietà Vista**Shape Material** controllerà l'aspetto del Link.

Indipendentemente dallo stato della Vista**Override Material**, è possibile impostare individualmente l'aspetto dei sottoelementi (vertici, bordi, facce) di un Link.

1. Selezionare il Link nella [vista ad albero](/Tree_view/it "Tree view/it"). Aprire il menu contestuale (tasto destro del mouse) e scegliere **Override colors**.
2. Ora scegliere i singoli sottoelementi che si desidera nella [vista 3D](/3D_view/it "3D view/it"), premere Edit, e modificare le proprietà, inclusa la trasparenza.
3. Per rimuovere gli attributi personalizzati, selezionare gli elementi nella lista, e premere Remove.
4. Quando si è soddisfatti del risultato, premere OK per chiudere la finestra di dialogo.

_Nota:_ A partire dalla v0.19, la colorazione dei sottoelementi è soggetta al [problema di denominazione topologica](/Topological_naming_problem/it "Topological naming problem/it"), quindi dovrebbe essere fatta come ultima fase di modellazione, quando il modello non è più soggetto a modifiche.

![](/images/Std_Link_override_color_example.png)

(1) L'oggetto originale, (2) un Link con il materiale sovrascritto e (3) un secondo Link con i singoli sotto elementi modificati.

## Link Array

_Vedi anche:_ [Draft: Serie ortogonale](/Draft_OrthoArray/it "Draft OrthoArray/it").

Quando viene creato un Link, di default il suo Dati**Element Count** è `0`, quindi solo un singolo oggetto Link sarà visibile nella [vista ad albero](/Tree_view/it "Tree view/it").

Dato che Dati**Show Element** è `true` di default, quando Dati**Element Count** è impostato su `1` o più, automaticamente verranno creati più Link sotto il primo; ogni nuovo Link può essere posizionato nella posizione desiderata cambiando la proprietà Dati**Placement**.

In modo simile, ogni elemento dell'array può avere il proprio aspetto modificato, sia con le proprietà Vista**Override Material** e Vista**Shape Material**, sia usando il menu **Override colors** sull'intero array e quindi selezionando le singole facce; questo è descritto al paragrafo [Sovrascrittura dell'aspetto](#Sovrascrittura_dell_aspetto).

![](/images/Std_Link_tree_array_example.png) ![](/images/Std_Link_array_example.png)

(1) Oggetto di origine, e un Link array con tre elementi (2, 3, 4), ciascuno in una posizione diversa. Il primo Link ha il materiale sovrascritto e le facce trasparenti, gli altri due hanno colori personalizzati per le facce.

Una volta che si è soddisfatti del posizionamento e delle proprietà degli elementi di collegamento nell'array, si può cambiare Dati**Show Element** in `false` per nascondere i singoli collegamenti nella [vista ad albero](/Tree_view/it "Tree view/it"); questo ha il vantaggio di rendere il sistema più reattivo, soprattutto se si hanno molti oggetti nel documento.

Quando si crea questo tipo di Link array, è necessario posizionare manualmente ciascuno degli elementi; tuttavia, se si desidera utilizzare modelli specifici per posizionare le copie, è possibile utilizzare gli strumenti di array dell'![](/images/Workbench_Draft.svg) [Ambiente Draft](/Draft_Workbench/it "Draft Workbench/it"), come ![](/images/Draft_OrthoArray.svg) [Draft: Serie ortogonale](/Draft_OrthoArray/it "Draft OrthoArray/it"), ![](/images/Draft_PolarArray.svg) [Draft: Serie Polare](/Draft_PolarArray/it "Draft PolarArray/it"), e ![](/images/Draft_CircularArray.svg) [Draft: Serie circolare](/Draft_CircularArray/it "Draft CircularArray/it"); questi comandi possono creare copie normali o copie Link a seconda delle opzioni al momento della creazione.

## Visibilità

Quando Dati**Show Element** è `true` e i singoli elementi sono elencati nella [vista ad albero](/Tree_view/it "Tree view/it") in un [Link Array](#Link_Array), ogni Link può essere mostrato o nascosto premendo la barra Space della tastiera.

Un altro modo per nascondere i singoli elementi è usare il menu **Override colors**.

1. Selezionare l'array, aprire il menu **Override colors** (click destro).
2. Nella [vista 3D](/3D_view/it "3D view/it"), scegliere qualsiasi sottoelemento da qualsiasi Link dell'array.
3. Premere Nascondi. Dovrebbe apparire l'icona di un occhio ![](/images/Invisible.svg), ad indicare che questo elemento è stato nascosto dalla [vista 3D](/3D_view/it "3D view/it"). L'oggetto si mostrerà temporaneamente quando il cursore si posiziona sopra l'icona ![](/images/Invisible.svg).
4. Si può cliccare OK per confermare l'operazione e chiudere la finestra di dialogo. Il collegamento rimarrà nascosto anche se viene mostrato come visibile nella [vista ad albero](/Tree_view/it "Tree view/it").

![](/images/Std_Link_array_visibility_example.png)

Finestra di dialogo colore dell'elemento disponibile quando si apre il menu contestuale di un oggetto Link nella vista ad albero.

Se si desidera ripristinare la visibilità di questo elemento array, entrare di nuovo nella finestra di dialogo, scegliere l'icona occhio, quindi cliccare su Remove per rimuovere lo stato nascosto, e cliccare OK per confermare e chiudere la finestra di dialogo. L'elemento sarà di nuovo visibile nella [vista 3D](/3D_view/it "3D view/it").

Quando il Link è per una ![](/images/Std_Part.svg) [Parte](/Std_Part/it "Std Part/it") o un ![](/images/Std_Group.svg) [Gruppo](/Std_Group/it "Std Group/it"), il menu funziona in modo simile a quello degli array; permette di controllare il colore della faccia, il colore dell'intero oggetto e la visibilità degli oggetti del gruppo.

![](/images/Std_Link_Std_Part_visibility_example.png) ![](/images/Std_Link_Std_Part_visibility_example_3D.png)

Una [Parte](/Std_Part/it "Std Part/it") contenente tre oggetti e un Link a quella Parte; nel Link, (1) il primo oggetto è reso invisibile, (2) il secondo oggetto ha alcuni sotto-elementi con colori diversi, (3) l'intero terzo oggetto ha un diverso colore e livello di trasparenza.

## Proprietà

Un [App Link](/App_Link/it "App Link/it") (`App::Link` class) è derivato dall'[App DocumentObject](/App_DocumentObject/it "App DocumentObject/it") (`App::DocumentObject` class) di base quindi ha le proprietà di base di quest'ultimo come Dati**Label** e Dati**Label2**.

Di seguito sono riportate le proprietà specifiche disponibili nell'[editor delle proprietà](/Property_editor/it "Property editor/it"). Le proprietà nascoste possono essere mostrate utilizzando il comando **Mostra tutte** nel menu contestuale dell'[editor delle proprietà](/Property_editor/it "Property editor/it").

### Dati

Link

- Dati (LockDynamic, Hidden)**ColoredElements** (`LinkSubHidden`): elenco di elementi Link a cui è stato sostituito il colore.
- Dati (LockDynamic)**Element Count** (`IntegerConstraint`): conteggio degli elementi del collegamento. Il valore predefinito è `0`. Se è `1` o maggiore, [App Link](/App_Link/it "App Link/it") si comporterà come una serie e duplicherà lo stesso Dati**Linked Object** più volte. Se Dati**Show Elements** è `true`, ogni elemento nell'array verrà visualizzato nella [Vista ad albero](/Tree_view/it "Tree view/it") e ciascuno potrà avere il proprio Dati**Placement** modificato. Ogni copia del collegamento avrà un nome basato sul [Nome](/Object_name/it "Object name/it") del collegamento, aumentato da `_iN`, dove `N` è un numero che inizia da `0`. Ad esempio, con un singolo `Link`, le copie verranno chiamate `Link_i0`, `Link_i1`, `Link_i2`, ecc.
- Dati (Immutable, Hidden, LockDynamic)**ElementList** (`LinkList`): l'elenco degli elementi Link.
- Dati (LockDynamic)**LinkClaimChild** (`Bool`): rivendica l'oggetto collegato come figlio
- Dati (LockDynamic)**LinkCopyOnChange** (`Enumeration`):
  - `Disabled`: disabilita la creazione di una copia dell'oggetto collegato, attivata da una modifica di una qualsiasi delle sue proprietà impostate come `CopyOnChange`.
  - `Enabled`: abilita una copia profonda dell'oggetto collegato se una qualsiasi delle sue proprietà contrassegnate come `CopyOnChange` viene modificata. Una volta eseguita la copia profonda, non ci sarà alcun collegamento tra l'oggetto originale e quello copiato. Pertanto, le modifiche apportate all'oggetto originale non si rifletteranno nelle copie. Nota: questo è uno stato preparatorio, la copia reale avverrà solo dopo che le proprietà `CopyOnChange` sono cambiate. Vedere lo stato `Owned`.
  - `Owned`: indica che l'oggetto collegato è stato copiato e la copia è di proprietà del Link. Questo stato è impostato dal Link automaticamente, non dall'utente. Il flusso di lavoro è il seguente: se lo stato è `Enabled` e l'utente modifica qualsiasi proprietà precedentemente impostata come `CopyOnChange`, allora lo stato viene modificato in `Owned`. Questo è il momento in cui il Link eseguirà la copia profonda dell'oggetto collegato. In questo stato, il link non cercherà di sincronizzare eventuali modifiche dell'oggetto originale collegato alla copia.
  - `Tracking`: uguale a `Enabled`, ma in più la copia verrà aggiornata automaticamente se l'oggetto di origine originale cambia.
- Dati (Hidden, LockDynamic)**LinkCopyOnChangeGroup** (`Link`): collegato a un oggetto di gruppo interno per conservare le copie delle modifiche
- Dati (Hidden, LockDynamic)**LinkCopyOnChangeSource** (`XLink`): la copia sull'oggetto di origine della modifica
- Dati (Hidden, LockDynamic)**LinkCopyOnChangeTouched** (`Bool`): indica che la copia sull'oggetto di origine della modifica è stata modificata
- Dati (LockDynamic)**LinkExecute** (`String`): nome della funzione di esecuzione che verrà eseguita per questo particolare oggetto Link. Il valore predefinito è `'appLinkExecute'`. Impostarlo su `'None'` per disabilitarlo.
- Dati (Hidden, LockDynamic)**Link Placement** (`Placement`): è un offset applicato sopra il Dati**Placement** del Dati**Linked Object**. Questa proprietà è normalmente nascosta ma appare se Dati**Link Transform** è impostato su `true`; in questo caso, Dati**Placement** ora diventa nascosto.
- Dati**Link Transform** (`Bool`): il valore predefinito è `false`, nel qual caso il collegamento sovrascriverà il posizionamento di Dati**Linked Object**. Se è impostato su `true`, il collegamento verrà posizionato nella stessa posizione di Dati**Linked Object** e il suo posizionamento sarà relativo al posizionamento di Dati**Linked Object** . Ciò può essere ottenuto anche con ![](/images/Std_LinkMakeRelative.svg) [Std LinkMakeRelative](/Std_LinkMakeRelative/it "Std LinkMakeRelative/it").
- Dati**Linked Object** (`XLink`): indica l'oggetto sorgente dell'[App Link](/App_Link/it "App Link/it"); questo può essere un oggetto intero o un suo sottoelemento (vertice, bordo o faccia).
- Dati**Placement** (`Placement`): il posizionamento del Link in coordinate assolute.
- Dati (LockDynamic)**PlacementList** (`PlacementList`): il posizionamento per ciascun elemento Link
- Dati**Scale** (`Float`): il valore predefinito è `1.0`. È un fattore per il ridimensionamento uniforme in ciascuna direzione `X`, `Y` e `Z`. Ad esempio, un cubo di `2 mm` x `2 mm` x `2 mm`, ridimensionato di `2.0`, risulterà in una forma con dimensioni `4 mm` x `4 mm` x `4 mm`.
- Dati**Scale List** (`VectorList`): il fattore di scala per ciascun elemento Link.
- Dati (Hidden)**Scale Vector** (`Vector`): il fattore di scala per ciascun componente `(X, Y, Z)` per tutti gli elementi Link quando Dati**Element Count** è `1` o più grande. Se Dati**Scale** è diverso da `1.0`, questo stesso valore verrà utilizzato nei tre componenti.
- Dati**Show Element** (`Bool`): il valore predefinito è `true`, nel qual caso la [VIsta ad albero](/Tree_view/it "Tree view/it") mostrerà le singole copie del collegamento, purché {{PropertyData|Element Count} } è `1` o maggiore.
- Dati (NoPersist, ReadOnly, Hidden)**\_ChildCache** (`LinkList`): da definire
- Dati (Nascosto, output)**\_LinkOwner** (`Integer`): da definire
- Dati (NoPersist, Hidden)**\_LinkTouched** (`Bool`): da definire

Base

- Dati (nascosto)**Proxy** (`PythonObject`): una classe personalizzata associata a questo oggetto. Questa esiste solo per la versione [Python](/Python/it "Python/it"). Vedi [Scripting](#Scripting).

L'oggetto [App Link](/App_Link/it "App Link/it") mostra inoltre le proprietà del Dati**Linked Object** originale, quindi l'[editor delle proprietà](/Property_editor/it "Property editor/it") può avere gruppi di proprietà come Attachment , Box, Draft e così via.

### Vista

Link

- Vista**Draw Style** (`Enumeration`): è predefinito a `None`; può essere `Solid`, `Dashed`, `Dotted`, `Dashdot`; definisce lo stile dei bordi nella [vista 3D](/3D_view/it "3D view/it").
- Vista**Line Width** (`FloatConstraint`): un float che determina la larghezza in pixel dei bordi nella [vista 3d](/3D_view/it "3D view/it"). E' predefinito a `2.0`.
- Vista**Override Material** (`Bool`): è predefinito a `false`; se impostato su `true` sovrascriverà il materiale dell'Dati**Linked Object**, e visualizzerà i colori definiti in Vista**Shape Material**.
- Vista**Point Size** (`FloatConstraint`): simile a Vista**Line Width**, definisce la dimensione dei vertici.
- Vista**Selectable** (`Bool`): se è `true`, l'oggetto può essere scelto con il puntatore nella [vista 3D](/3D_view/it "3D view/it"). Altrimenti, l'oggetto non può essere selezionato finché questa opzione non è impostata su `true`.

- Vista**Shape Material** (`Material`): questa proprietà include sottoproprietà che descrivono l'aspetto dell'oggetto.
  - Vista**Diffuse Color**, è predefinito a `(0.4, 1.0, 1.0)`, viene visualizzato come `[102, 255, 255]` su base 255, light blue .
  - Vista**Ambient Color**, è predefinito a `(0.2, 0.2, 0.2)`, viene visualizzato come `[51, 51, 51]` su base 255, dark gray .
  - Vista**Specular Color**, è predefinito a `(0.0, 0.0, 0.0)`, viene visualizzato come `[0, 0, 0]` su base 255, black .
  - Vista**Emissive Color**, è predefinito a `(0.0, 0.0, 0.0)`, viene visualizzato come `[0, 0, 0]` su base 255, black .
  - Vista**Shininess**, è predefinito a `0.2`
  - Vista**Transparency**, è predefinito a `0.0`.

Base

- Vista (Hidden)**Child View Provider** (`PersistentObject`):
- Vista (Hidden)**Material List** (`MaterialList`): _(read-only)_ se sono stati aggiunti materiali specifici, saranno elencati qui.
- Vista (Hidden)**Override Color List** (`ColorList`): _(read-only)_ se le singole facce o i bordi del collegamento sono stati sovrascritti saranno elencati qui.
- Vista (Hidden)**Override Material List** (`BoolList`): _(read-only)_ se i singoli materiali del link sono stati sovrascritti saranno elencati qui.

Opzioni di visualizzazione

- Vista**Display Mode** (`Enumeration`): `'Link'` or `'ChildView'`.
- Vista**Show In Tree** (`Bool`): vedere le informazioni in [App FeaturePython](/App_FeaturePython/it "App FeaturePython/it").
- Vista**Visibility** (`Bool`): vedere le informazioni in [App FeaturePython](/App_FeaturePython/it "App FeaturePython/it").

Selezione

- Vista**On Top When Selected** (`Enumeration`): vedere le informazioni in [App FeaturePython](/App_FeaturePython/it "App FeaturePython/it").
- Vista**Selection Style** (`Enumeration`): vedere le informazioni in [App FeaturePython](/App_FeaturePython/it "App FeaturePython/it").

Mostra inoltre le proprietà Vista dell'originale Dati**Linked Object**.

## Ereditarietà

Un [App Link](/App_Link/it "App Link/it") è formalmente un'istanza della classe `App::Link`, il cui genitore è il genitore di base [App DocumentObject](/App_DocumentObject/it "App DocumentObject/it"). (`App::DocumentObject` class). È un oggetto di livello molto basso, che può essere usato con la maggior parte degli altri oggetti documento.

![](/images/FreeCAD_core_objects.svg)

Diagramma semplificato delle relazioni tra gli oggetti principali del programma. L'oggetto `App::Link` è un componente principale del sistema, non dipende da alcun ambiente, ma può essere utilizzato con la maggior parte degli oggetti creati in tutti gli ambienti.

## Script

_Vedere anche:_ [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it"), e [script di oggetti](/Scripted_objects/it "Scripted objects/it").

Vedere [Funzione Part](/Part_Feature/it "Part Feature/it") per le informazioni generali.

Un App Link viene creato con il metodo `addObject()` del documento. Questo può definire il suo Dati**Linked Object** sovrascrivendo il suo attributo `LinkedObject`, o usando il suo metodo `setLink`.

```
import FreeCAD as App

doc = App.newDocument()
bod1 = App.ActiveDocument.addObject("Part::Box", "Box")
bod2 = App.ActiveDocument.addObject("Part::Cylinder", "Cylinder")
bod1.Placement.Base = App.Vector(10, 0, 0)
bod2.Placement.Base = App.Vector(0, 10, 0)

obj1 = App.ActiveDocument.addObject("App::Link", "Link")
obj2 = App.ActiveDocument.addObject("App::Link", "Link")

obj1.LinkedObject = bod1
obj2.setLink(bod2)
obj1.Placement.Base = App.Vector(-10, -10, 0)
obj2.Placement.Base = App.Vector(10, -10, 0)
obj1.ViewObject.OverrideMaterial = True
App.ActiveDocument.recompute()

```

`App::Link` è basico e non ha un oggetto Proxy, quindi non può essere pienamente utilizzato per la sotto-classe.

Pertanto, per la sottoclasse [Python](/Python/it "Python/it"), è necessario creare l'oggetto `App::LinkPython`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::LinkPython", "Link")
obj.Label = "Custom label"

```

## Ulteriori letture

Se si vuole saltare i dettagli storici, andare all'[introduzione orientata all'utente ai collegamenti](https://github.com/realthunder/FreeCAD_assembly3/wiki/Link).

L'oggetto [App Link](/App_Link/it "App Link/it") è stato introdotto dopo 2 anni di sviluppo e prototipazione. Questo componente è stato pensato e sviluppato quasi solamente dall'utente _realthunder_. Le motivazioni e le implementazioni progettuali alla base di questo progetto sono descritte nella sua pagina GitHub, [Link](https://github.com/realthunder/FreeCAD_assembly3/wiki/Link). Per realizzare questa funzione, sono state apportate diverse modifiche fondamentali a FreeCAD; anche queste sono state ampiamente documentati in [Core-Changes](https://github.com/realthunder/FreeCAD_assembly3/wiki/Core-Changes).

Il progetto App Link è iniziato dopo la riprogettazione del [Ambiente PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") è stato completato nella v0.17. La storia di App Link può essere rintracciata in alcuni thread essenziali del forum:

- [Why an object can only be inside one App::Part?](https://forum.freecadweb.org/viewtopic.php?f=19&t=21505) (Marzo 2017)
- [Introducing App::Link/XLink](https://forum.freecadweb.org/viewtopic.php?f=10&t=21586) (Marzo 2017)
- [Links](https://forum.freecadweb.org/viewtopic.php?f=20&t=22216) (Maggio 2017)
- [Realthunder Link implementation: Architecture discussion](https://forum.freecadweb.org/viewtopic.php?f=20&t=23015) (Giugno 2017)
- [PR #876: Link, stage one, context aware selection](https://forum.freecadweb.org/viewtopic.php?f=17&t=23419) (Luglio 2017)
- [Preview: Link, stage two, API groundwork](https://forum.freecadweb.org/viewtopic.php?f=17&t=23626) (Luglio 2017)
- [Assembly3 preview](https://forum.freecadweb.org/viewtopic.php?f=20&t=25712) (Deicembre 2017)
- [Merging of my Link branch](https://forum.freecadweb.org/viewtopic.php?f=10&t=29542) (Giugno 2018)

Infine, la richiesta di pull e il merge sono avvenuti:

- [App::Link: the big merge](https://forum.freecadweb.org/viewtopic.php?f=27&t=38621), vecchio thread (Luglio 2019), [pull request #2350](https://github.com/FreeCAD/FreeCAD/pull/2350) (il GRANDE merge), [LinkMerge branch](https://github.com/realthunder/FreeCAD/tree/LinkMerge).
- [App::Link: the big merge](https://forum.freecadweb.org/viewtopic.php?f=8&t=37757), thread principale (Luglio 2019)
- [A simple path description of Link, 019, Link stage, Asm3, merge?](https://forum.freecadweb.org/viewtopic.php?p=329054#p329054) (Agosto 2019)
- [PR#2559: expose link and navigation actions](https://forum.freecadweb.org/viewtopic.php?f=17&t=39672), un'introduzione alla funzione Link in 0.19 (Settembre 2019).

Altri "link" vari su Link includono:

- [Dynamic linked object](/Dynamic_linked_object "Dynamic linked object") - Un pattern con Link e assembly che mira a ridurre la duplicazione della logica correlata all'assembly come l'orientamento, il posizionamento o il numero di istanze.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkMake/it&oldid=1562504>"
