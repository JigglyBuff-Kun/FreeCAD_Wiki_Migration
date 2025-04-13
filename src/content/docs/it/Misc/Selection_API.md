---
title: API del modulo Selezione
---
:::caution
(Ottobre 2019) Non modificare queste pagine. Le informazioni sono incomplete e obsolete. Per l'API più recente, consultare ladocumentazione API autogeneratao generare la documentazione autonomamente. VedereDocumentazione del codice sorgente.
:::

Il sottomodulo Selection fa parte del modulo FreeCADGui. Esempio:

```
import FreeCADGui
sel = FreeCADGui.Selection.getSelection()

```

![](/images/Method.png) **addSelection(***FreeCAD.Object***)**

**Description**: Aggiunge un oggetto alla selezione

**Returns**:

![](/images/Method.png) **clearSelection(***[string]***)**

**Description**: Cancella dalla selezione il documento con un determinato nome. Se non viene fornito alcun documento viene cancellata la selezione completa.

**Returns**:

![](/images/Method.png) **getSelection(***[string]***)**

**Description**: Restituisce un elenco di oggetti documento selezionati per un dato nome di documento. Se non viene dato nessun documento restituisce la selezione completa.

**Returns**: Un elenco di oggetti del documento nell'ordine in cui sono stati selezionati.

![](/images/Method.png) **getSelectionEx(***[string]***)**

**Description**: Restituisce un elenco di SelectionObject per un dato nome di documento. Se non viene dato nessun documento restituisce la selezione completa. usato per selezionare sottoggetti (es alcuni Edges di una Face).

**Returns**: una lista di SelectionObjects nell'ordine in cui sono stati selezionati

![](/images/Method.png) **isSelected(***FreeCAD.Object***)**

**Description**: Controlla se un dato oggetto è selezionato

**Returns**:

![](/images/Method.png) **removeSelection(***FreeCAD.Object***)**

**Description**: Rimuove un oggetto dalla selezione

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=Selection_API/it&oldid=632505>"