---
title: Creación y manipulación de la geometría
---

En los capítulos anteriores, hemos aprendido sobre los diferentes ambientes de trabajo de FreeCAD, y cómo cada uno de ellos implementa sus propias herramientas y tipos de geometría. El mismo concepto se aplica cuando se trabaja desde el código de Python.

También vimos que la gran mayoría de los ambientes de trabajo de FreeCAD dependen de uno muy fundamental: el [Ambiente de trabajo Pieza](/Part_Workbench/es "Part Workbench/es"). De hecho, muchos otros ambientes de trabajo, como [Borrador](/Draft_Workbench/es "Draft Workbench/es") y [Arquitectura](/Arch_Workbench/es "Arch Workbench/es"), hacen exactamente lo que haremos en este capítulo: usar código Python para crear y manipular la geometría de la Pieza.

Así que lo primero que tenemos que hacer para trabajar con la geometría Pieza, es hacer el equivalente en Python a cambiar al Ambiente de trabajo Pieza: importar el módulo Pieza:

```
import Part

```

Take a moment to explore the Part module by typing **Part.** in the Python console and browsing through the available methods and attributes in the autocomplete window. This is a great way to familiarize yourself with the functionality the module offers. You'll find a variety of convenient functions, such as makeBox and makeCircle, which allow you to quickly create geometric shapes and objects with just a single command. Many of these functions also offer optional parameters, giving you precise control over dimensions and placement.

Tómese un minuto para explorar el contenido del módulo Pieza, escribiendo Pieza. y navegando por los diferentes métodos disponibles. El módulo Pieza ofrece varias funciones convenientes como makeBox, makeCircle, etc... que construirán instantáneamente un objeto para usted. Pruebe esto, por ejemplo:

```
Part.makeBox(3,5,7)

```

Entrar en Cuando presione Entrar después de escribir la línea anterior, no aparecerá nada en la vista 3D, pero se imprimirá algo como esto en la consola de Python:

```
<Solid object at 0x5f43600>

```

Aquí es donde tiene lugar un concepto importante. Lo que hemos creado aquí es una forma de pieza. No es un objeto de documento de FreeCAD (todavía). En FreeCAD, los objetos y su geometría son independientes. Piensa en un objeto documento de FreeCAD como un contenedor, que albergará una forma. Los objetos paramétricos también tendrán propiedades como Longitud y Anchura, y **recalcularán** su Forma sobre la marcha, siempre que una de las propiedades cambie. Lo que hemos hecho aquí es calcular una forma manualmente.

Ahora podemos crear fácilmente un objeto de documento "genérico" en el documento actual (asegúrate de tener al menos un documento nuevo abierto), y darle una forma de caja como la que acabamos de hacer:

In this case, we manually created a shape using the **Part.makeBox()** function. This shape is a non-parametric object, meaning it won’t update automatically based on any properties—it is static unless we manipulate it programmatically. To make this shape part of the active FreeCAD document, it would need to be assigned to a document object (like a **Part::Feature**), which would link it to the graphical interface and make it visible and manageable within the FreeCAD environment.

Observe como manejamos miObj.Shape , note que se hace exactamente como lo hicimos en el capítulo anterior, cuando cambiamos otras propiedades de un objeto, como box.Height = 5 . De hecho, **Forma** también es una propiedad, al igual que **Altura'**. Sólo que toma una Forma Pieza, no un número. En el próximo capítulo veremos mejor cómo se construyen estos objetos paramétricos.

We can now easily create a "generic" document object in the current document (make sure you have at least one new document open), and give it a box shape like the one we just made:

```
boxShape = Part.makeBox(3,5,7)
myObj = FreeCAD.ActiveDocument.addObject("Part::Feature","MyNewBox")
myObj.Shape = boxShape
FreeCAD.ActiveDocument.recompute()

```

Here is a breakdown of the previous commands:

- **boxShape = Part.makeBox(3,5,7)**: Creates a 3D box with dimensions 3x5x7 (length, width, and height) and stores it as a Part Shape in the variable boxShape. This shape exists only in memory and is not yet part of the FreeCAD document.

- **myObj = FreeCAD.ActiveDocument.addObject("Part::Feature", "MyNewBox")**: Adds a new Part::Feature object named "MyNewBox" to the active FreeCAD document and assigns it to the variable myObj. The new object will appear in the FreeCAD document tree.

