---
title: Funzione Part
---
## Introduzione

![](/images/Part_3D_object.svg)

Un oggetto Part Feature, (Funzione Part) o formalmente un `Part::Feature`, è un elemento semplice a cui è associato una [forma topologica](/Part_TopoShape/it "Part TopoShape/it") che può essere visualizzato nella [Vista 3D](/3D_view/it "3D view/it").

La Part Feature è la classe genitore della maggior parte degli oggetti 2D (Draft, Sketcher) e 3D (Part, PartDesign), ad eccezione delle mesh, che normalmente si basano su [Mesh Feature](/Mesh_Feature/it "Mesh Feature/it"), o su [FEM FemMeshObject](/FEM_Mesh/it "FEM Mesh/it") per gli oggetti FEM.

![](/images/FreeCAD_core_objects.svg)

Diagramma semplificato delle relazioni tra gli oggetti principali in FreeCAD

## Utilizzo

Part Feature è un oggetto interno, quindi non può essere creato dall'interfaccia grafica, ma solo dalla [console Python](/Python_console/it "Python console/it") come descritto nel paragrafo [Script](#Script).

L'oggetto `Part::Feature` è definito in [Part](/Part_Workbench/it "Part Workbench/it") ma può essere usato come classe base per [script di oggetti](/Scripted_objects/it "Scripted objects/it") in tutti gli [ambienti](/Workbenches/it "Workbenches/it") che producono forme geometriche 2D e 3D. Sostanzialmente tutti gli oggetti prodotti in [Part](/Part_Workbench/it "Part Workbench/it") sono istanze di una `Part::Feature`.

`Part::Feature` è anche la classe genitrice dei [Corpi di PartDesign](/PartDesign_Body/it "PartDesign Body/it"), delle [PartDesign Features](/PartDesign_Feature/it "PartDesign Feature/it"), e dei [Part Part2DObject](/Part_Part2DObject/it "Part Part2DObject/it"), che è specializzato per le forme 2D (planari).

Gli ambienti possono aggiungere altre proprietà a questo elemento di base per produrre un oggetto con un comportamento complesso.

## Proprietà

Vedere [Proprietà](/Property/it "Property/it") per tutti i tipi di proprietà che possono avere oggetti con script.

La Part Feature (classe `Part::Feature`) è derivata dalla base [App GeoFeature](/App_GeoFeature/it "App GeoFeature/it") (classe`App::GeoFeature`) ed eredita tutte le sue proprietà. Ha anche diverse proprietà aggiuntive. In particolare una proprietà Dati**Shape**, che memorizza la [Part TopoShape](/Part_TopoShape/it "Part TopoShape/it") dell'oggetto. Questa è la geometria mostrata nella [Vista 3D](/3D_view "3D view"). Altre proprietà di questo oggetto sono quelle legate all'aspetto del suo [TopoShape](/Part_TopoShape/it "Part TopoShape/it").

Queste sono le proprietà disponibili nell'[editor delle proprietà](/Property_editor/it "Property editor/it"). Le proprietà nascoste possono essere mostrate usando il comando **Mostra nascoste** nel menu contestuale dell '[editor delle proprietà](/Property_editor/it "Property editor/it").

### Dati

Base

