---
title: App GeoFeature
---
## Introduzione

![](/images/Feature.svg)

Un oggetto App GeoFeature, o formalmente un `App::GeoFeature`, è la classe base della maggior parte degli oggetti che visualizzano elementi geometrici nella [vista 3D](/3D_view/it "3D view/it") perché include una proprietà Dati**Posizionamento**.

![](/images/FreeCAD_core_objects.svg)

Diagramma semplificato delle relazioni tra gli oggetti principali in FreeCAD

## Utilizzo

App GeoFeature è un oggetto interno, quindi non può essere creato dall'interfaccia grafica. In genere non è pensato per essere utilizzato direttamente, ma può essere suddiviso in sottoclassi per ottenere un oggetto vuoto che ha solo la proprietà di base Dati**Placement** per definire la sua posizione nella [vista 3D](/3D_view/it "3D view/it") .

Alcuni degli oggetti derivati più importanti sono i seguenti:

* La classe [Part Feature](/Part_Feature/it "Part Feature/it"), il genitore della maggior parte degli oggetti con [forme topologiche](/Part_TopoShape/it "Part TopoShape/it") 2D e 3D.
* La classe [Mesh Feature](/Mesh_Feature/it "Mesh Feature/it"), il genitore della maggior parte degli oggetti realizzati da [mesh](/Mesh_MeshObject/it "Mesh MeshObject/it"), non solidi.
* La classe [Fem FemMeshObject](/FEM_Mesh/it "FEM Mesh/it"), il genitore delle mesh di elementi finiti create con l'ambiente [FEM](/FEM_Workbench/it "FEM Workbench/it").
* La classe [CAM Feature](/index.php?title=CAM_Feature/it&action=edit&redlink=1 "CAM Feature/it (page does not exist)"), il genitore dei percorsi creati con l'ambiente [CAM](/CAM_Workbench/it "CAM Workbench/it") per l'uso nella lavorazione CNC.
* La classe [App Part](/App_Part/it "App Part/it"), che definisce [Std Parts](/Std_Part/it "Std Part/it") che può essere utilizzato come contenitore di corpi per eseguire assiemi.

