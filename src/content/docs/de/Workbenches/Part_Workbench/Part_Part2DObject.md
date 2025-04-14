---
title: Part Part2DObject
---

## Einführung

![](/images/Tree_Part2D.svg)

Ein Part Part2DObject, oder formal ein `Part::Part2DObject`, ist ein einfaches Element mit einer [topologischen Form](/Part_TopoShape/de "Part TopoShape/de"), das in der [3D-Ansicht](/3D_view/de "3D view/de") angezeigt werden kann.

Das `Part::Part2DObject` ist von dem [Part Formelement](/Part_Feature/de "Part Feature/de") abgeleitet, ist aber auf 2D-Geometrie spezialisiert, da seine Form auf einer Ebene liegen wird. Diese Ebene wird durch die Daten-Eigenschaft**Placement** definiert (Position, Normale und Rotation). Die Ebene kann aber auch durch unterstützende geometrische Elemente definiert werden, wie z.B. die Ebene, die durch drei beliebige Knoten erzeugt wird, oder eine Fläche eines Volumenkörpers.

![](/images/FreeCAD_core_objects.svg)

Vereinfachtes Diagramm der Beziehungen zwischen den Kernobjekten in FreeCAD

## Anwendung

Das Part2DObject ist ein internes Objekt, kann also nicht von der grafischen Oberfläche aus erzeugt werden, sondern nur von der [Python-Konsole](/Python_console/de "Python console/de"), wie im Abschnitt [Scripten](#Scripten) beschrieben.

Das `Part::Part2DObject` ist im Arbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de") festgelegt, kann aber als Basisklasse für [skriptgenerierte Objekte](/Scripted_objects/de "Scripted objects/de") in allen [Arbeitsbereichen](/Workbenches/de "Workbenches/de") die geometrische 2D-Formen erzeugen, verwendet werden. Beispielsweise ist sie das Basisobjekt für Skizzen ([Sketcher SketchObjekt](/Sketcher_SketchObject/de "Sketcher SketchObject/de")), und für die meisten Objekte, die mit dem Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de") erstellt werden.

Arbeitsbereiche können diesem Grundelement weitere Eigenschaften hinzufügen, um ein Objekt mit komplexem Verhalten zu erzeugen.

## Eigenschaften

Siehe [Eigenschaft](/Property/de "Property/de") für alle Eigenschaftstypen, die geskriptete Objekte haben können.

Das Part Part2DObjekt (Klasse `Part:: Part2DObject`) wird von einem [Part Formelement](/Part_Feature/de "Part Feature/de") (Klasse`Part::Feature`) abgeleitet und erbt alle seiner Eigenschaften.

Das Part Part2DObjekt hat außerdem die folgenden zusätzlichen Eigenschaften im [Eigenschafteneditor](/Property_editor/de "Property editor/de"). Ausgeblendete Eigenschaften können mit dem Befehl **Ausgeblendete anzeigen** im Kontextmenü des [Eigenschafteneditors](/Property_editor/de "Property editor/de") angezeigt werden.

### Daten

Attachment

- Daten (Hidden)**Attacher Type** (`String`): class name of the attach engine object driving the attachment. It defaults to `Attacher::AttachEnginePlane`.
- Daten**Support** (`LinkSubList`): it is the plane or face supporting the 2D geometry. It defaults to an empty list `[]`.
- Daten**Map Mode** (`Enumeration`): `Deactivated` by default. This property determines a plane which the object will use as reference for 2D geometry. Clicking on the ellipsis ... (three dots), to the right of the entry field starts the [Part EditAttachment](/Part_EditAttachment "Part EditAttachment") command that allows selecting the supporting plane by picking different elements in the [3D view](/3D_view "3D view"). The different modes are: `Deactivated`, `Translate origin`, `Object's XY`, `Object's XZ`, `Object's YZ`, `Plane face`, `Tangent to surface`, `Normal to edge`, `Frenet NB`, `Frenet TN`, `Frenet TB`, `Concentric`, `Revolution section`, `Plane by 3 points`, `Normal to 3 points`, `Folding`, `Inertia 2-3`, `Align O-N-X`, `Align O-N-Y`, `Align O-X-Y`, `Align O-X-N`, `Align O-Y-N`, `Align O-Y-X`.
- Daten**Map Reversed** (`Bool`): it defaults to `false`; if it is `true` the Z direction will be reversed. For example, a [sketch](/Sketch "Sketch") will be flipped upside down. Hidden if Daten**Map Mode** is `Deactivated`.
- Daten (Hidden)**Map Path Parameter** (`Float`): sets point of curve to map a [sketch](/Sketch "Sketch") to. It goes from `0` to `1`, which corresponds to the `start` and `end`. It defaults to `0`.
- Daten**Attachment Offset** (`Placement`): the position of the object in the [3D view](/3D_view "3D view"), with respect to the attachment object's placement. The placement is defined by a `Base` point (vector), and a `Rotation` (axis and angle). See [Placement](/Placement "Placement"). Hidden if Daten**Map Mode** is `Deactivated`.

## Skripten

_Siehe auch:_ [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de") und [Skriptgenerierte Objekte](/Scripted_objects/de "Scripted objects/de").

Siehe [Part Formelemente](/Part_Feature/de "Part Feature/de") zu allgemeinen Informationen über das Hinzufügen von Objekten zum Dokument.

Ein Teil2DObjekt wird mit der `addObject()` Methode des Dokuments erstellt.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::Part2DObject", "Name")
obj.Label = "Custom label"

```

Für [Python](/Python/de "Python/de")-Subclassing sollte ein `Part::Part2DObjectPython`-Objekt erstellt werden.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::Part2DObjectPython", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Part2DObject/de&oldid=1560880>"
