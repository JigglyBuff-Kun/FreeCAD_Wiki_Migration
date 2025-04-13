---
title: Surface Filling - Riempimento di superficie
---
|  |
| --- |
| Surface Filling |
| Posizione nel menu |
| Surface → Riempimento... |
| Ambiente |
| [Surface|Version=0.17](/Surface_Workbench/it "Surface Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

![](/images/Surface_Filling.svg) Surface Filling crea una superficie da una serie di bordi collegati.

Gli spigoli di base che formano il contorno chiuso, così come i vertici e gli spigoli ausiliari, possono appartenere a curve 2D di ![](/images/Workbench_Draft.svg) [Draft](/Part_Workbench/it "Part Workbench/it") o di ![](/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it"), ma possono anche appartenere a oggetti solidi 3D come quelli creati con ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/it "Part Workbench/it") o ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it").

![](/images/Surface_Filling_example.png)

Esempio di una superficie riempita, delimitata da quattro spigoli situati nel piano XY; (a sinistra) solo i quattro bordi e (a destra) una curva aggiunta nello spazio che definisce la curvatura della superficie

## Utilizzo

1. Assicurarsi di avere almeno tre bordi o curve nello spazio che formano un contorno chiuso. I bordi possono essere creati con gli strumenti di ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/it "Draft Workbench/it") o di ![](/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it"). L'uso di tre bordi crea una superficie triangolare; quattro bordi una superficie quadrilatera.
   * Se è il caso, all'interno del contorno chiuso possono essere disegnate delle curve. Non è necessario che tocchino i bordi. Queste curve possono essere utilizzate per controllare la curvatura della superficie risultante.
   * Allo stesso modo, è possibile utilizzare un numero di vertici con lo stesso scopo per indicare dove deve passare la superficie.
2. Premere il pulsante ![](/images/Surface_Filling.svg) Surface filling.
3. Nella sezione **Boundary**, premere Add edge.
4. Usare il puntatore per selezionare i bordi desiderati nella [vista 3D](/3D_view/it "3D view/it"); viene visualizzata un'anteprima della forma finale dopo aver selezionato i bordi validi che formano un contorno chiuso.
   * Come opzione, andare alla sezione **Curvature: non-boundary edges** (bordi non di confine), premere Add edge, e selezionare i bordi desiderati nella [vista 3D](/3D_view/it "3D view/it").
   * Come opzione, andare alla sezione **Curvature: non-boundary vertices** (vertici non di confine), premere Add vertex, e scegliere i vertici desiderati nella [vista 3D](/3D_view/it "3D view/it").
5. Premere OK per completare l'operazione.

## Opzioni

* Nella sezione **Boundary**:
  + Add edge: premere una volta per iniziare a selezionare i bordi **Boundary edges** nella [vista 3D](/3D_view/it "3D view/it"). Possono essere selezionati i bordi dritti come le ![](/images/Draft_Wire.svg) [polilinee di Draft](/Draft_Wire/it "Draft Wire/it") e le ![](/images/Sketcher_CreatePolyline.svg) [polilinee di Sketcher](/Sketcher_CreatePolyline/it "Sketcher CreatePolyline/it"), o i bordi curvi come le ![](/images/Draft_BSpline.svg) [BSpline di Draft](/Draft_BSpline/it "Draft BSpline/it") e le ![](/images/Sketcher_CreateBSpline.svg) [BSpline di Sketcher](/Sketcher_CreateBSpline/it "Sketcher CreateBSpline/it") , così come qualsiasi bordo di oggetti solidi, come quelli di un ![](/images/PartDesign_Body.svg) [Corpo](/PartDesign_Body/it "PartDesign Body/it") e le ![](/images/Part_Primitives.svg) [Primitive di Part](/Part_Primitives/it "Part Primitives/it").
  + Remove edge: premere una volta per iniziare a selezionare i bordi nella vista 3D; questi bordi devono essere stati precedentemente selezionati con Add edge.
  + Right mouse button: aprire il menu contestuale e selezionare Remove, o premere Del sulla tastiera, per rimuovere il bordo attualmente selezionato nell'elenco.

* Nella sezione **Curvature: non-boundary edges**; il pulsante Add edge è disponibile per selezionare bordi ausiliari (linee rette o B-Splines) per controllare la curvatura della superficie. La superficie sarà costretta a passare attraverso questi bordi ausiliari. Funziona meglio quando i bordi ausiliari si trovano all'interno della regione delimitata da **Boundary edges**.
* Nella sezione **Curvature: non-boundary vertices**; simile a non-boundary edges, l'utente può selezionare vertici ausiliari per controllare la curvatura. Questi vertici possono essere indipendenti ![](/images/Draft_Point.svg)  [punti di Draft](/Draft_Point/it "Draft Point/it") o ![](/images/Part_Point.svg) [punti di Part](/Part_Point/it "Part Point/it"), o possono appartenere a qualsiasi bordo (linee rette o B-Splines) o essere un vertice in un oggetto solido. In questo caso, la superficie sarà vincolata a passare attraverso questi punti ausiliari.
* Premere Cancel o Esc per interrompere l'operazione corrente.

* In the **Vertex constraints** section non-boundary vertices can be specified:
  + The selection options are similar to those for boundary edges.

* Press Esc or the Cancel button to abort the operation.

## Example

The **Support surface** acts as an additional constraint for the surface. The following simple example will give you an idea how this works:

1. In the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench") create a ![](/images/Part_Cylinder.svg)[cylinder](/Part_Cylinder "Part Cylinder") and set its Dati**Angle** to `180°`.
2. Switch to the ![](/images/Workbench_Surface.svg) [Surface Workbench](/Surface_Workbench "Surface Workbench") and press the ![](/images/Surface_Filling.svg) [Filling](/Surface_Filling "Surface Filling") button.
3. Select the two semi-circular edges and the two straight edges that connect them.
4. The result matches the four boundary edges, but the inner shape is quite different from the cylindrical face.
5. Edit the Surface object and for the **Support surface** select the cylindrical face.
6. The modified shape matches the cylindrical face much more closely.

## Proprietà

Una Surface Filling (classe `Surface::Filling`) è derivato dalla base [Part Feature](/Part_Feature/it "Part Feature/it") (classe `Part::Feature`, attraverso la sottoclasse `Part::Spline`), quindi condivide tutte le proprietà di quest'ultima.

Oltre alle proprietà descritte in [Part Feature](/Part_Feature/it "Part Feature/it"), Surface Filling ha le seguenti proprietà nell'[editor delle proprietà](/Property_editor/it "Property editor/it").

### Dati

Filling

* Dati**Boundary Edges** (`LinkSubList`): bordi di confine; C0 è richiesto per i bordi senza una faccia corrispondente.
* Dati**Boundary Faces** (`StringList`):
* Dati**Boundary Order** (`IntegerList`): ordine di vincolo sulle facce del contorno; sono possibili `0`, `1`, e `2`.
* Dati**Unbound Edges** (`LinkSubList`): bordi di vincoli non legati; C0 è richiesto per i bordi senza una faccia corrispondente.
* Dati**Unbound Faces** (`StringList`):
* Dati**Unbound Order** (`IntegerList`): ordine di vincolo sulle facce non legate; sono possibili `0`, `1`, e `2`.
* Dati**Free Faces** (`LinkSubList`): vincolo su una faccia libera.
* Dati**Free Order** (`IntegerList`): ordine di vincolo sulle facce libere.
* Dati**Points** (`LinkSubList`): punti di vincolo sulla superficie.
* Dati**Initial Face** (`LinkSub`): superficie iniziale da utilizzare.
* Dati**Degree** (`Integer`): grado iniziale, il valore predefinito è `3`.
* Dati**Points On Curve** (`Integer`): numero di punti su un bordo per vincolarlo.
* Dati**Iterations** (`Integer`): numero di iterazioni, il valore predefinito è `2`.
* Dati**Anisotropy** (`Bool`): il valore predefinito è `false`.
* Dati**Tolerance2d** (`Float`): tolleranza 2D, il valore predefinito è `0.0`.
* Dati**Tolerance3d** (`Float`): tolleranza 3D, il valore predefinito è `0.0`.
* Dati**Tol Angular** (`Float`): tolleranza G1, il valore predefinito è `0.01`.
* Dati**Tol Curvature** (`Float`): tolleranza G2, il valore predefinito è `0.10`.
* Dati**Maximum Degree** (`Integer`): grado massimo della curva, il valore predefinito è `8`.
* Dati**Maximum Segments** (`Integer`): numero massimo di segmenti, il valore predefinito è `9`.

### Vista

Base

* Vista**Control Points** (`Bool`): il valore predefinito è `false`; se impostato su `true`, mostrerà una sovrapposizione con i punti di controllo della superficie.

## Script

*Vedere anche:* [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it")

Lo strumento Surface Filling può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") aggiungendo l'oggetto `Surface::Filling`.

* I bordi da utilizzare per definire la superficie devono essere assegnati come [LinkSubList](/FeaturePython_Custom_Properties/it#App::PropertyLinkSubList "FeaturePython Custom Properties/it") alla proprietà `BoundaryEdges` dell'oggetto.
* Gli spigoli ausiliari e i vertici devono essere assegnati come [LinkSubLists](/FeaturePython_Custom_Properties/it#App::PropertyLinkSubList "FeaturePython Custom Properties/it") alle proprietà `UnboundEdges` e `Points` dell'oggetto.
* Tutti gli oggetti con bordi devono essere calcolati prima di poter essere utilizzati come input per le proprietà dell'oggetto Filling.

```
import FreeCAD as App
import Draft

doc = App.newDocument()

a = App.Vector(-20, -20, 0)
b = App.Vector(-18, 25, 0)
c = App.Vector(60, 26, 0)
d = App.Vector(33, -20, 0)

points1 = [a, App.Vector(-20, -8, 0), App.Vector(-17, 7, 0), b]
obj1 = Draft.make_bspline(points1)

points2 = [b, App.Vector(0, 25, 0), c]
obj2 = Draft.make_bspline(points2)

points3 = [c, App.Vector(37, 4, 0), d]
obj3 = Draft.make_bspline(points3)

points4 = [d, App.Vector(-2, -18, 0), a]
obj4 = Draft.make_bspline(points4)
doc.recompute()

surf = doc.addObject("Surface::Filling", "Surface")
surf.BoundaryEdges = [(obj1, "Edge1"),
                      (obj2, "Edge1"),
                      (obj3, "Edge1"),
                      (obj4, "Edge1")]
doc.recompute()

# ---------------------------------------------------------
points_spl = [App.Vector(-10, 0, 2),
              App.Vector(4, 0, 7),
              App.Vector(18, 0, -5),
              App.Vector(25, 0, 0),
              App.Vector(30, 0, 0)]
aux_edge = Draft.make_bspline(points_spl)
doc.recompute()

surf.UnboundEdges = [(aux_edge, "Edge1")]
doc.recompute()

# ---------------------------------------------------------
aux_v1 = Draft.make_line(App.Vector(-13, -12, 5),
                         App.Vector(-13, -12, -5))
aux_v2 = Draft.make_line(App.Vector(-3, 18, 5),
                         App.Vector(-3, 18, -5))
doc.recompute()

surf.Points = [(aux_v1, "Vertex2"),
               (aux_v2, "Vertex1")]
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_Filling/it&oldid=1463800>"