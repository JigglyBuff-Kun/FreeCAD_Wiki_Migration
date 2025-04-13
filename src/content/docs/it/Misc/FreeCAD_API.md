---
title: API di FreeCAD
---
:::caution
(Ottobre 2019) Non modificare queste pagine. Le informazioni sono incomplete e obsolete. Per l'API più recente, consultare ladocumentazione API autogeneratao generare la documentazione autonomamente. VedereDocumentazione del codice sorgente.
:::

Questo è il modulo principale (root) di FreeCAD. Può anche essere chiamato con "App" dall'interprete FreeCAD. Contiene tutto quello che serve per manipolare i documenti e il loro contenuto (oggetti).

Esempio:

```
import FreeCAD
print FreeCAD.listDocuments()
mydoc = FreeCAD.activeDocument()

```

![](/images/Method.png) **ConfigDump(****)**

**Description**: Stampa un dizionario contenente tutto l'ambiente di configurazione di FreeCAD.

**Returns**:

![](/images/Method.png) **ConfigGet(***[string]***)**

**Description**: Restituisce il valore della chiave data. Se non si specifica nessuna chiave, viene restituita la configurazione completa

**Returns**: Una stringa.

![](/images/Method.png) **ConfigSet(***string, string***)**

**Description**: Imposta la chiave data (prima stringa) al valore dato (seconda stringa).

**Returns**:

![](/images/Method.png) **Version(****)**

**Description**: Stampa la versione di FreeCAD.

**Returns**:

![](/images/Method.png) **activeDocument(****)**

**Description**: Restituisce il documento attivo o Nulla se non vi è alcun documento attivo.

**Returns**: Un documento di FreeCAD.

![](/images/Method.png) **addExportType(***string, string***)**

**Description**: Aggiunge a FreeCAD un nuovo tipo di file di esportazione. La prima stringa deve essere formattata come in questo esempio: "Documento di Word (\*.doc)". La seconda stringa è il nome di uno script / modulo python che contiene una funzione export().

**Returns**:

![](/images/Method.png) **addImportType(***string, string***)**

**Description**: Aggiunge a FreeCAD un nuovo tipo di file importazione, funziona allo stesso modo di addExportType, il modulo di gestione python deve contenere una funzione open() e/o una funzione import().

**Returns**:

![](/images/Method.png) **closeDocument(***Document name***)**

**Description**: Chiude un dato documento

**Returns**:

![](/images/Method.png) **getDocument(***Document name***)**

**Description**: Restituisce un documento o solleva un'eccezione se non vi è alcun documento con il nome dato.

**Returns**:

![](/images/Method.png) **getExportType(***string***)**

**Description**: Restituisce il nome del modulo che può esportare il tipo di file specificato.

**Returns**: Una stringa.

![](/images/Method.png) **getImportType(***string***)**

**Description**: Restituisce il nome del modulo che può importare il tipo di file specificato.

**Returns**: Una stringa.

![](/images/Method.png) **listDocuments(****)**

**Description**: Restituisce un dizionario di nomi e di puntatori di oggetti di tutti i documenti.

**Returns**: Un dizionario di nomi e di puntatori di oggetti.

![](/images/Method.png) **newDocument(***[string], [hidden=False]***)**

**Description**: Crea e restituisce un nuovo documento con un determinato nome. Il nome del documento deve essere univoco, e viene controllato automaticamente. Se non viene fornito nessun nome, il documento sarà "Senza titolo". Se viene passato hidden=True, FreeCAD in modalità GUI non visualizzerà il documento e non mostrerà una scheda per il documento; ciò consente di eseguire operazioni automatiche su un documento temporaneo (o creare un documento e salvarlo) senza interrompere l'interfaccia utente.

**Returns**: Il documento appena creato.

![](/images/Method.png) **open(***string***)**

**Description**: Vedere openDocument

**Returns**:

![](/images/Method.png) **openDocument(***filepath, [hidden]***)**

**Description**: Crea e restituisce un documento e carica un file di progetto nel documento. L'argomento stringa deve puntare ad un file esistente. Se il file non esiste o il file non può essere caricato viene generata una eccezione di I /O. In questo caso il documento creato viene mantenuto, ma sarà vuoto. Se viene passato hidden=True, FreeCAD in modalità GUI non visualizzerà il documento e non mostrerà una scheda per il documento; ciò consente di eseguire operazioni automatiche su un documento e chiuderlo senza interrompere l'interfaccia utente.

**Returns**: Il documento di FreeCAD aperto.

![](/images/Method.png) **setActiveDocument(***Document name***)**

**Description**: Imposta il documento attivo con il suo nome.

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_API/it&oldid=1213889>"