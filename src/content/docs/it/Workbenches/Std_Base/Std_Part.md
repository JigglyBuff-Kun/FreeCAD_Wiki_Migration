---
title: Parte
---
|  |
| --- |
| Parte |
| Posizione nel menu |
| Nessuno |
| Ambiente |
| Tutti |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Gruppo](/Std_Group/it "Std Group/it"), [PartDesign Corpo](/PartDesign_Body/it "PartDesign Body/it") |
|  |

## Descrizione

Una ![](/images/Std_Part.svg) Parte (internamente chiamata [App Part](/App_Part/it "App Part/it")) è un contenitore per scopi generali che contiene un gruppo di oggetti in modo che essi possano essere spostati in blocco come una singola unità nella vista 3D.

L'elemento Parte è stato sviluppato per essere l'elemento di base per creare [assemblaggi](/Assembly/it "Assembly/it") meccanici. In particolare, ha lo scopo di disporre oggetti che hanno una [forma topologica](/Part_TopoShape/it "Part TopoShape/it"), come le [primitive di Part](/Part_Primitives/it "Part Primitives/it"), i [corpi di PartDesign](/PartDesign_Body/it "PartDesign Body/it"), e altre [funzioni di Part](/Part_Feature/it "Part Feature/it"). Parte fornisce un [Origine](#Origine) con assi X, Y e Z locali e piani standard; questa origine viene utilizzata come riferimento per posizionare e collegare quegli altri oggetti. Inoltre, le Parti possono essere nidificate all'interno di altre Parti per creare un grande assieme da sotto-assiemi più piccoli.

Sebbene sia destinato principalmente a corpi solidi, Parte può essere utilizzato per gestire qualsiasi oggetto che abbia una proprietà [Posizionamento](/Placement/it "Placement/it"), quindi può anche contenere [Funzioni Mesh](/Mesh_Feature/it "Mesh Feature/it"), [schizzi](/Sketch/it "Sketch/it") e altri oggetti derivati dalla classe [App GeoFeature](/App_GeoFeature/it "App GeoFeature/it").

Non confondere il ![](/images/PartDesign_Body.svg) [Corpo di PartDesign](/PartDesign_Body/it "PartDesign Body/it") con la ![](/images/Std_Part.svg) Parte. Il primo è un oggetto specifico utilizzato in ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it"), destinato a modellare un [singolo solido contiguo](/PartDesign_Body/it#Singolo_solido_contiguo "PartDesign Body/it") mediante le  [funzioni di PartDesign](/PartDesign_Feature/it "PartDesign Feature/it"). Invece, la Parte non viene utilizzata per la modellazione, ma solo per disporre diversi oggetti nello spazio, per creare degli [assemblaggi](/Assembly/it "Assembly/it").

Lo strumento Parte non è definito da un particolare ambiente di lavoro, ma dal sistema base; di conseguenza lo si trova nella **barra degli strumenti struttura**, che è disponibile in tutti gli [ambienti di lavoro](/Workbenches/it "Workbenches/it"). Per raggruppare gli oggetti arbitrariamente senza considerare la loro posizione, utilizzare ![](/images/Std_Group.svg) [Gruppo](/Std_Group/it "Std Group/it"); questo oggetto non influenza i posizionamenti degli elementi che contiene, è essenzialmente solo una cartella che viene utilizzata per mantenere organizzata la [vista ad albero](/Tree_view/it "Tree view/it").

![](/images/Std_Part-tree.png)![](/images/Std_Part_example.png)

A sinistra: elementi all'interno di una Parte nella [Vista ad albero](/Tree_view/it "Tree view/it"). A destra: oggetti posizionati nello spazio, riferiti all'Origine della Parte.

## Utilizzo

1. Premere il pulsante ![](/images/Std_Part.svg) Crea una parte.
2. Viene creata una parte vuota che diventa automaticamente *[attiva](#Active_status)*.
3. Per aggiungere oggetti alla parte, selezionarli nella [Vista ad albero](/Tree_view/it "Tree view/it") e trascinarli e rilasciarli sulla parte.
4. Per rimuovere oggetti dalla parte, trascinarli fuori dalla parte e sull'etichetta del documento nella parte superiore della [Vista ad albero](/Tree_view/it "Tree view/it").
5. Gli oggetti possono anche essere aggiunti e rimossi modificando la proprietà Dati**Group** della Parte.

## Note

* Un oggetto può appartenere solo ad una singola Parte.
* Le operazioni 3D come [Part Boolean](/Part_Boolean/it "Part Boolean/it") non possono essere applicate alle parti. Ad esempio, non è possibile selezionare due parti ed eseguire una [Part Fusione](/Part_Fuse/it "Part Fuse/it") o un [Part Sottrazione](/Part_Cut "Part Cut").

## Proprietà

La Parte, chiamata internamente [App Part](/App_Part/it "App Part/it") (classe `App::Part`), è derivata dalla [App GeoFeature](/App_GeoFeature/it "App GeoFeature/it") (`App::GeoFeature`) ed eredita tutte le sue proprietà. Ha anche diverse proprietà aggiuntive. In particolare le proprietà che l'aiutano a gestire le informazioni nel contesto di un assieme, ad esempio, Dati**Type**, Dati**Id**, Dati**License**, Dati**LicenseURL** e { {DatiProprietà|Group}}.

Queste sono le proprietà disponibili nell'[editor delle proprietà](/Property_editor/it "Property editor/it"). Le proprietà nascoste possono essere mostrate usando il comando **Mostra tutto** nel menu contestuale dell'[editor delle proprietà](/Property_editor/it "Property editor/it").

### Dati

Base

* Dati**Type** (`String`): una descrizione per questo oggetto. Per impostazione predefinita, è una stringa vuota `""`.
* Dati**Material** (`Link`): il materiale per questo oggetto.
* Dati (Hidden)**Meta** (`Map`): mappa con metainformazioni aggiuntive. Per impostazione predefinita, `{}` è vuoto.
* Dati**Id** (`String`): un numero di identificazione o un numero di parte per questo oggetto. Per impostazione predefinita, è una stringa vuota `""`.
* Dati (Hidden)**Uid** (`UUID`): l'[identificatore univoco universale](https://en.wikipedia.org/wiki/Universally_unique_identifier) (UUID) (numero a 128 bit) dell'oggetto. Questo viene assegnato al momento della creazione.
* Dati**License** (`String`): un campo per specificare la licenza per questo oggetto. Per impostazione predefinita, è una stringa vuota `""`.
* Dati**LicenseURL** (`String`): un campo per specificare l'indirizzo web della licenza o del contratto per questo oggetto. Per impostazione predefinita, è una stringa vuota `""`.
* Dati**Color** (`Color`): una serie di quattro valori RGBA a virgola mobile `(r,g,b,a)` per definire il colore dell'oggetto; di default è `(1.0, 1.0, 1.0, 1.0)`, che viene visualizzato come `[255,255,255]` su base 255, white color.
* Dati**Placement** (`Placement`): la posizione dell'oggetto nella [vista 3D](/3D_view/it "3D view/it"). Il posizionamento è definito da un punto `Base` (vettore), e una `Rotazione` (asse e angolo). Vedi [Posizionamento](/Placement/it "Placement/it").
  + Dati**Angle**: l'angolo di rotazione intorno al Dati**Axis**. Per impostazione predefinita, è `0°` (zero gradi).
  + Dati**Axis**: il vettore che definisce l'asse di rotazione per il posizionamento. Ogni componente è un valore in virgola mobile tra `0` e `1`. Se un valore è superiore a `1`, il vettore è normalizzato in modo che la grandezza del vettore sia `1`. Per impostazione predefinita, l'asse Z è positivo, `(0, 0, 1)`.
  + Dati**Position**: un vettore con coordinate 3D nel punto base. Per impostazione predefinita, è l'origine `(0, 0, 0)`.
* Dati**Label** (`String`): il nome modificabile dall'utente di questo oggetto, è una stringa arbitraria UTF8.
* Dati (Hidden)**Label2** (`String`): una descrizione più lunga e modificabile dall'utente di questo oggetto, è una stringa UTF8 arbitraria che può includere ritorni a capo. Per impostazione predefinita, è una stringa vuota `""`.
* Dati (Hidden)**Expression Engine** (`ExpressionEngine`): un elenco di espressioni. Per impostazione predefinita, è vuoto `[]`.
* Dati (Hidden)**Visibility** (`Bool`): se visualizzare o meno l'oggetto.
* Dati (Hidden)**Origin** (`Link`): l'oggetto [App Origin](/App_OriginGroupExtension/it "App OriginGroupExtension/it") che è il riferimento posizionale per tutti gli elementi elencati in Dati**Group**.
* Dati**Group** (`LinkList`): un elenco di oggetti di riferimento. Per impostazione predefinita, è vuoto `[]`.
* Dati (Hidden)**\_ Group Touched** (`Bool`): se il gruppo viene toccato o meno.

### Vista

Display Options

* Vista**Display Mode** (`Enumeration`): `Group`.
* Vista**Show In Tree** (`Bool`): se è `true`, l'oggetto appare nella [Vista ad albero](/Tree_view/it "Tree view/it"). Altrimenti viene impostato come invisibile.
* Vista**Visibility** (`Bool`): se è `true`, l'oggetto appare nella [vista 3D](/3D_view/it "3D view/it"); altrimenti è invisibile. Per impostazione predefinita, questa proprietà può essere attivata e disattivata premendo la barra Space sulla tastiera.

Selection

* Vista**On Top When Selected** (`Enumeration`): `Disabled` (default), `Enabled`, `Object`, `Element`.
* Vista**Selection Style** (`Enumeration`): `Shape` (default), `BoundBox`. Se l'opzione è `Shape`, l'intera forma (vertici, bordi e facce) verrà evidenziata nella [vista 3D](/3D_view/it "3D view/it"); se è `BoundBox` verrà evidenziato solo il riquadro di delimitazione.

### Spiegazione dettagliata

### Stato attivo

Un documento aperto può contenere più Parti. Ma solo una Parte può essere attiva. Viene visualizzata la parte attiva nella [vista ad albero](/Tree_view/it "Tree view/it") con il colore di sfondo specificato per il **Contenitore attivo**, per impostazione predefinita il colore in [editor delle preferenze](/Preferences_Editor/it#Colori "Preferences Editor/it") è azzurro. Essa sarà anche mostrata con testo in grassetto.

Per attivare o disattivare una Parte:

* Doppio click nella [vista ad albero](/Tree_view/it "Tree view/it"), oppure
* Aprire il menu contestuale (click tasto destro) e selezionare **Oggetto attivo**.

![](/images/Std_Part_active.png)

Documento con due Parti, di cui la seconda è attiva.

### Origine

L'Origine è costituita dai tre assi standard (X, Y, Z) e da tre piani standard (XY, XZ e YZ). A questi elementi possono essere collegati, al momento della creazione, [Schizzi](/Sketch/it "Sketch/it") e altri oggetti.

![](/images/Part_Origin_tree.png) ![](/images/Part_Origin_view.png)

A sinistra: Origine di Part nella [vista ad albero](/Tree_view/it "Tree view/it"). A destra: rappresentazione degli elementi Origine nella [vista 3D](/3D_view/it "3D view/it").

*Nota:* l'origine è un oggetto [App Origin](/App_OriginGroupExtension/it "App OriginGroupExtension/it")(`App::Origin` class), mentre gli assi e i piani sono rispettivamente oggetti di tipo `App::Linea` e `App::Piano`. Ognuno di questi elementi può essere nascosto e non nascosto singolarmente con la barra Spazio; questo è utile per scegliere il riferimento corretto quando si creano altri oggetti.

*Nota 2:* tutti gli elementi all'interno della Parte sono riferiti all'Origine della Parte, il che significa che la Parte può essere spostata e ruotata in riferimento al sistema globale di coordinate senza influenzare il posizionamento degli elementi all'interno.

### Gestione della visibilità

La visibilità della Parte sostituisce la visibilità di qualsiasi oggetto in essa contenuto. Se la Parte è nascosta, anche gli oggetti in essa contenuti saranno nascosti, anche se la loro proprietà individuale Vista**Visibilità** è impostata su `true`. Se la Parte è visibile, allora la Vista**Visibilità** di ogni oggetto determina se l'oggetto è mostrato o meno.

![](/images/Part_Visibility_off.png) ![](/images/Part_Visibility_on.png)

La visibilità della parte Std determina se gli oggetti raggruppati sotto di essa sono mostrati o meno nella [vista 3D](/3D_view/it "3D view/it") .  
A sinistra: la Parte è nascosta, quindi nessuno degli oggetti sarà mostrato nella [vista 3D](/3D_view/it "3D view/it").  
Destra: la Parte è visibile, quindi ogni oggetto controlla la propria visibilità.

## Script

*Vedere anche:* [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it"), e [script di oggetti](/Scripted_objects/it "Scripted objects/it").

Vedere [Funzione Part](/Part_Feature/it "Part Feature/it") per le informazioni generali sull'aggiunta di oggetti al documento.

Una Parte ([App Part](/App_Part/it "App Part/it")) viene creata con il metodo del documento `addObject()`. Una volta che una Parte esiste, altri oggetti possono essere aggiunti ad essa con i metodi di questa Parte `addObject()` o `addObjects()`.

```
import FreeCAD as App

doc = App.newDocument()
part = App.ActiveDocument.addObject("App::Part", "Part")

obj1 = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj2 = App.ActiveDocument.addObject("Part::Box", "Box")

part.addObjects([obj1, obj2])
App.ActiveDocument.recompute()

```

Non si può creare uno script `App::Part`. Tuttavia, è possibile aggiungere un comportamento `App::Part` a uno script `Part::FeaturePython` usando il seguente codice:

```
class MyGroup(object):
    def __init__(self, obj=None):
        self.Object = obj
        if obj:
            self.attach(obj)

    def dumps(self):
        return

    def loads(self, _state):
        return

    def attach(self, obj):
        obj.addExtension("App::OriginGroupExtensionPython")
        obj.Origin = FreeCAD.ActiveDocument.addObject("App::Origin", "Origin")

    def onDocumentRestored(self, obj):
        self.Object = obj

class ViewProviderMyGroup(object):
    def __init__(self, vobj=None):
        if vobj:
            vobj.Proxy = self
            self.attach(vobj)
        else:
            self.ViewObject = None

    def attach(self, vobj):
        vobj.addExtension("Gui::ViewProviderOriginGroupExtensionPython")
        self.ViewObject = vobj

    def dumps(self):
        return None

    def loads(self, _state):
        return None

App.ActiveDocument.addObject("Part::FeaturePython",
                             "Group",
                             MyGroup(),
                             ViewProviderMyGroup(),
                             True)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Part/it&oldid=1560689>"