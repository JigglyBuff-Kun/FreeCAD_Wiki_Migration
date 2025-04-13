---
title: Vista ad albero
---
## Introduzione

La Vista ad albero appare nella sezione superiore del pannello **Modello** (se la [Vista combinata](/Combo_view/it "Combo view/it") è attiva) o come pannello autonomo. Mostra tutti gli oggetti definiti dall'utente che fanno parte di un documento di FreeCAD. La vista ad albero è una rappresentazione della [struttura del documento](/Document_structure/it "Document structure/it") e indica quali informazioni vengono salvate su disco.

Questi oggetti non devono necessariamente essere forme geometriche visibili nella [vista 3D](/3D_view/it "3D view/it"), ma possono anche oggetti dati di supporto creati con qualsiasi [ambiente](/Workbenches/it "Workbenches/it").

![](/images/FreeCAD_Tree_view.png)

La vista ad albero che mostra vari elementi nel documento.

## Lavorare con la vista ad albero

Per impostazione predefinita, ogni volta che viene creato un nuovo oggetto, questo viene aggiunto alla fine dell'elenco nella vista ad albero. La vista ad albero consente di gestire gli oggetti per mantenerli organizzati; consente di creare dei [gruppi](/Std_Group/it "Std Group/it"), spostare gli oggetti all'interno dei gruppi, spostare dei gruppi all'interno di altri gruppi, etichettare oggetti, copiare oggetti, eliminare oggetti e utilizzare le opzioni del suo [menu contestuale](#Menu_contestuale).

Molte operazioni creano oggetti che dipendono da un oggetto precedentemente esistente. In questo caso, la vista ad albero mostra questa relazione assorbendo l'oggetto più vecchio all'interno del nuovo oggetto. L'espansione e la compressione degli oggetti nella vista ad albero mostra la cronologia parametrica di quell'oggetto. Gli oggetti più profondi all'interno degli altri sono quelli più vecchi, mentre gli oggetti all'esterno sono i più recenti e sono derivati dagli oggetti più vecchi. Modificando gli oggetti interni, le operazioni parametriche si propagano fino in cima, generando un nuovo risultato.

![](/images/FreeCAD_Tree_view_parametric_history.png)

L'oggetto di livello più alto viene creato eseguendo operazioni parametriche su oggetti che sono stati creati da operazioni precedenti.  
L'espansione completa dell'albero rivela gli elementi originali utilizzati per creare i solidi intermedi.

### Colonne della vista ad albero

La Vista ad albero mostra una sola colonna con le icone e le etichette degli oggetti. Facoltativamente è possibile visualizzare anche due colonne aggiuntive. Per abilitare queste colonne, fare clic con il pulsante destro del mouse sulla Vista ad albero e nel menu contestuale selezionare **Impostazioni albero** e poi **Mostra colonna descrizione** ([disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")) e/o **Mostra nome interno** ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")). Le intestazioni delle colonne vengono aggiunte se viene visualizzata più di una colonna. Tenere presente che i nomi interni degli oggetti non possono essere modificati.

### Modificare l'etichetta dell'oggetto

Selezionare un oggetto nella prima colonna e premere F2 (su Windows e Linux), o Invio (su macOS), per modificare la sua proprietà Dati**Label**. Questa proprietà può anche essere modificata tramite l'opzione del menu contestuale **Rinomina** o nell'[Editor proprietà](/Property_editor/it "Property editor/it").

### Modificare la descrizione dell'oggetto

Un oggetto può facoltativamente avere una descrizione. Questa informazione è archiviata nella relativa proprietà Dati**Label2**. Se viene visualizzata la colonna della descrizione, puoi modificare questa proprietà selezionando un oggetto in quella colonna e premendo F2 (su Windows e Linux) o Invio (su macOS). La proprietà può anche essere modificata nell'[Editor delle proprietà](/Property_editor/it "Property editor/it").

### Menu contestuale

Le opzioni nel menu contestuale della vista ad albero dipendono dall'oggetto(i) selezionato(i) e dall'ambiente di lavoro attualmente attivo. Per visualizzare questo menu, fare clic con il pulsante destro del mouse sullo sfondo dell'elenco, fare clic con il pulsante destro del mouse su un oggetto nell'elenco oppure selezionare più oggetti nell'elenco e quindi fare clic con il pulsante destro del mouse su uno di essi.

### Modificatori di tastiera

Nella visualizzazione ad albero è possibile utilizzare i consueti modificatori da tastiera. I modificatori possono anche essere combinati.

