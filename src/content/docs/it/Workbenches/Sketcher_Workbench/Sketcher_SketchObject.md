---
title: Sketcher Oggetto schizzo
---
## Introduzione

![](/images/Sketcher_Sketch.svg)

Un Sketcher SketchObject, o formalmente un `Sketcher::SketchObject`, è l'elemento base per creare oggetti 2D con l'ambiente [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it").

`Sketcher::SketchObject` deriva da [Part Part2DObject](/Part_Part2DObject/it "Part Part2DObject/it"), il che significa che è un oggetto [Part Feature](/Part_Feature/it "Part Feature/it") specializzato per la geometria 2D. Come Part2DObject, anche SketchObject può essere collegato a piani e facce. Inoltre, SketchObject è in grado di gestire i vincoli geometrici delle linee e delle curve disegnate al suo interno.

![](/images/FreeCAD_core_objects.svg)

Diagramma semplificato delle relazioni tra gli oggetti principali in FreeCAD. La classe `Sketcher::SketchObject` è specializzata per le forme 2D e inoltre può gestire i vincoli.

## Utilizzo

See [Sketcher NewSketch](/Sketcher_NewSketch "Sketcher NewSketch").

## Proprietà

Vedere [Proprietà](/Property/it "Property/it") per tutti i tipi di proprietà che possono avere gli oggetti con script.

Un [Sketcher SketchObject](/Sketcher_SketchObject "Sketcher SketchObject") (classe `Sketcher::SketchObject`) deriva da un [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") (`Part::Part2DObject`), quindi condivide tutte le proprietà di quest'ultimo.

Oltre alle proprietà descritte in [Part Part2DObject](/Part_Part2DObject/it "Part Part2DObject/it"), il corpo di PartDesign ha le seguenti proprietà nell'[editor delle proprietà](/Property_editor/it "Property editor/it").

### Dati

Sketch

* Dati (Hidden)**Geometry** (`GeometryList`): a list of Part geometries that exist inside the sketch.
* Dati**Constraints**: named constraints, if they exist; otherwise it is an empty list `[]`.
* Dati**External Geometry** (`LinkSubList`): a list of Part geometries outside this Sketch that are used for reference.
* Dati (Hidden)**Fully Constrained** (`Bool`): (read-only) if `true` the sketch is fully constrained.

### Vista

Auto Constraints

* Vista**Autoconstraints**: se è `true` prova ad impostare i vincoli quando viene disegnata la geometria.

* Vista**Autoconstraints** (`Bool`): if `true` constraints are automatically added when geometry is drawn.
* Vista**Avoid Redundant** (`Bool`): if `true` redundant auto-constraints are avoided.

Grid

* Vista**Grid Auto** (`Bool`): if `true` the grid is resized based on the boundingbox of the geometry of the sketch.
* Vista**Grid Size** (`Length`): the size of the spacing of the local grid lines in the [3D view](/3D_view "3D view"); it defaults to `10 mm`.
* Vista**Show Grid** (`Bool`): if `true` a grid local to the object will be displayed in the [3D view](/3D_view "3D view"). This grid is independent of the [Draft Grid](/Draft_ToggleGrid "Draft ToggleGrid").

Visibility automation

Visibility automation

* Vista**Editing Workbench**: normalmente `SketcherWorkbench`, è il nome dell'ambiente da attivare durante la modifica dello schizzo.
* Vista**Hide Dependent**: se è `true` tutti gli oggetti che dipendono dallo schizzo vengono nascosti quando si apre lo schizzo.
* Vista**Restore Camera**: se è `true` la posizione della telecamera viene salvata prima di aprire lo schizzo e viene ripristinata quando lo si chiude.
* Vista**Show Links**: se è `true` tutti gli oggetti utilizzati nei collegamenti alla geometria esterna vengono visualizzati quando si apre lo schizzo.
* Vista**Show Support**: se è `true` tutti gli oggetti a cui è associato questo schizzo vengono mostrati quando si apre lo schizzo.

## Script

*Vedere anche:* [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it"), e [script di oggetti](/Scripted_objects/it "Scripted objects/it").

Vedere [Part Feature](/Part_Feature/it "Part Feature/it") per le informazioni generali.

Un oggetto Sketcher SketchObject viene creato con il metodo `addObject()` del documento.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Sketcher::SketchObject", "Sketch")
obj.Label = "Custom label"

```

For [Python](/Python "Python") subclassing you should create the `Sketcher::SketchObjectPython` object.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Sketcher::SketchObjectPython", "CustomSketch")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SketchObject/it&oldid=1417212>"