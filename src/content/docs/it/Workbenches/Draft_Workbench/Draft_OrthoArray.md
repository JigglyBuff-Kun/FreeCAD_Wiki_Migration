---
title: Draft Serie ortogonale
---
|  |
| --- |
| Draft Serie ortogonale |
| Posizione nel menu |
| Modifiche → Strumenti serie → Serie ortogonale Modifica → Serie ortogonale |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.19 |
| Vedere anche |
| [Draft Serie polare](/Draft_PolarArray/it "Draft PolarArray/it"), [Draft Serie circolare](/Draft_CircularArray/it "Draft CircularArray/it"), [Draft Serie su tracciato](/Draft_PathArray/it "Draft PathArray/it"), [Draft Serie di link su tracciato](/Draft_PathLinkArray/it "Draft PathLinkArray/it"), [Draft Serie su punti](/Draft_PointArray/it "Draft PointArray/it"), [Draft Serie di link su punti](/Draft_PointLinkArray/it "Draft PointLinkArray/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_OrthoArray.svg) **Serie ortogonale** crea una serie (array) ortogonale (3 assi) da un oggetto selezionato. Il comando può facoltativamente creare una Serie di [Link](/App_Link/it "App Link/it"), che è più efficiente di una normale Serie.

Il comando può essere utilizzato su oggetti 2D creati con [Draft](/Draft_Workbench/it "Draft Workbench/it") o [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it"), ma anche su molti oggetti 3D come quelli creati con gli ambienti [Part](/Part_Workbench/it "Part Workbench/it"), [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") o [BIM](/BIM_Workbench/it "BIM Workbench/it").

![](/images/Draft_Array_example.png)

Serie ortogonale

## Utilizzo

1. Facoltativamente selezionare un oggetto.
2. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_OrthoArray.svg) Serie ortogonale.
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Selezionare l'opzione **Modifiche → Strumenti serie → ![](/images/Draft_OrthoArray.svg) Serie ortogonale** dal menu.
   * [BIM](/BIM_Workbench/it "BIM Workbench/it"): Selezionare l'opzione **Modifica → ![](/images/Draft_OrthoArray.svg) Serie ortogonale** dal menu.
