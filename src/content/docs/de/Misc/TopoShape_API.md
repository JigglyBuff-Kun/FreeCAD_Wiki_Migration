---
title: TopoShape API/de
---
:::caution
(November 2018) Diese Information kann unvollständig und veraltet sein. Für die letzte API siehe die (engl.)autogenerierte API-Dokumentation.
:::

The TopoShape is the mother object of the Part Module. All shape types (wire, face, solid, etc...) of the Part module are TopoShapes, and share the following attributes and methods. Example:

```
import Part
sh = Part.makeBox(10,10,10)
print sh.Faces
for f in sh.Faces:
   print f.Edges

```

![](/images/Property.png) **Area**

**Returns**: The total area of the faces of the shape.

![](/images/Property.png) **BoundBox**

**Returns**: The BoundBox of the object

![](/images/Property.png) **CenterOfMass**

**Returns**: The center of mass of the current system. If the gravitational field is uniform, it is the center of gravity. The coordinates returned for the center of mass are expressed in the absolute Cartesian coordinate system.

![](/images/Property.png) **CompSolids**

**Returns**: Lists the subsequent shapes in this shape.

![](/images/Property.png) **Compounds**

**Returns**: Lists the coumpounds in this shape.

![](/images/Property.png) **Edges**

**Returns**: Lists the Edges in this shape.

![](/images/Property.png) **Faces**

**Returns**: Lists the faces in this shape.

![](/images/Property.png) **Length**

**Returns**: Total length of the edges of the shape.

![](/images/Property.png) **Matrix**

**Returns**: The current transformation of the object as matrix

![](/images/Property.png) **Orientation**

**Returns**: the orientation of the shape.

![](/images/Property.png) **Placement**

**Returns**: The current transformation of the object as placement

![](/images/Property.png) **ShapeType**

**Returns**: The type of the shape.

![](/images/Property.png) **Shells**

**Returns**: Lists the subsequent shapes in this shape.

![](/images/Property.png) **Solids**

**Returns**: List of subsequent shapes in this shape.

![](/images/Property.png) **Vertexes**

**Returns**: List of vertexes in this shape.

![](/images/Property.png) **Volume**

**Returns**: Total volume of the solids of the shape.

![](/images/Property.png) **Wires**

**Returns**: List of wires in this shape.

![](/images/Method.png) **approximate(****)**

**Description**: Approximates a B-Spline-curve from this wire

**Returns**: a BSplineCurve object

![](/images/Method.png) **check(****)**

**Description**: Checks the shape and report errors in the shape structure. This is a more detailed check as done in isValid().

**Returns**:

![](/images/Method.png) **common(***TopoShape***)**

**Description**: Intersection of this and a given topo shape.

**Returns**: a TopoShape

![](/images/Method.png) **complement(****)**

**Description**: Computes the complement of the orientation of this shape, i.e. reverses the interior/exterior status of boundaries of this shape.

**Returns**: a TopoShape

![](/images/Method.png) **copy(****)**

**Description**: Creates a copy of this shape

**Returns**: a TopoShape

![](/images/Method.png) **cut(***TopoShape***)**

**Description**: Difference of this and a given topo shape.

**Returns**: a TopoShape

![](/images/Method.png) **distToShape(** *TopoShape* **)**

**Description**: Calculates the minimum distance between this and a given TopoShape.

**Returns**: float<minimum distance>,list<nearest points>,list<nearest subshapes & parameters>

![](/images/Method.png) **exportBrep(** *string* **)**

**Description**: Exports the content of this shape to an BREP file. BREP is a CasCade native format.

**Returns**:

![](/images/Method.png) **exportIges(** *string* **)**

**Description**: Exports the content of this shape to an IGES file.

**Returns**:

![](/images/Method.png) **exportStep(** *string* **)**

**Description**: Exports the content of this shape to an STEP file.

**Returns**:

![](/images/Method.png) **exportStl(** *string* **)**

**Description**: Exports the content of this shape to an STL mesh file.

**Returns**:

![](/images/Method.png) **extrude(***Vector***)**

