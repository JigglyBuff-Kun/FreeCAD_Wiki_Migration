---
title: App FeaturePython
---
## Introduzione

Un oggetto ![](/images/Feature.svg) App FeaturePython, o formalmente un `App::FeaturePython`, è una semplice istanza di [App DocumentObject](/App_DocumentObject/it "App DocumentObject/it") in [Python](/Python/it "Python/it").

Questo è un oggetto semplice che per impostazione predefinita non ha molte proprietà, ad esempio non ha un [posizionamento](/Placement/it "Placement/it") o una [forma topologica](/Part_TopoShape/it "Part TopoShape/it"). A seconda delle proprietà che gli vengono assegnate, può essere utilizzato per gestire diverse tipologie di dati.

![](/images/FreeCAD_core_objects.svg)

Diagramma semplificato delle relazioni tra gli oggetti principali in FreeCAD

## Utilizzo

Un App FeaturePython è un oggetto interno, quindi non può essere creato dall'interfaccia grafica. È pensato per essere sottoclassato da classi che gestiranno diversi tipi di dati.

Per esempio, gli oggetti [Testo](/Draft_Text/it "Draft Text/it"), [Dimensione](/Draft_Dimension/it "Draft Dimension/it"), e [Piano di lavoro proxy](/Draft_WorkingPlaneProxy/it "Draft WorkingPlaneProxy/it") di [Draft](/Draft_Workbench/it "Draft Workbench/it") sono oggetti `App::FeaturePython` oggetti con un'icona personalizzata e proprietà aggiuntive. Conservano i dati ma non sono in effetti [Part TopoShape](/Part_TopoShape/it "Part TopoShape/it").

Se l'oggetto desiderato deve avere un posizionamento, una forma, un allegato o altre proprietà complesse, è meglio creare una delle classi più complesse, ad esempio, [App GeoFeature](/App_GeoFeature/it "App GeoFeature/it"), [Part Feature](/Part_Feature/it "Part Feature/it"), o [Part Part2DObject](/Part_Part2DObject/it "Part Part2DObject/it").

## Proprietà

Vedere [Proprietà](/Property/it "Property/it") per tutti i tipi di proprietà che possono avere gli oggetti con script.

L'oggetto App FeaturePython (classe `App::FeaturePython`) è derivato dall'oggetto base [App DocumentObject](/App_DocumentObject "App DocumentObject") (classe `App::DocumentObject`) ed eredita tutte le sue proprietà. Ha inoltre diverse proprietà aggiuntive.

Queste sono le proprietà disponibili nell'[editor delle proprietà](/Property_editor/it "Property editor/it"). Le proprietà nascoste possono essere mostrate usando il comando **Show hidden** nel menu contestuale dell'[editor delle proprietà](/Property_editor/it "Property editor/it").

### Dati

Base

* Dati (Hidden)**Proxy** (`PythonObject`): una classe personalizzata associata a questo oggetto.
* Dati**Label** (`String`): il nome modificabile dall'utente di questo oggetto, è una stringa UTF8 arbitraria.
* Dati (Hidden)**Label2** (`String`): una descrizione più lunga e modificabile dall'utente di questo oggetto, è una stringa UTF8 arbitraria che può includere nuove righe. Per impostazione predefinita, è una stringa vuota `""`.
* Dati (Hidden)**Expression Engine** (`ExpressionEngine`): un elenco di espressioni. Per impostazione predefinita, è vuota `[]`.
* Dati (Hidden)**Visibility** (`Bool`): se visualizzare o no l'oggetto.

### Vista

Base

* Vista (Hidden)**Proxy** (`PythonObject`): una classe [viewprovider](/Viewprovider/it "Viewprovider/it") personalizzata associata a questo oggetto.

Display Options

* Vista**Display Mode** (`Enumeration`): di default è vuota.
* Vista**Show In Tree** (`Bool`): il valore predefinito è `true`, nel qual caso l'oggetto appare nella [vista ad albero](/Tree_view/it "Tree view/it"); in caso contrario, l'oggetto è nascosto nella vista struttura. Quando un oggetto nell'albero è invisibile, si può di nuovo enderlo visibile aprendo il menu contestuale sul nome del documento (clic destro) e selezionando ![](/images/CheckBoxTrue.svg) Mostra elementi nascosti. Quindi l'elemento nascosto può essere selezionato e e la sua proprietà Vista**Mostra nell'albero** può essere riportata a `true`.
* Vista**Visibility** (`Bool`): il valore predefinito è `true`, nel qual caso l'oggetto è visibile nella [vista 3D](/3D_view/it "3D view/it") se ha una [Forma](/Part_TopoShape/it "Part TopoShape/it"), altrimenti è invisibile. Per impostazione predefinita, questa proprietà può essere attivata e disattivata selezionando l'oggetto e premendo la barra Spazio sulla tastiera.

Selection

* Vista**On Top When Selected** (`Enumeration`): controlla il modo in cui avviene la selezione nella [vista 3D](/3D_view/it "3D view/it") se l'oggetto ha una [Forma](/Part_TopoShape/it "Part TopoShape/it") e ci sono oggetti parzialmente coperti da altri. Il valore predefinito è `Disabled`, il che significa che non si verifica alcuna evidenziazione speciale; `Enabled` significa che l'oggetto appare sopra qualsiasi altro oggetto quando selezionato; `Object` significa che l'oggetto appare in primo piano solo se l'intero oggetto è selezionato nella [vista ad albero](/Tree_view/it "Tree view/it"); `Element` significa che l'oggetto appare in primo piano solo se un sottoelemento (vertice, bordo, faccia) è selezionato in [vista 3D](/3D_view/it "3D view/it").
* Vista**Selection Style** (`Enumeration`): controlla il modo in cui l'oggetto è evidenziato se ha una [Forma](/Part_TopoShape/it "Part TopoShape/it"). Se è `Shape`, l'intera forma (vertici, bordi e facce) è evidenziata nella [vista 3D](/3D_view/it "3D view/it"); se è `BoundBox` viene evidenziato un riquadro di delimitazione che circonda l'oggetto.

## Script

*Vedere anche:* [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it"), e [script di oggetti](/Scripted_objects/it "Scripted objects/it").

Vedere [Part Feature](/Part_Feature/it "Part Feature/it") per le informazioni generali sull'aggiunta di oggetti al documento.

Una App FeaturePython viene creata con il metodo `addObject()` del documento

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::FeaturePython", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=App_FeaturePython/it&oldid=1561013>"