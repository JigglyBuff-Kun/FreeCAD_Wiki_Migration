---
title: Part Skripten
---
## Einleitung

Die im Modul Part verwendete Hauptdatenstruktur ist der Datentyp [BRep](http://en.wikipedia.org/wiki/Boundary_representation) von [OpenCASCADE](/OpenCASCADE/de "OpenCASCADE/de").
Fast alle Inhalte und Objekttypen des Part Moduls stehen dem [Python](/Python/de "Python/de")-Skripten zur Verfügung. Dazu gehören geometrische Primitive wie Linien, Kreise, Bögen und die gesamte Palette der TopoFormen, wie Knoten, Kanten, Drähte, Flächen, Volumenkörper und Verbünde. Für jedes dieser Objekte gibt es mehrere Erstellungsmethoden, und für einige von ihnen, insbesondere die TopoFormen, sind auch fortgeschrittene Operationen wie Boolesche Vereinigung/Differenz/Überschneidung verfügbar. Entdecke den Inhalt des Moduls Part, wie auf der Seite [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de") beschrieben, um mehr zu erfahren.

Das grundlegendste Objekt, das erstellt werden kann, ist ein [Part Formelement](/Part_Feature/de "Part Feature/de"), das eine einfache Daten-Eigenschaft**Placement** und Grundeigenschaften hat, um seine Farbe und sein Aussehen zu definieren.

Ein weiteres einfaches Objekt, das in geometrischen 2D-Objekten verwendet wird, ist das [Part Part2DObjekt](/Part_Part2DObject/de "Part Part2DObject/de"), das die Basis des [Sketcher SketchObjects](/Sketcher_SketchObject/de "Sketcher SketchObject/de") und der meisten [Draft](/Draft_Workbench/de "Draft Workbench/de")-Elemente ist.

### Siehe auch

* [Topologisches Daten Skripten](/Topological_data_scripting/de "Topological data scripting/de")
* [OpenCASCADE](/OpenCASCADE/de "OpenCASCADE/de")

## Testskript

Teste die Erstellung von [Part Grundelementen](/Part_Primitives/de "Part Primitives/de") mit einem Skript.

```
import parttests.part_test_objects as pto
pto.create_test_file("example_file")

```

Dieses Skript befindet sich im Installationsverzeichnis des Programms und kann untersucht werden, um zu sehen, wie die Basisgrundelemente aufgebaut sind.

```
$INSTALL_DIR/Mod/Part/parttests/part_test_objects.py

```

## Beispiele

### Linie

Zum erstellen eines Linienelements schalte um zur [Python-Konsole](/Python_console/de "Python console/de") und gib ein:

```
import FreeCAD as App
import Part

doc = App.newDocument()

line = Part.LineSegment()
line.StartPoint = (0.0, 0.0, 0.0)
line.EndPoint = (1.0, 1.0, 1.0)
obj = doc.addObject("Part::Feature", "Line")
obj.Shape= line.toShape()

doc.recompute()

```

Das obige Python-Beispiel Schritt für Schritt betrachtet:

```
import FreeCAD as App
import Part
doc = App.newDocument()

```

Dies lädt die Module FreeCAD und Part und erstellt ein neues Dokument.

```
line = Part.LineSegment()
line.StartPoint = (0.0, 0.0, 0.0)
line.EndPoint = (1.0, 1.0, 1.0)

```

Line ist eigentlich eine Linienabschnitt, folglich der Anfangs- und Endpunkt.

```
obj = doc.addObject("Part::Feature", "Line")
obj.Shape= line.toShape()

```

Dies fügt dem Dokument ein Part-Objekt hinzu und weist die Formdarstellung des Liniensegments der Eigenschaft `Form` des hinzugefügten Objekts zu. Es ist hier wichtig zu verstehen, dass wir ein geometrisches Grundelement (das `Part.LineSegment`) verwenden, um daraus eine TopoForm zu erstellen (mit der Methode `toShape()`). Nur Formen können dem Dokument hinzugefügt werden. In FreeCAD werden geometrische Grundelemente als "Bauelemente" für Formen verwendet.

```
doc.recompute()

```

Aktualisiert das Dokument. Dies bereitet auch die visuelle Darstellung des neuen Part-Objekts auf.

Beachte, dass ein Linienabschnitt auch durch Angabe von Anfangs- und Endpunkt direkt im Konstruktor erstellt werden kann, z.B. `Part.LineSegment(point1, point2)`, oder wir können eine Standardlinie erstellen und ihre Eigenschaften im Nachhinein festlegen, wie wir es hier gemacht haben.

Eine Linie kann auch erstellt werden mit:

```
import FreeCAD as App
import Part

def my_create_line(pt1, pt2, obj_name):
    obj = App.ActiveDocument.addObject("Part::Line", obj_name)
    obj.X1 = pt1[0]
    obj.Y1 = pt1[1]
    obj.Z1 = pt1[2]

    obj.X2 = pt2[0]
    obj.Y2 = pt2[1]
    obj.Z2 = pt2[2]

    App.ActiveDocument.recompute()
    return obj

line = my_create_line((0, 0, 0), (0, 10, 0), "LineName")

```

### Kreis

Ein Kreis kann auf ähnliche Weise erstellt werden:

```
import FreeCAD as App
import Part

doc = App.activeDocument()

circle = Part.Circle() 
circle.Radius = 10.0  
obj = doc.addObject("Part::Feature", "Circle")
obj.Shape = circle.toShape()

doc.recompute()

```

Oder mit:

```
import FreeCAD as App
import Part

def my_create_circle(rad, obj_name):
    obj = App.ActiveDocument.addObject("Part::Circle", obj_name)
    obj.Radius = rad

    App.ActiveDocument.recompute()
    return obj

circle = my_create_circle(5.0, "CircleName")

```

Alternativ kann ein Kreis durch das Festlegen von Mittelpunkt, Achse und Radius:

```
import FreeCAD as App
import Part

doc = App.activeDocument()

center = App.Vector(1, 2, 3)
axis = App.Vector(1, 1, 1)
radius = 10
circle = Part.Circle(center, axis, radius)
obj = doc.addObject("Part::Feature", "Circle")
obj.Shape = circle.toShape()

doc.recompute()

```

Oder durch das Festlegen dreier Punkte auf seinem Umfang:

```
import FreeCAD as App
import Part

doc = App.activeDocument()

p1 = App.Vector(10, 0, 0)
p2 = App.Vector(0, 10, 0)
p3 = App.Vector(0, 0, 10)
circle = Part.Circle(p1, p2, p3)
obj = doc.addObject("Part::Feature", "Circle")
obj.Shape = circle.toShape()

doc.recompute()

```

Beachte wieder, wir verwendeten den Kreis (geometrisches Grundelement), um eine Form zu erstellen. Wir können natürlich weiterhin im Nachhinein auf unsere Konstruktionsgeometrie zugreifen, und zwar so:

```
shape = obj.Shape
edge = shape.Edges[0]
curve = edge.Curve

```

Hier nehmen wir die Form `Shape` unseres Objekts `obj` und dann seine Liste der Kanten `Edges`. In diesem Fall wird es nur eine Kante geben, weil wir die ganze Form aus einem einzelnen Kreis erstellt haben. So nehmen wir nur das erste Element der Liste der Kanten `Edges` und danach seine Kurve. Jede Kante hat eine Kurve `Curve`, die das geometrische Grundelement ist, auf dem die Kante basiert.

### Bogen

Ein Bogen kann auch so erstellt werden:

```
import FreeCAD as App
import Part

doc = App.activeDocument()

p1 = App.Vector(10, 0, 0)
p2 = App.Vector(0, 10, 0)
p3 = App.Vector(-10, 0, 0)
arc = Part.Arc(p1, p2, p3)
obj = doc.addObject("Part::Feature", "Arc")
obj.Shape = arc.toShape()

doc.recompute()

```

Dies zeichnet einen Halbkreis. Der Mittelpunkt liegt bei (0, 0, 0). Der Radius ist 10. P1 ist der Startpunkt auf der positiven X-Achse. P2 ist der Mittelpunktauf der positiven Y-Achse und P3 ist der Endpunkt auf der negativen X-Achse.

Ein Bogen kann auch aus einem Kreis erstellt werden:

```
import FreeCAD as App
import Part

doc = App.activeDocument()

p1 = App.Vector(10, 0, 0)
p2 = App.Vector(0, 10, 0)
p3 = App.Vector(-10, 0, 0)
circle = Part.Circle(p1, p2, p3)
arc = Part.ArcOfCircle(circle, 0.0, 0.7854)
obj = doc.addObject("Part::Feature", "Arc")
obj.Shape = arc.toShape()

doc.recompute()

```

Er benötigt einen Kreis sowie Start- und Endwinkel im Bogenmaß.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_scripting/de&oldid=1500102>"