---
title: Draft Serie su tracciato
---
|  |
| --- |
| Draft Serie su tracciato |
| Posizione nel menu |
| Modifiche → Strumenti serie → Serie su tracciato Modifica → Serie su tracciato |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.14 |
| Vedere anche |
| [Draft Serie ortogonale](/Draft_OrthoArray/it "Draft OrthoArray/it"), [Draft Serie polare](/Draft_PolarArray/it "Draft PolarArray/it"), [Draft Serie circolare](/Draft_CircularArray/it "Draft CircularArray/it"), [Draft Serie di link su tracciato](/Draft_PathLinkArray/it "Draft PathLinkArray/it"), [Draft Serie su punti](/Draft_PointArray/it "Draft PointArray/it"), [Draft Serie di link su punti](/Draft_PointLinkArray/it "Draft PointLinkArray/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_PathArray.svg) **Serie su tracciato** crea una serie (array) regolare da un oggetto selezionato posizionando copie lungo un percorso. Utilizzare invece il comando [Serie di link su tracciato](/Draft_PathLinkArray/it "Draft PathLinkArray/it") per creare una serie di [Link](/App_Link/it "App Link/it") più efficiente. Fatta eccezione per il tipo di serie creato, Serie di link o Serie normale, il comando [Serie di link su tracciato](/Draft_PathLinkArray/it "Draft PathLinkArray/it") è identico a questo comando.

Entrambi i comandi possono essere utilizzati su oggetti 2D creati con [Draft](/Draft_Workbench/it "Draft Workbench/it") o [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it"), ma anche su molti oggetti 3D come quelli creati con gli ambienti [Part](/Part_Workbench/it "Part Workbench/it"), [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") o [BIM](/BIM_Workbench/it "BIM Workbench/it").

![](/images/Draft_PathArray_Example.png)

Serie su tracciato

## Utilizzo

1. Selezionare l'oggetto che si desidera allineare.
2. Aggiungere l'oggetto tracciato alla selezione. È anche possibile selezionare invece dei bordi. I bordi devono appartenere allo stesso oggetto e devono essere collegati.
3. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_PathArray.svg) Serie su tracciato.
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Selezionare l'opzione **Modifiche → Strumenti serie → ![](/images/Draft_PathArray.svg) Serie su tracciato** dal menu.
   * [BIM](/BIM_Workbench/it "BIM Workbench/it"): Selezionare l'opzione **Modifica → ![](/images/Draft_PathArray.svg) Serie su tracciato** dal menu.