- **myObj.Shape = boxShape**: Links the boxShape geometry to the Shape property of myObj, integrating the geometry into the FreeCAD document.

- **FreeCAD.ActiveDocument.recompute()**: Updates the document to reflect the changes, ensuring that the new object and its geometry appear in the graphical interface.

Note how we handled **myObj.Shape**. It was done in the same way as in the previous chapter, where we changed other properties of an object, such as **box.Height = 5**. In fact, **Shape** is also a property, just like **Height**. However, instead of taking a number, **Shape** requires a Part Shape. In the next chapter, we will take a closer look at how these parametric objects are constructed.

Por ejemplo, vamos a encontrar el área de cada cara de nuestra forma de caja anterior:

- **Vertexes**: Points in 3D space that define the corners or endpoints of geometry.
- **Edges**: Straight or curved lines connecting two vertexes.
- **Wires**: Closed or open loops formed by one or more connected edges.
- **Faces**: Surfaces enclosed by one or more wires.
- **Shells**: Groups of connected faces, forming a continuous surface.
- **Solids**: 3D volumes enclosed by one or more shells.

All of these attributes are represented as lists in Python. Each list can contain any number of elements or be empty, depending on the shape being explored. For example, a box will have eight **Vertexes**, twelve **Edges**, six **Faces**, one **Shell**, and one **Solid**, while a line will only have two **Vertexes** and one **Edge**, with all other attributes being empty. These components are fundamental building blocks of Part geometry and can be accessed and manipulated programmatically. Understanding how they interact provides powerful control over the creation and modification of 3D models. We can access those lists as follows:

```
print(boxShape.Vertexes)
print(boxShape.Edges)
print(boxShape.Wires)
print(boxShape.Faces)
print(boxShape.Shells)
print(boxShape.Solids)

```

O, para cada arista, su punto inicial y su punto final:

```
for f in boxShape.Faces:
   print(f.Area)

```

Or, for each edge, its start point and end point:

```
for e in boxShape.Edges:
   print("New edge")
   print("Start point:")
   print(e.Vertexes[0].Point)
   print("End point:")
   print(e.Vertexes[1].Point)

```

Como ves, si nuestra boxShape tiene un atributo "Vértices", cada arista de la boxShape también tiene un atributo "Vértices". Como podemos esperar, la boxShape tendrá 8 vértices, mientras que la arista sólo tendrá 2, que son ambos parte de la lista de 8.

Siempre podemos comprobar cuál es el tipo de una forma:

```
print(boxShape.ShapeType)
print(boxShape.Faces[0].ShapeType)
print(boxShape.Vertexes[2].ShapeType)

```

Here is a short explanation of the above commands:

- **print(boxShape.ShapeType)**: Displays the type of the top-level shape represented by **boxShape**. In this case, since **boxShape** was created as a box using **Part.makeBox**, the output will be "Solid", indicating that the shape is a 3D solid object.

- **print(boxShape.Faces[0].ShapeType)**: Accesses the first face in the **Faces** list of **boxShape** (index 0) and prints its shape type. For a box, each face is a flat surface, so the output will be "Face".

- **print(boxShape.Vertexes[2].ShapeType)**: Accesses the third vertex in the **Vertexes** list of **boxShape** (index 2) and prints its shape type. Since this is a specific point in 3D space, the output will be "Vertex".

Así que para retomar el tema de las Formas Pieza: Todo comienza con los vértices. Con uno o dos vértices, se forma una Arista (los círculos completos sólo tienen un vértice). Con una o más aristas, se forma un hilo. Con uno o más hilos cerrados, se forma una cara (los hilos adicionales se convierten en "agujeros" en la cara). Con una o más Caras, se forma una Cáscara. Cuando una carcasa está completamente cerrada (hermética), se puede formar un sólido a partir de ella. Y, por último, se puede unir cualquier número de formas de cualquier tipo, lo que se denomina un compuesto.

Ahora podemos intentar crear formas complejas desde cero, construyendo todos sus componentes uno a uno. Por ejemplo, intentemos crear un volumen como éste:

![](/images/Exercise_python_03.jpg)

Empezaremos creando una forma plana como ésta:

![](/images/Wire.png)

En primer lugar, vamos a crear los cuatro puntos base:

```
V1 = FreeCAD.Vector(0,10,0)
V2 = FreeCAD.Vector(30,10,0)
V3 = FreeCAD.Vector(30,-10,0)
V4 = FreeCAD.Vector(0,-10,0)

```

Entonces podemos crear los dos segmentos lineales:

![](/images/Line.png)

```
L1 = Part.LineSegment(V1,V2)
L2 = Part.LineSegment(V4,V3)

```

Ten en cuenta que no necesitamos crear Vértices. Podríamos crear inmediatamente Part.LineSegments a partir de los Vectores de FreeCAD. Esto se debe a que aquí no hemos creado aristas todavía. Un segmento de línea de pieza (al igual que un círculo de pieza, un arco de pieza, una elipse de pieza o una curva de pieza) no crea una arista, sino una geometría base sobre la que se creará una arista. Las aristas siempre se crean a partir de dicha geometría base, que se almacena en su atributo Curva. Así que si tiene una Arista, haciendo:

```
print(Edge.Curve)

```

te mostrará qué tipo de arista es, es decir, si está basada en una línea, en un arco, etc... Pero volvamos a nuestro ejercicio, y construyamos los segmentos de arco. Para esto, necesitaremos un tercer punto, así que podemos usar el conveniente Part.Arc, que toma 3 puntos:

![](/images/Circel.png)

```
VC1 = FreeCAD.Vector(-10,0,0)
C1 = Part.Arc(V1,VC1,V4)
VC2 = FreeCAD.Vector(40,0,0)
C2 = Part.Arc(V2,VC2,V3)

```

Ahora tenemos 2 líneas (L1 y L2) y 2 arcos (C1 y C2). Tenemos que convertirlos en aristas:

```
E1 = Part.Edge(L1)
E2 = Part.Edge(L2)
E3 = Part.Edge(C1)
E4 = Part.Edge(C2)

```

Alternativamente, las geometrías base también tienen una función toShape() que hace exactamente lo mismo:

```
E1 = L1.toShape()
E2 = L2.toShape()
 ...

```

Una vez que tenemos una serie de Aristas, ahora podemos formar un Hilo, dándole una lista de Aristas. Debemos tener en cuenta el orden.

```
W = Part.Wire([E1,E4,E2,E3])

```

Y podemos comprobar si nuestro hilo se ha entendido correctamente, y que está correctamente cerrado:

```
print( W.isClosed() )

```

Que imprimirá "Verdadero" o "Falso". Para hacer una Cara, necesitamos Hilos cerrados, por lo que siempre es una buena idea comprobarlo antes de crear la Cara. Ahora podemos crear una Cara, dándole un solo Alambre (o una lista de Alambres si queremos agujeros):

```
F = Part.Face(W)

```

Entonces lo extruimos:

```
P = F.extrude(FreeCAD.Vector(0,0,10))

```

Tenga en cuenta que P ya es un sólido:

```
print(P.ShapeType)

```

Esto se debe a que cuando extruimos una sola Cara, siempre obtenemos un Sólido. Este no sería el caso, por ejemplo, si hubiéramos extruido el Hilo en su lugar:

```
S = W.extrude(FreeCAD.Vector(0,0,10))
print(S.ShapeType)

```

Lo que, por supuesto, nos dará una carcasa hueca, a la que le faltan las caras superior e inferior.

Ahora que tenemos nuestra forma final, estamos ansiosos por verla en pantalla. Así que vamos a crear un objeto genérico, y asignarle nuestro nuevo Sólido:

```
myObj2 = FreeCAD.ActiveDocument.addObject("Part::Feature","My_Strange_Solid")
myObj2.Shape = P
FreeCAD.ActiveDocument.recompute()

```

Como alternativa, el módulo Pieza también proporciona un acceso directo que realiza la operación anterior más rápidamente (pero no se puede elegir el nombre del objeto):

```
Part.show(P)

```

Todo lo anterior, y mucho más, se explica en detalle en la página [Guionización Pieza](/Topological_data_scripting/es "Topological data scripting/es"), junto con ejemplos.

**Leer más**

- [El ambiente de trabajo Pieza](/Part_Workbench/es "Part Workbench/es")
- [Guionización Pieza](/Topological_data_scripting/es "Topological data scripting/es")

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:Creating_and_manipulating_geometry/es&oldid=1521730>"
