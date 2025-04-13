---
title: Object API
---
:::caution
(Ottobre 2019) Non modificare queste pagine. Le informazioni sono incomplete e obsolete. Per l'API più recente, consultare ladocumentazione API autogeneratao generare la documentazione autonomamente. VedereDocumentazione del codice sorgente.
:::

Essendo parametrici, in FreeCAD gli oggetti del documento possono avere un sacco di altre proprietà. Queste sono quelle di base, presenti in ogni FreeCAD Document Object. Gli oggetti possono essere recuperati semplicemente con il loro nome. Esempio:

```
myObj = FreeCAD.ActiveDocument.myObjectName
print myObj.PropertiesList

```

![](/images/Property.png) **Content**

**Returns**: Una rappresentazione XML delle proprietà di un oggetto.

![](/images/Property.png) **Label**

**Returns**: Ottiene / imposta l'etichetta degli oggetti. La stringa può essere unicode.

![](/images/Property.png) **Name**

**Returns**: Il nome univoco di un oggetto.

![](/images/Property.png) **Placement**

**Returns**: Ottiene / imposta il posizionamento di un oggetto. Un posizionamento definisce un orientamento (rotazione) ed una posizione (base) nello spazio 3D. Viene utilizzato quando non è necessario alcun ridimensionamento o altro tipo di distorsione.

![](/images/Property.png) **PropertiesList**

**Returns**: Un elenco delle proprietà di un oggetto

![](/images/Property.png) **State**

**Returns**: Lo stato di FreeCAD di un oggetto (ad esempio se deve essere ricalcolato)

![](/images/Property.png) **Type**

**Returns**: Una stringa che descrive il tipo di oggetto

![](/images/Property.png) **ViewObject**

**Returns**: Il View Provider associato (oggetto FreeCADGUI) a un oggetto

![](/images/Method.png) **getAllDerivedFrom(****)**

**Description**:

**Returns**: Tutti i discendenti di questo oggetto

![](/images/Method.png) **getDocumentationOfProperty(****)**

**Description**:

**Returns**: La stringa di documentazione della proprietà di questa classe.

![](/images/Method.png) **getGroupOfProperty(****)**

**Description**:

**Returns**: Il nome del gruppo a cui appartiene la proprietà in questa categoria. Le proprietà sono ordinate in gruppi diversi denominati secondo convenienza.

![](/images/Method.png) **getPropertyByName(****)**

**Description**:

**Returns**: Il valore di una proprietà denominata.

![](/images/Method.png) **getTypeOfProperty(****)**

**Description**:

**Returns**: Il tipo di una proprietà denominata. Questo può essere (Hidden,ReadOnly,Output) o qualsiasi combinazione.

![](/images/Method.png) **isDerivedFrom(****)**

**Description**:

**Returns**: True se il tipo dato è un padre

![](/images/Method.png) **purgeTouched(****)**

**Description**: Contrassegna l'oggetto come unchanged (invariato)

**Returns**:

![](/images/Method.png) **touch(****)**

**Description**: Contrassegna l'oggetto come changed (modificato, toccato)

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=Object_API/it&oldid=632479>"