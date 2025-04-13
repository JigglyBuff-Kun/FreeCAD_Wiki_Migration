---
title: Surface Sections
---
|  |
| --- |
| Surface Sections |
| Posizione nel menu |
| Surface → Sections |
| Ambiente |
| [Surface](/Surface_Workbench/it "Surface Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.19 |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Lo strumento ![](/images/Surface_Sections.svg) Surface Sections viene utilizzato per creare una superficie dai bordi che rappresentano sezioni trasversali di una superficie.

![](/images/Surface_Sections_edges_example.png) ![](/images/Surface_Sections_example.png)

A sinistra: i bordi di controllo (sezioni trasversali). A destra: la superficie prodotta da questi bordi.

## Utilizzo

1. Assicurarsii di avere almeno due bordi o curve nello spazio. Questi bordi possono essere creati con gli strumenti di ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/it "Draft Workbench/it") o di ![](/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it").
2. Premere il pulsante ![](/images/Surface_Sections.svg) Surface sections.
3. Premere Add edge.
4. Usare il puntatore per selezionare i bordi desiderati nella [vista 3D](/3D_view/it "3D view/it"); verrà visualizzata un'anteprima della forma finale dopo aver selezionato due bordi validi.
5. Premere OK per completare l'operazione.

## Opzioni

* Add edge: press once to start picking edges in the [3D view](/3D_view "3D view"). Individual lines such as ![](/images/Draft_BSpline.svg) [Draft BSplines](/Draft_BSpline "Draft BSpline") and ![](/images/Sketcher_CreateBSpline.svg) [Sketcher BSplines](/Sketcher_CreateBSpline "Sketcher CreateBSpline") can be chosen, as well as any edge from solid objects, like those of ![](/images/PartDesign_Body.svg) [PartDesign Bodies](/PartDesign_Body "PartDesign Body") and ![](/images/Part_Primitives.svg) [Part Primitives](/Part_Primitives "Part Primitives").
* Remove edge: press once to start picking edges in the [3D view](/3D_view "3D view"); these must be edges that were previously picked with Add edge.
* Right mouse button: open the context menu and select Remove, or press Del in the keyboard, to remove the currently selected edge in the list.
* **Drag**: drag the currently selected element in the list in order to change the order in which it will be processed; the list is processed from top to bottom.
* Press Cancel or Esc to abort the current operation.

## Proprietà

Una Surface Sections (classe `Surface::Sections`) è derivato dalla base [Part Feature](/Part_Feature/it "Part Feature/it") (classe `Part::Feature`, attraverso la sottoclasse `Part::Spline`), quindi condivide tutte le proprietà di quest'ultima.

Oltre alle proprietà descritte in [Part Feature](/Part_Feature/it "Part Feature/it"), Surface Sections ha le seguenti proprietà nell'[editor delle proprietà](/Property_editor/it "Property editor/it").

### Dati

Sections

* Dati**NSections** (`LinkSubList`): un elenco di bordi che verranno utilizzati per costruire la curva.

### Vista

Base

* Vista**Control Points** (`Bool`): il valore predefinito è `FALSE`; se impostato su `TRUE`, mostrerà una sovrapposizione con i punti di controllo della superficie.

## Twisting of the surface

The shape of the surface depends on the direction of the chosen edges; if edges are selected and the result is a surface that "twists" on itself, one of the edges may need its list of vertices in the reverse order. See the information in ![](/images/Surface_GeomFillSurface.svg) [GeomFillSurface](/Surface_GeomFillSurface "Surface GeomFillSurface") for a more complete explanation.

![](/images/Surface_twisting_example_smooth.png) ![](/images/Surface_twisting_example_twisted.png)

## Script

*Vedere anche:* [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it")

The Surface Sections tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by adding the `Surface::Sections` object.

* The edges to be used to define the surface must be assigned as a [LinkSubList](/FeaturePython_Custom_Properties#App::PropertyLinkSubList "FeaturePython Custom Properties") to the `NSections` property of the object.
* All objects with edges need to be computed before they can be used as input for the properties of the Sections object.

```
import FreeCAD as App
import Draft

doc = App.newDocument()

pl1 = App.Placement()
obj1 = Draft.make_circle(50, placement=pl1, face=False, startangle=0, endangle=180)

pl2 = App.Placement(App.Vector(0, 0, 25), App.Rotation())
obj2 = Draft.make_circle(30, placement=pl2, face=False, startangle=0, endangle=180)

points3 = [App.Vector(18, -10, 50),
           App.Vector(12, 10, 50),
           App.Vector(-12, 10, 50),
           App.Vector(-18, -10, 50)]
obj3 = Draft.make_bspline(points3)

points4 = [App.Vector(15, -20, 100),
           App.Vector(0, 6, 100),
           App.Vector(-15, -20, 100)]
obj4 = Draft.make_bspline(points4)
doc.recompute()

surf = doc.addObject("Surface::Sections", "Surface")
surf.NSections = [(obj1, "Edge1"),
                  (obj2, "Edge1"),
                  (obj3, "Edge1"),
                  (obj4, "Edge1")]
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_Sections/it&oldid=1516863>"