Quando si crea questo oggetto in [Python](/Python/it "Python/it"), invece di sottoclassare `App::GeoFeature`, è necessario sottoclassare `App::GeometryPython` perché quest'ultimo include di default un provider di visualizzazione e gli attributi `Proxy` per l'oggetto stesso e il relativo provider di visualizzazione. Vedere [Script](#Script).

## Proprietà App GeoFeature

Vedere [Proprietà](/Property/it "Property/it") per tutti i tipi di proprietà che possono avere gli oggetti con script.

L'oggetto App GeoFeature (classe `App::GeoFeature`) è derivato dall'oggetto base [App DocumentObject](/App_DocumentObject/it "App DocumentObject/it") (classe `App::DocumentObject`) ed eredita tutte le sue proprietà. Inoltre ha una proprietà Dati**Placement**, che controlla la sua posizione nella [3D view](/3D_view "3D view").

## Proprietà App GeometryPython

Vedere [Proprietà](/Property/it "Property/it") per tutti i tipi di proprietà che possono avere gli oggetti con script.

La classe [App GeometryPython](/App_GeoFeature "App GeoFeature") (`App::GeometryPython`) è derivata dalla classe di base [App GeoFeature](/App_GeoFeature "App GeoFeature") (`App::GeoFeature`) ed eredita tutte le sue proprietà. Ha anche diverse proprietà aggiuntive.

Queste sono le proprietà disponibili nell'[editor delle proprietà](/Property_editor/it "Property editor/it"). Le proprietà nascoste possono essere mostrate usando il comando **Mostra nascoste** nel menu contestuale dell'[editor delle proprietà](/Property_editor/it "Property editor/it").

### Dati

Base

* Dati (Hidden)**Proxy** (`PythonObject`): una classe personalizzata associata a questo oggetto.
* Dati**Placement** (`Placement`): la posizione dell'oggetto nella [vista 3D](/3D_view/it "3D view/it"). Il posizionamento è definito da un punto `Base` (vettore) e da una `Rotazione` (asse e angolo). Vedi [Posizionamento](/Placement/it "Placement/it").
  + Dati**Angle**: l'angolo di rotazione attorno a Dati**Axis**. Per impostazione predefinita, è `0°` (zero gradi).
  + Dati**Axis**: il vettore unitario che definisce l'asse di rotazione per il posizionamento. Ogni componente è un valore in virgola mobile compreso tra `0` e `1`. Se qualsiasi valore è superiore a `1`, il vettore viene normalizzato in modo che la grandezza del vettore sia `1`. Per impostazione predefinita, è l'asse Z positivo, `(0, 0, 1)`.
  + Dati**Position**: un vettore con le coordinate 3D del punto base. Per impostazione predefinita, è l'origine `(0, 0, 0)`.
* Dati**Label** (`String`): il nome modificabile dall'utente di questo oggetto, è una stringa UTF8 arbitraria.
* Dati (Hidden)**Label2** (`String`): una descrizione di questo oggetto più lunga e modificabile dall'utente, è una stringa UTF8 arbitraria che può includere ritorni a capo. Per impostazione predefinita, è una stringa vuota `""`.
* Dati (Hidden)**Expression Engine** (`ExpressionEngine`): un elenco di espressioni. Per impostazione predefinita, è vuoto `[]`.
* Dati (Hidden)**Visibility** (`Bool`): se visualizzare o meno l'oggetto.

### Vista

Base

* Vista (Hidden)**Proxy** (`PythonObject`): una classe [viewprovider](/Viewprovider/it "Viewprovider/it") personalizzata associata a questo oggetto.

Display Options

* Vista**Bounding Box** (`Bool`): se è `true`, l'oggetto mostrerà il riquadro di delimitazione nella [vista 3D](/3D_view/it "3D view/it").
* Vista (Enumeration)**Display Mode** (`Enumeration`): vedere le informazioni in [App FeaturePython](/App_FeaturePython/it "App FeaturePython/it").
* Vista**Show In Tree** (`Bool`): vedere le informazioni in [App FeaturePython](/App_FeaturePython/it "App FeaturePython/it").
* Vista**Visibility** (`Bool`): vedere le informazioni in [App FeaturePython](/App_FeaturePython/it "App FeaturePython/it").

Object Style

* Vista**Shape Color** (`Color`): una tupla di tre valori RGB in virgola mobile `(r,g,b)` per definire il colore delle facce nella [vista 3D](/3D_view/it "3D view/it"); per impostazione predefinita è `(0.8, 0.8, 0.8)`, che viene visualizzato come `[204, 204, 204]` su base 255, un  grigio chiaro .
* Vista (Hidden)**Shape Material** (`Material`): un [App Material](/index.php?title=App_Material/it&action=edit&redlink=1 "App Material/it (page does not exist)") associato a questo oggetto. Per impostazione predefinita è vuoto.
* Vista**Transparency** (`Percent`): un numero intero da `0` a `100` che determina il livello di trasparenza delle facce nella [vista 3D](/3D_view/it "3D view/it"). Un valore di `100` indica facce completamente invisibili; le facce sono invisibili ma possono comunque essere selezionate purché Vista**Selectable** sia `true`.

Selection

* Vista**On Top When Selected** (`Enumeration`): vedere le informazioni in [App FeaturePython](/App_FeaturePython/it "App FeaturePython/it").
* Vista**Selectable** (`Bool`): se è `true`, l'oggetto può essere selezionato con il puntatore nella [vista 3D](/3D_view/it "3D view/it"). Altrimenti, l'oggetto non potrà essere selezionato finché questa opzione non sarà impostata su `true`.
* Vista**Selection Style** (`Enumeration`): vedere le informazioni in [App FeaturePython](/App_FeaturePython/it "App FeaturePython/it").

## Script

*Vedere anche:* [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it"), e [script di oggetti](/Scripted_objects/it "Scripted objects/it").

Vedere [Part Feature](/Part_Feature/it "Part Feature/it") per le informazioni generali sull'aggiunta di oggetti al documento.

Una GeoFeature viene creata con il metodo `addObject()` del documento. Se si desidera creare un oggetto con una [forma topologica](/Part_TopoShape/it "Part TopoShape/it") 2D o 3D, potrebbe essere meglio creare una delle sottoclassi specializzate per la gestione delle forme, ad esempio [Part Feature](/Part_Feature/it "Part Feature/it") o [Part Part2DObject](/Part_Part2DObject/it "Part Part2DObject/it").

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::GeoFeature", "Name")
obj.Label = "Custom label"

```

Per la sottoclasse [Python](/Python/it "Python/it") si dovrebbe creare l'oggetto `App::GeometryPython`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::GeometryPython", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=App_GeoFeature/it&oldid=1562490>"