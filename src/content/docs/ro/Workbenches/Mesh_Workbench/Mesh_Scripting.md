---
title: Script-Programare de Plase
---
### Introducere

Înainte de toate trebuie să importați un modul Mesh:

To get access to the `Mesh` module you have to import it first:

```
import Mesh

```

### Creație și Încărcare

Pentru a crea un obiectr vid Plasă utilizați construcția standard:

To create an empty mesh object just use the standard constructor:

```
mesh = Mesh.Mesh()

```

Puteți crea un obiect din fișierul

```
mesh = Mesh.Mesh("D:/temp/Something.stl")

```

Sau o creați dintr-un set de triunghiuri descris de către punctele de colț:

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

Mesh-Kernel are grijă de o structură topologică corectă a datelor prin sortare

```
împreună a punctelor și marginilor coincidente.

```

[Top](#top)

### Modelare

Pentru a crea geometrii obișnuite, puteți utiliza scriptul Python BuildRegularGeoms.py.

To create regular geometries you can use one of the `create*()` methods. A torus, for instance, can be created as follows:

```
m = Mesh.createTorus(8.0, 2.0, 50)
Mesh.show(m)

```

Primii doi parametri definesc razele toroidului, iar al treilea parametru este un factor de subeșantionare pentru câte triunghiuri sunt create. Cu cât această valoare este mai mare cu atât este mai lină și cu cât este mai groasă corpul.
Clasa Mesh oferă un set de funcții booleene care pot fi utilizate în scopuri de modelare. Oferă uniune, intersecție și diferență de două obiecte de plasă.

The `Mesh` module also provides three Boolean methods: `union()`, `intersection()` and `difference()`:

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

În cele din urmă, un exemplu complet al intersecției între o sferă și un cilindru care intersectează sfera.

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

[Top](#top)

### Odds and Ends

O extensie (deși greu de folosit) de scripting Mesh sunt script-urile de testare a Mesh-Module.
În această unitate se fac toate testele de compilare și sunt manipulate toate proprietățile și atributele.
Cine are curaj îndeajuns, poate privi la [Unit Test module](http://free-cad.svn.sourceforge.net/viewvc/free-cad/trunk/src/Mod/Mesh/App/MeshTestsApp.py?view=markup).

An extensive, though hard to use, source of mesh related scripting are the unit test scripts of the `Mesh` module.
In these unit tests literally all methods are called and all properties/attributes are tweaked.
So if you are bold enough, take a look at the [Unit Test module](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Mesh/App/MeshTestsApp.py).

See also [Mesh API](/Mesh_API "Mesh API")

[Top](#top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Scripting/ro&oldid=1021049>"