* Ctrl: tenere premuto questo tasto per selezionare più oggetti.
* Shift: tenere premuto questo tasto per selezionare tutti gli oggetti tra un oggetto selezionato in precedenza e il successivo oggetto selezionato.

### Scorciatoie da tastiera

Le seguenti scorciatoie da tastiera sono disponibili quando è stata attivata la visualizzazione ad albero:

* Ctrl+F: apre una casella di ricerca nella parte inferiore dell'albero, che consente di cercare e raggiungere gli oggetti utilizzando i loro nomi interni o le etichette.
* Azioni di espansione e compressione utilizzando le combinazioni Alt+Freccia: [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")
  + Alt+Sinistra: comprime gli elementi selezionati.
  + Alt+Destra: espande gli elementi selezionati.
  + Alt+Su: espande gli elementi selezionati con tutti i relativi figli di livello 1 compressi (i figli più profondi rimangono invariati).
  + Alt+Giù: espande gli elementi selezionati con tutti i loro figli di livello 1 espansi (i figli più profondi rimangono invariati).

## Icone sovrapposte

Una o più icone sovrapposte possono essere visualizzate sopra l'icona predefinita di un oggetto nella visualizzazione ad albero. Le icone sovrapposte disponibili e il loro significato sono elencati di seguito.

### Segno di spunta bianco su sfondo blu

Indica che l'oggetto deve essere [ricalcolato](/Std_Refresh/it "Std Refresh/it"), a causa delle modifiche apportate al modello o perché l'utente ha contrassegnato l'oggetto nel menu contestuale della vista ad albero da ricalcolare. Nella maggior parte dei casi i ricalcoli vengono avviati automaticamente, ma a volte vengono ritardati per motivi di prestazioni.

### Punto esclamativo bianco su sfondo rosso

Indica che l'oggetto presenta un errore che deve essere corretto. Dopo aver ricalcolato l'intero documento, quando si passa il mouse sull'oggetto nella visualizzazione ad albero viene visualizzato un tooltip che descrive l'errore. Nota: tutti gli altri oggetti che dipendono da un oggetto in tale stato di errore non verranno ricalcolati correttamente, quindi potrebbero ancora mostrare uno stato precedente.

### Catena di collegamento viola

Viene tipicamente mostrato per [schizzi](/Sketch/it "Sketch/it"), primitive[PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") come cubo, cilindro, ecc. e geometria [Datum](/Datum/it "Datum/it"). Indica che l'oggetto non è collegato a nulla. Non ha offset di allegato e ottiene la sua posizione e il suo allineamento esclusivamente dalla sua proprietà [Posizionamento](/Placement/it "Placement/it").

C'è un [Tutorial di base sugli allegati](/Basic_Attachment_Tutorial/it "Basic Attachment Tutorial/it") che spiega come gestire tali oggetti.

### X Gialla

Viene utilizzato solo per [schizzi](/Sketch/it "Sketch/it") e indica che lo schizzo non è completamente vincolato. Se lo schizzo è in [modalità modifica](/Sketcher_EditSketch/it "Sketcher EditSketch/it"), il numero di gradi di libertà rimanenti viene mostrato nei [Messaggi del solutore](/Sketcher_Dialog/it#Messaggi_del_solutore "Sketcher Dialog/it").

### Freccia bianca su sfondo verde

Indica il cosiddetto [Tip](/PartDesign_Body/it#Tip "PartDesign Body/it") di un corpo. Di solito è l'ultima caratteristica in un [Body di PartDesign](/PartDesign_Body/it "PartDesign Body/it") e rappresenta l'intero corpo nel mondo esterno al corpo, ad es. quando il corpo viene esportato o utilizzato nelle operazioni [booleane](/Part_Boolean/it "Part Boolean/it"). La punta può essere modificata dall'utente.

### Barra rovescia rossa

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

Indica una funzione [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") soppressa.

### Freccia bianca curva verso l'alto

Indica un oggetto [linked](/Std_LinkMake/it "Std LinkMake/it").

### Due frecce bianche ricurve verso l'alto

Indica un oggetto [linked](/Std_LinkMake/it "Std LinkMake/it") caricato da un documento esterno.

### Simbolo dell'occhio

Indica che l'oggetto sarà nascosto nella vista ad albero se l'opzione del menu contestuale **Mostra gli elementi nascosti nella vista ad albero** è deselezionata.

### Cristallo di ghiaccio ciano

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

Indica un oggetto [congelato](/Std_ToggleFreeze/it "Std ToggleFreeze/it") che non viene ricalcolato quando i suoi genitori cambiano.

## Preferenze

Vedere [Vista combinata](/Combo_view/it#Preferenze "Combo view/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Tree_view/it&oldid=1495294>"