* Dati (Hidden)**Proxy** (`PythonObject`): una classe personalizzata associata a questo oggetto. Questa esiste solo per la versione [Python](/Python/it "Python/it"). Vedere [Script](#Script)
* Dati (Hidden)**Shape** (`PartShape`): una classe [Part TopoShape](/Part_TopoShape/it "Part TopoShape/it") associata a questo oggetto.
* Dati**Placement**: la posizione dell'oggetto nella [Vista 3D](/3D_view/it "3D view/it"). Il posizionamento è definito da un punto `Base` (vettore) e una  `Rotation` (asse e angolo). Vedere [Posizionamento](/Placement/it "Placement/it").
  + Dati**Angle**: l'angolo di rotazione attorno al Dati**Axis**. Di default, è `0°` (zero gradi).
  + Dati**Axis**: il vettore unitario che definisce l'asse di rotazione per il posizionamento. Ogni componente ha un valore in virgola mobile compreso tra `0` e `1`. Se un valore è superiore a `1`, il vettore viene normalizzato in modo che l'entità del vettore sia `1`. Di default, è l'asse Z positivo, `(0, 0, 1)`
  + Dati**Position**: un vettore con le coordinate 3D del punto base. Di default, è l'origine `(0, 0, 0)`
* Dati**Label** (`String`): il nome modificabile dall'utente di questo oggetto, è una stringa UTF8 arbitraria.
* Dati (Hidden)**Label2** (`String`): una descrizione più lunga e modificabile dall'utente di questo oggetto, è una stringa UTF8 arbitraria che può includere ritorni a capo. Per impostazione predefinita, è una stringa vuota `""`.
* Dati (Hidden)**Expression Engine** (`ExpressionEngine`): un elenco di espressioni. Per impostazione predefinita, è vuoto `[]`.
* Dati (Hidden)**Visibility** (`Bool`): se visualizzare o meno l'oggetto.

### Vista

La maggior parte degli oggetti in FreeCAD ha quello che viene chiamato un "[viewprovider](/Viewprovider/it "Viewprovider/it")", che è una classe che definisce l'aspetto visivo dell'oggetto nella [vista 3D](/3D_view/it "3D view/it") e nella [vista ad albero](/Tree_view/it "Tree view/it"). Il viewprovider predefinito degli oggetti Part Feature definisce le seguenti proprietà. Anche gli oggetti con script derivati da Part Feature hanno accesso a queste proprietà.

Base

* Vista (hidden)**Proxy** (`PythonObject`): una classe [viewprovider](/Viewprovider/it "Viewprovider/it") personalizzata associata a questo oggetto. Questo esiste solo per la versione [Python](/Python/it "Python/it"). Vedere [Script](#Script).

Display Options

* Vista**Bounding Box** (`Bool`): se è `true`, l'oggetto mostrerà il riquadro di delimitazione nella [Vista 3D](/3D_view/it "3D view/it").
* Vista**Display Mode** (`Enumeration`): `Flat Lines` (visualizzazione normale), `Shaded` (senza bordi), `Wireframe` (senza facce), `Points` (solo vertici).
* Vista**Show In Tree** (`Bool`): il valore predefinito è `true`, nel qual caso l'oggetto apparirà nella [Vista ad albero](/Tree_view/it "Tree view/it"); in caso contrario, l'oggetto verrà nascosto nella vista ad albero. Una volta che un oggetto nell'albero è invisibile, lo si può vedere di nuovo aprendo il menu contestuale sopra il nome del documento (tasto destro) e selezionando ![](/images/CheckBoxTrue.svg) Mostra elementi nascosti. Quindi è possibile scegliere l'elemento nascosto e Vista**Show In Tree** può essere riportato a `true`.
* Vista**Visibility** (`Bool`): se è `true`, l'oggetto appare nella [Vista 3D](/3D_view/it "3D view/it"); altrimenti è invisibile. Per impostazione predefinita, questa proprietà può essere attivata e disattivata premendo la barra Space.

Object style

* Vista**Angular Deflection** (`Angle`): accompagna Vista**Deviation**. È un altro modo per specificare la precisione con cui generare la mesh per il rendering sullo schermo o durante l'esportazione. Il valore predefinito è `28,5 degrees` o `0,5 radians`. Questo è il valore massimo, minore è il valore più uniforme sarà l'aspetto nella [Vista 3D](/3D_view/it "3D view/it") e più fine sarà la mesh che verrà esportata.

* Vista**Deviation** (`FloatConstraint`): accompagna Vista**Angular Deflection**. È un altro modo per specificare la precisione con cui generare la mesh per il rendering sullo schermo o durante l'esportazione. Il valore predefinito è `0,5%`. Questo è il valore massimo, minore è il valore più uniforme sarà l'aspetto nella [Vista 3D](/3D_view/it "3D view/it") e più fine sarà la mesh che verrà esportata.
* Vista (hidden)**Diffuse Color** (`ColorList`): è una lista di tuple RGB che definiscono i colori, simile a Vista**Shape Color**. Il valore predefinito è un elenco di un `[(0.8, 0.8, 0.8)]`.
* Vista**Draw Style** (`Enumeration`): `Solid` (predefinito), `Dashed`, `Dotted`, `Dashdot`; definisce lo stile dei bordi nella [Vista 3D](/3D_view/it "3D view/it").
* Vista**Lighting** (`Enumeration`): `Two side` (predefinito), `One side`; l'illuminazione proviene da due lati o da un lato nella [Vista 3D](/3D_view/it "3D view/it").
* Vista**Line Color** (`Color`): una tupla di tre valori RGB in virgola mobile `(r,g,b)` per definire il colore dei bordi nella [Vista 3D](/3D_view/it "3D view/it"); per impostazione predefinita è `(0.09, 0.09, 0.09)`, che viene visualizzato come `[25,25,25]` su base 255,  almost black .
* Vista (hidden)**Line Color Array** (`ColorList`): è una lista di tuple RGB che definiscono i colori, simile a Vista**Line Color**. Il valore predefinito è un elenco di un `[(0.09, 0.09, 0.09)]`.
* Vista (hidden)**Line Material** (`Material`): un [App Material](/index.php?title=App_Material/it&action=edit&redlink=1 "App Material/it (page does not exist)") associato ai bordi di questo oggetto. Per impostazione predefinita è vuoto.
* Vista**Line width** (`FloatConstraint`): un float che determina la larghezza in pixel dei bordi nella [Vista 3D](/3D_view/it "3D view/it"). Il valore predefinito è `2.0`.

* Vista**Point Color** (`Color`): simile a Vista**Line Color**, definisce il colore dei vertici.
* Vista (hidden)**Point Color Array** (`ColorList`): è una lista di tuple RGB che definiscono i colori, simile a Vista**Point Color**. Il valore predefinito è un elenco di un `[(0.09, 0.09, 0.09)]`.
* Vista (hidden)**Point Material** (`Material`): un [App Material](/index.php?title=App_Material/it&action=edit&redlink=1 "App Material/it (page does not exist)") associato ai vertici di questo oggetto. Per impostazione predefinita è vuoto.
* Vista**Point Size** (`FloatConstraint`): simile a Vista**Line width**, definisce la dimensione dei vertici.

* Vista**Shape Color** (`Color`): simile a Vista**Line Color**, definisce il colore delle facce. Il valore predefinito è `(0.8, 0.8, 0.8)`, che viene visualizzato come `[204, 204, 204]` su base 255, un light gray.
* Vista (hidden)**Shape Material** (`Material`): un [App Material](/index.php?title=App_Material/it&action=edit&redlink=1 "App Material/it (page does not exist)") associato a questo oggetto. Per impostazione predefinita è vuoto.
* Vista**Transparency** (`Percent`): un numero intero da `0` a `100` (una percentuale) che determina il livello di trasparenza delle facce nella [Vista 3D](/3D_view/it "3D view/it") . Un valore di `100` indica facce completamente invisibili; le facce sono invisibili ma possono comunque essere selezionate purché Vista**Selectable** sia `true`.

Selection

* Vista**On Top When Selected** (`Enumeration`): controlla il modo in cui avviene la selezione nella [Vista 3D](/3D_view/it "3D view/it") se l'oggetto ha una [Shape (forma)](/Part_TopoShape/it "Part TopoShape/it") e ci sono molti oggetti oggetti parzialmente coperti da altri. Il valore predefinito è `Disabled`, il che significa che non verrà eseguita alcuna evidenziazione speciale; `Enabled` significa che l'oggetto apparirà sopra qualsiasi altro oggetto quando selezionato; `Object` significa che l'oggetto apparirà in primo piano solo se l'intero oggetto è selezionato nella [Vista ad albero](/Tree_view/it "Tree view/it"); `Element` significa che l'oggetto apparirà in primo piano solo se un sottoelemento (vertice, bordo, faccia) è selezionato nella [Vista 3D](/3D_view/it "3D view/it").
* Vista**Selectable** (`Bool`): se è `true`, l'oggetto può essere selezionato con il puntatore nella [Vista 3D](/3D_view/it "3D view/it"). Altrimenti, l'oggetto non potrà essere selezionato finché questa opzione non sarà impostata su `true`.
* Vista**Selection Style** (`Enumeration`): controlla il modo in cui l'oggetto viene evidenziato. Se è `Shape`, l'intera forma (vertici, bordi e facce) verrà evidenziata nella [Vista 3D](/3D_view/it "3D view/it"); se è `BoundBox` apparirà un riquadro di delimitazione che circonda l'oggetto e sarà evidenziato.

### Deflessione e deviazione angolare

![](/images/View_property_Deviation.svg)

Deflessione angolare e parametri di deviazione; d < deflessione lineare, α < deflessione angolare.

La deviazione è un valore in percentuale correlato alle dimensioni in millimetri del parallelepipedo contenitore dell'oggetto. La deviazione in millimetri può essere calcolata come segue:

```
deviation_in_mm = (w + h + d)/3 * deviation/100

```

dove `w`, `h`, `d` sono le dimensioni del contenitore.

## Script

*Vedere anche:* [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it"), e [script di oggetti](/Scripted_objects/it "Scripted objects/it").

Un oggetto Part Feature viene creato con il metodo `addObject()` del documento.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::Feature", "Name")
obj.Label = "Custom label"

```

Per la sottoclasse [Python](/Python/it "Python/it"), si dovrebbe creare un oggetto `Part::FeaturePython`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::FeaturePython", "Name")
obj.Label = "Custom label"

```

### Nome

Vedere anche: [Nome oggetto](/Object_name/it "Object name/it") per ulteriori informazioni sulle proprietà di `Name`.

Il metodo `addObject` ha due argomenti stringa di base.

* Il primo argomento indica il tipo di oggetto, in questo caso, `"Part::FeaturePython"`.
* Il secondo argomento è una stringa che definisce l'attributo `Name`. Se non viene fornito, il valore predefinito è lo stesso nome della classe, ovvero `"Part__FeaturePython"`. `Name` può includere solo semplici caratteri alfanumerici e il carattere di sottolineatura, `[_0-9a-zA-Z]`. Se vengono forniti altri simboli, questi verranno convertiti in trattini bassi; ad esempio, `"A+B:C*"` viene convertito in `"A_B_C_"`.

### Etichetta

Se lo si desidera, l'attributo `Label` può essere modificato in un testo più significativo.

* `Label` può accettare qualsiasi stringa UTF8, inclusi accenti e spazi. Poiché la [Vista ad albero](/Tree_view/it "Tree view/it") mostra l'`Label`, è una buona pratica cambiare l'`Label` in una stringa più descrittiva.
* Per impostazione predefinita, l'`Label` è univoco, proprio come l'`Name`. Tuttavia, questo comportamento può essere modificato nell'[editor delle preferenze](/Preferences_Editor/it "Preferences Editor/it"), **Modifica → Preferenze → Generale → Documento → Consenti etichette oggetto duplicate in un documento**. Ciò significa che in generale l'`Label` può essere ripetuto nello stesso documento; durante il test per un elemento specifico, l'utente dovrebbe fare affidamento su `Name` anziché su `Label`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Feature/it&oldid=1562500>"