**Description**: Extrudes the shape along a direction.

**Returns**: a TopoShape

![](/images/Method.png) **fuse(***TopoShape***)**

**Description**: Union of this and a given topo shape.

**Returns**: a TopoShape

![](/images/Method.png) **getAllDerivedFrom(****)**

**Description**: Returns all descentences of this object type

**Returns**: a list

![](/images/Method.png) **hashCode(****)**

**Description**: This value is computed from the value of the underlying shape reference and the location. Orientation is not taken into account.

**Returns**: a string

![](/images/Method.png) **isClosed(****)**

**Description**: Checks if the shape is closed.

**Returns**: a boolean

![](/images/Method.png) **isDerivedFrom(***string***)**

**Description**: Returns true if given type is a father

**Returns**: boolean

![](/images/Method.png) **isEqual(***TopoShape***)**

**Description**: Returns true if both shapes share the same TShape, have the same Location and have the same Orientation.

**Returns**: a boolean

![](/images/Method.png) **isInside(***Vector,float,Boolean***)**

**Description**: Checks if a point is inside a solid with a certain tolerance. If the 3rd parameter is True a point on a face is considered as inside

**Returns**: a boolean

![](/images/Method.png) **isNull(****)**

**Description**: Checks if the shape is null.

**Returns**: a boolean

![](/images/Method.png) **isPartner(***TopoShape***)**

**Description**: Returns true if both shapes share the same TShape, but may have a different Location and may have a different Orientation.

**Returns**: a boolean

![](/images/Method.png) **isSame(***TopoShape***)**

**Description**: Checks if both shapes share the same geometry, true if both shapes share the same TShape, have the same Location but may have a different Orientation.

**Returns**: a boolean

![](/images/Method.png) **isValid(****)**

**Description**: Checks if the shape is valid, i.e. neither null, nor empty nor corrupted.

**Returns**: a boolean

![](/images/Method.png) **makeFillet(***float,TopoShape***)**

**Description**: Returns a new object based on TopoShape, but with a fillet of radius 'float' applied to each edge.

**Returns**: a TopoShape

![](/images/Method.png) **makeHomogenousWires(***wire***)**

**Description**: Makes this and the given wire homogenous to have the same number of edges

**Returns**: a wire

![](/images/Method.png) **makeOffset(***float***)**

**Description**: Offsets the shape by a given ammount

**Returns**: a TopoShape

![](/images/Method.png) **makePipe(***wire***)**

**Description**: Makes a pipe by sweeping along a wire.

**Returns**: a TopoShape

![](/images/Method.png) **makePipeShell(***wire***)**

**Description**: Makes a loft defined by profiles along a wire.

**Returns**: a TopoShape

![](/images/Method.png) **makeShapeFromMesh(***mesh***)**

**Description**: Makes a compound shape out of mesh data. Note: This should be used for rather small meshes only.

**Returns**: a TopoShape

![](/images/Method.png) **makeThickness(***list,float,float***)**

**Description**: A hollowed solid is built from an initial solid and a set of faces on this solid, which are to be removed. The remaining faces of the solid become the walls of the hollowed solid, their thickness defined at the time of construction. The arguments to be passed are a list of faces to be skipped, the thickness of the walls and a tolerance value.

**Returns**: a TopoShape

![](/images/Method.png) **nullify(****)**

**Description**: Destroys the reference to the underlying shape stored in this shape. As a result, this shape becomes null.

**Returns**:

![](/images/Method.png) **project(***TopoShape***)**

**Description**: Project a shape on this shape

**Returns**: a TopoShape

![](/images/Method.png) **read(***string***)**

**Description**: Reads in an IGES, STEP or BREP file.

**Returns**: a TopoShape

![](/images/Method.png) **reverse(****)**

**Description**: Reverses the orientation of this shape.

**Returns**:

![](/images/Method.png) **revolve(***Vector, Vector, float***)**

**Description**: Revolves the shape around a Axis to a given degree. ex: Part.revolve(Vector(0,0,0),Vector(0,0,1),360) revolves the shape around the Z Axis 360 degree.

