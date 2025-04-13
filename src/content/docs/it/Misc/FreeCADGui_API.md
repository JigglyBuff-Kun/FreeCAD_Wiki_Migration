---
title: API del modulo FreeCADGui
---
:::caution
(Ottobre 2019) Non modificare queste pagine. Le informazioni sono incomplete e obsolete. Per l'API più recente, consultare ladocumentazione API autogeneratao generare la documentazione autonomamente. VedereDocumentazione del codice sorgente.
:::

Questo modulo è la controparte del modulo FreeCAD. Contiene tutto ciò che riguarda l'interfaccia utente e le viste 3D. Esempio:

```
import FreeCAD as App
import FreeCADGui as Gui

# get the 3D model document
doc = App.ActiveDocument    

# get the visual representation model document
gui_doc = Gui.ActiveDocument

gui_doc.activateWorkbench("myWorkbench")

```

![](/images/Method.png) **activateWorkbench(***string***)**

**Description**: Attiva un ambiente di lavoro per nome

**Returns**: nulla

![](/images/Method.png) **activeDocument(****)**

**Description**:

**Returns**: il documento attivo o Nulla se non esiste

![](/images/Method.png) **activeWorkbench(****)**

**Description**:

**Returns**: l'oggetto workbench attivo

![](/images/Method.png) **addCommand(***string, object***)**

**Description**: Aggiunge un comando di FreeCAD. String è il nome del comando e object è il nome della classe che definisce il comando

**Returns**:

![](/images/Method.png) **addIcon(***string, string or list***)**

**Description**: Aggiunge al sistema un'icona come nome del file o in formato XPM

**Returns**:

![](/images/Method.png) **addIconPath(***string***)**

**Description**: Aggiunge al sistema un nuovo percorso per trovare i file di icone

**Returns**:

![](/images/Method.png) **addPreferencePage(***string,string***)**

**Description**: Aggiunge un modulo di interfaccia utente per la finestra delle preferenze. Il primo argomento specifica il nome del file e il secondo indica il nome del gruppo

**Returns**:

![](/images/Method.png) **addWorkbench(***string, object***)**

**Description**: Aggiunge un ambiente di lavoro con un nome definito. La stringa è il nome del banco di lavoro e l'oggetto è il nome della classe che definisce l'ambiente

**Returns**:

![](/images/Method.png) **createDialog(***string***)**

**Description**: Apre un file UI, Interfaccia Utente

**Returns**:

![](/images/Method.png) **getDocument(***string***)**

**Description**: Ottiene un documento con il suo nome

**Returns**: il documento

![](/images/Method.png) **getWorkbench(***string***)**

**Description**: Ottiene un ambiente di lavoro con il suo nome

**Returns**: l'ambiente

![](/images/Method.png) **insert(***string***)**

**Description**: Apre una macro, un file Inventor o VRML

**Returns**: il documento

![](/images/Method.png) **listWorkbenches(****)**

**Description**: Mostra un elenco di tutti gli ambienti di lavoro

**Returns**: una lista

![](/images/Method.png) **open(***string***)**

**Description**: Apre un file macro, Inventor o VRML

**Returns**: il documento aperto

![](/images/Method.png) **removeWorkbench(***string***)**

**Description**: Rimuove un ambiente di lavoro per nome

**Returns**:

![](/images/Method.png) **runCommand(***string***)**

**Description**: Esegue un comando di FreeCAD per nome

**Returns**:

![](/images/Method.png) **updateGui(****)**

**Description**: Aggiorna la finestra principale e tutte le sue finestre

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCADGui_API/it&oldid=632446>"