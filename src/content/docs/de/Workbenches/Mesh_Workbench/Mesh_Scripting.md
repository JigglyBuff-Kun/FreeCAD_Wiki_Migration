---
title: Netz Skripten
---
## Einführung

Um Zugriff auf das Modul `Mesh` zu erhalten, musst du es zuerst importieren:

```
import Mesh

```

## Erstellung

Um ein leeres Netz Objekt zu erstellen, benutze einfach den Standard Konstruktor:

```
mesh = Mesh.Mesh()

```

Du kannst auch ein Objekt aus einer Datei erstellen:

```
mesh = Mesh.Mesh("D:/temp/Something.stl")

```

Oder erstelle es aus einer Reihe von durch ihre Eckpunkte beschriebenen Dreiecken:

```
triangles = [
# triangle 1
[-0.5000, -0.5000, 0.0000], [0.5000, 0.5000, 0.0000], [-0.5000, 0.5000, 0.0000],
#triangle 2
[-0.5000, -0.5000, 0.0000], [0.5000, -0.5000, 0.0000], [0.5000, 0.5000, 0.0000],
]
meshObject = Mesh.Mesh(triangles)
Mesh.show(meshObject)

```

Der Netz-Kernel kümmert sich um die Schaffung einer topologisch richtigen Datenstruktur, durch Sortieren deckungsgleicher Punkte und Kanten.

[Anfang](#top)

## Modellieren

Um regelmäßige Geometrien zu erstellen, kannst Du eine der `create*()` Methoden verwenden. Ein Torus kann zum Beispiel wie folgt erstellt werden:

```
m = Mesh.createTorus(8.0, 2.0, 50)
Mesh.show(m)

```

Die ersten beiden Parameter definieren die Radien des Torus und der dritte Parameter ist ein Teilabtastfaktor dafür, wie viele Dreiecke erzeugt werden. Je höher dieser Wert, desto glatter das Netz.

Das `Netz` Modul bietet auch drei boolesche Methoden: `vereinigen()`, `kreuzung()` und `differenz()`:

```
m1, m2              # are the input mesh objects
m3 = Mesh.Mesh(m1)  # create a copy of m1
m3.unite(m2)        # union of m1 and m2, the result is stored in m3
m4 = Mesh.Mesh(m1)
m4.intersect(m2)    # intersection of m1 and m2
m5 = Mesh.Mesh(m1)
m5.difference(m2)   # the difference of m1 and m2
m6 = Mesh.Mesh(m2)
m6.difference(m1)   # the difference of m2 and m1, usually the result is different to m5

```

Hier ist ein Beispiel, das eine Pipe mit der Methode `difference()` erstellt:

```
import FreeCAD, Mesh
cylA = Mesh.createCylinder(2.0, 10.0, True, 1.0, 36)
cylB = Mesh.createCylinder(1.0, 12.0, True, 1.0, 36)
cylB.Placement.Base = (FreeCAD.Vector(-1, 0, 0)) # move cylB to avoid co-planar faces
pipe = cylA
pipe = pipe.difference(cylB)
pipe.flipNormals() # somehow required
doc = FreeCAD.ActiveDocument
obj = d.addObject("Mesh::Feature", "Pipe")
obj.Mesh = pipe
doc.recompute()

```

[Anfang](#top)

## Hinweise

Eine umfangreiche, wenn auch schwer zu bedienende Quelle für auf Mesh bezogenes Skripten sind die Einheitstestkripte des `Mesh` Moduls.
In diesen Komponententests werden buchstäblich alle Methoden aufgerufen und alle Eigenschaften/Attribute optimiert.
Wenn Du also kühn genug bist, schau Dir das [Komponententestmodul](http://free-cad.svn.sourceforge.net/viewvc/free-cad/trunk/src/Mod/Mesh/App/MeshTestsApp.py?view=markup) an.

Siehe auch: [Mesh API](/Mesh_API/de "Mesh API/de")

[Anfang](#top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Scripting/de&oldid=1021048>"