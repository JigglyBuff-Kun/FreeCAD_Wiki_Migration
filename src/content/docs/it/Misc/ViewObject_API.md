---
title: API di ViewObject
---
:::caution
(Ottobre 2019) Non modificare queste pagine. Le informazioni sono incomplete e obsolete. Per l'API più recente, consultare ladocumentazione API autogeneratao generare la documentazione autonomamente. VedereDocumentazione del codice sorgente.
:::

Quando la GUI è attiva, a ogni oggetto del documento FreeCAD è associato un ViewObject, che risiede nella controparte FreeCADGui del documento. Un oggetto della vista può essere recuperato in due modi. Esempio:

```
myViewObj = FreeCAD.ActiveDocument.myObjectName.ViewObject
myViewObj = FreeCADGui.ActiveDocument.myObjectName
print myViewObj.IV

```

![](/images/Property.png) **Annotation**

**Returns**: il nodo della annotazione di un oggetto della vista ViewObject

![](/images/Property.png) **BoundingBox**

**Returns**: Il contenitore

![](/images/Property.png) **Content**

**Returns**: una rappresentazione XML delle proprietà di un ViewObject

![](/images/Property.png) **DisplayMode**

**Returns**: la modalità di visualizzazione corrente

![](/images/Property.png) **IV**

**Returns**: una rappresentazione Inventor del ViewObject

![](/images/Property.png) **Object**

**Returns**: il FreeCAD Document Object associato a questo ViewObject

![](/images/Property.png) **PropertiesList**

**Returns**: un elenco di proprietà di questo ViewObject

![](/images/Property.png) **RootNode**

**Returns**: il nodo di Inventor di questo ViewObject (pivy.coin object)

![](/images/Property.png) **Selectable**

**Returns**: True se l'oggetto è selezionabile

![](/images/Property.png) **Type**

**Returns**: il tipo di questo ViewObject

![](/images/Property.png) **Visibility**

**Returns**: True se il viewObject è visibile

![](/images/Method.png) **getAllDerivedFrom(****)**

**Description**:

**Returns**: tutti i discendenti di questo oggetto

![](/images/Method.png) **getDocumentationOfProperty(****)**

**Description**:

**Returns**: la stringa di documentazione della proprietà di questa classe.

![](/images/Method.png) **getGroupOfProperty(****)**

**Description**:

**Returns**: il nome del gruppo al quale appartiene la proprietà in questa classe. Per comodità, le proprietà sono ordinate in gruppi con nomi diversi.

![](/images/Method.png) **getPropertyByName(****)**

**Description**:

**Returns**: il valore di una proprietà denominata.

![](/images/Method.png) **getTypeOfProperty(****)**

**Description**:

**Returns**: il tipo di una proprietà denominata. Questo può essere(Hidden,ReadOnly,Output) o qualsiasi combinazione.

![](/images/Method.png) **hide(****)**

**Description**: Nasconde l'oggetto.

**Returns**:

![](/images/Method.png) **isDerivedFrom(***string***)**

**Description**: Controlla se questo oggetto è derivato dal dato tipo di oggetto

**Returns**: True se il tipo dato è suo genitore

![](/images/Method.png) **isVisible(****)**

**Description**: Controlla se l'oggetto è visibile

**Returns**: un valore booleano

![](/images/Method.png) **listDisplayModes(****)**

**Description**: Mostra un elenco di tutte le modalità di visualizzazione

**Returns**: una lista

![](/images/Method.png) **setTransformation(***coin.SoTransform***)**

**Description**: Imposta una trasformazione sul nodo Inventor

**Returns**: nulla

![](/images/Method.png) **show(****)**

**Description**: Mostra l'oggetto, se è nascosto

**Returns**: nulla

![](/images/Method.png) **toString(****)**

**Description**:

**Returns**: una rappresentazione in stringa del nodo Inventor

![](/images/Method.png) **update(****)**

**Description**: Aggiorna la rappresentazione della vista dell'oggetto

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=ViewObject_API/it&oldid=632524>"