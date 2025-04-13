---
title: Metodi di selezione
---
## Presentazione

I metodi di selezione in FreeCAD consentono di selezionare gli oggetti nell'[interfaccia di FreeCAD](/Interface/it "Interface/it"): ad esempio nella [vista 3D](/3D_view/it "3D view/it"), nella [struttura ad albero](/Tree_view/it "Tree view/it"), nella [vista selezione](/Selection_view/it "Selection view/it"), e tramite altri dialoghi. Alcuni metodi di selezione sono specifici di un particolare ambiente e sono documentati nella documentazione specifica di tale ambiente.

## Vista 3D

Nella [vista 3D](/3D_view/it "3D view/it") ci sono vari modi per selezionare gli oggetti.

### Selezione semplice

La selezione semplice con il mouse (per impostazione predefinita clic sinistro) e la preselezione (passaggio del mouse) sono descritte nella pagina [navigare col mouse](/Mouse_navigation/it "Mouse navigation/it").

### Clic ripetuti

Il primo clic seleziona un sottoelemento (vertice, bordo o faccia) dell'oggetto sotto il mouse. Un secondo clic seleziona l'intero oggetto.

Il terzo clic estende la selezione al suo oggetto contenitore ([Corpo di PartDesign](/PartDesign_Body/it "PartDesign Body/it"), [Part](/Std_Part/it "Std Part/it") e altri). Ulteriori clic espandono la selezione nella catena del contenitore.

### Comandi di selezione

* Per selezionare tutti gli oggetti: [Std SelectAll](/Std_SelectAll/it "Std SelectAll/it").
* Per inquadrare selezionare più oggetti principali: [Std BoxSelection](/Std_BoxSelection/it "Std BoxSelection/it").
* Per inquadrare più facce: [Std BoxElementSelection](/Std_BoxElementSelection/it "Std BoxElementSelection/it") o [Part BoxSelection](/Part_BoxSelection/it "Part BoxSelection/it").

## Vista selezione

La [vista selezione](/Selection_view/it "Selection view/it") mostra i nomi degli oggetti selezionati, incluso il loro nome completo all'interno di un oggetto, ad esempio, `Unnamed#Body.Box001.Face17`.

Permette anche di eseguire alcune azioni come [visualizzare la selezione](/Std_ViewFitSelection/it "Std ViewFitSelection/it"), e di inviare l'oggetto alla [console Python](/Python_console/it "Python console/it").

### Esportazione dell'oggetto

*Questo dovrebbe essere aggiunto nella pagina [visualizzare la selezione](/Selection_view/it "Selection view/it").*

Selezionare un oggetto complesso, ad esempio un [Corpo di PartDesign](/PartDesign_Body/it "PartDesign Body/it") o una [Parte](/Std_Part/it "Std Part/it"), quindi nel pannello [vista selezione](/Selection_view/it "Selection view/it") selezionare nuovamente l'oggetto, quindi premere Ctrl + C sulla tastiera per aprire la finestra di dialogo **Selezione oggetto**. Ciò consente di copiare l'oggetto selezionato insieme a tutti o solo alcuni degli oggetti dipendenza di quell'oggetto. Ad esempio, per una [Parte](/Std_Part/it "Std Part/it") i possibili oggetti da selezionare includono la [Parte](/Std_Part/it "Std Part/it") stessa, ma anche la sua origine, i suoi tre assi di base (XYZ) e i suoi tre piani di base (XY , YZ, XZ).

Dopo aver premuto OK, gli oggetti selezionati vengono copiati in memoria e quindi possono essere incollati nel documento per duplicare solo questi oggetti.

![](/images/ObjectSelection.png)

Finestra di dialogo per la selezione degli oggetti avviata da [vista selezione](/Selection_view/it "Selection view/it").

## Vista ad albero

Nella [vista ad albero](/Tree_view/it "Tree view/it") gli elementi possono essere selezionati o deselezionati uno alla volta, tenendo premuto il tasto Ctrl e facendo clic con il mouse.

È possibile selezionare un intervallo di elementi facendo clic sul primo elemento, tenendo premuto Maiusc e facendo clic sull'ultimo elemento.

La selezione di un singolo elemento mostrerà anche le sue proprietà nell'[editore delle proprietà](/Property_editor/it "Property editor/it").

Facendo doppio clic si apre la [scheda azioni](/Task_panel/it "Task panel/it") contente tutte le azioni associate. Assicurarsi di chiudere questo pannello delle azioni prima di eseguire un altro comando o di passare a qualsiasi altro ambiente.

Sono disponibili altri metodi aprendo il menu di scelta rapida (tasto destro), a seconda dell'oggetto selezionato o dell'ambiente attivo; vedere le informazioni in [vista ad albero](/Tree_view/it "Tree view/it").

## Script

La selezione di oggetti è intrinsecamente un'attività grafica e pertanto è disponibile solo quando è caricata l'interfaccia utente grafica.

Questi metodi possono essere utilizzati nelle [macro](/Macros/it "Macros/it") o dalla [console Python](/Python_console/it "Python console/it"):

```
import FreeCADGui as Gui

Gui.Selection.addSelection
Gui.Selection.addSelectionGate
Gui.Selection.Filter

```

Il metodo `addSelectionGate` impedisce all'utente di selezionare oggetti non specificati nella stringa di selezione. Un simbolo ![](/images/Button_invalid.svg) appare quando il puntatore si trova su un elemento non appartenente al gruppo specificato.

```
Gui.Selection.addSelectionGate("SELECT Part::Feature SUBELEMENT Edge")

#### or
Gui.Selection.addSelectionGate("SELECT Part::Feature SUBELEMENT Face")

#### or
Gui.Selection.addSelectionGate("SELECT Part::Feature SUBELEMENT Vertex")

```

Per rimuovere `SelectionGate()`:

```
Gui.Selection.removeSelectionGate()

```

Vedere nella [Documentazione del codice sorgente](/Source_documentation/it "Source documentation/it") e nella [Documentazione dei moduli Python](/Std_PythonHelp/it "Std PythonHelp/it") per ulteriori aiuti sull'uso di questi strumenti.

Retrieved from "<http://wiki.freecad.org/index.php?title=Selection_methods/it&oldid=1276266>"