4. La serie viene creata.
5. Facoltativamente, modificare le [proprietà](#Proprietà) della serie nell'[Editor delle proprietà](/Property_editor/it "Property editor/it").

## Allineamento

L'allineamento degli elementi in una Serie su tracciato dipende dalle proprietà della serie e dall'orientamento dell'oggetto sorgente. La posizione dell'oggetto sorgente viene ignorata: ai fini della serie `x`, `y` e `z` sono impostati su `0`. Se la proprietà Dati**Align** della serie è impostata su `false` l'orientamento degli elementi della serie è identico a quello dell'oggetto sorgente. Se è impostata su `true`, l'asse X del sistema di coordinate locale di ciascun posizionamento dell'elemento è tangente al percorso. Gli assi Y e Z dei sistemi di coordinate locali dipendono dalla proprietà Dati**Align Mode** della serie. Altre proprietà della serie coinvolte nell'allineamento includono Dati**Tangent Vector**, Dati**Force Vertical** e Dati**Vertical Vector**.

![](/images/Draft_PathArray_example2.png)

3 serie basate sullo stesso percorso non planare. Da sinistra a destra: Align è falso, Align è vero con Align Mode Original e Align è vero con Align Mode Frenet

.

### Modalità allineamento

Sono disponibili tre modalità:

#### Originale

Questa modalità si avvicina di più alla singola Dati**Align Mode** disponibile nella versione 0.18. Si basa su un vettore normale fisso. Se il percorso è planare questo vettore è perpendicolare al piano del percorso, altrimenti viene utilizzato un vettore predefinito, l'asse Z positivo. Da questo vettore normale e dal vettore tangente locale (l'asse X locale) viene calcolato un [cross product](https://en.wikipedia.org/wiki/Cross_product). Questo nuovo vettore viene utilizzato come asse Z locale. L'orientamento dell'asse Y locale è determinato dagli assi X e Z locali.

#### Frenet

Questa modalità utilizza il vettore normale locale derivato dal percorso in corrispondenza di ciascun posizionamento dell'elemento. Se questo vettore non può essere determinato (ad esempio nel caso di un segmento retto) viene utilizzato un vettore predefinito, sempre l'asse Z positivo. Con questo vettore e il vettore tangente locale si determina il sistema di coordinate locale utilizzando la stessa procedura del paragrafo precedente.

#### Tangente

Questa modalità è simile a Dati**Align Mode** `Original` ma include la possibilità di pre-ruotare l'oggetto sorgente specificando un Dati**Tangent Vector**.

### Forza Verticale e Vettore Verticale

Queste proprietà sono disponibili solo se Dati**Align Mode** è `Original` o `Tangent`. Se Dati**Force Vertical** è impostato su `true` il sistema di coordinate locale viene calcolato in modo diverso. Il Dati**Vertical Vector** viene utilizzato come vettore normale fisso. Da questo vettore normale e dal vettore tangente locale (l'asse X locale) viene nuovamente calcolato un prodotto incrociato. Ma ora questo vettore è usato come asse Y locale. L'orientamento dell'asse Z locale è determinato dagli assi X e Y locali.

L'utilizzo di queste proprietà può essere richiesto se uno degli spigoli del percorso è (quasi) parallelo alla normale predefinita del percorso.

## Notes

* Fused Link arrays are not displayed properly, in the 3D view their elements always appear unfused.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Serie su tracciato è derivato da un oggetto [Part Feature](/Part_Feature/it "Part Feature/it") e ne eredita tutte le proprietà (ad eccezione di alcune proprietà View che non sono ereditate da Serie di Link). Le seguenti proprietà sono aggiuntive se non diversamente specificato:

### Data

Link

Le proprietà in questo gruppo sono disponibili solo per le serie di link. Vedere [Crea link](/Std_LinkMake/it#Proprietà "Std LinkMake/it") per ulteriori informazioni.

* Dati**Scale** (`Float`)
* Dati (Hidden)**Scale Vector** (`Vector`)
* Dati**Scale List** (`VectorList`)
* Dati (Hidden)**Visibility List** (`BoolList`)
* Dati (Hidden)**Placement List** (`PlacementList`)
* Dati (Hidden)**Element List** (`LinkList`)
* Dati (Hidden)**\_ Link Touched** (`Bool`)
* Dati (Hidden)**\_ Child Cache** (`LinkList`)
* Dati (Hidden)**Colored Elements** (`LinkSubHidden`)
* Dati**Link Transform** (`Bool`)

Alignment

* Dati**Align** (`Bool`): specifica se gli elementi nella serie sono allineati o meno lungo il percorso. Se è `false` tutte le altre proprietà in questo gruppo, eccetto Dati**Extra Translation**, non si applicano e sono nascoste.
* Dati**Align Mode** (`Enumeration`): specifica la modalità di allineamento, che può essere `Original`, `Frenet` o `Tangent`.
* Dati**End Offset** (`Length`): specifica la lunghezza dalla fine del percorso all'ultima copia. Deve essere inferiore alla lunghezza del percorso meno Dati**Start Offset**. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")
* Dati**Extra Translation** (`VectorDistance`): specifica uno spostamento aggiuntivo per ogni elemento lungo il percorso.
* Dati**Force Vertical** (`Bool`): specifica se sovrascrivere la direzione normale predefinita con il valore di Dati**Vertical Vector**. Utilizzato solo se Dati**Align Mode** è `Original` o `Tangent`.
* Dati**Start Offset** (`Length`): specifica la lunghezza dall'inizio del percorso alla prima copia. Deve essere inferiore alla lunghezza del percorso. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")
* Dati**Tangent Vector** (`Vector`): specifica il vettore di allineamento. Utilizzato solo se Dati**Align Mode** è `Tangent`.
* Dati**Vertical Vector** (`Vector`): specifica l'override per la direzione normale predefinita. Utilizzato solo se Dati**Vertical Vector** è `true`.

Draft

* Dati**Always Sync Placement** (`Bool`)

Objects

* Dati**Base** (`LinkGlobal`): specifica l'oggetto da duplicare nella serie.
* Dati**Count** (`Integer`): specifica il numero di elementi nella serie.
* Dati**Expand Array** (`Bool`): specifica se espandere la serie nella [Vista ad albero](/Tree_view/it "Tree view/it") per abilitare la selezione dei suoi singoli elementi. Disponibile solo per le serie di Link.
* Dati**Fuse** (`Bool`): specifica se gli elementi sovrapposti nell'array sono fusi o meno. Non utilizzato per le serie di Link. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
* Dati**Path Object** (`LinkGlobal`): specifica l'oggetto da utilizzare per il percorso. Deve contenere `Edges` nella sua [Part TopoShape](/Part_TopoShape/it "Part TopoShape/it").
* Dati**Path Subelements** (`LinkSubListGlobal`): specifica un elenco di spigoli dell'Dati**Path Object**. Se forniti solo questi bordi vengono utilizzati per il percorso.

Spacing

* Dati**Count** (`Integer`): specifies the number of elements in the array.
* Dati**End Offset** (`Length`): specifies the length from the end of the path to the last copy. Must be smaller than the length of the path minus the Dati**Start Offset**. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Dati**Spacing Mode** (`Enumeration`): specifies how elements are spaced. The options are: [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
  + `Fixed count`: available path length (minus start and end offsets) is evenly divided to accommodate Dati**Count** elements.
  + `Fixed spacing`: start at start offset and place new elements after traveling a fixed distance along the path.
  + `Fixed count and spacing`: same as `Fixed spacing`, but also stop at Dati**Count** elements.
* Dati**Spacing Pattern** (`FloatList`): the spacing is multiplied by a corresponding number in this sequence. Only used if Dati**Use Spacing Pattern** is `true`, otherwise hidden. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
* Dati**Spacing Unit** (`Length`): the base fixed distance between elements. Only used if Dati**Spacing Mode** is `Fixed spacing` or `Fixed count and spacing`, otherwise hidden. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
* Dati**Start Offset** (`Length`): specifies the length from the start of the path to the first copy. Must be smaller than the length of the path. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Dati**Use Spacing Pattern** (`Bool`): use repeating spacing patterns instead of uniform spacing. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

### View

Link

Le proprietà in questo gruppo, ad eccezione della proprietà ereditata, sono disponibili solo per le serie di link. Vedere [Crea link](/Std_LinkMake/it#Proprietà "Std LinkMake/it") per ulteriori informazioni.

* Vista**Draw Style** (`Enumeration`)
* Vista**Line Width** (`FloatConstraint`)
* Vista**Override Material** (`Bool`)
* Vista**Point Size** (`FloatConstraint`)
* Vista**Selectable** (`Bool`): questa è una proprietà ereditata che appare nel gruppo Selezione per altre serie
* Vista**Shape Material** (`Material`)

Base

Le proprietà in questo gruppo, ad eccezione della proprietà ereditata, sono disponibili solo per le serie di link. Vedere [Crea link](/Std_LinkMake/it#Proprietà "Std LinkMake/it") per ulteriori informazioni.

* Vista (Hidden)**Child View Provider** (`PersistentObject`)
* Vista (Hidden)**Material List** (`MaterialList`)
* Vista (Hidden)**Override Color List** (`ColorList`)
* Vista (Hidden)**Override Material List** (`BoolList`)
* Vista (Hidden)**Proxy** (`PythonObject`): questa è una proprietà ereditata.

Display Options

Le proprietà in questo gruppo sono proprietà ereditate. Vedere [Part Feature](/Part_Feature#Properties "Part Feature") per ulteriori informazioni.

* Vista**Bounding Box** (`Bool`): questa proprietà non è ereditata dalle serie di link.
* Vista**Display Mode** (`Enumeration`): per le serie di link può essere `Link` o `ChildView`. Per altre serie può essere: `Flat Lines`, `Shaded`, `Wireframe` o `Points`
* Vista**Show In Tree** (`Bool`)
* Vista**Visibility** (`Bool`)

Draft

* Vista**Pattern** (`Enumeration`): not used.
* Vista**Pattern Size** (`Float`): not used.

Object style

Le proprietà in questo gruppo non vengono ereditate dalle serie di link.

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Per creare una serie su tracciato utilizzare il metodo `make_path_array` ([disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")) del modulo Draft. Questo metodo sostituisce il metodo deprecato `makePathArray`.

```
path_array = make_path_array(base_object, path_object,
                             count=4, extra=App.Vector(0, 0, 0), subelements=None,
                             align=False, align_mode="Original", tan_vector=App.Vector(1, 0, 0),
                             force_vertical=False, vertical_vector=App.Vector(0, 0, 1),
                             use_link=True)

```

* `base_object` è l'oggetto da disporre in serie. Può anche essere la `Label` (string) di un oggetto nel documento corrente.
* `path_object` è l'oggetto percorso. Può anche essere la `Label` (string) di un oggetto nel documento corrente.
* `count` è il numero di elementi nella serie.
* `extra` è un vettore che sposta ogni elemento.
* `subelements` è un elenco di bordi di `path_object`, ad esempio `["Edge1", "Edge2"]`. Se forniti solo questi bordi vengono utilizzati per il percorso.
* Se `align` è `True` gli elementi sono allineati lungo il percorso a seconda del valore di `align_mode`, che può essere `"Original"`, `"Frenet"` o `"Tangent"`.
* `tan_vector` è un vettore unitario che definisce la direzione tangente locale degli elementi lungo il percorso. Viene utilizzato quando `align_mode` è `"Tangent"`.
* Se `force_vertical` è `True` `vertical_vector` viene utilizzato per la direzione Z locale degli elementi lungo il percorso. Viene utilizzato quando `align_mode` è `"Original"` o `"Tangent"`.
* Se `use_link` è `True` gli elementi creati sono [App Links](/App_Link/it "App Link/it") invece di normali copie.
* `path_array` viene restituito con l'oggetto serie creato.

Esempio:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(500, -1000, 0)
p2 = App.Vector(1500, 1000, 0)
p3 = App.Vector(3000, 500, 0)
p4 = App.Vector(4500, 100, 0)
spline = Draft.make_bspline([p1, p2, p3, p4])
obj = Draft.make_polygon(3, 500)

path_array = Draft.make_path_array(obj, spline, 6)
doc.recompute()

wire = Draft.make_wire([p1, -p2, -p3, -p4])
path_array2 = Draft.make_path_array(obj, wire, count=3, extra=App.Vector(0, -500, 0), subelements=["Edge2", "Edge3"], align=True, force_vertical=True)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_PathArray/it&oldid=1557839>"