**Returns**: a TopoShape

![](/images/Method.png) **rotate(***Vector<position>, Vector<direction>, float<angle>***)**

**Description**: Rotates this shape by angle degrees around an axis specified by position and direction. ex: Shp.rotate(Vector(0,0,0),Vector(0,0,1),180) rotate the shape around the Z Axis 180 degrees.

**Returns**:

![](/images/Method.png) **scale(***float<factor>, [Vector<centre>]***)**

**Description**: Uniformly scales this shape by factor. Optionally specify centre of scaling transformation.

**Returns**:

![](/images/Method.png) **section(***TopoShape***)**

**Description**: Section of this with a given topo shape.

**Returns**: a TopoShape

![](/images/Method.png) **sewShape(****)**

**Description**: Sews the shape if there is a gap.

**Returns**:

![](/images/Method.png) **tessellate(***float***)**

**Description**: Tessellate the the shape and return a list of vertices and face indices. The given float is the tolerance.

**Returns**: a list

![](/images/Method.png) **toNurbs(****)**

**Description**: Conversion of the complete geometry of a shape into NURBS geometry. For example, all curves supporting edges of the basis shape are converted into BSpline curves, and all surfaces supporting its faces are converted into BSpline surfaces.

**Returns**: a NURBS curve

![](/images/Method.png) **transformGeometry(***matrix***)**

**Description**: Applies geometric transformation on a copy of the shape. The transformation to be applied is defined as a 4x4 matrix. The underlying geometry of the following shapes may change to a curve which supports an edge of the shape, or a surface which supports a face of the shape. For example, a circle may be transformed into an ellipse when applying an affinity transformation. It may also happen that the circle then is represented as a b-spline curve. The transformation is applied to all the curves which support edges of the shape, and all the surfaces which support faces of the shape. Note: If you want to transform a shape without changing the underlying geometry then use the methods translate or rotate.

**Returns**: a TopoShape

![](/images/Method.png) **transformShape(***matrix***)**

**Description**: Applies transformation on a shape without changing the underlying geometry.

**Returns**:

![](/images/Method.png) **translate(***Vector***)**

**Description**: Applies the translation to the current location of this shape.

**Returns**:

![](/images/Method.png) **writeInventor(****)**

**Description**: Writes the mesh in OpenInventor format to a string.

**Returns**: a string

Some attributes and methods apply only to certain TopoShapes. These items apply to Edges (TopoShapeEdge).

![](/images/Property.png) **FirstParameter**

**Returns**: The parameter value at one end of the Edge. Not necessarily at Vertex[0]. [See Parametric Equations](http://en.wikipedia.org/wiki/Parametric_equations)

![](/images/Property.png) **LastParameter**

**Returns**: The parameter value at the other end of the Edge. Not necessarily at Vertex[1].

![](/images/Method.png) **getParameterByLength(***Float***)**

**Description**: Maps the interval [0,Length] to the interval [FirstParameter,LastParameter]

**Returns**: Float

![](/images/Method.png) **valueAt(***Float***)**

**Description**: Returns the 3D vector corresponding to a parameter value.

**Returns**: Vector

![](/images/Method.png) **parameterAt(***Vertex,[Face]***)**

**Description**: Returns the parameter value corresponding to a Vertex (3D point).

**Returns**: Float

![](/images/Method.png) **tangentAt(***Float***)**

**Description**: Returns the direction vector of the tangent to the edge at a parameter value (if it exists).

**Returns**: Vector

![](/images/Method.png) **normalAt(***Float***)**

**Description**: Returns the direction vector of the normal to the edge at a parameter value (if it exists uniquely).

**Returns**: Vector

![](/images/Method.png) **curvatureAt(***Float***)**

**Description**: Returns the curvature of the edge at a parameter value.

**Returns**: Float

![](/images/Method.png) **centerOfCurvatureAt(***Float***)**

**Description**: Returns the center (3D point) of the osculating circle at a parameter value.

**Returns**: Vector

Retrieved from "<http://wiki.freecad.org/index.php?title=TopoShape_API/de&oldid=632514>"