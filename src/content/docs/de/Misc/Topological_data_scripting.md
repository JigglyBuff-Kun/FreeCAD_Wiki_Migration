---
title: Topologische Daten skripten
---
## Einleitung

Hier wird erklärt, wie sich der Arbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de") direkt aus dem FreeCAD-Python-Interpreter oder aus einem externen Skript heraus steuern lässt. Unter [Skripten](/Scripting/de "Scripting/de") und [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de") finden sich weitere Informationen über die Funktionsweise von Python-Skripten in FreeCAD. Für Python-Anfänger ist es eine gute Idee, zuerst die [Einführung in Python](/Introduction_to_Python/de "Introduction to Python/de") zu lesen.

### Siehe auch

* [Part Skripten](/Part_scripting/de "Part scripting/de")
* [OpenCASCADE](/OpenCASCADE/de "OpenCASCADE/de")

## Klassendiagramm

Dies ist ein Überblick über die wesentlichen Klassen des Arbeitsbereichs Part in Form eines UML-Diagramms. Siehe [Unified Modeling Language](http://de.wikipedia.org/wiki/Unified_Modeling_Language) :

![Python-Klassen des Arbeitsbereichs Part](/images/Part_Classes.jpg)

Python-Klassen des Arbeitsbereichs Part

[Anfang](#top)

### Geometrie

Geometrische Objekte sind die Bausteine aller topologischen Objekte:

* **Geom** Basisklasse der geometrischen Objekte
* **Line** Eine gerade Linie im Raum, definiert durch den Start- und Endpunkt
* **Circle** Kreis oder Kreissegment, definiert durch einen Mittelpunkt sowie Start- und Endpunkt
* Usw.

[Anfang](#top)

### Topologie

Die folgenden topologischen Datentypen stehen zur Verfügung:

* **Compound** Eine Gruppe von beliebigen topologischen Objekten.
* **Compsolid** Ein zusammengesetzter Körper (composite solid) ist ein Satz (eine Menge) von Körpern, die über ihre Flächen verbunden sind. Dies erweitert das Konzept von WIRE and SHELL auf (Fest-)Körper (solids).
* **Solid** Ein Teil des (Konstruktion-)Raumes, der durch eine geschlossene Hülle begrenzt ist. Ein Solid (Festkörper) ist dreidimensional.
* **Shell** Hülle = Ein Satz (eine Menge) von über ihre Kanten verbundenen Flächen. Eine Hülle kann offen oder geschlossen sein.
* **Face** In 2D ist es ein Teil einer Ebene; in 3D ist es ein Teil einer Oberfläche (Trägerfläche). Die Form wird durch Konturen begrenzt (getrimmt). Ein Face (eine Fläche) ist zweidimensional (hat keine Wandstärke).
* **Wire** Ein Satz von über ihre Endpunkte verknüpften Kanten. Ein "Wire" kann eine offene oder geschlossene Form haben, je nach dem ob Start- und Endpunkt verbunden sind oder nicht.
* **Edge** Ein topologisches Element (Kante) das einer begrenzten Kurve entspricht. Eine Kante ist generell durch Knoten(-punkte) (Vertizes) begrenzt. Eine Kante (Edge) ist eindimensional (hat keine radiale Ausdehnung).
* **Vertex** Ein topologisches Element das einem (Knoten-)Punkt entspricht. Es ist nulldimensional.
* **Shape** (Form) ist der Oberbegriff für all die zuvor aufgezählten Elemente.

[Anfang](#top)

## Beispiel: Einfache Topologie erstellen

[![Linienzug (Wire)](/images/Wire.png)](/File:Wire.png  "Linienzug (Wire)")

Wir werden nun eine Topologie erstellen, indem wir sie aus einfacheren Geometrien zusammensetzen.
Als Beispiel verwenden wir ein Teil, wie im Bild zu sehen, das aus vier Knoten, zwei Kreisbögen und zwei Linien besteht.

[Anfang](#top)

### Geometrie erstellen

Zuerst werden die individuellen geometrischen Teile dieses Linienzuges (Wire) erstellt. Dabei wird darauf geachtet, dass die Teile, die später verbunden werden, dieselben Knoten verwenden.

Also erstellen wir zuerst die (Knoten-)Punkte (Vertices/Vertexes):

```
import FreeCAD as App
import Part
V1 = App.Vector(0, 10, 0)
V2 = App.Vector(30, 10, 0)
V3 = App.Vector(30, -10, 0)
V4 = App.Vector(0, -10, 0)

```

[Anfang](#top)

### Bogen

![Kreisbogen](/images/Circel.png)

Für jeden Kreisbogen benötigen wir einen Hilfspunkt:

```
VC1 = App.Vector(-10, 0, 0)
C1 = Part.Arc(V1, VC1, V4)
VC2 = App.Vector(40, 0, 0)
C2 = Part.Arc(V2, VC2, V3)

```

[Anfang](#top)

### Linie

![Linie](/images/Line.png)

Die Linienabschnitte können aus zwei Punkten erstellt werden:

```
L1 = Part.LineSegment(V1, V2)
L2 = Part.LineSegment(V3, V4)

```

[Anfang](#top)

### Alles zusammensetzen

Der letzte Schritt besteht darin, die geometrischen Basiselemente zusammenzusetzen und zu einer topologischen Form (Shape) zu vereinigen:

```
S1 = Part.Shape([C1, L1, C2, L2])

```

[Anfang](#top)

### Ein prismatisches Objekt erstellen

Jetzt wird der Linienzug in eine Richtung extrudiert und so eine wirkliche 3D-Form erstellt:

```
W = Part.Wire(S1.Edges)
P = W.extrude(App.Vector(0, 0, 10))

```

[Anfang](#top)

### Alles anzeigen

```
Part.show(P)

```

[Anfang](#top)

## Grundformen erstellen

Topologische Grundobjekte können ganz einfach mit den Methoden `make...()` aus dem Arbeitsbereich Part erstellen:

```
b = Part.makeBox(100, 100, 100)
Part.show(b)

```

Einige verfügbare `make...()` Methoden:

* `makeBox(l, w, h, [p, d])` Erstellt einen Quader, der sich in p befindet und in die Richtung d zeigt, mit den Abmessungen (l,w,h).
* `makeCircle(radius)` Erstellt einen Kreis mit einem gegebenen Radius.
* `makeCone(radius1, radius2, height)` Erstellt einen Kegel mit den gegebenen Radien und der Höhe.
* `makeCylinder(radius, height)` Erstellt einen Zylinder mit gegebenen Radius und Höhe.
* `makeLine((x1, y1, z1), (x2, y2, z2))` Erstellt eine Linie aus zwei Punkten.
* `makePlane(length, width)` Erstellt eine Ebene mit Länge und Breite.
* `makePolygon(list)` Erstellt ein Polygon aus einer Liste von Punkten.
* `makeSphere(radius)` Erstellt eine Kugel mit einem bestimmten Radius.
* `makeTorus(radius1, radius2)` Erstellt einen Torus mit den gegebenen Radien.

Siehe die Seite [Part API](/Part_API/de "Part API/de") oder diese [autogenerated Python Part API documentation](https://freecad-python-stubs.readthedocs.io/en/latest/autoapi/Part/) für eine vollständige Liste der verfügbaren Methoden des Arbeitsbereichs Part.

[Anfang](#top)

### Module Importieren

Zuerst müssen wir das FreeCAD-Modul und den Arbeitsbereich Part importieren, damit wir ihre Inhalte in Python verwenden können:

```
import FreeCAD as App
import Part

```

[Anfang](#top)

### Einen Vektor erstellen

[Vektoren](https://de.wikipedia.org/wiki/Vektor#Geometrie) gehören zu den wichtigsten Informationsbestandteilen beim Erstellen von Formen. Sie enthalten in der Regel (aber nicht zwangsläufig immer) drei Zahlen, die kartesischen Koordinaten x, y und z. Und so wird ein Vektor erstellt:

```
myVector = App.Vector(3, 2, 0)

```

Wir haben soeben einen Vektor mit den Koordinaten x = 3, y = 2, z = 0 erstellt. Im Arbeitsbereich Part werden Vektoren überall verwendet. Part-Formen verwenden auch eine andere Art von Punktdarstellung namens Knoten (Vertex), die einfach ein Behälter für einen Vektor ist. So greift man auf den Vektor eines Knoten zu:

```
myVertex = myShape.Vertexes[0]
print(myVertex.Point)
> Vector (3, 2, 0)

```

[Anfang](#top)

### Eine Kante erstellen

Eine Kante ist nichts anderes als eine Linie mit zwei Knoten:

```
edge = Part.makeLine((0, 0, 0), (10, 0, 0))
edge.Vertexes
> [<Vertex object at 01877430>, <Vertex object at 014888E0>]

```

Hinweis: Eine Kante kann auch durch Übergabe von zwei Vektoren erstellt werden:

```
vec1 = App.Vector(0, 0, 0)
vec2 = App.Vector(10, 0, 0)
line = Part.LineSegment(vec1, vec2)
edge = line.toShape()

```

So findet man die Länge und den Mittelpunkt einer Kante:

```
edge.Length
> 10.0
edge.CenterOfMass
> Vector (5, 0, 0)

```

[Anfang](#top)

### Die Form auf den Bildschirm bringen

Bisher haben wir ein Kantenobjekt erstellt, das aber nirgendwo auf dem Bildschirm erscheint. Das liegt daran, dass die FreeCAD-3D-Szene nur etwas anzeigt, wenn man ihr sagt, dass sie es anzeigen soll. Um das zu tun, verwenden wir folgende einfache Methode:

```
Part.show(edge)

```

Die Anzeigefunktion (.show) erzeugt ein Objekt in unserem FreeCAD-Dokument und weist ihm unsere Form "edge" zu. Sie wird verwendet, wenn es an der Zeit ist, das Erstellte auf dem Bildschirm anzuzeigen.

[Anfang](#top)

### Einen Draht erstellen

Ein Draht (Wire) ist eine Linie aus mehreren Kanten und kann aus einer Liste von Kanten oder sogar einer Liste von Drähten erstellt werden:

```
edge1 = Part.makeLine((0, 0, 0), (10, 0, 0))
edge2 = Part.makeLine((10, 0, 0), (10, 10, 0))
wire1 = Part.Wire([edge1, edge2]) 
edge3 = Part.makeLine((10, 10, 0), (0, 10, 0))
edge4 = Part.makeLine((0, 10, 0), (0, 0, 0))
wire2 = Part.Wire([edge3, edge4])
wire3 = Part.Wire([wire1, wire2])
wire3.Edges
> [<Edge object at 016695F8>, <Edge object at 0197AED8>, <Edge object at 01828B20>, <Edge object at 0190A788>]
Part.show(wire3)

```

`Part.show(wire3)` zeigt die 4 Kanten, die unseren Draht bilden (in der 3D-Ansicht) an. Weitere nützliche Informationen können leicht abgerufen werden:

```
wire3.Length
> 40.0
wire3.CenterOfMass
> Vector (5, 5, 0)
wire3.isClosed()
> True
wire2.isClosed()
> False

```

[Anfang](#top)

### Eine Fläche erstellen

Nur Flächen (Faces), die aus geschlossenen Drähten erstellt wurden, sind gültig. In diesem Beispiel ist wire3 ein geschlossener Draht, aber wire2 ist kein geschlossener Draht (siehe oben).

```
face = Part.Face(wire3)
face.Area
> 99.99999999999999
face.CenterOfMass
> Vector (5, 5, 0)
face.Length
> 40.0
face.isValid()
> True
sface = Part.Face(wire2)
sface.isValid()
> False

```

Nur Flächen haben einen Flächeninhalt (area), Drähte und Kanten haben keinen.

[Anfang](#top)

### Einen Kreis erstellen

So kann ein Kreis erstellt werden:

```
circle = Part.makeCircle(10)
circle.Curve
> Circle (Radius : 10, Position : (0, 0, 0), Direction : (0, 0, 1))

```

Wenn er an einer bestimmten Stelle und mit einer bestimmten Ausrichtung erstellt werden soll:

```
ccircle = Part.makeCircle(10, App.Vector(10, 0, 0), App.Vector(1, 0, 0))
ccircle.Curve
> Circle (Radius : 10, Position : (10, 0, 0), Direction : (1, 0, 0))

```

ccircle wird mit dem Abstand 10 vom X-Ursprung erstellt und ist nach außen entlang der X-Achse ausgerichtet. Hinweis: `makeCircle()` akzeptiert nur einen `App.Vector()` für die Position und normale Parameter, keine Tupel. Du kannst auch einen Teil des Kreises durch Angabe eines Anfangs- und eines Endwinkels erstellen:

```
from math import pi
arc1 = Part.makeCircle(10, App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0, 180)
arc2 = Part.makeCircle(10, App.Vector(0, 0, 0), App.Vector(0, 0, 1), 180, 360)

```

Winkel sollten in Grad angegeben werden. Liegt ein Wert in Bogenmaß vor, wird er einfach mit folgender Formel umgewandelt:
`Grad = Bogenmaß * 180/pi` oder mit Hilfe des Python-Moduls `math`:

```
import math
degrees = math.degrees(radians)

```

[Anfang](#top)

### Einen Bogen über Punkte erstellen

Leider gibt es keine Funktion `makeArc()`, aber wir haben die Funktion `Part.Arc()` um einen Bogen (Arc) durch drei Punkte zu erzeugen. Sie erzeugt ein Arc-Objekt, das den Startpunktes mit dem Endpunkt über den Mittelpunkt verbindet. Die Funktion `toShape()` des Arc-Objekts muss aufgerufen werden, um ein Edge-Objekt zu erhalten, wie bei der Verwendung von `Part.LineSegment` anstelle von `Part.makeLine`.

```
arc = Part.Arc(App.Vector(0, 0, 0), App.Vector(0, 5, 0), App.Vector(5, 5, 0))
arc
> <Arc object>
arc_edge = arc.toShape()
Part.show(arc_edge)

```

`Arc()` akzeptiert nur `App.Vector()` für Punkte, aber keine Tupel. Einen Bogen kann man auch durch Verwendung eines Kreisabschnitts erhalten:

```
from math import pi
circle = Part.Circle(App.Vector(0, 0, 0), App.Vector(0, 0, 1), 10)
arc = Part.Arc(circle,0,pi)

```

Bögen sind gültige Kanten wie Linien, so dass sie auch in Drähten verwendet werden können.

[Anfang](#top)

### Ein Vieleck erstellen

Ein Vieleck (Polygon) ist einfach ein Draht mit mehreren geraden Kanten. Die Funktion `makePolygon()` nimmt eine Liste von Punkten entgegen und erstellt einen Draht durch diese Punkte:

```
lshape_wire = Part.makePolygon([App.Vector(0, 5, 0), App.Vector(0, 0, 0), App.Vector(5, 0, 0)])

```

[Anfang](#top)

### Eine Bézier-Kurve erstellen

Bézier-Kurven werden verwendet, um weiche Kurven mit einer Reihe von Polen (Punkten) und optionalen Gewichten zu modellieren. Die folgende Funktion erstellt eine `Part.BezierCurve()` aus einer Reihe von `FreeCAD.Vector()` Punkten. (Hinweis: Soll ein einzelner Pol oder ein Gewicht mit "get" und "set" (-Methoden und Indizes) angesprochen werden, beginnen die Indizes bei 1, nicht bei 0.)

```
def makeBCurveEdge(Points):
   geomCurve = Part.BezierCurve()
   geomCurve.setPoles(Points)
   edge = Part.Edge(geomCurve)
   return(edge)

```

[Anfang](#top)

### Eine Ebene erstellen

Eine Ebene (Plane) ist eine ebene rechteckige Fläche. Die Methode, mit der eine Ebene erstellt wird, ist `makePlane(length, width, [start_pnt, dir_normal])`. Standardmäßig sind start\_pnt = Vektor(0, 0, 0) und dir\_normal = Vektor(0, 0, 1). Ist dir\_normal = Vector(0, 0, 1) wird eine Ebene, die in Richtung der positiven Z-Achse zeigt, erstellt, während dir\_normal = Vector(1, 0, 0) eine Ebene erzeugt, die in Richtung der positiven X-Achse zeigt:

```
plane = Part.makePlane(2, 2)
plane
> <Face object at 028AF990>
plane = Part.makePlane(2, 2, App.Vector(3, 0, 0), App.Vector(0, 1, 0))
plane.BoundBox
> BoundBox (3, 0, 0, 5, 0, 2)

```

`BoundBox` ist ein Quader, der die Ebene einschließt, mit einer Diagonale, die bei (3, 0, 0) beginnt und bei (5, 0, 2) endet. Hier ist die Ausdehnung der `BoundBox` entlang der Y-Achse Null, da unsere Form völlig eben ist.

Hinweis: `makePlane()` akzeptiert nur `App.Vector()` für start\_pnt und dir\_normal, nicht aber Tupel.

[Anfang](#top)

### Eine Ellipse erstellen

Es gibt mehrere Möglichkeiten, eine Ellipse zu erstellen:

```
Part.Ellipse()

```

Erzeugt eine Ellipse mit Hauptradius 2 und Nebenradius 1 mit dem Mittelpunkt bei (0,0,0).

```
Part.Ellipse(Ellipse)

```

Erstellt eine Kopie der angegebenen Ellipse.

```
Part.Ellipse(S1, S2, Center)

```

Erzeugt eine Ellipse, die auf den Punkt Mitte zentriert ist, an dem die Ebene der Ellipse definiert ist durch Mittelpunkt, S1 und S2, ihre Hauptachse definiert ist durch Mittelpunkt und S1, sein Hauptradius ist der Abstand zwischen Mittelpunkt und S1, und sein kleiner Radius ist der Abstand zwischen S2 und der Hauptachse.

```
Part.Ellipse(Center, MajorRadius, MinorRadius)

```

Erstellt eine Ellipse mit Haupt- und Nebenradien Hauptradius und Nebenradius,
die sich in der durch den Mittelpunkt definierten Ebene und der Normalen (0,0,1) befinden.

```
eli = Part.Ellipse(App.Vector(10, 0, 0), App.Vector(0, 5, 0), App.Vector(0, 0, 0))
Part.show(eli.toShape())

```

Im obigen Code haben wir S1, S2 und Mitte überschritten. Ähnlich wie `Arc`,
`Ellipse` erzeugt ein Ellipsenobjekt, aber keine Kante, also müssen wir es in eine Kante mit `toShape()` zur Anzeige konvertieren.

Hinweis: `Ellipse()` akzeptiert nur `App.Vector()` für Punkte, nicht aber für Tupel.

```
eli = Part.Ellipse(App.Vector(0, 0, 0), 10, 5)
Part.show(eli.toShape())

```

Für den obigen Ellipsenkonstruktor haben wir Mitte, HauptRadius und NebenRadius überschritten.

[Anfang](#top)

### Erstellen eines Torus

Verwende `makeTorus(radius1, radius2, [pnt, dir, Winkel1, Winkel2, Winkel])`.
Standardmäßig ist pnt = Vektor(0, 0, 0), dir = Vektor(0, 0, 1), Winkel1 = 0, Winkel2 = 360 und Winkel = 360.
Betrachte einen Torus als kleinen Kreis, der entlang eines großen Kreises verläuft. Radius1 ist der
Radius des großen Kreises, Radius2 ist der Radius des kleinen Kreises, pnt ist der Mittelpunkt
des Torus und dir ist die Normalenrichtung. winkel1 und winkel2 sind Winkel in
Grad für den kleinen Kreis; der letzte Winkelparameter besteht darin, einen Schnitt von
den Torus:

```
torus = Part.makeTorus(10, 2)

```

Der obige Code erzeugt einen Torus mit Durchmesser 20 (Radius 10) und Dicke 4
(kleiner Kreisradius 2)

```
tor=Part.makeTorus(10, 5, App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0, 180)

```

Der obige Code erzeugt eine Scheibe des Torus.

```
tor=Part.makeTorus(10, 5, App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0, 360, 180)

```

Der obige Code erzeugt einen Halbtorus; nur der letzte Parameter wird geändert.
d.h. die restlichen Winkel sind Standardwerte. Die Angabe des Winkels 180 bewirkt
den Torus von 0 bis 180, d.h. einen halben Torus, erzeugen.

[Anfang](#top)

### Kasten oder Quader erstellen

Verwendung von `makeBox(Länge, Breite, Höhe, [pnt, dir])`.
Standardmäßig werden pnt = Vektor(0, 0, 0) und dir = Vektor(0, 0, 1) verwendet.

```
box = Part.makeBox(10, 10, 10)
len(box.Vertexes)
> 8

```

[Anfang](#top)

### Erstelle eine Kugel

Mit `makeSphere(radius, [pnt, dir, winkel1, winkel2, winkel3])`. Standardmäßig
pnt = Vektor(0, 0, 0), dir = Vektor(0, 0, 1), Winkel1 = -90, Winkel2 = 90 und Winkel3 = 360. Winkel1 und Winkel2 sind das vertikale Minimum und Maximum der Kugel, Winkel3 ist der Kugeldurchmesser.

```
sphere = Part.makeSphere(10)
hemisphere = Part.makeSphere(10, App.Vector(0, 0, 0), App.Vector(0, 0, 1), -90, 90, 180)

```

[Anfang](#top)

### Erstellen eines Zylinders

Verwende `makeCylinder(Radius, Höhe, [pnt, dir, Winkel])`. Standardmäßig
pnt = Vektor(0, 0, 0), dir = Vektor(0, 0, 1) und Winkel = 360.

```
cylinder = Part.makeCylinder(5, 20)
partCylinder = Part.makeCylinder(5, 20, App.Vector(20, 0, 0), App.Vector(0, 0, 1), 180)

```

[Anfang](#top)

### Erstellen eines Kegels

Verwendung `makeCone(radius1, radius2, höhe, [pnt, dir, winkel])`. Standardmäßig
pnt = Vektor(0, 0, 0), dir = Vektor(0, 0, 1) und Winkel = 360.

```
cone = Part.makeCone(10, 0, 20)
semicone = Part.makeCone(10, 0, 20, App.Vector(20, 0, 0), App.Vector(0, 0, 1), 180)

```

[Anfang](#top)

## Formen ändern

Es gibt verschiedene Möglichkeiten, Formen zu ändern. Einige sind einfache Transformationsoperationen wie das Verschieben oder Drehen von Formen, andere sind komplexer, wie die Vereinigung und die Differenz, das
Subtrahieren einer Form von einer anderen.

[Anfang](#top)

## Transformationsvorgänge

### Verschieben einer Form

Verschieben ist das Bewegen einer Form von einem Ort zum anderen. Jede Form (Kante, Fläche, Würfel, usw...) kann auf die gleiche Weise verschoben werden:

```
myShape = Part.makeBox(2, 2, 2)
myShape.translate(App.Vector(2, 0, 0))

```

Dadurch wird die Form "myShape" um 2 Einheiten in X-Richtung verschoben.

[Anfang](#top)

### Drehen einer Form

Um eine Form zu drehen, muss ein Drehpunkt (auf der Achse), die (Ausrichtung der) Achse und der Drehwinkel angegeben werden:

```
myShape.rotate(App.Vector(0, 0, 0),App.Vector(0, 0, 1), 180)

```

Der obige Code dreht die Form um 180° um die Z-Achse.

[Anfang](#top)

### Matrix-Transformationen

Eine Matrix ist eine sehr bequeme Möglichkeit, in der 3D Welt Transformationen zu speichern. In einer einzigen Matrix können Werte für das Verschieben, Drehen und Skalieren festgelegt werden, die auf ein Objekt angewendet werden sollen. Zum Beispiel:

```
myMat = App.Matrix()
myMat.move(App.Vector(2, 0, 0))
myMat.rotateZ(math.pi/2)

```

Hinweis: FreeCAD-Matrizen arbeiten mit Bogenmaß. Außerdem können fast alle Matrix-Operationen die einen Vektor akzeptieren, auch drei Zahlen akzeptieren, so dass diese beiden Zeilen dasselbe tun:

```
myMat.move(2, 0, 0)
myMat.move(App.Vector(2, 0, 0))

```

Wenn unsere Matrix einmal festgelegt ist, können wir sie auf unsere Form anwenden. FreeCAD bietet zwei Methoden, um das zu tun: `transformShape()` und `transformGeometry()`. Der Unterschied ist, dass man bei der ersten sicher sein kann, dass keine Verformungen auftreten (siehe [Skalieren einer Form](#Skalieren_einer_Form) unten). Wir können unsere Transformation wie folgt anwenden:

```
myShape.transformShape(myMat)

```

oder

```
myShape.transformGeometry(myMat)

```

[Anfang](#top)

### Skalieren einer Form

Das Skalieren einer Form ist eine gefährlichere Operation, denn im Gegensatz zum Verschieben oder Drehen kann ungleichmäßiges Skalieren (mit unterschiedlichen Werten für X, Y und Z) die Struktur der Form verändern. Beispielsweise kann das Skalieren eines Kreises, mit einem höheren Wert für horizontal als für vertikal, ihn in eine Ellipse umwandeln, die sich mathematisch ganz anders verhält. Für das Skalieren kann `transformShape()` nicht verwendet werden, wir müssen `transformGeometry()` verwenden:

```
myMat = App.Matrix()
myMat.scale(2, 1, 1)
myShape=myShape.transformGeometry(myMat)

```

[Anfang](#top)

## Boolesche Operationen

### Differenz

Das Subtrahieren einer Form von einer anderen Form wird in FreeCAD "Differenz" genannt (engl. Cut), und so wird es gemacht:

```
cylinder = Part.makeCylinder(3, 10, App.Vector(0, 0, 0), App.Vector(1, 0, 0))
sphere = Part.makeSphere(5, App.Vector(5, 0, 0))
diff = cylinder.cut(sphere)

```

[Anfang](#top)

### Schnitt

Die Überschneidung zweier Formen, also das "gemeinsame" (engl. Common) Volumen, wird "Schnitt"(-objekt,) genannt, und so wird es gemacht:

```
cylinder1 = Part.makeCylinder(3, 10, App.Vector(0, 0, 0), App.Vector(1, 0, 0))
cylinder2 = Part.makeCylinder(3, 10, App.Vector(5, 0, -5), App.Vector(0, 0, 1))
common = cylinder1.common(cylinder2)

```

[Anfang](#top)

### Vereinigung

Das zusammenfügen von Formen wird "Vereinigung" genannt und funktioniert auf dieselbe Weise:

```
cylinder1 = Part.makeCylinder(3, 10, App.Vector(0, 0, 0), App.Vector(1, 0, 0))
cylinder2 = Part.makeCylinder(3, 10, App.Vector(5, 0, -5), App.Vector(0, 0, 1))
fuse = cylinder1.fuse(cylinder2)

```

[Anfang](#top)

### Schnittkurve

Eine "Schnittkurve" ist der Schnitt (der Hüllflächen) einer Festkörper-Form und einer ebenen Form. Rückgabeobjekt ist eine Schnittkurve, eine Verbundkurve, die aus Kanten besteht.

```
cylinder1 = Part.makeCylinder(3, 10, App.Vector(0, 0, 0), App.Vector(1, 0, 0))
cylinder2 = Part.makeCylinder(3, 10, App.Vector(5, 0, -5), App.Vector(0, 0, 1))
section = cylinder1.section(cylinder2)
section.Wires
> []
section.Edges
> [<Edge object at 0D87CFE8>, <Edge object at 019564F8>, <Edge object at 0D998458>, 
 <Edge  object at 0D86DE18>, <Edge object at 0D9B8E80>, <Edge object at 012A3640>, 
 <Edge object at 0D8F4BB0>]

```

[Anfang](#top)

### Extrusion

Extrusion ist das Bewegen einer flachen Form in eine bestimmte Richtung, und hat als Ergebnis einen Festkörper. Ein ungefüllter Kreis (circle) wird durch Verschieben zu einem Hohlzylinder (tube):

```
circle = Part.makeCircle(10)
tube = circle.extrude(App.Vector(0, 0, 2))

```

Ist der Kreis gefüllt, also eine Scheibe/Fläche (disc), erhält man einen Festkörper-Zylinder:

```
wire = Part.Wire(circle)
disc = Part.Face(wire)
cylinder = disc.extrude(App.Vector(0, 0, 2))

```

[Anfang](#top)

## Formen untersuchen

Du kannst die topologische Datenstruktur leicht erkunden:

```
import Part
b = Part.makeBox(100, 100, 100)
b.Wires
w = b.Wires[0]
w
w.Wires
w.Vertexes
Part.show(w)
w.Edges
e = w.Edges[0]
e.Vertexes
v = e.Vertexes[0]
v.Point

```

Durch tippen der obigen Zeilen in den Python Interpreter, erhälst du eine gutes Verständnis der Struktur von Teilobjekten. Hier hat unser `makeBox()` Befehl eine feste Form geschaffen. Dieser Volumenkörper enthält, wie alle Teil Volumenkörper, Flächen. Flächen enthalten immer Drähte, d.h. Listen von Kanten, die die Fläche begrenzen. Jede Fläche hat mindestens einen geschlossenen Draht (sie kann mehr haben, wenn die Fläche ein Loch hat). In dem Draht können wir jede Kante einzeln betrachten, und innerhalb jeder Kante können wir siehe die Eckpunkte. Gerade Kanten haben offensichtlich nur zwei Knoten.

[Anfang](#top)

### Kantenanalyse

Im Falle einer Kante, die eine willkürliche Kurve ist, ist es am wahrscheinlichsten, dass du
eine Diskretisierung durchführen möchtest. In FreeCAD werden die Kanten durch ihre Länge parametrisiert.
Das bedeutet, dass du eine Kante/Kurve anhand ihrer Länge entlang laufen kannst:

```
import Part
box = Part.makeBox(100, 100, 100)
anEdge = box.Edges[0]
print(anEdge.Length)

```

Jetzt kannst du auf viele Eigenschaften der Kante zugreifen, indem du die Länge als
Position verwendest. Das heißt, wenn die Kante 100 mm lang ist, ist die Startposition 0 und
die Endposition 100.

```
anEdge.tangentAt(0.0)          # tangent direction at the beginning
anEdge.valueAt(0.0)            # Point at the beginning
anEdge.valueAt(100.0)          # Point at the end of the edge
anEdge.derivative1At(50.0)     # first derivative of the curve in the middle
anEdge.derivative2At(50.0)     # second derivative of the curve in the middle
anEdge.derivative3At(50.0)     # third derivative of the curve in the middle
anEdge.centerOfCurvatureAt(50) # center of the curvature for that position
anEdge.curvatureAt(50.0)       # the curvature
anEdge.normalAt(50)            # normal vector at that position (if defined)

```

[Anfang](#top)

### Verwendung einer Auswahl

Hier sehen wir nun, wie wir eine Auswahl verwenden können, die der Benutzer im Betrachter getroffen hat. Zuerst erstellen wir einen Kasten und zeigen ihn im Betrachter an.

```
import Part
Part.show(Part.makeBox(100, 100, 100))
Gui.SendMsgToActiveView("ViewFit")

```

Wähle nun einige Flächen oder Kanten aus. Mit diesem Skript kannst du über alle ausgewählten Objekte und deren Unterelemente iterieren:

```
for o in Gui.Selection.getSelectionEx():
    print(o.ObjectName)
    for s in o.SubElementNames:
        print("name: ", s)
        for s in o.SubObjects:
            print("object: ", s)

```

Wähle einige Kanten aus und dieses Skript berechnet die Länge:

```
length = 0.0
for o in Gui.Selection.getSelectionEx():
    for s in o.SubObjects:
        length += s.Length

print("Length of the selected edges: ", length)

```

[Anfang](#top)

## Beispiel: Die OCC Flasche

Ein typisches Beispiel, das auf der [OpenCasCade Technology Website](https://www.opencascade.com/doc/occt-6.9.0/overview/html/occt__tutorial.html) zu finden ist, ist der Bau einer Flasche. Dies ist auch eine gute Übung für FreeCAD. Wenn du unserem Beispiel unten und der OCC-Seite gleichzeitig folgst, wirst du sehen, wie gut OCC Strukturen in FreeCAD implementiert sind. Das Skript ist in der FreeCAD Installation enthalten (innerhalb des Ordners Mod/Part) und kann vom Python Interpreter durch Eintippen aufgerufen werden:

```
import Part
import MakeBottle
bottle = MakeBottle.makeBottle()
Part.show(bottle)

```

[Anfang](#top)

### Das Skript=

Für die Zwecke dieses Tutoriums werden wir eine reduzierte Version des Skripts in Betracht ziehen. In dieser Version wird die Flasche nicht ausgehöhlt, und der Flaschenhals wird nicht mit einem Gewinde versehen.

```
import FreeCAD as App
import Part, math

def makeBottleTut(myWidth = 50.0, myHeight = 70.0, myThickness = 30.0):
    aPnt1=App.Vector(-myWidth / 2., 0, 0)
    aPnt2=App.Vector(-myWidth / 2., -myThickness / 4., 0)
    aPnt3=App.Vector(0, -myThickness / 2., 0)
    aPnt4=App.Vector(myWidth / 2., -myThickness / 4., 0)
    aPnt5=App.Vector(myWidth / 2., 0, 0)

    aArcOfCircle = Part.Arc(aPnt2, aPnt3, aPnt4)
    aSegment1=Part.LineSegment(aPnt1, aPnt2)
    aSegment2=Part.LineSegment(aPnt4, aPnt5)

    aEdge1=aSegment1.toShape()
    aEdge2=aArcOfCircle.toShape()
    aEdge3=aSegment2.toShape()
    aWire=Part.Wire([aEdge1, aEdge2, aEdge3])

    aTrsf=App.Matrix()
    aTrsf.rotateZ(math.pi) # rotate around the z-axis

    aMirroredWire=aWire.copy()
    aMirroredWire.transformShape(aTrsf)
    myWireProfile=Part.Wire([aWire, aMirroredWire])

    myFaceProfile=Part.Face(myWireProfile)
    aPrismVec=App.Vector(0, 0, myHeight)
    myBody=myFaceProfile.extrude(aPrismVec)

    myBody=myBody.makeFillet(myThickness / 12.0, myBody.Edges)

    neckLocation=App.Vector(0, 0, myHeight)
    neckNormal=App.Vector(0, 0, 1)

    myNeckRadius = myThickness / 4.
    myNeckHeight = myHeight / 10.
    myNeck = Part.makeCylinder(myNeckRadius, myNeckHeight, neckLocation, neckNormal)
    myBody = myBody.fuse(myNeck)

    return myBody

el = makeBottleTut()
Part.show(el)

```

[Anfang](#top)

### Detaillierte Erklärung

```
import FreeCAD as App
import Part, math

```

Wir benötigen natürlich das Modul `FreeCAD` und den Arbeitsbereich `Part`.

```
def makeBottleTut(myWidth = 50.0, myHeight = 70.0, myThickness = 30.0):
    aPnt1=App.Vector(-myWidth / 2., 0, 0)
    aPnt2=App.Vector(-myWidth / 2., -myThickness / 4., 0)
    aPnt3=App.Vector(0, -myThickness / 2., 0)
    aPnt4=App.Vector(myWidth / 2., -myThickness / 4., 0)
    aPnt5=App.Vector(myWidth / 2., 0, 0)

```

Hier definieren wir unsere `makeBottleTut` Funktion. Diese Funktion kann aufgerufen werden ohne
Argumente, wie wir es oben getan haben, in diesem Fall Standardwerte für Breite und Höhe, und Dicke verwendet werden. Dann definieren wir ein paar Punkte, die verwendet werden für den Aufbau unseres Basisprofils.

```
...
    aArcOfCircle = Part.Arc(aPnt2, aPnt3, aPnt4)
    aSegment1=Part.LineSegment(aPnt1, aPnt2)
    aSegment2=Part.LineSegment(aPnt4, aPnt5)

```

Hier definieren wir die Geometrie: einen Bogen, der aus drei Punkten besteht, und zwei Liniensegmente, die aus zwei Punkten bestehen.

```
...
    aEdge1=aSegment1.toShape()
    aEdge2=aArcOfCircle.toShape()
    aEdge3=aSegment2.toShape()
    aWire=Part.Wire([aEdge1, aEdge2, aEdge3])

```

Erinnerst du dich an den Unterschied zwischen Geometrie und Formen? Hier bauen wir Formen aus unserer Konstruktionsgeometrie. Drei Kanten (Kanten können gerade sein oder gebogen), dann einen Draht hergestellt aus diesen drei Kanten.

```
...
    aTrsf=App.Matrix()
    aTrsf.rotateZ(math.pi) # rotate around the z-axis

    aMirroredWire=aWire.copy()
    aMirroredWire.transformShape(aTrsf)
    myWireProfile=Part.Wire([aWire, aMirroredWire])

```

Bislang haben wir nur ein halbes Profil erstellt. Anstatt das ganze Profil zu bauen
Auf die gleiche Weise können wir einfach spiegeln, was wir getan haben, und beide Hälften zusammenkleben. Zuerst erstellen wir eine Matrix. Eine Matrix ist ein sehr gebräuchlicher Weg, um Transformationen auf Objekte in der 3D Welt anzuwenden, da sie in einer Struktur alle grundlegenden Transformationen, denen 3D Objekte unterzogen werden können (Verschieben, Drehen und Skalieren) enthalten. Nachdem wir die Matrix erstellt haben, spiegeln wir sie, dann erstellen wir eine Kopie unseres Drahtes und wenden die Transformationsmatrix darauf an. Wir haben jetzt zwei Drähte, und können wir einen dritten Draht aus ihnen machen, da Drähte eigentlich Listen von Kanten sind.

```
...
    myFaceProfile=Part.Face(myWireProfile)
    aPrismVec=App.Vector(0, 0, myHeight)
    myBody=myFaceProfile.extrude(aPrismVec)

    myBody=myBody.makeFillet(myThickness / 12.0, myBody.Edges)

```

Nun, da wir einen geschlossenen Draht haben, kann er in eine Fläche verwandelt werden. Sobald wir eine Fläche haben, können wir es extrudieren. Auf diese Weise machen wir einen Festkörper. Dann wenden wir eine schöne kleine Verrundung auf unser Objekt an, weil wir uns um gutes Design kümmern, nicht wahr?

```
...
    neckLocation=App.Vector(0, 0, myHeight)
    neckNormal=App.Vector(0, 0, 1)

    myNeckRadius = myThickness / 4.
    myNeckHeight = myHeight / 10.
    myNeck = Part.makeCylinder(myNeckRadius, myNeckHeight, neckLocation, neckNormal)

```

An diesem Punkt ist der Körper unserer Flasche hergestellt, aber wir müssen noch einen Hals schaffen. Wir stellen einen neuen Körper mit einem Zylinder her.

```
...
    myBody = myBody.fuse(myNeck)

```

Der Verschmelzungsoperation ist sehr leistungsstark. Sie kümmert sich um das Kleben, was geklebt werden muss, und entfernt Teile, die entfernt werden müssen.

```
...
    return myBody

```

Dann geben wir als Ergebnis unserer Funktion unseren Part Volumenkörper zurück.

```
el = makeBottleTut()
Part.show(el)

```

Schließlich rufen wir die Funktion auf, um das Teil tatsächlich zu erstellen und es dann sichtbar zu machen.

[Anfang](#top)

## Beispiel: Durchbohrter Quader

Hier ist ein vollständiges Beispiel für den Bau eines durchbohrten Quaders.

Der Aufbau erfolgt von einer Seite nach der anderen. Wenn der Würfel fertig ist, wird er durch das Durchschneiden eines Zylinders ausgehöhlt.

```
import FreeCAD as App
import Part, math

size = 10
poly = Part.makePolygon([(0, 0, 0), (size, 0, 0), (size, 0, size), (0, 0, size), (0, 0, 0)])

face1 = Part.Face(poly)
face2 = Part.Face(poly)
face3 = Part.Face(poly)
face4 = Part.Face(poly)
face5 = Part.Face(poly)
face6 = Part.Face(poly)
     
myMat = App.Matrix()

myMat.rotateZ(math.pi / 2)
face2.transformShape(myMat)
face2.translate(App.Vector(size, 0, 0))

myMat.rotateZ(math.pi / 2)
face3.transformShape(myMat)
face3.translate(App.Vector(size, size, 0))

myMat.rotateZ(math.pi / 2)
face4.transformShape(myMat)
face4.translate(App.Vector(0, size, 0))

myMat = App.Matrix()

myMat.rotateX(-math.pi / 2)
face5.transformShape(myMat)

face6.transformShape(myMat)               
face6.translate(App.Vector(0, 0, size))

myShell = Part.makeShell([face1, face2, face3, face4, face5, face6])   
mySolid = Part.makeSolid(myShell)

myCyl = Part.makeCylinder(2, 20)
myCyl.translate(App.Vector(size / 2, size / 2, 0))

cut_part = mySolid.cut(myCyl)

Part.show(cut_part)

```

[Anfang](#top)

## Laden und Speichern

Es gibt mehrere Möglichkeiten, deine Arbeit zu speichern. Du kannst natürlich dein FreeCAD Dokument speichern, aber Du kannst auch [Part](/Part_Workbench/de "Part Workbench/de") Objekte direkt in gängigen CAD Formaten wie BREP, IGS, STEP und STL speichern.

Das Speichern einer Form in einer Datei ist einfach. Es stehen die Methoden `exportBrep()`, `exportIges()`, `exportStep()` und `exportStl()` für alle Formobjekte zur Verfügung. Also, ausführen:

```
import Part
s = Part.makeBox(10, 10, 10)
s.exportStep("test.stp")

```

wird unseren Quader in eine STEP Datei gespeichert. Um eine BREP , IGES oder STEP Datei zu laden:

```
import Part
s = Part.Shape()
s.read("test.stp")

```

Um eine STEP Datei in eine IGS Datei umzuwandeln:

```
import Part
 s = Part.Shape()
 s.read("file.stp")       # incoming file igs, stp, stl, brep
 s.exportIges("file.igs") # outbound file igs

```

[Anfang](#top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Topological_data_scripting/de&oldid=1549653>"