3. Si apre il pannello attività **Serie ortogonale**. Vedere [Opzioni](#Opzioni) per maggiori informazioni.
4. Se non si ha ancora selezionato un oggetto: selezionare un oggetto.
5. Immettere i parametri richiesti nel pannello delle attività.
6. Per completare il comando, eseguire una delle seguenti operazioni:
   * Fare clic nella [Vista 3D](/3D_view/it "3D view/it").
   * Premere Enter.
   * Premere il pulsante OK.

## Opzioni

* Inserire il **Numero di elementi** per le direzioni X, Y e Z. Questo numero deve essere almeno `1` per ogni direzione.
* Immettere **Intervalli X** per specificare lo spostamento degli elementi nella direzione X. Per una serie rettangolare i valori Y e Z devono essere `0`.
* Immettere **Intervalli Y** per specificare lo spostamento degli elementi nella direzione Y. Per una serie rettangolare i valori X e Z devono essere `0`.
* Immettere **Intervalli Z** per specificare lo spostamento degli elementi nella direzione Z. Per una serie rettangolare i valori X e Y devono essere `0`.
* Premere il pulsante **Reset X, Y o Z** per reimpostare lo spostamento nella direzione data ai valori predefiniti.
* Se la casella di controllo **Fusione** è selezionata, gli elementi sovrapposti nella serie vengono fusi. Questo non funziona per le Serie di link.
* Se la casella **Serie di link** è spuntata, viene creato una Serie di Link invece di un normale serie. Una Serie di link è più efficiente perché i suoi elementi sono oggetti [App Link](/App_Link/it "App Link/it").
* Premere Esc o il pulsante Annulla per interrompere il comando.

## Note

* Una Serie ortogonale può essere trasformata in una [Serie polare](/Draft_PolarArray/it "Draft PolarArray/it") o in una [Serie circolare](/Draft_CircularArray/it "Draft CircularArray/it") modificandone la proprietà Dati**Array Type**.
* Una Serie di link non può essere trasformata in una serie normale o viceversa. Il tipo di serie deve essere deciso al momento della creazione.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Il comando Serie ortogonale, il comando [Serie polare](/Draft_PolarArray/it "Draft PolarArray/it") e il comando [Serie circolare](/Draft_CircularArray/it "Draft CircularArray/it") creano lo stesso oggetto. Questo oggetto è derivato da un oggetto [Part Feature](/Part_Feature/it "Part Feature/it") e ne eredita tutte le proprietà (ad eccezione di alcune proprietà della vista che non sono ereditate dagli serie di link). Le seguenti proprietà sono aggiuntive se non diversamente specificato:

### Dati

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

Circular array

Le proprietà in questo gruppo sono nascoste per le serie ortogonali e le serie polari.

* Dati**Number Circles** (`Integer`): specifica il numero di strati circolari. Deve essere almeno `2`.
* Dati**Radial Distance** (`Distance`): specifica la distanza tra gli strati circolari.
* Dati**Symmetry** (`Integer`): specifica il numero di linee di simmetria. Questo numero cambia la distribuzione degli elementi nella serie.
* Dati**Tangential Distance** (`Distance`): specifica la distanza tra gli elementi nello stesso strato circolare. Deve essere maggiore di zero.

Draft

* Dati**Always Sync Placement** (`Bool`)

Objects

* Dati**Array Type** (`Enumeration`): specifica il tipo di serie, che può essere `ortho`, `polar` o `circular`.
* Dati**Axis Reference** (`LinkGlobal`): specifica l'oggetto e il bordo da utilizzare al posto delle proprietà Dati**Axis** e Dati**Center**. Non utilizzato per le serie ortogonali.
* Dati**Base** (`Link`): specifica l'oggetto da duplicare nella serie.
* Dati**Count** (`Integer`): (read-only) specifica il numero totale di elementi nella serie.
* Dati**Expand Array** (`Bool`): specifica se espandere la serie nella [Vista ad albero](/Tree_view/it "Tree view/it") per abilitare la selezione dei suoi singoli elementi. Disponibile solo per le serie di link.
* Dati**Fuse** (`Bool`): specifica se gli elementi sovrapposti nella serie sono fusi o meno. Non utilizzato per le serie di link.

Orthogonal array

Le proprietà in questo gruppo sono nascoste per le serie circolari e polari.

* Dati**Interval X** (`VectorDistance`): specifica l'intervallo tra gli elementi nella direzione X.
* Dati**Interval Y** (`VectorDistance`): specifica l'intervallo tra gli elementi nella direzione Y.
* Dati**Interval Z** (`VectorDistance`): specifica l'intervallo tra gli elementi nella direzione Z.
* Dati**Number X** (`Integer`): specifica il numero di elementi nella direzione X. Deve essere almeno `1`.
* Dati**Number Y** (`Integer`): specifica il numero di elementi nella direzione Y. Deve essere almeno `1`.
* Dati**Number Z** (`Integer`): specifica il numero di elementi nella direzione Z. Deve essere almeno `1`.

Polar array

Le proprietà in questo gruppo sono nascoste per le serie circolari e ortogonali.

* Dati**Angle** (`Angle`): specifica l'apertura dell'arco circolare. Usa `360°` per un cerchio completo.
* Dati**Interval Axis** (`VectorDistance`): specifica l'intervallo tra gli elementi nella direzione Dati**Axis**.
* Dati**Number Polar** (`Integer`): specifica il numero di elementi nella direzione polare.

Polar/circular array

Le proprietà in questo gruppo sono nascoste per le serie ortogonali.

* Dati**Axis** (`Vector`): specifica la direzione dell'asse della serie.
* Dati**Center** (`VectorDistance`): specifica il punto centrale della serie. L'asse della serie passa per questo punto. Per le serie circolari è un offset dal Dati**Placement** dell'oggetto Dati**Base**.

### Vista

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
* Vista**Modalità di visualizzazione** (`Enumeration`): per le serie di link può essere `Link` o `ChildView`. Per altre serie può essere: `Flat Lines`, `Shaded`, `Wireframe` o `Points`
* Vista**Show In Tree** (`Bool`)
* Vista**Visibility** (`Bool`)

Draft

* Vista**Pattern** (`Enumeration`): not used.
* Vista**Pattern Size** (`Float`): not used.

Object style

Le proprietà in questo gruppo non vengono ereditate dalle serie di link.

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

### Serie parametrica

Per creare una serie ortogonale parametrica usare il metodo `make_array` ([disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")) del modulo Draft. Questo metodo sostituisce il metodo deprecato `makeArray`. Il metodo `make_array` può creare Serie ortogonali, [Serie polari](/Draft_PolarArray/it "Draft PolarArray/it") e [Serie circolari](/Draft_CircularArray/it "Draft CircularArray/it"). Per ogni tipo di serie sono disponibili uno o più wrapper.

Il metodo principale:

```
array = make_array(base_object, arg1, arg2, arg3, arg4=None, arg5=None, arg6=None, use_link=True)

```

I wrapper per le serie ortogonali sono:

```
array = make_ortho_array(base_object,
                         v_x=App.Vector(10, 0, 0), v_y=App.Vector(0, 10, 0), v_z=App.Vector(0, 0, 10),
                         n_x=2, n_y=2, n_z=1,
                         use_link=True)

```

```
array = make_ortho_array2d(base_object,
                           v_x=App.Vector(10, 0, 0), v_y=App.Vector(0, 10, 0),
                           n_x=2, n_y=2,
                           use_link=True)

```

I wrapper per le serie rettangolari sono:

```
array = make_rect_array(base_object,
                        d_x=10, d_y=10, d_z=10,
                        n_x=2, n_y=2, n_z=1,
                        use_link=True)

```

```
array = make_rect_array2d(base_object,
                          d_x=10, d_y=10,
                          n_x=2, n_y=2,
                          use_link=True)

```

* `base_object` è l'oggetto da disporre in serie. Può anche essere la `Label` (string) di un oggetto nel documento corrente.
* `v_x`, `v_y` e `v_z` sono i vettori tra i punti base degli elementi nelle rispettive direzioni.
* `d_x`, `d_y` e `d_z` sono le distanze tra i punti base degli elementi nelle rispettive direzioni.
* `n_x`, `n_y` e `n_z` sono i numeri degli elementi nelle rispettive direzioni.
* Se `use_link` è `True` gli elementi creati sono [App Links](/App_Link/it "App Link/it") invece di normali copie.
* `array` viene restituito con l'oggetto serie creato.

Esempio:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rect = Draft.make_rectangle(1500, 500)
v_x = App.Vector(1600, 0, 0)
v_y = App.Vector(0, 600, 0)

array = Draft.make_ortho_array2d(rect, v_x, v_y, 3, 4)
doc.recompute()

```

### Serie non parametrica

Per creare una serie ortogonale non parametrica usare il metodo `array` del modulo Draft. Questo metodo restituisce `None`.

```
array(objectslist, xvector, yvector, xnum, ynum)
array(objectslist, xvector, yvector, zvector, xnum, ynum, znum)

```

Esempio:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rect = Draft.make_rectangle(1500, 500)
v_x = App.Vector(1600, 0, 0)
v_y = App.Vector(0, 600, 0)

Draft.array(rect, v_x, v_y, 3, 4)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_OrthoArray/it&oldid=1557787>"