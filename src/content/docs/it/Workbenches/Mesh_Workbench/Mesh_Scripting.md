---
title: Script in ambiente Mesh
---
## Introduzione

Per accedere al modulo  `Mesh` devi prima importarlo:

```
import Mesh

```

## Creazione

Per creare un oggetto mesh vuoto basta usare il costruttore standard:

```
mesh = Mesh.Mesh()

```

Inoltre è possibile creare un oggetto da un file:

```
mesh = Mesh.Mesh("D:/temp/Something.stl")

```

Oppure crearlo tramite un gruppo di triangoli descritti dai loro vertici:

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

Il Kernel Mesh si occupa di creare una corretta struttura topologica dei dati individuando i punti e i bordi coincidenti.

[Inizio](#top)

## Modellazione

Per creare geometrie regolari è possibile utilizzare uno dei metodi `create*()`. Un toroide, ad esempio, può essere creato come segue:

```
m = Mesh.createTorus(8.0, 2.0, 50)
Mesh.show(m)

```

I primi due parametri definiscono i raggi del toro e il terzo parametro è un fattore di sub-campionamento che stabilisce quanti triangoli vengono creati. Maggiore è questo valore e più il corpo è liscio, più questo valore è piccolo e più il corpo è grossolano (sfaccettato).

Il modulo `Mesh` fornisce anche tre metodi Booleani: `union()`, `intersection()` e `difference()`:

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

Ecco un esempio che crea un tubo usando il metodo `difference()`:

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

[Inizio](#top)

## Note

Una nutrita (anche se difficile da usare) libreria di script riferiti a Mesh sono gli script dell'unita di test del Modulo Mesh. In questa unit test sono letteralmente chiamati tutti i metodi e sono ottimizzate tutte le proprietà e gli attributi. Quindi, se siete abbastanza coraggiosi, date un'occhiata al [modulo unit test](http://free-cad.svn.sourceforge.net/viewvc/free-cad/trunk/src/Mod/Mesh/App/MeshTestsApp.py?view=markup).

Vedere anche: [Mesh API](/Mesh_API/it "Mesh API/it").

[Inizio](#top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Scripting/it&oldid=1187320>"